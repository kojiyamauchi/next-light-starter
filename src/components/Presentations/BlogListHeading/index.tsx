/*
  Blog List Heading.
*/
import styles from './style.module.scss'

type Props = {
  branches: 'all' | 'category'
  allPostIndex?: number
  categorySlug?: string
  categoryListIndex?: number
}

export const BlogListHeading: React.VFC<Props> = ({ branches, allPostIndex, categorySlug, categoryListIndex }): JSX.Element => (
  <>
    {branches === 'all' ? (
      <h1 className={`${styles['blog-list-heading']} ${styles['all-list-heading']}`}>All Post #{allPostIndex}</h1>
    ) : (
      <h1 className={`${styles['blog-list-heading']} ${styles['category-list-heading']}`}>
        {categorySlug}’s Post #{categoryListIndex}
      </h1>
    )}
  </>
)
