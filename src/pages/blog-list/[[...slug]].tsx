import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsResult } from 'next'
import { pickPosts, listPageInfo, pickListPageSlug } from '@/fetcher/api'
import { PageProps, Post } from '@/types/type'
import { baseCmsFields } from 'base.config.client'
import { SEO } from '@/components/Seo'
import { BlogListHeading } from '@/components/Presentations/BlogListHeading'
import { BlogListData } from '@/components/Presentations/BlogListData'
import { BlogListPager } from '@/components/Presentations/BlogListPager'
import { Image } from '@/components/Presentations/Image'

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

const BlogList: React.VFC<Props> = ({ numberPostsDisplayed, totalPage, posts }): JSX.Element => {
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
            <Link key={index} href={`/blog-post/${info.slug}`}>
              <a>
                <article>
                  <Image image={info.image} extension="webp" altProps={info.image} mobileMaxWidth="200px" desktopMaxWidth="300px" margin="0 0 5px 0" />
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
