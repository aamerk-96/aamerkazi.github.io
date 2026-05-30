type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
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
        description: "Developed production ML/DL models for orthodontic treatment planning, iterating from multivariable regression to a Transformer architecture (multi-head attention) that contributed to a 20% increase in clinical efficacy for millions of patients annually. Led V&V under FDA regulatory oversight across 13+ demographic and clinical dimensions. Generated surrogate training labels via counterfactual analysis across 30,000+ cases, framing attachment placement as a Learning-to-Rank problem (LightGBM LambdaRank) deployed to production processing 1,000+ cases/week.",
        tech: ["PyTorch", "Transformers", "LightGBM", "FDA V&V"],
      },
      {
        title: "LLM-based Dental Treatment Assistant & Evaluation Framework",
        category: "Agentic AI",
        description: "Architected a LangGraph ReAct agent integrating LLMs (Claude, Llama, Gemini) over AWS Bedrock for natural-language querying and modification of orthodontic treatment data, with a 3-category evaluation framework. Built a middleware layer with query sanitization and complexity classification for dynamic per-request model routing; currently being tested as a case screening tool for clinical studies.",
        tech: ["LangGraph", "AWS Bedrock", "Claude", "Llama"],
      },
      {
        title: "3D Shape Representation Learning for Orthodontic Attachments",
        category: "Geometric Deep Learning",
        description: "Built a DiffusionNet-based mesh autoencoder encoding variable-topology 3D meshes into 8-12D latent vectors at sub-millimeter fidelity. Conducted systematic AE vs beta-VAE comparison across reconstruction fidelity, generative specificity, disentanglement, and interpolation smoothness. Designed embeddings as drop-in geometric features for the downstream treatment planning Transformer.",
        tech: ["DiffusionNet", "PyTorch", "Open3D", "beta-VAE"],
      },
      {
        title: "Clinical Study Lead, APAC Region",
        category: "Clinical Research",
        description: "Led an end-to-end clinical study assembling a cross-functional team of clinical experts, software developers, and CAD designers. Performed statistical power analysis via KNN-based case similarity search for sample size calculation.",
        tech: ["KNN", "Statistical Analysis", "JMP"],
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
        description: "Developed a finite element model in ABAQUS for PDC rock cutting simulation using the Drucker-Prager yield criterion with damage evolution to capture failure of granite under varying crack density, orientation, and confining pressure (0-100 MPa). Calibrated constitutive model parameters through uniaxial and diametrical compression testing with experimental validation. Built a MATLAB-based node separation algorithm for parametric crack studies. Constructed a laboratory-scale rock drilling setup demonstrating 30% reduction in cutting forces from plasma-induced pre-cracking.",
        tech: ["ABAQUS", "Drucker-Prager", "MATLAB", "V&V"],
      },
      {
        title: "Machining of Additively Manufactured Metals",
        category: "Honeywell",
        description: "Developed a 2D finite element model in ABAQUS with Johnson-Cook plasticity and damage criteria to simulate serrated chip formation during turning of Ti-6Al-4V. Investigated the effect of fracture energy on chip morphology. Analyzed machinability of additively manufactured Ti-6Al-4V, A205, and 17-4 SS through a full factorial DOE with SEM-EDS microstructural characterization.",
        tech: ["ABAQUS", "Johnson-Cook", "SEM-EDS", "DOE"],
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
              <article key={p.title} className="fp-item we-project reveal">
                <div className="fp-accent" aria-hidden="true" />
                <div className="fp-content">
                  <div className="fp-category">{p.category}</div>
                  <h3 className="fp-title">{p.title}</h3>
                  <p className="fp-desc muted">{p.description}</p>
                  {p.tech.length > 0 && (
                    <div className="fp-tags">
                      {p.tech.map((t) => (
                        <span className="chip chip-tech" key={t}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
