import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import Link from "next/link";
import { ClipboardList, CheckCircle, XCircle, Clock, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default async function QuizzesPage() {
  const session = await auth();
  if (!session?.user) return null;

  const [quizzes, attempts] = await Promise.all([
    db.quiz.findMany({
      where: { published: true },
      include: { _count: { select: { questions: true } } },
      orderBy: { order: "asc" },
    }),
    db.quizAttempt.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const bestAttemptByQuiz = attempts.reduce((acc, attempt) => {
    const existing = acc[attempt.quizId];
    if (!existing || attempt.score > existing.score) {
      acc[attempt.quizId] = attempt;
    }
    return acc;
  }, {} as Record<string, (typeof attempts)[number]>);

  const passedCount = Object.values(bestAttemptByQuiz).filter((a) => a.passed).length;

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Knowledge Quizzes</h1>
          <p className="text-gray-500 mt-1">Test your FIFO knowledge and track your progress</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Progress</p>
          <p className="text-lg font-bold text-gray-900">{passedCount} / {quizzes.length} passed</p>
        </div>
      </div>

      {quizzes.length > 0 && (
        <Card className="mb-8 bg-orange-50 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-orange-800">Overall Progress</span>
              <span className="text-sm font-bold text-orange-800">
                {quizzes.length > 0 ? Math.round((passedCount / quizzes.length) * 100) : 0}%
              </span>
            </div>
            <Progress
              value={quizzes.length > 0 ? (passedCount / quizzes.length) * 100 : 0}
              className="h-2 bg-orange-200 [&>div]:bg-orange-500"
            />
          </CardContent>
        </Card>
      )}

      {quizzes.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <ClipboardList className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-500">No quizzes available yet. Check back soon.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quizzes.map((quiz) => {
            const best = bestAttemptByQuiz[quiz.id];
            const attemptCount = attempts.filter((a) => a.quizId === quiz.id).length;

            return (
              <Card key={quiz.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
                        {best?.passed && (
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        )}
                      </div>
                      {quiz.description && (
                        <p className="text-sm text-gray-500 mb-3">{quiz.description}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <ClipboardList className="h-3 w-3" />
                      {quiz._count.questions} questions
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Pass mark: {quiz.passMark}%
                    </span>
                    {attemptCount > 0 && (
                      <span>{attemptCount} attempt{attemptCount !== 1 ? "s" : ""}</span>
                    )}
                  </div>

                  {best && (
                    <div className="flex items-center gap-2 mb-4 p-2 rounded-md bg-gray-50">
                      {best.passed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-xs text-gray-600">
                        Best score: <strong>{best.score}%</strong>
                      </span>
                      <Badge variant={best.passed ? "success" : "destructive"} className="ml-auto">
                        {best.passed ? "Passed" : "Failed"}
                      </Badge>
                    </div>
                  )}

                  {quiz.category && (
                    <Badge variant="secondary" className="mb-3 text-xs">{quiz.category}</Badge>
                  )}

                  <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                    <Link href={`/quizzes/${quiz.id}`}>
                      {best ? (best.passed ? "Retake Quiz" : "Try Again") : "Start Quiz"}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
