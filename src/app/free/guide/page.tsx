import type { Metadata } from "next";
import Link from "next/link";
import { HardHat, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FIFO Fast-Track Guide | FIFO Ready",
  description:
    "The 5-step process to land your first FIFO mining role in Australia.",
  robots: { index: false, follow: false },
};

const COMPANIES = [
  {
    tier: "Camp Services — Zero experience accepted",
    items: [
      {
        name: "Sodexo",
        desc: "Camp catering, housekeeping, site services. One of the best entry points in the country.",
        url: "https://au.sodexo.com/careers.html",
      },
      {
        name: "Compass Group (ESS)",
        desc: "Same profile as Sodexo — actively recruit for remote camp roles with no prior mining experience.",
        url: "https://www.compass-group.com.au/careers/",
      },
      {
        name: "Civeo",
        desc: "Accommodation management. Roles: room attendant, catering assistant, maintenance.",
        url: "https://www.civeo.com/au/careers/",
      },
    ],
  },
  {
    tier: "Maintenance & Trades Contractors",
    items: [
      {
        name: "Ventia (formerly Broadspectrum)",
        desc: "Large diversified services company. Strong presence across WA, QLD, and NT.",
        url: "https://www.ventia.com/careers",
      },
      {
        name: "Downer Group",
        desc: "Mining services, maintenance, and infrastructure. Entry-level trade assistant roles available.",
        url: "https://www.downergroup.com/careers",
      },
    ],
  },
  {
    tier: "Direct Mining Operators",
    items: [
      {
        name: "BHP",
        desc: "Australia's largest miner. Uses SmartRecruiters. Look for apprenticeships and dump truck operator trainee roles.",
        url: "https://jobs.bhp.com",
      },
      {
        name: "Rio Tinto",
        desc: "Iron ore operations in the Pilbara. Operators and apprenticeships for entry-level candidates.",
        url: "https://careers.riotinto.com",
      },
      {
        name: "Fortescue (FMG)",
        desc: "Known for hiring from diverse backgrounds. Strong diversity and inclusion programs.",
        url: "https://www.fortescue.com/careers",
      },
      {
        name: "Roy Hill",
        desc: "Privately owned WA iron ore operation. Competitive pay, good culture.",
        url: "https://www.royhill.com.au/careers",
      },
    ],
  },
  {
    tier: "Labour Hire Agencies — Fastest path for zero experience",
    items: [
      {
        name: "WorkPac",
        desc: "Australia's largest mining labour hire company. Apply once, get placed across multiple sites.",
        url: "https://www.workpac.com",
      },
      {
        name: "Programmed",
        desc: "Strong QLD and NT coverage. Good for general labourer and trade assistant roles.",
        url: "https://www.programmed.com.au",
      },
      {
        name: "Chandler Macleod",
        desc: "Strong WA presence. Frequently place entry-level candidates in Pilbara operations.",
        url: "https://www.chandlermacleod.com",
      },
    ],
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-stone-950 px-6 py-5 print:hidden">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <HardHat className="h-6 w-6 text-amber-400" />
            <span className="font-bold text-white">FIFO Ready</span>
          </Link>
          <Link
            href="/#pricing"
            className="text-sm bg-amber-500 text-stone-950 font-semibold px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors"
          >
            Get the Full Course — $4.99 →
          </Link>
        </div>
      </div>

      {/* Guide */}
      <article className="max-w-3xl mx-auto px-6 py-12 prose prose-stone prose-headings:font-bold prose-h2:text-2xl prose-h3:text-lg prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline max-w-none">
        {/* Cover */}
        <div className="not-prose mb-12 p-8 bg-stone-950 rounded-2xl text-white text-center">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Free Guide
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
            The FIFO Fast-Track Guide
          </h1>
          <p className="text-stone-300 text-lg">
            The Exact 5-Step Process 2,400+ Aussies Used to Land Their First
            Mining Role
          </p>
          <p className="text-stone-500 text-sm mt-4">
            No fluff. No upsells in this guide. Just the roadmap.
          </p>
        </div>

        {/* Intro */}
        <p>
          If you&apos;ve been thinking about FIFO for a while but keep putting
          it off because you don&apos;t know where to start — this guide is for
          you. Most people overcomplicate it. They spend months researching,
          waste money on tickets they don&apos;t need, and never actually
          apply.
        </p>
        <p>
          This guide cuts through all of that. Five steps. Everything you need
          to know. Nothing you don&apos;t.
        </p>

        <hr />

        {/* Step 1 */}
        <h2>
          Step 1 — The Certifications & Tickets You Actually Need (and
          What&apos;s a Waste of Money)
        </h2>

        <p>
          This is where most first-timers get burned. They spend thousands on
          tickets before they&apos;ve even applied for a single job. Here&apos;s
          the truth:
        </p>

        <h3>What you genuinely need before applying:</h3>
        <ul>
          <li>
            <strong>White Card (General Construction Induction)</strong> —
            Non-negotiable. Required by every site in Australia. Can be done
            online in a day for $30–$50. If you don&apos;t have this, get it
            first.
          </li>
          <li>
            <strong>Standard First Aid (HLTAID011)</strong> — Strongly preferred
            by most operators. Not always mandatory for entry-level roles but
            it&apos;s a genuine differentiator. One-day course, ~$100–$150.
          </li>
          <li>
            <strong>Current driver&apos;s licence</strong> — C class minimum. An
            HR licence is a significant advantage and often opens up more roles.
            If you can get your HR before applying, do it.
          </li>
        </ul>

        <h3>What you do NOT need before applying:</h3>
        <ul>
          <li>Surface Mining Certificate of Competency</li>
          <li>Plant operator tickets (dozer, excavator, grader)</li>
          <li>Explosive handling or shotfiring licences</li>
          <li>Any specific mining safety courses beyond the White Card</li>
        </ul>

        <p>
          These tickets are typically acquired <em>on the job</em> after
          you&apos;re hired — often paid for by your employer. Pursuing them
          before you have a role is a $2,000–$8,000 mistake that&apos;s
          common among first-timers.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-5 my-6">
          <p className="font-semibold text-stone-900 mb-1">
            Already a tradesperson?
          </p>
          <p className="text-stone-600 text-sm">
            Your existing trade certificate (Cert III, Cert IV, journeyman
            papers) is worth more than any mining-specific ticket. Lead with it.
            Mining companies pay a significant premium for tradespeople who want
            to go FIFO.
          </p>
        </div>

        <div className="not-prose bg-stone-100 border border-stone-200 rounded-xl p-5 my-6">
          <p className="font-semibold text-stone-900 mb-1">
            Myth: &ldquo;I need 2 years mining experience to get in.&rdquo;
          </p>
          <p className="text-stone-600 text-sm">
            False. Tier-2 contractors (camp services, maintenance companies,
            labour hire agencies) actively hire zero-experience candidates for
            labourer, trade assistant, room attendant, and camp kitchen roles.
            The trick is knowing which companies to target — which is Step 4.
          </p>
        </div>

        <hr />

        {/* Step 2 */}
        <h2>Step 2 — The 8 Documents Every FIFO Employer Asks For</h2>

        <p>
          When you get the call for a pre-employment pack, they&apos;ll ask for
          these. Have them ready before you apply so you can move fast when the
          offer comes.
        </p>

        <ol>
          <li>
            <strong>Resume (mining format)</strong> — Skills-first, not
            chronological. Lead with relevant physical or trade experience,
            safety awareness, and any site or outdoor work history. More on this
            in the Bonus section.
          </li>
          <li>
            <strong>White Card certificate</strong> — Digital copy is acceptable.
            Keep it in your phone photos as a backup.
          </li>
          <li>
            <strong>Proof of Right to Work in Australia</strong> — Australian
            passport, or birth certificate + Australian citizenship certificate.
            Non-citizens need their passport with a valid work visa.
          </li>
          <li>
            <strong>Driver&apos;s licence</strong> — Both sides. If you have an
            HR, mention it in your resume and cover email too.
          </li>
          <li>
            <strong>Tax File Number (TFN) declaration</strong> — ATO form used
            for payroll setup. Download from ato.gov.au if you don&apos;t have
            one.
          </li>
          <li>
            <strong>Bank account details</strong> — BSB and account number for
            salary deposits.
          </li>
          <li>
            <strong>Superannuation fund details</strong> — Fund name and member
            number. If you don&apos;t have a preferred fund, you can choose the
            company&apos;s default.
          </li>
          <li>
            <strong>Emergency contact</strong> — Full name, relationship, phone
            number, and address. Have this written down — companies ask for it on
            their onboarding forms.
          </li>
        </ol>

        <p>
          <strong>Bonus documents</strong> some companies also ask for: a
          100-point ID check and a VEVO check (for non-Australian citizens to
          verify visa work rights). Non-citizens should have their VEVO printout
          ready.
        </p>

        <hr />

        {/* Step 3 */}
        <h2>
          Step 3 — Pre-Employment Medical: What to Expect & How to Prep
        </h2>

        <p>
          This is the step most people are nervous about. It&apos;s actually
          pretty straightforward once you know what they&apos;re testing.
        </p>

        <h3>The basics</h3>
        <ul>
          <li>
            <strong>Who pays:</strong> Your employer. You don&apos;t pay a cent
            for the medical.
          </li>
          <li>
            <strong>Where:</strong> Usually Sonic HealthPlus, CAMHS, or a
            company-appointed clinic. They&apos;ll book it for you.
          </li>
          <li>
            <strong>How long:</strong> 45 minutes to 2 hours depending on the
            role and site requirements.
          </li>
        </ul>

        <h3>What they test</h3>
        <ul>
          <li>
            <strong>Vision</strong> — Correctable to 6/12 is fine for most
            roles. Glasses and contacts are acceptable.
          </li>
          <li>
            <strong>Hearing</strong> — Audiogram. Hearing aids are generally
            acceptable if properly documented.
          </li>
          <li>
            <strong>Blood pressure</strong> — Most commonly failed component for
            desk workers and people who are nervous on the day. See below.
          </li>
          <li>
            <strong>Musculoskeletal</strong> — Range of motion in your back,
            shoulders, knees. They&apos;re looking for chronic conditions, not
            fitness level.
          </li>
          <li>
            <strong>Lung function (spirometry)</strong> — A breathing test.
            Relevant for anyone with asthma — bring your Ventolin and mention it.
          </li>
          <li>
            <strong>5-panel urine drug screen</strong> — Cannabis, meth/
            amphetamines, opiates, cocaine, benzodiazepines. Standard cut-off
            for cannabis is 50ng/mL. Detection windows vary significantly by
            usage frequency — occasional use ~3 days, regular use ~2 weeks,
            heavy daily use up to 30 days. Be realistic with yourself.
          </li>
        </ul>

        <h3>How to prep</h3>
        <ul>
          <li>
            <strong>Blood pressure:</strong> If yours runs high, see a GP 2–3
            weeks before your medical. Reduce sodium, caffeine, and alcohol in
            the week prior. Don&apos;t attend hung over — this is a common
            reason for borderline readings.
          </li>
          <li>
            <strong>Musculoskeletal:</strong> Disclose existing injuries
            honestly. Non-disclosure is a serious issue — if it&apos;s
            discovered later, it can be grounds for termination. The doctor is
            assessing fitness for the role, not judging your history.
          </li>
          <li>
            <strong>Medications:</strong> Disclose all current medications to the
            doctor in the appointment, not just on the form. Many flagged
            medications are entirely explainable with a prescription.
          </li>
          <li>
            <strong>What to bring:</strong> Photo ID, glasses or contacts if you
            use them, a list of current medications.
          </li>
        </ul>

        <div className="not-prose bg-stone-100 border border-stone-200 rounded-xl p-5 my-6">
          <p className="font-semibold text-stone-900 mb-1">
            After the medical
          </p>
          <p className="text-stone-600 text-sm">
            Results typically take 2–5 business days. A &ldquo;pending&rdquo;
            result doesn&apos;t mean failure — it usually means the clinic needs
            to review something with a doctor before clearing you. Follow up with
            HR after 5 days if you haven&apos;t heard back.
          </p>
        </div>

        <hr />

        {/* Step 4 */}
        <h2>
          Step 4 — The 12 Companies Actively Hiring Entry-Level FIFO Workers
        </h2>

        <p>
          This list is correct as of early 2025. Hiring cycles change — always
          check the company&apos;s careers page directly for current openings.
        </p>

        <div className="not-prose space-y-8 my-6">
          {COMPANIES.map((group) => (
            <div key={group.tier}>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                {group.tier}
              </p>
              <div className="space-y-3">
                {group.items.map((company) => (
                  <div
                    key={company.name}
                    className="flex items-start gap-3 bg-stone-50 border border-stone-200 rounded-xl p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-stone-900 hover:text-amber-600 transition-colors"
                      >
                        {company.name} ↗
                      </a>
                      <p className="text-stone-500 text-sm mt-0.5">
                        {company.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-5 my-6">
          <p className="font-semibold text-stone-900 mb-1">
            Pro tip: Labour hire first
          </p>
          <p className="text-stone-600 text-sm">
            If you have zero mining experience, the three labour hire agencies
            (WorkPac, Programmed, Chandler Macleod) are your fastest path in.
            Apply to all three. You register once, they match you to available
            roles. Many people get their first site experience through labour
            hire then move to direct employment within 12 months.
          </p>
        </div>

        <hr />

        {/* Step 5 */}
        <h2>
          Step 5 — The 3 Interview Questions Every FIFO Hiring Manager Asks
          (With Sample Answers)
        </h2>

        <p>
          These aren&apos;t trick questions. They&apos;re looking for specific
          things. Know what they want to hear — and be honest when you deliver
          it.
        </p>

        <h3>
          Q1: &ldquo;Tell me about a time you worked safely in a hazardous
          environment.&rdquo;
        </h3>
        <p>
          <strong>What they&apos;re checking:</strong> That you take safety
          seriously and aren&apos;t a cowboy. They want evidence of hazard
          awareness and proactive safety behaviour.
        </p>
        <p>
          <strong>How to answer:</strong> Use the STAR method — Situation, Task,
          Action, Result. Think about any physical work you&apos;ve done: a
          trade job, construction site, factory, warehouse. Every one of those
          has safety requirements. Never say &ldquo;I&apos;ve never been in a
          hazardous environment&rdquo; — it&apos;s an instant red flag that
          you&apos;re not safety-minded.
        </p>
        <div className="not-prose bg-stone-100 rounded-xl p-4 my-4 text-sm text-stone-700">
          <p className="font-semibold text-stone-900 mb-2">Sample answer:</p>
          <p>
            &ldquo;Working on [construction sites / in a factory / as an
            electrician], I was constantly working around [heavy machinery /
            electrical hazards / heights]. On one job, I identified that a
            section of scaffolding hadn&apos;t been correctly secured before we
            were meant to work on it. I stopped the work, reported it to the
            foreman, and we didn&apos;t resume until it was inspected and
            fixed. Safety&apos;s non-negotiable for me — it&apos;s the reason
            everyone goes home.&rdquo;
          </p>
        </div>

        <h3>
          Q2: &ldquo;Why do you want to work FIFO?&rdquo;
        </h3>
        <p>
          <strong>What they&apos;re checking:</strong> Commitment to the
          lifestyle. They don&apos;t want people who quit after one swing
          because they missed home. High turnover is expensive.
        </p>
        <p>
          <strong>What NOT to say:</strong> &ldquo;Just for the money.&rdquo;
          &ldquo;I don&apos;t have any other options.&rdquo; Anything that
          sounds temporary or desperate.
        </p>
        <div className="not-prose bg-stone-100 rounded-xl p-4 my-4 text-sm text-stone-700">
          <p className="font-semibold text-stone-900 mb-2">Sample answer:</p>
          <p>
            &ldquo;I&apos;ve done my research on the roster structure and I
            understand what the lifestyle looks like. My family and I have talked
            it through — it&apos;s a deliberate choice, not a last resort. The
            income is part of it, but what I&apos;m really after is the career
            progression and the challenge of working on a major project. I work
            better when I&apos;m focused, and FIFO suits that.&rdquo;
          </p>
        </div>

        <h3>
          Q3: &ldquo;How do you handle being away from family for extended
          periods?&rdquo;
        </h3>
        <p>
          <strong>What they&apos;re checking:</strong> Whether you&apos;re going
          to be a liability — calling in sick to go home early, low morale
          affecting the crew, or quitting after the first swing.
        </p>
        <div className="not-prose bg-stone-100 rounded-xl p-4 my-4 text-sm text-stone-700">
          <p className="font-semibold text-stone-900 mb-2">Sample answer:</p>
          <p>
            &ldquo;My family and I have planned for this properly. We&apos;ve
            looked at the roster, mapped out what the time away and time home
            looks like, and put support structures in place. I&apos;ve got a
            good support network. When I&apos;m at work, I&apos;m focused on
            work — and when I&apos;m on break, I make the most of it. It&apos;s
            a lifestyle a lot of my family understand.&rdquo;
          </p>
        </div>

        <hr />

        {/* Bonus */}
        <h2>BONUS: The #1 Mistake That Gets Applications Rejected</h2>

        <p>
          It&apos;s not your experience level. It&apos;s not your age. It&apos;s
          your resume.
        </p>

        <p>
          FIFO hiring managers see hundreds of applications. The ones that get
          interviews lead with physical readiness, safety awareness, and
          reliability. The ones that get binned look like they were written for
          an office admin role.
        </p>

        <p>
          <strong>
            Your FIFO resume needs to do three things in the first 10 seconds:
          </strong>
        </p>
        <ol>
          <li>
            Show you can do physical work (list every manual, trade, outdoor, or
            site role you&apos;ve had)
          </li>
          <li>
            Show you&apos;re safety-conscious (mention your White Card, First
            Aid, any safety training)
          </li>
          <li>
            Show you&apos;re reliable (long tenure at previous employers is
            gold — list it)
          </li>
        </ol>

        <p>
          Your career objective should be one sentence, specific to FIFO — not
          &ldquo;seeking a challenging role in a dynamic environment.&rdquo;
          Something like: &ldquo;Experienced [trade/labourer] seeking a
          FIFO role in [WA/QLD/NT] mining operations.&rdquo;
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-5 my-6">
          <p className="font-semibold text-stone-900 mb-1">
            Mistake #2: Not following up
          </p>
          <p className="text-stone-600 text-sm">
            After submitting your application, call the hiring manager or
            recruiter within 5 business days. Most applicants don&apos;t. It
            takes 3 minutes and meaningfully improves your callback rate. Simply
            introduce yourself, mention the role you applied for, and ask if
            they need anything else from you.
          </p>
        </div>

        <hr />

        {/* Closing CTA */}
        <div className="not-prose bg-stone-950 rounded-2xl p-8 text-white text-center my-8">
          <p className="text-stone-400 text-sm mb-3">You now have the roadmap.</p>
          <p className="text-xl font-bold text-white mb-3">
            Every step. Every company. Every question.
          </p>
          <p className="text-stone-300 text-sm mb-6 max-w-md mx-auto">
            What this guide can&apos;t give you is the full toolkit — the resume
            templates built for FIFO applications, the 50+ training documents,
            pre-employment medical prep checklist, interview question banks, and
            everything else that makes you walk into an interview better prepared
            than 95% of applicants.
          </p>
          <p className="text-stone-300 text-sm mb-6 max-w-md mx-auto">
            That&apos;s what FIFO Ready is. One payment. $4.99 AUD. Lifetime
            access.
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Instant Access — $4.99 AUD →
          </Link>
          <p className="text-stone-600 text-xs mt-3">
            One-time payment · Lifetime access · 7-day refund guarantee
          </p>
        </div>
      </article>

      {/* Bottom CTA bar */}
      <div className="bg-amber-50 border-t border-amber-200 py-12 print:hidden">
        <div className="max-w-2xl mx-auto text-center px-6">
          <p className="text-2xl font-bold text-stone-900 mb-3">
            Ready to execute the roadmap?
          </p>
          <p className="text-stone-600 mb-6">
            FIFO Ready gives you every document template, prep guide, quiz, and
            resource to complete each of these 5 steps — all for a one-time
            $4.99 AUD.
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Get Instant Access — $4.99 AUD →
          </Link>
          <p className="text-xs text-stone-400 mt-3">
            One-time payment. Lifetime access. 7-day refund guarantee.
          </p>
        </div>
      </div>
    </div>
  );
}
