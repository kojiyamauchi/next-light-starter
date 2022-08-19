import { baseCmsFields } from 'base.config.client'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsResult } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

import { listPageInfo, pickCategories, pickCategoriesInfo, pickCategoriesSlug, pickCategoryPosts, pickPosts } from '@/cmsApi'
import { BlogListData } from '@/components/Presentations/BlogListData'
import { BlogListHeading } from '@/components/Presentations/BlogListHeading'
import { BlogListPager } from '@/components/Presentations/BlogListPager'
import { Image } from '@/components/Presentations/Image'
import { SEO } from '@/components/Seo'
import { pagesPath } from '@/types/$path'
import { PageProps, Post } from '@/types/type'

type Props = {
  params: ParsedUrlQuery
  numberPostsDisplayed: number
  totalPage: number
  categoryPosts: Post[]
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const cmsFields = baseCmsFields.map((info) => info)
  const posts = pickPosts(cmsFields)
  const categories = pickCategories(posts)
  const categoriesInfo = pickCategoriesInfo(categories, posts, pickCategoryPosts, listPageInfo)
  const categoriesSlug = pickCategoriesSlug(categoriesInfo)

  return {
    paths: categoriesSlug.map((slug) => {
      return {
        params: {
          slug: slug
        }
      }
    }),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }): Promise<GetStaticPropsResult<Props> | { props: PageProps }> => {
  const cmsFields = baseCmsFields.map((info) => info)
  const posts = pickPosts(cmsFields)
  const categoryPosts = pickCategoryPosts(params!.slug![0], posts)
  const { numberPostsDisplayed, totalPage } = listPageInfo(categoryPosts.length)

  return {
    props: {
      numberPostsDisplayed,
      totalPage,
      categoryPosts,
      chooseLayout: 'blogListLayout',
      pages: 'blog-category'
    },
    revalidate: false
  }
}

const BlogCategory: React.FC<Props> = ({ numberPostsDisplayed, totalPage, categoryPosts }): JSX.Element => {
  const router = useRouter()
  const categorySlug = router.query.slug![0]
  const currentPageIndex = !router.query.slug![1] || router.query.slug![1] === 'index' ? 1 : Number(router.query.slug![1])
  const skip = (currentPageIndex - 1) * numberPostsDisplayed
  const limit = currentPageIndex * numberPostsDisplayed
  const isFirst = currentPageIndex === 1
  const isLast = currentPageIndex === totalPage

  return (
    <>
      <SEO
        title={`${categorySlug} - Page ${currentPageIndex}`}
        description={`This is ${categorySlug} - Page ${currentPageIndex}.`}
        locationPath={router.asPath}
      />
      <BlogListHeading branches="category" categorySlug={categorySlug} categoryListIndex={currentPageIndex} />
      {categoryPosts.map((info, index) => {
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
      <BlogListPager category={categorySlug} pageIndex={currentPageIndex} isFirst={isFirst} isLast={isLast} />
    </>
  )
}

export default BlogCategory
