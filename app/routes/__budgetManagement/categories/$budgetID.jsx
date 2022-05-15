import { useLoaderData, useTransition } from "@remix-run/react";
import { Form } from "@remix-run/react";
import { getAccessToken } from "~/policies/authenticated.server";
import authenticated from "~/policies/authenticated.server";
import { supabaseAdmin } from "../../../services/supabase.server";
import { json, redirect } from "@remix-run/node";

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
  console.log(`budgetID=${budgetID}`);
  let { data } = await supabaseAdmin
    .from("categories")
    .select()
    .match({ budget_id: budgetID });
  const categories = data;
  let { data: budget, error } = await supabaseAdmin
    .from("budgets")
    .select()
    .match({ id: budgetID })
    .limit(1)
    .single();
  console.log(error);
  return json({ budget, categories });
}
export default function Categories() {
  const { budget, categories } = useLoaderData();
  const { month, year } = budget;
  const transition = useTransition();
  const trs = categories.map((cat) => {
    const { name, amount, id } = cat;
    return (
      <>
        <li key={id}>
          <Form method="post">
            <label>
              {name}

              <input aria-label={name} defaultValue={amount} name="amount" />
            </label>

            <button type="submit" name="_action" value="update">
              Update
            </button>
            <button name="_action" value="delete">
              Delete
            </button>
            <input type="hidden" id="id" name="id" value={id} />
          </Form>
        </li>
      </>
    );
  });

  console.log(`${month}/${year}`);
  return (
    <div>
      <h1>{`Categories for ${month}/${year}`}</h1>
      {categories?.length > 0 && <ul>{trs}</ul>}
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
    </div>
  );
}
