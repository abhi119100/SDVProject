import useInView from '../hooks/useInView'
import PlayerCard from './PlayerCard'

const TEAM_LOGO = (id) => `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`

const steals = [
  {
    rank: 1, name: 'Shai Gilgeous-Alexander', team: 'OKC', pos: 'PG',
    salary: '$35.86M', per: 30.7, expected: 18.69, surplus: '+12.01',
    label: "\uD83C\uDFC6 LEAGUE'S BEST VALUE", playerId: 1628983,
    teamLogo: TEAM_LOGO(1610612760),
  },
  {
    rank: 2, name: 'Nikola Joki\u0107', team: 'DEN', pos: 'C',
    salary: '$51.42M', per: 32.0, expected: 21.40, surplus: '+10.60',
    label: '\uD83C\uDFC6 HIGHEST PER IN NBA', playerId: 203999,
    teamLogo: TEAM_LOGO(1610612743),
  },
  {
    rank: 5, name: 'Giannis Antetokounmpo', team: 'MIL', pos: 'PF',
    salary: '$48.79M', per: 30.5, expected: 20.94, surplus: '+9.56',
    label: '\uD83C\uDFC6 SUPERSTAR VALUE', playerId: 203507,
    teamLogo: TEAM_LOGO(1610612749),
  },
]

const risers = [
  {
    rank: 6, name: 'Victor Wembanyama', team: 'SAS', pos: 'C',
    salary: '$12.77M', per: 24.2, expected: 14.79, surplus: '+9.41',
    label: '\uD83D\uDE80 ROOKIE SCALE GEM', playerId: 1641705,
    teamLogo: TEAM_LOGO(1610612759),
  },
  {
    rank: 9, name: 'Evan Mobley', team: 'CLE', pos: 'PF',
    salary: '$11.23M', per: 22.3, expected: 14.53, surplus: '+7.77',
    label: '\uD83D\uDE80 ELITE ROLE PLAYER', playerId: 1630596,
    teamLogo: TEAM_LOGO(1610612739),
  },
  {
    rank: 8, name: 'Alperen \u015Eeng\u00FCn', team: 'HOU', pos: 'C',
    salary: '$5.42M', per: 21.4, expected: 13.57, surplus: '+7.83',
    label: '\uD83D\uDE80 BARGAIN CENTER', playerId: 1630578,
    teamLogo: TEAM_LOGO(1610612745),
  },
]

const overpaid = [
  {
    name: 'Fred VanVleet', team: 'HOU', pos: 'PG',
    salary: '$42.85M', per: 12.8, expected: 19.90, surplus: '\u22127.10',
    label: '\u26A0 WAY OVERPAID', playerId: 1627832,
    teamLogo: TEAM_LOGO(1610612745),
  },
  {
    name: 'Jerami Grant', team: 'POR', pos: 'PF',
    salary: '$29.79M', per: 10.9, expected: 17.65, surplus: '\u22126.75',
    label: '\u26A0 WAY OVERPAID', playerId: 203924,
    teamLogo: TEAM_LOGO(1610612757),
  },
  {
    name: 'Gabe Vincent', team: 'LAL', pos: 'PG',
    salary: '$11.00M', per: 7.4, expected: 14.49, surplus: '\u22127.09',
    label: '\u26A0 WAY OVERPAID', playerId: 1629216,
    teamLogo: TEAM_LOGO(1610612747),
  },
]

export default function StealsSection() {
  const [ref, isVisible] = useInView()
  const [ref2, isVisible2] = useInView()
  const [ref3, isVisible3] = useInView()

  return (
    <section id="steals">
      <div className="section-court-bg" />

      <div ref={ref} className={`container fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="section-label">Top Performers</div>
        <h2 className="section-title">The Biggest Steals in the NBA</h2>
        <p className="section-subtitle">Players massively outperforming their contracts {"\u2014"} the smartest money in basketball.</p>

        <div className="spotlight-grid">
          {steals.map((p) => (
            <PlayerCard key={p.playerId} {...p} type="steal" />
          ))}
        </div>
      </div>

      <div ref={ref2} className={`container fade-in ${isVisible2 ? 'visible' : ''}`} style={{ marginTop: '3rem' }}>
        <h3
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: '1.4rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
{'\u2B50'} Rising Stars & Hidden Gems
        </h3>

        <div className="spotlight-grid">
          {risers.map((p) => (
            <PlayerCard key={p.playerId} {...p} type="steal" />
          ))}
        </div>
      </div>

      <div ref={ref3} className={`container fade-in ${isVisible3 ? 'visible' : ''}`} style={{ marginTop: '3rem' }}>
        <h3
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: '1.4rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            color: 'var(--red)',
          }}
        >
{'\u26A0'} Most Overpaid Contracts
        </h3>

        <div className="spotlight-grid">
          {overpaid.map((p) => (
            <PlayerCard key={p.playerId} {...p} type="overpaid" />
          ))}
        </div>
      </div>
    </section>
  )
}
