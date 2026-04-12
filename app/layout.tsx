import type { Metadata } from "next";
import { Nunito, Unbounded, Great_Vibes, Nabla } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
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
    <html lang="en" className={`${nunito.variable} ${unbounded.variable} ${greatVibes.variable} ${nabla.variable}`}>
      <body style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
