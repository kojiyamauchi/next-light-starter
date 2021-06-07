/*
  Blog List Heading Component Storybook.
*/

import { BlogListHeading } from './Component'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Blog List Heading Component',
  component: BlogListHeading
}

export const AllPost = (): JSX.Element => <BlogListHeading branches="all" allPostIndex={999} storybook={true} />
export const CategoryPost = (): JSX.Element => <BlogListHeading branches="category" categorySlug="Storybook" categoryListIndex={999} storybook={true} />
