import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="container featured-projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="fp-list">
        {projects.map((p, idx) => (
          <article key={p.title} className="fp-item reveal">
            <div className="fp-accent" aria-hidden="true" />
            <div className="fp-content">
              <div className="fp-meta">
                <span className="badge">Project {p.id}</span>
                <span className="muted">· {p.year}</span>
              </div>
              <div className="fp-category">{p.category}</div>
              <h3 className="fp-title">{p.title}</h3>
              <p className="fp-tagline">{p.tagline}</p>
              <p className="fp-desc muted">{p.description}</p>
              {p.tech.length ? (
                <div className="fp-tags">
                  {p.tech.map((t) => (
                    <span className="chip chip-tech" key={t}>{t}</span>
                  ))}
                </div>
              ) : null}
              <a className="fp-link" href={p.href}>View details</a>
            </div>
            <div className="fp-preview" aria-hidden="true" data-i={idx} />
          </article>
        ))}
      </div>
    </div>
  );
}
