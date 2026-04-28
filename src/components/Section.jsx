import useInView from '../hooks/useInView'

export default function Section({ id, className = '', children, animate = 'fade-in' }) {
  const [ref, isVisible] = useInView()
  return (
    <section id={id} className={className}>
      <div ref={ref} className={`container ${animate} ${isVisible ? 'visible' : ''}`}>
        {children}
      </div>
    </section>
  )
}
