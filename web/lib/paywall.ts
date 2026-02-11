export type AccessState = {
  freeQuizUsed: boolean;
  hasActiveSubscription: boolean;
  unlockPriceCents: number;
};

export function canStartQuiz(state: AccessState): boolean {
  return !state.freeQuizUsed || state.hasActiveSubscription;
}

export function paywallCopy(priceCents: number): string {
  const dollars = (priceCents / 100).toFixed(2);
  return `First personality match is free. Unlimited packs unlock at $${dollars}/week with bonus archetype drops.`;
}
