/*
  Blog List Layout Component Storybook.
*/

import { BlogListLayout } from './'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Blog List Layout Component',
  component: BlogListLayout
}

export default storiesInfo

export const Default = (): JSX.Element => <BlogListLayout pages="storybook" />
