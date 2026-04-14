import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatBytes, formatDate } from "@/lib/utils";
import { PrintButton } from "@/components/print-button";
import { auth } from "@/lib/auth";
import { ResumeReviewBanner } from "@/components/resume-review-banner";
import { IndustryCallCard } from "@/components/industry-call-card";

export default async function DocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [doc, session] = await Promise.all([
    db.document.findUnique({ where: { id, published: true } }),
    auth(),
  ]);

  if (!doc) notFound();

  const showResumeReviewBanner =
    doc.title.toLowerCase().includes("resume") || doc.category === "Templates";

  const showIndustryCallBanner = doc.title.toLowerCase().includes("interview");

  const [alreadyPurchasedResumeReview, alreadyPurchasedIndustryCall] = await Promise.all([
    showResumeReviewBanner && session?.user?.id
      ? db.purchase.findFirst({
          where: { userId: session.user.id, productType: "resume_review", status: "COMPLETED" },
        }).then(Boolean)
      : Promise.resolve(false),
    showIndustryCallBanner && session?.user?.id
      ? db.purchase.findFirst({
          where: { userId: session.user.id, productType: "industry_call", status: "COMPLETED" },
        }).then(Boolean)
      : Promise.resolve(false),
  ]);

  return (
    <div className="p-8 max-w-4xl">
      <Link
        href="/documents"
        className="print:hidden flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Documents
      </Link>

      {/* Header */}
      <div className="mb-8 pb-6 border-b">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
            <FileText className="h-6 w-6 text-red-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{doc.title}</h1>
              {doc.category && <Badge variant="secondary">{doc.category}</Badge>}
            </div>
            {doc.description && (
              <p className="text-gray-500 mt-1">{doc.description}</p>
            )}
            <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
              <span>Updated {formatDate(doc.updatedAt)}</span>
              {doc.fileSize && <span>{formatBytes(doc.fileSize)}</span>}
            </div>
          </div>
        </div>

        <div className="print:hidden flex gap-3 mt-4">
          {doc.fileUrl && (
            <>
              <Button variant="outline" size="sm" asChild>
                <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> View PDF
                </a>
              </Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600" asChild>
                <a href={doc.fileUrl} download>
                  <Download className="h-4 w-4 mr-2" /> Download
                </a>
              </Button>
            </>
          )}
          {doc.content && <PrintButton />}
        </div>
      </div>

      {/* Resume Review Upsell */}
      {showResumeReviewBanner && (
        <div className="mb-6 print:hidden">
          <ResumeReviewBanner alreadyPurchased={!!alreadyPurchasedResumeReview} />
        </div>
      )}

      {/* Industry Call Upsell */}
      {showIndustryCallBanner && (
        <div className="mb-6 print:hidden">
          <IndustryCallCard variant="banner" alreadyPurchased={!!alreadyPurchasedIndustryCall} />
        </div>
      )}

      {/* Content */}
      {doc.content ? (
        <div
          className="prose prose-gray max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h1:text-2xl prose-h2:text-xl prose-h2:border-b prose-h2:pb-2 prose-h2:border-gray-200
            prose-h3:text-lg prose-h3:text-orange-700
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-li:text-gray-700 prose-li:leading-relaxed
            prose-strong:text-gray-900
            prose-ul:space-y-1 prose-ol:space-y-1
            prose-blockquote:border-orange-400 prose-blockquote:bg-orange-50 prose-blockquote:rounded-r-lg prose-blockquote:py-1
            prose-table:text-sm
            prose-th:bg-gray-100 prose-th:text-gray-700
            prose-hr:border-gray-200"
          dangerouslySetInnerHTML={{ __html: doc.content }}
        />
      ) : (
        <div className="text-center py-12 text-gray-400">
          <FileText className="mx-auto h-12 w-12 mb-4" />
          <p>No inline content. Use the download button above to access this document.</p>
        </div>
      )}
    </div>
  );
}
