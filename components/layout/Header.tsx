'use client'

import { FC, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowUpRight, Download, Terminal } from 'lucide-react'
import { profile } from '../../content'
import { ChatModal } from '../chat/ChatModal'

interface HeaderProps {
  onOpenChat?: () => void
  hasResumePdf?: boolean
  hasApiKey?: boolean
}

export const Header: FC<HeaderProps> = ({ hasResumePdf = false, hasApiKey = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('origin')
  const [headerVisible, setHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['origin', 'the-craft', 'artifacts', 'arsenal', 'epilogue']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }

      // Header show/hide on scroll direction
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false)
      } else {
        setHeaderVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Focus trap and Escape key handling for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
        hamburgerRef.current?.focus()
        return
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    // Focus first focusable element when menu opens
    setTimeout(() => {
      const firstFocusable = menuRef.current?.querySelector<HTMLElement>(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
      firstFocusable?.focus()
    }, 0)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const navItems = [
    { label: '01 Origin', href: '#origin', id: 'origin' },
    { label: '02 Craft', href: '#the-craft', id: 'the-craft' },
    { label: '03 Artifacts', href: '#artifacts', id: 'artifacts' },
    { label: '04 Arsenal', href: '#arsenal', id: 'arsenal' },
    { label: 'Epilogue', href: '#epilogue', id: 'epilogue' },
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b border-border-hairline transition-transform duration-350 ease-out ${
          headerVisible
            ? 'translate-y-0 bg-background/95 backdrop-blur-md'
            : '-translate-y-full bg-background/95 backdrop-blur-md'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="#"
            className="font-headline-sm text-bone-white hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container rounded"
          >
            {profile.name}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-label-caps text-label-caps uppercase tracking-widest">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container rounded px-1 py-0.5 ${
                    isActive ? 'text-primary-container font-bold' : 'text-on-surface-variant hover:text-bone-white'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-4">
            {hasApiKey && (
              <button
                onClick={() => setChatOpen(true)}
                className="px-4 py-2 bg-surface-container-low text-bone-white font-label-caps text-label-caps uppercase tracking-wider rounded border border-border-hairline hover:bg-surface-container hover:text-primary-container transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary-container"
              >
                <Terminal className="w-3.5 h-3.5 text-primary-container" />
                <span>Ask AI</span>
              </button>
            )}
            {hasResumePdf && (
              <a
                href={profile.links.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-surface-container-low text-bone-white font-label-caps text-label-caps uppercase tracking-wider rounded border border-border-hairline hover:bg-surface-container hover:text-primary-container transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary-container"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Résumé</span>
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="px-5 py-2 bg-primary-container text-surface-container-lowest font-label-caps text-label-caps uppercase tracking-wider font-semibold rounded hover:bg-secondary-container transition-colors shadow-[0_0_16px_rgba(255,87,34,0.2)] focus:outline-none focus:ring-2 focus:ring-primary-container"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            ref={hamburgerRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-bone-white hover:text-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container rounded"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-background lg:hidden flex flex-col px-6 pt-24 pb-12 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-bone-white hover:text-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container rounded"
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6" />
          </button>
          <nav className="flex flex-col gap-4 font-headline-md text-bone-white">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container rounded px-2 py-3 text-left"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-8 border-t border-border-hairline">
            {hasApiKey && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setChatOpen(true)
                }}
                className="w-full py-3 bg-surface-container-low text-bone-white font-label-caps text-label-caps uppercase tracking-wider rounded text-center border border-border-hairline flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4 text-primary-container" />
                <span>Ask Portfolio AI</span>
              </button>
            )}
            {hasResumePdf && (
              <a
                href={profile.links.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-surface-container-low text-bone-white font-label-caps text-label-caps uppercase tracking-wider rounded text-center border border-border-hairline flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Résumé</span>
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="w-full py-3 bg-primary-container text-surface-container-lowest font-label-caps text-label-caps uppercase tracking-wider font-bold rounded text-center"
            >
              Make Contact
            </a>
          </div>
        </div>
      )}

      <ChatModal isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  )
}
