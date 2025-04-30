import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
}

function Header({ activeSection, setActiveSection }) {
  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a 
                href={`#${section}`} 
                className={activeSection === section ? 'active' : ''}
                onClick={() => handleNavClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function MainContent({ setActiveSection }) {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built using React.js, hosted on GitHub with responsive design.",
      technologies: ["React", "CSS", "GitHub Pages"]
    },
    {
      title: "Weather App",
      description: "Displays weather using OpenWeather API with responsive layout.",
      technologies: ["JavaScript", "API Integration", "CSS"]
    }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return (
    <main className="main-content">
      <section id="home" className="section hero-section">
        <div className="hero-content">
          <h1>Welcome!</h1>
          <p className="intro-text">
            Hello, I am <span className="highlight">Marlon C. Inocencio</span>, a 3rd year Information Technology student at Pamantasan ng Cabuyao under the College of Computing Studies.
          </p>
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm a passionate tech enthusiast with a strong interest in web development and problem-solving. 
            My journey in technology began when I built my first website, and since then I've been constantly 
            learning new technologies and frameworks.
          </p>
          <p>
            When I'm not coding, you can find me reading tech blogs, playing strategy games, or working on 
            personal projects that challenge my skills.
          </p>
        </div>
      </section>

      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3>Pamantasan ng Cabuyao</h3>
          <p className="degree">Bachelor of Science in Information Technology</p>
          <p className="duration">2021 - Present</p>
          <p className="details">Specializing in Web Development and Software Engineering</p>
        </div>
        <div className="education-item">
          <h3>Online Learning</h3>
          <ul className="courses-list">
            <li>FreeCodeCamp - Responsive Web Design Certification</li>
            <li>Coursera - Introduction to Programming</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <p className="contact-email">Email: marlon.inocencio@example.com</p>
          <div className="social-links">
            <a href="https://github.com/marlon-inocencio" target="_blank" rel="noreferrer" className="social-link">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/in/marlon-inocencio" target="_blank" rel="noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Marlon C. Inocencio. All rights reserved.</p>
    </footer>
  );
}

export default App;