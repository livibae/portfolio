"use client";

import Link from "next/link";
import { useState } from "react";

type Artefact = {
  src: string;
  title: string;
  href: string;
  portrait?: boolean;
};

const artefacts: Artefact[] = [
  {
    src: "/artefacts/spotify_connect.mp4",
    title: "Activating 12M new Spotify TV users",
    href: "/works/spotify-connect",
    portrait: true,
  },
  {
    src: "/case-studies/miro-prototypes/solution-1.mp4",
    title: "Generating $820K influenced ARR in 7 months for Miro Prototypes",
    href: "/works/miro-prototypes",
  },
  {
    src: "/case-studies/downgrade-experiment/solution1.mp4",
    title: "Retaining $400K ARR with downgrade alternatives",
    href: "/works/downgrade-experiment",
  },
  {
    src: "/case-studies/paywall-plantag/solution.mp4",
    title: "Driving $310K ARR with plan recommendation tags on paywalls",
    href: "/works/paywall-plantag",
  },
];

function VideoCard({ item }: { item: Artefact }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={item.href}
      aria-label={item.title}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        width: item.portrait ? "115px" : "300px",
        height: "200px",
        flexShrink: 0,
        zIndex: hovered ? 2 : 1,
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid var(--color-border)",
          backgroundColor: "var(--color-card)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transformOrigin: "center",
          transition: "transform 0.22s ease",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        >
          <source src={item.src} />
        </video>
      </div>
      <span
        style={{
          position: "absolute",
          left: "50%",
          bottom: "10px",
          transform: "translateX(-50%)",
          width: "max-content",
          maxWidth: item.portrait ? "160px" : "240px",
          padding: "6px 10px",
          borderRadius: "8px",
          backgroundColor: "#111",
          color: "#fff",
          fontSize: "12px",
          lineHeight: 1.35,
          textAlign: "center",
          opacity: hovered ? 1 : 0,
          pointerEvents: "none",
          transition: "opacity 0.15s ease",
        }}
      >
        {item.title}
      </span>
    </Link>
  );
}

export default function SneakPeek() {
  const items = [...artefacts, ...artefacts];

  return (
    <section className="pt-2 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6 text-center">
        <h2
          style={{
            fontFamily: "var(--font-unbounded), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
            color: "var(--color-text)",
          }}
        >
          Sneak peek of what I&apos;m up to... 👀
        </h2>
      </div>

      <div
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="flex animate-marquee"
          style={{ width: "max-content", gap: "20px", alignItems: "center" }}
        >
          {items.map((item, i) => (
            <VideoCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
