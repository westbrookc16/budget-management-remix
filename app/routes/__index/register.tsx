//import { json, redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { registerUser } from "~/api/supabase-auth.server";
import AuthProviderBtn from "~/components/AuthProviderBtn";
import authenticated from "~/policies/authenticated.server";

export function meta() {
  return { title: "Budget Management| Register" };
}

export const loader: LoaderFunction = async ({ request }) => {
  return authenticated(
    request,
    () => {
      return redirect(
        `/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
      );
    },
    () => {
      return json({});
    }
  );
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const password2 = form.get("password2");
  if (
    !email ||
    !password ||
    !password2 ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof password2 !== "string" ||
    password.length < 8 ||
    password !== password2
  ) {
    return json(
      {
        formError: `Form not submitted correctly.`,
        fields: {
          email: String(email) ?? "",
        },
      },
      403
    );
  }

  const { user, error } = await registerUser({
    email,
    password,
  });
  if (error || !user) {
    return json(
      { formError: error || "Something went wrong", fields: { email } },
      401
    );
  }

  return json({ result: "success" }, { status: 201 });
};

export default function Register() {
  const actionData = useActionData();

  return (
    <div>
      <h1>Register</h1>
      <div>
        <AuthProviderBtn
          provider="google"
          redirectTo={`/budget/${
            new Date().getMonth() + 1
          }/${new Date().getFullYear()}`}
        />
      </div>
      <div style={{ margin: 5 }}></div>
      <p>Or continue with email/password</p>
      <Form replace method="post">
        <fieldset>
          <legend>Register</legend>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={actionData?.fields?.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <div>
            <label htmlFor="password2">Retype Password</label>
            <input type="password" name="password2" id="password2" />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </fieldset>
      </Form>
      <p>
        Have an account? <Link to="/login">Login</Link> instead
      </p>
      {actionData?.formError ? (
        <div role="alert" style={{ color: "red" }}>
          {actionData.formError}
        </div>
      ) : null}
      {actionData?.result ? (
        <div role="alert">
          We have sent you an email.
          <br />
          Please confirm your email to complete registration.
        </div>
      ) : null}
    </div>
  );
}
