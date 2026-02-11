"use client";

import { useMemo, useState } from "react";
import { QuizPreview } from "@/components/quiz-preview";
import { Button } from "@/components/ui/button";

export default function NewQuizPage() {
  const [topic, setTopic] = useState("The Office");

  const canGenerate = useMemo(() => topic.trim().length > 2, [topic]);

  return (
    <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
      <section className="space-y-4 rounded-2xl border border-white/15 bg-crt-panel/80 p-5">
        <h1 className="text-2xl font-bold">Create a personality match quiz</h1>
        <p className="text-sm text-white/70">
          Enter a fandom topic and generate your first quiz free. Additional quizzes require a paid unlock.
        </p>
        <label className="grid gap-2 text-sm">
          Pop culture topic
          <input
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            placeholder="ex: Stranger Things, Marvel Villains, 90s Sitcoms"
            className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none ring-crt-cyan focus:ring-2"
          />
        </label>
        <Button disabled={!canGenerate} className="w-full">
          Generate Buzzfeed-style questionnaire
        </Button>
        <p className="text-xs text-white/60">
          Monetization flow: free first quiz → paywall modal → weekly subscription via Clerk billing + Convex usage tracking.
        </p>
      </section>
      <QuizPreview topic={topic} />
    </div>
  );
}
