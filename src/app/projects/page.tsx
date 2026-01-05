import Link from 'next/link'
import { getAllProjects } from '@/lib/mdx'
import { AnimatedText } from '@/components/AnimatedText'

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight">
        <AnimatedText text="Projects" />
      </h1>

      {projects.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">No projects yet.</p>
      ) : (
        <div className="grid gap-6">
          {projects.map((project) => (
            <article key={project.slug} className="group">
              <Link href={`/projects/${project.slug}`} className="block space-y-2">
                <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <time dateTime={project.frontmatter.createdAt}>
                    {new Date(project.frontmatter.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </time>
                </div>
                <h2 className="text-lg font-medium group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {project.frontmatter.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {project.frontmatter.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.frontmatter.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
