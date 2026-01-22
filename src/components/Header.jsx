import { useState } from 'react'

function Header({ sections, activeSection, setActiveSection, controlsRef }) {
  const [autoRotate, setAutoRotate] = useState(true)

  const handleZoomIn = () => {
    if (controlsRef.current) {
      const camera = controlsRef.current.object
      camera.position.z = Math.max(camera.position.z - 0.5, 2)
    }
  }

  const handleZoomOut = () => {
    if (controlsRef.current) {
      const camera = controlsRef.current.object
      camera.position.z = Math.min(camera.position.z + 0.5, 10)
    }
  }

  const handleResetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">🌎</span>
        <span className="logo-text">Earth 3D</span>
      </div>
      
      {/* Earth Controls */}
      <div className="earth-controls">
        <button className="control-btn" onClick={handleZoomIn} title="Zoom In">
          🔍+
        </button>
        <button className="control-btn" onClick={handleZoomOut} title="Zoom Out">
          🔍−
        </button>
        <button 
          className={`control-btn ${autoRotate ? 'active' : ''}`} 
          onClick={() => setAutoRotate(!autoRotate)}
          title="Toggle Auto Rotation"
        >
          🔄
        </button>
        <button className="control-btn" onClick={handleResetView} title="Reset View">
          🎯
        </button>
      </div>
      
      <nav className="nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.icon} {section.title}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
