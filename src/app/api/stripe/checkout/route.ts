import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST() {
  try {
    const session = await auth();

    if (session?.user) {
      // Logged-in user checkout
      if (session.user.hasPaid) {
        return NextResponse.json({ error: "Already enrolled" }, { status: 400 });
      }

      const user = await db.user.findUnique({ where: { id: session.user.id } });
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      let customerId = user.stripeCustomerId;
      if (!customerId) {
        const customer = await stripe.customers.create({
          email: user.email!,
          name: user.name ?? undefined,
          metadata: { userId: user.id },
        });
        customerId = customer.id;
        await db.user.update({
          where: { id: user.id },
          data: { stripeCustomerId: customerId },
        });
      }

      const checkoutSession = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/#pricing`,
        metadata: { userId: user.id },
      });

      return NextResponse.json({ url: checkoutSession.url });
    } else {
      // Guest checkout — Stripe collects email, user sets password after payment
      const checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        customer_creation: "always",
        line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/welcome?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/#pricing`,
      });

      return NextResponse.json({ url: checkoutSession.url });
    }
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
