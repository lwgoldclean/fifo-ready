"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LeadForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, source: "free-page" }),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        router.push("/free/guide");
      } else {
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-stone-300 mb-1.5"
        >
          First name
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="e.g. Jake"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg bg-stone-800 border border-stone-700 text-white placeholder:text-stone-500 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-stone-300 mb-1.5"
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="jake@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg bg-stone-800 border border-stone-700 text-white placeholder:text-stone-500 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 h-auto text-base"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Me the Free Guide →"
        )}
      </Button>
    </form>
  );
}
