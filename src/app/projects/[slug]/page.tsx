import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject, getProjectSlugs } from '@/lib/mdx'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.excerpt,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <Link
          href="/projects"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        >
          &larr; Back to projects
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">
          {project.frontmatter.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <time dateTime={project.frontmatter.createdAt}>
            Created {new Date(project.frontmatter.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
            })}
          </time>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.frontmatter.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        {(project.frontmatter.githubUrl || project.frontmatter.liveUrl) && (
          <div className="flex gap-4 pt-2">
            {project.frontmatter.githubUrl && (
              <a
                href={project.frontmatter.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                GitHub &rarr;
              </a>
            )}
            {project.frontmatter.liveUrl && (
              <a
                href={project.frontmatter.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                Live Demo &rarr;
              </a>
            )}
          </div>
        )}
      </header>

      <div className="prose text-zinc-700 dark:text-zinc-300">
        {project.content}
      </div>
    </article>
  )
}
