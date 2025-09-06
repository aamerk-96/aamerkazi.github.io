const projects = [
  {
    name: "Project One",
    desc: "A quick description of the project with ML and simulation components.",
    link: "#",
  },
  {
    name: "Project Two",
    desc: "Another project showcasing research and development.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <div className="grid-two">
        {projects.map((p) => (
          <a className="card" key={p.name} href={p.link} target="_blank" rel="noreferrer">
            <div style={{ fontWeight: 600 }}>{p.name}</div>
            <p className="muted">{p.desc}</p>
          </a>
        ))}
      </div>

      <section id="contact" style={{ marginTop: 32 }}>
        <div className="card">
          <div style={{ fontWeight: 600 }}>Get in Touch</div>
          <p className="muted">Email: aamer@example.com</p>
        </div>
      </section>
    </div>
  );
}
