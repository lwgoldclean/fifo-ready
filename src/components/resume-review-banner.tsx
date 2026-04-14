"use client";

import { useState } from "react";
import { CheckCircle, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResumeReviewBannerProps {
  alreadyPurchased: boolean;
}

export function ResumeReviewBanner({ alreadyPurchased }: ResumeReviewBannerProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleClick() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/stripe/resume-review", { method: "POST" });
      const data = await res.json();
      if (res.ok && typeof data.url === "string") {
        window.location.href = data.url;
      } else if (res.status === 409) {
        setError("You've already purchased a resume review. Check your email for next steps.");
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
    return (
      <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
        <CheckCircle className="h-4 w-4 shrink-0 text-green-600" />
        <span>
          <strong>Resume review purchased</strong> — check your email for next steps. Reply with
          your resume attached and we&apos;ll get back to you within 48 hours.
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-amber-500">
            <FileText className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="font-semibold text-amber-900">Get your resume reviewed by a FIFO expert</p>
            <p className="mt-0.5 text-sm text-amber-700">
              Personalised feedback within 48 hours — cover layout, keywords, and what hiring
              managers actually look for. <strong>$49 AUD</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1.5 sm:items-end sm:shrink-0">
          <Button
            onClick={handleClick}
            disabled={loading}
            className="bg-amber-500 text-white hover:bg-amber-600 w-full sm:w-auto"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Redirecting..." : "Get Resume Review — $49"}
          </Button>
          {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
}
