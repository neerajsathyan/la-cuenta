function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return e}}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=function(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}((function(n){var e=function(n){var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,n,e,r){var o=n&&n.prototype instanceof l?n:l,a=Object.create(o.prototype),i=new _(r||[]);return a._invoke=function(t,n,e){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return S()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var u=w(i,e);if(u){if(u===s)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=f(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}(t,e,i),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=c;var s={};function l(){}function h(){}function p(){}var v={};v[a]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(E([])));m&&m!==e&&r.call(m,a)&&(v=m);var y=p.prototype=l.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function b(n,e){var o;this._invoke=function(a,i){function u(){return new e((function(o,u){!function o(a,i,u,c){var s=f(n[a],n,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===t(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(s.arg)}(a,i,o,u)}))}return o=o?o.then(u,u):u()}}function w(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,w(t,n),"throw"===n.method))return s;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=f(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,s;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,s):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,s)}function $(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function x(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function E(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=y.constructor=p,p.constructor=h,p[u]=h.displayName="GeneratorFunction",n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===h||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(y),t},n.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},n.AsyncIterator=b,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new b(c(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),y[u]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},n.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),s},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),s}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;x(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},n}(n.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));function a(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)}))}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?s(n):e}function h(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function v(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(){}var m=function(t){return t};function y(t,n){for(var e in n)t[e]=n[e];return t}function g(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(g)}function $(t){return"function"==typeof t}function x(n,e){return n!=n?e==e:n!==e||n&&"object"===t(n)||"function"==typeof n}function _(t,n,e){t.$$.on_destroy.push(function(t){if(null==t)return d;for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var o=t.subscribe.apply(t,e);return o.unsubscribe?function(){return o.unsubscribe()}:o}(n,e))}function E(t,n,e,r){return t[1]&&r?y(e.ctx.slice(),t[1](r(n))):e.ctx}function S(n,e,r,o,a,i,u){var c=function(n,e,r,o){if(n[2]&&o){var a=n[2](o(r));if(void 0===e.dirty)return a;if("object"===t(a)){for(var i=[],u=Math.max(e.dirty.length,a.length),c=0;c<u;c+=1)i[c]=e.dirty[c]|a[c];return i}return e.dirty|a}return e.dirty}(e,o,a,i);if(c){var f=E(e,r,o,u);n.p(f,c)}}var R="undefined"!=typeof window,L=R?function(){return window.performance.now()}:function(){return Date.now()},k=R?function(t){return requestAnimationFrame(t)}:d,O=new Set;function A(t){O.forEach((function(n){n.c(t)||(O.delete(n),n.f())})),0!==O.size&&k(A)}function j(t,n){t.appendChild(n)}function P(t,n,e){t.insertBefore(n,e||null)}function C(t){t.parentNode.removeChild(t)}function N(t,n){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function q(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function T(){return D(" ")}function I(){return D("")}function G(t,n,e,r){return t.addEventListener(n,e,r),function(){return t.removeEventListener(n,e,r)}}function U(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function F(t){return""===t?void 0:+t}function H(t){return Array.from(t.childNodes)}function M(t,n,e,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===n){for(var i=0;i<a.attributes.length;){var u=a.attributes[i];e[u.name]?i++:a.removeAttribute(u.name)}return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):q(n)}function B(t,n){for(var e=0;e<t.length;e+=1){var r=t[e];if(3===r.nodeType)return r.data=""+n,t.splice(e,1)[0]}return D(n)}function J(t){return B(t," ")}function Y(t,n){n=""+n,t.data!==n&&(t.data=n)}function z(t,n){t.value=null==n?"":n}function K(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(n.querySelectorAll(t))}var V,W=new Set,X=0;function Q(t){for(var n=5381,e=t.length;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}function Z(t,n,e,r,o,a,i){for(var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,c=16.666/r,f="{\n",s=0;s<=1;s+=c){var l=n+(e-n)*a(s);f+=100*s+"%{".concat(i(l,1-l),"}\n")}var h=f+"100% {".concat(i(e,1-e),"}\n}"),p="__svelte_".concat(Q(h),"_").concat(u),v=t.ownerDocument;W.add(v);var d=v.__svelte_stylesheet||(v.__svelte_stylesheet=v.head.appendChild(q("style")).sheet),m=v.__svelte_rules||(v.__svelte_rules={});m[p]||(m[p]=!0,d.insertRule("@keyframes ".concat(p," ").concat(h),d.cssRules.length));var y=t.style.animation||"";return t.style.animation="".concat(y?"".concat(y,", "):"").concat(p," ").concat(r,"ms linear ").concat(o,"ms 1 both"),X+=1,p}function tt(t,n){var e=(t.style.animation||"").split(", "),r=e.filter(n?function(t){return t.indexOf(n)<0}:function(t){return-1===t.indexOf("__svelte")}),o=e.length-r.length;o&&(t.style.animation=r.join(", "),(X-=o)||k((function(){X||(W.forEach((function(t){for(var n=t.__svelte_stylesheet,e=n.cssRules.length;e--;)n.deleteRule(e);t.__svelte_rules={}})),W.clear())})))}function nt(t){V=t}function et(){if(!V)throw new Error("Function called outside component initialization");return V}function rt(t){et().$$.before_update.push(t)}function ot(t){et().$$.after_update.push(t)}var at=[],it=[],ut=[],ct=[],ft=Promise.resolve(),st=!1;function lt(t){ut.push(t)}var ht,pt=!1,vt=new Set;function dt(){if(!pt){pt=!0;do{for(var t=0;t<at.length;t+=1){var n=at[t];nt(n),mt(n.$$)}for(at.length=0;it.length;)it.pop()();for(var e=0;e<ut.length;e+=1){var r=ut[e];vt.has(r)||(vt.add(r),r())}ut.length=0}while(at.length);for(;ct.length;)ct.pop()();st=!1,pt=!1,vt.clear()}}function mt(t){if(null!==t.fragment){t.update(),w(t.before_update);var n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(lt)}}function yt(t,n,e){var r,o,a;t.dispatchEvent((r="".concat(n?"intro":"outro").concat(e),(a=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,o),a))}var gt,bt=new Set;function wt(){gt={r:0,c:[],p:gt}}function $t(){gt.r||w(gt.c),gt=gt.p}function xt(t,n){t&&t.i&&(bt.delete(t),t.i(n))}function _t(t,n,e,r){if(t&&t.o){if(bt.has(t))return;bt.add(t),gt.c.push((function(){bt.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}var Et={duration:0};function St(t,n,e,r){var o=n(t,e),a=r?0:1,i=null,u=null,c=null;function f(){c&&tt(t,c)}function s(t,n){var e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function l(n){var e,r=o||Et,l=r.delay,h=void 0===l?0:l,p=r.duration,v=void 0===p?300:p,y=r.easing,g=void 0===y?m:y,b=r.tick,$=void 0===b?d:b,x=r.css,_={start:L()+h,b:n};n||(_.group=gt,gt.r+=1),i?u=_:(x&&(f(),c=Z(t,a,n,v,h,g,x)),n&&$(0,1),i=s(_,v),lt((function(){return yt(t,n,"start")})),e=function(n){if(u&&n>u.start&&(i=s(u,v),u=null,yt(t,i.b,"start"),x&&(f(),c=Z(t,a,i.b,i.duration,0,g,o.css))),i)if(n>=i.end)$(a=i.b,1-a),yt(t,i.b,"end"),u||(i.b?f():--i.group.r||w(i.group.c)),i=null;else if(n>=i.start){var e=n-i.start;a=i.a+i.d*g(e/i.duration),$(a,1-a)}return!(!i&&!u)},0===O.size&&k(A),new Promise((function(t){O.add({c:e,f:t})})))}return{run:function(t){$(o)?(ht||(ht=Promise.resolve()).then((function(){ht=null})),ht).then((function(){o=o(),l(t)})):l(t)},end:function(){f(),i=u=null}}}function Rt(t,n){for(var e={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],u=n[a];if(u){for(var c in i)c in u||(r[c]=1);for(var f in u)o[f]||(e[f]=u[f],o[f]=1);t[a]=u}else for(var s in i)o[s]=1}for(var l in r)l in e||(e[l]=void 0);return e}function Lt(n){return"object"===t(n)&&null!==n?n:{}}function kt(t){t&&t.c()}function Ot(t,n){t&&t.l(n)}function At(t,n,e){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,u=r.after_update;o&&o.m(n,e),lt((function(){var n=a.map(g).filter($);i?i.push.apply(i,h(n)):w(n),t.$$.on_mount=[]})),u.forEach(lt)}function jt(t,n){var e=t.$$;null!==e.fragment&&(w(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Pt(t,n){-1===t.$$.dirty[0]&&(at.push(t),st||(st=!0,ft.then(dt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ct(t,n,e,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=V;nt(t);var c=n.props||{},f=t.$$={fragment:null,ctx:null,props:a,update:d,not_equal:o,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:i},s=!1;if(f.ctx=e?e(t,c,(function(n,e){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:e;return f.ctx&&o(f.ctx[n],f.ctx[n]=r)&&(f.bound[n]&&f.bound[n](r),s&&Pt(t,n)),e})):[],f.update(),s=!0,w(f.before_update),f.fragment=!!r&&r(f.ctx),n.target){if(n.hydrate){var l=H(n.target);f.fragment&&f.fragment.l(l),l.forEach(C)}else f.fragment&&f.fragment.c();n.intro&&xt(t.$$.fragment),At(t,n.target,n.anchor),dt()}nt(u)}var Nt=function(){function t(){p(this,t)}var n,e,r;return n=t,(e=[{key:"$destroy",value:function(){jt(this,1),this.$destroy=d}},{key:"$on",value:function(t,n){var e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),function(){var t=e.indexOf(n);-1!==t&&e.splice(t,1)}}},{key:"$set",value:function(){}}])&&v(n.prototype,e),r&&v(n,r),t}(),qt=[];function Dt(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,r=[];function o(e){if(x(t,e)&&(t=e,n)){for(var o=!qt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),qt.push(i,t)}if(o){for(var u=0;u<qt.length;u+=2)qt[u][0](qt[u+1]);qt.length=0}}}function a(n){o(n(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,u=[a,i];return r.push(u),1===r.length&&(n=e(o)||d),a(t),function(){var t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(n(),n=null)}}return{set:o,update:a,subscribe:i}}var Tt={},It=function(){return{}},Gt=Dt(0),Ut=Dt(0),Ft=Dt(0),Ht=Dt(0);function Mt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=u(t);if(n){var o=u(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function Bt(t){var n,e,r;return{c:function(){n=q("img"),this.h()},l:function(t){n=M(t,"IMG",{src:!0,alt:!0}),this.h()},h:function(){n.src!=="share.png"&&U(n,"src","share.png"),U(n,"alt","Compartir")},m:function(o,a){P(o,n,a),e||(r=G(n,"click",t[1]),e=!0)},p:d,d:function(t){t&&C(n),e=!1,r()}}}function Jt(t){var n,e,o,a,i,u,c=t[0]&&Bt(t);return{c:function(){n=q("header"),e=q("img"),o=T(),a=q("h1"),i=D("La Cuenta"),u=T(),c&&c.c(),this.h()},l:function(t){var r=H(n=M(t,"HEADER",{}));e=M(r,"IMG",{src:!0,alt:!0}),o=J(r);var f=H(a=M(r,"H1",{}));i=B(f,"La Cuenta"),f.forEach(C),u=J(r),c&&c.l(r),r.forEach(C),this.h()},h:function(){e.src!=="favicon-32x32.png"&&U(e,"src","favicon-32x32.png"),U(e,"alt","La Cuenta Logo")},m:function(t,r){P(t,n,r),j(n,e),j(n,o),j(n,a),j(a,i),j(n,u),c&&c.m(n,null)},p:function(t,e){var o=r(e,1)[0];t[0]?c?c.p(t,o):((c=Bt(t)).c(),c.m(n,null)):c&&(c.d(1),c=null)},i:d,o:d,d:function(t){t&&C(n),c&&c.d()}}}function Yt(t,n,e){var r,o,a,i;_(t,Gt,(function(t){return e(3,r=t)})),_(t,Ft,(function(t){return e(4,o=t)})),_(t,Ht,(function(t){return e(5,a=t)})),_(t,Ut,(function(t){return e(6,i=t)}));var u,c=!1,f=new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"});return"undefined"!=typeof window&&(navigator.share?c=!0:console.log("Web Share is not supported")),[c,function(){u="",u+="🧾 La Cuenta: \r\n\r\n";for(var t=0,n=r.length;t<n;t++)0===r[t].resto?u+=r[t].quien+" ya puso -- "+f.format(r[t].cuanto)+"\r\n":o>r[t].cuanto?u+=r[t].quien+" debe -- "+f.format(r[t].resto)+"\r\n":u+="A "+r[t].quien+" le deben -- "+f.format(r[t].resto)+"\r\n";a>r.length&&(u+="El resto debe -- "+f.format(o)+"\r\n"),u+="__________________\r\n\r\n",u+="💰 Total : "+f.format(i)+"\r\n",u+="Cada uno : "+f.format(o)+"\r\n",navigator.share({title:"La Cuenta",text:u,url:"https://agustinl.github.io/la-cuenta/"}).then((function(){return console.log("Successful share")})).catch((function(t){return console.log("Error sharing",t)}))}]}var zt=function(t){f(e,Nt);var n=Mt(e);function e(t){var r;return p(this,e),Ct(s(r=n.call(this)),t,Yt,Jt,x,{}),r}return e}();function Kt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=u(t);if(n){var o=u(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function Vt(t){var n,e,r,o,a,i,u,c,f,s,l,h,p,v,m=(new Date).getFullYear()+"";return{c:function(){n=q("footer"),e=q("h5"),r=q("a"),o=D("GitHub Repo"),a=T(),i=q("h5"),u=D("by "),c=q("strong"),f=q("a"),s=D("agustinl.dev"),l=T(),h=q("h6"),p=D("v2.0.0 — "),v=D(m),this.h()},l:function(t){var d=H(n=M(t,"FOOTER",{})),y=H(e=M(d,"H5",{})),g=H(r=M(y,"A",{href:!0}));o=B(g,"GitHub Repo"),g.forEach(C),y.forEach(C),a=J(d);var b=H(i=M(d,"H5",{}));u=B(b,"by ");var w=H(c=M(b,"STRONG",{})),$=H(f=M(w,"A",{href:!0}));s=B($,"agustinl.dev"),$.forEach(C),w.forEach(C),b.forEach(C),l=J(d);var x=H(h=M(d,"H6",{}));p=B(x,"v2.0.0 — "),v=B(x,m),x.forEach(C),d.forEach(C),this.h()},h:function(){U(r,"href","https://github.com/agustinl/cuentas-claras"),U(f,"href","https://www.agustinl.dev/")},m:function(t,d){P(t,n,d),j(n,e),j(e,r),j(r,o),j(n,a),j(n,i),j(i,u),j(i,c),j(c,f),j(f,s),j(n,l),j(n,h),j(h,p),j(h,v)},p:d,i:d,o:d,d:function(t){t&&C(n)}}}var Wt=function(t){f(e,Nt);var n=Kt(e);function e(t){var r;return p(this,e),Ct(s(r=n.call(this)),t,null,Vt,x,{}),r}return e}();function Xt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=u(t);if(n){var o=u(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function Qt(t){var n,e,o,a=new zt({}),i=t[1].default,u=function(t,n,e,r){if(t){var o=E(t,n,e,r);return t[0](o)}}(i,t,t[0],null),c=new Wt({});return{c:function(){kt(a.$$.fragment),n=T(),u&&u.c(),e=T(),kt(c.$$.fragment)},l:function(t){Ot(a.$$.fragment,t),n=J(t),u&&u.l(t),e=J(t),Ot(c.$$.fragment,t)},m:function(t,r){At(a,t,r),P(t,n,r),u&&u.m(t,r),P(t,e,r),At(c,t,r),o=!0},p:function(t,n){var e=r(n,1)[0];u&&u.p&&1&e&&S(u,i,t,t[0],e,null,null)},i:function(t){o||(xt(a.$$.fragment,t),xt(u,t),xt(c.$$.fragment,t),o=!0)},o:function(t){_t(a.$$.fragment,t),_t(u,t),_t(c.$$.fragment,t),o=!1},d:function(t){jt(a,t),t&&C(n),u&&u.d(t),t&&C(e),jt(c,t)}}}function Zt(t,n,e){var r=n.$$slots,o=void 0===r?{}:r,a=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(0,a=t.$$scope)},[a,o]}var tn=function(t){f(e,Nt);var n=Xt(e);function e(t){var r;return p(this,e),Ct(s(r=n.call(this)),t,Zt,Qt,x,{}),r}return e}();function nn(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=u(t);if(n){var o=u(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function en(t){var n,e,r=t[1].stack+"";return{c:function(){n=q("pre"),e=D(r)},l:function(t){var o=H(n=M(t,"PRE",{}));e=B(o,r),o.forEach(C)},m:function(t,r){P(t,n,r),j(n,e)},p:function(t,n){2&n&&r!==(r=t[1].stack+"")&&Y(e,r)},d:function(t){t&&C(n)}}}function rn(t){var n,e,o,a,i,u,c,f,s,l=t[1].message+"";document.title=n=t[0];var h=t[2]&&t[1].stack&&en(t);return{c:function(){e=T(),o=q("h1"),a=D(t[0]),i=T(),u=q("p"),c=D(l),f=T(),h&&h.c(),s=I(),this.h()},l:function(n){K('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(C),e=J(n);var r=H(o=M(n,"H1",{class:!0}));a=B(r,t[0]),r.forEach(C),i=J(n);var p=H(u=M(n,"P",{class:!0}));c=B(p,l),p.forEach(C),f=J(n),h&&h.l(n),s=I(),this.h()},h:function(){U(o,"class","svelte-8od9u6"),U(u,"class","svelte-8od9u6")},m:function(t,n){P(t,e,n),P(t,o,n),j(o,a),P(t,i,n),P(t,u,n),j(u,c),P(t,f,n),h&&h.m(t,n),P(t,s,n)},p:function(t,e){var o=r(e,1)[0];1&o&&n!==(n=t[0])&&(document.title=n),1&o&&Y(a,t[0]),2&o&&l!==(l=t[1].message+"")&&Y(c,l),t[2]&&t[1].stack?h?h.p(t,o):((h=en(t)).c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i:d,o:d,d:function(t){t&&C(e),t&&C(o),t&&C(i),t&&C(u),t&&C(f),h&&h.d(t),t&&C(s)}}}function on(t,n,e){var r=n.status,o=n.error;return t.$set=function(t){"status"in t&&e(0,r=t.status),"error"in t&&e(1,o=t.error)},[r,o,!1]}var an=function(t){f(e,Nt);var n=nn(e);function e(t){var r;return p(this,e),Ct(s(r=n.call(this)),t,on,rn,x,{status:0,error:1}),r}return e}();function un(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=u(t);if(n){var o=u(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function cn(t){var n,e,r=[t[4].props],o=t[4].component;function a(t){for(var n={},e=0;e<r.length;e+=1)n=y(n,r[e]);return{props:n}}if(o)var i=new o(a());return{c:function(){i&&kt(i.$$.fragment),n=I()},l:function(t){i&&Ot(i.$$.fragment,t),n=I()},m:function(t,r){i&&At(i,t,r),P(t,n,r),e=!0},p:function(t,e){var u=16&e?Rt(r,[Lt(t[4].props)]):{};if(o!==(o=t[4].component)){if(i){wt();var c=i;_t(c.$$.fragment,1,0,(function(){jt(c,1)})),$t()}o?(kt((i=new o(a())).$$.fragment),xt(i.$$.fragment,1),At(i,n.parentNode,n)):i=null}else o&&i.$set(u)},i:function(t){e||(i&&xt(i.$$.fragment,t),e=!0)},o:function(t){i&&_t(i.$$.fragment,t),e=!1},d:function(t){t&&C(n),i&&jt(i,t)}}}function fn(t){var n,e=new an({props:{error:t[0],status:t[1]}});return{c:function(){kt(e.$$.fragment)},l:function(t){Ot(e.$$.fragment,t)},m:function(t,r){At(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(xt(e.$$.fragment,t),n=!0)},o:function(t){_t(e.$$.fragment,t),n=!1},d:function(t){jt(e,t)}}}function sn(t){var n,e,r,o,a=[fn,cn],i=[];function u(t,n){return t[0]?0:1}return n=u(t),e=i[n]=a[n](t),{c:function(){e.c(),r=I()},l:function(t){e.l(t),r=I()},m:function(t,e){i[n].m(t,e),P(t,r,e),o=!0},p:function(t,o){var c=n;(n=u(t))===c?i[n].p(t,o):(wt(),_t(i[c],1,1,(function(){i[c]=null})),$t(),(e=i[n])||(e=i[n]=a[n](t)).c(),xt(e,1),e.m(r.parentNode,r))},i:function(t){o||(xt(e),o=!0)},o:function(t){_t(e),o=!1},d:function(t){i[n].d(t),t&&C(r)}}}function ln(t){for(var n,e=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[sn]},$$scope:{ctx:t}},a=0;a<e.length;a+=1)o=y(o,e[a]);var i=new tn({props:o});return{c:function(){kt(i.$$.fragment)},l:function(t){Ot(i.$$.fragment,t)},m:function(t,e){At(i,t,e),n=!0},p:function(t,n){var o=r(n,1)[0],a=12&o?Rt(e,[4&o&&{segment:t[2][0]},8&o&&Lt(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),i.$set(a)},i:function(t){n||(xt(i.$$.fragment,t),n=!0)},o:function(t){_t(i.$$.fragment,t),n=!1},d:function(t){jt(i,t)}}}function hn(t,n,e){var r,o,a=n.stores,i=n.error,u=n.status,c=n.segments,f=n.level0,s=n.level1,l=void 0===s?null:s,h=n.notify;return ot(h),r=Tt,o=a,et().$$.context.set(r,o),t.$set=function(t){"stores"in t&&e(5,a=t.stores),"error"in t&&e(0,i=t.error),"status"in t&&e(1,u=t.status),"segments"in t&&e(2,c=t.segments),"level0"in t&&e(3,f=t.level0),"level1"in t&&e(4,l=t.level1),"notify"in t&&e(6,h=t.notify)},[i,u,c,f,l,a,h]}var pn=function(t){f(e,Nt);var n=un(e);function e(t){var r;return p(this,e),Ct(s(r=n.call(this)),t,hn,ln,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return e}(),vn=[/^\/compartirCuenta\/?$/],dn=[{js:function(){return import("./index.b3db9e45.js")},css:[]}],mn=[{pattern:/^\/$/,parts:[{i:0}]}];function yn(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},e=Tn(new URL(t,document.baseURI));return e?(Nn[n.replaceState?"replaceState":"pushState"]({id:An},"",t),Gn(e,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var gn,bn,wn,$n,xn,_n="undefined"!=typeof __SAPPER__&&__SAPPER__,En=!1,Sn=[],Rn="{}",Ln={page:function(t){var n=Dt(t),e=!0;return{notify:function(){e=!0,n.update((function(t){return t}))},set:function(t){e=!1,n.set(t)},subscribe:function(t){var r;return n.subscribe((function(n){(void 0===r||e&&n!==r)&&t(r=n)}))}}}({}),preloading:Dt(null),session:Dt(_n&&_n.session)};Ln.session.subscribe(function(){var t=i(o.mark((function t(n){var e,r,a,i,u,c;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if($n=n,En){t.next=3;break}return t.abrupt("return");case 3:return xn=!0,e=Tn(new URL(location.href)),r=bn={},t.next=8,Bn(e);case 8:if(a=t.sent,i=a.redirect,u=a.props,c=a.branch,r===bn){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Fn(i,c,u,e.page);case 16:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}());var kn,On=null;var An,jn=1;var Pn,Cn,Nn="undefined"!=typeof history?history:{pushState:function(t,n,e){},replaceState:function(t,n,e){},scrollRestoration:""},qn={};function Dn(n){var e=Object.create(null);return n.length>0&&n.slice(1).split("&").forEach((function(n){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(n.replace(/\+/g," "))),3),a=o[1],i=o[2],u=void 0===i?"":i;"string"==typeof e[a]&&(e[a]=[e[a]]),"object"===t(e[a])?e[a].push(u):e[a]=u})),e}function Tn(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(_n.baseUrl))return null;var n=t.pathname.slice(_n.baseUrl.length);if(""===n&&(n="/"),!vn.some((function(t){return t.test(n)})))for(var e=0;e<mn.length;e+=1){var r=mn[e],o=r.pattern.exec(n);if(o){var a=Dn(t.search),i=r.parts[r.parts.length-1],u=i.params?i.params(o):{},c={host:location.host,path:n,query:a,params:u};return{href:t.href,route:r,match:o,page:c}}}}function In(){return{x:pageXOffset,y:pageYOffset}}function Gn(t,n,e,r){return Un.apply(this,arguments)}function Un(){return(Un=i(o.mark((function t(n,e,r,a){var i,u,c,f,s,l,h,p,v;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e?An=e:(i=In(),qn[An]=i,e=An=++jn,qn[An]=r?i:{x:0,y:0}),An=e,gn&&Ln.preloading.set(!0),u=On&&On.href===n.href?On.promise:Bn(n),On=null,c=bn={},t.next=8,u;case 8:if(f=t.sent,s=f.redirect,l=f.props,h=f.branch,c===bn){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Fn(s,h,l,n.page);case 16:document.activeElement&&document.activeElement.blur(),r||(p=qn[e],a&&(v=document.getElementById(a.slice(1)))&&(p={x:0,y:v.getBoundingClientRect().top+scrollY}),qn[An]=p,p&&scrollTo(p.x,p.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Fn(t,n,e,r){return Hn.apply(this,arguments)}function Hn(){return(Hn=i(o.mark((function t(n,e,r,a){var i,u;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",yn(n.location,{replaceState:!0}));case 2:if(Ln.page.set(a),Ln.preloading.set(!1),!gn){t.next=8;break}gn.$set(r),t.next=18;break;case 8:return r.stores={page:{subscribe:Ln.page.subscribe},preloading:{subscribe:Ln.preloading.subscribe},session:Ln.session},t.next=11,wn;case 11:if(t.t0=t.sent,r.level0={props:t.t0},r.notify=Ln.page.notify,i=document.querySelector("#sapper-head-start"),u=document.querySelector("#sapper-head-end"),i&&u){for(;i.nextSibling!==u;)Kn(i.nextSibling);Kn(i),Kn(u)}gn=new pn({target:kn,props:r,hydrate:!0});case 18:Sn=e,Rn=JSON.stringify(a.query),En=!0,xn=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Mn(t,n,e,r){if(r!==Rn)return!0;var o=Sn[t];return!!o&&(n!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(e.slice(1,t+2)))||void 0))}function Bn(t){return Jn.apply(this,arguments)}function Jn(){return(Jn=i(o.mark((function t(n){var e,r,a,u,c,f,s,l,h,p,v;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.route,r=n.page,a=r.path.split("/").filter(Boolean),u=null,c={error:null,status:200,segments:[a[0]]},f={fetch:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){return fetch(t,n)})),redirect:function(t,n){if(u&&(u.statusCode!==t||u.location!==n))throw new Error("Conflicting redirects");u={statusCode:t,location:n}},error:function(t,n){c.error="string"==typeof n?new Error(n):n,c.status=t}},wn||(wn=_n.preloaded[0]||It.call(f,{host:r.host,path:r.path,query:r.query,params:{}},$n)),l=1,t.prev=7,h=JSON.stringify(r.query),p=e.pattern.exec(r.path),v=!1,t.next=13,Promise.all(e.parts.map(function(){var t=i(o.mark((function t(e,i){var u,s,d,m,y,g;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=a[i],Mn(i,u,p,h)&&(v=!0),c.segments[l]=a[i+1],e){t.next=5;break}return t.abrupt("return",{segment:u});case 5:if(s=l++,xn||v||!Sn[i]||Sn[i].part!==e.i){t.next=8;break}return t.abrupt("return",Sn[i]);case 8:return v=!1,t.next=11,zn(dn[e.i]);case 11:if(d=t.sent,m=d.default,y=d.preload,!En&&_n.preloaded[i+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(f,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(n.match):{}},$n);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=_n.preloaded[i+1];case 26:return t.abrupt("return",c["level".concat(s)]={component:m,props:g,segment:u,match:p,part:e.i});case 27:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()));case 13:s=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),c.error=t.t0,c.status=500,s=[];case 21:return t.abrupt("return",{redirect:u,props:c,branch:s});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function Yn(t){var n="client/".concat(t);if(!document.querySelector('link[href="'.concat(n,'"]')))return new Promise((function(t,e){var r=document.createElement("link");r.rel="stylesheet",r.href=n,r.onload=function(){return t()},r.onerror=e,document.head.appendChild(r)}))}function zn(t){var n="string"==typeof t.css?[]:t.css.map(Yn);return n.unshift(t.js()),Promise.all(n).then((function(t){return t[0]}))}function Kn(t){t.parentNode.removeChild(t)}function Vn(t){var n=Tn(new URL(t,document.baseURI));if(n)return On&&t===On.href||function(t,n){On={href:t,promise:n}}(t,Bn(n)),On.promise}function Wn(t){clearTimeout(Pn),Pn=setTimeout((function(){Xn(t)}),20)}function Xn(t){var n=Zn(t.target);n&&"prefetch"===n.rel&&Vn(n.href)}function Qn(n){if(1===function(t){return null===t.which?t.button:t.which}(n)&&!(n.metaKey||n.ctrlKey||n.shiftKey||n.defaultPrevented)){var e=Zn(n.target);if(e&&e.href){var r="object"===t(e.href)&&"SVGAnimatedString"===e.href.constructor.name,o=String(r?e.href.baseVal:e.href);if(o!==location.href){if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")&&!(r?e.target.baseVal:e.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=Tn(a);if(i)Gn(i,null,e.hasAttribute("sapper-noscroll"),a.hash),n.preventDefault(),Nn.pushState({id:An},"",a.href)}}}else location.hash||n.preventDefault()}}}function Zn(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function te(t){if(qn[An]=In(),t.state){var n=Tn(new URL(location.href));n?Gn(n,t.state.id):location.href=location.href}else(function(t){An=t})(jn=jn+1),Nn.replaceState({id:An},"",location.href)}Cn={target:document.querySelector("#sapper")},"scrollRestoration"in Nn&&(Nn.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Nn.scrollRestoration="auto"})),addEventListener("load",(function(){Nn.scrollRestoration="manual"})),function(t){kn=t}(Cn.target),addEventListener("click",Qn),addEventListener("popstate",te),addEventListener("touchstart",Xn),addEventListener("mousemove",Wn),Promise.resolve().then((function(){var t=location,n=t.hash,e=t.href;Nn.replaceState({id:jn},"",e);var r,o,a,i,u,c,f,s,l=new URL(location.href);if(_n.error)return r=location,o=r.host,a=r.pathname,i=r.search,u=_n.session,c=_n.preloaded,f=_n.status,s=_n.error,wn||(wn=c&&c[0]),void Fn(null,[],{error:s,status:f,session:u,level0:{props:wn},level1:{props:{status:f,error:s},component:an},segments:c},{host:o,path:a,query:Dn(i),params:{}});var h=Tn(l);return h?Gn(h,jn,!0,n):void 0}));export{_t as A,$t as B,N as C,rt as D,ot as E,lt as F,wt as G,Gt as H,Ut as I,Ft as J,Ht as K,h as L,Nt as S,f as _,u as a,l as b,p as c,s as d,q as e,T as f,M as g,H as h,Ct as i,B as j,C as k,J as l,U as m,P as n,j as o,z as p,G as q,F as r,x as s,D as t,St as u,w as v,Y as w,K as x,r as y,xt as z};
