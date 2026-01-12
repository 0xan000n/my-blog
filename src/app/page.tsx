import Image from 'next/image'
import { AnimatedText } from '@/components/AnimatedText'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex-shrink-0">
          <Image
            src="/Ankit_2.png"
            alt="Ankit"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            <AnimatedText text="Hey, I'm Ankit 👋" />
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Builder, founder, curious human.
          </p>
        </div>
      </section>

      <section className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-4 leading-relaxed">
          <p>
            This is my little corner of the Internet. A place to share what I&apos;m
            building, learning, and thinking about.
          </p>
          <p>
            I write about the founder journey, building products, and other musings. Sometimes I cross-post to X, Substack and LinkedIn.
          </p>
          <p>
            When I&apos;m not building, you&apos;ll find me doing yoga, reading, listening to pods,
            or spending time with my wife and loved ones.
          </p>
        </div>
      </section>

      <section className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-lg font-medium">Currently I am:</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          <a href="https://dlogos.xyz" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Building dLogos</a>
          <span className="mx-2">·</span>
          <a href="/projects" className="underline hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Experimenting with AI</a>
          <span className="mx-2">·</span>
          <a href="/investments" className="underline hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Investing in startups</a>
        </p>
      </section>
    </div>
  )
}
