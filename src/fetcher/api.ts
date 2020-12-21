import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { VFileCompatible } from 'vfile'
import { CmsField, Post } from '@/types/type'

const postsDirectory = join(process.cwd(), 'src', 'markdowns')

export const pickSlugArr = (): string[] => fs.readdirSync(postsDirectory).filter((info) => info != '.DS_Store')

export const pickPost = (slug: string, fields: CmsField[]): Post => {
  const fullPath = join(postsDirectory, slug, 'index.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const post: Post = {} as never

  fields.map((field) => {
    if (field === 'slug') post[field] = slug
    if (field === 'content') post[field] = content
    if (data[field]) post[field] = data[field]
  })
  return post
}

export const pickPosts = (fields: CmsField[]): Post[] => {
  const slugArr = pickSlugArr()
  const posts = slugArr.map((slug) => pickPost(slug, fields)).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export const markdownToHtml = async (markdown: VFileCompatible): Promise<string> => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export const postPagePager = (slug: string, posts: Post[]): { prev: string | false; next: string | false } => {
  const postIndex = posts.map((post, index) => post.slug === slug && index).find((info) => typeof info === 'number')
  const prev = typeof postIndex === 'number' && !!posts[postIndex - 1] && posts[postIndex - 1].slug
  const next = typeof postIndex === 'number' && !!posts[postIndex + 1] && posts[postIndex + 1].slug
  return { prev, next }
}

export const listPageInfo = (postLength?: number): { [key: string]: number } => {
  const numberPostsDisplayed = 3
  const totalPost = postLength
  const totalPage = Math.ceil(totalPost! / numberPostsDisplayed)
  return { numberPostsDisplayed, totalPage }
}

export const pickListPageSlug = (totalPage: number): string[][] => {
  return process.env.NODE_ENV === 'development'
    ? Array.from({ length: totalPage }, (_info, index) => (index === 0 ? [] : [`${index + 1}`]))
    : Array.from({ length: totalPage }, (_info, index) => (index === 0 ? ['index'] : [`${index + 1}`]))
}

export const pickCategories = (posts: Post[]): string[] => {
  const uniqueCategories: Set<string> = new Set()
  posts.map((post) => post.categories.map((category) => uniqueCategories.add(category)))
  return Array.from(uniqueCategories)
}

export const pickCategoryPosts = (category: string, posts: Post[]): Post[] => {
  return posts.filter((post) => {
    if (!post.categories.includes(category)) return
    return post
  })
}

export const pickCategoriesInfo = (
  categories: string[],
  posts: Post[],
  categoryPostsFn: (category: string, posts: Post[]) => Post[],
  listPageInfoFn: (postLength?: number | undefined) => { [key: string]: number }
): { category: string; categoryTotalPage: number; categoryPosts: Post[] }[] => {
  return categories.map((category) => {
    const categoryPosts = categoryPostsFn(category, posts)
    const { totalPage } = listPageInfoFn(categoryPosts.length)
    const categoryInfo = {
      category: category,
      categoryTotalPage: totalPage,
      categoryPosts: categoryPosts
    }
    return categoryInfo
  })
}

export const pickCategoriesSlug = (categoriesInfo: { category: string; categoryTotalPage: number; categoryPosts: Post[] }[]): string[][] => {
  return categoriesInfo.flatMap((info) => {
    return process.env.NODE_ENV === 'development'
      ? Array.from({ length: info.categoryTotalPage }, (_info, index) => [info.category, index === 0 ? '' : `${index + 1}`].filter((info) => info != ''))
      : Array.from({ length: info.categoryTotalPage }, (_info, index) => [info.category, index === 0 ? 'index' : `${index + 1}`])
  })
}
