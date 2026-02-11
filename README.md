# VibeType — Pop Culture Personality Quiz App

VibeType is a mobile-first app concept for **iOS + Android web delivery** that lets users enter a pop-culture idea (show, character universe, trope, fandom) and instantly get a fun, Buzzfeed-style personality questionnaire with accurate archetype matching.

## App Name + Theme

**Name:** VibeType  
**Visual direction:** “Y2K CRT Neon” — nostalgic old-school internet energy (scanlines, gradient glow, sticker-like UI) blended with modern UI trends (glassmorphism cards, oversized type, smooth spacing).

## Core Product Loop

1. User enters a topic (`The Office`, `Marvel Villains`, `90s Cartoons`).
2. AI quiz engine produces a 5–10 question archetype questionnaire.
3. User answers and gets shareable personality result.
4. Result card prompts social share + next quiz creation.

## Monetization (Free-to-Paid Funnel)

- **First quiz is free** (instant value, no friction).
- After the first completion, users hit a hard paywall:
  - `Weekly Pro`: unlimited quizzes + weekly premium quiz packs.
  - Bonus differentiators: share-card styles, deeper archetype analysis, trend packs.
- Convex tracks per-user usage and enforces free limit.
- Clerk handles auth and billing lifecycle.

## Proposed Tech Stack

- **Frontend/App shell:** Next.js (App Router), TailwindCSS, shadcn/ui style components
- **Auth + billing:** Clerk
- **Backend/data + real-time usage tracking:** Convex
- **Hosting/deploy:** Vercel

## Project Layout

- `web/app`: Next.js routes and UI pages
- `web/components`: reusable UI + paywall components
- `web/lib`: quiz generation logic + paywall rules
- `web/convex`: Convex schema sketch
- `web/clerk`: Clerk integration notes
- `docs/monetization-strategy.md`: actionable paywall strategy

## Getting Started (Web Prototype)

```bash
cd web
npm install
npm run dev
```

Open `http://localhost:3000`.
