import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

export function QuestionCard({
  question,
}: {
  question: {
    question_id: number;
    question_text: string;
    response: "Sí" | "No";
    evidences?: string[] | null;
    comments?: string[] | null;
  };
}) {
  return (
    <Card key={question.question_id} className="shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {question.response === "Sí" ? (
            <Check className="h-6 w-6 text-teal-500 mt-0.5 flex-shrink-0" />
          ) : (
            <X className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
          )}
          <div className="flex flex-col gap-2">
            <div>
              <h5 className="font-medium text-lg">{question.question_text}</h5>
              <div className="mt-2 flex items-center">
                <Badge
                  variant={
                    question.response === "Sí" ? "default" : "destructive"
                  }
                  className={
                    question.response === "Sí"
                      ? "bg-teal-100 text-teal-800 hover:bg-teal-100"
                      : "bg-red-100 text-red-800 hover:bg-red-100"
                  }
                >
                  {question.response}
                </Badge>
              </div>
            </div>

            {/* Mostrar comentarios si existen */}
            {question.comments && question.comments.length > 0 && (
              <div className="mt-2">
                <h6 className="font-semibold text-sm text-gray-700">
                  Comentarios:
                </h6>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {question.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mostrar evidencias si existen */}
            {question.evidences && question.evidences.length > 0 && (
              <div className="mt-2">
                <h6 className="font-semibold text-sm text-gray-700">
                  Evidencias:
                </h6>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {question.evidences.map((evidence, index) => (
                    <li key={index}>
                      <a
                        href={evidence}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {evidence}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
