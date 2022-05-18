import { Link, useLoaderData, useTransition } from "@remix-run/react";
import { formatCurrency } from "~/utils/currency";
import { Form } from "@remix-run/react";
import { getAccessToken } from "~/policies/authenticated.server";
import authenticated from "~/policies/authenticated.server";
import { supabaseAdmin } from "../../../services/supabase.server";
import { json, redirect } from "@remix-run/node";
export function meta() {
  return { title: "Budget Management|Categories" };
}
export async function action({ request, params }) {
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
      if (_action === "insert") {
        await supabaseAdmin
          .from("categories")
          .insert({ budget_id: budgetID, name, amount });
      } else if (_action === "update") {
        await supabaseAdmin.from("categories").update({ amount }).match({ id });
      }
      return null;
    },
    () => {
      throw new Response("unauthorized", { status: 401 });
    }
  );
}
export async function loader({ request, params }) {
  supabaseAdmin.auth.setAuth(await getAccessToken(request));
  const { budgetID } = params;

  let { data: categories } = await supabaseAdmin
    .from("categories")
    .select()
    .match({ budget_id: budgetID });
  const totalBudgeted = categories.reduce((p, c) => {
    return (
      parseFloat(p) + parseFloat(c.amount.replace("$", "").replace(",", ""))
    );
  }, 0);
  let { data: budget, error } = await supabaseAdmin
    .from("budgets")
    .select()
    .match({ id: budgetID })
    .limit(1)
    .single();

  return json({ budget, categories, totalBudgeted });
}
export default function Categories() {
  const { budget, categories, totalBudgeted } = useLoaderData();
  const { month, year, income } = budget;
  const transition = useTransition();
  const trs = categories.map((cat) => {
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
          />
        </td>

        <td>
          <button
            form={`myForm-${id}`}
            type="submit"
            name="_action"
            value="update"
          >
            Update
          </button>
        </td>
        <td>
          <button form={`myForm-${id}`} name="_action" value="delete">
            Delete
          </button>
        </td>

        <td>
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
  const forms = categories.map((cat) => {
    const { id } = cat;
    return (
      <Form key={id} id={`myForm-${id}`} name={`myForm-${id}`} method="post" />
    );
  });
  return (
    <div>
      <h1>{`Categories for ${month}/${year}`}</h1>
      {categories?.length > 0 && (
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{trs}</tbody>
        </table>
      )}
      {forms}
      <h2>add New Category</h2>
      <Form method="post">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="amount">Amount</label>
        <input type="text" name="amount" id="amount" />
        <button
          type="submit"
          name="_action"
          value="insert"
          aria-live="polite"
          disabled={transition.type !== "idle"}
        >
          Add
        </button>
      </Form>
      Total income: {income}
      <br />
      Total Budgeted: {formatCurrency(totalBudgeted)}
      <div aria-live="polite" role="alert">
        There is
        {formatCurrency(
          parseFloat(income.replace("$", "").replace(",", "")) - totalBudgeted
        )}{" "}
        left to budget.
      </div>
      <Link to={`/budget/${budget.month}/${budget.year}`}>
        Back To Budget Management
      </Link>
    </div>
  );
}
