'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/library', label: 'Library' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/investments', label: 'Investments' },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current
    // Close if swiped right more than 50px
    if (swipeDistance > 50) {
      setIsOpen(false)
    }
    // Reset
    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <>
      <nav className="flex items-center justify-between py-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight min-h-[44px] flex items-center"
        >
          Ankit B.
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm transition-colors ${
                pathname === link.href
                  ? 'text-zinc-100'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute inset-y-0 right-0 w-full bg-zinc-950 transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Header with close button */}
          <div className="flex items-center justify-between px-6 py-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold tracking-tight transition-opacity duration-300"
              style={{
                opacity: isOpen ? 1 : 0,
                transitionDelay: isOpen ? '100ms' : '0ms',
              }}
            >
              Ankit B.
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="px-6 py-8">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 text-2xl font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? 'text-zinc-100'
                      : 'text-zinc-500 hover:text-zinc-100'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                    transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
