import type { Metadata } from "next";
import {
  Check,
  ChevronRight,
  Gauge,
  Heart,
  Mail,
  Rocket,
  Wrench,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "WordPress & Elementor builds — J&E Statistical Consulting",
  description:
    "Fast, modern WordPress sites built on Elementor for local businesses. Fixed-fee launches, rescue rebuilds, and care plans you can actually leave when you want to.",
  openGraph: {
    title: "WordPress & Elementor builds — J&E Statistical Consulting",
    description:
      "Fixed-fee WordPress and Elementor builds, rescues, and care plans for local businesses.",
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
    title: "5-Day Elementor Launch",
    price: "$2,500 flat",
    timing: "One week, start to live",
    pitch:
      "A new site built and shipped in a single focused week. We pick a clean Elementor base, write or refine your copy, plug in real local SEO (schema, sitemaps, Google Business sync), and go live on Friday.",
    includes: [
      "5–7 pages (home, services, about, contact, plus 1–2 service pages)",
      "Elementor Pro license and clean theme base",
      "Local SEO: schema, sitemaps, Google Business hookup",
      "Click-to-call, quote form, service area, hours, photos",
      "Mobile-tuned and PageSpeed-conscious",
      "Stripe upfront — half on book, half on launch",
    ],
    mailSubject: "Book 5-Day Elementor Launch",
    accent: "indigo",
  },
  {
    id: "rescue",
    icon: Wrench,
    title: "WordPress Rescue / Rebuild",
    price: "$3,500–$5,000",
    timing: "Two weeks, fixed scope",
    pitch:
      "Your current WordPress site is slow, broken, or aging poorly. We rebuild it on Elementor with your content, a real speed and SEO foundation, and a layout that actually converts. You keep your domain, your traffic, your search rankings.",
    includes: [
      "Audit of current site (PageSpeed, structure, SEO, broken bits)",
      "Full rebuild on Elementor with cleaned-up content",
      "Speed pass — typically 3–5× faster on real devices",
      "301 redirects to preserve search rankings",
      "Local SEO basics fixed properly the first time",
      "Stripe upfront — half on book, half on launch",
    ],
    mailSubject: "Book WordPress Rescue / Rebuild",
    accent: "violet",
  },
  {
    id: "care",
    icon: Heart,
    title: "Care Plan",
    price: "$99–$199 / month",
    timing: "Month-to-month, no contract",
    pitch:
      "After your site is live, the boring stuff that breaks websites — out-of-date plugins, expired SSLs, security holes, that one form field — quietly stops being your problem. We handle the upkeep so you can run the business.",
    includes: [
      "Hosting + SSL + daily backups",
      "WordPress, theme, and plugin updates (tested before live)",
      "Security monitoring and uptime alerts",
      "Roughly 1 hour of content edits per month",
      "Monthly Google Business post",
      "Quarterly performance and SEO review",
    ],
    mailSubject: "Sign up for a Care Plan",
    accent: "blue",
  },
];

const whyWordPress = [
  {
    icon: Gauge,
    title: "It's the platform your customers expect.",
    body: "WordPress runs roughly 40% of the web. Your suppliers, contractors, accountants, and your nephew-who-tried-to-help all already know it. That's a feature, not a bug.",
  },
  {
    icon: Check,
    title: "You can edit it yourself.",
    body: "Elementor is the friendliest way to maintain a site without us. Change a price, swap a photo, add a service — without filing a ticket or paying us by the hour.",
  },
  {
    icon: Rocket,
    title: "The ecosystem actually solves problems.",
    body: "Yoast and RankMath for SEO, GravityForms for forms, WooCommerce for shop, LearnDash for courses. Battle-tested plugins exist for the things you'll want next year.",
  },
];

const faqs = [
  {
    q: "Why WordPress instead of [Wix / Squarespace / Shopify]?",
    a: "Because you own it. Your code, your content, your hosting, your domain. No platform that triples your bill once you depend on it. WordPress and Elementor give you the same look-and-feel of those builders with none of the lock-in.",
  },
  {
    q: "Can I edit the site myself afterwards?",
    a: "Yes — that's the whole point of using Elementor. Most clients can change copy, photos, prices, and service-area details on their own after we walk them through it. Care Plan clients can also just send us the change and we'll do it.",
  },
  {
    q: "What if I already have a WordPress site?",
    a: "Most likely a Rescue / Rebuild is the right move. We don't bolt fixes onto a messy site — we rebuild on a clean Elementor foundation, port your content, and 301 your URLs so search rankings carry over.",
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
            eyebrow="WordPress and Elementor builds"
            title={
              <>
                Modern WordPress sites for the businesses{" "}
                <span className="text-gradient">that keep towns running.</span>
              </>
            }
            description="Fast, conversion-focused sites built on Elementor — the platform your customers, contractors, and accountants already know. Fixed fees. Real local SEO. A site you can actually maintain (or have us maintain). No agency markup. No contract you can't escape."
          />
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
            eyebrow="Why we lead with WordPress"
            title={
              <>
                The boring, reliable answer is{" "}
                <span className="text-gradient">often the right one.</span>
              </>
            }
            description="We could build everything custom. We don't — because WordPress + Elementor is genuinely the best fit for most small local businesses, and choosing the right tool is part of the job."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyWordPress.map((item) => {
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
                  Want a quote first?
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
                  Send your current site (or describe what you need){" "}
                  <span className="text-gradient">and we'll quote it.</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-300 sm:text-base">
                  No decks, no proposal phase. One reply with a clear number,
                  what's included, and when we could start.
                </p>
              </div>
              <a
                href="mailto:info@jestats.io?subject=Quote%20request%20%E2%80%94%20local%20web"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple px-6 py-3 text-sm font-medium text-white shadow-md shadow-brand-indigo/20 transition-transform hover:scale-[1.03]"
              >
                <Mail className="h-4 w-4" />
                Get a quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
