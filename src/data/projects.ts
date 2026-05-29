export type Project = {
  id: string;
  title: string;
  tagline: string;
  year: string;
  description: string;
  tech: string[];
  category: string;
  href: string;
};

export const projects: Project[] = [
  {
    id: "A",
    title: "3D Shape Representation Learning for Medical Devices",
    tagline: "Spectral geometric deep learning for 3D mesh embeddings.",
    year: "2025",
    description:
      "A template-deformation autoencoder built on DiffusionNet that compresses variable-topology 3D meshes into 8–16 dimensional latent vectors at sub-millimeter reconstruction fidelity. Includes systematic AE vs β-VAE comparison across six quantitative metrics: reconstruction, generative specificity, disentanglement, interpolation smoothness, dimension utilization, and posterior collapse.",
    tech: ["PyTorch", "DiffusionNet", "VAE", "ClearML", "UMAP", "Streamlit"],
    category: "Geometric Deep Learning",
    href: "#"
  },
  {
    id: "B",
    title: "Production ML for Orthodontic Treatment Planning",
    tagline: "Transformer-based treatment prediction under FDA regulatory oversight.",
    year: "2023–Present",
    description:
      "Led verification, validation, and evaluation for two generations of production ML models predicting tooth movement for the Invisalign system. The successor Transformer architecture contributed to a 20% increase in clinical efficacy, serving millions of patients annually. Performed systematic bias and fairness analysis across 13+ demographic and clinical dimensions.",
    tech: ["PyTorch", "Transformer", "V&V", "MLflow", "scikit-learn"],
    category: "Production ML / Medical Devices",
    href: "#"
  },
  {
    id: "C",
    title: "LLM Agent for Clinical Treatment Assistance",
    tagline: "Multi-tool LangGraph ReAct agent over AWS Bedrock and Google Vertex AI.",
    year: "2024–2025",
    description:
      "A LangGraph agent with a ReAct reasoning loop that lets clinicians query and modify treatment plans through natural language. Built a middleware layer unifying inference across eight LLMs from AWS Bedrock and Google Vertex AI, plus a three-category evaluation framework spanning classification accuracy, calculation tolerance, and LLM-as-a-judge format scoring.",
    tech: ["LangGraph", "AWS Bedrock", "Google Vertex AI", "LLM-as-a-judge", "Python"],
    category: "Agentic AI",
    href: "#"
  }
];
