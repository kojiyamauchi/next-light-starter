/*
   Application Base Config for Client.
*/

export const baseSeo = {
  title: 'Next.js My Starter',
  description: 'This is My Next.js Starter',
  location: 'https://kojiyamauchi.github.io/next-my-starter',
  ogpSiteName: 'Next.js My Starter',
  ogpTitle: 'Next.js My Starter',
  ogpDescription: 'This is My Next.js Starter.',
  ogpImage: 'ogp_image.jpg'
} as const

export const baseCmsFields = ['slug', 'date', 'title', 'categories', 'description', 'image', 'content'] as const
