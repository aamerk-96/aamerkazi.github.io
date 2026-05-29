export type SkillItem = {
  key: string;
  name: string;
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Machine Learning & Deep Learning",
    items: [
      { key: "pytorch", name: "PyTorch" },
      { key: "tensorflow", name: "TensorFlow" },
      { key: "scikit", name: "scikit-learn" },
      { key: "transformers", name: "Transformers" },
      { key: "xgboost", name: "XGBoost" },
      { key: "lightgbm", name: "LightGBM" },
      { key: "diffusionnet", name: "DiffusionNet" },
      { key: "optuna", name: "Bayesian Optimization (Optuna)" },
      { key: "langgraph", name: "LangGraph" },
      { key: "mlflow", name: "MLflow" },
      { key: "clearml", name: "ClearML" }
    ]
  },
  {
    title: "Simulation & Mechanics",
    items: [
      { key: "abaqus", name: "ABAQUS" },
      { key: "drucker-prager", name: "Drucker–Prager" },
      { key: "johnson-cook", name: "Johnson–Cook" },
      { key: "constitutive", name: "Constitutive Modeling" },
      { key: "damage", name: "Damage & Fracture" },
      { key: "vv", name: "V&V (Verification & Validation)" }
    ]
  },
  {
    title: "Languages & Tools",
    items: [
      { key: "python", name: "Python" },
      { key: "matlab", name: "MATLAB" },
      { key: "numpy", name: "NumPy" },
      { key: "scipy", name: "SciPy" },
      { key: "pandas", name: "Pandas" },
      { key: "git", name: "Git" },
      { key: "docker", name: "Docker" },
      { key: "bedrock", name: "AWS Bedrock" },
      { key: "vertex", name: "Google Vertex AI" }
    ]
  }
];
