import { json, redirect } from "@remix-run/node";

import {
  Form,
  useActionData,
  useLoaderData,
  useSubmit,
  useTransition,
} from "@remix-run/react";
import { useRef } from "react";
import { supabaseAdmin } from "~/services/supabase.server";
//import { getUserByAccessToken } from "~/api/supabase-auth.server";
import { getAccessToken } from "~/policies/authenticated.server";
import authenticated from "../../../../policies/authenticated.server";

import { useEffect, useState } from "react";
export function meta() {
  return { title: "Budget Management|Main Console" };
}
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

      if (_action === "Select") {
        return redirect(`/budget/${month}/${year}`);
      }
      const errors = {};
      if (isNaN(income.replace("$", "").replace(",", ""))) {
        errors.income = "Your income must be a number";
      }
      if (Object.keys(errors).length > 0) {
        return { errors };
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
        if (error) {
          return json({ error: error.message });
        }
        return json({ success: "Row Inserted Successfully." });
      } else {
        supabaseAdmin.auth.setAuth(await getAccessToken(request));
        const { error } = await supabaseAdmin
          .from("budgets")
          .update({ income })
          .match({ id });

        if (error) {
          return json({ error: error.message });
        }
        return json({ success: "Row Inserted Successfully." });
      }
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
    console.log("bad error.");
    return null;
  }

  const accessToken = await getAccessToken(request);

  supabaseAdmin.auth.setAuth(accessToken);
  const { data } = await supabaseAdmin
    .from("budgets")
    .select()
    .match({ month, year });

  if (!data || data?.length === 0) {
    return json({ id: -1, month, year, income: 0, user_id: "" });
  } else {
    return json(data[0]);
  }
}

//}
export default function Budget() {
  const transition = useTransition();
  const { income, id, user_id, month, year } = useLoaderData();
  const actionData = useActionData();
  const { errors } = useActionData() || {};
  const [incomeTxt, setIncomeTxt] = useState("");
  useEffect(() => {
    setIncomeTxt(income);
  }, [income]);
  //const id = searchParams.get("id");
  const submit = useSubmit();
  const handleSelection = (e) => {
    submit(
      {
        _action: "Select",
        month: document.getElementById("month").value,
        year: document.getElementById("year").value,
      },
      { method: "post" }
    );
  };
  const incomeRef = useRef();
  useEffect(() => {
    if (errors?.income) {
      incomeRef.current.focus();
    }
  }, [errors]);
  return (
    <div>
      <Form method="post">
        <label htmlFor="month">Month</label>
        <select
          defaultValue={month}
          id="month"
          name="month"
          onChange={handleSelection}
        >
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

        <select
          id="year"
          name="year"
          defaultValue={year}
          onChange={handleSelection}
        >
          <option>2022</option>
          <option>2023</option>
        </select>

        <input type="hidden" name="id" value={id} />
        <label htmlFor="income">Income</label>
        <input
          ref={incomeRef}
          id="income"
          type="text"
          name="income"
          readOnly={transition.state !== "idle"}
          value={incomeTxt}
          onChange={(e) => {
            e.preventDefault();
            setIncomeTxt(e.target.value);
          }}
          aria-describedby="incomeError"
        />

        <span id="incomeError">{errors?.income}</span>
        <button
          type="submit"
          _action="update"
          disabled={transition.state !== "idle"}
          aria-live="polite"
        >
          Update
        </button>
        <input type="hidden" name="user_id" value={user_id} />
      </Form>

      {id > 0 && <a href={`/categories/${id}`}>View/Edit Categories</a>}
      {actionData?.success && (
        <div role="alert">Budget Updated Successfully.</div>
      )}
      {actionData?.error && (
        <div role="alert">An error occurred: {actionData?.error}</div>
      )}
    </div>
  );
}
