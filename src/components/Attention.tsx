"use client";

import { motion } from "framer-motion";

const moments = [
  {
    number: "01",
    title: "You have the data, but the room still feels unconvinced.",
    description:
      "The dashboard exists. The confidence does not. We help teams get from surface metrics to answers they can actually act on.",
    tag: "analysis",
  },
  {
    number: "02",
    title: "You have an AI idea, but it is still trapped in prototype energy.",
    description:
      "We turn fuzzy concepts into practical workflows, clear architecture, and deployments that survive real usage.",
    tag: "infrastructure",
  },
  {
    number: "03",
    title: "You ran the experiment, but the result still feels slippery.",
    description:
      "When the stakes are real, you need more than a p-value screenshot. We bring design, modeling, and interpretation together.",
    tag: "rigor",
  },
  {
    number: "04",
    title: "You need outside help without creating a long-term dependency.",
    description:
      "We build with handoff in mind so your team leaves with working systems, clear logic, and less guesswork than before.",
    tag: "handoff",
  },
];

export function Attention() {
  return (
    <section id="signals" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="font-mono text-xs uppercase tracking-[0.24em] text-brand-violet">
            Why teams call us
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-mist-50 sm:text-4xl md:text-5xl">
            Usually not when everything is calm.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300 sm:text-lg">
            The best-fit projects tend to start in a moment of ambiguity:
            too much noise, too little confidence, and a team that needs the
            next move to be both technical and practical.
          </p>
        </motion.div>

        <div className="mt-14 border-t border-white/10">
          {moments.map((moment, index) => (
            <motion.article
              key={moment.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
              className="group grid gap-5 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:items-start sm:gap-8"
            >
              <div className="font-mono text-xs tracking-[0.26em] text-brand-violet/80">
                {moment.number}
              </div>
              <div>
                <h3 className="max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight text-mist-50 sm:text-[2rem]">
                  {moment.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist-300 sm:text-base">
                  {moment.description}
                </p>
              </div>
              <div className="justify-self-start rounded-full border border-white/10 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-mist-300 sm:mt-1 sm:justify-self-end">
                {moment.tag}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
