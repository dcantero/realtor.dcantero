import { data } from "react-router";

import type { Route } from "./+types/not-found";
import { NotFoundView } from "~/components/NotFoundView";
import { pageMeta } from "~/lib/meta";

export const meta: Route.MetaFunction = ({ matches }) => pageMeta(matches, "Page Not Found");

/** Catch-all route: renders the 404 page with a real 404 status code. */
export function loader() {
  return data(null, { status: 404 });
}

export default function NotFound() {
  return <NotFoundView />;
}
