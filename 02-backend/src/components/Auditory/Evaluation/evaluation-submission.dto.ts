export class EvaluationSubmissionDto {
    name: string;
    description: string;
    sections: SectionSubmissionDto[];
  }
  
  export class SectionSubmissionDto {
    id: number; // ID de la sección (versión en la tabla de la bd)
    questions: QuestionSubmissionDto[];
  }
  
  export class QuestionSubmissionDto {
    id: number; // ID de la pregunta (versión en la tabla de la bd)
    answer: string;
    evidence: string[]; // URLs de archivos
    observations?: string;
    score: number;
  }
  