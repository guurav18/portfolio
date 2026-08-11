import React from 'react';
import { Award, Brain, BarChart3, Sparkles, FileCode, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

const iconMap = {
  Award,
  Brain,
  BarChart3,
  Sparkles,
  FileCode,
  CheckCircle2
};

const Certifications = () => {
  useScrollReveal();

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Award size={14} />
            <span>Credentials</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Industry and academic certifications in Data Science, Deep Learning, Generative AI, and Data Analytics.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const IconComp = iconMap[cert.icon] || Award;
            const delayClass = `delay-${(index % 3) + 1}`;
            return (
              <div key={index} className={`glass-card cert-card reveal-on-scroll ${delayClass}`}>
                <div className="cert-header">
                  <div className="cert-icon-container">
                    <IconComp size={22} className="cert-icon" />
                  </div>
                  <span className="cert-badge">{cert.type}</span>
                </div>

                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-dot">•</span>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>

                <div className="cert-footer">
                  <div className="verified-tag">
                    <ShieldCheck size={14} className="verified-icon" />
                    <span>Verified Credential</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .certifications-section {
          background: rgba(13, 19, 34, 0.4);
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
        }

        .cert-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
        }

        .cert-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cert-icon-container {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        .cert-badge {
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .cert-content {
          flex: 1;
        }

        .cert-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }

        .cert-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .cert-issuer {
          color: var(--accent-cyan);
          font-weight: 500;
        }

        .cert-dot {
          color: var(--text-dim);
        }

        .cert-year {
          font-family: var(--font-mono);
        }

        .cert-footer {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .verified-tag {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--accent-emerald);
          font-weight: 500;
        }

        .verified-icon {
          color: var(--accent-emerald);
        }

        @media (max-width: 576px) {
          .certifications-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
