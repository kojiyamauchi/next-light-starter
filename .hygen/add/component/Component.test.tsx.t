---
to: "src/components/<%= chooseOutPutDir === 'Layouts' ? `${chooseOutPutDir}/${Name}Layout/${Name}Layout.test.tsx` : chooseOutPutDir === 'Managements' ? `${chooseOutPutDir}/${Name}Container/${Name}Container.test.tsx` : `${chooseOutPutDir}/${Name}/${Name}.test.tsx` %>"
sh: "prettier --write 'src/components/<%= chooseOutPutDir === 'Layouts' ? `${chooseOutPutDir}/${Name}Layout/${Name}Layout.test.tsx` : chooseOutPutDir === 'Managements' ? `${chooseOutPutDir}/${Name}Container/${Name}Container.test.tsx` : `${chooseOutPutDir}/${Name}/${Name}.test.tsx` %>'"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<%
  componentName = chooseOutPutDir === 'Layouts' ? `${Name}Layout` : chooseOutPutDir === 'Managements' ? `${Name}Container` : Name
%>
/*
  <%= Name %><%= chooseOutPutDir === 'Layouts' ? ' Layout ' : chooseOutPutDir === 'Managements' ? ' Container ' : ' ' %>Component Unit Test.
*/

import { <%= componentName %> } from './'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

<% if (chooseOutPutDir === 'Layouts') { %>
describe('<%= Name %> Layout Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render( <<%= componentName %> pages="ui-test" /> )
    expect(asFragment()).toMatchSnapshot()
  })
})
<% } else { %>
describe('<%= Name %><%= chooseOutPutDir === 'Managements' ? ' Container ' : ' ' %>Component Unit Test', () => {
  it('Snap Shot Testing', () => {
      const { asFragment } = render(<<%= componentName %> 
      <% if (addPropsNumber > 0) { -%>
        <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
          <%= h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`]) %>=<%- h.changeCase.camel(addPropsDetails[index][`addPropsType${index + 1}`]) === 'boolean' ? '{false} ' : h.changeCase.camel(addPropsDetails[index][`addPropsType${index + 1}`]) === 'number' ? '{0} ' : h.changeCase.camel(addPropsDetails[index][`addPropsType${index + 1}`]) === 'string' ? '"" ' : h.changeCase.camel(addPropsDetails[index][`addPropsType${index + 1}`]) === 'undefined' ? '{undefined} ' : h.changeCase.camel(addPropsDetails[index][`addPropsType${index + 1}`]) === 'null' ? '{null} ' : '{} ' %>
        <% }) -%>
      <% } -%>/>)
    expect(asFragment()).toMatchSnapshot()
  })
})
<% } %>