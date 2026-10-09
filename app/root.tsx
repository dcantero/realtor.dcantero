import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Footer } from "~/components/layout/Footer";
import { Header } from "~/components/layout/Header";
import { NotFoundView } from "~/components/NotFoundView";
import { Cta } from "~/components/ui/Cta";
import { assets } from "~/lib/assets";
import { publicConfig } from "~/lib/config.server";
import { pageMeta } from "~/lib/meta";

export async function loader() {
  return { site: publicConfig };
}

export const meta: Route.MetaFunction = ({ matches }) => pageMeta(matches);

export const links: Route.LinksFunction = () => [
  { rel: "apple-touch-icon", sizes: "180x180", href: assets.favicon.appleTouch },
  { rel: "icon", type: "image/png", sizes: "32x32", href: assets.favicon.png32 },
  { rel: "icon", type: "image/png", sizes: "16x16", href: assets.favicon.png16 },
  { rel: "preconnect", href: "https://use.typekit.net", crossOrigin: "anonymous" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  // May be undefined when the root loader itself failed.
  const data = useRouteLoaderData<typeof loader>("root");
  const kitIds = data?.site.typekitKitIds ?? [];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {kitIds.map((id) => (
          <link key={id} rel="stylesheet" href={`https://use.typekit.net/${id}.css`} />
        ))}
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const data = useRouteLoaderData<typeof loader>("root");
  const notFound = isRouteErrorResponse(error) && error.status === 404;

  let content: React.ReactNode;
  if (notFound) {
    content = <NotFoundView />;
  } else {
    const details =
      import.meta.env.DEV && error instanceof Error ? error.stack ?? error.message : undefined;
    content = (
      <div className="mx-auto my-20 w-[85%] max-w-3xl">
        <h1 className="text-5xl font-bold">Something went wrong</h1>
        <p className="mt-4 text-xl">
          An unexpected error occurred. Please try again, or head back home.
        </p>
        {details && (
          <pre className="mt-6 overflow-x-auto rounded-lg border border-line bg-surface p-4 text-xs">
            <code>{details}</code>
          </pre>
        )}
        <div className="mt-6">
          <Cta to="/">Home</Cta>
        </div>
      </div>
    );
  }

  // Header/Footer need site config; skip them when the root loader failed.
  if (!data) return <main className="flex-1">{content}</main>;

  return (
    <>
      <Header />
      <main className="flex-1">{content}</main>
      <Footer />
    </>
  );
}
