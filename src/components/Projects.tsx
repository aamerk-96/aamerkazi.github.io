import { projects } from "../data/projects";

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
        Featured Projects
      </h2>
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
