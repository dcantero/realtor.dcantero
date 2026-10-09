import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("card", "routes/card.tsx"),
  route("contact", "routes/contact.tsx"),
  route("sell", "routes/sell.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog-post.tsx"),
  route("outreach/camden-county-market-report", "routes/camden-county-market-report.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("terms-of-use", "routes/terms-of-use.tsx"),
  route("under-development", "routes/under-development.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
