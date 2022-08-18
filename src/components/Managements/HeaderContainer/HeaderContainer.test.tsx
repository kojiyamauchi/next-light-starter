/*
  Header Container Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { HeaderContainer } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Header Container Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<HeaderContainer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
