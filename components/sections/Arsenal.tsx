'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../../content'

export const Arsenal: FC = () => {
  return (
    <section className="relative w-full px-6 md:px-16 py-20 md:py-28 bg-surface-container-lowest/60 backdrop-blur-[2px]" id="arsenal">
      <div className="max-w-6xl mx-auto relative">
        {/* Watermark Numeral */}
        <div className="absolute -top-12 md:-top-16 right-0 select-none pointer-events-none rounded-full bg-[rgba(249,94,20,.10)] blur-[130px] w-64 h-64 opacity-20 z-0 -rotate-6"></div>

<div className="absolute -top-12 md:-top-16 right-0 select-none pointer-events-none text-wireframe-numeral font-scene-counter text-scene-counter-mobile md:text-scene-counter opacity-30 leading-none z-0">
          04
        </div>

        {/* Scene Header */}
        <div className="relative z-10 mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-4 h-[1px] bg-primary-container" />
            <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
              Scene 04 — Arsenal
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-bone-white">
            Tools of <span className="italic text-primary-container font-light">the trade.</span>
          </h2>
        </div>

        {/* Classified Chips Stack */}
        <div className="relative z-10 space-y-12">
          {/* Core AI / ML */}
          <div>
            <span className="block font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-4">
              AI / ML Core
            </span>
            <div className="flex flex-wrap gap-3">
              {skills.aiMl.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2.5 bg-surface-container-low border border-border-hairline text-bone-white font-body-sm text-body-sm rounded flex items-center gap-2 hover:bg-surface-container transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages & Core */}
          <div>
            <span className="block font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-4">
              Languages &amp; Core
            </span>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2.5 bg-surface-container-low border border-border-hairline text-bone-white font-body-sm text-body-sm rounded flex items-center gap-2 hover:bg-surface-container transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Databases */}
          <div>
            <span className="block font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-4">
              Backend &amp; Databases
            </span>
            <div className="flex flex-wrap gap-3">
              {[...skills.backend, ...skills.databases].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2.5 bg-surface-container-low border border-border-hairline text-bone-white font-body-sm text-body-sm rounded flex items-center gap-2 hover:bg-surface-container transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend & DevOps */}
          <div>
            <span className="block font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-4">
              Frontend, DevOps &amp; Practices
            </span>
            <div className="flex flex-wrap gap-3">
              {[...skills.frontend, ...skills.devops, ...skills.practices].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2.5 bg-surface-container-low border border-border-hairline text-bone-white font-body-sm text-body-sm rounded flex items-center gap-2 hover:bg-surface-container transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
