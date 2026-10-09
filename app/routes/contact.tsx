import { FaComment, FaEnvelope, FaPhone, FaSquareInstagram } from "react-icons/fa6";

import type { Route } from "./+types/contact";
import { AddContactButton } from "~/components/AddContactButton";
import { ContactCard } from "~/components/ContactCard";
import { Cta } from "~/components/ui/Cta";
import { formatPhone, mailtoHref, smsHref, telHref } from "~/lib/format";
import { pageMeta } from "~/lib/meta";
import { useSite } from "~/lib/use-site";

export const meta: Route.MetaFunction = ({ matches }) => pageMeta(matches, "Contact");

export default function Contact() {
  const { contact, socials } = useSite();
  const greeting = `Hey ${contact.nickname}! When are you available to chat?`;
  const phone = formatPhone(contact.phoneE164);

  return (
    <>
      <div className="px-4 text-center">
        <h1 className="text-[2em] font-bold">Get In Touch!</h1>
        <h2 className="mx-auto my-2.5 text-[1.5em] font-thin">
          Feel free to reach out any time. If I don't answer your call, leave me a message or
          shoot me a text!
        </h2>
        <div className="my-10">
          <Cta to="/card">Business Card</Cta>
        </div>
        <div className="mb-5">
          <AddContactButton />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <ContactCard icon={FaPhone} href={telHref(contact.phoneE164)} label={phone} blurb="Give me a call!" />
        <ContactCard
          icon={FaComment}
          href={smsHref(contact.phoneE164, greeting)}
          label={phone}
          blurb="Shoot me a text with any questions you may have!"
        />
        <ContactCard
          icon={FaEnvelope}
          href={mailtoHref(contact.email, greeting)}
          label={contact.email}
          blurb="Email me here!"
        />
        <ContactCard
          icon={FaSquareInstagram}
          href={socials.instagram}
          external
          label={socials.instagramHandle}
          blurb="Message me on Instagram!"
        />
      </div>
    </>
  );
}
