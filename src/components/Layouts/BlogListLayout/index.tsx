/*
  Blog List Layout.
*/
import { HeaderContainer } from '@/components/Managements/HeaderContainer'
import { Footer } from '@/components/Presentations/Footer'
import { PageProps } from '@/types/type'
import styles from './style.module.scss'

type Props = {
  pages: PageProps['pages']
}

export const BlogListLayout: React.FC<Props> = ({ pages, children }): JSX.Element => {
  return (
    <div className={`${pages} ${styles['wrapper']}`}>
      <HeaderContainer />
      <main className={styles['main-content']}>{children}</main>
      <Footer />
    </div>
  )
}
