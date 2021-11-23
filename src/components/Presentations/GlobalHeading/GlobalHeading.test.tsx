/**
 * @jest-environment jsdom
 */
/*
  Global Heading Component Unit Test.
*/

import { GlobalHeading } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Global Heading Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<GlobalHeading />)
    expect(asFragment()).toMatchSnapshot()
  })
})
