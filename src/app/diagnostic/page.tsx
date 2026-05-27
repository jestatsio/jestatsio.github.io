import type { Metadata } from "next";
import {
  BrainCircuit,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock,
  FileText,
  Gauge,
  LineChart,
  Mail,
  MessageCircleReply,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Free Audits — J&E Statistical Consulting",
  description:
    "Free written audits of your website, AI work, or data. Real findings, no sales call, no obligation. Written report in days. Hire us only if you like what you read.",
  openGraph: {
    title: "Free Audits — J&E Statistical Consulting",
    description:
      "Free written audits of your website, AI work, or data. Real findings, no sales call, no obligation.",
    url: "https://jestats.io/diagnostic",
    type: "website",
  },
};

interface FreeSku {
  id: string;
  title: string;
  tagline: string;
  pitch: string;
  icon: typeof BrainCircuit;
  accent: "indigo" | "violet" | "blue";
  goodFor: string[];
  mailSubject: string;
}

const freeSkus: FreeSku[] = [
  {
    id: "website",
    title: "Free Website Audit",
    tagline: "For your existing site",
    pitch:
      "A practical, written review of your existing website. We look at load speed, how it feels on a phone, how clearly it guides visitors toward becoming customers, the build quality underneath, and the basics most sites quietly let slip. You get a clear, ranked list of what to fix and what to fix first.",
    icon: Gauge,
    accent: "blue",
    goodFor: [
      "A site that loads slowly and you don't know why",
      "Plenty of visitors, but very few of them turn into leads",
      "A WordPress install nobody has touched in two years",
      "Before committing to a rebuild — you want to know what's actually wrong",
    ],
    mailSubject: "Free Website Audit — request",
  },
  {
    id: "ai-starter",
    title: "Free AI Starter Audit",
    tagline: "A first technical read on your AI work",
    pitch:
      "A short, written take on the AI work you're doing — or thinking about doing. We look at what's solid, what's likely to break in production, and where AI would actually move the needle for your business. Not a sales call dressed up as advice — a real document you can hand to your team.",
    icon: BrainCircuit,
    accent: "indigo",
    goodFor: [
      "Thinking about AI but unsure where it'd actually pay off",
      "Evaluating an AI vendor and want an outside technical read",
      "An LLM pilot stuck in 'demo mode' for months",
      "A simple system in production nobody has independently checked",
    ],
    mailSubject: "Free AI Starter Audit — request",
  },
  {
    id: "stats-starter",
    title: "Free Stats Starter Audit",
    tagline: "A first read on your data work",
    pitch:
      "A short, written take on the data and decisions driving your business. If you have a dashboard, A/B test, or model, we give you our first read. If you don't yet, we tell you what you'd want to measure first. Either way, you leave with a document — not a meeting recap.",
    icon: LineChart,
    accent: "violet",
    goodFor: [
      "Plenty of data, no clear picture of what's worth measuring",
      "A dashboard or A/B test the team can't quite trust",
      "A business decision riding on a single statistical claim",
      "Wondering whether what you have is actually useful",
    ],
    mailSubject: "Free Stats Starter Audit — request",
  },
];

interface PaidSku {
  id: string;
  title: string;
  tagline: string;
  price: string;
  pitch: string;
  icon: typeof BrainCircuit;
  mailSubject: string;
}

const paidSkus: PaidSku[] = [
  {
    id: "ai-rigor",
    title: "AI Rigor Audit",
    tagline: "Deep, week-long technical audit",
    price: "$2,500 flat",
    pitch:
      "The full one-week version. We replicate findings, test edge cases, sanity-check assumptions, and put your system through the kind of independent review a board, buyer, or regulator can rely on. 8–12 page report, walkthrough call, replication notebooks.",
    icon: BrainCircuit,
    mailSubject: "Book AI Rigor Audit",
  },
  {
    id: "stats-deep",
    title: "Stats & Data Audit",
    tagline: "Deep, week-long statistical audit",
    price: "$2,500 flat",
    pitch:
      "The full one-week version. We dig into experiment design, modeling choices, causal claims, and the analyses driving decisions. 8–12 page report, walkthrough call, replication notebooks — defensible enough to put in front of a stakeholder who isn't already convinced.",
    icon: LineChart,
    mailSubject: "Book Stats & Data Audit",
  },
];

