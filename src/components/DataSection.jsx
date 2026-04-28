import useInView from '../hooks/useInView'

export default function DataSection() {
  const [containerRef, containerVisible] = useInView()
  const [leftRef, leftVisible] = useInView()
  const [rightRef, rightVisible] = useInView()
  const [cleanRef, cleanVisible] = useInView()

  return (
    <section id="data">
      <div ref={containerRef} className={`container fade-in ${containerVisible ? 'visible' : ''}`}>
        <div className="section-label">Chapter 2</div>
        <h2 className="section-title">The Data Pipeline</h2>
        <p className="section-subtitle">
          From raw Kaggle CSVs to cleaned, merged, and enriched datasets ready for
          visualization and analysis.
        </p>

        <div className="pipeline">
          <div className="pipeline-step">
            <div className="pipeline-node">Kaggle CSVs</div>
            <span className="pipeline-arrow">{'\u279C'}</span>
          </div>
          <div className="pipeline-step">
            <div className="pipeline-node">Google Colab</div>
            <span className="pipeline-arrow">{'\u279C'}</span>
          </div>
          <div className="pipeline-step">
            <div className="pipeline-node active">Data Cleaning</div>
            <span className="pipeline-arrow">{'\u279C'}</span>
          </div>
          <div className="pipeline-step">
            <div className="pipeline-node">Merge & Enrich</div>
            <span className="pipeline-arrow">{'\u279C'}</span>
          </div>
          <div className="pipeline-step">
            <div className="pipeline-node active">Dashboards</div>
          </div>
        </div>

        <div className="insights-grid" style={{ marginTop: '2.5rem' }}>
          <div
            ref={leftRef}
            className={`story-block slide-left ${leftVisible ? 'visible' : ''}`}
            style={{ margin: 0 }}
          >
            <h3>{'\u{1F4CA}'} Dataset 1: Player Stats</h3>
            <p><strong>Source:</strong> Kaggle (ratin21) — NBA Player Stats 2024-25 Per Game</p>
            <p><strong>Size:</strong> 735 rows × 30+ columns (raw)</p>
            <p>
              <strong>Key columns:</strong> Player, Pos, Team, Age, G, PTS, TRB, AST, STL,
              BLK, FG%, 3P%, FT%, PER, USG%
            </p>
          </div>
          <div
            ref={rightRef}
            className={`story-block slide-right ${rightVisible ? 'visible' : ''}`}
            style={{ margin: 0 }}
          >
            <h3>{'\u{1F4B0}'} Dataset 2: Player Salaries</h3>
            <p><strong>Source:</strong> Kaggle (ratin21) — NBA Player Salaries 2024-25</p>
            <p><strong>Size:</strong> ~500 rows × 5 columns</p>
            <p><strong>Key columns:</strong> Player, Team, Salary ($), Contract Year</p>
          </div>
        </div>

        <div
          ref={cleanRef}
          className={`story-block fade-in ${cleanVisible ? 'visible' : ''}`}
          style={{ marginTop: '2rem' }}
        >
          <h3>Data Cleaning Process</h3>
          <p><strong>1.</strong> Handled traded players — kept TOT (Total) rows for full-season stats</p>
          <p><strong>2.</strong> Filtered for statistical significance: minimum 15 games played</p>
          <p><strong>3.</strong> Standardized positions to 5 categories: PG, SG, SF, PF, C</p>
          <p><strong>4.</strong> Converted all statistics to numeric format</p>
          <p><strong>5.</strong> Merged per-game stats with advanced metrics (PER, USG%)</p>
          <p><strong>6.</strong> Removed missing values and duplicates</p>
          <p
            style={{
              marginTop: '.75rem',
              color: 'var(--accent)',
              fontWeight: 700,
              fontFamily: "'Oswald', sans-serif",
              fontSize: '1rem',
              textTransform: 'uppercase',
            }}
          >
            Final cleaned dataset: 590 players × 32 attributes
          </p>
          <p style={{ marginTop: '.75rem' }}>
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
              {'\u{1F4D1}'} View Full Pipeline on Google Colab{' '}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
