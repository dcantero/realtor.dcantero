import { cn } from "~/lib/cn";

/** Thin horizontal rule used under headings. Defaults to the 150px centered variant. */
export function Separator({ className }: { className?: string }) {
  return <div className={cn("mx-auto my-5 h-0.5 w-[150px] bg-line", className)} />;
}
