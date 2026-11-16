import { Profile, Experience, Project, Skills, profileSchema, experienceSchema, projectSchema, skillsSchema } from './types'
import { z } from 'zod'

export const profile: Profile = profileSchema.parse({
  name: "Abhishek Kumar",
  headline: "AI Engineer | Full-Stack Engineer",
  location: "Kanpur, India",
  email: "abhishkdk@gmail.com",
  availability: null,
  workPreference: null,
  links: {
    linkedin: "https://linkedin.com/in/abhishkatwork",
    github: "https://github.com/Abhishk-Kumar",
    resumePdf: "/resume.pdf",
  },
  summary: "AI Engineer with 1.5+ years of experience building LLM-powered products, from RAG pipelines and multi-agent LangGraph workflows to the full-stack apps around them (React/Next.js, FastAPI, Node.js). Improved response relevance by 35% and cut latency by 30% on an AI copilot at Planto AI; shipped deployed projects including Repogent AI (codebase onboarding agent) and Findly.AI (autonomous research platform with a quality-gated revision loop). B.Tech candidate in CSE (AI & ML), seeking an AI Engineer role.",
  originStory: "I started with a Computer Science diploma in 2021, then moved into a B.Tech in CSE (AI & ML) in 2024. In late 2024 I worked in two directions at once: as a frontend developer on a B2B marketplace, where I learned performance, design systems and shipping to real users, and as an AI research intern, where I learned how to measure RAG quality and cut latency. I then combined both skill sets into my own projects: agents with state machines, quality gates and streaming interfaces. What I care about most now is retrieval quality, evaluation and making AI products dependable.",
})

export const experiences: Experience[] = z.array(experienceSchema).parse([
  {
    org: "Biz Trade Mart (Bizindo Trade Mart Pvt. Ltd., Pune, India)",
    title: "Frontend Developer",
    location: "Pune, India (Remote)",
    period: "Dec 2024 to Feb 2026",
    verified: true,
    bullets: [
      "Architected a scalable component library in React.js with Tailwind CSS using OOP principles, reducing UI development time by 40% and enforcing design-system consistency across 10+ product modules.",
      "Engineered lazy-loading, code-splitting and memoization strategies that improved the Lighthouse performance score from 62 to 91 on core client-facing dashboards.",
      "Designed RESTful API contracts with optimistic UI updates and error boundary patterns in an agile/scrum workflow; resolved 30+ cross-browser regressions, reducing production bug reports by 35%."
    ],
    stack: ["React.js", "Tailwind CSS", "REST APIs", "Agile/Scrum"],
    whatILearned: "Production-grade frontend: performance budgets, reusable design systems and working with a team on a live product."
  },
  {
    org: "Planto AI",
    title: "AI Research Intern",
    location: "Remote",
    period: "Nov 2024 to May 2025",
    verified: true,
    bullets: [
      "Contributed to building an AI copilot product, designing prompt engineering strategies and retrieval-augmented generation (RAG) workflows that improved response relevance by 35%.",
      "Built and evaluated LLM-driven features using LangChain, benchmarking outputs against 500+ test queries to reduce the hallucination rate by about 25%.",
      "Optimized the vector retrieval pipeline (embeddings + similarity search), cutting average copilot response latency by 30%."
    ],
    stack: ["LangChain", "RAG", "Embeddings", "Vector Search", "Prompt Engineering"],
    whatILearned: "How to evaluate an LLM system with a real test set (500+ queries) instead of judging by feel, and how retrieval design affects both quality and speed."
  }
])

