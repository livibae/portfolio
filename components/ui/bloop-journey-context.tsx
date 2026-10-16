"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export type BloopHeroProgress = {
  /** 0 = landing circle, 1 = morph complete ("I obsess…" fully in). */
  morph: number;
  /** 0 = pre-fan, 1 = project cards fully fanned. */
  fan: number;
  /** Hero section still pinned at top of viewport. */
  heroPinned: boolean;
};

type BloopJourneyContextValue = {
  hero: BloopHeroProgress;
  setHero: Dispatch<SetStateAction<BloopHeroProgress>>;
};

const BloopJourneyContext = createContext<BloopJourneyContextValue | null>(null);

const DEFAULT_HERO: BloopHeroProgress = {
  morph: 0,
  fan: 0,
  heroPinned: true,
};

export function BloopJourneyProvider({ children }: { children: React.ReactNode }) {
  const [hero, setHero] = useState<BloopHeroProgress>(DEFAULT_HERO);
  const value = useMemo(() => ({ hero, setHero }), [hero]);
  return (
    <BloopJourneyContext.Provider value={value}>{children}</BloopJourneyContext.Provider>
  );
}

export function useBloopJourney() {
  const ctx = useContext(BloopJourneyContext);
  if (!ctx) {
    throw new Error("useBloopJourney must be used within BloopJourneyProvider");
  }
  return ctx;
}

/** Optional — ScrollBloop can render without a provider during early mount. */
export function useBloopJourneyOptional() {
  return useContext(BloopJourneyContext);
}
