import { Link, Form } from "@remix-run/react";

export default function NavBar({ user }: any) {
  return (
    <header className="flex place-content-center items-center bg-blue-700 text-white w-full gap-6 py-4 leading-none">
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link
            to={`/budget/${
              new Date().getMonth() + 1
            }/${new Date().getFullYear()}`}
          >
            Budget Management
          </Link>
          <Form
            method="post"
            action="/api/logout"
            className="flex items-center"
          >
            <button type="submit">Logout</button>
          </Form>
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="34WKXMAKEYBX4"
            />
            <button
              className="btn-amber-400 flex gap-x-2 items-center font-bold"
              type="submit"
            >
              <img
                src="/paypal.svg"
                alt="PayPal - The safer, easier way to pay online!"
                className="w-4 h-auto"
              />
              Donate
            </button>
          </form>
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
