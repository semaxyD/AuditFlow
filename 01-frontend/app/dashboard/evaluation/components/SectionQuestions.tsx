import { memo } from "react";
import { QuestionItem } from "./QuestionItem";

type SectionProps = {
  section: {
    id: number;
    title: string;
    questions: Array<{
      id: number;
      question: string;
    }>;
  };
};

export const SectionQuestions = memo(function SectionQuestions({
  section,
}: SectionProps) {
  return (
    <div key={section.id} className="space-y-4 mt-20">
      <h2 className="text-lg font-semibold text-teal-700">{section.title}</h2>
      {section.questions.map((question) => (
        <QuestionItem
          key={`${section.id}-${question.id}`}
          sectionId={section.id}
          questionId={question.id}
          questionText={question.question}
        />
      ))}
    </div>
  );
});
