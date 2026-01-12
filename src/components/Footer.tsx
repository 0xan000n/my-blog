import { Linkedin, Instagram, Github } from 'lucide-react'

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function SubstackIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  )
}

function MediumIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  )
}

const socialLinks = [
  { href: 'https://x.com/0xAnkit', label: 'X', icon: XIcon },
  { href: 'https://linkedin.com/in/ankitxbhatia', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.instagram.com/ankitb46/', label: 'Instagram', icon: Instagram },
  { href: 'https://github.com/0xan000n/', label: 'GitHub', icon: Github },
  { href: 'https://substack.com/@ankitbhatia', label: 'Substack', icon: SubstackIcon },
  { href: 'https://medium.com/@ankitbhatia', label: 'Medium', icon: MediumIcon },
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
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-label={link.label}
            >
              <link.icon size={16} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
