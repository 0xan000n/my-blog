import { AnimatedText } from '@/components/AnimatedText'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex-shrink-0">
          {/* Replace with your headshot */}
          <div className="w-full h-full flex items-center justify-center text-2xl text-zinc-400">
            A
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            <AnimatedText text="Hey, I'm Ankit" />
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Builder, founder, curious human.
          </p>
        </div>
      </section>

      <section className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-lg font-medium">Why I have a website</h2>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-4 leading-relaxed">
          <p>
            This is my little corner of the internet. A place to share what I&apos;m
            building, learning, and thinking about.
          </p>
          <p>
            I write about technology, building products, and reflections on the
            founder journey. Sometimes I cross-post to Substack and LinkedIn.
          </p>
          <p>
            When I&apos;m not building, you&apos;ll find me reading, listening to podcasts,
            or watching films. Check out my library to see what I&apos;ve been consuming.
          </p>
        </div>
      </section>
    </div>
  )
}
