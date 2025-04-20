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
          <div>
            <h5 className="font-medium text-lg">{question.question_text}</h5>
            <div className="mt-2 flex items-center">
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
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
