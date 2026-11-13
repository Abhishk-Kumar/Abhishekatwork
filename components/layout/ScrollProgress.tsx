'use client'

import { FC, useEffect, useState } from 'react'

export const ScrollProgress: FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const currentScroll = window.scrollY
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100)
      }
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50">
      <div
        className="h-full bg-primary-container transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
