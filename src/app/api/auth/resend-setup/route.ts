import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendAccountSetupEmail } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : null;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // Only resend for users who paid but haven't set a password yet
  const user = await db.user.findUnique({
    where: { email },
    select: { id: true, hasPaid: true, password: true },
  });

  if (!user || !user.hasPaid || user.password !== null) {
    // Return 404 whether user doesn't exist or already has full access — avoids leaking account info
    return NextResponse.json(
      { error: "No paid account awaiting setup found for that email." },
      { status: 404 }
    );
  }

  // Find their most recent completed course purchase to get the Stripe session ID
  const purchase = await db.purchase.findFirst({
    where: { userId: user.id, productType: "course", status: "COMPLETED" },
    orderBy: { createdAt: "desc" },
    select: { stripeSessionId: true },
  });

  if (!purchase?.stripeSessionId) {
    return NextResponse.json({ error: "Could not find purchase record." }, { status: 500 });
  }

  await sendAccountSetupEmail(email, purchase.stripeSessionId);

  return NextResponse.json({ ok: true });
}
