import { db } from "@/lib/db";
import { Users, FileText, ClipboardList, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatCurrency } from "@/lib/utils";

export default async function AdminPage() {
  const [userCount, paidCount, docCount, quizCount, recentStudents, recentPurchases] =
    await Promise.all([
      db.user.count({ where: { role: "STUDENT" } }),
      db.user.count({ where: { role: "STUDENT", hasPaid: true } }),
      db.document.count(),
      db.quiz.count(),
      db.user.findMany({
        where: { role: "STUDENT" },
        orderBy: { createdAt: "desc" },
        take: 5,
        select: { id: true, name: true, email: true, hasPaid: true, createdAt: true },
      }),
      db.purchase.findMany({
        where: { status: "COMPLETED" },
        orderBy: { createdAt: "desc" },
        take: 5,
        include: { user: { select: { name: true, email: true } } },
      }),
    ]);

  const totalRevenue = await db.purchase.aggregate({
    where: { status: "COMPLETED" },
    _sum: { amount: true },
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Overview</h1>
        <p className="text-gray-500 mt-1">Platform statistics and recent activity</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{userCount}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Enrolled</p>
                <p className="text-2xl font-bold text-gray-900">{paidCount}</p>
                <p className="text-xs text-gray-400">{userCount > 0 ? Math.round((paidCount / userCount) * 100) : 0}% conversion</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(totalRevenue._sum.amount ?? 0)}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Content</p>
                <p className="text-2xl font-bold text-gray-900">{docCount + quizCount}</p>
                <p className="text-xs text-gray-400">{docCount} docs · {quizCount} quizzes</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Students */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            {recentStudents.length === 0 ? (
              <p className="text-sm text-gray-400">No students yet.</p>
            ) : (
              <div className="space-y-3">
                {recentStudents.map((student) => (
                  <div key={student.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{student.name}</p>
                      <p className="text-xs text-gray-400">{student.email}</p>
                      <p className="text-xs text-gray-300">{formatDate(student.createdAt)}</p>
                    </div>
                    <Badge variant={student.hasPaid ? "success" : "secondary"}>
                      {student.hasPaid ? "Enrolled" : "Free"}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Purchases */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent Purchases</CardTitle>
          </CardHeader>
          <CardContent>
            {recentPurchases.length === 0 ? (
              <p className="text-sm text-gray-400">No purchases yet.</p>
            ) : (
              <div className="space-y-3">
                {recentPurchases.map((purchase) => (
                  <div key={purchase.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{purchase.user.name}</p>
                      <p className="text-xs text-gray-400">{purchase.user.email}</p>
                      <p className="text-xs text-gray-300">{formatDate(purchase.createdAt)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">{formatCurrency(purchase.amount)}</p>
                      <Badge variant="success">Paid</Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
