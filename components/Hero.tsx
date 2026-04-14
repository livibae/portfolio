"use client";

import { useEffect, useRef, useState } from "react";

const floatingCards = [
  {
    src: "/artefacts/sidekicks.mp4",
    style: { top: "14%", left: "1%", width: "200px", height: "130px", rotate: "-7deg" },
  },
  {
    src: "/artefacts/enterprise_trial.mp4",
    style: { top: "12%", right: "2%", width: "210px", height: "135px", rotate: "6deg" },
  },
  {
    src: "/artefacts/flows.mp4",
    style: { bottom: "6%", left: "3%", width: "185px", height: "120px", rotate: "5deg" },
  },
  {
    src: "/artefacts/spotify_connect.mp4",
    style: { bottom: "4%", right: "3%", width: "100px", height: "175px", rotate: "-5deg" },
  },
];

const phrases = [
  "product-led growth",
  "monetising AI products",
  "building 0 → 1",
  "rapid experimentation",
  "building for Enterprise",
  "AI prototyping",
];

const TYPING_SPEED   = 60;   // ms per character
const DELETING_SPEED = 35;   // ms per character
const PAUSE_AFTER    = 1800; // ms to hold the full phrase
const PAUSE_BEFORE   = 300;  // ms before typing next phrase

function FloatingCard({ card }: { card: typeof floatingCards[0] }) {
  const { src, style: { top, left, right, bottom, width, height, rotate } } = card;
  return (
    <div
      style={{
        position: "absolute",
        top, left, right, bottom, width, height,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(26,23,19,0.14)",
        transform: `rotate(${rotate})`,
        border: "2px solid rgba(255,255,255,0.7)",
      }}
    >
      <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
        <source src={src} />
      </video>
    </div>
  );
}

function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed]     = useState("");
  const [isDeleting, setIsDeleting]   = useState(false);
  const [started, setStarted]         = useState(false);

  // Delay start until after hero fade-in
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;

    const target = phrases[phraseIndex];

    if (!isDeleting && displayed === target) {
      // Finished typing — pause then start deleting
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed === "") {
      // Finished deleting — move to next phrase
      const t = setTimeout(() => {
        setPhraseIndex(i => (i + 1) % phrases.length);
        setIsDeleting(false);
      }, PAUSE_BEFORE);
      return () => clearTimeout(t);
    }

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const t = setTimeout(() => {
      setDisplayed(isDeleting
        ? target.slice(0, displayed.length - 1)
        : target.slice(0, displayed.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, isDeleting, phraseIndex, started]);

  return (
    <span style={{ color: "var(--color-primary)" }}>
      {displayed}
      {/* Blinking cursor */}
      <span
        style={{
          display: "inline-block",
          width: "3px",
          height: "0.8em",
          backgroundColor: "var(--color-primary)",
          marginLeft: "3px",
          verticalAlign: "middle",
          animation: "blink 0.9s step-end infinite",
        }}
      />
    </span>
  );
}

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(16px)";
      child.style.transition = `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`;
      requestAnimationFrame(() => {
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
      });
    });
  }, []);

  return (
    <>
      {/* Cursor blink keyframe */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <section
        className="relative flex flex-col items-center justify-center px-6 text-center overflow-hidden"
        style={{ paddingTop: "80px", minHeight: "75vh" }}
      >
        {floatingCards.map((card, i) => (
          <FloatingCard key={i} card={card} />
        ))}

        <div ref={contentRef} className="relative z-10 flex flex-col items-center gap-5">

          {/* Curved "This is Livia" */}
          <svg viewBox="0 0 260 48" width="260" aria-label="This is Livia" style={{ overflow: "visible" }}>
            <defs>
              <path id="arc" d="M 10,38 Q 130,2 250,38" />
            </defs>
            <text
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-nunito), Nunito, sans-serif",
                fontWeight: 500,
                fill: "var(--color-text-muted)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              <textPath href="#arc" startOffset="50%" textAnchor="middle">
                This is Livia
              </textPath>
            </text>
          </svg>

          {/* Main heading — static line */}
          <h1
            className="max-w-4xl leading-tight"
            style={{
              fontFamily: "var(--font-nabla), sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              lineHeight: 1.08,
              color: "var(--color-text)",
            }}
          >
            The AI-native<br />Product Manager
          </h1>

          {/* Typing subtitle */}
          <p
            className="font-medium"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--color-text-muted)",
              minHeight: "2em",
            }}
          >
            with experience in <TypingText />
          </p>

          {/* CTA */}
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full mt-2"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text)",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.opacity = "0.8";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            See my projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
