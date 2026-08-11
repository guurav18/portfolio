export const personalInfo = {
  name: "Gaurav Gupta",
  title: "Data Analyst | Full Stack Developer | ML Enthusiast",
  shortBio: "Computer Science undergraduate with hands-on experience in data analysis, machine learning, and full-stack web development.",
  about: {
    paragraph1: "I am a Computer Science undergraduate at Allenhouse Group of Institutions with a primary focus on Data Analytics, Data Science, and Full Stack Web Development. I possess a strong foundation in Python and SQL, alongside hands-on experience performing exploratory data analysis (EDA), data preprocessing, visualization, and predictive modeling.",
    paragraph2: "Complementing my analytical background, I am skilled in MERN Stack development (MongoDB, Express.js, React.js, Node.js, REST APIs), enabling me to build both data-driven insights and full-stack web applications. Through my machine learning internships, I have applied Python and analytical workflows to search ranking datasets and supervised learning models.",
    focusAreas: [
      "Data Analytics & Exploratory Data Analysis (EDA)",
      "MERN Stack Web Development (React, Node, Express, MongoDB)",
      "Predictive Modeling & Machine Learning Workflows",
      "Database Systems (SQL, PostgreSQL, MongoDB)"
    ]
  },
  contact: {
    email: "gauravgupta2506@gmail.com",
    location: "Kanpur, Uttar Pradesh, India",
    educationInstitution: "Allenhouse Group of Institutions",
    linkedin: "https://www.linkedin.com/in/gaurav-gupta-b32a5330a/",
    github: "https://github.com/guurav18",
    leetcode: "https://leetcode.com/u/gaurav1881/",
    huggingface: "https://huggingface.co/gauravgupta18"
  }
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gaurav-gupta-b32a5330a/",
    handle: "gaurav-gupta-b32a5330a",
    iconName: "Linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/guurav18",
    handle: "guurav18",
    iconName: "Github"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/gaurav1881/",
    handle: "gaurav1881",
    iconName: "Code2"
  },
  {
    name: "Hugging Face",
    url: "https://huggingface.co/gauravgupta18",
    handle: "gauravgupta18",
    iconName: "Smile"
  }
];

export const skillsData = {
  "Data Analytics & Data Science": [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Exploratory Data Analysis (EDA)",
    "Data Wrangling",
    "Data Preprocessing",
    "Data Visualization",
    "Statistical Analysis",
    "Feature Engineering",
    "Predictive Modeling",
    "Power BI",
    "Tableau"
  ],
  "MERN Stack Development": [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs"
  ],
  "Databases": [
    "MySQL",
    "PostgreSQL",
    "MongoDB"
  ],
  "Machine Learning & AI": [
    "Scikit-learn",
    "Supervised Learning",
    "Unsupervised Learning",
    "Classification",
    "Regression",
    "Clustering",
    "NLP Fundamentals"
  ],
  "Computer Vision": [
    "OpenCV"
  ],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Jupyter Notebook",
    "Google Colab",
    "Power BI",
    "Tableau"
  ]
};

