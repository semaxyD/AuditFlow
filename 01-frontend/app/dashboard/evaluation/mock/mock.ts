import { EvaluationForm } from "../types/evaluation-form.types";

export const AUDIT_FORM_MOCK: EvaluationForm = {
  name: "Auditoría ISO 14001",
  description:
    "Auditoría del sistema de gestión ambiental según la norma ISO 14001.",
  totalQuestions: 60,
  sections: [
    {
      id: 1,
      title: "Requisitos generales",
      questions: [
        {
          id: 101,
          question:
            "¿La organización ha establecido y mantenido un sistema de gestión ambiental consistente con los requisitos contenidos en la norma ISO 14001?",
        },
      ],
    },
    {
      id: 2,
      title: "Política Medioambiental",
      questions: [
        {
          id: 201,
          question:
            "¿Ha definido la alta dirección la política ambiental de la organización?",
        },
      ],
    },
  ],
};
