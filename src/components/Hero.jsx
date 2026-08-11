import React from 'react';
import {
  ArrowRight,
  Download,
  Sparkles,
  Briefcase,
  BarChart2,
  Globe,
  Brain
} from 'lucide-react';
import { personalInfo, experiences, socialLinks } from '../data/portfolioData';
import SocialIcon from './SocialIcon';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge animate-float">
            <span className="badge-pulse"></span>
            <Sparkles size={14} className="badge-icon" />
            <span>Currently ML Intern @ FlyRank AI</span>
          </div>

          {/* Name & Headline */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-headline">{personalInfo.title}</h2>

          {/* Short Bio */}
          <p className="hero-description">{personalInfo.shortBio}</p>

          {/* Key Pillar Highlights Pills */}
          <div className="hero-tags">
            <span className="hero-tag primary-tag">
              <BarChart2 size={14} /> Data Analytics (Primary)
            </span>
            <span className="hero-tag mern-tag">
              <Globe size={14} /> MERN Stack Development
            </span>
            <span className="hero-tag ml-tag">
              <Brain size={14} /> Machine Learning
            </span>
          </div>

          {/* CTA Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            <a href="#skills" className="btn btn-secondary">
              <span>Explore Skills</span>
            </a>

            <button onClick={onOpenResume} className="btn btn-outline">
              <Download size={16} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Profiles */}
          <div className="hero-socials">
            <span className="socials-label">Profiles:</span>
            <div className="social-buttons-row">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title={social.name}
                  aria-label={`Visit Gaurav Gupta's ${social.name} Profile`}
                >
                  <SocialIcon name={social.name} size={18} />
                  <span className="sr-only">{social.name}</span>
                  <span className="tooltip">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Hero Dashboard Card + Full-Size Profile Image */}
        <div className="hero-visual">
          <div className="profile-photo-card glass-card">
            <div className="profile-img-frame">
              <img
                src="/gaurav-gupta.jpg"
                alt="Gaurav Gupta - Data Analyst | Full Stack Developer | ML Enthusiast"
                className="profile-img"
              />
              <div className="img-glow-overlay"></div>
              <div className="profile-badge-overlay">
                <span className="online-dot"></span>
                <span>Gaurav Gupta</span>
              </div>
            </div>
          </div>

          <div className="visual-card glass-card">
            <div className="card-top-bar">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="window-title">data_profile.py</span>
            </div>

            <div className="code-block">
              <div className="code-line">
                <span className="code-keyword">class</span>{' '}
                <span className="code-class">GauravGupta</span>:
              </div>
              <div className="code-line indent-1">
                <span className="code-self">self</span>.role ={' '}
                <span className="code-string">"Data Analyst | Full Stack | ML"</span>
              </div>
              <div className="code-line indent-1">
                <span className="code-self">self</span>.primary_focus ={' '}
                <span className="code-string">"Data Analytics & Insights"</span>
              </div>
              <div className="code-line indent-1">
                <span className="code-self">self</span>.core_stack = [
                <span className="code-string">"Python"</span>,{' '}
                <span className="code-string">"SQL"</span>,{' '}
                <span className="code-string">"MERN Stack"</span>,{' '}
                <span className="code-string">"EDA"</span>]
              </div>
              <div className="code-line indent-1">
                <span className="code-self">self</span>.status ={' '}
                <span className="code-string">"Intern @ FlyRank AI"</span>
              </div>
            </div>

            {/* Quick Overview Stats */}
            <div className="stat-cards-grid">
              <div className="stat-card">
                <BarChart2 size={20} className="stat-icon emerald" />
                <div className="stat-text">
                  <span className="stat-value">Primary</span>
                  <span className="stat-label">Data Analytics</span>
                </div>
              </div>

              <div className="stat-card">
                <Globe size={20} className="stat-icon cyan" />
                <div className="stat-text">
                  <span className="stat-value">MERN</span>
                  <span className="stat-label">Web Dev</span>
                </div>
              </div>

              <div className="stat-card">
                <Briefcase size={20} className="stat-icon purple" />
                <div className="stat-text">
                  <span className="stat-value">{experiences.length}</span>
                  <span className="stat-label">Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 7rem;
          padding-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.25);
          color: var(--accent-cyan);
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
        }

        .hero-title {
          font-size: 3.6rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }

        .hero-headline {
          font-size: 1.5rem;
          color: var(--accent-cyan);
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .hero-description {
          font-size: 1.15rem;
          color: #cbd5e1;
          line-height: 1.7;
          max-width: 620px;
          margin-bottom: 1.75rem;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2.25rem;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .primary-tag {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #34d399;
        }

        .mern-tag {
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.3);
          color: var(--accent-cyan);
        }

        .ml-tag {
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: #a5b4fc;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.6rem;
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          font-weight: 600;
          transition: all var(--transition-normal);
        }

        .btn-primary {
          background: var(--gradient-brand);
          color: #040810;
          box-shadow: 0 4px 20px rgba(0, 242, 254, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 242, 254, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(0, 242, 254, 0.3);
          transform: translateY(-3px);
        }

        .btn-outline {
          background: transparent;
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 242, 254, 0.3);
        }

        .btn-outline:hover {
          background: rgba(0, 242, 254, 0.1);
          border-color: var(--accent-cyan);
          transform: translateY(-3px);
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .socials-label {
          font-size: 0.85rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .social-buttons-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .social-btn {
          position: relative;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .social-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.1);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.2);
        }

        .tooltip {
          position: absolute;
          bottom: -32px;
          left: 50%;
          transform: translateX(-50%) translateY(5px);
          background: #080c14;
          color: #fff;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all var(--transition-fast);
          z-index: 10;
        }

        .social-btn:hover .tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* Hero Visual & Full Size Profile Photo Card */
        .hero-visual {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .profile-photo-card {
          padding: 0.75rem;
          background: rgba(13, 19, 34, 0.85);
          border: 1px solid rgba(0, 242, 254, 0.3);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
          border-radius: var(--radius-xl);
          overflow: hidden;
        }

        .profile-img-frame {
          position: relative;
          width: 100%;
          height: 480px; /* Full size portrait frame showing full face, tie, suit & shoulders! */
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #080c14;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 10%; /* Center top positioning ensures full suit & face display */
          transition: transform 0.5s ease;
        }

        .profile-photo-card:hover .profile-img {
          transform: scale(1.03);
        }

        .img-glow-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8, 12, 20, 0) 60%, rgba(8, 12, 20, 0.75) 100%);
          pointer-events: none;
        }

        .profile-badge-overlay {
          position: absolute;
          bottom: 1.2rem;
          left: 1.2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.95rem;
          border-radius: 9999px;
          background: rgba(8, 12, 20, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 242, 254, 0.4);
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .online-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .visual-card {
          padding: 1.5rem;
          background: #0d1322;
          border-color: rgba(0, 242, 254, 0.2);
        }

        .card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .window-dots {
          display: flex;
          gap: 0.4rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .window-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .code-block {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          line-height: 1.8;
          color: var(--text-muted);
          background: rgba(8, 12, 20, 0.8);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
          margin-bottom: 1.25rem;
        }

        .code-keyword { color: #f472b6; font-weight: 600; }
        .code-class { color: var(--accent-cyan); font-weight: 600; }
        .code-self { color: #60a5fa; }
        .code-string { color: #34d399; }

        .indent-1 { padding-left: 1.25rem; }

        .stat-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0.75rem 0.65rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stat-icon {
          flex-shrink: 0;
        }
        .stat-icon.cyan { color: var(--accent-cyan); }
        .stat-icon.purple { color: var(--accent-purple); }
        .stat-icon.emerald { color: var(--accent-emerald); }

        .stat-text {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 0.9rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
        }

        .stat-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          line-height: 1.2;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-title {
            font-size: 2.75rem;
          }

          .profile-img-frame {
            height: 420px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-headline {
            font-size: 1.2rem;
          }

          .profile-img-frame {
            height: 350px;
          }

          .stat-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
