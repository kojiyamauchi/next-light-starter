_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"1aYi":function(e,t,r){e.exports={wrapper:"style_wrapper__3Ec1Q",link:"style_link__36i03"}},"3nfX":function(e,t,r){},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("hUgY")}])},NsMD:function(e,t,r){e.exports={wrapper:"style_wrapper__2y3ls",link:"style_link__US7rt"}},XwqF:function(e,t,r){e.exports={wrapper:"style_wrapper__1Z71G"}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var o=a(r("q1tI")),c=r("elyg"),i=r("nOHt"),l=r("vNVm"),s={};function u(e,t,r,n){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,i.useRouter)(),a=r&&r.pathname||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],i=r[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),p=f.href,d=f.as,v=e.children,h=e.replace,b=e.shallow,g=e.scroll,j=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=o.Children.only(v),O=y&&"object"===typeof y&&y.ref,_=(0,l.useIntersection)({rootMargin:"200px"}),m=n(_,2),w=m[0],x=m[1],P=o.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);(0,o.useEffect)((function(){var e=x&&t&&(0,c.isLocalURL)(p),n="undefined"!==typeof j?j:r&&r.locale,a=s[p+"%"+d+(n?"%"+n:"")];e&&!a&&u(r,p,d,{locale:n})}),[d,p,x,j,t,r]);var N={ref:P,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:l,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,r,p,d,h,b,g,j)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(r,p,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var E="undefined"!==typeof j?j:r&&r.locale,k=(0,c.getDomainLocale)(d,E,r&&r.locales,r&&r.domainLocales);N.href=k||(0,c.addBasePath)((0,c.addLocale)(d,E,r&&r.defaultLocale))}return o.default.cloneElement(y,N)};t.default=f},hUgY:function(e,t,r){"use strict";r.r(t);var n=r("rePB"),a=r("nKUr"),o=r("YFqc"),c=r.n(o),i=r("mjiz"),l=r.n(i),s=function(){return Object(a.jsx)("div",{className:l.a.wrapper,children:Object(a.jsx)("h1",{className:l.a["primary-heading"],children:"Next.js light Starter"})})},u=r("XwqF"),f=r.n(u),p=function(e){var t=e.pagenavigation;return Object(a.jsx)("div",{className:f.a.wrapper,children:t})},d=r("1aYi"),v=r.n(d),h=function(){var e=[{path:"/",letter:"Primary Page",id:1},{path:"/secondary-page",letter:"Secondary Page",id:2},{path:"/third-page",letter:"Third Page",id:3},{path:"/blog-list",letter:"Blog Page",id:4}];return Object(a.jsxs)("div",{className:v.a.wrapper,children:[Object(a.jsx)(s,{}),Object(a.jsx)(p,{pagenavigation:e.map((function(e){return Object(a.jsx)(c.a,{href:"".concat(e.path),children:Object(a.jsx)("a",{className:v.a.link,children:e.letter})},e.id)}))})]})},b=r("NsMD"),g=r.n(b),j=function(){return Object(a.jsx)("div",{className:g.a.wrapper,children:Object(a.jsxs)("a",{href:"http://kojiyamauchi.com",target:"_blank",rel:"noreferrer",className:g.a.link,children:["\xa9 ",(new Date).getFullYear()," All The Small Things, All Rights Reserved."]})})},y=function(e){var t=e.pageProps,r=e.children;return null!==t&&void 0!==t&&t.fixedLayout?Object(a.jsxs)("div",{className:"".concat(null===t||void 0===t?void 0:t.pages," layout fixed-layout"),children:[Object(a.jsx)(h,{}),r,Object(a.jsx)(j,{})]}):Object(a.jsx)("div",{className:"".concat(null===t||void 0===t?void 0:t.pages," layout fluid-layout"),children:r})};r("3nfX");function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return Object(a.jsx)(y,{pageProps:r,children:Object(a.jsx)(t,_({},r))})}},mjiz:function(e,t,r){e.exports={wrapper:"style_wrapper__3lYpc","primary-heading":"style_primary-heading__1odk2"}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},vNVm:function(e,t,r){"use strict";var n=r("J4zp"),a=r("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,a=(0,o.useRef)(),s=(0,o.useState)(!1),u=n(s,2),f=u[0],p=u[1],d=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),r||f||e&&e.tagName&&(a.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,c=n.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){i||f||(0,c.default)((function(){return p(!0)}))}),[f]),[d,f]};var o=r("q1tI"),c=a(r("0G5g")),i="undefined"!==typeof IntersectionObserver;var l=new Map}},[[0,0,2,1]]]);