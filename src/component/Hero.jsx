export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">👋 Welcome to my portfolio</span>
            <h1>
              Hello, I'm <span className="name">Irfan Shaikh</span>
            </h1>
            <p className="tagline">Web Developer & AI/ML Enthusiast</p>
            <p>
              A passionate beginner building real-world projects and exploring the
              intersection of web development and artificial intelligence. Based
              in India, I'm on a journey to create meaningful digital
              experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Skills</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Learning</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-wrapper">
              <div
                className="profile-placeholder"
                style={{
                  backgroundImage: "url('IRFANSSSSS.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
