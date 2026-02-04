export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2>Featured Projects</h2>
          <p>Website clones showcasing my development and UI/UX skills</p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div
              className="project-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=800&h=600&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="project-content">
              <h3>Raymond Clone</h3>
              <p>
                Full-stack clone of Raymond's website with pixel-perfect design
                implementation, responsive layouts, and interactive features.
              </p>
              <div className="project-tags">
                <span className="tag">HTML/CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Clone</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <span>→ View Project</span>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div
              className="project-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="project-content">
              <h3>Campus Website Clone</h3>
              <p>
                Complete educational website clone replicating modern campus
                design with clean layouts and responsive functionality.
              </p>
              <div className="project-tags">
                <span className="tag">HTML/CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Clone</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <span>→ View Project</span>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: "url('snapdeal.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className="project-content">
              <h3>Snapdeal Clone</h3>
              <p>
                E-commerce platform clone featuring product listings, shopping
                cart functionality, and responsive design implementation.
              </p>
              <div className="project-tags">
                <span className="tag">E-commerce</span>
                <span className="tag">HTML/CSS</span>
                <span className="tag">Clone</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <span>→ View Project</span>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div
              className="project-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="project-content">
              <h3>Nike Clone</h3>
              <p>
                Sports brand website clone featuring bold design, dynamic
                product showcases, and smooth animations.
              </p>
              <div className="project-tags">
                <span className="tag">HTML/CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Clone</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <span>→ View Project</span>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: "url('Goozoop.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className="project-content">
              <h3>Gozoop Clone</h3>
              <p>
                Agency website clone with modern aesthetics, smooth scrolling
                effects, and engaging visual layouts.
              </p>
              <div className="project-tags">
                <span className="tag">HTML/CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Clone</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <span>→ View Project</span>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div
              className="project-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="project-content">
              <h3>Traveling Website Clone</h3>
              <p>
                Travel website clone featuring booking interfaces, destination
                galleries, and responsive mobile-first design.
              </p>
              <div className="project-tags">
                <span className="tag">Travel</span>
                <span className="tag">HTML/CSS</span>
                <span className="tag">Clone</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <span>→ View Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
