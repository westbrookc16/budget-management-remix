import { useCallback } from "react";

import { continueWithProvider } from "~/api/supabase-auth.client";

import type { Provider } from "@supabase/supabase-js";

type AuthProviderBtnProps = {
  provider: Provider;
  redirectTo?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export default function AuthProviderBtn({
  provider,
  redirectTo,
  ...props
}: AuthProviderBtnProps) {
  const handleOnClick = useCallback(async () => {
    try {
      await continueWithProvider({ provider, redirectTo });
    } catch (error) {
      console.log(`error in continue with ${provider}`, error);

      // You should show this error to user
      return;
    }
  }, [provider, redirectTo]);

  return (
    <button
      {...props}
      onClick={handleOnClick}
      className="btn-slate-200 flex gap-x-2 items-center font-bold"
      type="submit"
    >
      <img src="/google.svg" alt="" className="w-4 h-auto" />
      Continue with {provider}
    </button>
  );
}
