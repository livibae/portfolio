"use client";

// Archived off the homepage. Not mounted. Restore by rendering this from app/page.tsx when the animation is ready.

import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    src: "/grad.jpeg",
    alt: "Graduation at Oxford",
    rotate: "-7deg",
    hoverRotate: "-3deg",
    width: "200px",
    aspectRatio: "3/4",
  },
  {
    src: "/profile.jpg",
    alt: "Livia at Miro Amsterdam office",
    rotate: "1deg",
    hoverRotate: "3deg",
    width: "240px",
    aspectRatio: "3/4",
  },
  {
    src: "/yoga.jpeg",
    alt: "Practicing yoga",
    rotate: "8deg",
    hoverRotate: "11deg",
    width: "200px",
    aspectRatio: "3/4",
  },
];

/** Notes grouped by photo. Left: HK sits left of UK; both point at grad. */
const columns = [
  {
    photoIndex: 0,
    notes: [
      {
        text: "🇭🇰 Born and raised in Hong Kong",
        // from left, curl down-right into the photo
        path: "M 20 8 C 10 35, 25 60, 55 78 C 70 88, 82 92, 92 96",
      },
      {
        text: "🇬🇧 Studied in the UK for 8 years from High school to Masters!",
        // from above-right of HK, curl down into the photo
        path: "M 55 4 C 80 20, 75 50, 45 72 C 35 82, 42 90, 48 96",
      },
    ],
    notesSideBySide: true,
  },
  {
    photoIndex: 1,
    notes: [
      {
        text: "🇳🇱 Most recently, I worked at Miro in Amsterdam!",
        path: "M 52 2 C 22 14, 18 42, 48 68 C 60 80, 50 90, 48 96",
      },
    ],
    notesSideBySide: false,
  },
  {
    photoIndex: 2,
    notes: [
      {
        text: "🧘‍♀️ I am a yogi at heart. In my free time, you will find me practising my vinyasas, hand/head/chin stands, and splits.",
        path: "M 68 2 C 35 8, 12 34, 34 62 C 46 76, 28 88, 22 96",
      },
    ],
    notesSideBySide: false,
  },
];

function PhotoCard({ photo }: { photo: typeof photos[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: photo.width,
        transform: hovered
          ? `rotate(${photo.hoverRotate}) scale(1.05)`
          : `rotate(${photo.rotate}) scale(1)`,
        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: "default",
        zIndex: hovered ? 10 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: photo.aspectRatio,
          borderRadius: "14px",
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
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

function NoteWithArrow({
  text,
  path,
  markerId,
}: {
  text: string;
  path: string;
  markerId: string;
}) {
  return (
    <div className="flex flex-col items-center text-center relative z-10" style={{ minWidth: 0 }}>
      <p
        style={{
          fontFamily: "var(--font-caveat), Caveat, cursive",
          fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)",
          fontWeight: 400,
          lineHeight: 1.15,
          color: "var(--color-text)",
          margin: 0,
          maxWidth: "100%",
        }}
      >
        {text}
      </p>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
        style={{
          width: "64px",
          height: "52px",
          marginTop: "2px",
          marginBottom: "10px",
          overflow: "visible",
          flexShrink: 0,
        }}
      >
        <defs>
          <marker id={markerId} markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <path d="M 1 1.5 L 5 5 L 1 8.5" stroke="var(--color-text)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </marker>
        </defs>
        <path
          d={path}
          stroke="var(--color-text)"
          strokeWidth="1.85"
          strokeLinecap="round"
          fill="none"
          markerEnd={`url(#${markerId})`}
        />
      </svg>
    </div>
  );
}

export default function AboutMe() {
  return (
    <section id="about-me" className="py-24 px-6" style={{ backgroundColor: "var(--color-card)" }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2
          className="text-center mb-14"
          style={{
            fontFamily: "var(--font-unbounded), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            color: "var(--color-text)",
          }}
        >
          Allow me to introduce myself 😁
        </h2>

        <div
          className="w-full flex flex-col md:flex-row items-end justify-center gap-8 md:gap-6"
          style={{ maxWidth: "900px" }}
        >
          {/* Grad column — HK left of UK, both point at grad */}
          <div className="flex flex-col items-center" style={{ width: "280px" }}>
            <div className="flex items-end justify-center gap-3 w-full" style={{ marginBottom: 0 }}>
              <div style={{ flex: "1 1 0", minWidth: 0 }}>
                <NoteWithArrow
                  text={columns[0].notes[0].text}
                  path={columns[0].notes[0].path}
                  markerId="about-arrow-hk"
                />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0 }}>
                <NoteWithArrow
                  text={columns[0].notes[1].text}
                  path={columns[0].notes[1].path}
                  markerId="about-arrow-uk"
                />
              </div>
            </div>
            <PhotoCard photo={photos[0]} />
          </div>

          {/* Profile column */}
          <div className="flex flex-col items-center" style={{ width: "240px" }}>
            <NoteWithArrow
              text={columns[1].notes[0].text}
              path={columns[1].notes[0].path}
              markerId="about-arrow-nl"
            />
            <PhotoCard photo={photos[1]} />
          </div>

          {/* Yoga column */}
          <div className="flex flex-col items-center" style={{ width: "240px" }}>
            <NoteWithArrow
              text={columns[2].notes[0].text}
              path={columns[2].notes[0].path}
              markerId="about-arrow-yoga"
            />
            <PhotoCard photo={photos[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
