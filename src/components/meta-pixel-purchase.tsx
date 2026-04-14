"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function MetaPixelPurchase() {
  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Purchase", {
        value: 4.99,
        currency: "AUD",
      });
    }
  }, []);

  return null;
}
