/*
  Layout
*/

import { BlogListLayout } from '@/components/Layouts/BlogListLayout'
import { BlogPostLayout } from '@/components/Layouts/BlogPostLayout'
import { FixedLayout } from '@/components/Layouts/FixedLayout'
import { PageProps } from '@/types/type'

type Props = {
  pageProps: PageProps
  children?: React.ReactNode
}

const switchComponent = (chooseLayout: PageProps['chooseLayout'], pages: PageProps['pages'], children: React.ReactNode): JSX.Element => {
  switch (chooseLayout) {
    case 'fixedLayout':
      return <FixedLayout pages={pages}>{children}</FixedLayout>
    case 'blogListLayout':
      return <BlogListLayout pages={pages}>{children}</BlogListLayout>
    case 'blogPostLayout':
      return <BlogPostLayout pages={pages}>{children}</BlogPostLayout>
  }
}

export const Layout: React.FC<Props> = ({ pageProps, children }): JSX.Element => {
  return switchComponent(pageProps.chooseLayout, pageProps.pages, children)
}
