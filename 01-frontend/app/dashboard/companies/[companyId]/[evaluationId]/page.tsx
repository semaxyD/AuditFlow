"use client";

import { useEffect, useState } from "react";
import type {
  ApiVersion,
  Version,
  Company,
} from "../../ComplaintsTable/types/company";
import VersionTable from "./ComplatainsTable/TableVersions";
import { versionColumns } from "./ComplatainsTable/columns";

export default function CompanyEvaluationVersionsPage({
  params: { companyId, evaluationId },
}: {
  params: { companyId: string; evaluationId: string };
}) {
  const [versions, setVersions] = useState<Version[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("🆔 Params recibidos:", { companyId, evaluationId });

    const token = window.localStorage.getItem("token") || "";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    // Endpoint para obtener el historial de versiones de UNA evaluación concreta
    fetch(
      `http://localhost:3001/reports-evaluation/${evaluationId}/evolution`,
      { headers }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        return res.json() as Promise<ApiVersion[]>;
      })
      .then((apiData) => {
        const mapped = apiData.map<Version>((v) => ({
          version_id: v.id,
          create_by: v.creator_name,
          created_at: v.created_at,
          is_latest: v.is_latest,
          score: v.score,
          version_number: v.version_number,
          company_id: Number(companyId),
        }));
        setVersions(mapped);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [companyId, evaluationId]);

  if (loading) return <p className="p-6">Cargando historial de versiones…</p>;
  if (error)
    return (
      <p className="p-6 text-red-600">Error al cargar versiones: {error}</p>
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-teal-700">
        Versiones de la evaluación {evaluationId} de la empresa {companyId}
      </h1>
      <div className="bg-white rounded-lg shadow p-6 pt-2 mt-4">
        <h2 className="text-xl mt-6 font-semibold">Historial de versiones</h2>
        <VersionTable columns={versionColumns} data={versions} />
      </div>
    </div>
  );
}
