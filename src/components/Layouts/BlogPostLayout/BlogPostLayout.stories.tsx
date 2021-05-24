/*
  Blog Post Layout Component Storybook.
*/

import { BlogPostLayout } from './'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Blog Post Layout Component',
  component: BlogPostLayout
}

export const Default = (): JSX.Element => <BlogPostLayout pages="storybook" />
