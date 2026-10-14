import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "J&E Stats has moved to jestats.io",
  description:
    "This site has moved. J&E Stats — data, websites, print and social, and AI services in Snohomish County — now lives at jestats.io.",
  metadataBase: new URL("https://jestats.io"),
  robots: { index: false, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
          background: "#FAF9F5",
          color: "#111827",
        }}
      >
        {children}
      </body>
    </html>
  );
}
