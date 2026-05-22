import type { Metadata } from "next";
import {
  BrainCircuit,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock,
  FileText,
  LineChart,
  Mail,
  Wallet,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "The One-Week Diagnostic — J&E Statistical Consulting",
  description:
    "A fixed-fee, one-week audit of your AI or statistics work. Written report. No decks. $2,500 flat.",
  openGraph: {
    title: "The One-Week Diagnostic — J&E Statistical Consulting",
    description:
      "A fixed-fee, one-week audit of your AI or statistics work. Written report. No decks. $2,500 flat.",
    url: "https://jestats.io/diagnostic",
    type: "website",
  },
};

interface Sku {
  id: string;
  title: string;
  tagline: string;
  pitch: string;
  icon: typeof BrainCircuit;
  accent: "indigo" | "violet";
  goodFor: string[];
  mailSubject: string;
}

const skus: Sku[] = [
  {
    id: "ai-rigor",
    title: "AI Rigor Audit",
    tagline: "For LLM, RAG, and agent systems",
    pitch:
      "A forensic review of an AI system or pilot: prompt design, retrieval and grounding, eval setup, hallucination behavior, cost model, and go-live readiness. You leave with a clear-eyed read on where the system is solid and where it'll break in production.",
    icon: BrainCircuit,
    accent: "indigo",
    goodFor: [
      "An LLM pilot that's been stuck in 'demo mode' for months",
      "A RAG system that gives confident but wrong answers",
      "An AI feature shipped without a real evaluation harness",
      "An AI roadmap you want a second, technical opinion on",
    ],
    mailSubject: "Book AI Rigor Audit",
  },
  {
    id: "stats-experiment",
    title: "Stats & Experiment Audit",
    tagline: "For dashboards, A/B tests, models, and decisions",
    pitch:
      "A statistician's review of the data work driving your decisions: experimental design, p-values, sample sizes, confounders, model assumptions, dashboard logic. You leave knowing which numbers you can trust and which ones are quietly lying to you.",
    icon: LineChart,
    accent: "violet",
    goodFor: [
      "A dashboard nobody on the team fully trusts",
      "An A/B test result that feels slippery",
      "A model in production that no one has independently checked",
      "A business decision riding on a single statistical claim",
    ],
    mailSubject: "Book Stats & Experiment Audit",
  },
];

const week = [
  {
    day: "Day 1",
    title: "Kickoff",
    body: "60-min call. We align on the question, scope, and access. You send code, data samples, dashboards, prompts — whatever fits the audit.",
  },
  {
    day: "Days 2–4",
    title: "Deep work",
    body: "We dig in. Read the code, run the math, replicate findings, test edge cases, sanity-check assumptions. We surface questions over email or Slack as they come up.",
  },
  {
    day: "Day 5",
    title: "Draft report",
    body: "An 8–12 page written audit: what's working, what's broken, severity of each finding, and concrete next steps. Sent as a PDF — no slides.",
  },
  {
    day: "Day 6–7",
    title: "Walkthrough",
    body: "60-min walkthrough with your team. Q&A, prioritization, scoping any follow-on work. Recording yours to keep.",
  },
];

const deliverables = [
  "8–12 page written audit (PDF) — written, not slide-decked",
  "Severity-ranked findings with concrete remediation steps",
  "Replication notebook or code snippets where relevant",
  "60-minute walkthrough call (recorded, yours to keep)",
  "Follow-on engagement scope if it makes sense — no pressure",
];

const faqs = [
  {
    q: "Why a fixed fee instead of a proposal?",
    a: "Proposals waste both of us a week. If the diagnostic is worth $2,500, you should be able to decide that in a single email, not a procurement cycle. The whole point of this offer is to skip the friction.",
  },
  {
    q: "What does $2,500 actually buy?",
    a: "Roughly 12–16 hours of senior work (Eric or both founders), the written report, the walkthrough, and one round of follow-up questions. We've costed this carefully — it's not a loss-leader, but it's deliberately set below where procurement gets involved.",
  },
  {
    q: "How is this different from a free 'discovery call'?",
    a: "A discovery call gives you a sales pitch. A diagnostic gives you a written, defensible technical opinion you can hand to your team. You pay because you should — and because that's what makes us write it honestly.",
  },
  {
    q: "What if you find nothing wrong?",
    a: "Then the report says so, in writing, with the reasoning. That's a useful thing to hand to a board or a buyer. We'd rather tell you everything is fine than invent problems.",
  },
  {
    q: "What if we want you to fix what you find?",
    a: "We'll scope a follow-on engagement if it makes sense for both sides. Roughly 30–40% of diagnostics turn into a build or retainer. There's no pressure — and the diagnostic stands on its own either way.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Standard mutual NDA, no negotiation theater. If you have your own template, we'll sign it the same day.",
  },
];

