"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useRoleCheck } from "@/hooks/useRoleCheck";

type Norm = { id: number; name: string };

export function EvaluationSettingsModal({
  companies,
  openModal,
  setOpenModal,
  setInfo,
}: {
  companies: { id: number; name: string }[];
  openModal: boolean;
  setOpenModal: (v: boolean) => void;
  setInfo: (info: { companyId?: number; ruleId: number }) => void;
}) {
  const { role, status } = useRoleCheck("auditor_interno", "auditor_externo");
  const isInternal = role === "auditor_interno";

  const [norms, setNorms] = useState<Norm[]>([]);
  const [loadingNorms, setLoadingNorms] = useState(true);
  const [selectedRule, setSelectedRule] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  // Si sólo hay una empresa y además usuario externo, preselecciónala
  useEffect(() => {
    if (!isInternal && companies.length === 1) {
      setSelectedCompany(companies[0].id.toString());
    }
  }, [companies, isInternal]);

  // Carga todas las normas
  useEffect(() => {
    (async () => {
      setLoadingNorms(true);
      try {
        const token = localStorage.getItem("token") || "";
        const res = await fetch("http://localhost:3001/auditory/allNorms", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error(res.statusText);
        setNorms(await res.json());
      } catch {
        setNorms([]);
      } finally {
        setLoadingNorms(false);
      }
    })();
  }, []);

  const handleContinue = () => {
    // Para interno, basta with selectedRule
    if (isInternal) {
      if (!selectedRule) {
        alert("Debes seleccionar una norma");
        return;
      }
      setInfo({ ruleId: parseInt(selectedRule, 10) });
      setOpenModal(false);
      return;
    }

    // Para externo, normas + empresa
    if (selectedRule && selectedCompany) {
      setInfo({
        ruleId: parseInt(selectedRule, 10),
        companyId: parseInt(selectedCompany, 10),
      });
      setOpenModal(false);
    } else {
      alert("Debes seleccionar norma y empresa");
    }
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent
        className="sm:max-w-[550px]"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Parámetros de la evaluación</DialogTitle>
          <DialogDescription>
            {isInternal
              ? "Selecciona la norma."
              : "Selecciona la norma y la empresa."}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-4 py-4">
          {/* Selector de norma: siempre visible */}
          <div className="flex flex-col gap-2">
            <Label>Seleccionar norma</Label>
            <Select
              value={selectedRule}
              onValueChange={setSelectedRule}
              disabled={loadingNorms}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Elige norma..." />
              </SelectTrigger>
              <SelectContent>
                {loadingNorms ? (
                  <SelectItem value="loading" disabled>
                    Cargando…
                  </SelectItem>
                ) : norms.length === 0 ? (
                  <SelectItem value="none" disabled>
                    No hay normas
                  </SelectItem>
                ) : (
                  norms.map((n) => (
                    <SelectItem key={n.id} value={n.id.toString()}>
                      {n.name}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Selector de empresa: sólo para externos */}
          {!isInternal && (
            <div className="flex flex-col gap-2">
              <Label>Seleccionar empresa</Label>
              <Select
                value={selectedCompany}
                onValueChange={setSelectedCompany}
                disabled={companies.length === 1}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Elige empresa..." />
                </SelectTrigger>
                <SelectContent>
                  {companies.map((c) => (
                    <SelectItem key={c.id} value={c.id.toString()}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button type="button" onClick={handleContinue}>
            Continuar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
