import { auth } from "@/lib/auth";
import { ContactForm } from "./contact-form";
import { MessageSquare } from "lucide-react";

export default async function ContactPage() {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-orange-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Contact</h1>
        </div>
        <p className="text-gray-500 text-sm">
          Got a question or need help? Send a message and I&apos;ll get back to you within 24–48 hours.
        </p>
      </div>

      <ContactForm
        userName={session.user.name ?? ""}
        userEmail={session.user.email ?? ""}
      />
    </div>
  );
}
