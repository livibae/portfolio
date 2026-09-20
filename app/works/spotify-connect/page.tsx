"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

const metrics = [
  { value: "12M", label: "New users activated" },
  { value: "↑11%", label: "Feature adoption rate" },
  { value: "↑6%", label: "Weekly active listening time" },
];

const chips = ["Engagement", "In-app campaign", "UX research", "A/B testing"];

export default function SpotifyConnect() {
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

        {/* Header — title left, meta right */}
        <header className="max-w-6xl mx-auto px-6 pt-10 pb-12">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
            {/* Left: title + subtitle + chips */}
            <div>
              <h1 className="mb-4 max-w-4xl font-sans text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-6xl">
                Activating 12M new Spotify TV users
              </h1>
              <p className="mb-6 max-w-2xl font-sans text-sm leading-relaxed text-gray-600 md:text-base">
                Increasing adoption of Spotify Connect through an in-app messaging campaign promoting listening on TV from mobile
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

            {/* Right: project meta — no box, plain */}
            <div className="flex flex-col gap-6 pt-2">
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Company</p>
                <p className="font-sans text-sm font-medium text-gray-900">Spotify</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Period</p>
                <p className="font-sans text-sm font-medium text-gray-900">June – September 2023</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Role</p>
                <p className="font-sans text-sm font-medium text-gray-900">Product Intern</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Showcase</p>
                <a
                  href="https://docs.google.com/document/d/1zFMw8wiQoGABKjA_MVI76-FVQzDnASIn4jrQdDXSYMM/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: "var(--color-text)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  Product Requirements Document ↗
                </a>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Team</p>
                <p className="font-sans text-sm font-medium text-gray-900">1 Designer · 1 Data Scientist · 1 Researcher</p>
              </div>
            </div>
          </div>
        </header>

        {/* Key metrics bar */}
        <div className="glass-strip">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-3 gap-8 text-center">
              {metrics.map(m => (
                <div key={m.label}>
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

        {/* Loom embed */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingTop: "56.25%", border: "1px solid var(--color-border)" }}>
            <iframe
              src="https://www.loom.com/embed/52d641b984964246947853f226d79b20"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>

        {/* Case study body + sticky sidebar */}
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="flex gap-16 items-start">

            {/* Main article */}
            <article className="flex-1 min-w-0 flex flex-col gap-16">

              {/* Context */}
              <section className="scroll-mt-28" id="context">
                <SectionLabel>Context</SectionLabel>
                <p className="font-sans text-base leading-relaxed text-gray-600">
                  Spotify Connect is a feature that enables users to <strong>listen and control audio seamlessly across different devices</strong>. One of the most common use cases is when users use their mobile phones to control music on Bluetooth speakers. The objective of this project was to increase the adoption rate of Spotify Connect among new users.
                </p>
              </section>

              {/* Problem */}
              <section className="scroll-mt-28" id="problem">
                <SectionLabel>Problem</SectionLabel>
                <CaseImage src="/case-studies/spotify/problem-1.png" alt="Problem overview" />
              </section>

              {/* Opportunity */}
              <section className="scroll-mt-28" id="opportunity">
                <SectionLabel>Opportunity</SectionLabel>
                <p className="font-sans text-base leading-relaxed mb-10 text-gray-600">
                  I identified the <strong>mobile-to-smart-TV use case</strong> as the highest-leverage opportunity based on three signals:
                </p>

                <div className="flex flex-col gap-10">
                  <OpportunityBlock
                    number="1"
                    title="High ownership, low utilisation"
                    body="Smart TV demonstrated the highest ownership-to-utilization ratio among all Tier 2 platforms (TV, gaming consoles, smart speakers), representing the largest untapped activation headroom."
                    imgSrc="/case-studies/spotify/opportunity-1.png"
                    imgAlt="Chart showing smart TV ownership-to-utilization gap"
                    imgFallback="https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf4691188f5ebc9247c2f9_AD_4nXejPXCa3arBpHf4dkZVRXrRTes-cST6H7wSf0B3V6oepiJQ7H8I0BzuUfD7h-TvQQQIPC9tUgmSFfqX5kt9HPd4IOrk-HoWsUDYnqKsnFRpEjAoz4zo3dn8ynI5EQcAHoI25F8L-ChZJsluoKvreovFiB8.png"
                  />
                  <OpportunityBlock
                    number="2"
                    title="High affinity, low awareness"
                    body="Users unfamiliar with TV streaming showed strong preference once informed. Longer-term Spotify users showed increased awareness and affinity, suggesting early user education would significantly increase engagement."
                    imgSrc="https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf49b532b630340554df6e_AD_4nXeBgTBlQzSj35mjQ0XlRt5xeAHtA4Y6VqzEFANviisIgq7Dk3LHfDX80icSlnjmePF4fybYK8iWHWynddaehEVTKQ6vJflLZPRX4VG4JU6rxOk_tJQw6pU3LQoJ0r5ihR-wL3rcQQ.png"
                    imgAlt="Chart showing affinity vs awareness correlation"
                  />
                  <OpportunityBlock
                    number="3"
                    title="Pain point solution"
                    body="TV users were unaware that their mobile phone could substitute as a remote control via Spotify Connect — despite remote control frustration being identified as the primary pain point for TV listening."
                  />
                </div>
              </section>

              {/* Solution */}
              <section className="scroll-mt-28" id="solution">
                <SectionLabel>Experiment</SectionLabel>
                <div className="flex flex-col gap-6">
                  <CaseImage
                    src="/case-studies/spotify/experiment-1.png"
                    alt="In-app messaging campaign designs"
                    fallback="https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf4e7ef5d5acfa69119812_AD_4nXflnl4tH6SECgQXNJeFnTxergWw4cbfnAoxC8dVnO79-MoUPAVapTMxgNUq9SRDpvySrzoM6-mj1ugitHzJWQIlETxn7OcwUDPVRCYHZxwaVr8FzEY207zHEnrYVrru8YpuxOjk8A.png"
                  />
                  <CaseImage
                    src="/case-studies/spotify/experiment-2.png"
                    alt="Campaign iteration and A/B test variants"
                    fallback="https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf66aa4f29f6e427542855_AD_4nXdnNiiU4a6BzbGzvIpcrsjKqHkAQjL2T8CeN8yzFbHORaKAoykISfuVKey8RWoC6YADA5D8KsqE3AViM_1HFiZz37M02Tfm2YkoABUanL74LZ-EguX6Yocn-Vu0U_5ZNxk_OqlePg.png"
                  />
                </div>
              </section>

              {/* Outcome */}
              <section className="scroll-mt-28" id="outcome">
                <SectionLabel>Outcome</SectionLabel>
                <CaseImage
                  src="/case-studies/spotify/outcome-1.png"
                  alt="Research and data findings"
                  fallback="https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf5a7017dfce57296c3764_AD_4nXeBFN1t3K8BxhP3YyQi1r-YjoMcDzLqF6ynCzbH53zaJy8KZAVvKd3gWLrtMYSnqd5IDdUMerLpOAuGWuRJfWB4kJ3iZMIeuyXmhPPi911CaY-ezS0VC1p2WrtIK5BmRmPJt-NbAg.png"
                />
              </section>

              {/* Next Steps */}
              <section className="scroll-mt-28" id="next-steps">
                <SectionLabel>Next Steps</SectionLabel>
                <div className="flex flex-col gap-4">
                  {[
                    { local: "/case-studies/spotify/next-1.png", fallback: "https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf605ef66e0db272075ef2_AD_4nXfBkJzwhcwR4Tc3W0kDQXtAVbUUh3VvqsPtU0JfhStGAl5DGoyr0QOUgnRCRxPx1_eGpgTRZJbGLOmy8L2lzUWTEwWftZvRlRWfM4AXfRXKsZZvXn1zMZwTl3iHeb9UI7gFBuPAKA.png" },
                    { local: "/case-studies/spotify/next-2.png", fallback: "https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf60b8913579b92e23c9b5_AD_4nXdIRhn8BXkXSetvRc6gTlSysDZShBcTW5Ybn5_gvMezY6bYgdL8Td_JACZLnVDNiiuKYgCTfVu5omm0DQXse63B2A81KX325_LGfvspIUea6edvsZEgjdHIo2TPxjUHAAeF4O4jw.png" },
                    { local: "/case-studies/spotify/next-3.png", fallback: "https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf610638153f3d36fe6812_AD_4nXcIU5eACfLHo-N7W0NSuz0ChmNMRbXKLCqa6Tp3bKg1964ISEsJD1k7hoziKuBQHkmf-BVlGXaWL9Grli_CKOAcil-Xx9vj97SDi81vej-gSZabHeG38uzW9qgfDwtsz6Qbw.png" },
                    { local: "/case-studies/spotify/next-4.png", fallback: "https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf6147f5c7d0f3b8a27ab7_AD_4nXeCn1Sui4vp3VpkCJttEAbOhugrkmqvu5CHpQgHFT6ZqsmX3fYIU-a3PPygYCZ_7v64U3AGREq60SxRe3eWredacvWpkA-SECeJICwaEkPLzW6IBsZ81Fr4QOydIg_AVam7GGm65A.png" },
                  ].map((img, i) => (
                    <CaseImage key={i} src={img.local} alt={`Next step recommendation ${i + 1}`} fallback={img.fallback} />
                  ))}
                </div>
              </section>

            </article>

            {/* Sticky right nav */}
            <SectionNav />

          </div>
        </div>

        {/* Footer nav */}
        <div
          className="border-t py-12 px-6"
          style={{ borderColor: "var(--color-border)" }}
        >
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

// ── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-sans text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
      {children}
    </h2>
  );
}

function ProblemCard({ number, title, points }: { number: string; title: string; points: string[] }) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
    >
      <div className="flex items-center gap-3">
        <span
          className="glass-tag"
        >
          {number}
        </span>
        <h3 className="font-sans font-semibold text-sm text-gray-900">{title}</h3>
      </div>
      <ul className="flex flex-col gap-2">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            <span className="text-gray-400">·</span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function OpportunityBlock({
  number,
  title,
  body,
  imgSrc,
  imgAlt,
  imgFallback,
}: {
  number: string;
  title: string;
  body: string;
  imgSrc?: string;
  imgAlt?: string;
  imgFallback?: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <span
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white"
        >
          {number}
        </span>
        <div>
          <h3 className="font-sans font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{body}</p>
        </div>
      </div>
      {(imgSrc || imgFallback) && (
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc || imgFallback} alt={imgAlt || ""} className="w-full h-auto" loading="lazy" />
        </div>
      )}
    </div>
  );
}

function CaseImage({ src, alt, fallback }: { src: string; alt: string; fallback?: string }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src || fallback} alt={alt} className="w-full h-auto" loading="lazy" />
    </div>
  );
}

const navItems = [
  { label: "Context", id: "context" },
  { label: "Problem", id: "problem" },
  { label: "Opportunity", id: "opportunity" },
  { label: "Experiment", id: "solution" },
  { label: "Outcome", id: "outcome" },
  { label: "Next Steps", id: "next-steps" },
];

function SectionNav() {
  const [active, setActive] = useState("context");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
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
                transition: "color 0.2s, font-weight 0.2s, border-color 0.2s",
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
