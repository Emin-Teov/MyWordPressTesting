!function(){"use strict";var t={};function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function r(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,_x,l,i=[],_n=!0,a=!1;try{if(_x=(r=r.call(t)).next,0===n){if(Object(r)!==r)return;_n=!1}else for(;!(_n=(e=_x.call(r)).done)&&(i.push(e.value),i.length!==n);_n=!0);}catch(t){a=!0,o=t}finally{try{if(!_n&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(a)throw o}}return i}}(t,r)||function(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,{a:r}),r},t.d=function(n,r){for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)};var e=window.wp.domReady,o=t.n(e);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function i(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(o=e.key,i=void 0,i=function(t,n){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!==l(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),"symbol"===l(i)?i:String(i)),e)}var o,i}var a=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),Object.assign(this,n),Object.assign(this,t.toHsl(n))}var n,e,o;return n=t,o=[{key:"parse",value:function(n){var e,o=null==n||null===(e=n.match)||void 0===e?void 0:e.call(n,/(\d+)/g);if(!o||o.length<3)return null;var l=r(o,4),i=l[0],a=l[1],u=l[2],c=l[3];return new t({r:+i,g:+a,b:+u,a:c?+c:1})}},{key:"toHsl",value:function(t){var n=t.r,r=t.g,e=t.b,o=t.a;n/=255,r/=255,e/=255;var l,i,a=Math.max(n,r,e),u=Math.min(n,r,e),c=(a+u)/2;if(a===u)l=i=0;else{var f=a-u;switch(i=c>.5?f/(2-a-u):f/(a+u),a){case n:l=(r-e)/f+(r<e?6:0);break;case r:l=(e-n)/f+2;break;case e:l=(n-r)/f+4}l/=6}return{h:l,s:i,l:c,a:+o}}}],(e=[{key:"css",get:function(){var t=this.r,n=this.g,r=this.b,e=this.a;return"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(e,")")}}])&&i(n.prototype,e),o&&i(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}(),u={"--jm-ui-accent-color":{init:function(t){return t.linkColor.css},value:null},"--jm-ui-background-color":{init:function(t){var n=t.darkMode,r=t.backgroundColor;if(r){if(n&&r.l<.5)return"color-mix(in srgb, #fff, ".concat(r.css," 95%)");if(!n)return"color-mix(in srgb, #fff, ".concat(r.css," 50%)")}return n?"#111":"#fff"},value:null},"--jm-ui-text-color":{init:function(t){var n=t.darkMode,r=t.textColor;return r&&(n&&r.l<.25||!n&&r.l>.25)?r.css:n?"#fff":"#000"},value:null},"--jm-ui-accent-alt-color":{init:function(t){var n=t.linkColor,r=t.backgroundColor,e=n.l<.2,o=(null==r?void 0:r.l)<.4?r.css:"#000",l=e?"65%":"40%";return"color-mix(in srgb, ".concat(e?"#fff":o,", var(--jm-ui-accent-color) ").concat(l,")")},value:null},"--jm-ui-accent-color-contrast":{init:function(t){var n=t.linkColor,r=t.backgroundColor;return Math.abs((null==r?void 0:r.l)-(null==n?void 0:n.l))>.5?r.css:"#fff"},value:null,default:"#ffffff"},"--jm-ui-danger-color":{init:function(t){var n=t.backgroundColor;if((null==n?void 0:n.l)<.5)return"var(--jm-ui-danger-color-dark-mode)"},value:null,default:"#cc1818"},"--jm-ui-font-family":{init:function(t){return t.bodyFontFamily},value:null}},c={linkColor:null,textColor:null,backgroundColor:null,darkMode:!1,bodyFontFamily:!1,initialized:!1,detect:function(){var t,n=document.createElement("div");n.classList.add("wp-block-post-content"),n.style.display="none";var r=document.createElement("a");r.setAttribute("href","#?");var e=document.createElement("p"),o=null!==(t=document.querySelector("main"))&&void 0!==t?t:document.body;n.appendChild(r),n.appendChild(e),o.appendChild(n),this.linkColor=a.parse(getComputedStyle(r).color),this.textColor=a.parse(getComputedStyle(e).color),this.backgroundColor=a.parse(getComputedStyle(document.body).backgroundColor),n.remove(),this.bodyFontFamily=getComputedStyle(document.body).fontFamily,this.darkMode=this.textColor.l>.8},get:function(){return this.initialized||(this.detect(),this.initialized=!0),this}};o()((function(){try{!function(){for(var t=getComputedStyle(document.documentElement),n=0,e=Object.entries(u);n<e.length;n++){var o=r(e[n],2),l=o[0],i=o[1],a=t.getPropertyValue(l),f=!!a;i.default&&(f=i.default!==a),f||(a=i.init(c.get()))&&document.documentElement.style.setProperty(l,a),i.value=a}}()}catch(t){console.error(t)}}))}();