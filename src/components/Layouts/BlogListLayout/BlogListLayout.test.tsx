/*
  Blog List Layout Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { BlogListLayout } from './'
// import userEvent from '@testing-library/user-event'

describe('Blog List Layout Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<BlogListLayout pages="ui-test" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
