import { Suspense } from "react";
import Link from "next/link";
import { HardHat } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <HardHat className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900">FIFO Ready</span>
          </Link>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>Sign in to access your training dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div className="h-40" />}>
              <LoginForm />
            </Suspense>
            <p className="mt-6 text-center text-sm text-gray-500">
              New here?{" "}
              <Link href="/#pricing" className="font-medium text-orange-600 hover:text-orange-500">
                Get access for $4.99
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
