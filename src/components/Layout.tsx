// import { ReactNode } from 'react'
import { PageProps } from '@/types/type'
import { HeaderContainer } from '@/components/Managements/HeaderContainer'
import { Footer } from '@/components/Presentations/Footer'

type Props = {
  pageProps?: PageProps
}

export const Layout: React.FC<Props> = ({ pageProps, children }): JSX.Element => {
  return pageProps?.fixedLayout ? (
    <div className={`${pageProps?.pages} layout fixed-layout`}>
      <HeaderContainer />
      {children}
      <Footer />
    </div>
  ) : (
    <div className={`${pageProps?.pages} layout fluid-layout`}>{children}</div>
  )
}
