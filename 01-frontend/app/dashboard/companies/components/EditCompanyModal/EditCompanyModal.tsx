"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Company } from "../../mock/mock";
import { EditCompanyForm } from "../EditCompanyForm/EditCompanyForm";
import { Pencil } from "lucide-react";

export default function EditCompanyModal({ company }: { company: Company }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" title="Editar compañía">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Editar compañia</DialogTitle>
        </DialogHeader>
        <EditCompanyForm company={company} />
      </DialogContent>
    </Dialog>
  );
}
