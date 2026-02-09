import React from "react";

export default function Skills() {
  const skills = [
    { id: "html", name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 90, details: ["Semantic HTML", "Accessibility (ARIA)", "Responsive forms", "SEO-friendly markup"] },
    { id: "css", name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 86, details: ["Flexbox & Grid", "Responsive layouts", "Animations & transitions"] },
    { id: "js", name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 80, details: ["ES6+", "Fetch / Async-Await", "DOM & events"] },
    { id: "figma", name: "UI/UX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 72, details: ["Wireframing", "Prototyping", "Design systems"] },
    { id: "wp", name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", level: 75, details: ["Theme customization", "Plugins", "Gutenberg"] },
    { id: "py", name: "Python / AI Basics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 60, details: ["Core Python", "numpy/pandas overview"] },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Know</span>
          <h2>My Skills</h2>
          <p>Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="skill-cards">
          {skills.map((s) => (
            <article key={s.id} className="skill-card" aria-labelledby={`skill-${s.id}`}>
              <div className="skill-card-head">
                <div className="icon-wrap" aria-hidden>
                  <img src={s.icon} alt="" className="skill-icon" />
                </div>

                <div className="skill-head-meta">
                  <h3 id={`skill-${s.id}`} className="skill-name">{s.name}</h3>
                  <div className="skill-score" aria-hidden>{s.level}%</div>
                </div>
              </div>

              <div
                className="progress"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={s.level}
                aria-label={`${s.name} proficiency ${s.level}%`}
              >
                <div className="progress-bar" style={{ width: `${s.level}%` }} />
              </div>

              <ul className="skill-list">
                {s.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}