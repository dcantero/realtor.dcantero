import { Link } from "react-router";

import { SocialLinks } from "~/components/ui/SocialLinks";
import { useSite } from "~/lib/use-site";

type FooterLink = { label: string; to: string };

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="basis-[30%] max-md:mb-[45px] max-md:text-center">
      <h4 className="mb-[30px] text-xl uppercase tracking-[3px] font-bold max-md:mb-0">{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link.label} className="my-2.5">
            <Link
              to={link.to}
              className="font-light uppercase tracking-[3px] text-link no-underline transition-colors duration-300 hover:text-brand"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const site = useSite();

  const helpful: FooterLink[] = [
    { label: "Contact", to: "/contact" },
    { label: "Business Card", to: "/card" },
    { label: "About Me", to: "/#about" },
    { label: "Areas I Service", to: "/#service-area" },
  ];
  const other: FooterLink[] = [
    { label: "Careers", to: "/under-development" },
    { label: "Terms of Use", to: "/terms-of-use" },
    { label: "Privacy Policy", to: "/privacy-policy" },
  ];

  return (
    <footer className="mt-5 flex justify-between pb-6 max-md:flex-col max-md:items-center">
      <div className="basis-[30%] ml-[30px] max-md:mx-auto max-md:mb-[45px] max-md:text-center">
        <img
          src={site.contact.brokerageLogoPath}
          alt={`${site.contact.brokerage} logo`}
          className="w-[400px] max-w-full max-md:w-[300px]"
        />
        <p className="mt-5 text-link">Add me on my socials to keep up with updates!</p>
        <SocialLinks variant="footer" className="max-md:flex max-md:justify-center" />
      </div>
      <FooterColumn title="Helpful Links" links={helpful} />
      <FooterColumn title="Other Links" links={other} />
    </footer>
  );
}
