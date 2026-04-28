import useInView from '../hooks/useInView'

export default function LimitationsSection() {
  const [ref, isVisible] = useInView()

  return (
    <section id="limitations">
      <div className="section-court-bg" />

      <div ref={ref} className={`container fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="section-label">Critical Analysis</div>
        <h2 className="section-title">Limitations & Future Work</h2>
        <p className="section-subtitle">
          No model is perfect. Understanding the boundaries of this analysis is just as important as the findings themselves.
        </p>

        <div className="insights-grid">
          <div className="story-block" style={{ margin: 0 }}>
            <h3>Current Limitations</h3>
            <p>
              <strong>Single-metric dependency:</strong> PER, while widely used, is one efficiency metric. Win Shares, RAPTOR, EPM, and BPM each capture different facets of player impact that PER may miss (e.g., defensive value, off-ball contribution).
            </p>
            <p>
              <strong>Salary context:</strong> Raw salary figures don{"'"}t account for contract year, team cap situation, sign-and-trade mechanics, or incentive-laden deals. A player in year 4 of a deal signed at 25 may be {"\""}overpaid{"\""}  simply due to aging, not poor play.
            </p>
            <p>
              <strong>Low R{"\u00B2"}:</strong> The polynomial model explains ~25% of variance. While this itself is a finding (salary is a weak predictor of efficiency), it means the model has limited predictive power for individual players.
            </p>
            <p>
              <strong>Single-season snapshot:</strong> One season of data can be skewed by injuries, role changes, or team context. A multi-season approach would be more robust.
            </p>
          </div>
          <div className="story-block" style={{ margin: 0 }}>
            <h3>Future Directions</h3>
            <p>
              <strong>Multi-metric composite:</strong> Combine PER with Win Shares, BPM, and VORP into a weighted composite efficiency score for a more holistic player evaluation.
            </p>
            <p>
              <strong>Team success correlation:</strong> Overlay team win/loss records to test whether high-surplus rosters actually win more games {"\u2014"} the ultimate validation.
            </p>
            <p>
              <strong>Positional market analysis:</strong> Build position-specific regression models, since the {"\""}market rate{"\""}  for a center vs. a point guard differs structurally.
            </p>
            <p>
              <strong>Multi-season trends:</strong> Track how player value changes over contract duration. Are rookie-scale steals still steals after their max extension?
            </p>
            <p>
              <strong>Advanced modeling:</strong> Replace polynomial regression with gradient-boosted trees or random forests to capture non-linear salary-performance relationships more accurately.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
