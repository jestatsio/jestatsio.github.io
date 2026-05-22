import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "J&E Statistical Consulting — Statistics. AI. No hand-waving.",
  description:
    "PhD-led statistics and AI consulting for teams that need trustworthy analysis, practical automation, and systems that hold up in the real world.",
  metadataBase: new URL("https://jestats.io"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "J&E Statistical Consulting",
    description:
      "PhD-led statistics and AI consulting for teams that need trustworthy analysis and working systems.",
    url: "https://jestats.io",
    siteName: "J&E Statistical Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "J&E Statistical Consulting",
    description:
      "PhD-led statistics and AI consulting for teams that need trustworthy analysis and working systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          defer
          data-domain="jestats.io"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
