import Link from "next/link";
import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import { HardHat, LayoutDashboard, FileText, ClipboardList, Users, LogOut, ArrowLeft, ShieldCheck } from "lucide-react";

async function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </button>
    </form>
  );
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") redirect("/dashboard");

  const navItems = [
    { href: "/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/admin/students", label: "Students", icon: Users },
    { href: "/admin/documents", label: "Documents", icon: FileText },
    { href: "/admin/quizzes", label: "Quizzes", icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-white border-r flex flex-col">
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

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-400 hover:bg-gray-50 transition-colors mt-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </nav>

        <div className="p-4 border-t">
          <div className="px-3 py-2 mb-2">
            <p className="text-xs font-medium text-gray-900 truncate">{session.user.name}</p>
            <p className="text-xs text-gray-400 truncate">{session.user.email}</p>
          </div>
          <SignOutButton />
        </div>
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
