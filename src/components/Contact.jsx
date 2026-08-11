import React, { useState } from 'react';
import { Mail, Send, CheckCircle, MapPin, Copy, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import SocialIcon from './SocialIcon';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            I'm open to Data Analyst opportunities, internships, and full-time roles where I can turn data into meaningful insights and build impactful solutions.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Contact & Social Cards */}
          <div className="contact-info-col reveal-on-scroll delay-1">
            <div className="glass-card contact-card">
              <div className="info-icon-wrap">
                <Mail size={22} className="icon-cyan" />
              </div>
              <div className="info-content">
                <span className="info-label">Direct Email</span>
                <a href={`mailto:${personalInfo.contact.email}`} className="info-value">
                  {personalInfo.contact.email}
                </a>
              </div>
              <button className="copy-btn" onClick={handleCopyEmail} title="Copy Email">
                {copiedEmail ? <CheckCircle size={16} color="#10b981" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="glass-card contact-card">
              <div className="info-icon-wrap">
                <MapPin size={22} className="icon-cyan" />
              </div>
              <div className="info-content">
                <span className="info-label">Location</span>
                <span className="info-value-text">{personalInfo.contact.location}</span>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div className="glass-card socials-card">
              <h4 className="socials-card-title">Professional Profiles</h4>
              <p className="socials-card-subtitle">Connect across development & research platforms:</p>
              
              <div className="socials-list">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                    title={`Visit Gaurav's ${social.name}`}
                    aria-label={`Visit Gaurav Gupta's ${social.name} Profile`}
                  >
                    <div className="social-icon-box">
                      <SocialIcon name={social.name} size={18} />
                    </div>
                    <div className="social-text">
                      <span className="social-name">{social.name}</span>
                      <span className="social-handle">{social.handle}</span>
                    </div>
                    <ExternalLink size={14} className="social-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card form-card reveal-on-scroll delay-2">
            <h3 className="form-title">Send a Direct Message</h3>
            {formSubmitted ? (
              <div className="form-success-box">
                <CheckCircle size={40} className="success-icon" />
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. Gaurav will review your message and reply back shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Hiring Manager / Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    placeholder="Data Analyst Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    placeholder="Hi Gaurav, I saw your portfolio and would like to discuss a role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: rgba(13, 19, 34, 0.4);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 2rem;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          position: relative;
        }

        .info-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .info-label {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .info-value {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          word-break: break-all;
        }

        .info-value:hover {
          color: var(--accent-cyan);
        }

        .info-value-text {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }

        .copy-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .copy-btn:hover {
          background: rgba(0, 242, 254, 0.1);
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
        }

        .socials-card {
          padding: 1.75rem;
        }

        .socials-card-title {
          font-size: 1.15rem;
          color: #fff;
          margin-bottom: 0.2rem;
        }

        .socials-card-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }

        .socials-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }

        .social-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          transition: all var(--transition-fast);
        }

        .social-item:hover {
          background: rgba(0, 242, 254, 0.08);
          border-color: rgba(0, 242, 254, 0.35);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.15);
        }

        .social-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .social-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .social-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.2;
        }

        .social-handle {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .social-arrow {
          color: var(--text-dim);
          flex-shrink: 0;
        }

        /* Form Card */
        .form-card {
          padding: 2.25rem;
        }

        .form-title {
          font-size: 1.3rem;
          color: #fff;
          margin-bottom: 1.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .form-group input, .form-group textarea {
          background: rgba(8, 12, 20, 0.8);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: all var(--transition-fast);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 12px rgba(0, 242, 254, 0.2);
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .form-success-box {
          text-align: center;
          padding: 3rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon {
          color: var(--accent-emerald);
        }

        .form-success-box h4 {
          font-size: 1.4rem;
          color: #fff;
        }

        .form-success-box p {
          color: var(--text-muted);
          max-width: 400px;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .socials-list {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
