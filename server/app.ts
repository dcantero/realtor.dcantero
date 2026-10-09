import { createRequestHandler } from "@react-router/express";
import express from "express";

import { config } from "~/lib/config.server";
import { legacyRedirects } from "./redirects";
import { buildVCard } from "./vcard";

export const app = express();

app.get("/healthz", (_req, res) => {
  res.json({ ok: true });
});

app.use(legacyRedirects);

// Downloadable contact card, generated from the env-driven site config so it
// never drifts from what the pages display.
app.get("/contact.vcf", (_req, res) => {
  const { firstName, lastName } = config.contact;
  const filename = `${firstName}-${lastName}.vcf`.toLowerCase();
  res.type("text/vcard; charset=utf-8");
  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.send(buildVCard(config));
});

app.use(
  createRequestHandler({
    build: () => import("virtual:react-router/server-build"),
  }),
);
