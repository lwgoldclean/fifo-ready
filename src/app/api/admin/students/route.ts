import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const students = await db.user.findMany({
    where: { role: "STUDENT" },
    select: {
      id: true,
      name: true,
      email: true,
      hasPaid: true,
      createdAt: true,
      purchases: {
        select: { amount: true, status: true, createdAt: true },
        where: { status: "COMPLETED" },
      },
      _count: {
        select: { quizAttempts: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(students);
}
