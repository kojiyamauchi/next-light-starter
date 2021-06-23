/*
  Blog Post Data Component Storybook.
*/

import { BlogPostData } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Blog Post Data Component',
  component: BlogPostData
}

export default storiesInfo

export const Default = (): JSX.Element => <BlogPostData categories={['🛹', '🎧', '🌭']} date="2021/01/01" />
