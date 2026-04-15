import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { sendContactNotification, sendContactConfirmation } from "@/lib/email";

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
  const name = session.user.name ?? "Student";
  const email = session.user.email ?? "";

  await Promise.all([
    sendContactNotification(name, email, subject, message),
    sendContactConfirmation(name, email, subject),
  ]);

  return NextResponse.json({ ok: true });
}
