import type { ElementType, ReactNode } from "react";

import { cn } from "~/lib/cn";

/** Wraps text in the CSS-only typewriter reveal defined in app.css. */
export function Typewriter({
  as: Tag = "span",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={cn("typewriter", className)}>{children}</Tag>;
}
