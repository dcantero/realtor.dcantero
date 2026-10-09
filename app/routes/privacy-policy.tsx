import type { Route } from "./+types/privacy-policy";
import { pageMeta } from "~/lib/meta";
import { useSite } from "~/lib/use-site";

export const meta: Route.MetaFunction = ({ matches }) => pageMeta(matches, "Privacy Policy");

export default function PrivacyPolicy() {
  const { contact, siteHost } = useSite();
  return (
    <div className="mx-auto my-[100px] w-[800px] max-w-[85%] space-y-4">
      <h1 className="font-bold">Privacy Policy</h1>
      <p>Effective Date: August 1st, 2023</p>
      <p>
        {contact.fullName} operates the {siteHost} website. This page informs you of our policies
        regarding the collection, use, and disclosure of personal data when you use our Service
        and the choices you have associated with that data.
      </p>
      <p>
        We use your data to provide and improve the Service. By using the Service, you agree to
        the collection and use of information following this policy.
      </p>
      <h2 className="pt-4 font-bold">Information Collection and Use</h2>
      <p>
        We do not collect personally identifiable information unless you voluntarily provide it to
        us. The types of information we may collect include:
      </p>
      <h3 className="font-bold">Usage Data</h3>
      {/* TODO: the original policy text ended mid-sentence here; finish this section. */}
      <p>
        We may collect information on how the Service is accessed and used ("Usage Data"). This
        Usage Data may include your computer's Internet Protocol address (e.g., IP address),
        browser type, browser version, the pages of our Service that you visit, the time and date
        of your visit, the time spent on those pages, and other diagnostic data.
      </p>
      <h2 className="pt-4 font-bold">Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at{" "}
        <a href={`mailto:${contact.email}`} className="underline">
          {contact.email}
        </a>
        .
      </p>
    </div>
  );
}
