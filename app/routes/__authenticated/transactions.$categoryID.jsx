import { Link, useLoaderData, useTransition } from "@remix-run/react";
import { formatCurrency } from "~/utils/currency";
import { Form } from "@remix-run/react";
import { getAccessToken } from "~/policies/authenticated.server";
import authenticated from "~/policies/authenticated.server";
import { supabaseAdmin } from "~/services/supabase.server";
import { json, redirect } from "@remix-run/node";
export function meta() {
  return { title: "Budget Management|Transactions" };
}
export async function action({ request, params }) {
  supabaseAdmin.auth.setAuth(await getAccessToken(request));
  const transaction = await request.formData();
  const name = transaction.get("name");
  const id = transaction.get("id");
  const amount = transaction.get("amount");
  const transaction_date = transaction.get("transaction_date");
  const _action = transaction.get("_action");
  if (_action === "insert") {
    await supabaseAdmin.from("transactions").insert({
      name,
      amount,
      transaction_date,
      category_id: params.categoryID,
    });
  } else if (_action === "update") {
    const { error } = await supabaseAdmin
      .from("transactions")
      .update({
        transaction_date,
        amount,
      })
      .match({ id });
    console.log(error);
  }
  return null;
}
export async function loader({ request, params }) {
  const { data: category } = await supabaseAdmin
    .from("categories")
    .select()
    .match({ id: params.categoryID })
    .limit(1)
    .single();
  const { data: transactions, error } = await supabaseAdmin
    .from("vw_transactions")
    .select()
    .match({ category_id: params.categoryID });

  return json({ category, transactions });
}
export default function Transactions() {
  const { transactions, category } = useLoaderData();
  const trs = transactions.map((t) => {
    const { id, name, transaction_date, amount } = t;
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>
          <input
            type="text"
            name="transaction_date"
            form={`transactions-${id}`}
            aria-label={`${name} Date`}
            defaultValue={transaction_date}
          />
        </td>

        <td>
          <input
            type="text"
            name="amount"
            form={`transactions-${id}`}
            aria-label={`${name} Amount`}
            defaultValue={amount}
          />
        </td>

        <td>
          <input
            type="submit"
            name="_action"
            form={`transactions-${id}`}
            value="update"
          />
          <input
            type="hidden"
            form={`transactions-${id}`}
            value={id}
            name="id"
          />
        </td>
      </tr>
    );
  });
  const forms = transactions.map((t) => {
    const { id } = t;
    return <Form id={`transactions-${id}`} method="post" />;
  });

  return (
    <div>
      <h1>Transactions for {category.name}</h1>
      <Form method="post">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="transaction_date">Date</label>
        <input type="text" name="transaction_date" id="transaction_date" />
        <label htmlFor="amount">Amount</label>
        <input type="text" name="amount" id="amount" />
        <button type="submit" name="_action" value="insert">
          Add
        </button>
      </Form>
      <h2>Current Transactions</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>{trs}</tbody>
      </table>
      {forms}
    </div>
  );
}
