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

export const evaluationColumns: ColumnDef<Evaluation>[] = [
  {
    accessorKey: "evaluation_id",
    header: "ID Evaluación",
  },
  {
    accessorKey: "creator_name",
    header: "Creador",
  },
  {
    id: "norm",
    header: "Norma",
    cell: ({ row }) => {
      const norm = row.original.norm;
      if (!norm) {
        return <span className="italic text-muted-foreground">Sin norma</span>;
      }
      return <span>{norm.norm_name}</span>;
    },
  },
  {
    accessorKey: "evaluation_created_at",
    header: "Fecha de creación",
    cell: ({ row }) =>
      new Date(row.original.evaluation_created_at).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const evaluationId = row.original.evaluation_id;
      const companyId = String(row.original.company_id);
      console.log("Datos de la fila:", row.original);
      console.log("Company ID:", companyId);
      console.log("Evaluation ID:", evaluationId);
      return (
        <div className="flex gap-2 justify-end">
          <Link href={`/dashboard/companies/${companyId}/${evaluationId}`}>
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4" />
            </Button>
          </Link>

          <Button variant="destructive" size="sm">
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];
