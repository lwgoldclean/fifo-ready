import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  body: z.string().min(1).max(5000),
  close: z.boolean().optional(),
});

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;
  const body = await req.json();
  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const message = await db.message.findUnique({ where: { id } });
  if (!message) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const [reply] = await db.$transaction([
    db.messageReply.create({
      data: { messageId: id, body: result.data.body, fromAdmin: true },
    }),
    db.message.update({
      where: { id },
      data: { status: result.data.close ? "CLOSED" : "OPEN" },
    }),
  ]);

  return NextResponse.json(reply);
}
