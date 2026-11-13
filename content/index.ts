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
    org: "Biz Trade Mart (Bizindo Trade Mart Pvt. Ltd.)",
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
      repo: "https://github.com/Abhishk-Kumar/Repogent.git",
      preview: "https://repogent.onrender.com/",
    },
    stack: ["LangChain", "LangGraph", "Mistral", "Groq API", "Python", "ChromaDB"],
    highlights: [
      "Handles repositories of 500+ files and generates the graphs and architecture maps in under 60 seconds.",
      "Multi-agent pipeline (LangChain + LangGraph) with 4+ specialized agents: parsing, summarization, Q&A, graph generation.",
      "Semantic code retrieval with ChromaDB, plus Groq and Mistral inference, for natural-language Q&A over a codebase with sub-2-second response latency."
    ],
    metrics: [
      "Handles 500+ files in <60s",
      "Sub-2s RAG response latency",
      "Est. ~50% faster onboarding comprehension"
    ],
    verified: true,
    problem: null,
    constraints: null,
    architecture: null,
    keyDecisions: null,
    evaluation: null,
    results: null,
    nextSteps: null
  },
  {
    slug: "findly-ai",
    title: "Findly.AI",
    subtitle: "Autonomous Research Platform",
    status: "Deployed",
    oneLiner: "Turns a research question into a cited report using an 8-node LangGraph state machine.",
    links: {
      repo: "https://github.com/Abhishk-Kumar/Findly-AI",
      preview: "https://findly-ai-rosy.vercel.app/",
    },
    stack: ["LangGraph", "FastAPI", "React", "TypeScript", "Groq Llama-3.3-70B", "Tavily", "SQLAlchemy"],
    highlights: [
      "8-node LangGraph state machine covering search, scraping, synthesis, drafting, critique and finalization, with live progress streamed through Server-Sent Events.",
      "Quality-gated revision loop: an AI critic scores each draft 1 to 10 and triggers automatic rewrites (up to 3) until a configurable quality bar is met.",
      "Tone-adjustable writing, grounded follow-up Q&A over scraped sources, and PDF/Markdown export, backed by 12 pytest tests."
    ],
    metrics: [
      "8-node LangGraph state machine",
      "Up to 3 automated quality revision loops",
      "12 backend pytest tests"
    ],
    verified: true,
    problem: null,
    constraints: null,
    architecture: null,
    keyDecisions: null,
    evaluation: null,
    results: null,
    nextSteps: null
  },
  {
    slug: "mediconnect",
    title: "MediConnect",
    subtitle: "Healthcare Appointment Platform",
    status: "Deployed",
    oneLiner: "Full-stack healthcare appointment platform with real-time doctor-patient messaging.",
    links: {
      repo: "https://github.com/Abhishk-Kumar/Consultancy-website.git",
      preview: "https://e-consultancy.onrender.com/",
    },
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
    highlights: [
      "Real-time messaging with Socket.io, conflict-free scheduling logic, and role-based authentication using JWT refresh-token rotation.",
      "Optimized MongoDB aggregation pipelines for appointment analytics, with sub-100ms query response under concurrent load."
    ],
    metrics: [
      "Sub-100ms MongoDB aggregations",
      "Real-time Socket.io messaging",
      "JWT refresh-token security"
    ],
    verified: true,
    problem: null,
    constraints: null,
    architecture: null,
    keyDecisions: null,
    evaluation: null,
    results: null,
    nextSteps: null
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
