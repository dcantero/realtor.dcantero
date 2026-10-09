import { useRouteLoaderData } from "react-router";

import type { loader as rootLoader } from "~/root";
import type { SiteConfig } from "./site-config";

/** Site-wide config loaded once by the root route. */
export function useSite(): SiteConfig {
  const data = useRouteLoaderData<typeof rootLoader>("root");
  if (!data) {
    throw new Error("Root loader data is unavailable; useSite() must render under the root route.");
  }
  return data.site;
}
