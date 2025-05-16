export interface ListedEvaluation {
  id: number;
  name: string;
  date: string;
  status: string;
  score: number;
}

export const MOCK_EVALUATIONS = [
  {
    id: 1,
    name: "Evaluación 1",
    date: "2023-10-01",
    status: "Pendiente",
    score: 85,
    totalQuestions: 60,
    evaluationFeedback: "La evaluación ha sido completada con éxito.",
    sections: [
      {
        id: 1,
        title: "Requisitos generales",
        questions: [
          {
            id: 101,
            question:
              "¿La organización ha establecido y mantenido un sistema de gestión ambiental consistente con los requisitos contenidos en la norma ISO 14001?",
            response: "N/A",
            observations: "No aplica",
            evidence: "https://example.com/evidence1",
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
            response: "Si",
            observations: "No aplica",
            evidence: "https://example.com/evidence1",
          },
          {
            id: 202,
            question:
              "¿La política ambiental es apropiada para la naturaleza, la escala y los impactos ambientales de las actividades, productos o servicios de la organización?",
            response: "Si",
            observations: "No aplica",
            evidence: "",
          },
          {
            id: 203,
            question:
              "¿La política ambiental incluye un compromiso de mejora continua y prevención de la contaminación?",
            response: "Si",
            observations: "No aplica",
            evidence: "",
          },
          {
            id: 204,
            question:
              "¿La política ambiental incluye un compromiso de cumplir con la legislación y normativa ambiental relevante y con otros requisitos que la organización suscriba?",
            response: "Si",
            observations: "No aplica",
            evidence: "",
          },
          {
            id: 205,
            question:
              "¿Proporciona la política ambiental un marco para establecer y revisar los objetivos y metas ambientales?",
            response: "Si",
            observations: "No aplica",
            evidence: "",
          },
          {
            id: 206,
            question:
              "¿La política ambiental está documentada, implementada, mantenida y comunicada a todos los empleados?",
            response: "Si",
            observations: "No aplica",
            evidence: "",
          },
          {
            id: 207,
            question: "¿La política ambiental está disponible para el público?",
            response: "Si",
            observations: "No aplica",
            evidence: "",
          },
        ],
      },
      {
        id: 3,
        title: "Requisitos generales",
        questions: [
          {
            id: 101,
            question:
              "¿La organización ha establecido y mantenido un sistema de gestión ambiental consistente con los requisitos contenidos en la norma ISO 14001?",
            response: "N/A",
            observations: "No aplica",
            evidence: ["https://example.com/evidence1"],
          },
        ],
      },
      {
        id: 4,
        title: "Requisitos generales",
        questions: [
          {
            id: 101,
            question:
              "¿La organización ha establecido y mantenido un sistema de gestión ambiental consistente con los requisitos contenidos en la norma ISO 14001?",
            response: "N/A",
            observations: "No aplica",
            evidence: ["https://example.com/evidence1"],
          },
        ],
      },
    ],
  },
  // {
  //   id: 2,
  //   name: "Evaluación 2",
  //   date: "2023-10-02",
  //   status: "Completada",
  //   score: 20,
  // },
  // {
  //   id: 3,
  //   name: "Evaluación 3",
  //   date: "2023-10-03",
  //   status: "Pendiente",
  //   score: 78,
  // },
  // {
  //   id: 4,
  //   name: "Evaluación 4",
  //   date: "2023-10-04",
  //   status: "Completada",
  //   score: 92,
  // },
  // {
  //   id: 5,
  //   name: "Evaluación 5",
  //   date: "2023-10-05",
  //   status: "Pendiente",
  //   score: 88,
  // },
  // {
  //   id: 6,
  //   name: "Evaluación 6",
  //   date: "2023-10-06",
  //   status: "Completada",
  //   score: 95,
  // },
  // {
  //   id: 7,
  //   name: "Evaluación 7",
  //   date: "2023-10-07",
  //   status: "Pendiente",
  //   score: 80,
  // },
  // {
  //   id: 8,
  //   name: "Evaluación 8",
  //   date: "2023-10-08",
  //   status: "Completada",
  //   score: 87,
  // },
  // {
  //   id: 9,
  //   name: "Evaluación 9",
  //   date: "2023-10-09",
  //   status: "Pendiente",
  //   score: 82,
  //   totalQuestions: 60,
  //   sections: [],
  // },
];

export const MOCK_FULL_EVALUATION = {
  id: 1,
  date: "2023-10-01",
  status: "Pendiente",
  score: 85,
  name: "Auditoría ISO 14001",
  description:
    "Auditoría del sistema de gestión ambiental según la norma ISO 14001.",
};
