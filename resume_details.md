
# resume_details.md: single source of truth for the portfolio

> **FOR THE AI TOOL (read first)**
> This file was filled from my real resume (Abhishek_Resume.pdf). It replaces the earlier template.
>
> - Everything here comes from the resume unless marked `TODO` or `PROPOSED`.
> - The old mockup content is **deleted and must not return**: CodeAtlas, MediBuddy, "Independent & Select Advisory", "UI & Interaction Engineer", "4+ years", "12+ builds", 99.4%, 0.00%, 99.98%, ~38ms, "Bengaluru", "contact@abhishek.ai", "14 more artifacts". None of them are in my resume.
> - Metrics marked `verified: yes` come straight from my resume and may be shown. Metrics marked `estimate` must be shown as estimates ("about", "est.") or left out.
> - `PROPOSED` lines are drafts for me to approve before they go live.
> - Missing facts go into `MISSING.md`. Do not invent anything.

---

## 1. Identity

- name: Abhishek Kumar
- headline: AI Engineer | Full-Stack Engineer
- location: Kanpur, India
- email: abhishkdk@gmail.com (shown exactly as on my resume)
- phone: do NOT show on the site
- availability: TODO (Biz Trade Mart role ended Feb 2026; confirm "open to AI Engineer roles" and joining timeline)
- work preference: TODO (remote / hybrid / relocation)

## 2. Links (from the resume's hyperlinks)

- linkedin: https://linkedin.com/in/abhishkatwork
- github: https://github.com/Abhishk-Kumar
- x_twitter: none (omit)
- portfolio_domain: TODO
- resume_pdf: `/resume.pdf` (copy Abhishek_Resume.pdf into `/public/resume.pdf`)

## 3. Summary

**Resume summary (source text):**
AI Engineer with 1.5+ years of experience building LLM-powered products, from RAG pipelines and multi-agent LangGraph workflows to the full-stack apps around them (React/Next.js, FastAPI, Node.js). Improved response relevance by 35% and cut latency by 30% on an AI copilot at Planto AI; shipped deployed projects including Repogent AI (codebase onboarding agent) and Findly.AI (autonomous research platform with a quality-gated revision loop). B.Tech candidate in CSE (AI & ML), seeking an AI Engineer role.

**PROPOSED hero line (max 2 sentences):**
I build LLM products end to end: RAG pipelines and multi-agent LangGraph workflows, plus the React and FastAPI apps around them. B.Tech (CSE, AI & ML) student with 1.5+ years of experience, looking for my first full-time AI Engineer role.

**PROPOSED origin story (growth narrative, 4 sentences):**
I started with a Computer Science diploma in 2021, then moved into a B.Tech in CSE (AI & ML) in 2024. In late 2024 I worked in two directions at once: as a frontend developer on a B2B marketplace, where I learned performance, design systems and shipping to real users, and as an AI research intern, where I learned how to measure RAG quality and cut latency. I then combined both skill sets into my own projects: agents with state machines, quality gates and streaming interfaces. What I care about most now is retrieval quality, evaluation and making AI products dependable.

## 4. Experience (newest first)

### 4.1 Frontend Developer

- org: Biz Trade Mart (Bizindo Trade Mart Pvt. Ltd.)
- location: Pune, India (Remote)
- period: Dec 2024 to Feb 2026
- verified: yes (from resume)
- bullets:
  - Architected a scalable component library in React.js with Tailwind CSS using OOP principles, reducing UI development time by 40% and enforcing design-system consistency across 10+ product modules.
  - Engineered lazy-loading, code-splitting and memoization strategies that improved the Lighthouse performance score from 62 to 91 on core client-facing dashboards.
  - Designed RESTful API contracts with optimistic UI updates and error boundary patterns in an agile/scrum workflow; resolved 30+ cross-browser regressions, reducing production bug reports by 35%.
- stack: React.js, Tailwind CSS, REST APIs, Agile/Scrum
- what_i_learned (PROPOSED): Production-grade frontend: performance budgets, reusable design systems and working with a team on a live product.

### 4.2 AI Research Intern

