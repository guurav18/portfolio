import React from 'react';
import { ArrowUp, BarChart2 } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import SocialIcon from './SocialIcon';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <BarChart2 size={20} className="icon-cyan" />
            <span className="logo-name">{personalInfo.name}</span>
          </div>
          <p className="footer-tagline">Data Analyst | Full Stack Developer | ML Enthusiast</p>
        </div>

        {/* Footer Social Icons */}
        <div className="footer-socials">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title={social.name}
              aria-label={`Visit Gaurav Gupta's ${social.name} Profile`}
            >
              <SocialIcon name={social.name} size={17} />
            </a>
          ))}
        </div>

        <div className="footer-right">
          <button onClick={scrollToTop} className="scroll-top-btn" title="Back to top" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="copyright">
          © 2026 {personalInfo.name}. All rights reserved.
        </p>
      </div>

      <style>{`
        .footer {
          background: #04070d;
          border-top: 1px solid var(--border-color);
          padding: 2.5rem 0 1.5rem 0;
          position: relative;
          z-index: 1;
        }

        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: #fff;
        }

        .footer-tagline {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .footer-social-btn:hover {
          background: rgba(0, 242, 254, 0.1);
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
          transform: translateY(-2px);
        }

        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .scroll-top-btn:hover {
          background: rgba(0, 242, 254, 0.08);
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
          transform: translateY(-2px);
        }

        .footer-bottom {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          text-align: center;
        }

        .copyright {
          font-size: 0.85rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }

          .footer-left {
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
