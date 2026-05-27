import Link from "next/link";
import { LogoMark } from "./LogoMark";

const links = [
  { href: "/diagnostic", label: "Free audits" },
  { href: "/local-web", label: "Web development" },
  { href: "/built", label: "Built" },
  { href: "/work", label: "Case studies" },
  { href: "/blog", label: "Writing" },
  { href: "/healthcare", label: "Healthcare" },
  { href: "/legal-ai", label: "Legal" },
  { href: "/lake-stevens", label: "Lake Stevens" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2">
            <LogoMark
              alt=""
              size={32}
              className="h-8 w-8 rounded-lg border border-white/10"
            />
            <span className="font-display text-sm text-mist-200">
              Statistical Consulting
            </span>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-mist-300"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-mist-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-mono text-xs text-mist-400">
            © {new Date().getFullYear()} J&amp;E Statistical Consulting. All
            rights reserved.
          </div>
          <a
            href="mailto:info@jestats.io"
            className="font-mono text-xs text-mist-400 transition-colors hover:text-mist-200"
          >
            info@jestats.io
          </a>
        </div>
      </div>
    </footer>
  );
}
