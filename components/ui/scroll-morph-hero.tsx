"use client";

import React, { useState, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

type CaseCard = {
  src: string;
  title: string;
  subtitle: string;
  href: string;
  logo: string;
  status: string;
  chips: string[];
};

const MIRO_LOGO = "/case-studies/Miro_Miro_Icon_1.png";
const SPOTIFY_LOGO = "/case-studies/Spotify_Symbol_1.png";

const CASES: CaseCard[] = [
  {
    src: "/artefacts/paywall.png",
    title: "Driving $310K ARR with plan recommendation tags on paywalls",
    subtitle: "Adding plan recommendation tags on paywalls to help users choose the right plan with less cognitive load",
    href: "/works/paywall-plantag",
    logo: MIRO_LOGO,
    status: "🧪 Successful experiment",
    chips: ["Monetization", "Paywalls", "A/B testing"],
  },
  {
    src: "/artefacts/downgrade.png",
    title: "Retaining $400K ARR with downgrade alternatives",
    subtitle: "Offering yearly-to-monthly and Business-to-Starter downgrades in the cancelation flow to reduce churn",
    href: "/works/downgrade-experiment",
    logo: MIRO_LOGO,
    status: "🧪 Successful experiment",
    chips: ["Churn & retention", "Claude Design prototype", "A/B testing"],
  },
  {
    src: "/artefacts/spotify-tv.png",
    title: "Activating 12M new Spotify TV users",
    subtitle: "Increasing adoption of Spotify Connect through an in-app campaign promoting listening on TV from mobile",
    href: "/works/spotify-connect",
    logo: SPOTIFY_LOGO,
    status: "🧪 Successful experiment",
    chips: ["Engagement", "In-app campaign", "UX research", "A/B testing"],
  },
  {
    src: "/artefacts/miro_prototypes.png",
    title: "Generating $820K influenced ARR in 7 months for Miro Prototypes",
    subtitle: "Enabling product-led sales through a feature request flow",
    href: "/works/miro-prototypes",
    logo: MIRO_LOGO,
    status: "🚀 Launched initiative",
    chips: ["Working with GTM", "Lifecycle", "SQL", "Replit prototype"],
  },
  {
    src: "/artefacts/winback.png",
    title: "Retaining $600K at-risk ARR with 1-month winback offer",
    subtitle: "Using discounts as a last-resort save for price-sensitive teams at the cancelation moment",
    href: "/works/winback-offer",
    logo: MIRO_LOGO,
    status: "🧪 Successful experiment",
    chips: ["Churn & retention", "A/B testing"],
  },
];

const CARDS: CaseCard[] = Array.from({ length: 20 }, (_, i) => CASES[i % CASES.length]);
const TOTAL_IMAGES = CARDS.length;
const ARC_END = 1100;
const FAN_END = 2500;
const MAX_SCROLL = FAN_END;
// Left to right: Spotify, downgrade, winback, paywall, prototypes.
const FAN_ORDER = [2, 1, 4, 0, 3];
const FAN_SOURCE = [7, 11, 9, 10, 13];

let stickToProjects = false;

function wantsProjects() {
  if (typeof window === "undefined") return stickToProjects;
  const flag = sessionStorage.getItem("open-projects");
  if (flag === "1") stickToProjects = true;
  if (flag === "0") stickToProjects = false;
  return stickToProjects || window.location.hash === "#projects";
}

const IMG_WIDTH = 72;
const IMG_HEIGHT = 96;

function widthMultiplier(width: number) {
  if (width < 480) return 0.42;
  if (width < 640) return 0.52;
  if (width < 768) return 0.64;
  if (width < 1024) return 0.82;
  return 1;
}

function fanPose(slot: number, width: number, height: number) {
  const mult = widthMultiplier(width);
  const distance = (slot - 2) / 2;
  const abs = Math.abs(distance);
  const base = width < 768 ? 2.3 : 3.2;
  return {
    x: distance * 24 * mult * 16,
    y: -height * (width < 768 ? 0.16 : 0.22) + abs * abs * 4.6 * mult * 16,
    rotation: distance * 16,
    scale: base * (1 - 0.18 * abs * abs),
    z: 12 - Math.abs(slot - 2),
  };
}

function FlipCard({
  card,
  target,
  interactive,
  onHover,
}: {
  card: CaseCard;
  interactive: boolean;
  onHover?: () => void;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number; z: number };
}) {
  const router = useRouter();
  const revealTop = card.src.includes("downgrade");
  const canInteract = interactive && target.opacity > 0.6;

  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 24,
      }}
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        zIndex: target.z,
        pointerEvents: canInteract ? "auto" : "none",
      }}
      className={canInteract ? "cursor-pointer" : undefined}
      role={canInteract ? "link" : undefined}
      aria-label={card.title}
      onPointerEnter={onHover}
      onClick={() => {
        if (canInteract) router.push(card.href);
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl shadow-lg" style={{ backgroundColor: "var(--color-card)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.src}
          alt=""
          className="h-full w-full object-cover"
          style={revealTop ? { transform: "translateY(12%)" } : undefined}
        />
      </div>
    </motion.div>
  );
}

