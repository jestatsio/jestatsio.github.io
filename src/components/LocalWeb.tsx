"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Hammer,
  KeyRound,
  MapPin,
  Phone,
  Receipt,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const audience = [
  "Contractors",
  "HVAC",
  "Roofers",
  "Plumbers",
  "Electricians",
  "Landscapers",
  "Realtors",
  "Restaurants",
  "Salons",
  "Auto shops",
];

const features = [
  {
    icon: Gauge,
    title: "Fast, found, finished.",
    description:
      "Modern stack, instant page loads, and the local-SEO basics actually wired up — schema, sitemap, Google Business — so customers searching at 9pm on a Tuesday can find you.",
  },
  {
    icon: Phone,
    title: "Built to convert, not to decorate.",
    description:
      "Click-to-call on every page, clear quote forms, service areas, hours, real photos. The goal is more booked jobs, not more bounce.",
  },
  {
    icon: KeyRound,
    title: "You own everything.",
    description:
      "Your domain, your code, your content, your inbox. No CMS we control, no proprietary builder, no platform that holds your site hostage when the bill arrives.",
  },
  {
    icon: Receipt,
    title: "Pay once, mostly.",
    description:
      "One flat build, then a small monthly for hosting and care — or none at all if you'd rather host it yourself. No retainer, no surprise upsells, no eight-page agency contract.",
  },
];

export function LocalWeb() {
  return (
    <section id="local-web" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Also on the menu"
          title={
            <>
              Websites for the businesses that{" "}
              <span className="text-gradient">keep towns running.</span>
            </>
          }
          description="Outside of the AI and stats work, we build modern, fast, conversion-focused websites for local trades and small businesses — no agency markup, no template bloat, no subscriptions you can't escape."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-mist-300">
            <MapPin className="h-3 w-3 text-brand-violet" />
            Built for
          </span>
          {audience.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-mist-300"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="glass-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 ring-1 ring-inset ring-white/10">
                <feature.icon className="h-5 w-5 text-brand-violet" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-mist-50">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:flex-row sm:items-center"
        >
          <div className="flex items-start gap-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-indigo/30 to-brand-purple/30 ring-1 ring-inset ring-white/10">
              <Hammer className="h-5 w-5 text-brand-violet" />
            </div>
            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-brand-violet">
                Plain pricing
              </div>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-200 sm:text-base">
                Most local sites land between a single flat fee for a focused
                build and a small monthly for hosting and care. We&apos;ll quote
                the number on the first call — no proposals, no decks.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-medium text-mist-100 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
          >
            Get a quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
