import { getUserByAccessToken } from "~/api/supabase-auth.server";
import { authCookie } from "~/services/supabase.server";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";

import NavBar from "./components/NavBar";

import styles from "./styles/app.css";

export function meta() {
  return {
    title: "Budget Management",
    description:
      "Bare minimum and un-opinionated example using Remix to implement Supabase's email/password and social auth",
  };
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader({ request }) {
  const authSession = await authCookie.getSession(
    request.headers.get("Cookie")
  );
  const { user, error: getUserError } = await getUserByAccessToken(
    authSession.get("access_token")
  );

  return json({
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    },
    user,
  });
}

function Layout({ children }) {
  const { user } = useLoaderData();
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <NavBar user={user} />
      <div className="px-5">{children}</div>
      <footer className="w-full flex place-content-center bg-rose-700 text-white py-6 gap-6">
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/westbrookc16/budget-management-remix"
        >
          Github
        </a>

        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/chriswestbrook"
        >
          Twitter
        </a>
      </footer>
    </div>
  );
}

export default function App() {
  const loaderData = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0 }}>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(loaderData.ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  switch (caught.status) {
    case 404: {
      return (
        <Layout>
          <div style={{ textAlign: "center" }}>
            <h1>Not Found</h1>
            <h2>Looks like the page you are looking for doesn't exist!</h2>
            <Link to="/">Home page</Link>
          </div>
        </Layout>
      );
    }
    case 401: {
      return (
        <Layout>
          <div>
            <h1>You are not logged in</h1>
            <p>
              Please <Link to="/login">Login</Link>
            </p>
          </div>
        </Layout>
      );
    }
  }

  return (
    <Layout>
      <div>
        <h1>Caught</h1>
        <p>Status: {caught.status}</p>
        <pre>
          <code>{JSON.stringify(caught.data, null, 2)}</code>
        </pre>
      </div>
    </Layout>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Layout>
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    </Layout>
  );
}
