const TICKER_ITEMS = [
  {
    img: 'https://cdn.nba.com/headshots/nba/latest/260x190/1628983.png',
    alt: 'SGA',
    name: 'SGA',
    label: 'Surplus',
    value: '+12.01',
    color: 't-green',
  },
  {
    img: 'https://cdn.nba.com/headshots/nba/latest/260x190/203999.png',
    alt: 'Jokic',
    name: 'Jokic',
    label: 'PER',
    value: '32.0',
    color: '',
  },
  {
    img: 'https://cdn.nba.com/headshots/nba/latest/260x190/203507.png',
    alt: 'Giannis',
    name: 'Giannis',
    label: 'Surplus',
    value: '+9.56',
    color: 't-green',
  },
  {
    img: 'https://cdn.nba.com/headshots/nba/latest/260x190/1641705.png',
    alt: 'Wemby',
    name: 'Wemby',
    label: 'PER',
    value: '24.2',
    color: '',
  },
  {
    img: 'https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg',
    alt: 'OKC',
    name: 'OKC',
    label: 'Team Surplus',
    value: '+2.22',
    color: 't-green',
  },
  {
    img: null,
    alt: '',
    name: 'Fred VanVleet',
    label: 'Surplus',
    value: '-7.10',
    color: 't-red',
  },
  {
    img: 'https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg',
    alt: 'WAS',
    name: 'WAS',
    label: 'Team Surplus',
    value: '-2.05',
    color: 't-red',
  },
  {
    img: null,
    alt: '',
    name: '\uD83C\uDFC0',
    label: 'PER \u2194 Scoring',
    value: 'r = 0.72',
    color: '',
  },
]

function TickerItem({ item }) {
  return (
    <div className="ticker-item">
      {item.img && <img src={item.img} alt={item.alt} />}
      <span>{item.name}</span>
      <span className="t-label">{item.label}</span>
      <span className={`t-value ${item.color}`}>{item.value}</span>
    </div>
  )
}

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {TICKER_ITEMS.map((item, i) => (
          <TickerItem key={`a-${i}`} item={item} />
        ))}
        {TICKER_ITEMS.map((item, i) => (
          <TickerItem key={`b-${i}`} item={item} />
        ))}
      </div>
    </div>
  )
}
