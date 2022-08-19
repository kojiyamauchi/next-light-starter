/*
  Blog Post Data Component.
*/

import Link from 'next/link'

import { pagesPath } from '@/types/$path'

import styles from './style.module.scss'

type Props = {
  categories?: string[]
  date: string
}

export const BlogPostData: React.FC<Props> = ({ categories, date }): JSX.Element => (
  <ul className={styles.wrapper}>
    <li className={styles.category}>
      {categories?.map((info, index) => (
        <Link key={index} href={pagesPath.blog_category._slug([`${info}`]).$url()}>
          <a className={styles['category-link']}>{info}.</a>
        </Link>
      ))}
    </li>
    <li className={styles.date}>{date}</li>
  </ul>
)
