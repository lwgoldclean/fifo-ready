import Link from "next/link";
import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, HardHat, FileText, ClipboardList, Shield, Users, Star } from "lucide-react";
import { CheckoutButton } from "@/components/checkout-button";

export default async function HomePage() {
  const session = await auth();
  const hasPaid = session?.user?.hasPaid ?? false;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <HardHat className="h-7 w-7 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">FIFO Ready</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#what-you-get" className="text-sm font-medium text-gray-600 hover:text-gray-900">What You Get</a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
            </div>
            <div className="flex items-center gap-3">
              {session ? (
                <Button asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button variant="ghost" asChild>
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 py-24 sm:py-32">
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
            to interview preparation — all in one place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            {session && hasPaid ? (
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg" asChild>
                <Link href="/dashboard">Access Training</Link>
              </Button>
            ) : session && !hasPaid ? (
              <CheckoutButton className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg h-auto" size="lg" label="Start Learning — $197 AUD" />
            ) : (
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg" asChild>
                <Link href="/register">Start Learning — $197 AUD</Link>
              </Button>
            )}
            <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg" asChild>
              <a href="#what-you-get">See What&apos;s Inside</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400 flex-wrap">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> Lifetime access</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> Instant access after payment</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> Australian-focused content</span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-orange-50 py-8 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 flex-wrap text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">2,400+</p>
              <p className="text-sm text-gray-500">Students enrolled</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-200" />
            <div>
              <p className="text-3xl font-bold text-gray-900">50+</p>
              <p className="text-sm text-gray-500">Training documents</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-200" />
            <div>
              <p className="text-3xl font-bold text-gray-900">4.9★</p>
              <p className="text-sm text-gray-500">Average rating</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-200" />
            <div>
              <p className="text-3xl font-bold text-gray-900">94%</p>
              <p className="text-sm text-gray-500">Job placement rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-gray-500">Three simple steps to your new FIFO career</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Create Your Account", desc: "Sign up in seconds. No credit card required until you're ready to enrol." },
              { step: "2", title: "One-Time Payment", desc: "Pay once, get lifetime access. No subscriptions, no hidden fees — just $197 AUD." },
              { step: "3", title: "Access Everything", desc: "Instantly unlock all training documents, quizzes, and resources in your dashboard." },
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
      <section id="what-you-get" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
                  <ul className="space-y-2">
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
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Students Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Jake T.",
                role: "Drill & Blast Technician, WA",
                quote: "FIFO Ready had everything I needed. The document library alone was worth it — I went into my first interview feeling completely prepared.",
                stars: 5,
              },
              {
                name: "Melissa R.",
                role: "Plant Operator, QLD",
                quote: "I had no idea where to start. This training centre walked me through everything step by step. Got my first FIFO job within 6 weeks!",
                stars: 5,
              },
              {
                name: "Shane K.",
                role: "Haul Truck Driver, NT",
                quote: "The quizzes helped me nail my safety knowledge. My supervisor was impressed with how much I already knew on my first day.",
                stars: 5,
              },
            ].map((testimonial) => (
              <Card key={testimonial.name} className="border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple, Honest Pricing</h2>
            <p className="mt-4 text-lg text-gray-500">One payment. Lifetime access. No surprises.</p>
          </div>
          <div className="mx-auto max-w-lg">
            <Card className="border-2 border-orange-500 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600 mb-4">
                  One-Time Payment
                </div>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">$197</span>
                  <span className="text-xl text-gray-500 ml-2">AUD</span>
                </div>
                <p className="text-gray-500 text-sm mb-8">One-time, no recurring fees</p>
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
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg" asChild>
                    <Link href="/dashboard">Access Your Dashboard</Link>
                  </Button>
                ) : session && !hasPaid ? (
                  <CheckoutButton className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg h-auto" label="Enrol Now — $197 AUD" />
                ) : (
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg" asChild>
                    <Link href="/register">Enrol Now — $197 AUD</Link>
                  </Button>
                )}
                <p className="mt-4 text-xs text-gray-400">
                  Secure payment via Stripe. Australian GST included.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-semibold" asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : session && !hasPaid ? (
            <CheckoutButton className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-semibold h-auto" size="lg" label="Get Instant Access" />
          ) : (
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-semibold" asChild>
              <Link href="/register">Get Instant Access</Link>
            </Button>
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
              <Link href="/register" className="hover:text-white">Register</Link>
              <a href="mailto:support@fifoready.com.au" className="hover:text-white">Support</a>
            </div>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} FIFO Ready. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
