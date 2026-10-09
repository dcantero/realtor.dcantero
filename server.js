import path from "node:path";
import compression from "compression";
import express from "express";

// Short-circuit the type-checking of the built output.
const BUILD_PATH = "./build/server/index.js";
const DEVELOPMENT = process.env.NODE_ENV === "development";
const PORT = Number.parseInt(process.env.PORT || "3000");
const PUBLIC_DIR = path.join(import.meta.dirname, "public");

const app = express();

app.disable("x-powered-by");

// Serve the Apple Wallet pass before any static middleware so the content
// type is always correct (Vite's dev static handler does not know .pkpass).
// No Content-Disposition: iOS Safari needs the inline response to hand the
// pass off to Wallet.
app.get("/dcantero-card.pkpass", (_req, res) => {
  res.type("application/vnd.apple.pkpass");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.sendFile(path.join(PUBLIC_DIR, "dcantero-card.pkpass"));
});

app.use(compression());

if (DEVELOPMENT) {
  console.log("Starting development server");
  const viteDevServer = await import("vite").then((vite) =>
    vite.createServer({
      server: { middlewareMode: true },
    }),
  );
  app.use(viteDevServer.middlewares);
  app.use(async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule("./server/app.ts");
      return await source.app(req, res, next);
    } catch (error) {
      if (typeof error === "object" && error instanceof Error) {
        viteDevServer.ssrFixStacktrace(error);
      }
      next(error);
    }
  });
} else {
  console.log("Starting production server");
  app.use(
    "/assets",
    express.static("build/client/assets", { immutable: true, maxAge: "1y" }),
  );
  app.use(express.static("build/client", { maxAge: "1h" }));
  app.use(await import(BUILD_PATH).then((mod) => mod.app));
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
