import {
  Link,
  useActionData,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import { isValidDate } from "~/utils/date";
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
  return authenticated(
    request,
    async () => {
      supabaseAdmin.auth.setAuth(await getAccessToken(request));
      const transaction = await request.formData();
      const name = transaction.get("name");
      const id = transaction.get("id");
      const amount = transaction.get("amount");
      const transaction_date = transaction.get("transaction_date");
      const _action = transaction.get("_action");
      const errors = {};
      if (!isValidDate(transaction_date)) {
        errors.transaction_date = "You must enter a valid date.";
      }
      if (isNaN(amount.replace("$", "").replace(",", ""))) {
        errors.amount = "You must enter a valid amount.";
      }
      if (Object.keys(errors).length > 0) return { errors };
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
      }
      return null;
    },
    () => {
      throw new Response("unauthorized", { status: 401 });
    }
  );
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
    return <Form id={`transactions-${id}`} method="post" key={id} />;
  });
  const transition = useTransition();
  const { error, errors } = useActionData() || {};
  return (
    <div>
      <h1>Transactions for {category.name}</h1>
      <Form method="post">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="transaction_date">Date</label>
        <input
          type="text"
          name="transaction_date"
          id="transaction_date"
          aria-describedby="errorTransaction_date"
        />
        {errors?.transaction_date && (
          <span id="errorTransaction_date">{errors?.transaction_date}</span>
        )}
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          name="amount"
          id="amount"
          aria-describedby="errorAmount"
        />
        {errors?.amount && <span id="errorAmount">{errors?.amount}</span>}
        <button type="submit" name="_action" value="insert">
          Add
        </button>
      </Form>
      {((errors && Object.keys(errors).length > 0) || error?.message) && (
        <div role="alert">
          An error occurred. Please check your data and try again.
        </div>
      )}
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
