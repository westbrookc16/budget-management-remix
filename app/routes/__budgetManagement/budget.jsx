import { json, redirect } from "@remix-run/node";
import {
  Form,
  useLoaderData,
  useSearchParams,
  useTransition,
} from "@remix-run/react";

import { supabaseAdmin } from "~/services/supabase.server";
import { getAccessToken } from "~/policies/authenticated.server";
import authenticated from "~/policies/authenticated.server";

export async function action({ request }) {
  await authenticated(
    request,
    async (user) => {
      const data = await request.formData();
      const id = data.get("id");
      const income = data.get("income");
      const user_id = data.get("user_id");

      const month = data.get("month");
      const year = data.get("year");
      console.log(`year=${year}`);
      if (id === "-1") {
        console.log("insert");
        await supabaseAdmin.from("budgets").insert({
          month,
          year,
          user_id,
          income,
        });
      } else {
        console.log("update");
        supabaseAdmin.auth.setAuth(await getAccessToken(request));
        await supabaseAdmin.from("budgets").update({ income }).match({ id });
      }
    },
    () => {
      throw new Response("unauthorized", { status: 401 });
    }
  );
  return null;
}
export async function loader({ request }) {
  const url = new URL(request.url);
  const month = url.searchParams.get("month");
  const year = url.searchParams.get("year");
  if (month === null || year === null) {
    return redirect(
      `/budget?month=${
        new Date().getMonth() + 1
      }&year=${new Date().getFullYear()}`
    );
  }
  //get user id
  const accessToken = await getAccessToken(request);

  supabaseAdmin.auth.setAuth(accessToken);
  const { data, error } = await supabaseAdmin
    .from("budgets")
    .select()
    .match({ month, year });
  console.log(error);
  if (!data || data?.length === 0) {
    return json({ id: -1, month, year, income: 0, user_id: "" });
  } else {
    return json(data[0]);
  }
}

//}
export default function Budget() {
  const [searchParams] = useSearchParams();
  const transition = useTransition();
  const { income, id, user_id } = useLoaderData();

  const month = searchParams.get("month");
  const year = searchParams.get("year");
  //const id = searchParams.get("id");
  return (
    <div>
      <Form method="get">
        <label htmlFor="month">Month</label>
        <select defaultValue={month} id="month" name="month">
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
          <option value="4">Apr</option>
          <option value="5">May</option>
          <option value="6">Jun</option>
          <option value="7">Jul</option>
          <option value="8">Aug</option>
          <option value="9">Sep</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>
        <br />
        <label htmlFor="year">Year</label>

        <select id="year" name="year" defaultValue={year}>
          <option>2022</option>
          <option>2023</option>
        </select>
        <button type="submit" name="_action" value="select">
          Select
        </button>
      </Form>
      <Form method="post">
        <input type="hidden" name="id" value={id} />
        <label htmlFor="income">Income</label>
        <input id="income" type="text" name="income" defaultValue={income} />
        <button
          type="submit"
          _action="update"
          disabled={transition.state === "submitting"}
          aria-live="polite"
        >
          Update
        </button>
        <input type="hidden" name="user_id" value={user_id} />
        <input type="hidden" name="month" value={month} />
        <input type="hidden" name="year" value={year} />
      </Form>
      <a href={`categories/${id}`}>View/Edit Categories</a>
    </div>
  );
}
