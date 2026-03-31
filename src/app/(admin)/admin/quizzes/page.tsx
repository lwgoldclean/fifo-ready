"use client";

import { useState, useEffect } from "react";
import { ClipboardList, Plus, Trash2, Edit, Loader2, ChevronDown, ChevronUp, Eye, EyeOff, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Question {
  id?: string;
  question: string;
  options: string[];
  answer: number;
  order?: number;
}

interface Quiz {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  order: number;
  published: boolean;
  passMark: number;
  questions: Question[];
  _count?: { attempts: number };
}

const emptyQuestion = (): Question => ({
  question: "",
  options: ["", "", "", ""],
  answer: 0,
});

export default function AdminQuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [expandedQuiz, setExpandedQuiz] = useState<string | null>(null);
  const [formError, setFormError] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    order: "0",
    published: true,
    passMark: "70",
    questions: [emptyQuestion()],
  });

  async function fetchQuizzes() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/quizzes");
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setQuizzes(data);
    } catch {
      // silently fail — list stays empty
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchQuizzes(); }, []);

  function resetForm() {
    setForm({ title: "", description: "", category: "", order: "0", published: true, passMark: "70", questions: [emptyQuestion()] });
    setEditingId(null);
    setShowForm(false);
    setFormError("");
  }

  function startEdit(quiz: Quiz) {
    setForm({
      title: quiz.title,
      description: quiz.description ?? "",
      category: quiz.category ?? "",
      order: quiz.order.toString(),
      published: quiz.published,
      passMark: quiz.passMark.toString(),
      questions: quiz.questions.length > 0 ? quiz.questions.map(q => ({ ...q, options: [...q.options] })) : [emptyQuestion()],
    });
    setEditingId(quiz.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function addQuestion() {
    setForm((f) => ({ ...f, questions: [...f.questions, emptyQuestion()] }));
  }

  function removeQuestion(i: number) {
    setForm((f) => ({ ...f, questions: f.questions.filter((_, idx) => idx !== i) }));
  }

  function updateQuestion(i: number, field: keyof Question, value: string | number | string[]) {
    setForm((f) => ({
      ...f,
      questions: f.questions.map((q, idx) =>
        idx === i ? { ...q, [field]: value } : q
      ),
    }));
  }

  function updateOption(qi: number, oi: number, value: string) {
    setForm((f) => ({
      ...f,
      questions: f.questions.map((q, idx) =>
        idx === qi
          ? { ...q, options: q.options.map((o, oidx) => (oidx === oi ? value : o)) }
          : q
      ),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);

    const payload = {
      title: form.title,
      description: form.description || undefined,
      category: form.category || undefined,
      order: parseInt(form.order) || 0,
      published: form.published,
      passMark: parseInt(form.passMark) || 70,
      questions: form.questions.map((q, i) => ({
        question: q.question,
        options: q.options.filter((o) => o.trim()),
        answer: q.answer,
        order: i,
      })),
    };

    const url = editingId ? `/api/admin/quizzes/${editingId}` : "/api/admin/quizzes";
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
      await fetchQuizzes();
      resetForm();
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function deleteQuiz(id: string) {
    if (!confirm("Delete this quiz and all its attempts?")) return;
    try {
      const res = await fetch(`/api/admin/quizzes/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setQuizzes((prev) => prev.filter((q) => q.id !== id));
    } catch {
      alert("Failed to delete quiz. Please try again.");
    }
  }

  async function togglePublished(quiz: Quiz) {
    try {
      const res = await fetch(`/api/admin/quizzes/${quiz.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !quiz.published }),
      });
      if (!res.ok) throw new Error("Update failed");
      setQuizzes((prev) => prev.map((q) => q.id === quiz.id ? { ...q, published: !q.published } : q));
    } catch {
      alert("Failed to update quiz. Please try again.");
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quizzes</h1>
          <p className="text-gray-500 mt-1">{quizzes.length} quizzes</p>
        </div>
        <Button onClick={() => { setShowForm(true); setFormError(""); }} className="bg-orange-500 hover:bg-orange-600">
          <Plus className="mr-2 h-4 w-4" />
          Create Quiz
        </Button>
      </div>

      {showForm && (
        <Card className="mb-6 border-orange-200">
          <CardHeader>
            <CardTitle className="text-base">{editingId ? "Edit Quiz" : "Create New Quiz"}</CardTitle>
          </CardHeader>
          <CardContent>
            {formError && (
              <div className="mb-4 flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {formError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Quiz meta */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="qtitle">Quiz Title *</Label>
                  <Input id="qtitle" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required placeholder="Site Safety Basics" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qcat">Category</Label>
                  <Input id="qcat" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Safety" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="qdesc">Description</Label>
                  <Input id="qdesc" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="What this quiz covers" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qpass">Pass Mark (%)</Label>
                  <Input id="qpass" type="number" min="1" max="100" value={form.passMark} onChange={(e) => setForm({ ...form, passMark: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qorder">Order</Label>
                  <Input id="qorder" type="number" value={form.order} onChange={(e) => setForm({ ...form, order: e.target.value })} />
                </div>
                <div className="flex items-end">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="h-4 w-4" />
                    <span className="text-sm font-medium text-gray-700">Published</span>
                  </label>
                </div>
              </div>

              {/* Questions */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">Questions ({form.questions.length})</h3>
                  <Button type="button" size="sm" variant="outline" onClick={addQuestion}>
                    <Plus className="mr-1 h-3 w-3" /> Add Question
                  </Button>
                </div>
                <div className="space-y-4">
                  {form.questions.map((q, qi) => (
                    <div key={qi} className="p-4 border rounded-lg bg-gray-50">
                      <div className="flex items-start gap-2 mb-3">
                        <span className="text-xs font-bold text-gray-400 mt-2.5 w-6 shrink-0">Q{qi + 1}</span>
                        <Input
                          value={q.question}
                          onChange={(e) => updateQuestion(qi, "question", e.target.value)}
                          placeholder="Enter your question here"
                          className="flex-1"
                          required
                        />
                        {form.questions.length > 1 && (
                          <Button type="button" size="sm" variant="ghost" className="text-red-500" onClick={() => removeQuestion(qi)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-8">
                        {q.options.map((opt, oi) => (
                          <div key={oi} className="flex items-center gap-2">
                            <input
                              type="radio"
                              name={`answer-${qi}`}
                              checked={q.answer === oi}
                              onChange={() => updateQuestion(qi, "answer", oi)}
                              className="h-4 w-4 text-orange-500"
                            />
                            <Input
                              value={opt}
                              onChange={(e) => updateOption(qi, oi, e.target.value)}
                              placeholder={`Option ${String.fromCharCode(65 + oi)}`}
                              className="flex-1 h-8 text-sm"
                              required
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400 mt-2 ml-8">Select the radio button next to the correct answer</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button type="submit" disabled={submitting} className="bg-orange-500 hover:bg-orange-600">
                  {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? "Update Quiz" : "Create Quiz"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="h-8 w-8 animate-spin text-gray-400" /></div>
      ) : quizzes.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <ClipboardList className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-500">No quizzes yet. Create your first one!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {quizzes.map((quiz) => (
            <Card key={quiz.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
                      <Badge variant={quiz.published ? "success" : "secondary"}>
                        {quiz.published ? "Published" : "Draft"}
                      </Badge>
                      {quiz.category && (
                        <Badge variant="outline" className="text-xs">{quiz.category}</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                      <span>{quiz.questions.length} questions</span>
                      <span>Pass: {quiz.passMark}%</span>
                      {quiz._count && <span>{quiz._count.attempts} attempts</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" onClick={() => setExpandedQuiz(expandedQuiz === quiz.id ? null : quiz.id)}>
                      {expandedQuiz === quiz.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => togglePublished(quiz)}>
                      {quiz.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => startEdit(quiz)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-500" onClick={() => deleteQuiz(quiz.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {expandedQuiz === quiz.id && quiz.questions.length > 0 && (
                  <div className="mt-4 pt-4 border-t space-y-2">
                    {quiz.questions.map((q, i) => (
                      <div key={q.id ?? i} className="text-sm">
                        <p className="font-medium text-gray-800">Q{i + 1}: {q.question}</p>
                        <div className="ml-4 mt-1 space-y-0.5">
                          {(q.options as string[]).map((opt, oi) => (
                            <p key={oi} className={oi === q.answer ? "text-green-600 font-medium" : "text-gray-400"}>
                              {String.fromCharCode(65 + oi)}. {opt} {oi === q.answer && "✓"}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