export const experiences = [
  {
    id: "flyrank-ai",
    company: "FlyRank AI",
    role: "Machine Learning Intern",
    location: "Remote",
    period: "Jul 2026 – Present",
    status: "Present",
    badge: "Current Role",
    responsibilities: [
      "Built and evaluated machine learning and search ranking pipelines using Python and Scikit-learn on real-world datasets.",
      "Performed comprehensive data preprocessing, feature engineering, and exploratory data analysis (EDA) for search ranking tasks.",
      "Implemented and compared Logistic Regression, Decision Tree, and Random Forest models to identify patterns and rank signals.",
      "Contributed data analysis and predictive model evaluations to the Google Search Ranking & Discoverability Capstone."
    ],
    tech: ["Python", "SQL", "Scikit-learn", "EDA", "Feature Engineering", "Data Preprocessing", "Ranking Models"]
  },
  {
    id: "saiket-systems",
    company: "SaiKet Systems",
    role: "Machine Learning Intern",
    location: "Kanpur, India (Remote)",
    period: "Feb 2026 – Mar 2026",
    status: "Completed",
    badge: "ML & Data Internship",
    responsibilities: [
      "Developed and optimized supervised machine learning models in Python using Scikit-learn.",
      "Executed end-to-end data preprocessing including missing-value handling, feature scaling, and categorical encoding.",
      "Conducted extensive Exploratory Data Analysis (EDA) and data visualization using Pandas, Matplotlib, and Seaborn.",
      "Evaluated model performance using cross-validation, confusion matrices, precision-recall metrics, and ROC-AUC curves."
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA", "Data Preprocessing", "ROC-AUC"]
  }
];

export const projects = [
  {
    id: "predictive-modeling-pipeline",
    title: "Predictive Modeling & Analytics Pipeline",
    category: "Data Analytics",
    technologies: ["Python", "SQL", "Scikit-learn", "Pandas", "Matplotlib"],
    shortDesc: "End-to-end automated data pipeline for ingestion, automated data cleaning, feature engineering, and statistical cross-validation modeling.",
    highlights: [
      "End-to-end ML & Data analytics pipeline for classification.",
      "Raw CSV ingestion and automated data cleaning.",
      "Feature engineering and statistical data preprocessing.",
      "Logistic Regression and Random Forest model comparison.",
      "Cross-validation performance comparison.",
      "Automated exploratory analysis and trend extraction."
    ],
    githubPlaceholder: "https://github.com/guurav18",
    featured: true
  },
  {
    id: "trustshield-ai",
    title: "TrustShield AI – Explainable Multi-Modal Deepfake Detection System",
    category: "Machine Learning",
    technologies: ["Python", "NLP", "Computer Vision", "Deep Learning", "OpenCV"],
    shortDesc: "AI-powered multi-modal deepfake detection framework analyzing manipulated text, images, and media with explainable AI workflows.",
    highlights: [
      "AI-powered multi-modal deepfake detection system.",
      "Analyzes manipulated text, images, and media content.",
      "Uses NLP and computer vision techniques.",
      "Explainable AI workflows.",
      "Generates human-readable insights for misinformation and fraud detection."
    ],
    githubPlaceholder: "https://github.com/guurav18",
    featured: true
  },
  {
    id: "cricket-drs",
    title: "Cricket Decision Review System (LBW)",
    category: "Computer Vision",
    technologies: ["Python", "OpenCV", "NumPy", "Pandas"],
    shortDesc: "Computer vision-based DRS simulator replicating Leg Before Wicket (LBW) detection using trajectory tracking and impact point prediction algorithms.",
    highlights: [
      "Computer vision-based DRS simulator.",
      "Focused on LBW detection.",
      "Implemented ball tracking and impact prediction concepts.",
      "Used visual analysis techniques to simulate cricket decision-making workflows."
    ],
    githubPlaceholder: "https://github.com/guurav18",
    featured: true
  }
];

export const education = [
  {
    institution: "Allenhouse Group of Institutions",
    location: "Kanpur, Uttar Pradesh, India",
    degree: "Bachelor of Technology — Computer Science (B.Tech)",
    period: "Aug 2023 – Aug 2027",
    details: "Focusing on Data Analytics, MERN Web Development, Machine Learning, Data Structures & Algorithms, DBMS, Operating Systems, and Computer Networks."
  }
];

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 — Certified Data Science Professional",
    issuer: "Oracle",
    year: "2025",
    type: "Professional Certification",
    icon: "Award"
  },
  {
    title: "Deloitte Australia — Data Analytics Job Simulation",
    issuer: "Deloitte Australia / Forage",
    year: "2025",
    type: "Job Simulation",
    icon: "BarChart3"
  },
  {
    title: "IBM / Coursera — Data Analysis with Python",
    issuer: "IBM / Coursera",
    year: "2025",
    type: "Course Certificate",
    icon: "FileCode"
  },
  {
    title: "Infosys Springboard — Deep Learning for Developers, Neural Networks, and AI",
    issuer: "Infosys Springboard",
    year: "2025",
    type: "Specialization",
    icon: "Brain"
  },
  {
    title: "Google / Coursera — Introduction to Generative AI",
    issuer: "Google / Coursera",
    year: "2025",
    type: "Course Certificate",
    icon: "Sparkles"
  },
  {
    title: "NIELIT — Course on Computer Concepts (CCC)",
    issuer: "NIELIT",
    year: "2024",
    type: "Government Certification",
    icon: "CheckCircle2"
  }
];

