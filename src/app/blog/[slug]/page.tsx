import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost, getBlogSlugs } from '@/lib/mdx'
import { AnimatedText } from '@/components/AnimatedText'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <Link
          href="/blog"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        >
          &larr; Back to blog
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">
          <AnimatedText text={post.frontmatter.title} />
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.frontmatter.date}>
            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime} min read</span>
          <span>&middot;</span>
          <span className="capitalize">{post.frontmatter.category.replace('-', ' ')}</span>
        </div>
        {(post.frontmatter.substackUrl || post.frontmatter.linkedinUrl) && (
          <div className="flex gap-3 pt-2">
            {post.frontmatter.substackUrl && (
              <a
                href={post.frontmatter.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
              >
                Read on Substack &rarr;
              </a>
            )}
            {post.frontmatter.linkedinUrl && (
              <a
                href={post.frontmatter.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Read on LinkedIn &rarr;
              </a>
            )}
          </div>
        )}
      </header>

      <div className="prose text-zinc-700 dark:text-zinc-300">
        {post.content}
      </div>
    </article>
  )
}
