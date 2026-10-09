import type { ReactNode } from "react";
import { Link } from "react-router";

import { cn } from "~/lib/cn";

const base =
  "inline-block cursor-pointer rounded-[5px] border border-line bg-surface px-3 py-2.5 text-[15px] uppercase tracking-[3px] text-ink no-underline shadow-card transition-colors duration-300 hover:text-gray-500";

type CtaProps = {
  /** Internal route; renders a client-side <Link>. */
  to?: string;
  /** External or non-route URL; renders a plain <a>. */
  href?: string;
  /** Open `href` in a new tab. */
  external?: boolean;
  download?: boolean | string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};

/** The site's single call-to-action button style, ported from `.cta` in styles.css. */
export function Cta({ to, href, external, download, type = "button", onClick, className, children }: CtaProps) {
  const classes = cn(base, className);
  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
