import { unstable_cache } from "next/cache";
import { db } from "@/lib/db";

export const getCachedDocuments = unstable_cache(
  async () =>
    db.document.findMany({ where: { published: true }, orderBy: { order: "asc" } }),
  ["published-documents"],
  { tags: ["documents"] }
);

export const getCachedQuizzes = unstable_cache(
  async () =>
    db.quiz.findMany({ where: { published: true }, orderBy: { order: "asc" } }),
  ["published-quizzes"],
  { tags: ["quizzes"] }
);

export const getCachedQuizzesWithCount = unstable_cache(
  async () =>
    db.quiz.findMany({
      where: { published: true },
      include: { _count: { select: { questions: true } } },
      orderBy: { order: "asc" },
    }),
  ["published-quizzes-with-count"],
  { tags: ["quizzes"] }
);
