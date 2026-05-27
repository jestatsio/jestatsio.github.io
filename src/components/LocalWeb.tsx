"use client";

import { motion } from "framer-motion";
import {
  Code2,
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
    icon: Code2,
    title: "Modern stack, real engineers.",
    description:
      "We build the way good software gets built — Next.js or WordPress + Elementor depending on what fits, version-controlled, properly typed, properly tested. No drag-and-drop spaghetti, no AI-generated mush. The codebase is something a working developer would actually be happy to inherit.",
  },
  {
    icon: Gauge,
    title: "Genuinely fast.",
    description:
      "Pages load in well under a second on real phones, not just on a flattering test rig. Lighthouse scores in the 90s, Core Web Vitals in the green, images and fonts optimized properly. Speed is the cheapest UX upgrade you can buy — and a lot of sites quietly skip it.",
  },
  {
    icon: Phone,
    title: "Built to convert, not to decorate.",
    description:
      "Click-to-call on every page, clear quote forms, service areas, hours, real photos. Search basics (schema, sitemaps, Google Business) wired up properly. The goal is more booked jobs, not more bounce.",
  },
  {
    icon: KeyRound,
    title: "You own everything.",
    description:
      "Your domain, your code, your content, your inbox. No CMS we control, no proprietary builder, no platform that holds your site hostage when the bill arrives. Walk away anytime and the site walks with you.",
  },
  {
    icon: Receipt,
    title: "Pay once, mostly.",
    description:
      "One flat build, then a small monthly for hosting and care if you want it — or none at all if you'd rather host it yourself. No retainer, no surprise upsells, no eight-page agency contract.",
  },
  {
    icon: Hammer,
    title: "Rebuilds, not band-aids.",
    description:
      "If your current site is slow, dated, or held together with plugin duct tape, we rebuild it properly — and 301-redirect everything so you don't lose what you already have. Sometimes the right answer is to start clean.",
  },
];

export function LocalWeb() {
  return (
    <section id="local-web" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Web development"
          title={
            <>
              Modern websites for the businesses that{" "}
              <span className="text-gradient">keep towns running.</span>
            </>
          }
          description="Real web development — modern stack, properly engineered, owned by you — for local businesses and small teams. We pick the right tool for the job: Next.js when it earns its keep, WordPress + Elementor when that's the better fit. No agency markup, no template bloat, no subscriptions you can't escape."
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
                Start with a free audit
              </div>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-200 sm:text-base">
                Already have a site? Get a free written audit first —
                what&apos;s slow, what&apos;s leaking leads, and what we&apos;d
                fix before anything else. Then decide whether a rebuild makes
                sense.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/diagnostic"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-5 py-3 text-sm font-medium text-white shadow-md shadow-brand-indigo/20 transition-transform hover:scale-[1.03]"
            >
              Free website audit
            </a>
            <a
              href="/local-web"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-medium text-mist-100 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              See build options
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
