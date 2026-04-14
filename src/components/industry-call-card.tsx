"use client";

import { useState } from "react";
import { CheckCircle, Loader2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface IndustryCallCardProps {
  alreadyPurchased: boolean;
  variant?: "dashboard" | "sidebar" | "banner";
}

export function IndustryCallCard({ alreadyPurchased, variant = "dashboard" }: IndustryCallCardProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleClick() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/stripe/industry-call", { method: "POST" });
      const data = await res.json();
      if (res.ok && typeof data.url === "string") {
        window.location.href = data.url;
      } else if (res.status === 409) {
        setError("You've already booked a call. Check your email for the Calendly link.");
        setLoading(false);
      } else {
        setError("Could not start checkout. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  if (alreadyPurchased) {
    const msg = "Call booked — check your email for the Calendly booking link.";
    if (variant === "sidebar") {
      return (
        <div className="mx-3 mb-3 flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-xs text-green-800">
          <CheckCircle className="h-3 w-3 shrink-0 text-green-600" />
          <span>{msg}</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
        <CheckCircle className="h-4 w-4 shrink-0 text-green-600" />
        <span><strong>Call booked</strong> — check your email for the Calendly booking link.</span>
      </div>
    );
  }

  // Sidebar variant — compact
  if (variant === "sidebar") {
    return (
      <div className="mx-3 mb-3 rounded-lg border border-orange-200 bg-orange-50 p-3">
        <p className="text-xs font-semibold text-orange-900 mb-1">Speak to a FIFO insider</p>
        <p className="text-xs text-orange-700 mb-2">1-on-1 call — $99 AUD</p>
        <Button
          onClick={handleClick}
          disabled={loading}
          size="sm"
          className="w-full bg-orange-500 text-white hover:bg-orange-600 text-xs h-7"
        >
          {loading && <Loader2 className="mr-1 h-3 w-3 animate-spin" />}
          {loading ? "Redirecting..." : "Book a Call"}
        </Button>
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  }

  // Banner variant — inline (same style as ResumeReviewBanner)
  if (variant === "banner") {
    return (
      <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-orange-500">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-orange-900">Speak 1-on-1 with a FIFO industry insider</p>
              <p className="mt-0.5 text-sm text-orange-700">
                Ask anything — hiring process, what site life is really like, how to stand out.{" "}
                <strong>$99 AUD</strong>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1.5 sm:items-end sm:shrink-0">
            <Button
              onClick={handleClick}
              disabled={loading}
              className="bg-orange-500 text-white hover:bg-orange-600 w-full sm:w-auto"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? "Redirecting..." : "Book a Call — $99"}
            </Button>
            {error && <p className="text-xs text-red-600">{error}</p>}
          </div>
        </div>
      </div>
    );
  }

  // Dashboard variant — full card
  return (
    <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg">Speak 1-on-1 with a FIFO industry insider</p>
              <p className="text-sm text-gray-600 mt-1 mb-3">
                Get real answers from someone who&apos;s done it — not just a guide.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                  How labour hire companies actually shortlist candidates
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                  What the pre-employment process really looks like end-to-end
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                  Ask anything — rosters, pay, site life, how to stand out
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end sm:shrink-0">
            <Button
              onClick={handleClick}
              disabled={loading}
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600 w-full sm:w-auto"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? "Redirecting..." : "Book a Call — $99 AUD"}
            </Button>
            <p className="text-xs text-gray-500">1-on-1 via Zoom · Book your own time slot</p>
            {error && <p className="text-xs text-red-600">{error}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
