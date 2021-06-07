/*
  Header Container.
*/

import { GlobalHeading } from '@/components/Presentations/GlobalHeading'
import { Navigation } from '@/components/Presentations/Navigation'
import styles from './style.module.scss'

export const HeaderContainer: React.VFC = (): JSX.Element => {
  return (
    <header className={styles.wrapper}>
      <GlobalHeading />
      <Navigation />
    </header>
  )
}
