/*
  Blog List Data Component Storybook.
*/

import { BlogListData } from './Component'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Blog List Data Component',
  component: BlogListData
}

export const Default = (): JSX.Element => <BlogListData title="Storybook Post." date="2021/01/01" />
