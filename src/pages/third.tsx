/*
  Third Page.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PageProps } from '@/types/type'
import { SEO } from '@/components/Seo'
import { PageHeading } from '@/components/Presentations/PageHeading'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    chooseLayout: 'fixedLayout',
    pages: 'third'
  }
})

const ThirdPage: React.VFC = (): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO title="Third Page" description="This is Third Page" locationPath={router.asPath} />
      <PageHeading letter="Third" translation={true} />
    </>
  )
}

export default ThirdPage
