'use client'

import { FC, useState } from 'react'
import { Terminal } from 'lucide-react'
import { ChatModal } from './ChatModal'

interface ChatTriggerProps {
  hasApiKey: boolean
}

export const ChatTrigger: FC<ChatTriggerProps> = ({ hasApiKey }) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!hasApiKey) return null

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3.5 bg-surface-container text-bone-white font-label-caps text-label-caps uppercase tracking-wider rounded border border-border-hairline hover:bg-surface-container-high hover:text-primary transition-all duration-200 flex items-center gap-2"
        aria-label="Talk to Portfolio AI"
      >
        <Terminal className="w-4 h-4 text-primary-container" />
        <span>Talk to Portfolio AI</span>
      </button>

      <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
