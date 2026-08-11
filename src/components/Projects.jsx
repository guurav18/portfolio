import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Check, Code, ShieldCheck, Eye, BarChart2, Globe } from 'lucide-react';
import { projects } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

const projectIcons = {
  "predictive-modeling-pipeline": BarChart2,
  "trustshield-ai": ShieldCheck,
  "cricket-drs": Eye
};

const projectGradients = {
  "predictive-modeling-pipeline": "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(0, 242, 254, 0.05) 100%)",
  "trustshield-ai": "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(99, 102, 241, 0.05) 100%)",
  "cricket-drs": "linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)"
};

const projectCategories = ["All", "Data Analytics", "Machine Learning", "Computer Vision"];

const Projects = () => {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Data Analytics & <span className="gradient-text">Technical Projects</span>
          </h2>
          <p className="section-subtitle">
            Featured projects showcasing end-to-end data analytics, machine learning pipelines, and computer vision simulations.
          </p>
        </div>

        {/* Project Category Filters */}
        <div className="projects-filter-container reveal-on-scroll delay-1">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj, idx) => {
            const IconComp = projectIcons[proj.id] || Code;
            const bgGradient = projectGradients[proj.id];
            const isDataAnalytics = proj.category === "Data Analytics";

            return (
              <div
                key={proj.id}
                className={`glass-card project-card reveal-on-scroll delay-${idx + 1} ${isDataAnalytics ? 'featured-analytics-card' : ''}`}
              >
                {/* Project Top Accent Visual Header */}
                <div className="project-banner" style={{ background: bgGradient }}>
                  <div className="category-pill-wrap">
                    <span className="category-pill">{proj.category}</span>
                    {isDataAnalytics && <span className="featured-badge">Featured Data Project</span>}
                  </div>
                  <div className="project-icon-badge">
                    <IconComp size={24} className="icon-cyan" />
                  </div>
                </div>

                {/* Project Body */}
                <div className="project-body">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.shortDesc}</p>

                  <div className="highlights-box">
                    <h4 className="highlights-title">Key Highlights:</h4>
                    <ul className="highlights-list">
                      {proj.highlights.map((h, i) => (
                        <li key={i} className="highlight-item">
                          <Check size={14} className="highlight-check" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Badges */}
                  <div className="project-tech-list">
                    {proj.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="project-footer">
                  <a
                    href={proj.githubPlaceholder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github-placeholder"
                    title="GitHub Repository Link"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated MERN Stack Capability Highlight Card */}
        <div className="glass-card mern-capability-card reveal-on-scroll delay-4">
          <div className="mern-card-content">
            <div className="mern-icon-column">
              <Globe size={32} className="icon-cyan" />
            </div>
            <div className="mern-text-column">
              <span className="mern-tag">MERN Stack Architecture</span>
              <h4>Full Stack Web Development Capabilities</h4>
              <p>
                In addition to Data Analytics and ML pipelines, I construct full-stack web applications using <strong>MongoDB, Express.js, React.js, and Node.js</strong> with RESTful API integration and modular UI components.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
        }

        .projects-filter-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 0;
          height: 100%;
        }

        .project-card.featured-analytics-card {
          border-color: rgba(16, 185, 129, 0.4);
          box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.2);
        }

        .project-banner {
          height: 120px;
          position: relative;
          padding: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-color);
        }

        .category-pill-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          align-items: flex-start;
        }

        .category-pill {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          background: rgba(8, 12, 20, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
        }

        .featured-badge {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;
          font-family: var(--font-mono);
          border: 1px solid rgba(16, 185, 129, 0.4);
        }

        .project-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(8, 12, 20, 0.8);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-body {
          padding: 1.75rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .project-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .highlights-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .highlights-title {
          font-size: 0.85rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: #cbd5e1;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .highlight-check {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .tech-badge {
          font-size: 0.78rem;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          background: rgba(0, 242, 254, 0.06);
          border: 1px solid rgba(0, 242, 254, 0.2);
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .project-footer {
          padding: 1.25rem 1.75rem;
          border-top: 1px solid var(--border-color);
          background: rgba(8, 12, 20, 0.4);
        }

        .btn-github-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 100%;
          padding: 0.65rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .btn-github-placeholder:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(0, 242, 254, 0.3);
          color: var(--accent-cyan);
        }

        /* MERN Capability Card */
        .mern-capability-card {
          padding: 1.75rem 2rem;
          border-color: rgba(0, 242, 254, 0.25);
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.05) 0%, rgba(13, 19, 34, 0.8) 100%);
        }

        .mern-card-content {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .mern-icon-column {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mern-text-column .mern-tag {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.2rem;
        }

        .mern-text-column h4 {
          font-size: 1.15rem;
          color: #fff;
          margin-bottom: 0.35rem;
        }

        .mern-text-column p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .mern-card-content {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
