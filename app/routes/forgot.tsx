import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { supabaseAdmin } from "~/services/supabase.server";
import { Form, useActionData } from "@remix-run/react";
import { useTransition } from "@remix-run/react";
export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");
  if (typeof email !== "string") {
    return json({ formMessage: "Your email is invalid." }, 400);
  }
  await supabaseAdmin.auth.api.resetPasswordForEmail(email);
  return json({
    formMessage: "Please check your email for a link to reset your password.",
  });
};
export default function ForgotPassword() {
  const { formMessage } = useActionData() || {};
  const transition = useTransition();
  return (
    <div className="flex flex-col justify-center items-center border-2 border-blue-700 rounded-md p-6 text-center gap-y-4">
      <h1>Forgot Your Password</h1>
      <p className="max-w-md">
        Enter your email and a reset link will be sent to you to allow you to
        update your password.
      </p>
      <Form className="flex flex-col gap-y-4 w-9/12" method="post">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" autoComplete="email" name="email" />
        </div>
        <button className="btn-emerald-700 mt-2" type="submit">
          Send Reset Link
        </button>
      </Form>
      {formMessage && transition.state === "idle" && (
        <div className="text-rose-700" role="alert">
          {formMessage}
        </div>
      )}
    </div>
  );
}
