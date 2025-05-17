import { Section } from "@/app/dashboard/evaluations-list/[evaluationId]/components/Section/Section";
import { MOCK_EVALUATIONS } from "@/app/dashboard/evaluations-list/mock/mock";
import React from "react";
import { EvaluationForm } from "../../components/EvaluationForm";

export default function ListedEvaluation({
  params,
}: {
  params: { evaluationId: string };
}) {
  const evaluation = MOCK_EVALUATIONS.find(
    (c) => c.id.toString() === params.evaluationId
  );

  if (!evaluation) {
    return <p>Evaluación no encontrada.</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-teal-700">
        Editando la evaluación {evaluation.id}
      </h1>
      <div className="mt-4 space-y-2">
        <p className="text-gray-500">
          <b>Nombre:</b> {evaluation.name}
        </p>
        <p className="text-gray-500">
          <b>Fecha:</b> {evaluation.date}
        </p>
        <p className="text-gray-500">
          <b>Estado:</b> {evaluation.status}
        </p>
        <p className="text-gray-500">
          <b>Puntaje:</b> {evaluation.score}
        </p>
        <p className="text-gray-500">
          <b>Total de preguntas:</b> {evaluation.totalQuestions}
        </p>
      </div>

      <div className="mt-20">
        {evaluation.sections && evaluation.sections.length === 0 && (
          <p className="text-gray-500">No hay secciones disponibles.</p>
        )}
        <EvaluationForm backendData={evaluation} />
      </div>
    </div>
  );
}
