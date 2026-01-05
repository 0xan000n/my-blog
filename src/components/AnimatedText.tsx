'use client'

import { useEffect, useState } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let iteration = 0
    const targetLength = text.length

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) return text[index]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )

      iteration += 1/3

      if (iteration >= targetLength) {
        setDisplayText(text)
        setIsComplete(true)
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [text])

  return (
    <span
      className={`font-mono ${className} ${isComplete ? '' : 'opacity-90'}`}
      aria-label={text}
    >
      {displayText}
    </span>
  )
}
