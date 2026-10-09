import { Cta } from "~/components/ui/Cta";
import { VCARD_PATH } from "~/lib/assets";

/** Downloads the server-generated vCard. */
export function AddContactButton({ className }: { className?: string }) {
  return (
    <Cta href={VCARD_PATH} download className={className}>
      Add Contact
    </Cta>
  );
}
