"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

export interface BuiltProjectData {
  name: string;
  tagline: string;
  description: string;
  url: string;
  icon: LucideIcon;
  accent: "indigo" | "violet" | "blue";
  stack: string[];
  proves: string;
  status?: "live" | "in-progress";
}

interface BuiltProjectProps {
  project: BuiltProjectData;
  index: number;
}

const accentMap: Record<
  BuiltProjectData["accent"],
  { iconBg: string; rule: string; glow: string }
> = {
  indigo: {
    iconBg: "from-brand-indigo/25 to-brand-blue/15",
    rule: "via-brand-indigo/40",
    glow: "from-brand-indigo/10",
  },
  violet: {
    iconBg: "from-brand-violet/25 to-brand-purple/15",
    rule: "via-brand-violet/40",
    glow: "from-brand-violet/10",
  },
  blue: {
    iconBg: "from-brand-blue/25 to-brand-indigo/15",
    rule: "via-brand-blue/40",
    glow: "from-brand-blue/10",
  },
};

export function BuiltProject({ project, index }: BuiltProjectProps) {
  const Icon = project.icon;
  const accent = accentMap[project.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="glass-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 sm:p-10"
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.rule} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${accent.glow} to-transparent opacity-50 blur-3xl`}
      />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="flex shrink-0 items-start gap-5">
          <div
            className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.iconBg} ring-1 ring-inset ring-white/10`}
          >
            <Icon className="h-6 w-6 text-brand-violet" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
            <h3 className="font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
              {project.name}
            </h3>
            {project.status === "in-progress" && (
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.22em] text-mist-400">
                Writeup in progress
              </span>
            )}
          </div>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.22em] text-brand-violet">
            {project.tagline}
          </p>

          <p className="mt-5 text-sm leading-relaxed text-mist-200 sm:text-base">
            {project.description}
          </p>

          {project.stack.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-xs text-mist-300"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-mist-400">
              What this proves
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-mist-200">
              {project.proves}
            </p>
          </div>

          <div className="mt-7">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-mist-100 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
            >
              View {project.name}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
