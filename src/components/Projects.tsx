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
            <div style={{ marginTop: "16px" }}>
              <Link href="/recipegpt" className="badge" style={{ textDecoration: "none", cursor: "pointer" }}>
                {"Working Demo →"}
              </Link>
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
