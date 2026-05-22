import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  CaseStudyFinding,
  CaseStudyHero,
  CaseStudySection,
} from "@/components/CaseStudy";
import { DiagnosticCTA } from "@/components/DiagnosticCTA";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title:
    "Template — clinical LLM audit example | J&E Statistical Consulting",
  description:
    "Example layout showing the depth of a written audit. Representative content, not a real engagement.",
  robots: { index: false, follow: true },
};

export default function ExampleCaseStudyPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <CaseStudyHero
        vertical="Healthcare · Template"
        date="Representative example"
        title={
          <>
            What a written audit{" "}
            <span className="text-gradient">actually looks like.</span>
          </>
        }
        oneLiner="An end-to-end illustration of the format and depth of one of our diagnostics — written using representative (not real) findings from a hypothetical clinical-LLM pilot."
        draft
      />

      <CaseStudySection label="The problem" title="A pilot stuck between yes and no.">
        <p>
          A regional health system had been running a six-month pilot of a
          third-party LLM that summarized clinical notes. The pilot owner felt
          the system was &ldquo;good enough,&rdquo; but couldn&apos;t
          articulate why. The compliance team was uncomfortable with the
          vendor&apos;s reported accuracy. Two competing internal stakeholders
          wanted a clean answer: <em>do we expand this, or do we kill it?</em>
        </p>
        <p>
          They booked a one-week AI Rigor Audit. The brief: a written, defensible
          read on whether the pilot was safe to expand, what would break first,
          and what the vendor was and wasn&apos;t being clear about.
        </p>
      </CaseStudySection>

      <CaseStudySection label="What we actually did" title="Five days of forensic work.">
        <p>
          <strong className="text-mist-100">Day 1.</strong> Kickoff call with
          the pilot owner and one clinical reviewer. We aligned on what
          &ldquo;working&rdquo; meant in practice and got read access to the
          vendor&apos;s eval reports plus a small sample of system outputs.
        </p>
        <p>
          <strong className="text-mist-100">Days 2–3.</strong> Replicated the
          vendor&apos;s reported accuracy using their own methodology — and
          then re-ran the same accuracy measurement using a method that
          actually accounted for class imbalance. Spoiler: the headline number
          shifted meaningfully.
        </p>
        <p>
          <strong className="text-mist-100">Day 4.</strong> Spot-checked
          hallucination behavior on edge-case inputs (procedures the vendor
          underrepresents in their training data). Built a small reproducible
          evaluation script the client&apos;s team could rerun on every
          vendor release.
        </p>
        <p>
          <strong className="text-mist-100">Day 5.</strong> Wrote the report,
          then walked the team through it over a 60-minute call. Anonymized
          findings shared with compliance.
        </p>
      </CaseStudySection>

      <CaseStudySection label="What we found" title="Three findings ranked by severity.">
        <div className="not-prose mt-2 space-y-4">
          <CaseStudyFinding
            headline="Critical — the headline accuracy number was misleading."
            detail="Because the vendor measured accuracy on a balanced eval set, the published number didn't reflect performance on the actual case mix in our client's data. The true accuracy on the live distribution was meaningfully lower in two specific procedure categories."
          />
          <CaseStudyFinding
            headline="High — no real hallucination guardrails on uncommon inputs."
            detail="The system confidently summarized procedures it had limited training exposure to, producing fluent but clinically wrong descriptions. Frequency was low in absolute terms — but the consequences would be high."
          />
          <CaseStudyFinding
            headline="Medium — no path to re-evaluate on each vendor release."
            detail="The client had no harness for re-running accuracy checks when the vendor pushed an update. We left them a small repeatable script that fixes this."
          />
        </div>
      </CaseStudySection>

      <CaseStudySection label="What happened next" title="A defensible decision, written down.">
        <p>
          The client didn&apos;t kill the pilot — but they did pause the
          expansion. The report became the document compliance, clinical
          leadership, and the vendor all referenced in the follow-on
          conversation. Two months later, a scoped follow-on engagement helped
          the client stand up their own evaluation harness so future releases
          could be checked the same way every time.
        </p>
        <p className="text-sm text-mist-400">
          <em>
            Note: this writeup is a representative template, not a real
            engagement. Real case studies will appear here as engagements close
            and clients approve the writeup.
          </em>
        </p>
      </CaseStudySection>

      <section className="relative pb-20 pt-8 sm:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <DiagnosticCTA
            variant="banner"
            headline="Want this kind of writeup on your system?"
            subhead="Start with a one-week diagnostic. Same format. Real findings. Yours to keep — or to anonymize and publish."
          />
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-mist-300 transition-colors hover:text-mist-50"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All case studies
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
