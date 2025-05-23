import { z } from "zod";
import { EvaluationForm } from "../types/evaluation-form.types";

export const VALID_ANSWERS = [
  {
    value: "Si",
    label: "Si",
    score: 100,
  },
  {
    value: "No",
    label: "No",
    score: 0,
  },
  {
    value: "N/A",
    label: "No aplica",
    score: 0,
  },
  {
    value: "NM",
    label: "Necesita mejora",
    score: 50,
  },
] as const;

// Función para generar el schema de evaluación de acuerdo al formulario
export const createEvaluationSchema = (formData: EvaluationForm) => {
  const sectionsShape: Record<string, any> = {};

  formData.sections.forEach((section) => {
    const questionsShape: Record<string, any> = {};

    section.questions.forEach((q) => {
      questionsShape[q.id] = z
        .object({
          answer: z.enum(
            VALID_ANSWERS.map((answer) => answer.value) as [string, ...string[]]
          ),
          evidence: z.array(z.string()).optional(),
          observations: z.string().optional(),
          score: z.number(),
        })
        .superRefine((data, ctx) => {
          if (
            data.answer === "N/A" &&
            (!data.observations || data.observations.trim() === "")
          ) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Debe justificar por qué no aplica añadiendolo en observaciones",
              path: ["observations"],
            });
          }
        })
    });

    sectionsShape[section.id] = z.object(questionsShape);
  });

  return z.object({
    totalQuestions: z.number(),
    sections: z.object(sectionsShape),
  });
};
