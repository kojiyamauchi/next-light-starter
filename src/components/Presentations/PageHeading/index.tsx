/*
  Pages Heading.
*/

import styles from './style.module.scss'

type Props = {
  letter: string
}

export const PageHeading: React.VFC<Props> = ({ letter }): JSX.Element => (
  <h2 className={`${styles['secondary-heading']} page-heading`}>This is {letter} Page.</h2>
)
