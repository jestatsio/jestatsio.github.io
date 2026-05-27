"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, FileText, Sparkles } from "lucide-react";

interface DiagnosticCTAProps {
  variant?: "card" | "banner";
  headline?: string;
  subhead?: string;
  eyebrow?: string;
  ctaLabel?: string;
}

export function DiagnosticCTA({
  variant = "card",
  headline = "Start with a free audit.",
  subhead = "Real written findings, not a sales call. No retainer. No catch.",
  eyebrow = "Free audit",
  ctaLabel = "Get your free audit",
}: DiagnosticCTAProps) {
  const facts = [
    { icon: Sparkles, label: "Free — no strings" },
    { icon: Clock, label: "Days, not weeks" },
    { icon: FileText, label: "Written report you keep" },
  ];

  if (variant === "banner") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-indigo/10 via-transparent to-brand-purple/10 p-7 sm:p-8"
      >
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-brand-violet">
              {eyebrow}
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold text-mist-50 sm:text-2xl">
              {headline}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-300">
              {subhead}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {facts.map((fact) => (
                <span
                  key={fact.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-mist-200"
                >
                  <fact.icon className="h-3.5 w-3.5 text-brand-violet" />
                  {fact.label}
                </span>
              ))}
            </div>
          </div>
          <a
            href="/diagnostic"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-5 py-3 text-sm font-medium text-white shadow-md shadow-brand-indigo/20 transition-transform hover:scale-[1.03]"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="glass-card rounded-2xl p-7"
    >
      <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-brand-violet">
        {eyebrow}
      </div>
      <h3 className="mt-2 font-display text-xl font-semibold text-mist-50">
        {headline}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mist-300">{subhead}</p>
      <div className="mt-5 flex flex-col gap-2.5">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="inline-flex items-center gap-3 text-sm text-mist-200"
          >
            <fact.icon className="h-4 w-4 shrink-0 text-brand-violet" />
            {fact.label}
          </div>
        ))}
      </div>
      <a
        href="/diagnostic"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-5 py-3 text-sm font-medium text-white shadow-md shadow-brand-indigo/20 transition-transform hover:scale-[1.03]"
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}
