"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type Props = {
  messageId: string;
};

export function AdminReplyForm({ messageId }: Props) {
  const router = useRouter();
  const [body, setBody] = useState("");
  const [close, setClose] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!body.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/messages/${messageId}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body, close }),
      });
      if (!res.ok) throw new Error("Failed to send reply");
      setBody("");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border-t pt-6 space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="reply">Your reply</Label>
        <textarea
          id="reply"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={5}
          placeholder="Type your reply…"
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="close"
          checked={close}
          onChange={(e) => setClose(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300"
        />
        <label htmlFor="close" className="text-sm text-gray-600">
          Close thread after replying
        </label>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" disabled={loading || !body.trim()}>
        {loading ? "Sending…" : "Send Reply"}
      </Button>
    </form>
  );
}
