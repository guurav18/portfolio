import React, { useState } from 'react';
import {
  FolderGit2, Github, ExternalLink, Check, Code, ShieldCheck,
  Eye, BarChart2, Globe, Sparkles, Zap, Users, MessageSquare,
  Brain, Layers, ArrowUpRight, Star
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

const projectIcons = {
  "skillflow": Globe,
  "predictive-modeling-pipeline": BarChart2,
  "trustshield-ai": ShieldCheck,
  "cricket-drs": Eye
};

const projectConfig = {
  "skillflow": {
    gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(168, 85, 247, 0.15) 50%, rgba(0, 242, 254, 0.08) 100%)",
    borderColor: "rgba(99, 102, 241, 0.5)",
    glowColor: "rgba(99, 102, 241, 0.3)",
    accentColor: "#818cf8",
    tagColor: "rgba(99, 102, 241, 0.2)",
    tagBorder: "rgba(99, 102, 241, 0.4)",
    pillColor: "#818cf8",
    features: [
      { icon: Users, label: "Multi-Role Platform" },
      { icon: Brain, label: "Gemini AI Integration" },
      { icon: MessageSquare, label: "Real-time Chat" },
      { icon: Layers, label: "Kanban + Milestones" },
    ]
  },
  "predictive-modeling-pipeline": {
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(0, 242, 254, 0.05) 100%)",
    borderColor: "rgba(16, 185, 129, 0.4)",
    glowColor: "rgba(16, 185, 129, 0.25)",
    accentColor: "#34d399",
    tagColor: "rgba(16, 185, 129, 0.15)",
    tagBorder: "rgba(16, 185, 129, 0.35)",
    pillColor: "#34d399"
  },
  "trustshield-ai": {
    gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(99, 102, 241, 0.05) 100%)",
    borderColor: "rgba(168, 85, 247, 0.4)",
    glowColor: "rgba(168, 85, 247, 0.25)",
    accentColor: "#c084fc",
    tagColor: "rgba(168, 85, 247, 0.15)",
    tagBorder: "rgba(168, 85, 247, 0.35)",
    pillColor: "#c084fc"
  },
  "cricket-drs": {
    gradient: "linear-gradient(135deg, rgba(0, 242, 254, 0.18) 0%, rgba(59, 130, 246, 0.07) 100%)",
    borderColor: "rgba(0, 242, 254, 0.35)",
    glowColor: "rgba(0, 242, 254, 0.2)",
    accentColor: "#00f2fe",
    tagColor: "rgba(0, 242, 254, 0.1)",
    tagBorder: "rgba(0, 242, 254, 0.3)",
    pillColor: "#00f2fe"
  }
};

const projectCategories = ["All", "Full Stack", "Data Analytics", "Machine Learning", "Computer Vision"];

