import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";
import { BuiltList } from "./BuiltList";

export const metadata: Metadata = {
  title: "Things we've built — J&E Statistical Consulting",
  description:
    "Live products built by Eric and Jennye — weather intelligence, forensic ballistics, and more. The proof behind the pitch.",
  openGraph: {
    title: "Things we've built — J&E Statistical Consulting",
    description:
      "Live products built by Eric and Jennye. The proof behind the pitch.",
    url: "https://jestats.io/built",
    type: "website",
  },
};

export default function BuiltPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="ambient-bg" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Things we've shipped"
            title={
              <>
                Built, live, and{" "}
                <span className="text-gradient">running in public.</span>
              </>
            }
            description="Before we were a consultancy we were product builders. These are real systems we designed, shipped, and operate — the same kind of rigor and end-to-end ownership we bring to client work."
          />
        </div>
      </section>

      <section className="relative pb-24 sm:pb-32">
        <BuiltList />
      </section>

      <section className="relative pb-28 sm:pb-36">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-indigo/10 via-transparent to-brand-purple/10 p-8 sm:p-12">
            <div className="grid-overlay opacity-40" aria-hidden="true" />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-2xl">
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-brand-violet">
                  Want this kind of work for your team?
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
                  We do the same end-to-end thinking on{" "}
                  <span className="text-gradient">client engagements.</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-300 sm:text-base">
                  Web development, AI audits, statistical reviews, RAG and LLM
                  builds, custom tooling. Start with a free written audit — no
                  call required, no obligation, yours to keep.
                </p>
              </div>
              <a
                href="/diagnostic"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-6 py-3 text-sm font-medium text-white shadow-md shadow-brand-indigo/20 transition-transform hover:scale-[1.03]"
              >
                Get your free audit
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
