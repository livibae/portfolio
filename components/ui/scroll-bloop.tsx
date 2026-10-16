"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import OrbBloop from "@/components/ui/orb-bloop";
import { BloopState } from "@/components/ui/orb-bloop-utils/types";
import {
  BLOOP_PALETTES,
  BloopPaletteName,
} from "@/components/ui/orb-bloop-utils/palettes";
import { useBloopJourneyOptional } from "@/components/ui/bloop-journey-context";
import { cn } from "@/lib/utils";

type Pose = {
  /** Viewport % for CSS top/left (transform origin centre). */
  top: number;
  left: number;
  /** Visual scale relative to base canvas. */
  scale: number;
  opacity: number;
};

/**
 * Journey keyframes for the bloop across the homepage:
 * 0 Landing circle centre
 * 1 Below "I obsess…" copy, above project cards
 * 2 Projects fan — small, lower-right (clear of cards + copy)
 * 3 Testimonials — small, lower-left (clear of memo stack)
 * 4 Let's talk — centred above the heading
 */
const POSES: Pose[] = [
  // 0 Landing — centre of the card circle
  { top: 50, left: 50, scale: 1.2, opacity: 1 },
  // 1 In the gap under "Scroll to explore…", clear of the card arc
  { top: 50, left: 50, scale: 0.42, opacity: 0.95 },
  // 2 Projects fan — lower-right corner accent
  { top: 88, left: 91, scale: 0.52, opacity: 0.9 },
  // 3 Testimonials — lower-left corner accent (inset so the orb stays fully on-screen)
  { top: 86, left: 12, scale: 0.68, opacity: 0.9 },
  // 4 Let's talk — sits in the whitespace above the heading
  { top: 32, left: 50, scale: 0.85, opacity: 0.92 },
];

const BASE_SIZE = 280;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));
const ease = (t: number) => {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
};

function lerpPose(a: Pose, b: Pose, t: number): Pose {
  const e = ease(t);
  return {
    top: lerp(a.top, b.top, e),
    left: lerp(a.left, b.left, e),
    scale: lerp(a.scale, b.scale, e),
    opacity: lerp(a.opacity, b.opacity, e),
  };
}

function samplePoses(progress: number): Pose {
  const p = clamp01(progress) * (POSES.length - 1);
  const i = Math.min(POSES.length - 2, Math.floor(p));
  const local = p - i;
  return lerpPose(POSES[i], POSES[i + 1], local);
}

/**
 * Fixed scroll-driven OrbBloop. Mirrors the ScrollGlobe idea (fixed element +
 * section poses) but wired to this portfolio's hero morph/fan + page sections.
 */
export default function ScrollBloop({ className }: { className?: string }) {
  const journey = useBloopJourneyOptional();
  const [pageProgress, setPageProgress] = useState(0);
  const [isNarrow, setIsNarrow] = useState(false);
  const palette = BLOOP_PALETTES[BloopPaletteName.amber];

  useEffect(() => {
    const sync = () => setIsNarrow(window.innerWidth < 768);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  const updatePageProgress = useCallback(() => {
    const wall = document.getElementById("wall-of-love");
    const talk = document.getElementById("lets-talk");
    if (!wall) {
      setPageProgress(0);
      return;
    }

    const vh = window.innerHeight || 1;
    const wallTop = wall.getBoundingClientRect().top;
    // 0 → 0.5 as testimonials pin; 0.5 → 1 as Let's talk enters.
    const toWall = clamp01(1 - wallTop / vh) * 0.5;
    let end = toWall;
    if (talk) {
      const talkTop = talk.getBoundingClientRect().top;
      const toTalk = clamp01(1 - talkTop / (vh * 0.85));
      end = clamp01(toWall + toTalk * 0.5);
    }
    setPageProgress(end);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updatePageProgress();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updatePageProgress();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updatePageProgress]);

  const poses = useMemo(() => {
    if (!isNarrow) return POSES;
    // Keep corner accents inset on phones so they stay on-screen.
    return POSES.map((p, i) => {
      if (i === 2) return { ...p, top: 86, left: 86, scale: 0.45 };
      if (i === 3) return { ...p, top: 84, left: 18, scale: 0.55 };
      if (i === 4) return { ...p, top: 28, scale: 0.7 };
      return p;
    });
  }, [isNarrow]);

  const pose = useMemo(() => {
    const morph = journey?.hero.morph ?? 0;
    const fan = journey?.hero.fan ?? 0;
    const heroPinned = journey?.hero.heroPinned ?? true;
    const last = poses.length - 1;
    // Pose index 2 is the last within-hero keyframe (projects corner).
    const heroEnd = 2 / last;

    // Within-hero journey:
    //   morph 0→1  : landing centre → under "I obsess…" (poses 0→1)
    //   fan   0→1  : under copy → projects lower-right (poses 1→2)
    const toUnderCopy = clamp01(morph);
    const toProjectsCorner = clamp01(fan);
    const heroProgress = clamp01(toUnderCopy * 0.5 + toProjectsCorner * 0.5);

    const sample = (progress: number) => {
      const p = clamp01(progress) * last;
      const i = Math.min(last - 1, Math.floor(p));
      return lerpPose(poses[i], poses[i + 1], p - i);
    };

    // Projects → testimonials → let's talk (poses 2 → 3 → 4)
    if (!heroPinned || pageProgress > 0.08) {
      const leaveHero = clamp01(pageProgress);
      return sample(lerp(Math.max(heroProgress * heroEnd, heroEnd * 0.85), 1, leaveHero));
    }

    return sample(heroProgress * heroEnd);
  }, [
    journey?.hero.morph,
    journey?.hero.fan,
    journey?.hero.heroPinned,
    pageProgress,
    poses,
  ]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-[25] will-change-transform",
        className,
      )}
      style={{
        top: `${pose.top}vh`,
        left: `${pose.left}vw`,
        width: BASE_SIZE,
        height: BASE_SIZE,
        opacity: pose.opacity,
        transform: `translate3d(-50%, -50%, 0) scale3d(${pose.scale}, ${pose.scale}, 1)`,
        transition:
          "top 0.85s cubic-bezier(0.23, 1, 0.32, 1), left 0.85s cubic-bezier(0.23, 1, 0.32, 1), transform 0.85s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.45s ease-out",
      }}
      aria-hidden
    >
      <OrbBloop
        size={BASE_SIZE}
        audioMode="ambient"
        demoMode
        state={BloopState.listen}
        bloopColorMain={palette.main}
        bloopColorLow={palette.low}
        bloopColorMid={palette.mid}
        bloopColorHigh={palette.high}
        watercolorStrength={0.55}
        className="h-full w-full"
      />
    </div>
  );
}
