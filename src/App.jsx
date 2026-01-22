import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import EarthCanvas from './components/EarthCanvas'
import InfoPanel from './components/InfoPanel'
import ControlsGuide from './components/ControlsGuide'
import ScrollHint from './components/ScrollHint'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('explore')
  const [autoRotate] = useState(true)
  const [rotationSpeed] = useState(0.002)
  const controlsRef = useRef()

  const sections = [
    { 
      id: 'explore', 
      title: 'Explore Earth', 
      description: 'Discover the beauty of our planet in stunning 3D. Rotate, zoom, and explore every detail.',
      icon: '🌍'
    },
    { 
      id: 'about', 
      title: 'About Our Planet', 
      description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
      icon: '🌏'
    },
    { 
      id: 'stats', 
      title: 'Earth Statistics', 
      description: 'Diameter: 12,742 km • Mass: 5.97 × 10²⁴ kg • Distance from Sun: 149.6 million km',
      icon: '📊'
    },
    { 
      id: 'conservation', 
      title: 'Conservation', 
      description: 'Protecting our planet for future generations. Every action counts in preserving Earth\'s beauty.',
      icon: '�'
    }
  ]

  return (
    <div className="app-container">
      <Header 
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        controlsRef={controlsRef}
      />

      <EarthCanvas 
        controlsRef={controlsRef}
        autoRotate={autoRotate}
        rotationSpeed={rotationSpeed}
      />

      <InfoPanel 
        sections={sections}
        activeSection={activeSection}
      />

      <ControlsGuide />

      <ScrollHint />

      <AboutSection />

      <ContactSection />

      <Footer />
    </div>
  )
}

export default App
