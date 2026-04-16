import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { AdminReplyForm } from "./reply-form";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function AdminMessageThreadPage({ params }: Props) {
  const { id } = await params;

  const message = await db.message.findUnique({
    where: { id },
    include: {
      user: { select: { name: true, email: true } },
      replies: { orderBy: { createdAt: "asc" } },
    },
  });

  if (!message) notFound();

  return (
    <div className="p-8 max-w-2xl">
      <Link
        href="/admin/messages"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to messages
      </Link>

      <div className="mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{message.subject}</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              From {message.user.name ?? message.user.email}{" "}
              <span className="text-gray-400">({message.user.email})</span>
            </p>
          </div>
          <Badge variant={message.status === "OPEN" ? "secondary" : "outline"}>
            {message.status === "OPEN" ? "Open" : "Closed"}
          </Badge>
        </div>
        <p className="text-xs text-gray-400 mt-1">{formatDate(message.createdAt)}</p>
      </div>

      <div className="space-y-4 mb-8">
        {message.replies.map((reply) => (
          <div
            key={reply.id}
            className={`flex ${reply.fromAdmin ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                reply.fromAdmin
                  ? "bg-orange-500 text-white"
                  : "bg-white border border-gray-200 text-gray-900"
              }`}
            >
              <p className="whitespace-pre-wrap">{reply.body}</p>
              <p
                className={`text-xs mt-1.5 ${
                  reply.fromAdmin ? "text-orange-100" : "text-gray-400"
                }`}
              >
                {reply.fromAdmin ? "You (admin)" : message.user.name ?? "Student"} ·{" "}
                {formatDate(reply.createdAt)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {message.status === "OPEN" && (
        <AdminReplyForm messageId={message.id} />
      )}

      {message.status === "CLOSED" && (
        <p className="text-sm text-gray-400 text-center py-4 border-t">
          This thread is closed.
        </p>
      )}
    </div>
  );
}
