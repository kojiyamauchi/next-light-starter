/*
  Blog Post Content Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { BlogPostContent } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Blog Post Content Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<BlogPostContent content="<div>Snap Shot Test.</div>" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
