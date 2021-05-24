/*
  Blog Post Content Component Storybook.
*/

import { BlogPostContent } from './'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Blog Post Content Component',
  component: BlogPostContent
}

export const Default = (): JSX.Element => (
  <BlogPostContent
    content={`<h1>😎 Storybook 🎨</h1>
<p>🎧 Storybook 🐬</p>`}
  />
)
