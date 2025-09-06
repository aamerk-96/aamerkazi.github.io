export default function SkillsGrid({ skills, className = "" }) {
  const defaultSkills = [
    { key: "python", name: "Python" },
    { key: "pytorch", name: "PyTorch" },
    { key: "scikit", name: "scikit-learn" },
    { key: "scipy", name: "SciPy" },
    { key: "pandas", name: "Pandas" },
    { key: "numpy", name: "NumPy" },
    { key: "fea", name: "FEA (Finite Element Analysis)" },
    { key: "open3d", name: "Open3D" },
    { key: "trimesh", name: "Trimesh" },
  ];

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

  const list = Array.isArray(skills) && skills.length > 0 ? skills : defaultSkills;
  const wrapper = `bg-gray-900 px-6 py-10 rounded-2xl ${className}`.trim();

  return (
    <div className={wrapper}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {list.map((s) => {
          const icon = iconMap[s.key] || fallbackIcon;
          return (
            <div
              key={s.key}
              className="group relative flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-5 text-gray-200 transition-transform duration-200 hover:scale-105 hover:text-teal-400"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border border-white/15 bg-white/10 px-2 py-1 text-xs text-gray-100 opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-150 group-hover:opacity-100 pointer-events-none">
                {s.name}
              </div>
              <span className="sr-only">{s.name}</span>
              <div aria-hidden="true">{icon}</div>
              <div className="mt-3 text-sm font-medium text-gray-300 group-hover:text-teal-400 transition-colors">{s.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