- org: Planto AI
- location: Remote
- period: Nov 2024 to May 2025 (6-month research effort; ran partly in parallel with the Biz Trade Mart role)
- verified: yes (from resume)
- bullets:
  - Contributed to building an AI copilot product, designing prompt engineering strategies and retrieval-augmented generation (RAG) workflows that improved response relevance by 35%.
  - Built and evaluated LLM-driven features using LangChain, benchmarking outputs against 500+ test queries to reduce the hallucination rate by roughly 25% (resume says "roughly": show as "about 25%").
  - Optimized the vector retrieval pipeline (embeddings + similarity search), cutting average copilot response latency by 30%.
- stack: LangChain, RAG, embeddings, vector search, prompt engineering
- what_i_learned (PROPOSED): How to evaluate an LLM system with a real test set (500+ queries) instead of judging by feel, and how retrieval design affects both quality and speed.

## 5. Projects (3 real projects)

Each project becomes a case-study page. Fields not in the resume are `TODO` and stay hidden until I fill them.

### 5.1 Repogent AI: codebase onboarding agent

- slug: repogent-ai
- links: preview https://repogent.onrender.com/ , repo https://github.com/Abhishk-Kumar/Repogent.git
- stack: LangChain, LangGraph, Mistral, Groq API, Python, ChromaDB
- one_liner: AI-powered onboarding agent that takes a GitHub repo URL or ZIP upload and generates interactive dependency graphs and visual architecture maps.
- highlights (from resume):
  - Handles repositories of 500+ files and generates the graphs and architecture maps in under 60 seconds.
  - Multi-agent pipeline (LangChain + LangGraph) with 4+ specialized agents: parsing, summarization, Q&A, graph generation.
  - Semantic code retrieval with ChromaDB, plus Groq and Mistral inference, for natural-language Q&A over a codebase with sub-2-second response latency.
- metric `estimate`: "improved codebase comprehension time by about 50% for new contributors" is an estimate in the resume. Show as "est." with a note, or leave out.
- problem / constraints / decisions / evaluation / next_steps: TODO (needed for the case study)
- status: deployed (preview link)
- verified: yes for the numbers above; no for TODO fields

### 5.2 Findly.AI: autonomous research platform

- slug: findly-ai
- links: preview https://findly-ai-rosy.vercel.app/ , repo https://github.com/Abhishk-Kumar/Findly-AI
- stack: LangGraph, FastAPI, React, TypeScript, Groq Llama-3.3-70B, Tavily, SQLAlchemy
- one_liner: Turns a research question into a cited report using an 8-node LangGraph state machine.
- highlights (from resume):
  - 8-node LangGraph state machine covering search, scraping, synthesis, drafting, critique and finalization, with live progress streamed through Server-Sent Events.
  - Quality-gated revision loop: an AI critic scores each draft 1 to 10 and triggers automatic rewrites (up to 3) until a configurable quality bar is met.
  - Tone-adjustable writing, grounded follow-up Q&A over the scraped sources, and PDF/Markdown export.
  - Security hardening: SSRF-protected scraper (private-IP blocking, URL scheme validation) and API-key sanitization.
  - Async SQLAlchemy persistence layer and a React/Tailwind dashboard, validated by 12 pytest tests.
- problem / constraints / decisions / evaluation / next_steps: TODO
- status: deployed (preview link)
- verified: yes for the numbers above; no for TODO fields

### 5.3 MediConnect: healthcare appointment platform

- slug: mediconnect
- links: preview https://e-consultancy.onrender.com/ , repo https://github.com/Abhishk-Kumar/Consultancy-website.git (the repo and preview names differ from "MediConnect": confirm they are the right ones)
- stack: React, Node.js, Express, MongoDB, JWT, Socket.io
- one_liner: Full-stack healthcare appointment platform with real-time doctor-patient messaging.
- highlights (from resume):
  - Real-time messaging with Socket.io, conflict-free scheduling logic, and role-based authentication using JWT refresh-token rotation.
  - Optimized MongoDB aggregation pipelines for appointment analytics, with sub-100ms query response under concurrent load.
- note: this is a non-AI project. Position it as proof of full-stack depth, lower priority than the two AI projects.
- problem / constraints / decisions / next_steps: TODO
- verified: yes for the numbers above; no for TODO fields

## 6. Skills (exactly as on the resume, grouped)

