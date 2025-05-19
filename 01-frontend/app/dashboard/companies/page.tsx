"use client";

import { useEffect, useState } from "react";
import { Company } from "./ComplaintsTable/types/company";
import CompaniesTable from "./ComplaintsTable/CompaniesTable";
import { Loading } from "@/components/Loading";
import { useRoleCheck } from "@/hooks/useRoleCheck";

export default function SearchUsersPage() {
  const { role, status } = useRoleCheck("auditor_interno", "auditor_externo");
  const [data, setData] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshToggle, setRefreshToggle] = useState(false);

  useEffect(() => {
    if (status === "loading" || role === null) return;
    setLoading(true);
    setError(null);

    const token = window.localStorage.getItem("token") || "";
    const endpoint =
      role === "auditor_interno" || role === "auditor_externo"
        ? "http://localhost:3001/reports-evaluation/myCompanies"
        : "http://localhost:3001/reports-evaluation/companies";

    fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then((companies: Company[]) => setData(companies))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [role, status, refreshToggle]);

  const handleDeleted = () => {
    // Dispara la recarga de la tabla sin recargar toda la página
    setRefreshToggle((prev) => !prev);
  };

  if (status === "loading" || loading) {
    return <Loading message="Cargando empresas…" />;
  }

  if (error) {
    return (
      <div className="p-6">
        <p className="text-red-600">Error al cargar: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-teal-700">Empresas</h1>
      </div>
      <p className="text-muted-foreground">
        Aquí encontrarás todas las empresas que han presentado una evaluación.
      </p>
      <div className="bg-white rounded-lg shadow p-6">
        {/* Sólo pasamos data y onDeleted */}
        <CompaniesTable data={data} onDeleted={handleDeleted} />
      </div>
    </div>
  );
}
