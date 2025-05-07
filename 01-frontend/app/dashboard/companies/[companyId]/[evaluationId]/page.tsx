// app/dashboard/companies/[companyId]/versions/page.tsx
"use client";

import { useEffect, useState } from "react";
import type {
  ApiVersion,
  Version,
  Company,
} from "../../ComplaintsTable/types/company";
import VersionTable from "./ComplatainsTable/TableVersions";
import { versionColumns } from "./ComplatainsTable/columns";

export default function CompanyVersionPage({
  params,
}: {
  params: { companyId: string };
}) {
  const { companyId } = params;
  const [company, setCompany] = useState<Company | null>(null);
  const [versions, setVersions] = useState<Version[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token") || "";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    // Llamada al endpoint de versiones
    fetch(`http://localhost:3001/reports-evaluation/${companyId}/evolution`, {
      headers,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        return res.json() as Promise<ApiVersion[]>;
      })
      .then((apiData) => {
        // Mapea la respuesta al tipo Version
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
  }, [companyId]);

  if (loading) return <p className="p-6">Cargando versiones…</p>;
  if (error)
    return (
      <p className="p-6 text-red-600">Error al cargar versiones: {error}</p>
    );

  // (Opcional) si necesitas datos básicos de la empresa, haz aquí otro fetch
  // a /companies/${companyId} y setéalo en `company`.

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-teal-700">
        Versiones de la empresa {companyId}
      </h1>
      <div className="bg-white rounded-lg shadow p-6 pt-2 mt-4">
        <h2 className="text-xl mt-6 font-semibold">Historial de versiones</h2>
        <VersionTable columns={versionColumns} data={versions} />
      </div>
    </div>
  );
}
