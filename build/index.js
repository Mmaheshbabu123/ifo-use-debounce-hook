!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["React"],r):"object"==typeof exports?exports.YourLibraryName=r(require("react")):e.YourLibraryName=r(e.React)}(self,(e=>(()=>{"use strict";var r={156:r=>{r.exports=e}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var u=t[e]={exports:{}};return r[e](u,u.exports,n),u.exports}n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};n.r(o),n.d(o,{useDebounce:()=>i});var u=n(156);function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}const i=function(e,r){var t,n,o=(t=(0,u.useState)(e),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u,a,i=[],l=!0,c=!1;try{if(u=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=u.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}}(t,n)||function(e,r){if(e){if("string"==typeof e)return a(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],l=o[1];return(0,u.useEffect)((function(){var t=setTimeout((function(){l(e)}),r);return function(){clearTimeout(t)}}),[e,r]),i};return o})()));