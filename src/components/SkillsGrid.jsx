export default function SkillsGrid({ groups = [], className = "" }) {
  const iconMap = {
    // Python: simplified dual-blob symbol
    python: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.5 2.25c2.2 0 3.25.95 3.25 2.85v2.1c0 1.6-1.3 2.55-2.9 2.55H9.3c-.55 0-.8.25-.8.8v1.2c0 .55.25.8.8.8h2.8c1.95 0 3.85.6 3.85 3.25v2.2c0 1.9-1.05 2.8-3.25 2.8h-1.2c-2.2 0-3.25-.9-3.25-2.8v-1.75h2.15v1.25c0 .55.25.8.8.8h1.2c.55 0 .8-.25.8-.8v-1.2c0-.55-.25-.8-.8-.8H9.3c-1.6 0-2.9-.95-2.9-2.55v-2.2c0-2.65 1.9-3.25 3.85-3.25h2.55c.55 0 .8-.25.8-.8v-1.2c0-.55-.25-.8-.8-.8h-1.2c-.55 0-.8.25-.8.8v.9H8.4v-.95c0-1.9 1.05-2.85 3.25-2.85h.85Z"
        />
      </svg>
    ),

    // PyTorch: flame/teardrop with inner dot
    pytorch: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.7 3.3c.3.3.3.8 0 1.1l-1.5 1.5a7.5 7.5 0 1 1-2.9 2.9l1.5-1.5a.8.8 0 0 1 1.1 1.1L9.4 8.9A5.9 5.9 0 1 0 15 7.8l-1.5 1.5a.8.8 0 0 1-1.1-1.1l2.1-2.1c.3-.3.8-.3 1.1 0Z"
        />
        <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
      </svg>
    ),

    // scikit-learn: overlapping circles
    scikit: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M8.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm14 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" opacity=".6" />
        <path fill="currentColor" d="M15 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
      </svg>
    ),

    // SciPy: stylized wave
    scipy: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 13c2.2-2.3 4.4-2.3 6.6 0s4.4 2.3 6.6 0 4.4-2.3 6.6 0"
        />
      </svg>
    ),

    // Pandas: bars with staggered squares
    pandas: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M6 2.5h2v7H6zM16 14.5h2v7h-2z" />
        <path fill="currentColor" d="M6 14h2v2H6zM16 7h2v2h-2zM11 5h2v14h-2z" />
      </svg>
    ),

    // NumPy: isometric blocks
    numpy: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M3 8l4-2 4 2-4 2-4-2Zm8 0 4-2 4 2-4 2-4-2Zm-4 4 4-2 4 2-4 2-4-2Zm8 0 4-2 2 1-4 2-2-1Zm-8 4 4-2 4 2-4 2-4-2Z" />
      </svg>
    ),

    // FEA: cube with wireframe
    fea: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" d="M12 3 20 7v10l-8 4-8-4V7l8-4Z" />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" d="M12 3v10l8 4M12 13 4 9" />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" d="M8 11l8 4M8 7l8 4" />
        <circle cx="12" cy="13" r=".8" fill="currentColor" />
        <circle cx="8" cy="11" r=".8" fill="currentColor" />
        <circle cx="16" cy="15" r=".8" fill="currentColor" />
      </svg>
    ),

    // Git: branch icon
    git: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 4v6a4 4 0 0 0 4 4h2" />
        <circle cx="12" cy="17" r="2" fill="currentColor" />
        <circle cx="16" cy="5" r="2" fill="currentColor" />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M12 15V9a4 4 0 0 1 4-4" />
      </svg>
    ),

    // TensorFlow: stylized TF blocks
    tensorflow: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4 8l8-4 8 4-2.5 1.2L12 6.6 6.5 9.2 4 8Z" />
        <path fill="currentColor" d="M10 10.2 12 9.4v9.2l-2 .9v-9.3Zm4 0 2-.8v5.3h2v2.1h-4v-6.6Z" />
      </svg>
    ),

    transformers: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M4 7h16M4 12h16M4 17h16" />
        <circle cx="8" cy="7" r="1.3" fill="currentColor" />
        <circle cx="16" cy="12" r="1.3" fill="currentColor" />
        <circle cx="10" cy="17" r="1.3" fill="currentColor" />
      </svg>
    ),

    xgboost: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
      </svg>
    ),

    lightgbm: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M6 18h2V8H6v10Zm5 0h2V5h-2v13Zm5 0h2v-8h-2v8Z" />
      </svg>
    ),

    diffusionnet: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M4 12c2-5 6-7 8-7s6 2 8 7c-2 5-6 7-8 7s-6-2-8-7Z" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),

    optuna: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M5 19 19 5" />
        <circle cx="7" cy="17" r="2" fill="currentColor" />
        <circle cx="17" cy="7" r="2" fill="currentColor" />
      </svg>
    ),

    langgraph: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="6" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="6" r="2" fill="currentColor" />
        <circle cx="18" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="18" r="2" fill="currentColor" />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M8 12h8M12 8v8" />
      </svg>
    ),

    mlflow: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M5 16h3V8H5v8Zm5 0h3V5h-3v11Zm5 0h3v-6h-3v6Z" />
      </svg>
    ),

    clearml: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M5 7h14v10H5z" />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M8 10h8M8 14h5" />
      </svg>
    ),

    abaqus: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M12 3 20 7v10l-8 4-8-4V7l8-4Z" />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M12 3v18M4 7l16 10" />
      </svg>
    ),

    "drucker-prager": (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M12 4 20 18H4L12 4Z" />
      </svg>
    ),

    "johnson-cook": (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M6 18c4-8 8-8 12 0" />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M6 6h12" />
      </svg>
    ),

    constitutive: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M6 18V6l12 12V6" />
      </svg>
    ),

    damage: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M8 4h8l4 8-8 8-8-8 4-8Z" />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M12 8v8" />
      </svg>
    ),

    vv: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="m5 12 4 4L19 6" />
      </svg>
    ),

    matlab: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M5 17 10 6l4 8 5-7-3 11H5Z" />
      </svg>
    ),

    docker: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M5 11h3v3H5zM9 11h3v3H9zM13 11h3v3h-3zM9 7h3v3H9zM13 7h3v3h-3z" />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M4 15h11c2.5 0 4.1-1.1 5-3" />
      </svg>
    ),

    bedrock: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M8 9h8M8 12h8M8 15h5" />
      </svg>
    ),

    vertex: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M4 18 12 5l8 13" />
        <circle cx="12" cy="13" r="1.6" fill="currentColor" />
      </svg>
    ),

    // Open3D: axes triad
    open3d: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 20l6-6M4 20l6 2M4 20l-2-6M12 12l8-8M12 12l2 6M12 12l-6-2" />
      </svg>
    ),

    // Trimesh: subdivided triangle
    trimesh: (
      <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" d="M12 4l9 16H3L12 4Z" />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" d="M12 4v16M3 20l9-6m9 6-9-6" />
      </svg>
    ),
  };

  const fallbackIcon = (
    <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" d="M12 2l8 4v8l-8 4-8-4V6l8-4Z" />
    </svg>
  );

  const wrapper = `bg-gray-900 px-6 py-10 rounded-2xl ${className}`.trim();

  return (
    <div className={wrapper}>
      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.title}>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300/90">
              {group.title}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
              {group.items.map((skill) => {
                const icon = iconMap[skill.key] || fallbackIcon;

                return (
                  <div
                    key={skill.key}
                    className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 text-center text-gray-200 transition-transform duration-200 hover:scale-[1.03] hover:text-teal-400"
                  >
                    <div aria-hidden="true">{icon}</div>
                    <div className="mt-3 text-sm font-medium text-gray-300 group-hover:text-teal-400 transition-colors">
                      {skill.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
