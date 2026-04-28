import { useEffect, useState } from 'react'

export default function useCounter(target, isVisible) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isVisible || !target) return
    let current = 0
    const step = Math.max(1, Math.floor(target / 60))
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      setValue(current)
    }, 20)
    return () => clearInterval(timer)
  }, [isVisible, target])

  return value
}
