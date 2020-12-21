import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { pickPosts, listPageInfo, pickCategories, pickCategoryPosts, pickCategoriesInfo, pickCategoriesSlug } from '@/fetcher/api'
import { PageProps, Post } from '@/types/type'
import { baseCmsFields } from 'base.config.client'
import { SEO } from '@/components/Seo'
import { BlogListHeading } from '@/components/Presentations/BlogListHeading'
import { BlogListData } from '@/components/Presentations/BlogListData'
import { BlogListPager } from '@/components/Presentations/BlogListPager'
import { Image } from '@/components/Presentations/Image'

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
      fixedLayout: true,
      pages: 'blog-category'
    },
    revalidate: false
  }
}

const BlogCategory: React.VFC<Props> = ({ numberPostsDisplayed, totalPage, categoryPosts }): JSX.Element => {
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
      <main className="blog-category">
        <BlogListHeading branches="category" categorySlug={categorySlug} categoryListIndex={currentPageIndex} />
        {categoryPosts.map((info, index) => {
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
        <BlogListPager category={categorySlug} pageIndex={currentPageIndex} isFirst={isFirst} isLast={isLast} />
      </main>
    </>
  )
}

export default BlogCategory
