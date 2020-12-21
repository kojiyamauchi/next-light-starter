/*
  Global Heading.
*/
import styles from './style.module.scss'

type Props = {
  letter?: string | null
}

export const GlobalHeading: React.VFC<Props> = (): JSX.Element => (
  <div className={styles.wrapper}>
    <h1 className={styles['primary-heading']}>Next.js light Starter</h1>
  </div>
)
