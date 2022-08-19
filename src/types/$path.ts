export const pagesPath = {
  "$404": {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  "$500": {
    $url: (url?: { hash?: string }) => ({ pathname: '/500' as const, hash: url?.hash })
  },
  "blog_category": {
    _slug: (slug?: string[]) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog-category/[[...slug]]' as const, query: { slug }, hash: url?.hash })
    })
  },
  "blog_list": {
    _slug: (slug?: string[]) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog-list/[[...slug]]' as const, query: { slug }, hash: url?.hash })
    })
  },
  "blog_post": {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog-post/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  "fourth": {
    $url: (url?: { hash?: string }) => ({ pathname: '/fourth' as const, hash: url?.hash })
  },
  "secondary": {
    $url: (url?: { hash?: string }) => ({ pathname: '/secondary' as const, hash: url?.hash })
  },
  "third": {
    $url: (url?: { hash?: string }) => ({ pathname: '/third' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
