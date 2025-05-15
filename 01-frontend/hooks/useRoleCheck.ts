"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

type Role = string;

export function useRoleCheck(roleA: Role, roleB?: Role) {
  const { status } = useSession();
  const [role, setRole] = useState<Role | null>(null);

  const allowedRoles: Role[] = roleB ? [roleA, roleB] : [roleA];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("user");
    if (!stored) return;

    try {
      const user = JSON.parse(stored);
      setRole(user.role);
      console.log("User role from localStorage:", user.role);
    } catch (e) {
      console.error("Error parsing user from localStorage:", e);
    }
  }, []);

  const hasAccess = allowedRoles.includes(role ?? "auditor externo");

  return { hasAccess, role, status };
}
