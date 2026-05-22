import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { DiagnosticCTA } from "@/components/DiagnosticCTA";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Case studies — J&E Statistical Consulting",
  description:
    "Written case studies of our recent diagnostic, audit, and build engagements. Healthcare, legal, and WordPress work.",
  openGraph: {
    title: "Case studies — J&E Statistical Consulting",
    description:
      "Written case studies of our recent diagnostic, audit, and build engagements.",
    url: "https://jestats.io/work",
    type: "website",
  },
};

interface CaseStudyCard {
  href: string | null;
  vertical: string;
  date: string;
  title: string;
  summary: string;
  status: "live" | "drafting";
}

const studies: CaseStudyCard[] = [
  {
    href: "/work/example-clinical-llm-audit",
    vertical: "Template",
    date: "—",
    title: "What a written audit actually looks like",
    summary:
      "A walkthrough of the layout and depth of our written audits — using a representative (not real) clinical-LLM engagement as the example.",
    status: "live",
  },
  {
    href: null,
    vertical: "Healthcare",
    date: "Drafting",
    title: "Stress-testing a clinical LLM pilot before go-live",
    summary:
      "Coming soon — anonymized writeup of a recent clinical-AI rigor audit. Findings, methodology, and recommendations.",
    status: "drafting",
  },
  {
    href: null,
    vertical: "Local WordPress",
    date: "Drafting",
    title: "Before / after: a 9-second WordPress site rebuilt in five days",
    summary:
      "Coming soon — PageSpeed before/after, conversion impact, and the technical changes Jennye made during a Rescue / Rebuild engagement.",
    status: "drafting",
  },
];

export default function WorkIndexPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="ambient-bg" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Case studies"
            title={
              <>
                The work,{" "}
                <span className="text-gradient">written down.</span>
              </>
            }
            description="Every engagement ends in a written artifact. Some of those get adapted into public case studies — anonymized where it matters, technical where it counts."
          />
        </div>
      </section>

      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-5">
            {studies.map((study, i) => {
              const cardClasses =
                "glass-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-300";
              const interactive = study.href
                ? "hover:-translate-y-1"
                : "opacity-80";

              const inner = (
                <>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.22em]">
                    <span className="text-brand-violet">{study.vertical}</span>
                    <span className="text-mist-600">·</span>
                    <span className="text-mist-400">{study.date}</span>
                    {study.status === "drafting" && (
                      <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.22em] text-mist-300">
                        <Clock className="h-3 w-3 text-brand-violet" />
                        In progress
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-mist-50 sm:text-2xl">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-300 sm:text-base">
                    {study.summary}
                  </p>
                  {study.href && (
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-mist-100">
                      Read the writeup
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  )}
                </>
              );

              return study.href ? (
                <Link
                  key={i}
                  href={study.href}
                  className={`${cardClasses} ${interactive}`}
                >
                  {inner}
                </Link>
              ) : (
                <div key={i} className={`${cardClasses} ${interactive}`}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-28 sm:pb-36">
        <div className="mx-auto max-w-5xl px-6">
          <DiagnosticCTA
            variant="banner"
            headline="Want to be a case study?"
            subhead="Start with a one-week diagnostic. Most engagements produce something we can write about — anonymized at your call."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
