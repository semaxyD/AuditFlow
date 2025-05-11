import { Pie } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export function EvaluationInfoCard({
  norm,
  version,
  yesCount,
  noCount,
  totalQuestions,
  compliancePercentage,
  chartData,
  chartOptions,
  formatDate,
}: any) {
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
              <p className="text-muted-foreground">{norm} </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Fecha de creación</h3>
              <p className="text-muted-foreground">
                {formatDate(version.created_at)}
              </p>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-medium">Resumen</h3>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <Check className=" text-teal-500" />
                  <span>
                    Respuestas Sí: <strong>{yesCount}</strong> (
                    {Math.round((yesCount / totalQuestions) * 100)}%)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <X className=" text-red-500" />
                  <span>
                    Respuestas No: <strong>{noCount}</strong> (
                    {Math.round((noCount / totalQuestions) * 100)}%)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 aspect-[1/1]">
              <Pie data={chartData} options={chartOptions} />
              <div className="absolute inset-0 flex items-center justify-center flex-col -translate-y-5">
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
