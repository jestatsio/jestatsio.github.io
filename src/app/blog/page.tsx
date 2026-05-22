import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { DiagnosticCTA } from "@/components/DiagnosticCTA";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Writing — J&E Statistical Consulting",
  description:
    "Long-form posts on AI rigor, statistics, evaluation, and modern WordPress. Written by Eric and Jennye.",
  openGraph: {
    title: "Writing — J&E Statistical Consulting",
    description:
      "Long-form posts on AI rigor, statistics, evaluation, and modern WordPress.",
    url: "https://jestats.io/blog",
    type: "website",
  },
};

interface Post {
  href: string | null;
  tags: string[];
  date: string;
  title: string;
  summary: string;
  author: string;
  status: "live" | "drafting";
}

const posts: Post[] = [
  {
    href: "/blog/one-week-ai-audit",
    tags: ["AI", "Diagnostic"],
    date: "May 2026",
    title: "The one-week AI audit — what we actually look for",
    summary:
      "A walkthrough of how we run a one-week AI rigor audit, what we check, and why most AI pilots stall in places that are deeply predictable.",
    author: "Eric Hare",
    status: "live",
  },
  {
    href: null,
    tags: ["Healthcare", "AI"],
    date: "Drafting",
    title: "Five ways your clinical LLM pilot will fail an audit",
    summary:
      "Coming soon — the most common failure modes we see in healthcare AI pilots, and what to look for before a regulator does.",
    author: "Eric Hare",
    status: "drafting",
  },
  {
    href: null,
    tags: ["Statistics"],
    date: "Drafting",
    title: "When a p-value is lying to you (a statistician's three-question test)",
    summary:
      "Coming soon — a short, practical test you can apply to any reported statistical result before you bet a decision on it.",
    author: "Eric Hare",
    status: "drafting",
  },
  {
    href: null,
    tags: ["WordPress", "Local"],
    date: "Drafting",
    title:
      "Why your Elementor site loads in 8 seconds (and how we fix it in a week)",
    summary:
      "Coming soon — the boring, real reasons your WordPress site is slow, and the priority order Jennye uses on every Rescue.",
    author: "Jennye",
    status: "drafting",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="ambient-bg" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Writing"
            title={
              <>
                Long-form, alternating{" "}
                <span className="text-gradient">voices.</span>
              </>
            }
            description="Eric writes the technical pieces — AI rigor, evaluation, statistics. Jennye writes the practical ones — WordPress, conversion, GTM. New post roughly every two weeks."
          />
        </div>
      </section>

      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-5">
            {posts.map((post, i) => {
              const cardClasses =
                "glass-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-300";
              const interactive = post.href
                ? "hover:-translate-y-1"
                : "opacity-80";

              const inner = (
                <>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.22em]">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-brand-violet">
                        {tag}
                      </span>
                    ))}
                    <span className="text-mist-600">·</span>
                    <span className="text-mist-400">{post.date}</span>
                    <span className="text-mist-600">·</span>
                    <span className="text-mist-400">{post.author}</span>
                    {post.status === "drafting" && (
                      <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.22em] text-mist-300">
                        <Clock className="h-3 w-3 text-brand-violet" />
                        In progress
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-mist-50 sm:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-300 sm:text-base">
                    {post.summary}
                  </p>
                  {post.href && (
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-mist-100">
                      Read the post
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  )}
                </>
              );

              return post.href ? (
                <Link
                  key={i}
                  href={post.href}
                  className={`${cardClasses} ${interactive}`}
                >
                  {inner}
                </Link>
              ) : (
                <div key={i} className={`${cardClasses} ${interactive}`}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-28 sm:pb-36">
        <div className="mx-auto max-w-5xl px-6">
          <DiagnosticCTA
            variant="banner"
            headline="Ready to put any of this to work?"
            subhead="Start with a one-week diagnostic. Same rigor as the writing. Yours in a week."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
