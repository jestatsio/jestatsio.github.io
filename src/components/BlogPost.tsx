"use client";

import { motion } from "framer-motion";

interface BlogPostHeroProps {
  tags: string[];
  date: string;
  author: string;
  title: React.ReactNode;
  lede: string;
}

export function BlogPostHero({
  tags,
  date,
  author,
  title,
  lede,
}: BlogPostHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44 sm:pb-16">
      <div className="ambient-bg" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-mist-400"
        >
          {tags.map((tag) => (
            <span key={tag} className="text-brand-violet">
              {tag}
            </span>
          ))}
          <span className="text-mist-600">·</span>
          <span>{date}</span>
          <span className="text-mist-600">·</span>
          <span>{author}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-mist-50 sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
          className="mt-6 text-base leading-relaxed text-mist-300 sm:text-lg"
        >
          {lede}
        </motion.p>
      </div>
    </section>
  );
}

interface BlogBodyProps {
  children: React.ReactNode;
}

export function BlogBody({ children }: BlogBodyProps) {
  return (
    <section className="relative pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="blog-body space-y-6 text-base leading-relaxed text-mist-200 sm:text-lg sm:leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

interface BlogH2Props {
  children: React.ReactNode;
}

export function BlogH2({ children }: BlogH2Props) {
  return (
    <h2 className="!mt-12 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
      {children}
    </h2>
  );
}
