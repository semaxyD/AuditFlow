import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
  Home,
  List,
  Search,
  Settings,
  User,
  UserPlus,
} from "lucide-react";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Inicio",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Configuración",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar">
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
              <SidebarMenu>
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Evaluaciones
                          </div>
                          <ChevronDown className="w-4 h-4 transition-transform" />
                        </div>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem className="hover:bg-gray-900 px-2 py-1 rounded-md group/subitem cursor-pointer">
                          <Link
                            href="/dashboard/evaluations-list"
                            className="flex items-center gap-2 group-hover/subitem:text-white"
                          >
                            <List className="w-4 h-4" />
                            <span>Listado</span>
                          </Link>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem className="hover:bg-gray-900 px-2 py-1 rounded-md group/subitem cursor-pointer">
                          <Link
                            href="/dashboard/evaluation"
                            className="flex items-center gap-2 group-hover/subitem:text-white"
                          >
                            <FilePlus2 className="w-4 h-4" />
                            <span>Crear</span>
                          </Link>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
