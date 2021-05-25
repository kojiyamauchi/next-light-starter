/*
  Blog Post Content.
*/
import styles from './style.module.scss'

type Props = {
  content: string
}

export const BlogPostContent: React.VFC<Props> = ({ content }): JSX.Element => (
  <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: content }}></div>
)