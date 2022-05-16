import authenticated from "~/policies/authenticated.server";
import { Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Link, Outlet, useCatch } from "@remix-run/react";

export async function loader({ request }) {
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
}

export default function BudgetManagementLayout() {
  return (
    <>
      <header>
        <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
          <li style={{ margin: 4 }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ margin: 4 }}>
            <Link to="/profile">Profile</Link>
          </li>
          <li style={{ margin: 4 }}>
            <Link to="/settings">Settings</Link>
          </li>
          <li style={{ margin: 4 }}>
            <Link
              to={`/budget/${
                new Date().getMonth() + 1
              }/${new Date().getFullYear()}`}
            >
              Budget Management
            </Link>
          </li>
          <li>
            <Form method="post" action="/api/logout">
              <button type="submit">Logout</button>
            </Form>
          </li>
        </ul>
      </header>
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
