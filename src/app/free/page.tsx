import type { Metadata } from "next";
import { HardHat, CheckCircle, Star, Shield, Users } from "lucide-react";
import Link from "next/link";
import { LeadForm } from "./lead-form";

export const metadata: Metadata = {
  title: "Free FIFO Fast-Track Guide | FIFO Ready",
  description:
    "Get the exact 5-step process 2,400+ Aussies used to land their first FIFO mining role — delivered to your inbox instantly. 100% free.",
};

const WHAT_IS_INSIDE = [
  {
    title: "The Certs & Tickets You Actually Need",
    desc: "Most blokes waste thousands on tickets they don't need. This tells you exactly what's required — and what's a money trap.",
  },
  {
    title: "The 8 Documents Every FIFO Employer Asks For",
    desc: "Missing even one of these is an instant rejection. We list every single one so you're not caught out.",
  },
  {
    title: "Pre-Employment Medical: What to Expect & How to Prep",
    desc: "One of the biggest fears for first-timers. We break down exactly what they test and how to walk in confident.",
  },
  {
    title: "The 12 Companies Actively Hiring Entry-Level FIFO Workers",
    desc: "Skip the job boards. These are the companies who hire green workers right now — with direct links.",
  },
  {
    title: "The 3 Questions Every FIFO Hiring Manager Asks",
    desc: "With actual sample answers. You'll know exactly what to say and how to stand out.",
  },
  {
    title: "BONUS: The #1 Mistake That Gets Applications Rejected",
    desc: "It's not what you think — and it's costing thousands of workers their shot every year.",
  },
];

export default function FreePage() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <HardHat className="h-6 w-6 text-amber-400" />
          <span className="font-bold text-white">FIFO Ready</span>
        </Link>
        <Link
          href="/#pricing"
          className="text-sm text-stone-400 hover:text-white transition-colors"
        >
          View Full Course →
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12 sm:py-20">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-amber-500/15 text-amber-400 text-sm font-semibold px-4 py-1.5 rounded-full ring-1 ring-amber-500/30">
            <Star className="h-3.5 w-3.5 fill-amber-400" />
            100% Free — No credit card required
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-bold text-center leading-tight mb-4">
          How to Land Your First FIFO Role —{" "}
          <span className="text-amber-400">Without Wasting Thousands on the Wrong Tickets</span>
        </h1>
        <p className="text-xl text-center text-stone-300 font-semibold mb-4">
          The exact 5-step roadmap 2,400+ Aussies used to get their first site job
        </p>
        <p className="text-stone-400 text-center text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Enter your email below and we&apos;ll send it to your inbox in 60 seconds.
          No credit card. No spam. Just the guide.
        </p>

        {/* What's inside */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-5">
            What&apos;s inside:
          </p>
          <ul className="space-y-5">
            {WHAT_IS_INSIDE.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white text-sm">
                    {item.title}
                  </p>
                  <p className="text-stone-400 text-sm mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mini testimonial above form */}
        <div className="mb-4 flex items-start gap-3 bg-stone-800/60 border border-stone-700 rounded-xl px-5 py-4">
          <div className="flex gap-0.5 shrink-0 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-stone-300 text-sm italic">
            &ldquo;This guide told me exactly what I actually needed. Saved me from spending $3,000 on tickets I didn&apos;t need.
            Got my first call back from WorkPac within 2 weeks.&rdquo;
            <span className="block text-stone-500 not-italic mt-1">— Liam D., Labourer, QLD</span>
          </p>
        </div>

        {/* Form */}
        <div className="bg-stone-900 border border-stone-700 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white mb-1">
            Send me the free guide now
          </h2>
          <p className="text-stone-400 text-sm mb-6">
            It&apos;ll be in your inbox in under 60 seconds.
          </p>
          <LeadForm />
          <p className="text-center text-xs text-stone-500 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            { stat: "2,400+", label: "Guides downloaded" },
            { stat: "94%", label: "Job placement rate" },
            { stat: "4.9★", label: "Average rating" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="text-2xl font-bold text-amber-400">{stat}</p>
              <p className="text-xs text-stone-400 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-stone-500">
          <span className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5" /> Australian-specific content
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-3.5 w-3.5" /> No credit card needed
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" /> Join 2,400+ FIFO workers
          </span>
        </div>
      </main>

      <footer className="text-center py-8 text-xs text-stone-600 border-t border-stone-900">
        © {new Date().getFullYear()} FIFO Ready. All rights reserved. ·{" "}
        <Link href="/" className="hover:text-stone-400 transition-colors">
          fifoready.com.au
        </Link>
      </footer>
    </div>
  );
}
