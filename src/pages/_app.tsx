/*
  Next.js uses the App component to initialize pages.
  You can override it and control the page initialization.
  Which allows you to do amazing things like:
  Persisting layout between page changes
  Keeping state when navigating pages
  Custom error handling using componentDidCatch
  Inject additional data into pages
  Add global CSS

  Through 'Component: NextComponentType',
  Expanded to Each Page Component.

  Basically, Global State Management is Inject in Here.
*/
import { NextComponentType, NextPageContext } from 'next'
import { PageProps } from '@/types/type'
import { Layout } from '@/components/Layouts'
import '@/styles/default.scss'

type AppProps = {
  Component: NextComponentType<NextPageContext, unknown, PageProps>
  pageProps: PageProps
}

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
