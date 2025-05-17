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
import { Pencil } from "lucide-react";
import { EditUserForm } from "./EditUserForm";

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export default function EditUserModal({ user }: { user: User }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" title="Editar usuario">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Editar usuario</DialogTitle>
        </DialogHeader>
        <EditUserForm user={user} />
      </DialogContent>
    </Dialog>
  );
}
