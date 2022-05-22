import type { ActionFunction, LoaderFunction } from "@remix-run/node";
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
type ActionData = {
  formMessage: string;
  fieldErrors?: { income: string | undefined };
};
const validateIncome = (income: FormDataEntryValue | null) => {
  console.log(
    income,
    income && Number.isNaN(income.toString().replace("$", "").replace(",", ""))
  );
  if (
    income !== null &&
    Number.isNaN(Number(income.toString().replace("$", "").replace(",", "")))
  ) {
    console.log(income?.toString().replace("$", "").replace(",", ""));
    return "Your income must be a number";
  }
};
export const action: ActionFunction = async ({ request }) => {
  return authenticated(
    request,
    async (user) => {
      const data = await request.formData();
      const id = data.get("id");
      const income = data.get("income");

      const { id: user_id } = user;
      const _action = data.get("_action");
      const month = data.get("month");
      const year = data.get("year");

      if (_action === "Select") {
        return redirect(`/budget/${month}/${year}`);
      }
      const errors: ActionData = {
        formMessage: "Your form was not submitted successfully.",
      };
      console.log("here");
      const fieldErrors = { income: validateIncome(income) };

      console.log(fieldErrors);

      if (Object.values(fieldErrors).some(Boolean)) {
        errors.fieldErrors = fieldErrors;
        return json({ errors }, { status: 400 });
      }
      supabaseAdmin.auth.setAuth(await getAccessToken(request));
      if (id === "-1") {
        const { error } = await supabaseAdmin.from("budgets").insert({
          month,
          year,
          user_id,
          income,
        });
        if (error) {
          errors.formMessage = error.message;
        } else errors.formMessage = "Your budget was changed successfully.";
      } else {
        supabaseAdmin.auth.setAuth(await getAccessToken(request));
        const { error } = await supabaseAdmin
          .from("budgets")
          .update({ income })
          .match({ id });

        if (error) {
          errors.formMessage = error.message;
        } else {
          errors.formMessage = "Yur budget was changed successfully.";
        }
      }
      return json({ errors });
    },
    () => {
      throw new Response("unauthorized", { status: 401 });
    }
  );
};
export const loader: LoaderFunction = async ({ request, params }) => {
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
};

//}
export default function Budget() {
  const transition = useTransition();
  const { income, id, user_id, month, year } = useLoaderData();
  const actionData = useActionData();

  const [incomeTxt, setIncomeTxt] = useState("");
  useEffect(() => {
    setIncomeTxt(income);
  }, [income]);
  //const id = searchParams.get("id");
  const submit = useSubmit();
  const handleSelection = () => {
    const ddlMonth: HTMLSelectElement = document.getElementById(
      "month"
    ) as HTMLSelectElement;
    const ddlYear: HTMLSelectElement = document.getElementById(
      "year"
    ) as HTMLSelectElement;
    if (ddlMonth && ddlYear) {
      submit(
        {
          _action: "Select",
          month: ddlMonth.value,
          year: ddlYear.value,
        },
        { method: "post" }
      );
    }
  };
  const incomeRef = useRef(null);
  useEffect(() => {
    if (
      actionData?.errors?.fieldErrors?.income !== undefined &&
      transition.state === "idle"
    ) {
      if (incomeRef.current !== null) {
        const i: HTMLInputElement = incomeRef.current as HTMLInputElement;
        i.focus();
      }
    }
  }, [actionData?.errors?.fieldErrors?.income, transition.state]);
  return (
    <>
      <h1 className="mb-6">Budget Managment</h1>
      <div className="border-2 border-blue-700 rounded-lg p-8 flex flex-col place-items-center">
        <Form
          className="w-full flex flex-col place-items-center gap-y-4"
          method="post"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="user_id" value={user_id} />

          <div className="flex w-full gap-x-6">
            <div className="w-1/2 flex flex-col">
              <label className="mb-1" htmlFor="month">
                Month
              </label>
              <select
                defaultValue={month}
                id="month"
                name="month"
                onChange={handleSelection}
                className=""
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
            </div>
            <div className="w-1/2 flex flex-col">
              <label className="mb-1" htmlFor="year">
                Year
              </label>

              <select
                id="year"
                name="year"
                defaultValue={year}
                onChange={handleSelection}
                className=""
              >
                <option>2022</option>
                <option>2023</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="mb-1" htmlFor="income">
              Income
            </label>
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
              className=""
            />
          </div>

          <span id="incomeError">
            {actionData?.errors?.fieldErrors?.income}
          </span>

          <button
            type="submit"
            name="_action"
            disabled={transition.state !== "idle"}
            aria-live="polite"
            className="btn-emerald-700"
          >
            Update
          </button>
        </Form>

        {id > 0 && (
          <a className="mt-4 btn-blue-700" href={`/categories/${id}`}>
            View/Edit Categories
          </a>
        )}
        {actionData?.errors?.formMessage && transition.state === "idle" && (
          <div role="alert">{actionData?.errors?.formMessage}</div>
        )}
        {actionData?.error && (
          <div role="alert">An error occurred: {actionData?.error}</div>
        )}
      </div>
    </>
  );
}
