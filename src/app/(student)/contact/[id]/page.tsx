import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ContactThreadPage({ params }: Props) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const { id } = await params;

  const message = await db.message.findUnique({
    where: { id },
    include: {
      replies: { orderBy: { createdAt: "asc" } },
    },
  });

  if (!message || message.userId !== session.user.id) notFound();

  return (
    <div className="p-8 max-w-2xl">
      <Link
        href="/contact"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to messages
      </Link>

      <div className="mb-6">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-xl font-bold text-gray-900">{message.subject}</h1>
          <Badge variant={message.status === "OPEN" ? "secondary" : "outline"}>
            {message.status === "OPEN" ? "Open" : "Closed"}
          </Badge>
        </div>
        <p className="text-xs text-gray-400 mt-1">{formatDate(message.createdAt)}</p>
      </div>

      <div className="space-y-4">
        {message.replies.map((reply) => (
          <div
            key={reply.id}
            className={`flex ${reply.fromAdmin ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                reply.fromAdmin
                  ? "bg-white border border-gray-200 text-gray-900"
                  : "bg-orange-500 text-white"
              }`}
            >
              <p className="whitespace-pre-wrap">{reply.body}</p>
              <p
                className={`text-xs mt-1.5 ${
                  reply.fromAdmin ? "text-gray-400" : "text-orange-100"
                }`}
              >
                {reply.fromAdmin ? "Support" : "You"} · {formatDate(reply.createdAt)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {message.status === "OPEN" && (
        <p className="mt-8 text-sm text-gray-400 text-center">
          You&apos;ll be notified here once a reply comes in. Check back soon.
        </p>
      )}
    </div>
  );
}
