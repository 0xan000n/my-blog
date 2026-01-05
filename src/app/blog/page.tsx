import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/mdx'
import { CategoryFilter } from '@/components/CategoryFilter'
import { AnimatedText } from '@/components/AnimatedText'

interface Props {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams
  const allPosts = await getAllBlogPosts()

  const posts = category
    ? allPosts.filter((post) => post.frontmatter.category === category)
    : allPosts

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight mb-4">
          <AnimatedText text="Blog" />
        </h1>
        <CategoryFilter currentCategory={category} />
      </div>

      {posts.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">No posts yet.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block space-y-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                  <time dateTime={post.frontmatter.date}>
                    {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readingTime} min read</span>
                </div>
                <h2 className="text-lg font-medium group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {post.frontmatter.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {post.frontmatter.excerpt}
                </p>
                {(post.frontmatter.substackUrl || post.frontmatter.linkedinUrl) && (
                  <div className="flex gap-2 pt-1">
                    {post.frontmatter.substackUrl && (
                      <span className="text-xs px-2 py-0.5 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 rounded">
                        Substack
                      </span>
                    )}
                    {post.frontmatter.linkedinUrl && (
                      <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded">
                        LinkedIn
                      </span>
                    )}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
