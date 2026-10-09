import { redirect } from "react-router";

/** The selling guide isn't written yet; see app/drafts/SellPage.tsx. */
export function loader() {
  return redirect("/under-development", 302);
}
