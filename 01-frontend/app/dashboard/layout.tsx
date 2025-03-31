'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Users, UserPlus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const menuItems = [
  { href: '/dashboard', label: 'Inicio' },
];

const userMenuItems = [
  { href: '/dashboard/users/create', label: 'Crear usuario', icon: UserPlus },
  { href: '/dashboard/users/search', label: 'Buscar usuarios', icon: Search },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const renderMenuItem = (item: { href: string; label: string; icon?: any }) => {
    const Icon = item.icon;
    return (
      <Link
        key={item.href}
        href={item.href}
        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
          pathname === item.href
            ? 'bg-gray-100 text-gray-900'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
        onClick={() => setIsOpen(false)}
      >
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {item.label}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center px-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[280px]">
              <SheetHeader>
                <SheetTitle>Menú</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-2 mt-4">
                {menuItems.map(renderMenuItem)}
                <div className="px-3 py-2">
                  <div className="text-sm font-medium text-gray-500 mb-2">Usuarios</div>
                  <div className="space-y-1">
                    {userMenuItems.map(renderMenuItem)}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="ml-4 font-semibold">Sistema ISO 14001</div>
        </div>
      </header>

      {/* Sidebar y contenido principal */}
      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-white">
          <nav className="flex-1 space-y-1 p-4">
            {menuItems.map(renderMenuItem)}
            <div className="px-3 py-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm font-medium"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Usuarios
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {userMenuItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 