export const projects: Project[] = z.array(projectSchema).parse([
  {
    slug: "repogent-ai",
    title: "Repogent AI",
    subtitle: "Codebase Onboarding Agent",
    status: "Deployed",
    oneLiner: "AI-powered onboarding agent that takes a GitHub repo URL or ZIP upload and generates interactive dependency graphs and visual architecture maps.",
    links: {
      repo: "https://github.com/Abhishk-Kumar/Repogent",
      preview: "https://repogent.vercel.app/",
    },
    stack: ["LangChain", "LangGraph", "Mistral", "Groq API", "Python", "ChromaDB"],
    highlights: [
      "Handles repositories of 500+ files and generates graphs and architecture maps in under 60 seconds.",
      "Multi-agent pipeline (LangChain + LangGraph) with specialized agents for parsing, summarization, and Q&A."
    ],
    metrics: [
      "Handles 500+ files in <60s parsing time",
      "Sub-2s semantic code retrieval latency"
    ],
    verified: true,
    problem: "Navigating large unfamiliar codebases takes days of manual exploration and architecture diagramming.",
    constraints: "Must process multi-file repositories reliably without timing out serverless execution environments.",
    architecture: "Multi-agent LangGraph workflow coordinated with ChromaDB vector store and Groq/Mistral LLM inference.",
    keyDecisions: [
      "Chose ChromaDB for local embedding storage and fast semantic retrieval over external vector databases.",
      "Structured multi-agent graph with distinct separation between AST parsing, summarization, and graph generation."
    ],
    evaluation: "Benchmarked against 500+ file repositories for graph generation correctness and speed.",
    results: "Successfully generates complete architecture visualizers in under 60 seconds.",
    nextSteps: [
      "Add direct IDE extension integration for real-time workspace indexing."
    ]
  },
  {
    slug: "findly-ai",
    title: "Findly.AI",
    subtitle: "Autonomous Research Platform",
    status: "Deployed",
    oneLiner: "Turns a research question into a cited report using an 8-node LangGraph state machine with quality gates.",
    links: {
      repo: "https://github.com/Abhishk-Kumar/Findly-AI",
      preview: "https://findly-ai-rosy.vercel.app/",
    },
    stack: ["LangGraph", "FastAPI", "React", "TypeScript", "Groq Llama-3.3-70B", "Tavily", "SQLAlchemy"],
    highlights: [
      "8-node LangGraph state machine covering search, scraping, synthesis, drafting, critique and finalization.",
      "Quality-gated revision loop: AI critic scores drafts (1–10) and triggers automatic rewrites (maximum 3 revisions)."
    ],
    metrics: [
      "8-node LangGraph autonomous research state machine",
      "Quality gate ≥ 7 with maximum 3 automated revisions",
      "Backed by 12 backend pytest tests"
    ],
    verified: true,
    problem: "Deep web research requires iterative searching, source synthesis, and rigorous fact-checking which is slow and manual.",
    constraints: "API rate limits and unstructured web scraping noise required robust error handling and validation.",
    architecture: "FastAPI backend orchestrating an 8-node LangGraph agent graph backed by PostgreSQL/SQLAlchemy and Tavily search.",
    keyDecisions: [
      "Implemented an explicit critique-rewrite loop enforcing minimum quality scores before final report generation.",
      "Used Server-Sent Events (SSE) to stream live node progression states to the React frontend."
    ],
    evaluation: "Tested across complex multi-faceted research queries with 12 automated pytest suites.",
    results: "Produces comprehensive, fully cited research briefs with automated quality control.",
    nextSteps: [
      "Support multi-source export formats and collaborative team workspaces."
    ]
  },
  {
    slug: "mediconnect",
    title: "MediConnect",
    subtitle: "Healthcare Appointment Platform",
    status: "Deployed",
    oneLiner: "Full-stack healthcare appointment platform with real-time doctor-patient messaging and optimized scheduling.",
    links: {
      repo: "https://github.com/Abhishk-Kumar/Consultancy-website",
      preview: "https://e-consultancy.onrender.com/",
    },
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
    highlights: [
      "Real-time messaging with Socket.io and conflict-free scheduling logic with JWT refresh-token authentication.",
      "Optimized MongoDB aggregation pipelines for appointment analytics under concurrent load."
    ],
    metrics: [
      "Sub-100ms MongoDB aggregation queries",
      "Real-time Socket.io bi-directional messaging",
    ],
    verified: true,
    problem: "Healthcare booking systems often suffer from scheduling conflicts and lagging doctor-patient communication.",
    constraints: "Must ensure secure role-based access control and instant notification delivery.",
    architecture: "MERN stack architecture with JWT cookie-based auth, Socket.io websocket server, and Mongoose ODM.",
    keyDecisions: [
      "Applied database indexing on appointment datetime fields to eliminate scheduling overlap race conditions.",
      "Utilized Socket.io room abstractions for private doctor-patient chat sessions."
    ],
    evaluation: "Tested under simulated concurrent appointment booking and chat loads.",
    results: "Delivers responsive booking flows and instant messaging with sub-100ms query performance.",
    nextSteps: [
      "Integrate video consultation WebRTC rooms."
    ]
  },
  {
    slug: "ombre-ash",
    title: "Ombre & Ash",
    subtitle: "Niche Perfumery House",
    status: "Live Preview",
    oneLiner: "E-commerce and brand presentation for an artisanal perfumery featuring 4 signature extraits and numbered batch releases.",
    links: {
      repo: "",
      preview: "https://ombre-ash-perfumes.vercel.app/",
    },
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    highlights: [
      "4 signature extraits presented with immersive olfactory scent notes and artisanal storytelling.",
      "Limited batch production model (400 numbered units per batch) across 3 flagship salons (Paris, Grasse, Kyoto)."
    ],
metrics: [
      "4 signature extraits",
      "400 numbered units per batch",
      "3 salons (Paris / Grasse / Kyoto)",
      "50ml / 1.7 fl.oz flacons"
    ],
    verified: true,
    problem: "Artisanal luxury perfumery requires a digital showcase that matches physical atelier exclusivity.",
    constraints: "Static frontend performance without heavy framework overhead while maintaining cinematic typography.",
    architecture: "Static HTML/CSS/JS frontend hosted on Vercel with responsive mobile-first layouts.",
    keyDecisions: [
      "Employed editorial serif typography and dark obsidian tones to evoke high-end fragrance branding.",
      "Structured product catalog around limited-edition batch numbers to highlight scarcity."
    ],
    evaluation: "Audited for high visual fidelity across 4 signature extraits, buttery smooth responsive layout with 400 numbered units per batch across 3 salons (Paris / Grasse / Kyoto), and lightning-fast load times. Flacon sizes: 50ml (1.7 fl.oz) and 1.7 fl.oz.",
    results: "Delivers an atmospheric, polished digital storefront for luxury extraits.",
    nextSteps: [
      "Add interactive fragrance layering quiz."
    ]
  },
  {
    slug: "biz-trade-mart",
    title: "Biz Trade Mart",
    subtitle: "B2B Marketplace & Component Library",
    status: "Client Work",
    oneLiner: "Scalable B2B marketplace dashboards and reusable React component library built during professional tenure.",
    links: {
      repo: "",
      preview: "https://www.biztrademart.com/",
    },
    stack: ["React.js", "Tailwind CSS", "REST APIs", "Agile/Scrum"],
    highlights: [
      "Architected a scalable component library in React with Tailwind CSS across 10+ product modules.",
      "Engineered lazy-loading and memoization strategies that boosted Lighthouse performance from 62 to 91."
    ],
    metrics: [
      "Lighthouse performance gain: 62 → 91",
      "10+ standardized product modules",
      "−35% reduction in production bug reports"
    ],
    verified: true,
    problem: "Rapid product expansion led to UI inconsistencies and sluggish dashboard load speeds.",
    constraints: "Must maintain strict backwards compatibility while refactoring core marketplace modules.",
    architecture: "Modular React component architecture integrated with RESTful backend APIs and performance optimization budgets.",
    keyDecisions: [
      "Adopted atomic design and OOP component principles to slash UI development time by 40%.",
      "Applied aggressive code-splitting and route-based lazy loading to improve core vitals."
    ],
    evaluation: "Validated via Lighthouse performance audits and cross-browser regression testing.",
    results: "Boosted client dashboard speed from 62 to 91 and standardized UI across 10+ modules.",
    nextSteps: [
      "Expand design system token documentation for mobile apps."
    ]
  }
])

export const skills: Skills = skillsSchema.parse({
  languages: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL"],
  aiMl: ["LangChain", "LangGraph", "LLM API integration (Groq, Mistral, OpenAI)", "Prompt engineering", "RAG pipelines", "ChromaDB", "FAISS", "Machine learning", "ML model optimization"],
  backend: ["FastAPI", "Node.js", "Express.js", "REST APIs", "JWT", "OAuth2"],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "Material-UI", "HTML5", "CSS3"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
  devops: ["Docker", "Git", "Vercel"],
  practices: ["Agile/Scrum", "OOP", "Jest", "Pytest", "Code review"],
  core: ["FastAPI", "LangChain/LangGraph", "Python", "TypeScript", "Next.js/React", "ChromaDB", "Docker"]
})
