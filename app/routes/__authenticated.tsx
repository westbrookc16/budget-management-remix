import type { LoaderFunction } from "@remix-run/node";
import authenticated from "~/policies/authenticated.server";
import { json } from "@remix-run/node";
import { Link, Outlet, useCatch } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  //console.log(request.headers.get("cookie"));
  return authenticated(
    request,
    (user) => {
      return json({ user });
    },
    () => {
      throw new Response("Unauthorized", { status: 401 });
    }
  );
};

export default function BudgetManagementLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 401) {
    return (
      <div>
        <h1>You are not logged in</h1>
        <p>
          Please <Link to="/login?redirectTo=profile">Login</Link>
        </p>
      </div>
    );
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
