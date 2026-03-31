import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { QuizClient } from "./quiz-client";
import { auth } from "@/lib/auth";

export default async function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  if (!session?.user) return null;

  const quiz = await db.quiz.findUnique({
    where: { id, published: true },
    include: { questions: { orderBy: { order: "asc" } } },
  });

  if (!quiz) notFound();

  const previousAttempts = await db.quizAttempt.findMany({
    where: { userId: session.user.id, quizId: id },
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  // Strip the correct answer from questions before sending to client
  const clientQuestions = quiz.questions.map(({ id, question, options, order }) => ({
    id,
    question,
    options: options as string[],
    order,
  }));

  return (
    <QuizClient
      quiz={{
        id: quiz.id,
        title: quiz.title,
        description: quiz.description,
        passMark: quiz.passMark,
        questions: clientQuestions,
      }}
      previousAttempts={previousAttempts.map((a) => ({
        score: a.score,
        passed: a.passed,
        createdAt: a.createdAt.toISOString(),
      }))}
    />
  );
}
