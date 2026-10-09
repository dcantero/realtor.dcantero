import { cn } from "~/lib/cn";

/**
 * Thin horizontal rule used under headings. Pass width and margins in
 * `className`; the default is the 150px centered variant.
 */
export function Separator({ className = "mx-auto my-5 w-[150px]" }: { className?: string }) {
  return <div className={cn("h-0.5 bg-line", className)} />;
}
