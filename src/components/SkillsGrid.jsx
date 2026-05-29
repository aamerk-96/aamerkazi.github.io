const accentMap = {
  orange: { border: "rgba(217,119,87,0.25)", dot: "#d97757", tagBg: "rgba(217,119,87,0.07)", tagBorder: "rgba(217,119,87,0.18)" },
  blue:   { border: "rgba(106,155,204,0.25)", dot: "#6a9bcc", tagBg: "rgba(106,155,204,0.07)", tagBorder: "rgba(106,155,204,0.18)" },
  green:  { border: "rgba(120,140,93,0.25)",  dot: "#788c5d", tagBg: "rgba(120,140,93,0.07)",  tagBorder: "rgba(120,140,93,0.18)" },
};

export default function SkillsGrid({ groups = [], className = "" }) {
  return (
    <div className={`${className}`.trim()} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
      {groups.map((group) => {
        const colors = accentMap[group.accent] || accentMap.orange;
        return (
          <div
            key={group.label}
            style={{
              border: `1px solid var(--card-border)`,
              borderRadius: "14px",
              padding: "20px",
              background: "var(--card-bg)",
              transition: "border-color .2s ease, box-shadow .2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.border;
              e.currentTarget.style.boxShadow = `0 4px 16px rgba(0,0,0,0.04)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--card-border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: colors.dot, flexShrink: 0 }} />
              <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", color: "var(--text)" }}>
                {group.label}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {group.items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "5px 10px",
                    fontSize: "12px",
                    borderRadius: "999px",
                    background: colors.tagBg,
                    border: `1px solid ${colors.tagBorder}`,
                    color: "var(--text)",
                    transition: "border-color .15s ease",
                    cursor: "default",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
