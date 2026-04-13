"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pressurePoints = [
  "Dashboards nobody trusts",
  "AI pilots stuck in demo mode",
  "Too much data, not enough signal",
];

const focusAreas = [
  { label: "Bayesian", x: "14%", y: "26%", delay: 0.25 },
  { label: "LLM systems", x: "70%", y: "18%", delay: 0.4 },
  { label: "Experiments", x: "78%", y: "54%", delay: 0.55 },
  { label: "Automation", x: "48%", y: "75%", delay: 0.7 },
  { label: "Forecasting", x: "16%", y: "64%", delay: 0.85 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36"
    >
      <div className="ambient-bg" aria-hidden />
      <div className="grid-overlay" aria-hidden />
      <div className="hero-beam" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3rem)] max-w-7xl items-center px-6">
        <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(26rem,0.95fr)] lg:items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-mist-200 backdrop-blur"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-brand-violet shadow-[0_0_18px_rgba(139,92,246,0.9)]" />
              J&amp;E Statistical Consulting
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
              className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-mist-400"
            >
              PhD-led statistics + AI systems
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" }}
              className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-mist-50 sm:text-6xl md:text-7xl lg:text-[5.75rem]"
            >
              Statistics.
              <br />
              AI.
              <br />
              <span className="text-gradient">No hand-waving.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-mist-300 sm:text-xl"
            >
              We help small and growing teams turn messy data, shaky experiments,
              and half-formed AI ideas into systems that actually hold up in the
              real world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-6 py-3 text-base font-medium text-white shadow-lg shadow-brand-indigo/25 transition-transform hover:scale-[1.03]"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#signals"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 text-base font-medium text-mist-100 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
              >
                See the signals
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
              className="mt-14 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3"
            >
              {pressurePoints.map((item) => (
                <div key={item} className="border-l border-white/10 pl-4">
                  <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-brand-violet">
                    Attention point
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-mist-200">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[34rem]"
          >
            <div className="signal-field">
              <div className="signal-ring signal-ring-lg" />
              <div className="signal-ring signal-ring-md" />
              <div className="signal-ring signal-ring-sm" />
              <div className="signal-axis signal-axis-a" />
              <div className="signal-axis signal-axis-b" />

              <motion.div
                animate={{ scale: [1, 1.04, 1], opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="signal-core"
              >
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mist-300">
                  Noise to signal
                </div>
                <div className="mt-3 font-display text-3xl font-semibold tracking-tight text-mist-50 sm:text-4xl">
                  Analysis
                  <br />
                  Infrastructure
                  <br />
                  Handoff
                </div>
              </motion.div>

              {focusAreas.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: item.delay,
                    ease: "easeOut",
                  }}
                  className="signal-node"
                  style={{ left: item.x, top: item.y }}
                >
                  <span className="signal-dot" />
                  <span className="signal-label">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
