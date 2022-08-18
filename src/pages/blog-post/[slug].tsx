import { baseCmsFields } from 'base.config.client'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsResult } from 'next'
import { useRouter } from 'next/router'

import { markdownToHtml, pickPost, pickPosts, postPagePager } from '@/cmsApi'
import { BlogPostContent } from '@/components/Presentations/BlogPostContent'
import { BlogPostData } from '@/components/Presentations/BlogPostData'
import { BlogPostPager } from '@/components/Presentations/BlogPostPager'
import { Image } from '@/components/Presentations/Image'
import { SEO } from '@/components/Seo'
import { PageProps, Post } from '@/types/type'

type Props = {
  post: Post
  prev: string | false
  next: string | false
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const posts = pickPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }): Promise<GetStaticPropsResult<Props> | { props: PageProps }> => {
  const slug = typeof params!.slug === 'string' ? params!.slug : ''
  const cmsFields = baseCmsFields.map((info) => info)
  const post = pickPost(slug, cmsFields)
  const posts = pickPosts(cmsFields)
  const content = await markdownToHtml(post.content || '')
  const { prev, next } = postPagePager(slug, posts)

  return {
    props: {
      post: {
        ...post,
        content
      },
      prev,
      next,
      chooseLayout: 'blogPostLayout',
      pages: 'blog-post'
    },
    revalidate: false
  }
}

const BlogPost: React.FC<Props> = ({ post, prev, next }): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO title={post.title} description={post.description} locationPath={router.asPath} />
      <BlogPostContent content={post.content} />
      <BlogPostData categories={post.categories} date={post.date} />
      <Image image={post.image} extension="webp" alt={post.image} mobileMaxWidth="300px" desktopMaxWidth="400px" margin="0 0 20px 0" />
      <BlogPostPager prev={prev} next={next} />
    </>
  )
}

export default BlogPost
