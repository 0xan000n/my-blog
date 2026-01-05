'use client'

import { useState } from 'react'

interface ExpandableProps {
  title: string
  children: React.ReactNode
}

export function Expandable({ title, children }: ExpandableProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        {title}
      </button>
      {isOpen && (
        <div className="mt-2 pl-5 text-sm text-zinc-400 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}
