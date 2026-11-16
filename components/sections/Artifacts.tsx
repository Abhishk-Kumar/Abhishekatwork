'use client'

import { FC } from 'react'
import Image from 'next/image'
import { ExternalLink, Code, ChevronRight } from 'lucide-react'
import { projects } from '../../content'
import Link from 'next/link'

const PROJECT_DATA = [
  { slug: 'repogent-ai', layout: 'image-60' as const },
  { slug: 'findly-ai', layout: 'text-60' as const },
  { slug: 'mediconnect', layout: 'image-60' as const },
  { slug: 'ombre-ash', layout: 'image-65' as const },
  { slug: 'biz-trade-mart', layout: 'text-65' as const },
]

const projectImages: Record<string, string> = {
  'repogent-ai': '/screenshots/repogent.png',
  'findly-ai': '/screenshots/findly.png',
  'mediconnect': '/screenshots/mediconnect.png',
  'ombre-ash': '/screenshots/ombre-ash.png',
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
  'repogent-ai': ['Repo', 'AST Parse', 'Graph', 'Chat/Scan'],
  'findly-ai': ['Query', 'Decompose', 'Crawl', 'Synthesize', 'Quality Gate ≥7', 'Finalize (x3)'],
  'mediconnect': ['Patient', 'Search', 'Book', 'Consult', 'Record', 'Pay'],
  'ombre-ash': ['Hero', 'Collection', 'Atelier', 'Journal', 'Cart'],
  'biz-trade-mart': ['Catalogue', 'Cart', 'Escrow/Order', 'Dashboard'],
}

export const Artifacts: FC = () => {
  return (
    <section className="relative w-full px-6 md:px-16 py-16 md:py-24 bg-surface-dim" id="artifacts">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute -top-12 md:-top-16 right-0 select-none pointer-events-none rounded-full bg-[rgba(249,94,20,.10)] blur-[130px] w-64 h-64 opacity-20 z-0 -rotate-6"></div>

        <div className="relative z-10 mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-4 h-[1px] bg-primary-container" />
            <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
              Scene 03 — Artifacts
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-bone-white max-w-3xl">
            Five systems, shipped.
          </h2>
        </div>

        <div className="relative z-10">
          {projects.map((project, index) => {
            const layout = PROJECT_DATA.find(p => p.slug === project.slug)?.layout || 'image-60'
            const isReversed = layout === 'text-60' || layout === 'text-65'
            const imgWidth = layout === 'image-65' ? '65%' : '60%'
            const txtWidth = layout === 'text-65' ? '65%' : '40%'

            return (
              <div
                key={project.slug}
                className={` mb-12 md:mb-16 ${isReversed ? 'flex-row-reverse' : ''} flex flex-col md:flex-row gap-6 md:gap-8`}
              >
                <div className={imgWidth + ' md:' + imgWidth}>
                  <div className="mb-4">
                    <div className="relative rounded-lg overflow-hidden border border-border-hairline">
                      {project.links.preview && (
                        <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
                          <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                          <span className="font-label-caps text-label-caps text-[10px] uppercase tracking-widest text-bone-white">
                            {project.links.preview?.includes('render.com') ? 'onrender.com' : project.links.preview?.replace(/^https?:\/\//, '').split('/')[0]}
                          </span>
                        </div>
                      )}
                      <Image
                        src={projectImages[project.slug]}
                        alt={project.title + ' project screenshot'}
                        width={1920}
                        height={1080}
                        sizes={isReversed ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 100vw, 60vw"}
                        quality={85}
                        className="w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Architecture Strip */}
                  <div className="mt-4 flex flex-wrap gap-1.5 items-center font-mono text-[10px] text-tertiary">
                    {projectDiagram[project.slug].map((step, sIdx) => (
                      <span key={sIdx} className="flex items-center gap-1.5">
                        <span className="text-bone-white">{step}</span>
                        {sIdx < projectDiagram[project.slug].length - 1 && (
                          <span className="text-primary-container">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={txtWidth + ' md:' + txtWidth}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
                      {index + 1}. {projectCategory[project.slug]}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm-mobile md:text-headline-sm text-bone-white mb-3">
                    {project.title}
                  </h3>

                  <p className="font-body-md text-body-md text-tertiary leading-relaxed mb-4">
                    {project.oneLiner}
                  </p>

                  <div className="mb-4">
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-2 block">PROBLEM</span>
                    <p className="text-sm text-tertiary">{project.problem}</p>
                  </div>

                  <div className="mb-4">
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-2 block">SOLUTION</span>
                    <p className="text-sm text-tertiary">{project.architecture}</p>
                  </div>

                  <div className="mb-4">
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-2 block">RESULT</span>
                    <p className="text-sm text-tertiary">{project.results}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {projectMetrics[project.slug].map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2.5 py-1 bg-surface-charcoal border border-border-hairline text-on-surface-variant font-label-caps text-label-caps uppercase rounded text-[11px]"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
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

                  <div className="flex items-center gap-4">
                    {project.links.preview && (
                      <a
                        href={project.links.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bone-white hover:text-primary-container transition-colors flex items-center gap-1.5 whitespace-nowrap text-sm"
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
                        className="text-bone-white hover:text-primary-container transition-colors flex items-center gap-1.5 whitespace-nowrap text-sm"
                      >
                        <span>GITHUB</span>
                        <Code className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-primary-container hover:underline flex items-center gap-1 whitespace-nowrap text-sm"
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