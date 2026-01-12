import Link from 'next/link'

const categories = [
  { value: '', label: 'All' },
  { value: 'technology', label: 'Technology' },
  { value: 'reflections', label: 'Reflections' },
  { value: 'musings', label: 'Musings' },
]

interface CategoryFilterProps {
  currentCategory?: string
}

export function CategoryFilter({ currentCategory = '' }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = currentCategory === cat.value
        return (
          <Link
            key={cat.value}
            href={cat.value ? `/blog?category=${cat.value}` : '/blog'}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              isActive
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
            }`}
          >
            {cat.label}
          </Link>
        )
      })}
    </div>
  )
}
