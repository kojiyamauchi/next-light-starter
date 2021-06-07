/*
  Navigation Component.
*/

import Link from 'next/link'
import styles from './style.module.scss'

export const Navigation: React.VFC = (): JSX.Element => {
  const link = [
    { path: '/', letter: 'Primary Page', id: 1 },
    { path: '/secondary', letter: 'Secondary Page', id: 2 },
    { path: '/third', letter: 'Third Page', id: 3 },
    { path: '/blog-list', letter: 'Blog Page', id: 4 }
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
