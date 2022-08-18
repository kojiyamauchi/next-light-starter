/*
  Footer Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { Footer } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Footer Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
