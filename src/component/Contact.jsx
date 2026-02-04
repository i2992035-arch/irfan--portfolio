export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2>Get In Touch</h2>
          <p className="contact-text">Feel free to reach out for collaborations, opportunities, or just a friendly hello</p>
        </div>
        <div className="contact-grid">
          <a href="mailto:irfanshaikh@example.com" className="contact-card">
            <div className="contact-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" />
            </div>
            <h3>Email</h3>
            <p>irfanshaikh@example.com</p>
          </a>

          <a href="https://www.linkedin.com/in/irfan-shaikh-24a459379" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
            </div>
            <h3>LinkedIn</h3>
            <p>Irfan Shaikh</p>
          </a>

          <a href="https://www.instagram.com/irf.anshaikh1" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              {/* instagram svg removed for brevity in component; it's fine to keep an img or svg file instead */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRJtTIbYgQdbnXBoT-ENX9KBYiA1qzN_Usw&s" alt="Instagram" />
            </div>
            <h3>Instagram</h3>
            <p>@irf.anshaikh1</p>
          </a>

          <a href="https://github.com/i2992035-arch" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            </div>
            <h3>GitHub</h3>
            <p>i2992035-arch</p>
          </a>
        </div>
      </div>
    </section>
  );
}
