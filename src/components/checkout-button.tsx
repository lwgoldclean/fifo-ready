"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CheckoutButtonProps {
  className?: string;
  size?: "sm" | "lg" | "default" | "icon";
  label?: string;
}

// Module-level singleton — shared across all CheckoutButton instances on the page.
// Kicks off a single prefetch request immediately on first mount, so by the time
// the user clicks, the Stripe session URL is already in hand.
let _prefetchPromise: Promise<string | null> | null = null;

function prefetchCheckoutUrl(): Promise<string | null> {
  if (!_prefetchPromise) {
    _prefetchPromise = fetch("/api/stripe/checkout", { method: "POST" })
      .then((r) => r.json())
      .then((d) => (typeof d.url === "string" ? d.url : null))
      .catch(() => null);
  }
  return _prefetchPromise;
}

export function CheckoutButton({ className, size, label = "Enrol Now" }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const prefetchedUrl = useRef<string | null>(null);

  // Start prefetching immediately on mount — all instances share one request.
  useEffect(() => {
    prefetchCheckoutUrl().then((url) => {
      prefetchedUrl.current = url;
    });
  }, []);

  async function handleClick() {
    setLoading(true);
    setError("");
    try {
      // If the URL is already prefetched, redirect instantly (no network wait).
      const url = prefetchedUrl.current ?? (await prefetchCheckoutUrl());
      if (url) {
        // Reset singleton so a fresh session is fetched on next page load.
        _prefetchPromise = null;
        window.location.href = url;
      } else {
        setError("Could not start checkout. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button onClick={handleClick} disabled={loading} className={className} size={size}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading ? "Redirecting to payment..." : label}
      </Button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
