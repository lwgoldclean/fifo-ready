"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CheckoutButtonProps {
  className?: string;
  size?: "sm" | "lg" | "default" | "icon";
  label?: string;
}

export function CheckoutButton({ className, size, label = "Enrol Now" }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleClick() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Could not start checkout. Please try again.");
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
