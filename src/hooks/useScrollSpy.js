import { useEffect, useState } from 'react'

export default function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop
        const height = el.offsetHeight
        if (scrollY >= top && scrollY < top + height) {
          setActiveId(id)
          return
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return activeId
}
