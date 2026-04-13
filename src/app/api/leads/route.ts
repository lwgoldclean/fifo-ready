import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const leadSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1).max(100).optional(),
  source: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, source } = leadSchema.parse(body);

    await db.lead.upsert({
      where: { email },
      update: {
        ...(name ? { name } : {}),
      },
      create: {
        email,
        name: name ?? null,
        source: source ?? "organic",
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
