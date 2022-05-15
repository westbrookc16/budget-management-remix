import useUser from '~/hooks/useUser';

import { Form } from '@remix-run/react';

export function meta() {
  return { title: "Supabase x Remix | Profile" };
}

export default function Profile() {
  const user = useUser();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello {user.email}!</h1>
      <pre style={{ textAlign: "left" }}>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
      <Form method="post" action="/api/logout">
        <button type="submit">Logout</button>
      </Form>
    </div>
  );
}
