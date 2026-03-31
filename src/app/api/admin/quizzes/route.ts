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

const quizSchema = z.object({
  title: z.string().min(1),
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

export async function GET() {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const quizzes = await db.quiz.findMany({
    include: { questions: { orderBy: { order: "asc" } }, _count: { select: { attempts: true } } },
    orderBy: { order: "asc" },
  });
  return NextResponse.json(quizzes);
}

export async function POST(req: Request) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    const body = await req.json();
    const { questions, ...quizData } = quizSchema.parse(body);

    const quiz = await db.quiz.create({
      data: {
        ...quizData,
        questions: questions
          ? { create: questions.map((q, i) => ({ ...q, order: q.order ?? i })) }
          : undefined,
      },
      include: { questions: true },
    });

    return NextResponse.json(quiz, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to create quiz" }, { status: 500 });
  }
}
