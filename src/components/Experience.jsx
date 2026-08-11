import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

const Experience = () => {
  useScrollReveal();

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Work History</span>
          </div>
          <h2 className="section-title">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on machine learning internships working on search ranking models, datasets, and predictive ML pipelines.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item reveal-on-scroll delay-${index + 1}`}>
              <div className="timeline-dot-wrap">
                <div className={`timeline-dot ${exp.status === 'Present' ? 'active' : ''}`}>
                  <Briefcase size={14} />
                </div>
              </div>

              <div className="glass-card experience-card">
                <div className="card-header-bar">
                  <div>
                    <div className="badge-row">
                      <span className={`status-badge ${exp.status === 'Present' ? 'current' : ''}`}>
                        {exp.badge}
                      </span>
                    </div>
                    <h3 className="role-title">{exp.role}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                  </div>

                  <div className="meta-info">
                    <span className="meta-item">
                      <Calendar size={14} className="meta-icon" />
                      {exp.period}
                    </span>
                    <span className="meta-item">
                      <MapPin size={14} className="meta-icon" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="responsibilities-list">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="resp-item">
                      <ChevronRight size={16} className="resp-bullet" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                <div className="tech-stack-row">
                  <span className="tech-label">Key Tech:</span>
                  <div className="tech-tags">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background: rgba(13, 19, 34, 0.4);
        }

        .timeline-container {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 20px;
          top: 30px;
          bottom: 30px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-cyan) 0%, rgba(99, 102, 241, 0.3) 100%);
        }

        .timeline-item {
          position: relative;
          padding-left: 3.5rem;
          margin-bottom: 2.5rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot-wrap {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 2;
        }

        .timeline-dot {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #0d1322;
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all var(--transition-normal);
        }

        .timeline-dot.active {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.4);
          background: rgba(0, 242, 254, 0.1);
        }

        .experience-card {
          padding: 2rem;
        }

        .card-header-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 1.25rem;
        }

        .badge-row {
          margin-bottom: 0.4rem;
        }

        .status-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
        }

        .status-badge.current {
          background: rgba(0, 242, 254, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 242, 254, 0.3);
        }

        .role-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.2rem;
        }

        .company-name {
          font-size: 1.1rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .meta-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.35rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .meta-icon {
          color: var(--accent-cyan);
        }

        .responsibilities-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .resp-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          color: #cbd5e1;
          font-size: 0.975rem;
          line-height: 1.6;
        }

        .resp-bullet {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .tech-stack-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .tech-label {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          font-size: 0.8rem;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 15px;
          }

          .timeline-dot {
            width: 32px;
            height: 32px;
          }

          .timeline-item {
            padding-left: 2.5rem;
          }

          .card-header-bar {
            flex-direction: column;
            align-items: flex-start;
          }

          .meta-info {
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
