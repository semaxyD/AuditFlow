"use client";

import { use, useEffect, useState } from "react";
import { EvaluationEditForm } from "../components/EvaluationEditForm";
import { useSearchParams } from "next/navigation";

interface Evaluation {
  id: number;
  name: string;
  date: string;
  status: string;
  score: number;
  totalQuestions: number;
  sections: any[];
}
const base = process.env.NEXT_PUBLIC_ENDPOINT;

export default function EvalFetcher({
  evaluationId,
}: {
  evaluationId: string;
}) {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const companyId = searchParams.get("companyId");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No estás autenticado");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    fetch(`${base}/reports-evaluation/${companyId}/myEvaluations`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Evaluation[]) => {
        setEvaluations(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Error cargando evaluaciones");
        setIsLoading(false);
      });
  }, [evaluationId, companyId]);

  useEffect(() => {
    console.log("Evaluations:", evaluations);
  }, [evaluations]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (isLoading) {
    return <p className="text-gray-500">Cargando evaluación…</p>;
  }

  const evaluation = evaluations.find(
    (e) => e.evaluation_id === Number(evaluationId)
  );

  if (!evaluation) {
    return <p className="text-gray-500">Evaluación no encontrada.</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-teal-700">
        Editando la evaluación {evaluation.id}
      </h1>
      <div className="mt-4 space-y-2 text-gray-500">
        <p>
          <b>Nombre:</b> {evaluation.name}
        </p>
        <p>
          <b>Fecha:</b> {evaluation.date}
        </p>
        <p>
          <b>Estado:</b> {evaluation.status}
        </p>
        <p>
          <b>Puntaje:</b> {evaluation.score}
        </p>
        <p>
          <b>Total de preguntas:</b> {evaluation.totalQuestions}
        </p>
      </div>

      <div className="mt-8">
        <EvaluationEditForm />
      </div>
    </div>
  );
}
