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
      <div className="card" style={{ textAlign: "center", padding: "48px 24px" }}>
        <div style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 700, marginBottom: "8px", color: "var(--text)" }}>
          Coming Soon
        </div>
        <p className="muted" style={{ maxWidth: "460px", margin: "0 auto", lineHeight: 1.7 }}>
          Personal projects and open-source contributions are on the way. Check back soon.
        </p>
      </div>
    </div>
  );
}
