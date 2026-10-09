import { useEffect, useId, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

import { cn } from "~/lib/cn";
import { useSite } from "~/lib/use-site";
import { Separator } from "~/components/ui/Separator";
import { Logo } from "./Logo";

type NavItem = { label: string; to?: string; href?: string };

const linkClass =
  "font-light uppercase tracking-[3px] no-underline transition-colors duration-300 hover:text-[rgb(135,135,135)]";

function NavLink({ item }: { item: NavItem }) {
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className={linkClass}>
        {item.label}
      </a>
    );
  }
  return (
    <Link to={item.to ?? "/"} className={linkClass}>
      {item.label}
    </Link>
  );
}

export function Header() {
  const site = useSite();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // Close the mobile menu whenever navigation happens.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const left: NavItem[] = [
    { label: "Contact", to: "/contact" },
    { label: "Resources", to: "/blog" },
    { label: "Find a Home", href: site.links.listings },
  ];
  const right: NavItem[] = [
    { label: "Sell", to: "/under-development" },
    { label: "Testimonials", to: "/under-development" },
    { label: "Partners", to: "/under-development" },
  ];

  return (
    <header className="relative">
      {/* Desktop */}
      <div className="hidden items-center justify-center mt-[30px] mb-5 text-base nav:flex max-wide:text-xs">
        <nav aria-label="Primary" className="mr-[4%] max-wide:mr-2.5">
          <ul className="flex gap-[45px] max-wide:gap-[25px]">
            {left.map((item) => (
              <li key={item.label}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </nav>
        <Logo />
        <nav aria-label="Secondary" className="ml-[4%] max-wide:ml-2.5">
          <ul className="flex gap-[45px] max-wide:gap-[25px]">
            {right.map((item) => (
              <li key={item.label}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile */}
      <div className="pt-5 nav:hidden">
        <div className="mb-5 ml-5 inline-block">
          <Logo />
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((o) => !o)}
          className="absolute top-[30px] right-[30px] z-10 cursor-pointer text-2xl"
        >
          {open ? <FaXmark aria-hidden /> : <FaBars aria-hidden />}
        </button>
        <nav
          id={menuId}
          aria-label="Mobile"
          className={cn(
            "ml-5 overflow-hidden transition-all duration-500 ease-in-out",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <Separator className="mx-0 my-4 w-[150px]" />
          <ul className="flex flex-col gap-2.5 pb-5">
            {[...left, ...right].map((item) => (
              <li key={item.label}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
