import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const PROJECTS = [
  {
    id: "raymond",
    title: "Raymond Clone",
    img: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=1200&h=800&fit=crop",
    description:
      "Pixel-perfect clone with responsive layouts and interactive UI.",
    tags: ["HTML/CSS", "JavaScript", "Clone"],
    live: "#",
    code: "#",
  },
  {
    id: "campus",
    title: "Campus Website Clone",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop",
    description:
      "Educational website clone with clean layouts and mobile-first design.",
    tags: ["HTML/CSS", "JavaScript", "Clone"],
    live: "#",
    code: "#",
  },
  {
    id: "snapdeal",
    title: "Snapdeal Clone",
    img: "/snapdeal.jpg",
    description:
      "E-commerce clone with product listing mockups and cart layout.",
    tags: ["E-commerce", "HTML/CSS"],
    live: "#",
    code: "#",
  },
  {
    id: "nike",
    title: "Nike Clone",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=800&fit=crop",
    description:
      "Brand site clone with dynamic product showcase and animations.",
    tags: ["HTML/CSS", "JavaScript"],
    live: "#",
    code: "#",
  },
  {
    id: "gozoop",
    title: "Gozoop Clone",
    img: "/Goozoop.jpg",
    description: "Agency-style clone with smooth scrolling and layout polish.",
    tags: ["HTML/CSS", "JavaScript"],
    live: "#",
    code: "#",
  },
  {
    id: "travel",
    title: "Traveling Website Clone",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop",
    description: "Travel booking UI mock with galleries and CTAs.",
    tags: ["Travel", "HTML/CSS"],
    live: "#",
    code: "#",
  },

  // Placeholder / slot for CODE projects (leave space to add real code projects later)
  {
    id: "code-placeholder",
    title: "Code Projects (coming)",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
    description:
      "This area will showcase my code projects (React apps, APIs, challenges). I'll add live links and GitHub repos here soon.",
    tags: ["Code", "React", "APIs"],
    live: "#",
    code: "#",
    placeholder: true,
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2>Featured Projects</h2>
          <p>Website clones showcasing my development and UI/UX skills</p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.id} className={`project-card ${p.placeholder ? "placeholder" : ""}`}>
              <button
                type="button"
                className="project-thumb"
                onClick={() => setActive(p)}
                aria-haspopup="dialog"
                aria-label={`Open ${p.title}`}
              >
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url('${p.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </button>

              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <button className="project-link" onClick={() => setActive(p)}>
                    → View Details
                  </button>

                  {!p.placeholder && (
                    <>
                      <a href={p.live} className="project-link" target="_blank" rel="noreferrer">
                        Live
                      </a>
                      <a href={p.code} className="project-link" target="_blank" rel="noreferrer">
                        Code
                      </a>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {mounted && active && createPortal(
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-${active.id}`}
          onClick={(e) => {
            if (e.target.classList.contains("modal-overlay")) setActive(null);
          }}
        >
          <div className="modal-content">
            <button className="modal-close" aria-label="Close" onClick={() => setActive(null)}>
              ×
            </button>

            <div className="modal-body">
              <div
                className="modal-image"
                style={{ backgroundImage: `url('${active.img}')` }}
                aria-hidden
              />
              <div className="modal-meta">
                <h3 id={`modal-${active.id}`}>{active.title}</h3>
                <p>{active.description}</p>

                <div className="project-tags" style={{ marginTop: 10 }}>
                  {active.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div style={{ marginTop: 14 }}>
                  {!active.placeholder ? (
                    <>
                      <a href={active.live} className="btn" target="_blank" rel="noreferrer">View Live</a>
                      <a href={active.code} className="btn ghost" target="_blank" rel="noreferrer" style={{ marginLeft: 10 }}>View Code</a>
                    </>
                  ) : (
                    <div className="placeholder-note">
                      Space reserved for code projects — I will add live demos and GitHub links here.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
