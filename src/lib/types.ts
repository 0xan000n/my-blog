export interface BlogFrontmatter {
  title: string
  date: string
  category: 'technology' | 'reflections' | 'musings'
  excerpt: string
  substackUrl?: string
  linkedinUrl?: string
}

export interface ProjectFrontmatter {
  title: string
  createdAt: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  excerpt: string
}

export interface BlogPost {
  slug: string
  frontmatter: BlogFrontmatter
  content: React.ReactElement
  readingTime: number
}

export interface Project {
  slug: string
  frontmatter: ProjectFrontmatter
  content: React.ReactElement
}

export interface InvestmentFrontmatter {
  company: string
  description: string
  date: string
  sector: string
  website?: string
  status: 'active' | 'exited' | 'acquired'
}

export interface Investment {
  slug: string
  frontmatter: InvestmentFrontmatter
  content: React.ReactElement
}
