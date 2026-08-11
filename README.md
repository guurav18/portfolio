# Gaurav Gupta — Personal Portfolio Website

A modern, high-performance, responsive personal portfolio website for **Gaurav Gupta** (Machine Learning & Data Science Enthusiast), built with React, Vite, Lucide Icons, and Vanilla CSS3.

![Portfolio Preview Tag](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20CSS3-00f2fe)
![Role Tag](https://img.shields.io/badge/Role-Machine%20Learning%20%26%20Data%20Science-6366f1)

## ⚡ Features & Key Highlights

- **100% Resume Accurate**: Built strictly from verified resume data (No invented experience, metrics, or fake skill percentage bars).
- **Interactive ML Background**: Custom HTML5 Canvas particle network animation reflecting neural network architecture.
- **Sticky Active Navbar**: Smooth scroll navigation with active section highlighting powered by `IntersectionObserver`.
- **Responsive Mobile Drawer**: Tailored layout for desktop, tablet, and mobile devices.
- **Resume Viewer Modal**: Built-in interactive resume preview modal with copy-to-clipboard & text download functionality.
- **Project Showcase**: Card layouts highlighting technical stack, key accomplishments, and repository placeholder targets.
- **Internship Timeline**: Interactive work history for FlyRank AI and SaiKet Systems ML internships.
- **Skill Matrix**: Categorized tech stack pills across Machine Learning, Data Science, Databases, Tools, and CS Core.
- **Certifications & Education**: Clean cards for Oracle, Infosys, Deloitte, Google, IBM, NIELIT, and B.Tech CS degree.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + Vite
- **Styling**: Modern CSS3 (Custom Variables, Flexbox, Grid, Glassmorphism, CSS Keyframe Animations)
- **Icons**: `lucide-react`
- **Fonts**: Inter & Outfit (Google Fonts)

---

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have Node.js (v16+ recommended) and npm installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the website.

### 3. Build for Production
```bash
npm run build
```

---

## 📂 Project Architecture

```
portfolio/
├── index.html              # Primary HTML template & SEO Meta Tags
├── package.json            # Scripts & dependencies
├── vite.config.js          # Vite configuration
├── README.md               # Documentation
└── src/
    ├── main.jsx            # Application entrypoint
    ├── App.jsx             # Main App layout & modal state
    ├── index.css           # Global design system & theme variables
    ├── data/
    │   └── portfolioData.js # Single source of truth for resume info
    └── components/
        ├── BackgroundCanvas.jsx # Neural node canvas animation
        ├── Navbar.jsx           # Sticky nav & mobile menu
        ├── Hero.jsx             # Headline, CTAs, socials, code visual
        ├── About.jsx            # Bio & CS core subjects
        ├── Skills.jsx           # Categorized skill badges
        ├── Experience.jsx       # Internship timeline
        ├── Projects.jsx         # Project showcase cards
        ├── Certifications.jsx   # Credentials grid
        ├── Education.jsx        # B.Tech CS degree card
        ├── Contact.jsx          # Email info & contact form
        ├── Footer.jsx           # Copyright & scroll to top
        └── ResumeModal.jsx      # Resume preview modal
```

---

## 👤 Author
**Gaurav Gupta**  
Computer Science Undergraduate | Machine Learning & Data Science Enthusiast  
Email: [gauravgupta2506@gmail.com](mailto:gauravgupta2506@gmail.com)
