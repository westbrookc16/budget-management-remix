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
    <div>
      <h1>Forgot Your Password</h1>
      Enter your email and a reset link will be sent to you to allow you to
      update your password.
      <Form method="post">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" autoComplete="email" name="email" />
        <button type="submit">Send Reset Link</button>
      </Form>
      {formMessage && transition.state === "idle" && (
        <div role="alert">{formMessage}</div>
      )}
    </div>
  );
}
