/*
  Blog Post Content Component.
*/

import styles from './style.module.scss'

type Props = {
  content: string
}

export const BlogPostContent: React.FC<Props> = ({ content }): JSX.Element => (
  <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: content }}></div>
)
