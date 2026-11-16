'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { profile, experiences, skills } from '../../content'

interface HeroProps {
  hasResumePdf: boolean
}

export const Hero: FC<HeroProps> = ({ hasResumePdf }) => {
  return (
    <section className="relative w-full px-6 md:px-16 pt-12 md:pt-20 pb-24 md:pb-32 overflow-hidden">
      {/* Ambient glow now comes from the page-level layer */}
      <div className="relative max-w-6xl mx-auto flex flex-col items-start">
        {/* Availability Pill */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 bg-surface-container-low border border-border-hairline rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
            Seeking <span className="text-bone-white font-medium">AI Engineer role</span>s — {profile.location}
          </span>
        </div>

        {/* Monolithic Display Typography */}
<h1
          className="font-display-hero text-display-hero-mobile md:text-display-hero text-bone-white tracking-tight leading-[1.1] mb-4"
        >
          <span className="block mb-8">
            {profile.name.split(' ')[0]}
          </span>
          <span className="italic text-primary-container font-normal">
            {profile.name.split(' ')[1]}
          </span>
        </h1>

        {/* Subtitle Indicator */}
        <div
          className="flex items-center gap-3 my-6"
        >
          <span className="w-6 h-[1.5px] bg-primary-container" />
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary font-semibold">
            {profile.headline}
          </span>
        </div>

        {/* Narrative Bio */}
        <p
          className="font-display text-body-lg text-tertiary max-w-2xl leading-relaxed mb-10"
        >
          I build LLM products end to end: <span className="text-bone-white font-medium">RAG pipelines</span> and <span className="text-bone-white font-medium">multi-agent LangGraph workflows</span>, plus the React and FastAPI apps around them. B.Tech (CSE, AI &amp; ML) student with 1.5+ years of experience, looking for my first full-time <span className="text-bone-white font-medium">AI Engineer role</span>.
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a
            href="#artifacts"
            className="px-7 py-3.5 bg-primary-container text-surface-container-lowest font-body-sm text-body-sm font-semibold uppercase tracking-wider rounded hover:bg-secondary-container transition-all duration-200 shadow-[0_0_24px_rgba(255,87,34,0.25)] flex items-center gap-2"
          >
            <span>Explore The Artifacts</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          {hasResumePdf && (
            <a
              href={profile.links.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-surface-container-low text-bone-white font-body-sm text-body-sm font-medium uppercase tracking-wider rounded border border-border-hairline hover:bg-surface-container hover:text-primary-container transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Résumé</span>
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="px-7 py-3.5 bg-surface-container-low text-bone-white font-body-sm text-body-sm font-medium uppercase tracking-wider rounded border border-border-hairline hover:bg-surface-container hover:text-primary-container transition-all duration-200"
          >
            Make Contact
          </a>
        </div>

        {/* Recruiter Fast-Scan Strip */}
        <div
          className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 p-6 bg-surface-container-lowest border border-border-hairline rounded-lg min-h-[200px]"
        >
<div className="flex flex-col">
            <span className="font-headline-sm text-bone-white font-semibold">YEARS IN SOFTWARE</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mt-1">
              YEARS IN SOFTWARE
            </span>
          </div>
          <div className="flex flex-col {
            border-top: 2px solid #ff5722;
          }">
            <span className="font-headline-sm text-bone-white font-semibold">+35%</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mt-1">
              RELEVANCE
            </span>
          </div>
          <div className="flex flex-col border-t border-primary">
            <span className="font-headline-sm text-bone-white font-semibold">−30%</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mt-1">
              LATENCY
            </span>
          </div>
          <div className="flex flex-col border-t border-primary">
            <span className="font-headline-sm text-bone-white font-semibold">62 → 91</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mt-1">
              LIGHTHOUSE PERF GAIN
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-bone-white font-semibold">2 Shipped</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mt-1">
              AI AGENT PRODUCTS
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
