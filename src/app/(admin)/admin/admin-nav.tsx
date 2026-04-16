"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HardHat,
  LayoutDashboard,
  FileText,
  ClipboardList,
  Users,
  MessageSquare,
  LogOut,
  ArrowLeft,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

type User = {
  name?: string | null;
  email?: string | null;
};

type Props = {
  user: User;
  signOutAction: () => Promise<void>;
  children: React.ReactNode;
};

const navItems = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/students", label: "Students", icon: Users },
  { href: "/admin/messages", label: "Messages", icon: MessageSquare },
  { href: "/admin/documents", label: "Documents", icon: FileText },
  { href: "/admin/quizzes", label: "Quizzes", icon: ClipboardList },
];

export function AdminNav({ user, signOutAction, children }: Props) {
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
        <Link
          href="/dashboard"
          className="flex items-center gap-3 rounded-md px-3 py-3 text-sm text-gray-400 hover:bg-gray-50 transition-colors mt-2"
        >
          <ArrowLeft className="h-5 w-5 shrink-0" />
          Back to Dashboard
        </Link>
      </nav>
      <div className="p-4 border-t">
        <div className="px-3 py-2 mb-2">
          <p className="text-xs font-medium text-gray-900 truncate">{user.name}</p>
          <p className="text-xs text-gray-400 truncate">{user.email}</p>
        </div>
        <form action={signOutAction}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm text-gray-600 hover:bg-gray-100"
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
      <aside className="hidden md:flex w-64 bg-white border-r flex-col shrink-0">
        <div className="p-6 border-b">
          <div className="flex items-center gap-2 mb-1">
            <HardHat className="h-6 w-6 text-orange-500" />
            <span className="font-bold text-gray-900">FIFO Ready</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-orange-600 font-medium">
            <ShieldCheck className="h-3.5 w-3.5" />
            Admin Panel
          </div>
        </div>
        {sidebarContent}
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-white border-b flex items-center justify-between px-4 h-14 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <HardHat className="h-5 w-5 text-orange-500" />
            <span className="font-bold text-gray-900">FIFO Ready</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-orange-600 font-medium">
            <ShieldCheck className="h-3 w-3" />
            Admin
          </div>
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
          <div>
            <div className="flex items-center gap-2">
              <HardHat className="h-6 w-6 text-orange-500" />
              <span className="font-bold text-gray-900">FIFO Ready</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-orange-600 font-medium mt-0.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              Admin Panel
            </div>
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
      <main className="flex-1 overflow-auto pt-14 md:pt-0">
        {children}
      </main>
    </div>
  );
}
