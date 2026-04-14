import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST() {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!session.user.hasPaid) {
      return NextResponse.json({ error: "Course purchase required" }, { status: 403 });
    }

    // Prevent duplicate purchases
    const existing = await db.purchase.findFirst({
      where: {
        userId: session.user.id,
        productType: "resume_review",
        status: "COMPLETED",
      },
    });
    if (existing) {
      return NextResponse.json({ error: "Already purchased" }, { status: 409 });
    }

    // Use the customer ID cached in the JWT token to skip a DB roundtrip.
    let customerId = session.user.stripeCustomerId ?? null;
    if (!customerId) {
      const user = await db.user.findUnique({ where: { id: session.user.id } });
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
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
      line_items: [{ price: process.env.STRIPE_RESUME_REVIEW_PRICE_ID!, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?resume_review=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/documents`,
      metadata: { userId: session.user.id, productType: "resume_review" },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Resume review checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
