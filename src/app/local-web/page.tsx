import type { Metadata } from "next";
import {
  Check,
  ChevronRight,
  Code2,
  Gauge,
  Heart,
  Mail,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Web development — J&E Statistical Consulting",
  description:
    "Modern websites for local businesses and small teams. Real engineering, fast pages, owned by you. Free audits to start. Fixed-fee builds and rebuilds. No agency markup.",
  openGraph: {
    title: "Web development — J&E Statistical Consulting",
    description:
      "Modern websites for local businesses and small teams. Free audit to start, fixed-fee builds, no lock-in.",
    url: "https://jestats.io/local-web",
    type: "website",
  },
};

interface Sku {
  id: string;
  icon: typeof Rocket;
  title: string;
  price: string;
  timing: string;
  pitch: string;
  includes: string[];
  mailSubject: string;
  accent: "indigo" | "violet" | "blue";
}

const skus: Sku[] = [
  {
    id: "launch",
    icon: Rocket,
    title: "5-Day Launch",
    price: "$2,500 flat",
    timing: "One week, start to live",
    pitch:
      "A new site, properly engineered and shipped in a single focused week. We pick the right stack for your business (usually WordPress + Elementor for ease of editing, sometimes a custom Next.js build), write or refine your copy, and go live on Friday. Fast pages, clean code, the search basics wired up.",
    includes: [
      "5–7 pages (home, services, about, contact, plus 1–2 service pages)",
      "Modern, version-controlled build — no template-mart bloat",
      "Tuned for real-device speed (Core Web Vitals in the green)",
      "Click-to-call, quote form, service area, hours, real photos",
      "Search basics: schema, sitemaps, Google Business sync",
      "Stripe upfront — half on book, half on launch",
    ],
    mailSubject: "Book 5-Day Launch",
    accent: "indigo",
  },
  {
    id: "rescue",
    icon: Wrench,
    title: "Rescue / Rebuild",
    price: "$3,500–$5,000",
    timing: "Two weeks, fixed scope",
    pitch:
      "Your current site is slow, broken, dated, or held together with plugin duct tape. We rebuild it properly with your content, modern engineering underneath, and a layout that actually converts. You keep your domain, your traffic, and your search rankings.",
    includes: [
      "Audit of current site (speed, structure, broken bits, code quality)",
      "Full rebuild on the right stack — WordPress + Elementor or custom",
      "Speed pass — typically 3–5× faster on real devices",
      "301 redirects so existing links and rankings carry over",
      "Search basics fixed properly the first time",
      "Stripe upfront — half on book, half on launch",
    ],
    mailSubject: "Book Rescue / Rebuild",
    accent: "violet",
  },
  {
    id: "care",
    icon: Heart,
    title: "Care Plan",
    price: "$99–$199 / month",
    timing: "Month-to-month, no contract",
    pitch:
      "After your site is live, the boring stuff that breaks websites — out-of-date dependencies, expired SSLs, security holes, that one form field — quietly stops being your problem. We handle the upkeep so you can run the business.",
    includes: [
      "Hosting + SSL + daily backups",
      "Core, theme, and plugin/dependency updates (tested before live)",
      "Security monitoring and uptime alerts",
      "Roughly 1 hour of content edits per month",
      "Quarterly performance review",
      "Cancel anytime — you keep the site",
    ],
    mailSubject: "Sign up for a Care Plan",
    accent: "blue",
  },
];

const whyUs = [
  {
    icon: Code2,
    title: "Engineers, not 'web guys'.",
    body: "Our day job is building software. We write code for a living. That means your site is treated like a piece of software — version-controlled, sensibly structured, properly tested — not like a Frankenstein of plugins and template tweaks.",
  },
  {
    icon: Gauge,
    title: "Speed is not optional.",
    body: "Slow pages quietly cost you customers. We tune for real-device performance — fast load times on cheap phones over flaky 4G, not just on a fiber connection in a lab. The cheapest UX upgrade is the one most sites skip.",
  },
  {
    icon: Check,
    title: "You can edit it yourself.",
    body: "We pick stacks (mostly WordPress + Elementor) you can maintain without us. Change a price, swap a photo, add a service — without filing a ticket or paying us by the hour. The Care Plan is an option, not a requirement.",
  },
];

