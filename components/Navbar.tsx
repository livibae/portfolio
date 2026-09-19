"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflowX;
    const prevBody = body.style.overflowX;
    html.style.overflowX = "clip";
    body.style.overflowX = "clip";
    return () => {
      html.style.overflowX = prevHtml;
      body.style.overflowX = prevBody;
    };
  }, [isHome]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const visible = !isHome || pastHero;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(253,250,242,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="relative flex items-center justify-between gap-3 px-4 py-3 md:justify-center md:px-6 md:py-4">
        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/"
            onClick={() => {
              sessionStorage.setItem("open-projects", "0");
              sessionStorage.setItem("open-testimonials", "0");
            }}
            className="text-sm font-medium transition-opacity hover:opacity-50"
            style={{ color: "var(--color-text)" }}
          >
            Home
          </Link>
          <Link
            href="/#projects"
            onClick={() => {
            sessionStorage.setItem("open-projects", "1");
            sessionStorage.setItem("open-testimonials", "0");
            if (window.location.pathname !== "/") return;
              window.history.pushState(null, "", "/#projects");
              window.dispatchEvent(new HashChangeEvent("hashchange"));
            }}
            className="text-sm font-medium transition-opacity hover:opacity-50"
            style={{ color: "var(--color-text)" }}
          >
            Projects
          </Link>
          <Link
            href="/#wall-of-love"
            onClick={() => {
              sessionStorage.setItem("open-testimonials", "1");
              sessionStorage.setItem("open-projects", "0");
            }}
            className="text-sm font-medium transition-opacity hover:opacity-50"
            style={{ color: "var(--color-text)" }}
          >
            Testimonials
          </Link>
        </div>
        <div className="flex items-center gap-1.5 md:absolute md:right-6 md:gap-2">
          <a
            href="/livia-yeung-cv.pdf"
            download
            className="rounded-full border bg-white/60 px-2.5 py-2 font-sans text-xs font-semibold text-gray-900 backdrop-blur-md transition-opacity hover:opacity-70 md:px-4 md:text-sm"
            style={{ borderColor: "var(--color-border)" }}
          >
            Download my CV
          </a>
          <a
            href="mailto:livia.yeung@gmail.com"
            className="rounded-full bg-black px-2.5 py-2 font-sans text-xs font-semibold text-white transition-opacity hover:opacity-80 md:px-4 md:text-sm"
          >
            Connect with me
          </a>
        </div>
      </div>
    </nav>
  );
}
