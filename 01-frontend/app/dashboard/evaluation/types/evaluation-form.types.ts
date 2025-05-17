export interface EvaluationForm {
  name: string;
  description: string;
  totalQuestions: number;
  sections: Section[];
}

export interface Section {
  id: number;
  title: string;
  questions: Question[];
}

export interface Question {
  id: number;
  question: string;
}
