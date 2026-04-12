import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const metrics = [
  { value: "12M", label: "New users activated" },
  { value: "↑11%", label: "Feature adoption rate" },
  { value: "↑6%", label: "Weekly active listening time" },
];

const chips = ["Experimentation", "UX Research", "Messaging", "Copywriting", "A/B Testing", "Figma"];

export default function SpotifyConnect() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        {/* Back link */}
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

        {/* Header */}
        <header className="max-w-4xl mx-auto px-6 pt-10 pb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {chips.map(chip => (
              <span
                key={chip}
                className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide"
                style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text)", letterSpacing: "0.04em" }}
              >
                {chip}
              </span>
            ))}
          </div>

          <h1
            className="leading-tight mb-6"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--color-text)",
            }}
          >
            Activating 12M new Spotify TV users
          </h1>

          <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-text-muted)" }}>
            Increasing adoption of Spotify Connect through an in-app messaging campaign promoting listening on TV from mobile
          </p>

          {/* Project meta */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl"
            style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
          >
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--color-text-muted)" }}>Company</p>
              <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>Spotify</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--color-text-muted)" }}>Period</p>
              <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>June – September 2023</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--color-text-muted)" }}>Role</p>
              <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>Product Intern</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--color-text-muted)" }}>Team</p>
              <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>1 Designer · 1 Data Scientist · 1 Researcher</p>
            </div>
          </div>
        </header>

        {/* Key metrics bar */}
        <div style={{ backgroundColor: "var(--color-primary)" }}>
          <div className="max-w-4xl mx-auto px-6 py-10">
            <div className="grid grid-cols-3 gap-8 text-center">
              {metrics.map(m => (
                <div key={m.label}>
                  <p
                    className="font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                      fontSize: "clamp(2rem, 4vw, 2.8rem)",
                      color: "var(--color-text)",
                    }}
                  >
                    {m.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "var(--color-text)", opacity: 0.65, letterSpacing: "0.1em" }}>
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case study body */}
        <article className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-16">

          {/* Context */}
          <section>
            <SectionLabel>Context</SectionLabel>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
              Spotify Connect is a feature that enables users to <strong>listen and control audio seamlessly across different devices</strong>. One of the most common use cases is when users use their mobile phones to control music on Bluetooth speakers. The objective of this project was to increase the adoption rate of Spotify Connect among new users.
            </p>
          </section>

          {/* Problem */}
          <section>
            <SectionLabel>Problem</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProblemCard
                number="01"
                title="Low Feature Awareness"
                points={[
                  "Most users discover Connect by chance and confuse it with Bluetooth",
                  "New users develop entrenched misconceptions that limit engagement",
                  "Largest funnel drop-off occurs between finding and interacting with the Connect interface",
                  "Users lack knowledge on how to use the feature despite locating it",
                ]}
              />
              <ProblemCard
                number="02"
                title="Low Device Awareness"
                points={[
                  "~60–70% of new users unaware they can stream Spotify on TVs, game consoles, and smartwatches",
                  "Users don't understand how to use Connect optimally across devices",
                  "Remote control frustration with TV browsing/queueing not addressed by Connect awareness",
                  "Lack of awareness leads to user churn",
                ]}
              />
            </div>
          </section>

          {/* Opportunities */}
          <section>
            <SectionLabel>Opportunities</SectionLabel>
            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-text)" }}>
              I identified the <strong>mobile-to-smart-TV use case</strong> as the highest-leverage opportunity based on three signals:
            </p>

            <div className="flex flex-col gap-10">
              <OpportunityBlock
                number="1"
                title="High ownership, low utilisation"
                body="Smart TV demonstrated the highest ownership-to-utilization ratio among all Tier 2 platforms (TV, gaming consoles, smart speakers), representing the largest untapped activation headroom."
                imgSrc="https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf4691188f5ebc9247c2f9_AD_4nXejPXCa3arBpHf4dkZVRXrRTes-cST6H7wSf0B3V6oepiJQ7H8I0BzuUfD7h-TvQQQIPC9tUgmSFfqX5kt9HPd4IOrk-HoWsUDYnqKsnFRpEjAoz4zo3dn8ynI5EQcAHoI25F8L-ChZJsluoKvreovFiB8.png"
                imgAlt="Chart showing smart TV ownership-to-utilization gap"
              />
              <OpportunityBlock
                number="2"
                title="High affinity, low awareness"
                body="Users unfamiliar with TV streaming showed strong preference once informed. Longer-term Spotify users showed increased awareness and affinity, suggesting early user education would significantly increase engagement."
                imgSrc="https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf49b532b630340554df6e_AD_4nXeBgTBlQzSj35mjQ0XlRt5xeAHtA4Y6VqzEFANviisIgq7Dk3LHfDX80icSlnjmePF4fybYK8iWHWynddaehEVTKQ6vJflLZPRX4VG4JU6rxOk_tJQw6pU3LQoJ0r5ihR-wL3rcQQ.png"
                imgAlt="Chart showing affinity vs awareness correlation"
              />
              <OpportunityBlock
                number="3"
                title="Pain point solution"
                body="TV users were unaware that their mobile phone could substitute as a remote control via Spotify Connect — despite remote control frustration being identified as the primary pain point for TV listening."
              />
            </div>
          </section>

          {/* Actions */}
          <section>
            <SectionLabel>Actions</SectionLabel>
            <div className="flex flex-col gap-6">
              <CaseImage
                src="https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf4e7ef5d5acfa69119812_AD_4nXflnl4tH6SECgQXNJeFnTxergWw4cbfnAoxC8dVnO79-MoUPAVapTMxgNUq9SRDpvySrzoM6-mj1ugitHzJWQIlETxn7OcwUDPVRCYHZxwaVr8FzEY207zHEnrYVrru8YpuxOjk8A.png"
                alt="In-app messaging campaign designs"
              />
              <CaseImage
                src="https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf66aa4f29f6e427542855_AD_4nXdnNiiU4a6BzbGzvIpcrsjKqHkAQjL2T8CeN8yzFbHORaKAoykISfuVKey8RWoC6YADA5D8KsqE3AViM_1HFiZz37M02Tfm2YkoABUanL74LZ-EguX6Yocn-Vu0U_5ZNxk_OqlePg.png"
                alt="Campaign iteration and A/B test variants"
              />
            </div>
          </section>

          {/* Findings */}
          <section>
            <SectionLabel>Findings</SectionLabel>
            <CaseImage
              src="https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf5a7017dfce57296c3764_AD_4nXeBFN1t3K8BxhP3YyQi1r-YjoMcDzLqF6ynCzbH53zaJy8KZAVvKd3gWLrtMYSnqd5IDdUMerLpOAuGWuRJfWB4kJ3iZMIeuyXmhPPi911CaY-ezS0VC1p2WrtIK5BmRmPJt-NbAg.png"
              alt="Research and data findings"
            />
          </section>

          {/* Next Steps */}
          <section>
            <SectionLabel>Next Steps</SectionLabel>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-text)" }}>
              Immediate next steps to further increase Spotify Connect and cross-platform adoption. Future research is required to maintain the longer-term effectiveness of the campaign.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf605ef66e0db272075ef2_AD_4nXfBkJzwhcwR4Tc3W0kDQXtAVbUUh3VvqsPtU0JfhStGAl5DGoyr0QOUgnRCRxPx1_eGpgTRZJbGLOmy8L2lzUWTEwWftZvRlRWfM4AXfRXKsZZvXn1zMZwTl3iHeb9UI7gFBuPAKA.png",
                "https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf60b8913579b92e23c9b5_AD_4nXdIRhn8BXkXSetvRc6gTlSysDZShBcTW5Ybn5_gvMezY6bYgdL8Td_JACZLnVDNiiuKYgCTfVu5omm0DQXse63B2A81KX325_LGfvspIUea6edvsZEgjdHIo2TPxjUHAAeF4O4jw.png",
                "https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf610638153f3d36fe6812_AD_4nXcIU5eACfLHo-N7W0NSuz0ChmNMRbXKLCqa6Tp3bKg1964ISEsJD1k7hoziKuBQHkmf-BVlGXaWL9Grli_CKOAcil-Xx9vj97SDi81vej-gSZabHeG38uzW9qgfDwtsz6Qbw.png",
                "https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf6147f5c7d0f3b8a27ab7_AD_4nXeCn1Sui4vp3VpkCJttEAbOhugrkmqvu5CHpQgHFT6ZqsmX3fYIU-a3PPygYCZ_7v64U3AGREq60SxRe3eWredacvWpkA-SECeJICwaEkPLzW6IBsZ81Fr4QOydIg_AVam7GGm65A.png",
                "https://cdn.prod.website-files.com/67c1050ee5ab90dec058420c/67cf614f8f94935957330dac_AD_4nXca4jvmOxRrp7kyqE0WdwNeu57U-wvS6FF73z1kAte831efltqdNwiyAzF9IxOChyVAtLAmMBqs_gIMuqL7Il8JmxLF4JFtVatP7dS2BwJqd6yDMUKgMpabpXfmGVQ8o3RwF7n5LQ.png",
              ].map((src, i) => (
                <CaseImage key={i} src={src} alt={`Next step recommendation ${i + 1}`} />
              ))}
            </div>
          </section>

        </article>

        {/* Footer nav */}
        <div
          className="border-t py-12 px-6"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link
              href="/works"
              className="text-sm font-medium hover:opacity-60 transition-opacity"
              style={{ color: "var(--color-text-muted)" }}
            >
              ← Back to Works
            </Link>
            <a
              href="https://www.linkedin.com/in/livia-yeung/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-5 py-2.5 rounded-full"
              style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text)" }}
            >
              Connect with me
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xs uppercase font-semibold tracking-widest mb-6 pb-3"
      style={{
        color: "var(--color-text-muted)",
        letterSpacing: "0.15em",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {children}
    </h2>
  );
}

function ProblemCard({ number, title, points }: { number: string; title: string; points: string[] }) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
    >
      <div className="flex items-center gap-3">
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded"
          style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text)" }}
        >
          {number}
        </span>
        <h3 className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>{title}</h3>
      </div>
      <ul className="flex flex-col gap-2">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            <span style={{ color: "var(--color-primary)" }}>·</span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function OpportunityBlock({
  number,
  title,
  body,
  imgSrc,
  imgAlt,
}: {
  number: string;
  title: string;
  body: string;
  imgSrc?: string;
  imgAlt?: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <span
          className="text-lg font-semibold flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text)", fontSize: "0.875rem" }}
        >
          {number}
        </span>
        <div>
          <h3 className="font-semibold mb-2" style={{ color: "var(--color-text)" }}>{title}</h3>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{body}</p>
        </div>
      </div>
      {imgSrc && (
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc} alt={imgAlt || ""} className="w-full h-auto" loading="lazy" />
        </div>
      )}
    </div>
  );
}

function CaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
    </div>
  );
}
