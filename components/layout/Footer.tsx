'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { profile } from '../../content'

export const Footer: FC = () => {
  const [currentYear, setCurrentYear] = useState(2026)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="w-full bg-surface-container-lowest relative overflow-hidden">
      {/* Giant Ghost Wordmark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10 overflow-hidden">
        <div className="font-display-hero text-display-hero-mobile md:text-display-hero font-light tracking-tighter opacity-10 transition-colors duration-300 group-hover:opacity-20 text-[#1E1C1B] sm:text-[#1E1C1B] hover:text-[#2E2C2B] group-hover:sm:text-[#2E2C2B] whitespace-nowrap md:whitespace-pre overflow-hidden max-w-full">
          ABHISHEK KUMAR
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-12 border-b border-border-hairline">
          <div className="space-y-3">
            <div className="font-headline-md text-headline-md text-bone-white">{profile.name}</div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              {profile.summary}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 font-label-caps text-label-caps uppercase tracking-widest">
            {profile.links.github && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container rounded px-1 py-0.5"
              >
                GitHub
              </a>
            )}
            {profile.links.linkedin && (
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container rounded px-1 py-0.5"
              >
                LinkedIn
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="text-on-surface-variant hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container rounded px-1 py-0.5"
            >
              Email
            </a>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider border-t border-border-hairline">
          <div className="flex items-center gap-4">
            <a href="#origin" className="hover:text-on-surface transition-colors">Scene 01</a>
            <span className="text-tertiary-container">/</span>
            <a href="#the-craft" className="hover:text-on-surface transition-colors">Scene 02</a>
            <span className="text-tertiary-container">/</span>
            <a href="#artifacts" className="hover:text-on-surface transition-colors">Scene 03</a>
            <span className="text-tertiary-container">/</span>
            <a href="#arsenal" className="hover:text-on-surface transition-colors">Scene 04</a>
            <span className="text-tertiary-container">/</span>
            <a href="#epilogue" className="hover:text-on-surface transition-colors">Epilogue</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 hover:text-on-surface transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
          <div>© {currentYear} {profile.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
