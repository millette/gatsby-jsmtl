(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return i});n(48);var a=n(0),r=n.n(a),l=n(150),o=n(141);t.default=function(e){var t=e.pageContext.year,n=e.data,a=n.last.edges[0].node,i=n.tot,c=n.allMeetupsJson,s=c.totalCount,u=c.edges;return r.a.createElement(l.c,null,r.a.createElement("p",null,"We've had ",i.totalCount," meetups since ",Object(o.date)(a.on),t&&" and "+s+" in "+t,"."),u.map(function(e){var t=e.node;return r.a.createElement(l.a,t)}))};var i="700853572"},139:function(e,t,n){"use strict";var a=n(35);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(144)),l=a(n(145)),o=a(n(7)),i=a(n(50)),c=a(n(51)),s=a(n(4)),u=a(n(0)),m=n(15),f=n(140);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/gatsby-jsmtl/"+e)}var d={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,c.default)((0,i.default)((0,i.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,l.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,i.default)((0,i.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,i=t.onClick,c=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),d=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=p(n);return u.default.createElement(m.Link,(0,l.default)({to:g,state:s,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return i&&i(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),E(n,{state:s,replace:d})),!0}},h))},t}(u.default.Component);h.propTypes=(0,l.default)({},d,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var g=h;t.default=g;var E=function(e,t){window.___navigate(p(e),t)};t.navigate=E;var v=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=v;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(e)}},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return d}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),l=n(4),o=n.n(l),i=n(139),c=n.n(i);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var s=n(142),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(34);n.d(t,"parsePath",function(){return m.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},141:function(e,t,n){n(148),n(48),e.exports={date:function(e){return new Date(parseInt(e.slice(0,4),10),parseInt(e.slice(4,6),10)-1,parseInt(e.slice(6,8),10),12).toDateString()},yearRange:function(e,t){var n=parseInt(e.slice(0,4),10);return Array(parseInt(t.slice(0,4),10)-n+1).fill().map(function(e,t){return t+n}).reverse()}}},142:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},143:function(e,t){e.exports="data:image/png;base64,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"},144:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},145:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},146:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),l=n(4),o=n.n(l),i=n(52),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},147:function(e,t,n){var a=n(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},148:function(e,t,n){var a=n(6);a(a.P,"Array",{fill:n(149)}),n(49)("fill")},149:function(e,t,n){"use strict";var a=n(27),r=n(75),l=n(26);e.exports=function(e){for(var t=a(this),n=l(t.length),o=arguments.length,i=r(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,s=void 0===c?n:r(c,n);s>i;)t[i++]=e;return t}},150:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=function(e){return!e.no&&r.a.createElement("div",null,r.a.createElement("h2",null,"Location",r.a.createElement("br",null),r.a.createElement("small",null,"La Gare: A beautiful collaborative workspace in the Mile End.")),r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.209998637545!2d-73.5951137!3d45.52597949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9197db3c9d971%3A0x8ac257f1bb298902!2sLa+Gare!5e0!3m2!1sen!2sus!4v1444236563802",width:"100%",height:"450",style:{border:0},allowfullscreen:!0,title:"Google Map to La Gare"}))},o=n(143),i=n.n(o),c=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{flex:"1 1 0"}},r.a.createElement("h4",null,"Contact"),r.a.createElement("ul",{className:"list-unstyled contact"},r.a.createElement("li",{className:"meetup"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://meetup.com/js-montreal"},"meetup.com")),r.a.createElement("li",{className:"facebook"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/groups/253683934748003/"},"facebook group")),r.a.createElement("li",{className:"linkedin"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.linkedin.com/groups?gid=2514289"},"js-montreal.org")),r.a.createElement("li",{className:"twitter"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.twitter.com/jsmontreal"},"@jsmontreal")),r.a.createElement("li",{className:"email"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:contact@js-montreal.org"},"Email us")))),r.a.createElement("div",{style:{flex:"1 1 0"}},r.a.createElement("h4",null,"User Groups"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://gtugmontreal.blogspot.ca"},"GDG Montreal")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.montrealonrails.com/"},"montreal.rb")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.phpquebec.org/"},"php quebec")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://montrealpython.org/"},"mtl python")))),r.a.createElement("div",{style:{flex:"1 1 0"}},r.a.createElement("h4",null,"Special thanks to"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://garemtl.com/en/"},r.a.createElement("img",{alt:"La Gare",src:i.a,width:"100"}))))))},s=n(140),u="1 1 0",m=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("nav",{role:"navigation"},r.a.createElement("ul",{className:"nav-simple",style:{padding:0,margin:0,listStyle:"none",display:"flex"}},r.a.createElement("li",{style:{flex:u}},r.a.createElement(s.Link,{to:"/"},"Home")),r.a.createElement("li",{style:{flex:u}},r.a.createElement(s.Link,{to:"/archive/"},"Archive")),r.a.createElement("li",{style:{flex:u}},r.a.createElement(s.Link,{to:"/archive-orig/"},"Archive (2018/full)")),r.a.createElement("li",{style:{flex:u}},r.a.createElement(s.Link,{to:"/presenter/"},"Present")),r.a.createElement("li",{style:{flex:u}},r.a.createElement(s.Link,{to:"/about/"},"About")),r.a.createElement("li",{style:{flex:u}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.meetup.com/js-montreal/messages/boards/thread/48462382"},"Jobs")),r.a.createElement("li",{style:{flex:u}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://goo.gl/forms/JXCnE4K9bG"},"2014 Survey")),r.a.createElement("li",{style:{flex:u}},r.a.createElement("strong",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://goo.gl/forms/5U4gfTIXzt"},"Join the team!"))))),r.a.createElement("h1",null,r.a.createElement(s.Link,{to:"/"},"js-montreal"),r.a.createElement("br",null),r.a.createElement("small",null,"Montreal's JavaScript User Group"))))},f=(n(147),function(e){var t=e.id,n=e.title,a=e.name,l=(e.url,e.email,e.synopsis);return r.a.createElement("div",{id:t,style:{paddingRight:"1rem",flex:"1 1 0"}},r.a.createElement("h3",null,n),r.a.createElement("h4",null,"by ",a),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:l}}))}),p=function(e){var t=e.children;return r.a.createElement("div",{style:{padding:"1rem"}},r.a.createElement(m,null),t,r.a.createElement(c,null))},d=(n(33),n(48),n(141)),h=function(e){var t=e.num,n=e.title,a=e.on,l=e.blurb,o=e.speakers;return r.a.createElement("div",{key:"num-"+t},r.a.createElement("h2",{style:{marginBottom:0},dangerouslySetInnerHTML:{__html:"#"+t+" "+n+" on <small>"+Object(d.date)(a)+"</small>"}}),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:l}}),r.a.createElement("div",{style:{display:"flex"}},o.map(function(e,n){return r.a.createElement(f,Object.assign({id:"speaker-"+t+"-"+n,key:"speaker-"+t+"-"+n},e))})))},g=function(e){var t=e.first,n=e.last;return r.a.createElement("div",null,r.a.createElement("ul",null,Object(d.yearRange)(t,n).map(function(e){return r.a.createElement("li",{key:"archive-"+e},r.a.createElement(s.Link,{to:"/archive/"+e+"/"},e))})))};n.d(t,"d",function(){return l}),n.d(t,"b",function(){return c}),n.d(t,"e",function(){return m}),n.d(t,"f",function(){return f}),n.d(t,"c",function(){return p}),n.d(t,"a",function(){return h}),n.d(t,"g",function(){return g})}}]);
//# sourceMappingURL=component---src-templates-archive-year-js-aa0ddbd9a8b1e28a60be.js.map