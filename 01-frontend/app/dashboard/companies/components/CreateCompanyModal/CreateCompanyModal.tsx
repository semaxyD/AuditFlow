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
import { CompanyForm } from "../CompanyForm/CompanyForm";

export default function CreateCompanyModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Crear compañia</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Crear compañia</DialogTitle>
        </DialogHeader>
        <CompanyForm />
      </DialogContent>
    </Dialog>
  );
}
