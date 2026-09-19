"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

const metrics = [
  { value: "$310K", label: "ARR generated", align: "left" as const },
  { value: "+3%", label: "uplift in free-to-paid conversion", align: "center" as const },
  { value: "+12.5%", label: "new ARR uplift", align: "center" as const },
];

const chips = ["Monetization", "Paywalls", "A/B testing"];

const navItems = [
  { label: "Problem", id: "problem" },
  { label: "Hypothesis & Metrics", id: "hypothesis" },
  { label: "Solution", id: "solution" },
  { label: "Outcome", id: "outcome" },
  { label: "Next Steps", id: "next-steps" },
];

export default function PaywallPlantag() {
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
              <h1
                className="leading-tight mb-4"
                style={{
                  fontFamily: "var(--font-unbounded), sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  color: "var(--color-text)",
                }}
              >
                Driving $310K ARR with plan recommendation tags on paywalls
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-muted)" }}>
                Adding plan recommendation tags on paywalls to help users choose the right plan on pricing page with less cognitive load
              </p>
              <div className="flex flex-wrap gap-2">
                {chips.map(chip => (
                  <span
                    key={chip}
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text)" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-2">
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>Company</p>
                <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>Miro</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>Period</p>
                <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>May – June 2026</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>Role</p>
                <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>Associate Product Manager</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>Team</p>
                <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>1 Designer · 1 Data Analyst · 1 Engineer</p>
              </div>
            </div>
          </div>
        </header>

        <div style={{ backgroundColor: "var(--color-primary)" }}>
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {metrics.map(m => (
                <div key={m.label} style={{ textAlign: m.align }}>
                  <p
                    className="font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-unbounded), sans-serif",
                      fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                      color: "var(--color-text)",
                    }}
                  >
                    {m.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "var(--color-text)", opacity: 0.65, letterSpacing: "0.1em" }}>
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

              <section id="problem">
                <SectionLabel>💥 Problem</SectionLabel>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
                  User research suggests that <strong>users often find the in-app pricing page overwhelming and are unsure which plan to choose</strong>. There is also evidence that some users buy the wrong plan for some features (e.g. data tables on Starter).
                </p>
              </section>

              <section id="hypothesis">
                <SectionLabel>💡 Hypothesis &amp; Success Metrics</SectionLabel>
                <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-text)" }}>
                  Adding an <strong>&quot;available on X Plan&quot; tag on feature paywalls</strong> with a GIF will have <strong>no negative impact</strong> on monetization metrics (free-to-paid conversion and new ARR for Free plan, Starter to Business conversion and expansion ARR for Starter Plan). Non-inferiority test.
                </p>
                <div className="flex flex-col gap-6">
                  <CaseImage src="/case-studies/paywall-plantag/hypotheses1.jpg" alt="Hypothesis and success metrics for plan tags on paywalls" />
                  <ul className="flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc" style={{ color: "var(--color-text)" }}>
                    <li>
                      Scoped experiment to 20+ GIF paywalls as MVP scope to validate hypothesis before expanding to 200+ upgrade triggers
                    </li>
                  </ul>
                  <CaseImage src="/case-studies/paywall-plantag/solution2.jpg" alt="Plan recommendation tags solution details" />
                </div>
              </section>

              <section id="solution">
                <SectionLabel>🧪 Solution</SectionLabel>
                <div className="flex flex-col gap-6">
                  <CaseVideo src="/case-studies/paywall-plantag/solution.mp4" />
                  <CaseImage src="/case-studies/paywall-plantag/solution1.jpg" alt="Plan recommendation tags on feature paywalls" />
                </div>
              </section>

              <section id="outcome">
                <SectionLabel>🌟 Outcome</SectionLabel>
                <ul className="flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc" style={{ color: "var(--color-text)" }}>
                  <li>
                    Directional increase on Free monetization metrics (<strong>+3% free-to-paid conversion, +12.5% new ARR</strong>). This suggests that helping users understand which paid plan package includes the feature they are interested in more easily has no significant negative impact on key monetization metrics.
                  </li>
                  <li>
                    Insufficient sample size for Starter and Legacy Business plans
                  </li>
                  <li>
                    No significant decrease on Guardrail metrics
                  </li>
                </ul>
              </section>

              <section id="next-steps">
                <SectionLabel>👣 Next Steps</SectionLabel>
                <ul className="flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc mb-8" style={{ color: "var(--color-text)" }}>
                  <li>
                    <strong>Roll out experiment to 100%</strong> Free, Starter and Business plan users
                  </li>
                  <li>
                    <strong>Implement similar plan recommendation to other upgrade triggers</strong> in Settings, Marketplace, and all future paywalls to ensure coherent user experience across all upgrade paths
                  </li>
                </ul>
                <CaseImage src="/case-studies/paywall-plantag/next-step1.jpg" alt="Next steps for plan tags on paywalls" />
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
              className="text-sm font-semibold px-5 py-2.5 rounded-full"
              style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text)" }}
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
    <h2
      className="mb-8"
      style={{
        fontFamily: "var(--font-unbounded), sans-serif",
        fontWeight: 500,
        fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
        color: "var(--color-text)",
      }}
    >
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
  const [active, setActive] = useState("problem");

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
