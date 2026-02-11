# Clerk Integration Notes

- Use Clerk for auth (`<SignInButton />`, middleware, protected routes).
- Use Clerk Billing/Stripe integration for `VibeType Pro` weekly subscription.
- Webhook events (`subscription.created`, `subscription.cancelled`) should update Convex user plan fields.
- Gate quiz generation by reading both `freeQuizUsed` and `plan` from Convex.
