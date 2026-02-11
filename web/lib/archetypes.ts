export type QuizQuestion = {
  prompt: string;
  options: string[];
};

export type QuizPack = {
  title: string;
  lead: string;
  archetypes: string[];
  questions: QuizQuestion[];
};

const styleTemplates = [
  "Pick your opening scene:",
  "Your side quest starts with:",
  "How do people describe your vibe?",
  "Choose your signature move:",
  "What soundtrack follows you around?"
];

export function buildBuzzfeedQuiz(topic: string): QuizPack {
  const normalized = topic.trim() || "Pop Culture Chaos";

  return {
    title: `${normalized}: Which Core Archetype Are You?`,
    lead:
      "A dramatic, nostalgic, high-chaos personality match inspired by peak quiz-era internet.",
    archetypes: ["Main Character", "Gremlin Genius", "Chaotic Mentor", "Soft Rebel"],
    questions: styleTemplates.map((template, index) => ({
      prompt: `${template} (${index + 1}/5)`,
      options: [
        `${normalized} but cinematic`,
        `${normalized} with maximum drama`,
        `${normalized} and unexpectedly wholesome`,
        `${normalized} in pure meme mode`
      ]
    }))
  };
}
