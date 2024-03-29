/*
  Blog List Heading Component.
*/

import styles from './style.module.scss'

type Props = {
  branches: 'all' | 'category'
  allPostIndex?: number
  categorySlug?: string
  categoryListIndex?: number
  storybook?: boolean
}

export const BlogListHeading: React.FC<Props> = ({ branches, allPostIndex, categorySlug, categoryListIndex, storybook }): JSX.Element => (
  <>
    {branches === 'all' ? (
      <h1 className={`${styles['blog-list-heading']} ${styles['all-list-heading']} ${storybook ? styles['is-storybook'] : ''}`}>All Post #{allPostIndex}</h1>
    ) : (
      <h1 className={`${styles['blog-list-heading']} ${styles['category-list-heading']} ${storybook ? styles['is-storybook'] : ''}`}>
        {categorySlug}’s Post #{categoryListIndex}
      </h1>
    )}
  </>
)
