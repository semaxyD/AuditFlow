import { memo } from "react";
import { Question } from "../Question/Question";

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

export const Section = memo(function Section({ section }: SectionProps) {
  return (
    <div key={section.id} className="space-y-5 mt-10">
      <h2 className="text-lg font-semibold text-teal-700">{section.title}</h2>
      {section.questions.map((question) => (
        <Question
          key={`${section.id}-${question.id}`}
          sectionId={section.id}
          question={question}
        />
      ))}
    </div>
  );
});
