/*
  Blog Post Pager Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { BlogPostPager } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Blog Post Pager Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<BlogPostPager prev="2" next="3" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
