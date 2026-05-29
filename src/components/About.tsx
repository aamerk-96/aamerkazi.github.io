import SkillsGrid from "./SkillsGrid";
import { skillGroups } from "../data/skills";

export default function About() {
	return (
		<div className="container content-grid">
			<div className="card pop-card about-card">
				<div className="box-title">
					<span className="ico" aria-hidden>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a7 7 0 0 0-4 12.9V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.1A7 7 0 0 0 12 3Zm0 2a5 5 0 0 1 3 9.1l-.6.4V18h-4v-3.5l-.6-.4A5 5 0 0 1 12 5Z"/></svg>
					</span>
					<span>About Me</span>
				</div>
				<p className="about-summary muted">
					I work at the intersection of physics-based simulation and applied machine learning. My PhD focused on nonlinear finite element modeling of manufacturing processes — building high-fidelity ABAQUS models with experimental validation under U.S. DOE and Honeywell programs. Today, at Align Technology, I ship production machine learning models for orthodontic treatment planning serving millions of patients annually under FDA regulatory oversight. I'm most interested in problems where domain knowledge changes how a model should be built — physics-informed features, geometric priors, constraint-aware optimization.
				</p>
			</div>

			<div className="card pop-card skills-card">
				<div className="box-title">
					<span className="ico" aria-hidden>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a7 7 0 0 0-4 12.9V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.1A7 7 0 0 0 12 3Zm0 2a5 5 0 0 1 3 9.1l-.6.4V18h-4v-3.5l-.6-.4A5 5 0 0 1 12 5Z"/></svg>
					</span>
					<span>Skills</span>
				</div>
				<SkillsGrid groups={skillGroups} className="h-full" />
			</div>
		</div>
	);
}

