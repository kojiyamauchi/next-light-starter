/*
  Blog List Data Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { BlogListData } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Blog List Data Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<BlogListData title="Snap Shot Unit Test" date="2021/01/01" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
