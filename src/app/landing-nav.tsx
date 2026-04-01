"use client";

import { useState } from "react";
import Link from "next/link";
import { HardHat, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  isLoggedIn: boolean;
};

export function LandingNav({ isLoggedIn }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <HardHat className="h-7 w-7 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">FIFO Ready</span>
            </div>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#what-you-get" className="text-sm font-medium text-gray-600 hover:text-gray-900">What You Get</a>
              <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900">FAQ</a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              {isLoggedIn ? (
                <Button asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button variant="ghost" asChild>
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href="/register">Get Started</Link>
                  </Button>
                </>
              )}
            </div>

            {/* Mobile: sign in + hamburger */}
            <div className="flex md:hidden items-center gap-2">
              {!isLoggedIn && (
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
              )}
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <HardHat className="h-6 w-6 text-orange-500" />
            <span className="font-bold text-gray-900">FIFO Ready</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a
            href="#how-it-works"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            How It Works
          </a>
          <a
            href="#what-you-get"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            What You Get
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            FAQ
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            Pricing
          </a>
        </nav>
        <div className="p-4 border-t space-y-3">
          {isLoggedIn ? (
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link href="/register">Get Started — $197 AUD</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
