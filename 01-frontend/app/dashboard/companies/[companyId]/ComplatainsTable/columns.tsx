"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, Trash } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export type Evaluation = {
  evaluation_id: number;
  evaluation_created_at: string;
  creator_name: string;
  company_id: number;
  norm: {
    norm_id: number;
    norm_name: string;
    norm_code: string;
  };
};

export function getEvaluationColumns(role: string): ColumnDef<Evaluation>[] {
  return [
    {
      accessorKey: "evaluation_id",
      header: "ID Evaluación",
    },
    {
      accessorKey: "creator_name",
      header: "Creador",
    },
    {
      id: "norma",
      header: "Norma",
      cell: ({ row }) => {
        const { norm_name } = row.original.norm;
        return <span>{norm_name}</span>;
      },
    },
    {
      accessorKey: "evaluation_created_at",
      header: "Fecha de creación",
      cell: ({ row }) =>
        new Date(row.original.evaluation_created_at).toLocaleDateString(
          "es-ES",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const evaluationId = row.original.evaluation_id;
        const companyId = String(row.original.company_id);
        // Elegimos destino según rol
        const href =
          role === "auditor_externo"
            ? `/dashboard/companies/${companyId}/version/${evaluationId}`
            : `/dashboard/companies/${companyId}/${evaluationId}`;
        return (
          <div className="flex gap-2 justify-end">
            <Link href={href}>
              <Button variant="outline" size="icon">
                <Eye />
              </Button>
            </Link>
            <Button variant="destructive" size="icon">
              <Trash />
            </Button>
          </div>
        );
      },
    },
  ];
}
