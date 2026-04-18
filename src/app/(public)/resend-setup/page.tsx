"use client";

import { useState } from "react";
import Link from "next/link";
import { HardHat, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResendSetupPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "notfound" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/auth/resend-setup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
    } else if (res.status === 404) {
      setStatus("notfound");
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <HardHat className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900">FIFO Ready</span>
          </Link>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Resend setup link</CardTitle>
            <CardDescription>
              Paid but never finished setting up your account? Enter your email and we&apos;ll send you a new setup link.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {status === "success" ? (
              <div className="rounded-md bg-green-50 border border-green-200 p-4 text-sm text-green-800">
                Check your inbox — we&apos;ve sent you a new account setup link.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "notfound" && (
                  <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                    No paid account awaiting setup was found for that email.{" "}
                    <Link href="/#pricing" className="font-medium underline">
                      Purchase access
                    </Link>{" "}
                    or{" "}
                    <Link href="/login" className="font-medium underline">
                      sign in
                    </Link>{" "}
                    if you already set up your account.
                  </div>
                )}
                {status === "error" && (
                  <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                    Something went wrong. Please try again or contact support.
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email address you paid with</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  disabled={status === "loading"}
                >
                  {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Send setup link
                </Button>
              </form>
            )}
            <p className="mt-6 text-center text-sm text-gray-500">
              Already set up?{" "}
              <Link href="/login" className="font-medium text-orange-600 hover:text-orange-500">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
