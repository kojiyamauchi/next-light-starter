/*
  Blog Post Pager Component Storybook.
*/

import { BlogPostPager } from './'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Blog Post Pager Component',
  component: BlogPostPager
}

export const Default = (): JSX.Element => <BlogPostPager prev="1" next="2" storybook={true} />
