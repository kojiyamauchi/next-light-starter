/*
  Fixed Layout.
*/

import { useRouter } from 'next/router'

import { HeaderContainer } from '@/components/Managements/HeaderContainer'
import { Footer } from '@/components/Presentations/Footer'
import { PageProps } from '@/types/type'

import styles from './style.module.scss'

type Props = {
  pages: PageProps['pages']
  children?: React.ReactNode
}

export const FixedLayout: React.FC<Props> = ({ pages, children }): JSX.Element => {
  const router = useRouter()

  return (
    <div className={`${pages} ${styles['wrapper']}`}>
      <HeaderContainer />
      <main
        className={styles['main-content']}
        style={{ backgroundImage: `${router ? `url("${router.basePath}/webps/logo_cream.webp")` : 'url("webps/logo_cream.webp")'}` }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
