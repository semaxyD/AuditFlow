import { Pie } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Minus, AlertTriangle } from "lucide-react";

interface EvaluationInfoCardProps {
  norm: string;
  version: {
    version_id: number;
    created_at: string;
  };
  yesCount: number;
  naCount: number;
  improveCount: number;
  noCount: number;
  totalQuestions: number;
  compliancePercentage: number;
  answered_questions: number;
  total_questions: number;
  completion_percentage: number;
  chartData: any;
  chartOptions: any;
  formatDate: (date: string) => string;
}

export function EvaluationInfoCard({
  norm,
  version,
  yesCount,
  noCount,
  naCount,
  improveCount,
  totalQuestions,
  compliancePercentage,
  answered_questions,
  total_questions,
  completion_percentage,
  chartData,
  chartOptions,
  formatDate,
}: EvaluationInfoCardProps) {
  return (
    <Card className="mb-8 shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl font-semibold text-teal-700">
          Información de la Evaluación
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Norma</h3>
              <p className="text-muted-foreground">{norm}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Fecha de creación</h3>
              <p className="text-muted-foreground">
                {formatDate(version.created_at)}
              </p>
            </div>
            {/* Detalles de progreso */}
            <div className="pt-4">
              <h3 className="text-lg font-medium">Progreso</h3>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>
                  Total de preguntas: <strong>{total_questions}</strong>
                </li>
                <li>
                  Respondidas: <strong>{answered_questions}</strong>
                </li>
                <li>
                  Porcentaje completado:{" "}
                  <strong>
                    {Math.round(completion_percentage * 100) / 100}%
                  </strong>
                </li>
              </ul>
            </div>
            {/* Resumen de respuestas */}
            {/* Sí */}{" "}
            <div className="flex items-center gap-2">
              <Check className="text-teal-500" />{" "}
              <span>
                Sí: <strong>{yesCount}</strong> ({" "}
                {Math.round((yesCount / totalQuestions) * 100)}%){" "}
              </span>{" "}
            </div>
            {/* No */}{" "}
            <div className="flex items-center gap-2">
              <X className="text-red-500" />{" "}
              <span>
                No: <strong>{noCount}</strong> ({" "}
                {Math.round((noCount / totalQuestions) * 100)}%){" "}
              </span>{" "}
            </div>
            {/* No aplica */}{" "}
            <div className="flex items-center gap-2">
              <Minus className="text-gray-500" />{" "}
              <span>
                N/A: <strong>{naCount}</strong> ({" "}
                {Math.round((naCount / totalQuestions) * 100)}%){" "}
              </span>{" "}
            </div>
            {/* Necesita mejora */}{" "}
            <div className="flex items-center gap-2">
              <AlertTriangle className="text-amber-500" />{" "}
              <span>
                N/M: <strong>{improveCount}</strong> ({" "}
                {Math.round((improveCount / totalQuestions) * 100)}%){" "}
              </span>{" "}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 aspect-[1/1]">
              <Pie data={chartData} options={chartOptions} />
              <div className="absolute top-5/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="text-4xl font-bold">
                  {compliancePercentage}%
                </span>
                <span className="text-sm text-muted-foreground">
                  Cumplimiento
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
