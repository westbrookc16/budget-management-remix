import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import authenticated from "~/policies/authenticated.server";
import { supabaseAdmin } from "~/services/supabase.server";
import type { definitions } from "~/types/supabase";
export const loader: LoaderFunction = async ({ request, params }) => {
  const { data } = await supabaseAdmin
    .from<definitions["transactions"]>("transactions")
    .select()
    .match({ id: params.transactionID })
    .limit(1)
    .single();
  return data;
};
type ActionData = { formError: string | undefined };
export const action: ActionFunction = ({ request, params }) => {
  return authenticated(
    request,
    async () => {
      const returnData: ActionData = { formError: "" };
      const data = await request.formData();
      const _action = data.get("_action");
      if (_action === "Yes") {
        const { error } = await supabaseAdmin
          .from<definitions["transactions"]>("transactions")
          .delete()
          .match({ id: params.transactionID });
        if (error) {
          returnData.formError = error.message;
          return json(returnData, 400);
        } else {
          return redirect(`/transactions/${params.categoryID}`);
        }
      } else {
        return redirect(`/transactions/${params.categoryID}`);
      }
    },
    () => {
      throw new Response("unauthorized", { status: 401 });
    }
  );
};
export default function DeleteTransaction() {
  const actionData = useActionData<ActionData>();
  const { name } = useLoaderData();
  return (
    <>
      <h1>
        <div role="alert">Are you sure you want to delete {name}?</div>
      </h1>
      <Form method="post">
        <button type="submit" name="_action" value="Yes">
          Yes
        </button>

        <button type="submit" name="_action" value="No">
          No
        </button>
      </Form>
      {actionData?.formError && <div role="alert">{actionData?.formError}</div>}
    </>
  );
}
