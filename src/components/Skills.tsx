export default function Skills() {
  const skills = [
    "Python",
    "TensorFlow / PyTorch",
    "Simulation & Modeling",
    "React",
    "TypeScript",
  ];
  return (
    <div className="container grid-two">
      <div>
        <h2 className="section-title">Skills</h2>
        <p className="muted">A concise snapshot of tools and technologies I work with.</p>
      </div>
      <div className="card">
        <div className="list">
          {skills.map((s) => (
            <div key={s}>• {s}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
