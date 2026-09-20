const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/livia-yeung/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.8 2.7 4.8 6.2V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/livibae",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.1-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.69.83.57A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:livia.yeung@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Website",
    href: "https://liviayeung.vercel.app",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function LetsTalk() {
  return (
    <section id="lets-talk" className="border-t px-6 py-24" style={{ borderColor: "var(--color-border)" }}>
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <h2 className="font-sans text-2xl font-semibold leading-snug tracking-tight text-gray-900 md:text-4xl">
          Let's talk
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/livia-yeung-cv.pdf"
            download
            className="rounded-full border bg-white/50 px-6 py-3 font-sans text-sm font-semibold text-gray-900 backdrop-blur-md transition-opacity hover:opacity-70"
            style={{ borderColor: "var(--color-border)" }}
          >
            Download my CV
          </a>
          <a
            href="mailto:livia.yeung@gmail.com"
            className="rounded-full px-6 py-3 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--color-text)" }}
          >
            Connect with me
          </a>
        </div>

        <ul className="mt-12 flex items-center justify-center gap-8">
          {socials.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                className="text-gray-900 transition-opacity hover:opacity-50"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
