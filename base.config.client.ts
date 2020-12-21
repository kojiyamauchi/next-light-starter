/*
   Application Base Config for Client.
*/

export const baseSeo = {
  title: 'Next.js Light Starter',
  description: 'This is Light Next.js Starter',
  location: 'https://kojiyamauchi.github.io/next-light-starter',
  ogpSiteName: 'Next.js Light Starter',
  ogpTitle: 'Next.js Light Starter',
  ogpDescription: 'This is Light Next.js Starter.',
  ogpImage: 'ogp_image.jpg'
} as const

export const baseCmsFields = ['slug', 'date', 'title', 'categories', 'description', 'image', 'content'] as const
