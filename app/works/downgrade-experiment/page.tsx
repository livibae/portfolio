"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import LetsTalk from "@/components/LetsTalk";
import { useState, useEffect } from "react";

const metrics = [
  { value: "$400K", label: "retained ARR per year", align: "left" as const },
  { value: "−7%", label: "cancelled ARR for 6+ member subs", align: "center" as const },
];

const chips = ["Churn & retention", "Claude Design prototype", "A/B testing"];

const navItems = [
  { label: "Context", id: "context" },
  { label: "Problem & Data insights", id: "problem" },
  { label: "Opportunity", id: "opportunity" },
  { label: "Solution", id: "solution" },
  { label: "Outcome", id: "outcome" },
  { label: "Next Steps", id: "next-steps" },
];

export default function DowngradeExperiment() {
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
                Retaining $400K ARR with downgrade alternatives
              </h1>
              <p className="mb-6 max-w-2xl font-sans text-sm leading-relaxed text-gray-600 md:text-base">
                Offering yearly-to-monthly and Business-to-Starter plan downgrades in cancelation flow to reduce churn
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
                <p className="font-sans text-sm font-medium text-gray-900">July – September 2026</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Role</p>
                <p className="font-sans text-sm font-medium text-gray-900">Associate Product Manager, Growth</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Team</p>
                <p className="font-sans text-sm font-medium text-gray-900">1 Designer · 1 Data Analyst · 1 Engineer</p>
              </div>
            </div>
          </div>
        </header>

        <div className="glass-strip">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 gap-8">
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

              <section className="scroll-mt-28" id="context">
                <SectionLabel>Context</SectionLabel>
                <p className="font-sans text-base leading-relaxed text-gray-600">
                  Miro&apos;s churn from self-serve customers has been accelerating, with $3–4M ARR worth of customers entering the cancelation flow to cancel their subscription. In this experiment, <strong>I offered new and improved downgrade alternatives in the cancelation flow, retaining $400K ARR/year</strong>.
                </p>
              </section>

              <section className="scroll-mt-28" id="problem">
                <SectionLabel>Problem &amp; Data insights</SectionLabel>

                <div className="flex flex-col gap-10 mb-8">
                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      1. Benefits and implications of Business → Starter downgrade could be improved
                    </h3>
                    <p className="font-sans text-base leading-relaxed mb-4 text-gray-600">
                      Business Plan customers can currently choose to downgrade to Starter in the cancelation flow. However, the benefits and implications of that path were unclear.
                    </p>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        <strong>Data:</strong> 25% of customers who saw the modal continued to the next implications screen, even after we removed the $$ saved tag.
                        <br />
                        <strong>Insight:</strong> The cost-saving framing of Business → Starter already resonates. We should not make major changes that harm what is already working.
                      </li>
                      <li>
                        <strong>Data:</strong> 50% of customers who saw the Downgrade implications screen bounced.
                        <br />
                        <strong>Insight:</strong> Current Downgrade implications are too overwhelming and negatively framed, dissuading users from proceeding (assumption: some of whom cancel instead).
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      2. Starter Plan customers have no alternative to canceling
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        <strong>Data:</strong> ~10% of Business customers entering the cancelation flow chose to downgrade instead of canceling (65% cancel). In contrast, ~88% of Starter customers entering the flow continue to cancel because they have no alternative options.
                        <br />
                        <strong>Insight:</strong> Similar to the Business flow, offering an alternative option to Starter customers may help reduce cancelations.
                      </li>
                      <li>
                        <strong>Data:</strong> A previous experiment offering Yearly → Monthly change on the Billing page increased retention by +0.8% and retained 102 customers/mo, est. ~$0.5M ARR/year.
                        <br />
                        <strong>Insight:</strong> Allowing customers to change billing period from Yearly to Monthly resonates with customers.
                      </li>
                    </ul>
                  </div>
                </div>
                <CaseImage src="/case-studies/downgrade-experiment/problem1.jpg" alt="Problem and data insights for the downgrade experiment" />
              </section>

              <section className="scroll-mt-28" id="opportunity">
                <SectionLabel>Opportunity</SectionLabel>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc mb-8 text-gray-600">
                  <li>
                    If we make the benefits and implications of Downgrade clearer and more digestible, we can reduce #orgs confirming cancelation by guiding them towards plan downgrade.
                  </li>
                  <li>
                    If we provide a new alternative option that offers more payment flexibility by changing from Yearly to Monthly billing, we can reduce #orgs confirming cancelation.
                  </li>
                  <li>
                    Created a <strong>Claude design prototype with problems, design principles, and 3 design directions</strong> to kickstart and stimulate discussion with the Designer.
                  </li>
                </ul>
                <CaseVideo src="/case-studies/downgrade-experiment/opportunity_1.mp4" />
              </section>

              <section className="scroll-mt-28" id="solution">
                <SectionLabel>Solution</SectionLabel>
                <div className="mb-8">
                  <CaseVideo src="/case-studies/downgrade-experiment/solution1.mp4" />
                </div>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc mb-8 text-gray-600">
                  <li>
                    <strong>Offer a new Yearly → Monthly downgrade alternative</strong> in the cancelation flow for <strong>Starter and Business Yearly</strong> customers seeking more payment flexibility.
                  </li>
                  <li>
                    <strong>Improved Business → Starter Plan downgrade implications</strong> in the cancelation flow for <strong>all Business customers</strong> to reduce bounce rate.
                  </li>
                  <li>
                    Created a <strong>Decision Matrix</strong> that maps out all possible outcome scenarios and next steps to <strong>ensure a clear decision path and prevent confirmation bias</strong> at the end of the experiment.
                  </li>
                </ul>
                <CaseImage src="/case-studies/downgrade-experiment/solution1.jpg" alt="Downgrade experiment solution and decision matrix" compact />
              </section>

              <section className="scroll-mt-28" id="outcome">
                <SectionLabel>Outcome</SectionLabel>
                <div className="flex flex-col gap-8">
                  <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                    <li>
                      Treatment shows a <strong>directionally positive decrease</strong> in cancelled ARR (&gt;60% of confidence intervals fall below zero), retaining ~<strong>$400K ARR/year</strong>.
                    </li>
                    <li>
                      <strong>Analysis by team size:</strong> <strong>Subscriptions with 6+ members</strong> are the main driver of impact, showing a <strong>6–8% drop</strong> in cancelled ARR consistently across 2 months.
                    </li>
                  </ul>
                  <CaseImage src="/case-studies/downgrade-experiment/outcome1.jpg" alt="Outcome analysis by team size" />

                  <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                    <li>
                      <strong>Analysis by plan and billing period:</strong>
                      <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                        <li>
                          Cancelled ARR <strong>decreased by 4pp</strong> in <strong>Starter Yearly</strong> (eligible to downgrade to Monthly) and <strong>9pp</strong> in <strong>Business Monthly</strong> (eligible to downgrade to Starter). This supports the hypotheses that offering more payment flexibility and clearer Starter downgrade implications reduce cancelations.
                        </li>
                        <li>
                          Cancelled ARR <strong>did not increase in Business Yearly</strong>, even though they are eligible for both Monthly and Starter downgrades. Just that offering multiple downgrade alternatives in one flow might have increased cognitive load and caused choice paralysis, backfiring and led to higher cancellations.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <CaseImage src="/case-studies/downgrade-experiment/outcome2.jpg" alt="Outcome analysis by plan and billing period" />
                </div>
              </section>

              <section className="scroll-mt-28" id="next-steps">
                <SectionLabel>Next Steps</SectionLabel>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                  <li>
                    Experiment <strong>rolled out to 100% Starter and Business cancelling customers</strong>
                  </li>
                  <li>
                    Expand to <strong>customers cancelling Business Plan trial</strong>
                  </li>
                  <li>
                    <strong>Update visual language</strong> to ensure consistency across the whole flow
                  </li>
                  <li>
                    <strong>Handle edge case scenario</strong>: when customers have an active coupon applied to their subscription, they see &quot;$0&quot; for their current plan price
                  </li>
                </ul>
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

function CaseVideo({ src }: { src: string }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
      <video
        src={src}
        className="w-full h-auto block"
        autoPlay
        muted
        loop
        playsInline
        controls
      />
    </div>
  );
}

function SectionNav() {
  const [active, setActive] = useState("context");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
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
              style={{
                fontSize: "1.2rem",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "var(--color-text)" : "var(--color-text-muted)",
                textDecoration: "none",
                paddingLeft: "14px",
                borderLeft: isActive ? "2px solid var(--color-text)" : "2px solid var(--color-border)",
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
