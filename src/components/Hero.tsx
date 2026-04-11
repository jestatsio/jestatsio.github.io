"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-40">
      <div className="ambient-bg" aria-hidden />
      <div className="grid-overlay" aria-hidden />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-mist-200 backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand-violet" />
          <span className="font-mono uppercase tracking-wider">PhD-led · AI &amp; Statistics Consulting</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-8 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-mist-50 sm:text-6xl md:text-7xl"
        >
          Statistics meets{" "}
          <span className="text-gradient">AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist-300 sm:text-xl"
        >
          Expert data analysis and AI infrastructure for teams ready to move fast.
          We help small and growing businesses turn messy data into decisions — and ideas into deployed AI systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-6 py-3 text-base font-medium text-white shadow-lg shadow-brand-indigo/25 transition-transform hover:scale-[1.03]"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 text-base font-medium text-mist-100 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
          >
            What we do
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/5 pt-8 sm:grid-cols-4"
        >
          <Stat label="PhD-led" value="Stats + CS" />
          <Stat label="Founded" value="2024" />
          <Stat label="Focus" value="AI + Data" />
          <Stat label="Based" value="Remote" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-left sm:text-center">
      <div className="font-mono text-[0.65rem] uppercase tracking-widest text-mist-400">{label}</div>
      <div className="mt-1 font-display text-base font-medium text-mist-100">{value}</div>
    </div>
  );
}
