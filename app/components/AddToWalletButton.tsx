import { assets, WALLET_PASS_PATH } from "~/lib/assets";

/**
 * Apple's "Add to Apple Wallet" badge. No `download` attribute on purpose:
 * iOS Safari must receive the pass inline to hand it off to Wallet.
 */
export function AddToWalletButton() {
  return (
    <a
      href={WALLET_PASS_PATH}
      className="inline-block transition-transform duration-200 hover:scale-105"
    >
      <img src={assets.appleWalletBadge} alt="Add to Apple Wallet" className="h-auto w-[200px]" />
    </a>
  );
}
