import { useEffect } from "react";

import { setAuthSession } from "~/api/supabase-auth.server";
import { supabaseClient } from "~/services/supabase.client";
import { authCookie } from "~/services/supabase.server";

import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useFetcher, useSearchParams } from "@remix-run/react";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const formDataSession = formData.get("session") as string | null;
  const event = formData.get("event") as AuthChangeEvent | null;
  let redirectTo = String(formData.get("redirectTo")) || "/profile";
  if (!formDataSession || !event) {
    return redirect("/login");
  }

  console.log("CHEKCING JSON ", formDataSession);
  const SupabaseSession: Session = JSON.parse(formDataSession);

  let session = await authCookie.getSession(request.headers.get("Cookie"));
  const { access_token: accessToken, refresh_token: refreshToken } =
    SupabaseSession;

  session = setAuthSession(session, accessToken, refreshToken || "");

  console.log(event);
  if (event === "SIGNED_IN" || event === "PASSWORD_RECOVERY") {
    if (event === "PASSWORD_RECOVERY") {
      console.log("reset");
      redirectTo = `/reset`;
    }
    return redirect(redirectTo, {
      headers: {
        "Set-Cookie": await authCookie.commitSession(session),
      },
    });
  }
  return redirect("/login");
};

export default function AuthCallback() {
  const fetcher = useFetcher();
  const [searchParams] = useSearchParams();
  console.log(`fetcher=${fetcher}`);
  useEffect(() => {
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        const formData = new FormData();
        formData.append("session", JSON.stringify(session));
        formData.append("event", event);
        formData.append(
          "redirectTo",
          searchParams.get("redirectTo") ||
            `/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
        );

        fetcher.submit(formData, { method: "post" });
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
    //eslint-disable-next-line
  }, [searchParams]);

  return null;
}
