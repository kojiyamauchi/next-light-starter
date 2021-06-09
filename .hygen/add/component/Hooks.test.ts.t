---
to: "<%= chooseOutPutDir === 'Layouts' ? null : !useHooks ? null : chooseOutPutDir === 'Managements' ? `src/components/${chooseOutPutDir}/${Name}Container/Hooks.test.ts` : `src/components/${chooseOutPutDir}/${Name}/Hooks.test.ts` %>"
sh: "<%= chooseOutPutDir === 'Layouts' ? null : !useHooks ? null : chooseOutPutDir === 'Managements' ? `prettier --write src/components/${chooseOutPutDir}/${Name}Container/Hooks.test.ts` : `prettier --write src/components/${chooseOutPutDir}/${Name}/Hooks.test.ts` %>"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<% if (chooseOutPutDir !== 'Layouts' && useHooks) { -%>
/*
  <%= Name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') %><%= chooseOutPutDir === 'Managements' ? ' Container ' : ' ' %>Private Hooks Unit Test.
*/

import { renderHook /* , act*/ } from '@testing-library/react-hooks'
import { use<%= h.changeCase.pascal(addHooksFnName) %> } from './Hooks'

beforeAll(() => {})
beforeEach(() => {})

describe('use<%= h.changeCase.pascal(addHooksFnName) %> Hooks Unit Test', () => {
  it('TBD', () => {
    const { result } = renderHook(() => use<%= h.changeCase.pascal(addHooksFnName) %>(
      <% if (addHooksFnArgNumber > 0) { -%>
        <% Array.from({ length: addHooksFnArgNumber }, (_info, index) => { -%>
          <%= `${h.changeCase.camel(addHooksFnArgDetails[index][`addHooksFnArgName${index + 1}`])},` %>
        <% }) -%>
      <% } %>
    ))
    expect(result.current)
  })
})

afterEach(() => {})
afterAll(() => {})
<% } -%>