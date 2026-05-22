import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogBody, BlogH2, BlogPostHero } from "@/components/BlogPost";
import { DiagnosticCTA } from "@/components/DiagnosticCTA";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title:
    "The one-week AI audit — what we actually look for | J&E Statistical Consulting",
  description:
    "A walkthrough of how we run a one-week AI rigor audit, what we check, and why most AI pilots stall in places that are deeply predictable.",
  openGraph: {
    title:
      "The one-week AI audit — what we actually look for | J&E Statistical Consulting",
    description:
      "A walkthrough of how we run a one-week AI rigor audit and what we actually look for.",
    url: "https://jestats.io/blog/one-week-ai-audit",
    type: "article",
  },
};

export default function OneWeekAIAuditPost() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <BlogPostHero
        tags={["AI", "Diagnostic"]}
        date="May 2026"
        author="Eric Hare"
        title={
          <>
            The one-week AI audit —{" "}
            <span className="text-gradient">what we actually look for.</span>
          </>
        }
        lede="Most AI pilots we get called into aren't broken in some exotic way. They're stuck in a handful of deeply predictable places. Here's the checklist we walk every time."
      />

      <BlogBody>
        <p>
          A friend at a hospital system recently asked us, &ldquo;What does
          your AI audit actually <em>look at</em>?&rdquo; The honest answer is
          that we have a checklist, and the same six items come up on almost
          every engagement. The systems are wildly different — clinical LLMs,
          legal RAGs, ops chatbots, marketing copilots — but the failure modes
          rhyme.
        </p>
        <p>
          So this post is the checklist. If you&apos;re running an AI pilot
          right now and you want to stress-test it yourself before bringing
          anyone in, this is a reasonable place to start.
        </p>

        <BlogH2>1. Is there a real evaluation harness, or just demos?</BlogH2>
        <p>
          The single most common failure: an AI system that&apos;s been
          evaluated entirely through informal demos and gut feel. Someone on
          the team tries fifteen prompts, the answers seem fine, and that
          becomes the basis for &ldquo;it works.&rdquo;
        </p>
        <p>
          What we actually look for: a repeatable evaluation script that runs
          the model against a held-out set of inputs with known correct
          answers, scored on metrics that match the business problem. If the
          evaluation is just &ldquo;the PM thinks it&apos;s good,&rdquo;
          we&apos;ll usually find the model is meaningfully worse than the
          team believes — and that gets worse as the model is updated.
        </p>

        <BlogH2>2. Where does the model get its information, and how often is it wrong?</BlogH2>
        <p>
          For any system that retrieves before generating (most useful AI
          systems do), the retrieval layer is where most quality problems
          live. The model is usually doing fine with the context it&apos;s
          given. The retrieval is bringing back the wrong documents, or
          stitching them together in ways that destroy meaning.
        </p>
        <p>
          We measure retrieval separately from generation: how often does the
          system retrieve the right source for a given question, and how often
          does it confidently retrieve nothing useful but proceed anyway? You
          can&apos;t fix a system if you don&apos;t know whether the bug is in
          retrieval or in the model — and most teams have never separated the
          two.
        </p>

        <BlogH2>3. What happens on the inputs nobody tested?</BlogH2>
        <p>
          Production AI fails on the long tail. Demo inputs are clean,
          short, and representative. Real inputs are messy, long, partial,
          and full of edge cases. The honest measure of an AI pilot is what
          happens on inputs the team didn&apos;t pick.
        </p>
        <p>
          We build small adversarial input sets — deliberately weird,
          out-of-distribution, ambiguous, or just unusual — and run them
          through. Almost every system we&apos;ve audited produces fluent,
          confident, dead-wrong answers on at least some of them. That&apos;s
          fine if the system is gated by a human; it&apos;s a problem if
          there&apos;s a downstream automation depending on the output.
        </p>

        <BlogH2>4. What does this cost when traffic doubles?</BlogH2>
        <p>
          A surprising number of pilots have no real cost model. Token usage
          gets sampled, average-case cost is reported, and the team assumes it
          scales linearly. It doesn&apos;t.
        </p>
        <p>
          We trace the actual cost of a representative request — including
          retries, retrieval calls, multi-step agents, and the cost of any
          synchronous fallback. Then we look at what happens at 10× the
          traffic. If the system relies on a model that&apos;s rate-limited,
          or a vendor with usage-tier pricing, the unit economics often look
          quite different at scale than they did at pilot volume.
        </p>

        <BlogH2>5. Is there a way to roll it back, and does anyone know how?</BlogH2>
        <p>
          AI systems behave differently between versions. The vendor pushes
          an update; your accuracy quietly shifts. The prompt is tweaked; an
          edge case starts failing. Without a way to roll back — and a
          measurement that catches the regression in the first place — every
          release is a roll of the dice.
        </p>
        <p>
          We look for: version-pinned models where possible, an evaluation
          harness that re-runs on every release, and a documented rollback
          procedure someone other than the original engineer can execute.
          Most pilots fail at least one of these.
        </p>

        <BlogH2>6. Why are we building this at all?</BlogH2>
        <p>
          Almost every audit ends up surfacing this one. Halfway through, the
          team realizes the pilot was solving a different problem than the
          one originally specified, or that the problem itself was assumed
          rather than measured. The model is working; the question is wrong.
        </p>
        <p>
          This isn&apos;t a model-engineering question — it&apos;s a strategy
          question — but we always ask it. It&apos;s also the single
          highest-leverage thing an outside reviewer can do, because the
          people closest to the build can&apos;t easily ask it themselves
          anymore.
        </p>

        <BlogH2>What the report looks like</BlogH2>
        <p>
          Every audit ends in an 8–12 page written report. Findings ranked by
          severity, methodology documented enough to be re-run, concrete
          remediation steps, and a 60-minute walkthrough with your team. We
          don&apos;t ship slides. We don&apos;t ship vibes. You can hand the
          PDF to a board, a vendor, or a clinical reviewer and have them work
          from it directly.
        </p>
        <p>
          If anything on this list is making you nervous about your own pilot
          — that&apos;s a good sign. It means there&apos;s something there to
          find.
        </p>
      </BlogBody>

      <section className="relative pb-20 pt-4 sm:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <DiagnosticCTA
            variant="banner"
            headline="Want this run against your AI pilot?"
            subhead="The full one-week AI Rigor Audit. Fixed fee, written report, no decks. Reply within 12 hours."
          />
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-mist-300 transition-colors hover:text-mist-50"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All posts
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
