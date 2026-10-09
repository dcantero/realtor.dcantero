import type { MetaDescriptor } from "react-router";

import type { SiteConfig } from "./site-config";

type LooseMatch = { id: string; loaderData?: unknown } | undefined;

function siteFromMatches(matches: ReadonlyArray<LooseMatch>): SiteConfig | undefined {
  const root = matches.find((m) => m?.id === "root");
  return (root?.loaderData as { site?: SiteConfig } | undefined)?.site;
}

/**
 * Builds the <title>, description, and keyword tags for a page.
 * Title pattern matches the old site: "Page - Daniel Cantero | Realtor South Jersey".
 */
export function pageMeta(
  matches: ReadonlyArray<LooseMatch>,
  page?: string,
  description?: string,
): MetaDescriptor[] {
  const site = siteFromMatches(matches);
  const name = site?.contact.fullName ?? "";
  const region = site?.region ?? "";
  const base = site ? `${name} | ${site.contact.title} ${region}` : "Realtor";
  const title = page ? `${page} - ${base}` : base;
  const desc =
    description ??
    (site
      ? `${name}, ${site.contact.title}® serving ${region}. Buy, sell, or rent with a local agent.`
      : "");
  const keywords = site
    ? [name, site.contact.lastName, `${site.contact.nickname} ${site.contact.lastName}`, `${name} ${site.contact.title}`, `${site.contact.title} ${region}`].join(", ")
    : "";
  return [
    { title },
    { name: "description", content: desc },
    { name: "keywords", content: keywords },
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:type", content: "website" },
  ];
}
