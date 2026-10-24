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
  links?: { label: string; href: string }[];
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
  {
    id: 'ai-college-website',
    title: 'AI-Powered College Website',
    year: '2026',
    genre: 'React • AI Chatbot • RAG • JSS Academy of Technical Education, Noida',
    logline: 'Mini project: an AI-powered college website with a Website Navigator, Kashi AI Chatbot, and Student Dashboard that makes college information more accessible.',
    stack: ['React.js', 'JavaScript', 'JSX', 'Vite', 'Git', 'GitHub', 'Vercel', 'RAG'],
    build: [
      'Developed an AI-Powered College Website with a Website Navigator, Kashi AI Chatbot, and Student Dashboard.',
      'Built a modern, interactive, user-friendly platform to make college-related information more accessible.',
      'Explored Artificial Intelligence and Retrieval-Augmented Generation (RAG) to improve information retrieval.',
    ],
    features: [
      'Website Navigator to find relevant college information easily',
      'Kashi AI Chatbot answering college questions in natural language',
      'Student Dashboard with profile details and recent internship information',
      'Deployed on Vercel with GitHub version control',
    ],
    metrics: [
      { value: '3', label: 'core modules' },
      { value: 'AI-powered', label: 'chatbot' },
      { value: 'Live', label: 'on Vercel' },
    ],
    github: 'https://lnkd.in/g_hQ_ScN',
    links: [
      { label: 'JSS Website with Student Portal', href: 'https://lnkd.in/gkta56QB' },
      { label: 'Kashi AI Chatbot', href: 'https://lnkd.in/gUCVzYjr' },
    ],
    palette: { from: '#071a2b', via: '#0e5a6b', to: '#050d17', accent: '#3ddcc8' },
    motif: 'flow',
  },
  {
    id: 'dev-partner-portfolio',
    title: 'Meet Your Dev Partner — Personal Portfolio',
    year: '2026',
    genre: 'React • Portfolio • Full-Stack • Generative AI',
    logline: 'A personal portfolio concept that shows not just what I code, but how I think, solve problems, and turn ideas into real-world applications.',
    stack: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    build: [
      'Designed and built a portfolio around the idea: "Your idea. My code. Let\'s make it real."',
      'Showcases work across web development, AI-powered solutions, RAG pipelines, AI agents, and cloud computing.',
      'Continuously improved, one project at a time.',
    ],
    features: [
      'Responsive, interactive portfolio experience',
      'Projects spanning web apps, RAG pipelines, and AI agents',
      'Built to connect with developers, mentors, and recruiters',
    ],
    metrics: [
      { value: 'Full-Stack', label: 'web + AI + cloud' },
      { value: 'Live', label: 'deployed portfolio' },
    ],
    github: 'https://lnkd.in/giNK6Tih',
    links: [
      { label: 'Live Portfolio', href: 'https://lnkd.in/gJxx3dyn' },
      { label: 'Live Link', href: 'https://lnkd.in/gW5wnDC3' },
    ],
    palette: { from: '#1c1405', via: '#7a4e0e', to: '#0d0a03', accent: '#ffb84d' },
    motif: 'shield',
  },
  {
    id: 'soul-spark-website',
    title: 'Soul Spark Website',
    year: '2025',
    genre: 'React • Tailwind CSS • My First Live Project',
    logline: 'My very first website project: designed, developed, and deployed live for Soul Spark with a clean, modern, responsive, and user-friendly experience.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Vite', 'PostCSS', 'Vercel'],
    build: [
      'Designed, developed, and deployed the Soul Spark website end to end.',
      'Built the UI and reusable components, and made the site fully responsive.',
      'Deployed live on Vercel; gained hands-on experience and confidence for bigger projects.',
    ],
    features: [
      'Clean, modern, responsive UI',
      'Reusable React components',
      'Contact Us section with official email and phone number',
      'Live deployment on Vercel',
    ],
    metrics: [
      { value: '1st', label: 'live project' },
      { value: 'Responsive', label: 'design' },
      { value: 'Live', label: 'on Vercel' },
    ],
    github: 'https://lnkd.in/d6SAri_5',
    links: [{ label: 'Live Website', href: 'https://lnkd.in/djAi7qpS' }],
    palette: { from: '#2a0f1c', via: '#8a2a55', to: '#14070e', accent: '#ff8fc0' },
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
  JavaScript: ['Frontend development internships at Kenmark ITAN and 1Stop'],
  Python: ['AI Laptop Health Guardian', 'Gen AI internship at HCLTech'],
  HTML5: ['Frontend development internships at Kenmark ITAN and 1Stop'],
  CSS3: ['Frontend development internships at Kenmark ITAN and 1Stop'],
  'React.js': ['AI Laptop Health Guardian', 'Web development internship at Persevex'],
  'Node.js': ['Backend development internship at Kenmark ITAN'],
  'Express.js': ['Backend development internship at Kenmark ITAN'],
  MongoDB: ['Backend development internship at Kenmark ITAN', 'MongoDB Developer Certification'],
  LangChain: ['Gen AI internship at HCLTech', 'AI Minutes & Action Assistant'],
  LangGraph: ['Gen AI internship at HCLTech', 'AI Minutes & Action Assistant'],
  RAG: ['Gen AI internship at HCLTech', 'AI Minutes & Action Assistant'],
  'OpenAI API': ['AI/LLM API integration experience'],
  FAISS: ['RAG pipeline experience at HCLTech'],
  AWS: ['AWS Academy Cloud Foundations', 'Current learning focus'],
  Docker: ['Docker Associate certification in progress'],
  'Git / GitHub': ['GitHub Foundations Certified'],
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
    title: 'The Foundation',
    period: '2024 – 2028',
    synopsis: 'Studying Computer Science & Engineering at JSS Academy of Technical Education in Noida.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Computer Science',
        description: 'Bachelor of Technology in Computer Science & Engineering at JSS Academy of Technical Education.',
        tags: ['B.Tech', 'Computer Science & Engineering'],
        runtime: '2024 – 2028',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'School Chapter',
        description: 'Completed Class XII with Physics, Chemistry, Mathematics, and Biotechnology at DAV Public School, Delhi.',
        tags: ['Class XII', 'PCM + Biotechnology'],
        runtime: '2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Building for the Web',
    period: '2025 – 2026',
    synopsis: 'Developing responsive web applications and full-stack features through software and web development internships.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Software Development',
        description: 'Built responsive frontend interfaces, integrated REST APIs, and developed CRUD modules using JavaScript, Node.js, and MongoDB.',
        tags: ['JavaScript', 'Node.js', 'MongoDB', 'REST APIs'],
        runtime: 'Kenmark ITAN · Jan – Jun 2025',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Frontend Development',
        description: 'Created responsive interfaces and dynamic browser features, with a focus on usability and cross-browser compatibility.',
        tags: ['JavaScript', 'jQuery', 'Bootstrap'],
        runtime: '1Stop · Jul – Sep 2025',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'Web Development',
        description: 'Built full-stack web applications, implemented CRUD operations, and connected backend services to MongoDB.',
        tags: ['React.js', 'Node.js', 'MongoDB'],
        runtime: 'Persevex · Oct 2025 – Mar 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Generative AI',
    period: '2026',
    synopsis: 'Exploring LLM applications, retrieval-augmented generation, and agent-based workflows at HCLTech.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Gen AI Intern',
        description: 'Developed AI applications using LLMs, Transformer architecture, prompt engineering, and structured JSON outputs.',
        tags: ['LLMs', 'Prompt Engineering', 'Python'],
        runtime: 'HCLTech · Jun – Aug 2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Retrieval Pipelines',
        description: 'Built RAG pipelines and agent-based workflows integrating embeddings, retrieval, reranking, and workflow automation.',
        tags: ['LangChain', 'LangGraph', 'FAISS', 'Cohere'],
        runtime: 'HCLTech · 2026',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'Enterprise AI Capstone',
        description: 'Delivered an enterprise-grade AI capstone project using Python, Git, and modern AI frameworks.',
        tags: ['Python', 'Git', 'AI Frameworks'],
        runtime: 'HCLTech · 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Building AI Projects',
    period: '2026',
    synopsis: 'Creating AI-powered tools for laptop health monitoring, quiz generation, and meeting follow-up.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Laptop Health Guardian',
        description: 'Built a dashboard for real-time laptop health metrics, predictive analytics, alerts, and AI troubleshooting.',
        tags: ['Python', 'React.js', 'Streamlit', 'Chart.js'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'MAK Quiz Builder',
        description: 'Created an AI-powered quiz platform with configurable difficulty, quiz evaluation, and question-set export.',
        tags: ['Python', 'Streamlit', 'Generative AI', 'JSON'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'Minutes & Action Assistant',
        description: 'Built a RAG application that turns meeting content into structured minutes, decisions, and action items.',
        tags: ['Python', 'LangChain', 'LangGraph', 'RAG'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'The Next Chapter',
    period: 'In progress',
    synopsis: 'Continuing to grow in data structures and algorithms, cloud computing, and AI/LLM development.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Learning & Building',
        description: 'Developing skills in data structures and algorithms and cloud computing while building AI-powered applications.',
        tags: ['Data Structures & Algorithms', 'AWS', 'AI & LLMs'],
        runtime: 'Ongoing',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'Gen AI Intern', detail: 'HCLTech · 2026', palette: crimson },
  { label: 'AI project', title: 'Laptop Health', detail: 'Real-time metrics and AI insights', palette: ocean },
  { label: 'Learning project', title: 'MAK Quiz Builder', detail: 'AI-generated quizzes with evaluation', palette: violet },
  { label: 'RAG project', title: 'Minutes Assistant', detail: 'Meeting notes, decisions, and action items', palette: jade },
  { label: 'Education', title: 'B.Tech CSE', detail: 'JSS Academy of Technical Education · 2024–2028', palette: amber },
  { label: 'Full-stack', title: 'Web Development', detail: 'React, JavaScript, Python, and Node.js', palette: ocean },
  { label: 'Cloud learning', title: 'AWS', detail: 'AWS Academy Cloud Foundations', palette: amber },
  { label: 'Certification', title: 'GitHub Foundations', detail: 'GitHub Foundations Certified', palette: jade },
  { label: 'Experience', title: '4 Internships', detail: 'Software, web, frontend, and Gen AI development', palette: crimson },
  { label: 'Current focus', title: 'DSA & Cloud', detail: 'Building skills in algorithms and AWS', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Science',
    lines: ['JSS Academy of Technical Education · Noida', '2024 – 2028'],
    chips: ['Currently enrolled'],
  },
  {
    kicker: 'Skills',
    title: 'Full-stack development.',
    lines: ['JavaScript, Python · React.js, Node.js, Express.js', 'MongoDB, REST APIs · AWS, Docker'],
    chips: ['JavaScript', 'Python', 'React.js', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    kicker: 'Experience',
    title: 'Four internships.',
    lines: ['Software and web development · Kenmark ITAN, 1Stop, Persevex', 'Gen AI internship · HCLTech · June – August 2026'],
  },
  {
    kicker: 'Projects',
    title: 'AI-powered tools.',
    lines: ['AI Laptop Health Guardian · MAK Quiz Builder', 'AI Minutes & Action Assistant'],
  },
  {
    kicker: 'Gen AI',
    title: 'Building with LLMs.',
    lines: ['RAG pipelines with LangChain, LangGraph, and FAISS', 'Agent workflows, retrieval, reranking, and prompt engineering'],
  },
  {
    kicker: 'Certified',
    title: 'Learning across the stack.',
    lines: ['AWS Academy Cloud Foundations · GitHub Foundations', 'MongoDB Developer · React.js & Node.js Full-Stack Development'],
  },
  {
    kicker: 'Current focus',
    title: 'Keep learning.',
    lines: ['Data Structures & Algorithms · Cloud Computing (AWS)', 'AI & LLMs · Full-stack application development'],
  },
];

export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
