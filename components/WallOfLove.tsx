"use client";


const quotes = [
  {
    text: "I think [she is] a pretty efficient 'learning machine' — mechanising the opportunities in front of [her] not just as immediate tasks to do well, but as opportunities to get better at those kinds of things.",
    name: "Charles Dupont",
    role: "CPO, Captur",
    note: "Direct line manager",
    linkedIn: "https://www.linkedin.com/in/charles44dupont/",
  },
  {
    text: "Livia's talent for bringing stakeholders together and aligning them around the identified problem was impressive.",
    name: "Lisa Steinhäuser",
    role: "Product Manager, Spotify",
    note: "Mentor & stakeholder",
    linkedIn: "https://www.linkedin.com/in/lisa-steinhaeuser/",
    fullReview: "https://www.linkedin.com/in/livia-yeung/",
  },
  {
    text: "Livia is always ready to help! She'll step out of the comfort of the PM role and jump into whatever is necessary to move the project forward.",
    name: "Dick Wiggers",
    role: "Senior Software Engineer, Miro",
    linkedIn: "https://www.linkedin.com/in/dickwiggers/",
  },
];

function QuoteCard({ quote }: { quote: typeof quotes[0] }) {
  return (
    <div
      className="rounded-2xl p-8 flex flex-col gap-5"
      style={{ backgroundColor: "var(--color-bg)", border: "1px solid var(--color-border)" }}
    >
      <p className="text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
        &ldquo;{quote.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto">
        {/* Initials avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
          style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text)" }}
        >
          {quote.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <a
            href={quote.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold hover:underline"
            style={{ color: "var(--color-text)" }}
          >
            {quote.name}
          </a>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            {quote.role}
            {quote.note && ` · ${quote.note}`}
          </p>
          {quote.fullReview && (
            <a
              href={quote.fullReview}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:underline"
              style={{ color: "var(--color-text-muted)" }}
            >
              Full review on LinkedIn ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WallOfLove() {
  return (
    <section id="wall-of-love" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "var(--font-unbounded), sans-serif",
            
            fontWeight: 400,
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            color: "var(--color-text)",
          }}
        >
          Don&apos;t just take my word... 🙊
        </h2>
        <p
          className="text-center mb-12"
          style={{
            fontStyle: "italic",
            fontSize: "1rem",
            color: "var(--color-text-muted)",
          }}
        >
          ...hear from people who have worked with me!
        </p>

        <div className="flex flex-col gap-6">
          {quotes.map((q, i) => (
            <QuoteCard key={i} quote={q} />
          ))}
        </div>

      </div>
    </section>
  );
}
