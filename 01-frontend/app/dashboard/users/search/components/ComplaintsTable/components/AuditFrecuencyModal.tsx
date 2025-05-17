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
import { Timer } from "lucide-react";
import AuditFrecuencyForm from "./AuditFrecuencyForm";

export default function AuditFrecuencyModal({ userId }: { userId: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Editar frecuencia de evaluación"
        >
          <Timer />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Editar frecuencia de evaluación</DialogTitle>
        </DialogHeader>
        <AuditFrecuencyForm
          userId={userId}
          companies={[
            {
              id: 1,
              name: "Kode Studio",
            },
            {
              id: 2,
              name: "UAO",
            },
          ]}
          rules={[
            {
              id: 1,
              name: "ISO 14001",
            },
            {
              id: 2,
              name: "ISO 27001",
            },
          ]}
        />
      </DialogContent>
    </Dialog>
  );
}
