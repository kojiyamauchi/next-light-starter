/*
  Footer Component.
*/

import { useState, useEffect } from 'react'
import styles from './style.module.scss'

export type Props = {
  foo?: string
}

export const Footer: React.VFC<Props> = (): JSX.Element => {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className={styles.wrapper}>
      <a href="http://kojiyamauchi.com" target="_blank" rel="noreferrer" className={styles.link}>
        © {year} All The Small Things, All Rights Reserved.
      </a>
    </footer>
  )
}
