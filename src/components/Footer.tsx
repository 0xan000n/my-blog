const socialLinks = [
  { href: 'https://twitter.com/', label: 'Twitter', icon: 'X' },
  { href: 'https://linkedin.com/in/', label: 'LinkedIn', icon: 'in' },
  { href: 'https://instagram.com/', label: 'Instagram', icon: 'IG' },
  { href: 'https://github.com/', label: 'GitHub', icon: 'GH' },
]

export function Footer() {
  return (
    <footer className="py-8 mt-auto border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
