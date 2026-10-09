import type { Route } from "./+types/under-development";
import { Typewriter } from "~/components/Typewriter";
import { Cta } from "~/components/ui/Cta";
import { pageMeta } from "~/lib/meta";

export const meta: Route.MetaFunction = ({ matches }) => pageMeta(matches, "Under Development");

export default function UnderDevelopment() {
  return (
    <div className="mx-auto mt-[200px] mb-20 px-4 max-md:mt-10">
      <Typewriter
        as="h1"
        className="mx-auto my-2.5 text-[60px] uppercase tracking-[4px] max-md:text-2xl"
      >
        Under Development
      </Typewriter>
      <h2 className="flex justify-center text-center text-xl font-thin max-md:text-[15px]">
        This page will be coming soon, stay tuned!
      </h2>
      <div className="mt-[30px] flex justify-center">
        <Cta to="/">Home</Cta>
      </div>
    </div>
  );
}
