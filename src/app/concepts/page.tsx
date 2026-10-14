import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, Phone } from "lucide-react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { DiagnosticCTA } from "@/components/DiagnosticCTA";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "State Avenue, Rebuilt — local website concepts by J&E",
  description:
    "Homepage concepts for Snohomish County businesses whose reviews outrun their websites. Each concept is free for the business to keep — built first, pitched second.",
  openGraph: {
    title: "State Avenue, Rebuilt — J&E Statistical Consulting",
    description:
      "Before-and-after homepage concepts for local businesses in Marysville and Lake Stevens, WA.",
    url: "https://jestats.io/concepts",
    type: "website",
  },
};

interface Concept {
  name: string;
  kind: string;
  place: string;
  href: string;
  beforeSrc: string;
  afterSrc: string;
  auditTitle: string;
  audit: string;
  fix: string;
}

const concepts: Concept[] = [
  {
    name: "Mai's Thai Cuisine",
    kind: "Thai & Vietnamese restaurant",
    place: "Prime Square, Marysville",
    href: "/concepts/mais-thai/",
    beforeSrc: "/concepts/mais-thai/before-mobile.png",
    afterSrc: "/concepts/mais-thai/after-mobile.png",
    auditTitle: "What a phone sees today",
    audit:
      "A family kitchen with 30 years on State Avenue and a 4.5-star rating — behind a site that opens with a long list of menu links and makes a phone visitor work to find the two things they came for: the lunch special and the phone number. When we captured it in October 2026, automated visits met a “confirm you are human” wall before any food appeared.",
    fix: "The concept puts the rating, the $12.95 lunch special, and a tap-to-call button on the first screen, sets the favorites like a printed menu, and keeps their own dining-room photos front and center.",
  },
  {
    name: "La Terraza",
    kind: "Mexican restaurant",
    place: "Prime Square, Marysville",
    href: "/concepts/la-terraza/",
    beforeSrc: "/concepts/la-terraza/before-mobile.png",
    afterSrc: "/concepts/la-terraza/after-mobile.png",
    auditTitle: "What a phone sees today",
    audit:
      "The https address on their listings fails outright — the server has no working TLS, so browsers stop at a security error. Get past that and the homepage is the ordering vendor's unfinished setup screen: no menu, no hours, and a call button for the vendor's sales line, not the restaurant. Meanwhile about 300 reviews say the birria is worth the drive; a Yelp reviewer asked where the menu is.",
    fix: "The concept answers that reviewer: favorites with prices, seven-day hours, and tap-to-call on the first screen — in the restaurant's own colors, ready for their photos.",
  },
];

const upcoming = [
  {
    name: "LJ's Bistro & Bar",
    kind: "Restaurant & bar",
    place: "Lake Stevens",
    note: "Closest to home. Concept scheduled next.",
  },
  {
    name: "Masterbrush Painting",
    kind: "Painting contractor",
    place: "Lake Stevens",
    note: "4.8 stars on 68 reviews; the listed domain is dead.",
  },
  {
    name: "Ground Effex Asphalt",
    kind: "Asphalt & paving",
    place: "Lake Stevens",
    note: "The footer Call button dials a wrong number.",
  },
];

export default function ConceptsPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative overflow-hidden pt-36 pb-14 sm:pt-44 sm:pb-16">
        <div className="ambient-bg" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Local concepts"
            title={
              <>
                State Avenue, <span className="text-gradient">Rebuilt.</span>
              </>
            }
            description="Some of the best-reviewed businesses in Snohomish County have websites that undersell them — or none at all. So we build the homepage first and hand it over, no strings. Every concept below is the business's to keep, win or lose."
          />
        </div>
      </section>

      <section className="relative pb-8 sm:pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14">
            {concepts.map((concept) => (
              <article
                key={concept.name}
                className="glass-card grid items-center gap-10 rounded-3xl p-7 sm:p-10 lg:grid-cols-[320px_1fr]"
              >
                <BeforeAfter
                  beforeSrc={concept.beforeSrc}
                  afterSrc={concept.afterSrc}
                  beforeAlt={`The current ${concept.name} website on a phone`}
                  afterAlt={`Our homepage concept for ${concept.name} on a phone`}
                  label={concept.name}
                />
                <div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]">
                    <span className="text-brand-violet">{concept.kind}</span>
                    <span className="text-mist-600">·</span>
                    <span className="text-mist-400">{concept.place}</span>
                    <span className="ml-auto rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.22em] text-mist-300">
                      Concept — not their official site
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
                    {concept.name}
                  </h3>
                  <h4 className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-mist-400">
                    {concept.auditTitle}
                  </h4>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-mist-300 sm:text-base">
                    {concept.audit}
                  </p>
                  <h4 className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-mist-400">
                    What the concept changes
                  </h4>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-mist-300 sm:text-base">
                    {concept.fix}
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-5">
                    <a
                      href={concept.href}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-mist-100"
                    >
                      Open the concept
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <span className="inline-flex items-center gap-2 text-sm text-mist-400">
                      <Phone className="h-4 w-4 text-brand-violet" />
                      Theirs to keep — we walk it in, in person.
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="font-display text-xl font-semibold text-mist-50 sm:text-2xl">
            On the bench
          </h3>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-mist-300 sm:text-base">
            We work in batches of five. These three are researched and waiting
            for their concepts.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {upcoming.map((item) => (
              <div key={item.name} className="glass-card rounded-2xl p-6 opacity-85">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.22em]">
                  <span className="text-brand-violet">{item.kind}</span>
                  <span className="text-mist-600">·</span>
                  <span className="text-mist-400">{item.place}</span>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.22em] text-mist-300">
                    <Clock className="h-3 w-3 text-brand-violet" />
                    In progress
                  </span>
                </div>
                <h4 className="mt-4 font-display text-lg font-semibold text-mist-50">
                  {item.name}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-mist-300">{item.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-prose text-sm leading-relaxed text-mist-400">
            How this works: the concept and the one-paragraph audit come first,
            delivered in person. This fall we're offering two local businesses
            a five-page, hand-built site for $500 flat — live in three weeks,
            first three months of updates included — in return for a
            testimonial.{" "}
            <Link href="/lake-stevens" className="font-medium text-mist-100 underline decoration-brand-violet underline-offset-4 hover:text-white">
              More for Snohomish County businesses
            </Link>
            .
          </p>

          <div className="mt-10">
            <DiagnosticCTA
              variant="banner"
              eyebrow="For local businesses"
              headline="Want the audit before the concept?"
              subhead="We'll write up what your site does on a phone today — free, in plain words, yours to keep either way."
              ctaLabel="Get your free audit"
            />
          </div>

          <p className="mt-8 text-center">
            <Link
              href="/built"
              className="inline-flex items-center gap-2 text-sm font-medium text-mist-100 hover:text-white"
            >
              Or see the products we've shipped
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