const cadence = [
  {
    day: "Day 0",
    title: "You send us a link or a few files",
    body: "One email. Tell us what you'd like a read on — a URL, a repo, a dashboard, a doc. We confirm within 12 hours and tell you what we'll need.",
  },
  {
    day: "Days 1–3",
    title: "We actually look at it",
    body: "Real review by a real human. We poke around, run the basics, sanity-check the parts that matter. No automated scan report copy-pasted into a PDF.",
  },
  {
    day: "Day 3–5",
    title: "Written audit lands in your inbox",
    body: "A short written audit (3–5 pages for the free tier) — what's working, what's broken, severity-ranked findings, and the first things we'd fix. PDF. Yours to keep. No slides.",
  },
  {
    day: "After",
    title: "Hire us, or don't",
    body: "If the findings convince you, we'll scope a build or a deeper paid audit. If they don't, you've still got a written technical opinion to use however you want. No follow-up emails unless you ask.",
  },
];

const deliverables = [
  "Short written audit (3–5 pages for free; 8–12 for paid) — written, not slide-decked",
  "Severity-ranked findings with concrete remediation steps",
  "Links, screenshots, or code snippets where they make the point clearer",
  "Reply to one round of follow-up questions over email",
  "Honest answer on whether we'd be the right fit for the fix — or whether you can do it yourselves",
];

const faqs = [
  {
    q: "Wait — actually free? What's the catch?",
    a: "Actually free. No card, no call required, no scoping deck, no '15-minute discovery' that turns into 45. The catch, if there is one, is that we hope you'll like the audit enough to hire us for the fix. If you don't, you keep the audit anyway — and we move on without follow-up emails.",
  },
  {
    q: "Why give away something most consultants charge for?",
    a: "Because most consultants' first deliverable is a proposal, and proposals are useless. A written audit is a real artifact you can act on — and it's a better sales pitch for us than any deck. We'd rather you read our actual work than our marketing copy.",
  },
  {
    q: "How is this different from a 'discovery call'?",
    a: "A discovery call gives you a sales pitch and a vague follow-up. A free audit gives you a written, defensible technical opinion you can hand to your team — whether or not you hire us. Same effort on our side, dramatically more useful for you.",
  },
  {
    q: "What's the difference between the free Starter audits and the paid $2,500 ones?",
    a: "Depth and defensibility. The free Starter audits are an honest first read — 3–5 pages, a few hours of senior time. They surface the obvious wins and the real risks. The paid AI and Stats audits ($2,500) are a full week of work — replication, edge cases, written rationale at the level a board, buyer, or regulator will accept. Most clients start with the free one and decide from there.",
  },
  {
    q: "How fast do you actually reply?",
    a: "Within 12 hours, from a real human (not an autoresponder). Most days it's faster. Reports typically land within 3–5 business days of you sending us what we need.",
  },
  {
    q: "What if you find nothing wrong?",
    a: "Then the audit says so, in writing, with the reasoning. That's a useful thing to hand to a board or a buyer too. We'd rather tell you everything is fine than invent problems to sell a fix.",
  },
  {
    q: "What if we want you to do the fix?",
    a: "Then we'll scope a build or a follow-on engagement. For websites, that's usually a flat-fee build or rebuild. For AI and stats work, we'll quote the engagement on a single email. No proposal phase, no procurement theater.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Standard mutual NDA, signed same day. If you have your own template, we'll sign it.",
  },
  {
    q: "Is there a limit on how big a system you'll look at for free?",
    a: "Yes, roughly. The free audit is a few hours of senior work, so giant codebases or sprawling AI platforms get a high-level read, not a line-by-line review. If you have something larger, the paid audit gives it the time it actually needs — but the free Starter tells you whether that's worth doing first.",
  },
];

