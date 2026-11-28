import{a3 as ha,Z as Mt,a4 as c,r as ae,c as ot,b as Nt,a5 as Ne,a6 as va,S as wt}from"./index-LjdDd_ui.js";function Dt(t,e){for(var a=0;a<e.length;a++){const o=e[a];if(typeof o!="string"&&!Array.isArray(o)){for(const n in o)if(n!=="default"&&!(n in t)){const i=Object.getOwnPropertyDescriptor(o,n);i&&Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:()=>o[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}function Ut(t,e){let a;try{a=t()}catch{return}return{getItem:n=>{var i;const d=l=>l===null?null:JSON.parse(l,void 0),u=(i=a.getItem(n))!=null?i:null;return u instanceof Promise?u.then(d):d(u)},setItem:(n,i)=>a.setItem(n,JSON.stringify(i,void 0)),removeItem:n=>a.removeItem(n)}}const Ze=t=>e=>{try{const a=t(e);return a instanceof Promise?a:{then(o){return Ze(o)(a)},catch(o){return this}}}catch(a){return{then(o){return this},catch(o){return Ze(o)(a)}}}},ya=(t,e)=>(a,o,n)=>{let i={storage:Ut(()=>window.localStorage),partialize:g=>g,version:0,merge:(g,h)=>({...h,...g}),...e},d=!1,u=0;const l=new Set,r=new Set;let m=i.storage;if(!m)return t((...g)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),a(...g)},o,n);const s=()=>{const g=i.partialize({...o()});return m.setItem(i.name,{state:g,version:i.version})},f=n.setState;n.setState=(g,h)=>(f(g,h),s());const b=t((...g)=>(a(...g),s()),o,n);n.getInitialState=()=>b;let y;const L=()=>{var g,h;if(!m)return;const j=++u;d=!1,l.forEach(S=>{var T;return S((T=o())!=null?T:b)});const D=((h=i.onRehydrateStorage)==null?void 0:h.call(i,(g=o())!=null?g:b))||void 0;return Ze(m.getItem.bind(m))(i.name).then(S=>{if(S)if(typeof S.version=="number"&&S.version!==i.version){if(i.migrate){const T=i.migrate(S.state,S.version);return T instanceof Promise?T.then(F=>[!0,F]):[!0,T]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,S.state];return[!1,void 0]}).then(S=>{var T;if(j!==u)return;const[F,z]=S;if(y=i.merge(z,(T=o())!=null?T:b),a(y,!0),F)return s()}).then(()=>{j===u&&(D?.(o(),void 0),y=o(),d=!0,r.forEach(S=>S(y)))}).catch(S=>{j===u&&D?.(void 0,S)})};return n.persist={setOptions:g=>{i={...i,...g},g.storage&&(m=g.storage)},clearStorage:()=>{++u,m?.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>L(),hasHydrated:()=>d,onHydrate:g=>(l.add(g),()=>{l.delete(g)}),onFinishHydration:g=>(r.add(g),()=>{r.delete(g)})},i.skipHydration||L(),y||b},At=ya;let ba="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",qe=(t=21)=>{let e="",a=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=ba[a[t]&63];return e};var Xe={exports:{}},O={};var xt;function wa(){if(xt)return O;xt=1;var t=ha();function e(l){var r="https://react.dev/errors/"+l;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)r+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+l+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},n=Symbol.for("react.portal");function i(l,r,m){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:n,key:s==null?null:""+s,children:l,containerInfo:r,implementation:m}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(l,r){if(l==="font")return"";if(typeof r=="string")return r==="use-credentials"?r:""}return O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,O.createPortal=function(l,r){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)throw Error(e(299));return i(l,r,null,m)},O.flushSync=function(l){var r=d.T,m=o.p;try{if(d.T=null,o.p=2,l)return l()}finally{d.T=r,o.p=m,o.d.f()}},O.preconnect=function(l,r){typeof l=="string"&&(r?(r=r.crossOrigin,r=typeof r=="string"?r==="use-credentials"?r:"":void 0):r=null,o.d.C(l,r))},O.prefetchDNS=function(l){typeof l=="string"&&o.d.D(l)},O.preinit=function(l,r){if(typeof l=="string"&&r&&typeof r.as=="string"){var m=r.as,s=u(m,r.crossOrigin),f=typeof r.integrity=="string"?r.integrity:void 0,b=typeof r.fetchPriority=="string"?r.fetchPriority:void 0;m==="style"?o.d.S(l,typeof r.precedence=="string"?r.precedence:void 0,{crossOrigin:s,integrity:f,fetchPriority:b}):m==="script"&&o.d.X(l,{crossOrigin:s,integrity:f,fetchPriority:b,nonce:typeof r.nonce=="string"?r.nonce:void 0})}},O.preinitModule=function(l,r){if(typeof l=="string")if(typeof r=="object"&&r!==null){if(r.as==null||r.as==="script"){var m=u(r.as,r.crossOrigin);o.d.M(l,{crossOrigin:m,integrity:typeof r.integrity=="string"?r.integrity:void 0,nonce:typeof r.nonce=="string"?r.nonce:void 0})}}else r==null&&o.d.M(l)},O.preload=function(l,r){if(typeof l=="string"&&typeof r=="object"&&r!==null&&typeof r.as=="string"){var m=r.as,s=u(m,r.crossOrigin);o.d.L(l,m,{crossOrigin:s,integrity:typeof r.integrity=="string"?r.integrity:void 0,nonce:typeof r.nonce=="string"?r.nonce:void 0,type:typeof r.type=="string"?r.type:void 0,fetchPriority:typeof r.fetchPriority=="string"?r.fetchPriority:void 0,referrerPolicy:typeof r.referrerPolicy=="string"?r.referrerPolicy:void 0,imageSrcSet:typeof r.imageSrcSet=="string"?r.imageSrcSet:void 0,imageSizes:typeof r.imageSizes=="string"?r.imageSizes:void 0,media:typeof r.media=="string"?r.media:void 0})}},O.preloadModule=function(l,r){if(typeof l=="string")if(r){var m=u(r.as,r.crossOrigin);o.d.m(l,{as:typeof r.as=="string"&&r.as!=="script"?r.as:void 0,crossOrigin:m,integrity:typeof r.integrity=="string"?r.integrity:void 0})}else o.d.m(l)},O.requestFormReset=function(l){o.d.r(l)},O.unstable_batchedUpdates=function(l,r){return l(r)},O.useFormState=function(l,r,m){return d.H.useFormState(l,r,m)},O.useFormStatus=function(){return d.H.useHostTransitionStatus()},O.version="19.2.5",O}var _t;function xa(){if(_t)return Xe.exports;_t=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Xe.exports=wa(),Xe.exports}var Bt=xa();const qt=Mt(Bt),hs=Dt({__proto__:null,default:qt},[Bt]);function _a(t){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",e.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}const Sa=t=>{switch(t){case"success":return Ra;case"info":return Ta;case"warning":return Ia;case"error":return Ca;default:return null}},Ea=Array(12).fill(0),ka=({visible:t,className:e})=>c.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},c.createElement("div",{className:"sonner-spinner"},Ea.map((a,o)=>c.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),Ra=c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20","aria-hidden":"true"},c.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Ia=c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20","aria-hidden":"true"},c.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Ta=c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20","aria-hidden":"true"},c.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Ca=c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20","aria-hidden":"true"},c.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Oa=c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},c.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),c.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Pa=()=>{const[t,e]=c.useState(document.hidden);return c.useEffect(()=>{const a=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",a),()=>document.removeEventListener("visibilitychange",a)},[]),t};let Ma=1;const Na=100,St=t=>{var e;return typeof t?.id=="number"||(t==null||(e=t.id)==null?void 0:e.length)>0?t.id:Ma++};class Da{constructor(){this.subscribe=e=>(this.subscribers.push(e),this.getActiveToasts().forEach(a=>e(a)),()=>{const a=this.subscribers.indexOf(e);this.subscribers.splice(a,1)}),this.publish=e=>{this.subscribers.forEach(a=>a(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e],this.trimHistory()},this.trimHistory=()=>{let e=this.toasts.length-Na;e<=0||(this.toasts=this.toasts.filter(a=>e>0&&this.dismissedToasts.has(a.id)?(this.dismissedToasts.delete(a.id),e--,!1):!0))},this.create=e=>{const{message:a,...o}=e,n=St(e),i=this.pendingDismissals.get(n);i!==void 0&&(cancelAnimationFrame(i),this.pendingDismissals.delete(n),this.dismissedToasts.delete(n));const d=this.dismissedToasts.has(n),u=e.dismissible===void 0?!0:e.dismissible;return d&&(this.dismissedToasts.delete(n),this.toasts=this.toasts.filter(r=>r.id!==n)),(d?void 0:this.toasts.find(r=>r.id===n))?this.toasts=this.toasts.map(r=>r.id===n?(this.publish({...r,...e,id:n,title:a}),{...r,...e,id:n,dismissible:u,title:a}):r):this.addToast({title:a,...o,dismissible:u,id:n}),n},this.dismiss=e=>{if(e==null)return this.getActiveToasts().forEach(o=>{this.dismissedToasts.add(o.id),this.subscribers.forEach(n=>n({id:o.id,dismiss:!0}))}),e;this.dismissedToasts.add(e);const a=this.pendingDismissals.get(e);return a!==void 0&&cancelAnimationFrame(a),this.pendingDismissals.set(e,requestAnimationFrame(()=>{this.pendingDismissals.delete(e),this.subscribers.forEach(o=>o({id:e,dismiss:!0}))})),e},this.message=(e,a)=>this.create({...a,message:e,type:void 0}),this.error=(e,a)=>this.create({...a,message:e,type:"error"}),this.success=(e,a)=>this.create({...a,type:"success",message:e}),this.info=(e,a)=>this.create({...a,type:"info",message:e}),this.warning=(e,a)=>this.create({...a,type:"warning",message:e}),this.loading=(e,a)=>this.create({...a,type:"loading",message:e}),this.promise=(e,a)=>{if(!a)return;let o;a.loading!==void 0&&(o=this.create({...a,promise:e,type:"loading",message:a.loading,description:typeof a.description!="function"?a.description:void 0}));const n=Promise.resolve(e instanceof Function?e():e);let i=o!==void 0,d;const u=n.then(async r=>{if(d=["resolve",r],c.isValidElement(r))i=!1,this.create({id:o,type:"default",message:r});else if(Aa(r)&&!r.ok){i=!1;const s=typeof a.error=="function"?await a.error(`HTTP error! status: ${r.status}`):a.error,f=typeof a.description=="function"?await a.description(`HTTP error! status: ${r.status}`):a.description,y=typeof s=="object"&&!c.isValidElement(s)?s:{message:s};this.create({id:o,type:"error",description:f,...y})}else if(r instanceof Error){i=!1;const s=typeof a.error=="function"?await a.error(r):a.error,f=typeof a.description=="function"?await a.description(r):a.description,y=typeof s=="object"&&!c.isValidElement(s)?s:{message:s};this.create({id:o,type:"error",description:f,...y})}else if(a.success!==void 0){i=!1;const s=typeof a.success=="function"?await a.success(r):a.success,f=typeof a.description=="function"?await a.description(r):a.description,y=typeof s=="object"&&!c.isValidElement(s)?s:{message:s};this.create({id:o,type:"success",description:f,...y})}}).catch(async r=>{if(d=["reject",r],a.error!==void 0){i=!1;const m=typeof a.error=="function"?await a.error(r):a.error,s=typeof a.description=="function"?await a.description(r):a.description,b=typeof m=="object"&&!c.isValidElement(m)?m:{message:m};this.create({id:o,type:"error",description:s,...b})}}).finally(()=>{i&&(this.dismiss(o),o=void 0),a.finally==null||a.finally.call(a)}),l=()=>new Promise((r,m)=>u.then(()=>d[0]==="reject"?m(d[1]):r(d[1])).catch(m));return typeof o!="string"&&typeof o!="number"?{unwrap:l}:Object.assign(o,{unwrap:l})},this.custom=(e,a)=>{const o=St(a);return this.create({...a,jsx:e(o),id:o,type:void 0}),o},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set,this.pendingDismissals=new Map}}const N=new Da,Ua=(t,e)=>N.message(t,e),Aa=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",Ba=Ua,qa=()=>N.toasts,La=()=>N.getActiveToasts(),Et=Object.assign(Ba,{success:N.success,info:N.info,warning:N.warning,error:N.error,custom:N.custom,message:N.message,promise:N.promise,dismiss:N.dismiss,loading:N.loading},{getHistory:qa,getToasts:La});_a("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function Oe(t){return t.label!==void 0}const za=3,$a="24px",ja="16px",kt=4e3,Fa=356,Ka=14,Va=45,Wa=200;function H(...t){return t.filter(Boolean).join(" ")}function Ha(t){const[e,a]=t.split("-"),o=[];return e&&o.push(e),a&&o.push(a),o}const Ga=t=>{var e,a,o,n,i,d,u,l,r;const{invert:m,toast:s,unstyled:f,interacting:b,setHeights:y,visibleToasts:L,heights:g,index:h,toasts:j,expanded:D,removeToast:S,defaultRichColors:T,closeButton:F,style:z,cancelButtonStyle:oe,actionButtonStyle:se,className:Ke="",descriptionClassName:Ie="",duration:he,position:ve,gap:G,expandByDefault:ye,classNames:w,icons:$,closeButtonAriaLabel:Y="Close toast"}=t,[U,be]=c.useState(null),[X,Z]=c.useState(null),[de,v]=c.useState(!1),[_,E]=c.useState(!1),[A,ee]=c.useState(!1),[x,we]=c.useState(!1),[Te,xe]=c.useState(!1),[_e,Ve]=c.useState(0),[na,ct]=c.useState(0),Se=c.useRef(s.duration||he||kt),ut=c.useRef(null),J=c.useRef(null),ia=h===0,la=h+1<=L,P=s.type,mt=P??"default",ce=s.dismissible!==!1,da=s.className||"",ca=s.descriptionClassName||"",Ce=c.useMemo(()=>g.findIndex(p=>p.toastId===s.id)||0,[g,s.id]),ua=c.useMemo(()=>{var p;return(p=s.closeButton)!=null?p:F},[s.closeButton,F]),pt=c.useMemo(()=>s.duration||he||kt,[s.duration,he]),We=c.useRef(0),ue=c.useRef(0),ft=c.useRef(0),me=c.useRef(null),[ma,pa]=ve.split("-"),gt=c.useMemo(()=>g.reduce((p,R,C)=>C>=Ce?p:p+R.height,0),[g,Ce]),ht=Pa(),K=c.useMemo(()=>{var p;return(p=t.swipeDirections)!=null?p:Ha(ve)},[t.swipeDirections,ve]),fa=s.invert||m,He=P==="loading";ue.current=c.useMemo(()=>Ce*G+gt,[Ce,gt]),c.useEffect(()=>{Se.current=pt},[pt]),c.useEffect(()=>{v(!0)},[]),c.useEffect(()=>{const p=J.current;if(p){const R=p.getBoundingClientRect().height;return ct(R),y(C=>[{toastId:s.id,height:R,position:s.position},...C]),()=>y(C=>C.filter(M=>M.toastId!==s.id))}},[y,s.id]),c.useLayoutEffect(()=>{if(!de)return;const p=J.current,R=p.style.height;p.style.height="auto";const C=p.getBoundingClientRect().height;p.style.height=R,ct(C),y(M=>M.find(I=>I.toastId===s.id)?M.map(I=>I.toastId===s.id?{...I,height:C}:I):[{toastId:s.id,height:C,position:s.position},...M])},[de,s.title,s.description,y,s.id,s.jsx,s.action,s.cancel]);const te=c.useCallback(()=>{E(!0),Ve(ue.current),y(p=>p.filter(R=>R.toastId!==s.id)),setTimeout(()=>{S(s)},Wa)},[s,S,y,ue]);c.useEffect(()=>{if(s.promise&&P==="loading"||s.duration===1/0||s.type==="loading")return;let p;return D||b||ht?(()=>{if(ft.current<We.current){const M=new Date().getTime()-We.current;Se.current=Se.current-M}ft.current=new Date().getTime()})():Se.current!==1/0&&(We.current=new Date().getTime(),p=setTimeout(()=>{s.onAutoClose==null||s.onAutoClose.call(s,s),te()},Se.current)),()=>clearTimeout(p)},[D,b,s,P,ht,te]),c.useEffect(()=>{s.delete&&(te(),s.onDismiss==null||s.onDismiss.call(s,s))},[te,s.delete]);function vt(){var p;if($?.loading){var R;return c.createElement("div",{className:H(w?.loader,s==null||(R=s.classNames)==null?void 0:R.loader,"sonner-loader"),"data-visible":P==="loading"},$.loading)}return c.createElement(ka,{className:H(w?.loader,s==null||(p=s.classNames)==null?void 0:p.loader),visible:P==="loading"})}const ga=s.icon||$?.[P]||Sa(P);var yt,bt;return c.createElement("li",{tabIndex:0,ref:J,className:H(Ke,da,w?.toast,s==null||(e=s.classNames)==null?void 0:e.toast,w?.[mt],s==null||(a=s.classNames)==null?void 0:a[mt]),"data-sonner-toast":"","data-rich-colors":(yt=s.richColors)!=null?yt:T,"data-styled":!(s.jsx||s.unstyled||f),"data-mounted":de,"data-promise":!!s.promise,"data-swiped":Te,"data-removed":_,"data-visible":la,"data-y-position":ma,"data-x-position":pa,"data-index":h,"data-front":ia,"data-swiping":A,"data-dismissible":ce,"data-type":P,"data-invert":fa,"data-swipe-out":x,"data-swipe-direction":X,"data-expanded":!!(D||ye&&de),"data-testid":s.testId,style:{"--index":h,"--toasts-before":h,"--z-index":j.length-h,"--offset":`${_?_e:ue.current}px`,"--initial-height":ye?"auto":`${na}px`,...z,...s.style},onDragEnd:()=>{ee(!1),be(null),me.current=null},onPointerDown:p=>{p.button!==2&&(He||!ce||(ut.current=new Date,Ve(ue.current),p.target.setPointerCapture(p.pointerId),p.target.tagName!=="BUTTON"&&(ee(!0),me.current={x:p.clientX,y:p.clientY})))},onPointerUp:()=>{var p,R,C;if(x||!ce)return;me.current=null;const M=Number(((p=J.current)==null?void 0:p.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Ee=Number(((R=J.current)==null?void 0:R.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),I=new Date().getTime()-((C=ut.current)==null?void 0:C.getTime()),B=U==="x"?M:Ee,V=Math.abs(B)/I;if((U==="x"?K.includes(M>0?"right":"left"):K.includes(Ee>0?"bottom":"top"))&&(Math.abs(B)>=Va||V>.11)){Ve(ue.current),s.onDismiss==null||s.onDismiss.call(s,s),Z(U==="x"?M>0?"right":"left":Ee>0?"down":"up"),te(),we(!0);return}else{var W,Ye;(W=J.current)==null||W.style.setProperty("--swipe-amount-x","0px"),(Ye=J.current)==null||Ye.style.setProperty("--swipe-amount-y","0px")}xe(!1),ee(!1),be(null)},onPointerMove:p=>{var R,C,M;if(!me.current||!ce||((R=window.getSelection())==null?void 0:R.toString().length)>0)return;const I=p.clientY-me.current.y,B=p.clientX-me.current.x;!U&&(Math.abs(B)>1||Math.abs(I)>1)&&be(Math.abs(B)>Math.abs(I)?"x":"y");let V={x:0,y:0};const Ge=W=>1/(1.5+Math.abs(W)/20);if(U==="y"){if(K.includes("top")||K.includes("bottom"))if(K.includes("top")&&I<0||K.includes("bottom")&&I>0)V.y=I;else{const W=I*Ge(I);V.y=Math.abs(W)<Math.abs(I)?W:I}}else if(U==="x"&&(K.includes("left")||K.includes("right")))if(K.includes("left")&&B<0||K.includes("right")&&B>0)V.x=B;else{const W=B*Ge(B);V.x=Math.abs(W)<Math.abs(B)?W:B}(Math.abs(V.x)>0||Math.abs(V.y)>0)&&xe(!0),(C=J.current)==null||C.style.setProperty("--swipe-amount-x",`${V.x}px`),(M=J.current)==null||M.style.setProperty("--swipe-amount-y",`${V.y}px`)}},ua&&!s.jsx&&P!=="loading"?c.createElement("button",{"aria-label":Y,"data-disabled":He,"data-close-button":!0,onClick:He||!ce?()=>{}:()=>{te(),s.onDismiss==null||s.onDismiss.call(s,s)},className:H(w?.closeButton,s==null||(o=s.classNames)==null?void 0:o.closeButton)},(bt=$?.close)!=null?bt:Oa):null,(P||s.icon||s.promise)&&s.icon!==null&&($?.[P]!==null||s.icon)?c.createElement("div",{"data-icon":"",className:H(w?.icon,s==null||(n=s.classNames)==null?void 0:n.icon)},P==="loading"?s.icon||vt():s.promise?vt():null,P!=="loading"?ga:null):null,c.createElement("div",{"data-content":"",className:H(w?.content,s==null||(i=s.classNames)==null?void 0:i.content)},c.createElement("div",{"data-title":"",className:H(w?.title,s==null||(d=s.classNames)==null?void 0:d.title)},s.jsx?s.jsx:typeof s.title=="function"?s.title():s.title),s.description?c.createElement("div",{"data-description":"",className:H(Ie,ca,w?.description,s==null||(u=s.classNames)==null?void 0:u.description)},typeof s.description=="function"?s.description():s.description):null),c.isValidElement(s.cancel)?s.cancel:s.cancel&&Oe(s.cancel)?c.createElement("button",{"data-button":!0,"data-cancel":!0,style:s.cancelButtonStyle||oe,onClick:p=>{Oe(s.cancel)&&ce&&(s.cancel.onClick==null||s.cancel.onClick.call(s.cancel,p),te())},className:H(w?.cancelButton,s==null||(l=s.classNames)==null?void 0:l.cancelButton)},s.cancel.label):null,c.isValidElement(s.action)?s.action:s.action&&Oe(s.action)?c.createElement("button",{"data-button":!0,"data-action":!0,style:s.actionButtonStyle||se,onClick:p=>{Oe(s.action)&&(s.action.onClick==null||s.action.onClick.call(s.action,p),!p.defaultPrevented&&te())},className:H(w?.actionButton,s==null||(r=s.classNames)==null?void 0:r.actionButton)},s.action.label):null)};function Rt(){if(typeof window>"u"||typeof document>"u")return"ltr";const t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}function Ya(t,e){const a={};return[t,e].forEach((o,n)=>{const i=n===1,d=i?"--mobile-offset":"--offset",u=i?ja:$a;function l(r){["top","right","bottom","left"].forEach(m=>{a[`${d}-${m}`]=typeof r=="number"?`${r}px`:r})}typeof o=="number"||typeof o=="string"?l(o):typeof o=="object"?["top","right","bottom","left"].forEach(r=>{o[r]===void 0?a[`${d}-${r}`]=u:a[`${d}-${r}`]=typeof o[r]=="number"?`${o[r]}px`:o[r]}):l(u)}),a}const Xa=c.forwardRef(function(e,a){const{id:o,invert:n,position:i="bottom-right",hotkey:d=["altKey","KeyT"],expand:u,closeButton:l,className:r,offset:m,mobileOffset:s,theme:f="light",richColors:b,duration:y,style:L,visibleToasts:g=za,toastOptions:h,dir:j=Rt(),gap:D=Ka,icons:S,customAriaLabel:T,containerAriaLabel:F="Notifications"}=e,[z,oe]=c.useState([]),se=c.useMemo(()=>o?z.filter(v=>v.toasterId===o):z.filter(v=>!v.toasterId),[z,o]),Ke=c.useMemo(()=>Array.from(new Set([i].concat(se.filter(v=>v.position).map(v=>v.position)))),[se,i]),[Ie,he]=c.useState([]),[ve,G]=c.useState(!1),[ye,w]=c.useState(!1),[$,Y]=c.useState(f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),U=c.useRef(null),be=d.join("+").replace(/Key/g,"").replace(/Digit/g,""),X=c.useRef(null),Z=c.useRef(!1),de=c.useCallback(v=>{oe(_=>{var E;return(E=_.find(A=>A.id===v.id))!=null&&E.delete||N.dismiss(v.id),_.filter(({id:A})=>A!==v.id)})},[]);return c.useEffect(()=>N.subscribe(v=>{if(v.dismiss){requestAnimationFrame(()=>{oe(_=>_.map(E=>E.id===v.id?{...E,delete:!0}:E))});return}setTimeout(()=>{qt.flushSync(()=>{oe(_=>{const E=_.findIndex(A=>A.id===v.id);return E!==-1?[..._.slice(0,E),{..._[E],...v},..._.slice(E+1)]:[v,..._]})})})}),[]),c.useEffect(()=>{if(f!=="system"){Y(f);return}if(f==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?Y("dark"):Y("light")),typeof window>"u")return;const v=window.matchMedia("(prefers-color-scheme: dark)");try{v.addEventListener("change",({matches:_})=>{Y(_?"dark":"light")})}catch{v.addListener(({matches:E})=>{try{Y(E?"dark":"light")}catch(A){console.error(A)}})}},[f]),c.useEffect(()=>{z.length<=1&&G(!1)},[z]),c.useEffect(()=>{const v=_=>{var E;if(d.length>0&&d.every(x=>_[x]||_.code===x)){var ee;G(!0),(ee=U.current)==null||ee.focus()}_.code==="Escape"&&(document.activeElement===U.current||(E=U.current)!=null&&E.contains(document.activeElement))&&G(!1)};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[d]),c.useEffect(()=>{if(U.current)return()=>{X.current&&(X.current.focus({preventScroll:!0}),X.current=null,Z.current=!1)}},[U.current]),c.createElement("section",{ref:a,"aria-label":T??`${F} ${be}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0,"data-react-aria-top-layer":!0},Ke.map((v,_)=>{var E;const[A,ee]=v.split("-");return se.length?c.createElement("ol",{key:v,dir:j==="auto"?Rt():j,tabIndex:-1,ref:U,className:r,"data-sonner-toaster":!0,"data-sonner-theme":$,"data-y-position":A,"data-x-position":ee,style:{"--front-toast-height":`${((E=Ie[0])==null?void 0:E.height)||0}px`,"--width":`${Fa}px`,"--gap":`${D}px`,...L,...Ya(m,s)},onBlur:x=>{Z.current&&!x.currentTarget.contains(x.relatedTarget)&&(Z.current=!1,X.current&&(X.current.focus({preventScroll:!0}),X.current=null))},onFocus:x=>{x.target instanceof HTMLElement&&x.target.dataset.dismissible==="false"||Z.current||(Z.current=!0,X.current=x.relatedTarget)},onMouseEnter:()=>G(!0),onMouseMove:()=>G(!0),onMouseLeave:()=>{ye||G(!1)},onDragEnd:()=>G(!1),onPointerDown:x=>{x.target instanceof HTMLElement&&x.target.dataset.dismissible==="false"||w(!0)},onPointerUp:()=>w(!1)},se.filter(x=>!x.position&&_===0||x.position===v).map((x,we)=>{var Te,xe;return c.createElement(Ga,{key:x.id,icons:S,index:we,toast:x,defaultRichColors:b,duration:(Te=h?.duration)!=null?Te:y,className:h?.className,descriptionClassName:h?.descriptionClassName,invert:n,visibleToasts:g,closeButton:(xe=h?.closeButton)!=null?xe:l,interacting:ye,position:v,style:h?.style,unstyled:h?.unstyled,classNames:h?.classNames,cancelButtonStyle:h?.cancelButtonStyle,actionButtonStyle:h?.actionButtonStyle,closeButtonAriaLabel:h?.closeButtonAriaLabel,removeToast:de,toasts:se.filter(_e=>_e.position==x.position),heights:Ie.filter(_e=>_e.position==x.position),setHeights:he,expandByDefault:u,gap:D,expanded:ve,swipeDirections:e.swipeDirections})})):null}))}),Ja=["video","sora","veo","kling","hailuo","seedance","vidu","runway","luma","pixverse","gemini-omni","即梦","可灵","海螺"],Qa=["audio","tts","speech","voice","music","sound","suno","lyria"],Za=["seedream","gpt-image","image","dall-e","dalle","imagen","flux","sdxl","stable-diffusion","midjourney","t2i","i2i","nano-banana","nano_banana","nano banana","nanobanana"];function eo(t){const e=t.toLowerCase();return Ja.some(a=>e.includes(a))?"video":Qa.some(a=>e.includes(a))?"audio":Za.some(a=>e.includes(a))?"image":/(?:^|[\/_-])wanx?\d/.test(e)?"video":"text"}function Le(t,e){return e==="image"&&/gemini|nano[-_ ]?banana/i.test(t)?"gemini-image":e==="image"&&/grok.*image/i.test(t)?"grok-image":e==="video"&&/grok.*video/i.test(t)?"grok-video-generations":e==="audio"?"openai-chat-audio":`openai-${e}`}function vs(t){const e=eo(t);return{name:t,capability:e,scriptId:Le(t,e)}}function ys(t){const e=t.toLowerCase();return e.includes("claude")||e.includes("anthropic")?"/icons/claude.svg":e.includes("gemini")||e.includes("google")||e.includes("lyria")?"/icons/gemini.svg":e.includes("gpt")||e.includes("openai")?"/icons/openai.svg":e.includes("grok")?"/icons/grok.svg":e.includes("suno")?"/icons/suno.svg":e.includes("deepseek")?"/icons/deepseek.svg":e.includes("glm")?"/icons/glm.svg":""}const to=new Set(["/icons/openai.svg","/icons/grok.svg","/icons/suno.svg"]);function bs(t){return to.has(t)}const ws={image:"生图",video:"视频",text:"文本",audio:"音频"},xs={text:"文本",image:"图片",video:"视频",audio:"音频"},ao={auto:"自动",low:"低",medium:"中",high:"高",xhigh:"极高",max:"最高"},st=[{value:"alloy",label:"Alloy"},{value:"ash",label:"Ash"},{value:"ballad",label:"Ballad"},{value:"coral",label:"Coral"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"nova",label:"Nova"},{value:"onyx",label:"Onyx"},{value:"sage",label:"Sage"},{value:"shimmer",label:"Shimmer"},{value:"verse",label:"Verse"},{value:"marin",label:"Marin"},{value:"cedar",label:"Cedar"}],rt=[{value:"mp3",label:"MP3"},{value:"wav",label:"WAV"},{value:"opus",label:"Opus"},{value:"aac",label:"AAC"},{value:"flac",label:"FLAC"},{value:"pcm",label:"PCM"}];function oo(t){return st.some(e=>e.value===t)?t:"alloy"}function so(t){return rt.some(e=>e.value===t)?t:"mp3"}function ro(t){const e=Number(t);return Number.isFinite(e)?String(Math.max(.25,Math.min(4,Number(e.toFixed(2))))):"1"}function _s(t){const e=oo(t);return st.find(a=>a.value===e)?.label||e}function Ss(t){const e=so(t);return rt.find(a=>a.value===e)?.label||e}function no(t){return`${ro(t)}x`}const Lt=["1k","2k","4k","auto"],De=[{value:"1:1",width:1,height:1},{value:"2:3",width:2,height:3},{value:"3:2",width:3,height:2},{value:"4:3",width:4,height:3},{value:"3:4",width:3,height:4},{value:"16:9",width:16,height:9},{value:"9:16",width:9,height:16},{value:"21:9",width:21,height:9},{value:"9:21",width:9,height:21},{value:"auto",width:0,height:0}],Ae={"1k":{"1:1":"1024x1024","2:1":"1536x768","2:3":"1024x1536","3:2":"1536x1024","4:3":"1024x768","3:4":"768x1024","16:9":"1536x864","9:16":"864x1536","21:9":"2016x864","9:21":"864x2016"},"2k":{"1:1":"2048x2048","2:1":"2048x1024","2:3":"1360x2048","3:2":"2048x1360","4:3":"2048x1536","3:4":"1536x2048","16:9":"2048x1152","9:16":"1152x2048","21:9":"2688x1152","9:21":"1152x2688"},"4k":{"1:1":"2880x2880","2:1":"3840x1920","2:3":"2336x3520","3:2":"3520x2336","4:3":"3312x2480","3:4":"2480x3312","16:9":"3840x2160","9:16":"2160x3840","21:9":"3840x1648","9:21":"1648x3840"}};function ne(t){const e=String(t||"").match(/^(\d+)x(\d+)$/i);return e?{width:Number(e[1]),height:Number(e[2])}:null}function ie(t){const e=String(t||"").match(/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?)$/);if(!e)return null;const a=Number(e[1]),o=Number(e[2]);return!a||!o?null:{width:a,height:o}}const Ue=[{value:"1:1",width:1,height:1},{value:"3:4",width:3,height:4},{value:"4:3",width:4,height:3},{value:"16:9",width:16,height:9},{value:"9:16",width:9,height:16},{value:"21:9",width:21,height:9},{value:"auto",width:0,height:0}],io=4,lo=30;function co(t){const e=String(t||"").trim().toLowerCase();return e==="2k"||e==="2048"?"2k":e==="4k"||e==="3840"?"4k":e==="auto"?"auto":Lt.includes(e)?e:"1k"}function Es(t,e){if(!t||t==="auto"||ie(t))return"auto";const a=ne(t);if(!a)return"auto";const o=Object.keys(Ae).find(i=>Object.values(Ae[i]).includes(`${a.width}x${a.height}`));if(o)return o;const n=Math.max(a.width,a.height);return n>=3072?"4k":n>=1536?"2k":"1k"}function ks(t,e="1:1"){if(!t||t==="auto")return"auto";if(De.some(n=>n.value===t)||ie(t))return t;for(const n of Object.values(Ae)){const i=Object.entries(n).find(([,d])=>d===t);if(i)return i[0]}const a=ne(t)||ie(t);if(!a)return e;const o=a.width/a.height;return De.filter(n=>n.value!=="auto").reduce((n,i)=>{const d=i.width/i.height,u=De.find(r=>r.value===n),l=(u?.width||1)/Math.max(1,u?.height||1);return Math.abs(d-o)<Math.abs(l-o)?i.value:n},e)}function uo(t,e){if(e==="auto"||!e)return"auto";const a=co(t);if(a==="auto")return e;const o=Ae[a]?.[e];if(o)return o;const n=ie(e);if(!n)return"auto";const i=a==="4k"?3840:a==="2k"?2048:1536,d=n.width>=n.height,u=d?i:i*n.width/n.height,l=d?i*n.height/n.width:i,r=m=>Math.max(16,Math.round(m/16)*16);return`${r(u)}x${r(l)}`}function Rs(t,e,a){const o=ne(t);if(o)return o;const n=uo(e==="auto"?"1k":e,a==="auto"?"1:1":a);return ne(n)||{width:0,height:0}}function Is(t){const e=Math.floor(Number(t)||6);return String(Math.max(io,Math.min(lo,e)))}function mo(t){const e=String(t||"").trim().toLowerCase();if(e==="low")return"480";if(e==="auto"||e==="high"||e==="medium")return"720";const a=e.replace(/p$/i,"");return/^\d+$/.test(a)&&Number(a)>0?a:"720"}function Ts(t){if(!t||t==="auto")return"auto";if(Ue.some(o=>o.value===t)||ie(t))return t;const e=ne(t)||ie(t);if(!e)return"16:9";const a=e.width/e.height;return Ue.filter(o=>o.value!=="auto").reduce((o,n)=>{const i=n.width/n.height,d=Ue.find(l=>l.value===o),u=(d?.width||16)/(d?.height||9);return Math.abs(i-a)<Math.abs(u-a)?n.value:o},"16:9")}function po(t,e){if(e==="auto"||!e)return"auto";const a=ie(e);if(!a)return"auto";const o=Math.max(1,Math.floor(Number(mo(t))||720)),n=a.width>=a.height,i=It(n?o*a.width/a.height:o),d=It(n?o:o*a.height/a.width);return`${i}x${d}`}function Cs(t,e,a){const o=ne(t);if(o)return o;const n=po(e,a==="auto"?"16:9":a);return ne(n)||{width:0,height:0}}function It(t){return Math.max(2,Math.round(t/2)*2)}const fo=["auto","low","medium","high","xhigh","max"],go=["1","2","3","4","5","6"],ho=["480","720","1080"],vo=["0.75","1","1.25","1.5"],Tt=t=>t==="auto"?"自动":t,zt={quality:{label:"图片质量",options:fo.map(t=>({value:t,label:ao[t]??t}))},imageScale:{label:"图片分辨率",options:Lt.map(t=>({value:t,label:t==="auto"?"自动":t.toUpperCase()}))},imageRatio:{label:"图片宽高比",options:De.map(t=>({value:t.value,label:Tt(t.value)}))},imageCount:{label:"图片张数",options:go.map(t=>({value:t,label:`${t} 张`}))},videoResolution:{label:"视频清晰度",options:ho.map(t=>({value:t,label:`${t}p`}))},videoRatio:{label:"视频比例",options:Ue.map(t=>({value:t.value,label:Tt(t.value)}))},audioVoice:{label:"音频声音",options:st},audioFormat:{label:"音频格式",options:rt},audioSpeed:{label:"音频语速",options:vo.map(t=>({value:t,label:no(t)}))}},yo=Object.fromEntries(Object.entries(zt).map(([t,e])=>[t,e.options.map(a=>({...a,enabled:!0}))]));function bo(t){if(!t||typeof t!="object")return null;const e=t;return typeof e.value!="string"||!e.value.trim()?null:{value:e.value.trim(),label:typeof e.label=="string"&&e.label.trim()?e.label.trim():e.value.trim(),enabled:e.enabled!==!1}}function wo(t){return Object.fromEntries(Object.entries(zt).map(([e,a])=>{const o=e,n=Array.isArray(t?.[o])?t[o].map(bo).filter(u=>!!u):[],i=new Map(n.map(u=>[u.value,u])),d=a.options.map(u=>{const l=i.get(u.value);return{value:u.value,label:l?.label||u.label,enabled:l?.enabled!==!1}});for(const u of n)d.some(l=>l.value===u.value)||d.push(u);return d.some(u=>u.enabled)||(d[0]={...d[0],enabled:!0}),[e,d]}))}function Os(t,e){const a=[...t];return e&&!a.some(o=>o.value===e)&&a.unshift({value:e,label:e}),a}var Je={exports:{}},ke={};var Ct;function xo(){if(Ct)return ke;Ct=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(o,n,i){var d=null;if(i!==void 0&&(d=""+i),n.key!==void 0&&(d=""+n.key),"key"in n){i={};for(var u in n)u!=="key"&&(i[u]=n[u])}else i=n;return n=i.ref,{$$typeof:t,type:o,key:d,ref:n!==void 0?n:null,props:i}}return ke.Fragment=e,ke.jsx=a,ke.jsxs=a,ke}var Ot;function _o(){return Ot||(Ot=1,Je.exports=xo()),Je.exports}var q=_o();const So=Mt(q),Ps=Dt({__proto__:null,default:So},[q]);const Eo=t=>t?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function ko(t,e,a=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Eo(t),size:24,node:e,...a.length>0?{aliases:a}:{}}}const Ro=t=>{let e="",a=!1;for(const o of t){if(o==="-"||o==="_"||o<=" "){a=e.length>0;continue}e.length===0?e+=o.toLowerCase():e+=a?o.toUpperCase():o,a=!1}return e};const Io=t=>{const e=Ro(t);return e.charAt(0).toUpperCase()+e.slice(1)};const et=(...t)=>t.filter((e,a,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===a).join(" ").trim();const re={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Qe(t){return t!=null}function To(t,e={}){const a=e.attributeNames??{},o=f=>a[f]??f,n=t.size??t.width??re.width,i=t.size??t.height??re.height,d=t.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],u=[...t.name?[`lucide-${t.name}`]:[],...d],l=e.className?.split(" ").filter(Boolean)??[],r=e.includeDefaultClasses===!1?et(...l):et("lucide",...u,...l),m=e.absoluteStrokeWidth?Number(e.strokeWidth??re["stroke-width"])*Number(t.size??t.width??re.width)/Number(e.size??e.width??re.width):e.strokeWidth??re["stroke-width"];return["svg",{...Object.entries(re).reduce((f,[b,y])=>(f[o(b)]=y,f),{}),..."color"in e&&e.color&&{[o("stroke")]:e.color},..."size"in e&&Qe(e.size)&&{[o("width")]:e.size,[o("height")]:e.size},..."width"in e&&Qe(e.width)&&{[o("width")]:e.width},..."height"in e&&Qe(e.height)&&{[o("height")]:e.height},[o("stroke-width")]:m,...r&&{[o("class")]:r},[o("viewBox")]:`0 0 ${n} ${i}`,...e.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(f=>{const[b,y,L]=f,g=e.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...y}:y;return L?[b,g,L]:[b,g]})]}function Co(t,e={}){return To(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}const Oo=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Po=ae.createContext({}),Mo=()=>ae.useContext(Po),No=ae.forwardRef(({color:t,size:e,width:a,height:o,strokeWidth:n,absoluteStrokeWidth:i,nonScalingStroke:d,className:u="",children:l,iconNode:r=[],icon:m={node:r,aliases:[],size:24},...s},f)=>{const{size:b=24,strokeWidth:y=2,absoluteStrokeWidth:L=!1,nonScalingStroke:g=!1,color:h="currentColor",className:j=""}=Mo()??{},D=!!l||Oo(s),[S,T,F=[]]=Co(m,{color:t??h,width:a??e??b,height:o??e??b,strokeWidth:n??y,absoluteStrokeWidth:i??L,nonScalingStroke:d??g,className:et(j,u),hasA11yProp:D,attributes:s});return ae.createElement(S,{ref:f,...T},[...F.map(([z,oe])=>ae.createElement(z,oe)),...Array.isArray(l)?l:[l]])});function le(t,e=[],a=[]){const o=typeof t=="string"?ko(t,e,a):t,n=ae.forwardRef(({className:i,...d},u)=>ae.createElement(No,{ref:u,icon:o,className:i,...d}));return o.name&&(n.displayName=Io(o.name)),n}const $t={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};$t.node;const Do=le($t);const jt={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};jt.node;const Uo=le(jt);const Ft={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};Ft.node;const Ao=le(Ft);const Kt={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};Kt.node;const Bo=le(Kt);const Vt={name:"octagon-x",size:24,node:[["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-octagon"]};Vt.node;const qo=le(Vt);const Wt={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};Wt.node;const Lo=le(Wt);const Ht={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Ht.node;const zo=le(Ht),$o=ot()(At(t=>({baseTheme:"dark",theme:"dark",appearance:null,selection:null,setTheme:e=>t({baseTheme:e,selection:null})}),{name:"infinite-canvas-v1:theme_store",version:1,partialize:({baseTheme:t,selection:e})=>({baseTheme:t,selection:e})})),Pt={info:{className:"workbench-message generation-workspace-controls",icon:q.jsx("span",{"aria-hidden":!0,children:"i"})},success:{className:"workbench-message",icon:q.jsx(Do,{size:11,strokeWidth:2.5,"aria-hidden":!0})},error:{className:"workbench-message",icon:q.jsx(zo,{size:11,strokeWidth:2.5,"aria-hidden":!0})},warning:{className:"workbench-message",icon:q.jsx("span",{"aria-hidden":!0,children:"!"})}};function Ms({...t}){const e=$o(a=>a.theme);return q.jsx(Xa,{theme:e,className:"toaster group",position:"top-center",duration:3e3,containerAriaLabel:"操作提示",icons:{success:q.jsx(Uo,{className:"size-4"}),info:q.jsx(Ao,{className:"size-4"}),warning:q.jsx(Lo,{className:"size-4"}),error:q.jsx(qo,{className:"size-4"}),loading:q.jsx(Bo,{className:"size-4 animate-spin"})},style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)","--border-radius":"var(--radius)"},toastOptions:{classNames:{toast:"cn-toast"}},...t})}const jo={image:["@param {string|undefined} params.options.size 图片像素尺寸，如 1024x1024；自动时未设置","@param {string|undefined} params.options.ratio 原始图片比例，如 16:9 或 1024:768；协议支持的比例由脚本转换","@param {string|undefined} params.options.resolution 图片预设分辨率档位，如 1K、2K、4K；自定义尺寸未设置，由脚本按需推导","@param {string|undefined} params.options.quality 图片质量","@param {number} params.options.count 生成图片数量","@param {string|undefined} params.options.background transparent 表示透明背景"],video:["@param {string} params.options.mode frames 首尾帧；reference 多素材参考","@param {string} params.options.seconds 视频时长，单位秒","@param {string|null} params.options.size 视频像素尺寸；自动时为 null","@param {string} params.options.resolution 视频分辨率，如 720p、1080p","@param {string} params.options.ratio 视频比例，如 16:9","@param {boolean} params.options.generateAudio 是否生成音频","@param {boolean} params.options.watermark 是否添加水印"],text:["@param {object|undefined} params.tools 聊天使用的画布工具；存在时 messages 使用 AI SDK ModelMessage 格式","@param {function(string, object=):Promise<object>} params.utils.runTextAgent 使用 responses / chat-completions / anthropic / gemini 协议返回 {text,messages}，保留工具调用上下文；第二个参数提供协议专属 providerOptions 和 maxOutputTokens"],audio:["@param {string} params.options.voice 音色","@param {string} params.options.format 音频格式","@param {string} params.options.speed 语速","@param {string} params.options.instructions 朗读风格要求"]},Fo={image:"@returns {Promise<Array<string|{url:string}|{b64_json:string}>>} 图片 URL / data URL 数组，或包含 url / b64_json 的对象数组",video:"@returns {Promise<object|string|Blob>} 创建返回 {id}；查询返回 {status:'pending'|'failed'} 或 {status:'completed',result:{url}}；同步完成也可返回 URL / Blob",text:"@returns {Promise<string|{text:string,messages:Array<object>}>} 普通文本返回字符串；工具模式返回 runTextAgent 结果",audio:"@returns {Promise<Blob|string|object>} 音频 Blob、URL、data URL、Base64 或 {url} / {b64_json}"},Ko={image:`const { model, prompt, images, options, utils } = params;
const {
    size,
    ratio,
    resolution,
    quality,
    count,
    background,
} = options;`,video:`const {
    model,
    prompt,
    images,
    videos,
    audios,
    taskId,
    options,
    utils,
} = params;
const {
    mode,
    seconds,
    size,
    resolution,
    ratio,
    generateAudio,
    watermark,
} = options;`,text:`const {
    model,
    messages,
    systemPrompt,
    reasoningEffort,
    utils,
} = params;`,audio:`const { model, prompt, options, utils } = params;
const {
    voice,
    format,
    speed,
    instructions,
} = options;`};function k(t,e=`${Ko[t]}

// 在这里调用服务并 return 结果；工具方法通过 utils.xxx 使用。
throw new Error("SCRIPT_NOT_IMPLEMENTED");`){return["/**",...["由应用调用 main(params)，无需手动调用；按需从 params 解构，新增参数不影响现有写法。","请求配置和请求体按字段换行，嵌套对象分层缩进；长条件、循环及链式处理分行书写。","@param {object} params 本次调用的全部参数","@param {'image'|'video'|'text'|'audio'} params.capability 当前用途","@param {string} params.model 模型名称，不含渠道前缀","@param {string} params.baseUrl 渠道服务地址","@param {string} params.apiKey 渠道密钥，勿写死在源码中","@param {string} params.prompt 本次提示词；生图时已包含系统提示词","@param {string} params.systemPrompt 原始系统提示词","@param {string} params.reasoningEffort 文本思考程度，auto 表示自动","@param {string[]} params.images 参考图片原始链接（http / blob / data URL），按输入顺序排列","@param {string[]} params.videos 参考视频原始链接（http / blob / data URL），按输入顺序排列","@param {string[]} params.audios 参考音频原始链接（http / blob / data URL），按输入顺序排列","素材不预先下载或转换；需要文件或 Base64 时由脚本调用 utils.toBlob / utils.toDataUrl。","@param {Array<{role:string,content:string|Array<object>}>} params.messages 文本对话消息，含系统消息","@param {string|undefined} params.taskId 视频创建时未设置；查询时为创建返回的 id","@param {AbortSignal|undefined} params.signal 取消信号；utils 中的请求自动携带","@param {object} params.options 当前用途的生成设置；视频任务查询时为空",...jo[t],"@param {object} params.utils 辅助方法，所有请求自动使用渠道代理与取消信号","@param {object} params.utils.http 自动使用渠道密钥的请求方法","@param {function(string, object=, object=):Promise<unknown>} params.utils.http.post post(path, body, {headers,params,responseType})，自动 Bearer 鉴权，相对路径接 /v1","@param {function(string, object=):Promise<unknown>} params.utils.http.get get(path, {headers,params,responseType})，自动 Bearer 鉴权，相对路径接 /v1","@param {function(string):string} params.utils.http.url url(path)，生成带 /v1 的请求地址","@param {function(object):Promise<unknown>} params.utils.request request({method,url,headers,data,params,responseType,timeout})，自行设置鉴权；相对地址不加 /v1","@param {function(object, function):Promise<void>} params.utils.stream stream({url,headers,data}, onEvent)，逐个读取 SSE / JSON 事件，自行设置鉴权","@param {(function(string):void)|undefined} params.utils.onDelta 文本用途使用；传截至目前的完整文本","@param {function(function, function, object=):Promise<unknown>} params.utils.poll poll(request, extract, {intervalMs,timeoutMs})，extract 返回 null / undefined / false 时继续；默认间隔 2500ms、超时 300000ms","@param {function(number):Promise<void>} params.utils.sleep sleep(ms)，可取消的等待","@param {function(string|Blob):Promise<Blob>} params.utils.toBlob 将 URL / data URL / File 转成 Blob","@param {function(string|Blob):Promise<string>} params.utils.toDataUrl 将 URL / Blob / File 转成 data URL","@param {function(string|Blob):Promise<string>} params.utils.toPublicUrl 已有公网 URL 原样返回；其他素材上传至设置中的 S3 兼容对象存储，返回公开链接；未配置时提示补全设置","@param {function(string):Promise<string[]>} params.utils.markdownImages 提取 Markdown 中的图片链接（含引用式图片）","@param {function(string):Promise<string[]>} params.utils.markdownLinks 提取 Markdown 中的普通链接（含引用式链接与自动链接）",Fo[t]].map(o=>` * ${o}`)," */","async function main(params) {",...e.split(`
`).map(o=>o?`    ${o}`:""),"}"].join(`
`)}const Vo=[{id:"openai-image",name:"Images 协议生图",description:`生图：POST /v1/images/generations
编辑：POST /v1/images/edits`,logo:"/icons/openai.svg",invertInDark:!0,capability:"image",source:k("image",String.raw`const { model, prompt, images, apiKey, options, utils } = params;
// 图片生成与编辑；参考图存在时使用编辑请求。
const { size, count } = options;
const quality = ["low", "medium", "high", "xhigh", "max"].includes(options.quality) ? options.quality : undefined;
const background = options.background === "transparent" ? "transparent" : undefined;
// 沿用此调用方式原有的尺寸约束，其他脚本自行决定支持的尺寸。
if (size) {
    const [width, height] = size.split("x").map(Number);
    if (
        !Number.isInteger(width) ||
        !Number.isInteger(height) ||
        width <= 0 ||
        height <= 0 ||
        width % 16 ||
        height % 16 ||
        Math.max(width, height) > 3840 ||
        Math.max(width, height) / Math.min(width, height) > 3 ||
        width * height < 655360 ||
        width * height > 8294400
    ) {
        throw new Error("unsupported image size");
    }
}
const fields = {
    model,
    prompt,
    n: count,
    output_format: "png",
};
if (size) {
    fields.size = size;
}
if (quality) {
    fields.quality = quality;
}
if (background) {
    fields.background = background;
}
if (!model.includes("gpt-image")) {
    fields.response_format = "b64_json";
}
let data;
if (images.length) {
    const form = new FormData();
    for (const [key, value] of Object.entries(fields)) {
        form.set(key, String(value));
    }
    const field = images.length > 1 ? "image[]" : "image";
    for (const image of images) {
        form.append(field, await utils.toBlob(image), "ref.png");
    }
    data = await utils.request({
        method: "post",
        url: utils.http.url("/images/edits"),
        headers: { Authorization: "Bearer " + apiKey },
        data: form,
        timeout: 600000,
    });
} else {
    data = await utils.request({
        method: "post",
        url: utils.http.url("/images/generations"),
        headers: { Authorization: "Bearer " + apiKey },
        data: fields,
        timeout: 600000,
    });
}
if (data.error || (data.code !== undefined && data.code !== 0)) {
    const detail = typeof data.error === "string" ? data.error : data.error?.message || data.message;
    throw new Error(detail ? "image request failed: " + detail : "image request failed");
}
return data.data || data.images || data.results;`)},{id:"openai-text",name:"Responses 协议文本",description:"POST /v1/responses",logo:"/icons/openai.svg",invertInDark:!0,capability:"text",source:k("text",String.raw`if (params.tools) {
    const reasoningModel = params.reasoningEffort !== "auto";
    return params.utils.runTextAgent("responses", {
        providerOptions: {
            openai: {
                store: false,
                // 只有用户明确选择思考层级时才按推理模型发送 reasoning，避免不支持的网关直接拒绝请求。
                ...(reasoningModel ? { forceReasoning: true, systemMessageMode: "system", reasoningEffort: params.reasoningEffort, reasoningSummary: "detailed" } : {}),
            },
        },
    });
}

const { model, messages, apiKey, reasoningEffort, utils } = params;
// Responses 流式文本；onDelta 接收截至目前的完整文本。
const input = messages.map(({ role, content }) => ({
    role,
    content: Array.isArray(content)
        ? content.map((part) =>
              part.type === "text"
                  ? {
                        type: "input_text",
                        text: part.text,
                    }
                  : {
                        type: "input_image",
                        image_url: part.image_url.url,
                    },
          )
        : content,
}));
let text = "";
await utils.stream(
    {
        url: utils.http.url("/responses"),
        headers: { Authorization: "Bearer " + apiKey },
        data: {
            model,
            input,
            stream: true,
            ...(reasoningEffort === "auto" ? {} : { reasoning: { effort: reasoningEffort } }),
        },
    },
    (event) => {
        if (
            event.error ||
            event.type === "error" ||
            event.type === "response.failed" ||
            event.type === "response.incomplete"
        ) {
            throw new Error("text request failed");
        }
        if (event.type === "response.output_text.delta") {
            text += event.delta;
        }
        if (!text && event.type === "response.output_text.done") {
            text = event.text;
        }
        const response = event.response || event;
        if (response.error) {
            throw new Error("text request failed");
        }
        if (!text && response.output) {
            text = response.output
                .flatMap((item) => (item.type === "message" ? item.content : []))
                .filter((part) => part.type === "output_text")
                .map((part) => part.text)
                .join("");
        }
        if (text) {
            utils.onDelta(text);
        }
    },
);
return text;`)},{id:"openai-video",name:"Videos 协议视频",description:`POST /v1/videos
文生 / 单张参考图；查询与下载：/{id}、/{id}/content。`,logo:"/icons/openai.svg",invertInDark:!0,capability:"video",source:k("video",String.raw`const { model, prompt, images, videos, audios, taskId, options, utils } = params;
// taskId 为空时创建任务；有值时查询一次，应用负责持续查询与恢复。
function unwrap(payload) {
    if (taskId && (payload.status === "failed" || payload.status === "cancelled")) {
        return payload;
    }
    if (
        payload.error ||
        (payload.code !== undefined && payload.code !== 0 && payload.code !== "0")
    ) {
        throw new Error("video request failed");
    }
    return payload.code !== undefined ? payload.data : payload;
}
if (taskId) {
    const state = unwrap(await utils.http.get("/videos/" + encodeURIComponent(taskId)));
    if (state.status === "failed" || state.status === "cancelled") {
        return { status: "failed" };
    }
    const url =
        state.video_url ||
        state.result_url ||
        state.url ||
        state.content?.video_url ||
        state.content?.url;
    if (url) {
        return {
            status: "completed",
            result: { url },
        };
    }
    if (state.status === "completed") {
        return {
            status: "completed",
            result: await utils.http.get("/videos/" + encodeURIComponent(taskId) + "/content", {
                responseType: "blob",
            }),
        };
    }
    return { status: "pending" };
}
// 标准 Videos 仅上传一个 input_reference 文件；多素材请选对应协议。
if (images.length > 1 || videos.length || audios.length) {
    throw new Error("SCRIPT_VIDEO_REFERENCES_UNSUPPORTED");
}
const form = new FormData();
form.set("model", model);
form.set("prompt", prompt);
form.set("seconds", options.seconds);
if (options.size) {
    form.set("size", options.size);
}
if (images.length) {
    form.append("input_reference", await utils.toBlob(images[0]), "reference.png");
}
const created = unwrap(await utils.http.post("/videos", form));
return { id: created.id };`)},{id:"openai-multimodal-video",name:"Videos 扩展协议视频",description:`POST /v1/videos
需支持 first_frame、image[]、video[]、audio[] 扩展字段。`,logo:"/icons/openai.svg",invertInDark:!0,capability:"video",source:k("video",String.raw`const { model, prompt, images, videos, audios, taskId, options, utils } = params;
// taskId 为空时创建任务；有值时查询一次，应用负责持续查询与恢复。
function unwrap(payload) {
    if (taskId && (payload.status === "failed" || payload.status === "cancelled")) {
        return payload;
    }
    if (
        payload.error ||
        (payload.code !== undefined && payload.code !== 0 && payload.code !== "0")
    ) {
        throw new Error("video request failed");
    }
    return payload.code !== undefined ? payload.data : payload;
}
if (taskId) {
    const state = unwrap(await utils.http.get("/videos/" + encodeURIComponent(taskId)));
    if (state.status === "failed" || state.status === "cancelled") {
        return { status: "failed" };
    }
    const url =
        state.video_url ||
        state.result_url ||
        state.url ||
        state.content?.video_url ||
        state.content?.url;
    if (url) {
        return {
            status: "completed",
            result: { url },
        };
    }
    if (state.status === "completed") {
        return {
            status: "completed",
            result: await utils.http.get("/videos/" + encodeURIComponent(taskId) + "/content", {
                responseType: "blob",
            }),
        };
    }
    return { status: "pending" };
}
const { seconds, size, resolution, ratio, generateAudio, watermark, mode } = options;
const form = new FormData();
for (const [key, value] of Object.entries({
    model,
    prompt,
    seconds,
    size: size || "1280x720",
    resolution_name: resolution,
    generate_audio: generateAudio,
    watermark,
    mode,
})) {
    form.set(key, String(value));
}
if (ratio && ratio !== "auto") {
    form.set("ratio", ratio);
}
for (let i = 0; i < images.length; i++) {
    const blob = await utils.toBlob(images[i]);
    const field = mode === "frames" ? (i === 0 ? "first_frame" : "last_frame") : "image[]";
    form.append(field, blob, "ref.png");
    form.append("images", blob, "ref.png");
}
for (const url of videos) {
    form.append("video[]", await utils.toBlob(url), "ref.mp4");
}
for (const url of audios) {
    form.append("audio[]", await utils.toBlob(url), "ref.mp3");
}
const created = unwrap(await utils.http.post("/videos", form));
return { id: created.id };`)},{id:"openai-audio",name:"Speech 协议音频",description:"POST /v1/audio/speech",logo:"/icons/openai.svg",invertInDark:!0,capability:"audio",source:k("audio",String.raw`const { model, prompt, options, utils } = params;
const { instructions } = options;
const voices = ["alloy", "ash", "ballad", "coral", "echo", "fable", "nova", "onyx", "sage", "shimmer", "verse", "marin", "cedar"];
const formats = ["mp3", "wav", "opus", "aac", "flac", "pcm"];
const voice = voices.includes(options.voice) ? options.voice : "alloy";
const format = formats.includes(options.format) ? options.format : "mp3";
const value = Number(options.speed);
const speed = Number.isFinite(value) ? Math.max(0.25, Math.min(4, Number(value.toFixed(2)))) : 1;
return await utils.http.post(
    "/audio/speech",
    {
        model,
        input: prompt,
        voice,
        response_format: format,
        speed: Number(speed),
        ...(instructions ? { instructions } : {}),
    },
    { responseType: "blob" },
);`)},{id:"openai-chat-image",name:"Chat Completions 协议生图",description:`POST /v1/chat/completions
需支持聊天生图。`,logo:"/icons/openai.svg",invertInDark:!0,capability:"image",source:k("image",String.raw`const { model, prompt, images, apiKey, options, utils } = params;
const content = [
    {
        type: "text",
        text: prompt,
    },
    ...(await Promise.all(
        images.map(async (url) => ({
            type: "image_url",
            image_url: { url: url.startsWith("blob:") ? await utils.toDataUrl(url) : url },
        })),
    )),
];
// image_config 是兼容服务的扩展字段，比例和分辨率由服务支持情况决定。
const imageConfig = {
    ...(options.ratio ? { aspect_ratio: options.ratio } : {}),
    ...(options.resolution ? { image_size: options.resolution } : {}),
};
const results = await Promise.all(
    Array.from({ length: options.count }, async () => {
        const response = await utils.request({
            method: "post",
            url: utils.http.url("/chat/completions"),
            headers: { Authorization: "Bearer " + apiKey },
            timeout: 600000,
            data: {
                model,
                messages: [
                    {
                        role: "user",
                        content,
                    },
                ],
                modalities: ["text", "image"],
                stream: false,
                ...(Object.keys(imageConfig).length ? { image_config: imageConfig } : {}),
            },
        });
        if (response.error) {
            throw new Error("image request failed");
        }
        const urls = [];
        for (const choice of response.choices) {
            if (
                choice.finish_reason === "length" ||
                choice.finish_reason === "content_filter" ||
                choice.message.refusal
            ) {
                throw new Error("image request failed");
            }
            const message = choice.message;
            const parts =
                typeof message.content === "string"
                    ? [
                          {
                              type: "text",
                              text: message.content,
                          },
                      ]
                    : message.content || [];
            for (const part of [...(message.images || []), ...parts]) {
                if (part.type === "image_url") {
                    urls.push(part.image_url.url);
                }
                if (part.type === "text") {
                    urls.push(...(await utils.markdownImages(part.text)));
                }
            }
        }
        if (!urls.length) {
            throw new Error("image request failed");
        }
        return [...new Set(urls)];
    }),
);
return results.flat();`)},{id:"openai-responses-image",name:"Responses 协议生图",description:`POST /v1/responses
需支持 image_generation 工具。`,logo:"/icons/openai.svg",invertInDark:!0,capability:"image",source:k("image",String.raw`const { model, prompt, images, apiKey, options, utils } = params;
const { size, count } = options;
const quality = ["low", "medium", "high", "xhigh", "max"].includes(options.quality) ? options.quality : undefined;
const background = options.background === "transparent" ? "transparent" : undefined;
const content = [
    {
        type: "input_text",
        text: prompt,
    },
    ...(await Promise.all(
        images.map(async (url) => ({
            type: "input_image",
            image_url: url.startsWith("blob:") ? await utils.toDataUrl(url) : url,
        })),
    )),
];
// model 使用渠道中配置的主模型；图片由 image_generation 工具生成。
const tool = {
    type: "image_generation",
    output_format: "png",
    ...(size ? { size } : {}),
    ...(quality ? { quality } : {}),
    ...(background ? { background } : {}),
};
const results = await Promise.all(
    Array.from({ length: count }, async () => {
        const response = await utils.request({
            method: "post",
            url: utils.http.url("/responses"),
            headers: { Authorization: "Bearer " + apiKey },
            timeout: 600000,
            data: {
                model,
                input: [
                    {
                        role: "user",
                        content,
                    },
                ],
                tools: [tool],
                tool_choice: { type: "image_generation" },
                stream: false,
            },
        });
        if (response.error || response.status !== "completed") {
            throw new Error("image request failed");
        }
        const outputs = response.output.filter((item) => item.type === "image_generation_call");
        if (
            !outputs.length ||
            outputs.some((item) => item.status !== "completed" || !item.result)
        ) {
            throw new Error("image request failed");
        }
        return outputs.map((item) => "data:image/png;base64," + item.result);
    }),
);
return results.flat();`)},{id:"openai-chat-text",name:"Chat Completions 协议文本",description:"POST /v1/chat/completions",logo:"/icons/openai.svg",invertInDark:!0,capability:"text",source:k("text",String.raw`if (params.tools) {
    return params.utils.runTextAgent("chat-completions", {
        providerOptions: {
            openai: {
                store: false,
                ...(params.reasoningEffort !== "auto" ? { reasoningEffort: params.reasoningEffort } : {}),
            },
        },
    });
}

const { model, messages, apiKey, reasoningEffort, utils } = params;
const input = await Promise.all(
    messages.map(async (message) => ({
        ...message,
        content: Array.isArray(message.content)
            ? await Promise.all(
                  message.content.map(async (part) =>
                      part.type === "image_url" && part.image_url.url.startsWith("blob:")
                          ? {
                                ...part,
                                image_url: {
                                    ...part.image_url,
                                    url: await utils.toDataUrl(part.image_url.url),
                                },
                            }
                          : part,
                  ),
              )
            : message.content,
    })),
);
let text = "";
let completed = false;
await utils.stream(
    {
        url: utils.http.url("/chat/completions"),
        headers: { Authorization: "Bearer " + apiKey },
        data: {
            model,
            messages: input,
            stream: true,
            ...(reasoningEffort === "auto" ? {} : { reasoning_effort: reasoningEffort }),
        },
    },
    (event) => {
        if (event.error) {
            throw new Error("text request failed");
        }
        const choice = event.choices?.[0];
        if (!choice) {
            return;
        }
        if (choice.finish_reason === "length") {
            throw new Error("SCRIPT_TEXT_INCOMPLETE");
        }
        if (
            choice.finish_reason === "content_filter" ||
            choice.message?.refusal ||
            choice.delta?.refusal
        ) {
            throw new Error("text request failed");
        }
        if (choice.delta?.content) {
            text += choice.delta.content;
        }
        if (choice.message?.content) {
            text = choice.message.content;
        }
        if (choice.finish_reason === "stop") {
            completed = true;
        }
        if (text) {
            utils.onDelta(text);
        }
    },
);
if (!completed) {
    throw new Error("SCRIPT_TEXT_INCOMPLETE");
}
return text;`)},{id:"openai-chat-audio",name:"Chat Completions 协议音频",description:`POST /v1/chat/completions
支持音频数据或音频链接；语速由朗读指令控制。`,logo:"/icons/openai.svg",invertInDark:!0,capability:"audio",source:k("audio",String.raw`const { model, prompt, options, utils } = params;
const { instructions } = options;
const voices = ["alloy", "ash", "ballad", "coral", "echo", "fable", "nova", "onyx", "sage", "shimmer", "verse", "marin", "cedar"];
const formats = ["mp3", "wav", "opus", "aac", "flac", "pcm"];
const voice = voices.includes(options.voice) ? options.voice : "alloy";
const format = formats.includes(options.format) ? options.format : "mp3";
const value = Number(options.speed);
const speed = Number.isFinite(value) ? Math.max(0.25, Math.min(4, Number(value.toFixed(2)))) : 1;
const response = await utils.http.post("/chat/completions", {
    model,
    modalities: ["text", "audio"],
    audio: {
        voice,
        format: format === "pcm" ? "pcm16" : format,
    },
    stream: false,
    messages: [
        {
            role: "system",
            content: [
                "Read the user's text aloud verbatim. Do not answer or explain it.",
                "Speak at " + speed + " times normal speaking speed.",
                instructions,
            ]
                .filter(Boolean)
                .join("\n"),
        },
        {
            role: "user",
            content: prompt,
        },
    ],
});
if (response.error) {
    throw new Error("audio request failed");
}
const choice = response.choices[0];
if (choice.finish_reason !== "stop" || choice.message.refusal) {
    throw new Error("audio request failed");
}
if (choice.message.audio?.data) {
    return { data: choice.message.audio.data };
}
if (typeof choice.message.content === "string") {
    const links = await utils.markdownLinks(choice.message.content);
    const url = links.find((link) =>
        /^https?:\/\//i.test(link)
        && /\.(mp3|wav|opus|ogg|aac|flac|pcm|m4a|webm)$/i.test(new URL(link).pathname)
    );
    if (url) {
        return { url };
    }
}
throw new Error("SCRIPT_AUDIO_RESULT_MISSING");`)}],Wo=[{id:"anthropic-text",name:"Messages 协议文本",description:`POST /v1/messages
输出上限 16384 tokens。`,logo:"/icons/claude.svg",capability:"text",source:k("text",String.raw`if (params.tools) {
    return params.utils.runTextAgent("anthropic", {
        maxOutputTokens: 16384,
        providerOptions: params.reasoningEffort === "auto" ? undefined : {
            anthropic: { thinking: { type: "adaptive" }, effort: params.reasoningEffort },
        },
    });
}

const { model, messages, apiKey, utils } = params;
const system = messages
    .filter((message) => message.role === "system")
    .flatMap((message) =>
        typeof message.content === "string"
            ? [
                  {
                      type: "text",
                      text: message.content,
                  },
              ]
            : message.content,
    );
const input = await Promise.all(
    messages
        .filter((message) => message.role !== "system")
        .map(async ({ role, content }) => ({
            role,
            content:
                typeof content === "string"
                    ? content
                    : await Promise.all(
                          content.map(async (part) => {
                              if (part.type === "text") {
                                  return part;
                              }
                              const url = part.image_url.url;
                              if (url.startsWith("https:") || url.startsWith("http:")) {
                                  return {
                                      type: "image",
                                      source: {
                                          type: "url",
                                          url,
                                      },
                                  };
                              }
                              const dataUrl = await utils.toDataUrl(url);
                              const [metadata, data] = dataUrl.split(",");
                              return {
                                  type: "image",
                                  source: {
                                      type: "base64",
                                      media_type: metadata.slice(5, metadata.indexOf(";")),
                                      data,
                                  },
                              };
                          }),
                      ),
        })),
);
let text = "";
let completed = false;
await utils.stream(
    {
        url: utils.http.url("/messages"),
        headers: {
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
            "anthropic-dangerous-direct-browser-access": "true",
        },
        data: {
            model,
            messages: input,
            ...(system.length ? { system } : {}),
            max_tokens: 16384,
            stream: true,
        },
    },
    (event) => {
        if (event.type === "error" || event.error) {
            throw new Error("text request failed");
        }
        const stopReason =
            event.type === "message_delta" ? event.delta.stop_reason : event.stop_reason;
        if (stopReason === "max_tokens" || stopReason === "model_context_window_exceeded") {
            throw new Error("SCRIPT_TEXT_INCOMPLETE");
        }
        if (stopReason && stopReason !== "end_turn" && stopReason !== "stop_sequence") {
            throw new Error("text request failed");
        }
        if (event.type === "content_block_start" && event.content_block.type === "text") {
            text += event.content_block.text;
        }
        if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            text += event.delta.text;
        }
        if (event.type === "message") {
            text = event.content
                .filter((part) => part.type === "text")
                .map((part) => part.text)
                .join("");
        }
        if (event.type === "message_stop" || (event.type === "message" && stopReason)) {
            completed = true;
        }
        if (text) {
            utils.onDelta(text);
        }
    },
);
if (!completed) {
    throw new Error("SCRIPT_TEXT_INCOMPLETE");
}
return text;`)}],Ho=[{id:"gemini-image",name:"Gemini 协议生图",description:"POST /v1beta/models/{model}:generateContent",logo:"/icons/gemini.svg",capability:"image",source:k("image",String.raw`const { model, prompt, images, baseUrl, apiKey, options, utils } = params;
const root = baseUrl.replace(/\/+$/, "").replace(/\/v1(?:beta)?$/, "") + "/v1beta";
const parts = [
    { text: prompt },
    ...(await Promise.all(
        images.map(async (image) => {
            const [header, data] = (await utils.toDataUrl(image)).split(",");
            return {
                inlineData: {
                    mimeType: header.slice(5, -7),
                    data,
                },
            };
        }),
    )),
];
const { count, ratio, resolution, size } = options;
const supportedRatios = ["1:1", "1:4", "1:8", "2:3", "3:2", "3:4", "4:1", "4:3", "4:5", "5:4", "8:1", "9:16", "16:9", "21:9"];
let aspectRatio;
if (ratio) {
    const [width, height] = ratio.split(":").map(Number);
    const target = width / height;
    aspectRatio = supportedRatios.reduce((best, item) => {
        const [currentWidth, currentHeight] = item.split(":").map(Number);
        const [bestWidth, bestHeight] = best.split(":").map(Number);
        return Math.abs(currentWidth / currentHeight - target) < Math.abs(bestWidth / bestHeight - target) ? item : best;
    });
}
let imageSize = resolution;
if (!imageSize && size) {
    const edge = Math.max(...size.split("x").map(Number));
    imageSize = edge <= 768 ? "512" : edge <= 1536 ? "1K" : edge <= 3072 ? "2K" : "4K";
}
const results = await Promise.all(
    Array.from({ length: count }, async () => {
        const data = await utils.request({
            method: "post",
            url:
                root +
                "/models/" +
                encodeURIComponent(model.replace(/^models\//, "")) +
                ":generateContent",
            headers: { "x-goog-api-key": apiKey },
            timeout: 600000,
            data: {
                contents: [
                    {
                        role: "user",
                        parts,
                    },
                ],
                generationConfig: {
                    responseModalities: ["TEXT", "IMAGE"],
                    imageConfig: {
                        ...(aspectRatio ? { aspectRatio } : {}),
                        ...(imageSize ? { imageSize: imageSize.toUpperCase() } : {}),
                    },
                },
            },
        });
        if (data.error || data.promptFeedback?.blockReason) {
            throw new Error("image request failed");
        }
        return data.candidates
            .flatMap((candidate) => candidate.content.parts)
            .flatMap((part) => {
                const inline = part.inlineData || part.inline_data;
                if (inline) {
                    return [
                        "data:" +
                            (inline.mimeType || inline.mime_type) +
                            ";base64," +
                            inline.data,
                    ];
                }
                return part.fileData?.fileUri ? [part.fileData.fileUri] : [];
            });
    }),
);
return results.flat();`)},{id:"gemini-text",name:"Gemini 协议文本",description:"POST /v1beta/models/{model}:streamGenerateContent?alt=sse",logo:"/icons/gemini.svg",capability:"text",source:k("text",String.raw`if (params.tools) {
    if (params.reasoningEffort === "xhigh") {
        throw new Error("TEXT_REASONING_UNSUPPORTED");
    }
    return params.utils.runTextAgent("gemini", {
        providerOptions: params.reasoningEffort === "auto" ? undefined : {
            google: { thinkingConfig: { thinkingLevel: params.reasoningEffort } },
        },
    });
}

const { model, messages, baseUrl, apiKey, utils } = params;
const root = baseUrl.replace(/\/+$/, "").replace(/\/v1(?:beta)?$/, "") + "/v1beta";
const systems = messages
    .filter((message) => message.role === "system")
    .map((message) => message.content)
    .join("\n\n");
const contents = messages
    .filter((message) => message.role !== "system")
    .map(({ role, content }) => ({
        role: role === "assistant" ? "model" : "user",
        parts:
            typeof content === "string"
                ? [{ text: content }]
                : content.map((part) => {
                      if (part.type === "text") {
                          return { text: part.text };
                      }
                      const url = part.image_url.url;
                      if (!url.startsWith("data:")) {
                          return {
                              fileData: {
                                  fileUri: url,
                                  mimeType: "image/png",
                              },
                          };
                      }
                      const [header, data] = url.split(",");
                      return {
                          inlineData: {
                              mimeType: header.slice(5, -7),
                              data,
                          },
                      };
                  }),
    }));
let text = "";
await utils.stream(
    {
        url:
            root +
            "/models/" +
            encodeURIComponent(model.replace(/^models\//, "")) +
            ":streamGenerateContent?alt=sse",
        headers: { "x-goog-api-key": apiKey },
        data: {
            contents,
            ...(systems ? { systemInstruction: { parts: [{ text: systems }] } } : {}),
        },
    },
    (event) => {
        if (event.error || event.promptFeedback?.blockReason) {
            throw new Error("text request failed");
        }
        for (const candidate of event.candidates || []) {
            for (const part of candidate.content?.parts || []) {
                if (part.text && !part.thought) {
                    text += part.text;
                }
            }
        }
        if (text) {
            utils.onDelta(text);
        }
    },
);
return text;`)},{id:"gemini-video",name:"Gemini 协议视频",description:`创建：POST /v1beta/models/{model}:predictLongRunning
查询：GET /v1beta/{taskId}`,logo:"/icons/gemini.svg",capability:"video",source:k("video",String.raw`const { model, prompt, images, videos, audios, baseUrl, apiKey, taskId, options, utils } =
    params;
const root = baseUrl.replace(/\/+$/, "").replace(/\/v1(?:beta)?$/, "") + "/v1beta";
const headers = { "x-goog-api-key": apiKey };
function unwrap(payload) {
    if (payload.code !== undefined && payload.code !== 0 && payload.code !== "0") {
        throw new Error("video request failed");
    }
    return payload.code !== undefined ? payload.data : payload;
}
if (taskId) {
    const state = unwrap(
        await utils.request({
            method: "get",
            url: root + "/" + taskId,
            headers,
        }),
    );
    if (state.error) {
        return { status: "failed" };
    }
    if (!state.done) {
        return { status: "pending" };
    }
    const uri = state.response.generateVideoResponse.generatedSamples[0].video.uri;
    return {
        status: "completed",
        result: await utils.request({
            method: "get",
            url: uri,
            headers,
            responseType: "blob",
        }),
    };
}
async function inline(source) {
    const dataUrl = await utils.toDataUrl(source);
    const [header, data] = dataUrl.split(",");
    return {
        bytesBase64Encoded: data,
        mimeType: header.slice(5, -7),
    };
}
const { mode, ratio, seconds, resolution } = options;
const instance = { prompt };
if (mode === "frames") {
    if (images[0]) {
        instance.image = await inline(images[0]);
    }
    if (images[1]) {
        instance.lastFrame = await inline(images[1]);
    }
} else {
    instance.referenceImages = await Promise.all(
        images.map(async (image) => ({
            image: await inline(image),
            referenceType: "asset",
        })),
    );
}
if (videos[0]) {
    instance.video = await inline(videos[0]);
}
if (audios[0]) {
    instance.audio = await inline(audios[0]);
}
const created = unwrap(
    await utils.request({
        method: "post",
        url:
            root +
            "/models/" +
            encodeURIComponent(model.replace(/^models\//, "")) +
            ":predictLongRunning",
        headers,
        data: {
            instances: [instance],
            parameters: {
                aspectRatio: ratio,
                durationSeconds: Number(seconds),
                resolution,
            },
        },
    }),
);
if (created.error) {
    throw new Error("video request failed");
}
return { id: created.name };`)}],Go=[{id:"agnes-image",name:"Agnes 协议生图",description:"生图 / 参考图：POST /v1/images/generations",logo:"/icons/agnes.png",capability:"image",source:k("image",String.raw`const { model, prompt, images, options, utils } = params;
if (!options.size) {
    throw new Error("SCRIPT_IMAGE_SIZE_REQUIRED");
}
const body = {
    model,
    prompt,
    size: ["1K", "2K", "3K", "4K"].includes(options.resolution)
        ? options.resolution
        : options.size,
    ...(options.ratio ? { ratio: options.ratio } : {}),
    ...(images.length
        ? {
              extra_body: {
                  image: await Promise.all(
                      images.map((image) =>
                          image.startsWith("blob:") ? utils.toDataUrl(image) : image,
                      ),
                  ),
                  response_format: "b64_json",
              },
          }
        : { return_base64: true }),
};
const results = await Promise.all(
    Array.from({ length: options.count }, async () => {
        const result = await utils.http.post("/images/generations", body);
        if (result.error) {
            throw new Error("image request failed");
        }
        return result.data;
    }),
);
return results.flat();`)},{id:"agnes-text",name:"Agnes 协议文本",description:"POST /v1/chat/completions",logo:"/icons/agnes.png",capability:"text",source:k("text",String.raw`if (params.tools) {
    return params.utils.runTextAgent("chat-completions", {
        providerOptions: {
            openai: {
                store: false,
                ...(params.reasoningEffort !== "auto" ? { reasoningEffort: params.reasoningEffort } : {}),
            },
        },
    });
}
const { model, messages, baseUrl, apiKey, utils } = params;
const root = baseUrl.replace(/\/+$/, "").replace(/\/v1$/, "");
let text = "";
await utils.stream(
    {
        url: root + "/v1/chat/completions",
        headers: { Authorization: "Bearer " + apiKey },
        data: {
            model,
            messages,
            stream: true,
        },
    },
    (event) => {
        if (event.error) {
            throw new Error("text request failed");
        }
        const choice = event.choices?.[0];
        if (choice?.delta?.content) {
            text += choice.delta.content;
        }
        if (choice?.message?.content) {
            text = choice.message.content;
        }
        if (text) {
            utils.onDelta(text);
        }
    },
);
return text;`)},{id:"agnes-video",name:"Agnes 协议视频",description:`创建：POST /v1/videos
查询：GET /agnesapi?video_id={id}&model_name={model}
参考素材需公开链接。`,logo:"/icons/agnes.png",capability:"video",source:k("video",String.raw`const { model, prompt, images: sourceImages, videos: sourceVideos, audios: sourceAudios, baseUrl, apiKey, taskId, options, utils } =
    params;
if (taskId) {
    const root = baseUrl.replace(/\/+$/, "").replace(/\/v1$/, "");
    const state = await utils.request({
        method: "get",
        url: root + "/agnesapi",
        headers: { Authorization: "Bearer " + apiKey },
        params: {
            video_id: taskId,
            model_name: model,
        },
    });
    if (state.status === "completed") {
        return {
            status: "completed",
            result: { url: state.url },
        };
    }
    if (state.status === "failed") {
        return { status: "failed" };
    }
    if (state.status === "queued" || state.status === "in_progress") {
        return { status: "pending" };
    }
    throw new Error("video status unavailable");
}
const images = [];
const videos = [];
const audios = [];
for (const [sources, destination] of [[sourceImages, images], [sourceVideos, videos], [sourceAudios, audios]]) {
    for (const source of sources) {
        destination.push(await utils.toPublicUrl(source));
    }
}
const mode =
    !images.length && !videos.length && !audios.length
        ? "text"
        : videos.length || audios.length || options.mode === "reference"
          ? "reference"
          : "keyframe";
const body = {
    model,
    prompt,
    mode,
    seconds: String(options.seconds),
    size: options.resolution.toUpperCase(),
    aspect_ratio: options.ratio,
};
if (mode === "keyframe") {
    body.first_frame = images[0];
    if (images[1]) {
        body.last_frame = images[1];
    }
}
if (mode === "reference") {
    body.images = images;
    body.videos = videos.map((url) => ({ url }));
    body.audios = audios;
}
const created = await utils.http.post("/videos", body);
return { id: created.video_id };`)}];function fe(t,e,a,o,n,i,d="Bearer"){return{id:t,name:e,description:o.replaceAll("{root}",a),capability:"video",...n,source:k("video",`const {
    model,
    prompt,
    images,
    videos,
    audios,
    taskId,
    options,
    baseUrl,
    apiKey,
    utils,
} = params;
// 渠道可填写服务根地址或下方完整路径；保留部署时的子目录。
const path = ${JSON.stringify(a)};
const base = baseUrl.replace(/\\/$/, "");
const root = base.endsWith(path) ? base : base.replace(/\\/v1$/, "") + path;
const headers = {
    Authorization: ${JSON.stringify(d+" ")} + apiKey,
};
${i.query}
${i.create}`)}}const Yo=[fe("seedance-video","Seedance 协议视频","/api/v3",`POST {root}/contents/generations/tasks
豆包 / 火山方舟；支持首尾帧、多素材参考。`,{logo:"/icons/doubao.svg"},{query:String.raw`if (taskId) {
    const endpoint = root + "/contents/generations/tasks";
    const state = await utils.request({
        method: "get",
        url: endpoint + "/" + encodeURIComponent(taskId),
        headers,
    });
    if (state.status === "succeeded" && state.content?.video_url) {
        return {
            status: "completed",
            result: { url: state.content.video_url },
        };
    }
    if (["queued", "running"].includes(state.status)) {
        return { status: "pending" };
    }
    return { status: "failed" };
}`,create:String.raw`const endpoint = root + "/contents/generations/tasks";
const referenceMode = options.mode === "reference" || videos.length > 0 || audios.length > 0;
const content = [{
    type: "text",
    text: prompt,
}];
for (const [index, image] of images.entries()) {
    content.push({
        type: "image_url",
        image_url: {
            url: image.startsWith("asset:") ? image
                : /^https?:/.test(image) ? await utils.toPublicUrl(image) : await utils.toDataUrl(image),
        },
        role: referenceMode ? "reference_image" : index === 0 ? "first_frame" : "last_frame",
    });
}
for (const video of videos) {
    content.push({
        type: "video_url",
        video_url: {
            url: video.startsWith("asset:") ? video : await utils.toPublicUrl(video),
        },
        role: "reference_video",
    });
}
for (const audio of audios) {
    content.push({
        type: "audio_url",
        audio_url: {
            url: audio.startsWith("asset:") ? audio
                : /^https?:/.test(audio) ? await utils.toPublicUrl(audio) : await utils.toDataUrl(audio),
        },
        role: "reference_audio",
    });
}
const created = await utils.request({
    method: "post",
    url: endpoint,
    headers,
    data: {
        model,
        content,
        duration: Number(options.seconds),
        resolution: options.resolution,
        ratio: images.length && !referenceMode ? "adaptive" : options.ratio,
        generate_audio: options.generateAudio,
        watermark: options.watermark,
    },
});
return { id: created.id };`})],Xo=[fe("wan-video","Wan 协议视频","/api/v1",`POST {root}/services/aigc/{video-generation|image2video}/video-synthesis
万相；按模型选择文生、图生、首尾帧、音频驱动或多素材参考。`,{logo:"/icons/wan.png"},{query:String.raw`if (taskId) {
    const state = await utils.request({
        method: "get",
        url: root + "/tasks/" + encodeURIComponent(taskId),
        headers,
    });
    if (state.output?.task_status === "SUCCEEDED") {
        return {
            status: "completed",
            result: { url: state.output.video_url },
        };
    }
    if (["PENDING", "RUNNING"].includes(state.output?.task_status)) {
        return { status: "pending" };
    }
    return { status: "failed" };
}`,create:String.raw`const frames = model.includes("-kf2v");
const speech = model.includes("-s2v");
const media = model.startsWith("wan3.") || /^wan2\.7-(i2v|r2v)(-|$)/.test(model);
const service = frames || speech ? "image2video" : "video-generation";
const input = { prompt };
const parameters = {
    resolution: options.resolution.toUpperCase(),
};
if (frames) {
    if (!images.length) {
        throw new Error("SCRIPT_IMAGE_REQUIRED");
    }
    if (images.length > 2 || videos.length || audios.length) {
        throw new Error("SCRIPT_VIDEO_REFERENCES_UNSUPPORTED");
    }
    input.first_frame_url = await utils.toPublicUrl(images[0]);
    if (images[1]) {
        input.last_frame_url = await utils.toPublicUrl(images[1]);
    }
    parameters.duration = Number(options.seconds);
} else if (speech) {
    if (images.length !== 1 || audios.length !== 1 || videos.length) {
        throw new Error("SCRIPT_IMAGE_AUDIO_REQUIRED");
    }
    input.image_url = await utils.toPublicUrl(images[0]);
    input.audio_url = await utils.toPublicUrl(audios[0]);
} else if (media) {
    input.media = [];
    const referenceMode = model.includes("-r2v") || options.mode === "reference" ||
        (!model.includes("2.7-i2v") && (videos.length > 0 || audios.length > 0));
    for (const [index, image] of images.entries()) {
        input.media.push({
            type: referenceMode ? "reference_image" : index === 0 ? "first_frame" : "last_frame",
            url: await utils.toPublicUrl(image),
        });
    }
    for (const video of videos) {
        input.media.push({
            type: model.includes("2.7-i2v") ? "first_clip" : "reference_video",
            url: await utils.toPublicUrl(video),
        });
    }
    for (const audio of audios) {
        input.media.push({
            type: model.includes("2.7-i2v") ? "driving_audio" : "reference_audio",
            url: await utils.toPublicUrl(audio),
        });
    }
    if (!input.media.length) {
        delete input.media;
    }
    parameters.ratio = options.ratio;
    parameters.duration = Number(options.seconds);
    parameters.watermark = options.watermark;
    parameters.audio = options.generateAudio;
} else {
    if (videos.length || images.length > 1 || audios.length > 1) {
        throw new Error("SCRIPT_VIDEO_REFERENCES_UNSUPPORTED");
    }
    if (images.length) {
        input.img_url = await utils.toPublicUrl(images[0]);
    } else if (model.startsWith("wan2.7-t2v")) {
        parameters.ratio = options.ratio;
    } else {
        if (!options.size) {
            throw new Error("SCRIPT_IMAGE_SIZE_REQUIRED");
        }
        parameters.size = options.size.replace("x", "*");
        delete parameters.resolution;
    }
    if (audios.length) {
        input.audio_url = await utils.toPublicUrl(audios[0]);
    }
    parameters.duration = Number(options.seconds);
}
const created = await utils.request({
    method: "post",
    url: root + "/services/aigc/" + service + "/video-synthesis",
    headers: {
        ...headers,
        "X-DashScope-Async": "enable",
    },
    data: {
        model,
        input,
        parameters,
    },
});
return { id: created.output?.task_id };`})],Jo=[fe("kling-video","Kling 协议视频","/v1/videos",`POST {root}/{text2video|image2video}
可灵；无图文生，有图图生；需填写已签发的 JWT。`,{logo:"/icons/kling.svg"},{query:String.raw`if (taskId) {
    const state = await utils.request({
        method: "get",
        url: root + "/" + taskId,
        headers,
    });
    if (state.code !== 0) {
        return { status: "failed" };
    }
    if (state.data.task_status === "succeed") {
        return {
            status: "completed",
            result: { url: state.data.task_result.videos[0].url },
        };
    }
    if (["submitted", "processing"].includes(state.data.task_status)) {
        return { status: "pending" };
    }
    return { status: "failed" };
}`,create:String.raw`const operation = images.length ? "image2video" : "text2video";
if (videos.length || audios.length) {
    throw new Error("SCRIPT_VIDEO_REFERENCES_UNSUPPORTED");
}
const data = {
    model_name: model,
    prompt,
    duration: options.seconds,
    aspect_ratio: options.ratio,
};
if (images.length) {
    if (images.length > 2 || options.mode === "reference") {
        throw new Error("SCRIPT_VIDEO_REFERENCES_UNSUPPORTED");
    }
    data.image = await utils.toPublicUrl(images[0]);
    if (images[1]) {
        data.image_tail = await utils.toPublicUrl(images[1]);
    }
}
const created = await utils.request({
    method: "post",
    url: root + "/" + operation,
    headers,
    data,
});
if (created.code !== 0) {
    throw new Error("video creation failed");
}
// 将创建类型一并保存，查询时不依赖图片或当前生成设置。
return { id: operation + "/" + encodeURIComponent(created.data.task_id) };`})],Qo=[fe("vidu-video","Vidu 协议视频","/ent/v2",`POST {root}/{text2video|img2video|start-end2video|reference2video}
按参考素材选择路径。`,{logo:"/icons/vidu.svg"},{query:String.raw`if (taskId) {
    const state = await utils.request({
        method: "get",
        url: root + "/tasks/" + encodeURIComponent(taskId) + "/creations",
        headers,
    });
    if (state.state === "success") {
        return {
            status: "completed",
            result: { url: state.creations[0].url },
        };
    }
    if (["created", "queueing", "processing"].includes(state.state)) {
        return { status: "pending" };
    }
    return { status: "failed" };
}`,create:String.raw`if (videos.length || audios.length) {
    throw new Error("SCRIPT_VIDEO_REFERENCES_UNSUPPORTED");
}
const operation = !images.length
    ? "text2video"
    : options.mode === "reference"
        ? "reference2video"
        : images.length === 1 ? "img2video" : "start-end2video";
const data = {
    model,
    prompt,
    duration: Number(options.seconds),
    resolution: options.resolution,
};
if (images.length) {
    data.images = [];
    for (const image of images) {
        data.images.push(await utils.toPublicUrl(image));
    }
} else {
    data.aspect_ratio = options.ratio;
}
const created = await utils.request({
    method: "post",
    url: root + "/" + operation,
    headers,
    data,
});
return { id: created.task_id };`},"Token")],Zo=[fe("hailuo-video","MiniMax 协议视频","/v1",`POST {root}/video_generation
海螺 01 / 02 / 2.3；文生、首尾帧。`,{logo:"/icons/hailuo.svg"},{query:String.raw`if (taskId) {
    const state = await utils.request({
        method: "get",
        url: root + "/query/video_generation?task_id=" + encodeURIComponent(taskId),
        headers,
    });
    if (state.base_resp?.status_code !== 0) {
        return { status: "failed" };
    }
    if (state.status === "Success") {
        const file = await utils.request({
            method: "get",
            url: root + "/files/retrieve",
            headers,
            params: { file_id: state.file_id },
        });
        if (file.base_resp.status_code !== 0) {
            return { status: "failed" };
        }
        return {
            status: "completed",
            result: { url: file.file.download_url },
        };
    }
    if (["Preparing", "Queueing", "Processing"].includes(state.status)) {
        return { status: "pending" };
    }
    return { status: "failed" };
}`,create:String.raw`if (videos.length || audios.length || images.length > 2) {
    throw new Error("SCRIPT_VIDEO_REFERENCES_UNSUPPORTED");
}
const data = {
    model,
    prompt,
    duration: Number(options.seconds),
    resolution: options.resolution.toUpperCase(),
};
if (images[0]) {
    data.first_frame_image = await utils.toPublicUrl(images[0]);
}
if (images[1]) {
    data.last_frame_image = await utils.toPublicUrl(images[1]);
}
const created = await utils.request({
    method: "post",
    url: root + "/video_generation",
    headers,
    data,
});
if (created.base_resp.status_code !== 0) {
    throw new Error("video creation failed");
}
return { id: created.task_id };`})],es={id:"grok-image",name:"Grok 协议生图",description:`生图：POST /v1/images/generations
编辑：POST /v1/images/edits
支持单图、多图参考；质量选自动、低或中。`,logo:"/icons/grok.svg",invertInDark:!0,capability:"image",source:k("image",String.raw`const { model, prompt, images, options, utils } = params;
const data = {
    model,
    prompt,
    n: options.count,
    response_format: "url",
};
if (options.ratio) {
    data.aspect_ratio = options.ratio;
}
if (options.resolution) {
    data.resolution = options.resolution.toLowerCase();
}
if (options.quality) {
    data.quality = options.quality;
}
if (images.length) {
    const references = [];
    for (const source of images) {
        references.push({
            type: "image_url",
            url: source.startsWith("blob:") ? await utils.toDataUrl(source) : source,
        });
    }
    if (references.length === 1) {
        data.image = references[0];
    } else {
        data.images = references;
    }
}
const result = await utils.http.post(
    images.length ? "/images/edits" : "/images/generations",
    data,
);
if (result.error) {
    throw new Error("image request failed");
}
return result.data.map(({ url }) => ({ url }));`)},ts=[es,fe("grok-video-generations","Grok 协议视频","/v1/videos",`POST {root}/generations
支持文生、图生与多图参考；首尾帧需 1.5 模型，音频文件参考需额外权限。`,{logo:"/icons/grok.svg",invertInDark:!0},{query:String.raw`if (taskId) {
    const state = await utils.request({
        method: "get",
        url: root + "/" + encodeURIComponent(taskId),
        headers,
    });
    if (state.status === "done" && state.video?.url && state.video.respect_moderation === true) {
        return {
            status: "completed",
            result: { url: state.video.url },
        };
    }
    if (state.status === "pending") {
        return { status: "pending" };
    }
    return { status: "failed" };
}`,create:String.raw`const data = {
    model,
    prompt,
};
if (videos.length) {
    throw new Error("SCRIPT_VIDEO_REFERENCES_UNSUPPORTED");
}
data.duration = Number(options.seconds);
data.aspect_ratio = options.ratio;
data.resolution = options.resolution;
data.generate_audio = options.generateAudio;
const references = [];
for (const source of images) {
    references.push({
        url: source.startsWith("blob:") ? await utils.toDataUrl(source) : source,
    });
}
if (options.mode === "reference") {
    if (references.length) {
        data.reference_images = references;
    }
} else {
    if (images.length > 2) {
        throw new Error("SCRIPT_VIDEO_REFERENCES_UNSUPPORTED");
    }
    if (references[0]) {
        data.image = references[0];
    }
    if (references[1]) {
        data.last_frame = references[1];
    }
}
if (audios.length) {
    data.reference_audios = [];
    // 自有音频参考需服务单独开通权限；不改变首尾帧的用途。
    for (const source of audios) {
        data.reference_audios.push({
            url: source.startsWith("blob:") ? await utils.toDataUrl(source) : source,
        });
    }
}
const created = await utils.request({
    method: "post",
    url: root + "/generations",
    headers,
    data,
});
if (created.error || !created.request_id) {
    throw new Error("video request failed");
}
return { id: created.request_id };`})],as=[{id:"grok2api-video",name:"Grok2API 协议视频",description:`POST /v1/videos/generations
查询：GET /v1/videos/{request_id}
支持文生、单张首帧、多图参考；不支持尾帧、视频或音频素材。声音与水印由服务决定。`,logo:"/icons/grok.svg",invertInDark:!0,capability:"video",source:k("video",String.raw`const {
    model,
    prompt,
    images,
    videos,
    audios,
    taskId,
    options,
    utils,
} = params;
// chenyme/grok2api：创建返回 request_id，查询返回 pending / done / failed。
if (taskId) {
    const state = await utils.http.get("/videos/" + encodeURIComponent(taskId));
    if (state.error) {
        return { status: "failed" };
    }
    if (state.status === "done" && state.video?.url && state.video.respect_moderation === true) {
        return {
            status: "completed",
            result: { url: state.video.url },
        };
    }
    if (state.status === "pending") {
        return { status: "pending" };
    }
    return { status: "failed" };
}
// 尾帧和音视频文件参考不受支持，不丢弃素材或改为其他用途。
if (
    videos.length ||
    audios.length ||
    (options.mode === "frames" && images.length > 1)
) {
    throw new Error("SCRIPT_VIDEO_REFERENCES_UNSUPPORTED");
}
// duration 接受整数字符串；声音、水印、尾帧等未支持字段不能提交。
const data = {
    model,
    prompt,
    duration: options.seconds,
    aspect_ratio: options.ratio,
    resolution: options.resolution,
};
const references = [];
for (const source of images) {
    references.push({
        url: source.startsWith("blob:") ? await utils.toDataUrl(source) : source,
    });
}
if (references.length) {
    if (options.mode === "reference") {
        data.reference_images = references;
    } else {
        data.image = references[0];
    }
}
const created = await utils.http.post("/videos/generations", data);
if (created.error || !created.request_id) {
    throw new Error("video request failed");
}
return { id: created.request_id };`)}],Gt=[...Vo,...Wo,...Ho,...Go,...Yo,...Xo,...Jo,...Qo,...Zo,...ts,...as],Yt="infinite-canvas:call_scripts";function Re(t){const e=Pe.catch(()=>tt).then(async()=>{const a=pe.getState(),o={pluginScripts:a.pluginScripts,...t(a)};await Nt.state.setItem(Yt,JSON.stringify({state:o,version:1})),pe.setState(o)});return Pe=e,e.catch(()=>{Pe===e&&(Pe=tt)}),e}const pe=ot(()=>({scripts:[],removedBuiltinIds:[],pluginScripts:[],save:t=>Re(e=>({scripts:[...e.scripts.filter(a=>a.id!==t.id),t],removedBuiltinIds:e.removedBuiltinIds.filter(a=>a!==t.id)})),remove:t=>Re(e=>({scripts:e.scripts.filter(a=>a.id!==t),removedBuiltinIds:Gt.some(a=>a.id===t)?[...new Set([...e.removedBuiltinIds,t])]:e.removedBuiltinIds})),restore:t=>Re(e=>({scripts:e.scripts.filter(a=>a.id!==t),removedBuiltinIds:e.removedBuiltinIds.filter(a=>a!==t)})),importScripts:t=>Re(e=>{const a=new Set(nt(e.scripts).map(n=>n.name)),o=t.map(n=>{let i=n.name;for(let d=2;a.has(i);d++)i=`${n.name} (${d})`;return a.add(i),{...n,id:qe(),name:i}});return{scripts:[...e.scripts,...o],removedBuiltinIds:e.removedBuiltinIds}})})),tt=Nt.state.getItem(Yt).then(t=>{if(!t)return;const e=JSON.parse(t);e.version===1&&pe.setState(e.state)});let Pe=tt;function Ns(t){return Re(e=>({scripts:e.scripts,removedBuiltinIds:e.removedBuiltinIds,pluginScripts:t}))}function nt(t=pe.getState().scripts,e=pe.getState().removedBuiltinIds,a=pe.getState().pluginScripts){return[...Gt.filter(o=>!e.includes(o.id)),...a,...t]}const Xt="infinite-canvas-v1:ai_config_store",at="::",os="https://api.openai.com",ss="@basketikun/canvas-proxy",Jt="http://127.0.0.1:23210",Be={channelMode:"local",baseUrl:os,apiKey:"",channels:[{id:"default",name:"默认渠道",baseUrl:"",groups:[]}],model:"",imageModel:"",videoModel:"",textModel:"",audioModel:"",audioVoice:"alloy",audioFormat:"mp3",audioSpeed:"1",audioInstructions:"",videoSize:"1280x720",videoSeconds:"6",vquality:"720",videoGenerateAudio:"true",videoWatermark:"false",videoMode:"frames",systemPrompt:"",reasoningEffort:"auto",models:[],quality:"auto",size:"1:1",background:"",count:"1",canvasImageCount:"3",proxyEnabled:!1,proxyUrl:Jt,autoFocusOnSelect:!1,generationOptions:yo};function rs(t,e){return t?t==="true":e}function it(t,e){for(const a of t){const o=a.groups.find(n=>n.id===e);if(o)return{channel:a,group:o}}}function ze(t,e){const a=ge(e);if(a){const n=it(t.channels,a.groupId);return n&&{...n,model:n.group.models.find(i=>i.name===a.model)}}const o=t.channels.flatMap(n=>n.groups.flatMap(i=>i.models.filter(d=>d.name===e).map(d=>({channel:n,group:i,model:d}))));return o.length===1?o[0]:void 0}function Qt(t,e){return ze(t,e)?.model?.capability}function ns(t,e,a){const o=a==="image"?t.imageModel:a==="video"?t.videoModel:a==="audio"?t.audioModel:t.textModel;for(const n of[e,o]){if(!n)continue;const i=Qt(t,n);if(!i||i===a)return n}return""}function Zt(t,e){return e?t.channels.flatMap(a=>a.groups.flatMap(o=>o.models.filter(n=>n.capability===e).map(n=>Fe(o.id,n.name)))):t.models}function lt(t,e,a=nt(),o){const n=ge(e),i=ta(e),{channel:d,group:u,model:l}=ze(t,e)||{},r=o??(l&&(l.scriptId??Le(l.name,l.capability))),m=a.find(f=>f.id===r);let s;if(!e)s="modelRequired";else if(n&&!u)s="groupUnavailable";else if(!d||!u||!l)s="modelUnavailable";else if(!d.baseUrl)s="baseUrlRequired";else if(!u.apiKey&&!u.hasApiKey)s="apiKeyRequired";else if(!r)s="scriptRequired";else if(!m)s="scriptUnavailable";else if(m.capability!==l.capability)s="scriptCapabilityMismatch";else if(!m.source)s="scriptEmpty";else return null;return{message:{modelRequired:"尚未选择模型，请关闭设置，在生成面板选择模型后重新发送。",groupUnavailable:`模型「${i}」原来使用的渠道或分组已不存在，请在生成面板重新选择。`,modelUnavailable:`当前分组无法确定模型「${i}」，请添加该模型，或在生成面板重新选择对应分组的模型。`,baseUrlRequired:`渠道「${d?.name}」未填写服务地址，请编辑该渠道并填写服务地址。`,apiKeyRequired:`分组「${u?.name}」未填写密钥，请编辑该分组并填写 API Key。`,scriptRequired:`模型「${i}」尚未选择调用方式，请在渠道设置中选择。`,scriptUnavailable:`模型「${i}」所选调用方式已被删除或不可用，请在渠道设置中重新选择。`,scriptCapabilityMismatch:`模型「${i}」所选调用方式与模型用途不匹配，请在渠道设置中重新选择。`,scriptEmpty:`模型「${i}」所选调用方式没有内容，请重新选择或补全调用脚本。`}[s],channelId:d?.id,groupId:u?.id}}const Q=ot()(At(t=>({config:Be,isConfigOpen:!1,configSelection:{tab:"builtin:channels"},configModel:null,autoFetchGroupId:null,shouldPromptContinue:!1,updateConfig:(e,a)=>t(o=>({config:{...o.config,[e]:a}})),isAiConfigReady:(e,a)=>!lt(e,a),openConfigDialog:(e=!1,a="builtin:channels",o=null)=>t({isConfigOpen:!0,shouldPromptContinue:e,configSelection:{tab:a},configModel:o}),setConfigDialogOpen:e=>t({isConfigOpen:e,configModel:null}),clearPromptContinue:()=>t({shouldPromptContinue:!1})}),{name:Xt,storage:Ut(()=>localStorage),version:3,partialize:t=>({config:{...t.config,channels:[],models:[],apiKey:"",baseUrl:""}}),merge:(t,e)=>({...e,config:{...Be,...t?.config,channels:[],models:[]}})}));function is(){const t=Q(e=>e.config);return ae.useMemo(()=>({...t,channelMode:"local"}),[t])}function ea(t){const e=new Set;return t.filter(a=>e.has(a.name)?!1:(e.add(a.name),!0)).map(a=>({...a,scriptId:a.scriptId??Le(a.name,a.capability)}))}function $e({id:t=qe(),name:e="新分组",apiKey:a="",hasApiKey:o=!1,models:n=[]}={}){return{id:t,name:e,apiKey:a,hasApiKey:o,models:ea(n)}}function je({id:t=qe(),name:e="新渠道",baseUrl:a="",groups:o=[]}={}){return{id:t,name:e,baseUrl:a,groups:o.map($e)}}function Fe(t,e){return`${t}${at}${e}`}function ge(t){const e=t.indexOf(at);return e<0?null:{groupId:t.slice(0,e),model:t.slice(e+at.length)}}function ta(t){return ge(t)?.model||t}function ls(t,e){const a=ge(e);if(!a)return e;const o=it(t.channels,a.groupId);return o?`${a.model}（${o.channel.name} / ${o.group.name}）`:a.model}function aa(t){return t.flatMap(e=>e.groups.flatMap(a=>a.models.map(o=>Fe(a.id,o.name))))}function oa(t,e){if(!t)return"";if(ge(t))return t;const a=e.flatMap(o=>o.groups.filter(n=>n.models.some(i=>i.name===t)));return a.length===1?Fe(a[0].id,t):t}function ds(t,e,a){const o=lt(t,e,void 0,a);if(o)throw new Error(o.message);const{channel:n,group:i,model:d}=ze(t,e),u=a??d.scriptId??Le(d.name,d.capability),l=nt().find(r=>r.id===u);return{groupId:i.id,model:d.name,baseUrl:n.baseUrl,apiKey:i.apiKey,systemPrompt:t.systemPrompt,reasoningEffort:t.reasoningEffort,scriptId:u,script:l.source,agentSettings:d.agentSettings}}function cs(t){const e=t.trim().replace(/\/+$/,"");return e?/^https?:\/\//i.test(e)?e:`http://${e}`:""}const sa=va(async t=>{try{const e=await Ne.save(t);Q.getState().config.channels===t&&Q.setState(a=>({config:dt(a.config,e)}))}catch(e){throw e instanceof wt?e:new wt("STORAGE_UNAVAILABLE")}});function us(){if(typeof localStorage>"u")return[];try{const t=localStorage.getItem("infinite-canvas:ai_config_store");if(!t)return[];const e=JSON.parse(t)?.state?.config?.channels;return Array.isArray(e)?e.filter(a=>!!(a&&typeof a.baseUrl=="string"&&a.baseUrl)).map(a=>({id:a.id||qe(),name:a.name||"导入渠道",baseUrl:a.baseUrl,groups:[$e({name:a.name||"默认分组",apiKey:a.apiKey||"",hasApiKey:!!a.apiKey,models:Array.isArray(a.models)?a.models.filter(o=>!!o?.name).map(o=>({name:o.name,capability:o.capability||"image"})):[]})]})):[]}catch{return[]}}function ms(t){return t.some(e=>e.groups.some(a=>a.models.length>0))}async function ps(){const t=await Ne.load(),e=ms(t||[])?[]:us(),a=e.length?await Ne.save(e):t===null?await Ne.save(Be.channels):t;Q.setState(o=>({config:dt(o.config,a.map(je))})),fs()}async function fs(){const t=new URLSearchParams(location.search),e=(t.get("baseUrl")??t.get("baseurl"))?.replace(/\/+$/,""),a=t.get("apiKey")??t.get("apikey");if(!e)return;["baseUrl","baseurl","apiKey","apikey"].forEach(m=>t.delete(m)),history.replaceState(null,"",`${location.pathname}${t.size?`?${t}`:""}${location.hash}`),a&&Et.warning("温馨提示：您的密钥出现在了网页地址中，建议使用完后轮换密钥，避免泄漏。",{...Pt.warning,duration:15e3});const o=Q.getState().config.channels,n=o.find(m=>m.baseUrl.replace(/\/+$/,"")===e),i=n?.groups.find(m=>m.apiKey===a);if(n&&(!a||i)){Q.setState({isConfigOpen:!0,configSelection:{tab:"builtin:channels",channelId:n.id,groupId:i?.id??n.groups[0]?.id}});return}let d;try{d=new URL(e).hostname.split(".")}catch{Et.error("链接中的服务地址无效，需要以 http:// 或 https:// 开头。",Pt.error);return}const u=n??je({name:d.at(-2)??d[0],baseUrl:e}),l=$e({name:`分组 ${u.groups.length+1}`,apiKey:a??"",hasApiKey:!!a}),r={...u,groups:[...u.groups,l]};ra(n?o.map(m=>m===n?r:m):[...o,r]),Q.setState({isConfigOpen:!0,configSelection:{tab:"builtin:channels",channelId:u.id,groupId:l.id},autoFetchGroupId:a?l.id:null})}function ra(t){return t=t.map(je),Q.setState(e=>({config:dt(e.config,t)})),sa.save(t)}function dt(t,e){const a={...t,channels:e,models:aa(e)};return{...a,generationOptions:wo(t.generationOptions),imageModel:Me(a,"image",t.imageModel),videoModel:Me(a,"video",t.videoModel),textModel:Me(a,"text",t.textModel),audioModel:Me(a,"audio",t.audioModel)}}function Me(t,e,a){const o=Zt(t,e),n=oa(a,t.channels);return a?n:o[0]||""}const Ds=Object.freeze(Object.defineProperty({__proto__:null,CONFIG_STORE_KEY:Xt,DEFAULT_LOCAL_PROXY_URL:Jt,LOCAL_PROXY_PACKAGE:ss,boolConfig:rs,channelWrites:sa,createModelChannel:je,createModelGroup:$e,decodeGroupModel:ge,defaultConfig:Be,encodeGroupModel:Fe,findGroupModel:ze,findModelGroup:it,getModelConfigIssue:lt,loadChannelConfig:ps,modelCapabilityOf:Qt,modelOptionLabel:ls,modelOptionName:ta,modelOptionsFromChannels:aa,normalizeChannelModels:ea,normalizeLocalProxyUrl:cs,normalizeModelOptionValue:oa,resolveModelForCapability:ns,resolveModelRequestConfig:ds,selectableModelsByCapability:Zt,updateChannels:ra,useConfigStore:Q,useEffectiveConfig:is},Symbol.toStringTag,{value:"Module"}));export{Jt as $,$o as A,Ns as B,Ps as C,hs as D,le as E,xa as F,Ut as G,ys as H,ta as I,bs as J,Do as K,ao as L,ra as M,Et as N,Pt as O,Pe as P,Re as Q,Bo as R,nt as S,Ms as T,Le as U,vs as V,$e as W,zo as X,je as Y,ea as Z,ss as _,pe as a,wo as a0,zt as a1,ro as a2,so as a3,oo as a4,xs as a5,Ao as a6,De as a7,Es as a8,ks as a9,Rs as aa,Os as ab,ie as ac,uo as ad,_s as ae,Ss as af,no as ag,Ue as ah,mo as ai,Cs as aj,lo as ak,io as al,is as am,Uo as an,Ds as ao,qe as b,Gt as c,k as d,tt as e,it as f,sa as g,ds as h,Ae as i,q as j,Ts as k,rs as l,ws as m,cs as n,Is as o,At as p,Fe as q,Bt as r,ze as s,po as t,Q as u,Be as v,ns as w,Zt as x,ls as y,lt as z};
