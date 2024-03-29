/*
  404 Page.
*/

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { PageHeading } from '@/components/Presentations/PageHeading'
import { SEO } from '@/components/Seo'
import { PageProps } from '@/types/type'

export const getStaticProps: GetStaticProps = async (): Promise<{ props: PageProps }> => ({
  props: {
    chooseLayout: 'fixedLayout',
    pages: '404'
  }
})

const Custom404: React.FC = (): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <SEO title="404 Page" description="This is 404 Page" locationPath={router.asPath} />
      <PageHeading letter="404 - Page Not Found" translation={true} />
    </>
  )
}

export default Custom404
