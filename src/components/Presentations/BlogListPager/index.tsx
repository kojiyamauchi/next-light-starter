/*
  Blog List Pager.
*/
import Link from 'next/link'
import styles from './style.module.scss'

type Props = {
  category?: string
  pageIndex: number
  isFirst: boolean
  isLast: boolean
  storybook?: boolean
}

export const BlogListPager: React.VFC<Props> = ({ category, pageIndex, isFirst, isLast, storybook }): JSX.Element => {
  const branches = category ? `/blog-category/${category}/` : `/blog-list/`

  return (
    <ul className={`${styles.wrapper} ${storybook ? styles['is-storybook'] : ''}`}>
      {!isFirst && (
        <li className={styles.prev}>
          <Link href={`${branches}${pageIndex === 2 ? '' : pageIndex - 1}`}>
            <a rel="prev" className={styles['prev-link']}>
              New.
            </a>
          </Link>
        </li>
      )}
      {!isLast && (
        <li className={styles.next}>
          <Link href={`${branches}${pageIndex + 1}`}>
            <a rel="prev" className={styles['next-link']}>
              Old.
            </a>
          </Link>
        </li>
      )}
    </ul>
  )
}
