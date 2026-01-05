import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Project not found</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        The project you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/projects"
        className="inline-block text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        &larr; Back to projects
      </Link>
    </div>
  )
}
