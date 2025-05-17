"use client";

import { memo, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VALID_ANSWERS } from "@/app/dashboard/evaluation/schemas/evaluation.schema";

type Props = {
  sectionId: number;
  question: any;
};

export const Question = memo(function Question({ sectionId, question }: Props) {
  const [showEvidence, setShowEvidence] = useState(false);
  const [showObservations, setShowObservations] = useState(false);

  const namePrefix = `sections.${sectionId}.${question.id}`;

  return (
    <Card className="p-4 space-y-2">
      <p className="font-medium">{question.question}</p>

      <RadioGroup disabled={true} className="flex gap-4">
        {VALID_ANSWERS.map((option) => (
          <div
            key={option.label}
            className="flex flex-col gap-2 items-center space-x-6 w-20"
          >
            <RadioGroupItem
              value={option.value}
              id={`${namePrefix}-${option.value}`}
              checked={question.response === option.value}
              className="mx-auto"
            />
            <label
              htmlFor={`${namePrefix}-${option.value}`}
              className="text-center"
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex gap-2">
        <Button
          type="button"
          variant="secondary"
          onClick={() => setShowEvidence(true)}
          className="hover:bg-teal-700 hover:text-white"
        >
          Evidencias
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={() => setShowObservations(true)}
          className="hover:bg-teal-700 hover:text-white"
        >
          Observaciones
        </Button>
      </div>

      {/* Modal para Evidencias */}
      <Dialog open={showEvidence} onOpenChange={setShowEvidence}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Evidencias</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>URL de la evidencia</p>
            <Input
              type="url"
              value={question.evidence || ""}
              readOnly
              className="bg-gray-100"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal para Observaciones */}
      <Dialog open={showObservations} onOpenChange={setShowObservations}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Observaciones</DialogTitle>
          </DialogHeader>
          <div className="mt-2 w-full">
            <Textarea
              value={question.observations || ""}
              readOnly
              className="bg-gray-100 w-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
});
