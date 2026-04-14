"use client";

import Image from "next/image";
import { useState } from "react";

const timeline = [
  { org: "Miro",    role: "Associate Product Manager",          years: "2025 – now" },
  { org: "Captur",  role: "Associate Product Manager",          years: "2024 – 2025" },
  { org: "Spotify", role: "Product Intern",                     years: "2023" },
  { org: "Spotify", role: "Equity & Impact Intern",             years: "2021 – 2022" },
  { org: "Oxford",  role: "MSc Social Science of the Internet", years: "2022 – 2023" },
  { org: "UCL",     role: "BSc Psychology",                     years: "2019 – 2022" },
];

const photos = [
  {
    src: null,
    alt: "Placeholder",
    tooltip: "📍 Add your photo here",
    rotate: "-6deg",
    hoverRotate: "-2deg",
    width: "200px",
    aspectRatio: "4/3",
  },
  {
    src: "/profile.jpg",
    alt: "Livia Yeung at Miro Amsterdam office",
    tooltip: "This is me! 👋",
    rotate: "2deg",
    hoverRotate: "5deg",
    width: "220px",
    aspectRatio: "3/4",
  },
  {
    src: null,
    alt: "Placeholder",
    tooltip: "📍 Add your photo here",
    rotate: "7deg",
    hoverRotate: "11deg",
    width: "200px",
    aspectRatio: "4/3",
  },
];

function TimelineRow({ item }: { item: typeof timeline[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center pb-4 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default" }}
    >
      {/* Year — left of line */}
      <div className="flex-shrink-0 text-right pr-3" style={{ width: "5.5rem" }}>
        <span style={{ fontSize: "11px", fontWeight: 500, color: "var(--color-text-muted)" }}>
          {item.years}
        </span>
      </div>

      {/* Dot */}
      <div
        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center z-10"
        style={{ backgroundColor: hovered ? "var(--color-text)" : "var(--color-primary)", transition: "background-color 0.2s" }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: hovered ? "var(--color-primary)" : "var(--color-text)" }} />
      </div>

      {/* Company name + tooltip — right of line */}
      <div className="relative pl-3">
        <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{item.org}</p>

        {/* Tooltip */}
        <div style={{
          position: "absolute",
          left: "calc(100% + 10px)",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "var(--color-text)",
          color: "var(--color-bg)",
          fontSize: "11px",
          fontWeight: 500,
          padding: "5px 10px",
          borderRadius: "20px",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
          pointerEvents: "none",
          zIndex: 20,
        }}>
          {item.role}
          <span style={{
            position: "absolute",
            left: "-5px",
            top: "50%",
            transform: "translateY(-50%)",
            width: 0, height: 0,
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderRight: `5px solid var(--color-text)`,
          }} />
        </div>
      </div>
    </div>
  );
}

function PhotoCard({ photo }: { photo: typeof photos[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: photo.width,
        transform: hovered
          ? `rotate(${photo.hoverRotate}) scale(1.06)`
          : `rotate(${photo.rotate}) scale(1)`,
        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: "default",
        zIndex: hovered ? 10 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <div
        style={{
          position: "absolute",
          top: "-42px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "var(--color-text)",
          color: "var(--color-bg)",
          fontSize: "12px",
          fontWeight: 500,
          padding: "6px 12px",
          borderRadius: "20px",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
          pointerEvents: "none",
          zIndex: 20,
        }}
      >
        {photo.tooltip}
        {/* Arrow */}
        <span style={{
          position: "absolute",
          bottom: "-5px",
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderTop: `5px solid var(--color-text)`,
        }} />
      </div>

      {/* Card */}
      <div
        style={{
          width: "100%",
          aspectRatio: photo.aspectRatio,
          borderRadius: "16px",
          overflow: "hidden",
          border: "2px solid var(--color-border)",
          boxShadow: hovered
            ? "0 20px 48px rgba(26,23,19,0.15)"
            : "0 8px 24px rgba(26,23,19,0.08)",
          transition: "box-shadow 0.3s ease",
          position: "relative",
          backgroundColor: "#2a2a2a",
        }}
      >
        {photo.src ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ color: "#555", fontSize: "13px" }}>
            add photo
          </div>
        )}
      </div>
    </div>
  );
}

export default function AboutMe() {
  return (
    <section id="about-me" style={{ backgroundColor: "var(--color-card)" }}>
      {/* Top: bio + timeline */}
      <div className="pt-24 pb-8 px-6">
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
            Allow me to introduce myself 😁
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: bio text */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-widest" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>
                  My Background
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
                  Born and raised in Hong Kong, I&apos;m a product person with experience building and monetising AI products at both start-ups and scale-ups.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-widest" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>
                  My Approach
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
                  I think of great product work like a well-made cake. The base is an unwavering commitment to impact — no job too small, no detail too operational. The middle is structured but adaptable: data-driven by training (Psychology, Oxford statistics), but not afraid of creative bets. And the cherry on top is customer obsession — hands-on experience helping customers understand AI, advising on implementation, and setting go-to-market strategy to sell and scale it.
                </p>
              </div>
            </div>

            {/* Right: timeline */}
            <div>
              <h3 className="font-semibold mb-8 text-sm uppercase tracking-widest" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>
                Career
              </h3>
              <div className="relative flex flex-col">
                {/* Timeline vertical line — centred on the dot column */}
                <div className="absolute top-2 bottom-2 w-px" style={{ left: "calc(5.5rem + 10px)", backgroundColor: "var(--color-border)" }} />
                {timeline.map((item, i) => (
                  <TimelineRow key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: dark photo strip */}
      <div
        className="px-6 pb-16 pt-0"
        style={{
          backgroundColor: "var(--color-card)",
        }}
      >
        <div
          className="max-w-3xl mx-auto flex items-end justify-center"
          style={{ gap: "2rem" }}
        >
          {photos.map((photo, i) => (
            <PhotoCard key={i} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
