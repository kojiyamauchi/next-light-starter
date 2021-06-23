/*
  Blog List Pager Component Storybook.
*/

import { BlogListPager } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Blog List Pager Component',
  component: BlogListPager
}

export default storiesInfo

export const AllList = (): JSX.Element => <BlogListPager pageIndex={2} isFirst={false} isLast={false} storybook={true} />
export const CategoryList = (): JSX.Element => <BlogListPager category="Storybook" pageIndex={2} isFirst={false} isLast={false} storybook={true} />
