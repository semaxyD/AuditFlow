"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Circle, Delete, Pencil, Trash } from "lucide-react";
import "./../../../../evaluations-list/components/EvaluationsTable/EvaluationsTable.css";
import { User } from "./types/users";
import { DeleteUserModal } from "./components/DeleteUserModal";
import EditUserModal from "./components/EditUserModal";
import AuditFrecuencyModal from "./components/AuditFrecuencyModal";

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
          <AuditFrecuencyModal userId={row.original.id} />
          <EditUserModal user={row.original} />
          <DeleteUserModal userId={row.original.id} />
        </div>
      );
    },
  },
];
