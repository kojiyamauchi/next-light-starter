(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{3398:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=a},6393:function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3398);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery,i=void 0!==o&&o;return n||a&&i}},2775:function(t,e,n){"use strict";var r=n(1682);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.__esModule=!0,e.defaultHead=f,e.default=void 0;var o,i=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=l();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=r?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n(7294)),c=(o=n(3244))&&o.__esModule?o:{default:o},s=n(3398),u=n(1165),p=n(6393);function l(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return l=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[i.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===i.default.Fragment?t.concat(i.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var h=["name","httpEquiv","charSet","itemProp"];function m(t,e){return t.reduce((function(t,e){var n=i.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);t.has(c)?o=!1:t.add(c)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var p=h[s];if(a.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?o=!1:n.add(p);else{var l=a.props[p],f=r[p]||new Set;"name"===p&&i||!f.has(l)?(f.add(l),r[p]=f):o=!1}}}return o}}()).reverse().map((function(t,n){var o=t.key||n;if(!e.inAmpMode&&"link"===t.type&&t.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(e){return t.props.href.startsWith(e)}))){var c=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(t,c)}return i.default.cloneElement(t,{key:o})}))}var g=function(t){var e=t.children,n=(0,i.useContext)(s.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,p.isInAmpMode)(n)},e)};e.default=g},3244:function(t,e,n){"use strict";var r=n(3115),a=n(2553),o=n(2012),i=(n(450),n(9807)),c=n(7690),s=n(9828);function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}e.__esModule=!0,e.default=void 0;var p=n(7294),l=function(t){i(n,t);var e=u(n);function n(t){var o;return a(this,n),(o=e.call(this,t))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);e.default=l},7865:function(t,e,n){"use strict";n.d(e,{C:function(){return i}});var r=n(5893),a=n(8287),o=n.n(a),i=function(t){var e=t.letter,n=t.translation;return(0,r.jsxs)("h2",{className:"".concat(o()["secondary-heading"]," page-heading ").concat(n?o()["is-translation"]:""),children:["This is ",e," Page."]})}},4547:function(t,e,n){"use strict";n.d(e,{H:function(){return d}});var r=n(5893),a=n(9008),o=n(1163),i="Next.js Light Starter",c="This is Light Next.js Starter",s="https://kojiyamauchi.github.io/next-light-starter",u="Next.js Light Starter",p="Next.js Light Starter",l="This is Light Next.js Starter.",f="ogp_image.jpg",d=function(t){var e=(0,o.useRouter)(),n={title:t.title?"".concat(t.title," | ").concat(i):i,description:t.description?"".concat(c," and ").concat(t.description):c,location:t.locationPath?"".concat(s).concat(t.locationPath):s,ogpSiteName:t.ogpSiteName||u,ogpTitle:t.ogpTitle?"".concat(t.ogpTitle," | ").concat(p):p,ogpDescription:t.ogpDescription||l,ogpImage:t.ogpImage||f};return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,r.jsx)("meta",{httpEquiv:"content-language",content:"ja"},"content-language"),(0,r.jsx)("title",{children:n.title},"title"),(0,r.jsx)("meta",{name:"title",content:n.title},"meta-title"),(0,r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"},"X-UA-Compatible"),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"viewport"),(0,r.jsx)("meta",{name:"description",content:n.description},"description"),(0,r.jsx)("meta",{property:"og:type",content:"website"},"ogp-type"),(0,r.jsx)("meta",{property:"og:url",content:n.location},"ogp-url"),(0,r.jsx)("meta",{property:"og:site_name",content:n.ogpSiteName},"ogp-site-name"),(0,r.jsx)("meta",{property:"og:title",content:n.ogpTitle},"ogp-title"),(0,r.jsx)("meta",{property:"og:description",content:n.ogpDescription},"ogp-description"),(0,r.jsx)("meta",{property:"og:image",content:"".concat(e.basePath,"/images/").concat(n.ogpImage)},"ogp-image"),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter-card"),(0,r.jsx)("meta",{name:"twitter:title",content:n.title},"twitter-title"),(0,r.jsx)("meta",{name:"twitter:description",content:n.description},"twitter-description"),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(e.basePath,"/favicons/apple-touch-icon.png")},"apple-touch-icon"),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(e.basePath,"/favicons/favicon-32x32.png")},"l-favicon"),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(e.basePath,"/favicons/favicon-16x16.png")},"s-favicon"),(0,r.jsx)("link",{rel:"manifest",href:"".concat(e.basePath,"/site.webmanifest")},"manifest"),(0,r.jsx)("link",{rel:"mask-icon",href:"".concat(e.basePath,"/favicons/safari-pinned-tab.svg"),color:"#5bbad5"},"mask-icon"),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"},"msapplication-tile-color"),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"},"theme-color"),(0,r.jsx)("link",{rel:"canonical",href:n.location},"canonical")]})}},8388:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return c}});var r=n(5893),a=n(1163),o=n(4547),i=n(7865),c=!0;e.default=function(){var t=(0,a.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.H,{title:"Secondary Page",description:"This is Secondary Page",locationPath:t.asPath}),(0,r.jsx)(i.C,{letter:"Secondary",translation:!0})]})}},3704:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/secondary",function(){return n(8388)}])},8287:function(t){t.exports={"secondary-heading":"style_secondary-heading__2jsHm","is-translation":"style_is-translation__1EljB"}},9008:function(t,e,n){t.exports=n(2775)},8164:function(t,e,n){var r=n(4360);t.exports=function(t){if(Array.isArray(t))return r(t)}},1682:function(t){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},7381:function(t){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},5725:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(t,e,n){var r=n(8164),a=n(7381),o=n(3585),i=n(5725);t.exports=function(t){return r(t)||a(t)||o(t)||i()}},1163:function(t,e,n){t.exports=n(4651)}},function(t){t.O(0,[774,888,179],(function(){return e=3704,t(t.s=e);var e}));var e=t.O();_N_E=e}]);