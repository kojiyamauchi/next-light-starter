/*
  Blog List Layout Component Storybook.
*/

import { BlogListLayout } from './'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Blog List Layout Component',
  component: BlogListLayout
}

export const Default = (): JSX.Element => <BlogListLayout pages="storybook" />
