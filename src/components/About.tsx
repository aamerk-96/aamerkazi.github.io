import SkillsGrid from "./SkillsGrid";

export default function About() {
	const skills = [
		{ key: "fea", name: "FEA (Mesh & Nodes)" },
		{ key: "python", name: "Python" },
		{ key: "pandas", name: "Pandas" },
		{ key: "pytorch", name: "PyTorch" },
		{ key: "git", name: "Git" },
		{ key: "tensorflow", name: "TensorFlow" },
		{ key: "scikit", name: "Scikit-learn" },
	];

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
					My work lives at the intersection of deep scientific simulation and applied machine learning, a space where I've found a passion for solving high-stakes challenges in medical technology. I enjoy taking ownership of the full project lifecycle, from reframing a core business problem and architecting advanced predictive models to rigorously validating their output against physical FEA simulations. For me, the process doesn't end at deployment; I thrive on digging into production data, root-causing complex issues, and collaborating across teams to engineer robust solutions. Whether I'm diving deep into feature engineering or designing novel optimization workflows, my focus is always on using the right tool to bridge the gap between a theoretical model and a reliable, real-world product with tangible impact.
				</p>
			</div>

			<div className="card pop-card skills-card">
				<div className="box-title">
					<span className="ico" aria-hidden>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a7 7 0 0 0-4 12.9V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.1A7 7 0 0 0 12 3Zm0 2a5 5 0 0 1 3 9.1l-.6.4V18h-4v-3.5l-.6-.4A5 5 0 0 1 12 5Z"/></svg>
					</span>
					<span>Skills</span>
				</div>
				<SkillsGrid skills={skills} className="h-full" />
			</div>
		</div>
	);
}

