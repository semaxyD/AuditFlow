import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

interface Comment {
  id: number;
  text: string;
  created_by: number;
  created_at: string;
}

interface Question {
  question_id: number;
  text: string;
  response: "Sí" | "No";
  evidences?: string[];
  comments?: Comment[];
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

            {/* Render comments array */}
            {question.comments && question.comments.length > 0 && (
              <div className="mt-2">
                <strong className="text-sm text-gray-800">Comentarios:</strong>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {question.comments.map((c) => (
                    <div key={c.id} className="mt-1">
                      <p>{c.text}</p>
                    </div>
                  ))}
                </ul>
              </div>
            )}

            {/* Render evidences array */}
            {question.evidences && question.evidences.length > 0 && (
              <div className="mt-2">
                <h6 className="font-semibold text-sm text-gray-700">
                  Evidencias:
                </h6>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {question.evidences.map((url, idx) => (
                    <li key={idx} className="mt-1">
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
