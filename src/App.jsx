import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle Scroll to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollY = window.pageYOffset;

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop - 150) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  ];

  const projects = [
    { 
      title: 'Beyond The Pitch', 
      desc: 'Full-stack e-commerce platform for football gear. Integrated with secure payment systems and Django Signals.',
      img: 'beyond-pitch.webp', 
      tags: ['React', 'Django', 'PostgreSQL']
    },
    { 
      title: 'SLMS Portal', 
      desc: 'Student Learning Management System developed to streamline academic tracking and records.',
      img: 'Capture.PNG', 
      tags: ['Python', 'Django', 'HTML/CSS']
    },
  ];

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">SINAN<span>.DEV</span></div>
          
          <div className={`nav-links ${isMenuOpen ? 'mobile-active' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
              <a 
                key={item} 
                href={`#${item}`} 
                className={activeSection === item ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-img-box">
             <img src="sinan.webp" alt="Sinan" />
          </div>
          <p className="intro-tag">Hello, I am</p>
          <h1>MUHAMMED SINAN A</h1>
          <h2 className="type-text">Full-Stack Software Developer</h2>
          <div className="cta-box">
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Let's Talk</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p>
            I am a passionate Software Developer specializing in the <strong>React</strong> and <strong>Django</strong> ecosystem. 
            I bridge the gap between complex backend architectures and intuitive frontend experiences. 
            My goal is to build software that is not only functional but also scalable and highly performant.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container">
        <h2 className="section-title">Tech Stack & Tools</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <img src={skill.icon} alt={skill.name} />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container gray-bg">
        <h2 className="section-title">Featured Work</h2>
        <div className="projects-grid">
          {projects.map(proj => (
            <div key={proj.title} className="project-card">
              <div className="proj-img">
                <img src={proj.img} alt={proj.title} />
              </div>
              <div className="proj-content">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="proj-tags">
                  {proj.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="contact-box">
          <h2 className="section-title">Get In Touch</h2>
          <p>Available for freelance projects and full-time opportunities.</p>
          <div className="contact-links">
            <a href="https://github.com/sinan742/Muhammed-Sinan-A.git">GitHub</a>
            <a href="https://www.linkedin.com/in/muhammed-sinan-a-5a522536b">LinkedIn</a>
            <a href="https://wa.me/918281025986">WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;