'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUp, Code, Globe, Download, Mail } from 'lucide-react'
import { profile, projects } from '../../content'

interface FooterProps {
  hasResumePdf: boolean
}

export const Footer: FC<FooterProps> = ({ hasResumePdf }) => {
  const [currentYear, setCurrentYear] = useState(2026)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="w-full bg-[#0b0a09] relative pt-20 md:pt-28 border-t border-[#262220] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-full w-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[radial-gradient(ellipse_at_50%_0,rgba(255,87,34,.08),transparent_60%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Cursive tagline centred above wordmark */}
        <p className="font-script text-2xl md:text-4xl text-tertiary text-center mb-12 md:mb-16 font-medium">
          Building AI products that are <span className="text-primary-container">measurable and dependable.</span>
        </p>

        {/* Availability pill */}
        <div className="mb-8 md:mb-12 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container">
            Open to AI Engineer roles — {profile.location}
          </span>
        </div>

        {/* Three link columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Col 1: Navigate */}
          <div className="md:col-span-4">
            <h3 className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container text-xs md:text-sm mb-6">
              Navigate
            </h3>
            <ul className="space-y-3">
              {['01 Origin', '02 Craft', '03 Artifacts', '04 Arsenal', 'Epilogue'].map((label, i) => {
                const href = label === 'Epilogue' ? '#epilogue' : `#${label.toLowerCase().replace(/\d+\s*/, '')}`
                return (
                  <li key={i}>
                    <a
                      href={href}
                      className="text-sm md:text-base text-tertiary hover:text-bone-white transition-colors focus-visible:ring-2 focus-visible:ring-primary-container rounded px-2 py-1 block"
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Col 2: Case Studies */}
          <div className="md:col-span-4">
            <h3 className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container text-xs md:text-sm mb-6">
              Case Studies
            </h3>
            <ul className="space-y-3">
              {projects.map((project, i) => (
                <li key={i}>
                  <a
                    href={`/projects/${project.slug}`}
                    className="text-sm md:text-base text-tertiary hover:text-bone-white transition-colors focus-visible:ring-2 focus-visible:ring-primary-container rounded px-2 py-1 block"
                  >
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div className="md:col-span-4">
            <h3 className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container text-xs md:text-sm mb-6">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm md:text-base text-tertiary hover:text-bone-white transition-colors focus-visible:ring-2 focus-visible:ring-primary-container rounded px-2 py-1 block"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-tertiary hover:text-bone-white transition-colors focus-visible:ring-2 focus-visible:ring-primary-container rounded px-2 py-1 block inline-flex items-center gap-2"
                >
                  <Code className="w-4 h-4" />GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-tertiary hover:text-bone-white transition-colors focus-visible:ring-2 focus-visible:ring-primary-container rounded px-2 py-1 block inline-flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />LinkedIn
                </a>
              </li>
              {hasResumePdf && (
                <li>
                  <a
                    href={profile.links.resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-tertiary hover:text-bone-white transition-colors focus-visible:ring-2 focus-visible:ring-primary-container rounded px-2 py-1 block inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />Résumé
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Giant ABHISHEK wordmark */}
        <div className="overflow-hidden mb-16 md:mb-20">
          <div
            className="font-newsreader font-semibold uppercase leading-[0.8] tracking-tight whitespace-nowrap select-none text-[clamp(96px,19vw,300px)] text-center transition-colors duration-300"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #34302c, #1d1a18, #0b0a09)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transform: 'translateY(8%)',
            }}
          >
            ABHISHEK
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#262220] flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm md:text-base text-tertiary">
            © {currentYear} Abhishek Kumar. All rights reserved.
          </span>
          <a
            href="#main-content"
            className="text-sm md:text-base text-tertiary hover:text-bone-white transition-colors focus-visible:ring-2 focus-visible:ring-primary-container rounded px-2 py-1 flex items-center gap-1"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}