"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(253,250,242,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
      }}
    >
      {/* All three items centred as a tight group */}
      <div className="flex items-center justify-center gap-8 px-6 py-4">
        <Link
          href="/works"
          className="text-sm font-medium transition-opacity hover:opacity-50"
          style={{ color: "var(--color-text)" }}
        >
          Works
        </Link>

        <Link
          href="/"
          style={{
            fontFamily: "var(--font-nabla), sans-serif",
            fontSize: "2rem",
            color: "#A0722A",
            lineHeight: 1,
            textDecoration: "none",
          }}
        >
          Livia Yeung
        </Link>

        <Link
          href="/wall-of-love"
          className="text-sm font-medium transition-opacity hover:opacity-50"
          style={{ color: "var(--color-text)" }}
        >
          Wall of Love
        </Link>
      </div>
    </nav>
  );
}
