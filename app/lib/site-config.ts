/**
 * Shape of the site configuration. Values are read from environment
 * variables on the server (see `config.server.ts`) and the public subset is
 * passed to the browser through the root route loader.
 */
export interface SiteContact {
  firstName: string;
  lastName: string;
  fullName: string;
  /** Short display name used in copy, e.g. "Dan". */
  nickname: string;
  title: string;
  /** E.164 format, e.g. +16099635311. Display/tel/sms forms are derived. */
  phoneE164: string;
  email: string;
  /** State real-estate license number. */
  license: string;
  brokerage: string;
  /** Path under /public to the brokerage / team logo. */
  brokerageLogoPath: string;
  /** Path under /public to the headshot image. */
  headshotPath: string;
}

export interface SiteSocials {
  facebook: string;
  instagram: string;
  /** Instagram handle without the @, used for display. */
  instagramHandle: string;
  linkedin: string;
}

export interface SiteLinks {
  /** External home-search page (brokerage listings). */
  listings: string;
  /** External "what's my home worth" valuation page. */
  homeValuation: string;
}

export interface SiteConfig {
  siteUrl: string;
  /** Display form of the domain, e.g. realtor.dcantero.com */
  siteHost: string;
  /** Service region used in titles and the logo, e.g. "South Jersey". */
  region: string;
  googleMapsApiKey: string;
  typekitKitIds: string[];
  contact: SiteContact;
  socials: SiteSocials;
  links: SiteLinks;
}
