/*
  Blog Post Data Component.
*/

import Link from 'next/link'
import styles from './style.module.scss'

type Props = {
  categories?: string[]
  date: string
}

export const BlogPostData: React.VFC<Props> = ({ categories, date }): JSX.Element => (
  <ul className={styles.wrapper}>
    <li className={styles.category}>
      {categories?.map((info, index) => (
        <Link key={index} href={`/blog-category/${info}/`}>
          <a className={styles['category-link']}>{info}.</a>
        </Link>
      ))}
    </li>
    <li className={styles.date}>{date}</li>
  </ul>
)
