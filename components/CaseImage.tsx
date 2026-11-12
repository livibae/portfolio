"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type CaseImageProps = {
  src: string;
  alt: string;
  compact?: boolean;
  borderless?: boolean;
  fallback?: string;
  className?: string;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

export default function CaseImage({
  src,
  alt,
  compact,
  borderless,
  fallback,
  className,
}: CaseImageProps) {
  const [open, setOpen] = useState(false);
  const imageSrc = src || fallback || "";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View larger: ${alt}`}
        className={`group block w-full cursor-zoom-in rounded-xl overflow-hidden text-left p-0 ${className ?? ""}`}
        style={{
          border: borderless ? "none" : "1px solid var(--color-border)",
          background: borderless ? "#151515" : "var(--color-card)",
          maxWidth: compact ? "640px" : undefined,
          marginInline: compact ? "auto" : undefined,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-auto block transition-opacity group-hover:opacity-95"
          loading="lazy"
        />
      </button>
      {open ? (
        <ImageLightbox
          src={imageSrc}
          alt={alt}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}

function ImageLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const didDrag = useRef(false);
  const lastPoint = useRef({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  const zoomToward = useCallback((clientX: number, clientY: number, nextZoom: number) => {
    const stage = stageRef.current;
    setZoom((prevZoom) => {
      if (!stage || prevZoom === nextZoom) return nextZoom;
      const rect = stage.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const scale = nextZoom / prevZoom;
      setOffset((prev) => ({
        x: (clientX - cx - prev.x) * (1 - scale) + prev.x,
        y: (clientY - cy - prev.y) * (1 - scale) + prev.y,
      }));
      return nextZoom;
    });
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(MAX_ZOOM, z + 0.25));
      if (e.key === "-") setZoom((z) => Math.max(MIN_ZOOM, z - 0.25));
      if (e.key === "0") {
        setZoom(1);
        setOffset({ x: 0, y: 0 });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setZoom((z) => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z + delta));
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      style={{ background: "rgba(10, 10, 12, 0.82)" }}
      onClick={onClose}
      onWheel={onWheel}
    >
      <div
        className="absolute top-4 right-4 flex items-center gap-2 z-[1001]"
        onClick={(e) => e.stopPropagation()}
      >
        <LightboxButton
          label="Zoom out"
          onClick={() =>
            setZoom((z) => {
              const next = Math.max(MIN_ZOOM, z - 0.25);
              if (next === 1) setOffset({ x: 0, y: 0 });
              return next;
            })
          }
        >
          −
        </LightboxButton>
        <span className="min-w-[3.5rem] text-center text-sm text-white/80 tabular-nums">
          {Math.round(zoom * 100)}%
        </span>
        <LightboxButton
          label="Zoom in"
          onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z + 0.25))}
        >
          +
        </LightboxButton>
        <LightboxButton
          label="Reset zoom"
          onClick={() => {
            setZoom(1);
            setOffset({ x: 0, y: 0 });
          }}
        >
          Reset
        </LightboxButton>
        <LightboxButton label="Close" onClick={onClose}>
          ✕
        </LightboxButton>
      </div>

      <div
        ref={stageRef}
        className="relative max-h-[90vh] max-w-[92vw] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => {
          dragging.current = true;
          didDrag.current = false;
          lastPoint.current = { x: e.clientX, y: e.clientY };
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!dragging.current) return;
          const dx = e.clientX - lastPoint.current.x;
          const dy = e.clientY - lastPoint.current.y;
          if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
            didDrag.current = true;
          }
          if (zoom <= 1 || !didDrag.current) return;
          lastPoint.current = { x: e.clientX, y: e.clientY };
          setOffset((o) => ({ x: o.x + dx, y: o.y + dy }));
        }}
        onPointerUp={(e) => {
          const wasDragging = didDrag.current;
          dragging.current = false;
          didDrag.current = false;
          if (wasDragging) return;
          if (zoom > 1) {
            // Click to zoom out toward cursor
            const next = Math.max(MIN_ZOOM, zoom - 0.5);
            if (next === 1) {
              setZoom(1);
              setOffset({ x: 0, y: 0 });
            } else {
              zoomToward(e.clientX, e.clientY, next);
            }
            return;
          }
          // Click to zoom in toward cursor
          const next = Math.min(MAX_ZOOM, zoom + 0.5);
          zoomToward(e.clientX, e.clientY, next);
        }}
        onPointerCancel={() => {
          dragging.current = false;
          didDrag.current = false;
        }}
        style={{ cursor: zoom > 1 ? "zoom-out" : "zoom-in" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-h-[90vh] max-w-[92vw] h-auto w-auto object-contain select-none pointer-events-none"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transformOrigin: "center center",
            transition: dragging.current ? "none" : "transform 0.12s ease-out",
          }}
        />
      </div>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60 pointer-events-none">
        Click to zoom in/out · Drag to pan · Esc to close
      </p>
    </div>,
    document.body
  );
}

function LightboxButton({
  children,
  onClick,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="rounded-lg px-3 py-2 text-sm font-medium text-white"
      style={{
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.18)",
        backdropFilter: "blur(8px)",
      }}
    >
      {children}
    </button>
  );
}
