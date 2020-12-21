/*
  Header Container.
*/

import Link from 'next/link'
import { GlobalHeading } from '@/components/Presentations/GlobalHeading'
import { Navigation } from '@/components/Presentations/Navigation'
import styles from './style.module.scss'

export const HeaderContainer: React.VFC = (): JSX.Element => {
  const nav = [
    { path: '/', letter: 'Primary Page', id: 1 },
    { path: '/secondary-page', letter: 'Secondary Page', id: 2 },
    { path: '/third-page', letter: 'Third Page', id: 3 },
    { path: '/blog-list', letter: 'Blog Page', id: 4 }
  ]

  const setList = (): JSX.Element[] => {
    return nav.map(
      (info): JSX.Element => (
        <Link key={info.id} href={`${info.path}`}>
          <a className={styles.link}>{info.letter}</a>
        </Link>
      )
    )
  }

  return (
    <div className={styles.wrapper}>
      <GlobalHeading />
      <Navigation pagenavigation={setList()} />
    </div>
  )
}
