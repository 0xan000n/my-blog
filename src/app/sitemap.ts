import { MetadataRoute } from 'next'
import { getBlogSlugs, getProjectSlugs, getInvestmentSlugs } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ankit.dev' // Replace with your domain

  const blogSlugs = await getBlogSlugs()
  const projectSlugs = await getProjectSlugs()
  const investmentSlugs = await getInvestmentSlugs()

  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
  }))

  const projectUrls = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
  }))

  const investmentUrls = investmentSlugs.map((slug) => ({
    url: `${baseUrl}/investments/${slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/library`, lastModified: new Date() },
    { url: `${baseUrl}/podcasts`, lastModified: new Date() },
    { url: `${baseUrl}/investments`, lastModified: new Date() },
    ...blogUrls,
    ...projectUrls,
    ...investmentUrls,
  ]
}
