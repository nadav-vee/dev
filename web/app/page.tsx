import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PaywallCard } from "@/components/paywall-card";

export default function HomePage() {
  return (
    <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
      <section className="space-y-6">
        <p className="inline-flex rounded-full border border-crt-cyan/50 bg-black/30 px-3 py-1 text-xs uppercase tracking-widest text-crt-cyan">
          VibeType by QuizWave Labs
        </p>
        <h1 className="text-4xl font-black leading-tight md:text-5xl">
          Build chaotic-good pop culture quizzes that feel like old-school internet magic.
        </h1>
        <p className="text-white/80">
          Drop in any show, character, or fandom idea. VibeType generates a fun, accurate Buzzfeed-style
          personality flow with monetized premium packs built in from day one.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/quiz/new">Generate a Quiz</Link>
          </Button>
          <Button variant="ghost">Sign in with Clerk</Button>
        </div>
      </section>
      <PaywallCard priceCents={499} />
    </div>
  );
}
