/*
  Secondary Page.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PageProps } from '@/types/type'
import { SEO } from '@/components/Seo'
import { PageHeading } from '@/components/Presentations/PageHeading'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    fixedLayout: true,
    pages: 'secondary'
  }
})

const SecondaryPage: React.VFC = (): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO title="Secondary Page" description="This is Secondary Page" locationPath={router.asPath} />
      <main className="main">
        <PageHeading letter="Secondary" />
      </main>
    </>
  )
}

export default SecondaryPage
