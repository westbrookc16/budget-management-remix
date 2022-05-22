import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import type { definitions } from "~/types/supabase";
import {
  Link,
  useActionData,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import { formatCurrency } from "~/utils/currency";
import { Form } from "@remix-run/react";
import { getAccessToken } from "~/policies/authenticated.server";
import authenticated from "~/policies/authenticated.server";
import { supabaseAdmin } from "../../../services/supabase.server";
import { json, redirect } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return { title: "Budget Management|Categories" };
};
type ActionData = { formMessage: string };
export const action: ActionFunction = async ({ request, params }) => {
  return authenticated(
    request,
    async (user) => {
      const { budgetID } = params;
      const data = await request.formData();
      const name = data.get("name");
      const id = data.get("id");
      const amount = data.get("amount");
      const _action = data.get("_action");
      supabaseAdmin.auth.setAuth(await getAccessToken(request));
      if (_action === "delete") {
        return redirect(`/categories/delete/${id}/${params.budgetID}`);
      }
      const returnData: ActionData = {
        formMessage: "Your form was submitted successfully.",
      };
      if (
        Number.isNaN(
          Number(amount?.toString().replace("$", "").replace(",", ""))
        )
      ) {
        returnData.formMessage =
          "Your form was not submitted successfully. Make sure your amount is a number.";
        return json(returnData);
      }
      if (_action === "insert") {
        await supabaseAdmin
          .from("categories")
          .insert({ budget_id: budgetID, name, amount });
      } else if (_action === "update") {
        await supabaseAdmin.from("categories").update({ amount }).match({ id });
      }
      return json(returnData);
    },
    () => {
      throw new Response("unauthorized", { status: 401 });
    }
  );
};
export const loader: LoaderFunction = async ({ request, params }) => {
  supabaseAdmin.auth.setAuth(await getAccessToken(request));
  const { budgetID } = params;

  let { data: categories } = await supabaseAdmin
    .from<definitions["categories"]>("categories")
    .select()
    .match({ budget_id: budgetID });
  const totalBudgeted = categories?.reduce((p: number | undefined, c) => {
    if (p === undefined || c === undefined) return 0;
    if (c.amount === undefined) return 0;
    return p + parseFloat(c.amount.replace("$", "").replace(",", ""));
  }, 0);
  let { data: budget } = await supabaseAdmin
    .from("budgets")
    .select()
    .match({ id: budgetID })
    .limit(1)
    .single();

  return json({ budget, categories, totalBudgeted });
};
export default function Categories() {
  const { budget, categories, totalBudgeted } = useLoaderData();
  const { month, year, income } = budget;
  const transition = useTransition();
  const trs = categories.map((cat: definitions["categories"]) => {
    const { name, amount, id } = cat;
    return (
      <tr key={id}>
        <td scope="row">{name}</td>
        <td>
          <input
            form={`myForm-${id}`}
            aria-label={name}
            defaultValue={amount}
            name="amount"
            className="max-w-[120px] text-center"
          />
        </td>

        <td>
          <button
            form={`myForm-${id}`}
            type="submit"
            name="_action"
            value="update"
            className="btn-blue-700"
          >
            Update
          </button>
        </td>
        <td>
          <button
            className="btn-rose-700"
            form={`myForm-${id}`}
            name="_action"
            value="delete"
          >
            Delete
          </button>
        </td>

        <td>
          <Link className="btn-emerald-700" to={`/transactions/${id}`}>
            View Transactions
          </Link>
          <input
            type="hidden"
            id="id"
            name="id"
            value={id}
            form={`myForm-${id}`}
          />
        </td>
      </tr>
    );
  });
  const forms = categories.map((cat: definitions["categories"]) => {
    const { id } = cat;
    return (
      <Form key={id} id={`myForm-${id}`} name={`myForm-${id}`} method="post" />
    );
  });
  const actionData = useActionData();
  const { formMessage } = actionData || {};
  //const transition = useTransition();
  return (
    <div className="flex flex-col place-items-center">
      <h1 className="mb-6">{`Categories for ${month}/${year}`}</h1>
      {categories?.length > 0 && (
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
              <th scope="col">View Transactions</th>
            </tr>
          </thead>
          <tbody>{trs}</tbody>
        </table>
      )}
      {forms}

      <div className="flex flex-col my-4 text-center">
        <div className="text-lg font-medium text-blue-700">
          Total income: {income}
        </div>

        <div className="text-lg font-medium text-rose-700">
          Total Budgeted: {formatCurrency(totalBudgeted)}
        </div>

        <div
          className="text-lg font-medium text-emerald-700"
          aria-live="polite"
          role="alert"
        >
          {`There is ${formatCurrency(
            parseFloat(income.replace("$", "").replace(",", "")) - totalBudgeted
          )} left to budget.`}
        </div>
      </div>

      <div className="flex flex-col place-items-center border-2 p-6 rounded-md border-emerald-700">
        <h2 className="mb-4 text-emerald-700">Add New Category</h2>
        <Form className="flex flex-col place-items-center" method="post">
          <div className="flex items-center gap-x-6">
            <div className="flex flex-col w-1/2">
              <label className="mb-1" htmlFor="name">
                Name
              </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="mb-1" htmlFor="amount">
                Amount
              </label>
              <input type="text" name="amount" id="amount" required />
            </div>
          </div>

          <button
            className="btn-emerald-700 mt-6"
            type="submit"
            name="_action"
            value="insert"
            aria-live="polite"
            disabled={transition.type !== "idle"}
          >
            Add
          </button>
        </Form>
      </div>
      {formMessage && transition.state === "idle" && (
        <div role="alert">{formMessage}</div>
      )}
      <Link
        className="btn-blue-700 mt-6"
        to={`/budget/${budget.month}/${budget.year}`}
      >
        Back To Budget Management
      </Link>
    </div>
  );
}
