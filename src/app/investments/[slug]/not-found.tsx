import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Investment not found</h1>
      <p className="text-zinc-400">
        The deal memo you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/investments"
        className="inline-block text-sm text-zinc-400 hover:text-zinc-100"
      >
        &larr; Back to investments
      </Link>
    </div>
  )
}
