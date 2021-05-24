---
to: src/hooks/<%= Name %>/index.ts
sh: prettier --write 'src/hooks/<%= Name %>/index.ts'
---
<%
  camelName = h.changeCase.camel(name)
-%>
/*
  <%= Name %> Hooks.
*/

<% if (reactHooks.length > 0) { -%>
  import {<% reactHooks.forEach((info, index) => { -%>
    <%= index === 0 ? info : `,${info}` -%>
  <% }) -%>} from 'react'
<% } -%>

<% if (hooksTypeAlias) { -%>
export type hooksReturnType = {
  <% Array.from({ length: hooksTypeNumber }, (_info, index) => { -%>
    <%= h.changeCase.camel(hooksTypeDetails[index][`hooksTypeKey${index + 1}`]) %>: <%= h.changeCase.camel(hooksTypeDetails[index][`hooksTypeDetail${index + 1}`]) %>
  <% }) %>
}
<% } -%>

export const use<%= Name %> = (<%= hooksFnArg %>): <%= hooksTypeAlias ? 'hooksReturnType' : 'undefined' %> => {
  <% if (hooksTypeAlias) { -%>
    return { <% Array.from({ length: hooksTypeNumber }, (_info, index) => { -%>
      <%= `${h.changeCase.camel(hooksTypeDetails[index][`hooksTypeKey${index + 1}`])},` -%>
    <% }) -%>}
  <% } else { -%>
  return undefined
<% } %>
}
