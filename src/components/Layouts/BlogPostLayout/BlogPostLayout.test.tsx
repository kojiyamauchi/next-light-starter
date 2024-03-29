/*
  Blog Post Layout Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { BlogPostLayout } from './'
// import userEvent from '@testing-library/user-event'

describe('Blog Post Layout Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<BlogPostLayout pages="ui-test" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
