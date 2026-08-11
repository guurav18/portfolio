import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Calculate scroll progress percentage
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      setScrollProgress(scrolledPercent);
    };

    window.addEventListener('scroll', handleScroll);

    // Active link highlighting via IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="logo-brand">
            <div className="logo-icon">
              <Cpu size={22} className="cpu-icon" />
            </div>
            <div className="logo-text">
              <span className="logo-name">GG</span>
              <span className="logo-dot">.</span>
              <span className="logo-subtitle">Data & Full Stack</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                      {link.name}
                      {isActive && <span className="active-dot" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="navbar-actions">
            <button className="resume-btn" onClick={onOpenResume}>
              <Terminal size={15} />
              <span>Resume</span>
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mobile-drawer-footer">
              <button className="btn-mobile-resume" onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}>
                <Terminal size={16} />
                <span>View Resume Text</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Side Quick Navigation Dots */}
      <div className="side-nav-dock">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`side-dot ${isActive ? 'active' : ''}`}
              title={link.name}
            >
              <span className="dot-tooltip">{link.name}</span>
            </a>
          );
        })}
      </div>

      <style>{`
        .scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #00f2fe 0%, #6366f1 50%, #10b981 100%);
          z-index: 1000;
          transition: width 0.1s ease-out;
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.7);
        }

        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 900;
          padding: 1.2rem 0;
          transition: all var(--transition-normal);
          background: transparent;
        }

        .navbar-header.scrolled {
          padding: 0.8rem 0;
          background: rgba(8, 12, 20, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          transition: all var(--transition-normal);
        }

        .logo-brand:hover .logo-icon {
          background: rgba(0, 242, 254, 0.2);
          transform: rotate(6deg) scale(1.08);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.4);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: #fff;
          letter-spacing: -0.02em;
        }

        .logo-dot {
          color: var(--accent-cyan);
          display: inline;
        }

        .logo-subtitle {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: block;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          list-style: none;
        }

        .nav-link {
          position: relative;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          padding: 0.4rem 0;
          transition: color var(--transition-fast);
        }

        .nav-link:hover, .nav-link.active {
          color: var(--accent-cyan);
        }

        .active-dot {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.3);
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .resume-btn:hover {
          background: var(--accent-cyan);
          color: #080c14;
          box-shadow: 0 0 18px rgba(0, 242, 254, 0.45);
          transform: translateY(-2px);
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          color: var(--text-main);
          padding: 0.4rem;
        }

        .mobile-nav-drawer {
          display: none;
        }

        /* Floating Side Nav Dock */
        .side-nav-dock {
          position: fixed;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 850;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: rgba(8, 12, 20, 0.6);
          backdrop-filter: blur(10px);
          padding: 0.6rem 0.4rem;
          border-radius: 9999px;
          border: 1px solid var(--border-color);
        }

        .side-dot {
          position: relative;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transition: all var(--transition-fast);
        }

        .side-dot:hover, .side-dot.active {
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
          transform: scale(1.3);
        }

        .dot-tooltip {
          position: absolute;
          right: 22px;
          top: 50%;
          transform: translateY(-50%) translateX(5px);
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
        }

        .side-dot:hover .dot-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        @media (max-width: 992px) {
          .desktop-nav, .side-nav-dock {
            display: none;
          }

          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-nav-drawer {
            display: block;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(8, 12, 20, 0.96);
            backdrop-filter: blur(20px);
            z-index: 899;
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .mobile-nav-drawer.open {
            transform: translateX(0);
          }

          .mobile-nav-content {
            padding: 2rem 1.5rem;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
          }

          .mobile-nav-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }

          .mobile-nav-link {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-muted);
            display: block;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .mobile-nav-link.active, .mobile-nav-link:hover {
            color: var(--accent-cyan);
            padding-left: 0.5rem;
          }

          .btn-mobile-resume {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.85rem;
            border-radius: var(--radius-md);
            background: var(--gradient-brand);
            color: #080c14;
            font-weight: 700;
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
