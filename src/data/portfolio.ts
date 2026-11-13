/**
 * Kashi Mahtta Portfolio — Content from resume only.
 * Full-Stack Developer | DSA & Problem Solving | Cloud Computing (AWS & Docker)
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Kashi Mahtta',
  displayName: 'Kashi Mahtta',
  firstName: 'KASHI',
  seriesTag: 'THE SERIES',
  originalLabel: 'A KASHI ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'DSA & Problem Solving', 'Cloud Computing (AWS & Docker)'],
  intro:
    'B.Tech Computer Science student with hands-on full-stack web development experience. Building responsive applications with React, JavaScript, Python, Node.js, Express, and integrating AI/LLM APIs.',
  about: [
    'B.Tech Computer Science student with hands-on experience designing and developing full-stack web applications using React.js, Next.js, JavaScript, TypeScript, Python, Node.js, Express.js, FastAPI, Django, MySQL, and MongoDB. Skilled in building responsive user interfaces, RESTful APIs, database-driven applications, authentication workflows, and frontend–backend integrations.',
    'Experienced in developing AI-powered applications using LLM APIs, Retrieval-Augmented Generation (RAG), LangChain, and LangGraph. Familiar with prompt engineering, vector databases, semantic search, and integrating intelligent features into web applications.',
    'Currently expanding knowledge of cloud computing and DevOps practices, including AWS fundamentals, Docker, Linux, application deployment, and Git-based version control. Strong foundation in object-oriented programming, database management, debugging, and problem-solving. Seeking Software Development, Full-Stack Development, or AI Engineering internship opportunities to contribute to practical projects and build impactful software solutions.',
  ],
  location: 'Delhi, India',
  email: 'kashimahtta@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/kashi-mahtta',
    github: 'https://github.com/kashimahtta',
  },
  resumeDocx: new URL('../../kashi_resume_final.docx', import.meta.url).href,
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
  {
    id: 'pmo-resource-management-agent',
    title: 'PMO Resource Management Agent',
    year: '2026',
    genre: 'AI & Intelligent Applications',
    logline: 'An AI-assisted resource management application for project allocation, management workflows, and data-driven decisions.',
    stack: ['Python', 'Streamlit'],
    build: [
      'Developed an AI-assisted application to support project resource allocation and management workflows.',
      'Designed an interactive interface to organize and visualize project resource information.',
    ],
    features: ['Resource allocation support', 'Project information organization', 'Interactive resource visualization'],
    metrics: [{ value: 'AI-assisted', label: 'resource workflows' }, { value: 'Interactive', label: 'project interface' }],
    palette: { from: '#10251e', via: '#17634b', to: '#07130f', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'orbit-copilot-extension',
    title: 'Orbit — Microsoft 365 Copilot Extension Agent Prototype',
    year: '2026',
    genre: 'AI & Intelligent Applications',
    logline: 'An offline Copilot-inspired interface for organizing project information and surfacing useful next steps.',
    stack: ['Offline Prototype', 'Copilot Extension'],
    build: [
      'Developed an offline Copilot-inspired interface for organizing project information and generating project summaries.',
      'Added workflows for task tracking and identifying risks, blockers, and recommended next steps.',
    ],
    features: ['Project summaries', 'Task tracking', 'Risk and blocker identification', 'Recommended next steps'],
    metrics: [{ value: 'Copilot-inspired', label: 'project assistant' }, { value: 'Offline', label: 'prototype' }],
    palette: { from: '#071a2b', via: '#155078', to: '#050d17', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'enterprise-knowledge-assistant',
    title: 'Enterprise Knowledge Assistant',
    year: '2026',
    genre: 'AI & Intelligent Applications',
    logline: 'A document-based RAG application for semantic search and context-aware answers from uploaded PDFs.',
    stack: ['Python', 'RAG', 'FAISS'],
    build: [
      'Built a document-based retrieval-augmented generation application for uploaded PDFs.',
      'Enabled semantic search and context-aware question answering over document content.',
    ],
    features: ['PDF document processing', 'Semantic search', 'Context-aware answers'],
    metrics: [{ value: 'RAG', label: 'document retrieval' }, { value: 'PDFs', label: 'knowledge source' }],
    palette: { from: '#1f0a2e', via: '#642c7a', to: '#0f0620', accent: '#b98bff' },
    motif: 'tenants',
  },
  {
    id: 'ai-interview-assistant',
    title: 'AI-Powered Interview Assistant',
    year: '2026',
    genre: 'AI & Intelligent Applications',
    logline: 'A recruitment assistant that analyzes resumes, generates candidate insights and interview questions, and supports voice interaction.',
    stack: ['AI Application', 'Voice Interaction'],
    build: [
      'Developed a recruitment tool that analyzes resumes and generates candidate insights.',
      'Added interview question generation and voice interaction support.',
    ],
    features: ['Resume analysis', 'Candidate insights', 'Interview question generation', 'Voice interaction'],
    metrics: [{ value: 'AI-powered', label: 'recruitment support' }, { value: 'Voice', label: 'interaction' }],
    palette: { from: '#2a1810', via: '#80511e', to: '#140d08', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    year: '2026',
    genre: 'AI & Intelligent Applications',
    logline: 'A responsive conversational chatbot with a Python backend and OpenAI API integration.',
    stack: ['Python', 'OpenAI API'],
    build: [
      'Created a responsive conversational chatbot with a Python backend.',
      'Integrated the OpenAI API to generate conversational responses.',
    ],
    features: ['Responsive chatbot interface', 'Python backend', 'OpenAI API integration'],
    metrics: [{ value: 'Conversational', label: 'AI application' }, { value: 'OpenAI', label: 'API integration' }],
    palette: { from: '#071a2b', via: '#155078', to: '#050d17', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'marvel-chatbot',
    title: 'Marvel Chatbot',
    year: '2026',
    genre: 'AI & Intelligent Applications',
    logline: 'A themed conversational chatbot for interactive questions about Marvel characters and content.',
    stack: ['Conversational AI'],
    build: ['Developed a themed chatbot that provides interactive responses to Marvel-related user queries.'],
    features: ['Marvel-themed conversations', 'Interactive character and content queries'],
    metrics: [{ value: 'Themed', label: 'chatbot experience' }, { value: 'Interactive', label: 'responses' }],
    palette: { from: '#2a0f1c', via: '#8a2a55', to: '#14070e', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'ai-recipe-maker',
    title: 'AI Recipe Maker',
    year: '2026',
    genre: 'AI & Intelligent Applications',
    logline: 'An AI-powered recipe recommendation application for personalized meal ideas based on ingredients and preferences.',
    stack: ['Generative AI', 'Recipe Recommendations'],
    build: [
      'Developed an AI-powered application that generates personalized meal suggestions.',
      'Used available ingredients, dietary preferences, and user-defined requirements to guide recommendations.',
    ],
    features: ['Ingredient-based suggestions', 'Dietary preferences', 'Personalized meal recommendations'],
    metrics: [{ value: 'AI-powered', label: 'recipe suggestions' }, { value: 'Personalized', label: 'meal ideas' }],
    palette: { from: '#2a1810', via: '#80511e', to: '#140d08', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'ai-writing-tutor',
    title: 'AI Writing Tutor',
    year: '2026',
    genre: 'AI & Intelligent Applications',
    logline: 'An adaptive writing platform for evaluation, targeted practice, progress tracking, and syllabus-aware feedback.',
    stack: ['AI', 'Adaptive Learning'],
    build: [
      'Developed an adaptive learning platform for writing evaluation and targeted practice.',
      'Included progress tracking and syllabus-aware feedback to support learners.',
    ],
    features: ['Writing evaluation', 'Targeted practice', 'Progress tracking', 'Syllabus-aware feedback'],
    metrics: [{ value: 'Adaptive', label: 'writing practice' }, { value: 'Syllabus-aware', label: 'feedback' }],
    palette: { from: '#1f0a2e', via: '#642c7a', to: '#0f0620', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'dsa-coding-series',
    title: 'DSA Coding Series — Dynamic C Programming Learning Platform',
    year: '2026',
    genre: 'DSA & Coding Education',
    logline: 'A dynamic, file-driven platform that turns a centralized collection of C solutions into browsable problems and interactive coding workspaces.',
    stack: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GCC', 'Docker'],
    build: [
      'Developing automatic discovery of C programming solutions with generated problem listings and dedicated pages.',
      'Building an interactive workspace with problem statements, read-only syntax-highlighted code, custom input, and program output.',
      'Implementing metadata extraction, reusable components, and dynamic routing to reduce manual page creation and code duplication.',
      'Integrating GCC-based C compilation and execution in an isolated sandbox environment.',
    ],
    features: ['File-driven problem discovery', 'Syntax-highlighted code viewer', 'Custom input and program output', 'Isolated GCC execution'],
    metrics: [{ value: 'Dynamic', label: 'problem pages' }, { value: 'C', label: 'programming practice' }],
    palette: { from: '#071a2b', via: '#155078', to: '#050d17', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'infrared-image-enhancement',
    title: 'Infrared Image Enhancement & Colorization',
    year: '2026',
    genre: 'Computer Vision Applications',
    logline: 'A computer vision project that enhances and colorizes grayscale infrared satellite imagery for thermal analysis and object recognition.',
    stack: ['Python', 'OpenCV', 'NumPy'],
    build: ['Enhanced and colorized grayscale infrared satellite images using false-color mapping for thermal analysis and object recognition.'],
    features: ['Infrared image enhancement', 'False-color mapping', 'Thermal analysis support'],
    metrics: [{ value: 'Infrared', label: 'image processing' }, { value: 'False color', label: 'visualization' }],
    palette: { from: '#2a0f1c', via: '#8a2a55', to: '#14070e', accent: '#ff8a5c' },
    motif: 'shield',
  },
  {
    id: 'sudoku-ai-solver',
    title: 'Sudoku AI Solver',
    year: '2026',
    genre: 'Computer Vision Applications',
    logline: 'An image-based Sudoku solver combining computer vision, OCR, backtracking, and an interactive web interface.',
    stack: ['Python', 'OpenCV', 'Tesseract OCR', 'Flask', 'JavaScript'],
    build: ['Built an image-based Sudoku solver using OpenCV, OCR, and backtracking, with an interactive web interface for real-time solutions.'],
    features: ['Image-based puzzle input', 'OCR recognition', 'Backtracking solver', 'Interactive web interface'],
    metrics: [{ value: 'Computer vision', label: 'puzzle input' }, { value: 'Real-time', label: 'solutions' }],
    palette: { from: '#071a2b', via: '#155078', to: '#050d17', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'hotel-management-system',
    title: 'Hotel Management System',
    year: '2026',
    genre: 'Full-Stack Web Applications',
    logline: 'A hotel reservation platform for room selection, guest details, service preferences, billing, and booking confirmation.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Express.js', 'MySQL'],
    build: ['Developed a reservation flow covering room selection, guest details, service preferences, billing summaries, and booking confirmation.'],
    features: ['Room selection', 'Guest and service details', 'Billing summary', 'Booking confirmation'],
    metrics: [{ value: 'Reservation', label: 'workflow' }, { value: 'MySQL', label: 'relational data' }],
    palette: { from: '#1c1405', via: '#7a4e0e', to: '#0d0a03', accent: '#ffb84d' },
    motif: 'tenants',
  },
  {
    id: 'edurank',
    title: 'EduRank — Educational Video Ranking Platform',
    year: '2026',
    genre: 'Full-Stack Web Applications',
    logline: 'An educational platform that ranks and organizes learning videos to help students discover relevant content.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Express.js', 'MySQL'],
    build: ['Developed a structured video ranking and prioritization experience for discovering educational content.'],
    features: ['Educational video organization', 'Video ranking', 'Content discovery'],
    metrics: [{ value: 'Structured', label: 'video rankings' }, { value: 'Education', label: 'content discovery' }],
    palette: { from: '#071a2b', via: '#155078', to: '#050d17', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    year: '2026',
    genre: 'Full-Stack Web Applications',
    logline: 'A library system for managing books, authors, users, and issue/return records through REST APIs and availability tracking.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Express.js', 'MySQL'],
    build: ['Managed books, authors, users, and issue/return records through REST APIs with availability tracking.'],
    features: ['Book and author records', 'User records', 'Issue and return tracking', 'Availability tracking'],
    metrics: [{ value: 'REST APIs', label: 'library operations' }, { value: 'Tracked', label: 'availability' }],
    palette: { from: '#1c1405', via: '#7a4e0e', to: '#0d0a03', accent: '#ffb84d' },
    motif: 'shield',
  },
  {
    id: 'petrol-pump-fuel-management',
    title: 'Petrol Pump Fuel Management System',
    year: '2026',
    genre: 'Full-Stack Web Applications',
    logline: 'A fuel management system for tracking inventory, sales, revenue, and monthly consumption with relational database queries.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Express.js', 'MySQL'],
    build: ['Tracked fuel inventory, sales, revenue, and monthly consumption using relational database queries.'],
    features: ['Fuel inventory tracking', 'Sales and revenue records', 'Monthly consumption queries'],
    metrics: [{ value: 'Relational', label: 'data queries' }, { value: 'Monthly', label: 'consumption tracking' }],
    palette: { from: '#2a1810', via: '#80511e', to: '#140d08', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'student-marks-management',
    title: 'Student Marks Management System',
    year: '2026',
    genre: 'Full-Stack Web Applications',
    logline: 'A student performance system for maintaining subject-wise marks, calculating percentages, and generating reports.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Express.js', 'MySQL'],
    build: ['Maintained subject-wise marks, calculated percentages, and generated student performance reports.'],
    features: ['Subject-wise marks', 'Percentage calculations', 'Student performance reports'],
    metrics: [{ value: 'Automated', label: 'percentage calculation' }, { value: 'Student', label: 'performance reports' }],
    palette: { from: '#071a2b', via: '#155078', to: '#050d17', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'music-playlist-management',
    title: 'Music Playlist Management System',
    year: '2026',
    genre: 'Full-Stack Web Applications',
    logline: 'A playlist management application for handling playlists, songs, and artist relationships through Express.js APIs.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Express.js', 'MySQL'],
    build: ['Managed playlists, songs, and artist relationships through Express.js APIs with dynamic data display.'],
    features: ['Playlist management', 'Song and artist relationships', 'Dynamic data display'],
    metrics: [{ value: 'Express.js', label: 'API layer' }, { value: 'Dynamic', label: 'playlist data' }],
    palette: { from: '#1f0a2e', via: '#642c7a', to: '#0f0620', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'area-finder',
    title: 'Area Finder',
    year: '2026',
    genre: 'Full-Stack Web Applications',
    logline: 'A searchable location system for navigating country, state, and city relationships.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Express.js', 'MySQL'],
    build: ['Created a searchable location system connecting country, state, and city information.'],
    features: ['Searchable locations', 'Country, state, and city navigation'],
    metrics: [{ value: 'Hierarchical', label: 'location data' }, { value: 'Searchable', label: 'directory' }],
    palette: { from: '#071a2b', via: '#155078', to: '#050d17', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'mak-mart',
    title: 'MAK_MART',
    year: '2026',
    genre: 'Full-Stack Web Applications',
    logline: 'A kids’ clothing store with category-based navigation, product management, and image display.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Express.js', 'MySQL'],
    build: ['Built a kids’ clothing store with category-based navigation, product management, and image display.'],
    features: ['Category-based navigation', 'Product management', 'Product image display'],
    metrics: [{ value: 'Kids’ clothing', label: 'storefront' }, { value: 'Category-based', label: 'product browsing' }],
    palette: { from: '#2a0f1c', via: '#8a2a55', to: '#14070e', accent: '#ff8fc0' },
    motif: 'tenants',
  },
  {
    id: 'portfolio-development-roadmap',
    title: 'Personal Portfolio — Development Roadmap',
    year: '2026',
    genre: 'Front-End Web Applications',
    logline: 'A journey-based portfolio showcasing technical skills, learning milestones, project experiences, and professional growth.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    build: ['Designed and developed an interactive roadmap interface to present a structured development journey.'],
    features: ['Technical skills', 'Learning milestones', 'Project experiences', 'Professional growth'],
    metrics: [{ value: 'Journey-based', label: 'portfolio' }, { value: 'Interactive', label: 'roadmap' }],
    palette: { from: '#1c1405', via: '#7a4e0e', to: '#0d0a03', accent: '#ffb84d' },
    motif: 'flow',
  },
  {
    id: 'career-path-directory',
    title: 'Career Path Directory',
    year: '2026',
    genre: 'Front-End Web Applications',
    logline: 'A career exploration directory organizing career options, educational pathways, and professional opportunities.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    build: ['Developed a structured directory to help users discover career options and navigate related education and opportunities.'],
    features: ['Career options', 'Educational pathways', 'Professional opportunities'],
    metrics: [{ value: 'Structured', label: 'career directory' }, { value: 'Guided', label: 'path exploration' }],
    palette: { from: '#071a2b', via: '#155078', to: '#050d17', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'python-game-center',
    title: 'Python Game Center',
    year: '2026',
    genre: 'Python • Interactive Games',
    logline: 'A collection of interactive Python games demonstrating game logic, user interaction, and programming fundamentals.',
    stack: ['Python'],
    build: ['Developed a collection of interactive games using Python, implementing game logic and user interactions.'],
    features: ['Interactive games', 'Game logic', 'User interaction'],
    metrics: [{ value: 'Python', label: 'game development' }, { value: 'Interactive', label: 'game collection' }],
    palette: { from: '#2a1810', via: '#80511e', to: '#140d08', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'online-book-store',
    title: 'Online Book Store',
    year: '2026',
    genre: 'Front-End Web Applications',
    logline: 'A responsive bookstore with authentication, book search, browsing, pricing details, and shopping cart functionality.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    build: ['Created a responsive bookstore with authentication, search and browsing, pricing details, and shopping cart functionality.'],
    features: ['Authentication', 'Book search and browsing', 'Pricing details', 'Shopping cart'],
    metrics: [{ value: 'Responsive', label: 'bookstore' }, { value: 'Cart', label: 'shopping flow' }],
    palette: { from: '#1c1405', via: '#7a4e0e', to: '#0d0a03', accent: '#ffb84d' },
    motif: 'tenants',
  },
  {
    id: 'college-tracker-system',
    title: 'College Tracker System',
    year: '2026',
    genre: 'Front-End Web Applications',
    logline: 'A campus locator for searching students or faculty and displaying their academic block locations.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    build: ['Developed a campus locator to search for students or faculty and display their academic block locations.'],
    features: ['Student and faculty search', 'Academic block locations'],
    metrics: [{ value: 'Campus', label: 'location directory' }, { value: 'Searchable', label: 'people and places' }],
    palette: { from: '#071a2b', via: '#155078', to: '#050d17', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'calculator-web-app',
    title: 'Calculator Web App',
    year: '2026',
    genre: 'Front-End Web Applications',
    logline: 'A responsive calculator supporting basic and scientific operations with client-side computation.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    build: ['Built a responsive calculator supporting basic and scientific operations with client-side computation logic.'],
    features: ['Basic operations', 'Scientific operations', 'Responsive interface'],
    metrics: [{ value: 'Client-side', label: 'computation' }, { value: 'Scientific', label: 'calculator functions' }],
    palette: { from: '#1f0a2e', via: '#642c7a', to: '#0f0620', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'personal-expense-tracker',
    title: 'Personal Expense Tracker',
    year: '2026',
    genre: 'Front-End Web Applications',
    logline: 'A responsive CRUD-based expense tracker with Local Storage data persistence.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    build: ['Created a responsive expense tracker with CRUD workflows and Local Storage persistence.'],
    features: ['Create, read, update, and delete expenses', 'Local Storage persistence', 'Responsive interface'],
    metrics: [{ value: 'CRUD', label: 'expense tracking' }, { value: 'Local Storage', label: 'data persistence' }],
    palette: { from: '#10251e', via: '#17634b', to: '#07130f', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'mak-task',
    title: 'MAK_Task',
    year: '2026',
    genre: 'Front-End Web Applications',
    logline: 'A drag-and-drop task management application with priority tracking and board management.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    build: ['Developed a drag-and-drop task management application with task priorities and board management.'],
    features: ['Drag-and-drop task management', 'Priority tracking', 'Board management'],
    metrics: [{ value: 'Drag and drop', label: 'task workflows' }, { value: 'Priority-based', label: 'organization' }],
    palette: { from: '#071a2b', via: '#155078', to: '#050d17', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'responsive-front-end-websites',
    title: 'Responsive Front-End Websites',
    year: '2026',
    genre: 'Front-End Web Applications',
    logline: 'A collection of responsive websites featuring navigation, carousels, team sections, contact forms, and animations.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    build: ['Developed responsive single-page and portfolio websites with mobile-friendly layouts and interactive sections.'],
    features: ['Navigation', 'Carousels', 'Team sections', 'Contact forms', 'Animations', 'Mobile-friendly layouts'],
    metrics: [{ value: 'Responsive', label: 'web experiences' }, { value: 'Interactive', label: 'UI sections' }],
    palette: { from: '#1c1405', via: '#7a4e0e', to: '#0d0a03', accent: '#ffb84d' },
    motif: 'shield',
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
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C++' },
      { name: 'Java', mono: 'Ja' },
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'TypeScript', mono: 'Ts' },
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
      { name: 'Next.js', mono: 'Nx' },
      { name: 'React Router', mono: 'Rr' },
      { name: 'React Hooks', mono: 'Rh' },
      { name: 'Context API', mono: 'Ca' },
      { name: 'Tailwind CSS', mono: 'Tc' },
      { name: 'Bootstrap', mono: 'Bt' },
      { name: 'Responsive Design', mono: 'Rd' },
      { name: 'DOM Manipulation', mono: 'Dm' },
      { name: 'Component Architecture', mono: 'Co' },
      { name: 'State Management', mono: 'Sm' },
      { name: 'REST API Integration', mono: 'Ri' },
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
      { name: 'Django REST Framework', mono: 'Dr' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'MVC Architecture', mono: 'Mv' },
      { name: 'CRUD Operations', mono: 'Cr' },
      { name: 'User Authentication', mono: 'Ua' },
      { name: 'JWT', mono: 'Jw' },
      { name: 'API Integration', mono: 'Ai' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & LLM',
    subtitle: 'Generative AI & Automation',
    skills: [
      { name: 'LangChain', mono: 'Lc' },
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'Generative AI', mono: 'Ga' },
      { name: 'RAG', mono: 'Ra' },
      { name: 'OpenAI API', mono: 'Oa' },
      { name: 'Gemini API', mono: 'Ga' },
      { name: 'NVIDIA Nemotron', mono: 'Nn' },
      { name: 'LLM API Integration', mono: 'Li' },
      { name: 'Local & Cloud Models', mono: 'Lm' },
      { name: 'AI Application Development', mono: 'Ad' },
      { name: 'FAISS', mono: 'Fa' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'LLMs', mono: 'Ll' },
    ],
  },
  {
    id: 'rag-vector-databases',
    title: 'RAG & Vector Databases',
    subtitle: 'Retrieval, embeddings & search',
    skills: [
      { name: 'Vector Databases', mono: 'Vd' },
      { name: 'Document Processing', mono: 'Dp' },
      { name: 'Knowledge Repositories', mono: 'Kr' },
      { name: 'Text Embeddings', mono: 'Te' },
      { name: 'Semantic Search', mono: 'Ss' },
      { name: 'Similarity Search', mono: 'Si' },
      { name: 'Cosine Similarity', mono: 'Cs' },
      { name: 'ChromaDB', mono: 'Ch' },
      { name: 'Vector Indexing', mono: 'Vi' },
      { name: 'Reranking', mono: 'Rk' },
      { name: 'Cohere Embed', mono: 'Ce' },
      { name: 'Cohere Rerank', mono: 'Cr' },
      { name: 'Citation-Based Generation', mono: 'Cg' },
      { name: 'Output Validation', mono: 'Ov' },
    ],
  },
  {
    id: 'agentic-ai',
    title: 'AI Agents',
    subtitle: 'Agentic AI & workflow orchestration',
    skills: [
      { name: 'AI Agent Development', mono: 'Ag' },
      { name: 'Tool Calling', mono: 'Tc' },
      { name: 'Workflow Orchestration', mono: 'Wo' },
      { name: 'Agent Memory', mono: 'Am' },
      { name: 'Planning & Action', mono: 'Pa' },
      { name: 'Multi-Step AI Workflows', mono: 'Mw' },
      { name: 'Self-Validating RAG', mono: 'Sv' },
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
      { name: 'Database Design', mono: 'Dd' },
      { name: 'Database Management', mono: 'Db' },
      { name: 'Schema Design', mono: 'Sd' },
      { name: 'MySQL–Backend Integration', mono: 'Mi' },
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
      { name: 'Vercel', mono: 'Ve' },
      { name: 'Render', mono: 'Rn' },
      { name: 'Cloud Computing Fundamentals', mono: 'Cf' },
      { name: 'Application Deployment', mono: 'Ad' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Version Control',
    subtitle: 'Development workflow',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Branching & Merging', mono: 'Bm' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Streamlit', mono: 'Sm' },
      { name: 'Axios', mono: 'Ax' },
      { name: 'Fetch API', mono: 'Fa' },
    ],
  },
  {
    id: 'computer-science',
    title: 'Computer Science',
    subtitle: 'Core concepts & problem solving',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'Ds' },
      { name: 'Object-Oriented Programming', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
      { name: 'Problem Solving', mono: 'Ps' },
    ],
  },
  {
    id: 'ai-ml-fundamentals',
    title: 'AI & ML Fundamentals',
    subtitle: 'Machine learning & responsible AI',
    skills: [
      { name: 'Machine Learning Fundamentals', mono: 'Ml' },
      { name: 'Supervised & Unsupervised Learning', mono: 'Su' },
      { name: 'Deep Learning Fundamentals', mono: 'Dl' },
      { name: 'Neural Networks', mono: 'Nn' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'Responsible AI', mono: 'Ra' },
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
