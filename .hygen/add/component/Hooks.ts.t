---
to: "<%= chooseOutPutDir === 'Layouts' ? null : !useHooks ? null : chooseOutPutDir === 'Managements' ? `src/components/${chooseOutPutDir}/${Name}Container/Hooks.ts` : `src/components/${chooseOutPutDir}/${Name}/Hooks.ts` %>"
sh: "<%= chooseOutPutDir === 'Layouts' ? null : !useHooks ? null : chooseOutPutDir === 'Managements' ? `prettier --write src/components/${chooseOutPutDir}/${Name}Container/Hooks.ts` : `prettier --write src/components/${chooseOutPutDir}/${Name}/Hooks.ts` %>"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<% if (chooseOutPutDir !== 'Layouts' && useHooks) { -%>
/*
  <%= Name %> Private Hooks.
*/

  <% if (addReactHooks.length > 0) { -%>
    import {<% addReactHooks.forEach((info, index) => { -%>
      <%= index === 0 ? info : `,${info}` -%>
    <% }) -%>} from 'react'
  <% } -%>

  <% if (addHooksTypeAlias) { -%>
  export type hooksReturnType = {
    <% Array.from({ length: addHooksTypeNumber }, (_info, index) => { -%>
      <%= h.changeCase.camel(addHooksTypeDetails[index][`addHooksTypeKey${index + 1}`]) %>: <%= h.changeCase.camel(addHooksTypeDetails[index][`addHooksTypeDetail${index + 1}`]) %>
    <% }) %>
  }
  <% } -%>

  export const use<%= h.changeCase.pascal(addHooksFnName) %> = (<%= addHooksFnArg %>): <%= addHooksTypeAlias ? 'hooksReturnType' : 'undefined' %> => {
  <% if (addHooksTypeAlias) { -%>
      return { <% Array.from({ length: addHooksTypeNumber }, (_info, index) => { -%>
        <%= `${h.changeCase.camel(addHooksTypeDetails[index][`addHooksTypeKey${index + 1}`])},` -%>
      <% }) -%>}
  <% } else { -%>
    return undefined
  <% } %>
  }
<% } -%>