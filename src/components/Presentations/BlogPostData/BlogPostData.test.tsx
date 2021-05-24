/*
  Blog Post Data Component Unit Test.
*/

import { BlogPostData } from './'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Blog Post Data Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<BlogPostData categories={['category-1', 'category-2']} date="2021/01/01" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
