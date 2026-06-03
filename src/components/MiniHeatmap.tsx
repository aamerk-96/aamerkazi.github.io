/* Static decorative attention heatmap for the project card */

const W = [
  [1.0,0,0,0,0,0,0,0,0,0],
  [0.01,0.99,0,0,0,0,0,0,0,0],
  [0.30,0.17,0.53,0,0,0,0,0,0,0],
  [0.09,0.07,0.06,0.78,0,0,0,0,0,0],
  [0.21,0.43,0.17,0.07,0.11,0,0,0,0,0],
  [0.06,0.28,0.11,0.19,0.04,0.32,0,0,0,0],
  [0.12,0.18,0.10,0.15,0.21,0.08,0.17,0,0,0],
  [0.06,0.03,0.05,0.07,0.25,0.11,0.08,0.35,0,0],
  [0.07,0.10,0.05,0.12,0.19,0.20,0.10,0.01,0.17,0],
  [0.08,0.16,0.10,0.11,0.11,0.13,0.13,0.07,0.02,0.08],
];

const ROW_LABELS = [
  "▁", "start", "▁", "title", "Choc", "Chip",
  "Cook", "▁", "ingr", "2",
];

export default function MiniHeatmap() {
  const n = W.length;
  const cell = 28;
  const gap = 2;
  const step = cell + gap;
  const labelW = 44;
  const gridW = n * step;
  const gridH = n * step;
  const totalW = labelW + gridW;
  const totalH = gridH;

  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "20px 16px",
    }}>
      <svg
        width={totalW}
        height={totalH}
        viewBox={`0 0 ${totalW} ${totalH}`}
        style={{ display: "block", maxWidth: "100%" }}
      >
        {/* Row labels */}
        {ROW_LABELS.map((label, i) => (
          <text
            key={"rl" + i}
            x={labelW - 6}
            y={i * step + cell / 2 + 3}
            textAnchor="end"
            fontSize={8}
            fill="var(--muted)"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
            opacity={0.7}
          >
            {label}
          </text>
        ))}

        {/* Cells */}
        {W.map((row, r) =>
          row.map((val, c) => {
            const isMasked = c > r;
            if (isMasked) return null;
            return (
              <rect
                key={`${r}-${c}`}
                x={labelW + c * step}
                y={r * step}
                width={cell}
                height={cell}
                rx={4}
                fill={val > 0.01 ? "#d97757" : "var(--border)"}
                opacity={val > 0.01 ? Math.pow(val, 0.45) * 0.85 + 0.1 : 0.3}
              />
            );
          })
        )}
      </svg>

      {/* Caption */}
      <div style={{
        fontSize: 11, color: "var(--muted)", marginTop: 12, textAlign: "center",
        letterSpacing: "0.02em",
      }}>
        Causal self-attention &middot; Layer 0, Head 0
      </div>
    </div>
  );
}
