"use client";

import Link from "next/link";

const projects = [
  {
    slug: "miro-prototypes",
    title: "Generating $1M ARR in 3 months for Miro Prototypes",
    description:
      "Enabling product-led sales through Enterprise trials and a Self-serve feature request flow",
    chips: ["XFN Collaboration", "Data Analysis", "Snowflake", "SQL", "Lifecycle Marketing"],
    coverBg: "#E8E0CC",
    company: "Miro",
  },
  {
    slug: "spotify-connect",
    title: "Activating 12M new Spotify TV users",
    description:
      "Increasing adoption of Spotify Connect through an in-app messaging campaign promoting listening on TV from mobile",
    chips: ["Experimentation", "UX Research", "Messaging", "Copywriting"],
    coverBg: "#D4EDD4",
    company: "Spotify",
  },
  {
    slug: "lime",
    title: "Decreasing bad parking by 22% for Lime",
    description:
      "Improving parking compliance of Lime users by leveraging review insights and A/B test results",
    chips: ["User Research", "Data Analysis", "XFN Collaboration"],
    coverBg: "#E8EDD4",
    company: "Captur / Lime",
  },
];

function Chip({ label }: { label: string }) {
  return (
    <span
      className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide"
      style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text)", letterSpacing: "0.04em" }}
    >
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Link
      href={`/works/${project.slug}`}
      className="group block rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "var(--color-card)",
        border: "1px solid var(--color-border)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
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
      {/* Cover */}
      <div
        className="w-full flex items-center justify-center text-sm font-medium"
        style={{
          height: "200px",
          backgroundColor: project.coverBg,
          color: "var(--color-text-muted)",
        }}
      >
        {/* Add cover image: /public/covers/{project.slug}.png */}
        <span className="opacity-50 text-xs">{project.company} — add cover image</span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <h3
          className="font-semibold leading-snug"
          style={{ fontSize: "1.05rem", color: "var(--color-text)" }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.chips.map(chip => (
            <Chip key={chip} label={chip} />
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Works() {
  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "var(--font-unbounded), sans-serif",
            
            fontWeight: 400,
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            color: "var(--color-text)",
          }}
        >
          ... or deep-dive into my proudest projects! 🤿
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
