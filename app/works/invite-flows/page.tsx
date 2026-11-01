"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import LetsTalk from "@/components/LetsTalk";
import { useState, useEffect } from "react";

const metrics = [
  { value: "−90%", label: "license-related support tickets (about 20 a month to 2)", align: "left" as const },
  { value: "−99%", label: "license refunds (about $5K a month to $60)", align: "center" as const },
];

const chips = ["Billing transparency", "Churn & retention", "A/B testing", "Stakeholder management"];

const navItems = [
  { label: "TL;DR", id: "tldr" },
  { label: "Approach", id: "approach" },
  { label: "Discovery", id: "discovery", depth: 1 },
  { label: "Prioritization", id: "prioritization", depth: 1 },
  { label: "Experiment 1: Board invite", id: "experiment-1" },
  { label: "Problem", id: "exp1-problem", depth: 1 },
  { label: "Data", id: "exp1-data", depth: 1 },
  { label: "Competitor inspiration", id: "exp1-competitor", depth: 1 },
  { label: "Solution", id: "exp1-solution", depth: 1 },
  { label: "Experiment set-up & metrics", id: "exp1-metrics", depth: 1 },
  { label: "Experiment 2: License management", id: "experiment-2" },
  { label: "Problem & Context", id: "exp2-problem", depth: 1 },
  { label: "Competitors analysis", id: "exp2-competitors", depth: 1 },
  { label: "Solution", id: "exp2-solution", depth: 1 },
  { label: "Experiment Set-up & Metrics", id: "exp2-metrics", depth: 1 },
  { label: "Results", id: "results", depth: 1 },
];

