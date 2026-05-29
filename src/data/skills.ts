export type SkillGroup = {
  label: string;
  accent: "orange" | "blue" | "green";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Machine Learning & AI",
    accent: "orange",
    items: [
      "PyTorch",
      "TensorFlow",
      "Transformers / HuggingFace",
      "scikit-learn",
      "XGBoost / LightGBM",
      "DiffusionNet",
      "Optuna",
      "LangGraph",
      "MLflow",
      "ClearML",
      "Physics-Informed ML",
    ],
  },
  {
    label: "Simulation & Computational Mechanics",
    accent: "blue",
    items: [
      "ABAQUS (Explicit & Standard)",
      "Nonlinear FEA",
      "Constitutive Modeling",
      "Drucker–Prager / Johnson–Cook",
      "Damage & Fracture Mechanics",
      "Experimental Validation & V&V",
      "Manufacturing Process Simulation",
    ],
  },
  {
    label: "Data & Scientific Computing",
    accent: "green",
    items: [
      "Python",
      "MATLAB",
      "NumPy / SciPy",
      "Pandas",
      "Open3D / Trimesh",
      "Geometric Priors",
      "Constraint-Aware Optimization",
    ],
  },
  {
    label: "Engineering & Infrastructure",
    accent: "orange",
    items: [
      "Git",
      "Docker",
      "AWS Bedrock",
      "Vertex AI",
      "FDA Regulatory (ML in Production)",
      "CI/CD for ML Pipelines",
    ],
  },
];
