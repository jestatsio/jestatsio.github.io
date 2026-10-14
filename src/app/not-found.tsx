const TARGET = "https://jestats.io/";

export default function MovedPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <link rel="canonical" href={TARGET} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(TARGET)});`,
        }}
      />
      <div style={{ maxWidth: "34rem" }}>
        <p
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#D9531E",
            margin: "0 0 12px",
          }}
        >
          We&rsquo;ve moved
        </p>
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "2.2rem",
            fontWeight: 600,
            lineHeight: 1.15,
            margin: "0 0 14px",
          }}
        >
          J&amp;E Stats now lives at jestats.io.
        </h1>
        <p style={{ margin: "0 0 18px", color: "#333d52", lineHeight: 1.6 }}>
          This old site has been retired. Data, websites, print &amp; social,
          and AI services — plus our local-business website concepts — are all
          at our main address now. You&rsquo;re being redirected.
        </p>
        <p style={{ margin: 0 }}>
          <a
            href={TARGET}
            style={{
              display: "inline-block",
              background: "#D9531E",
              color: "#fff",
              padding: "12px 22px",
              borderRadius: "3px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Go to jestats.io
          </a>{" "}
          <a
            href="https://jestats.io/concepts/"
            style={{ color: "#111827", fontWeight: 600 }}
          >
            or see the local concepts
          </a>
        </p>
      </div>
    </main>
  );
}
