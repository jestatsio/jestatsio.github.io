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
  title: "J&E Statistical Consulting — Statistics meets AI",
  description:
    "Expert data analysis and AI infrastructure for teams ready to move fast. Led by a PhD statistician and a digital marketing strategist.",
  metadataBase: new URL("https://jestats.io"),
  openGraph: {
    title: "J&E Statistical Consulting",
    description:
      "Expert data analysis and AI infrastructure for teams ready to move fast.",
    url: "https://jestats.io",
    siteName: "J&E Statistical Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "J&E Statistical Consulting",
    description:
      "Expert data analysis and AI infrastructure for teams ready to move fast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
