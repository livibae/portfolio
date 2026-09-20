"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

const metrics = [
  { value: "$600K", label: "retained ARR per year", align: "left" as const },
  { value: "66% → 84%", label: "coupon application rate", align: "center" as const },
  { value: "51%", label: "2-month retention", align: "center" as const },
];

const chips = ["Churn & retention", "A/B testing"];

const navItems = [
  { label: "Context", id: "context" },
  { label: "Opportunity", id: "opportunity" },
  { label: "Solution", id: "solution" },
  { label: "Outcome", id: "outcome" },
  { label: "Next Steps", id: "next-steps" },
];

export default function WinbackOffer() {
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
                Retaining $600K at-risk ARR with 1-month winback offer
              </h1>
              <p className="mb-6 max-w-2xl font-sans text-sm leading-relaxed text-gray-600 md:text-base">
                Using discounts as a last-resort save for price-sensitive teams at cancelation moment
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
                <p className="font-sans text-sm font-medium text-gray-900">May 2026 – July 2026</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Role</p>
                <p className="font-sans text-sm font-medium text-gray-900">Associate Product Manager, Growth</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Team</p>
                <p className="font-sans text-sm font-medium text-gray-900">1 Designer · 1 Data Analyst · 2 Engineers · 1 Lifecycle marketer</p>
              </div>
            </div>
          </div>
        </header>

        <div className="glass-strip">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-3 gap-8">
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
                  Churn from self-serve customers has been accelerating, hemorrhaging $3–4M ARR every month. The disbanded Expansion &amp; Retention team successfully reduced churn by giving a one-month free offer to Starter &amp; Business plan customers canceling within their first 3 months. I was responsible for rolling out the winning tactic to 100% of users, making improvements based on experiment results, and monitoring its long-term impact on retention.
                </p>
              </section>

              <section className="scroll-mt-28" id="opportunity">
                <SectionLabel>Opportunity</SectionLabel>
                <p className="font-sans text-base leading-relaxed mb-6 text-gray-600">
                  Opportunities for improvement post-experiment:
                </p>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                  <li>The original UX included a questionnaire that was later deprecated.</li>
                  <li>
                    Only 66% of teams who accepted the offer successfully applied the coupon at plan renewal — likely because users did not know that canceling their subscription again before renewal automatically removes the discount.
                  </li>
                  <li>
                    There were a handful of suspected abuse cases: teams canceling within days of starting a paid subscription, subscribing with a card with insufficient funds, or accepting the offer with existing unpaid invoices.
                  </li>
                  <li>No confirmation email after the user accepts the offer.</li>
                </ul>
              </section>

              <section className="scroll-mt-28" id="solution">
                <SectionLabel>Solution</SectionLabel>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc mb-8 text-gray-600">
                  <li>
                    Simplified UX with a new screen promoting the most valuable paid plan features (based on Max Diff research) and a CTA directing users back to the product after they accept the offer.
                  </li>
                  <li>
                    Added a yellow call-out warning users they will lose the free month offer if they cancel before the renewal date.
                  </li>
                  <li>Added exclusion criteria to reduce incidents of suspected abuse.</li>
                  <li>
                    Implemented a transactional email to confirm the in-product behavior of accepting the offer.
                  </li>
                </ul>
                <CaseImage src="/case-studies/winback-offer/solution-1.jpg" alt="Post-GA solution changes: eligibility criteria, winback flow, and confirmation email" />
              </section>

              <section className="scroll-mt-28" id="outcome">
                <SectionLabel>Outcome</SectionLabel>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc mb-8 text-gray-600">
                  <li>
                    <strong>$600K</strong> retained ARR per year; retention after the 2nd invoice is stable at <strong>51%</strong>.
                  </li>
                  <li>
                    The tactic only captures ~1% of ARR entering the cancelation flow, and mainly saves smaller, lower-value teams with higher price sensitivity. The winback offer is a useful final resort for smaller customers — but not a churn solution.
                  </li>
                  <li>
                    Conversion from offer accepted to coupon applied at renewal increased from <strong>66%</strong> (exp) to <strong>84%</strong> (post-GA).
                  </li>
                  <li>
                    Confirmation email has a strong open rate (<strong>57%</strong>) but weak click-through rate (<strong>2%</strong>), suggesting it mainly serves as a transactional confirmation of user action — not a surface for re-engaging users with new features.
                  </li>
                  <li>
                    Engagement of retained vs. cancelled cohorts looked similar and cannot explain the difference.
                  </li>
                </ul>
                <CaseImage src="/case-studies/winback-offer/outcome-1.jpg" alt="Overall impact and funnel metrics post-GA" />
              </section>

              <section className="scroll-mt-28" id="next-steps">
                <SectionLabel>Next Steps</SectionLabel>
                <div className="flex flex-col gap-10">
                  <NextStep
                    number="1"
                    text="Extend / reframe the offer for 7mo–1.5yr cohorts"
                    body="Older (7–12 month) cohorts are more likely to accept the offer (22% vs ~15%) than other cohorts, and are equally likely to retain as younger (1–6 month) cohorts. The offer should be paired with value reinforcement, as older teams are likely to be less price-sensitive."
                    imgSrc="/case-studies/winback-offer/next-step-1.jpg"
                    imgAlt="Funnel by subscription age showing older cohorts accept and retain at higher rates"
                  />
                  <NextStep
                    number="2"
                    text="Link winback to paid onboarding after accept"
                    body="After users accept the offer, connect them to in-product and lifecycle paid onboarding experiences to increase engagement during the free month and maintain long-term retention."
                  />
                </div>
              </section>

            </article>

            <SectionNav />
          </div>
        </div>

        <div className="border-t py-12 px-6" style={{ borderColor: "var(--color-border)" }}>
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link
              href="/#projects"
              className="text-sm font-medium hover:opacity-60 transition-opacity"
              style={{ color: "var(--color-text-muted)" }}
            >
              ← Back to Projects
            </Link>
            <a
              href="https://www.linkedin.com/in/livia-yeung/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Connect with me
            </a>
          </div>
        </div>
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

function NextStep({
  number,
  text,
  body,
  imgSrc,
  imgAlt,
}: {
  number: string;
  text: string;
  body: string;
  imgSrc?: string;
  imgAlt?: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <span
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white"
        >
          {number}
        </span>
        <p className="font-sans text-lg font-semibold tracking-tight leading-snug text-gray-900">
          {text}
        </p>
      </div>
      <p className="font-sans text-base leading-relaxed pl-12 text-gray-600">
        {body}
      </p>
      {imgSrc && <CaseImage src={imgSrc} alt={imgAlt ?? ""} />}
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
