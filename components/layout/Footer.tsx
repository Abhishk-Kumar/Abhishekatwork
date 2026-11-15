'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUp, Code, Globe } from 'lucide-react'
import { profile } from '../../content'

export const Footer: FC = () => {
  const [currentYear, setCurrentYear] = useState(2026)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="w-full bg-surface-container-lowest relative">
      {/* Wordmark band — its own decorative section */}
      <section className="border-t border-border-hairline py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-newsreader text-[14vw] font-light tracking-tighter whitespace-nowrap text-[#262320]">
            ABHISHEK 
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Top row: bio left + BACK TO TOP right */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Bio column */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-newsreader font-bold text-xl mr-2">
                Abhishek Kumar
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container mr-2" />
              <span className="font-mono text-sm text-on-surface-variant">
                AI Engineer
              </span>
            </div>
            <p className="font-mono text-sm text-on-surface-variant">
              {profile.summary}
            </p>
          </div>

          {/* BACK TO TOP */}
          <div className="self-start md:self-center">
            <a
              href="#main-content"
              className="text-on-surface hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container rounded px-4 py-2"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

        {/* Bottom bar: © left / social links right */}
        <div className="pt-6 border-t border-border-hairline flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-on-surface-variant">
            © {currentYear} Abhishek Kumar. All rights reserved.
          </span>
          <div className="flex gap-2">
            {profile.links.github && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-medium font-body-sm text-on-surface hover:bg-surface-container-low hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus-ring-primary-container"
              >
                <Code className="w-3.5 h-3.5" />GitHub
              </a>
            )}
            {profile.links.linkedin && (
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-medium font-body-sm text-on-surface hover:bg-surface-container-low hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus-ring-primary-container"
              >
                <Globe className="w-3.5 h-3.5" />LinkedIn
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-medium font-body-sm text-on-surface hover:bg-surface-container-low hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus-ring-primary-container"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}