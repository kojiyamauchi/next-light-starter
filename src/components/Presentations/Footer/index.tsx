/*
  Footer.
*/

import styles from './style.module.scss'

export const Footer: React.VFC = (): JSX.Element => (
  <div className={styles.wrapper}>
    <a href="http://kojiyamauchi.com" target="_blank" rel="noreferrer" className={styles.link}>
      © {new Date().getFullYear()} All The Small Things, All Rights Reserved.
    </a>
  </div>
)
