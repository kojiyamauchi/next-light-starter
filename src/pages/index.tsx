/*
  Top Page.
  In 'getStaticPaths' && 'getStaticProps',
  When the File Does Not Exist in the Specified Path.
  'getStaticPaths' API's 'fallback' are...
  fallback: false -> 404.
  fallback: true -> CSR && SSR on Background, The Second and Subsequent Accesses Return SSR Cache.
  fallback: blocking -> SSR && The Second and Subsequent Accesses Return SSR Cache.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PageProps } from '@/types/type'
import { SEO } from '@/components/Seo'
import { PageHeading } from '@/components/Presentations/PageHeading'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    fixedLayout: true,
    pages: 'primary'
  }
})

const PrimaryPage: React.VFC = (): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO locationPath={router.asPath} />
      <main className="main">
        <PageHeading letter="Primary" />
      </main>
    </>
  )
}

export default PrimaryPage
