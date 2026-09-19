"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

const metrics = [
  { value: "$800K+", label: "ARR generated in 3 months", align: "left" as const },
  { value: "2×", label: "add-on purchase conversion", align: "center" as const },
  { value: "219", label: "orgs influenced to purchase Prototypes", align: "center" as const },
];

const chips = ["Working with GTM", "Lifecycle", "SQL", "Replit prototype"];

const navItems = [
  { label: "Context", id: "context" },
  { label: "Problem", id: "problem" },
  { label: "Opportunity", id: "opportunity" },
  { label: "Solution", id: "experiment" },
  { label: "Outcome", id: "outcome" },
  { label: "Next Steps", id: "next-steps" },
];

export default function MiroPrototypes() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        {/* Back link */}
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

        {/* Header */}
        <header className="max-w-6xl mx-auto px-6 pt-10 pb-12">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
            {/* Left */}
            <div>
              <h1 className="mb-4 max-w-4xl font-sans text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-6xl">
                Generating $800K ARR in 3 months for Miro Prototypes
              </h1>
              <p className="mb-6 max-w-2xl font-sans text-sm leading-relaxed text-gray-600 md:text-base">
                Enabling product-led sales through a feature request flow
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

            {/* Right: meta */}
            <div className="flex flex-col gap-6 pt-2">
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Company</p>
                <p className="font-sans text-sm font-medium text-gray-900">Miro</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Period</p>
                <p className="font-sans text-sm font-medium text-gray-900">November 2025 – January 2026</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Role</p>
                <p className="font-sans text-sm font-medium text-gray-900">Associate Product Manager</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Team</p>
                <p className="font-sans text-sm font-medium text-gray-900">1 Designer · 1 Data Analyst · 6 Engineers</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Stakeholders</p>
                <p className="font-sans text-sm font-medium text-gray-900">Go-to-market · Product Marketing · Lifecycle · Customer Support</p>
              </div>
            </div>
          </div>
        </header>

        {/* Metrics bar */}
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

        {/* Body + sticky nav */}
        <div className="max-w-6xl mx-auto px-6 pb-16 pt-12">
          <div className="flex gap-16 items-start">

            {/* Article */}
            <article className="flex-1 min-w-0 flex flex-col gap-16">

              <section className="scroll-mt-28" id="context">
                <SectionLabel>Context</SectionLabel>
                <p className="font-sans text-base leading-relaxed text-gray-600">
                  Miro Prototypes is an interactive prototyping tool built into Miro, enabling design and product teams to create and share clickable flows without leaving the canvas. The objective was to monetise the feature by converting free and Starter users into paid plans through a combination of trials and upgrade moments.
                </p>
              </section>

              <section className="scroll-mt-28" id="problem">
                <SectionLabel>Problem</SectionLabel>
                <CaseImage src="/case-studies/miro-prototypes/problem-1.jpg" alt="Problem overview" />
              </section>

              <section className="scroll-mt-28" id="opportunity">
                <SectionLabel>Opportunity</SectionLabel>
                <div className="flex flex-col gap-6">
                  <CaseImage src="/case-studies/miro-prototypes/opportunity-1.jpg" alt="Opportunity analysis 1" />
                  <CaseImage src="/case-studies/miro-prototypes/opportunity-2.jpg" alt="Opportunity analysis 2" />
                  <CaseImage src="/case-studies/miro-prototypes/opportunity-3.jpg" alt="Opportunity analysis 3" />
                  <CaseImage src="/case-studies/miro-prototypes/opportunity-4.jpg" alt="Opportunity analysis 4" />
                </div>
              </section>

              <section className="scroll-mt-28" id="experiment">
                <SectionLabel>Solution</SectionLabel>
                <CaseVideo src="/case-studies/miro-prototypes/solution-1.mp4" />
              </section>

              <section className="scroll-mt-28" id="outcome">
                <SectionLabel>Outcome</SectionLabel>
                <CaseImage src="/case-studies/miro-prototypes/outcome-1.jpg" alt="Outcome" />
              </section>

              <section className="scroll-mt-28" id="next-steps">
                <SectionLabel>Next Steps</SectionLabel>
                <div className="flex flex-col gap-10">
                  <CaseImage src="/case-studies/miro-prototypes/nextsteps-1.jpg" alt="Next steps overview" />
                  <NextStep
                    number="1"
                    text="Add-on Request Weekly Summary email"
                    status="launched"
                    imgSrc="/case-studies/miro-prototypes/nextsteps-2.jpg"
                    imgAlt="Next steps 1"
                  />
                  <NextStep
                    number="2"
                    text="Centralizing add-on requests in Admin System"
                    status="handed over"
                    imgSrc="/case-studies/miro-prototypes/nextsteps-3.jpg"
                    imgAlt="Next steps 2"
                  />
                  <NextStep
                    number="3"
                    text="Personalized Business Case Builder"
                    status="Figma & Replit prototype"
                    loomId="479c5403c8c847278add27db1d226cd0"
                  />
                </div>
              </section>

            </article>

            {/* Sticky nav */}
            <SectionNav />

          </div>
        </div>

        {/* Footer */}
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

// ── Sub-components ────────────────────────────────────────────────────────────

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
  status,
  imgSrc,
  imgAlt,
  loomId,
}: {
  number: string;
  text: string;
  status?: string;
  imgSrc?: string;
  imgAlt?: string;
  loomId?: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <span
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white"
        >
          {number}
        </span>
        <p className="font-sans text-lg font-semibold tracking-tight leading-snug flex flex-wrap items-center gap-2 text-gray-900">
          <span>{text}</span>
          {status && (
            <span
              className="glass-tag"
            >
              {status}
            </span>
          )}
        </p>
      </div>
      {loomId ? (
        <LoomEmbed loomId={loomId} />
      ) : imgSrc ? (
        <CaseImage src={imgSrc} alt={imgAlt ?? ""} />
      ) : null}
    </div>
  );
}

function LoomEmbed({ loomId }: { loomId: string }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src={`https://www.loom.com/embed/${loomId}`}
          allow="fullscreen"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
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
