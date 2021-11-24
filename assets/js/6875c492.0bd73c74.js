"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8610],{46165:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(80102),r=a(67294),s=a(86010),n=a(46607),m=a(36742);const i="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",d="sidebarItem_2UVv",u="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM";var p=a(24973);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,s.default)(i,"thin-scrollbar"),"aria-label":(0,p.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,s.default)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(m.default,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var f=["sidebar","toc","children"];const E=function(e){var t=e.sidebar,a=e.toc,m=e.children,i=(0,l.Z)(e,f),o=t&&t.items.length>0;return r.createElement(n.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,s.default)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&r.createElement("div",{className:"col col--2"},a))))}},85753:(e,t,a)=>{a.d(t,{Z:()=>T});var l=a(67294),r=a(86010),s=a(3905),n=a(24973),m=a(36742),i=a(44996),o=a(83039),c=a(75854),d=a.n(c),u=a(86146);const g="blogPostTitle_GeHD",p="blogPostData_291c",h="blogPostDetailsFull_3kfx";var f=a(37211);const E="tags_2ga9",b="tag_11ep";function v(e){var t=e.tags;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.default)(E,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return l.createElement("li",{key:a,className:b},l.createElement(f.Z,{name:t,permalink:a}))}))))}const N="image_1yU8";const _=function(e){var t=e.author,a=t.name,r=t.title,s=t.url,n=t.imageURL;return l.createElement("div",{className:"avatar margin-bottom--sm"},n&&l.createElement(m.default,{className:"avatar__photo-link avatar__photo",href:s},l.createElement("img",{className:N,src:n,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(m.default,{href:s,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},P="authorCol_1R69";function k(e){var t=e.authors,a=e.assets;return 0===t.length?l.createElement(l.Fragment,null):l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var s;return l.createElement("div",{className:(0,r.default)("col col--6",P),key:t},l.createElement(_,{author:Object.assign({},e,{imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL})}))})))}const T=function(e){var t,a,c,f,E=(c=(0,o.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return c(t,(0,n.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,i.useBaseUrlUtils)().withBaseUrl,N=e.children,_=e.frontMatter,P=e.assets,T=e.metadata,w=e.truncated,U=e.isBlogPostPage,y=void 0!==U&&U,L=T.date,M=T.formattedDate,C=T.permalink,Z=T.tags,x=T.readingTime,R=T.title,B=T.editUrl,F=T.authors,I=null!=(t=P.image)?t:_.image,A=!y&&w,D=Z.length>0;return l.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(f=y?"h1":"h2",l.createElement("header",null,l.createElement(f,{className:g,itemProp:"headline"},y?R:l.createElement(m.default,{itemProp:"url",to:C},R)),l.createElement("div",{className:(0,r.default)(p,"margin-vert--md")},l.createElement("time",{dateTime:L,itemProp:"datePublished"},M),void 0!==x&&l.createElement(l.Fragment,null," \xb7 ",E(x))),l.createElement(k,{authors:F,assets:P}))),I&&l.createElement("meta",{itemProp:"image",content:b(I,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(s.MDXProvider,{components:d()},N)),(D||w)&&l.createElement("footer",{className:(0,r.default)("row docusaurus-mt-lg",(a={},a[h]=y,a))},D&&l.createElement("div",{className:(0,r.default)("col",{"col--9":A})},l.createElement(v,{tags:Z})),y&&B&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.default,{editUrl:B})),A&&l.createElement("div",{className:(0,r.default)("col text--right",{"col--3":D})},l.createElement(m.default,{to:T.permalink,"aria-label":"Read more about "+R},l.createElement("b",null,l.createElement(n.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},69404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(67294),r=a(36742),s=a(46165),n=a(85753),m=a(24973),i=a(83039);function o(e){var t,a=e.metadata,o=e.items,c=e.sidebar,d=a.allTagsPath,u=a.name,g=a.count,p=(t=(0,i.usePluralForm)().selectMessage,function(e){return t(e,(0,m.translate)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,m.translate)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(g),tagName:u});return l.createElement(s.Z,{title:h,wrapperClassName:i.ThemeClassNames.wrapper.blogPages,pageClassName:i.ThemeClassNames.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:c},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,h),l.createElement(r.default,{href:d},l.createElement(m.default,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return l.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})))}},86146:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(67294),r=a(24973),s=a(83117),n=a(80102),m=a(86010);const i="iconEdit_2_ui";var o=["className"];const c=function(e){var t=e.className,a=(0,n.Z)(e,o);return l.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.default)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var d=a(83039);function u(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.ThemeClassNames.common.editThisPage},l.createElement(c,null),l.createElement(r.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},37211:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),r=a(86010),s=a(36742);const n="tag_1Okp",m="tagRegular_3MiF",i="tagWithCount_1HU1";const o=function(e){var t,a=e.permalink,o=e.name,c=e.count;return l.createElement(s.default,{href:a,className:(0,r.default)(n,(t={},t[m]=!c,t[i]=c,t))},o,c&&l.createElement("span",null,c))}}}]);