export const resumeFullText = `
GAURAV GUPTA
Data Analyst | Full Stack Developer | ML Enthusiast
Kanpur, Uttar Pradesh, India | gauravgupta2506@gmail.com

SUMMARY
Computer Science undergraduate with hands-on experience in data analysis, machine learning, and full-stack web development. Strong foundation in Python, SQL, EDA, data visualization, MERN stack web development (MongoDB, Express, React, Node), and predictive modeling.

PROFILES
LinkedIn: https://www.linkedin.com/in/gaurav-gupta-b32a5330a/
GitHub: https://github.com/guurav18
LeetCode: https://leetcode.com/u/gaurav1881/
Hugging Face: https://huggingface.co/gauravgupta18

EDUCATION
Allenhouse Group of Institutions | Kanpur, UP, India
Bachelor of Technology — Computer Science (B.Tech)
Duration: Aug 2023 – Aug 2027

EXPERIENCE
FlyRank AI | Machine Learning Intern (Remote)
Jul 2026 – Present
• Built and evaluated machine learning and search ranking pipelines using Python and Scikit-learn on real-world datasets.
• Performed comprehensive data preprocessing, feature engineering, and exploratory data analysis (EDA) for search ranking tasks.
• Implemented and compared Logistic Regression, Decision Tree, and Random Forest models.
• Contributed data analysis and model evaluation to the Google Search Ranking & Discoverability Capstone.

SaiKet Systems | Machine Learning Intern (Kanpur, India - Remote)
Feb 2026 – Mar 2026
• Developed and optimized supervised machine learning models in Python using Scikit-learn.
• Performed data preprocessing including missing-value handling, feature scaling, and categorical encoding.
• Conducted EDA and data visualization using Pandas, Matplotlib, and Seaborn.
• Evaluated models using cross-validation, confusion matrices, precision-recall metrics, and ROC-AUC.

PROJECTS
Predictive Modeling & Analytics Pipeline
• End-to-end ML & Data analytics pipeline for classification.
• Raw CSV ingestion, feature engineering, automated data cleaning, and trend analysis.
• Logistic Regression and Random Forest model comparisons with cross-validation.
• Tech: Python, SQL, Scikit-learn, Pandas, Matplotlib

TrustShield AI – Explainable Multi-Modal Deepfake Detection System
• AI-powered multi-modal deepfake detection system.
• Analyzes manipulated text, images, and media content using NLP & Computer Vision.
• Explainable AI workflows generating human-readable insights for fraud detection.
• Tech: Python, NLP, Computer Vision, Deep Learning, OpenCV

Cricket Decision Review System (LBW)
• Computer vision-based DRS simulator focused on LBW detection.
• Ball tracking and impact prediction visual analysis workflows.
• Tech: Python, OpenCV, NumPy, Pandas

TECHNICAL SKILLS
• Data Analytics & Data Science: Python, SQL, Pandas, NumPy, Matplotlib, Seaborn, Exploratory Data Analysis (EDA), Data Wrangling, Data Preprocessing, Data Visualization, Statistical Analysis, Feature Engineering, Predictive Modeling, Power BI, Tableau
• MERN Stack Development: HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, MongoDB, REST APIs
• Databases: MySQL, PostgreSQL, MongoDB
• Machine Learning & AI: Scikit-learn, Supervised Learning, Unsupervised Learning, Classification, Regression, Clustering, NLP Fundamentals
• Computer Vision: OpenCV
• Tools & Platforms: Git, GitHub, Jupyter Notebook, Google Colab, Power BI, Tableau

CERTIFICATIONS
• Oracle Cloud Infrastructure 2025 — Certified Data Science Professional
• Deloitte Australia — Data Analytics Job Simulation
• IBM / Coursera — Data Analysis with Python
• Infosys Springboard — Deep Learning for Developers, Neural Networks, and AI
• Google / Coursera — Introduction to Generative AI
• NIELIT — Course on Computer Concepts (CCC)
`;
