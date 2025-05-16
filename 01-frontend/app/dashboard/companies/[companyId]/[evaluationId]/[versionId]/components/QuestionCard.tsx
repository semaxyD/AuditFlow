import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Minus, AlertTriangle } from "lucide-react";

// Mapeo de etiqueta corta
const labelMap: Record<string, string> = {
  Sí: "Sí",
  No: "No",
  "No aplica": "N/A",
  "N/M": "N/M",
};

// Mapeo de iconos y clases de color
const iconMap: Record<string, { Icon: any; colorClass: string }> = {
  Sí: { Icon: Check, colorClass: "text-teal-500" },
  No: { Icon: X, colorClass: "text-red-500" },
  "No aplica": { Icon: Minus, colorClass: "text-gray-500" },
  "N/M": { Icon: AlertTriangle, colorClass: "text-amber-500" },
};

interface Comment {
  id: number;
  text: string;
  created_by: number;
  created_at: string;
}

export interface Question {
  question_id: number;
  text: string;
  response: "Sí" | "No" | "No aplica" | "N/M";
  evidences?: string[][][] | null;
  comments?: string[] | null;
}

export function QuestionCard({ question }: { question: Question }) {
  const { Icon, colorClass } = iconMap[question.response];

  // Decide variante y clases del Badge
  const badgeVariant =
    question.response === "Sí"
      ? "default"
      : question.response === "No"
      ? "destructive"
      : "outline";

  const badgeClasses =
    question.response === "Sí"
      ? "bg-teal-100 text-teal-800 hover:bg-teal-100"
      : question.response === "No"
      ? "bg-red-100 text-red-800 hover:bg-red-100"
      : question.response === "No aplica"
      ? "bg-gray-100 text-gray-800 hover:bg-gray-100"
      : "bg-amber-100 text-amber-800 hover:bg-amber-100";

  return (
    <Card key={question.question_id} className="shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Icono según respuesta */}
          <Icon className={`h-6 w-6 mt-0.5 flex-shrink-0 ${colorClass}`} />

          <div className="flex flex-col gap-2">
            <h5 className="font-medium text-lg">{question.text}</h5>

            <Badge variant={badgeVariant} className={badgeClasses}>
              {labelMap[question.response]}
            </Badge>

            {question.comments && question.comments.length > 0 && (
              <div className="mt-2">
                <strong className="text-sm text-gray-800">Comentario:</strong>
                <p className="text-sm text-gray-600 mt-1">
                  {question.comments[0]}
                </p>
              </div>
            )}

            {question.evidences && question.evidences.length > 0 && (
              <div className="mt-2">
                <strong className="font-semibold text-sm text-gray-700">
                  Evidencia:
                </strong>
                <p className="text-sm text-gray-600 mt-1">
                  <a
                    href={question.evidences[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {question.evidences[0]}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
