/*
  Fourth Page.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PageProps } from '@/types/type'
import { SEO } from '@/components/Seo'
import { PageHeading } from '@/components/Presentations/PageHeading'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    fixedLayout: true,
    pages: 'fourth'
  }
})

const FourthPage: React.VFC = (): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO title="Fourth Page" description="This is Fourth Page" locationPath={router.asPath} />
      <main className="main">
        <PageHeading letter="Fourth" />
      </main>
    </>
  )
}

export default FourthPage