function buildMailto(subject: string): string {
  const body =
    "Hi Eric and Jennye,%0D%0A%0D%0AI'd like to book the following diagnostic:%0D%0A%0D%0A- Company:%0D%0A- What we want audited (short description):%0D%0A- Ideal start date:%0D%0A%0D%0AThanks!";
  return `mailto:eric@jestats.io?subject=${encodeURIComponent(subject)}&body=${body}`;
}

const accentClasses = {
  indigo: {
    iconBg: "from-brand-indigo/25 to-brand-blue/15",
    rule: "via-brand-indigo/40",
  },
  violet: {
    iconBg: "from-brand-violet/25 to-brand-purple/15",
    rule: "via-brand-violet/40",
  },
} as const;

export default function DiagnosticPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="ambient-bg" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Productized engagement"
            title={
              <>
                One week. Written report.{" "}
                <span className="text-gradient">No decks.</span>
              </>
            }
            description="A fixed-fee diagnostic of your AI or statistics work, delivered as a written audit you can hand to your team. The fastest way to find out if your system actually holds up — and the lowest-friction way to start working with us."
          />

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {[
              { icon: Wallet, label: "$2,500 flat" },
              { icon: Clock, label: "One week, kickoff to walkthrough" },
              { icon: FileText, label: "8–12 page written audit" },
            ].map((fact) => (
              <span
                key={fact.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-mist-200"
              >
                <fact.icon className="h-4 w-4 text-brand-violet" />
                {fact.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {skus.map((sku, i) => {
              const Icon = sku.icon;
              const accent = accentClasses[sku.accent];
              return (
                <div
                  key={sku.id}
                  className="glass-card group relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.rule} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.iconBg} ring-1 ring-inset ring-white/10`}
                  >
                    <Icon className="h-5 w-5 text-brand-violet" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-mist-50">
                    {sku.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.22em] text-brand-violet">
                    {sku.tagline}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-mist-200">
                    {sku.pitch}
                  </p>

                  <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-mist-400">
                      Good for
                    </div>
                    <ul className="mt-3 space-y-2.5">
                      {sku.goodFor.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-mist-200"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-violet" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={buildMailto(sku.mailSubject)}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-5 py-3 text-sm font-medium text-white shadow-md shadow-brand-indigo/20 transition-transform hover:scale-[1.03]"
                  >
                    Book this audit
                    <ChevronRight className="h-4 w-4" />
                  </a>
                  <p className="mt-3 text-center text-xs text-mist-400">
                    Opens your email — we'll reply within one business day.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="How the week runs"
            title={
              <>
                Seven days, end to end —{" "}
                <span className="text-gradient">no mystery.</span>
              </>
            }
            description="The same shape every time. You always know what's happening this week and when the report lands."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {week.map((step, i) => (
              <div
                key={step.day}
                className="glass-card relative overflow-hidden rounded-2xl p-6"
              >
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-brand-violet">
                  {step.day}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-mist-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-300">
                  {step.body}
                </p>
                <div className="absolute right-3 top-3 font-mono text-[0.6rem] text-mist-400">
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass-card rounded-3xl p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-indigo/25 to-brand-purple/15 ring-1 ring-inset ring-white/10">
                <ClipboardCheck className="h-5 w-5 text-brand-violet" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-mist-50 sm:text-2xl">
                  What you actually get
                </h3>
                <p className="mt-1 text-sm text-mist-400">
                  Five concrete deliverables, every engagement.
                </p>
              </div>
            </div>

            <ul className="mt-7 space-y-3">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-mist-200 sm:text-base"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-violet" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Questions"
            title={
              <>
                The things people{" "}
                <span className="text-gradient">always ask.</span>
              </>
            }
          />

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={faq.q}
                className="glass-card group rounded-2xl p-6 [&[open]>summary>svg]:rotate-90"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-left font-display text-base font-medium text-mist-50 sm:text-lg">
                  {faq.q}
                  <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-brand-violet transition-transform" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-mist-300 sm:text-base">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-28 sm:pb-36">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-indigo/10 via-transparent to-brand-purple/10 p-8 sm:p-12">
            <div className="grid-overlay opacity-40" aria-hidden="true" />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-2xl">
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-brand-violet">
                  Ready when you are
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
                  Book a diagnostic, or{" "}
                  <span className="text-gradient">just say hello.</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-300 sm:text-base">
                  Not sure which SKU fits? Send a one-line description of what
                  you'd want audited and we'll point you to the right one — or
                  tell you honestly that this isn't the right fit.
                </p>
              </div>
              <a
                href="mailto:eric@jestats.io?subject=Question%20about%20the%20diagnostic"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-6 py-3 text-sm font-medium text-white shadow-md shadow-brand-indigo/20 transition-transform hover:scale-[1.03]"
              >
                <Mail className="h-4 w-4" />
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
