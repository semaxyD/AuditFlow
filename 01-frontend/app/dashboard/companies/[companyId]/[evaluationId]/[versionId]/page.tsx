// src/app/dashboard/companies/[companyId]/version/[versionId]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
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
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CompanyHeader } from "./components/CompanyHeader";
import { EvaluationInfoCard } from "./components/EvaluationInfoCard";
import { CriteriaList } from "./components/CriteriaList";
import { Loading } from "@/components/Loading";
import { useRoleCheck } from "@/hooks/useRoleCheck";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

export default function EvaluationPage() {
  const params = useParams();
  const companyId = params?.companyId as string;
  const versionId = params?.versionId as string;
  const { role, status } = useRoleCheck(["auditor_interno", "auditor_externo"]);

  const [showObs, setShowObs] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [normName, setNormName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyNit, setCompanyNit] = useState("");
  const [criteria, setCriteria] = useState<any[]>([]);
  const [observations, setObservations] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "loading" || role === null) return;
    if (!companyId || !versionId) {
      setError("Parámetros de ruta no disponibles");
      setLoading(false);
      return;
    }
    setLoading(true);
    const token = localStorage.getItem("token") || "";
    const endpoint =
      role === "auditor_externo"
        ? `http://localhost:3001/reports-evaluation/evaluation/${versionId}/details`
        : `http://localhost:3001/reports-evaluation/${companyId}/version/${versionId}`;

    fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) =>
        res.ok
          ? res.json()
          : res.text().then((t) => {
              throw new Error(t);
            })
      )
      .then((data) => {
        const payload = Array.isArray(data) ? data[0] : data;
        setCompanyName(payload.company_name);
        setNormName(payload.norm_name);
        setTotalQuestions(payload.total_questions);
        setAnsweredQuestions(payload.answered_questions);
        setCompletionPercentage(payload.completion_percentage);
        setCompanyNit(payload.nit);
        setCriteria(payload.criteria);
        setObservations(payload.observations || "");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [companyId, versionId, role, status]);

  if (loading) return <Loading message="Cargando evaluación…" />;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  // Aplana todas las preguntas para los cálculos
  const allQuestions = criteria.flatMap((c) => c.questions);
  const yesCount = allQuestions.filter((q) => q.response === "Sí").length;
  const noCount = allQuestions.filter((q) => q.response === "No").length;
  const naCount = allQuestions.filter((q) => q.response === "No aplica").length;
  const improveCount = allQuestions.filter((q) => q.response === "N/M").length;
  const totalCount = allQuestions.length;
  const compliancePerc =
    totalCount > 0 ? Math.round((yesCount / totalCount) * 100) : 0;

  const chartData = {
    labels: ["Sí", "No", "N/A", "N/M"],
    datasets: [
      {
        label: "Respuestas",
        data: [yesCount, noCount, naCount, improveCount],
        backgroundColor: ["#00786f", "#ef4444", "#6b7280", "#f59e0b"],
        borderColor: ["#00786f", "#ef4444", "#6b7280", "#f59e0b"],
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" as const },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const pct =
              totalCount > 0 ? Math.round((ctx.raw / totalCount) * 100) : 0;
            return `${ctx.label}: ${ctx.raw} (${pct}%)`;
          },
        },
      },
    },
    cutout: "70%",
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <CompanyHeader name={companyName} nit={companyNit} />

      <EvaluationInfoCard
        norm={normName}
        version={{
          version_id: Number(versionId),
          created_at: allQuestions[0]?.created_at,
        }}
        yesCount={yesCount}
        noCount={noCount}
        naCount={naCount}
        improveCount={improveCount}
        totalQuestions={totalCount}
        compliancePercentage={compliancePerc}
        answered_questions={answeredQuestions}
        total_questions={totalQuestions}
        completion_percentage={completionPercentage}
        chartData={chartData}
        chartOptions={chartOptions}
        formatDate={formatDate}
      />

      {observations && (
        <Card className="border-teal-700 mb-8">
          <CardHeader
            onClick={() => setShowObs((v) => !v)}
            className="cursor-pointer"
          >
            <CardTitle className="flex items-center gap-2 text-teal-700">
              📝 Observaciones {showObs ? <ChevronUp /> : <ChevronDown />}
            </CardTitle>
          </CardHeader>
          <AnimatePresence initial={false}>
            {showObs && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
              >
                <CardContent>
                  <p className="text-sm">{observations}</p>
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      )}

      <h2 className="text-2xl font-semibold text-teal-700 mb-6">
        Preguntas y Respuestas
      </h2>
      <CriteriaList criteria={criteria} />
    </div>
  );
}
