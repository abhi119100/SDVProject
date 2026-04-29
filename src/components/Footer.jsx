export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-col footer-about">
          <div className="footer-logo">
            <span className="footer-logo-icon">{'\uD83C\uDFC0'}</span>
            <span className="footer-logo-text">NBA Analytics</span>
          </div>
          <p>
            A data-driven analysis of NBA player salaries vs. on-court
            performance for the 2024-25 season. Built to surface the players
            delivering the most value per dollar.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#problem">The Problem</a></li>
            <li><a href="#data">Data Pipeline</a></li>
            <li><a href="#project1">Performance Analysis</a></li>
            <li><a href="#project2">Salary Efficiency</a></li>
            <li><a href="#findings">Key Discoveries</a></li>
            <li><a href="#compare">Player Comparison</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Dashboards</h4>
          <ul>
            <li>
              <a href="https://public.tableau.com/app/profile/abhijit.sappidi/viz/Project1_17753948677050/Dashboard1?publish=yes" target="_blank" rel="noopener noreferrer">
                Tableau {'\u2014'} Performance
              </a>
            </li>
            <li>
              <a href="https://public.tableau.com/app/profile/abhijit.sappidi/viz/Project2-1_17762938665760/Dashboard1?publish=yes" target="_blank" rel="noopener noreferrer">
                Tableau {'\u2014'} Salary
              </a>
            </li>
            <li>
              <a href={`${import.meta.env.BASE_URL}nba_salary_dashboard.html`} target="_blank" rel="noopener noreferrer">
                Plotly Dashboard
              </a>
            </li>
            <li>
              <a href="https://colab.research.google.com/drive/120LIrDY7E4Rv74QtGQCaO8xlsG3Kqzvd" target="_blank" rel="noopener noreferrer">
                Google Colab Notebook
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="https://github.com/abhi119100" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abhijit-sappidi/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/abhi119100/SDVProject" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </li>
          </ul>
          <h4 style={{ marginTop: '1.25rem' }}>Data Sources</h4>
          <ul>
            <li>
              <a href="https://www.kaggle.com/datasets/ratin21/nba-player-stats-2024-25-per-game" target="_blank" rel="noopener noreferrer">
                Kaggle {'\u2014'} Player Stats
              </a>
            </li>
            <li>
              <a href="https://www.kaggle.com/datasets/ratin21/nba-player-salaries-2024-25" target="_blank" rel="noopener noreferrer">
                Kaggle {'\u2014'} Salaries
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Abhijit Sappidi. All rights reserved.</p>
        <p>
          Built with React + Vite {'\u00B7'} University of North Texas {'\u00B7'} 2024-25 NBA Season
        </p>
      </div>
    </footer>
  )
}
