import type { ReactNode } from "react";

import { formatPhone, mailtoHref } from "~/lib/format";
import { useSite } from "~/lib/use-site";

function InfoRow({ letter, children }: { letter: string; children: ReactNode }) {
  return (
    <p className="mt-2.5 font-sans font-thin">
      <span className="text-[9pt]">{letter} </span>
      <span className="mx-[5px] inline-block h-3 border-l-2 border-card-accent align-middle" />
      {children}
    </p>
  );
}

/** The digital business card shown at /card (also what the wallet pass QR points to). */
export function BusinessCard() {
  const { contact, siteUrl, siteHost } = useSite();
  return (
    <div className="relative mx-auto my-20 h-[500px] w-[330px] rounded-[25px] border border-line bg-card p-5 font-sans text-white shadow-card max-md:my-[30px]">
      <div className="flex text-[11pt] uppercase tracking-[3px]">
        <div>
          <p className="font-sans font-normal">{contact.fullName}</p>
          <p className="font-sans font-normal tracking-[2px] text-card-accent">{contact.title}®</p>
        </div>
        <div className="ml-auto">
          <img
            src={contact.headshotPath}
            alt={`${contact.fullName} headshot`}
            className="h-[70px] rounded-[50px] border-[2.5px] border-card-accent"
          />
        </div>
      </div>
      <div className="mt-[170px]">
        <InfoRow letter="C">{formatPhone(contact.phoneE164)}</InfoRow>
        <InfoRow letter="E">
          <a href={mailtoHref(contact.email)} className="transition-colors hover:text-gray-300">
            {contact.email}
          </a>
        </InfoRow>
        <InfoRow letter="W">
          <a href={siteUrl} className="transition-colors hover:text-gray-300">
            {siteHost}
          </a>
        </InfoRow>
        <InfoRow letter="L">#{contact.license}</InfoRow>
      </div>
      <div className="absolute bottom-2.5 left-1/2 mb-2.5 -translate-x-1/2 text-center">
        <img
          src={contact.brokerageLogoPath}
          alt={`${contact.brokerage} logo`}
          className="mx-auto w-[120px]"
        />
      </div>
    </div>
  );
}
