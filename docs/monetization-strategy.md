# VibeType Monetization Strategy (Modeled on Top Consumer Apps)

## Principles borrowed from top-grossing apps

1. **Fast time-to-value before asking for payment**
   - Let users generate one full quiz with no signup wall.
2. **Compelling identity-based outcomes**
   - Personality/archetype products monetize better because users emotionally identify with outcomes.
3. **Recurring content cadence**
   - Weekly themed drops keep churn lower and make subscription feel fresh.
4. **Strong paywall timing**
   - Trigger paywall right after first result reveal and share prompt.

## Unbeatable paywall blueprint

- Headline: “Your first quiz is done. Keep your streak alive with unlimited personality matches.”
- Show social proof line: “Most users unlock after their first result.”
- Pricing ladder:
  - Weekly Pro (default CTA)
  - Optional annual plan for lower effective weekly cost
- Visual hierarchy:
  - Neon CTA button (high contrast)
  - Price anchoring with crossed-out “per quiz” equivalent
  - Short, concrete benefits

## Growth + retention mechanics

- Streak count for consecutive days of quiz creation.
- Weekly “franchise packs” with countdown timer.
- Referral unlock: invite 1 friend to unlock one extra free quiz.
- Shareable result cards auto-watermarked with app branding.

## Convex + Clerk data flow

1. Clerk authenticates user.
2. Convex stores `freeQuizUsed`, `plan`, and usage events.
3. On quiz generation request:
   - If `freeQuizUsed=false`, allow and mark consumed.
   - Else require `plan=pro`.
4. Clerk billing webhooks update Convex plan status in near real-time.

## KPIs to track

- Free → paid conversion rate after first result.
- Average quizzes per active subscriber per week.
- 7-day retention after first quiz.
- Share rate and referral conversion.
