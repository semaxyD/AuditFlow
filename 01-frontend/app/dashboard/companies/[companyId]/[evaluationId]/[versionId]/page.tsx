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
import { CompanyHeader } from "./components/CompanyHeader";
import { EvaluationInfoCard } from "./components/EvaluationInfoCard";
import { QuestionsList } from "./components/QuestionsList";

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
      <CompanyHeader name={company.name} nit={company.nit} />

      <EvaluationInfoCard
        norm={evaluation.norm}
        version={version}
        yesCount={yesCount}
        noCount={noCount}
        totalQuestions={totalQuestions}
        compliancePercentage={compliancePercentage}
        chartData={data}
        chartOptions={options}
        formatDate={formatDate}
      />

      <h2 className="text-2xl font-semibold text-teal-700 mb-6">
        Preguntas y Respuestas
      </h2>
      <QuestionsList questions={version.questions} />
    </div>
  );
}
