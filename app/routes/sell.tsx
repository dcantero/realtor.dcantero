import type { Route } from "./+types/sell";
import { Cta } from "~/components/ui/Cta";
import { assets } from "~/lib/assets";
import { pageMeta } from "~/lib/meta";

export const meta: Route.MetaFunction = ({ matches }) =>
  pageMeta(matches, "Sell", "A step-by-step plan to get your New Jersey home sold quickly and for top dollar.");

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "preparing", label: "Preparing" },
  { id: "whats-next", label: "What's Next" },
];

export default function Sell() {
  return (
    <>
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.sellHeaderImage})` }}
      >
        <div className="m-5 p-10 max-md:p-5">
          <h1 className="mb-5 text-[50px] font-bold leading-tight max-md:text-[36px]">
            Selling Your Home
            <br />
            In New Jersey
          </h1>
          <p className="max-w-[30%] max-md:max-w-full">
            Getting your home sold can be an overwhelming process, which is why realtors are here
            to help! Below is a comprehensive plan to get your home sold quickly and for the most
            amount in your pocket possible.
          </p>
          <div className="mt-10">
            <Cta to="/contact">Contact Me!</Cta>
          </div>
        </div>
      </section>

      <article className="mx-auto my-5 w-1/2 max-md:w-[85%]">
        <nav aria-label="Table of contents" className="my-5 mb-10 inline-block rounded border border-gray-500">
          <p className="border-b border-gray-500 px-2 py-1 text-xl font-bold font-sans">Table Of Contents</p>
          <ul>
            {sections.map((s) => (
              <li key={s.id} className="px-2 py-1 pr-[50px] text-lg">
                <a href={`#${s.id}`} className="transition-colors hover:text-gray-500">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* TODO: replace the placeholder (lorem ipsum) copy below with real content. */}
        <h2 id="introduction" className="scroll-mt-6 text-[30px] font-bold capitalize">
          How to properly sell your home
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iure. Tempore quae
          corrupti enim. Voluptas dignissimos quae molestiae animi quo ducimus rerum corrupti
          provident, minus accusamus fuga. Praesentium velit dolores labore molestias delectus
          expedita, quam cum sapiente culpa consequatur harum fugit maxime nihil sed laboriosam in,
          doloremque quos obcaecati cumque.
        </p>
        <br />
        <br />
        <h3 id="preparing" className="scroll-mt-6 text-[25px] font-bold">
          Preparing
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, assumenda ut doloribus
          atque fugit soluta officia non necessitatibus iure vel laborum quas reiciendis ipsam
          maxime obcaecati nisi, dolorem, veniam vero delectus architecto nostrum animi eveniet
          esse. Nisi blanditiis, sed odit perferendis quam expedita, similique dolores nostrum a
          itaque molestiae assumenda.
        </p>
        <br />
        <br />
        <h3 id="whats-next" className="scroll-mt-6 text-[25px] font-bold">
          What's Next
        </h3>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint ab sapiente quos
          quibusdam necessitatibus voluptate id magnam. Facilis in omnis labore amet, ex quidem
          molestias quas dolor voluptatem! Laudantium hic sit facilis odio est officiis. Molestiae,
          sapiente. Similique veniam quod voluptatum a exercitationem ab voluptatem iure.
          Consequuntur, earum animi!
        </p>
      </article>
    </>
  );
}
