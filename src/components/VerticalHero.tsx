"use client";

import { motion } from "framer-motion";

interface VerticalHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  painPoints: string[];
}

export function VerticalHero({
  eyebrow,
  title,
  description,
  painPoints,
}: VerticalHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div className="ambient-bg" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-xs uppercase tracking-[0.24em] text-brand-violet"
        >
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-mist-50 sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-mist-300 sm:text-lg"
        >
          {description}
        </motion.p>

        {painPoints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: "easeOut" }}
            className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2"
          >
            {painPoints.map((point) => (
              <div key={point} className="border-l border-white/10 pl-4">
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-brand-violet">
                  Pain we own
                </div>
                <p className="mt-2 text-sm leading-relaxed text-mist-200">
                  {point}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
