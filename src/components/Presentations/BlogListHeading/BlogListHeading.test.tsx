/**
 * @jest-environment jsdom
 */
/*
  Blog List Heading Component Unit Test.
*/

import { BlogListHeading } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Blog List Heading Component Unit Test', () => {
  it('Snap Shot Testing Props are All', () => {
    const { asFragment } = render(<BlogListHeading branches="all" allPostIndex={100} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('Snap Shot Testing Props are Category', () => {
    const { asFragment } = render(<BlogListHeading branches="category" categorySlug="Snap Shot Unit Test" categoryListIndex={999} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
