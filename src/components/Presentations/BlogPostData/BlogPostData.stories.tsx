/*
  Blog Post Data Component Storybook.
*/

import { BlogPostData } from './'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Blog Post Data Component',
  component: BlogPostData
}

export const Default = (): JSX.Element => <BlogPostData categories={['🛹', '🎧', '🌭']} date="2021/01/01" />
