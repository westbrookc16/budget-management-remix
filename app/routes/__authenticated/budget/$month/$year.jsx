import { json, redirect } from "@remix-run/node";
import {
  Form,
  useLoaderData,
  useSearchParams,
  useTransition,
} from "@remix-run/react";

import { supabaseAdmin } from "~/services/supabase.server";
import { getUserByAccessToken } from "~/api/supabase-auth.server";
import { getAccessToken } from "~/policies/authenticated.server";
import authenticated from "~/policies/authenticated.server";
import useUser from "~/hooks/useUser";
export async function action({ request }) {
  return authenticated(
    request,
    async (user) => {
      const data = await request.formData();
      const id = data.get("id");
      const income = data.get("income");

      const { user_id } = user;
      const _action = data.get("_action");
      const month = data.get("month");
      const year = data.get("year");
      console.log(`year=${year}`);
      if (_action === "select") {
        console.log(`select`);
        return redirect(`/budget/${month}/${year}`);
      }
      supabaseAdmin.auth.setAuth(await getAccessToken(request));
      if (id === "-1") {
        console.log("insert");
        const { error } = await supabaseAdmin.from("budgets").insert({
          month,
          year,
          user_id,
          income,
        });
        console.log(`insertError=${error}`);
      } else {
        console.log("update");
        supabaseAdmin.auth.setAuth(await getAccessToken(request));
        await supabaseAdmin.from("budgets").update({ income }).match({ id });
      }
      return null;
    },
    () => {
      throw new Response("unauthorized", { status: 401 });
    }
  );
}
export async function loader({ request, params }) {
  //console.log(`url=${url}`);
  let { month, year } = params;

  if (month === null) {
    //get data from form
    console.log("bad error.");
    return null;
  }

  /*if (month === null || year === null) {
    return redirect(
      `/budget?month=${
        new Date().getMonth() + 1
      }&year=${new Date().getFullYear()}`
    );
  }*/
  //get user id
  const accessToken = await getAccessToken(request);

  supabaseAdmin.auth.setAuth(accessToken);
  const { data, error } = await supabaseAdmin
    .from("budgets")
    .select()
    .match({ month, year });
  console.log(data);
  console.log(`selectError=${JSON.stringify(error, null, 2)}`);
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
  const { income, id, user_id, month, year } = useLoaderData();

  //const id = searchParams.get("id");
  return (
    <div>
      <Form method="post">
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
        <button
          type="submit"
          name="_action"
          value="select"
          aria-live="polite"
          disabled={transition.state !== "idle"}
        >
          {transition.state === "idle" ? `Select` : `Loading`}
        </button>
      </Form>
      <Form method="post" replace>
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
      {id > 0 && <a href={`/categories/${id}`}>View/Edit Categories</a>}
    </div>
  );
}
