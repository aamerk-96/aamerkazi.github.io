type Role = {
  company: string;
  title: string;
  period: string;
  summary: string;
};

const roles: Role[] = [
  {
    company: "Company A",
    title: "Simulation Engineer",
    period: "2022 — Present",
    summary: "Worked on modeling complex systems and ML integration.",
  },
  {
    company: "Company B",
    title: "R&D Engineer",
    period: "2020 — 2022",
    summary: "Research and prototyping for ML-driven products.",
  },
];

export default function Experience() {
  return (
    <div className="container">
      <h2 className="section-title">Experience</h2>
      <div className="grid-two">
        {roles.map((r) => (
          <div className="card" key={r.company + r.title}>
            <div style={{ fontWeight: 600 }}>{r.title} • {r.company}</div>
            <div className="muted" style={{ fontSize: 14 }}>{r.period}</div>
            <p className="muted">{r.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
