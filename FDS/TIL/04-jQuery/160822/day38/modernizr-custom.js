/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csspositionsticky-flexbox-addtest-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function i(){var e,n,t,i,r,s,l;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],n=w[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=o(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)s=e[r],l=s.split("."),1===l.length?Modernizr[l[0]]=i:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=i),_.push((i?"":"no-")+l.join("-"))}}function r(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?S.className.baseVal=n:S.className=n)}function s(e,n){if("object"==typeof e)for(var t in e)x(e,t)&&s(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),i=Modernizr[o[0]];if(2==o.length&&(i=i[o[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),r([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var i;for(var r in e)if(e[r]in n)return t===!1?e[r]:(i=n[e[r]],o(i,"function")?u(i,t||n):i);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=l(b?"svg":"body"),e.fake=!0),e}function h(e,t,o,i){var r,s,a,f,u="modernizr",c=l("div"),p=d();if(parseInt(o,10))for(;o--;)a=l("div"),a.id=i?i[o]:u+(o+1),c.appendChild(a);return r=l("style"),r.type="text/css",r.id="s"+u,(p.fake?p:c).appendChild(r),p.appendChild(c),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),c.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),s=t(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=f,S.offsetHeight):c.parentNode.removeChild(c),!!s}function m(n,o){var i=n.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(p(n[i]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];i--;)r.push("("+p(n[i])+":"+o+")");return r=r.join(" or "),h("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function y(e,n,i,r){function s(){c&&(delete k.style,delete k.modElem)}if(r=o(r,"undefined")?!1:r,!o(i,"undefined")){var u=m(e,i);if(!o(u,"undefined"))return u}for(var c,p,d,h,y,g=["modernizr","tspan","samp"];!k.style&&g.length;)c=!0,k.modElem=l(g.shift()),k.style=k.modElem.style;for(d=e.length,p=0;d>p;p++)if(h=e[p],y=k.style[h],a(h,"-")&&(h=f(h)),k.style[h]!==t){if(r||o(i,"undefined"))return s(),"pfx"==n?h:!0;try{k.style[h]=i}catch(v){}if(k.style[h]!=y)return s(),"pfx"==n?h:!0}return s(),!1}function g(e,n,t,i,r){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+j.join(s+" ")+s).split(" ");return o(n,"string")||o(n,"undefined")?y(l,n,i,r):(l=(e+" "+z.join(s+" ")+s).split(" "),c(l,n,t))}function v(e,n,o){return g(e,t,t,n,o)}var _=[],w=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var x,S=n.documentElement,b="svg"===S.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;x=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),C._l={},C.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=s});var P=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=P,Modernizr.addTest("csspositionsticky",function(){var e="position:",n="sticky",t=l("a"),o=t.style;return o.cssText=e+P.join(n+";"+e).slice(0,-e.length),-1!==o.position.indexOf(n)});var T="Moz O ms Webkit",j=C._config.usePrefixes?T.split(" "):[];C._cssomPrefixes=j;var z=C._config.usePrefixes?T.toLowerCase().split(" "):[];C._domPrefixes=z;var E={elem:l("modernizr")};Modernizr._q.push(function(){delete E.elem});var k={style:E.elem.style};Modernizr._q.unshift(function(){delete k.style}),C.testAllProps=g,C.testAllProps=v,Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),i(),r(_),delete C.addTest,delete C.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);