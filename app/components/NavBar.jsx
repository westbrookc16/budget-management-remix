import { Link, Form } from "@remix-run/react";

export default function NavBar({ user }) {
  return (
    <header className="flex place-content-center bg-blue-700 text-white w-full gap-6 py-4">
      <div>
        <Link to="/">Home</Link>
      </div>
      {user ? (
        <>
          <div>
            <Link to="/profile">Profile</Link>
          </div>
          <div>
            <Link
              to={`/budget/${
                new Date().getMonth() + 1
              }/${new Date().getFullYear()}`}
            >
              Budget Management
            </Link>
          </div>

          <div>
            <Form method="post" action="/api/logout">
              <button type="submit">Logout</button>
            </Form>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to="/login">Login</Link>
          </div>

          <div>
            <Link to="/register">Register</Link>
          </div>
        </>
      )}
    </header>
  );
}
