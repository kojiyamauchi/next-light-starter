/*
  Blog Post Pager Component Storybook.
*/

import { BlogPostPager } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Blog Post Pager Component',
  component: BlogPostPager
}

export default storiesInfo

export const Default = (): JSX.Element => <BlogPostPager prev="1" next="2" storybook={true} />
