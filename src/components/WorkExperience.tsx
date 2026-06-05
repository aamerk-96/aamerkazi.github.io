"use client";

type VideoPair = {
  left: { src: string; label: string };
  right: { src: string; label: string };
};

type Project = {
  title: string;
  category: string;
  bullets: string[];
  tech: string[];
  video?: string;
  videoPair?: VideoPair;
};

type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  projects: Project[];
};

const roles: Role[] = [
  {
    company: "Align Technology",
    title: "R&D Engineer III, Modeling and Simulation",
    location: "San Jose, CA",
    period: "Dec 2023 — Present",
    projects: [
      {
        title: "Deep Learning Enhanced Treatment Planning for the Invisalign System",
        category: "ML / Deep Learning",
        bullets: [
          "Developed production ML/DL models for orthodontic treatment planning, iterating from multivariable regression to a Transformer architecture (multi-head attention, PyTorch) that contributed to a 20% increase in clinical efficacy for millions of patients annually",
          "Led verification & validation for all model generations under FDA regulatory oversight; performed data-slice analysis across 13+ demographic and clinical dimensions, physics-based simulation validation, and detailed AI model reporting ensuring no subpopulation degradation",
          "Generated surrogate training labels via counterfactual analysis through the production Transformer across 30,000+ cases, then framed attachment placement as a Learning-to-Rank problem (LightGBM LambdaRank); extracted interpretable clinical rules validated by domain experts and deployed to production processing 1,000+ cases/week",
          "Led an end-to-end clinical study (APAC region) assembling a cross-functional team of clinical experts, software developers, and CAD designers",
        ],
        tech: ["PyTorch", "Transformers", "LightGBM", "FDA V&V"],
      },
      {
        title: "LLM-based Dental Treatment Assistant & Evaluation Framework",
        category: "Agentic AI",
        bullets: [
          "Architected a LangChain ReAct agent integrating LLMs (Claude, Llama, Gemini) over AWS Bedrock for natural-language querying and modification of orthodontic treatment data, with a 3-category evaluation framework (classification accuracy, calculation tolerance, LLM-as-Judge format compliance)",
          "Built a middleware layer with query sanitization and complexity classification for dynamic per-request model routing; currently being tested as a case screening tool for clinical studies",
        ],
        tech: ["LangChain", "AWS Bedrock", "LLM-as-Judge", "Python"],
      },
      {
        title: "3D Shape Representation Learning for Orthodontic Attachments",
        category: "Geometric Deep Learning",
        bullets: [
          "Built a DiffusionNet-based mesh autoencoder encoding variable-topology 3D meshes into 8-12D latent vectors at sub-millimeter fidelity; conducted systematic AE vs beta-VAE comparison across multiple quantitative metrics (reconstruction fidelity, generative specificity, disentanglement, interpolation smoothness)",
          "Designed embeddings as drop-in geometric features for the downstream treatment planning Transformer, replacing categorical attachment labels with continuous geometric descriptors",
        ],
        tech: ["DiffusionNet", "PyTorch", "AE", "Representation Learning"],
      },
    ],
  },
  {
    company: "Texas A&M University",
    title: "Graduate Research Assistant",
    location: "College Station, TX",
    period: "Aug 2018 — Dec 2023",
    projects: [
      {
        title: "Finite Element Modeling of Rock Drilling Processes",
        category: "U.S. DOE",
        bullets: [
          "Developed a finite element model in ABAQUS for PDC rock cutting simulation using the Drucker-Prager yield criterion with damage evolution to capture failure of granite under varying crack density, orientation, and confining pressure (0-100 MPa)",
          "Calibrated constitutive model parameters through uniaxial and diametrical compression testing; cross-referenced cutting forces predicted by the finite element simulation with experimental results for validation",
          "Built a MATLAB-based node separation algorithm generating random pre-existing cracks between elements based on configurable crack density parameters, enabling parametric study of crack effects on cutting forces and mechanism",
          "Constructed a laboratory-scale rock drilling setup on a CNC mill, demonstrating 30% reduction in cutting and thrust forces from plasma-induced pre-cracking",
        ],
        tech: ["ABAQUS", "Drucker-Prager", "MATLAB", "V&V"],
        videoPair: {
          left: { src: "/high_speed_video.mp4", label: "Experiment" },
          right: { src: "/simulation.mp4", label: "Simulation" },
        },
      },
      {
        title: "Machining of Additively Manufactured Metals",
        category: "Honeywell",
        bullets: [
          "Developed a 2D finite element model in ABAQUS with Johnson-Cook plasticity and damage criteria to simulate serrated chip formation during turning of Ti-6Al-4V; investigated the effect of fracture energy on chip morphology",
          "Analyzed machinability of additively manufactured Ti-6Al-4V, A205, and 17-4 SS through a full factorial DOE with SEM-EDS microstructural characterization",
        ],
        tech: ["ABAQUS", "Johnson-Cook", "SEM-EDS", "DOE"],
        video: "/ti-cutting-sim.mp4",
      },
    ],
  },
];

export default function WorkExperience() {
  return (
    <div className="container">
      <h2 className="section-title">
        <svg className="section-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
        Work Experience
      </h2>

      {roles.map((role) => (
        <div key={role.company} className="we-role">
          <div className="we-role-header">
            <div>
              <div className="we-company">{role.company}</div>
              <div className="we-title muted">{role.title}</div>
            </div>
            <div className="we-meta muted">
              <span>{role.location}</span>
              <span>{role.period}</span>
            </div>
          </div>

          <div className="fp-list">
            {role.projects.map((p) => (
              <article
                key={p.title}
                className={`fp-item ${p.video || p.videoPair ? "" : "we-project"} reveal`}
              >
                <div className="fp-accent" aria-hidden="true" />
                <div className="fp-content">
                  <div className="fp-category">{p.category}</div>
                  <h3 className="fp-title">{p.title}</h3>
                  <ul className="fp-bullets muted">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  {p.tech.length > 0 && (
                    <div className="fp-tags">
                      {p.tech.map((t) => (
                        <span className="chip chip-tech" key={t}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>

                {p.video && (
                  <div className="we-video">
                    <video
                      autoPlay loop muted playsInline
                      style={{
                        width: "100%", height: "100%",
                        objectFit: "cover", borderRadius: "12px",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <source src={p.video} type="video/mp4" />
                    </video>
                  </div>
                )}

                {p.videoPair && (
                  <div className="we-video-pair">
                    {[p.videoPair.left, p.videoPair.right].map((v) => (
                      <div key={v.label} className="we-video-cell">
                        <video
                          autoPlay loop muted playsInline
                          style={{
                            width: "100%", height: "100%",
                            objectFit: "cover", borderRadius: "10px",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <source src={v.src} type="video/mp4" />
                        </video>
                        <div className="we-video-label">{v.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
