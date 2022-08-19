/*
  Blog List Pager Component.
*/

import Link from 'next/link'
import { UrlObject } from 'url'

import { pagesPath } from '@/types/$path'

import styles from './style.module.scss'

type Props = {
  category?: string
  pageIndex: number
  isFirst: boolean
  isLast: boolean
  storybook?: boolean
}

export const BlogListPager: React.FC<Props> = ({ category, pageIndex, isFirst, isLast, storybook }): JSX.Element => {
  const handlePathpida = (index: number | ''): UrlObject => {
    if (category) {
      return pagesPath.blog_category._slug([`${category}`, `${index}`]).$url()
    } else {
      return pagesPath.blog_list._slug([`${index}`]).$url()
    }
  }

  const handleAnchor = {
    prev: (): UrlObject => {
      const index = pageIndex === 2 ? '' : pageIndex - 1
      return handlePathpida(index)
    },
    next: (): UrlObject => {
      const index = pageIndex + 1
      return handlePathpida(index)
    }
  }

  return (
    <ul className={`${styles.wrapper} ${storybook ? styles['is-storybook'] : ''}`}>
      {!isFirst && (
        <li className={styles.prev}>
          <Link href={handleAnchor.prev()}>
            <a rel="prev" className={styles['prev-link']}>
              New.
            </a>
          </Link>
        </li>
      )}
      {!isLast && (
        <li className={styles.next}>
          <Link href={handleAnchor.next()}>
            <a rel="prev" className={styles['next-link']}>
              Old.
            </a>
          </Link>
        </li>
      )}
    </ul>
  )
}
