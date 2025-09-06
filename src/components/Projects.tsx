type Project = {
  name: string;
  desc: string;
  href: string;
  year?: string;
  tags?: string[];
};

const projects: Project[] = [
  {
    name: "FEA Heat Simulation",
    desc: "GPU-accelerated finite element heat transfer solver with interactive web visualizations and report-ready outputs.",
    href: "#",
    year: "2025",
    tags: ["TypeScript", "Next.js", "WebGL", "FEA"],
  },
  {
    name: "ML Defect Detection",
    desc: "End-to-end pipeline for anomaly detection on manufacturing images with model training, MLOps, and dashboards.",
    href: "#",
    year: "2024",
    tags: ["Python", "PyTorch", "OpenCV", "MLOps"],
  },
  {
    name: "3D Point Cloud Tools",
    desc: "Fast point cloud registration and mesh utilities with WebAssembly bindings and an intuitive UI.",
    href: "#",
    year: "2024",
    tags: ["Rust", "WASM", "Three.js"],
  },
];

export default function Projects() {
  return (
    <div className="container featured-projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="fp-list">
        {projects.map((p, idx) => (
          <a key={p.name} className="fp-item reveal" href={p.href} target="_blank" rel="noopener noreferrer">
            <div className="fp-content">
              <div className="fp-meta">
                <span className="badge">Featured</span>
                {p.year ? <span className="muted">· {p.year}</span> : null}
              </div>
              <h3 className="fp-title">{p.name}</h3>
              <p className="fp-desc muted">{p.desc}</p>
              {p.tags?.length ? (
                <div className="fp-tags">
                  {p.tags.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="fp-preview" aria-hidden="true" data-i={idx} />
          </a>
        ))}
      </div>
    </div>
  );
}
