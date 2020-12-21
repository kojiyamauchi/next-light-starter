/*
  Blog Post Pager.
*/
import Link from 'next/link'
import styles from './style.module.scss'

type Props = {
  prev: string | false
  next: string | false
}

export const BlogPostPager: React.VFC<Props> = ({ prev, next }): JSX.Element => (
  <ul className={styles.wrapper}>
    {prev && (
      <li className={styles.prev}>
        <Link href={`/blog-post/${prev}/`}>
          <a rel="prev" className={styles['prev-link']}>
            New Post.
          </a>
        </Link>
      </li>
    )}
    {next && (
      <li className={styles.next}>
        <Link href={`/blog-post/${next}/`}>
          <a rel="prev" className={styles['next-link']}>
            Old Post.
          </a>
        </Link>
      </li>
    )}
  </ul>
)
