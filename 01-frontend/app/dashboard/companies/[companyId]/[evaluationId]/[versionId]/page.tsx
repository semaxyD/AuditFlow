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
import { QuestionsList } from "./components/QuestionsList";
import { set } from "zod";
import { Loading } from "@/components/Loading";

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

  const [showObs, setShowObs] = useState(false);
  const [total_questions, setTotal_questions] = useState<string>("");
  const [answered_questions, setAnswered_questions] = useState<string>("");
  const [completion_percentage, setCompletion_percentage] =
    useState<string>("");
  const [normName, setNormName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [companyNit, setCompanyNit] = useState<string>("");
  const [questions, setQuestions] = useState<any[]>([]);
  const [observations, setObservations] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!companyId || !versionId) {
      setError("Parámetros de ruta no disponibles");
      setLoading(false);
      return;
    }

    const url = `http://localhost:3001/reports-evaluation/${companyId}/version/${versionId}`;
    const token = localStorage.getItem("token") || "";

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(`Error ${res.status}: ${text}`);
          });
        }
        return res.json();
      })
      .then((data) => {
        const payload = Array.isArray(data) ? data[0] : data;
        if (!payload || !Array.isArray(payload.questions)) {
          throw new Error("Formato inesperado de respuesta");
        }

        setCompanyName(payload.company_name);
        setNormName(payload.norm_name);
        setTotal_questions(payload.total_questions);
        setAnswered_questions(payload.answered_questions);
        setCompletion_percentage(payload.completion_percentage);
        setCompanyNit(payload.nit);
        setQuestions(payload.questions);
        setObservations(payload.observations || "");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [companyId, versionId]);

  if (loading) return <Loading message="Cargando evaluación…" />;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  // Cálculo de 'Sí' y 'No'
  const yesCount = questions.filter((q) => q.response === "Sí").length;
  const noCount = questions.filter((q) => q.response === "No").length;
  const totalQuestions = questions.length;
  const compliancePercentage = Math.round((yesCount / totalQuestions) * 100);

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
          font: { size: 14 },
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) => {
            const pct = Math.round((ctx.raw / totalQuestions) * 100);
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
        total_questions={Number(total_questions)}
        answered_questions={Number(answered_questions)}
        completion_percentage={Number(completion_percentage)}
        version={{
          version_id: Number(versionId),
          created_at: questions[0]?.created_at,
        }}
        yesCount={yesCount}
        noCount={noCount}
        totalQuestions={totalQuestions}
        compliancePercentage={compliancePercentage}
        chartData={data}
        chartOptions={options}
        formatDate={formatDate}
      />

      {/* Observaciones: Tarjeta interactiva con collapse */}
      {observations && (
        <Card className="border-teal-700">
          <CardHeader
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowObs((v) => !v)}
          >
            <CardTitle className="flex items-center gap-2 text-teal-700">
              <span>📝 Observaciones</span>
              {showObs ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </CardTitle>
          </CardHeader>

          <AnimatePresence initial={false}>
            {showObs && (
              <motion.div
                key="obs-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-gray-800">
                    {observations}
                  </p>
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      )}

      <h2 className="text-2xl font-semibold text-teal-700 mb-6 mt-2.5">
        Preguntas y Respuestas
      </h2>

      <QuestionsList questions={questions} />
    </div>
  );
}
