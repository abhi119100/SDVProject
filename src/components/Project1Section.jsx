import useInView from '../hooks/useInView'

export default function Project1Section() {
  const [containerRef, containerVisible] = useInView()

  return (
    <section id="project1">
      <div ref={containerRef} className={`container fade-in ${containerVisible ? 'visible' : ''}`}>
        <div className="section-label">Chapter 3</div>
        <h2 className="section-title">Understanding the Performance Landscape</h2>
        <p className="section-subtitle">
          Before analyzing salary efficiency, we must first understand: Who are the top
          performers? How do stats vary by position and role?
        </p>

        <div className="story-block">
          <h3>Positional Scoring Breakdown</h3>
          <p>
            Point Guards (PG) lead all positions at{' '}
            <strong style={{ color: 'var(--accent)' }}>10.52 avg PPG</strong>, confirming
            their primary ball-handling and scoring role. Power Forwards rank second at 10.05
            PPG — reflecting the evolution of the stretch big man in modern NBA. Centers have
            the lowest average at 8.63 PPG, as their role emphasizes interior defense and
            rebounding.
          </p>
          <p>
            The gap between highest (PG: 10.52) and lowest (C: 8.63) is only{' '}
            <strong>~1.9 points</strong> — scoring is more evenly distributed across positions
            than commonly assumed.
          </p>
        </div>

        <div className="story-block">
          <h3>Beyond Averages: The Full Distribution</h3>
          <p>
            Bar charts only show averages. Box plots reveal the full story — range, outliers,
            and spread. PG has the highest median and widest spread: from bench players (3-4
            PPG) to superstars (32+ PPG), showing the biggest performance gap of any position.
          </p>
          <p>
            Centers show a tight cluster at lower values, with a few elite exceptions like{' '}
            <strong>Nikola Jokic (29.6 PPG)</strong> as clear outliers. Every position has
            significant variance — no position is uniformly high or low scoring.
          </p>
        </div>

        <div className="story-block">
          <h3>Correlation Findings</h3>
          <p>
            PER correlates strongly with scoring ability (
            <strong style={{ color: 'var(--green)' }}>r = 0.72</strong>), high Usage Rate
            correlates with higher scoring (
            <strong style={{ color: 'var(--green)' }}>r = 0.68</strong>), and Assists
            correlate with team offensive efficiency (
            <strong style={{ color: 'var(--blue)' }}>r = 0.56</strong>).
          </p>
          <p>
            Interestingly, the most efficient players aren{'\u2019'}t always those with the
            highest usage — suggesting that ball-dominant players face diminishing returns on
            efficiency.
          </p>
        </div>

        <div className="dashboard-frame">
          <div className="dashboard-label">
            <div className="dot"></div>
            <span>Live Dashboard — Tableau Public (Project 1: Performance Analysis)</span>
          </div>
          <iframe
            src="https://public.tableau.com/views/Project1SDV/NBAPlayerPerformanceDashboard2024-25?:embed=y&:showVizHome=no&:display_count=no&:toolbar=yes"
            loading="lazy"
            title="NBA Player Performance Dashboard 2024-25"
          />
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number orange">10.52</div>
            <div className="stat-label">PG Avg PPG (Highest)</div>
          </div>
          <div className="stat-card">
            <div className="stat-number blue">8.63</div>
            <div className="stat-label">C Avg PPG (Lowest)</div>
          </div>
          <div className="stat-card">
            <div className="stat-number green">0.72</div>
            <div className="stat-label">PER {'\u2194'} Scoring</div>
          </div>
          <div className="stat-card">
            <div className="stat-number teal">0.68</div>
            <div className="stat-label">USG% {'\u2194'} Scoring</div>
          </div>
        </div>
      </div>
    </section>
  )
}
