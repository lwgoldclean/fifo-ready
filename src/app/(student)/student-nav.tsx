"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HardHat,
  LayoutDashboard,
  FileText,
  ClipboardList,
  LogOut,
  ShieldCheck,
  Menu,
  X,
  MessageSquare,
} from "lucide-react";
import { IndustryCallCard } from "@/components/industry-call-card";

type User = {
  name?: string | null;
  email?: string | null;
};

type Props = {
  user: User;
  isAdmin: boolean;
  hasIndustryCall: boolean;
  signOutAction: () => Promise<void>;
  children: React.ReactNode;
};

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/quizzes", label: "Quizzes", icon: ClipboardList },
  { href: "/contact", label: "Contact", icon: MessageSquare },
];

export function StudentNav({ user, isAdmin, hasIndustryCall, signOutAction, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const sidebarContent = (
    <>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-md px-3 py-3 text-sm transition-colors ${
              pathname === item.href
                ? "bg-orange-50 text-orange-600 font-medium"
                : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
            }`}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {item.label}
          </Link>
        ))}
        {isAdmin && (
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-md px-3 py-3 text-sm text-orange-600 hover:bg-orange-50 transition-colors font-medium"
          >
            <ShieldCheck className="h-5 w-5 shrink-0" />
            Admin Panel
          </Link>
        )}
      </nav>
      <IndustryCallCard variant="sidebar" alreadyPurchased={hasIndustryCall} />
      <div className="p-4 border-t space-y-1">
        <div className="px-3 py-2 mb-2">
          <p className="text-xs font-medium text-gray-900 truncate">{user.name}</p>
          <p className="text-xs text-gray-400 truncate">{user.email}</p>
        </div>
        <form action={signOutAction}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            <LogOut className="h-5 w-5 shrink-0" />
            Sign Out
          </button>
        </form>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex print:hidden w-64 bg-white border-r flex-col shrink-0">
        <div className="flex items-center gap-2 p-6 border-b">
          <HardHat className="h-6 w-6 text-orange-500" />
          <span className="font-bold text-gray-900">FIFO Ready</span>
        </div>
        {sidebarContent}
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden print:hidden fixed top-0 left-0 right-0 z-30 bg-white border-b flex items-center justify-between px-4 h-14 shadow-sm">
        <div className="flex items-center gap-2">
          <HardHat className="h-5 w-5 text-orange-500" />
          <span className="font-bold text-gray-900">FIFO Ready</span>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 -mr-1 rounded-md text-gray-600 hover:bg-gray-100"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 bottom-0 z-50 w-72 bg-white flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <HardHat className="h-6 w-6 text-orange-500" />
            <span className="font-bold text-gray-900">FIFO Ready</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-1 rounded-md text-gray-600 hover:bg-gray-100"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        {sidebarContent}
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pt-14 md:pt-0 print:pt-0">
        {children}
      </main>
    </div>
  );
}
