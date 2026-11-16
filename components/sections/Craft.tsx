'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { experiences } from '../../content'

export const Craft: FC = () => {
  const academicNodes = [
    {
      period: "Jul 2021 — Jul 2024",
      title: "Diploma in Computer Science Engineering",
      org: "Government Technical Institute, Kanpur",
      bullets: [
        "Built core foundations in programming, data structures, and computer science principles.",
        "Graduated with 7.5 CGPA."
      ],
      stack: ["Java", "SQL", "CS Fundamentals"],
      whatILearned: "Core programming fundamentals and computational thinking.",
      type: "education"
    },
    {
      period: "Mar 2024 — Mar 2027",
      title: "B.Tech in CSE (AI & ML)",
      org: "Dr. A.P.J. Abdul Kalam Technical University, Kanpur",
      bullets: [
        "Focused studies on machine learning algorithms, artificial intelligence architecture, and data engineering.",
        "Maintained 7.13 CGPA through 6th semester."
      ],
      stack: ["Python", "Machine Learning", "Algorithms"],
      whatILearned: "Mathematical foundations of machine learning and neural architectures.",
      type: "education"
    }
  ]

  const professionalNodes = [
    {
      period: "Now",
      title: "AI Engineer & Full-Stack Builder",
      org: "Seeking Full-Time AI Engineer Roles",
      bullets: [
        "Shipped Repogent AI: codebase onboarding agent handling 500+ files with LangChain + LangGraph multi-agent pipeline and ChromaDB semantic retrieval.",
        "Shipped Findly.AI: autonomous research platform with 8-node LangGraph state machine, quality-gated revision loop, and SSRF-hardened FastAPI backend.",
        "Shipped MediConnect: full-stack healthcare appointment platform with real-time Socket.io messaging and MongoDB aggregation pipelines."
      ],
      stack: ["LangGraph", "LangChain", "FastAPI", "Python", "React", "Next.js"],
      whatILearned: "End-to-end ownership: combining rigorous RAG retrieval, multi-agent state machines, and production-ready full-stack interfaces into dependable AI products.",
      type: "current"
    },
    {
      period: "Dec 2024 — Feb 2026",
      title: "Frontend Developer",
      org: "Biz Trade Mart (Bizindo Trade Mart Pvt. Ltd., Remote)",
      bullets: [
        "Architected a scalable component library in React.js with Tailwind CSS using OOP principles, reducing UI development time by 40% and enforcing design-system consistency across 10+ product modules.",
        "Engineered lazy-loading, code-splitting and memoization strategies that improved the Lighthouse performance score from 62 to 91 on core client-facing dashboards.",
        "Designed RESTful API contracts with optimistic UI updates and error boundary patterns in an agile/scrum workflow; resolved 30+ cross-browser regressions, reducing production bug reports by 35%."
      ],
      stack: ["React.js", "Tailwind CSS", "REST APIs", "Agile/Scrum"],
      whatILearned: "Production-grade frontend: performance budgets, reusable design systems and working with a team on a live product.",
      type: "experience"
    },
    {
      period: "Nov 2024 — May 2025",
      title: "AI Research Intern",
      org: "Planto AI (Remote)",
      bullets: [
        "Contributed to building an AI copilot product, designing prompt engineering strategies and retrieval-augmented generation (RAG) workflows that improved response relevance by 35%.",
        "Built and evaluated LLM-driven features using LangChain, benchmarking outputs against 500+ test queries to reduce the hallucination rate by about 25%.",
        "Optimized the vector retrieval pipeline, cutting average copilot response latency by 30%."
      ],
      stack: ["LangChain", "RAG", "Embeddings", "Vector Search", "Prompt Engineering"],
      whatILearned: "How to evaluate an LLM system with a real test set (500+ queries) instead of judging by feel, and how retrieval design affects both quality and speed.",
      type: "experience"
    }
  ]

  const skillStages = [
    {
      period: "2021 — 2022",
      skills: "Java, SQL, CS Fundamentals, Diploma Foundation"
    },
    {
      period: "2022 — 2023",
      skills: "Data Structures, Algorithms, Core Programming"
    },
    {
      period: "Diploma final year + B.Tech (lateral entry)",
      skills: "Python, Machine Learning, B.Tech Transition"
    },
    {
      period: "2024 — Present",
      skills: "LangChain, LangGraph, RAG, React.js, FastAPI, Next.js"
    }
  ]

  return (
    <section className="relative w-full px-6 md:px-16 py-16 md:py-24 bg-surface-container-lowest/60 backdrop-blur-[2px]" id="the-craft">
      <div className="max-w-6xl mx-auto relative">
        {/* Watermark Numeral */}
        <div className="absolute -top-12 md:-top-16 right-0 select-none pointer-events-none text-wireframe-numeral font-scene-counter text-scene-counter-mobile md:text-scene-counter opacity-30 leading-none z-0">
          02
        </div>

        {/* Scene Header */}
        <div className="relative z-10 mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-4 h-[1px] bg-primary-container" />
            <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
              Scene 02 — The Craft
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-bone-white max-w-2xl mb-4">
            Where the <span className="italic text-primary-container font-light">craft</span> was forged.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            From foundational computer science to AI research and production frontend engineering — chronological timeline from oldest to newest. Note: AI Research at Planto AI and Frontend Development at Biz Trade Mart overlapped starting Dec 2024.
          </p>
        </div>

        {/* Skills Added By Stage Strip */}
        <div className="relative z-10 mb-16 p-6 bg-surface-container-low border border-border-hairline rounded-lg">
          <span className="block font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-3">
            Skill Growth by Stage
          </span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-body-sm text-tertiary">
            {skillStages.map((stage, sIdx) => (
              <div key={sIdx} className="p-3 bg-surface-charcoal rounded border border-border-hairline">
                <span className="text-primary-container font-bold block mb-4">{stage.period}</span>
                <span>{stage.skills}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Foundation Section */}
        <div className="relative z-10 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-[1px] bg-primary-container" />
            <h3 className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container font-bold">
              Academic Foundation
            </h3>
          </div>
          <div className="ml-2 md:ml-4 pl-6 md:pl-10 space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-surface-container-high">
            {academicNodes.map((node, index) => (
              <div key={index} className="relative group">
                <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rotate-45 bg-surface-container-highest group-hover:bg-primary-container transition-colors" />
                <div className="bg-surface-container-low border border-border-hairline p-6 md:p-8 rounded-lg transition-colors hover:bg-surface-container">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-label-caps text-label-caps uppercase text-primary-container font-bold tracking-widest">
                        {node.period}
                      </span>
                      <span className="text-tertiary-container text-xs">/</span>
                      <h4 className="font-headline-sm text-headline-sm text-bone-white">{node.title}</h4>
                    </div>
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      {node.org}
                    </span>
                  </div>

                  <ul className="space-y-2 font-body-md text-body-md text-tertiary mt-3 mb-5 leading-relaxed list-disc list-inside">
                    {node.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="mb-5 p-3 bg-surface-charcoal rounded border border-border-hairline text-xs text-on-surface-variant">
                    <span className="text-primary-container font-bold uppercase tracking-wider block mb-1 font-mono">
                      What I Learned
                    </span>
                    <p className="text-tertiary italic">{node.whatILearned}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {node.stack.map((tech, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-surface-charcoal text-on-surface-variant font-label-caps text-label-caps uppercase rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-[1px] bg-primary-container" />
              <h3 className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container font-bold">
                Professional Experience
              </h3>
            </div>
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-xs italic bg-surface-container-low px-3 py-1 rounded border border-border-hairline">
              * Note: Professional internships were conducted part-time / remotely alongside B.Tech studies.
            </span>
          </div>
          <div className="ml-2 md:ml-4 pl-6 md:pl-10 space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-surface-container-high">
            {professionalNodes.map((node, index) => (
              <div key={index} className="relative group">
                <span className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rotate-45 transition-colors ${
                  node.type === 'current'
                    ? 'bg-primary-container shadow-[0_0_12px_rgba(255,87,34,0.6)]'
                    : 'bg-surface-container-highest group-hover:bg-primary-container'
                }`} />

                <div className="bg-surface-container-low border border-border-hairline p-6 md:p-8 rounded-lg transition-colors hover:bg-surface-container">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-label-caps text-label-caps uppercase text-primary-container font-bold tracking-widest">
                        {node.period}
                      </span>
                      <span className="text-tertiary-container text-xs">/</span>
                      <h4 className="font-headline-sm text-headline-sm text-bone-white">{node.title}</h4>
                    </div>
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      {node.org}
                    </span>
                  </div>

                  <ul className="space-y-2 font-body-md text-body-md text-tertiary mt-3 mb-5 leading-relaxed list-disc list-inside">
                    {node.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="mb-5 p-3 bg-surface-charcoal rounded border border-border-hairline text-xs text-on-surface-variant">
                    <span className="text-primary-container font-bold uppercase tracking-wider block mb-1 font-mono">
                      What I Learned
                    </span>
                    <p className="text-tertiary italic">{node.whatILearned}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {node.stack.map((tech, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-surface-charcoal text-on-surface-variant font-label-caps text-label-caps uppercase rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
