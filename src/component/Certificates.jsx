import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const CERTIFICATES = [
  {
    id: 1,
    title: "AI FOR ALL",
    issuer: "IndiaAI",
    date: "2025",
    image: "/My_Certificate_IndiaAI.jpg",
    pdf: null,
  },
  {
    id: 2,
    title: "AI Aware Certificate",
    issuer: "AI Fluency Program",
    date: "2025",
    image: "/Irfan Shaikh_AI_AWARE_CERTIFICATE (1).png",
    pdf: null,
  },
  {
    id: 3,
    title: "AI Appreciate Certificate",
    issuer: "AI Fluency Program",
    date: "2025'",
    image: "/Irfan Shaikh_AI_APPRECIATE_CERTIFICATE.png",
    pdf: null,
  },
  {
    id: 4,
    title: "AI Fluency for Educators",
    issuer: "AI Fluency Program",
    date: "2025",
    image: "/AI Fluency for educators.jpg",
    pdf: "/AI Fluency for educators.pdf",
  },
  {
    id: 5,
    title: "AI Fluency for Nonprofits",
    issuer: "AI Fluency Program",
    date: "2025",
    image: "/AI Fluency for nonprofits.jpg",
    pdf: "/AI Fluency for nonprofits.pdf",
  },
  {
    id: 6,
    title: "AI Fluency for Students",
    issuer: "AI Fluency Program",
    date: "2025",
    image: "/AI Fluency for students.jpg",
    pdf: "/AI Fluency for students.pdf",
  },
  {
    id: 7,
    title: "AI Fluency Framework & Foundations",
    issuer: "AI Fluency Program",
    date: "2025",
    image: "/AI Fluency Framework & Foundations.jpg",
    pdf: "/AI Fluency Framework & Foundations.pdf",
  },
  {
    id: 8,
    title: "Claude 101",
    issuer: "Anthropic",
    date: "2025",
    image: "/Claude 101.jpg",
    pdf: "/Claude 101.pdf",
  },
  {
    id: 9,
    title: "Teaching AI Fluency",
    issuer: "AI Fluency Program",
    date: "2025",
    image: "/Teaching AI Fluency.jpg",
    pdf: "/Teaching AI Fluency.pdf",
  },
];

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActiveCert(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Achievements</span>
          <h2>Certificates</h2>
          <p>Professional certifications and achievements</p>
        </div>

        <div className="certificates-grid">
          {CERTIFICATES.map((cert) => (
            <article key={cert.id} className="certificate-card">
              <button
                type="button"
                className="certificate-image-wrapper"
                onClick={() => setActiveCert(cert)}
                aria-label={`View ${cert.title}`}
              >
                <div
                  className="certificate-image"
                  style={{
                    backgroundImage: `url('${cert.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                />
                <div className="certificate-overlay">
                  <span className="view-certificate">🔍 View Certificate</span>
                </div>
              </button>

              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-date">{cert.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {mounted && activeCert && createPortal(
        <div
          className="certificate-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`cert-modal-${activeCert.id}`}
          onClick={(e) => {
            if (e.target.classList.contains("certificate-modal-overlay")) setActiveCert(null);
          }}
        >
          <div className="certificate-modal-content">
            <button 
              className="certificate-modal-close" 
              aria-label="Close" 
              onClick={() => setActiveCert(null)}
            >
              ×
            </button>

            <div className="certificate-modal-body">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="certificate-modal-image"
              />
              <div className="certificate-modal-info">
                <h3 id={`cert-modal-${activeCert.id}`}>{activeCert.title}</h3>
                <p className="modal-issuer">{activeCert.issuer}</p>
                <p className="modal-date">{activeCert.date}</p>
                {activeCert.pdf && (
                  <a
                    href={activeCert.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: "1.25rem", display: "inline-block" }}
                  >
                    📄 View Full PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
