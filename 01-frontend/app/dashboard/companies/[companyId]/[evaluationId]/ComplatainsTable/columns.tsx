"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Star, Trash } from "lucide-react";
import Link from "next/link";

export type EvaluationVersion = {
  version_number: number;
  create_by: string;
  created_at: string;
  is_latest: boolean;
  score: number;
};

export const versionColumns: ColumnDef<EvaluationVersion>[] = [
  {
    accessorKey: "version_number",
    header: "Versión",
    cell: ({ row }) => (
      <div className="font-medium">v{row.original.version_number}</div>
    ),
  },
  {
    accessorKey: "create_by",
    header: "Creado por",
  },
  {
    accessorKey: "created_at",
    header: "Fecha de creación",
    cell: ({ row }) => {
      const date = new Date(row.original.created_at);
      return date.toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
  {
    accessorKey: "is_latest",
    header: "¿Última?",
    cell: ({ row }) =>
      row.original.is_latest ? (
        <div className="text-teal-700 font-semibold flex items-center gap-1">
          <Star className="h-4 w-4" /> Sí
        </div>
      ) : (
        <span className="text-muted-foreground">No</span>
      ),
  },
  {
    accessorKey: "score",
    header: "Puntaje",
    cell: ({ row }) => {
      const score = row.original.score; // asumimos un número entre 0 y 100

      return (
        <div className="w-full max-w-[120px]">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-700 transition-all"
              style={{ width: `${score}%` }}
            />
          </div>
          <div className="text-xs text-right mt-1">{score}</div>
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const version = row.original;
      return (
        <div className="flex gap-2 justify-end">
          <Button variant="destructive" size="sm">
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];
