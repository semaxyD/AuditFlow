export interface Evaluation {
  id: number;
  name: string;
  description: string;
  totalQuestions: number;
  sections: Section[];
  cretedAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  status: string;
}

export interface Section {
  id: number;
  title: string;
  questions: Question[];
}

export interface Question {
  id: number;
  question: string;
  answer: string;
  evidence: string[];
  observations: string;
  score: number;
}
