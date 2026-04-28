import useInView from '../hooks/useInView'
import useCounter from '../hooks/useCounter'
import Section from './Section'

function CounterCard({ target, color, label }) {
  const [ref, isVisible] = useInView({ threshold: 0.5 })
  const value = useCounter(target, isVisible)
  return (
    <div className="stat-card" ref={ref}>
      <div className={`stat-number ${color}`}>{value.toLocaleString()}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function ProblemSection() {
  const [ref, isVisible] = useInView()

  return (
    <section id="problem">
      <div className="section-court-bg"></div>
      <div ref={ref} className={`container fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="section-label">Chapter 1</div>
        <h2 className="section-title">The Billion-Dollar Question</h2>
        <p className="section-subtitle">
          NBA teams collectively spend over $4 billion annually on player salaries.
          But are they getting proportional on-court performance for that investment?
        </p>

        <div className="story-block">
          <h3>Why This Matters</h3>
          <p>
            Not all high-paid players deliver proportional performance. A player earning $50M
            might produce less impact than one earning $5M. Understanding this gap is critical
            for team management, coaches, scouts, and fantasy analysts.
          </p>
          <p>
            This project investigates that relationship across two phases: first understanding
            the performance landscape, then overlaying salary data to identify undervalued and
            overpaid players.
          </p>
        </div>

        <div className="stats-grid">
          <CounterCard target={590} color="orange" label="Players Analyzed" />
          <CounterCard target={32} color="blue" label="Statistical Attributes" />
          <CounterCard target={5} color="green" label="Positions Compared" />
          <div className="stat-card">
            <div className="stat-number teal">$4B+</div>
            <div className="stat-label">Total NBA Payroll</div>
          </div>
        </div>

        <h3
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: '1.2rem',
            fontWeight: 600,
            marginBottom: '1.2rem',
            marginTop: '2.5rem',
            textTransform: 'uppercase',
          }}
        >
          Core Questions
        </h3>

        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-icon metric">{'\u{1F3C6}'}</div>
            <h4>Who Are the Top Performers?</h4>
            <p>
              Identify the elite players of the 2024-25 season by examining PER, PTS, AST,
              TRB, and other key metrics.
            </p>
          </div>
          <div className="insight-card">
            <div className="insight-icon team">{'\u{1F4CB}'}</div>
            <h4>How Does Performance Vary by Position?</h4>
            <p>
              Compare Point Guards vs. Shooting Guards vs. Small Forwards vs. Power Forwards
              vs. Centers across all stats.
            </p>
          </div>
          <div className="insight-card">
            <div className="insight-icon steal">{'\u{1F4C8}'}</div>
            <h4>Which Metrics Predict Efficiency?</h4>
            <p>
              Determine which performance metrics correlate most strongly with Player
              Efficiency Rating (PER).
            </p>
          </div>
          <div className="insight-card">
            <div className="insight-icon overpaid">{'\u{1F4B0}'}</div>
            <h4>Who Is Overpaid or Undervalued?</h4>
            <p>
              Overlay salary data to find players delivering outsized value and those falling
              short of their contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
