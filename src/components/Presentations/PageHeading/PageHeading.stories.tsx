/*
  Page Heading Component Storybook.
*/

import { PageHeading } from './Component'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Page Heading Component',
  component: PageHeading
}

export const Default = (): JSX.Element => <PageHeading letter="Storybook" />
