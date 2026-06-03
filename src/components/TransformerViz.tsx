"use client";

import { useState } from "react";
import { VIZ_DATA } from "../data/recipegpt-viz-data";

const C = {
  bg: "var(--bg)",
  surface: "var(--card-bg)",
  border: "var(--border)",
  borderHover: "var(--border-hover)",
  text: "var(--text)",
  muted: "var(--muted)",
  accent: "var(--accent)",
  accentDim: "rgba(217,119,87,0.12)",
  blue: "var(--accent-blue)",
  green: "var(--accent-green)",
  purple: "#8b5cf6",
  teal: "#14b8a6",
};

function cleanToken(t: string) {
  return t.replace(/▁/g, " ").replace(/^\s$/, "⎵");
}

function AttentionHeatmap({
  layer, head, tokens, selectedToken, onTokenSelect,
}: {
  layer: number; head: number; tokens: string[];
  selectedToken: number; onTokenSelect: (i: number) => void;
}) {
  const weights = (VIZ_DATA as any).attention_weights[layer][head];
  const n = tokens.length;
  const cellSize = Math.min(22, Math.floor(600 / n));
  const labelW = 90;
  const topMargin = 130;
  const totalW = labelW + n * cellSize;
  const totalH = topMargin + n * cellSize;

  return (
    <div style={{ overflowX: "auto", overflowY: "auto", maxHeight: 700 }}>
      <svg width={totalW} height={totalH} style={{ display: "block" }}>
        {tokens.map((t, i) => (
          <text
            key={"cl" + i}
            x={labelW + i * cellSize + cellSize / 2}
            y={topMargin - 8}
            textAnchor="end"
            fontSize={9}
            fill={selectedToken === i ? "#d97757" : "var(--muted)"}
            fontWeight={selectedToken === i ? 700 : 400}
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
            transform={`rotate(-55, ${labelW + i * cellSize + cellSize / 2}, ${topMargin - 8})`}
            style={{ cursor: "pointer" }}
            onClick={() => onTokenSelect(i)}
          >
            {cleanToken(t)}
          </text>
        ))}
        {tokens.map((t, row) => (
          <g key={"r" + row}>
            <text
              x={labelW - 6}
              y={topMargin + row * cellSize + cellSize / 2 + 3}
              textAnchor="end"
              fontSize={9}
              fill={selectedToken === row ? "#d97757" : "var(--muted)"}
              fontWeight={selectedToken === row ? 700 : 400}
              fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
              style={{ cursor: "pointer" }}
              onClick={() => onTokenSelect(row)}
            >
              {cleanToken(t)}
            </text>
            {selectedToken === row && (
              <rect
                x={labelW - 2}
                y={topMargin + row * cellSize - 1}
                width={n * cellSize + 4}
                height={cellSize + 2}
                rx={3}
                fill="none"
                stroke="#d97757"
                strokeWidth={1.5}
                strokeDasharray="4 2"
                opacity={0.6}
              />
            )}
            {tokens.map((_, col) => {
              const w = weights[row][col];
              const opacity = Math.pow(w, 0.5);
              const isHighlighted = selectedToken === row || selectedToken === col;
              const dimmed = selectedToken !== -1 && !isHighlighted;
              return (
                <rect
                  key={col}
                  x={labelW + col * cellSize}
                  y={topMargin + row * cellSize}
                  width={cellSize - 1}
                  height={cellSize - 1}
                  rx={2}
                  fill={isHighlighted ? "#d97757" : "#d97757"}
                  opacity={dimmed ? opacity * 0.25 : opacity}
                  stroke={isHighlighted && w > 0.01 ? "#d97757" : "transparent"}
                  strokeWidth={isHighlighted && w > 0.01 ? 1.5 : 0}
                  style={{ cursor: "pointer" }}
                  onClick={() => onTokenSelect(row)}
                />
              );
            })}
          </g>
        ))}
        {selectedToken >= 0 && (
          <rect
            x={labelW + selectedToken * cellSize - 1}
            y={topMargin - 1}
            width={cellSize + 2}
            height={n * cellSize + 2}
            rx={3}
            fill="none"
            stroke="#d97757"
            strokeWidth={1.5}
            strokeDasharray="4 2"
            opacity={0.6}
          />
        )}
      </svg>
    </div>
  );
}

