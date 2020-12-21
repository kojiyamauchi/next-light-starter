/*
  Navigation.
*/

import styles from './style.module.scss'

type Props = {
  pagenavigation: JSX.Element[]
}

export const Navigation: React.VFC<Props> = ({ pagenavigation }): JSX.Element => <div className={styles.wrapper}>{pagenavigation}</div>
