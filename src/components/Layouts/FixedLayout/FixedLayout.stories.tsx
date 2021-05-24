/*
  Fixed Layout Component Storybook.
*/

import { FixedLayout } from './'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Fixed Layout Component',
  component: FixedLayout
}

export const Default = (): JSX.Element => <FixedLayout pages="storybook" />
