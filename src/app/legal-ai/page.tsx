import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  FileSearch,
  Library,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { DiagnosticCTA } from "@/components/DiagnosticCTA";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";
import { VerticalHero } from "@/components/VerticalHero";

export const metadata: Metadata = {
  title: "Legal AI consulting — J&E Statistical Consulting",
  description:
    "PhD-led AI and statistics work for law firms and legal-tech teams. RAG evaluation, document review systems, defensible analyses — built with rigor, not vibes.",
  openGraph: {
    title: "Legal AI consulting — J&E Statistical Consulting",
    description:
      "PhD-led AI and statistics work for law firms and legal-tech teams.",
    url: "https://jestats.io/legal-ai",
    type: "website",
  },
};

const pains = [
  "A document-review LLM that retrieves confidently — and citationally wrong — too often to trust.",
  "An AI vendor pitch that nobody on your team has the depth to actually stress-test.",
  "Analyses (forecasts, billings, settlements, outcomes) running in Excel that need a defensible methodology.",
  "Generalist devs shipping legal AI without the eval rigor a deposition would survive.",
];

const services = [
  {
    icon: FileSearch,
    title: "RAG & document-AI evaluation",
    body: "We design retrieval and grounding evaluations the way a litigator would design discovery: every claim has to point back to a source, every error has to be reproducible, and every release is scored the same way.",
  },
  {
    icon: Scale,
    title: "Defensible statistical analyses",
    body: "From settlement modeling to outcome forecasting to billing anomaly detection — analyses with documented assumptions, sensitivity tests, and a methodology a partner or expert witness can stand behind.",
  },
  {
    icon: Library,
    title: "Legal AI builds, end-to-end",
    body: "Custom RAG, agentic document workflows, intake automation — built once, owned by you, documented like it'll be audited. No black-box vendor lock.",
  },
  {
    icon: ShieldCheck,
    title: "AI vendor due diligence",
    body: "Before you sign the contract or roll it out firm-wide: an outside, technical read on the system. What it does well, where it'll fail, and what guarantees the vendor can or can't make.",
  },
];

export default function LegalAIPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <VerticalHero
        eyebrow="For law firms and legal-tech"
        title={
          <>
            Legal AI that would{" "}
            <span className="text-gradient">survive a deposition.</span>
          </>
        }
        description="Document-heavy work is where AI lands hardest in legal — and where most pilots quietly fail evaluation. We're a PhD statistician and a strategist building and auditing the AI and analytical systems behind defensible legal work."
        painPoints={pains}
      />

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="How we plug into legal teams"
            title={
              <>
                Four shapes the work usually{" "}
                <span className="text-gradient">takes.</span>
              </>
            }
            description="Mid-sized firms, legal-tech startups, in-house teams — these are the shapes we engage in."
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
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-brand-violet/10 to-transparent blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-brand-violet">
                  Proof — domain-specific systems, shipped
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
                  We built{" "}
                  <span className="text-gradient">Bullet Lens</span> —
                  forensic ballistics in the browser.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist-300 sm:text-base">
                  Bullet Lens is a 3D forensic-ballistics viewer integrating
                  with NIST standards, with scored model comparison and
                  privacy-by-default architecture (files stay client-side). The
                  same discipline — domain-specific evidence, defensible
                  scoring, traceable methodology — is what serious legal AI
                  also needs.
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
                  Why this matters for legal AI
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-mist-200">
                  <li>
                    Every output traces back to evidence — no unsourced
                    claims.
                  </li>
                  <li>
                    Privacy-first by default; sensitive content doesn't leave
                    your environment unless you choose.
                  </li>
                  <li>
                    Comparison and scoring are reproducible — the kind of thing
                    you can put in front of opposing counsel.
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
            headline="Start with a legal AI or document-system audit."
            subhead="One week. Fixed fee. Written report you can hand to partners, IT, or vendors. No slides."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
