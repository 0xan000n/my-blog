import { AnimatedText } from '@/components/AnimatedText'

const topBooks = [
  {
    title: 'The Master and His Emissary',
    author: 'Iain McGilchrist',
    year: 2009,
    genre: 'Psychology / Neuroscience',
    description: 'A profound exploration of the divided brain and its impact on Western culture, arguing that our civilization has become dominated by left-hemisphere thinking.',
    href: 'https://www.goodreads.com/book/show/6968772-the-master-and-his-emissary',
    cover: 'https://covers.openlibrary.org/b/isbn/9780300245929-M.jpg',
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    genre: 'Literary Fiction',
    description: 'A psychological masterpiece following Raskolnikov through guilt, redemption, and the depths of the human conscience.',
    href: 'https://www.goodreads.com/book/show/7144.Crime_and_Punishment',
    cover: 'https://covers.openlibrary.org/b/isbn/9780140449136-M.jpg',
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    year: 2021,
    genre: 'Science Fiction',
    description: 'A lone astronaut must save Earth from extinction in this gripping sci-fi adventure filled with problem-solving, humor, and an unforgettable friendship.',
    href: 'https://www.goodreads.com/book/show/54493401-project-hail-mary',
    cover: 'https://covers.openlibrary.org/b/isbn/9780593135204-M.jpg',
  },
]

const libraryItems = [
  {
    title: 'Books',
    description: 'What I\'m reading',
    href: 'https://airtable.com/appTQtnfhJsdE8XO5/shrWE1gAYnNybFzTg', // Replace with your Airtable link
    icon: '📚',
  },
  {
    title: 'Pods',
    description: 'Episodes that I\'ve enjoyed',
    href: 'https://airtable.com/appTQtnfhJsdE8XO5/shrWE1gAYnNybFzTg/tblTlYtLfkrwZoCA2/viw9Ts8qGpSalkqQZ', // Replace with your Airtable link
    icon: '🎙️',
  },
  {
    title: 'Movies & TV',
    description: 'Films and shows I\'ve watched',
    href: 'https://airtable.com/appTQtnfhJsdE8XO5/shrWE1gAYnNybFzTg/tblmxMmr8NiTMAD8k/viwYfMPr6EEwzP6RN', // Replace with your Airtable link
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
          A collection of media that&apos;s influenced my thinking.
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

      <div className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight mb-4">Top Book Recommendations</h2>
        <div className="grid gap-4">
          {topBooks.map((book, index) => (
            <a
              key={book.title}
              href={book.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl font-semibold text-zinc-300 dark:text-zinc-700 flex-shrink-0">
                  {index + 1}
                </span>
                <img
                  src={book.cover}
                  alt={`${book.title} cover`}
                  className="w-16 h-24 object-cover rounded shadow-sm flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {book.title}
                    <span className="ml-2 text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-300">
                      &rarr;
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-zinc-500 dark:text-zinc-500">
                    <span>{book.author}</span>
                    <span>{book.year}</span>
                    <span>{book.genre}</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                    {book.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
