/*
  Secondary Page.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { PageHeading } from '@/components/Presentations/PageHeading'
import { SEO } from '@/components/Seo'
import { PageProps } from '@/types/type'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    chooseLayout: 'fixedLayout',
    pages: 'secondary'
  }
})

const SecondaryPage: React.FC = (): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO title="Secondary Page" description="This is Secondary Page" locationPath={router.asPath} />
      <PageHeading letter="Secondary" translation={true} />
    </>
  )
}

export default SecondaryPage
