import useInView from '../hooks/useInView'

export default function AuthorSection() {
  const [ref, isVisible] = useInView()

  return (
    <section className="author-section" id="about">
      <div ref={ref} className={`container fade-in ${isVisible ? 'visible' : ''}`}>
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">About</div>
          <h2 className="section-title">Built By</h2>
        </div>

        <div className="author-card">
          <div className="author-avatar">AS</div>

          <div className="author-info" style={{ textAlign: 'left' }}>
            <h3>Abhijit Sappidi</h3>
            <div className="author-role">Data Analyst · Sports Analytics · Visualization</div>
            <p>
              Passionate about turning raw data into compelling visual stories.
              This project combines NBA performance metrics with salary data to
              surface the players delivering the most — and least — value per
              dollar in the 2024-25 season.
            </p>
            <div className="author-links">
              <a href="https://github.com/abhi119100" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .3a12 12 0 00-3.8 23.38c.6.12.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.76c-1.08-.74.08-.73.08-.73a2.52 2.52 0 011.84 1.24 2.56 2.56 0 003.5 1 2.56 2.56 0 01.76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 011.24-3.22 4.3 4.3 0 01.12-3.18s1-.32 3.3 1.23a11.4 11.4 0 016.02 0c2.28-1.55 3.28-1.23 3.28-1.23a4.3 4.3 0 01.12 3.18 4.64 4.64 0 011.24 3.22c0 4.61-2.8 5.63-5.48 5.92a2.86 2.86 0 01.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 .3" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/abhijit-sappidi/" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.13 2.06 2.06 0 01.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.75 1.75 0 0024 22.27V1.73A1.75 1.75 0 0022.22 0h.01z" />
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/abhi119100/SDVProject" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                </svg>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
