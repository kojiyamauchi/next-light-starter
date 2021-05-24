---
to: "src/components/<%= chooseOutPutDir === 'Layouts' ? `${chooseOutPutDir}/${Name}Layout/index.tsx` : chooseOutPutDir === 'Managements' ? `${chooseOutPutDir}/${Name}Container/index.tsx` : `${chooseOutPutDir}/${Name}/index.tsx` %>"
sh: "prettier --write 'src/components/<%= chooseOutPutDir === 'Layouts' ? `${chooseOutPutDir}/${Name}Layout/index.tsx` : chooseOutPutDir === 'Managements' ? `${chooseOutPutDir}/${Name}Container/index.tsx` : `${chooseOutPutDir}/${Name}/index.tsx` %>'"
---
<%
  camelName = h.changeCase.camel(name)
-%>
<% if (chooseOutPutDir === 'Layouts') { %>
/*
  <%= Name %> Layout Component.
*/

import { PageProps } from '@/types/type'
<% if (useStyleModule) { -%>
import styles from './style.module.scss'
<% } -%>

type Props = {
  pages: PageProps['pages']
}

export const <%= Name %>Layout: React.FC<Props> = ({ pages, children }): JSX.Element => {
  return (
    <div className={`${pages} layout <%= camelName %>-layout<%- useStyleModule ? " ${styles['wrapper']}" : '' %>`}>
      <main>{children}</main>
    </div>
  )
}
<% } else { %>
<%
  componentName = chooseOutPutDir === 'Managements' ? `${Name}Container` : Name
%>
/*
  <%= Name %><%= chooseOutPutDir === 'Managements' ? ' Container ' : ' ' %>Component.
*/

<%- useHooks ? `import { use${h.changeCase.pascal(addHooksFnName)} } from './Hooks'` : '' %>
<% if (useStyleModule) { -%>
import styles from './style.module.scss'
<% } -%>

<% if (addPropsNumber > 0) { -%>
type Props = {
  <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
    <%= h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`]) %>: <%= h.changeCase.camel(addPropsDetails[index][`addPropsType${index + 1}`]) %>
  <% }) %>
}
<% } %>

export const <%= componentName %>: React.<%= chooseComponentTypes === 'Function Component' ? 'FC' : 'VFC' %><%- addPropsNumber > 0 ? '<Props>' : '' %> = (<%= addPropsNumber > 0 || chooseComponentTypes === 'Function Component' ? '{' : '' %>
  <% if (addPropsNumber > 0) { -%>
    <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
      <%= `${h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`])},` %>
    <% }) -%>
  <% } -%>
  <%= chooseComponentTypes === 'Function Component' ? 'children' : '' -%>
  <%= addPropsNumber > 0 || chooseComponentTypes === 'Function Component' ? '}' : '' %>): JSX.Element => {
  <% if (useHooks) { %>
  const {
    <% if (addHooksTypeAlias) { -%>
      <% Array.from({ length: addHooksTypeNumber }, (_info, index) => { -%>
        <%= `${h.changeCase.camel(addHooksTypeDetails[index][`addHooksTypeKey${index + 1}`])},` -%>
      <% }) -%>
  <% } else { -%>
  undefined
  <% } -%>
  } = use<%= h.changeCase.pascal(addHooksFnName) %>()
  <% } %>
  return (
    <<%= wrapperTags %><%=  useStyleModule ? ' className={styles.wrapper}' : '' %>>
    <% if (addPropsNumber > 0) { -%>
      <% Array.from({ length: addPropsNumber }, (_info, index) => { -%>
        <%= `{${h.changeCase.camel(addPropsDetails[index][`addPropsName${index + 1}`])}}` %>
      <% }) -%>
    <% } -%>
    <% if (chooseComponentTypes === 'Function Component') { -%>
      { children }
    <% } %>
    </<%= wrapperTags %>>
  )
}
<% } %>