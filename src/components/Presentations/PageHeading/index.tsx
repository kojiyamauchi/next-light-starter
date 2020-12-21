/*
  Pages Heading.
*/

import styles from './style.module.scss'

type Props = {
  letter: string
}

export const PageHeading: React.VFC<Props> = ({ letter }): JSX.Element => (
  <div className={styles.wrapper}>
    <h2 className={`${styles['secondary-heading']} page-heading`}>This is {letter} Page.</h2>
  </div>
)
