import useInView from '../hooks/useInView'

export default function Project2Section() {
  const [containerRef, containerVisible] = useInView()
  const [headingRef, headingVisible] = useInView()
  const [evidenceRef, evidenceVisible] = useInView()
  const [readingRef, readingVisible] = useInView()

  const base = import.meta.env.BASE_URL

  return (
    <section id="project2">
      <div className="section-court-bg"></div>
      <div ref={containerRef} className={`container fade-in ${containerVisible ? 'visible' : ''}`}>
        <div className="section-label">Chapter 4</div>
        <h2 className="section-title">The Money Question: Salary vs. Performance</h2>
        <p className="section-subtitle">
          Now we introduce the financial dimension. Which players deliver the best bang for
          the buck — and which teams spend wisely?
        </p>

        <div className="story-block">
          <h3>Methodology: Building the Value Model</h3>
          <p>
            We merged salary data with performance stats by normalizing player names and team
            codes. Players were filtered to rotation-level contributors:{' '}
            <strong>{'\u2265'}40 games, {'\u2265'}20 MPG, {'\u2265'}$0.5M salary</strong> —
            yielding ~200 meaningful comparisons.
          </p>
          <p>
            A <strong>degree-2 polynomial regression</strong> model predicts Expected PER from
            salary. The difference —{' '}
            <strong style={{ color: 'var(--accent)' }}>
              Efficiency Surplus = Actual PER {'\u2212'} Expected PER
            </strong>{' '}
            — reveals who outperforms or underperforms their contract.
          </p>
        </div>

        <div className="story-block">
          <h3>How We Classified Player Value</h3>
          <p>
            Players were segmented into four salary tiers:{' '}
            <strong style={{ color: '#e63946' }}>Superstars ($25M+)</strong>,{' '}
            <strong style={{ color: '#f4a261' }}>Stars ($15–25M)</strong>,{' '}
            <strong style={{ color: '#2a9d8f' }}>Role Players ($5–15M)</strong>, and{' '}
            <strong style={{ color: '#457b9d' }}>Minimum/Vet (&lt;$5M)</strong>. Each tier
            carries different expectations for on-court production.
          </p>
          <p>
            Based on the gap between actual and expected PER, every player received a value
            label: <strong style={{ color: '#4ade80' }}>STEAL</strong> (surplus {'\u2265'} 4),{' '}
            <strong style={{ color: '#2a9d8f' }}>Undervalued</strong> ({'\u2265'} 1.5),{' '}
            <strong style={{ color: '#94a3b8' }}>Fair Value</strong> ({'\u00B1'} 1.5),{' '}
            <strong style={{ color: '#f4a261' }}>Overpaid</strong> ({'\u2264'} -1.5), or{' '}
            <strong style={{ color: '#f87171' }}>WAY Overpaid</strong> ({'\u2264'} -4).
          </p>
        </div>

        <div className="story-block">
          <h3>Key Derived Metrics</h3>
          <p>
            <strong>Performance Value Index (PVI)</strong> = (PER + Usage Rate) / Salary in
            Millions — a single number capturing how much production a team receives per
            dollar invested.
          </p>
          <p>
            <strong>Efficiency Surplus</strong> = Actual PER {'\u2212'} Expected PER — the
            core metric revealing whether a player over-delivers or under-delivers relative to
            their salary.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <a
              href="https://colab.research.google.com/drive/120LIrDY7E4Rv74QtGQCaO8xlsG3Kqzvd"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.4rem',
                color: 'var(--accent)',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '.88rem',
                transition: 'color .2s',
              }}
            >
              {'\u{1F4D1}'} View Full Python Analysis on Google Colab{' '}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </p>
        </div>

        <h3
          ref={headingRef}
          className={`fade-in ${headingVisible ? 'visible' : ''}`}
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: '1.15rem',
            fontWeight: 600,
            margin: '2.5rem 0 1rem',
            textTransform: 'uppercase',
            letterSpacing: '.03em',
          }}
        >
          {'\u{1F4CA}'} Plotly Analysis Output{' '}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '.75rem',
              color: 'var(--text-dim)',
              fontWeight: 400,
              textTransform: 'none',
              letterSpacing: 0,
              marginLeft: '.5rem',
            }}
          >
            from{' '}
            <a
              href="https://colab.research.google.com/drive/120LIrDY7E4Rv74QtGQCaO8xlsG3Kqzvd"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              Google Colab Notebook
            </a>
          </span>
        </h3>

        <div
          ref={evidenceRef}
          className={`evidence-grid fade-in ${evidenceVisible ? 'visible' : ''}`}
        >
          <div className="evidence-card">
            <div className="evidence-card-label">
              {'\u{1F3C0}'} Salary vs PER (Bubble Size = Usage Rate)
            </div>
            <img
              src={`${base}assets/plotly-salary-vs-per.png`}
              loading="lazy"
              alt="Plotly bubble chart showing Salary in Millions vs PER, colored by Salary Tier (Superstar, Star, Role Player, Minimum/Vet), with bubble size representing Usage Rate"
            />
          </div>
          <div className="evidence-card">
            <div className="evidence-card-label">
              {'\u{1F4C8}'} Salary vs Efficiency Surplus
            </div>
            <img
              src={`${base}assets/plotly-efficiency-surplus.png`}
              loading="lazy"
              alt="Plotly scatter plot showing Salary in Millions vs Efficiency Surplus, colored by Value Label (STEAL, Undervalued, Fair Value, Overpaid, WAY Overpaid), with dashed zero line"
            />
          </div>
        </div>

        <div
          ref={readingRef}
          className={`story-block fade-in ${readingVisible ? 'visible' : ''}`}
        >
          <h3>Reading the Plotly Charts</h3>
          <p>
            The <strong>Salary vs PER</strong> bubble chart reveals the core relationship: as
            salary increases, PER generally rises — but with enormous variance. Bubble size
            encodes Usage Rate, showing that the highest-usage players tend to cluster in the
            upper-right (high salary, high PER), but several low-salary players punch well
            above their weight class. The color-coded salary tiers make the pattern clear:{' '}
            <strong style={{ color: '#457b9d' }}>Minimum/Vet players</strong> are tightly
            packed at lower PER, while{' '}
            <strong style={{ color: '#e63946' }}>Superstars</strong> spread across a wide PER
            range.
          </p>
          <p>
            The <strong>Efficiency Surplus</strong> chart is the payoff: players above the
            dashed zero line outperform their contract, those below underperform.{' '}
            <strong style={{ color: '#4ade80' }}>STEAL</strong> players (dark green) cluster
            well above zero even at varying salaries, while{' '}
            <strong style={{ color: '#f87171' }}>WAY Overpaid</strong> players (red) sink well
            below — regardless of how much they earn. This visualization directly powered the
            player rankings in the next section.
          </p>
        </div>

        <div className="dashboard-frame">
          <div className="dashboard-label">
            <div className="dot"></div>
            <span>Live Dashboard — Tableau Public (Project 2: Salary Efficiency)</span>
          </div>
          <iframe
            src="https://public.tableau.com/views/Project2-1_17762938665760/Dashboard1?:embed=y&:showVizHome=no&:display_count=no&:toolbar=yes"
            loading="lazy"
            title="NBA Salary Efficiency Dashboard"
          />
        </div>
      </div>
    </section>
  )
}
