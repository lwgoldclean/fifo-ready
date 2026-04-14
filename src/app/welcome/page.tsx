import Link from "next/link";
import { redirect } from "next/navigation";
import { HardHat, CheckCircle } from "lucide-react";
import { stripe } from "@/lib/stripe";
import { SetPasswordForm } from "./set-password-form";
import { MetaPixelPurchase } from "@/components/meta-pixel-purchase";

export default async function WelcomePage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    redirect("/");
  }

  let email: string | null = null;

  try {
    const stripeSession = await stripe.checkout.sessions.retrieve(sessionId);
    if (stripeSession.payment_status !== "paid") {
      redirect("/#pricing");
    }
    email = stripeSession.customer_details?.email ?? null;
  } catch {
    redirect("/");
  }

  if (!email) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <MetaPixelPurchase />
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <HardHat className="h-8 w-8 text-orange-500" />
          <span className="text-2xl font-bold text-gray-900">FIFO Ready</span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Success banner */}
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-6">
            <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-green-800">Payment confirmed</p>
              <p className="text-xs text-green-600">Lifetime access is yours</p>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-1">One last step</h1>
          <p className="text-sm text-gray-500 mb-6">
            Set a password to secure your account and access your training dashboard.
          </p>

          <SetPasswordForm email={email} sessionId={sessionId} />
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
