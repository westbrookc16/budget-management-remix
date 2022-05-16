import { getUserByAccessToken } from "~/api/supabase-auth.server";
import { authCookie } from "~/services/supabase.server";

import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

export const loader = async ({ request }) => {
  const authSession = await authCookie.getSession(
    request.headers.get("Cookie")
  );
  const { user, error: getUserError } = await getUserByAccessToken(
    authSession.get("access_token")
  );

  return json({ user });
};

export default function IndexLayout() {
  const { user } = useLoaderData();

  return (
    <>
      <header>
        <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
          <li style={{ margin: 4 }}>
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li style={{ margin: 4 }}>
                <Link to="/profile">Profile</Link>
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
            </>
          ) : (
            <>
              <li style={{ margin: 4 }}>
                <Link to="/login">Login</Link>
              </li>

              <li style={{ margin: 4 }}>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
