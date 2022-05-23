import { Link, Form } from "@remix-run/react";

export default function NavBar({ user }: any) {
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
          <div>
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
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
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
