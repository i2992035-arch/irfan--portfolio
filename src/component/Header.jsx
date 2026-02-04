"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.pageYOffset > 100);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <nav>
        <a href="#hero" className="logo">
          <div className="logo-icon">IS</div>
          <span>Irfan Shaikh</span>
        </a>
        <div
          className={`hamburger ${open ? "active" : ""}`}
          id="hamburger"
          onClick={() => setOpen(!open)}
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${open ? "active" : ""}`} id="navLinks">
          <li>
            <a href="#hero" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#certificates" onClick={() => setOpen(false)}>
              Certificates
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
