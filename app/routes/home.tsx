import type { Route } from "./+types/home";
import { AddContactButton } from "~/components/AddContactButton";
import { ServiceAreaMap } from "~/components/map/ServiceAreaMap";
import { ResourceBlock } from "~/components/ResourceBlock";
import { Typewriter } from "~/components/Typewriter";
import { Cta } from "~/components/ui/Cta";
import { Separator } from "~/components/ui/Separator";
import { counties } from "~/content/service-area";
import { assets } from "~/lib/assets";
import { pageMeta } from "~/lib/meta";
import { useSite } from "~/lib/use-site";

export const meta: Route.MetaFunction = ({ matches }) => pageMeta(matches);

const heroSubtext =
  "relative m-2.5 flex justify-center text-[17pt] font-normal uppercase tracking-[4px] max-md:text-[15px] max-md:text-center";
const sectionTitle = "text-[25px] font-bold uppercase tracking-[1px]";

export default function Home() {
  const site = useSite();
  const { contact } = site;
  const countyList = counties.map((c) => `${c.name}${c.partial ? "*" : ""}`).join(" - ");

  return (
    <>
      {/* Hero */}
      <section
        className="relative z-[1] mt-[30px] mb-10 bg-cover bg-top"
        style={{ backgroundImage: `url(${assets.heroImage})` }}
      >
        <h2 className={`${heroSubtext} mt-[70px] max-md:mt-10`}>
          Most People Call me {contact.nickname}
        </h2>
        <h1 className="mx-auto flex w-[85%] justify-center text-[35pt] font-medium capitalize max-md:text-center max-md:text-[30px] max-md:uppercase max-md:text-gray-500">
          But you can call me,
        </h1>
        <Typewriter as="h3" className={`${heroSubtext} mx-auto mb-[60px] max-md:mt-5`}>
          Anytime.
        </Typewriter>
        <div className="mb-[70px] flex justify-center gap-2">
          <Cta href={site.links.listings} external>
            Search Homes
          </Cta>
          <Cta to="/sell">Sell Home</Cta>
        </div>
        <Separator />
      </section>

      {/* Resource blocks */}
      <section className="flex justify-center max-md:flex-wrap">
        <ResourceBlock
          glyph={assets.glyphs.sell}
          title="How I can help you sell"
          description="Don't understand the process of selling your home? It can be a lot easier than you think."
          cta={{ label: "Help Me!", to: "/sell" }}
        />
        <ResourceBlock
          glyph={assets.glyphs.buy}
          title="Finding your dream home"
          description="Looking for a home can be an exhausting process in this market. Let me help you find the right one."
          cta={{ label: "Help Me!", href: site.links.listings }}
        />
      </section>

      {/* Service area */}
      <section id="service-area" className="my-10 scroll-mt-6">
        <h3 className={`${sectionTitle} flex justify-center`}>Counties I service</h3>
        <br />
        <Separator className="mt-0 mb-[25px]" />
        <h4 className="flex justify-center font-body text-xl font-light max-md:px-4 max-md:text-center max-md:text-[17px]">
          {countyList}
        </h4>
      </section>
      <ServiceAreaMap />
      <div className="flex justify-center">
        <p className="text-[13px] font-thin italic">*Not entire county</p>
      </div>

      {/* About */}
      <section id="about" className="mt-10 scroll-mt-6">
        <div className="mt-[15px] flex justify-center">
          <h3 className={sectionTitle}>A little about me</h3>
        </div>
        <Separator />
        <div className="mt-[15px] flex justify-center">
          <p className="w-[600px] max-w-full text-center max-nav:px-5">
            Hey! I'm {contact.fullName}, an enthusiastic realtor looking to help people in the
            place I grew up, {site.region}! I've lived all over, from Somerdale, to Voorhees, and
            currently Sicklerville.
            <br />
            <br />
            I'm available to help you sell, buy, rent, or answer any of your questions regarding
            real estate. Feel free to shoot me a text or give me a call! You can add my contact by
            clicking the button below!
          </p>
        </div>
        <div className="mt-[15px] flex justify-center">
          <img
            src={contact.headshotPath}
            alt={`${contact.fullName} headshot`}
            className="my-[15px] w-20 rounded-[40px] border-2 border-brand"
          />
        </div>
      </section>

      <div className="mb-[70px] flex justify-center">
        <AddContactButton className="mb-[50px]" />
      </div>
    </>
  );
}
