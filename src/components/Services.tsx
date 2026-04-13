"use client";

import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: BrainCircuit,
    title: "AI Infrastructure",
    description:
      "Design and deploy production-grade LLM pipelines, RAG systems, and AI agents. We build on modern frameworks — LangChain, LangGraph, OpenAI, Anthropic — with the rigor of a stats PhD behind every decision.",
  },
  {
    icon: LineChart,
    title: "Data Analysis & Statistics",
    description:
      "From experimental design to Bayesian modeling to causal inference. We translate business questions into statistical ones — and back into answers you can act on.",
  },
  {
    icon: Wrench,
    title: "AI Tools & Integration",
    description:
      "Custom internal tools, automations, and dashboards that plug AI into the workflows your team already uses. No AI theater — just practical leverage.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              What we build once the{" "}
              <span className="text-gradient">problem is clear.</span>
            </>
          }
          description="We keep the menu short on purpose. The work tends to fall into three buckets, and we go deep on each one."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="glass-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-violet/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-indigo/20 to-brand-purple/20 ring-1 ring-inset ring-white/10">
                <service.icon className="h-5 w-5 text-brand-violet" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-mist-50">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
