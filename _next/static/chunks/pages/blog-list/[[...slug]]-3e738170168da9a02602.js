_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"IB+c":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return j}));var a=n("nKUr"),s=n("YFqc"),c=n.n(s),r=n("20a2"),l=n("pOKU"),i=n("bOSd"),o=n("WdjJ"),d=n("JPzB"),u=n("hrqv"),j=!0;t.default=function(e){var t=e.numberPostsDisplayed,n=e.totalPage,s=e.posts,j=Object(r.useRouter)(),h=j.query.slug&&"index"!==j.query.slug[0]?Number(j.query.slug):1,b=(h-1)*t,p=h*t,x=1===h,_=h===n;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.a,{title:"All Post - Page ".concat(h),description:"This is All Post - Page ".concat(h,"."),locationPath:j.asPath}),Object(a.jsxs)("main",{className:"blog-list",children:[Object(a.jsx)(i.a,{branches:"all",allPostIndex:h}),s.map((function(e,t){return t>=b&&t<p&&Object(a.jsx)(c.a,{href:"/blog-post/".concat(e.slug),children:Object(a.jsx)("a",{children:Object(a.jsxs)("article",{children:[Object(a.jsx)(u.a,{image:e.image,extension:"webp",altProps:e.image,mobileMaxWidth:"200px",desktopMaxWidth:"300px",margin:"0 0 5px 0"}),Object(a.jsx)(o.a,{title:e.title,date:e.date})]})})},t)})),Object(a.jsx)(d.a,{pageIndex:h,isFirst:x,isLast:_})]})]})}},JPzB:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("nKUr"),s=n("YFqc"),c=n.n(s),r=n("gKoY"),l=n.n(r),i=function(e){var t=e.category,n=e.pageIndex,s=e.isFirst,r=e.isLast,i=t?"/blog-category/".concat(t,"/"):"/blog-list/";return Object(a.jsxs)("ul",{className:l.a.wrapper,children:[!s&&Object(a.jsx)("li",{className:l.a.prev,children:Object(a.jsx)(c.a,{href:"".concat(i).concat(2===n?"":n-1),children:Object(a.jsx)("a",{rel:"prev",className:l.a["prev-link"],children:"New."})})}),!r&&Object(a.jsx)("li",{className:l.a.next,children:Object(a.jsx)(c.a,{href:"".concat(i).concat(n+1),children:Object(a.jsx)("a",{rel:"prev",className:l.a["next-link"],children:"Old."})})})]})}},WdjJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("nKUr"),s=n("rqYS"),c=n.n(s),r=function(e){var t=e.title,n=e.date;return Object(a.jsxs)("div",{className:c.a.wrapper,children:[Object(a.jsx)("h2",{className:c.a["title-heading"],children:t}),Object(a.jsx)("p",{className:c.a.date,children:n})]})}},bOSd:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("nKUr"),s=n("h6VL"),c=n.n(s),r=function(e){var t=e.branches,n=e.allPostIndex,s=e.categorySlug,r=e.categoryListIndex;return Object(a.jsx)(a.Fragment,{children:"all"===t?Object(a.jsxs)("h1",{className:"".concat(c.a["blog-list-heading"]," ").concat(c.a["all-list-heading"]),children:["All Post #",n]}):Object(a.jsxs)("h1",{className:"".concat(c.a["blog-list-heading"]," ").concat(c.a["category-list-heading"]),children:[s,"\u2019s Post #",r]})})}},gKoY:function(e,t,n){e.exports={wrapper:"style_wrapper__Y3T4b",prev:"style_prev__32IsP","prev-link":"style_prev-link__1HzrJ",next:"style_next__1knWl","next-link":"style_next-link__3_9G1"}},h6VL:function(e,t,n){e.exports={"blog-list-heading":"style_blog-list-heading__1dvBX"}},nDlI:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-list/[[...slug]]",function(){return n("IB+c")}])},rqYS:function(e,t,n){e.exports={wrapper:"style_wrapper__mzHI9","title-heading":"style_title-heading__2GZuX",date:"style_date__35V10"}}},[["nDlI",0,2,1,3]]]);