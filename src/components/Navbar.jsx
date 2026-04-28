import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { id: 'problem', label: 'The Problem' },
  { id: 'data', label: 'Data' },
  { id: 'project1', label: 'Performance' },
  { id: 'project2', label: 'Salary' },
  { id: 'steals', label: 'Steals' },
  { id: 'findings', label: 'Findings' },
  { id: 'tools', label: 'Tech' },
  { id: 'compare', label: 'Compare' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <div className="logo-icon">{'\uD83C\uDFC0'}</div>
          <span className="logo-text">NBA Analytics</span>
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
