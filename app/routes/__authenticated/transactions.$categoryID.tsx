import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { useActionData, useLoaderData, useTransition } from "@remix-run/react";
import { isValidDate } from "~/utils/date";

import { Form } from "@remix-run/react";
import { getAccessToken } from "~/policies/authenticated.server";
import authenticated from "~/policies/authenticated.server";
import { supabaseAdmin } from "~/services/supabase.server";
import { json } from "@remix-run/node";
import type { definitions } from "~/types/supabase";

export function meta() {
  return { title: "Budget Management|Transactions" };
}
type ActionData = {
  formMessage: String;
  fieldErrors?: {
    transaction_date: string | undefined;
    amount: String | undefined;
  };
};
const validateAmount = (amount: FormDataEntryValue | null) => {
  if (
    amount !== null &&
    Number.isNaN(Number(amount.toString().replace("$", "").replace(",", "")))
  )
    return "You must enter a number.";
};
const validateTransaction_date = (transaction_date: String | undefined) => {
  if (!isValidDate(transaction_date)) return "You must enter a valid date.";
};
export const action: ActionFunction = async ({ request, params }) => {
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
      const errors: ActionData = {
        formMessage: "Your form was submitted successfully.",
      };

      const fieldErrors = {
        amount: validateAmount(amount),
        transaction_date: validateTransaction_date(
          transaction_date?.toString()
        ),
      };
      if (Object.values(fieldErrors).some(Boolean)) {
        errors.fieldErrors = fieldErrors;
        errors.formMessage = "Your form was not submitted successfully.";
        return json(errors, { status: 400 });
      } else if (_action === "insert") {
        await supabaseAdmin.from("transactions").insert({
          name,
          amount,
          transaction_date,
          category_id: params.categoryID,
        });
        errors.formMessage = "Your transaction was added successfully.";
      } else if (_action === "Update") {
        await supabaseAdmin
          .from("transactions")
          .update({
            transaction_date,
            amount,
          })
          .match({ id });
        errors.formMessage = "Your transaction was updated successfully.";
      } else if (_action === "Delete") {
        return redirect(`/transactions/delete/${id}/${params.categoryID}`);
      }
      return json(errors);
    },
    () => {
      throw new Response("unauthorized", { status: 401 });
    }
  );
};
export const loader: LoaderFunction = async ({ request, params }) => {
  const { data: category } = await supabaseAdmin
    .from("categories")
    .select()
    .match({ id: params.categoryID })
    .limit(1)
    .single();
  const { data: transactions } = await supabaseAdmin
    .from("vw_transactions")
    .select()
    .match({ category_id: params.categoryID });

  return json({ category, transactions });
};
export default function Transactions() {
  const { transactions, category } = useLoaderData();
  const trs = transactions.map((t: definitions["transactions"]) => {
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
            value="Update"
          />
          <input
            type="hidden"
            form={`transactions-${id}`}
            value={id}
            name="id"
          />
        </td>
        <td>
          <input
            type="submit"
            name="_action"
            form={`transactions-${id}`}
            value="Delete"
          />
        </td>
      </tr>
    );
  });
  const forms = transactions.map((t: definitions["transactions"]) => {
    const { id } = t;
    return <Form id={`transactions-${id}`} method="post" key={id} />;
  });
  const transition = useTransition();
  const data = useActionData<ActionData>();

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
        {data?.fieldErrors?.transaction_date && (
          <span id="errorTransaction_date">
            {data?.fieldErrors?.transaction_date}
          </span>
        )}
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          name="amount"
          id="amount"
          aria-describedby="errorAmount"
        />
        {data?.fieldErrors?.amount && (
          <span id="errorAmount">{data.fieldErrors.amount}</span>
        )}
        <button
          type="submit"
          name="_action"
          value="insert"
          disabled={transition.state !== "idle"}
          aria-live="polite"
        >
          Add
        </button>
      </Form>

      {data?.formMessage && transition.state === "idle" && (
        <div role="alert">{data.formMessage}</div>
      )}
      <h2>Current Transactions</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{trs}</tbody>
      </table>

      {forms}
    </div>
  );
}
