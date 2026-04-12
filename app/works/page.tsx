import Navbar from "@/components/Navbar";
import Works from "@/components/Works";

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-4">
          <h1
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--color-text)",
            }}
          >
            Works
          </h1>
          <p className="mt-3 text-base" style={{ color: "var(--color-text-muted)" }}>
            A selection of projects across monetisation, growth, and AI product.
          </p>
        </div>
        <Works />
      </main>
    </>
  );
}
