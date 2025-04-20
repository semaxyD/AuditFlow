import { QuestionCard } from "./QuestionCard";

export function QuestionsList({ questions }: { questions: any[] }) {
  return (
    <div className="grid gap-4">
      {questions.map((q) => (
        <QuestionCard key={q.question_id} question={q} />
      ))}
    </div>
  );
}
