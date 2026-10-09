import type { IconType } from "react-icons";

type ContactCardProps = {
  icon: IconType;
  href: string;
  external?: boolean;
  label: string;
  blurb: string;
};

export function ContactCard({ icon: Icon, href, external, label, blurb }: ContactCardProps) {
  const linkProps = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <div className="m-10 h-[270px] w-[230px] rounded-[20px] border border-line bg-surface shadow-card">
      <div className="my-[50px] flex justify-center">
        <a
          href={href}
          aria-label={label}
          className="rounded-[10px] border border-line bg-surface p-3 text-[30px] text-icon shadow-card transition-colors duration-300 hover:text-brand"
          {...linkProps}
        >
          <Icon aria-hidden />
        </a>
      </div>
      <div className="text-center">
        <div className="mb-[25px]">
          <a
            href={href}
            className="text-gray-400 transition-colors duration-300 hover:text-gray-500"
            {...linkProps}
          >
            {label}
          </a>
        </div>
        <p className="px-2">{blurb}</p>
      </div>
    </div>
  );
}
