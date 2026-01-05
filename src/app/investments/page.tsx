import Link from 'next/link'
import { getAllInvestments } from '@/lib/mdx'
import { AnimatedText } from '@/components/AnimatedText'

export default async function InvestmentsPage() {
  const investments = await getAllInvestments()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          <AnimatedText text="Investments" />
        </h1>
        <p className="text-zinc-400">
          I&apos;m an impact investor backing founders building a better future.
        </p>
      </div>

      <div className="space-y-4 text-zinc-400 leading-relaxed">
        <p>
          I invest in early-stage companies working on meaningful problems.
          I&apos;m particularly interested in founders tackling climate, health,
          education, and tools that empower people.
        </p>
        <p>
          Beyond capital, I try to be helpful with product thinking,
          early customer introductions, and navigating the founder journey.
        </p>
      </div>

      <div className="py-4 border-t border-zinc-800">
        <p className="text-zinc-400">
          Building something interesting?{' '}
          <a
            href="mailto:ankit@1to3.xyz"
            className="text-zinc-100 underline underline-offset-2 hover:text-zinc-300 transition-colors"
          >
            ankit@1to3.xyz
          </a>
        </p>
      </div>

      {investments.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-lg font-medium">Deal Memos</h2>
          <div className="grid gap-4">
            {investments.map((investment) => (
              <article key={investment.slug} className="group">
                <Link href={`/investments/${investment.slug}`} className="block p-4 -mx-4 rounded-lg hover:bg-zinc-900/50 transition-colors">
                  <div className="flex items-center gap-3 text-sm text-zinc-500 mb-2">
                    <time dateTime={investment.frontmatter.date}>
                      {new Date(investment.frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
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
                  <h3 className="font-medium group-hover:text-zinc-300 transition-colors">
                    {investment.frontmatter.company}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">
                    {investment.frontmatter.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
