import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { education } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

const Education = () => {
  useScrollReveal();

  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Degree</span>
          </h2>
          <p className="section-subtitle">
            Formal Computer Science engineering degree program with focus on core algorithms and intelligent systems.
          </p>
        </div>

        {/* Education Timeline / Main Card */}
        <div className="education-container">
          {education.map((edu, idx) => (
            <div key={idx} className="glass-card education-card reveal-on-scroll delay-1">
              <div className="edu-icon-column">
                <div className="edu-icon-badge">
                  <GraduationCap size={28} className="icon-cyan" />
                </div>
              </div>

              <div className="edu-main-content">
                <div className="edu-header-row">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <h4 className="edu-institution">{edu.institution}</h4>
                  </div>
                  <div className="edu-period-badge">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="edu-location-row">
                  <MapPin size={15} className="location-icon" />
                  <span>{edu.location}</span>
                </div>

                <p className="edu-details">{edu.details}</p>

                <div className="edu-highlights-box">
                  <h5 className="box-title">
                    <BookOpen size={15} />
                    <span>Key Coursework & Domains:</span>
                  </h5>
                  <div className="coursework-tags">
                    <span className="course-tag">Machine Learning</span>
                    <span className="course-tag">Data Science</span>
                    <span className="course-tag">Data Structures & Algorithms</span>
                    <span className="course-tag">DBMS</span>
                    <span className="course-tag">Operating Systems</span>
                    <span className="course-tag">Computer Networks</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          position: relative;
        }

        .education-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .education-card {
          padding: 2.25rem;
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .edu-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-lg);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.15);
        }

        .edu-main-content {
          flex: 1;
        }

        .edu-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .edu-degree {
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.25rem;
        }

        .edu-institution {
          font-size: 1.15rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .edu-period-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-family: var(--font-mono);
        }

        .edu-location-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-dim);
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
        }

        .location-icon {
          color: var(--accent-cyan);
        }

        .edu-details {
          color: #cbd5e1;
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .edu-highlights-box {
          background: rgba(8, 12, 20, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .box-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 0.85rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .coursework-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .course-tag {
          font-size: 0.85rem;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .education-card {
            flex-direction: column;
            gap: 1.25rem;
          }

          .edu-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
