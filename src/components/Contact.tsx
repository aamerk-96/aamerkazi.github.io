export default function Contact() {
  return (
    <div className="container">
      <h2 className="section-title">
        <svg className="section-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.47-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" />
        </svg>
        Contact
      </h2>
      <div className="card pop-card contact-card">
        <div className="contact-card-header">
          <div>
            <div className="contact-kicker">Open to thoughtful conversations</div>
          </div>
        </div>

        <div className="contact-methods">
          <a className="contact-method" href="mailto:aamerk4716@gmail.com">
            <span className="contact-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <span className="contact-copy">
              <span className="contact-label">Email</span>
              <span className="contact-value">aamerk4716@gmail.com</span>
            </span>
          </a>

          <a
            className="contact-method"
            href="https://www.linkedin.com/in/aamerk4716/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55c0-1.04-.78-1.87-1.91-1.87-1.12 0-1.91.83-1.91 1.87 0 1.01.77 1.87 1.87 1.87h.02c1.15 0 1.93-.86 1.93-1.87ZM20.44 13.01c0-3.52-1.88-5.16-4.39-5.16-2.02 0-2.92 1.11-3.43 1.89V8.5H9.24c.04.82 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.88 1.03 1.88 2.53V20H20v-6.99Z" />
              </svg>
            </span>
            <span className="contact-copy">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/aamerk4716/</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
