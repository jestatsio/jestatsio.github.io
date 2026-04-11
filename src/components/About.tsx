"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const team = [
  {
    initials: "EH",
    name: "Eric Hare, PhD",
    role: "Co-founder · Technical Lead",
    bio: "PhD in Statistics and Computer Science. Eric builds the models, the pipelines, and the AI systems — and makes sure the math underneath is actually sound.",
  },
  {
    initials: "JC",
    name: "Jennye Cooper",
    role: "Co-founder · Strategy & Growth",
    bio: "Masters in Digital Marketing. Jennye turns technical capability into business outcomes — positioning, messaging, and the go-to-market motion that makes projects land.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Who we are"
          title={
            <>
              Two founders. One{" "}
              <span className="text-gradient">complementary pair.</span>
            </>
          }
          description="Deep technical expertise plus the strategic lens to make it matter. That's the whole pitch."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-5">
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-indigo to-brand-purple font-display text-lg font-bold text-white shadow-lg shadow-brand-indigo/25">
                  {member.initials}
                </div>
                <div>
                  <div className="font-display text-xl font-semibold text-mist-50">
                    {member.name}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-mist-400">
                    {member.role}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-mist-300">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
