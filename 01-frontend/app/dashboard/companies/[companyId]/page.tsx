"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EvaluationTable from "./ComplatainsTable/TableEvaluations";
import { getEvaluationColumns } from "./ComplatainsTable/columns";
import { useRoleCheck } from "@/hooks/useRoleCheck";
const base = process.env.NEXT_PUBLIC_ENDPOINT;

import type {
  ApiEvaluation,
  Evaluation,
} from "../ComplaintsTable/types/company";
import { Loading } from "@/components/Loading";

export default function CompanyPage() {
  const params = useParams();
  const companyId = params?.companyId as string;
  console.log("Params recibidos:", params);
  console.log("Company ID:", companyId);

  const [companyName, setCompanyName] = useState<string>("");
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { role, status } = useRoleCheck("auditor_interno", "auditor_externo");

  useEffect(() => {
    if (status === "loading" || role === null) return;
    setLoading(true);
    setError(null);

    if (!companyId) {
      setError("ID de compañía no disponible");
      setLoading(false);
      return;
    }

    const token = window.localStorage.getItem("token") || "";

    const endpoint =
      role === "auditor_interno" || role === "auditor_externo"
        ? `${base}/reports-evaluation/${companyId}/myEvaluations`
        : `${base}/reports-evaluation/${companyId}/evaluations`;

    fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log("Respuesta de la API:", res);
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        return res.json() as Promise<ApiEvaluation[]>;
      })
      .then((apiData) => {
        console.log("Datos recibidos de la API:", apiData);
        if (apiData.length > 0) {
          setCompanyName(apiData[0].company_name);
        }

        const mapped: Evaluation[] = apiData.map((ev) => ({
          evaluation_id: ev.evaluation_id,
          evaluation_created_at: ev.evaluation_created_at,
          creator_name: ev.creator_name,
          company_id: Number(companyId),
          norm: {
            norm_id: ev.norm.id,
            norm_name: ev.norm.name,
            norm_code: ev.norm.code,
          },
        }));
        console.log("Datos mapeados:", mapped);
        setEvaluations(mapped);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [companyId, role, status]);

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
        <EvaluationTable
          columns={getEvaluationColumns(role!)}
          data={evaluations}
          role={role}
        />
      </div>
    </div>
  );
}
