import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { signOut } from "next-auth/react";
import { useRoleCheck } from "@/hooks/useRoleCheck";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  ChevronDown,
  FilePlus2,
  Ruler,
  List,
  Search,
  Settings,
  User,
  UserPlus,
  Building2,
  FileSearch2,
  ListChecks,
  LogOut,
  ChevronsUpDown,
  User2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { title } from "process";

export function AppSidebar() {
  const { role, status } = useRoleCheck("auditor_interno", "auditor_externo");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const items = [];

  if (role === "admin") {
    items.push({
      title: "Empresas",
      url: "/dashboard/companies",
      icon: Building2,
    });
  } else {
    items.push(
      {
        title: "Mis auditorías",
        url: "/dashboard/companies",
        icon: FileSearch2,
      },
      {
        title: "Crear auditoría",
        url: "/dashboard/evaluation",
        icon: FilePlus2,
      }
    );
  }
  if (role === "admin") {
    items.push({
      title: "Normas",
      url: "/dashboard/rules/",
      icon: Ruler,
    });
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("user");
    if (!stored) return;

    try {
      const user = JSON.parse(stored);
      setName(user.name);
      setEmail(user.email);
      console.log("User role from localStorage:", user.role);
    } catch (e) {
      console.error("Error parsing user from localStorage:", e);
    }
  }, []);

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              {role === "admin" && (
                <SidebarMenu>
                  <Collapsible className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton asChild>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Usuarios
                            </div>
                            <ChevronDown className="w-4 h-4 transition-transform" />
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem className="hover:bg-gray-900 px-2 py-1 rounded-md group/subitem cursor-pointer">
                            <Link
                              href="/dashboard/users/create"
                              className="flex items-center gap-2 group-hover/subitem:text-white"
                            >
                              <UserPlus className="w-4 h-4" />
                              <span>Crear</span>
                            </Link>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem className="hover:bg-gray-900 px-2 py-1 rounded-md group/subitem cursor-pointer">
                            <Link
                              href="/dashboard/users/search"
                              className="flex items-center gap-2 group-hover/subitem:text-white"
                            >
                              <Search className="w-4 h-4" />
                              <span>Buscar</span>
                            </Link>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex items-center w-full gap-2 px-2 py-6 ">
                  <User2 className="w-10 h-10" />
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-medium text-gray-900">
                      {name}
                    </span>
                    <span className="text-xs text-gray-500">{email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width] w-60"
              >
                <DropdownMenuItem
                  onSelect={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    signOut({ callbackUrl: "/" });
                  }}
                  className="group flex items-center gap-2 text-red-600 hover:text-black"
                >
                  <LogOut className="w-4 h-4 text-red-600 group-hover:text-black" />
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
