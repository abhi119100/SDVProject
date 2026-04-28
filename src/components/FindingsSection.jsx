import useInView from '../hooks/useInView'

const insights = [
  {
    icon: '\uD83C\uDFC6',
    iconClass: 'steal',
    title: 'SGA \u2014 Best Value in the NBA',
    description:
      'Shai Gilgeous-Alexander delivers a PER of 30.7 on a $35.86M salary, producing a surplus of +12.01 over his expected output. The league\u2019s most efficient contract.',
    img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628983.png',
  },
  {
    icon: '\uD83C\uDF1F',
    iconClass: 'steal',
    title: 'Rookie-Scale Goldmine',
    description:
      'Players on rookie-scale contracts ($3M\u2013$15M) consistently outperform their salary expectations. Wembanyama, Mobley, and \u015Eeng\u00FCn all deliver elite value at a fraction of max-contract cost.',
    img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1641705.png',
  },
  {
    icon: '\u26A1',
    iconClass: 'team',
    title: 'OKC \u2014 Smartest Spenders',
    description:
      'Oklahoma City leads the league in salary efficiency, boasting SGA and multiple young contributors on team-friendly deals. Their front office has maximized value per dollar.',
    img: 'https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg',
  },
  {
    icon: '\uD83D\uDCC9',
    iconClass: 'overpaid',
    title: 'Washington \u2014 Worst ROI',
    description:
      'The Wizards rank last in salary efficiency, paying premium prices for below-average production. Multiple high-salary players fail to meet even baseline performance expectations.',
    img: 'https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg',
  },
  {
    icon: '\uD83C\uDFAF',
    iconClass: 'metric',
    title: 'Centers Dominate Value',
    description:
      'Centers produce the highest average PER surplus across all positions. The combination of efficient two-point scoring and rebounding makes them the most valuable per-dollar position.',
  },
  {
    icon: '\uD83D\uDCB0',
    iconClass: 'overpaid',
    title: 'Max Contracts \u2260 Max Value',
    description:
      'Only 40% of max-contract players deliver positive PER surplus. The remaining 60% underperform their expected output relative to salary, suggesting teams over-invest in star power.',
  },
]

export default function FindingsSection() {
  const [ref, isVisible] = useInView()
  const [ref2, isVisible2] = useInView()

  return (
    <section id="findings">
      <div className="section-court-bg" />

      <div ref={ref} className={`container fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="section-label">Chapter 5</div>
        <h2 className="section-title">Key Discoveries</h2>
        <p className="section-subtitle">
          The insights that emerge when performance data meets salary data {"\u2014"} revealing the true value landscape of the NBA.
        </p>

        <div className="insights-grid">
          {insights.map((item) => (
            <div className="insight-card" key={item.title}>
              {item.img && (
                <img
                  className="insight-card-img"
                  src={item.img}
                  alt=""
                  loading="lazy"
                />
              )}
              <div className={`insight-icon ${item.iconClass}`}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div ref={ref2} className={`container fade-in ${isVisible2 ? 'visible' : ''}`} style={{ marginTop: '3rem' }}>
        <div className="story-block">
          <h3>The Bottom Line</h3>
          <p>
            Higher salary does predict higher PER {"\u2014"} but only weakly. The polynomial model explains limited variance (R{"\u00B2"} {"\u2248"} 0.25), meaning <strong>75% of a player{"'"}s efficiency is NOT explained by their salary</strong>. Teams that identify this gap early gain a significant competitive advantage.
          </p>
          <p>
            The {"\u201C"}sweet spot{"\u201D"} for value is the <strong>$3M{"\u2013"}$15M salary range</strong>, where many role players and young stars dramatically outperform expectations. The superstar tier ($25M+) is a high-risk, high-variance bet.
          </p>
        </div>
      </div>
    </section>
  )
}
