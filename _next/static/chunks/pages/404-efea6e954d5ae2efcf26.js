_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,i=void 0!==o&&o;return n||r&&i}},"2XIS":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("nKUr"),r=n("QZZ9"),o=n.n(r),i=function(e){var t=e.letter;return Object(a.jsx)("div",{className:o.a.wrapper,children:Object(a.jsxs)("h2",{className:"".concat(o.a["secondary-heading"]," page-heading"),children:["This is ",t," Page."]})})}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var u=d[c];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var p=r.props[u],l=a[u]||new Set;l.has(p)?o=!1:(l.add(p),a[u]=l)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},QZZ9:function(e,t,n){e.exports={wrapper:"style_wrapper__2xcQN","secondary-heading":"style_secondary-heading__2jsHm"}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var p=n("q1tI"),l=function(e){i(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=l},hizP:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("nKUr"),r=n("8Kt/"),o=n.n(r),i=n("nOHt"),c="Next.js My Starter",s="This is My Next.js Starter",u="https://kojiyamauchi.github.io/next-light-starter",p="Next.js My Starter",l="Next.js My Starter",d="This is My Next.js Starter.",f="ogp_image.jpg",h=function(e){var t=Object(i.useRouter)(),n={title:e.title?"".concat(e.title," | ").concat(c):c,description:e.description?"".concat(s," and ").concat(e.description):s,location:e.locationPath?"".concat(u).concat(e.locationPath):u,ogpSiteName:e.ogpSiteName||p,ogpTitle:e.ogpTitle?"".concat(e.ogpTitle," | ").concat(l):l,ogpDescription:e.ogpDescription||d,ogpImage:e.ogpImage||f};return Object(a.jsxs)(o.a,{children:[Object(a.jsx)("meta",{charSet:"UTF-8"},"charset"),Object(a.jsx)("meta",{httpEquiv:"content-language",content:"ja"},"content-language"),Object(a.jsx)("title",{children:n.title},"title"),Object(a.jsx)("meta",{name:"title",content:n.title},"meta-title"),Object(a.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"},"X-UA-Compatible"),Object(a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"viewport"),Object(a.jsx)("meta",{name:"description",content:n.description},"description"),Object(a.jsx)("meta",{property:"og:type",content:"website"},"ogp-type"),Object(a.jsx)("meta",{property:"og:url",content:n.location},"ogp-url"),Object(a.jsx)("meta",{property:"og:site_name",content:n.ogpSiteName},"ogp-site-name"),Object(a.jsx)("meta",{property:"og:title",content:n.ogpTitle},"ogp-title"),Object(a.jsx)("meta",{property:"og:description",content:n.ogpDescription},"ogp-description"),Object(a.jsx)("meta",{property:"og:image",content:n.ogpImage},"ogp-image"),Object(a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter-card"),Object(a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(t.basePath,"/favicons/apple-touch-icon.png")},"apple-touch-icon"),Object(a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicons/favicon-32x32.png")},"l-favicon"),Object(a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicons/favicon-16x16.png")},"s-favicon"),Object(a.jsx)("link",{rel:"manifest",href:"".concat(t.basePath,"/site.webmanifest")},"manifest"),Object(a.jsx)("link",{rel:"mask-icon",href:"".concat(t.basePath,"/favicons/safari-pinned-tab.svg"),color:"#5bbad5"},"mask-icon"),Object(a.jsx)("link",{rel:"canonical",href:n.location},"canonical"),Object(a.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"},"msapplication-tile-color"),Object(a.jsx)("meta",{name:"theme-color",content:"#ffffff"},"theme-color")]})}},"i6+/":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return c}));var a=n("nKUr"),r=n("nOHt"),o=n("hizP"),i=n("2XIS"),c=!0;t.default=function(){var e=Object(r.useRouter)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o.a,{title:"404 Page",description:"This is 404 Page",locationPath:e.asPath}),Object(a.jsx)("main",{className:"main",children:Object(a.jsx)(i.a,{letter:"404 - Page Not Found"})})]})}},i67r:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n("i6+/")}])},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r}},[["i67r",0,2,1]]]);