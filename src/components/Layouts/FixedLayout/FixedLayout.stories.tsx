/*
  Fixed Layout Component Storybook.
*/

import { FixedLayout } from './'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Fixed Layout Component',
  component: FixedLayout
}

export default storiesInfo

export const Default = (): JSX.Element => <FixedLayout pages="storybook" />
