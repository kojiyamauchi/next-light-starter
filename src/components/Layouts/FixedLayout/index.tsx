/*
  Fixed Layout.
*/

import { HeaderContainer } from '@/components/Managements/HeaderContainer'
import { Footer } from '@/components/Presentations/Footer'
import { PageProps } from '@/types/type'
import styles from './style.module.scss'

type Props = {
  pages: PageProps['pages']
}

export const FixedLayout: React.FC<Props> = ({ pages, children }): JSX.Element => {
  return (
    <div className={`${pages} ${styles['wrapper']}`}>
      <HeaderContainer />
      <main
        className={styles['main-content']}
        style={{ backgroundImage: `${pages !== 'storybook' ? 'url("/next-light-starter/webps/logo_cream.webp")' : 'url("webps/logo_cream.webp")'}` }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
