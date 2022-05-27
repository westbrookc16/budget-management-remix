import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useMemo } from "react";

import { loginUser, setAuthSession } from "~/api/supabase-auth.server";
import AuthProviderBtn from "~/components/AuthProviderBtn";
import authenticated from "~/policies/authenticated.server";
import { authCookie } from "~/services/supabase.server";

import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";

export function meta() {
  return { title: "Budget Management| Login" };
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
  let session = await authCookie.getSession(request.headers.get("Cookie"));

  const form = await request.formData();

  const email = form.get("email");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/budget";
  if (
    !email ||
    !password ||
    typeof redirectTo !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
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

  const { accessToken, refreshToken, error } = await loginUser({
    email,
    password,
  });
  if (error || !accessToken || !refreshToken) {
    return json(
      { formError: error || "Something went wrong", fields: { email } },
      403
    );
  }

  session = setAuthSession(session, accessToken, refreshToken);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await authCookie.commitSession(session),
    },
  });
};

export default function Login() {
  const actionData = useActionData();
  const [searchParams] = useSearchParams();

  const redirectTo = useMemo(
    () =>
      searchParams.get("redirectTo") ??
      `/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
    [searchParams]
  );

  return (
    <div className="flex flex-col justify-center items-center border-2 border-blue-700 rounded-md p-6 text-center gap-y-4">
      <h1>Login</h1>
      <AuthProviderBtn provider="google" redirectTo={redirectTo} />

      <p>Or continue with email/password</p>
      <Form className="flex flex-col gap-y-4 w-9/12" replace method="post">
        <input type="hidden" name="redirectTo" value={redirectTo} />

        <label className="flex flex-col gap-y-2">
          Email{" "}
          <input
            type="email"
            name="email"
            defaultValue={actionData?.fields?.email}
          />
        </label>

        <label className="flex flex-col gap-y-2">
          Password
          <input type="password" min={8} name="password" />
        </label>

        <button className="btn-emerald-700 mt-2" type="submit">
          Login
        </button>
      </Form>
      <p>
        Don't have an account yet?{" "}
        <Link className="text-blue-700 font-medium" to="/register">
          Register instead
        </Link>
      </p>
      <Link className="text-blue-700 font-medium" to="/forgot">
        Forgot Your Password
      </Link>
      {actionData?.formError ? (
        <div role={"alert"}>
          <p style={{ color: "red" }}>{actionData.formError}</p>
        </div>
      ) : null}
    </div>
  );
}
