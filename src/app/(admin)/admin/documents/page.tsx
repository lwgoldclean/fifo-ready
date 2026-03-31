"use client";

import { useState, useEffect } from "react";
import { FileText, Plus, Trash2, Edit, Loader2, Eye, EyeOff, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatBytes } from "@/lib/utils";

interface Document {
  id: string;
  title: string;
  description: string | null;
  fileUrl: string | null;
  fileSize: number | null;
  category: string | null;
  content: string | null;
  order: number;
  published: boolean;
}

export default function AdminDocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    fileUrl: "",
    fileSize: "",
    category: "",
    content: "",
    order: "0",
    published: true,
  });

  async function fetchDocuments() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/documents");
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setDocuments(data);
    } catch {
      // silently fail — list stays empty
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchDocuments(); }, []);

  function resetForm() {
    setForm({ title: "", description: "", fileUrl: "", fileSize: "", category: "", content: "", order: "0", published: true });
    setEditingId(null);
    setShowForm(false);
    setFormError("");
  }

  function startEdit(doc: Document) {
    setForm({
      title: doc.title,
      description: doc.description ?? "",
      fileUrl: doc.fileUrl ?? "",
      fileSize: doc.fileSize?.toString() ?? "",
      category: doc.category ?? "",
      content: doc.content ?? "",
      order: doc.order.toString(),
      published: doc.published,
    });
    setEditingId(doc.id);
    setShowForm(true);
    setFormError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");

    if (!form.fileUrl && !form.content.trim()) {
      setFormError("Please provide either a File URL or inline content.");
      return;
    }

    setSubmitting(true);

    const payload = {
      title: form.title,
      description: form.description || undefined,
      fileUrl: form.fileUrl || undefined,
      fileSize: form.fileSize ? parseInt(form.fileSize) : undefined,
      category: form.category || undefined,
      content: form.content.trim() || undefined,
      order: parseInt(form.order) || 0,
      published: form.published,
    };

    const url = editingId ? `/api/admin/documents/${editingId}` : "/api/admin/documents";
    const method = editingId ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      await fetchDocuments();
      resetForm();
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function deleteDocument(id: string) {
    if (!confirm("Delete this document?")) return;
    try {
      const res = await fetch(`/api/admin/documents/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setDocuments((prev) => prev.filter((d) => d.id !== id));
    } catch {
      alert("Failed to delete document. Please try again.");
    }
  }

  async function togglePublished(doc: Document) {
    try {
      const res = await fetch(`/api/admin/documents/${doc.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !doc.published }),
      });
      if (!res.ok) throw new Error("Update failed");
      setDocuments((prev) =>
        prev.map((d) => (d.id === doc.id ? { ...d, published: !d.published } : d))
      );
    } catch {
      alert("Failed to update document. Please try again.");
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-500 mt-1">{documents.length} documents</p>
        </div>
        <Button onClick={() => { setShowForm(true); setFormError(""); }} className="bg-orange-500 hover:bg-orange-600">
          <Plus className="mr-2 h-4 w-4" />
          Add Document
        </Button>
      </div>

      {showForm && (
        <Card className="mb-6 border-orange-200">
          <CardHeader>
            <CardTitle className="text-base">{editingId ? "Edit Document" : "Add New Document"}</CardTitle>
          </CardHeader>
          <CardContent>
            {formError && (
              <div className="mb-4 flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {formError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input id="title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required placeholder="Pre-Employment Medical Guide" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fileUrl">
                  File URL
                  <span className="text-xs text-gray-400 ml-1">(PDF/link — optional if content is provided)</span>
                </Label>
                <Input id="fileUrl" value={form.fileUrl} onChange={(e) => setForm({ ...form, fileUrl: e.target.value })} placeholder="https://..." type="url" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Brief description of the document" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="content">
                  Inline Content
                  <span className="text-xs text-gray-400 ml-1">(HTML/markdown — optional if File URL is provided)</span>
                </Label>
                <textarea
                  id="content"
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder="Paste HTML or markdown content here..."
                  rows={8}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-mono"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="e.g. Safety, Career" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fileSize">File Size (bytes)</Label>
                <Input id="fileSize" type="number" value={form.fileSize} onChange={(e) => setForm({ ...form, fileSize: e.target.value })} placeholder="1048576" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order">Order</Label>
                <Input id="order" type="number" value={form.order} onChange={(e) => setForm({ ...form, order: e.target.value })} />
              </div>
              <div className="space-y-2 flex items-end">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="h-4 w-4 rounded border-gray-300" />
                  <span className="text-sm font-medium text-gray-700">Published</span>
                </label>
              </div>
              <div className="md:col-span-2 flex gap-3">
                <Button type="submit" disabled={submitting} className="bg-orange-500 hover:bg-orange-600">
                  {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? "Update" : "Add Document"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="h-8 w-8 animate-spin text-gray-400" /></div>
      ) : documents.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-500">No documents yet. Add your first one!</p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-4 font-medium text-gray-600">Title</th>
                    <th className="text-left p-4 font-medium text-gray-600">Category</th>
                    <th className="text-left p-4 font-medium text-gray-600">Size</th>
                    <th className="text-left p-4 font-medium text-gray-600">Status</th>
                    <th className="text-left p-4 font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <p className="font-medium text-gray-900">{doc.title}</p>
                        {doc.description && <p className="text-xs text-gray-400 mt-0.5 truncate max-w-xs">{doc.description}</p>}
                        {doc.content && <p className="text-xs text-blue-400 mt-0.5">Has inline content</p>}
                      </td>
                      <td className="p-4 text-gray-600">{doc.category ?? "—"}</td>
                      <td className="p-4 text-gray-600">{doc.fileSize ? formatBytes(doc.fileSize) : "—"}</td>
                      <td className="p-4">
                        <Badge variant={doc.published ? "success" : "secondary"}>
                          {doc.published ? "Published" : "Draft"}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost" onClick={() => togglePublished(doc)} title={doc.published ? "Unpublish" : "Publish"}>
                            {doc.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => startEdit(doc)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-700" onClick={() => deleteDocument(doc.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
