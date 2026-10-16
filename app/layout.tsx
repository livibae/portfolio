import type { Metadata } from "next";
import { Inter, Instrument_Serif, Great_Vibes, Nabla, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Stand-in for proprietary Waldenburg Light (ElevenLabs display) */
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
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
      className={`${inter.variable} ${instrument.variable} ${greatVibes.variable} ${nabla.variable} ${caveat.variable}`}
    >
      <body style={{ fontFamily: "var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
