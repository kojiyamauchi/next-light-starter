/*
  Blog List Pager Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { BlogListPager } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Blog List Pager Component Unit Test', () => {
  it('Snap Shot Testing All Post', () => {
    const { asFragment } = render(<BlogListPager pageIndex={2} isFirst={false} isLast={false} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('Snap Shot Testing Category Post', () => {
    const { asFragment } = render(<BlogListPager category="snap-shot-unit-test" pageIndex={3} isFirst={false} isLast={false} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
