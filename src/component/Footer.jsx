export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Irfan Shaikh</h3>
              <p>
                A passionate beginner Web Developer and AI &amp; ML Student from
                India, building real-world projects and exploring the future of
                technology.
              </p>
              <div className="footer-social">
                <a href="https://github.com/i2992035-arch" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/irfan-shaikh-24a459379" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/irf.anshaikh1" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg" alt="Instagram" />
                </a>
                <a href="mailto:irfanshaikh@example.com" className="social-icon" aria-label="Email">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><a href="#education">Education</a></li>
                <li><a href="#certificates">Certificates</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://github.com/i2992035-arch" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul className="footer-links">
                <li><a href="https://www.linkedin.com/in/irfan-shaikh-24a459379" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/irf.anshaikh1" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="mailto:irfanshaikh@example.com">Email Me</a></li>
                <li><a href="#contact">Get in Touch</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Irfan Shaikh. All rights reserved. Built with passion.</p>
            <ul className="footer-bottom-links">
              <li><a href="#hero">Privacy Policy</a></li>
              <li><a href="#hero">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
