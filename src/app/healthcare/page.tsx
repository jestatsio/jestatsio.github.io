import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Beaker,
  FileCheck,
  Stethoscope,
} from "lucide-react";
import { DiagnosticCTA } from "@/components/DiagnosticCTA";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";
import { VerticalHero } from "@/components/VerticalHero";

export const metadata: Metadata = {
  title: "Healthcare AI & statistics consulting — J&E Statistical Consulting",
  description:
    "PhD-led audits, evaluations, and builds for healthcare and health-tech teams. Clinical LLMs, p-values, dashboards, regulatory-grade evaluation — done with rigor, not hype.",
  openGraph: {
    title: "Healthcare AI & statistics consulting — J&E Statistical Consulting",
    description:
      "PhD-led audits, evaluations, and builds for healthcare and health-tech teams.",
    url: "https://jestats.io/healthcare",
    type: "website",
  },
};

const pains = [
  "P-values driving clinical or operational decisions that nobody on the team can actually defend.",
  "An LLM pilot for clinical notes, intake, or coding that sounds great in demos but has no real evaluation harness.",
  "Dashboards mixing signal and noise — leadership can't tell which numbers to trust.",
  "An AI roadmap that has to survive a regulator, a board, and a clinical reviewer at the same time.",
];

const services = [
  {
    icon: Stethoscope,
    title: "Clinical LLM evaluation",
    body: "We design and ship the evaluation harness your clinical LLM should have had on day one — grounded against real ground truth, scored on the metrics that matter, repeatable on every release.",
  },
  {
    icon: Activity,
    title: "Statistical review of decisions",
    body: "A statistician's read on the analyses you're betting on: experimental design, sample size, confounders, model assumptions, dashboard logic. You leave knowing which numbers actually hold.",
  },
  {
    icon: Beaker,
    title: "AI + ML build, end-to-end",
    body: "Production AI built with the rigor a clinical setting demands: documented assumptions, public-style evaluation, monitoring for drift, and a handoff that leaves your team more capable, not more dependent.",
  },
  {
    icon: FileCheck,
    title: "Audit-ready documentation",
    body: "Written reports your compliance, legal, and clinical reviewers can actually read. No slide decks. No vibes. The kind of artifact you can hand to an auditor.",
  },
];

export default function HealthcarePage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <VerticalHero
        eyebrow="For healthcare and health-tech"
        title={
          <>
            Clinical AI and statistics{" "}
            <span className="text-gradient">that earn their trust.</span>
          </>
        }
        description="When a number drives a clinical or operational decision, the math under it has to actually hold. We're a PhD statistician and a strategist building AI and statistical systems for healthcare teams that need rigor more than they need theater."
        painPoints={pains}
      />

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="What we do for healthcare teams"
            title={
              <>
                Four shapes the work usually{" "}
                <span className="text-gradient">takes.</span>
              </>
            }
            description="Whether you're a Series A health-tech, a regional system's analytics team, or a clinical group running pilots — these are the shapes we plug into."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="glass-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-violet/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-indigo/20 to-brand-purple/20 ring-1 ring-inset ring-white/10">
                    <Icon className="h-5 w-5 text-brand-violet" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-mist-50">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-300">
                    {service.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-brand-indigo/10 to-transparent blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-brand-violet">
                  Proof — built, live, in public
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
                  We built{" "}
                  <span className="text-gradient">Aeroza</span> — and we score
                  its forecasts in public.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist-300 sm:text-base">
                  Aeroza is our public weather-intelligence API. Every forecast
                  it produces is scored against reality openly — MAE, bias,
                  RMSE published live. It's the same evaluation rigor we bring
                  to clinical AI work: if the model is wrong, you'll know,
                  measured the same way every time.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/built"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-mist-100 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    See all our shipped work
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-mist-400">
                  Why this matters for clinical AI
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-mist-200">
                  <li>
                    Evaluations run the same way every release — no
                    cherry-picked demos.
                  </li>
                  <li>
                    Errors are visible and quantified, not hidden behind
                    success stories.
                  </li>
                  <li>
                    The harness lives on past us — your team owns it after
                    handoff.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 pb-28 sm:pb-36">
        <div className="mx-auto max-w-5xl px-6">
          <DiagnosticCTA
            variant="banner"
            headline="Start with a clinical AI or stats audit."
            subhead="One week. Fixed fee. Written report your compliance and clinical reviewers can read. No slides."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