function buildMailto(subject: string): string {
  const body =
    "Hi Eric and Jennye,%0D%0A%0D%0AI'd like to request the following:%0D%0A%0D%0A- Company:%0D%0A- What you'd like a read on (URL, repo, doc, dashboard, etc.):%0D%0A- Anything specific you're worried about:%0D%0A%0D%0AThanks!";
  return `mailto:info@jestats.io?subject=${encodeURIComponent(subject)}&body=${body}`;
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
  blue: {
    iconBg: "from-brand-blue/25 to-brand-indigo/15",
    rule: "via-brand-blue/40",
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
            eyebrow="Free audits"
            title={
              <>
                A written audit of your work —{" "}
                <span className="text-gradient">free.</span>
              </>
            }
            description="Send us your website, your AI pilot, or your data work. We'll send back a real written audit — what's broken, what's costing you, and what to fix first. No call required. No retainer. No catch. Hire us only if the findings convince you."
          />

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {[
              { icon: Sparkles, label: "Free — no strings" },
              { icon: Clock, label: "Written report in days" },
              { icon: FileText, label: "PDF you keep, decks you don't get" },
              { icon: MessageCircleReply, label: "Reply within 12 hours" },
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
          <div className="grid gap-6 md:grid-cols-3">
            {freeSkus.map((sku, i) => {
              const Icon = sku.icon;
              const accent = accentClasses[sku.accent];
              return (
                <div
                  key={sku.id}
                  className="glass-card group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.rule} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.iconBg} ring-1 ring-inset ring-white/10`}
                    >
                      <Icon className="h-5 w-5 text-brand-violet" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-violet/30 bg-brand-violet/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-brand-violet">
                      <Sparkles className="h-3 w-3" />
                      Free
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-mist-50">
                    {sku.title}
                  </h3>
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-brand-violet">
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
                    Request — it&apos;s free
                    <ChevronRight className="h-4 w-4" />
                  </a>
                  <p className="mt-3 text-center text-xs text-mist-400">
                    Opens your email — we&apos;ll reply within 12 hours.
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
            eyebrow="How it runs"
            title={
              <>
                Days, not weeks —{" "}
                <span className="text-gradient">no mystery.</span>
              </>
            }
            description="The same shape every time. You always know what's happening and when the report lands."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cadence.map((step, i) => (
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
                  Same shape, every audit.
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
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="When the free one isn't enough"
            title={
              <>
                Deeper audits, when the stakes{" "}
                <span className="text-gradient">need them.</span>
              </>
            }
            description="The free Starter audits handle most situations. When the answer has to survive a board, a buyer, or a regulator — these are the longer, defensible versions."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {paidSkus.map((sku) => {
              const Icon = sku.icon;
              return (
                <div
                  key={sku.id}
                  className="glass-card group relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-indigo/25 to-brand-purple/15 ring-1 ring-inset ring-white/10">
                      <Icon className="h-5 w-5 text-brand-violet" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-mist-200">
                      {sku.price}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-mist-50">
                    {sku.title}
                  </h3>
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-brand-violet">
                    {sku.tagline}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-mist-200">
                    {sku.pitch}
                  </p>
                  <a
                    href={buildMailto(sku.mailSubject)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-violet transition-colors hover:text-mist-50"
                  >
                    Book this audit
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
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
                  Request your free audit, or{" "}
                  <span className="text-gradient">just say hello.</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-300 sm:text-base">
                  Not sure which one fits? Send a one-line description of what
                  you&apos;d want looked at and we&apos;ll point you to the right
                  one — or tell you honestly that this isn&apos;t the right fit.
                </p>
              </div>
              <a
                href="mailto:info@jestats.io?subject=Question%20about%20the%20free%20audit"
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
