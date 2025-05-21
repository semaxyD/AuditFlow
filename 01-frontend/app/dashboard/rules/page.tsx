"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { columns } from "./components/RulesTable/columns";
import RulesTable from "./components/RulesTable/RulesTable";
import Link from "next/link";
import { Rule } from "./mock/mock";

export default function DashboardPageClient() {
  const [norms, setNorms] = useState<Rule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_ENDPOINT;
        const token = localStorage.getItem("token") ?? "";
        const res = await fetch(`${base}/auditory/allNorms`, {
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Rule[] = await res.json();
        setNorms(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <p>Cargando normas…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="space-y-4 flex flex-col">
      <h1 className="text-3xl font-bold">Normas</h1>
      <Button className="self-end" asChild>
        <Link href="/dashboard/rules/create">Crear nueva norma</Link>
      </Button>
      <RulesTable columns={columns} data={norms} rules={norms} />
    </div>
  );
}
