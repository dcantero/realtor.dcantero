import type { RequestHandler } from "express";

/**
 * The old site was plain HTML on GitHub Pages, so every page lived at a
 * `*.html` URL. Keep those links (and anything printed or shared) working.
 */
const legacyPaths: Record<string, string> = {
  "/index.html": "/",
  "/index": "/",
  "/card.html": "/card",
  "/contact.html": "/contact",
  "/resources.html": "/blog",
  "/resources": "/blog",
  "/sell.html": "/sell",
  "/privacy-policy.html": "/privacy-policy",
  "/terms-of-use.html": "/terms-of-use",
  "/under-development.html": "/under-development",
  "/outreach/camden-county-MR.html": "/outreach/camden-county-market-report",
};

const htmlSuffix = /^\/(.+)\.html$/;

export const legacyRedirects: RequestHandler = (req, res, next) => {
  const explicit = legacyPaths[req.path];
  if (explicit) {
    res.redirect(301, explicit);
    return;
  }
  const match = htmlSuffix.exec(req.path);
  if (match) {
    res.redirect(301, `/${match[1]}`);
    return;
  }
  next();
};
