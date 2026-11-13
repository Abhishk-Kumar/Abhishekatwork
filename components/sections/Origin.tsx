'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../../content'

export const Origin: FC = () => {
  return (
    <section className="relative w-full px-6 md:px-16 py-20 md:py-32 bg-surface-dim overflow-hidden" id="origin">
      <div className="max-w-6xl mx-auto relative">
        {/* Watermark Numeral */}
        <div className="absolute -top-12 md:-top-16 right-0 select-none pointer-events-none text-wireframe-numeral font-scene-counter text-scene-counter-mobile md:text-scene-counter opacity-30 leading-none z-0">
          01
        </div>

        {/* Scene Header */}
        <div className="relative z-10 mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-4 h-[1px] bg-primary-container" />
            <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
              Scene 01 — Origin
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-bone-white max-w-3xl">
            It started with curiosity &amp; <span className="italic text-primary-container font-light">obsession.</span>
          </h2>
        </div>

        {/* Content Split Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Editorial Text */}
          <div className="lg:col-span-8 space-y-8 font-body-md text-body-md text-tertiary leading-relaxed">
            <p className="relative">
              <span className="float-left font-headline-lg text-headline-lg text-primary-container leading-none pr-3 pt-1 font-serif italic">I</span>
              started with a Computer Science diploma in 2021, then moved into a B.Tech in CSE (AI &amp; ML) in 2024. In late 2024 I worked in two directions at once: as a frontend developer on a B2B marketplace, where I learned performance, design systems and shipping to real users, and as an AI research intern, where I learned how to measure RAG quality and cut latency.
            </p>
            <p className="relative">
              <span className="float-left font-headline-lg text-headline-lg text-primary-container leading-none pr-3 pt-1 font-serif italic">W</span>
              hat I then combined both skill sets into my own projects: agents with state machines, quality gates and streaming interfaces. What I care about most now is retrieval quality, evaluation and making AI products dependable.
            </p>
          </div>

          {/* Metric Badges Column (Verified Only) */}
          <div className="lg:col-span-4 flex flex-col gap-8 bg-surface-container-low p-8 rounded-lg border border-border-hairline shadow-sm">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline-lg text-headline-lg text-bone-white font-light">+35%</span>
              </div>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mt-1">
                Response Relevance<br /><span className="text-tertiary-container font-normal">Planto AI Copilot</span>
              </span>
            </div>
            <div className="w-full h-[1px] bg-surface-container" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline-lg text-headline-lg text-bone-white font-light">62 → 91</span>
              </div>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mt-1">
                Lighthouse Score<br /><span className="text-tertiary-container font-normal">Biz Trade Mart Dashboards</span>
              </span>
            </div>
            <div className="w-full h-[1px] bg-surface-container" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline-lg text-headline-lg text-bone-white font-light">&lt; 60s</span>
              </div>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mt-1">
                Repo Parsing Speed<br /><span className="text-tertiary-container font-normal">Repogent AI (500+ files)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
