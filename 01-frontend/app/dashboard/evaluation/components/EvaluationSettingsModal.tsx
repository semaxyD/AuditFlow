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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

export function EvaluationSettingsModal({
  companies,
  rules,
  openModal,
  setOpenModal,
  setInfo,
}: {
  companies: any[];
  rules: any[];
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  setInfo: (info: {
    companyId: number | undefined;
    ruleId: number | undefined;
  }) => void;
}) {
  const [selectedRule, setSelectedRule] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  useEffect(() => {
    if (companies.length === 1) {
      setSelectedCompany(companies[0].id.toString());
      setInfo({
        companyId: companies[0].id,
        ruleId: undefined
      });
    }
  }, [companies]);

  const handleRuleChange = (value: string) => {
    setSelectedRule(value);
    setInfo({
      companyId: selectedCompany ? parseInt(selectedCompany) : undefined,
      ruleId: parseInt(value)
    });
  };

  const handleCompanyChange = (value: string) => {
    setSelectedCompany(value);
    setInfo({
      companyId: parseInt(value),
      ruleId: selectedRule ? parseInt(selectedRule) : undefined
    });
  };

  const handleContinue = () => {
    if (selectedRule && (selectedCompany || companies.length === 1)) {
      setOpenModal(false);
    }
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent className="sm:max-w-[550px]" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Parametros de la evaluación</DialogTitle>
          <DialogDescription>
            Seleccione la norma y la empresa a la que realizará la evaluación
            (si aplica).
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label>Seleccionar norma</Label>
            <Select value={selectedRule} onValueChange={handleRuleChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="ISO 14001..." />
              </SelectTrigger>
              <SelectContent>
                {rules.map((rule) => (
                  <SelectItem key={rule.id} value={rule.id.toString()}>
                    {rule.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Seleccionar empresa</Label>
            <Select 
              value={selectedCompany} 
              onValueChange={handleCompanyChange}
              disabled={companies.length === 1}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="ASOCI S.A.S" />
              </SelectTrigger>
              <SelectContent>
                {companies.map((company) => (
                  <SelectItem key={company.id} value={company.id.toString()}>
                    {company.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button 
            type="button" 
            onClick={handleContinue}
            disabled={!selectedRule || (!selectedCompany && companies.length > 1)}
          >
            Continuar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
