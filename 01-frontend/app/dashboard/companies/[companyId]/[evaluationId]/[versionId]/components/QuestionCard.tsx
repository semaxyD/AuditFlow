import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

interface Question {
  question_id: number;
  text: string;
  response: "Sí" | "No";
  evidences?: string[] | null;
  comments?: string | null;
}

export function QuestionCard({ question }: { question: Question }) {
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
            <h5 className="font-medium text-lg">{question.text}</h5>
            <Badge
              variant={question.response === "Sí" ? "default" : "destructive"}
              className={
                question.response === "Sí"
                  ? "bg-teal-100 text-teal-800 hover:bg-teal-100"
                  : "bg-red-100 text-red-800 hover:bg-red-100"
              }
            >
              {question.response}
            </Badge>

            {/* Si hay comentarios (string) */}
            {question.comments && (
              <p className="mt-2 text-sm text-gray-600">
                <strong>Comentarios:</strong> {question.comments}
              </p>
            )}

            {/* Si hay evidencias (array de URLs) */}
            {question.evidences && question.evidences.length > 0 && (
              <div className="mt-2">
                <h6 className="font-semibold text-sm text-gray-700">
                  Evidencias:
                </h6>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {question.evidences.map((url, idx) => (
                    <li key={idx}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {url}
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
