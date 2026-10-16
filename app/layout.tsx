import type { Metadata } from "next";
import { Inter, Inter_Tight, Great_Vibes, Nabla, Caveat } from "next/font/google";
import "./globals.css";

/* Matches ElevenLabs body / UI text */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/*
 * Stand-in for proprietary Waldenburg / WaldenburgFH (Klim Type Foundry).
 * Inter Tight is the closest free neo-grotesk condensed match for their
 * display + heading styles on elevenlabs.io.
 */
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const nabla = Nabla({
  subsets: ["latin"],
  variable: "--font-nabla",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Livia Yeung — Product Manager",
  description:
    "Early career PM specialising in monetisation & growth of AI products. Based in Amsterdam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${greatVibes.variable} ${nabla.variable} ${caveat.variable}`}
    >
      <body
        style={{
          fontFamily: "var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
