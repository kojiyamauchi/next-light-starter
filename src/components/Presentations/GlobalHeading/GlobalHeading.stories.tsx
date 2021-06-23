/*
  Global Heading Component Storybook.
*/

import { GlobalHeading } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Global Heading Component',
  component: GlobalHeading
}

export default storiesInfo

export const Default = (): JSX.Element => <GlobalHeading />
