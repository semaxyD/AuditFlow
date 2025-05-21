"use client";
import { useRoleCheck } from "@/hooks/useRoleCheck";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Circle,
  Delete,
  Eye,
  FileSpreadsheet,
  FileText,
  Pencil,
  Sheet,
  Trash,
} from "lucide-react";
import "./RulesTable.css";
import { Rule } from "../../mock/mock";
import Link from "next/link";

export const columns: ColumnDef<Rule>[] = [
  {
    accessorKey: "id",
    header: "Id usuario",
  },
  {
    accessorKey: "code",
    header: "Código",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
];
