"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LogoMark } from "./LogoMark";

const links = [
  { href: "/#signals", label: "Signals" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/built", label: "Built" },
  { href: "/#local-web", label: "Local web" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-ink-950/60 px-5 py-3 backdrop-blur-md">
          <Link href="/" className="group flex items-center gap-2">
            <LogoMark
              alt=""
              size={40}
              className="h-10 w-10 rounded-xl border border-white/10 shadow-lg shadow-brand-indigo/20"
            />
            <span className="hidden font-display text-sm font-semibold tracking-tight text-mist-100 sm:inline">
              Statistical Consulting
            </span>
            <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.24em] text-mist-400 lg:inline">
              Stats + AI
            </span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-mist-300 transition-colors hover:text-mist-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#contact"
            className="rounded-lg bg-gradient-to-r from-brand-indigo to-brand-purple px-4 py-2 text-sm font-medium text-white shadow-md shadow-brand-indigo/20 transition-transform hover:scale-[1.03]"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
