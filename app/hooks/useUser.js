import { useMatches } from "@remix-run/react";

function useRouteData(routeId) {
  return useMatches().find((match) => match.id === routeId)?.data;
}

export default function useUser() {
  const loaderData = useRouteData("routes/__budgetManagement");
  if (!loaderData?.user) {
    throw new Error("User not found");
  }

  return loaderData.user;
}
