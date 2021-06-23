/*
  Header Container Component Storybook.
*/

import { HeaderContainer } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Header Container Component',
  component: HeaderContainer
}

export default storiesInfo

export const Default = (): JSX.Element => <HeaderContainer />
