/*
  Navigation Component Storybook.
*/

import { Navigation } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Navigation Component',
  component: Navigation
}

export default storiesInfo

export const Default = (): JSX.Element => <Navigation />
