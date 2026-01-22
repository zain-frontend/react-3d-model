function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="footer-logo-icon">🌎</span>
            <span className="footer-logo-text">Earth 3D</span>
          </div>
          <p className="footer-description">
            Explore our planet in stunning 3D. An immersive experience for 
            education and discovery.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#explore">Explore Earth</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#api">API</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#twitter" className="social-link" title="Twitter">🐦</a>
            <a href="#facebook" className="social-link" title="Facebook">📘</a>
            <a href="#instagram" className="social-link" title="Instagram">📷</a>
            <a href="#github" className="social-link" title="GitHub">💻</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Earth 3D Explorer • All Rights Reserved • Made with ❤️ for Earth</p>
      </div>
    </footer>
  )
}

export default Footer
