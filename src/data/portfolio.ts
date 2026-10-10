/**
 * Kashi Mahtta Portfolio — Content from resume only.
 * Full-Stack Developer | Learning DSA and Cloud Computing | AWS & Docker Enthusiast
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Kashi Mahtta',
  displayName: 'Kashi Mahtta',
  firstName: 'KASHI',
  seriesTag: 'THE SERIES',
  originalLabel: 'A KASHI ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'Learning DSA & Cloud', 'AWS & Docker Enthusiast'],
  intro:
    'B.Tech Computer Science student with hands-on full-stack web development experience. Building responsive applications with React, JavaScript, Python, Node.js, Express, and integrating AI/LLM APIs.',
  location: 'Delhi, India',
  email: 'kashimahtta@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/kashi-mahtta',
    github: 'https://github.com/kashimahtta',
  },
  resumePdf: '/assets/Kashi_Mahtta_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Kashi Mahtta',
  },
  interests: ['AI & LLMs', 'Cloud Computing (AWS)', 'Data Structures & Algorithms'],
};

export const education = [
  {
    school: 'JSS Academy of Technical Education',
    place: 'Noida',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    period: '2024 – 2028',
    score: 'Currently Enrolled',
  },
  {
    school: 'DAV Public School',
    place: 'Delhi',
    degree: 'Class XII — PCM + Biotechnology',
    period: '2024',
    score: 'Completed',
  },
];

export const experience = [
  {
    company: 'HCLTech',
    role: 'Gen AI Intern',
    place: 'Remote',
    period: 'June 2026 – Aug 2026',
    points: [
      'Developed AI applications using LLMs, Transformer architecture, and LLM API integration with prompt engineering and structured JSON outputs.',
      'Built RAG pipelines using LangChain, LangGraph, FAISS, and Cohere Embedding models with advanced retrieval optimization.',
      'Designed agent-based AI workflows integrating embeddings, retrieval, reranking, and workflow automation for enterprise solutions.',
      'Delivered an enterprise-grade AI capstone project using Python, Git, and modern AI frameworks.',
    ],
  },
  {
    company: 'Kenmark ITAN',
    role: 'Software Development Intern',
    place: 'Remote',
    period: 'Jan 2025 – Jun 2025',
    points: [
      'Developed responsive frontend interfaces using HTML, CSS, and JavaScript for business applications.',
      'Integrated REST APIs and handled structured data flow between frontend and backend systems.',
      'Built CRUD-based modules using JavaScript, Node.js, and MongoDB for dynamic data management.',
      'Debugged UI and functional issues, improving application stability and performance.',
    ],
  },
  {
    company: 'Persevex',
    role: 'Web Development Intern',
    place: 'Remote',
    period: 'Oct 2025 – Mar 2026',
    points: [
      'Developed full-stack web applications using HTML, CSS, JavaScript, Bootstrap, and React.js.',
      'Implemented CRUD operations and integrated MongoDB for efficient data management.',
      'Designed and connected backend services using Node.js for seamless functionality.',
      'Debugged and optimized frontend and backend performance, reducing errors and improving efficiency.',
    ],
  },
  {
    company: '1Stop',
    role: 'Frontend Development Intern',
    place: 'Remote',
    period: 'Jul 2025 – Sep 2025',
    points: [
      'Developed responsive and user-friendly interfaces using HTML, CSS, JavaScript, jQuery, and Bootstrap.',
      'Implemented dynamic features using JavaScript, DOM manipulation, and event handling.',
      'Optimized website performance and ensured cross-browser compatibility across devices.',
      'Debugged and refactored code to improve usability, maintainability, and load efficiency.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-laptop-health',
    title: 'AI Laptop Health Guardian',
    year: '2026',
    genre: 'AI • Real-time Monitoring • Dashboard',
    logline: 'AI-powered laptop health monitoring with real-time metrics, predictive analytics, and AI troubleshooting assistant.',
    stack: ['Python', 'React.js', 'Streamlit', 'Chart.js'],
    build: [
      'Developed AI-powered laptop health monitoring system analyzing CPU, RAM, battery, storage, and temperature metrics.',
      'Implemented real-time monitoring, predictive analytics, smart alerts, and personalized recommendations.',
      'Designed interactive dashboard with performance charts, AI insights, and troubleshooting assistant.',
    ],
    features: [
      'Real-time CPU, RAM, battery, temperature monitoring',
      'Laptop Health Score calculation',
      'Predictive analytics and alerts',
      'AI-powered troubleshooting assistant',
      'Interactive performance dashboard',
    ],
    metrics: [
      { value: '5', label: 'core metrics' },
      { value: 'Real-time', label: 'monitoring' },
      { value: 'AI-driven', label: 'insights' },
    ],
    palette: { from: '#1a0f2e', via: '#6a1e6e', to: '#0f0a1f', accent: '#b366ff' },
    motif: 'shield',
  },
  {
    id: 'mak-quiz-builder',
    title: 'MAK Quiz Builder',
    year: '2026',
    genre: 'Python • Streamlit • Generative AI',
    logline: 'AI-powered quiz platform generating topic-based MCQs with configurable difficulty levels.',
    stack: ['Python', 'Streamlit', 'Generative AI', 'JSON'],
    build: [
      'Developed quiz platform generating 3–10 topic-based MCQs from study details and difficulty levels.',
      'Implemented complete workflow: topic selection, question generation, quiz attempt, submission, and evaluation.',
      'Added customizable difficulty modes: Warm-up, Focused, Stretch for adaptive learning.',
      'Enabled JSON export of question sets for offline use.',
    ],
    features: [
      'AI-powered MCQ generation',
      '3–10 questions per quiz',
      'Three difficulty modes',
      'Real-time quiz evaluation',
      'JSON export for offline use',
      'Detailed result analysis',
    ],
    metrics: [
      { value: '3–10', label: 'MCQs per quiz' },
      { value: '3', label: 'difficulty levels' },
      { value: 'AI-generated', label: 'content' },
    ],
    palette: { from: '#0d1b2a', via: '#1e4d7b', to: '#0a0e17', accent: '#4db8ff' },
    motif: 'flow',
  },
  {
    id: 'ai-minutes-assistant',
    title: 'AI Minutes & Action Assistant',
    year: '2026',
    genre: 'Python • LangChain • RAG',
    logline: 'RAG application converting meeting content into structured minutes, decisions, and action items.',
    stack: ['Python', 'LangChain', 'LangGraph', 'RAG', 'OpenAI API'],
    build: [
      'Built RAG application converting meetings into structured minutes, decisions, and action items.',
      'Integrated LangChain and LangGraph for intelligent document processing.',
      'Implemented semantic understanding for accurate meeting summarization.',
    ],
    features: [
      'Meeting transcription processing',
      'Structured minutes generation',
      'Key decision extraction',
      'Risk identification',
      'Action item assignment',
      'Semantic understanding',
    ],
    metrics: [
      { value: '100%', label: 'meeting coverage' },
      { value: 'RAG-powered', label: 'understanding' },
      { value: 'Automated', label: 'action items' },
    ],
    palette: { from: '#1f0a2e', via: '#7a1e5c', to: '#0f0620', accent: '#ff66b2' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'hcltech-ai-intern',
    title: 'Gen AI Intern',
    org: 'HCLTech',
    detail: 'Developed enterprise-grade AI applications using LLMs, RAG pipelines, LangChain, LangGraph, and agentic AI workflows.',
    laurel: 'Enterprise AI',
  },
  {
    id: 'learning-focused',
    title: 'DSA & Cloud Computing',
    org: 'Active Learning',
    detail: 'Continuously learning Data Structures & Algorithms and AWS cloud computing with hands-on project implementation.',
    laurel: 'Self-Directed Growth',
  },
  {
    id: 'fullstack-multiple-internships',
    title: '4 Full-Stack Development Internships',
    org: 'Multiple Companies',
    detail: 'Completed internships at HCLTech, Kenmark ITAN, Persevex, and 1Stop, building production-grade web applications and integrations.',
    laurel: 'Hands-On Experience',
  },
  {
    id: 'ai-projects',
    title: 'Multiple AI/LLM Projects',
    org: 'Personal Projects',
    detail: 'Built AI-powered applications including laptop health monitoring, quiz generation, interview assistants, and RAG-based document processing.',
    laurel: 'AI Innovation',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'AWS Academy Cloud Foundations', link: 'https://aws.amazon.com/training/awsacademy/' },
  { issuer: 'Google Cloud', name: 'Google Cloud Fundamentals (In Progress)', link: 'https://cloud.google.com/' },
  { issuer: 'Docker', name: 'Docker Certified Associate (In Progress)', link: 'https://www.docker.com/' },
  { issuer: 'MongoDB', name: 'MongoDB Developer Certification', link: 'https://www.mongodb.com/docs/' },
  { issuer: 'GitHub', name: 'GitHub Foundations Certified', link: 'https://github.com/skills' },
  { issuer: 'Udemy', name: 'React.js & Node.js Full-Stack Development', link: 'https://www.udemy.com/' },
  { issuer: 'Coursera', name: 'Python for Data Science (In Progress)', link: 'https://www.coursera.org/' },
  { issuer: 'OpenAI', name: 'LLM & API Integration Fundamentals', link: 'https://platform.openai.com/' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'JavaScript & Python are primary',
    skills: [
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'UI & Web Platform',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'React Router', mono: 'Rr' },
      { name: 'React Hooks', mono: 'Rh' },
      { name: 'Tailwind CSS', mono: 'Tc' },
      { name: 'Bootstrap', mono: 'Bt' },
      { name: 'Responsive Design', mono: 'Rd' },
      { name: 'jQuery', mono: 'Jq' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'APIs & Server Logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Python', mono: 'Py' },
      { name: 'Django', mono: 'Dj' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & LLM',
    subtitle: 'Generative AI & Automation',
    skills: [
      { name: 'LangChain', mono: 'Lc' },
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'RAG', mono: 'Ra' },
      { name: 'OpenAI API', mono: 'Oa' },
      { name: 'Gemini API', mono: 'Ga' },
      { name: 'FAISS', mono: 'Fa' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'LLMs', mono: 'Ll' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data Persistence & Querying',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    subtitle: 'Deployment & Infrastructure',
    skills: [
      { name: 'AWS', mono: 'Aw' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Google Cloud', mono: 'Gc' },
      { name: 'Linux', mono: 'Lx' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Version Control',
    subtitle: 'Development workflow',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Streamlit', mono: 'Sm' },
      { name: 'Axios', mono: 'Ax' },
      { name: 'Fetch API', mono: 'Fa' },
    ],
  },
];

export type InterestCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const interestCategories: InterestCategory[] = [
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Passions & Learning Goals',
    skills: [
      { name: 'AI & LLMs', mono: 'Al' },
      { name: 'Cloud Computing (AWS)', mono: 'Aw' },
      { name: 'Data Structures', mono: 'Ds' },
      { name: 'System Design', mono: 'Sd' },
      { name: 'DevOps & Deployment', mono: 'Do' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Oracle Java Certified Foundations Associate', 'HackerRank 5-star'],
  Python: ['PolicyGuard AI', 'Cisco Python Essentials 1', 'HackerRank 5-star'],
  C: ['HackerRank 5-star'],
  React: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  HTML: ['Pearson IT Specialist – HTML and CSS', 'Cisco HTML Essentials'],
  CSS: ['Pearson IT Specialist – HTML and CSS', 'Cisco CSS Essentials'],
  JavaScript: ['Cisco JavaScript Essentials 1 & 2'],
  'Node.js': ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  'Express.js': ['Payment Gateway System'],
  Docker: ['Payment Gateway System'],
  'Docker Compose': ['Multi-Tenant SaaS Platform'],
  'REST APIs': ['PolicyGuard AI'],
  Microservices: ['Payment Gateway System'],
  'JWT Auth': ['Multi-Tenant SaaS Platform'],
  'Git / GitHub': ['GitHub Foundations'],
  PostgreSQL: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  MongoDB: ['MongoDB Certified Associate Developer'],
  DBMS: ['NPTEL Database Management System', 'Oracle Database Foundations'],
  DSA: ['AlgoUniversity Tech Fellow', '850+ problems solved'],
  'Cloud Computing (AWS)': ['AWS Certified AI Practitioner', 'AWS Academy Cloud Foundations'],
  'Machine Learning': ['B.Tech AI & ML', 'NPTEL Deep Learning'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: 'Intermediate years at Sri Chaitanya Junior College, Kakinada — Mathematics, Physics and Chemistry.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'BIEAP, MPC at Sri Chaitanya Junior College, Kakinada — finishing with a score of 925/1000.',
        tags: ['MPC', 'BIEAP'],
        runtime: 'Jun 2021 – May 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: '2023 – Present',
    synopsis: 'B.Tech in Artificial Intelligence and Machine Learning at Aditya Engineering College, Surampalem.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Artificial Intelligence and Machine Learning — CGPA 9.10.',
        tags: ['B.Tech', 'AI & ML', 'CGPA 9.10'],
        runtime: 'Oct 2023 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Topper',
        description: 'AIML Branch Topper with a 9.24 SGPA for the semester.',
        tags: ['9.24 SGPA', 'Branch Topper'],
        runtime: 'One semester',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Problem Solver',
        description: 'LeetCode 350+ (peak 1442), GFG 300+ (1436), CodeChef 200+ and HackerRank 5-star badges in C, Python, Java and SQL.',
        tags: ['DSA', 'LeetCode', 'GFG', 'CodeChef', 'HackerRank'],
        runtime: '850+ problems',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2025 – 2026',
    synopsis: 'One year of intensive Full-Stack Development training as a Trainee at Technical Hub Pvt Ltd.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Trainee',
        description: 'Intensive Full-Stack Development training covering frontend, backend, database integration and deployment workflows.',
        tags: ['FSD', 'Frontend', 'Backend', 'Databases'],
        runtime: 'May 2025 – Jun 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Developer',
        description: 'Developed responsive web applications — user interfaces, server-side logic and database connectivity.',
        tags: ['React', 'Node.js', 'Express.js'],
        runtime: 'Technical Hub',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Deployer',
        description: 'Deployed and managed web applications with version control, debugging and end-to-end development practices.',
        tags: ['Git / GitHub', 'Deployment'],
        runtime: 'Technical Hub',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Three Originals — an AI platform, a payment gateway and a multi-tenant SaaS — plus national-level recognition.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Builder',
        description: 'PolicyGuard AI — LLM-based Q&A and key-information extraction across 500+ policy documents at 92% accuracy.',
        tags: ['Python', 'NLP', 'LLM'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Architect',
        description: 'Payment Gateway System and Multi-Tenant SaaS Platform — state machines, microservices, tenant isolation and RBAC.',
        tags: ['Node.js', 'PostgreSQL', 'Docker'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Fellow',
        description: 'Selected as a Tech Fellow at AlgoUniversity and reached the Semi-Finals of Flipkart GRiD 7.0.',
        tags: ['AlgoUniversity', 'Flipkart GRiD 7.0'],
        runtime: 'National stage',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The interests on the resume point to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring System Design, Cloud Computing (AWS) and Machine Learning.',
        tags: ['System Design', 'AWS', 'Machine Learning'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Listed as primary on the resume • Oracle certified', palette: amber },
  { label: 'The AI Original', title: 'PolicyGuard AI', detail: '500+ documents • 92% accuracy', palette: crimson },
  { label: 'Biggest stage', title: 'Flipkart GRiD 7.0', detail: 'Semi-Finalist', palette: ocean },
  { label: 'National selection', title: 'AlgoUniversity', detail: 'Tech Fellow', palette: violet },
  { label: 'Academic high', title: 'Branch Topper', detail: '9.24 SGPA in AI & ML', palette: jade },
  { label: 'Cloud credential', title: 'AWS AI Practitioner', detail: 'AWS Certified', palette: amber },
  { label: 'Problems solved', title: '850+', detail: 'LeetCode 350+ • GFG 300+ • CodeChef 200+', palette: crimson },
  { label: 'The training arc', title: '1 Year of FSD', detail: 'Technical Hub Pvt Ltd', palette: ocean },
  { label: 'Database credential', title: 'MongoDB', detail: 'Certified Associate Developer', palette: jade },
  { label: 'Current focus', title: 'System Design', detail: 'with Cloud (AWS) & Machine Learning', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · AI & ML',
    lines: ['Aditya Engineering College, Surampalem', 'October 2023 – Present'],
    chips: ['CGPA 9.10'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Python, C, C++ · React, Node.js, Express.js', 'PostgreSQL, MongoDB, MySQL · Docker, REST, JWT'],
    chips: ['Java', 'Python', 'React', 'Node.js', 'Docker', 'PostgreSQL'],
  },
  {
    kicker: 'Training',
    title: 'The Training Arc',
    lines: ['One year of intensive Full‑Stack Development training', 'Trainee · Technical Hub Pvt Ltd · May 2025 – June 2026', 'Frontend · Backend · Databases · Deployment'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['PolicyGuard AI — 500+ documents, 92% accuracy', 'Payment Gateway — 1,000+ transactions, 99.8% uptime', 'Multi-Tenant SaaS — 50+ tenants, zero unauthorized access'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Tech Fellow — AlgoUniversity', 'Semi-Finalist — Flipkart GRiD 7.0', 'AIML Branch Topper — 9.24 SGPA'],
  },
  {
    kicker: 'Certified',
    title: '16 Certifications',
    lines: ['AWS · MongoDB · Oracle · GitHub · Pearson', 'NPTEL · Cisco · Udemy'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['System Design · Cloud Computing (AWS) · Machine Learning'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Sushmita',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
