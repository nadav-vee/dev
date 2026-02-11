// Convex schema sketch for usage + monetization.
// In production, add proper table indexes and auth checks.

export const tables = {
  users: {
    clerkId: "string",
    freeQuizUsed: "boolean",
    plan: "string" // free | pro
  },
  quizzes: {
    userId: "id",
    topic: "string",
    createdAt: "number",
    isPaid: "boolean"
  }
};
