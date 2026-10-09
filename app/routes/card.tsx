import type { Route } from "./+types/card";
import { AddContactButton } from "~/components/AddContactButton";
import { AddToWalletButton } from "~/components/AddToWalletButton";
import { BusinessCard } from "~/components/BusinessCard";
import { SocialLinks } from "~/components/ui/SocialLinks";
import { assets } from "~/lib/assets";
import { pageMeta } from "~/lib/meta";

export const meta: Route.MetaFunction = ({ matches }) => pageMeta(matches, "Card");

export default function Card() {
  return (
    <>
      <BusinessCard />
      <div className="mx-auto my-20 flex w-[330px] flex-col items-center gap-[15px]">
        <AddToWalletButton />
        <AddContactButton className="w-[200px] rounded-[10px] border-0 bg-card px-6 py-3 text-center shadow-none transition-transform duration-200 hover:scale-105 hover:text-ink" />
      </div>
      <SocialLinks variant="card" />
      <div className="my-[60px] text-center">
        <img
          src={assets.cardQr}
          alt="QR code linking to this business card"
          className="inline-block w-[280px]"
        />
      </div>
    </>
  );
}
