/*
  Blog Post Pager Component Unit Test.
*/

import { BlogPostPager } from './'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Blog Post Pager Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<BlogPostPager prev="2" next="3" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
