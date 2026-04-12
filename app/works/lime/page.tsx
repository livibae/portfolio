import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Lime() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-4xl mx-auto px-6 pt-10">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity"
            style={{ color: "var(--color-text-muted)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Works
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div
            className="inline-block text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-widest mb-8"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text)" }}
          >
            Coming soon
          </div>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--color-text)",
            }}
          >
            Decreasing bad parking by 22% for Lime
          </h1>
          <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Improving parking compliance of Lime users by leveraging review insights and A/B test results. Full case study coming soon.
          </p>
        </div>
      </main>
    </>
  );
}
