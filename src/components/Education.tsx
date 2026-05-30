export default function Education() {
  const schools = [
    {
      school: "Texas A&M University",
      degree: "Ph.D., Mechanical Engineering",
      gpa: "GPA: 3.74 / 4.0",
      location: "College Station, USA",
      period: "Aug 2018 — Sep 2023",
    },
    {
      school: "Vellore Institute of Technology",
      degree: "B.Tech., Mechanical Engineering",
      gpa: "GPA: 9.17 / 10",
      location: "Vellore, India",
      period: "Aug 2014 — Jun 2018",
    },
  ];

  return (
    <div className="container">
      <h2 className="section-title">
        <svg className="section-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 4 2 9l10 5 10-5-10-5Z" />
          <path d="M6 12.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" />
          <path d="M22 9v4" />
        </svg>
        Education
      </h2>
      <div className="edu-grid">
        {schools.map((s) => (
          <div key={s.school} className="edu-card">
            <div className="edu-school">{s.school}</div>
            <div className="edu-degree">{s.degree} &middot; {s.gpa}</div>
            <div className="edu-meta">
              <span>{s.location}</span>
              <span>{s.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
