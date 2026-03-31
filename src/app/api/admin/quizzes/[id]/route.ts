import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";

const questionSchema = z.object({
  question: z.string().min(1),
  options: z.array(z.string()).min(2).max(4),
  answer: z.number().min(0),
  order: z.number().optional(),
});

const updateSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  order: z.number().optional(),
  published: z.boolean().optional(),
  passMark: z.number().min(1).max(100).optional(),
  questions: z.array(questionSchema).optional(),
});

async function requireAdmin() {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") return null;
  return session;
}

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { id } = await params;
  const quiz = await db.quiz.findUnique({
    where: { id },
    include: { questions: { orderBy: { order: "asc" } } },
  });

  if (!quiz) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(quiz);
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { id } = await params;

  try {
    const body = await req.json();
    const { questions, ...quizData } = updateSchema.parse(body);

    const quiz = await db.quiz.update({
      where: { id },
      data: {
        ...quizData,
        ...(questions !== undefined && {
          questions: {
            deleteMany: {},
            create: questions.map((q, i) => ({ ...q, order: q.order ?? i })),
          },
        }),
      },
      include: { questions: { orderBy: { order: "asc" } } },
    });

    return NextResponse.json(quiz);
  } catch {
    return NextResponse.json({ error: "Failed to update quiz" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { id } = await params;
  await db.quiz.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