export default function InviteFlows() {
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
                Reducing customer support tickets by 90% by improving Miro&apos;s invite and license management flow
              </h1>
              <p className="mb-6 max-w-2xl font-sans text-sm leading-relaxed text-gray-600 md:text-base">
                Bringing transparency back to how Miro adds and removes paid seats, without giving up the growth loop
              </p>
              <div className="flex flex-wrap gap-2">
                {chips.map(chip => (
                  <span key={chip} className="glass-tag">
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
                <p className="font-sans text-sm font-medium text-gray-900">July - August 2026</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Role</p>
                <p className="font-sans text-sm font-medium text-gray-900">Associate Product Manager, Growth</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Team</p>
                <p className="font-sans text-sm font-medium text-gray-900">1 Designer · 1 Data Analyst · 2 Engineers</p>
              </div>
            </div>
          </div>
        </header>

        <div className="glass-strip">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
                <div className="font-sans flex flex-col gap-4 text-base leading-relaxed text-gray-600">
                  <p>
                    Miro&apos;s churn from self-serve customers has been accelerating, and one of the top causes is unexpected charges from intransparent subscription mechanics. Customers pay for additional paid seats without realising it, and removing a user doesn&apos;t remove the paid license.
                  </p>
                  <p>
                    I ran two experiments to make invite and license management transparent, cutting license-related support tickets by <strong>90%</strong> and refunds by <strong>99%</strong>. First, I redesigned the board invite flows so admins see the cost before inviting someone, and offset the expected expansion hit with new monetisation opportunities. Second, I brought back a clear modal when admins remove a user, so they can remove the vacant license directly.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-28" id="approach">
                <SectionLabel>Approach</SectionLabel>
                <div className="flex flex-col gap-10">
                  <div className="scroll-mt-28" id="discovery">
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Discovery
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        Understand the full breadth of the problem first. I ran a UX audit with our Designer, screenshotting every flow on a Miro board. I added competitor analysis, customer support complaints, and rapid-fire stakeholder interviews to understand why these decisions were made, and what we have tried and failed.
                      </li>
                    </ul>
                  </div>

                  <div className="scroll-mt-28" id="prioritization">
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Prioritization
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        Prioritise the highest-traffic and most confusing flows by comparing two metrics for each flow:
                        <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                          <li>The number of paid licenses and ARR per year gained through a flow</li>
                          <li>30-day demonetisation rate (% paid licenses removed within 30 days of invite)</li>
                        </ul>
                      </li>
                      <li>
                        Break the problem into testable experiments. With only two months, I combined one big bet with one low-hanging fruit, running one experiment in execution while the next was in discovery.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-28" id="experiment-1">
                <SectionLabel>Experiment 1: Board invite flow</SectionLabel>
                <div className="flex flex-col gap-10">
                  <div className="scroll-mt-28" id="exp1-problem">
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Problem
                    </h3>
                    <CaseImage
                      src="/case-studies/invite-flows/board-invite/problem1.jpg"
                      alt="Board invite flow problem"
                    />
                  </div>

                  <div className="scroll-mt-28" id="exp1-data">
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Data
                    </h3>
                    <div className="flex flex-col gap-6">
                      <CaseImage
                        src="/case-studies/invite-flows/board-invite/data1.jpg?v=2"
                        alt="Board invite flow data 1"
                      />
                      <CaseImage
                        src="/case-studies/invite-flows/board-invite/data2.jpg?v=2"
                        alt="Board invite flow data 2"
                      />
                      <CaseImage
                        src="/case-studies/invite-flows/board-invite/data3.jpg"
                        alt="Board invite flow data 3"
                      />
                    </div>
                  </div>

                  <div className="scroll-mt-28" id="exp1-competitor">
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Competitor inspiration
                    </h3>
                    <CaseImage
                      src="/case-studies/invite-flows/board-invite/competitor.jpg"
                      alt="Competitor inspiration for board invite flows"
                    />
                  </div>

                  <div className="scroll-mt-28" id="exp1-solution">
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Solution
                    </h3>
                    <CaseImage
                      src="/case-studies/invite-flows/board-invite/solution.jpg?v=2"
                      alt="Board invite flow solution"
                    />
                  </div>

                  <div className="scroll-mt-28" id="exp1-metrics">
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Experiment set-up and metrics
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        <strong>Primary metric:</strong> nnARR (new + expansion − contraction − churn)
                      </li>
                      <li>
                        <strong>Guardrail metric:</strong> #new paid license users added (cutoff = −20%, max acceptable ARR decrease = −$1.8M)
                      </li>
                      <li>
                        <strong>Experiment duration</strong> = 8 weeks, for 12% relative MDE
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-28" id="experiment-2">
                <SectionLabel>Experiment 2: License management</SectionLabel>
                <div className="flex flex-col gap-10">
                  <div className="scroll-mt-28" id="exp2-problem">
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Problem &amp; Context
                    </h3>
                    <CaseImage
                      src="/case-studies/invite-flows/license-mgt/problem.jpg"
                      alt="License management problem and context"
                    />
                  </div>

                  <div className="scroll-mt-28" id="exp2-competitors">
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Competitors analysis
                    </h3>
                    <CaseImage
                      src="/case-studies/invite-flows/license-mgt/competitors.jpg"
                      alt="Competitors analysis for license management"
                    />
                  </div>

                  <div className="scroll-mt-28" id="exp2-solution">
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Solution
                    </h3>
                    <CaseImage
                      src="/case-studies/invite-flows/license-mgt/solution.jpg"
                      alt="License management solution"
                    />
                  </div>

                  <div className="scroll-mt-28" id="exp2-metrics">
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Experiment Set-up &amp; Metrics
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        A/B non-inferiority test
                      </li>
                      <li>
                        <strong>Primary metrics:</strong> contraction ARR
                      </li>
                      <li>
                        <strong>Learning metrics:</strong> related customer support tickets and manual refunds, license occupancy rate, new #full licenses added, expansion ARR, churn ARR
                      </li>
                      <li>
                        <strong>Guardrail metrics:</strong> number of removed paid licenses in UI
                      </li>
                      <li>
                        <strong>Est. experiment duration:</strong> 8 weeks, cut-off for primary metric is 11.2%, maximum allowed ARR loss = −$3.2M/year
                      </li>
                    </ul>
                  </div>

                  <div className="scroll-mt-28" id="results">
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Results
                    </h3>
                    <CaseImage
                      src="/case-studies/invite-flows/license-mgt/tradeoff.jpg"
                      alt="Trade-off results for invite and license management experiments"
                    />
                  </div>
                </div>
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

function CaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
    </div>
  );
}

function SectionNav() {
  const [active, setActive] = useState("tldr");

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
      style={{ width: "220px", position: "sticky", top: "100px", alignSelf: "flex-start" }}
    >
      <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>
        On this page
      </p>
      <nav className="flex flex-col gap-3">
        {navItems.map(item => {
          const isActive = active === item.id;
          const depth = "depth" in item ? item.depth ?? 0 : 0;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                fontSize: depth ? "0.95rem" : "1.1rem",
                fontWeight: isActive ? 700 : depth ? 450 : 500,
                color: isActive ? "var(--color-text)" : "var(--color-text-muted)",
                textDecoration: "none",
                paddingLeft: depth ? "28px" : "14px",
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
