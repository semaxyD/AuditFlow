"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function EvaluationObservationsModal() {
  const [value, setValue] = useState("");

  const handleObservationsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  // Fetch al back para agregar la observacion a la evaluacion
  const handleSubmit = async () => {
    try {
      //   const response = await fetch("/api/evaluations/observations", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ observations: value }),
      //   });
      //   if (!response.ok) {
      //     throw new Error("Error al enviar las observaciones");
      //   }
      console.log("Observaciones:", value);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Button asChild variant="secondary">
        <Link href="/dashboard/evaluations-list">Volver</Link>
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Añadir observaciones</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Observaciones</DialogTitle>
          </DialogHeader>
          <div className="mt-2 w-full overflow-x-hidden">
            <Textarea
              className="bg-gray-100 w-full"
              onChange={handleObservationsChange}
            />
          </div>
          <Button onClick={handleSubmit}>Enviar</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
