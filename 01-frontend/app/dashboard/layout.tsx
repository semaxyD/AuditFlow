"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Users, UserPlus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/Sidebar/Sidebar";

const menuItems = [{ href: "/dashboard", label: "Inicio" }];

const userMenuItems = [
  { href: "/dashboard/users/create", label: "Crear usuario", icon: UserPlus },
  { href: "/dashboard/users/search", label: "Buscar usuarios", icon: Search },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const renderMenuItem = (item: {
    href: string;
    label: string;
    icon?: any;
  }) => {
    const Icon = item.icon;
    return (
      <Link
        key={item.href}
        href={item.href}
        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
          pathname === item.href
            ? "bg-gray-100 text-gray-900"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {item.label}
      </Link>
    );
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />

      {/* Contenido principal */}
      <main className="flex-1 p-6 overflow-x-hidden">
        <SidebarTrigger />
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
    </SidebarProvider>
  );
}
