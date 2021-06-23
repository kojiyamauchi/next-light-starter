/*
  Blog List Data Component Storybook.
*/

import { BlogListData } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Blog List Data Component',
  component: BlogListData
}

export default storiesInfo

export const Default = (): JSX.Element => <BlogListData title="Storybook Post." date="2021/01/01" />
