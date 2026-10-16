/** Lightweight stub — avoids pulling Base UI toast for mic-permission warnings. */
export const toastManager = {
  add(opts: { type?: string; title?: string; description?: string }) {
    if (typeof console !== "undefined") {
      console.warn(`[OrbBloop] ${opts.title ?? ""}`, opts.description ?? "");
    }
  },
};
