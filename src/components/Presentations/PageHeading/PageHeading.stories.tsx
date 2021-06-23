/*
  Page Heading Component Storybook.
*/

import { PageHeading } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Page Heading Component',
  component: PageHeading
}

export default storiesInfo

export const Default = (): JSX.Element => <PageHeading letter="Storybook" />
