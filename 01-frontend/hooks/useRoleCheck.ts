import { useSession } from "next-auth/react";

export function useRoleCheck(allowedRoles: string[] = []) {
  const { data: session, status } = useSession();
  const role = session?.user?.role;
  const hasAccess = allowedRoles.includes(role || "auditor externo");

  return { hasAccess, role, status };
}
