import Navbar from "@/components/Navbar";

export default function WallOfLovePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
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
            Wall of Love
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            All testimonials and recommendations — full page coming soon.
          </p>
        </div>
      </main>
    </>
  );
}
