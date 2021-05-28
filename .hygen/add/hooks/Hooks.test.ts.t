---
to: src/hooks/<%= Name %>/<%= Name %>.test.ts
sh: prettier --write 'src/hooks/<%= Name %>/<%= Name %>.test.ts'
---
<%
  camelName = h.changeCase.camel(name)
-%>
/*
  <%= Name %> Hooks Unit Test.
*/

import { renderHook /* , act*/ } from '@testing-library/react-hooks'
import { use<%= Name %> } from './'

beforeAll(() => {})
beforeEach(() => {})

describe('use<%= Name %> Hooks Unit Test', () => {
  test('TBD', () => {
    const { result } = renderHook(() => use<%= Name %>(
      <% if (hooksFnArgNumber > 0) { -%>
        <% Array.from({ length: hooksFnArgNumber }, (_info, index) => { -%>
          <%= `${h.changeCase.camel(hooksFnArgDetails[index][`hooksFnArgName${index + 1}`])},` %>
        <% }) -%>
      <% } %>
    ))
    expect(result.current)
  })
})

afterEach(() => {})
afterAll(() => {})
