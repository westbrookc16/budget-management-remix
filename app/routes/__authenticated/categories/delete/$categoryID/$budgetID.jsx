import { redirect } from "@remix-run/node";
import authenticated from "../../../../../policies/authenticated.server";
import { supabaseAdmin } from "../../../../../services/supabase.server";
import { useLoaderData, Form } from "@remix-run/react";
export async function loader({ request, params }) {
  const { data: category } = await supabaseAdmin
    .from("categories")
    .select()
    .match({ id: params.categoryID })
    .limit(1)
    .single();
  return { category };
}
export function action({ request, params }) {
  return authenticated(
    request,
    async () => {
      const data = await request.formData();
      const _action = data.get("_action");
      if (_action === "delete") {
        const { error } = await supabaseAdmin
          .from("categories")
          .delete()
          .match({ id: params.categoryID });

        return redirect(`/categories/${params.budgetID}`);
      } else {
        return redirect(`/categories/${params.budgetID}`);
      }
    },
    () => {
      throw new Response("unauthorized", { status: 401 });
    }
  );
}
export default function DeleteCategory() {
  const { category } = useLoaderData();
  const { name } = category;
  return (
    <div>
      <h1>
        <div role="alert">Are you sure you want to delete {name}"</div>
      </h1>

      <Form method="post">
        <button type="submit" name="_action" value="delete">
          Delete
        </button>
        <button type="submit" name="_action" value="no">
          Cancel
        </button>
      </Form>
    </div>
  );
}
