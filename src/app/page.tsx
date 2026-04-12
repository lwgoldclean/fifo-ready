import Link from "next/link";
import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  HardHat,
  FileText,
  ClipboardList,
  Shield,
  Users,
  Star,
  ChevronDown,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { CheckoutButton } from "@/components/checkout-button";
import { LandingNav } from "./landing-nav";
import { StickyCTA } from "./sticky-cta";

export default async function HomePage() {
  const session = await auth();
  const hasPaid = session?.user?.hasPaid ?? false;
  const isLoggedIn = !!session;

  return (
    <div className="min-h-screen bg-white">
      <LandingNav isLoggedIn={isLoggedIn} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-medium text-orange-300 ring-1 ring-orange-500/30 mb-6">
            <Star className="h-3.5 w-3.5" />
            Australia&apos;s #1 FIFO Preparation Training
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Start Your{" "}
            <span className="text-orange-400">FIFO Mining Career</span>
            {" "}Today
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Get every document, guide, and resource you need to land your first FIFO role.
            Our comprehensive training centre covers everything from safety certificates
            to interview prep — all in one place.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {session && hasPaid ? (
              <Button
                size="lg"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
                asChild
              >
                <Link href="/dashboard">Access Training</Link>
              </Button>
            ) : session && !hasPaid ? (
              <CheckoutButton
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg h-auto"
                size="lg"
                label="Start Learning — $4.99 AUD (was $59)"
              />
            ) : (
              <CheckoutButton
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg h-auto"
                size="lg"
                label="Start Learning — $4.99 AUD (was $59)"
              />
            )}
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg"
              asChild
            >
              <a href="#what-you-get">See What&apos;s Inside</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-400" /> Lifetime access
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-400" /> Instant access after payment
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-400" /> Australian-focused content
            </span>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-orange-50 py-8 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">2,400+</p>
              <p className="text-sm text-gray-500 mt-1">Students enrolled</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">50+</p>
              <p className="text-sm text-gray-500 mt-1">Training documents</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">4.9★</p>
              <p className="text-sm text-gray-500 mt-1">Average rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">94%</p>
              <p className="text-sm text-gray-500 mt-1">Job placement rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Sound familiar?
            </h2>
          </div>
          <div className="space-y-4">
            {[
              "You want to break into FIFO but don't know where to start",
              "You're unsure what documents and certifications you actually need",
              "You've applied but keep getting knocked back without feedback",
              "You don't know what to expect on your first day at site",
            ].map((pain) => (
              <div key={pain} className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-100">
                <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm sm:text-base">{pain}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-xl bg-orange-50 border border-orange-200 text-center">
            <Zap className="h-6 w-6 text-orange-500 mx-auto mb-2" />
            <p className="font-semibold text-gray-900 mb-1">FIFO Ready fixes all of this.</p>
            <p className="text-sm text-gray-600">Everything you need, in one place, for a one-time payment.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-gray-500">Three simple steps to your new FIFO career</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Pay & Get Instant Access",
                desc: "Secure one-time payment via Stripe. No account needed upfront — you'll set your password right after checkout.",
              },
              {
                step: "2",
                title: "One-Time Payment",
                desc: "Pay once, get lifetime access. No subscriptions, no hidden fees — just $4.99 AUD (limited time, down from $59).",
              },
              {
                step: "3",
                title: "Access Everything",
                desc: "Instantly unlock all training documents, quizzes, and resources in your dashboard.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-bold text-orange-600 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section id="what-you-get" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Everything You Need to Get Started</h2>
            <p className="mt-4 text-lg text-gray-500">Comprehensive resources built specifically for Australian FIFO roles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Essential Documents",
                items: [
                  "Pre-employment medicals guide",
                  "Drug & alcohol testing info",
                  "Resume & cover letter templates",
                  "Safety induction prep",
                  "FIFO contracts explained",
                ],
              },
              {
                icon: ClipboardList,
                title: "Knowledge Quizzes",
                items: [
                  "Site safety regulations",
                  "Mining industry terminology",
                  "Emergency procedures",
                  "PPE requirements",
                  "Workplace conduct standards",
                ],
              },
              {
                icon: Shield,
                title: "Career Resources",
                items: [
                  "Top FIFO employers list",
                  "Interview question bank",
                  "Roster guide (2:1, 8:6 & more)",
                  "Accommodation & camp life",
                  "Pay rates & conditions",
                ],
              },
            ].map((category) => (
              <Card key={category.title} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                      <category.icon className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg">{category.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Students Say</h2>
            <p className="mt-3 text-gray-500">Real people. Real results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Jake T.",
                role: "Drill & Blast Technician, WA",
                quote:
                  "FIFO Ready had everything I needed. The document library alone was worth it — I went into my first interview feeling completely prepared.",
                stars: 5,
                outcome: "Got his first FIFO role in 5 weeks",
              },
              {
                name: "Melissa R.",
                role: "Plant Operator, QLD",
                quote:
                  "I had no idea where to start. This training centre walked me through everything step by step. Got my first FIFO job within 6 weeks!",
                stars: 5,
                outcome: "Landed a role on an 8:6 roster",
              },
              {
                name: "Shane K.",
                role: "Haul Truck Driver, NT",
                quote:
                  "The quizzes helped me nail my safety knowledge. My supervisor was impressed with how much I already knew on my first day.",
                stars: 5,
                outcome: "Passed site induction first go",
              },
            ].map((testimonial) => (
              <Card key={testimonial.name} className="border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="pt-3 border-t">
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 rounded-full px-2.5 py-0.5">
                      <CheckCircle className="h-3 w-3" />
                      {testimonial.outcome}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple, Honest Pricing</h2>
            <p className="mt-4 text-lg text-gray-500">One payment. Lifetime access. No surprises.</p>
          </div>
          <div className="mx-auto max-w-lg">
            <Card className="border-2 border-orange-500 shadow-xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600 mb-4">
                  ⚡ Limited Time Only
                </div>
                <div className="mb-1 flex items-center justify-center gap-3">
                  <span className="text-2xl text-gray-400 line-through">$59</span>
                  <span className="text-xs font-semibold text-red-500 bg-red-50 rounded px-2 py-0.5">92% OFF</span>
                </div>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">$4.99</span>
                  <span className="text-xl text-gray-500 ml-2">AUD</span>
                </div>
                <p className="text-gray-500 text-sm mb-6">One-time, no recurring fees</p>
                <ul className="text-left space-y-3 mb-8">
                  {[
                    "Full document library access",
                    "All knowledge quizzes",
                    "Career planning resources",
                    "Lifetime access — including future updates",
                    "Instant access after payment",
                    "Support via email",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {session && hasPaid ? (
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg"
                    asChild
                  >
                    <Link href="/dashboard">Access Your Dashboard</Link>
                  </Button>
                ) : session && !hasPaid ? (
                  <CheckoutButton
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg h-auto"
                    label="Enrol Now — $4.99 AUD"
                  />
                ) : (
                  <CheckoutButton
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg h-auto"
                    label="Enrol Now — $4.99 AUD"
                  />
                )}
                <p className="mt-4 text-xs text-gray-400">
                  Secure payment via Stripe. Australian GST included.
                </p>
                <p className="mt-2 text-xs text-gray-500 font-medium">
                  ✓ Not satisfied? Email us within 7 days for a full refund.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Do I need any prior mining experience?",
                a: "No. FIFO Ready is designed for people starting fresh. We cover everything from ground zero — what certifications you need, how to write a mining resume, and what to expect on site.",
              },
              {
                q: "What if I don't land a FIFO job?",
                a: "We stand behind our content. If you complete the training and don't feel prepared to apply for FIFO roles within 7 days of purchase, email us for a full refund — no questions asked.",
              },
              {
                q: "Can I access this on my phone?",
                a: "Yes. FIFO Ready is fully mobile-optimised. You can read documents, complete quizzes, and track your progress from any device — phone, tablet, or desktop.",
              },
              {
                q: "Is the content Australian-specific?",
                a: "Completely. Every document, resource, and piece of advice is tailored to the Australian mining industry — WA, QLD, NT and beyond. We cover Australian regulations, pay rates, rosters, and employers.",
              },
              {
                q: "What's included exactly?",
                a: "You get access to 50+ training documents (including resume templates, medical prep guides, induction checklists), knowledge quizzes for safety and industry knowledge, a FIFO employer directory, and interview preparation resources.",
              },
              {
                q: "Is this a subscription?",
                a: "No. You pay $4.99 AUD once (limited time, normally $59) and get lifetime access — including any future content we add. There are no monthly fees, no renewals, no surprises.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group border border-gray-200 rounded-lg bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-gray-900 text-sm sm:text-base select-none list-none">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 text-gray-400 shrink-0 ml-3 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Users className="mx-auto h-12 w-12 text-white/80 mb-4" />
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Ready to Start Your FIFO Journey?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Join thousands of Australians who have used FIFO Ready to launch their mining careers.
          </p>
          {session && hasPaid ? (
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : session && !hasPaid ? (
            <CheckoutButton
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-semibold h-auto"
              size="lg"
              label="Get Instant Access"
            />
          ) : (
            <div className="flex flex-col items-center gap-3">
              <CheckoutButton
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-semibold h-auto"
                label="Get Instant Access — $4.99 AUD (was $59)"
              />
              <p className="text-orange-200 text-sm">7-day money-back guarantee</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <HardHat className="h-6 w-6 text-orange-500" />
              <span className="text-white font-bold">FIFO Ready</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/login" className="hover:text-white">Sign In</Link>
              <a href="mailto:support@fifoready.org" className="hover:text-white">Support</a>
            </div>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} FIFO Ready. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <StickyCTA isLoggedIn={isLoggedIn} hasPaid={hasPaid} />
    </div>
  );
}
