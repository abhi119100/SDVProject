import useInView from '../hooks/useInView'

const tools = [
  {
    name: 'Python',
    description:
      'Core language for data wrangling, statistical analysis, and regression modeling. Pandas, NumPy, and scikit-learn power the analytical pipeline.',
  },
  {
    name: 'Matplotlib / Seaborn',
    description:
      'Static visualization workhorses for scatter plots, box plots, heatmaps, and regression overlays during the exploratory phase.',
  },
  {
    name: 'Tableau',
    description:
      'Interactive dashboard platform for exploring PER distributions, salary breakdowns, and team-level comparisons with drill-down filtering.',
  },
  {
    name: 'Power BI',
    description:
      'Secondary dashboard tool for cross-referencing findings with DAX-calculated measures and organizational KPI views.',
  },
  {
    name: 'Plotly',
    description:
      'Web-based interactive charts for salary-vs-PER scatter plots with hover details, trend lines, and exportable HTML embeds.',
  },
  {
    name: 'React / Vite / JS',
    description:
      'Modern front-end stack for this presentation site. Vite provides fast builds and HMR; React enables component-driven UI with scroll animations.',
  },
]

export default function ToolsSection() {
  const [ref, isVisible] = useInView()
  const [ref2, isVisible2] = useInView()

  return (
    <section id="tools">
      <div className="section-court-bg" />

      <div ref={ref} className={`container fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="section-label">Technology</div>
        <h2 className="section-title">Tools & Technologies</h2>
        <p className="section-subtitle">
          The tech stack behind the analysis{'\u2014'}from data collection to final presentation.
        </p>

        <div className="tools-grid">
          {tools.map((tool) => (
            <div className="tool-card" key={tool.name}>
              <h4>{tool.name}</h4>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div ref={ref2} className={`container fade-in ${isVisible2 ? 'visible' : ''}`} style={{ marginTop: '2rem' }}>
        <div className="story-block">
          <h3>Data Flow Summary</h3>
          <p>
            Raw stats scraped from Basketball Reference {'\u2192'} cleaned and merged with salary
            data in Python {'\u2192'} exploratory analysis with Matplotlib and Seaborn {'\u2192'}{' '}
            interactive dashboards in Tableau, Power BI, and Plotly {'\u2192'} final presentation
            built with React and Vite.
          </p>
          <p>
            Each tool plays a specific role: Python handles the heavy lifting, visualization
            libraries surface patterns, and the web stack delivers the narrative to the audience.
          </p>
        </div>
      </div>
    </section>
  )
}
