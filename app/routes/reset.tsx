import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useTransition } from "@remix-run/react";
import { getAccessToken } from "~/policies/authenticated.server";
import { supabaseAdmin } from "~/services/supabase.server";
type ActionData = {
  formError: string | undefined;
};
export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const password = data.get("password");
  const password1 = data.get("password1");
  if (
    typeof password !== "string" ||
    typeof password1 !== "string" ||
    password !== password1
  ) {
    return json<ActionData>({ formError: "Your passwords do not match." }, 400);
  }
  supabaseAdmin.auth.setAuth(await getAccessToken(request));
  await supabaseAdmin.auth.update({ password });
  return redirect(
    `/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
  );
};

export default function ResetPassword() {
  const transition = useTransition();
  const data = useActionData<ActionData>();
  return (
    <div className="flex flex-col justify-center items-center border-2 border-blue-700 rounded-md p-6 text-center gap-y-4">
      <h1>Reset Password</h1>
      <Form className="flex flex-col gap-y-4 w-9/12" method="post">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="password">
            Enter Password (must be a minimum of 8 characters)
          </label>
          <input type="password" id="password" name="password" />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="password1">Confirm Password</label>
          <input type="password" id="password1" name="password1" />
        </div>

        <button className="btn-emerald-700 mt-2" type="submit">
          Reset Password
        </button>
      </Form>
      {data?.formError && transition.state === "idle" && (
        <div className="text-rose-700" role="alert">
          {data.formError}
        </div>
      )}
    </div>
  );
}
