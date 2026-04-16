import Link from "next/link";
import { getCachedDocuments } from "@/lib/cache";
import { FileText, Download, ExternalLink, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatBytes } from "@/lib/utils";

export default async function DocumentsPage() {
  const documents = await getCachedDocuments();

  const categories = Array.from(new Set(documents.map((d) => d.category).filter(Boolean))) as string[];

  const grouped = categories.length > 0
    ? categories.reduce((acc, cat) => {
        acc[cat] = documents.filter((d) => d.category === cat);
        return acc;
      }, {} as Record<string, typeof documents>)
    : { "All Documents": documents };

  const uncategorized = documents.filter((d) => !d.category);
  if (uncategorized.length > 0 && categories.length > 0) {
    grouped["Other"] = uncategorized;
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Training Documents</h1>
        <p className="text-gray-500 mt-1">
          {documents.length} document{documents.length !== 1 ? "s" : ""} available
        </p>
      </div>

      {documents.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-500">No documents available yet. Check back soon.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([category, docs]) => (
            <div key={category}>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>{category}</span>
                <Badge variant="secondary">{docs.length}</Badge>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {docs.map((doc) => (
                  <Card key={doc.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                          <FileText className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                            {doc.title}
                          </h3>
                          {doc.description && (
                            <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                              {doc.description}
                            </p>
                          )}
                          {doc.fileSize && (
                            <p className="text-xs text-gray-400 mb-3">{formatBytes(doc.fileSize)}</p>
                          )}
                          <div className="flex gap-2 flex-wrap">
                            {doc.content && (
                              <Button size="sm" asChild className="h-7 text-xs bg-orange-500 hover:bg-orange-600">
                                <Link href={`/documents/${doc.id}`}>
                                  <ChevronRight className="h-3 w-3 mr-1" />
                                  Read
                                </Link>
                              </Button>
                            )}
                            {doc.fileUrl && (
                              <>
                                <Button size="sm" variant="outline" asChild className="h-7 text-xs">
                                  <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-3 w-3 mr-1" />
                                    View
                                  </a>
                                </Button>
                                <Button size="sm" variant="outline" asChild className="h-7 text-xs">
                                  <a href={doc.fileUrl} download>
                                    <Download className="h-3 w-3 mr-1" />
                                    Download
                                  </a>
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
