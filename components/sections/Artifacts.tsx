'use client'

import { FC } from 'react'
import Image from 'next/image'
import { ExternalLink, Code, ChevronRight } from 'lucide-react'
import { projects } from '../../content'
import Link from 'next/link'

export const Artifacts: FC = () => {
  return (
    <section className="relative w-full px-6 md:px-16 py-20 md:py-28 bg-surface-dim" id="artifacts">
      <div className="max-w-6xl mx-auto relative">
        {/* Watermark Numeral */}
        <div className="absolute -top-12 md:-top-16 right-0 select-none pointer-events-none rounded-full bg-[rgba(249,94,20,.10)] blur-[130px] w-64 h-64 opacity-20 z-0 -rotate-6"></div>

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

            const projectMetrics: Record<string, string[]> = {
              'repogent-ai': ['<60s parse', '500+ files'],
              'findly-ai': ['8-node LangGraph', 'quality gate ≥7', 'max 3 revisions'],
              'mediconnect': ['sub-100ms queries'],
              'ombre-ash': ['4 signature extraits', '400 units per batch', '3 salons (Paris / Grasse / Kyoto)'],
              'biz-trade-mart': ['Lighthouse 62→91', '10+ product modules', '−35% bug reports'],
            }

            const projectCategory: Record<string, string> = {
              'repogent-ai': 'AI Agent System',
              'findly-ai': 'AI Agent System',
              'mediconnect': 'Full-stack project',
              'ombre-ash': 'E-Commerce / Brand Site',
              'biz-trade-mart': 'B2B Marketplace',
            }

            const projectDiagram: Record<string, string[]> = {
              'repogent-ai': ['Parse', 'Summarize', 'Q&A', 'Graph Gen'],
              'findly-ai': ['Search', 'Scrape', 'Synthesize', 'Draft', 'Critique', 'Finalize (x3)'],
              'mediconnect': ['Patient', 'Search', 'Book', 'Consult', 'Record', 'Pay'],
              'ombre-ash': ['Hero', 'Collection', 'Atelier', 'Journal', 'Cart'],
              'biz-trade-mart': ['Catalogue', 'Cart', 'Escrow/Order', 'Dashboard'],
            }

            return (
              <div
                key={project.slug}
                className={`group bg-surface-container-low border border-border-hairline rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:bg-surface-container hover:shadow-xl`}
              >
                <div>
                  {/* Technical Header Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-surface-container">
                    <span className="font-label-caps text-label-caps text-primary-container font-bold tracking-widest uppercase">
                      {`No. 0${index + 1} // ${projectCategory[project.slug]}`}
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

                  {/* Project Architecture Diagram */}
                  <div className="w-full h-44 bg-surface-container-lowest border border-border-hairline rounded p-3 mb-5 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] text-tertiary">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps border-b border-surface-charcoal pb-1">
                      <span>PIPELINE: {project.slug.toUpperCase().replace(/-/g, '_')}</span>
                      <span className="text-primary-container">ACTIVE</span>
                    </div>

                    <div className={`grid gap-2 my-auto items-center ${project.slug === 'ombre-ash' || project.slug === 'biz-trade-mart' ? 'grid-cols-5' : 'grid-cols-4'}`}>
                      {projectDiagram[project.slug].map((step, sIdx) => (
                        <div
                          key={sIdx}
                          className={`bg-surface-container-high p-2 rounded text-center text-bone-white ${project.slug === 'ombre-ash' || project.slug === 'biz-trade-mart' ? 'text-[8px]' : 'text-[9px]'}`}
                        >
                          <div className="text-on-surface-variant uppercase">{step.split(' ')[0]}</div>
                          <div className="font-semibold">{step.split(' ').slice(1).join(' ') || step}</div>
                        </div>
                      ))}
                    </div>

                    <div className="text-on-surface-variant text-[11px]">
                      $ stack: {project.stack.join(' + ')}
                    </div>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm text-bone-white group-hover:text-primary transition-colors mb-2">
                    <Link href={`/projects/${project.slug}`} className="hover:underline">
                      {project.title} — {project.subtitle}
                    </Link>
                  </h3>
                  <p className="font-body-md text-body-md text-tertiary leading-relaxed mb-4">
                    {project.oneLiner}
                  </p>
                  {project.problem && (
                    <div className="rounded border-red-500/20 p-3 mb-3">
                      <span className="text-[11px] uppercase tracking-widest text-red-500 font-semibold block mb-1">PROBLEM</span>
                      <p className="text-sm text-tertiary">{project.problem}</p>
                    </div>
                  )}
                  {project.architecture && (
                    <div className="rounded border-blue-500/20 p-3 mb-3">
                      <span className="text-[11px] uppercase tracking-widest text-blue-500 font-semibold block mb-1">SOLUTION</span>
                      <p className="text-sm text-tertiary">{project.architecture}</p>
                    </div>
                  )}
                  {project.results && (
                    <div className="rounded border-orange-500/20 p-3">
                      <span className="text-[11px] uppercase tracking-widest text-orange-500 font-semibold block mb-1">RESULT</span>
                      <p className="text-sm text-tertiary">{project.results}</p>
                    </div>
                  )}

                  {/* Metrics Strip */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projectMetrics[project.slug].map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2 py-1 bg-surface-charcoal border border-border-hairline text-on-surface-variant font-label-caps text-label-caps uppercase rounded text-[11px]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

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
                <div className="flex items-center justify-between pt-4 border-t border-surface-container font-label-caps text-label-caps uppercase mt-auto">
                  <div className="flex items-center gap-6">
                    {project.links.preview && (
                      <a
                        href={project.links.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bone-white hover:text-primary-container transition-colors flex items-center gap-1.5"
                      >
                        <span>LIVE DEMO</span>
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
                        <span>GITHUB</span>
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
