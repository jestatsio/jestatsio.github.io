"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Discover",
    description:
      "A short call to understand your data, your goals, and your constraints. No sales pitch — we either fit or we don't.",
  },
  {
    n: "02",
    title: "Design",
    description:
      "We scope a focused engagement with clear deliverables. Small enough to finish, big enough to matter.",
  },
  {
    n: "03",
    title: "Build",
    description:
      "We execute quickly with regular check-ins. You see progress in weeks, not quarters.",
  },
  {
    n: "04",
    title: "Hand off",
    description:
      "Documented code, clear explanations, and training so your team can own what we built. No black boxes.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A process built for{" "}
              <span className="text-gradient">momentum.</span>
            </>
          }
          description="Small engagements, fast feedback, real hand-off. We optimize for leaving you more capable, not more dependent."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="relative"
            >
              <div className="glass-card h-full rounded-2xl p-6">
                <div className="font-mono text-xs text-brand-violet">{step.n}</div>
                <div className="mt-2 font-display text-lg font-semibold text-mist-50">
                  {step.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mist-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
