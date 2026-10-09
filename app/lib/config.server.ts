import type { SiteConfig } from "./site-config";

function env(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (value === undefined || value === "") {
    throw new Error(
      `Missing required environment variable ${name}. Copy .env.example to .env and fill it in.`,
    );
  }
  return value;
}

function list(name: string): string[] {
  return env(name)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

const firstName = env("CONTACT_FIRST_NAME");
const lastName = env("CONTACT_LAST_NAME");
const siteUrl = env("SITE_URL").replace(/\/+$/, "");
const instagram = env("SOCIAL_INSTAGRAM_URL");

/**
 * Everything in here is already visible on the rendered pages, so it is safe
 * to send to the browser via the root loader. Keep server-only secrets out.
 */
export const publicConfig: SiteConfig = {
  siteUrl,
  siteHost: new URL(siteUrl).host,
  region: env("SITE_REGION"),
  googleMapsApiKey: env("GOOGLE_MAPS_API_KEY"),
  typekitKitIds: list("TYPEKIT_KIT_IDS"),
  contact: {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    nickname: env("CONTACT_NICKNAME", firstName),
    title: env("CONTACT_TITLE", "Realtor"),
    phoneE164: env("CONTACT_PHONE"),
    email: env("CONTACT_EMAIL"),
    license: env("CONTACT_LICENSE"),
    brokerage: env("BROKERAGE_NAME"),
    brokerageLogoPath: env(
      "BROKERAGE_LOGO_PATH",
      "/images/Logos/Real-Broker-Logo-Black.png",
    ),
    headshotPath: env("CONTACT_HEADSHOT_PATH", "/images/headshot-dcantero.png"),
  },
  socials: {
    facebook: env("SOCIAL_FACEBOOK_URL"),
    instagram,
    instagramHandle: new URL(instagram).pathname.replace(/\//g, ""),
    linkedin: env("SOCIAL_LINKEDIN_URL"),
  },
  links: {
    listings: env("LISTINGS_URL"),
    homeValuation: env("HOME_VALUATION_URL"),
  },
};

export const config = {
  ...publicConfig,
  port: Number.parseInt(env("PORT", "3000")),
};
