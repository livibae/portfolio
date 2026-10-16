"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import LetsTalk from "@/components/LetsTalk";
import { useState, useEffect } from "react";

const metrics = [
  { value: "50%", label: "faster incident response time", align: "left" as const },
];

const chips = ["Platform observability", "Incident response", "Mobile SDK", "SQL"];

const navItems = [
  { label: "Context", id: "context" },
  { label: "Opportunity", id: "opportunity" },
  { label: "Solution", id: "solution" },
  { label: "Outcome", id: "outcome" },
];

export default function CapturIncidentAlerting() {
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
              <h1 className="mb-4 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-6xl">
                Improving platform observability and incidence response for Captur mobile SDK
              </h1>
              <p className="mb-6 max-w-2xl font-sans text-sm leading-relaxed text-gray-600 md:text-base">
                Partnering with ML engineers to diagnose gaps and improve platform observability and alerting systems
              </p>
              <div className="flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <span key={chip} className="glass-tag">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-2">
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Company</p>
                <p className="font-sans text-sm font-medium text-gray-900">Captur</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Role</p>
                <p className="font-sans text-sm font-medium text-gray-900">Associate Product Manager</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Team</p>
                <p className="font-sans text-sm font-medium text-gray-900">1 ML Engineer · 1 Customer Success manager</p>
              </div>
            </div>
          </div>
        </header>

        <div className="glass-strip">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.label} style={{ textAlign: m.align }}>
                  <p className="mb-1 font-display text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
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
                <div className="font-sans flex flex-col gap-4 text-base leading-relaxed text-gray-600">
                  <p>
                    Captur&apos;s product was a mobile SDK that clients like Lime embedded in their mobile apps. It downloaded ML models and ran them on-device to check end-of-ride parking photos in real time.
                  </p>
                  <p>
                    Between December and January, the same bug caused two P0 incidents. Lime&apos;s volume dropped by about 80% and took three days to investigate and resolve. Another client took five days. Both incidents were reported by the client, not caught by us.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-28" id="opportunity">
                <SectionLabel>Opportunity</SectionLabel>
                <p className="font-sans text-base leading-relaxed mb-6 text-gray-600">
                  Three problems led to slow incident response:
                </p>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                  <li>
                    <strong>Alerts were noisy.</strong> Existing alerts used a single static threshold and fired constantly, which means engineers just ignore them.
                  </li>
                  <li>
                    <strong>Poor telemetry visibility:</strong> Event and error logging was limited.
                  </li>
                  <li>
                    <strong>Engineering lacked context and sole gatekeeper of alerts.</strong> Only engineers were on the Slack channel connected to the alerts. They couldn&apos;t tell whether a volume change came from a model release, an experiment, or a real failure. With no error logs, the first conclusion was that the drop was caused by something on the client&apos;s side.
                  </li>
                </ul>
              </section>

              <section className="scroll-mt-28" id="solution">
                <SectionLabel>Solution</SectionLabel>
                <ul className="font-sans flex flex-col gap-6 text-base leading-relaxed pl-5 list-disc text-gray-600">
                  <li>
                    <strong>Proving the bug was ours.</strong> I used SQL in BigQuery to triangulate the time of volume drop and any product changes, and found that a new model was deployed just before volumes start decreasing. That gave Engineering evidence the problem was in our code, not the client&apos;s. This prompted us to dig deeper and found the root cause: the SDK couldn&apos;t handle two models with the same name, so when a new model was deployed under an existing name, devices failed to download it.
                  </li>
                  <li>
                    <strong>Quick fix and Incident reporting.</strong> Engineering rolled back the model, redeployed it with a new name, and added code that blocks deploying different models under the same name. We searched the logs for any unreported occurrences of the same bug to estimate blast radius. I wrote the incident report to clients covering what happened, the impact, and the steps taken.
                  </li>
                  <li>
                    <strong>Define requirements and building a Prototype.</strong> A static threshold either misses real incidents or fires on normal patterns like weekly cycles, model releases, and new experiments. Before asking anyone to build anything, I defined the requirements and prototyped a simple data model in a spreadsheet:
                    <ul className="mt-3 flex flex-col gap-3 pl-5 list-disc">
                      <li>
                        <strong>Goal:</strong> catch real volume incidents more reliably while reducing false alarms from the alerting system.
                      </li>
                      <li>
                        <strong>Success metrics:</strong> primary metrics: time to detect an incident, and recall; guardrail metric: precision.
                      </li>
                      <li>
                        <strong>Hypothesis:</strong> comparing volume against both the previous day and the same day last week would catch real incidents without firing on normal variation.
                      </li>
                      <li>
                        <strong>Validation:</strong> I tested that the model on a month of historical data, validating that it could have caught the two known volume changes with 80% less false alarms.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Engineering hand-off.</strong> I then hand-off the requirements to a ML engineer, who built a more sophisticated system on Datadog. It triggers when the log-ratio difference crosses 0.5 (warning) or 0.7 (critical). It flagged both known changes within 12 hours with zero false alarms. We also removed alerts that were not related to volume decreases and thus not business-critical to reduce noise.
                  </li>
                  <li>
                    <strong>Enhance partnership for monitoring model performance.</strong> I demoed the new alerts system with stakeholders, establishing that monitoring platform quality is led by Engineering but supported by Product and Customer Support. We added Product and Customer Success to the Slack alerts channel, and defined a set of incident response protocol: check yesterday&apos;s and last week&apos;s data in the Datadog panel, then check whether a model release or config change explains it. I recorded a Loom walking through the context and who owns what.
                  </li>
                  <li>
                    <strong>Improve observability and telemetry.</strong> Alerts tell you that something broke, not why. Using SQL on BigQuery, I identified gaps in our observability that caused the slow response to the P0 incidents, and partnered with engineering to improve telemetry and error logging using Datadog. For example, sending more data fields in error logs, so that we can identify whether an issue is impacting a subset of users by device type, ML model, the client etc.
                  </li>
                </ul>
              </section>

              <section className="scroll-mt-28" id="outcome">
                <SectionLabel>Outcome</SectionLabel>
                <p className="font-sans text-base leading-relaxed text-gray-600">
                  The next P0 incident at a different client was detected internally within hours and resolved about 50% faster. Our approach to incident handling changed from reactive to proactive.
                </p>
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
    <h2 className="mb-6 font-display text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
      {children}
    </h2>
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
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
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
        {navItems.map((item) => {
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
