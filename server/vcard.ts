import type { SiteConfig } from "~/lib/site-config";

const escapeText = (value: string) =>
  value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/[,;]/g, (c) => `\\${c}`);

/** Builds a vCard 3.0 payload. Lines must be CRLF-separated per RFC 2426. */
export function buildVCard(site: SiteConfig): string {
  const { contact, socials, siteUrl } = site;
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeText(contact.lastName)};${escapeText(contact.firstName)};;;`,
    `FN:${escapeText(contact.fullName)}`,
    `ORG:${escapeText(contact.brokerage)}`,
    `TITLE:${escapeText(contact.title)}`,
    `TEL;TYPE=CELL:${contact.phoneE164}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `URL:${siteUrl}`,
    `X-SOCIALPROFILE;TYPE=facebook:${socials.facebook}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${socials.linkedin}`,
    `X-SOCIALPROFILE;TYPE=instagram:${socials.instagram}`,
    `NOTE:${escapeText("Your South Jersey Realtor!")}`,
    `PHOTO;VALUE=URI;TYPE=PNG:${siteUrl}${contact.headshotPath}`,
    "END:VCARD",
  ];
  return lines.join("\r\n") + "\r\n";
}
