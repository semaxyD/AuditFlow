"use client";

import { useEffect, useState } from "react";
import type { ApiVersion, Version } from "../../ComplaintsTable/types/company";
import VersionTable from "./ComplatainsTable/TableVersions";
import { versionColumns } from "./ComplatainsTable/columns";
import { Loading } from "@/components/Loading";

export default function CompanyEvaluationVersionsPage({
  params: { companyId, evaluationId },
}: {
  params: { companyId: string; evaluationId: string };
}) {
  const [companyName, setCompanyName] = useState<string>("");
  const [normName, setNormName] = useState<string>("");
  const [versions, setVersions] = useState<Version[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token") || "";
    fetch(
      `http://localhost:3001/reports-evaluation/${evaluationId}/evolution`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        return res.json() as Promise<ApiVersion[]>;
      })
      .then((apiData) => {
        if (apiData.length > 0) {
          setCompanyName(apiData[0].company_name);
          setNormName(apiData[0].norm_name);
        }
        // mapeo completo
        const all = apiData.map<Version>((v) => ({
          version_id: v.version_id,
          create_by: v.creator_name,
          created_at: v.created_at,
          is_latest: v.is_latest,
          score: v.score,
          version_number: v.version_number,
          company_id: Number(companyId),
        }));
        setVersions(all);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [companyId, evaluationId]);

  if (loading) return <Loading message="Cargando evaluaciones…" />;
  if (error)
    return (
      <p className="p-6 text-red-600">Error al cargar versiones: {error}</p>
    );

  // Separa la versión 1
  const creationVersion = versions.find((v) => v.version_number === 1);
  const otherVersions = versions.filter((v) => v.version_number !== 1);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-teal-700">
        Versiones de la evaluación{" "}
        <span className="text-teal-900">{normName}</span>
        <br />
        de la empresa <span className="text-teal-900">{companyName}</span>
      </h1>

      {creationVersion && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
          <h2 className="text-lg font-semibold text-blue-700">
            v1 &ndash; Creación
          </h2>
          <p className="text-sm text-gray-700">
            Creada por <strong>{creationVersion.create_by}</strong> el{" "}
            {new Date(creationVersion.created_at).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-6 pt-2 mt-6">
        <h2 className="text-xl font-semibold mb-4">Historial de versiones</h2>
        <VersionTable columns={versionColumns} data={otherVersions} />
      </div>
    </div>
  );
}
