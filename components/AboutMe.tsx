"use client";

import Image from "next/image";

const timeline = [
  { org: "Miro", role: "Associate Product Manager", years: "2025 – now", emoji: "🟡" },
  { org: "Captur", role: "Associate Product Manager", years: "2024 – 2025", emoji: "🔵" },
  { org: "Spotify", role: "Product Intern", years: "2023", emoji: "🟢" },
  { org: "Spotify", role: "Equity & Impact Intern", years: "2021 – 2022", emoji: "🟢" },
  { org: "Oxford", role: "MSc Social Science of the Internet", years: "2022 – 2023", emoji: "📚" },
  { org: "UCL", role: "BSc Psychology", years: "2019 – 2022", emoji: "📚" },
];

export default function AboutMe() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--color-card)" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "var(--font-unbounded), sans-serif",
            
            fontWeight: 400,
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            color: "var(--color-text)",
          }}
        >
          Allow me to introduce myself 😁
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: photo + text */}
          <div className="flex flex-col gap-8">
            {/* Profile photo */}
            <div className="relative w-full max-w-xs mx-auto md:mx-0">
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{ aspectRatio: "3/4", position: "relative" }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Livia Yeung at Miro Amsterdam office"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Bio text */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-widest" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>
                  My Background
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
                  Born and raised in Hong Kong, I&apos;m a product person with experience building and monetising AI products at both start-ups and scale-ups.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-widest" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>
                  My Approach
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
                  I think of great product work like a well-made cake. The base is an unwavering commitment to impact — no job too small, no detail too operational. The middle is structured but adaptable: data-driven by training (Psychology, Oxford statistics), but not afraid of creative bets. And the cherry on top is customer obsession — hands-on experience helping customers understand AI, advising on implementation, and setting go-to-market strategy to sell and scale it.
                </p>
              </div>
            </div>
          </div>

          {/* Right: timeline */}
          <div>
            <h3 className="font-semibold mb-8 text-sm uppercase tracking-widest" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>
              Career
            </h3>
            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div
                className="absolute left-3 top-3 bottom-3 w-px"
                style={{ backgroundColor: "var(--color-border)" }}
              />
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 pb-8 relative">
                  {/* Dot */}
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center z-10"
                    style={{ backgroundColor: "var(--color-primary)", marginTop: "2px" }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-text)" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>
                      {item.org}
                    </p>
                    <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                      {item.role}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                      {item.years}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
