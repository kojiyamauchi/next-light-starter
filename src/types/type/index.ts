export type ValueOf<T> = T[keyof T]

export type PageProps = {
  chooseLayout: 'fixedLayout' | 'blogListLayout' | 'blogPostLayout'
  // For extract below line of code in Hygen
  // prettier-ignore
  pages: 'primary' | 'secondary' | 'third' | 'fourth' | 'blog-list' | 'blog-category' | 'blog-post' | 'other' | 'error' | '404' | '500' | 'ui-test' | 'storybook' | '🏄‍♂️' | '🛹'
}

export type CmsField = 'slug' | 'date' | 'title' | 'categories' | 'description' | 'image' | 'content'

export type Post = {
  slug: string
  date: string
  title: string
  categories: string[]
  description: string
  image: string
  content: string
}
