/*
  Navigation Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { Navigation } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Foo Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<Navigation />)
    expect(asFragment()).toMatchSnapshot()
  })
})
