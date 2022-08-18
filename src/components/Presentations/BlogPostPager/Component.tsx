/*
  Blog Post Pager Component.
*/

import Link from 'next/link'

import { pagesPath } from '@/types/$path'

import styles from './style.module.scss'

type Props = {
  prev: string | false
  next: string | false
  storybook?: boolean
}

export const BlogPostPager: React.FC<Props> = ({ prev, next, storybook }): JSX.Element => (
  <ul className={`${styles.wrapper} ${storybook ? styles['is-storybook'] : ''}`}>
    {prev && (
      <li className={styles.prev}>
        <Link href={pagesPath.blog_post._slug(`${prev}`).$url()}>
          <a rel="prev" className={styles['prev-link']}>
            New Post.
          </a>
        </Link>
      </li>
    )}
    {next && (
      <li className={styles.next}>
        <Link href={pagesPath.blog_post._slug(`${next}`).$url()}>
          <a rel="prev" className={styles['next-link']}>
            Old Post.
          </a>
        </Link>
      </li>
    )}
  </ul>
)
