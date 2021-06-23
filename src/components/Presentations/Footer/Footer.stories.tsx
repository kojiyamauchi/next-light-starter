/*
  Footer Component Storybook.
*/

import { Footer } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Footer Component',
  component: Footer
}

export default storiesInfo

export const Default = (): JSX.Element => <Footer />
