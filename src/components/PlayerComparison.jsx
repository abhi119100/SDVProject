import { useState, useRef, useEffect } from 'react'
import useInView from '../hooks/useInView'
import players from '../data/players.json'

const FIELDS = ['PTS', 'REB', 'AST', 'PER', 'USG%', 'Salary']
const IDX = { name: 0, team: 1, pos: 2, pts: 3, reb: 4, ast: 5, per: 6, usg: 7, salary: 8, surplus: 9, label: 10 }

const MAXES = {
  PTS:     Math.max(...players.map(p => p[IDX.pts])),
  REB:     Math.max(...players.map(p => p[IDX.reb])),
  AST:     Math.max(...players.map(p => p[IDX.ast])),
  PER:     Math.max(...players.map(p => p[IDX.per])),
  'USG%':  Math.max(...players.map(p => p[IDX.usg])),
  Salary:  Math.max(...players.map(p => p[IDX.salary])),
}

function labelColor(label) {
  switch (label) {
    case 'STEAL':        return '#4ade80'
    case 'Undervalued':  return '#2a9d8f'
    case 'Fair Value':   return '#94a3b8'
    case 'Overpaid':     return '#f4a261'
    case 'WAY Overpaid': return '#f87171'
    default:             return '#94a3b8'
  }
}

function barWidth(value, max) {
  return `${Math.max((value / max) * 100, 4)}%`
}

function formatSalary(v) {
  return `$${v.toFixed(1)}M`
}

function formatSurplus(v) {
  return v >= 0 ? `+${v.toFixed(2)}` : v.toFixed(2)
}

function statValue(player, field) {
  switch (field) {
    case 'PTS':    return player[IDX.pts]
    case 'REB':    return player[IDX.reb]
    case 'AST':    return player[IDX.ast]
    case 'PER':    return player[IDX.per]
    case 'USG%':   return player[IDX.usg]
    case 'Salary': return player[IDX.salary]
    default:       return 0
  }
}

function displayValue(player, field) {
  const v = statValue(player, field)
  return field === 'Salary' ? formatSalary(v) : v.toFixed(1)
}

