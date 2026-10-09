import { Link } from "react-router";

import { useSite } from "~/lib/use-site";

/** Two-line wordmark: name over "Realtor® | <region>". */
export function Logo() {
  const site = useSite();
  return (
    <Link to="/" className="block text-center no-underline">
      <span className="block text-[12pt] font-bold uppercase tracking-[5px]">
        {site.contact.fullName}
      </span>
      <span className="block text-[12pt] font-bold uppercase tracking-[3px] text-brand">
        {site.contact.title}® | {site.region}
      </span>
    </Link>
  );
}
