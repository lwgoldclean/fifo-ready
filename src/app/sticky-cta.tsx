"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckoutButton } from "@/components/checkout-button";

type Props = {
  isLoggedIn: boolean;
  hasPaid: boolean;
};

export function StickyCTA({ isLoggedIn, hasPaid }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t shadow-lg px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">FIFO Ready</p>
          <p className="text-xs text-gray-500">
            <span className="line-through text-gray-400 mr-1">$59</span>
            <span className="font-semibold text-red-500">$4.99 AUD</span>
            {" "}· Limited time
          </p>
        </div>
        {isLoggedIn && hasPaid ? (
          <Button className="bg-orange-500 hover:bg-orange-600 text-white shrink-0" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        ) : isLoggedIn && !hasPaid ? (
          <CheckoutButton
            className="bg-orange-500 hover:bg-orange-600 text-white shrink-0 h-10"
            label="Enrol Now"
          />
        ) : (
          <Button className="bg-orange-500 hover:bg-orange-600 text-white shrink-0" asChild>
            <Link href="/register">Enrol Now</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
