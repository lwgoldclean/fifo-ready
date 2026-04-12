import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { z } from "zod";

const setupSchema = z.object({
  sessionId: z.string(),
  name: z.string().min(2),
  password: z.string().min(6),
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { sessionId, name, password, email } = setupSchema.parse(body);

    // Verify the Stripe session is paid
    const stripeSession = await stripe.checkout.sessions.retrieve(sessionId);
    if (stripeSession.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 });
    }

    // Verify the email matches what Stripe has
    const stripeEmail = stripeSession.customer_details?.email?.toLowerCase();
    if (!stripeEmail || stripeEmail !== email.toLowerCase()) {
      return NextResponse.json({ error: "Email does not match payment record" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const isAdmin = email.toLowerCase() === process.env.ADMIN_EMAIL?.toLowerCase();
    const existingUser = await db.user.findUnique({ where: { email } });

    if (existingUser) {
      // Account already exists — update password if missing, mark paid
      await db.user.update({
        where: { id: existingUser.id },
        data: {
          ...(existingUser.name ? {} : { name }),
          ...(!existingUser.password ? { password: hashedPassword } : {}),
          hasPaid: true,
          stripeCustomerId: existingUser.stripeCustomerId ?? (stripeSession.customer as string),
        },
      });
      return NextResponse.json({ ok: true });
    }

    // Create new user
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        hasPaid: true,
        role: isAdmin ? "ADMIN" : "STUDENT",
        stripeCustomerId: stripeSession.customer as string,
      },
    });

    // Create purchase record
    await db.purchase.create({
      data: {
        userId: newUser.id,
        stripeSessionId: sessionId,
        stripePaymentIntentId: stripeSession.payment_intent as string,
        amount: stripeSession.amount_total ?? 0,
        currency: stripeSession.currency ?? "aud",
        status: "COMPLETED",
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }
    console.error("Account setup error:", error);
    return NextResponse.json({ error: "Something went wrong. Please contact support." }, { status: 500 });
  }
}