const faqs = [
  {
    q: "How do I know if my site needs a rebuild or just some fixes?",
    a: "Start with the free Website Audit. We'll send you a written report telling you whether you'd get more out of a few targeted fixes or a proper rebuild — and what the rebuild would actually cost. No pressure either way.",
  },
  {
    q: "Why mostly WordPress instead of [Wix / Squarespace / Shopify]?",
    a: "Because you own it. Your code, your content, your hosting, your domain. No platform that triples your bill once you depend on it. For sites that need a custom interactive feel, we'll build on Next.js instead — but for most local businesses, WordPress + Elementor is genuinely the right tool.",
  },
  {
    q: "When would you build something custom instead of WordPress?",
    a: "When the site really is more of an app than a brochure — heavy interactivity, real-time features, custom dashboards, integrations that would be plugin-soup in WordPress. Custom Next.js builds start higher than the SKUs above; we'll quote on a call.",
  },
  {
    q: "Can I edit the site myself afterwards?",
    a: "Yes — that's part of the point. Most clients can change copy, photos, prices, and service-area details on their own after we walk them through it. Care Plan clients can also just send us the change and we'll do it.",
  },
  {
    q: "What if I already have a WordPress site?",
    a: "Most likely a Rescue / Rebuild is the right move. We don't bolt fixes onto a messy site — we rebuild on a clean foundation, port your content, and 301 your URLs so existing links and rankings carry over.",
  },
  {
    q: "Do I have to use your hosting?",
    a: "No. We'll happily set you up on Hostinger, SiteGround, Cloudways, or your existing host. The Care Plan includes hosting if you want it, but it's not required.",
  },
  {
    q: "What if I cancel the Care Plan later?",
    a: "Then you keep the site. We export everything to a hosting provider of your choice. No data hostage situation, no escalating exit fees. It's your site.",
  },
  {
    q: "Are we in your service area?",
    a: "We work fully remote — anywhere in the US. We're rooted in Lake Stevens / Snohomish County, WA, but the build, the meetings, and the handoff are all online.",
  },
];

function buildMailto(subject: string): string {
  const body =
    "Hi Jennye,%0D%0A%0D%0AI'm interested in the following:%0D%0A%0D%0A- Business name + current website (if any):%0D%0A- What you do:%0D%0A- Anything specific about what you need:%0D%0A%0D%0AThanks!";
  return `mailto:info@jestats.io?subject=${encodeURIComponent(subject)}&body=${body}`;
}

const accentClasses = {
  indigo: {
    iconBg: "from-brand-indigo/25 to-brand-blue/15",
    rule: "via-brand-indigo/40",
  },
  violet: {
    iconBg: "from-brand-violet/25 to-brand-purple/15",
    rule: "via-brand-violet/40",
  },
  blue: {
    iconBg: "from-brand-blue/25 to-brand-indigo/15",
    rule: "via-brand-blue/40",
  },
} as const;

export default function LocalWebPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="ambient-bg" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Web development"
            title={
              <>
                Modern websites — properly engineered,{" "}
                <span className="text-gradient">owned by you.</span>
              </>
            }
            description="Real web development for local businesses and small teams. Fast, conversion-focused sites built on the right stack for the job — WordPress + Elementor when it fits, custom Next.js when it earns its keep. Fixed fees. No agency markup. No contract you can't escape."
          />

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            <a
              href="/diagnostic"
              className="inline-flex items-center gap-2 rounded-full border border-brand-violet/40 bg-brand-violet/10 px-4 py-2 text-sm text-mist-100 transition-colors hover:bg-brand-violet/20"
            >
              <Sparkles className="h-4 w-4 text-brand-violet" />
              Start with a free website audit
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {skus.map((sku) => {
              const Icon = sku.icon;
              const accent = accentClasses[sku.accent];
              return (
                <div
                  key={sku.id}
                  className="glass-card group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.rule} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.iconBg} ring-1 ring-inset ring-white/10`}
                  >
                    <Icon className="h-5 w-5 text-brand-violet" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-mist-50">
                    {sku.title}
                  </h3>
                  <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-brand-violet">
                    {sku.price} · {sku.timing}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-mist-200">
                    {sku.pitch}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {sku.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-mist-300"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-violet" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={buildMailto(sku.mailSubject)}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-5 py-3 text-sm font-medium text-white shadow-md shadow-brand-indigo/20 transition-transform hover:scale-[1.03]"
                  >
                    Get started
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Why hire us"
            title={
              <>
                The boring, reliable answer{" "}
                <span className="text-gradient">done well.</span>
              </>
            }
            description="There are a lot of people who'll build you a website. The ones worth hiring treat it like a piece of software — because that's what it is."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card rounded-2xl p-7"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-indigo/20 to-brand-purple/20 ring-1 ring-inset ring-white/10">
                    <Icon className="h-5 w-5 text-brand-violet" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-mist-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-300">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Questions we get a lot"
            title={
              <>
                The things people{" "}
                <span className="text-gradient">always ask.</span>
              </>
            }
          />

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={faq.q}
                className="glass-card group rounded-2xl p-6 [&[open]>summary>svg]:rotate-90"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-left font-display text-base font-medium text-mist-50 sm:text-lg">
                  {faq.q}
                  <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-brand-violet transition-transform" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-mist-300 sm:text-base">
                  {faq.a}
                </p>
              </details>
            ))}
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
                  Start free, decide later
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
                  Get a free written audit of your current site —{" "}
                  <span className="text-gradient">then decide.</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-300 sm:text-base">
                  We&apos;ll tell you exactly what&apos;s wrong, what&apos;s
                  worth fixing, and whether a rebuild would actually pay off for
                  your business. Hire us for the fix only if the report
                  convinces you.
                </p>
              </div>
              <a
                href="/diagnostic"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-6 py-3 text-sm font-medium text-white shadow-md shadow-brand-indigo/20 transition-transform hover:scale-[1.03]"
              >
                <Sparkles className="h-4 w-4" />
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
