import { AnimatedText } from '@/components/AnimatedText'

const libraryItems = [
  {
    title: 'Books',
    description: 'What I\'m reading and have read. Notes, highlights, and recommendations.',
    href: 'https://airtable.com/your-books-base', // Replace with your Airtable link
    icon: '📚',
  },
  {
    title: 'Podcasts',
    description: 'Episodes that shaped my thinking. Curated favorites across topics.',
    href: 'https://airtable.com/your-podcasts-base', // Replace with your Airtable link
    icon: '🎙️',
  },
  {
    title: 'Films',
    description: 'Movies and documentaries worth watching. Personal ratings included.',
    href: 'https://airtable.com/your-films-base', // Replace with your Airtable link
    icon: '🎬',
  },
]

export default function LibraryPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          <AnimatedText text="Library" />
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          A curated collection of media that&apos;s influenced my thinking.
        </p>
      </div>

      <div className="grid gap-4">
        {libraryItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div className="min-w-0 flex-1">
                <h2 className="font-medium group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {item.title}
                  <span className="ml-2 text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-300">
                    &rarr;
                  </span>
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
