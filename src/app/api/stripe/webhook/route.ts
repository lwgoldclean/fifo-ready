import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature error:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.userId;

    if (userId) {
      // Logged-in user checkout
      await db.$transaction([
        db.purchase.create({
          data: {
            userId,
            stripeSessionId: session.id,
            stripePaymentIntentId: session.payment_intent as string,
            amount: session.amount_total ?? 0,
            currency: session.currency ?? "aud",
            status: "COMPLETED",
          },
        }),
        db.user.update({
          where: { id: userId },
          data: { hasPaid: true },
        }),
      ]);
    } else {
      // Guest checkout — find existing user by email and mark as paid if found.
      // If the user doesn't have an account yet, the /welcome page handles creation.
      const email = session.customer_details?.email;
      if (email) {
        const user = await db.user.findUnique({ where: { email } });
        if (user && !user.hasPaid) {
          await db.$transaction([
            db.purchase.create({
              data: {
                userId: user.id,
                stripeSessionId: session.id,
                stripePaymentIntentId: session.payment_intent as string,
                amount: session.amount_total ?? 0,
                currency: session.currency ?? "aud",
                status: "COMPLETED",
              },
            }),
            db.user.update({
              where: { id: user.id },
              data: { hasPaid: true, stripeCustomerId: session.customer as string },
            }),
          ]);
        }
      }
    }
  }

  if (event.type === "charge.refunded") {
    const charge = event.data.object as Stripe.Charge;
    const purchase = await db.purchase.findFirst({
      where: { stripePaymentIntentId: charge.payment_intent as string },
    });

    if (purchase) {
      await db.$transaction([
        db.purchase.update({
          where: { id: purchase.id },
          data: { status: "REFUNDED" },
        }),
        db.user.update({
          where: { id: purchase.userId },
          data: { hasPaid: false },
        }),
      ]);
    }
  }

  return NextResponse.json({ received: true });
}
