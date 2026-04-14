"use client";

type Artefact = {
  src: string;
  alt: string;
  portrait?: boolean;
};

// Order specified: sidekicks, enterprise_trial, spotify_connect, flows, request_admin
const artefacts: Artefact[] = [
  { src: "/artefacts/sidekicks.mp4",        alt: "Miro Sidekicks AI" },
  { src: "/artefacts/enterprise_trial.mp4", alt: "Enterprise trial flow" },
  { src: "/artefacts/spotify_connect.mp4",  alt: "Spotify Connect campaign", portrait: true },
  { src: "/artefacts/flows.mp4",            alt: "Miro Flows demo" },
  { src: "/artefacts/request_admin.mp4",    alt: "Request admin flow" },
];

function VideoCard({ item }: { item: Artefact }) {
  return (
    <div
      style={{
        width: item.portrait ? "115px" : "300px",
        height: "200px",
        flexShrink: 0,
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid var(--color-border)",
        backgroundColor: "var(--color-card)",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      >
        <source src={item.src} />
      </video>
    </div>
  );
}

export default function SneakPeek() {
  const items = [...artefacts, ...artefacts, ...artefacts];

  return (
    <section className="pt-2 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6 text-center">
        <h2
          style={{
            fontFamily: "var(--font-unbounded), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
            color: "var(--color-text)",
          }}
        >
          Sneak peek of what I&apos;m up to... 👀
        </h2>
      </div>

      <div
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="flex animate-marquee"
          style={{ width: "max-content", gap: "20px", alignItems: "center" }}
        >
          {items.map((item, i) => (
            <VideoCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
