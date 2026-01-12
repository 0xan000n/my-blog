import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getInvestment, getInvestmentSlugs } from '@/lib/mdx'
import { AnimatedText } from '@/components/AnimatedText'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getInvestmentSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const investment = await getInvestment(slug)
  if (!investment) return { title: 'Investment Not Found' }
  return {
    title: `${investment.frontmatter.company} | Deal Memo`,
    description: investment.frontmatter.description,
  }
}

export default async function InvestmentPage({ params }: Props) {
  const { slug } = await params
  const investment = await getInvestment(slug)

  if (!investment) {
    notFound()
  }

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <Link
          href="/investments"
          className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors"
        >
          &larr; Back to investments
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">
          <AnimatedText text={investment.frontmatter.company} />
        </h1>
        <p className="text-lg text-zinc-400">
          {investment.frontmatter.description}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
          <time dateTime={investment.frontmatter.date}>
            Invested {new Date(investment.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
            })}
          </time>
          <span>&middot;</span>
          <span>{investment.frontmatter.sector}</span>
          <span>&middot;</span>
          <span className={`text-xs px-1.5 py-0.5 rounded ${
            investment.frontmatter.status === 'active'
              ? 'bg-green-900/30 text-green-400'
              : investment.frontmatter.status === 'exited'
              ? 'bg-zinc-800 text-zinc-400'
              : 'bg-blue-900/30 text-blue-400'
          }`}>
            {investment.frontmatter.status}
          </span>
        </div>
        {investment.frontmatter.website && (
          <a
            href={investment.frontmatter.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Visit website &rarr;
          </a>
        )}
      </header>

      <div className="prose text-zinc-300">
        {investment.content}
      </div>
    </article>
  )
}
