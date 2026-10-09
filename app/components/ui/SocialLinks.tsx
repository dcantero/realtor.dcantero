import type { IconType } from "react-icons";
import { FaBehance, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import { cn } from "~/lib/cn";
import { useSite } from "~/lib/use-site";

type Variant = "footer" | "card";

const linkStyles: Record<Variant, string> = {
  footer:
    "inline-block m-5 first:ml-0 text-[22px] text-icon transition-colors duration-300 hover:text-brand",
  card: "m-[30px] rounded-[10px] bg-card-chip px-3.5 py-2 text-[17pt] text-icon transition-colors duration-300 hover:text-white max-md:m-2.5",
};

export function SocialLinks({ variant, className }: { variant: Variant; className?: string }) {
  const { socials } = useSite();
  const items: Array<{ href: string; label: string; Icon: IconType }> = [
    { href: socials.facebook, label: "Facebook", Icon: FaFacebookF },
    { href: socials.instagram, label: "Instagram", Icon: FaInstagram },
    { href: socials.behance, label: "Behance", Icon: FaBehance },
    { href: socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
    { href: socials.github, label: "GitHub", Icon: FaGithub },
  ];

  return (
    <div className={cn(variant === "card" && "flex flex-wrap justify-center", className)}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={linkStyles[variant]}
        >
          <Icon aria-hidden className="inline-block" />
        </a>
      ))}
    </div>
  );
}
