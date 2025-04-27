import { EvaluationForm } from "../../../types/evaluation-form.types";

export function mapBackendEvaluationToForm(evaluation: any): EvaluationForm {
  return {
    name: evaluation.name,
    description: "", // Puedes dejarlo vacío si no existe en el back
    totalQuestions: evaluation.totalQuestions,
    sections: evaluation.sections.map((section: any) => ({
      id: section.id,
      title: section.title,
      questions: section.questions.map((question: any) => ({
        id: question.id,
        question: question.question,
      })),
    })),
  };
}
