/*
  Page Heading Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { PageHeading } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Page Heading Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(<PageHeading letter="Snap Shot Test" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
