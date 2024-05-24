import { allPosts, Post as PostType } from 'contentlayer/generated';

export default function sitemap() {
  const domain = 'https://bilhalba.com.br'

  const sitemap = [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: domain + '/sobre-nos',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: domain + '/posts',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ]

  allPosts.forEach((post: PostType) => {
    sitemap.push({
      url: domain + post.slug,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly',
      priority: 0.5,
    })
  })

  return sitemap
}
