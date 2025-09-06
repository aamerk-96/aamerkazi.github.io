"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-bar nav-2col">
        <nav className="nav-left nav-links">
          <a href="#home" className="nav-link">
            <svg className="nav-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 10.5 12 3l9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            HOME
          </a>
          <a href="#about" className="nav-link">
            <svg className="nav-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M5 20c.9-3.2 3.9-5.5 7-5.5s6.1 2.3 7 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            ABOUT ME
          </a>
          <a href="#projects" className="nav-link">
            <svg className="nav-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="7" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
            PROJECTS
          </a>
          <a href="#contact" className="nav-link">
            <svg className="nav-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6"/>
              <path d="m3 8 9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            CONTACT
          </a>
        </nav>
        <div className="nav-right">
          <a className="icon-link" href="https://www.linkedin.com/in/aamerkazi4716/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1 3.87 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.63-1.2 2.17-2.46 4.47-2.46 4.79 0 5.67 3.15 5.67 7.25V24h-5V16.2c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.13V24h-5V8z" fill="currentColor"/></svg>
          </a>
          <a className="icon-link" href="https://github.com/aamerk-96" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.63 22.41c.57.1.78-.25.78-.56v-2.1c-3.18.69-3.85-1.37-3.85-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.54-.29-5.2-1.27-5.2-5.64 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17.91-.26 1.88-.39 2.85-.39.97 0 1.94.13 2.85.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.38-2.67 5.35-5.22 5.63.41.36.77 1.07.77 2.17v3.22c0 .31.21.66.79.55A11.5 11.5 0 0 0 12 .5Z" fill="currentColor"/></svg>
          </a>
          <a className="icon-link" href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 4l10 5-10 5L2 9l10-5z" fill="currentColor"/>
              <path d="M6 12.5v2.5c0 1.6 2.9 2.9 6 2.9s6-1.3 6-2.9v-2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M22 9v4" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
