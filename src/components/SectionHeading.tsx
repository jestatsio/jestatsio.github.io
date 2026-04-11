"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto max-w-2xl text-center"
    >
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-brand-violet">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-mist-50 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-mist-300 sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
