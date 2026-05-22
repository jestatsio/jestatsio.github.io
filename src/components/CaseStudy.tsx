"use client";

import { motion } from "framer-motion";

interface CaseStudyHeroProps {
  vertical: string;
  date: string;
  title: React.ReactNode;
  oneLiner: string;
  draft?: boolean;
}

export function CaseStudyHero({
  vertical,
  date,
  title,
  oneLiner,
  draft = false,
}: CaseStudyHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44 sm:pb-16">
      <div className="ambient-bg" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-6">
        {draft && (
          <div className="mb-8 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] px-5 py-3 text-sm text-amber-200/80">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-amber-200/80">
              Template
            </span>
            <span className="ml-3">
              This is an example case study showing the layout — not a real
              engagement.
            </span>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-mist-400"
        >
          <span className="text-brand-violet">{vertical}</span>
          <span className="text-mist-600">·</span>
          <span>{date}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-mist-50 sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
          className="mt-6 text-base leading-relaxed text-mist-300 sm:text-lg"
        >
          {oneLiner}
        </motion.p>
      </div>
    </section>
  );
}

interface CaseStudySectionProps {
  label: string;
  title: string;
  children: React.ReactNode;
}

export function CaseStudySection({
  label,
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="relative py-12 sm:py-14">
      <div className="mx-auto max-w-3xl px-6">
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-brand-violet">
          {label}
        </div>
        <h2 className="mt-3 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
          {title}
        </h2>
        <div className="prose-cs mt-6 space-y-4 text-base leading-relaxed text-mist-200">
          {children}
        </div>
      </div>
    </section>
  );
}

interface FindingProps {
  headline: string;
  detail: string;
}

export function CaseStudyFinding({ headline, detail }: FindingProps) {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="font-display text-lg font-semibold text-mist-50">
        {headline}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-mist-300">{detail}</p>
    </div>
  );
}
