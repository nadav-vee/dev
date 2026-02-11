import { Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { paywallCopy } from "@/lib/paywall";

type PaywallCardProps = {
  priceCents: number;
};

export function PaywallCard({ priceCents }: PaywallCardProps) {
  return (
    <div className="rounded-2xl border border-crt-cyan/50 bg-crt-panel/80 p-5 shadow-neon">
      <p className="mb-2 inline-flex items-center gap-2 text-crt-cyan">
        <Crown className="h-4 w-4" /> VIP Archetype Club
      </p>
      <p className="mb-4 text-sm text-white/80">{paywallCopy(priceCents)}</p>
      <ul className="mb-5 space-y-2 text-sm text-white/90">
        <li className="inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-crt-lime" /> New weekly franchise packs
        </li>
        <li className="inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-crt-lime" /> AI-built share card + result roast
        </li>
      </ul>
      <Button className="w-full">Unlock Unlimited</Button>
    </div>
  );
}
