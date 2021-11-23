/**
 * @jest-environment jsdom
 */
/*
  Blog Post Content Component Unit Test.
*/

import { BlogPostContent } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Blog Post Content Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<BlogPostContent content="<div>Snap Shot Test.</div>" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
