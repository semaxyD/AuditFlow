// SearchUsersPage.tsx
"use client";

import { useEffect, useState } from "react";
import CompaniesTable from "./ComplaintsTable/CompaniesTable";
import { Company } from "./ComplaintsTable/types/company";
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
    const token = localStorage.getItem("token") || "";
    const endpoint =
      role === "auditor_interno" || role === "auditor_externo"
        ? "/reports-evaluation/myCompanies"
        : "/reports-evaluation/companies";

    fetch(`http://localhost:3001${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [role, status, refreshToggle]);

  const handleDeleted = () => setRefreshToggle((f) => !f);
  const handleUpdated = () => setRefreshToggle((f) => !f);

  if (status === "loading" || loading)
    return <Loading message="Cargando empresas…" />;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Empresas</h1>
      <CompaniesTable
        data={data}
        onDeleted={handleDeleted}
        onUpdated={handleUpdated}
      />
    </div>
  );
}
