import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AdminNav } from "./admin-nav";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") redirect("/dashboard");

  async function signOutAction() {
    "use server";
    await signOut({ redirectTo: "/" });
  }

  return (
    <AdminNav
      user={{ name: session.user.name, email: session.user.email }}
      signOutAction={signOutAction}
    >
      {children}
    </AdminNav>
  );
}
