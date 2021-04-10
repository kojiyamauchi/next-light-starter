/*
  Layout
*/

import { FixedLayout } from '@/components/Layout/FixedLayout'
import { FluidLayout } from '@/components/Layout/FluidLayout'
import { PageProps } from '@/types/type'

type Props = {
  pageProps: PageProps
}

const switchComponent = (chooseLayout: PageProps['chooseLayout'], pages: PageProps['pages'], children: React.ReactNode): JSX.Element => {
  switch (chooseLayout) {
    case 'fixedLayout':
      return <FixedLayout pages={pages}>{children}</FixedLayout>
    case 'fluidLayout':
      return <FluidLayout pages={pages}>{children}</FluidLayout>
  }
}

export const Layout: React.FC<Props> = ({ pageProps, children }): JSX.Element => {
  return switchComponent(pageProps.chooseLayout, pageProps.pages, children)
}
