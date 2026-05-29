import SkillsGrid from "./SkillsGrid";
import { skillGroups } from "../data/skills";

export default function About() {
	return (
		<div className="container">
			<h2 className="section-title">
				<svg className="section-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<circle cx="12" cy="8" r="4" />
					<path d="M5 20c.8-3.4 3.8-6 7-6s6.2 2.6 7 6" />
				</svg>
				About Me
			</h2>
			<div className="card">
				<p className="fp-desc muted" style={{ margin: 0 }}>
					I work at the intersection of physics-based simulation and applied machine learning. My PhD focused on nonlinear finite element modeling of manufacturing processes — building high-fidelity ABAQUS models with experimental validation under U.S. DOE and Honeywell programs. Today, at Align Technology, I ship production machine learning models for orthodontic treatment planning serving millions of patients annually under FDA regulatory oversight. I&#39;m most interested in problems where domain knowledge changes how a model should be built — physics-informed features, geometric priors, constraint-aware optimization.
				</p>
			</div>

			<div style={{ marginTop: "40px" }}>
				<h2 className="section-title">
					<svg className="section-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
						<polyline points="4 18 8 10 12 14 16 6 20 12" />
					</svg>
					Skills &amp; Expertise
				</h2>
				<SkillsGrid groups={skillGroups} />
			</div>
		</div>
	);
}
