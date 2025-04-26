"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Circle, Delete, Pencil, Trash } from "lucide-react";
import "./../../../../evaluations-list/components/EvaluationsTable/EvaluationsTable.css";
import { User } from "./mock/users";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Id usuario",
  },
  {
    accessorKey: "name",
    header: "Nombre ",
  },
  {
    accessorKey: "email",
    header: "Correo electrónico",
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 table-header"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Rol
          <ArrowUpDown className="ml-2 h-4 w-4 text-right" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 justify-end">
          <Button variant="outline" size="sm">
            <Pencil />
          </Button>
          <Button variant="destructive" size="sm">
            <Trash />
          </Button>
        </div>
      );
    },
  },
];
