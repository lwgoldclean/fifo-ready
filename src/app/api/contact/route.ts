import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  subject: z.string().min(1).max(100),
  message: z.string().min(10).max(2000),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { subject, message } = result.data;

  const created = await db.message.create({
    data: {
      userId: session.user.id,
      subject,
      replies: {
        create: {
          body: message,
          fromAdmin: false,
        },
      },
    },
  });

  return NextResponse.json({ messageId: created.id });
}

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const messages = await db.message.findMany({
    where: { userId: session.user.id },
    include: {
      replies: { orderBy: { createdAt: "asc" } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(messages);
}
