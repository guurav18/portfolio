import React from 'react';
import { User, GraduationCap, Terminal, Cpu, Network, Database, BarChart2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

const coreCsSubjects = [
  { name: 'Data Structures & Algorithms', icon: Terminal },
  { name: 'Database Management Systems (DBMS)', icon: Database },
  { name: 'Operating Systems', icon: Cpu },
  { name: 'Computer Networks', icon: Network }
];

const About = () => {
  useScrollReveal();

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <User size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Gaurav Gupta</span>
          </h2>
          <p className="section-subtitle">
            Computer Science undergraduate specializing in Data Analytics, Full Stack MERN Development, and Machine Learning.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="glass-card about-card-main reveal-on-scroll delay-1">
            <h3 className="card-heading">
              <BarChart2 size={22} className="icon-cyan" />
              <span>Analytical & Full-Stack Profile</span>
            </h3>

            <p className="about-text">{personalInfo.about.paragraph1}</p>
            <p className="about-text">{personalInfo.about.paragraph2}</p>

            <div className="focus-areas-container">
              <h4 className="focus-title">Core Capability Pillars:</h4>
              <ul className="focus-list">
                {personalInfo.about.focusAreas.map((area, idx) => (
                  <li key={idx} className="focus-item">
                    <span className="focus-bullet"></span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar with Profile Photo & Academic Card */}
          <div className="about-sidebar reveal-on-scroll delay-2">
            {/* Profile Headshot Card */}
            <div className="glass-card portrait-sidebar-card">
              <div className="portrait-wrap">
                <img
                  src="/gaurav-gupta.jpg"
                  alt="Gaurav Gupta Portrait"
                  className="about-portrait-img"
                />
                <div className="portrait-glow"></div>
              </div>
              <div className="portrait-info">
                <h4>{personalInfo.name}</h4>
                <p>Data Analyst | Full Stack | ML</p>
              </div>
            </div>

            <div className="glass-card sidebar-card">
              <h4 className="sidebar-title">
                <GraduationCap size={20} className="icon-cyan" />
                <span>Education & Institution</span>
              </h4>
              <div className="institution-info">
                <h5 className="inst-name">{personalInfo.contact.educationInstitution}</h5>
                <p className="inst-degree">Bachelor of Technology — Computer Science (B.Tech)</p>
                <p className="inst-period">Aug 2023 – Aug 2027</p>
              </div>
            </div>

            <div className="glass-card sidebar-card">
              <h4 className="sidebar-title">
                <Cpu size={20} className="icon-cyan" />
                <span>Core CS Foundations</span>
              </h4>
              <div className="cs-subjects-grid">
                {coreCsSubjects.map((sub, idx) => {
                  const IconComp = sub.icon;
                  return (
                    <div key={idx} className="cs-subject-pill">
                      <IconComp size={15} className="pill-icon" />
                      <span>{sub.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: rgba(13, 19, 34, 0.4);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
        }

        .about-card-main {
          padding: 2.25rem;
        }

        .card-heading {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          color: #fff;
        }

        .icon-cyan {
          color: var(--accent-cyan);
        }

        .about-text {
          color: #cbd5e1;
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }

        .focus-areas-container {
          margin-top: 1.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .focus-title {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
        }

        .focus-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }

        .focus-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .focus-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .about-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .portrait-sidebar-card {
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          border-color: rgba(0, 242, 254, 0.25);
        }

        .portrait-wrap {
          position: relative;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--accent-cyan);
          flex-shrink: 0;
        }

        .about-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
        }

        .portrait-info h4 {
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 0.15rem;
        }

        .portrait-info p {
          font-size: 0.825rem;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .sidebar-card {
          padding: 1.75rem;
        }

        .sidebar-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
          color: #fff;
        }

        .institution-info .inst-name {
          font-size: 1.1rem;
          color: var(--accent-cyan);
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .institution-info .inst-degree {
          font-size: 0.95rem;
          color: #e2e8f0;
          margin-bottom: 0.35rem;
        }

        .institution-info .inst-period {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .cs-subjects-grid {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .cs-subject-pill {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }

        .cs-subject-pill:hover {
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(0, 242, 254, 0.05);
          transform: translateX(4px);
        }

        .pill-icon {
          color: var(--accent-cyan);
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .focus-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
