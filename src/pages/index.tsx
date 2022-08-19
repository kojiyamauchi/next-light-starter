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

import { PageHeading } from '@/components/Presentations/PageHeading'
import { SEO } from '@/components/Seo'
import { PageProps } from '@/types/type'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    chooseLayout: 'fixedLayout',
    pages: 'primary'
  }
})

const PrimaryPage: React.FC = (): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO locationPath={router.asPath} />
      <PageHeading letter="Primary" translation={true} />
    </>
  )
}

export default PrimaryPage
