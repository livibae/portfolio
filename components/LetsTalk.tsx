"use client";

const links = [
  {
    label: "Email",
    value: "livia.yeung@gmail.com",
    href: "mailto:livia.yeung@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/livia-yeung",
    href: "https://www.linkedin.com/in/livia-yeung/",
    target: "_blank",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Website",
    value: "liviayeung.vercel.app",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    label: "Download my CV",
    value: "",
    href: "/livia-yeung-cv.pdf",
    download: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  },
];

export default function LetsTalk() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--color-card)" }}>
      <div className="max-w-xl mx-auto text-center">
        <h2
          className="mb-3"
          style={{
            fontFamily: "var(--font-unbounded), sans-serif",
            
            fontWeight: 400,
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            color: "var(--color-text)",
          }}
        >
          Let&apos;s talk
        </h2>
        <p className="mb-12 text-sm" style={{ color: "var(--color-text-muted)" }}>
          I&apos;d love to connect with you!
        </p>

        <div className="flex flex-col gap-3">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.target ? "noopener noreferrer" : undefined}
              download={link.download ? true : undefined}
              className="flex items-center justify-between px-6 py-4 rounded-2xl transition-all"
              style={{
                backgroundColor: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                textDecoration: "none",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(26,23,19,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                {link.label}
              </span>
              <div className="flex items-center gap-2" style={{ color: "var(--color-text-muted)" }}>
                {link.value && <span className="text-sm">{link.value}</span>}
                {link.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
