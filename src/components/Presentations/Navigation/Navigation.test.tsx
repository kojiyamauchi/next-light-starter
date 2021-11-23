/**
 * @jest-environment jsdom
 */
/*
  Navigation Component Unit Test.
*/

import { Navigation } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Foo Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<Navigation />)
    expect(asFragment()).toMatchSnapshot()
  })
})
