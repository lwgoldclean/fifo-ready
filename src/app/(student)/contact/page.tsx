import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { ContactForm } from "./contact-form";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export default async function ContactPage() {
  const session = await auth();
  if (!session?.user) return null;

  const messages = await db.message.findMany({
    where: { userId: session.user.id },
    include: {
      replies: { orderBy: { createdAt: "desc" }, take: 1 },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-orange-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Contact</h1>
        </div>
        <p className="text-gray-500 text-sm">
          Got a question or need help? Send a message below.
        </p>
      </div>

      <ContactForm
        userName={session.user.name ?? ""}
        userEmail={session.user.email ?? ""}
      />

      {messages.length > 0 && (
        <div className="mt-10">
          <h2 className="text-base font-semibold text-gray-900 mb-3">Your messages</h2>
          <Card>
            <CardContent className="p-0 divide-y">
              {messages.map((msg) => {
                const hasAdminReply = msg.replies.some((r) => r.fromAdmin);
                return (
                  <Link
                    key={msg.id}
                    href={`/contact/${msg.id}`}
                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{msg.subject}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{formatDate(msg.createdAt)}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4 shrink-0">
                      {hasAdminReply && (
                        <Badge variant="success">Reply received</Badge>
                      )}
                      <Badge variant={msg.status === "OPEN" ? "secondary" : "outline"}>
                        {msg.status === "OPEN" ? "Open" : "Closed"}
                      </Badge>
                    </div>
                  </Link>
                );
              })}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
