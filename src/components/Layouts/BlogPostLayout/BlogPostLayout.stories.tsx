/*
  Blog Post Layout Component Storybook.
*/

import { BlogPostLayout } from './'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Blog Post Layout Component',
  component: BlogPostLayout
}

export default storiesInfo

export const Default = (): JSX.Element => <BlogPostLayout pages="storybook" />
