export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who I Am</span>
          <h2>About Me</h2>
          <p>Get to know more about my journey and what drives me</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a beginner student building my skillset and exploring the vast
              landscape of web development and artificial intelligence. My
              journey started with curiosity and has evolved into a serious
              pursuit of creating meaningful digital experiences.
            </p>
            <p>
              Currently, I am developing my abilities in building websites from
              scratch, learning new design principles, and diving into the world
              of AI &amp; Machine Learning. I believe in learning through
              projects and hands-on experience.
            </p>
            <p>
              My goal is to leverage the intersection of web development and
              machine learning to build innovative solutions. I believe in
              learning by doing, which is why I constantly work on projects
              that challenge my understanding and expand my capabilities.
            </p>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <div className="about-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg" alt="Web Dev" />
              </div>
              <h3>Web Development</h3>
              <p>
                Building responsive and modern web applications with clean code
                and intuitive design
              </p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="AI/ML" />
              </div>
              <h3>AI & ML</h3>
              <p>Exploring machine learning fundamentals and their practical applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
