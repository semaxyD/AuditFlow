"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Circle, Delete, Eye, Pencil, Trash } from "lucide-react";
import "./EvaluationsTable.css";
import { ListedEvaluation } from "../../mock/mock";
import Link from "next/link";

export const columns: ColumnDef<ListedEvaluation>[] = [
  {
    accessorKey: "id",
    header: "Id usuario",
  },
  {
    accessorKey: "name",
    header: "Nombre ",
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 table-header"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha
          <ArrowUpDown className="ml-2 h-4 w-4 text-right" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 table-header"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Estado
          <ArrowUpDown className="ml-2 h-4 w-4 text-right" />
        </Button>
      );
    },
  },
  {
    accessorKey: "score",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 table-header"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Puntaje
          <ArrowUpDown className="ml-2 h-4 w-4 text-right" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const score: any = row.getValue("score");
      return (
        <div className="flex items-center gap-2">
          <Circle
            className={`h-2 w-2 ${
              score >= 90
                ? "fill-green-500 text-transparent"
                : score >= 75
                ? "fill-yellow-500 text-transparent"
                : "fill-red-500 text-transparent"
            }`}
          />
          {score}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 justify-end">
          <Button variant="outline" size="icon" title="Editar evaluación">
            <Pencil />
          </Button>
          <Button variant="default" size="icon" title="Ver evaluación" asChild>
            <Link href={`/dashboard/evaluations-list/${row.getValue("id")}`}>
              <Eye />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
