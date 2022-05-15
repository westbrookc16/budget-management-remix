import {
  getUserByAccessToken,
  hasActiveAuthSession,
  refreshUserToken,
  setAuthSession,
} from "~/api/supabase-auth.server";
import { authCookie } from "~/services/supabase.server";

import { redirect } from "@remix-run/node";

import { supabaseAdmin } from "../services/supabase.server";

export default async function authenticated(
  request,
  successFunction,
  failureFunction,
  redirectTo
) {
  try {
    let session = await authCookie.getSession(request.headers.get("Cookie"));
    const url = new URL(request.url);
    const redirectUrl =
      redirectTo || `${url.origin}${url.pathname}${url.search}`;

    const isActiveAuthSession = await hasActiveAuthSession(session);
    if (!isActiveAuthSession) {
      const { accessToken, refreshToken, error } = await refreshUserToken(
        session
      );
      if (error || !accessToken || !refreshToken) {
        throw new Error("refreshUserToken " + error);
      }
      session = setAuthSession(session, accessToken, refreshToken);
      return redirect(redirectUrl, {
        headers: {
          "Set-Cookie": await authCookie.commitSession(session),
        },
      });
    }

    const { user, error: accessTokenError } = await getUserByAccessToken(
      session.get("access_token")
    );

    if (accessTokenError || !user || !user.email || !user.id) {
      throw new Error("getUserByAccessToken " + accessTokenError);
    }
    //get profile data
    const { data } = await supabaseAdmin
      .from("user_data")
      .select()
      .match({ user_id: user.id })
      .limit(1)
      .single();
    //return await successFunction(user);
    return await successFunction({ email: user.email, ...data });
  } catch (error) {
    console.log(error); // You should log this error to your logging system
    return failureFunction();
  }
}
export async function getAccessToken(request) {
  let session = await authCookie.getSession(request.headers.get("Cookie"));
  const userAccessToken = session.get("access_token");
  return userAccessToken;
}
