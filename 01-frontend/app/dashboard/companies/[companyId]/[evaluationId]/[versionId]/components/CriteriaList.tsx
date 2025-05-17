// src/app/dashboard/companies/[...]/components/CriteriaList.tsx
import { QuestionCard } from "./QuestionCard";

export function CriteriaList({ criteria }: { criteria: any[] }) {
  return (
    <div className="space-y-8">
      {criteria.map((c) => (
        <section key={c.id}>
          <h3 className="text-xl font-medium text-teal-700 mb-4">{c.title}</h3>
          <div className="grid gap-4">
            {c.questions.map((q: any) => (
              <QuestionCard key={q.question_id} question={q} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
