"use client";

import { useState, useEffect } from "react";
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

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

export default function EvaluationPage({
  params: { companyId, versionId },
}: {
  params: { companyId: string; versionId: string };
}) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [observations, setObservations] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("🆔 Params recibidos:", { companyId, versionId });

    const url = `http://localhost:3001/reports-evaluation/${companyId}/version/${versionId}`;
    console.log("⏳ Haciendo fetch a:", url);

    const token = localStorage.getItem("token") || "";
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log("📥 Raw response:", res);
        if (!res.ok) {
          return res.text().then((text) => {
            console.error(`❌ Error ${res.status}: ${text}`);
            throw new Error(`Error ${res.status}: ${res.statusText}`);
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log("✅ JSON recibido:", data);
        // data llega como [{ questions: [...], observations: "..." }]
        const item = data[0];
        setQuestions(item.questions);
        setObservations(item.observations || "");
      })
      .catch((err) => {
        console.error("🛑 Fetch falló:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [companyId, versionId]);

  if (loading) return <p className="p-6">Cargando evaluación…</p>;
  if (error)
    return <p className="p-6 text-red-600">Error al cargar: {error}</p>;

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
      <CompanyHeader name="Nombre Empresa" nit="123456789" />

      <EvaluationInfoCard
        norm="NORM_CODE"
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

      {/* Observaciones */}
      {observations && (
        <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Observaciones</h3>
          <p>{observations}</p>
        </div>
      )}

      <h2 className="text-2xl font-semibold text-teal-700 mb-6">
        Preguntas y Respuestas
      </h2>

      <QuestionsList questions={questions} />
    </div>
  );
}
