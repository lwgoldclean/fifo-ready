import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import { StudentNav } from "./student-nav";

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const isAdmin = session.user.role === "ADMIN";

  async function signOutAction() {
    "use server";
    await signOut({ redirectTo: "/" });
  }

  return (
    <StudentNav
      user={{ name: session.user.name, email: session.user.email }}
      isAdmin={isAdmin}
      signOutAction={signOutAction}
    >
      {children}
    </StudentNav>
  );
}
