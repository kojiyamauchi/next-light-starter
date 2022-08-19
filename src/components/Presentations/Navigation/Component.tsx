/*
  Navigation Component.
*/

import Link from 'next/link'

import { pagesPath } from '@/types/$path'

import styles from './style.module.scss'

export const Navigation: React.FC = (): JSX.Element => {
  const link = [
    { path: pagesPath.$url().pathname, letter: 'Primary Page', id: 1 },
    { path: pagesPath.secondary.$url().pathname, letter: 'Secondary Page', id: 2 },
    { path: pagesPath.third.$url().pathname, letter: 'Third Page', id: 3 },
    { path: pagesPath.blog_list._slug().$url().pathname, letter: 'Blog Page', id: 4 }
  ]

  const navigation = (): JSX.Element[] => {
    return link.map(
      (info): JSX.Element => (
        <li key={info.id}>
          <Link href={`${info.path}`}>
            <a className={styles.link}>{info.letter}</a>
          </Link>
        </li>
      )
    )
  }

  return <ul className={styles.wrapper}>{navigation()}</ul>
}
