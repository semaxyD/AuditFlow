export type Company = {
  id: string;
  name: string;
  nit: string;
  address: string;
  phone: string;
  contactName: string;
  contactEmail: string;
  evaluations: {
    evaluation_id: number;
    evaluation_created_at: string;
    creator_name: string;
    norm: {
      norm_id: number;
      norm_name: string;
      norm_code: string;
    };
    versions: {
      version_id: number;
      create_by: string;
      created_at: string;
      is_latest: boolean;
      version_number: number;
      score: number;
      questions: {
        question_id: number;
        question_text: string;
        response: string;
        evidences: string[] | null;
        comments: string[] | null;
      }[];
    }[];
  }[];
};

export const COMPANIES_MOCK: Company[] = [
  {
    id: "1",
    name: "Empresa Alpha",
    nit: "900123456-7",
    address: "Calle 123 #45-67",
    phone: "1234567890",
    contactName: "Ana López",
    contactEmail: "ana@empresa.com",
    evaluations: [
      {
        evaluation_id: 1,
        evaluation_created_at: "2025-04-17T17:32:54.279Z",
        creator_name: "Carlos",
        norm: {
          norm_id: 1,
          norm_name: "Norma Calidad 1",
          norm_code: "N001",
        },
        versions: [
          {
            version_id: 1,
            create_by: "Ana",
            created_at: "2025-04-15T10:00:00.000Z",
            is_latest: false,
            version_number: 1,
            score: 60,
            questions: [
              {
                question_id: 1,
                question_text: "¿La empresa cumple con los requisitos básicos?",
                response: "Sí",
                evidences: ["https://evidencia1.com"],
                comments: [
                  "Documentación entregada en reunión del 10 de abril.",
                ],
              },
              {
                question_id: 2,
                question_text: "¿Existen protocolos de seguridad?",
                response: "No",
                evidences: null,
                comments: [
                  "No se presentaron manuales ni registros de capacitación.",
                ],
              },
            ],
          },
          {
            version_id: 2,
            create_by: "Ana",
            created_at: "2025-04-16T12:00:00.000Z",
            is_latest: false,
            version_number: 2,
            score: 75,
            questions: [
              {
                question_id: 1,
                question_text: "¿La empresa cumple con los requisitos básicos?",
                response: "Sí",
                evidences: ["https://evidencia2.com"],
                comments: ["Se verificaron los certificados en sitio."],
              },
              {
                question_id: 2,
                question_text: "¿Existen protocolos de seguridad?",
                response: "Sí",
                evidences: [],
                comments: null,
              },
            ],
          },
          {
            version_id: 3,
            create_by: "Carlos",
            created_at: "2025-04-17T14:30:00.000Z",
            is_latest: true,
            version_number: 3,
            score: 85,
            questions: [
              {
                question_id: 1,
                question_text: "¿La empresa cumple con los requisitos básicos?",
                response: "Sí",
                evidences: ["https://evidencia3.com"],
                comments: ["Visita técnica realizada, cumple requisitos."],
              },
              {
                question_id: 2,
                question_text: "¿Existen protocolos de seguridad?",
                response: "Sí",
                evidences: ["https://foto-protocolos.com/protocolo1"],
                comments: [],
              },
              {
                question_id: 3,
                question_text: "¿El sistema de gestión es efectivo?",
                response: "Sí",
                evidences: null,
                comments: ["Se evidencia mejora continua en los procesos."],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Empresa Beta",
    nit: "800987654-3",
    address: "Avenida 50 #10-20",
    phone: "3216549870",
    contactName: "Luis Gómez",
    contactEmail: "luis@empresa.com",
    evaluations: [
      {
        evaluation_id: 3,
        evaluation_created_at: "2025-03-01T08:45:10.000Z",
        creator_name: "Juan",
        norm: {
          norm_id: 4,
          norm_name: "Norma de Calidad Ambiental",
          norm_code: "N004",
        },
        versions: [
          {
            version_id: 5,
            create_by: "Juan",
            created_at: "2025-03-01T08:45:10.000Z",
            is_latest: false,
            version_number: 1,
            score: 70,
            questions: [
              {
                question_id: 1,
                question_text: "¿La empresa tiene un plan de reciclaje?",
                response: "Sí",
                evidences: ["https://plan-reciclaje-beta.com"],
                comments: ["Plan verificado y en ejecución desde 2024."],
              },
              {
                question_id: 2,
                question_text: "¿La empresa cumple con las normas ambientales?",
                response: "Sí",
                evidences: [],
                comments: ["Norma ISO 14001 certificada en 2023."],
              },
            ],
          },
          {
            version_id: 6,
            create_by: "Lucía",
            created_at: "2025-03-05T10:20:00.000Z",
            is_latest: true,
            version_number: 2,
            score: 90,
            questions: [
              {
                question_id: 1,
                question_text: "¿La empresa tiene un plan de reciclaje?",
                response: "No",
                evidences: null,
                comments: ["Plan en revisión, falta aprobación de gerencia."],
              },
              {
                question_id: 2,
                question_text: "¿La empresa cumple con las normas ambientales?",
                response: "Sí",
                evidences: ["https://certificados-beta.com/norma-ambiental"],
                comments: [],
              },
              {
                question_id: 3,
                question_text:
                  "¿Existen políticas de reducción de huella de carbono?",
                response: "No",
                evidences: [],
                comments: [
                  "Se recomienda diseñar un plan de acción a corto plazo.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Empresa Gamma",
    nit: "901234567-1",
    address: "Transversal 90 #12-34",
    phone: "5551234567",
    contactName: "María Fernández",
    contactEmail: "maria@empresa.com",
    evaluations: [
      {
        evaluation_id: 4,
        evaluation_created_at: "2025-01-15T15:00:00.000Z",
        creator_name: "Carlos",
        norm: {
          norm_id: 1,
          norm_name: "Norma Calidad 1",
          norm_code: "N001",
        },
        versions: [
          {
            version_id: 7,
            create_by: "Carlos",
            created_at: "2025-01-15T15:00:00.000Z",
            is_latest: false,
            version_number: 1,
            score: 50,
            questions: [
              {
                question_id: 1,
                question_text: "¿La empresa cumple con los requisitos básicos?",
                response: "No",
                evidences: [],
                comments: ["Se identificaron deficiencias en infraestructura."],
              },
            ],
          },
          {
            version_id: 8,
            create_by: "María",
            created_at: "2025-01-20T09:00:00.000Z",
            is_latest: false,
            version_number: 2,
            score: 65,
            questions: [
              {
                question_id: 1,
                question_text: "¿La empresa cumple con los requisitos básicos?",
                response: "Sí",
                evidences: ["https://evidencia-mejora-gamma.com"],
                comments: ["Se realizaron adecuaciones de acuerdo a la norma."],
              },
            ],
          },
          {
            version_id: 9,
            create_by: "María",
            created_at: "2025-01-25T12:45:00.000Z",
            is_latest: true,
            version_number: 3,
            score: 80,
            questions: [
              {
                question_id: 1,
                question_text: "¿La empresa cumple con los requisitos básicos?",
                response: "Sí",
                evidences: ["https://certificados-gamma.com/certificado1"],
                comments: [],
              },
              {
                question_id: 2,
                question_text: "¿Existen protocolos de seguridad?",
                response: "Sí",
                evidences: null,
                comments: ["Protocolos actualizados a febrero 2025."],
              },
            ],
          },
        ],
      },
    ],
  },
];
