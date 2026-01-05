import { compileMDX } from 'next-mdx-remote/rsc'
import { readFile, readdir } from 'fs/promises'
import path from 'path'
import { BlogFrontmatter, ProjectFrontmatter, InvestmentFrontmatter, BlogPost, Project, Investment } from './types'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')
const PROJECTS_DIR = path.join(process.cwd(), 'content/projects')
const INVESTMENTS_DIR = path.join(process.cwd(), 'content/investments')

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
    const source = await readFile(filePath, 'utf-8')

    const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
      source,
      options: { parseFrontmatter: true }
    })

    const wordCount = source.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200)

    return { slug, frontmatter, content, readingTime }
  } catch {
    return null
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const files = await readdir(BLOG_DIR)
    const slugs = files
      .filter(f => f.endsWith('.mdx'))
      .map(f => f.replace('.mdx', ''))

    const posts = await Promise.all(slugs.map(getBlogPost))
    return posts
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
  } catch {
    return []
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`)
    const source = await readFile(filePath, 'utf-8')

    const { content, frontmatter } = await compileMDX<ProjectFrontmatter>({
      source,
      options: { parseFrontmatter: true }
    })

    return { slug, frontmatter, content }
  } catch {
    return null
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const files = await readdir(PROJECTS_DIR)
    const slugs = files
      .filter(f => f.endsWith('.mdx'))
      .map(f => f.replace('.mdx', ''))

    const projects = await Promise.all(slugs.map(getProject))
    return projects
      .filter((project): project is Project => project !== null)
      .sort((a, b) => new Date(b.frontmatter.createdAt).getTime() - new Date(a.frontmatter.createdAt).getTime())
  } catch {
    return []
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  try {
    const files = await readdir(BLOG_DIR)
    return files.filter(f => f.endsWith('.mdx')).map(f => f.replace('.mdx', ''))
  } catch {
    return []
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  try {
    const files = await readdir(PROJECTS_DIR)
    return files.filter(f => f.endsWith('.mdx')).map(f => f.replace('.mdx', ''))
  } catch {
    return []
  }
}

export async function getInvestment(slug: string): Promise<Investment | null> {
  try {
    const filePath = path.join(INVESTMENTS_DIR, `${slug}.mdx`)
    const source = await readFile(filePath, 'utf-8')

    const { content, frontmatter } = await compileMDX<InvestmentFrontmatter>({
      source,
      options: { parseFrontmatter: true }
    })

    return { slug, frontmatter, content }
  } catch {
    return null
  }
}

export async function getAllInvestments(): Promise<Investment[]> {
  try {
    const files = await readdir(INVESTMENTS_DIR)
    const slugs = files
      .filter(f => f.endsWith('.mdx'))
      .map(f => f.replace('.mdx', ''))

    const investments = await Promise.all(slugs.map(getInvestment))
    return investments
      .filter((inv): inv is Investment => inv !== null)
      .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
  } catch {
    return []
  }
}

export async function getInvestmentSlugs(): Promise<string[]> {
  try {
    const files = await readdir(INVESTMENTS_DIR)
    return files.filter(f => f.endsWith('.mdx')).map(f => f.replace('.mdx', ''))
  } catch {
    return []
  }
}
