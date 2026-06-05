import SkillsGrid from "./SkillsGrid";
import { skillGroups } from "../data/skills";

export default function About() {
  return (
    <div className="container">
      <h2 className="section-title">
        <svg className="section-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M5 20c.8-3.4 3.8-6 7-6s6.2 2.6 7 6" />
        </svg>
        About Me
      </h2>
      <div className="card">
        <p className="fp-desc muted" style={{ margin: "0 0 10px 0" }}>
          Research engineer combining computational mechanics, simulation, and machine learning to solve problems in manufacturing and healthcare. My journey started with numerical modeling of rock drilling and metal cutting processes, and has since moved into production deep learning systems, geometric representation learning on 3D meshes, and LLM-powered agents. I enjoy the space where physics and data meet, and I&apos;ve found that letting the problem structure guide the model architecture tends to be what makes things work.
        </p>
        <p className="fp-desc muted" style={{ margin: "0 0 10px 0" }}>
          My technical range covers deep learning (Transformers, autoencoders, representation learning), generative AI (agents, VAEs), and classical ML, alongside high-fidelity nonlinear finite element simulation and constitutive modeling in ABAQUS.
        </p>
        <p className="fp-desc muted" style={{ margin: "0 0 14px 0" }}>
          At Align Technology, I build and validate production models serving millions of patients under FDA oversight. That includes writing AI evaluation reports with acceptance criteria, fairness audits across 13+ demographic and clinical dimensions, and full V&amp;V documentation for deployment.
        </p>
        <div>
          <a
            href="/Aamer_Kazi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="chip"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none", fontSize: 12 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
              <path d="M5 21h14" />
            </svg>
            Resume (PDF)
          </a>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2 className="section-title">
          <svg className="section-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 18 8 10 12 14 16 6 20 12" />
          </svg>
          Skills &amp; Expertise
        </h2>
        <SkillsGrid groups={skillGroups} />
      </div>
    </div>
  );
}
