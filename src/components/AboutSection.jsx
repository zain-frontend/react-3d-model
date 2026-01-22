function AboutSection() {
  return (
    <section className="about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Earth 3D Explorer</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-card">
            <div className="about-icon">🚀</div>
            <h3>Our Mission</h3>
            <p>
              To provide an immersive, interactive experience that brings the beauty and wonder 
              of our planet to everyone. Through cutting-edge 3D technology, we make Earth 
              exploration accessible to all.
            </p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">🌐</div>
            <h3>Technology</h3>
            <p>
              Built with React Three Fiber and WebGL, our platform delivers stunning 
              real-time 3D graphics directly in your browser. No plugins or downloads required.
            </p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">🎓</div>
            <h3>Education</h3>
            <p>
              Perfect for students, educators, and space enthusiasts. Explore Earth's 
              geography, learn about our planet, and inspire the next generation of explorers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
