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
import { useState } from "react";
import { Company } from "../EditCompanyForm/EditCompanyForm";

import { EditCompanyForm } from "../EditCompanyForm/EditCompanyForm";
import { Pencil } from "lucide-react";

export default function EditCompanyModal({
  company,
  onUpdated,
}: {
  company: Company;
  onUpdated: () => void;
}) {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    setOpen(false);
    onUpdated();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Editar compañía"
          onClick={() => setOpen(false)}
        >
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Editar compañia</DialogTitle>
        </DialogHeader>
        <EditCompanyForm company={company} onUpdated={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
}