- Languages: JavaScript (ES6+), TypeScript, Python, Java, SQL
- AI/ML (core): LangChain, LangGraph, LLM API integration (Groq, Mistral, OpenAI), prompt engineering, RAG pipelines, ChromaDB, FAISS, machine learning, ML model optimization
- Backend (core): FastAPI, Node.js, Express.js, REST APIs, JWT, OAuth2
- Frontend (core): React.js, Next.js, Tailwind CSS, Material-UI, HTML5, CSS3
- Databases: MongoDB, PostgreSQL, MySQL, SQLite
- DevOps & cloud: Docker, Git, Vercel
- Practices: Agile/Scrum, OOP, Jest, Pytest, code review
- Do not add skills not listed here (for example Qdrant, Pinecone, Redis, Tree-Sitter, MCP and WebGL were mockup-only).

## 7. Education

- Bachelor of Technology, CSE (AI & ML): Dr. A.P.J. Abdul Kalam Technical University, Kanpur. Mar 2024 to Mar 2027. CGPA 7.13 (till 6th semester).
- Diploma, Computer Science Engineering: Government Technical Institute, Kanpur. Jul 2021 to Jul 2024. CGPA 7.5.

## 8. Certifications, awards, publications

None in the resume. Leave this section out. (TODO: add any real ones I have.)

## 9. Growth timeline (use for the "Craft" section; all dates from the resume)

| When                | Stage                               | New capability                                                                         |
| ------------------- | ----------------------------------- | -------------------------------------------------------------------------------------- |
| Jul 2021            | Diploma in CSE                      | Programming and CS fundamentals                                                        |
| Mar 2024            | B.Tech CSE (AI & ML)                | ML and AI foundations                                                                  |
| Nov 2024            | AI Research Intern, Planto AI       | RAG, LangChain, evaluation on 500+ queries, retrieval latency                          |
| Dec 2024            | Frontend Developer, Biz Trade Mart  | Design systems, performance (Lighthouse 62 to 91), team delivery                       |
| Project dates: TODO | Repogent AI, Findly.AI, MediConnect | Multi-agent LangGraph systems, streaming, quality gates, security, full-stack delivery |
| Now                 | Seeking AI Engineer role            | Full product: model, retrieval, API and interface                                      |

## 10. Metrics ledger (only these may appear on the site)

| Claim                         | Value                     | Source         | Method / context                                                      | verified          |
| ----------------------------- | ------------------------- | -------------- | --------------------------------------------------------------------- | ----------------- |
| Experience                    | 1.5+ years                | Resume summary | Stated in resume; do not use the mockup's "4+"                        | yes               |
| Response relevance            | +35%                      | Planto AI      | RAG and prompt strategies on an AI copilot; how it was measured: TODO | yes               |
| Hallucination rate            | about 25% lower           | Planto AI      | 500+ test queries benchmarked; resume says "roughly"                  | yes (approximate) |
| Copilot latency               | 30% lower                 | Planto AI      | Optimized vector retrieval pipeline                                   | yes               |
| UI development time           | 40% less                  | Biz Trade Mart | Component library across 10+ modules                                  | yes               |
| Lighthouse performance        | 62 to 91                  | Biz Trade Mart | Core client-facing dashboards                                         | yes               |
| Production bug reports        | 35% fewer                 | Biz Trade Mart | After fixing 30+ cross-browser regressions                            | yes               |
| Repo analysis                 | under 60 s for 500+ files | Repogent AI    | Graphs and architecture maps                                          | yes               |
| Code Q&A latency              | under 2 s                 | Repogent AI    | Semantic retrieval with ChromaDB                                      | yes               |
| Onboarding comprehension time | about 50% faster          | Repogent AI    | Estimate in resume                                                    | estimate          |
| Findly tests                  | 12 pytest tests           | Findly.AI      | Backend validation                                                    | yes               |
| MediConnect query time        | under 100 ms              | MediConnect    | MongoDB aggregations under concurrent load                            | yes               |

## 11. Notes and gaps for the AI tool

- The resume title says "AI Engineer", but the roles are one frontend job and one AI research internship. Be honest: present it as "frontend engineer turned AI engineer, with hands-on RAG and agent projects". Do not describe me as senior or imply years of AI-only production work.
- Planto AI (Nov 2024 to May 2025) and Biz Trade Mart (Dec 2024 to Feb 2026) overlap. Show both; do not hide the overlap.
- Render preview sites (`onrender.com`) may take time to wake up. Add a small "may take about 30 seconds to wake" note beside those preview links.
- Phone number is not shown anywhere on the site.
