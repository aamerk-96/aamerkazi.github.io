"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const TransformerViz = dynamic(() => import("../../components/TransformerViz"), {
  ssr: false,
  loading: () => (
    <div style={{ padding: 48, textAlign: "center", color: "var(--muted)" }}>
      Loading visualizer...
    </div>
  ),
});

export default function RecipeGPTPage() {
  return (
    <main style={{ padding: "var(--header-h) 0 0" }}>
      <div style={{
        width: "min(1200px, 92vw)", margin: "0 auto",
        paddingTop: "clamp(1.5rem, 3vh, 2.5rem)",
        paddingBottom: "clamp(2rem, 4vh, 3rem)",
      }}>
        <Link
          href="/#projects"
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            color: "var(--muted)", fontSize: 13, marginBottom: 20,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
          </svg>
          Back to site
        </Link>

        <TransformerViz />
      </div>
    </main>
  );
}
