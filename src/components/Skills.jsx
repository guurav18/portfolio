import React, { useState } from 'react';
import {
  Code,
  Brain,
  BarChart2,
  Globe,
  Database,
  Wrench,
  CheckCircle,
  Eye
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

const categoryIcons = {
  "Data Analytics & Data Science": BarChart2,
  "MERN Stack Development": Globe,
  "Databases": Database,
  "Machine Learning & AI": Brain,
  "Computer Vision": Eye,
  "Tools & Platforms": Wrench
};

const categoryBadges = {
  "Data Analytics & Data Science": "Primary Focus",
  "MERN Stack Development": "Full Stack Group",
  "Databases": "Data Storage",
  "Machine Learning & AI": "AI Domain",
  "Computer Vision": "Visual AI",
  "Tools & Platforms": "Dev Suite"
};

const Skills = () => {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Object.keys(skillsData)];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <BarChart2 size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Structured skill set prioritizing Data Analytics & EDA, dedicated MERN Web Development, and Machine Learning workflows.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-container reveal-on-scroll delay-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="skills-grid">
          {Object.entries(skillsData)
            .filter(([cat]) => activeCategory === 'All' || activeCategory === cat)
            .map(([category, items], idx) => {
              const CategoryIcon = categoryIcons[category] || Code;
              const isPrimary = category === "Data Analytics & Data Science";
              const isMern = category === "MERN Stack Development";
              const badgeText = categoryBadges[category];
              const delayClass = `delay-${(idx % 4) + 1}`;

              return (
                <div
                  key={category}
                  className={`glass-card skill-card reveal-on-scroll ${delayClass} ${isPrimary ? 'primary-card' : ''} ${isMern ? 'mern-card' : ''}`}
                >
                  <div className="skill-card-header">
                    <div className="skill-icon-wrap">
                      <CategoryIcon size={20} className="icon-cyan" />
                    </div>
                    <div>
                      <span className="category-badge">{badgeText}</span>
                      <h3 className="category-title">{category}</h3>
                    </div>
                  </div>

                  <div className="skill-pills-wrap">
                    {items.map((skill) => (
                      <div key={skill} className={`skill-pill ${isPrimary ? 'primary-pill' : ''} ${isMern ? 'mern-pill' : ''}`}>
                        <CheckCircle size={13} className="pill-check" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-filter-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          padding: 0.5rem 1.1rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(0, 242, 254, 0.05);
        }

        .filter-btn.active {
          background: var(--gradient-brand);
          color: #040810;
          border-color: transparent;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.25);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .skill-card.primary-card {
          border-color: rgba(16, 185, 129, 0.4);
          background: linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(13, 19, 34, 0.7) 100%);
          grid-column: span 1;
        }

        .skill-card.mern-card {
          border-color: rgba(0, 242, 254, 0.4);
          background: linear-gradient(180deg, rgba(0, 242, 254, 0.08) 0%, rgba(13, 19, 34, 0.7) 100%);
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid var(--border-color);
        }

        .category-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.06);
          color: var(--accent-cyan);
          margin-bottom: 0.2rem;
        }

        .primary-card .category-badge {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
        }

        .skill-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .category-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
        }

        .skill-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: #e2e8f0;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .skill-pill:hover {
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(0, 242, 254, 0.08);
          color: #fff;
          transform: translateY(-2px);
        }

        .primary-pill {
          border-color: rgba(16, 185, 129, 0.25);
        }
        .primary-pill .pill-check {
          color: #34d399;
        }

        .mern-pill {
          border-color: rgba(0, 242, 254, 0.25);
        }
        .mern-pill .pill-check {
          color: var(--accent-cyan);
        }

        .pill-check {
          color: var(--accent-cyan);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
