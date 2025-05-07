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

// — Forma en que viene cada evaluación desde la API
export type ApiEvaluation = {
  evaluation_id: number;
  evaluation_created_at: string;
  creator_name: string;
  company_id: number;
  norms: {
    id: number;
    name: string;
    code: string;
  }[];
};

// — Tipo que usa tu tabla (un solo norm en vez de array)
export type Evaluation = {
  evaluation_id: number;
  evaluation_created_at: string;
  creator_name: string;
  company_id: number;
  norm: {
    norm_id: number;
    norm_name: string;
    norm_code: string;
  };
};
// — Forma cruda que devuelve tu API de versiones
export type ApiVersion = {
  id: number;
  creator_name: string;
  is_latest: boolean;
  score: number;
  created_at: string;
  version_number: number;
};

// — Tipo que usa tu tabla (nota que ya no incluimos evaluation_id,
//   porque la API no lo devuelve; si lo necesitas, pídelo al backend)
export type Version = {
  version_id: number;
  create_by: string;
  created_at: string;
  is_latest: boolean;
  score: number;
  version_number: number;
  company_id: number;
};
