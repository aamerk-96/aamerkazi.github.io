import Link from "next/link";
import MiniHeatmap from "./MiniHeatmap";

export default function Projects() {
  return (
    <div className="container featured-projects">
      <h2 className="section-title">
        <svg className="section-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M12 7V3" />
          <path d="M8 3h8" />
          <path d="M7 12h4" />
          <path d="M7 16h10" />
        </svg>
        Personal Projects
      </h2>

      <div className="fp-list">
        <article className="fp-item reveal">
          <div className="fp-accent" aria-hidden="true" />
          <div className="fp-content">
            <div className="fp-category">Generative AI</div>
            <h3 className="fp-title">RecipeGPT</h3>
            <p className="fp-tagline">A 92M-parameter Transformer trained from scratch on recipe data.</p>
            <p className="fp-desc muted">
              Fine-tuned GPT-2 (12 layers, 4 heads, 768-dim) on structured recipe corpora to generate
              recipes from ingredient lists. Includes an interactive visualizer for exploring
              attention patterns and next-token predictions across all layers and heads.
            </p>
            <div className="fp-tags">
              <span className="chip chip-tech">PyTorch</span>
              <span className="chip chip-tech">GPT-2</span>
              <span className="chip chip-tech">Transformers</span>
              <span className="chip chip-tech">Python</span>
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "16px", alignItems: "center" }}>
              <Link href="/recipegpt" className="badge" style={{ textDecoration: "none", cursor: "pointer" }}>
                {"Working Demo →"}
              </Link>
              <a
                href="https://github.com/aamerk-96/RecipeGPT"
                target="_blank"
                rel="noopener noreferrer"
                className="chip"
                style={{ display: "inline-flex", alignItems: "center", gap: "5px", textDecoration: "none", fontSize: 12 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.63 22.41c.57.1.78-.25.78-.56v-2.1c-3.18.69-3.85-1.37-3.85-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.54-.29-5.2-1.27-5.2-5.64 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17.91-.26 1.88-.39 2.85-.39.97 0 1.94.13 2.85.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.38-2.67 5.35-5.22 5.63.41.36.77 1.07.77 2.17v3.22c0 .31.21.66.79.55A11.5 11.5 0 0 0 12 .5Z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <Link href="/recipegpt" style={{ textDecoration: "none" }}>
            <div className="fp-preview" style={{ minHeight: "300px", display: "flex", alignItems: "stretch", cursor: "pointer" }}>
              <MiniHeatmap />
            </div>
          </Link>
        </article>
      </div>
    </div>
  );
}
