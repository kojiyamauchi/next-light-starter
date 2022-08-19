/*
  Blog List Data Component.
*/

import styles from './style.module.scss'

type Props = {
  title: string
  date: string
}

export const BlogListData: React.FC<Props> = ({ title, date }): JSX.Element => (
  <div className={styles.wrapper}>
    <h2 className={styles['title-heading']}>{title}</h2>
    <p className={styles['date']}>{date}</p>
  </div>
)
