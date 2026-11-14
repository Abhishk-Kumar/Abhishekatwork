'use client'

import { FC } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Code, ChevronRight } from 'lucide-react'
import { projects } from '../../content'
import Link from 'next/link'

export const Artifacts: FC = () => {
  return (
    <section className="relative w-full px-6 md:px-16 py-20 md:py-32 bg-surface-dim" id="artifacts">
      <div className="max-w-6xl mx-auto relative">
        {/* Watermark Numeral */}
        <div className="absolute -top-12 md:-top-16 right-0 select-none pointer-events-none text-wireframe-numeral font-scene-counter text-scene-counter-mobile md:text-scene-counter opacity-30 leading-none z-0">
          03
        </div>

        {/* Scene Header */}
        <div className="relative z-10 mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-4 h-[1px] bg-primary-container" />
            <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
              Scene 03 — Artifacts
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-bone-white max-w-3xl">
            Things I built that <span className="italic text-primary-container font-light">outlived the weekend.</span>
          </h2>
        </div>

        {/* 3-Column / 2-Column Technical Card Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isFullStack = project.slug === 'mediconnect'
            const isRenderPreview = project.links.preview.includes('onrender.com')

            const projectImages: Record<string, string> = {
              'repogent-ai': '/screenshots/Repogent.png',
              'findly-ai': '/screenshots/Findly-ai.png',
              'mediconnect': '/screenshots/Mediconnect.png',
              'ombre-ash': '/screenshots/Ombre&ash-perfumes.png',
              'biz-trade-mart': '/screenshots/biz-trade-mart.png',
            }

            return (
              <div
                key={project.slug}
                className={`group bg-surface-container-low border border-border-hairline rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:bg-surface-container hover:shadow-xl ${
                  index === 2 ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Technical Header Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-surface-container">
                    <span className="font-label-caps text-label-caps text-primary-container font-bold tracking-widest uppercase">
                      {`No. 0${index + 1} // ${isFullStack ? 'Full-stack project' : 'AI Agent System'}`}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Screenshot */}
                  <div className="mb-4">
                    <Image
                      src={projectImages[project.slug]}
                      alt={`${project.title} project screenshot`}
                      width={1920}
                      height={1080}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                      className="w-full h-48 object-cover rounded-lg border border-border-hairline"
                      loading="lazy"
                    />
                  </div>

                  {/* Mini Architecture Schematic (for AI Agent systems) */}
                  {!isFullStack && (
                    <div className="w-full h-44 bg-surface-container-lowest border border-border-hairline rounded p-3 mb-5 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] text-tertiary">
                      <div className="flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps border-b border-surface-charcoal pb-1">
                        <span>PIPELINE: {project.slug === 'repogent-ai' ? 'MULTI_AGENT_GRAPH' : 'LANGGRAPH_REVISION_LOOP'}</span>
                        <span className="text-primary-container">ACTIVE</span>
                      </div>

                      {project.slug === 'repogent-ai' ? (
                        <div className="grid grid-cols-4 gap-2 my-auto items-center">
                          <div className="bg-surface-container-high p-2 rounded text-center text-bone-white">
                            <div className="text-[9px] text-on-surface-variant uppercase">Parse</div>
                            <div className="font-semibold text-[10px]">AST Parser</div>
                          </div>
                          <div className="bg-surface-container-high p-2 rounded text-center text-bone-white">
                            <div className="text-[9px] text-on-surface-variant uppercase">Summarize</div>
                            <div className="font-semibold text-[10px]">Summarizer</div>
                          </div>
                          <div className="bg-surface-container-high p-2 rounded text-center text-bone-white">
                            <div className="text-[9px] text-on-surface-variant uppercase">Q&amp;A</div>
                            <div className="font-semibold text-[10px]">Semantic Q&amp;A</div>
                          </div>
                          <div className="bg-surface-charcoal p-2 rounded text-center text-primary border border-border-hairline">
                            <div className="text-[9px] text-primary-container uppercase">Graph</div>
                            <div className="font-semibold text-[10px]">Graph Gen</div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-6 gap-1 my-auto items-center text-center text-[10px]">
                          <div className="bg-surface-container-high p-1.5 rounded text-bone-white">Search</div>
                          <div className="bg-surface-container-high p-1.5 rounded text-bone-white">Scrape</div>
                          <div className="bg-surface-container-high p-1.5 rounded text-bone-white">Synthesize</div>
                          <div className="bg-surface-container-high p-1.5 rounded text-bone-white">Draft</div>
                          <div className="bg-surface-charcoal p-1.5 rounded text-primary border border-border-hairline">Critique</div>
                          <div className="bg-surface-charcoal p-1.5 rounded text-primary-container border border-border-hairline">Finalize (x3)</div>
                        </div>
                      )}

                      <div className="text-on-surface-variant text-[10px]">
                        $ stack: {project.stack.join(' + ')}
                      </div>
                    </div>
                  )}

                  <h3 className="font-headline-sm text-headline-sm text-bone-white group-hover:text-primary transition-colors mb-2">
                    <Link href={`/projects/${project.slug}`} className="hover:underline">
                      {project.title} — {project.subtitle}
                    </Link>
                  </h3>
                  <p className="font-body-md text-body-md text-tertiary leading-relaxed mb-4">
                    {project.oneLiner}
                  </p>

                  {/* Verified Metrics / Highlights */}
                  <ul className="space-y-1 mb-6 font-body-sm text-tertiary-container list-disc list-inside">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>

                  {/* Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-surface-charcoal text-on-surface-variant font-label-caps text-label-caps uppercase rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {isRenderPreview && (
                    <div className="text-[11px] text-tertiary-container mb-3 italic">
                      * Free hosting, may take about 30 seconds to wake up.
                    </div>
                  )}
                <div className="flex items-center justify-between pt-4 border-t border-surface-container font-label-caps text-label-caps uppercase">
                  <div className="flex items-center gap-6">
                    {project.links.preview && (
                      <a
                        href={project.links.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bone-white hover:text-primary-container transition-colors flex items-center gap-1.5"
                      >
                        <span>Live Preview</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bone-white hover:text-primary-container transition-colors flex items-center gap-1.5"
                      >
                        <span>Repo</span>
                        <Code className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-primary-container hover:underline flex items-center gap-1"
                  >
                    <span>Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
