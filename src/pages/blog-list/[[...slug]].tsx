import { baseCmsFields } from 'base.config.client'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsResult } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { listPageInfo, pickListPageSlug, pickPosts } from '@/cmsApi'
import { BlogListData } from '@/components/Presentations/BlogListData'
import { BlogListHeading } from '@/components/Presentations/BlogListHeading'
import { BlogListPager } from '@/components/Presentations/BlogListPager'
import { Image } from '@/components/Presentations/Image'
import { SEO } from '@/components/Seo'
import { pagesPath } from '@/types/$path'
import { PageProps, Post } from '@/types/type'

type Props = {
  numberPostsDisplayed: number
  totalPage: number
  posts: Post[]
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const posts = pickPosts(['slug'])
  const { totalPage } = listPageInfo(posts.length)
  const listPageSlug = pickListPageSlug(totalPage)

  return {
    paths: listPageSlug.map((slug) => {
      return {
        params: {
          slug: slug
        }
      }
    }),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<Props> | { props: PageProps }> => {
  const cmsFields = baseCmsFields.map((info) => info)
  const posts = pickPosts(cmsFields)
  const { numberPostsDisplayed, totalPage } = listPageInfo(posts.length)

  return {
    props: {
      numberPostsDisplayed,
      totalPage,
      posts,
      chooseLayout: 'blogListLayout',
      pages: 'blog-list'
    },
    revalidate: false
  }
}

const BlogList: React.FC<Props> = ({ numberPostsDisplayed, totalPage, posts }): JSX.Element => {
  const router = useRouter()
  const currentPageIndex = !router.query.slug || router.query.slug![0] === 'index' ? 1 : Number(router.query.slug)
  const skip = (currentPageIndex - 1) * numberPostsDisplayed
  const limit = currentPageIndex * numberPostsDisplayed
  const isFirst = currentPageIndex === 1
  const isLast = currentPageIndex === totalPage

  return (
    <>
      <SEO title={`All Post - Page ${currentPageIndex}`} description={`This is All Post - Page ${currentPageIndex}.`} locationPath={router.asPath} />
      <BlogListHeading branches="all" allPostIndex={currentPageIndex} />
      {posts.map((info, index) => {
        return (
          index >= skip &&
          index < limit && (
            <Link key={index} href={pagesPath.blog_post._slug(`${info.slug}`).$url()}>
              <a>
                <article>
                  <Image image={info.image} extension="webp" alt={info.image} mobileMaxWidth="200px" desktopMaxWidth="300px" margin="0 0 5px 0" />
                  <BlogListData title={info.title} date={info.date} />
                </article>
              </a>
            </Link>
          )
        )
      })}
      <BlogListPager pageIndex={currentPageIndex} isFirst={isFirst} isLast={isLast} />
    </>
  )
}

export default BlogList
