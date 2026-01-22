import { useState, useEffect } from 'react'

function ScrollHint() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="scroll-hint">
      <div className="scroll-hint-content">
        <span className="scroll-hint-icon">👇</span>
        <p className="scroll-hint-text">Scroll down to explore more</p>
        <p className="scroll-hint-subtext">Move cursor to center area to scroll</p>
      </div>
    </div>
  )
}

export default ScrollHint
