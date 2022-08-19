/*
  Third Page.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { PageHeading } from '@/components/Presentations/PageHeading'
import { SEO } from '@/components/Seo'
import { PageProps } from '@/types/type'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    chooseLayout: 'fixedLayout',
    pages: 'third'
  }
})

const ThirdPage: React.FC = (): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO title="Third Page" description="This is Third Page" locationPath={router.asPath} />
      <PageHeading letter="Third" translation={true} />
    </>
  )
}

export default ThirdPage
