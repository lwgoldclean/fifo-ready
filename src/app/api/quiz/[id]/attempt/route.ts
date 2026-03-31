import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";

const attemptSchema = z.object({
  answers: z.record(z.string(), z.number()),
});

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!session.user.hasPaid) return NextResponse.json({ error: "No access" }, { status: 403 });

  const { id } = await params;

  const quiz = await db.quiz.findUnique({
    where: { id, published: true },
    include: { questions: true },
  });

  if (!quiz) return NextResponse.json({ error: "Quiz not found" }, { status: 404 });

  const body = await req.json();
  const { answers } = attemptSchema.parse(body);

  let correct = 0;
  for (const question of quiz.questions) {
    if (answers[question.id] === question.answer) correct++;
  }

  const score = quiz.questions.length > 0
    ? Math.round((correct / quiz.questions.length) * 100)
    : 0;
  const passed = score >= quiz.passMark;

  const attempt = await db.quizAttempt.create({
    data: {
      userId: session.user.id,
      quizId: id,
      score,
      passed,
      answers,
    },
  });

  return NextResponse.json({ score, passed, correct, total: quiz.questions.length, attemptId: attempt.id });
}

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!session.user.hasPaid) return NextResponse.json({ error: "No access" }, { status: 403 });

  const { id } = await params;

  const attempts = await db.quizAttempt.findMany({
    where: { userId: session.user.id, quizId: id },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return NextResponse.json(attempts);
}
