'use client'

import { FC, useState, useRef, useEffect } from 'react'
import { Terminal, X, Send, Bot, User, Sparkles } from 'lucide-react'
import { profile } from '../../content'

interface ChatModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export const ChatModal: FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hello! I am Abhishek's portfolio AI assistant. I can answer questions about his experience, RAG pipelines, agent projects, or skills. How can I help you?`
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const suggestedQuestions = [
    "What did you build at Planto AI?",
    "How does Findly.AI work?",
    "What are you looking for?"
  ]

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent, textToSend?: string) => {
    if (e) e.preventDefault()
    const query = textToSend || input
    if (!query.trim() || isLoading) return

    if (query.length > 400) {
      alert('Message exceeds 400 character limit.')
      return
    }

    const newMessages: Message[] = [...messages, { role: 'user', content: query }]
    setMessages(newMessages)
    if (!textToSend) setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to fetch response.')
      }

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let assistantMessage = ''

      setMessages(prev => [...prev, { role: 'assistant', content: '' }])

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          assistantMessage += chunk

          setMessages(prev => {
            const updated = [...prev]
            updated[updated.length - 1] = { role: 'assistant', content: assistantMessage }
            return updated
          })
        }
      }
    } catch (err: any) {
      setMessages(prev => [...prev, { role: 'assistant', content: err.message || 'Sorry, something went wrong. Please try emailing directly.' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="bg-surface-container-low border border-border-hairline max-w-xl w-full rounded-lg shadow-2xl flex flex-col h-[550px] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-container bg-surface-container-lowest">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            <span className="font-label-caps text-label-caps uppercase text-bone-white tracking-widest">
              Ask My Portfolio AI
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-tertiary hover:text-bone-white focus:outline-none focus:ring-2 focus:ring-primary-container rounded p-1"
            aria-label="Close chat modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 font-body-sm text-tertiary">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-7 h-7 rounded bg-surface-container-high flex items-center justify-center text-primary-container shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3.5 rounded-lg leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-primary-container text-surface-container-lowest font-medium'
                    : 'bg-surface-container-lowest border border-border-hairline text-bone-white'
                }`}
              >
                {m.content}
              </div>
              {m.role === 'user' && (
                <div className="w-7 h-7 rounded bg-primary text-surface-container-lowest flex items-center justify-center shrink-0 font-bold text-xs">
                  U
                </div>
              )}
            </div>
          ))}
          {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-7 h-7 rounded bg-surface-container-high flex items-center justify-center text-primary-container shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3 bg-surface-container-lowest border border-border-hairline text-tertiary-container animate-pulse">
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        <div className="px-6 py-2 bg-surface-container-lowest border-t border-surface-container flex flex-wrap gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={(e) => handleSubmit(e, q)}
              className="px-2.5 py-1 bg-surface-container text-on-surface-variant font-label-caps text-[10px] uppercase rounded hover:bg-surface-container-high hover:text-bone-white transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={(e) => handleSubmit(e)} className="p-4 bg-surface-container-lowest border-t border-border-hairline flex gap-2 items-center">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about latency, RAG pipelines, or experience..."
            maxLength={400}
            className="flex-1 bg-surface-container px-4 py-2.5 text-bone-white font-body-sm rounded border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary-container"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2.5 bg-primary-container text-surface-container-lowest font-label-caps text-label-caps uppercase font-bold rounded hover:bg-secondary-container transition-colors disabled:opacity-50 flex items-center gap-1.5"
          >
            <span>Send</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Footer Note */}
        <div className="px-6 py-2 bg-surface-container-lowest border-t border-surface-container text-[10px] text-tertiary-container text-center">
          Answers come only from portfolio content, are AI-generated and may be imperfect.
        </div>
      </div>
    </div>
  )
}
