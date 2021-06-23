/*
  Blog Post Content Component Storybook.
*/

import { BlogPostContent } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Blog Post Content Component',
  component: BlogPostContent
}

export default storiesInfo

export const Default = (): JSX.Element => (
  <BlogPostContent
    content={`<h1>😎 Storybook 🎨</h1>
<p>🎧 Storybook 🐬</p>`}
  />
)
