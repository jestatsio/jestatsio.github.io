"use client";

import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./LogoMark";

type DropdownKey = "services" | "work" | null;

interface NavItem {
  href: string;
  label: string;
  description?: string;
}

interface NavSection {
  heading?: string;
  items: NavItem[];
}

const servicesSections: NavSection[] = [
  {
    heading: "What we do",
    items: [
      {
        href: "/diagnostic",
        label: "The Diagnostic",
        description: "Fixed-fee audits & roadmaps in a week — from $1,500",
      },
      {
        href: "/local-web",
        label: "Local Web",
        description: "WordPress & Elementor builds, rescues, care plans",
      },
    ],
  },
  {
    heading: "By industry",
    items: [
      {
        href: "/healthcare",
        label: "Healthcare",
        description: "Clinical AI, stats, evaluation",
      },
      {
        href: "/legal-ai",
        label: "Legal AI",
        description: "RAG, document AI, defensible analyses",
      },
      {
        href: "/lake-stevens",
        label: "Lake Stevens (local)",
        description: "For Snohomish County businesses",
      },
    ],
  },
];

const workSections: NavSection[] = [
  {
    items: [
      {
        href: "/built",
        label: "Built",
        description: "Live products we've shipped",
      },
      {
        href: "/work",
        label: "Case studies",
        description: "Engagement writeups",
      },
      {
        href: "/blog",
        label: "Writing",
        description: "Long-form posts",
      },
    ],
  },
];

const directLinks: NavItem[] = [
  { href: "/#about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const toggle = (key: Exclude<DropdownKey, null>) => {
    setOpen((cur) => (cur === key ? null : key));
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-5" ref={navRef}>
        <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-ink-950/70 px-5 py-3 backdrop-blur-md">
          <Link href="/" className="group flex items-center gap-2">
            <LogoMark
              alt=""
              size={40}
              className="h-10 w-10 rounded-xl border border-white/10 shadow-lg shadow-brand-indigo/20"
            />
            <span className="hidden font-display text-sm font-semibold tracking-tight text-mist-100 sm:inline">
              Statistical Consulting
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <DropdownTrigger
              label="Services"
              isOpen={open === "services"}
              onOpen={() => setOpen("services")}
              onToggle={() => toggle("services")}
            >
              <DropdownPanel sections={servicesSections} />
            </DropdownTrigger>

            <DropdownTrigger
              label="Work"
              isOpen={open === "work"}
              onOpen={() => setOpen("work")}
              onToggle={() => toggle("work")}
            >
              <DropdownPanel sections={workSections} />
            </DropdownTrigger>

            {directLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setOpen(null)}
                className="px-3 py-2 text-sm text-mist-300 transition-colors hover:text-mist-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden rounded-lg bg-gradient-to-r from-brand-indigo to-brand-purple px-4 py-2 text-sm font-medium text-white shadow-md shadow-brand-indigo/20 transition-transform hover:scale-[1.03] md:inline-flex"
            >
              Let&apos;s talk
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-mist-100 transition-colors hover:bg-white/[0.06] md:hidden"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/5 bg-ink-950/95 backdrop-blur-md md:hidden">
            <MobileMenu />
          </div>
        )}
      </div>
    </motion.header>
  );
}

interface DropdownTriggerProps {
  label: string;
  isOpen: boolean;
  onOpen: () => void;
  onToggle: () => void;
  children: React.ReactNode;
}

function DropdownTrigger({
  label,
  isOpen,
  onOpen,
  onToggle,
  children,
}: DropdownTriggerProps) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`inline-flex items-center gap-1 px-3 py-2 text-sm transition-colors ${
          isOpen ? "text-mist-50" : "text-mist-300 hover:text-mist-50"
        }`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 pt-2">{children}</div>
      )}
    </div>
  );
}

function DropdownPanel({ sections }: { sections: NavSection[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="min-w-[22rem] overflow-hidden rounded-2xl border border-white/10 bg-ink-950/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-md"
    >
      {sections.map((section, i) => (
        <div key={i}>
          {section.heading && (
            <div className="px-3 pb-1.5 pt-3 font-mono text-[0.55rem] uppercase tracking-[0.24em] text-mist-400">
              {section.heading}
            </div>
          )}
          {section.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.04]"
            >
              <div className="text-sm font-medium text-mist-100">
                {item.label}
              </div>
              {item.description && (
                <div className="mt-0.5 text-xs leading-relaxed text-mist-400">
                  {item.description}
                </div>
              )}
            </Link>
          ))}
          {i < sections.length - 1 && (
            <div className="my-1 border-t border-white/5" />
          )}
        </div>
      ))}
    </motion.div>
  );
}

function MobileMenu() {
  return (
    <div className="divide-y divide-white/5">
      <MobileSection title="Services" sections={servicesSections} />
      <MobileSection title="Work" sections={workSections} />
      <div className="px-3 py-3">
        {directLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-mist-100 transition-colors hover:bg-white/[0.04]"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="px-4 py-4">
        <Link
          href="/#contact"
          className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-brand-indigo to-brand-purple px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-brand-indigo/20"
        >
          Let&apos;s talk
        </Link>
      </div>
    </div>
  );
}

interface MobileSectionProps {
  title: string;
  sections: NavSection[];
}

function MobileSection({ title, sections }: MobileSectionProps) {
  return (
    <div className="px-3 py-3">
      <div className="mb-2 px-3 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-brand-violet">
        {title}
      </div>
      {sections.map((section, i) => (
        <div key={i} className={i > 0 ? "mt-2" : ""}>
          {section.heading && (
            <div className="mt-1 mb-1 px-3 font-mono text-[0.55rem] uppercase tracking-[0.22em] text-mist-400">
              {section.heading}
            </div>
          )}
          {section.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-mist-200 transition-colors hover:bg-white/[0.04] hover:text-mist-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
