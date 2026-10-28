"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import LetsTalk from "@/components/LetsTalk";
import { useState, useEffect } from "react";

const metrics = [
  { value: "No sig decrease", label: "in cancelled ARR (p = 0.53)", align: "left" as const },
];

const chips = ["Churn & retention", "Stakeholder management", "A/B testing"];

const navItems = [
  { label: "TL;DR", id: "tldr" },
  { label: "Context", id: "context" },
  { label: "Solution Overview", id: "solution" },
  { label: "Experiment Set-up & Metrics", id: "experiment" },
  { label: "Results", id: "results" },
  { label: "Learnings", id: "learnings" },
  { label: "Next Steps", id: "next-steps" },
];

export default function FomoExperiment() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-6xl mx-auto px-6 pt-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity"
            style={{ color: "var(--color-text-muted)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </Link>
        </div>

        <header className="max-w-6xl mx-auto px-6 pt-10 pb-12">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <h1 className="mb-4 max-w-4xl font-sans text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-6xl">
                Improving value reminder in the cancellation flow using personalised data
              </h1>
              <p className="mb-6 max-w-2xl font-sans text-sm leading-relaxed text-gray-600 md:text-base">
                Using customized data to showcase the value of Miro to cancelling customers
              </p>
              <div className="flex flex-wrap gap-2">
                {chips.map(chip => (
                  <span
                    key={chip}
                    className="glass-tag"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-2">
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Company</p>
                <p className="font-sans text-sm font-medium text-gray-900">Miro</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Period</p>
                <p className="font-sans text-sm font-medium text-gray-900">July - September 2026</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Role</p>
                <p className="font-sans text-sm font-medium text-gray-900">Associate Product Manager, Growth</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Team</p>
                <p className="font-sans text-sm font-medium text-gray-900">1 Designer, 1 Data Analyst, 1 Engineer</p>
              </div>
            </div>
          </div>
        </header>

        <div className="glass-strip">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 gap-8">
              {metrics.map(m => (
                <div key={m.label} style={{ textAlign: m.align }}>
                  <p className="mb-1 font-sans text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                    {m.value}
                  </p>
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-16 pt-12">
          <div className="flex gap-16 items-start">
            <article className="flex-1 min-w-0 flex flex-col gap-16">

              <section className="scroll-mt-28" id="tldr">
                <SectionLabel>TL;DR</SectionLabel>
                <p className="font-sans text-base leading-relaxed text-gray-600">
                  Miro&apos;s churn from self-serve customers has been accelerating, with $3–4M ARR worth of customers entering the cancelation flow to cancel their subscription. In this experiment, I tried to improve the first screen (&quot;FOMO&quot; screen) by <strong>highlighting the investments they have built in Miro using customized data</strong>, such as the number of boards they have created. Treatment did not significantly decrease cancellations, but we extracted learnings about user behaviour for future experiments.
                </p>
              </section>

              <section className="scroll-mt-28" id="context">
                <SectionLabel>Context</SectionLabel>
                <div className="mb-8">
                  <CaseImage src="/case-studies/fomo/context1.jpg" alt="Context for the FOMO screen experiment" />
                </div>
                <div className="flex flex-col gap-10">
                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Problem
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        The FOMO screen <strong>only dissuades ~10% users</strong> who saw it. Qualitatively, the <strong>copy is generic</strong> and irrelevant, failing to convey meaningful cost of leaving
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Competitor analysis
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        Competitors like Canva, Figma, and Youtube all display <strong>organization-specific data to demonstrate the tangible consequence of canceling their subscription</strong>. This serves the duo purpose of highlighting things they have own/built that will be lost, and informing them of what will happen to things they created on the platform
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Past learnings
                    </h3>
                    <p className="font-sans text-base leading-relaxed mb-4 text-gray-600">
                      The Expansion &amp; Retention team ran several cancellation flow experiments that, while not significantly reducing churn, produced clear learnings:
                    </p>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        An experiment replacing the FOMO screen with interactive cards showing org usage vs. similar orgs (e.g. &quot;top 5% in boards created&quot;) was not successful but the top 1% of orgs showed a 17% increase in exit rate. This suggests <strong>personalized usage data can reduce cancellations, but only when it clearly signals high investment</strong>. Social benchmarking that doesn&apos;t land as impressive can backfire.
                      </li>
                      <li>
                        Across three experiments that removed the existing FOMO screen, two failed — reinforcing that the <strong>existing FOMO with paid feature list should be augmented, not replaced</strong>.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Hypothesis
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        We believe that showing organization-specific data (boards, team members, tenure) on the FOMO screen for higher-investment orgs will reduce the percentage of orgs confirming cancellation and cancelled ARR, without harming contraction ARR.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-28" id="solution">
                <SectionLabel>Solution Overview</SectionLabel>
                <CaseImage src="/case-studies/fomo/solution1.jpg" alt="FOMO screen solution: control vs treatment" />
              </section>

              <section className="scroll-mt-28" id="experiment">
                <SectionLabel>Experiment Set-up &amp; Metrics</SectionLabel>
                <div className="mb-8">
                  <CaseImage src="/case-studies/fomo/exp1.jpg" alt="Experiment set-up" />
                </div>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                  <li>
                    <strong>Primary metric</strong>: % of confirmed cancelled ARR over ARR entering the cancellation flow (superiority test)
                  </li>
                  <li>
                    <strong>Learning metrics</strong>: breakdown of cancelled ARR by plan, team size, subscription age
                    <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                      <li>
                        Why: to understand whether treatment has different effects to specific segments
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Guardrail</strong>: contraction ARR
                    <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                      <li>
                        Why: treatment may drive more users to the next screen where Business users can downgrade plans, leading to contraction
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section className="scroll-mt-28" id="results">
                <SectionLabel>Results</SectionLabel>
                <div className="flex flex-col gap-8">
                  <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                    <li>
                      Overall, <strong>treatment has no significant impact on cancelled ARR</strong> (84.92% control vs 86.91% treatment, +2.34%, p = 0.53) compared to control.
                    </li>
                    <li>
                      There are no consistent trends in specific customer segments across plans, team size, and subscription age
                      <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                        <li>
                          <strong>By plan</strong>: no signifiant decrease.
                        </li>
                        <li>
                          <strong>By team size</strong>: treatment decreased ~2% for 6-10 seaters. However, the decrease in #org confirming cancellations are negligible (29 vs 32 orgs), suggesting the <strong>decrease in cancelled ARR is likely due to outliers with high sub value</strong>. There is also <strong>no linear trend</strong>; treatment increased cancellations for 11+ seaters and all other team sizes. Re-testing for significance would also take &gt;1 year and not feasible.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <CaseImage src="/case-studies/fomo/results1.jpg" alt="Results by team size" />

                  <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                    <li>
                      <strong>By subscription age</strong>: similarly, treatment decreased cancelled ARR by 6% for 1-1.5y orgs but there is no linear trend and re-testing takes &gt;1 year and is unfeasible
                    </li>
                  </ul>
                  <CaseImage src="/case-studies/fomo/results2.jpg" alt="Results by subscription age" />
                </div>
              </section>

              <section className="scroll-mt-28" id="learnings">
                <SectionLabel>Learnings: why didn&apos;t it work?</SectionLabel>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                  <li>
                    <strong>The design of incumbent FOMO</strong> (&quot;we are sorry to see you go&quot; emotional sabotaging title, heartbreak emoji, and red box) <strong>are more potent than the loss of investment</strong> that users have put into Miro highlighted by personalized data like #boards and team members that will lose access
                  </li>
                  <li>
                    Control&apos;s framing (&quot;you will lose x features&quot;) creates more urgency and is more potent than the positive framing of treatment (&quot;Keep plan to continue using x features&quot;)
                  </li>
                  <li>
                    <strong>Highlighting usage with personalized data backfires by reminding orgs of how little they use Miro</strong>
                  </li>
                </ul>
              </section>

              <section className="scroll-mt-28" id="next-steps">
                <SectionLabel>Next Steps</SectionLabel>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc mb-8 text-gray-600">
                  <li>
                    Roll back experiment
                  </li>
                  <li>
                    Update feature list copy to reflect latest user research on features of highest value to users. Proposed updated copies in Figma for Content Design review
                  </li>
                </ul>
                <CaseImage src="/case-studies/fomo/nextstep1.jpg" alt="Proposed updated FOMO feature list copy" />
              </section>

            </article>

            <SectionNav />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-4">
          <Link
            href="/#projects"
            className="text-sm font-medium hover:opacity-60 transition-opacity"
            style={{ color: "var(--color-text-muted)" }}
          >
            ← Back to Projects
          </Link>
        </div>
        <LetsTalk />
      </main>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-sans text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
      {children}
    </h2>
  );
}

function CaseImage({ src, alt, compact }: { src: string; alt: string; compact?: boolean }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        border: "1px solid var(--color-border)",
        maxWidth: compact ? "640px" : undefined,
        marginInline: compact ? "auto" : undefined,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
    </div>
  );
}

function SectionNav() {
  const [active, setActive] = useState("tldr");

  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (navItems.some((item) => item.id === id)) setActive(id);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const ratios = new Map<string, number>();
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
          let bestId = "";
          let bestRatio = 0;
          navItems.forEach((item) => {
            const ratio = ratios.get(item.id) ?? 0;
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = item.id;
            }
          });
          if (bestId) setActive(bestId);
        },
        { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5, 1] },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <aside
      className="hidden lg:block flex-shrink-0"
      style={{ width: "200px", position: "sticky", top: "100px", alignSelf: "flex-start" }}
    >
      <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>
        On this page
      </p>
      <nav className="flex flex-col gap-4">
        {navItems.map(item => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              style={{
                fontSize: "1.2rem",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "#111827" : "var(--color-text-muted)",
                textDecoration: "none",
                paddingLeft: "14px",
                borderLeft: isActive ? "2px solid #111827" : "2px solid var(--color-border)",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
