import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { getCachedDocuments, getCachedQuizzes } from "@/lib/cache";
import Link from "next/link";
import { MetaPixelPurchase } from "@/components/meta-pixel-purchase";
import { FileText, ClipboardList, CheckCircle, Trophy, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { formatDate } from "@/lib/utils";
import { IndustryCallCard } from "@/components/industry-call-card";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>;
}) {
  const session = await auth();
  if (!session?.user) return null;

  const { success } = await searchParams;

  const [documents, quizzes, attempts, industryCallPurchase] = await Promise.all([
    getCachedDocuments(),
    getCachedQuizzes(),
    db.quizAttempt.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
    db.purchase.findFirst({
      where: { userId: session.user.id, productType: "industry_call", status: "COMPLETED" },
    }),
  ]);

  const hasIndustryCall = !!industryCallPurchase;

  const passedQuizIds = new Set(
    attempts.filter((a) => a.passed).map((a) => a.quizId)
  );

  const quizProgress = quizzes.length > 0
    ? Math.round((passedQuizIds.size / quizzes.length) * 100)
    : 0;

  const recentAttempts = attempts.slice(0, 3);

  return (
    <div className="p-8">
      {success === "true" && <MetaPixelPurchase />}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {session.user.name?.split(" ")[0] ?? "Mate"}!
        </h1>
        <p className="text-gray-500 mt-1">Here&apos;s your training progress</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Documents</p>
                <p className="text-2xl font-bold text-gray-900">{documents.length}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Quizzes Passed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {passedQuizIds.size} / {quizzes.length}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Attempts</p>
                <p className="text-2xl font-bold text-gray-900">{attempts.length}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <ClipboardList className="h-5 w-5 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quiz Progress */}
      {quizzes.length > 0 && (
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-orange-500" />
                <span className="font-medium text-gray-900">Overall Quiz Progress</span>
              </div>
              <span className="text-sm font-semibold text-gray-700">{quizProgress}%</span>
            </div>
            <Progress value={quizProgress} className="h-3" />
            <p className="text-xs text-gray-400 mt-2">
              {passedQuizIds.size} of {quizzes.length} quizzes passed
            </p>
          </CardContent>
        </Card>
      )}

      {/* Industry Call Upsell */}
      <div className="mb-6">
        <IndustryCallCard variant="dashboard" alreadyPurchased={hasIndustryCall} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Documents */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">Recent Documents</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/documents" className="text-orange-600">
                  View all <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {documents.length === 0 ? (
              <p className="text-sm text-gray-400">No documents available yet.</p>
            ) : (
              <div className="space-y-3">
                {documents.slice(0, 4).map((doc) => (
                  <Link
                    key={doc.id}
                    href={`/documents/${doc.id}`}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 group"
                  >
                    <div className="h-8 w-8 rounded-md bg-red-100 flex items-center justify-center shrink-0">
                      <FileText className="h-4 w-4 text-red-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate group-hover:text-orange-600">
                        {doc.title}
                      </p>
                      {doc.category && (
                        <p className="text-xs text-gray-400">{doc.category}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Quiz Attempts */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">Recent Quiz Results</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/quizzes" className="text-orange-600">
                  View all <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {recentAttempts.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-sm text-gray-400 mb-3">No quiz attempts yet.</p>
                <Button size="sm" asChild>
                  <Link href="/quizzes">Take a Quiz</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {recentAttempts.map((attempt) => {
                  const quiz = quizzes.find((q) => q.id === attempt.quizId);
                  return (
                    <div key={attempt.id} className="flex items-center justify-between p-2 rounded-md bg-gray-50">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {quiz?.title ?? "Unknown Quiz"}
                        </p>
                        <p className="text-xs text-gray-400">{formatDate(attempt.createdAt)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-700">{attempt.score}%</span>
                        <Badge variant={attempt.passed ? "success" : "destructive"}>
                          {attempt.passed ? "Passed" : "Failed"}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
