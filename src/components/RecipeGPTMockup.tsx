export default function RecipeGPTMockup() {
  return (
    <div className="rgpt-mockup">
      {/* Title bar */}
      <div className="rgpt-titlebar">
        <div className="rgpt-dots">
          <span /><span /><span />
        </div>
        <span className="rgpt-app-name">RecipeGPT</span>
      </div>

      {/* Static chat */}
      <div className="rgpt-chat">
        <div className="rgpt-msg rgpt-msg-user">
          I have chicken thighs, coconut milk, red curry paste, and jasmine rice
        </div>

        <div className="rgpt-msg rgpt-msg-bot">
          <div className="rgpt-recipe-title">Thai Red Curry Chicken</div>
          <div className="rgpt-msg-text">
            {`1. Sear chicken thighs until golden — set aside
2. Bloom red curry paste in the same pan (1 min)
3. Pour in coconut milk, simmer 5 min
4. Return chicken, cook 12-15 min until done
5. Serve over steamed jasmine rice`}
          </div>
          <div className="rgpt-recipe-tags">
            <span className="rgpt-tag">30 min</span>
            <span className="rgpt-tag">One-pot</span>
            <span className="rgpt-tag">Gluten-free</span>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="rgpt-input-bar">
        <div className="rgpt-input">
          <span className="rgpt-placeholder">What ingredients do you have?</span>
        </div>
        <button className="rgpt-send" aria-label="Send" style={{ opacity: 0.4 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
