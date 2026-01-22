function InfoPanel({ sections, activeSection }) {
  return (
    <div className="info-panel">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`info-card ${activeSection === section.id ? 'active' : ''}`}
        >
          <div className="info-icon">{section.icon}</div>
          <h2 className="info-title">{section.title}</h2>
          <p className="info-description">{section.description}</p>
        </div>
      ))}
    </div>
  )
}

export default InfoPanel
