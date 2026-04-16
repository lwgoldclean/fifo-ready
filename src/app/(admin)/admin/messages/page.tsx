import { db } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

export default async function AdminMessagesPage() {
  const messages = await db.message.findMany({
    include: {
      user: { select: { name: true, email: true } },
      replies: { orderBy: { createdAt: "desc" }, take: 1 },
    },
    orderBy: { createdAt: "desc" },
  });

  const openCount = messages.filter((m) => m.status === "OPEN").length;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-500 mt-1">
          {messages.length} total · {openCount} open
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          {messages.length === 0 ? (
            <div className="p-12 text-center">
              <MessageSquare className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500">No messages yet.</p>
            </div>
          ) : (
            <div className="divide-y">
              {messages.map((msg) => {
                const lastReply = msg.replies[0];
                const hasAdminReply = lastReply?.fromAdmin;
                return (
                  <Link
                    key={msg.id}
                    href={`/admin/messages/${msg.id}`}
                    className="flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {msg.user.name ?? msg.user.email}
                        </p>
                        <span className="text-gray-300">·</span>
                        <p className="text-sm text-gray-500 truncate">{msg.subject}</p>
                      </div>
                      <p className="text-xs text-gray-400">{formatDate(msg.createdAt)}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4 shrink-0">
                      {!hasAdminReply && msg.status === "OPEN" && (
                        <Badge variant="destructive">Needs reply</Badge>
                      )}
                      <Badge variant={msg.status === "OPEN" ? "secondary" : "outline"}>
                        {msg.status === "OPEN" ? "Open" : "Closed"}
                      </Badge>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
