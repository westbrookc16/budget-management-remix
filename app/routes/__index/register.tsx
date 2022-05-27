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
        formError: `There was an error in your form. Make sure your passwords match and that your password is greater than 8 characters.`,
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
    <div className="flex flex-col justify-center items-center border-2 border-blue-700 rounded-md p-6 text-center gap-y-4">
      <h1>Register</h1>
      <AuthProviderBtn
        provider="google"
        redirectTo={`/budget/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`}
      />

      <p>Or continue with email/password</p>
      <Form className="flex flex-col gap-y-4 w-9/12" replace method="post">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={actionData?.fields?.email}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="password">Password (minimum of 8 characters)</label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="password2">Retype Password</label>
          <input type="password" name="password2" id="password2" />
        </div>
        <button className="btn-emerald-700 mt-2" type="submit">
          Register
        </button>
      </Form>
      <p>
        Have an account?{" "}
        <Link className="text-blue-700 font-medium" to="/login">
          Login instead
        </Link>
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
