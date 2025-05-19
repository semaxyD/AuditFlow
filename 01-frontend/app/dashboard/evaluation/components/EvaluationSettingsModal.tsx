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
type Company = { id: number; name: string };

export function EvaluationSettingsModal({
  openModal,
  setOpenModal,
  setInfo,
}: {
  openModal: boolean;
  setOpenModal: (v: boolean) => void;
  setInfo: (info: { companyId?: number; ruleId: number }) => void;
}) {
  const { role } = useRoleCheck("auditor_interno", "auditor_externo");
  const isInternal = role === "auditor_interno";

  const [norms, setNorms] = useState<Norm[]>([]);
  const [loadingNorms, setLoadingNorms] = useState(true);

  const [companies, setCompanies] = useState<Company[]>([]);
  const [loadingCompanies, setLoadingCompanies] = useState(true);

  const [selectedRule, setSelectedRule] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  // 1) Cargar normas
  useEffect(() => {
    (async () => {
      setLoadingNorms(true);
      try {
        const token = localStorage.getItem("token") || "";
        const res = await fetch("http://localhost:3001/auditory/allNorms", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error(res.statusText);
        const data: Norm[] = await res.json();
        console.log("Normas cargadas:", data);
        setNorms(data);
      } catch (e) {
        console.error("Error al cargar normas:", e);
        setNorms([]);
      } finally {
        setLoadingNorms(false);
      }
    })();
  }, []);

  // 2) Cargar empresas
  useEffect(() => {
    if (isInternal) {
      setLoadingCompanies(false);
      setCompanies([]);
      return;
    }

    (async () => {
      setLoadingCompanies(true);
      try {
        const token = localStorage.getItem("token") || "";
        const res = await fetch("http://localhost:3001/auditory/myCompanies", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error(res.statusText);
        const data: Company[] = await res.json();
        console.log("Empresas cargadas:", data);
        setCompanies(data);
        if (data.length === 1) {
          setSelectedCompany(data[0].id.toString());
        }
      } catch (e) {
        console.error("Error al cargar empresas:", e);
        setCompanies([]);
      } finally {
        setLoadingCompanies(false);
      }
    })();
  }, [isInternal]);

  const handleContinue = () => {
    if (isInternal) {
      if (!selectedRule) {
        alert("Debes seleccionar una norma");
        return;
      }
      setInfo({ ruleId: +selectedRule });
      setOpenModal(false);
      return;
    }

    if (!selectedRule || !selectedCompany) {
      alert("Debes seleccionar norma y empresa");
      return;
    }
    setInfo({
      ruleId: +selectedRule,
      companyId: +selectedCompany,
    });
    setOpenModal(false);
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
          {/* Selector de norma */}
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

          {/* Selector de empresa (sólo externo) */}
          {!isInternal && (
            <div className="flex flex-col gap-2">
              <Label>Seleccionar empresa</Label>
              <Select
                value={selectedCompany}
                onValueChange={setSelectedCompany}
                disabled={loadingCompanies}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Elige empresa..." />
                </SelectTrigger>
                <SelectContent>
                  {loadingCompanies ? (
                    <SelectItem value="loading" disabled>
                      Cargando…
                    </SelectItem>
                  ) : companies.length === 0 ? (
                    <SelectItem value="none" disabled>
                      No hay empresas
                    </SelectItem>
                  ) : (
                    companies.map((c) => (
                      <SelectItem key={c.id} value={c.id.toString()}>
                        {c.name}
                      </SelectItem>
                    ))
                  )}
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