const Projects = () => {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");

  const heroProject = projects.find(p => p.isHero);
  const otherProjects = projects.filter(p => !p.isHero);

  const filteredOthers = otherProjects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const showHero = activeCategory === "All" || activeCategory === "Full Stack";

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
            Projects &amp; <span className="gradient-text">Technical Work</span>
          </h2>
          <p className="section-subtitle">
            From AI-powered full-stack platforms to machine learning pipelines and computer vision simulations — showcasing end-to-end engineering.
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

        {/* SkillFlow Hero Card */}
        {showHero && heroProject && (() => {
          const conf = projectConfig[heroProject.id];
          const IconComp = projectIcons[heroProject.id] || Code;
          return (
            <div
              className="skillflow-hero-card reveal-on-scroll delay-1"
              style={{ borderColor: conf.borderColor, boxShadow: `0 20px 60px -15px ${conf.glowColor}` }}
            >
              {/* Animated background gradient */}
              <div className="skillflow-bg" style={{ background: conf.gradient }} />

              {/* Top ribbon */}
              <div className="skillflow-ribbon">
                <div className="skillflow-ribbon-left">
                  <span className="hero-badge-pill" style={{ color: conf.accentColor, borderColor: conf.tagBorder, background: conf.tagColor }}>
                    <Star size={12} fill="currentColor" /> Featured Project
                  </span>
                  <span className="category-tag-hero" style={{ color: conf.pillColor, borderColor: conf.tagBorder, background: conf.tagColor }}>
                    Full Stack + AI
                  </span>
                </div>
                <div className="skillflow-icon-wrap" style={{ borderColor: conf.tagBorder, background: conf.tagColor }}>
                  <IconComp size={28} style={{ color: conf.accentColor }} />
                </div>
              </div>

              {/* Main content grid */}
              <div className="skillflow-content-grid">
                {/* Left: Info */}
                <div className="skillflow-info">
                  <h3 className="skillflow-title">
                    SkillFlow
                    <span className="skillflow-title-sub"> — AI-Powered Freelance Marketplace</span>
                  </h3>
                  <p className="skillflow-desc">{heroProject.shortDesc}</p>

                  {/* Mini feature chips */}
                  <div className="skillflow-features">
                    {conf.features.map(({ icon: FIcon, label }) => (
                      <span key={label} className="feature-chip" style={{ borderColor: conf.tagBorder, background: conf.tagColor, color: conf.accentColor }}>
                        <FIcon size={13} />
                        {label}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="skillflow-highlights">
                    <h4 className="highlights-label">What it does:</h4>
                    <ul className="highlights-list-hero">
                      {heroProject.highlights.map((h, i) => (
                        <li key={i} className="highlight-item-hero">
                          <Check size={14} style={{ color: conf.accentColor, flexShrink: 0, marginTop: '2px' }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Tech stack + Actions */}
                <div className="skillflow-aside">
                  <div className="skillflow-tech-block">
                    <span className="tech-block-label">Tech Stack</span>
                    <div className="skillflow-tech-grid">
                      {heroProject.technologies.map(t => (
                        <span key={t} className="tech-chip" style={{ color: conf.accentColor, borderColor: conf.tagBorder, background: conf.tagColor }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="skillflow-actions">
                    <a
                      href={heroProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hero-github"
                      style={{ borderColor: conf.tagBorder }}
                    >
                      <Github size={16} />
                      <span>View on GitHub</span>
                      <ArrowUpRight size={14} />
                    </a>
                    {heroProject.liveUrl ? (
                      <a
                        href={heroProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-hero-live"
                        style={{ background: `linear-gradient(135deg, ${conf.accentColor}22, ${conf.accentColor}44)`, borderColor: conf.borderColor, color: conf.accentColor }}
                      >
                        <Zap size={16} />
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="btn-hero-wip">
                        <Zap size={15} />
                        <span>In Development</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Divider if both visible */}
        {showHero && filteredOthers.length > 0 && (
          <div className="projects-divider reveal-on-scroll">
            <span>More Projects</span>
          </div>
        )}

        {/* Other Projects Grid */}
        {filteredOthers.length > 0 && (
          <div className="projects-grid">
            {filteredOthers.map((proj, idx) => {
              const IconComp = projectIcons[proj.id] || Code;
              const conf = projectConfig[proj.id] || projectConfig["cricket-drs"];

              return (
                <div
                  key={proj.id}
                  className={`glass-card project-card reveal-on-scroll delay-${idx + 1}`}
                  style={{ '--card-glow': conf.glowColor, '--card-border': conf.borderColor }}
                >
                  {/* Banner */}
                  <div className="project-banner" style={{ background: conf.gradient }}>
                    <div className="category-pill-wrap">
                      <span className="category-pill" style={{ color: conf.accentColor, borderColor: conf.tagBorder, background: 'rgba(8,12,20,0.8)' }}>
                        {proj.category}
                      </span>
                    </div>
                    <div className="project-icon-badge" style={{ borderColor: conf.tagBorder, background: `${conf.tagColor}` }}>
                      <IconComp size={22} style={{ color: conf.accentColor }} />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="project-body">
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-desc">{proj.shortDesc}</p>

                    <div className="highlights-box">
                      <h4 className="highlights-title">Key Highlights:</h4>
                      <ul className="highlights-list">
                        {proj.highlights.map((h, i) => (
                          <li key={i} className="highlight-item">
                            <Check size={13} style={{ color: conf.accentColor, flexShrink: 0, marginTop: '2px' }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-tech-list">
                      {proj.technologies.map((tech) => (
                        <span key={tech} className="tech-badge" style={{ color: conf.accentColor, borderColor: conf.tagBorder, background: conf.tagColor }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="project-footer">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-github-placeholder"
                    >
                      <Github size={15} />
                      <span>View Repository</span>
                      <ExternalLink size={13} />
                    </a>
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-live-demo"
                        style={{ color: conf.accentColor, borderColor: conf.tagBorder }}
                      >
                        <Zap size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty state for active filter */}
        {!showHero && filteredOthers.length === 0 && (
          <div className="empty-filter-state">
            <p>No projects in this category yet.</p>
          </div>
        )}
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

        .filter-btn {
          padding: 0.45rem 1.1rem;
          border-radius: 9999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          font-family: var(--font-mono);
          transition: all var(--transition-fast);
          cursor: pointer;
        }
        .filter-btn:hover {
          border-color: rgba(0, 242, 254, 0.35);
          color: var(--accent-cyan);
        }
        .filter-btn.active {
          background: rgba(0, 242, 254, 0.1);
          border-color: rgba(0, 242, 254, 0.5);
          color: var(--accent-cyan);
        }

        /* -------- SkillFlow Hero Card -------- */
        .skillflow-hero-card {
          position: relative;
          border: 1px solid;
          border-radius: var(--radius-xl);
          backdrop-filter: blur(16px);
          overflow: hidden;
          margin-bottom: 2rem;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .skillflow-hero-card:hover {
          transform: translateY(-4px);
        }
        .skillflow-bg {
          position: absolute;
          inset: 0;
          opacity: 0.7;
          pointer-events: none;
        }
        .skillflow-ribbon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .skillflow-ribbon-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          border: 1px solid;
        }
        .category-tag-hero {
          font-size: 0.75rem;
          font-weight: 600;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          border: 1px solid;
        }
        .skillflow-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .skillflow-content-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 2rem;
          padding: 2rem;
        }
        .skillflow-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .skillflow-title-sub {
          color: #94a3b8;
          font-weight: 500;
          font-size: 1.1rem;
        }
        .skillflow-desc {
          color: var(--text-muted);
          font-size: 0.975rem;
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .skillflow-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .feature-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-sm);
          border: 1px solid;
          font-family: var(--font-mono);
        }
        .skillflow-highlights {
          background: rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }
        .highlights-label {
          font-size: 0.8rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-dim);
          margin-bottom: 0.75rem;
        }
        .highlights-list-hero {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .highlight-item-hero {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: #cbd5e1;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Right aside */
        .skillflow-aside {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .skillflow-tech-block {
          background: rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }
        .tech-block-label {
          display: block;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-dim);
          margin-bottom: 0.75rem;
        }
        .skillflow-tech-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .tech-chip {
          font-size: 0.78rem;
          font-weight: 600;
          font-family: var(--font-mono);
          padding: 0.3rem 0.7rem;
          border-radius: var(--radius-sm);
          border: 1px solid;
        }
        .skillflow-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .btn-hero-github {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.8rem 1.25rem;
          border-radius: var(--radius-md);
          background: rgba(255,255,255,0.05);
          border: 1px solid;
          color: #f1f5f9;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .btn-hero-github:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }
        .btn-hero-live {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.8rem 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid;
          font-size: 0.9rem;
          font-weight: 700;
          transition: all var(--transition-fast);
        }
        .btn-hero-live:hover {
          filter: brightness(1.2);
        }
        .btn-hero-wip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          background: rgba(255,255,255,0.03);
          border: 1px dashed rgba(255,255,255,0.15);
          color: var(--text-dim);
          font-size: 0.85rem;
          font-weight: 500;
          font-family: var(--font-mono);
        }

        /* Divider */
        .projects-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 2.5rem 0 2rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .projects-divider::before,
        .projects-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.07);
        }

        /* -------- Other Project Cards -------- */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 1.75rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 0;
          height: 100%;
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--card-border, var(--border-glow));
          box-shadow: 0 16px 48px -12px var(--card-glow, rgba(0,242,254,0.2));
        }
        .project-banner {
          height: 110px;
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
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-family: var(--font-mono);
        }
        .project-icon-badge {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .project-body {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .project-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.6rem;
          line-height: 1.35;
        }
        .project-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .highlights-box {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-bottom: 1.25rem;
          flex: 1;
        }
        .highlights-title {
          font-size: 0.78rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.6rem;
        }
        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          color: #cbd5e1;
          font-size: 0.855rem;
          line-height: 1.5;
        }
        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: auto;
        }
        .tech-badge {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          border: 1px solid;
          font-family: var(--font-mono);
          font-weight: 600;
        }
        .project-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid var(--border-color);
          background: rgba(8,12,20,0.35);
          display: flex;
          gap: 0.6rem;
        }
        .btn-github-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          flex: 1;
          padding: 0.6rem;
          border-radius: var(--radius-md);
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }
        .btn-github-placeholder:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.2);
          color: #fff;
        }
        .btn-live-demo {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid;
          background: transparent;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .btn-live-demo:hover {
          filter: brightness(1.25);
        }

        .empty-filter-state {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
          font-size: 0.9rem;
        }

        @media (max-width: 900px) {
          .skillflow-content-grid {
            grid-template-columns: 1fr;
          }
          .skillflow-aside {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .skillflow-tech-block,
          .skillflow-actions {
            flex: 1;
            min-width: 220px;
          }
          .skillflow-actions {
            flex-direction: row;
          }
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .skillflow-content-grid {
            padding: 1.25rem;
          }
          .skillflow-ribbon {
            padding: 1rem 1.25rem 0.75rem;
          }
          .skillflow-title {
            font-size: 1.35rem;
          }
          .skillflow-title-sub {
            display: block;
            font-size: 0.95rem;
          }
          .skillflow-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
