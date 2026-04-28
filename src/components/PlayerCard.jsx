import useInView from '../hooks/useInView'

export default function PlayerCard({
  rank,
  name,
  team,
  teamLogo,
  playerId,
  pos,
  salary,
  per,
  expected,
  surplus,
  label,
  type,
}) {
  const [ref, isVisible] = useInView()
  const isSteal = type === 'steal'

  return (
    <div ref={ref} className={`player-card fade-in ${isVisible ? 'visible' : ''}`}>
      <div className={`player-card-header ${isSteal ? 'steal-bg' : 'overpaid-bg'}`}>
        <img
          className="player-card-team-logo"
          src={teamLogo}
          alt={`${team} logo`}
          loading="lazy"
        />
        {rank && <div className="player-card-rank">#{rank}</div>}
        <img
          className="headshot"
          src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`}
          alt={name}
          loading="lazy"
        />
      </div>

      <div className="player-card-body">
        <div className="player-card-name">{name}</div>
        <div className="player-card-meta">
          <span>{team}</span>
          <span className="pos-badge">{pos}</span>
          <span>{salary}</span>
        </div>

        <div className="player-card-stats">
          <div className="player-card-stat">
            <span className="pcs-val">{per}</span>
            <span className="pcs-label">PER</span>
          </div>
          <div className="player-card-stat">
            <span className="pcs-val">{expected}</span>
            <span className="pcs-label">Expected</span>
          </div>
          <div className="player-card-stat">
            <span className={`pcs-val ${isSteal ? 'green' : 'red'}`}>{surplus}</span>
            <span className="pcs-label">Surplus</span>
          </div>
        </div>

        <div className={`player-card-surplus ${isSteal ? 'steal' : 'overpaid'}`}>
          {label}
        </div>
      </div>
    </div>
  )
}