function ScrollArrow() {
  return (
    <svg
      className="scroll-cue-arrow h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 4v13" />
      <path d="M6 12l6 7 6-7" />
    </svg>
  );
}

function ScrollCue({ label }: { label: string }) {
  return (
    <div className="mt-6 flex flex-col items-center gap-2 text-gray-500">
      <p className="font-sans text-xs font-bold uppercase tracking-[0.2em]">{label}</p>
      <ScrollArrow />
    </div>
  );
}

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;
const ease = (t: number) => {
  const x = Math.min(Math.max(t, 0), 1);
  return x * x * (3 - 2 * x);
};

export default function IntroAnimation() {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);
    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });

    return () => observer.disconnect();
  }, []);

  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);
  const openedProjects = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const projectsPinned = () => {
      const section = container.parentElement;
      if (!section) return true;
      return section.getBoundingClientRect().top >= -1;
    };

    const applyDelta = (deltaY: number) => {
      if (!projectsPinned()) return false;
      const next = scrollRef.current + deltaY;
      const atStart = scrollRef.current <= 0 && deltaY < 0;
      const atEnd = scrollRef.current >= MAX_SCROLL && deltaY > 0;
      if (atStart || atEnd) return false;
      const newScroll = Math.min(Math.max(next, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
      return true;
    };

    const handleWheel = (e: WheelEvent) => {
      if (applyDelta(e.deltaY)) e.preventDefault();
    };

    let touchStartY = 0;
    let touchOnNav = false;
    const isProjectNav = (target: EventTarget | null) =>
      target instanceof Element && Boolean(target.closest("[data-project-nav]"));

    const handleTouchStart = (e: TouchEvent) => {
      touchOnNav = isProjectNav(e.target);
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (touchOnNav) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;
      if (applyDelta(deltaY)) e.preventDefault();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [virtualScroll]);

  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 90, damping: 26 });

  const fanProgress = useTransform(virtualScroll, [ARC_END, FAN_END], [0, 1]);

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  useEffect(() => {
    if (openedProjects.current || wantsProjects()) return;
    const timer1 = setTimeout(() => setIntroPhase("line"), 500);
    const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scatterPositions = useMemo(() => {
    return CARDS.map(() => ({
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1000,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    }));
  }, []);

  const [morphValue, setMorphValue] = useState(0);
  const [fanValue, setFanValue] = useState(0);
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);
  const [pinnedSlot, setPinnedSlot] = useState<number | null>(null);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
    const unsubscribeFan = fanProgress.on("change", setFanValue);
    const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
    return () => {
      unsubscribeMorph();
      unsubscribeFan();
      unsubscribeParallax();
    };
  }, [smoothMorph, fanProgress, smoothMouseX]);

  useLayoutEffect(() => {
    const showProjects = () => {
      if (!wantsProjects()) return;
      sessionStorage.removeItem("open-projects");
      openedProjects.current = true;
      setIntroPhase("circle");
      scrollRef.current = MAX_SCROLL;
      virtualScroll.set(MAX_SCROLL);
      setMorphValue(1);
      setFanValue(1);
      window.scrollTo(0, 0);
    };

    showProjects();
    const retries = [0, 50, 200, 600].map((delay) => setTimeout(showProjects, delay));
    window.addEventListener("hashchange", showProjects);
    return () => {
      retries.forEach(clearTimeout);
      window.removeEventListener("hashchange", showProjects);
    };
  }, [virtualScroll]);

  const introIn = morphValue <= 0.8 ? 0 : Math.min(1, (morphValue - 0.8) / 0.2);
  const introCopyOpacity = introIn * (1 - ease(Math.min(1, fanValue / 0.38)));
  const introShift = lerp(0, -28, ease(Math.min(1, fanValue / 0.38)));
  const projectOpacity = ease(Math.min(1, Math.max(0, (fanValue - 0.78) / 0.18)));
  const interactive = fanValue > 0.9;
  const focusSlot = hoveredSlot ?? pinnedSlot ?? 2;
  const activeCase = CASES[FAN_ORDER[focusSlot]];
  const fanT = ease(fanValue);

  const centerPose = fanPose(2, containerSize.width || 1, containerSize.height || 1);
  const edgePose = fanPose(0, containerSize.width || 1, containerSize.height || 1);
  const lowestCard = Math.max(
    centerPose.y + (IMG_HEIGHT * centerPose.scale) / 2,
    edgePose.y + (IMG_HEIGHT * edgePose.scale) / 2,
  );
  const titleTop = containerSize.height
    ? Math.min(containerSize.height / 2 + lowestCard + 36, containerSize.height - 210)
    : 0;
  const selectedTop = containerSize.height
    ? Math.max(12, containerSize.height / 2 + centerPose.y - (IMG_HEIGHT * centerPose.scale) / 2 - 28)
    : 0;
  const shiftSlot = (direction: number) => {
    setHoveredSlot(null);
    setPinnedSlot((current) => {
      const base = current ?? 2;
      return (base + direction + FAN_ORDER.length) % FAN_ORDER.length;
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div
        className="flex h-full w-full flex-col items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div className="pointer-events-none absolute top-1/2 z-0 flex -translate-y-1/2 flex-col items-center justify-center px-6 text-center [&_*]:pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={
              introPhase === "circle" && morphValue < 0.5 && fanValue < 0.02
                ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }
            }
            transition={{ duration: 1 }}
            className="font-sans text-2xl font-medium tracking-tight text-gray-800 md:text-4xl"
          >
            Hi, I am Livia
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              introPhase === "circle" && morphValue < 0.5 && fanValue < 0.02
                ? { opacity: 0.55 - morphValue }
                : { opacity: 0 }
            }
            transition={{ duration: 1, delay: 0.2 }}
          >
            <ScrollCue label="Who am I" />
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute top-[5%] z-10 flex flex-col items-center justify-center px-4 text-center [&_*]:pointer-events-none"
          style={{ opacity: introCopyOpacity, transform: `translateY(${introShift}px)` }}
        >
          <h2 className="mb-4 max-w-3xl font-sans text-2xl font-semibold leading-snug tracking-tight text-gray-900 md:text-4xl">
            I obsess over bringing value to users, then turning that value into revenue.
          </h2>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-gray-600 md:text-base">
            Currently Associate Product Manager (APM), Growth @Miro. $1.3M ARR generated from 15 experiments across acquisition, activation, monetization and retention.
          </p>
          <ScrollCue label="Explore my proudest projects" />
        </div>

        <div
          className="relative z-20 flex h-full w-full items-center justify-center"
          onPointerLeave={() => setHoveredSlot(null)}
        >
          {CARDS.slice(0, TOTAL_IMAGES).map((card, i) => {
            let target: { x: number; y: number; rotation: number; scale: number; opacity: number; z: number } = {
              x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, z: 2,
            };

            if (introPhase === "scatter") {
              target = { ...scatterPositions[i], z: 2 };
            } else if (introPhase === "line") {
              const lineSpacing = IMG_WIDTH + 14;
              const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
              const lineX = i * lineSpacing - lineTotalWidth / 2;
              target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1, z: 2 };
            } else {
              const isMobile = containerSize.width < 768;
              const minDimension = Math.min(containerSize.width, containerSize.height);
              const circleRadius = Math.min(minDimension * 0.35, 350);
              const circleAngle = (i / TOTAL_IMAGES) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
              const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
              const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
              const arcCenterY = arcApexY + arcRadius;
              const spreadAngle = isMobile ? 100 : 130;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / (TOTAL_IMAGES - 1);
              const currentArcAngle = startAngle + i * step;
              const arcRad = (currentArcAngle * Math.PI) / 180;
              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue * (1 - fanValue),
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.4 : 1.8,
              };

              const arcTarget = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };

              const slot = FAN_SOURCE.indexOf(i);
              const mult = widthMultiplier(containerSize.width);

              if (slot === -1) {
                target = {
                  ...arcTarget,
                  opacity: lerp(1, 0, Math.min(1, fanT * 1.35)),
                  scale: lerp(arcTarget.scale, arcTarget.scale * 0.82, fanT),
                  z: 1,
                };
              } else {
                const pose = fanPose(slot, containerSize.width, containerSize.height);
                let x = pose.x;
                let y = pose.y;
                let rotation = pose.rotation;
                let scale = pose.scale;

                if (interactive && focusSlot !== null) {
                  if (slot === focusSlot) {
                    y -= 14;
                    scale *= 1.05;
                  } else {
                    const dir = slot < focusSlot ? -1 : 1;
                    const distance = Math.abs(slot - focusSlot);
                    x += dir * 18 * (1 + 0.2 * Math.max(0, 3 - distance)) * mult;
                    rotation += dir * 2;
                  }
                }

                target = {
                  x: lerp(arcTarget.x, x, fanT),
                  y: lerp(arcTarget.y, y, fanT),
                  rotation: lerp(arcTarget.rotation, rotation, fanT),
                  scale: lerp(arcTarget.scale, scale, fanT),
                  opacity: 1,
                  z: slot === focusSlot ? 30 : pose.z,
                };
              }
            }

            return (
              <FlipCard
                key={i}
                card={card}
                interactive={interactive && FAN_SOURCE.includes(i)}
                onHover={FAN_SOURCE.includes(i) ? () => setHoveredSlot(FAN_SOURCE.indexOf(i)) : undefined}
                target={{
                  x: target.x,
                  y: target.y,
                  rotation: target.rotation,
                  scale: target.scale,
                  opacity: target.opacity,
                  z: target.z,
                }}
              />
            );
          })}
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 z-30 [&_*]:pointer-events-none"
          style={{ top: selectedTop, opacity: projectOpacity }}
        >
          <p className="text-center font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            Selected projects
          </p>
        </div>

        <div
          data-project-nav
          className="absolute z-[60] flex -translate-y-1/2 items-center"
          style={{
            top: Math.max(selectedTop + 8, 56),
            right: 8,
            opacity: projectOpacity,
            pointerEvents: projectOpacity > 0.4 ? "auto" : "none",
          }}
        >
          <button
            type="button"
            aria-label="Previous project"
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              shiftSlot(-1);
            }}
            className="flex h-12 w-12 touch-manipulation items-center justify-center text-gray-500 transition-opacity hover:opacity-50 active:opacity-40"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next project"
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              shiftSlot(1);
            }}
            className="flex h-12 w-12 touch-manipulation items-center justify-center text-gray-500 transition-opacity hover:opacity-50 active:opacity-40"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 z-30 px-6 text-center [&_*]:pointer-events-none"
          style={{ top: titleTop, opacity: projectOpacity }}
        >
          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            {activeCase.status}
          </p>
          <h2 className="mx-auto mb-4 max-w-3xl text-center font-sans text-2xl font-semibold leading-snug tracking-tight text-gray-900 md:text-4xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeCase.logo}
              alt=""
              className="mr-3 inline-block h-[0.82em] w-[0.82em] rounded-[0.18em] align-[-0.12em] shadow-sm"
            />
            {activeCase.title}
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-sm leading-relaxed text-gray-600 md:text-base">
            {activeCase.subtitle}
          </p>
          <div className="mx-auto mt-4 flex max-w-2xl flex-wrap justify-center gap-2">
            {activeCase.chips.map((chip) => (
              <span key={chip} className="glass-tag">{chip}</span>
            ))}
          </div>
          <ScrollCue label="Don't just take my word..." />
        </div>
      </div>
    </div>
  );
}