function PredictionBar({
  token, prob, maxProb, rank,
}: {
  token: string; prob: number; maxProb: number; rank: number;
}) {
  const colors = ["#d97757", "#6a9bcc", "#14b8a6", "#8b5cf6", "#9ca3af"];
  const barWidth = maxProb > 0 ? (prob / maxProb) * 100 : 0;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
      <span style={{
        width: 24, fontSize: 11, color: C.muted,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
        textAlign: "right",
      }}>
        #{rank}
      </span>
      <div style={{
        flex: 1, height: 28, background: C.bg, borderRadius: 6,
        overflow: "hidden", position: "relative",
        border: `1px solid ${C.border}`,
      }}>
        <div style={{
          width: barWidth + "%", height: "100%",
          background: colors[rank - 1] + "cc", borderRadius: 5,
          transition: "width 0.3s ease",
        }} />
        <div style={{
          position: "absolute", top: 0, left: 8, height: "100%",
          display: "flex", alignItems: "center", fontSize: 12,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
          color: C.text, fontWeight: rank === 1 ? 700 : 400,
        }}>
          {cleanToken(token)}
        </div>
        <div style={{
          position: "absolute", top: 0, right: 8, height: "100%",
          display: "flex", alignItems: "center", fontSize: 11,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
          color: C.muted,
        }}>
          {(prob * 100).toFixed(1)}%
        </div>
      </div>
    </div>
  );
}

function TokenStrip({
  tokens, selectedToken, onTokenSelect, predictions,
}: {
  tokens: string[]; selectedToken: number;
  onTokenSelect: (i: number) => void; predictions: any;
}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 20 }}>
      {tokens.map((t, i) => {
        const isSelected = selectedToken === i;
        const topProb = predictions[i]?.[0]?.prob || 0;
        const isSpecial = t.startsWith("<|");
        return (
          <div
            key={i}
            onClick={() => onTokenSelect(i)}
            style={{
              padding: "4px 6px", borderRadius: 4, fontSize: 11,
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
              cursor: "pointer",
              background: isSelected ? C.accent : isSpecial ? C.accentDim : C.bg,
              color: isSelected ? "#fff" : isSpecial ? C.accent : C.text,
              border: `1px solid ${isSelected ? C.accent : C.border}`,
              fontWeight: isSelected ? 700 : 400,
              transition: "all 0.15s ease",
            }}
            title={`Position ${i} | Top prediction: ${predictions[i]?.[0]?.token} (${(topProb * 100).toFixed(1)}%)`}
          >
            {cleanToken(t)}
          </div>
        );
      })}
    </div>
  );
}

