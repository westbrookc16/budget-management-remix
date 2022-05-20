import { Outlet } from "@remix-run/react";

export default function IndexLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
