"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, XCircle, Loader2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Question {
  id: string;
  question: string;
  options: string[];
  order: number;
}

interface QuizProps {
  quiz: {
    id: string;
    title: string;
    description: string | null;
    passMark: number;
    questions: Question[];
  };
  previousAttempts: {
    score: number;
    passed: boolean;
    createdAt: string;
  }[];
}

type QuizState = "intro" | "taking" | "result";

interface Result {
  score: number;
  passed: boolean;
  correct: number;
  total: number;
}

export function QuizClient({ quiz, previousAttempts }: QuizProps) {
  const [state, setState] = useState<QuizState>("intro");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [result, setResult] = useState<Result | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const question = quiz.questions[currentQ];
  const progress = ((currentQ + 1) / quiz.questions.length) * 100;
  const allAnswered = quiz.questions.every((q) => answers[q.id] !== undefined);

  function startQuiz() {
    setAnswers({});
    setCurrentQ(0);
    setResult(null);
    setError("");
    setState("taking");
  }

  function selectAnswer(questionId: string, optionIndex: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }

  function goNext() {
    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ(currentQ + 1);
    }
  }

  function goPrev() {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  }

  async function submitQuiz() {
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(`/api/quiz/${quiz.id}/attempt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      setResult(data);
      setState("result");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  if (state === "intro") {
    return (
      <div className="p-8 max-w-2xl mx-auto">
        <Link href="/quizzes" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Quizzes
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{quiz.title}</CardTitle>
            {quiz.description && <p className="text-gray-500">{quiz.description}</p>}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Questions</p>
                <p className="text-xl font-bold text-gray-900">{quiz.questions.length}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Pass Mark</p>
                <p className="text-xl font-bold text-gray-900">{quiz.passMark}%</p>
              </div>
            </div>

            {previousAttempts.length > 0 && (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Previous Attempts</p>
                <div className="space-y-2">
                  {previousAttempts.map((attempt, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                      <span className="text-gray-500">
                        {new Date(attempt.createdAt).toLocaleDateString("en-AU")}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{attempt.score}%</span>
                        <Badge variant={attempt.passed ? "success" : "destructive"}>
                          {attempt.passed ? "Passed" : "Failed"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Button
              onClick={startQuiz}
              className="w-full bg-orange-500 hover:bg-orange-600 py-6 text-lg"
              disabled={quiz.questions.length === 0}
            >
              {quiz.questions.length === 0 ? "No questions available" : "Start Quiz"}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (state === "taking" && question) {
    return (
      <div className="p-8 max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">
              Question {currentQ + 1} of {quiz.questions.length}
            </span>
            <span className="text-sm font-medium text-gray-700">{quiz.title}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="mb-4">
          <CardContent className="p-6">
            <p className="text-lg font-medium text-gray-900 mb-6">{question.question}</p>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const selected = answers[question.id] === index;
                return (
                  <button
                    key={index}
                    onClick={() => selectAnswer(question.id, index)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selected
                        ? "border-orange-500 bg-orange-50 text-orange-900"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <span className="font-medium mr-3 text-sm">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">{error}</div>
        )}

        <div className="flex justify-between">
          <Button variant="outline" onClick={goPrev} disabled={currentQ === 0}>
            Previous
          </Button>
          <div className="flex gap-2">
            {currentQ < quiz.questions.length - 1 ? (
              <Button onClick={goNext} disabled={answers[question.id] === undefined}>
                Next
              </Button>
            ) : (
              <Button
                onClick={submitQuiz}
                disabled={!allAnswered || submitting}
                className="bg-orange-500 hover:bg-orange-600"
              >
                {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit Quiz
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (state === "result" && result) {
    return (
      <div className="p-8 max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-8 text-center">
            <div className={`mx-auto h-20 w-20 rounded-full flex items-center justify-center mb-4 ${
              result.passed ? "bg-green-100" : "bg-red-100"
            }`}>
              {result.passed ? (
                <CheckCircle className="h-10 w-10 text-green-500" />
              ) : (
                <XCircle className="h-10 w-10 text-red-500" />
              )}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {result.passed ? "Well done, mate!" : "Not quite there yet"}
            </h2>

            <p className="text-gray-500 mb-6">
              {result.passed
                ? "You passed this quiz. Keep up the great work!"
                : `You need ${quiz.passMark}% to pass. Give it another go!`}
            </p>

            <div className="flex items-center justify-center gap-8 p-6 bg-gray-50 rounded-xl mb-6">
              <div>
                <p className="text-4xl font-bold text-gray-900">{result.score}%</p>
                <p className="text-sm text-gray-400">Your Score</p>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <p className="text-4xl font-bold text-gray-900">{result.correct}/{result.total}</p>
                <p className="text-sm text-gray-400">Correct</p>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <p className="text-4xl font-bold text-gray-900">{quiz.passMark}%</p>
                <p className="text-sm text-gray-400">Pass Mark</p>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={startQuiz}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link href="/quizzes">Back to Quizzes</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
