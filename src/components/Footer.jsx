export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        CSCE 5320 {'\u00B7'} Scientific Data Visualization
      </div>
      <p style={{ marginTop: '.5rem' }}>
        Abhijit Sappidi {'\u00B7'} University of North Texas {'\u00B7'} 2024-25 NBA Season Analysis
      </p>
      <p style={{ marginTop: '.5rem' }}>
        Data:{' '}
        <a
          href="https://www.kaggle.com/datasets/ratin21/nba-player-stats-2024-25-per-game"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kaggle {'\u2014'} NBA Player Stats
        </a>
        {' \u00B7 '}
        <a
          href="https://www.kaggle.com/datasets/ratin21/nba-player-salaries-2024-25"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kaggle {'\u2014'} NBA Salaries
        </a>
      </p>
    </footer>
  )
}
