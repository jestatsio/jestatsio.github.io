import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Globe2,
  MapPin,
  MessageSquare,
  Monitor,
  ShieldCheck,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title:
    "Lake Stevens & Snohomish County — AI, stats, and WordPress | J&E Statistical Consulting",
  description:
    "Based in Lake Stevens, WA. PhD-led AI and statistics consulting plus modern WordPress builds for businesses in Snohomish County and across the US. Remote-first delivery.",
  openGraph: {
    title:
      "Lake Stevens & Snohomish County — AI, stats, and WordPress | J&E Statistical Consulting",
    description:
      "Based in Lake Stevens, WA. PhD-led AI and statistics consulting plus modern WordPress builds. Remote-first.",
    url: "https://jestats.io/lake-stevens",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "J&E Statistical Consulting",
  url: "https://jestats.io",
  description:
    "PhD-led AI and statistics consulting plus modern WordPress / Elementor builds for local businesses.",
  areaServed: [
    {
      "@type": "City",
      name: "Lake Stevens",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Snohomish County",
      },
    },
    { "@type": "AdministrativeArea", name: "Snohomish County" },
    { "@type": "State", name: "Washington" },
    { "@type": "Country", name: "United States" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lake Stevens",
    addressRegion: "WA",
    addressCountry: "US",
  },
  email: "info@jestats.io",
  priceRange: "$$",
};

const tracks = [
  {
    icon: BrainCircuit,
    eyebrow: "If you need AI or statistics work",
    title: "PhD-led AI audits, evaluations, and builds.",
    body: "A statistician and an AI builder you can actually trust to tell you when a model is wrong. Start with a one-week diagnostic — fixed fee, written report.",
    href: "/diagnostic",
    cta: "See the diagnostic",
    accent: "indigo",
  },
  {
    icon: Monitor,
    eyebrow: "If you need a modern website",
    title: "WordPress + Elementor builds, rescues, and care plans.",
    body: "Fast, conversion-focused sites built on Elementor. Fixed fees, real local SEO, a site you can edit yourself or have us look after.",
    href: "/local-web",
    cta: "See the web offers",
    accent: "violet",
  },
] as const;

const accentClasses = {
  indigo: {
    iconBg: "from-brand-indigo/25 to-brand-blue/15",
    rule: "via-brand-indigo/40",
  },
  violet: {
    iconBg: "from-brand-violet/25 to-brand-purple/15",
    rule: "via-brand-violet/40",
  },
} as const;

const remoteFirstPoints = [
  {
    icon: Globe2,
    title: "Online by default — for both of us.",
    body: "Meetings happen on Zoom. Work happens over email, shared docs, and quick async video. You don't lose a half-day to a coffee meeting; we don't pad our rate to cover one.",
  },
  {
    icon: ShieldCheck,
    title: "Local credibility, broader reach.",
    body: "We're rooted in Lake Stevens / Snohomish County — chamber-listed, locally findable, and happy to be a reference for other local businesses. We just don't need to be on-site to deliver good work.",
  },
  {
    icon: MessageSquare,
    title: "Plain English and quick responses.",
    body: "No agency-speak. No 48-hour ticket windows. When you message us, you usually get a human answer the same day. The whole thing should feel less like dealing with a vendor and more like working with the friend-who-happens-to-know-this-stuff.",
  },
];

export default function LakeStevensPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="ambient-bg" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-mist-300">
            <MapPin className="h-3 w-3 text-brand-violet" />
            Lake Stevens · Snohomish County · WA
          </div>

          <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-mist-50 sm:text-5xl md:text-6xl">
            Local consulting for{" "}
            <span className="text-gradient">a remote-first world.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist-300 sm:text-lg">
            We're a two-person shop based in Lake Stevens — Eric (PhD
            statistics + AI systems) and Jennye (marketing strategy + modern
            WordPress builds). We work with businesses in Snohomish County and
            across the US. The work is real, the bar is high, and the delivery
            is online.
          </p>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {tracks.map((track) => {
              const Icon = track.icon;
              const accent = accentClasses[track.accent];
              return (
                <Link
                  key={track.href}
                  href={track.href}
                  className="glass-card group relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.rule} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.iconBg} ring-1 ring-inset ring-white/10`}
                  >
                    <Icon className="h-5 w-5 text-brand-violet" />
                  </div>
                  <div className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-brand-violet">
                    {track.eyebrow}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-mist-50 sm:text-2xl">
                    {track.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-300 sm:text-base">
                    {track.body}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-mist-100">
                    {track.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="How we work locally"
            title={
              <>
                Rooted in town,{" "}
                <span className="text-gradient">remote on purpose.</span>
              </>
            }
            description="Yes, we're local. No, we won't show up at your office. Here's why that's a feature and not a hedge."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {remoteFirstPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="glass-card rounded-2xl p-7">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-indigo/20 to-brand-purple/20 ring-1 ring-inset ring-white/10">
                    <Icon className="h-5 w-5 text-brand-violet" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-mist-50">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-300">
                    {point.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-28 sm:pb-36">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-indigo/10 via-transparent to-brand-purple/10 p-8 sm:p-12">
            <div className="grid-overlay opacity-40" aria-hidden="true" />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-2xl">
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-brand-violet">
                  Lake Stevens businesses — say hi
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
                  We&apos;d love to{" "}
                  <span className="text-gradient">work with you.</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-300 sm:text-base">
                  Not sure which side fits — AI / stats, or the web work? Send
                  one line about your business and we&apos;ll point you to the
                  right place (or tell you honestly that we&apos;re not the
                  right fit).
                </p>
              </div>
              <a
                href="mailto:info@jestats.io?subject=Hi%20from%20Lake%20Stevens"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-6 py-3 text-sm font-medium text-white shadow-md shadow-brand-indigo/20 transition-transform hover:scale-[1.03]"
              >
                Send a quick hello
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
