import useInView from '../hooks/useInView'

const links = [
  {
    icon: '\uD83C\uDFC0',
    label: 'Tableau \u2014 Project 1',
    href: 'https://public.tableau.com/app/profile/abhijit.sappidi/viz/Project1SDV/NBAPlayerPerformanceDashboard2024-25',
    colorClass: 'orange',
  },
  {
    icon: '\uD83D\uDCB0',
    label: 'Tableau \u2014 Project 2',
    href: 'https://public.tableau.com/app/profile/abhijit.sappidi/viz/Project2-1_17762938665760/Dashboard1',
    colorClass: 'blue',
  },
  {
    icon: '\uD83D\uDCCA',
    label: 'Plotly Dashboard',
    href: `${import.meta.env.BASE_URL}nba_salary_dashboard.html`,
    colorClass: 'teal',
  },
  {
    icon: '\uD83D\uDCD1',
    label: 'Google Colab Notebook',
    href: 'https://colab.research.google.com/drive/120LIrDY7E4Rv74QtGQCaO8xlsG3Kqzvd',
    colorClass: 'orange',
    style: { background: 'linear-gradient(135deg, #fbbf24, #f97316)' },
  },
]

export default function DashboardLinks() {
  const [ref, isVisible] = useInView()

  return (
    <section>
      <div ref={ref} className={`container fade-in ${isVisible ? 'visible' : ''}`} style={{ textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>
          Explore Further
        </div>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
          Interactive Dashboards
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
          View the full interactive dashboards on Tableau Public, or open the Plotly-powered salary efficiency dashboard.
        </p>

        <div className="cta-grid">
          {links.map((link) => (
            <a
              key={link.label}
              className={`cta-btn ${link.colorClass}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={link.style}
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
