"use client";

import { COMPANIES_MOCK } from "../../../ComplaintsTable/mock/companies"; // Adjust path as needed
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

export default function EvaluationPage({
  params,
}: {
  params: { companyId: string; evaluationId: string; versionId: string };
}) {
  const { companyId, evaluationId, versionId } = params;

  // Find the company
  const company = COMPANIES_MOCK.find((c) => c.id.toString() === companyId);

  if (!company) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              Empresa no encontrada.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Find the evaluation
  const evaluation = company.evaluations.find(
    (evalItem) => evalItem.evaluation_id.toString() === evaluationId
  );

  if (!evaluation) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              Evaluación no encontrada.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Find the specific version
  const version = evaluation.versions.find(
    (v) => v.version_id.toString() === versionId
  );

  if (!version) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              Versión no encontrada.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const yesCount = version.questions.filter((q) => q.response === "Sí").length;
  const noCount = version.questions.filter((q) => q.response === "No").length;
  const totalQuestions = version.questions.length;
  const compliancePercentage = Math.round((yesCount / totalQuestions) * 100);

  // Donut chart data
  const data = {
    labels: ["Sí", "No"],
    datasets: [
      {
        label: "Respuestas",
        data: [yesCount, noCount],
        backgroundColor: ["#00786f", "#ef4444"],
        borderColor: ["#00786f", "#ef4444"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const percentage = Math.round((context.raw / totalQuestions) * 100);
            return `${context.label}: ${context.raw} (${percentage}%)`;
          },
        },
      },
    },
    cutout: "70%",
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-teal-700">{company.name}</h1>
        <div className="flex items-center mt-2">
          <Badge variant="outline" className="text-sm">
            NIT: {company.nit}
          </Badge>
        </div>
      </div>

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
                <p className="text-muted-foreground">
                  {evaluation.norm.norm_name} - {evaluation.norm.norm_code}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Versión</h3>
                <p className="text-muted-foreground">
                  {version.version_number}
                </p>
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
                <Pie data={data} options={options} />
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

      <h2 className="text-2xl font-semibold text-teal-700 mb-6">
        Preguntas y Respuestas
      </h2>
      <div className="grid gap-4">
        {version.questions.map((question) => (
          <Card key={question.question_id} className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {question.response === "Sí" ? (
                  <Check className="h-6 w-6 text-teal-500 mt-0.5 flex-shrink-0" />
                ) : (
                  <X className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <h5 className="font-medium text-lg">
                    {question.question_text}
                  </h5>
                  <div className="mt-2 flex items-center">
                    <Badge
                      variant={
                        question.response === "Sí" ? "success" : "destructive"
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
