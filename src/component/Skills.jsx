export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Know</span>
          <h2>My Skills</h2>
          <p>Technologies and tools I use to bring ideas to life</p>
        </div>
        <div className="skills-grid">
          <div className="skill-badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
            <span>HTML5</span>
          </div>
          <div className="skill-badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
            <span>CSS3</span>
          </div>
          <div className="skill-badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="skill-badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="UI/UX" />
            <span>UI/UX Design</span>
          </div>
          <div className="skill-badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" />
            <span>WordPress</span>
          </div>
          <div className="skill-badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="AI/ML" />
            <span>AI/ML Basics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
