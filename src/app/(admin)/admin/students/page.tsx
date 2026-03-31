import { db } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate, formatCurrency } from "@/lib/utils";
import { Users } from "lucide-react";

export default async function AdminStudentsPage() {
  const students = await db.user.findMany({
    where: { role: "STUDENT" },
    include: {
      purchases: { where: { status: "COMPLETED" } },
      _count: { select: { quizAttempts: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Students</h1>
        <p className="text-gray-500 mt-1">{students.length} registered students</p>
      </div>

      <Card>
        <CardContent className="p-0">
          {students.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500">No students yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-4 font-medium text-gray-600">Name</th>
                    <th className="text-left p-4 font-medium text-gray-600">Email</th>
                    <th className="text-left p-4 font-medium text-gray-600">Status</th>
                    <th className="text-left p-4 font-medium text-gray-600">Revenue</th>
                    <th className="text-left p-4 font-medium text-gray-600">Quiz Attempts</th>
                    <th className="text-left p-4 font-medium text-gray-600">Registered</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => {
                    const totalPaid = student.purchases.reduce((sum, p) => sum + p.amount, 0);
                    return (
                      <tr key={student.id} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">{student.name ?? "—"}</td>
                        <td className="p-4 text-gray-600">{student.email}</td>
                        <td className="p-4">
                          <Badge variant={student.hasPaid ? "success" : "secondary"}>
                            {student.hasPaid ? "Enrolled" : "Not enrolled"}
                          </Badge>
                        </td>
                        <td className="p-4 text-gray-700">
                          {totalPaid > 0 ? formatCurrency(totalPaid) : "—"}
                        </td>
                        <td className="p-4 text-gray-700">{student._count.quizAttempts}</td>
                        <td className="p-4 text-gray-400 text-xs">{formatDate(student.createdAt)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
