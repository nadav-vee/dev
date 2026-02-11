import { buildBuzzfeedQuiz } from "@/lib/archetypes";

type QuizPreviewProps = {
  topic: string;
};

export function QuizPreview({ topic }: QuizPreviewProps) {
  const quiz = buildBuzzfeedQuiz(topic);

  return (
    <div className="space-y-4 rounded-2xl border border-white/15 bg-black/25 p-5">
      <div>
        <h2 className="text-lg font-bold">{quiz.title}</h2>
        <p className="text-sm text-white/70">{quiz.lead}</p>
      </div>
      <div className="space-y-3">
        {quiz.questions.map((question) => (
          <div key={question.prompt} className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="mb-2 text-sm font-semibold text-crt-cyan">{question.prompt}</p>
            <ul className="grid gap-1 text-sm text-white/80">
              {question.options.map((option) => (
                <li key={option}>• {option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