export default function TransformerViz() {
  const [tab, setTab] = useState("attention");
  const [layer, setLayer] = useState(0);
  const [head, setHead] = useState(0);
  const [selectedToken, setSelectedToken] = useState(5);

  const tokens = (VIZ_DATA as any).tokens;
  const predictions = (VIZ_DATA as any).top_predictions;
  const nLayers = (VIZ_DATA as any).n_layers;
  const nHeads = (VIZ_DATA as any).n_heads;

  const currentPreds = predictions[selectedToken] || [];
  const maxProb = currentPreds.length > 0 ? currentPreds[0].prob : 1;
  const actualNextToken = selectedToken < tokens.length - 1 ? tokens[selectedToken + 1] : "—";

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ marginBottom: 24, borderBottom: "1px solid var(--border)", paddingBottom: 16 }}>
        <h1 style={{ fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 700, margin: 0 }}>
          <span style={{ color: C.accent }}>RecipeGPT</span>{" "}
          <span style={{ color: C.text }}>Transformer Internals</span>
        </h1>
        <p style={{ color: C.muted, fontSize: 13, margin: "6px 0 0" }}>
          12 layers &middot; 4 heads &middot; 768 dim &middot; 92M params
        </p>
      </div>

      <div className="card" style={{ padding: 14, marginBottom: 20 }}>
        <span style={{
          color: C.accent, fontWeight: 600, fontSize: 11,
          textTransform: "uppercase", letterSpacing: "0.05em",
        }}>
          Input sequence
        </span>
        <div style={{ marginTop: 8 }}>
          <TokenStrip
            tokens={tokens}
            selectedToken={selectedToken}
            onTokenSelect={setSelectedToken}
            predictions={predictions}
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: 2, marginBottom: 20 }}>
        {[
          { id: "attention", label: "Attention Patterns" },
          { id: "predictions", label: "Token Predictions" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="btn"
            style={{
              borderRadius: "8px 8px 0 0",
              fontWeight: 600, fontSize: 13, cursor: "pointer",
              background: tab === t.id ? C.surface : "transparent",
              color: tab === t.id ? C.accent : C.muted,
              borderBottom: tab === t.id ? "2px solid var(--accent)" : "2px solid transparent",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "attention" && (
        <div className="card" style={{ padding: 20 }}>
          <div style={{ display: "flex", gap: 24, marginBottom: 16, flexWrap: "wrap" }}>
            <div>
              <label style={{
                fontSize: 11, color: C.muted, textTransform: "uppercase",
                letterSpacing: "0.05em", display: "block", marginBottom: 6,
              }}>
                Layer
              </label>
              <div style={{ display: "flex", gap: 3 }}>
                {Array.from({ length: nLayers }, (_, i) => (
                  <button
                    key={i} onClick={() => setLayer(i)}
                    style={{
                      width: 30, height: 30, borderRadius: 4,
                      border: `1px solid ${layer === i ? "#d97757" : "var(--border)"}`,
                      background: layer === i ? "var(--accent)" : "transparent",
                      color: layer === i ? "#fff" : "var(--muted)",
                      fontSize: 11, fontWeight: 600, cursor: "pointer",
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                    }}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label style={{
                fontSize: 11, color: C.muted, textTransform: "uppercase",
                letterSpacing: "0.05em", display: "block", marginBottom: 6,
              }}>
                Head
              </label>
              <div style={{ display: "flex", gap: 3 }}>
                {Array.from({ length: nHeads }, (_, i) => (
                  <button
                    key={i} onClick={() => setHead(i)}
                    style={{
                      width: 30, height: 30, borderRadius: 4,
                      border: `1px solid ${head === i ? "#6a9bcc" : "var(--border)"}`,
                      background: head === i ? "var(--accent-blue)" : "transparent",
                      color: head === i ? "#fff" : "var(--muted)",
                      fontSize: 11, fontWeight: 600, cursor: "pointer",
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                    }}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <span style={{ fontSize: 12, color: C.muted }}>
                Layer {layer}, Head {head} — brighter = stronger attention
              </span>
            </div>
          </div>

          <AttentionHeatmap
            layer={layer} head={head} tokens={tokens}
            selectedToken={selectedToken} onTokenSelect={setSelectedToken}
          />

          <div style={{
            marginTop: 14, padding: 12, background: C.bg, borderRadius: 8,
            fontSize: 12, color: C.muted, lineHeight: 1.6,
            border: "1px solid var(--border)",
          }}>
            <strong style={{ color: C.text }}>Reading the heatmap:</strong>{" "}
            Each row shows where that token looks. Row = query, Column = key.
            The causal mask means tokens can only attend to earlier positions (lower-left triangle).
            Look for heads that specialize — some attend to nearby tokens, others to structural tokens like{" "}
            <code style={{
              color: C.accent, background: C.accentDim,
              padding: "1px 4px", borderRadius: 3,
            }}>
              {"<|ingredients|>"}
            </code>
          </div>
        </div>
      )}

      {tab === "predictions" && (
        <div className="card" style={{ padding: 20 }}>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 340px" }}>
              <div style={{
                fontSize: 11, color: C.muted, textTransform: "uppercase",
                letterSpacing: "0.05em", marginBottom: 8,
              }}>
                Selected position {selectedToken}
              </div>
              <div style={{
                fontSize: 16, fontWeight: 600, marginBottom: 4,
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
              }}>
                <span style={{ color: C.muted }}>Token: </span>
                <span style={{
                  background: C.accent, color: "#fff",
                  padding: "2px 8px", borderRadius: 4,
                }}>
                  {cleanToken(tokens[selectedToken])}
                </span>
              </div>
              <div style={{ fontSize: 12, color: C.muted, marginBottom: 16 }}>
                Actual next token:{" "}
                <span style={{
                  color: C.green,
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                }}>
                  {cleanToken(actualNextToken)}
                </span>
              </div>

              <div style={{
                fontSize: 11, color: C.muted, textTransform: "uppercase",
                letterSpacing: "0.05em", marginBottom: 10,
              }}>
                Top 5 predictions for next token
              </div>
              {currentPreds.map((p: any, i: number) => (
                <PredictionBar
                  key={i} token={p.token} prob={p.prob}
                  maxProb={maxProb} rank={i + 1}
                />
              ))}

              {currentPreds.length > 0 && currentPreds[0].token === actualNextToken ? (
                <div style={{
                  marginTop: 12, padding: "8px 12px", borderRadius: 6,
                  fontSize: 12, color: C.green,
                  background: "rgba(120,140,93,0.1)",
                  border: "1px solid rgba(120,140,93,0.3)",
                }}>
                  Top prediction matches actual next token
                </div>
              ) : currentPreds.some((p: any) => p.token === actualNextToken) ? (
                <div style={{
                  marginTop: 12, padding: "8px 12px", borderRadius: 6,
                  fontSize: 12, color: C.blue,
                  background: "rgba(106,155,204,0.1)",
                  border: "1px solid rgba(106,155,204,0.3)",
                }}>
                  Actual next token is in top 5 but not #1
                </div>
              ) : (
                <div style={{
                  marginTop: 12, padding: "8px 12px", borderRadius: 6,
                  fontSize: 12, color: C.purple,
                  background: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}>
                  Actual next token not in top 5
                </div>
              )}
            </div>

            <div style={{ flex: "1 1 340px" }}>
              <div style={{
                fontSize: 11, color: C.muted, textTransform: "uppercase",
                letterSpacing: "0.05em", marginBottom: 10,
              }}>
                Click tokens above to explore predictions
              </div>
              <div style={{
                padding: 14, background: C.bg, borderRadius: 8,
                fontSize: 12, color: C.muted, lineHeight: 1.7,
                border: "1px solid var(--border)",
              }}>
                <p style={{ margin: "0 0 10px" }}>
                  <strong style={{ color: C.text }}>What this shows:</strong>{" "}
                  At each position, the model predicts the next token from a vocabulary of 32,000.
                  The bars show its top 5 guesses and confidence.
                </p>
                <p style={{ margin: "0 0 10px" }}>
                  <strong style={{ color: C.text }}>Try clicking:</strong>
                </p>
                <p style={{ margin: "0 0 4px" }}>
                  {"<|startofrecipe|>"} — should predict {"<|title|>"}
                </p>
                <p style={{ margin: "0 0 4px" }}>
                  Chip — should predict "Cookies" with high confidence
                </p>
                <p style={{ margin: "0 0 4px" }}>
                  flour — likely predicts "|" (ingredient separator)
                </p>
                <p style={{ margin: "0 0 4px" }}>
                  chips — should predict {"<|directions|>"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
