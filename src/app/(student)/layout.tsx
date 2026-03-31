import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { signOut } from "@/lib/auth";
import { HardHat, LayoutDashboard, FileText, ClipboardList, LogOut, ShieldCheck } from "lucide-react";

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
        className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </button>
    </form>
  );
}

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const isAdmin = session.user.role === "ADMIN";

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/documents", label: "Documents", icon: FileText },
    { href: "/quizzes", label: "Quizzes", icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col">
        <div className="flex items-center gap-2 p-6 border-b">
          <HardHat className="h-6 w-6 text-orange-500" />
          <span className="font-bold text-gray-900">FIFO Ready</span>
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
          {isAdmin && (
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-orange-600 hover:bg-orange-50 transition-colors font-medium"
            >
              <ShieldCheck className="h-4 w-4" />
              Admin Panel
            </Link>
          )}
        </nav>

        <div className="p-4 border-t space-y-1">
          <div className="px-3 py-2 mb-2">
            <p className="text-xs font-medium text-gray-900 truncate">{session.user.name}</p>
            <p className="text-xs text-gray-400 truncate">{session.user.email}</p>
          </div>
          <SignOutButton />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
