(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[310],{7737:function(t,e,n){"use strict";n.d(e,{E:function(){return m}});var i=n(2809),o=n(5893);function a(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var r=n(7294),c=n(1163),s=n(9449),l=n.n(s);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=function(t){var e=t.image,n=t.extension,i=t.alt,s=function(t,e){var n=window.matchMedia("(min-width: 768px)"),i=(0,r.useState)(!0),o=i[0],a=i[1],c=(0,r.useState)(n&&n.matches),s=c[0],l=c[1];return(0,r.useEffect)((function(){a(!1);var t=function(t){return l(t.matches)};if(n)return n.addEventListener("change",t),function(){return n.removeEventListener("change",t)}}),[n]),{firstRender:o,matches:s,path:"webp"===t?"webps":"images",stylesProps:function(t){return o?{display:"none"}:{display:"block",width:t?e.desktopWidth||"100%":e.mobileWidth||"100%",minWidth:t?e.desktopMinWidth||"none":e.mobileMinWidth||"none",maxWidth:t?e.desktopMaxWidth||"none":e.mobileMaxWidth||"none",height:t?e.desktopHeight||"auto":e.mobileHeight||"auto",minHeight:t?e.desktopHeight||"none":e.mobileHeight||"none",maxHeight:t?e.desktopMaxHeight||"none":e.mobileMaxHeight||"none",margin:e.margin?e.margin:t?e.desktopMargin||"0 auto":e.mobileMargin||"0 auto"}}}}(n,a(t,["image","extension","alt"])),p=s.firstRender,m=s.matches,u=s.path,h=s.stylesProps,d=(0,c.useRouter)();return(0,o.jsx)(o.Fragment,{children:p?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("img",{src:"".concat(d?"".concat(d.basePath,"/"):"","images/loading.svg"),alt:"Loading..."})}):(0,o.jsx)("img",{className:"".concat(l().image," generic-image"),src:"".concat(d?"".concat(d.basePath,"/"):"").concat(u,"/").concat(e,".").concat(n),alt:i,loading:"lazy",style:g({},h(m))})})}},4547:function(t,e,n){"use strict";n.d(e,{H:function(){return u}});var i=n(5893),o=n(9008),a=n(1163),r="Next.js Light Starter",c="This is Light Next.js Starter",s="https://kojiyamauchi.github.io/next-light-starter",l="Next.js Light Starter",p="Next.js Light Starter",g="This is Light Next.js Starter.",m="ogp_image.jpg",u=function(t){var e=(0,a.useRouter)(),n={title:t.title?"".concat(t.title," | ").concat(r):r,description:t.description?"".concat(c," and ").concat(t.description):c,location:t.locationPath?"".concat(s).concat(t.locationPath):s,ogpSiteName:t.ogpSiteName||l,ogpTitle:t.ogpTitle?"".concat(t.ogpTitle," | ").concat(p):p,ogpDescription:t.ogpDescription||g,ogpImage:t.ogpImage||m};return(0,i.jsxs)(o.default,{children:[(0,i.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,i.jsx)("meta",{httpEquiv:"content-language",content:"ja"},"content-language"),(0,i.jsx)("title",{children:n.title},"title"),(0,i.jsx)("meta",{name:"title",content:n.title},"meta-title"),(0,i.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"},"X-UA-Compatible"),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"viewport"),(0,i.jsx)("meta",{name:"description",content:n.description},"description"),(0,i.jsx)("meta",{property:"og:type",content:"website"},"ogp-type"),(0,i.jsx)("meta",{property:"og:url",content:n.location},"ogp-url"),(0,i.jsx)("meta",{property:"og:site_name",content:n.ogpSiteName},"ogp-site-name"),(0,i.jsx)("meta",{property:"og:title",content:n.ogpTitle},"ogp-title"),(0,i.jsx)("meta",{property:"og:description",content:n.ogpDescription},"ogp-description"),(0,i.jsx)("meta",{property:"og:image",content:"".concat(e.basePath,"/images/").concat(n.ogpImage)},"ogp-image"),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter-card"),(0,i.jsx)("meta",{name:"twitter:title",content:n.title},"twitter-title"),(0,i.jsx)("meta",{name:"twitter:description",content:n.description},"twitter-description"),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(e.basePath,"/favicons/apple-touch-icon.png")},"apple-touch-icon"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(e.basePath,"/favicons/favicon-32x32.png")},"l-favicon"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(e.basePath,"/favicons/favicon-16x16.png")},"s-favicon"),(0,i.jsx)("link",{rel:"manifest",href:"".concat(e.basePath,"/site.webmanifest")},"manifest"),(0,i.jsx)("link",{rel:"mask-icon",href:"".concat(e.basePath,"/favicons/safari-pinned-tab.svg"),color:"#5bbad5"},"mask-icon"),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"},"msapplication-tile-color"),(0,i.jsx)("meta",{name:"theme-color",content:"#ffffff"},"theme-color"),(0,i.jsx)("link",{rel:"canonical",href:n.location},"canonical")]})}},4051:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return f},default:function(){return j}});var i=n(5893),o=n(1163),a=n(4547),r=n(1232),c=n.n(r),s=function(t){var e=t.content;return(0,i.jsx)("div",{className:c().wrapper,dangerouslySetInnerHTML:{__html:e}})},l=n(1664),p=n(381),g=n.n(p),m=function(t){var e=t.categories,n=t.date;return(0,i.jsxs)("ul",{className:g().wrapper,children:[(0,i.jsx)("li",{className:g().category,children:null===e||void 0===e?void 0:e.map((function(t,e){return(0,i.jsx)(l.default,{href:"/blog-category/".concat(t,"/"),children:(0,i.jsxs)("a",{className:g()["category-link"],children:[t,"."]})},e)}))}),(0,i.jsx)("li",{className:g().date,children:n})]})},u=n(4264),h=n.n(u),d=function(t){var e=t.prev,n=t.next,o=t.storybook;return(0,i.jsxs)("ul",{className:"".concat(h().wrapper," ").concat(o?h()["is-storybook"]:""),children:[e&&(0,i.jsx)("li",{className:h().prev,children:(0,i.jsx)(l.default,{href:"/blog-post/".concat(e,"/"),children:(0,i.jsx)("a",{rel:"prev",className:h()["prev-link"],children:"New Post."})})}),n&&(0,i.jsx)("li",{className:h().next,children:(0,i.jsx)(l.default,{href:"/blog-post/".concat(n,"/"),children:(0,i.jsx)("a",{rel:"prev",className:h()["next-link"],children:"Old Post."})})})]})},x=n(7737),f=!0,j=function(t){var e=t.post,n=t.prev,r=t.next,c=(0,o.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.H,{title:e.title,description:e.description,locationPath:c.asPath}),(0,i.jsx)(s,{content:e.content}),(0,i.jsx)(m,{categories:e.categories,date:e.date}),(0,i.jsx)(x.E,{image:e.image,extension:"webp",alt:e.image,mobileMaxWidth:"300px",desktopMaxWidth:"400px",margin:"0 0 20px 0"}),(0,i.jsx)(d,{prev:n,next:r})]})}},7515:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-post/[slug]",function(){return n(4051)}])},1232:function(t){t.exports={wrapper:"style_wrapper__1dMbe"}},381:function(t){t.exports={wrapper:"style_wrapper__1p2a_",category:"style_category__A1n63","category-link":"style_category-link__28bFf",date:"style_date__2emUz"}},4264:function(t){t.exports={wrapper:"style_wrapper__q1wbB","is-storybook":"style_is-storybook__3orFc",prev:"style_prev__1dhXH","prev-link":"style_prev-link__2sAJB",next:"style_next__3kt5D","next-link":"style_next-link__6W2oR"}},9449:function(t){t.exports={image:"style_image__2S1P2"}},9008:function(t,e,n){t.exports=n(639)}},function(t){t.O(0,[774,888,179],(function(){return e=7515,t(t.s=e);var e}));var e=t.O();_N_E=e}]);