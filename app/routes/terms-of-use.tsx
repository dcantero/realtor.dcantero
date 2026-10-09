import type { Route } from "./+types/terms-of-use";
import { pageMeta } from "~/lib/meta";
import { useSite } from "~/lib/use-site";

export const meta: Route.MetaFunction = ({ matches }) => pageMeta(matches, "Terms of Use");

const MIN_AGE = 18;

export default function TermsOfUse() {
  const { contact, siteHost } = useSite();
  const name = contact.fullName;
  return (
    <div className="mx-auto my-[100px] w-[800px] max-w-[85%] space-y-4">
      <h1 className="font-bold">Terms Of Use</h1>
      <p>Effective Date: August 1st, 2023</p>
      <p>
        Welcome to {siteHost}! These Terms of Use ("Terms") govern your use of our website located
        at {siteHost} (the "Service"). Please read these Terms carefully before using the Service.
      </p>

      <h2 className="pt-4 font-bold">1. Acceptance Of Terms</h2>
      <p>
        By accessing or using the Service, you agree to be bound by these Terms and all applicable
        laws and regulations. If you do not agree with any part of these Terms, you must not use
        the Service.
      </p>

      <h2 className="pt-4 font-bold">2. Use Of the Service</h2>
      <p>a. Eligibility: You must be at least {MIN_AGE} years old to use the Service.</p>
      <p>
        b. User Account: You may need to create an account to access certain features of the
        Service. When creating an account, you must provide accurate and complete information. You
        are solely responsible for maintaining the confidentiality of your account credentials and
        for all activities that occur under your account.
      </p>
      <p>
        c. User Conduct: You agree not to use the Service for any unlawful or prohibited purpose,
        including but not limited to:
      </p>
      <ul className="list-disc pl-6 font-body font-light">
        <li>Violating any applicable laws or regulations.</li>
        <li>Interfering with or disrupting the Service or servers or networks connected to the Service.</li>
        <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity.</li>
        <li>Uploading or transmitting any harmful, unlawful, or otherwise objectionable content.</li>
      </ul>

      <h2 className="pt-4 font-bold">3. Intellectual Property</h2>
      <p>
        a. Ownership: All content, trademarks, logos, and other intellectual property rights
        related to the Service are the property of {name} or its licensors. You are granted a
        limited, non-exclusive, non-transferable license to access and use the Service for
        personal, non-commercial purposes.
      </p>
      <p>
        b. User Content: By submitting any content (e.g., comments, feedback, or other materials)
        on or through the Service, you grant us a non-exclusive, royalty-free, worldwide,
        perpetual, and irrevocable license to use, modify, reproduce, distribute, and display the
        content in connection with the Service.
      </p>

      <h2 className="pt-4 font-bold">4. Disclaimer of Warranties</h2>
      <p>
        The Service is provided on an "as-is" and "as available" basis, without any warranties,
        express or implied. {name} disclaims all warranties, including but not limited to
        warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h2 className="pt-4 font-bold">5. Limitation of Liability</h2>
      <p>
        In no event shall {name} or its directors, officers, employees, or affiliates be liable
        for any direct, indirect, incidental, special, or consequential damages arising out of or
        in any way connected with your use of the Service.
      </p>

      <h2 className="pt-4 font-bold">6. Modification of Terms</h2>
      <p>
        {name} reserves the right to modify these Terms at any time without prior notice. Any
        changes will be effective immediately upon posting the revised Terms on the Service. Your
        continued use of the Service after the posting of the updated Terms constitutes your
        acceptance of the changes.
      </p>

      <h2 className="pt-4 font-bold">7. Governing Law and Jurisdiction</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the United
        States, without regard to its conflicts of law principles. Any dispute arising under or in
        connection with these Terms shall be subject to the exclusive jurisdiction of the courts
        located in Sicklerville, New Jersey.
      </p>
      <p>
        If you have any questions or concerns about these Terms, please contact us at{" "}
        <a href={`mailto:${contact.email}`} className="underline">
          {contact.email}
        </a>
        .
      </p>
    </div>
  );
}
