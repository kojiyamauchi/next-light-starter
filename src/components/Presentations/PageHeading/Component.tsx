/*
  Pages Heading Component.
*/

import styles from './style.module.scss'

type Props = {
  letter: string
  translation?: boolean
}

export const PageHeading: React.VFC<Props> = ({ letter, translation }): JSX.Element => (
  <h2 className={`${styles['secondary-heading']} page-heading ${translation ? styles['is-translation'] : ''}`}>This is {letter} Page.</h2>
)
