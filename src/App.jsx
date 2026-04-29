import AuthorSection from './components/AuthorSection'
import DashboardLinks from './components/DashboardLinks'
import DataSection from './components/DataSection'
import FindingsSection from './components/FindingsSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LimitationsSection from './components/LimitationsSection'
import Navbar from './components/Navbar'
import PlayerComparison from './components/PlayerComparison'
import ProblemSection from './components/ProblemSection'
import Project1Section from './components/Project1Section'
import Project2Section from './components/Project2Section'
import StealsSection from './components/StealsSection'
import Ticker from './components/Ticker'
import ToolsSection from './components/ToolsSection'
import useScrollSpy from './hooks/useScrollSpy'

const SECTION_IDS = ['problem', 'data', 'project1', 'project2', 'steals', 'findings', 'compare', 'tools']

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS)

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <Ticker />

      <div className="divider" />
      <ProblemSection />

      <div className="divider" />
      <DataSection />

      <div className="divider" />
      <Project1Section />

      <div className="divider" />
      <Project2Section />

      <div className="divider" />
      <StealsSection />

      <div className="divider" />
      <FindingsSection />

      <div className="divider" />
      <PlayerComparison />

      <div className="divider" />
      <LimitationsSection />

      <div className="divider" />
      <ToolsSection />

      <div className="divider" />
      <DashboardLinks />

      <div className="divider" />
      <AuthorSection />

      <Footer />
    </>
  )
}
