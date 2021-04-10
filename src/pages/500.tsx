/*
  500 Page.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PageProps } from '@/types/type'
import { SEO } from '@/components/Seo'
import { PageHeading } from '@/components/Presentations/PageHeading'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    chooseLayout: 'fixedLayout',
    pages: '500'
  }
})

const Custom500: React.VFC = (): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO title="500 Page" description="This is 500 Page" locationPath={router.asPath} />
      <main className="main">
        <PageHeading letter="500 - Server Side Error Occurred" />
      </main>
    </>
  )
}

export default Custom500
