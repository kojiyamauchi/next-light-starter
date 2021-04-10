/*
  Fixed Layout.
*/

import { HeaderContainer } from '@/components/Managements/HeaderContainer'
import { Footer } from '@/components/Presentations/Footer'
import { PageProps } from '@/types/type'

type Props = {
  pages: PageProps['pages']
}

const FixedLayoutComponent: React.FC<Props> = ({ pages, children }): JSX.Element => {
  return (
    <div className={`${pages} layout fixed-layout`}>
      <HeaderContainer />
      {children}
      <Footer />
    </div>
  )
}

export const FixedLayout = FixedLayoutComponent
