"use client";

import React, { useEffect } from "react";
import IntroOverlay from "./IntroOverlay";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const styles = `
/* ============================================
   GLOBAL STYLES & CSS VARIABLES
   ============================================ */

:root {
    /* Light Theme Colors */
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --bg-card: #ffffff;
    --accent-primary: #2563eb;
    --accent-secondary: #7c3aed;
    --accent-hover: #1d4ed8;
    --text-primary: #0f172a;
    --text-secondary: #475569;
    --border-color: #e2e8f0;
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.08);
    --shadow-xl: 0 20px 50px rgba(0, 0, 0, 0.1);
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 6rem;
    
    /* Typography */
    --font-heading: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

/* Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

/* ============================================
   INTRO ANIMATION
   ============================================ */

.intro-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeOut 0.8s ease-in-out 2.5s forwards;
}

.intro-content {
    text-align: center;
    color: white;
}

.intro-logo {
    width: 120px;
    height: 120px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: 800;
    margin: 0 auto 2rem;
    animation: scaleIn 0.6s ease-out;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.intro-text {
    animation: slideUp 0.8s ease-out 0.3s both;
}

.intro-text h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
}

.intro-text p {
    font-size: 1.25rem;
    opacity: 0.9;
}

.loading-bar {
    width: 200px;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    margin: 2rem auto 0;
    overflow: hidden;
}

.loading-progress {
    width: 0;
    height: 100%;
    background: white;
    border-radius: 2px;
    animation: loadProgress 2s ease-out forwards;
}

@keyframes fadeOut {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

@keyframes scaleIn {
    from {
        transform: scale(0.5);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes loadProgress {
    to {
        width: 100%;
    }
}

/* ============================================
   HEADER / NAVIGATION
   ============================================ */

header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    z-index: 1000;
    border-bottom: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

header.scrolled {
    box-shadow: var(--shadow-md);
}

nav {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
    transition: transform 0.3s ease;
}

.logo:hover {
    transform: translateY(-2px);
}

.logo-icon {
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.125rem;
    color: white;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
    align-items: center;
}

.nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 0;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
    transition: width 0.3s ease;
}

.nav-links a:hover {
    color: var(--accent-primary);
}

.nav-links a:hover::after {
    width: 100%;
}

/* Hamburger Menu */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 8px;
    z-index: 1001;
}

.hamburger span {
    width: 28px;
    height: 3px;
    background: var(--text-primary);
    border-radius: 3px;
    transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* ============================================
   CONTAINER & SECTION
   ============================================ */

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 3rem;
}

.section {
    padding: 6rem 0;
    animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ============================================
   HERO SECTION
   ============================================ */

#hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 80px;
    position: relative;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    overflow: hidden;
}

.hero-bg-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
}

.shape {
    position: absolute;
    opacity: 0.1;
}

.shape-1 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 50%;
    top: -100px;
    right: -100px;
    animation: float 20s ease-in-out infinite;
}

.shape-2 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, var(--accent-secondary), var(--accent-primary));
    border-radius: 50%;
    bottom: -50px;
    left: -50px;
    animation: float 15s ease-in-out infinite reverse;
}

.shape-3 {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    top: 50%;
    right: 10%;
    animation: morph 10s ease-in-out infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-30px) rotate(180deg);
    }
}

@keyframes morph {
    0%, 100% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    50% {
        border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
    }
}

.hero-content {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 6rem;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-text {
    animation: slideInLeft 1s ease-out;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.hero-text .greeting {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
    border: 2px solid var(--accent-primary);
    border-radius: 50px;
    font-size: 0.95rem;
    color: var(--accent-primary);
    font-weight: 600;
    margin-bottom: 1.5rem;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.hero-text h1 {
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
}

.hero-text h1 .name {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
    animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
    0%, 100% {
        filter: hue-rotate(0deg);
    }
    50% {
        filter: hue-rotate(20deg);
    }
}

.hero-text .tagline {
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-weight: 600;
}

.hero-text p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 2.5rem;
    max-width: 600px;
}

.hero-buttons {
    display: flex;
    gap: 1.25rem;
    align-items: center;
}

.btn {
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
}

.btn:hover::before {
    left: 100%;
}

.btn-primary {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    color: white;
    box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(37, 99, 235, 0.5);
}

.btn-secondary {
    background: white;
    color: var(--accent-primary);
    border: 2px solid var(--accent-primary);
}

.btn-secondary:hover {
    background: var(--accent-primary);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(37, 99, 235, 0.3);
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: slideInRight 1s ease-out;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.profile-wrapper {
    position: relative;
    animation: floatProfile 6s ease-in-out infinite;
}

@keyframes floatProfile {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

.profile-pic {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    object-fit: cover;
    border: 8px solid white;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
}

.profile-placeholder {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    display: flex;
    align-items: center;
    justify-content: center;
    border: 8px solid white;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow: hidden;
}

.profile-placeholder::before {
    content: '';
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    opacity: 0.3;
    filter: blur(30px);
    z-index: -1;
}

/* Decorative Elements */
.hero-stats {
    display: flex;
    gap: 3rem;
    margin-top: 3rem;
}

.stat-item {
    text-align: left;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: block;
}

.stat-label {
    font-size: 0.95rem;
    color: var(--text-secondary);
    font-weight: 600;
}

/* ============================================
   SECTION HEADERS
   ============================================ */

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-tag {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
    border: 2px solid var(--accent-primary);
    border-radius: 50px;
    font-size: 0.9rem;
    color: var(--accent-primary);
    font-weight: 600;
    margin-bottom: 1rem;
}

.section-header h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.section-header p {
    color: var(--text-secondary);
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
}

/* ============================================
   ABOUT SECTION
   ============================================ */

#about {
    background: var(--bg-secondary);
}

.about-content {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 5rem;
    align-items: start;
}

.about-text {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.9;
}

.about-text p {
    margin-bottom: 1.5rem;
    animation: fadeInUp 0.8s ease-out both;
}

.about-text p:nth-child(2) {
    animation-delay: 0.1s;
}

.about-text p:nth-child(3) {
    animation-delay: 0.2s;
}

.about-cards {
    display: grid;
    gap: 1.5rem;
}

.about-card {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    animation: fadeInUp 0.8s ease-out both;
}

.about-card:nth-child(1) {
    animation-delay: 0.2s;
}

.about-card:nth-child(2) {
    animation-delay: 0.3s;
}

.about-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: var(--accent-primary);
}

.about-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 1.25rem;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.about-icon img {
    width: 32px;
    height: 32px;
    object-fit: contain;
}

.about-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 700;
    color: var(--text-primary);
}

.about-card p {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.6;
}

/* ============================================
   SKILLS SECTION
   ============================================ */

#skills {
    background: var(--bg-primary);
}

.skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 3rem;
    justify-content: center;
}

.skill-badge {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 2rem;
    background: white;
    border: 2px solid var(--border-color);
    border-radius: 50px;
    transition: all 0.3s ease;
    animation: fadeInUp 0.6s ease-out both;
}

.skill-badge:nth-child(1) { animation-delay: 0.1s; }
.skill-badge:nth-child(2) { animation-delay: 0.15s; }
.skill-badge:nth-child(3) { animation-delay: 0.2s; }
.skill-badge:nth-child(4) { animation-delay: 0.25s; }
.skill-badge:nth-child(5) { animation-delay: 0.3s; }
.skill-badge:nth-child(6) { animation-delay: 0.35s; }

.skill-badge:hover {
    border-color: var(--accent-primary);
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(124, 58, 237, 0.05));
}

.skill-badge img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.skill-badge:hover img {
    transform: scale(1.1) rotate(5deg);
}

.skill-badge span {
    font-weight: 600;
    color: var(--text-primary);
    font-size: 1rem;
}

/* ============================================
   PROJECTS SECTION
   ============================================ */

#projects {
    background: var(--bg-secondary);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2.5rem;
    margin-top: 4rem;
}

.project-card {
    background: white;
    border-radius: 24px;
    border: 1px solid var(--border-color);
    overflow: hidden;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    animation: fadeInUp 0.6s ease-out both;
}

.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }
.project-card:nth-child(4) { animation-delay: 0.4s; }
.project-card:nth-child(5) { animation-delay: 0.5s; }
.project-card:nth-child(6) { animation-delay: 0.6s; }

.project-card:hover {
    transform: translateY(-12px);
    box-shadow: var(--shadow-xl);
    border-color: var(--accent-primary);
}

.project-image {
    width: 100%;
    height: 250px;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--border-color);
    position: relative;
    overflow: hidden;
}

.project-image::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, transparent, rgba(255, 255, 255, 0.5));
}

.project-content {
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.project-content h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: var(--text-primary);
}

.project-content p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.7;
    flex: 1;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.tag {
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
    color: var(--accent-primary);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    border: 1px solid rgba(37, 99, 235, 0.2);
}

.project-links {
    display: flex;
    gap: 1.25rem;
}

.project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-primary);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.project-link:hover {
    gap: 0.75rem;
    color: var(--accent-secondary);
}

/* ============================================
   EDUCATION SECTION
   ============================================ */

#education {
    background: var(--bg-primary);
}

.education-list {
    display: grid;
    gap: 2rem;
    margin-top: 4rem;
}

.education-card {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 2.5rem;
    padding: 2.5rem;
    background: white;
    border-radius: 24px;
    border: 1px solid var(--border-color);
    align-items: center;
    transition: all 0.3s ease;
    animation: fadeInUp 0.6s ease-out both;
}

.education-card:nth-child(1) { animation-delay: 0.1s; }
.education-card:nth-child(2) { animation-delay: 0.2s; }
.education-card:nth-child(3) { animation-delay: 0.3s; }

.education-card:hover {
    transform: translateX(10px);
    box-shadow: var(--shadow-xl);
    border-color: var(--accent-primary);
}

.education-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    border: 1px solid var(--border-color);
}

.education-info h3 {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
    font-weight: 700;
    color: var(--text-primary);
}

.education-info h4 {
    color: var(--accent-primary);
    font-weight: 600;
    font-size: 1.125rem;
    margin-bottom: 1rem;
}

.education-info p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1rem;
}

.education-year {
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
    color: var(--accent-primary);
    border-radius: 12px;
    font-weight: 700;
    white-space: nowrap;
    border: 2px solid var(--accent-primary);
    font-size: 1rem;
}

/* ============================================
   CERTIFICATES SECTION
   ============================================ */

#certificates {
    background: var(--bg-secondary);
}

.certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.certificate-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    animation: fadeInUp 0.6s ease-out both;
}

.certificate-card:nth-child(1) { animation-delay: 0.1s; }
.certificate-card:nth-child(2) { animation-delay: 0.2s; }
.certificate-card:nth-child(3) { animation-delay: 0.3s; }

.certificate-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
    border-color: var(--accent-primary);
}

.certificate-image-wrapper {
    position: relative;
    width: 100%;
    height: 240px;
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
    overflow: hidden;
}

.certificate-image {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
}

.certificate-image-wrapper:hover .certificate-image {
    transform: scale(1.05);
}

.certificate-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.certificate-image-wrapper:hover .certificate-overlay {
    opacity: 1;
}

.view-certificate {
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 50px;
    transform: translateY(10px);
    transition: transform 0.3s ease;
}

.certificate-image-wrapper:hover .view-certificate {
    transform: translateY(0);
}

.certificate-info {
    padding: 1.5rem;
}

.certificate-info h3 {
    font-size: 1.375rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.certificate-issuer {
    color: var(--accent-primary);
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.25rem;
}

.certificate-date {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

/* Certificate Modal */
.certificate-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(2, 6, 23, 0.85);
    z-index: 9999;
    padding: 20px;
    animation: fadeIn 0.2s ease;
    overflow-y: auto;
}

.certificate-modal-content {
    width: min(1100px, 96%);
    max-height: 90vh;
    background: white;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 25px 70px rgba(2, 6, 23, 0.6);
    position: relative;
    overflow-y: auto;
    margin: auto;
}

@media (prefers-color-scheme: dark) {
    .certificate-modal-content {
        background: #0b0b0b;
        color: #f5f5f5;
    }
}

.certificate-modal-close {
    position: absolute;
    right: 15px;
    top: 15px;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 28px;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;
}

.certificate-modal-close:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: rotate(90deg);
}

.certificate-modal-body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.certificate-modal-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.certificate-modal-info {
    padding: 0 1rem;
}

.certificate-modal-info h3 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
}

.modal-issuer {
    color: var(--accent-primary);
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
}

.modal-date {
    color: var(--text-secondary);
    font-size: 1rem;
    margin-bottom: 1rem;
}

.modal-description {
    color: var(--text-secondary);
    font-size: 1.125rem;
    line-height: 1.8;
}

@media (max-width: 768px) {
    .certificates-grid {
        grid-template-columns: 1fr;
    }
    
    .certificate-modal-content {
        padding: 15px;
    }
    
    .certificate-modal-info h3 {
        font-size: 1.5rem;
    }
}

.certificates-content {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
}

.certificates-card {
    max-width: 700px;
    width: 100%;
    padding: 4rem 3rem;
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 30px;
    text-align: center;
    transition: all 0.3s ease;
    animation: fadeInUp 0.8s ease-out;
}

.certificates-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
    border-color: var(--accent-primary);
}

.certificate-icon {
    width: 100px;
    height: 100px;
    margin: 0 auto 2rem;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-color);
}

.certificate-icon img {
    width: 56px;
    height: 56px;
    object-fit: contain;
}

.certificates-card h3 {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
    color: var(--text-primary);
}

.certificates-card p {
    color: var(--text-secondary);
    line-height: 1.9;
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
}

/* ============================================
   CONTACT SECTION
   ============================================ */

#contact {
    text-align: center;
    background: var(--bg-primary);
}

.contact-text {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 4rem;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.8;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 4rem;
}

.contact-card {
    padding: 2.5rem 2rem;
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 24px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    animation: fadeInUp 0.6s ease-out both;
}

.contact-card:nth-child(1) { animation-delay: 0.1s; }
.contact-card:nth-child(2) { animation-delay: 0.2s; }
.contact-card:nth-child(3) { animation-delay: 0.3s; }
.contact-card:nth-child(4) { animation-delay: 0.4s; }

.contact-card:hover {
    border-color: var(--accent-primary);
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
}

.contact-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-color);
    transition: transform 0.3s ease;
}

.contact-card:hover .contact-icon {
    transform: scale(1.1) rotate(5deg);
}

.contact-icon img,
.contact-icon svg {
    width: 36px;
    height: 36px;
    object-fit: contain;
}

.contact-card h3 {
    font-size: 1.375rem;
    color: var(--text-primary);
    font-weight: 700;
}

.contact-card p {
    color: var(--text-secondary);
    font-size: 1rem;
}

/* ============================================
   FOOTER
   ============================================ */

footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
    margin-top: 6rem;
}

.footer-content {
    padding: 4rem 0 2rem;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 3rem;
}

.footer-brand h3 {
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.footer-brand p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 2rem;
    max-width: 350px;
}

.footer-social {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
}

.social-icon {
    width: 48px;
    height: 48px;
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    text-decoration: none;
}

.social-icon:hover {
    border-color: var(--accent-primary);
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
    transform: translateY(-5px);
}

.social-icon img,
.social-icon svg {
    width: 24px;
    height: 24px;
    object-fit: contain;
}

.footer-section h4 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
}

.footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
}

.footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
}

.footer-links a:hover {
    color: var(--accent-primary);
    padding-left: 0.5rem;
}

.footer-links a::before {
    content: '→';
    opacity: 0;
    transition: opacity 0.3s ease;
}

.footer-links a:hover::before {
    opacity: 1;
}

.footer-bottom {
    border-top: 1px solid var(--border-color);
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.footer-bottom p {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.footer-bottom-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.footer-bottom-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
    color: var(--accent-primary);
}

.back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 55px;
    height: 55px;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
    z-index: 999;
}

.back-to-top.visible {
    opacity: 1;
    pointer-events: all;
}

.back-to-top:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(37, 99, 235, 0.5);
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

@media (max-width: 968px) {
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 4rem;
    }
    
    .hero-image {
        order: -1;
    }
    
    .hero-buttons {
        justify-content: center;
    }
    
    .hero-text p {
        margin-left: auto;
        margin-right: auto;
    }
    
    .hero-stats {
        justify-content: center;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .education-card {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 1.5rem;
    }
    
    .education-icon {
        margin: 0 auto;
    }
    
    .education-year {
        margin: 0 auto;
    }
    
    .section-header h2 {
        font-size: 2.5rem;
    }
    
    .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }
    
    .footer-brand {
        grid-column: 1 / -1;
    }
}

@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 280px;
        background: white;
        flex-direction: column;
        padding: 5rem 2rem 2rem;
        border-left: 1px solid var(--border-color);
        transition: right 0.4s ease;
        box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }
    
    .nav-links.active {
        right: 0;
    }
    
    .nav-links li {
        width: 100%;
    }
    
    .nav-links a {
        display: block;
        width: 100%;
        padding: 1rem;
        text-align: left;
        font-size: 1.125rem;
        border-bottom: 1px solid var(--border-color);
    }
    
    .nav-links a::after {
        display: none;
    }
    
    .container {
        padding: 0 1.5rem;
    }
    
    .section {
        padding: 4rem 0;
    }
    
    .hero-text h1 {
        font-size: 2.5rem;
    }
    
    .hero-text .tagline {
        font-size: 1.25rem;
    }
    
    .profile-pic,
    .profile-placeholder {
        width: 280px;
        height: 280px;
    }
    
    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }
    
    .btn {
        width: 100%;
    }
    
    .section-header h2 {
        font-size: 2rem;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-brand {
        text-align: center;
    }
    
    .footer-brand p {
        margin-left: auto;
        margin-right: auto;
    }
    
    .footer-social {
        justify-content: center;
    }
    
    .footer-section {
        text-align: center;
    }
    
    .footer-links {
        align-items: center;
    }
    
    .footer-bottom {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .hero-text h1 {
        font-size: 2rem;
    }
    
    .intro-text h1 {
        font-size: 2rem;
    }
    
    .intro-logo {
        width: 100px;
        height: 100px;
        font-size: 2.5rem;
    }
    
    .profile-pic,
    .profile-placeholder {
        width: 240px;
        height: 240px;
    }
    
    .section-header h2 {
        font-size: 1.75rem;
    }
    
    nav {
        padding: 1rem 1.5rem;
    }
}
`;

export default function Portfolio() {
  useEffect(() => {
    // Intro overlay timer
    const introTimer = setTimeout(() => {
      const overlay = document.querySelector('.intro-overlay');
      if (overlay) overlay.style.display = 'none';
    }, 3300);

    // Scroll handlers for header and back-to-top
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');

    function onScroll() {
      if (header) {
        if (window.pageYOffset > 100) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      }
      if (backToTop) {
        if (window.pageYOffset > 300) backToTop.classList.add('visible');
        else backToTop.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', onScroll);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Intersection observer for fade-ins
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => observer.observe(section));

    return () => {
      clearTimeout(introTimer);
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <IntroOverlay />
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
    