function Dropdown({ search, setSearch, selected, setSelected, showDropdown, setShowDropdown, wrapperRef }) {
  const filtered = players.filter(p =>
    p[IDX.name].toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div ref={wrapperRef} style={{ position: 'relative', flex: 1, minWidth: 220 }}>
      <input
        className="compare-input"
        placeholder="Search player..."
        value={selected ? selected[IDX.name] : search}
        onChange={e => {
          setSearch(e.target.value)
          setSelected(null)
          setShowDropdown(true)
        }}
        onFocus={() => { if (!selected) setShowDropdown(true) }}
      />
      {selected && (
        <button
          onClick={() => { setSelected(null); setSearch('') }}
          style={{
            position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: 'none', color: 'var(--text-dim)',
            cursor: 'pointer', fontSize: '1rem', lineHeight: 1,
          }}
          aria-label="Clear"
        >
          ✕
        </button>
      )}
      {showDropdown && !selected && search.length > 0 && filtered.length > 0 && (
        <div className="compare-dropdown">
          {filtered.slice(0, 8).map(p => (
            <div
              key={p[IDX.name]}
              className="compare-option"
              onClick={() => {
                setSelected(p)
                setSearch(p[IDX.name])
                setShowDropdown(false)
              }}
            >
              <strong>{p[IDX.name]}</strong> — {p[IDX.team]} · {p[IDX.pos]}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function PlayerComparison() {
  const [sectionRef, isVisible] = useInView()
  const [search1, setSearch1] = useState('')
  const [search2, setSearch2] = useState('')
  const [selected1, setSelected1] = useState(null)
  const [selected2, setSelected2] = useState(null)
  const [showDropdown1, setShowDropdown1] = useState(false)
  const [showDropdown2, setShowDropdown2] = useState(false)
  const wrap1 = useRef(null)
  const wrap2 = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (wrap1.current && !wrap1.current.contains(e.target)) setShowDropdown1(false)
      if (wrap2.current && !wrap2.current.contains(e.target)) setShowDropdown2(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const both = selected1 && selected2

  return (
    <section id="compare">
      <div ref={sectionRef} className={`container fade-in ${isVisible ? 'visible' : ''}`}>
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">Interactive</div>
          <h2 className="section-title">Player Comparison</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2.5rem' }}>
            Select two players to compare their stats, salary, and surplus value side-by-side.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <Dropdown
            search={search1} setSearch={setSearch1}
            selected={selected1} setSelected={setSelected1}
            showDropdown={showDropdown1} setShowDropdown={setShowDropdown1}
            wrapperRef={wrap1}
          />
          <span style={{
            alignSelf: 'center', fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: '1.1rem', color: 'var(--text-dim)', textTransform: 'uppercase',
          }}>
            vs
          </span>
          <Dropdown
            search={search2} setSearch={setSearch2}
            selected={selected2} setSelected={setSelected2}
            showDropdown={showDropdown2} setShowDropdown={setShowDropdown2}
            wrapperRef={wrap2}
          />
        </div>

        {both && (
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 20, padding: '2rem', overflow: 'hidden',
          }}>
            {/* Header */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem',
            }}>
              <PlayerHeader player={selected1} align="left" />
              <div style={{
                alignSelf: 'center', fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: '1.6rem', color: 'var(--text-dim)', textTransform: 'uppercase',
              }}>
                VS
              </div>
              <PlayerHeader player={selected2} align="right" />
            </div>

            {/* Stat Bars */}
            {FIELDS.map(field => {
              const v1 = statValue(selected1, field)
              const v2 = statValue(selected2, field)
              const higherIsWorse = field === 'Salary'
              const is1Better = higherIsWorse ? v1 < v2 : v1 > v2
              const is2Better = higherIsWorse ? v2 < v1 : v2 > v1

              return (
                <div key={field} style={{ marginBottom: '1.25rem' }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', marginBottom: 6,
                    fontSize: '.82rem', fontWeight: 600,
                  }}>
                    <span style={{ color: is1Better ? 'var(--green)' : 'var(--text-dim)' }}>
                      {displayValue(selected1, field)}
                    </span>
                    <span style={{
                      color: 'var(--text-muted)', fontFamily: "'Oswald', sans-serif",
                      textTransform: 'uppercase', letterSpacing: '.05em', fontSize: '.75rem',
                    }}>
                      {field}
                    </span>
                    <span style={{ color: is2Better ? 'var(--green)' : 'var(--text-dim)' }}>
                      {displayValue(selected2, field)}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 4, height: 10 }}>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                      <div style={{
                        width: barWidth(v1, MAXES[field]), height: '100%',
                        borderRadius: 5,
                        background: is1Better ? 'var(--green)' : 'rgba(100,116,139,.35)',
                        transition: 'width .4s ease',
                      }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        width: barWidth(v2, MAXES[field]), height: '100%',
                        borderRadius: 5,
                        background: is2Better ? 'var(--green)' : 'rgba(100,116,139,.35)',
                        transition: 'width .4s ease',
                      }} />
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Surplus */}
            <div style={{
              marginTop: '1.5rem', paddingTop: '1.25rem',
              borderTop: '1px solid var(--border)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontFamily: "'Oswald', sans-serif", fontSize: '1rem', fontWeight: 600,
            }}>
              <span style={{ color: labelColor(selected1[IDX.label]) }}>
                Surplus: {formatSurplus(selected1[IDX.surplus])}
              </span>
              <span style={{ color: 'var(--text-dim)', fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                Value Surplus
              </span>
              <span style={{ color: labelColor(selected2[IDX.label]) }}>
                Surplus: {formatSurplus(selected2[IDX.surplus])}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function PlayerHeader({ player, align }) {
  const isRight = align === 'right'
  return (
    <div style={{ textAlign: align, flex: 1, minWidth: 180 }}>
      <div style={{
        fontFamily: "'Oswald', sans-serif", fontSize: '1.4rem', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '.02em', marginBottom: 4,
      }}>
        {player[IDX.name]}
      </div>
      <div style={{
        fontSize: '.82rem', color: 'var(--text-dim)', marginBottom: 8,
        display: 'flex', gap: '.5rem', alignItems: 'center',
        justifyContent: isRight ? 'flex-end' : 'flex-start',
      }}>
        <span>{player[IDX.team]}</span>
        <span style={{
          background: 'rgba(249,115,22,.15)', color: 'var(--accent)',
          padding: '2px 8px', borderRadius: 4, fontWeight: 700, fontSize: '.72rem',
        }}>
          {player[IDX.pos]}
        </span>
      </div>
      <div style={{ fontSize: '.85rem', color: 'var(--text-muted)', marginBottom: 4 }}>
        {formatSalary(player[IDX.salary])}
      </div>
      <div style={{
        display: 'inline-block', padding: '3px 10px', borderRadius: 6,
        fontSize: '.75rem', fontWeight: 700,
        color: labelColor(player[IDX.label]),
        background: `${labelColor(player[IDX.label])}18`,
        border: `1px solid ${labelColor(player[IDX.label])}40`,
      }}>
        {player[IDX.label]}
      </div>
    </div>
  )
}
