"use client";

import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    slug: "paywall-plantag",
    title: "Driving $310K ARR with plan recommendation tags on paywalls",
    description:
      "Adding plan recommendation tags on paywalls to help users choose the right plan on pricing page with less cognitive load",
    chips: ["Monetization", "Paywalls", "A/B testing"],
    status: { label: "🧪 Successful experiment", tone: "success" as const },
    coverBg: "#E8E0CC",
    coverImg: "/case-studies/paywall-plantag/cover.jpg",
    company: "Miro",
  },
  {
    slug: "downgrade-experiment",
    title: "Retaining $400k ARR with downgrade alternatives",
    description:
      "Offering yearly-to-monthly and Business-to-Starter plan downgrades in cancelation flow to reduce churn",
    chips: ["Churn & retention", "Claude Design prototype", "A/B testing"],
    status: { label: "🧪 Successful experiment", tone: "success" as const },
    coverBg: "#E8E0CC",
    coverImg: "/case-studies/downgrade-experiment/cover.png",
    company: "Miro",
  },
  {
    slug: "spotify-connect",
    title: "Activating 12M new Spotify TV users",
    description:
      "Increasing adoption of Spotify Connect through an in-app messaging campaign promoting listening on TV from mobile",
    chips: ["Engagement", "UX research", "A/B testing"],
    status: { label: "🧪 Successful experiment", tone: "success" as const },
    coverBg: "#D4EDD4",
    coverImg: "/case-studies/spotify/cover.png",
    company: "Spotify",
  },
  {
    slug: "miro-prototypes",
    title: "Generating $800K ARR in 3 months for Miro Prototypes",
    description:
      "Enabling product-led sales through a feature request flow",
    chips: ["Working with GTM", "Lifecycle", "SQL", "Replit prototype"],
    status: { label: "🚀 Launched initiative", tone: "launch" as const },
    coverBg: "#E8E0CC",
    coverImg: "/case-studies/miro-prototypes/cover.png",
    company: "Miro",
  },
  {
    slug: "winback-offer",
    title: "Retaining $600K at-risk ARR with 1-month winback offer",
    description:
      "Using discounts as a last-resort save for price-sensitive teams at cancelation moment",
    chips: ["Churn & retention", "A/B testing"],
    status: { label: "🧪 Successful experiment", tone: "success" as const },
    coverBg: "#E8EDD4",
    coverImg: "/case-studies/winback-offer/cover.png",
    company: "Miro",
  },
];

function Chip({ label }: { label: string }) {
  return (
    <span
      className="text-xs font-medium px-3 py-1 rounded-full"
      style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text)" }}
    >
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] & { coverImg?: string } }) {
  const statusStyles =
    project.status.tone === "success"
      ? { backgroundColor: "#DCFCE7", color: "#166534" }
      : { backgroundColor: "#E0E7FF", color: "#3730A3" };

  return (
    <Link
      href={`/works/${project.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden projects-card"
      style={{
        backgroundColor: "var(--color-card)",
        border: "1px solid var(--color-border)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        width: "min(340px, 82vw)",
        flexShrink: 0,
        scrollSnapAlign: "start",
        alignSelf: "stretch",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(26,23,19,0.08)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div
        className="relative w-full flex items-center justify-center text-sm font-medium overflow-hidden shrink-0"
        style={{
          height: "200px",
          backgroundColor: project.coverBg,
          color: "var(--color-text-muted)",
        }}
      >
        {project.coverImg ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={project.coverImg} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        ) : (
          <span className="opacity-50 text-xs">{project.company} — add cover image</span>
        )}
        <span
          className="absolute top-3 right-3 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
          style={statusStyles}
        >
          {project.status.label}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3
          className="font-semibold leading-snug line-clamp-3 min-h-[3.9em]"
          style={{ fontSize: "1.05rem", color: "var(--color-text)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm leading-relaxed line-clamp-3 min-h-[4.5em]"
          style={{ color: "var(--color-text-muted)" }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.chips.map(chip => (
            <Chip key={chip} label={chip} />
          ))}
        </div>
      </div>
    </Link>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Scroll projects left" : "Scroll projects right"}
      onClick={onClick}
      className="flex items-center justify-center rounded-full transition-opacity hover:opacity-70"
      style={{
        width: "28px",
        height: "28px",
        border: "1px solid var(--color-border)",
        backgroundColor: "var(--color-card)",
        color: "var(--color-text)",
        cursor: "pointer",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
        {direction === "left" ? (
          <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export default function Works() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: "left" | "right") => {
    const el = galleryRef.current;
    if (!el) return;
    const card = el.querySelector(".projects-card") as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 340) + 24;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <h2
          className="text-center mb-6"
          style={{
            fontFamily: "var(--font-unbounded), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            color: "var(--color-text)",
          }}
        >
          ... or deep-dive into my proudest projects! 🤿
        </h2>
        <div className="flex items-center justify-end gap-1.5">
          <ArrowButton direction="left" onClick={() => scrollByCard("left")} />
          <ArrowButton direction="right" onClick={() => scrollByCard("right")} />
        </div>
      </div>

      <div
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
      >
        <div
          ref={galleryRef}
          className="projects-gallery flex items-stretch gap-6 overflow-x-auto px-6 md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] pb-4"
        >
          {projects.map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
