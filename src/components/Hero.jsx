import useInView from '../hooks/useInView'

export default function Hero() {
  const [ref, isVisible] = useInView()

  return (
    <section className="hero" id="top">
      <div className="court-lines" />
      <div className="hero-ball" />
      <div className="hero-ball" />
      <div className="hero-ball" />

      <div ref={ref} className={`hero-content fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="hero-badge">CSCE 5320 {'\u00B7'} Scientific Data Visualization</div>

        <h1>
          NBA Player <span>Value</span>
          <br />
          Performance &amp; Salary Efficiency
        </h1>

        <p className="hero-sub">
          Do NBA teams get what they pay for? An analytical deep-dive into the
          2024-25 season to uncover elite performers, positional trends, and the
          players delivering the most {'\u2014'} or least {'\u2014'} value per dollar.
        </p>

        <div className="hero-meta">
          <span>{'\uD83C\uDFC0'} 2024-25 NBA Season</span>
          <span>{'\u00B7'}</span>
          <span>{'\uD83D\uDCCA'} 590 Players Analyzed</span>
          <span>{'\u00B7'}</span>
          <span>{'\uD83D\uDCB0'} $4B+ in Salaries</span>
        </div>

        <a href="#project2" className="hero-cta" style={{ marginTop: '1rem' }}>
          Explore the Analysis
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </section>
  )
}
