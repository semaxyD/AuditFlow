"use client";

import { useEffect, useState } from "react";
import EvaluationTable from "./ComplatainsTable/TableEvaluations";
import { evaluationColumns } from "./ComplatainsTable/columns";
import type {
  ApiEvaluation,
  Evaluation,
} from "../ComplaintsTable/types/company";
import { Loading } from "@/components/Loading";
export default function CompanyPage({
  params,
}: {
  params: { companyId: string };
}) {
  const { companyId } = params;
  const [companyName, setCompanyName] = useState<string>("");
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token") || "";

    fetch(`http://localhost:3001/reports-evaluation/${companyId}/evaluations`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        return res.json() as Promise<ApiEvaluation[]>;
      })
      .then((apiData) => {
        if (apiData.length > 0) {
          setCompanyName(apiData[0].company_name);
        }

        const mapped: Evaluation[] = apiData.map((ev) => ({
          evaluation_id: ev.evaluation_id,
          evaluation_created_at: ev.evaluation_created_at,
          creator_name: ev.creator_name,
          company_id: ev.company_id,
          norm: {
            norm_id: ev.norm_id,
            norm_name: ev.norm_name,
            norm_code: ev.norm_code,
          },
        }));

        setEvaluations(mapped);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [companyId]);

  if (loading) return <Loading message="Cargando evaluaciones…" />;
  if (error)
    return (
      <p className="p-6 text-red-600">Error al cargar evaluaciones: {error}</p>
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-teal-700">
        Evaluaciones de la empresa
        <br />
        <span className="text-teal-900">{companyName}</span>
      </h1>
      <div className="bg-white rounded-lg shadow p-6 pt-2 mt-4">
        <h2 className="text-xl mt-6 font-semibold">Evaluaciones</h2>
        <EvaluationTable columns={evaluationColumns} data={evaluations} />
      </div>
    </div>
  );
}
