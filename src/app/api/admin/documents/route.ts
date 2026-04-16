import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";

const documentSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  content: z.string().optional(),
  fileUrl: z.string().url().optional().or(z.literal("")),
  fileSize: z.number().optional(),
  category: z.string().optional(),
  order: z.number().optional(),
  published: z.boolean().optional(),
});

async function requireAdmin() {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") return null;
  return session;
}

export async function GET() {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const documents = await db.document.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(documents);
}

export async function POST(req: Request) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    const body = await req.json();
    const data = documentSchema.parse(body);
    const document = await db.document.create({
      data: {
        ...data,
        fileUrl: data.fileUrl || null,
      },
    });
    revalidateTag("documents");
    return NextResponse.json(document, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to create document" }, { status: 500 });
  }
}
