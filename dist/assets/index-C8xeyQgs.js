(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var us={exports:{}},ol={},cs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qn=Symbol.for("react.element"),Ic=Symbol.for("react.portal"),Ac=Symbol.for("react.fragment"),Fc=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Uc=Symbol.for("react.context"),$c=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Hc=Symbol.for("react.memo"),Wc=Symbol.for("react.lazy"),Zo=Symbol.iterator;function Qc(e){return e===null||typeof e!="object"?null:(e=Zo&&e[Zo]||e["@@iterator"],typeof e=="function"?e:null)}var ds={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fs=Object.assign,ps={};function un(e,t,n){this.props=e,this.context=t,this.refs=ps,this.updater=n||ds}un.prototype.isReactComponent={};un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ms(){}ms.prototype=un.prototype;function Xi(e,t,n){this.props=e,this.context=t,this.refs=ps,this.updater=n||ds}var Zi=Xi.prototype=new ms;Zi.constructor=Xi;fs(Zi,un.prototype);Zi.isPureReactComponent=!0;var qo=Array.isArray,hs=Object.prototype.hasOwnProperty,qi={current:null},gs={key:!0,ref:!0,__self:!0,__source:!0};function vs(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)hs.call(t,r)&&!gs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:qn,type:e,key:i,ref:a,props:l,_owner:qi.current}}function Gc(e,t){return{$$typeof:qn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ji(e){return typeof e=="object"&&e!==null&&e.$$typeof===qn}function Kc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jo=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kc(""+e.key):t.toString(36)}function Sr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case qn:case Ic:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Cl(a,0):r,qo(l)?(n="",e!=null&&(n=e.replace(Jo,"$&/")+"/"),Sr(l,t,n,"",function(d){return d})):l!=null&&(Ji(l)&&(l=Gc(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Jo,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",qo(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Cl(i,s);a+=Sr(i,t,n,u,l)}else if(u=Qc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Cl(i,s++),a+=Sr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ir(e,t,n){if(e==null)return e;var r=[],l=0;return Sr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Yc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Nr={transition:null},Xc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:qi};function ys(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ir,forEach:function(e,t,n){ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ir(e,function(){t++}),t},toArray:function(e){return ir(e,function(t){return t})||[]},only:function(e){if(!Ji(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=un;L.Fragment=Ac;L.Profiler=Oc;L.PureComponent=Xi;L.StrictMode=Fc;L.Suspense=Vc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xc;L.act=ys;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fs({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=qi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)hs.call(t,u)&&!gs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:qn,type:e.type,key:l,ref:i,props:r,_owner:a}};L.createContext=function(e){return e={$$typeof:Uc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bc,_context:e},e.Consumer=e};L.createElement=vs;L.createFactory=function(e){var t=vs.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:$c,render:e}};L.isValidElement=Ji;L.lazy=function(e){return{$$typeof:Wc,_payload:{_status:-1,_result:e},_init:Yc}};L.memo=function(e,t){return{$$typeof:Hc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=t}};L.unstable_act=ys;L.useCallback=function(e,t){return ce.current.useCallback(e,t)};L.useContext=function(e){return ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};L.useEffect=function(e,t){return ce.current.useEffect(e,t)};L.useId=function(){return ce.current.useId()};L.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ce.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};L.useRef=function(e){return ce.current.useRef(e)};L.useState=function(e){return ce.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ce.current.useTransition()};L.version="18.3.1";cs.exports=L;var H=cs.exports;const Zc=Rc(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=H,Jc=Symbol.for("react.element"),ed=Symbol.for("react.fragment"),td=Object.prototype.hasOwnProperty,nd=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rd={key:!0,ref:!0,__self:!0,__source:!0};function xs(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)td.call(t,r)&&!rd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Jc,type:e,key:i,ref:a,props:l,_owner:nd.current}}ol.Fragment=ed;ol.jsx=xs;ol.jsxs=xs;us.exports=ol;var o=us.exports,ql={},ks={exports:{}},we={},ws={exports:{}},js={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,b){var M=N.length;N.push(b);e:for(;0<M;){var Q=M-1>>>1,Z=N[Q];if(0<l(Z,b))N[Q]=b,N[M]=Z,M=Q;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var b=N[0],M=N.pop();if(M!==b){N[0]=M;e:for(var Q=0,Z=N.length,rr=Z>>>1;Q<rr;){var yt=2*(Q+1)-1,Nl=N[yt],xt=yt+1,lr=N[xt];if(0>l(Nl,M))xt<Z&&0>l(lr,Nl)?(N[Q]=lr,N[xt]=M,Q=xt):(N[Q]=Nl,N[yt]=M,Q=yt);else if(xt<Z&&0>l(lr,M))N[Q]=lr,N[xt]=M,Q=xt;else break e}}return b}function l(N,b){var M=N.sortIndex-b.sortIndex;return M!==0?M:N.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],g=1,m=null,h=3,x=!1,v=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var b=n(d);b!==null;){if(b.callback===null)r(d);else if(b.startTime<=N)r(d),b.sortIndex=b.expirationTime,t(u,b);else break;b=n(d)}}function y(N){if(w=!1,p(N),!v)if(n(u)!==null)v=!0,jl(j);else{var b=n(d);b!==null&&Sl(y,b.startTime-N)}}function j(N,b){v=!1,w&&(w=!1,f(z),z=-1),x=!0;var M=h;try{for(p(b),m=n(u);m!==null&&(!(m.expirationTime>b)||N&&!Pe());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,h=m.priorityLevel;var Z=Q(m.expirationTime<=b);b=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(u)&&r(u),p(b)}else r(u);m=n(u)}if(m!==null)var rr=!0;else{var yt=n(d);yt!==null&&Sl(y,yt.startTime-b),rr=!1}return rr}finally{m=null,h=M,x=!1}}var C=!1,E=null,z=-1,W=5,_=-1;function Pe(){return!(e.unstable_now()-_<W)}function fn(){if(E!==null){var N=e.unstable_now();_=N;var b=!0;try{b=E(!0,N)}finally{b?pn():(C=!1,E=null)}}else C=!1}var pn;if(typeof c=="function")pn=function(){c(fn)};else if(typeof MessageChannel<"u"){var Xo=new MessageChannel,Tc=Xo.port2;Xo.port1.onmessage=fn,pn=function(){Tc.postMessage(null)}}else pn=function(){T(fn,0)};function jl(N){E=N,C||(C=!0,pn())}function Sl(N,b){z=T(function(){N(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,jl(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var M=h;h=b;try{return N()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,b){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=h;h=N;try{return b()}finally{h=M}},e.unstable_scheduleCallback=function(N,b,M){var Q=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Q+M:Q):M=Q,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=M+Z,N={id:g++,callback:b,priorityLevel:N,startTime:M,expirationTime:Z,sortIndex:-1},M>Q?(N.sortIndex=M,t(d,N),n(u)===null&&N===n(d)&&(w?(f(z),z=-1):w=!0,Sl(y,M-Q))):(N.sortIndex=Z,t(u,N),v||x||(v=!0,jl(j))),N},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(N){var b=h;return function(){var M=h;h=b;try{return N.apply(this,arguments)}finally{h=M}}}})(js);ws.exports=js;var ld=ws.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id=H,ke=ld;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ss=new Set,Rn={};function Dt(e,t){tn(e,t),tn(e+"Capture",t)}function tn(e,t){for(Rn[e]=t,e=0;e<t.length;e++)Ss.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=Object.prototype.hasOwnProperty,od=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ea={},ta={};function ad(e){return Jl.call(ta,e)?!0:Jl.call(ea,e)?!1:od.test(e)?ta[e]=!0:(ea[e]=!0,!1)}function sd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ud(e,t,n,r){if(t===null||typeof t>"u"||sd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var eo=/[\-:]([a-z])/g;function to(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(eo,to);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(eo,to);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(eo,to);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function no(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ud(t,n,l,r)&&(n=null),r||l===null?ad(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=Symbol.for("react.element"),At=Symbol.for("react.portal"),Ft=Symbol.for("react.fragment"),ro=Symbol.for("react.strict_mode"),ei=Symbol.for("react.profiler"),Ns=Symbol.for("react.provider"),Cs=Symbol.for("react.context"),lo=Symbol.for("react.forward_ref"),ti=Symbol.for("react.suspense"),ni=Symbol.for("react.suspense_list"),io=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),Es=Symbol.for("react.offscreen"),na=Symbol.iterator;function mn(e){return e===null||typeof e!="object"?null:(e=na&&e[na]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,El;function jn(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var zl=!1;function bl(e,t){if(!e||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,s=i.length-1;1<=a&&0<=s&&l[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==i[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function cd(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=bl(e.type,!1),e;case 11:return e=bl(e.type.render,!1),e;case 1:return e=bl(e.type,!0),e;default:return""}}function ri(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ft:return"Fragment";case At:return"Portal";case ei:return"Profiler";case ro:return"StrictMode";case ti:return"Suspense";case ni:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cs:return(e.displayName||"Context")+".Consumer";case Ns:return(e._context.displayName||"Context")+".Provider";case lo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case io:return t=e.displayName||null,t!==null?t:ri(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return ri(e(t))}catch{}}return null}function dd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ri(t);case 8:return t===ro?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fd(e){var t=zs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ar(e){e._valueTracker||(e._valueTracker=fd(e))}function bs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function li(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ra(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ps(e,t){t=t.checked,t!=null&&no(e,"checked",t,!1)}function ii(e,t){Ps(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&oi(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function la(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oi(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ai(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ia(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Sn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function Ms(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function oa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ls(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function si(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ls(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,_s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pd=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){pd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function Ds(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function Ts(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ds(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var md=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(e,t){if(t){if(md[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var di=null;function oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fi=null,Xt=null,Zt=null;function aa(e){if(e=tr(e)){if(typeof fi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=dl(t),fi(e.stateNode,e.type,t))}}function Rs(e){Xt?Zt?Zt.push(e):Zt=[e]:Xt=e}function Is(){if(Xt){var e=Xt,t=Zt;if(Zt=Xt=null,aa(e),t)for(e=0;e<t.length;e++)aa(t[e])}}function As(e,t){return e(t)}function Fs(){}var Pl=!1;function Os(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return As(e,t,n)}finally{Pl=!1,(Xt!==null||Zt!==null)&&(Fs(),Is())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var pi=!1;if(Ge)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){pi=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{pi=!1}function hd(e,t,n,r,l,i,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var zn=!1,Ir=null,Ar=!1,mi=null,gd={onError:function(e){zn=!0,Ir=e}};function vd(e,t,n,r,l,i,a,s,u){zn=!1,Ir=null,hd.apply(gd,arguments)}function yd(e,t,n,r,l,i,a,s,u){if(vd.apply(this,arguments),zn){if(zn){var d=Ir;zn=!1,Ir=null}else throw Error(k(198));Ar||(Ar=!0,mi=d)}}function Tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sa(e){if(Tt(e)!==e)throw Error(k(188))}function xd(e){var t=e.alternate;if(!t){if(t=Tt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return sa(l),e;if(i===r)return sa(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Us(e){return e=xd(e),e!==null?$s(e):null}function $s(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$s(e);if(t!==null)return t;e=e.sibling}return null}var Vs=ke.unstable_scheduleCallback,ua=ke.unstable_cancelCallback,kd=ke.unstable_shouldYield,wd=ke.unstable_requestPaint,G=ke.unstable_now,jd=ke.unstable_getCurrentPriorityLevel,ao=ke.unstable_ImmediatePriority,Hs=ke.unstable_UserBlockingPriority,Fr=ke.unstable_NormalPriority,Sd=ke.unstable_LowPriority,Ws=ke.unstable_IdlePriority,al=null,Be=null;function Nd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(al,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:zd,Cd=Math.log,Ed=Math.LN2;function zd(e){return e>>>=0,e===0?32:31-(Cd(e)/Ed|0)|0}var ur=64,cr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=Nn(s):(i&=a,i!==0&&(r=Nn(i)))}else a=n&~l,a!==0?r=Nn(a):i!==0&&(r=Nn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Te(t),l=1<<n,r|=e[n],t&=~l;return r}function bd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Te(i),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=bd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qs(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=n}function Md(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Te(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function so(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Te(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function Gs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ks,uo,Ys,Xs,Zs,gi=!1,dr=[],it=null,ot=null,at=null,Fn=new Map,On=new Map,tt=[],Ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ca(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":Fn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function gn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=tr(t),t!==null&&uo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function _d(e,t,n,r,l){switch(t){case"focusin":return it=gn(it,e,t,n,r,l),!0;case"dragenter":return ot=gn(ot,e,t,n,r,l),!0;case"mouseover":return at=gn(at,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Fn.set(i,gn(Fn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,On.set(i,gn(On.get(i)||null,e,t,n,r,l)),!0}return!1}function qs(e){var t=jt(e.target);if(t!==null){var n=Tt(t);if(n!==null){if(t=n.tag,t===13){if(t=Bs(n),t!==null){e.blockedOn=t,Zs(e.priority,function(){Ys(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);di=r,n.target.dispatchEvent(r),di=null}else return t=tr(n),t!==null&&uo(t),e.blockedOn=n,!1;t.shift()}return!0}function da(e,t,n){Cr(e)&&n.delete(t)}function Dd(){gi=!1,it!==null&&Cr(it)&&(it=null),ot!==null&&Cr(ot)&&(ot=null),at!==null&&Cr(at)&&(at=null),Fn.forEach(da),On.forEach(da)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,gi||(gi=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Dd)))}function Bn(e){function t(l){return vn(l,e)}if(0<dr.length){vn(dr[0],e);for(var n=1;n<dr.length;n++){var r=dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&vn(it,e),ot!==null&&vn(ot,e),at!==null&&vn(at,e),Fn.forEach(t),On.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)qs(n),n.blockedOn===null&&tt.shift()}var qt=Ze.ReactCurrentBatchConfig,Br=!0;function Td(e,t,n,r){var l=R,i=qt.transition;qt.transition=null;try{R=1,co(e,t,n,r)}finally{R=l,qt.transition=i}}function Rd(e,t,n,r){var l=R,i=qt.transition;qt.transition=null;try{R=4,co(e,t,n,r)}finally{R=l,qt.transition=i}}function co(e,t,n,r){if(Br){var l=vi(e,t,n,r);if(l===null)Bl(e,t,r,Ur,n),ca(e,r);else if(_d(l,e,t,n,r))r.stopPropagation();else if(ca(e,r),t&4&&-1<Ld.indexOf(e)){for(;l!==null;){var i=tr(l);if(i!==null&&Ks(i),i=vi(e,t,n,r),i===null&&Bl(e,t,r,Ur,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Bl(e,t,r,null,n)}}var Ur=null;function vi(e,t,n,r){if(Ur=null,e=oo(r),e=jt(e),e!==null)if(t=Tt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ur=e,null}function Js(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jd()){case ao:return 1;case Hs:return 4;case Fr:case Sd:return 16;case Ws:return 536870912;default:return 16}default:return 16}}var rt=null,fo=null,Er=null;function eu(){if(Er)return Er;var e,t=fo,n=t.length,r,l="value"in rt?rt.value:rt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function fa(){return!1}function je(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fr:fa,this.isPropagationStopped=fa,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},po=je(cn),er=$({},cn,{view:0,detail:0}),Id=je(er),Ll,_l,yn,sl=$({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yn&&(yn&&e.type==="mousemove"?(Ll=e.screenX-yn.screenX,_l=e.screenY-yn.screenY):_l=Ll=0,yn=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),pa=je(sl),Ad=$({},sl,{dataTransfer:0}),Fd=je(Ad),Od=$({},er,{relatedTarget:0}),Dl=je(Od),Bd=$({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ud=je(Bd),$d=$({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vd=je($d),Hd=$({},cn,{data:0}),ma=je(Hd),Wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gd[e])?!!t[e]:!1}function mo(){return Kd}var Yd=$({},er,{key:function(e){if(e.key){var t=Wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mo,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xd=je(Yd),Zd=$({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ha=je(Zd),qd=$({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mo}),Jd=je(qd),ef=$({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tf=je(ef),nf=$({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rf=je(nf),lf=[9,13,27,32],ho=Ge&&"CompositionEvent"in window,bn=null;Ge&&"documentMode"in document&&(bn=document.documentMode);var of=Ge&&"TextEvent"in window&&!bn,tu=Ge&&(!ho||bn&&8<bn&&11>=bn),ga=" ",va=!1;function nu(e,t){switch(e){case"keyup":return lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function af(e,t){switch(e){case"compositionend":return ru(t);case"keypress":return t.which!==32?null:(va=!0,ga);case"textInput":return e=t.data,e===ga&&va?null:e;default:return null}}function sf(e,t){if(Ot)return e==="compositionend"||!ho&&nu(e,t)?(e=eu(),Er=fo=rt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tu&&t.locale!=="ko"?null:t.data;default:return null}}var uf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uf[e.type]:t==="textarea"}function lu(e,t,n,r){Rs(r),t=$r(t,"onChange"),0<t.length&&(n=new po("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Un=null;function cf(e){hu(e,0)}function ul(e){var t=$t(e);if(bs(t))return e}function df(e,t){if(e==="change")return t}var iu=!1;if(Ge){var Tl;if(Ge){var Rl="oninput"in document;if(!Rl){var xa=document.createElement("div");xa.setAttribute("oninput","return;"),Rl=typeof xa.oninput=="function"}Tl=Rl}else Tl=!1;iu=Tl&&(!document.documentMode||9<document.documentMode)}function ka(){Pn&&(Pn.detachEvent("onpropertychange",ou),Un=Pn=null)}function ou(e){if(e.propertyName==="value"&&ul(Un)){var t=[];lu(t,Un,e,oo(e)),Os(cf,t)}}function ff(e,t,n){e==="focusin"?(ka(),Pn=t,Un=n,Pn.attachEvent("onpropertychange",ou)):e==="focusout"&&ka()}function pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Un)}function mf(e,t){if(e==="click")return ul(t)}function hf(e,t){if(e==="input"||e==="change")return ul(t)}function gf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:gf;function $n(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Jl.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function wa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ja(e,t){var n=wa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wa(n)}}function au(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?au(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function su(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vf(e){var t=su(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&au(n.ownerDocument.documentElement,n)){if(r!==null&&go(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ja(n,i);var a=ja(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yf=Ge&&"documentMode"in document&&11>=document.documentMode,Bt=null,yi=null,Mn=null,xi=!1;function Sa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xi||Bt==null||Bt!==Rr(r)||(r=Bt,"selectionStart"in r&&go(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&$n(Mn,r)||(Mn=r,r=$r(yi,"onSelect"),0<r.length&&(t=new po("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bt)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ut={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionend:pr("Transition","TransitionEnd")},Il={},uu={};Ge&&(uu=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function cl(e){if(Il[e])return Il[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uu)return Il[e]=t[n];return e}var cu=cl("animationend"),du=cl("animationiteration"),fu=cl("animationstart"),pu=cl("transitionend"),mu=new Map,Na="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){mu.set(e,t),Dt(t,[e])}for(var Al=0;Al<Na.length;Al++){var Fl=Na[Al],xf=Fl.toLowerCase(),kf=Fl[0].toUpperCase()+Fl.slice(1);ht(xf,"on"+kf)}ht(cu,"onAnimationEnd");ht(du,"onAnimationIteration");ht(fu,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(pu,"onTransitionEnd");tn("onMouseEnter",["mouseout","mouseover"]);tn("onMouseLeave",["mouseout","mouseover"]);tn("onPointerEnter",["pointerout","pointerover"]);tn("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));function Ca(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yd(r,t,void 0,e),e.currentTarget=null}function hu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Ca(l,s,d),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Ca(l,s,d),i=u}}}if(Ar)throw e=mi,Ar=!1,mi=null,e}function A(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(gu(t,e,2,!1),n.add(r))}function Ol(e,t,n){var r=0;t&&(r|=4),gu(n,e,r,t)}var mr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[mr]){e[mr]=!0,Ss.forEach(function(n){n!=="selectionchange"&&(wf.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mr]||(t[mr]=!0,Ol("selectionchange",!1,t))}}function gu(e,t,n,r){switch(Js(t)){case 1:var l=Td;break;case 4:l=Rd;break;default:l=co}n=l.bind(null,t,n,e),l=void 0,!pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Bl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=jt(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Os(function(){var d=i,g=oo(n),m=[];e:{var h=mu.get(e);if(h!==void 0){var x=po,v=e;switch(e){case"keypress":if(zr(n)===0)break e;case"keydown":case"keyup":x=Xd;break;case"focusin":v="focus",x=Dl;break;case"focusout":v="blur",x=Dl;break;case"beforeblur":case"afterblur":x=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Jd;break;case cu:case du:case fu:x=Ud;break;case pu:x=tf;break;case"scroll":x=Id;break;case"wheel":x=rf;break;case"copy":case"cut":case"paste":x=Vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ha}var w=(t&4)!==0,T=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var c=d,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=An(c,f),y!=null&&w.push(Hn(c,y,p)))),T)break;c=c.return}0<w.length&&(h=new x(h,v,null,n,g),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==di&&(v=n.relatedTarget||n.fromElement)&&(jt(v)||v[Ke]))break e;if((x||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=d,v=v?jt(v):null,v!==null&&(T=Tt(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=d),x!==v)){if(w=pa,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=ha,y="onPointerLeave",f="onPointerEnter",c="pointer"),T=x==null?h:$t(x),p=v==null?h:$t(v),h=new w(y,c+"leave",x,n,g),h.target=T,h.relatedTarget=p,y=null,jt(g)===d&&(w=new w(f,c+"enter",v,n,g),w.target=p,w.relatedTarget=T,y=w),T=y,x&&v)t:{for(w=x,f=v,c=0,p=w;p;p=It(p))c++;for(p=0,y=f;y;y=It(y))p++;for(;0<c-p;)w=It(w),c--;for(;0<p-c;)f=It(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=It(w),f=It(f)}w=null}else w=null;x!==null&&Ea(m,h,x,w,!1),v!==null&&T!==null&&Ea(m,T,v,w,!0)}}e:{if(h=d?$t(d):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var j=df;else if(ya(h))if(iu)j=hf;else{j=pf;var C=ff}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=mf);if(j&&(j=j(e,d))){lu(m,j,n,g);break e}C&&C(e,h,d),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&oi(h,"number",h.value)}switch(C=d?$t(d):window,e){case"focusin":(ya(C)||C.contentEditable==="true")&&(Bt=C,yi=d,Mn=null);break;case"focusout":Mn=yi=Bt=null;break;case"mousedown":xi=!0;break;case"contextmenu":case"mouseup":case"dragend":xi=!1,Sa(m,n,g);break;case"selectionchange":if(yf)break;case"keydown":case"keyup":Sa(m,n,g)}var E;if(ho)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ot?nu(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(tu&&n.locale!=="ko"&&(Ot||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ot&&(E=eu()):(rt=g,fo="value"in rt?rt.value:rt.textContent,Ot=!0)),C=$r(d,z),0<C.length&&(z=new ma(z,e,null,n,g),m.push({event:z,listeners:C}),E?z.data=E:(E=ru(n),E!==null&&(z.data=E)))),(E=of?af(e,n):sf(e,n))&&(d=$r(d,"onBeforeInput"),0<d.length&&(g=new ma("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:d}),g.data=E))}hu(m,t)})}function Hn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=An(e,n),i!=null&&r.unshift(Hn(e,i,l)),i=An(e,t),i!=null&&r.push(Hn(e,i,l))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ea(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=An(n,i),u!=null&&a.unshift(Hn(n,u,s))):l||(u=An(n,i),u!=null&&a.push(Hn(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var jf=/\r\n?/g,Sf=/\u0000|\uFFFD/g;function za(e){return(typeof e=="string"?e:""+e).replace(jf,`
`).replace(Sf,"")}function hr(e,t,n){if(t=za(t),za(e)!==t&&n)throw Error(k(425))}function Vr(){}var ki=null,wi=null;function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Si=typeof setTimeout=="function"?setTimeout:void 0,Nf=typeof clearTimeout=="function"?clearTimeout:void 0,ba=typeof Promise=="function"?Promise:void 0,Cf=typeof queueMicrotask=="function"?queueMicrotask:typeof ba<"u"?function(e){return ba.resolve(null).then(e).catch(Ef)}:Si;function Ef(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Bn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dn=Math.random().toString(36).slice(2),Oe="__reactFiber$"+dn,Wn="__reactProps$"+dn,Ke="__reactContainer$"+dn,Ni="__reactEvents$"+dn,zf="__reactListeners$"+dn,bf="__reactHandles$"+dn;function jt(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pa(e);e!==null;){if(n=e[Oe])return n;e=Pa(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[Oe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function dl(e){return e[Wn]||null}var Ci=[],Vt=-1;function gt(e){return{current:e}}function F(e){0>Vt||(e.current=Ci[Vt],Ci[Vt]=null,Vt--)}function I(e,t){Vt++,Ci[Vt]=e.current,e.current=t}var mt={},ae=gt(mt),me=gt(!1),zt=mt;function nn(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Hr(){F(me),F(ae)}function Ma(e,t,n){if(ae.current!==mt)throw Error(k(168));I(ae,t),I(me,n)}function vu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,dd(e)||"Unknown",l));return $({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,zt=ae.current,I(ae,e),I(me,me.current),!0}function La(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=vu(e,t,zt),r.__reactInternalMemoizedMergedChildContext=e,F(me),F(ae),I(ae,e)):F(me),I(me,n)}var Ve=null,fl=!1,$l=!1;function yu(e){Ve===null?Ve=[e]:Ve.push(e)}function Pf(e){fl=!0,yu(e)}function vt(){if(!$l&&Ve!==null){$l=!0;var e=0,t=R;try{var n=Ve;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,fl=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Vs(ao,vt),l}finally{R=t,$l=!1}}return null}var Ht=[],Wt=0,Qr=null,Gr=0,Se=[],Ne=0,bt=null,He=1,We="";function kt(e,t){Ht[Wt++]=Gr,Ht[Wt++]=Qr,Qr=e,Gr=t}function xu(e,t,n){Se[Ne++]=He,Se[Ne++]=We,Se[Ne++]=bt,bt=e;var r=He;e=We;var l=32-Te(r)-1;r&=~(1<<l),n+=1;var i=32-Te(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,He=1<<32-Te(t)+l|n<<l|r,We=i+e}else He=1<<i|n<<l|r,We=e}function vo(e){e.return!==null&&(kt(e,1),xu(e,1,0))}function yo(e){for(;e===Qr;)Qr=Ht[--Wt],Ht[Wt]=null,Gr=Ht[--Wt],Ht[Wt]=null;for(;e===bt;)bt=Se[--Ne],Se[Ne]=null,We=Se[--Ne],Se[Ne]=null,He=Se[--Ne],Se[Ne]=null}var xe=null,ye=null,O=!1,De=null;function ku(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _a(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ye=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bt!==null?{id:He,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ye=null,!0):!1;default:return!1}}function Ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zi(e){if(O){var t=ye;if(t){var n=t;if(!_a(e,t)){if(Ei(e))throw Error(k(418));t=st(n.nextSibling);var r=xe;t&&_a(e,t)?ku(r,n):(e.flags=e.flags&-4097|2,O=!1,xe=e)}}else{if(Ei(e))throw Error(k(418));e.flags=e.flags&-4097|2,O=!1,xe=e}}}function Da(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function gr(e){if(e!==xe)return!1;if(!O)return Da(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=ye)){if(Ei(e))throw wu(),Error(k(418));for(;t;)ku(e,t),t=st(t.nextSibling)}if(Da(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=xe?st(e.stateNode.nextSibling):null;return!0}function wu(){for(var e=ye;e;)e=st(e.nextSibling)}function rn(){ye=xe=null,O=!1}function xo(e){De===null?De=[e]:De.push(e)}var Mf=Ze.ReactCurrentBatchConfig;function xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=l.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ta(e){var t=e._init;return t(e._payload)}function ju(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=ft(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,y){return c===null||c.tag!==6?(c=Yl(p,f.mode,y),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,y){var j=p.type;return j===Ft?g(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Je&&Ta(j)===c.type)?(y=l(c,p.props),y.ref=xn(f,c,p),y.return=f,y):(y=Tr(p.type,p.key,p.props,null,f.mode,y),y.ref=xn(f,c,p),y.return=f,y)}function d(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Xl(p,f.mode,y),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function g(f,c,p,y,j){return c===null||c.tag!==7?(c=Et(p,f.mode,y,j),c.return=f,c):(c=l(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Yl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case or:return p=Tr(c.type,c.key,c.props,null,f.mode,p),p.ref=xn(f,null,c),p.return=f,p;case At:return c=Xl(c,f.mode,p),c.return=f,c;case Je:var y=c._init;return m(f,y(c._payload),p)}if(Sn(c)||mn(c))return c=Et(c,f.mode,p,null),c.return=f,c;vr(f,c)}return null}function h(f,c,p,y){var j=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case or:return p.key===j?u(f,c,p,y):null;case At:return p.key===j?d(f,c,p,y):null;case Je:return j=p._init,h(f,c,j(p._payload),y)}if(Sn(p)||mn(p))return j!==null?null:g(f,c,p,y,null);vr(f,p)}return null}function x(f,c,p,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,s(c,f,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case or:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,j);case At:return f=f.get(y.key===null?p:y.key)||null,d(c,f,y,j);case Je:var C=y._init;return x(f,c,p,C(y._payload),j)}if(Sn(y)||mn(y))return f=f.get(p)||null,g(c,f,y,j,null);vr(c,y)}return null}function v(f,c,p,y){for(var j=null,C=null,E=c,z=c=0,W=null;E!==null&&z<p.length;z++){E.index>z?(W=E,E=null):W=E.sibling;var _=h(f,E,p[z],y);if(_===null){E===null&&(E=W);break}e&&E&&_.alternate===null&&t(f,E),c=i(_,c,z),C===null?j=_:C.sibling=_,C=_,E=W}if(z===p.length)return n(f,E),O&&kt(f,z),j;if(E===null){for(;z<p.length;z++)E=m(f,p[z],y),E!==null&&(c=i(E,c,z),C===null?j=E:C.sibling=E,C=E);return O&&kt(f,z),j}for(E=r(f,E);z<p.length;z++)W=x(E,f,z,p[z],y),W!==null&&(e&&W.alternate!==null&&E.delete(W.key===null?z:W.key),c=i(W,c,z),C===null?j=W:C.sibling=W,C=W);return e&&E.forEach(function(Pe){return t(f,Pe)}),O&&kt(f,z),j}function w(f,c,p,y){var j=mn(p);if(typeof j!="function")throw Error(k(150));if(p=j.call(p),p==null)throw Error(k(151));for(var C=j=null,E=c,z=c=0,W=null,_=p.next();E!==null&&!_.done;z++,_=p.next()){E.index>z?(W=E,E=null):W=E.sibling;var Pe=h(f,E,_.value,y);if(Pe===null){E===null&&(E=W);break}e&&E&&Pe.alternate===null&&t(f,E),c=i(Pe,c,z),C===null?j=Pe:C.sibling=Pe,C=Pe,E=W}if(_.done)return n(f,E),O&&kt(f,z),j;if(E===null){for(;!_.done;z++,_=p.next())_=m(f,_.value,y),_!==null&&(c=i(_,c,z),C===null?j=_:C.sibling=_,C=_);return O&&kt(f,z),j}for(E=r(f,E);!_.done;z++,_=p.next())_=x(E,f,z,_.value,y),_!==null&&(e&&_.alternate!==null&&E.delete(_.key===null?z:_.key),c=i(_,c,z),C===null?j=_:C.sibling=_,C=_);return e&&E.forEach(function(fn){return t(f,fn)}),O&&kt(f,z),j}function T(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Ft&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case or:e:{for(var j=p.key,C=c;C!==null;){if(C.key===j){if(j=p.type,j===Ft){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Je&&Ta(j)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=xn(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Ft?(c=Et(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=Tr(p.type,p.key,p.props,null,f.mode,y),y.ref=xn(f,c,p),y.return=f,f=y)}return a(f);case At:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Xl(p,f.mode,y),c.return=f,f=c}return a(f);case Je:return C=p._init,T(f,c,C(p._payload),y)}if(Sn(p))return v(f,c,p,y);if(mn(p))return w(f,c,p,y);vr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=Yl(p,f.mode,y),c.return=f,f=c),a(f)):n(f,c)}return T}var ln=ju(!0),Su=ju(!1),Kr=gt(null),Yr=null,Qt=null,ko=null;function wo(){ko=Qt=Yr=null}function jo(e){var t=Kr.current;F(Kr),e._currentValue=t}function bi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jt(e,t){Yr=e,ko=Qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(ko!==e)if(e={context:e,memoizedValue:t,next:null},Qt===null){if(Yr===null)throw Error(k(308));Qt=e,Yr.dependencies={lanes:0,firstContext:e}}else Qt=Qt.next=e;return t}var St=null;function So(e){St===null?St=[e]:St.push(e)}function Nu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,So(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function No(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,So(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,so(e,n)}}function Ra(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xr(e,t,n,r){var l=e.updateQueue;et=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=u))}if(i!==null){var m=l.baseState;a=0,g=d=u=null,s=i;do{var h=s.lane,x=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(h=t,x=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(x,m,h);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(x,m,h):v,h==null)break e;m=$({},m,h);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else x={eventTime:x,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=x,u=m):g=g.next=x,a|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(g===null&&(u=m),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Mt|=a,e.lanes=a,e.memoizedState=m}}function Ia(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var nr={},Ue=gt(nr),Qn=gt(nr),Gn=gt(nr);function Nt(e){if(e===nr)throw Error(k(174));return e}function Co(e,t){switch(I(Gn,t),I(Qn,e),I(Ue,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:si(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=si(t,e)}F(Ue),I(Ue,t)}function on(){F(Ue),F(Qn),F(Gn)}function Eu(e){Nt(Gn.current);var t=Nt(Ue.current),n=si(t,e.type);t!==n&&(I(Qn,e),I(Ue,n))}function Eo(e){Qn.current===e&&(F(Ue),F(Qn))}var B=gt(0);function Zr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function zo(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var Pr=Ze.ReactCurrentDispatcher,Hl=Ze.ReactCurrentBatchConfig,Pt=0,U=null,Y=null,q=null,qr=!1,Ln=!1,Kn=0,Lf=0;function re(){throw Error(k(321))}function bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function Po(e,t,n,r,l,i){if(Pt=i,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?Rf:If,e=n(r,l),Ln){i=0;do{if(Ln=!1,Kn=0,25<=i)throw Error(k(301));i+=1,q=Y=null,t.updateQueue=null,Pr.current=Af,e=n(r,l)}while(Ln)}if(Pr.current=Jr,t=Y!==null&&Y.next!==null,Pt=0,q=Y=U=null,qr=!1,t)throw Error(k(300));return e}function Mo(){var e=Kn!==0;return Kn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?U.memoizedState=q=e:q=q.next=e,q}function be(){if(Y===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=q===null?U.memoizedState:q.next;if(t!==null)q=t,Y=e;else{if(e===null)throw Error(k(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?U.memoizedState=q=e:q=q.next=e}return q}function Yn(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=a=null,u=null,d=i;do{var g=d.lane;if((Pt&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=m,a=r):u=u.next=m,U.lanes|=g,Mt|=g}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=s,Ie(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,U.lanes|=i,Mt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);Ie(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function zu(){}function bu(e,t){var n=U,r=be(),l=t(),i=!Ie(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,Lo(Lu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Xn(9,Mu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(k(349));Pt&30||Pu(n,t,l)}return l}function Pu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mu(e,t,n,r){t.value=n,t.getSnapshot=r,_u(t)&&Du(e)}function Lu(e,t,n){return n(function(){_u(t)&&Du(e)})}function _u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function Du(e){var t=Ye(e,1);t!==null&&Re(t,e,1,-1)}function Aa(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=Tf.bind(null,U,e),[t.memoizedState,e]}function Xn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tu(){return be().memoizedState}function Mr(e,t,n,r){var l=Fe();U.flags|=e,l.memoizedState=Xn(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var l=be();r=r===void 0?null:r;var i=void 0;if(Y!==null){var a=Y.memoizedState;if(i=a.destroy,r!==null&&bo(r,a.deps)){l.memoizedState=Xn(t,n,i,r);return}}U.flags|=e,l.memoizedState=Xn(1|t,n,i,r)}function Fa(e,t){return Mr(8390656,8,e,t)}function Lo(e,t){return pl(2048,8,e,t)}function Ru(e,t){return pl(4,2,e,t)}function Iu(e,t){return pl(4,4,e,t)}function Au(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fu(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,Au.bind(null,t,e),n)}function _o(){}function Ou(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bu(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uu(e,t,n){return Pt&21?(Ie(n,t)||(n=Qs(),U.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function _f(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{R=n,Hl.transition=r}}function $u(){return be().memoizedState}function Df(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vu(e))Hu(t,n);else if(n=Nu(e,t,n,r),n!==null){var l=ue();Re(n,e,r,l),Wu(n,t,r)}}function Tf(e,t,n){var r=dt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))Hu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.hasEagerState=!0,l.eagerState=s,Ie(s,a)){var u=t.interleaved;u===null?(l.next=l,So(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Nu(e,t,l,r),n!==null&&(l=ue(),Re(n,e,r,l),Wu(n,t,r))}}function Vu(e){var t=e.alternate;return e===U||t!==null&&t===U}function Hu(e,t){Ln=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,so(e,n)}}var Jr={readContext:ze,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Rf={readContext:ze,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Fa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mr(4194308,4,Au.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Df.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Aa,useDebugValue:_o,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Aa(!1),t=e[0];return e=_f.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,l=Fe();if(O){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),J===null)throw Error(k(349));Pt&30||Pu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Fa(Lu.bind(null,r,i,e),[e]),r.flags|=2048,Xn(9,Mu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=J.identifierPrefix;if(O){var n=We,r=He;n=(r&~(1<<32-Te(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},If={readContext:ze,useCallback:Ou,useContext:ze,useEffect:Lo,useImperativeHandle:Fu,useInsertionEffect:Ru,useLayoutEffect:Iu,useMemo:Bu,useReducer:Wl,useRef:Tu,useState:function(){return Wl(Yn)},useDebugValue:_o,useDeferredValue:function(e){var t=be();return Uu(t,Y.memoizedState,e)},useTransition:function(){var e=Wl(Yn)[0],t=be().memoizedState;return[e,t]},useMutableSource:zu,useSyncExternalStore:bu,useId:$u,unstable_isNewReconciler:!1},Af={readContext:ze,useCallback:Ou,useContext:ze,useEffect:Lo,useImperativeHandle:Fu,useInsertionEffect:Ru,useLayoutEffect:Iu,useMemo:Bu,useReducer:Ql,useRef:Tu,useState:function(){return Ql(Yn)},useDebugValue:_o,useDeferredValue:function(e){var t=be();return Y===null?t.memoizedState=e:Uu(t,Y.memoizedState,e)},useTransition:function(){var e=Ql(Yn)[0],t=be().memoizedState;return[e,t]},useMutableSource:zu,useSyncExternalStore:bu,useId:$u,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ml={isMounted:function(e){return(e=e._reactInternals)?Tt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=dt(e),i=Qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Re(t,e,l,r),br(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=dt(e),i=Qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Re(t,e,l,r),br(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=dt(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(Re(t,e,r,n),br(t,e,r))}};function Oa(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!$n(n,r)||!$n(l,i):!0}function Qu(e,t,n){var r=!1,l=mt,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(l=he(t)?zt:ae.current,r=t.contextTypes,i=(r=r!=null)?nn(e,l):mt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ba(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}function Mi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},No(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=ze(i):(i=he(t)?zt:ae.current,l.context=nn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Pi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ml.enqueueReplaceState(l,l.state,null),Xr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=cd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ff=typeof WeakMap=="function"?WeakMap:Map;function Gu(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,Ui=r),Li(e,t)},n}function Ku(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Li(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Li(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ua(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ff;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=qf.bind(null,e,t,n),t.then(e,e))}function $a(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Va(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var Of=Ze.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?Su(t,null,n,r):ln(t,e.child,n,r)}function Ha(e,t,n,r,l){n=n.render;var i=t.ref;return Jt(t,l),r=Po(e,t,n,r,i,l),n=Mo(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(O&&n&&vo(t),t.flags|=1,se(e,t,r,l),t.child)}function Wa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Bo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Yu(e,t,i,r,l)):(e=Tr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:$n,n(a,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ft(i,r),e.ref=t.ref,e.return=t,t.child=e}function Yu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if($n(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return _i(e,t,n,r,l)}function Xu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Kt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Kt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,I(Kt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,I(Kt,ve),ve|=r;return se(e,t,l,n),t.child}function Zu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _i(e,t,n,r,l){var i=he(n)?zt:ae.current;return i=nn(t,i),Jt(t,l),n=Po(e,t,n,r,i,l),r=Mo(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(O&&r&&vo(t),t.flags|=1,se(e,t,n,l),t.child)}function Qa(e,t,n,r,l){if(he(n)){var i=!0;Wr(t)}else i=!1;if(Jt(t,l),t.stateNode===null)Lr(e,t),Qu(t,n,r),Mi(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=he(n)?zt:ae.current,d=nn(t,d));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ba(t,a,r,d),et=!1;var h=t.memoizedState;a.state=h,Xr(t,r,a,l),u=t.memoizedState,s!==r||h!==u||me.current||et?(typeof g=="function"&&(Pi(t,n,g,r),u=t.memoizedState),(s=et||Oa(t,n,s,r,h,u,d))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Cu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Le(t.type,s),a.props=d,m=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=ze(u):(u=he(n)?zt:ae.current,u=nn(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==m||h!==u)&&Ba(t,a,r,u),et=!1,h=t.memoizedState,a.state=h,Xr(t,r,a,l);var v=t.memoizedState;s!==m||h!==v||me.current||et?(typeof x=="function"&&(Pi(t,n,x,r),v=t.memoizedState),(d=et||Oa(t,n,d,r,h,v,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Di(e,t,n,r,i,l)}function Di(e,t,n,r,l,i){Zu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&La(t,n,!1),Xe(e,t,i);r=t.stateNode,Of.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ln(t,e.child,null,i),t.child=ln(t,null,s,i)):se(e,t,s,i),t.memoizedState=r.state,l&&La(t,n,!0),t.child}function qu(e){var t=e.stateNode;t.pendingContext?Ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(e,t.context,!1),Co(e,t.containerInfo)}function Ga(e,t,n,r,l){return rn(),xo(l),t.flags|=256,se(e,t,n,r),t.child}var Ti={dehydrated:null,treeContext:null,retryLane:0};function Ri(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ju(e,t,n){var r=t.pendingProps,l=B.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),I(B,l&1),e===null)return zi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=vl(a,r,0,null),e=Et(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ri(n),t.memoizedState=Ti,e):Do(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Bf(e,t,a,r,s,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ft(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=ft(s,i):(i=Et(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ri(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ti,r}return i=e.child,e=i.sibling,r=ft(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Do(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yr(e,t,n,r){return r!==null&&xo(r),ln(t,e.child,null,n),e=Do(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bf(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Gl(Error(k(422))),yr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=vl({mode:"visible",children:r.children},l,0,null),i=Et(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ln(t,e.child,null,a),t.child.memoizedState=Ri(a),t.memoizedState=Ti,i);if(!(t.mode&1))return yr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=Gl(i,r,void 0),yr(e,t,a,r)}if(s=(a&e.childLanes)!==0,pe||s){if(r=J,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),Re(r,e,l,-1))}return Oo(),r=Gl(Error(k(421))),yr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Jf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ye=st(l.nextSibling),xe=t,O=!0,De=null,e!==null&&(Se[Ne++]=He,Se[Ne++]=We,Se[Ne++]=bt,He=e.id,We=e.overflow,bt=t),t=Do(t,r.children),t.flags|=4096,t)}function Ka(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bi(e.return,t,n)}function Kl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function ec(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ka(e,n,t);else if(e.tag===19)Ka(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Zr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Kl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Zr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Kl(t,!0,n,null,i);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Uf(e,t,n){switch(t.tag){case 3:qu(t),rn();break;case 5:Eu(t);break;case 1:he(t.type)&&Wr(t);break;case 4:Co(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;I(Kr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Ju(e,t,n):(I(B,B.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);I(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ec(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Xu(e,t,n)}return Xe(e,t,n)}var tc,Ii,nc,rc;tc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ii=function(){};nc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Nt(Ue.current);var i=null;switch(n){case"input":l=li(e,l),r=li(e,r),i=[];break;case"select":l=$({},l,{value:void 0}),r=$({},r,{value:void 0}),i=[];break;case"textarea":l=ai(e,l),r=ai(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}ui(n,r);var a;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Rn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&A("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};rc=function(e,t,n,r){n!==r&&(t.flags|=4)};function kn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $f(e,t,n){var r=t.pendingProps;switch(yo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return he(t.type)&&Hr(),le(t),null;case 3:return r=t.stateNode,on(),F(me),F(ae),zo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Hi(De),De=null))),Ii(e,t),le(t),null;case 5:Eo(t);var l=Nt(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)nc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return le(t),null}if(e=Nt(Ue.current),gr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Oe]=t,r[Wn]=i,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(l=0;l<Cn.length;l++)A(Cn[l],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":ra(r,i),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},A("invalid",r);break;case"textarea":ia(r,i),A("invalid",r)}ui(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&hr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&hr(r.textContent,s,e),l=["children",""+s]):Rn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&A("scroll",r)}switch(n){case"input":ar(r),la(r,i,!0);break;case"textarea":ar(r),oa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ls(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Oe]=t,e[Wn]=r,tc(e,t,!1,!1),t.stateNode=e;e:{switch(a=ci(n,r),n){case"dialog":A("cancel",e),A("close",e),l=r;break;case"iframe":case"object":case"embed":A("load",e),l=r;break;case"video":case"audio":for(l=0;l<Cn.length;l++)A(Cn[l],e);l=r;break;case"source":A("error",e),l=r;break;case"img":case"image":case"link":A("error",e),A("load",e),l=r;break;case"details":A("toggle",e),l=r;break;case"input":ra(e,r),l=li(e,r),A("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=$({},r,{value:void 0}),A("invalid",e);break;case"textarea":ia(e,r),l=ai(e,r),A("invalid",e);break;default:l=r}ui(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Ts(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_s(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&A("scroll",e):u!=null&&no(e,i,u,a))}switch(n){case"input":ar(e),la(e,r,!1);break;case"textarea":ar(e),oa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)rc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Nt(Gn.current),Nt(Ue.current),gr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Oe]=t,(i=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Oe]=t,t.stateNode=r}return le(t),null;case 13:if(F(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&ye!==null&&t.mode&1&&!(t.flags&128))wu(),rn(),t.flags|=98560,i=!1;else if(i=gr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Oe]=t}else rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else De!==null&&(Hi(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?X===0&&(X=3):Oo())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return on(),Ii(e,t),e===null&&Vn(t.stateNode.containerInfo),le(t),null;case 10:return jo(t.type._context),le(t),null;case 17:return he(t.type)&&Hr(),le(t),null;case 19:if(F(B),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)kn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Zr(e),a!==null){for(t.flags|=128,kn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(B,B.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>sn&&(t.flags|=128,r=!0,kn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Zr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!O)return le(t),null}else 2*G()-i.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,r=!0,kn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=B.current,I(B,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Fo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Vf(e,t){switch(yo(t),t.tag){case 1:return he(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),F(me),F(ae),zo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Eo(t),null;case 13:if(F(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(B),null;case 4:return on(),null;case 10:return jo(t.type._context),null;case 22:case 23:return Fo(),null;case 24:return null;default:return null}}var xr=!1,ie=!1,Hf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Ai(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ya=!1;function Wf(e,t){if(ki=Br,e=su(),go(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,g=0,m=e,h=null;t:for(;;){for(var x;m!==n||l!==0&&m.nodeType!==3||(s=a+l),m!==i||r!==0&&m.nodeType!==3||(u=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(x=m.firstChild)!==null;)h=m,m=x;for(;;){if(m===e)break t;if(h===n&&++d===l&&(s=a),h===i&&++g===r&&(u=a),(x=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wi={focusedElem:e,selectionRange:n},Br=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,T=v.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Le(t.type,w),T);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){V(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return v=Ya,Ya=!1,v}function _n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ai(t,n,i)}l=l.next}while(l!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lc(e){var t=e.alternate;t!==null&&(e.alternate=null,lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[Wn],delete t[Ni],delete t[zf],delete t[bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ic(e){return e.tag===5||e.tag===3||e.tag===4}function Xa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ic(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}var ee=null,_e=!1;function qe(e,t,n){for(n=n.child;n!==null;)oc(e,t,n),n=n.sibling}function oc(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:ie||Gt(n,t);case 6:var r=ee,l=_e;ee=null,qe(e,t,n),ee=r,_e=l,ee!==null&&(_e?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(_e?(e=ee,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),Bn(e)):Ul(ee,n.stateNode));break;case 4:r=ee,l=_e,ee=n.stateNode.containerInfo,_e=!0,qe(e,t,n),ee=r,_e=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ai(n,t,a),l=l.next}while(l!==r)}qe(e,t,n);break;case 1:if(!ie&&(Gt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,qe(e,t,n),ie=r):qe(e,t,n);break;default:qe(e,t,n)}}function Za(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hf),t.forEach(function(r){var l=ep.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,_e=!1;break e;case 3:ee=s.stateNode.containerInfo,_e=!0;break e;case 4:ee=s.stateNode.containerInfo,_e=!0;break e}s=s.return}if(ee===null)throw Error(k(160));oc(i,a,l),ee=null,_e=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){V(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ac(t,e),t=t.sibling}function ac(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ae(e),r&4){try{_n(3,e,e.return),hl(3,e)}catch(w){V(e,e.return,w)}try{_n(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Me(t,e),Ae(e),r&512&&n!==null&&Gt(n,n.return);break;case 5:if(Me(t,e),Ae(e),r&512&&n!==null&&Gt(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(w){V(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ps(l,i),ci(s,a);var d=ci(s,i);for(a=0;a<u.length;a+=2){var g=u[a],m=u[a+1];g==="style"?Ts(l,m):g==="dangerouslySetInnerHTML"?_s(l,m):g==="children"?In(l,m):no(l,g,m,d)}switch(s){case"input":ii(l,i);break;case"textarea":Ms(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Yt(l,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?Yt(l,!!i.multiple,i.defaultValue,!0):Yt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Wn]=i}catch(w){V(e,e.return,w)}}break;case 6:if(Me(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){V(e,e.return,w)}}break;case 3:if(Me(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Me(t,e),Ae(e);break;case 13:Me(t,e),Ae(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Io=G())),r&4&&Za(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(d=ie)||g,Me(t,e),ie=d):Me(t,e),Ae(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(m=S=g;S!==null;){switch(h=S,x=h.child,h.tag){case 0:case 11:case 14:case 15:_n(4,h,h.return);break;case 1:Gt(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:Gt(h,h.return);break;case 22:if(h.memoizedState!==null){Ja(m);continue}}x!==null?(x.return=h,S=x):Ja(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{l=m.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,u=m.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ds("display",a))}catch(w){V(e,e.return,w)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(w){V(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(t,e),Ae(e),r&4&&Za(e);break;case 21:break;default:Me(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ic(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var i=Xa(e);Bi(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Xa(e);Oi(e,s,a);break;default:throw Error(k(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qf(e,t,n){S=e,sc(e)}function sc(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||xr;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||ie;s=xr;var d=ie;if(xr=a,(ie=u)&&!d)for(S=l;S!==null;)a=S,u=a.child,a.tag===22&&a.memoizedState!==null?es(l):u!==null?(u.return=a,S=u):es(l);for(;i!==null;)S=i,sc(i),i=i.sibling;S=l,xr=s,ie=d}qa(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):qa(e)}}function qa(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ia(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ia(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Bn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ie||t.flags&512&&Fi(t)}catch(h){V(t,t.return,h)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Ja(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function es(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){V(t,l,u)}}var i=t.return;try{Fi(t)}catch(u){V(t,i,u)}break;case 5:var a=t.return;try{Fi(t)}catch(u){V(t,a,u)}}}catch(u){V(t,t.return,u)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var Gf=Math.ceil,el=Ze.ReactCurrentDispatcher,To=Ze.ReactCurrentOwner,Ee=Ze.ReactCurrentBatchConfig,D=0,J=null,K=null,te=0,ve=0,Kt=gt(0),X=0,Zn=null,Mt=0,gl=0,Ro=0,Dn=null,fe=null,Io=0,sn=1/0,$e=null,tl=!1,Ui=null,ct=null,kr=!1,lt=null,nl=0,Tn=0,$i=null,_r=-1,Dr=0;function ue(){return D&6?G():_r!==-1?_r:_r=G()}function dt(e){return e.mode&1?D&2&&te!==0?te&-te:Mf.transition!==null?(Dr===0&&(Dr=Qs()),Dr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Js(e.type)),e):1}function Re(e,t,n,r){if(50<Tn)throw Tn=0,$i=null,Error(k(185));Jn(e,n,r),(!(D&2)||e!==J)&&(e===J&&(!(D&2)&&(gl|=n),X===4&&nt(e,te)),ge(e,r),n===1&&D===0&&!(t.mode&1)&&(sn=G()+500,fl&&vt()))}function ge(e,t){var n=e.callbackNode;Pd(e,t);var r=Or(e,e===J?te:0);if(r===0)n!==null&&ua(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ua(n),t===1)e.tag===0?Pf(ts.bind(null,e)):yu(ts.bind(null,e)),Cf(function(){!(D&6)&&vt()}),n=null;else{switch(Gs(r)){case 1:n=ao;break;case 4:n=Hs;break;case 16:n=Fr;break;case 536870912:n=Ws;break;default:n=Fr}n=gc(n,uc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uc(e,t){if(_r=-1,Dr=0,D&6)throw Error(k(327));var n=e.callbackNode;if(en()&&e.callbackNode!==n)return null;var r=Or(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var l=D;D|=2;var i=dc();(J!==e||te!==t)&&($e=null,sn=G()+500,Ct(e,t));do try{Xf();break}catch(s){cc(e,s)}while(!0);wo(),el.current=i,D=l,K!==null?t=0:(J=null,te=0,t=X)}if(t!==0){if(t===2&&(l=hi(e),l!==0&&(r=l,t=Vi(e,l))),t===1)throw n=Zn,Ct(e,0),nt(e,r),ge(e,G()),n;if(t===6)nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Kf(l)&&(t=rl(e,r),t===2&&(i=hi(e),i!==0&&(r=i,t=Vi(e,i))),t===1))throw n=Zn,Ct(e,0),nt(e,r),ge(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:wt(e,fe,$e);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Io+500-G(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Si(wt.bind(null,e,fe,$e),t);break}wt(e,fe,$e);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Te(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gf(r/1960))-r,10<r){e.timeoutHandle=Si(wt.bind(null,e,fe,$e),r);break}wt(e,fe,$e);break;case 5:wt(e,fe,$e);break;default:throw Error(k(329))}}}return ge(e,G()),e.callbackNode===n?uc.bind(null,e):null}function Vi(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=rl(e,t),e!==2&&(t=fe,fe=n,t!==null&&Hi(t)),e}function Hi(e){fe===null?fe=e:fe.push.apply(fe,e)}function Kf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ie(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Ro,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Te(t),r=1<<n;e[n]=-1,t&=~r}}function ts(e){if(D&6)throw Error(k(327));en();var t=Or(e,0);if(!(t&1))return ge(e,G()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=hi(e);r!==0&&(t=r,n=Vi(e,r))}if(n===1)throw n=Zn,Ct(e,0),nt(e,t),ge(e,G()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,fe,$e),ge(e,G()),null}function Ao(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(sn=G()+500,fl&&vt())}}function Lt(e){lt!==null&&lt.tag===0&&!(D&6)&&en();var t=D;D|=1;var n=Ee.transition,r=R;try{if(Ee.transition=null,R=1,e)return e()}finally{R=r,Ee.transition=n,D=t,!(D&6)&&vt()}}function Fo(){ve=Kt.current,F(Kt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(yo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:on(),F(me),F(ae),zo();break;case 5:Eo(r);break;case 4:on();break;case 13:F(B);break;case 19:F(B);break;case 10:jo(r.type._context);break;case 22:case 23:Fo()}n=n.return}if(J=e,K=e=ft(e.current,null),te=ve=t,X=0,Zn=null,Ro=gl=Mt=0,fe=Dn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}St=null}return e}function cc(e,t){do{var n=K;try{if(wo(),Pr.current=Jr,qr){for(var r=U.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}qr=!1}if(Pt=0,q=Y=U=null,Ln=!1,Kn=0,To.current=null,n===null||n.return===null){X=1,Zn=t,K=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=$a(a);if(x!==null){x.flags&=-257,Va(x,a,s,i,t),x.mode&1&&Ua(i,d,t),t=x,u=d;var v=t.updateQueue;if(v===null){var w=new Set;w.add(u),t.updateQueue=w}else v.add(u);break e}else{if(!(t&1)){Ua(i,d,t),Oo();break e}u=Error(k(426))}}else if(O&&s.mode&1){var T=$a(a);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Va(T,a,s,i,t),xo(an(u,s));break e}}i=u=an(u,s),X!==4&&(X=2),Dn===null?Dn=[i]:Dn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Gu(i,u,t);Ra(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Ku(i,s,t);Ra(i,y);break e}}i=i.return}while(i!==null)}pc(n)}catch(j){t=j,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function dc(){var e=el.current;return el.current=Jr,e===null?Jr:e}function Oo(){(X===0||X===3||X===2)&&(X=4),J===null||!(Mt&268435455)&&!(gl&268435455)||nt(J,te)}function rl(e,t){var n=D;D|=2;var r=dc();(J!==e||te!==t)&&($e=null,Ct(e,t));do try{Yf();break}catch(l){cc(e,l)}while(!0);if(wo(),D=n,el.current=r,K!==null)throw Error(k(261));return J=null,te=0,X}function Yf(){for(;K!==null;)fc(K)}function Xf(){for(;K!==null&&!kd();)fc(K)}function fc(e){var t=hc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?pc(e):K=t,To.current=null}function pc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=$f(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function wt(e,t,n){var r=R,l=Ee.transition;try{Ee.transition=null,R=1,Zf(e,t,n,r)}finally{Ee.transition=l,R=r}return null}function Zf(e,t,n,r){do en();while(lt!==null);if(D&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Md(e,i),e===J&&(K=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kr||(kr=!0,gc(Fr,function(){return en(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var a=R;R=1;var s=D;D|=4,To.current=null,Wf(e,n),ac(n,e),vf(wi),Br=!!ki,wi=ki=null,e.current=n,Qf(n),wd(),D=s,R=a,Ee.transition=i}else e.current=n;if(kr&&(kr=!1,lt=e,nl=l),i=e.pendingLanes,i===0&&(ct=null),Nd(n.stateNode),ge(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(tl)throw tl=!1,e=Ui,Ui=null,e;return nl&1&&e.tag!==0&&en(),i=e.pendingLanes,i&1?e===$i?Tn++:(Tn=0,$i=e):Tn=0,vt(),null}function en(){if(lt!==null){var e=Gs(nl),t=Ee.transition,n=R;try{if(Ee.transition=null,R=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,nl=0,D&6)throw Error(k(331));var l=D;for(D|=4,S=e.current;S!==null;){var i=S,a=i.child;if(S.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(S=d;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:_n(8,g,i)}var m=g.child;if(m!==null)m.return=g,S=m;else for(;S!==null;){g=S;var h=g.sibling,x=g.return;if(lc(g),g===d){S=null;break}if(h!==null){h.return=x,S=h;break}S=x}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}S=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,S=a;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_n(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var c=e.current;for(S=c;S!==null;){a=S;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,S=p;else e:for(a=c;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hl(9,s)}}catch(j){V(s,s.return,j)}if(s===a){S=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,S=y;break e}S=s.return}}if(D=l,vt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(al,e)}catch{}r=!0}return r}finally{R=n,Ee.transition=t}}return!1}function ns(e,t,n){t=an(n,t),t=Gu(e,t,1),e=ut(e,t,1),t=ue(),e!==null&&(Jn(e,1,t),ge(e,t))}function V(e,t,n){if(e.tag===3)ns(e,e,n);else for(;t!==null;){if(t.tag===3){ns(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=an(n,e),e=Ku(t,e,1),t=ut(t,e,1),e=ue(),t!==null&&(Jn(t,1,e),ge(t,e));break}}t=t.return}}function qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>G()-Io?Ct(e,0):Ro|=n),ge(e,t)}function mc(e,t){t===0&&(e.mode&1?(t=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):t=1);var n=ue();e=Ye(e,t),e!==null&&(Jn(e,t,n),ge(e,n))}function Jf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mc(e,n)}function ep(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),mc(e,n)}var hc;hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Uf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,O&&t.flags&1048576&&xu(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lr(e,t),e=t.pendingProps;var l=nn(t,ae.current);Jt(t,n),l=Po(null,t,r,e,l,n);var i=Mo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,Wr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,No(t),l.updater=ml,t.stateNode=l,l._reactInternals=t,Mi(t,r,e,n),t=Di(null,t,r,!0,i,n)):(t.tag=0,O&&i&&vo(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=np(r),e=Le(r,e),l){case 0:t=_i(null,t,r,e,n);break e;case 1:t=Qa(null,t,r,e,n);break e;case 11:t=Ha(null,t,r,e,n);break e;case 14:t=Wa(null,t,r,Le(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),_i(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Qa(e,t,r,l,n);case 3:e:{if(qu(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Cu(e,t),Xr(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=an(Error(k(423)),t),t=Ga(e,t,r,n,l);break e}else if(r!==l){l=an(Error(k(424)),t),t=Ga(e,t,r,n,l);break e}else for(ye=st(t.stateNode.containerInfo.firstChild),xe=t,O=!0,De=null,n=Su(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rn(),r===l){t=Xe(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Eu(t),e===null&&zi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,ji(r,l)?a=null:i!==null&&ji(r,i)&&(t.flags|=32),Zu(e,t),se(e,t,a,n),t.child;case 6:return e===null&&zi(t),null;case 13:return Ju(e,t,n);case 4:return Co(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ln(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ha(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,I(Kr,r._currentValue),r._currentValue=a,i!==null)if(Ie(i.value,a)){if(i.children===l.children&&!me.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Qe(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),bi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(k(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),bi(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Jt(t,n),l=ze(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Wa(e,t,r,l,n);case 15:return Yu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Lr(e,t),t.tag=1,he(r)?(e=!0,Wr(t)):e=!1,Jt(t,n),Qu(t,r,l),Mi(t,r,l,n),Di(null,t,r,!0,e,n);case 19:return ec(e,t,n);case 22:return Xu(e,t,n)}throw Error(k(156,t.tag))};function gc(e,t){return Vs(e,t)}function tp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new tp(e,t,n,r)}function Bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function np(e){if(typeof e=="function")return Bo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===lo)return 11;if(e===io)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tr(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Bo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ft:return Et(n.children,l,i,t);case ro:a=8,l|=8;break;case ei:return e=Ce(12,n,t,l|2),e.elementType=ei,e.lanes=i,e;case ti:return e=Ce(13,n,t,l),e.elementType=ti,e.lanes=i,e;case ni:return e=Ce(19,n,t,l),e.elementType=ni,e.lanes=i,e;case Es:return vl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ns:a=10;break e;case Cs:a=9;break e;case lo:a=11;break e;case io:a=14;break e;case Je:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ce(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Et(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=Es,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Uo(e,t,n,r,l,i,a,s,u){return e=new rp(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},No(i),e}function lp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vc(e){if(!e)return mt;e=e._reactInternals;e:{if(Tt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(he(n))return vu(e,n,t)}return t}function yc(e,t,n,r,l,i,a,s,u){return e=Uo(n,r,!0,e,l,i,a,s,u),e.context=vc(null),n=e.current,r=ue(),l=dt(n),i=Qe(r,l),i.callback=t??null,ut(n,i,l),e.current.lanes=l,Jn(e,l,r),ge(e,r),e}function yl(e,t,n,r){var l=t.current,i=ue(),a=dt(l);return n=vc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,a),e!==null&&(Re(e,l,a,i),br(e,l,a)),a}function ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $o(e,t){rs(e,t),(e=e.alternate)&&rs(e,t)}function ip(){return null}var xc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vo(e){this._internalRoot=e}xl.prototype.render=Vo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));yl(e,t,null,null)};xl.prototype.unmount=Vo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){yl(null,e,null,null)}),t[Ke]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&qs(e)}};function Ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ls(){}function op(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=ll(a);i.call(d)}}var a=yc(t,r,e,0,null,!1,!1,"",ls);return e._reactRootContainer=a,e[Ke]=a.current,Vn(e.nodeType===8?e.parentNode:e),Lt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=ll(u);s.call(d)}}var u=Uo(e,0,!1,null,null,!1,!1,"",ls);return e._reactRootContainer=u,e[Ke]=u.current,Vn(e.nodeType===8?e.parentNode:e),Lt(function(){yl(t,u,n,r)}),u}function wl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var s=l;l=function(){var u=ll(a);s.call(u)}}yl(t,a,e,l)}else a=op(n,t,e,l,r);return ll(a)}Ks=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(so(t,n|1),ge(t,G()),!(D&6)&&(sn=G()+500,vt()))}break;case 13:Lt(function(){var r=Ye(e,1);if(r!==null){var l=ue();Re(r,e,1,l)}}),$o(e,1)}};uo=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ue();Re(t,e,134217728,n)}$o(e,134217728)}};Ys=function(e){if(e.tag===13){var t=dt(e),n=Ye(e,t);if(n!==null){var r=ue();Re(n,e,t,r)}$o(e,t)}};Xs=function(){return R};Zs=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};fi=function(e,t,n){switch(t){case"input":if(ii(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=dl(r);if(!l)throw Error(k(90));bs(r),ii(r,l)}}}break;case"textarea":Ms(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};As=Ao;Fs=Lt;var ap={usingClientEntryPoint:!1,Events:[tr,$t,dl,Rs,Is,Ao]},wn={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sp={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Us(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{al=wr.inject(sp),Be=wr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ap;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ho(t))throw Error(k(200));return lp(e,t,null,n)};we.createRoot=function(e,t){if(!Ho(e))throw Error(k(299));var n=!1,r="",l=xc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Uo(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Vo(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Us(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Lt(e)};we.hydrate=function(e,t,n){if(!kl(t))throw Error(k(200));return wl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Ho(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=xc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=yc(t,null,e,1,n??null,l,!1,i,a),e[Ke]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xl(t)};we.render=function(e,t,n){if(!kl(t))throw Error(k(200));return wl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!kl(e))throw Error(k(40));return e._reactRootContainer?(Lt(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=Ao;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!kl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return wl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kc)}catch(e){console.error(e)}}kc(),ks.exports=we;var up=ks.exports,is=up;ql.createRoot=is.createRoot,ql.hydrateRoot=is.hydrateRoot;const cp=()=>{const e=H.useRef(null),t=H.useRef({x:-1e3,y:-1e3,radius:160});return H.useEffect(()=>{const n=e.current;if(!n)return;const r=n.getContext("2d");let l,i=n.width=window.innerWidth,a=n.height=window.innerHeight;const s=()=>{n&&(i=n.width=window.innerWidth,a=n.height=window.innerHeight)},u=x=>{t.current.x=x.clientX,t.current.y=x.clientY},d=()=>{t.current.x=-1e3,t.current.y=-1e3};window.addEventListener("resize",s),window.addEventListener("mousemove",u),window.addEventListener("mouseleave",d);const g=Math.min(Math.floor(i/20),75),m=[];for(let x=0;x<g;x++)m.push({x:Math.random()*i,y:Math.random()*a,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,radius:Math.random()*2+1,color:x%3===0?"#00f2fe":x%3===1?"#6366f1":"#10b981"});const h=()=>{r.clearRect(0,0,i,a);const x=t.current;for(let v=0;v<m.length;v++){for(let c=v+1;c<m.length;c++){const p=m[v].x-m[c].x,y=m[v].y-m[c].y,j=Math.sqrt(p*p+y*y);if(j<135){const C=(1-j/135)*.15;r.beginPath(),r.moveTo(m[v].x,m[v].y),r.lineTo(m[c].x,m[c].y),r.strokeStyle=`rgba(0, 242, 254, ${C})`,r.lineWidth=.8,r.stroke()}}const w=m[v].x-x.x,T=m[v].y-x.y,f=Math.sqrt(w*w+T*T);if(f<x.radius){const c=(1-f/x.radius)*.35;r.beginPath(),r.moveTo(m[v].x,m[v].y),r.lineTo(x.x,x.y),r.strokeStyle=`rgba(0, 242, 254, ${c})`,r.lineWidth=1.2,r.stroke()}}m.forEach(v=>{r.beginPath(),r.arc(v.x,v.y,v.radius,0,Math.PI*2),r.fillStyle=v.color,r.shadowBlur=10,r.shadowColor=v.color,r.fill(),r.shadowBlur=0,v.x+=v.vx,v.y+=v.vy,(v.x<0||v.x>i)&&(v.vx*=-1),(v.y<0||v.y>a)&&(v.vy*=-1)}),l=requestAnimationFrame(h)};return h(),()=>{window.removeEventListener("resize",s),window.removeEventListener("mousemove",u),window.removeEventListener("mouseleave",d),cancelAnimationFrame(l)}},[]),o.jsx("canvas",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,opacity:.6}})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),P=(e,t)=>{const n=H.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:u,...d},g)=>H.createElement("svg",{ref:g,...dp,width:l,height:l,stroke:r,strokeWidth:a?Number(i)*24/Number(l):i,className:["lucide",`lucide-${fp(e)}`,s].join(" "),...d},[...t.map(([m,h])=>H.createElement(m,h)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=P("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=P("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=P("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=P("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=P("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=P("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=P("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=P("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=P("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=P("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=P("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=P("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=P("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=P("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=P("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=P("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=P("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=P("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=P("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=P("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=P("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=P("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=P("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=P("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=P("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=P("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=P("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=P("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=P("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=P("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=P("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=P("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=P("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=P("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=P("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=P("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=P("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=P("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=P("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),jr=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Experience",href:"#experience"},{name:"Projects",href:"#projects"},{name:"Certifications",href:"#certifications"},{name:"Education",href:"#education"},{name:"Contact",href:"#contact"}],bp=({onOpenResume:e})=>{const[t,n]=H.useState("home"),[r,l]=H.useState(!1),[i,a]=H.useState(0),[s,u]=H.useState(!1);H.useEffect(()=>{const g=()=>{l(window.scrollY>40);const v=document.documentElement.scrollTop,w=document.documentElement.scrollHeight-document.documentElement.clientHeight,T=v/w*100;a(T)};window.addEventListener("scroll",g);const m={root:null,rootMargin:"-20% 0px -55% 0px",threshold:0},h=v=>{v.forEach(w=>{w.isIntersecting&&n(w.target.id)})},x=new IntersectionObserver(h,m);return jr.forEach(v=>{const w=document.querySelector(v.href);w&&x.observe(w)}),()=>{window.removeEventListener("scroll",g),x.disconnect()}},[]);const d=(g,m)=>{g.preventDefault(),u(!1);const h=document.querySelector(m);h&&h.scrollIntoView({behavior:"smooth"})};return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"scroll-progress-bar",style:{width:`${i}%`}}),o.jsxs("header",{className:`navbar-header ${r?"scrolled":""}`,children:[o.jsxs("div",{className:"container navbar-container",children:[o.jsxs("a",{href:"#home",onClick:g=>d(g,"#home"),className:"logo-brand",children:[o.jsx("div",{className:"logo-icon",children:o.jsx(Qo,{size:22,className:"cpu-icon"})}),o.jsxs("div",{className:"logo-text",children:[o.jsx("span",{className:"logo-name",children:"GG"}),o.jsx("span",{className:"logo-dot",children:"."}),o.jsx("span",{className:"logo-subtitle",children:"Data & Full Stack"})]})]}),o.jsx("nav",{className:"desktop-nav",children:o.jsx("ul",{className:"nav-list",children:jr.map(g=>{const m=t===g.href.substring(1);return o.jsx("li",{children:o.jsxs("a",{href:g.href,onClick:h=>d(h,g.href),className:`nav-link ${m?"active":""}`,children:[g.name,m&&o.jsx("span",{className:"active-dot"})]})},g.name)})})}),o.jsxs("div",{className:"navbar-actions",children:[o.jsxs("button",{className:"resume-btn",onClick:e,children:[o.jsx(Yi,{size:15}),o.jsx("span",{children:"Resume"})]}),o.jsx("button",{className:"mobile-toggle",onClick:()=>u(!s),"aria-label":"Toggle Navigation",children:s?o.jsx(_c,{size:24}):o.jsx(Sp,{size:24})})]})]}),o.jsx("div",{className:`mobile-nav-drawer ${s?"open":""}`,children:o.jsxs("div",{className:"mobile-nav-content",children:[o.jsx("ul",{className:"mobile-nav-list",children:jr.map(g=>{const m=t===g.href.substring(1);return o.jsx("li",{children:o.jsx("a",{href:g.href,onClick:h=>d(h,g.href),className:`mobile-nav-link ${m?"active":""}`,children:g.name})},g.name)})}),o.jsx("div",{className:"mobile-drawer-footer",children:o.jsxs("button",{className:"btn-mobile-resume",onClick:()=>{u(!1),e()},children:[o.jsx(Yi,{size:16}),o.jsx("span",{children:"View Resume Text"})]})})]})})]}),o.jsx("div",{className:"side-nav-dock",children:jr.map(g=>{const m=t===g.href.substring(1);return o.jsx("a",{href:g.href,onClick:h=>d(h,g.href),className:`side-dot ${m?"active":""}`,title:g.name,children:o.jsx("span",{className:"dot-tooltip",children:g.name})},g.name)})}),o.jsx("style",{children:`
        .scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #00f2fe 0%, #6366f1 50%, #10b981 100%);
          z-index: 1000;
          transition: width 0.1s ease-out;
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.7);
        }

        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 900;
          padding: 1.2rem 0;
          transition: all var(--transition-normal);
          background: transparent;
        }

        .navbar-header.scrolled {
          padding: 0.8rem 0;
          background: rgba(8, 12, 20, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          transition: all var(--transition-normal);
        }

        .logo-brand:hover .logo-icon {
          background: rgba(0, 242, 254, 0.2);
          transform: rotate(6deg) scale(1.08);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.4);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: #fff;
          letter-spacing: -0.02em;
        }

        .logo-dot {
          color: var(--accent-cyan);
          display: inline;
        }

        .logo-subtitle {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: block;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          list-style: none;
        }

        .nav-link {
          position: relative;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          padding: 0.4rem 0;
          transition: color var(--transition-fast);
        }

        .nav-link:hover, .nav-link.active {
          color: var(--accent-cyan);
        }

        .active-dot {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.3);
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .resume-btn:hover {
          background: var(--accent-cyan);
          color: #080c14;
          box-shadow: 0 0 18px rgba(0, 242, 254, 0.45);
          transform: translateY(-2px);
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          color: var(--text-main);
          padding: 0.4rem;
        }

        .mobile-nav-drawer {
          display: none;
        }

        /* Floating Side Nav Dock */
        .side-nav-dock {
          position: fixed;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 850;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: rgba(8, 12, 20, 0.6);
          backdrop-filter: blur(10px);
          padding: 0.6rem 0.4rem;
          border-radius: 9999px;
          border: 1px solid var(--border-color);
        }

        .side-dot {
          position: relative;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transition: all var(--transition-fast);
        }

        .side-dot:hover, .side-dot.active {
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
          transform: scale(1.3);
        }

        .dot-tooltip {
          position: absolute;
          right: 22px;
          top: 50%;
          transform: translateY(-50%) translateX(5px);
          background: #080c14;
          color: #fff;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all var(--transition-fast);
        }

        .side-dot:hover .dot-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        @media (max-width: 992px) {
          .desktop-nav, .side-nav-dock {
            display: none;
          }

          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-nav-drawer {
            display: block;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(8, 12, 20, 0.96);
            backdrop-filter: blur(20px);
            z-index: 899;
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .mobile-nav-drawer.open {
            transform: translateX(0);
          }

          .mobile-nav-content {
            padding: 2rem 1.5rem;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
          }

          .mobile-nav-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }

          .mobile-nav-link {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-muted);
            display: block;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .mobile-nav-link.active, .mobile-nav-link:hover {
            color: var(--accent-cyan);
            padding-left: 0.5rem;
          }

          .btn-mobile-resume {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.85rem;
            border-radius: var(--radius-md);
            background: var(--gradient-brand);
            color: #080c14;
            font-weight: 700;
            font-size: 1rem;
          }
        }
      `})]})},oe={name:"Gaurav Gupta",title:"Data Analyst | Full Stack Developer | ML Enthusiast",shortBio:"Computer Science undergraduate with hands-on experience in data analysis, machine learning, and full-stack web development.",about:{paragraph1:"I am a Computer Science undergraduate at Allenhouse Group of Institutions with a primary focus on Data Analytics, Data Science, and Full Stack Web Development. I possess a strong foundation in Python and SQL, alongside hands-on experience performing exploratory data analysis (EDA), data preprocessing, visualization, and predictive modeling.",paragraph2:"Complementing my analytical background, I am skilled in MERN Stack development (MongoDB, Express.js, React.js, Node.js, REST APIs), enabling me to build both data-driven insights and full-stack web applications. Through my machine learning internships, I have applied Python and analytical workflows to search ranking datasets and supervised learning models.",focusAreas:["Data Analytics & Exploratory Data Analysis (EDA)","MERN Stack Web Development (React, Node, Express, MongoDB)","Predictive Modeling & Machine Learning Workflows","Database Systems (SQL, PostgreSQL, MongoDB)"]},contact:{email:"gauravgupta2506@gmail.com",location:"Kanpur, Uttar Pradesh, India",educationInstitution:"Allenhouse Group of Institutions"}},Ko=[{name:"LinkedIn",url:"https://www.linkedin.com/in/gaurav-gupta-b32a5330a/",handle:"gaurav-gupta-b32a5330a",iconName:"Linkedin"},{name:"GitHub",url:"https://github.com/guurav18",handle:"guurav18",iconName:"Github"},{name:"LeetCode",url:"https://leetcode.com/u/gaurav1881/",handle:"gaurav1881",iconName:"Code2"},{name:"Hugging Face",url:"https://huggingface.co/gauravgupta18",handle:"gauravgupta18",iconName:"Smile"}],ss={"Data Analytics & Data Science":["Python","SQL","Pandas","NumPy","Matplotlib","Seaborn","Exploratory Data Analysis (EDA)","Data Wrangling","Data Preprocessing","Data Visualization","Statistical Analysis","Feature Engineering","Predictive Modeling","Power BI","Tableau"],"MERN Stack Development":["HTML","CSS","JavaScript","Bootstrap","React.js","Node.js","Express.js","MongoDB","REST APIs"],Databases:["MySQL","PostgreSQL","MongoDB"],"Machine Learning & AI":["Scikit-learn","Supervised Learning","Unsupervised Learning","Classification","Regression","Clustering","NLP Fundamentals"],"Computer Vision":["OpenCV"],"Tools & Platforms":["Git","GitHub","Jupyter Notebook","Google Colab","Power BI","Tableau"]},Dc=[{id:"flyrank-ai",company:"FlyRank AI",role:"Machine Learning Intern",location:"Remote",period:"Jul 2026 – Present",status:"Present",badge:"Current Role",responsibilities:["Built and evaluated machine learning and search ranking pipelines using Python and Scikit-learn on real-world datasets.","Performed comprehensive data preprocessing, feature engineering, and exploratory data analysis (EDA) for search ranking tasks.","Implemented and compared Logistic Regression, Decision Tree, and Random Forest models to identify patterns and rank signals.","Contributed data analysis and predictive model evaluations to the Google Search Ranking & Discoverability Capstone."],tech:["Python","SQL","Scikit-learn","EDA","Feature Engineering","Data Preprocessing","Ranking Models"]},{id:"saiket-systems",company:"SaiKet Systems",role:"Machine Learning Intern",location:"Kanpur, India (Remote)",period:"Feb 2026 – Mar 2026",status:"Completed",badge:"ML & Data Internship",responsibilities:["Developed and optimized supervised machine learning models in Python using Scikit-learn.","Executed end-to-end data preprocessing including missing-value handling, feature scaling, and categorical encoding.","Conducted extensive Exploratory Data Analysis (EDA) and data visualization using Pandas, Matplotlib, and Seaborn.","Evaluated model performance using cross-validation, confusion matrices, precision-recall metrics, and ROC-AUC curves."],tech:["Python","Pandas","Matplotlib","Seaborn","EDA","Data Preprocessing","ROC-AUC"]}],Pp=[{id:"predictive-modeling-pipeline",title:"Predictive Modeling & Analytics Pipeline",category:"Data Analytics",technologies:["Python","SQL","Scikit-learn","Pandas","Matplotlib"],shortDesc:"End-to-end automated data pipeline for ingestion, automated data cleaning, feature engineering, and statistical cross-validation modeling.",highlights:["End-to-end ML & Data analytics pipeline for classification.","Raw CSV ingestion and automated data cleaning.","Feature engineering and statistical data preprocessing.","Logistic Regression and Random Forest model comparison.","Cross-validation performance comparison.","Automated exploratory analysis and trend extraction."],githubPlaceholder:"https://github.com/guurav18",featured:!0},{id:"trustshield-ai",title:"TrustShield AI – Explainable Multi-Modal Deepfake Detection System",category:"Machine Learning",technologies:["Python","NLP","Computer Vision","Deep Learning","OpenCV"],shortDesc:"AI-powered multi-modal deepfake detection framework analyzing manipulated text, images, and media with explainable AI workflows.",highlights:["AI-powered multi-modal deepfake detection system.","Analyzes manipulated text, images, and media content.","Uses NLP and computer vision techniques.","Explainable AI workflows.","Generates human-readable insights for misinformation and fraud detection."],githubPlaceholder:"https://github.com/guurav18",featured:!0},{id:"cricket-drs",title:"Cricket Decision Review System (LBW)",category:"Computer Vision",technologies:["Python","OpenCV","NumPy","Pandas"],shortDesc:"Computer vision-based DRS simulator replicating Leg Before Wicket (LBW) detection using trajectory tracking and impact point prediction algorithms.",highlights:["Computer vision-based DRS simulator.","Focused on LBW detection.","Implemented ball tracking and impact prediction concepts.","Used visual analysis techniques to simulate cricket decision-making workflows."],githubPlaceholder:"https://github.com/guurav18",featured:!0}],Mp=[{institution:"Allenhouse Group of Institutions",location:"Kanpur, Uttar Pradesh, India",degree:"Bachelor of Technology — Computer Science (B.Tech)",period:"Aug 2023 – Aug 2027",details:"Focusing on Data Analytics, MERN Web Development, Machine Learning, Data Structures & Algorithms, DBMS, Operating Systems, and Computer Networks."}],Lp=[{title:"Oracle Cloud Infrastructure 2025 — Certified Data Science Professional",issuer:"Oracle",year:"2025",type:"Professional Certification",icon:"Award"},{title:"Deloitte Australia — Data Analytics Job Simulation",issuer:"Deloitte Australia / Forage",year:"2025",type:"Job Simulation",icon:"BarChart3"},{title:"IBM / Coursera — Data Analysis with Python",issuer:"IBM / Coursera",year:"2025",type:"Course Certificate",icon:"FileCode"},{title:"Infosys Springboard — Deep Learning for Developers, Neural Networks, and AI",issuer:"Infosys Springboard",year:"2025",type:"Specialization",icon:"Brain"},{title:"Google / Coursera — Introduction to Generative AI",issuer:"Google / Coursera",year:"2025",type:"Course Certificate",icon:"Sparkles"},{title:"NIELIT — Course on Computer Concepts (CCC)",issuer:"NIELIT",year:"2024",type:"Government Certification",icon:"CheckCircle2"}],Zl=`
GAURAV GUPTA
Data Analyst | Full Stack Developer | ML Enthusiast
Kanpur, Uttar Pradesh, India | gauravgupta2506@gmail.com

SUMMARY
Computer Science undergraduate with hands-on experience in data analysis, machine learning, and full-stack web development. Strong foundation in Python, SQL, EDA, data visualization, MERN stack web development (MongoDB, Express, React, Node), and predictive modeling.

PROFILES
LinkedIn: https://www.linkedin.com/in/gaurav-gupta-b32a5330a/
GitHub: https://github.com/guurav18
LeetCode: https://leetcode.com/u/gaurav1881/
Hugging Face: https://huggingface.co/gauravgupta18

EDUCATION
Allenhouse Group of Institutions | Kanpur, UP, India
Bachelor of Technology — Computer Science (B.Tech)
Duration: Aug 2023 – Aug 2027

EXPERIENCE
FlyRank AI | Machine Learning Intern (Remote)
Jul 2026 – Present
• Built and evaluated machine learning and search ranking pipelines using Python and Scikit-learn on real-world datasets.
• Performed comprehensive data preprocessing, feature engineering, and exploratory data analysis (EDA) for search ranking tasks.
• Implemented and compared Logistic Regression, Decision Tree, and Random Forest models.
• Contributed data analysis and model evaluation to the Google Search Ranking & Discoverability Capstone.

SaiKet Systems | Machine Learning Intern (Kanpur, India - Remote)
Feb 2026 – Mar 2026
• Developed and optimized supervised machine learning models in Python using Scikit-learn.
• Performed data preprocessing including missing-value handling, feature scaling, and categorical encoding.
• Conducted EDA and data visualization using Pandas, Matplotlib, and Seaborn.
• Evaluated models using cross-validation, confusion matrices, precision-recall metrics, and ROC-AUC.

PROJECTS
Predictive Modeling & Analytics Pipeline
• End-to-end ML & Data analytics pipeline for classification.
• Raw CSV ingestion, feature engineering, automated data cleaning, and trend analysis.
• Logistic Regression and Random Forest model comparisons with cross-validation.
• Tech: Python, SQL, Scikit-learn, Pandas, Matplotlib

TrustShield AI – Explainable Multi-Modal Deepfake Detection System
• AI-powered multi-modal deepfake detection system.
• Analyzes manipulated text, images, and media content using NLP & Computer Vision.
• Explainable AI workflows generating human-readable insights for fraud detection.
• Tech: Python, NLP, Computer Vision, Deep Learning, OpenCV

Cricket Decision Review System (LBW)
• Computer vision-based DRS simulator focused on LBW detection.
• Ball tracking and impact prediction visual analysis workflows.
• Tech: Python, OpenCV, NumPy, Pandas

TECHNICAL SKILLS
• Data Analytics & Data Science: Python, SQL, Pandas, NumPy, Matplotlib, Seaborn, Exploratory Data Analysis (EDA), Data Wrangling, Data Preprocessing, Data Visualization, Statistical Analysis, Feature Engineering, Predictive Modeling, Power BI, Tableau
• MERN Stack Development: HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, MongoDB, REST APIs
• Databases: MySQL, PostgreSQL, MongoDB
• Machine Learning & AI: Scikit-learn, Supervised Learning, Unsupervised Learning, Classification, Regression, Clustering, NLP Fundamentals
• Computer Vision: OpenCV
• Tools & Platforms: Git, GitHub, Jupyter Notebook, Google Colab, Power BI, Tableau

CERTIFICATIONS
• Oracle Cloud Infrastructure 2025 — Certified Data Science Professional
• Deloitte Australia — Data Analytics Job Simulation
• IBM / Coursera — Data Analysis with Python
• Infosys Springboard — Deep Learning for Developers, Neural Networks, and AI
• Google / Coursera — Introduction to Generative AI
• NIELIT — Course on Computer Concepts (CCC)
`,_p=({size:e=18,className:t=""})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",className:`hf-icon-svg ${t}`,style:{display:"block"},children:o.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-7.9 6.2c.4-.4 1-.4 1.4 0 1.7 1.7 4.3 1.7 6 0 .4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-2.5 2.5-6.5 2.5-9 0-.4-.4-.4-1 0-1.4z"})}),Yo=({name:e,size:t=18,className:n=""})=>{switch(e.toLowerCase()){case"linkedin":return o.jsx(jp,{size:t,className:n});case"github":return o.jsx(Pc,{size:t,className:n});case"leetcode":return o.jsx(os,{size:t,className:n});case"hugging face":case"huggingface":return o.jsx(_p,{size:t,className:n});default:return o.jsx(os,{size:t,className:n})}},Dp=({onOpenResume:e})=>o.jsxs("section",{id:"home",className:"hero-section",children:[o.jsxs("div",{className:"container hero-container",children:[o.jsxs("div",{className:"hero-content",children:[o.jsxs("div",{className:"hero-badge animate-float",children:[o.jsx("span",{className:"badge-pulse"}),o.jsx(Lc,{size:14,className:"badge-icon"}),o.jsx("span",{children:"Currently ML Intern @ FlyRank AI"})]}),o.jsxs("h1",{className:"hero-title",children:["Hi, I'm ",o.jsx("span",{className:"gradient-text",children:oe.name})]}),o.jsx("h2",{className:"hero-headline",children:oe.title}),o.jsx("p",{className:"hero-description",children:oe.shortBio}),o.jsxs("div",{className:"hero-tags",children:[o.jsxs("span",{className:"hero-tag primary-tag",children:[o.jsx(_t,{size:14})," Data Analytics (Primary)"]}),o.jsxs("span",{className:"hero-tag mern-tag",children:[o.jsx(il,{size:14})," MERN Stack Development"]}),o.jsxs("span",{className:"hero-tag ml-tag",children:[o.jsx(Wo,{size:14})," Machine Learning"]})]}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs("a",{href:"#projects",className:"btn btn-primary",children:[o.jsx("span",{children:"View Projects"}),o.jsx(pp,{size:16})]}),o.jsx("a",{href:"#skills",className:"btn btn-secondary",children:o.jsx("span",{children:"Explore Skills"})}),o.jsxs("button",{onClick:e,className:"btn btn-outline",children:[o.jsx(Ec,{size:16}),o.jsx("span",{children:"Download Resume"})]})]}),o.jsxs("div",{className:"hero-socials",children:[o.jsx("span",{className:"socials-label",children:"Profiles:"}),o.jsx("div",{className:"social-buttons-row",children:Ko.map(t=>o.jsxs("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:t.name,"aria-label":`Visit Gaurav Gupta's ${t.name} Profile`,children:[o.jsx(Yo,{name:t.name,size:18}),o.jsx("span",{className:"sr-only",children:t.name}),o.jsx("span",{className:"tooltip",children:t.name})]},t.name))})]})]}),o.jsxs("div",{className:"hero-visual",children:[o.jsx("div",{className:"profile-photo-card glass-card",children:o.jsxs("div",{className:"profile-img-frame",children:[o.jsx("img",{src:"/gaurav-gupta.jpg",alt:"Gaurav Gupta - Data Analyst | Full Stack Developer | ML Enthusiast",className:"profile-img"}),o.jsx("div",{className:"img-glow-overlay"}),o.jsxs("div",{className:"profile-badge-overlay",children:[o.jsx("span",{className:"online-dot"}),o.jsx("span",{children:"Gaurav Gupta"})]})]})}),o.jsxs("div",{className:"visual-card glass-card",children:[o.jsxs("div",{className:"card-top-bar",children:[o.jsxs("div",{className:"window-dots",children:[o.jsx("span",{className:"dot dot-red"}),o.jsx("span",{className:"dot dot-yellow"}),o.jsx("span",{className:"dot dot-green"})]}),o.jsx("span",{className:"window-title",children:"data_profile.py"})]}),o.jsxs("div",{className:"code-block",children:[o.jsxs("div",{className:"code-line",children:[o.jsx("span",{className:"code-keyword",children:"class"})," ",o.jsx("span",{className:"code-class",children:"GauravGupta"}),":"]}),o.jsxs("div",{className:"code-line indent-1",children:[o.jsx("span",{className:"code-self",children:"self"}),".role ="," ",o.jsx("span",{className:"code-string",children:'"Data Analyst | Full Stack | ML"'})]}),o.jsxs("div",{className:"code-line indent-1",children:[o.jsx("span",{className:"code-self",children:"self"}),".primary_focus ="," ",o.jsx("span",{className:"code-string",children:'"Data Analytics & Insights"'})]}),o.jsxs("div",{className:"code-line indent-1",children:[o.jsx("span",{className:"code-self",children:"self"}),".core_stack = [",o.jsx("span",{className:"code-string",children:'"Python"'}),","," ",o.jsx("span",{className:"code-string",children:'"SQL"'}),","," ",o.jsx("span",{className:"code-string",children:'"MERN Stack"'}),","," ",o.jsx("span",{className:"code-string",children:'"EDA"'}),"]"]}),o.jsxs("div",{className:"code-line indent-1",children:[o.jsx("span",{className:"code-self",children:"self"}),".status ="," ",o.jsx("span",{className:"code-string",children:'"Intern @ FlyRank AI"'})]})]}),o.jsxs("div",{className:"stat-cards-grid",children:[o.jsxs("div",{className:"stat-card",children:[o.jsx(_t,{size:20,className:"stat-icon emerald"}),o.jsxs("div",{className:"stat-text",children:[o.jsx("span",{className:"stat-value",children:"Primary"}),o.jsx("span",{className:"stat-label",children:"Data Analytics"})]})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx(il,{size:20,className:"stat-icon cyan"}),o.jsxs("div",{className:"stat-text",children:[o.jsx("span",{className:"stat-value",children:"MERN"}),o.jsx("span",{className:"stat-label",children:"Web Dev"})]})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx(Qi,{size:20,className:"stat-icon purple"}),o.jsxs("div",{className:"stat-text",children:[o.jsx("span",{className:"stat-value",children:Dc.length}),o.jsx("span",{className:"stat-label",children:"Internships"})]})]})]})]})]})]}),o.jsx("style",{children:`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 7rem;
          padding-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.25);
          color: var(--accent-cyan);
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
        }

        .hero-title {
          font-size: 3.6rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }

        .hero-headline {
          font-size: 1.5rem;
          color: var(--accent-cyan);
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .hero-description {
          font-size: 1.15rem;
          color: #cbd5e1;
          line-height: 1.7;
          max-width: 620px;
          margin-bottom: 1.75rem;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2.25rem;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .primary-tag {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #34d399;
        }

        .mern-tag {
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.3);
          color: var(--accent-cyan);
        }

        .ml-tag {
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: #a5b4fc;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.6rem;
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          font-weight: 600;
          transition: all var(--transition-normal);
        }

        .btn-primary {
          background: var(--gradient-brand);
          color: #040810;
          box-shadow: 0 4px 20px rgba(0, 242, 254, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 242, 254, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(0, 242, 254, 0.3);
          transform: translateY(-3px);
        }

        .btn-outline {
          background: transparent;
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 242, 254, 0.3);
        }

        .btn-outline:hover {
          background: rgba(0, 242, 254, 0.1);
          border-color: var(--accent-cyan);
          transform: translateY(-3px);
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .socials-label {
          font-size: 0.85rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .social-buttons-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .social-btn {
          position: relative;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .social-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.1);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.2);
        }

        .tooltip {
          position: absolute;
          bottom: -32px;
          left: 50%;
          transform: translateX(-50%) translateY(5px);
          background: #080c14;
          color: #fff;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all var(--transition-fast);
          z-index: 10;
        }

        .social-btn:hover .tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* Hero Visual & Full Size Profile Photo Card */
        .hero-visual {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .profile-photo-card {
          padding: 0.75rem;
          background: rgba(13, 19, 34, 0.85);
          border: 1px solid rgba(0, 242, 254, 0.3);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
          border-radius: var(--radius-xl);
          overflow: hidden;
        }

        .profile-img-frame {
          position: relative;
          width: 100%;
          height: 480px; /* Full size portrait frame showing full face, tie, suit & shoulders! */
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #080c14;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 10%; /* Center top positioning ensures full suit & face display */
          transition: transform 0.5s ease;
        }

        .profile-photo-card:hover .profile-img {
          transform: scale(1.03);
        }

        .img-glow-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8, 12, 20, 0) 60%, rgba(8, 12, 20, 0.75) 100%);
          pointer-events: none;
        }

        .profile-badge-overlay {
          position: absolute;
          bottom: 1.2rem;
          left: 1.2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.95rem;
          border-radius: 9999px;
          background: rgba(8, 12, 20, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 242, 254, 0.4);
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .online-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .visual-card {
          padding: 1.5rem;
          background: #0d1322;
          border-color: rgba(0, 242, 254, 0.2);
        }

        .card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .window-dots {
          display: flex;
          gap: 0.4rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .window-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .code-block {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          line-height: 1.8;
          color: var(--text-muted);
          background: rgba(8, 12, 20, 0.8);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
          margin-bottom: 1.25rem;
        }

        .code-keyword { color: #f472b6; font-weight: 600; }
        .code-class { color: var(--accent-cyan); font-weight: 600; }
        .code-self { color: #60a5fa; }
        .code-string { color: #34d399; }

        .indent-1 { padding-left: 1.25rem; }

        .stat-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0.75rem 0.65rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stat-icon {
          flex-shrink: 0;
        }
        .stat-icon.cyan { color: var(--accent-cyan); }
        .stat-icon.purple { color: var(--accent-purple); }
        .stat-icon.emerald { color: var(--accent-emerald); }

        .stat-text {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 0.9rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
        }

        .stat-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          line-height: 1.2;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-title {
            font-size: 2.75rem;
          }

          .profile-img-frame {
            height: 420px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-headline {
            font-size: 1.2rem;
          }

          .profile-img-frame {
            height: 350px;
          }

          .stat-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),Rt=()=>{H.useEffect(()=>{const e={root:null,rootMargin:"0px 0px -80px 0px",threshold:.1},t=(l,i)=>{l.forEach(a=>{a.isIntersecting&&a.target.classList.add("is-visible")})},n=new IntersectionObserver(t,e);return document.querySelectorAll(".reveal-on-scroll").forEach(l=>n.observe(l)),()=>n.disconnect()},[])},Tp=[{name:"Data Structures & Algorithms",icon:Yi},{name:"Database Management Systems (DBMS)",icon:Cc},{name:"Operating Systems",icon:Qo},{name:"Computer Networks",icon:Np}],Rp=()=>(Rt(),o.jsxs("section",{id:"about",className:"section about-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header reveal-on-scroll",children:[o.jsxs("div",{className:"section-tag",children:[o.jsx(Ep,{size:14}),o.jsx("span",{children:"Profile Overview"})]}),o.jsxs("h2",{className:"section-title",children:["About ",o.jsx("span",{className:"gradient-text",children:"Gaurav Gupta"})]}),o.jsx("p",{className:"section-subtitle",children:"Computer Science undergraduate specializing in Data Analytics, Full Stack MERN Development, and Machine Learning."})]}),o.jsxs("div",{className:"about-grid",children:[o.jsxs("div",{className:"glass-card about-card-main reveal-on-scroll delay-1",children:[o.jsxs("h3",{className:"card-heading",children:[o.jsx(_t,{size:22,className:"icon-cyan"}),o.jsx("span",{children:"Analytical & Full-Stack Profile"})]}),o.jsx("p",{className:"about-text",children:oe.about.paragraph1}),o.jsx("p",{className:"about-text",children:oe.about.paragraph2}),o.jsxs("div",{className:"focus-areas-container",children:[o.jsx("h4",{className:"focus-title",children:"Core Capability Pillars:"}),o.jsx("ul",{className:"focus-list",children:oe.about.focusAreas.map((e,t)=>o.jsxs("li",{className:"focus-item",children:[o.jsx("span",{className:"focus-bullet"}),o.jsx("span",{children:e})]},t))})]})]}),o.jsxs("div",{className:"about-sidebar reveal-on-scroll delay-2",children:[o.jsxs("div",{className:"glass-card portrait-sidebar-card",children:[o.jsxs("div",{className:"portrait-wrap",children:[o.jsx("img",{src:"/gaurav-gupta.jpg",alt:"Gaurav Gupta Portrait",className:"about-portrait-img"}),o.jsx("div",{className:"portrait-glow"})]}),o.jsxs("div",{className:"portrait-info",children:[o.jsx("h4",{children:oe.name}),o.jsx("p",{children:"Data Analyst | Full Stack | ML"})]})]}),o.jsxs("div",{className:"glass-card sidebar-card",children:[o.jsxs("h4",{className:"sidebar-title",children:[o.jsx(Ki,{size:20,className:"icon-cyan"}),o.jsx("span",{children:"Education & Institution"})]}),o.jsxs("div",{className:"institution-info",children:[o.jsx("h5",{className:"inst-name",children:oe.contact.educationInstitution}),o.jsx("p",{className:"inst-degree",children:"Bachelor of Technology — Computer Science (B.Tech)"}),o.jsx("p",{className:"inst-period",children:"Aug 2023 – Aug 2027"})]})]}),o.jsxs("div",{className:"glass-card sidebar-card",children:[o.jsxs("h4",{className:"sidebar-title",children:[o.jsx(Qo,{size:20,className:"icon-cyan"}),o.jsx("span",{children:"Core CS Foundations"})]}),o.jsx("div",{className:"cs-subjects-grid",children:Tp.map((e,t)=>{const n=e.icon;return o.jsxs("div",{className:"cs-subject-pill",children:[o.jsx(n,{size:15,className:"pill-icon"}),o.jsx("span",{children:e.name})]},t)})})]})]})]})]}),o.jsx("style",{children:`
        .about-section {
          background: rgba(13, 19, 34, 0.4);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
        }

        .about-card-main {
          padding: 2.25rem;
        }

        .card-heading {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          color: #fff;
        }

        .icon-cyan {
          color: var(--accent-cyan);
        }

        .about-text {
          color: #cbd5e1;
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }

        .focus-areas-container {
          margin-top: 1.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .focus-title {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
        }

        .focus-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }

        .focus-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .focus-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .about-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .portrait-sidebar-card {
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          border-color: rgba(0, 242, 254, 0.25);
        }

        .portrait-wrap {
          position: relative;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--accent-cyan);
          flex-shrink: 0;
        }

        .about-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
        }

        .portrait-info h4 {
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 0.15rem;
        }

        .portrait-info p {
          font-size: 0.825rem;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .sidebar-card {
          padding: 1.75rem;
        }

        .sidebar-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
          color: #fff;
        }

        .institution-info .inst-name {
          font-size: 1.1rem;
          color: var(--accent-cyan);
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .institution-info .inst-degree {
          font-size: 0.95rem;
          color: #e2e8f0;
          margin-bottom: 0.35rem;
        }

        .institution-info .inst-period {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .cs-subjects-grid {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .cs-subject-pill {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }

        .cs-subject-pill:hover {
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(0, 242, 254, 0.05);
          transform: translateX(4px);
        }

        .pill-icon {
          color: var(--accent-cyan);
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .focus-list {
            grid-template-columns: 1fr;
          }
        }
      `})]})),Ip={"Data Analytics & Data Science":_t,"MERN Stack Development":il,Databases:Cc,"Machine Learning & AI":Wo,"Computer Vision":bc,"Tools & Platforms":zp},Ap={"Data Analytics & Data Science":"Primary Focus","MERN Stack Development":"Full Stack Group",Databases:"Data Storage","Machine Learning & AI":"AI Domain","Computer Vision":"Visual AI","Tools & Platforms":"Dev Suite"},Fp=()=>{Rt();const[e,t]=H.useState("All"),n=["All",...Object.keys(ss)];return o.jsxs("section",{id:"skills",className:"section skills-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header reveal-on-scroll",children:[o.jsxs("div",{className:"section-tag",children:[o.jsx(_t,{size:14}),o.jsx("span",{children:"Technical Capabilities"})]}),o.jsxs("h2",{className:"section-title",children:["Skills & ",o.jsx("span",{className:"gradient-text",children:"Competencies"})]}),o.jsx("p",{className:"section-subtitle",children:"Structured skill set prioritizing Data Analytics & EDA, dedicated MERN Web Development, and Machine Learning workflows."})]}),o.jsx("div",{className:"skills-filter-container reveal-on-scroll delay-1",children:n.map(r=>o.jsx("button",{onClick:()=>t(r),className:`filter-btn ${e===r?"active":""}`,children:r},r))}),o.jsx("div",{className:"skills-grid",children:Object.entries(ss).filter(([r])=>e==="All"||e===r).map(([r,l],i)=>{const a=Ip[r]||Sc,s=r==="Data Analytics & Data Science",u=r==="MERN Stack Development",d=Ap[r],g=`delay-${i%4+1}`;return o.jsxs("div",{className:`glass-card skill-card reveal-on-scroll ${g} ${s?"primary-card":""} ${u?"mern-card":""}`,children:[o.jsxs("div",{className:"skill-card-header",children:[o.jsx("div",{className:"skill-icon-wrap",children:o.jsx(a,{size:20,className:"icon-cyan"})}),o.jsxs("div",{children:[o.jsx("span",{className:"category-badge",children:d}),o.jsx("h3",{className:"category-title",children:r})]})]}),o.jsx("div",{className:"skill-pills-wrap",children:l.map(m=>o.jsxs("div",{className:`skill-pill ${s?"primary-pill":""} ${u?"mern-pill":""}`,children:[o.jsx(Gi,{size:13,className:"pill-check"}),o.jsx("span",{children:m})]},m))})]},r)})})]}),o.jsx("style",{children:`
        .skills-section {
          position: relative;
        }

        .skills-filter-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          padding: 0.5rem 1.1rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(0, 242, 254, 0.05);
        }

        .filter-btn.active {
          background: var(--gradient-brand);
          color: #040810;
          border-color: transparent;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.25);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .skill-card.primary-card {
          border-color: rgba(16, 185, 129, 0.4);
          background: linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(13, 19, 34, 0.7) 100%);
          grid-column: span 1;
        }

        .skill-card.mern-card {
          border-color: rgba(0, 242, 254, 0.4);
          background: linear-gradient(180deg, rgba(0, 242, 254, 0.08) 0%, rgba(13, 19, 34, 0.7) 100%);
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid var(--border-color);
        }

        .category-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.06);
          color: var(--accent-cyan);
          margin-bottom: 0.2rem;
        }

        .primary-card .category-badge {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
        }

        .skill-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .category-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
        }

        .skill-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: #e2e8f0;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .skill-pill:hover {
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(0, 242, 254, 0.08);
          color: #fff;
          transform: translateY(-2px);
        }

        .primary-pill {
          border-color: rgba(16, 185, 129, 0.25);
        }
        .primary-pill .pill-check {
          color: #34d399;
        }

        .mern-pill {
          border-color: rgba(0, 242, 254, 0.25);
        }
        .mern-pill .pill-check {
          color: var(--accent-cyan);
        }

        .pill-check {
          color: var(--accent-cyan);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Op=()=>(Rt(),o.jsxs("section",{id:"experience",className:"section experience-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header reveal-on-scroll",children:[o.jsxs("div",{className:"section-tag",children:[o.jsx(Qi,{size:14}),o.jsx("span",{children:"Work History"})]}),o.jsxs("h2",{className:"section-title",children:["Internship ",o.jsx("span",{className:"gradient-text",children:"Experience"})]}),o.jsx("p",{className:"section-subtitle",children:"Hands-on machine learning internships working on search ranking models, datasets, and predictive ML pipelines."})]}),o.jsxs("div",{className:"timeline-container",children:[o.jsx("div",{className:"timeline-line"}),Dc.map((e,t)=>o.jsxs("div",{className:`timeline-item reveal-on-scroll delay-${t+1}`,children:[o.jsx("div",{className:"timeline-dot-wrap",children:o.jsx("div",{className:`timeline-dot ${e.status==="Present"?"active":""}`,children:o.jsx(Qi,{size:14})})}),o.jsxs("div",{className:"glass-card experience-card",children:[o.jsxs("div",{className:"card-header-bar",children:[o.jsxs("div",{children:[o.jsx("div",{className:"badge-row",children:o.jsx("span",{className:`status-badge ${e.status==="Present"?"current":""}`,children:e.badge})}),o.jsx("h3",{className:"role-title",children:e.role}),o.jsx("h4",{className:"company-name",children:e.company})]}),o.jsxs("div",{className:"meta-info",children:[o.jsxs("span",{className:"meta-item",children:[o.jsx(wc,{size:14,className:"meta-icon"}),e.period]}),o.jsxs("span",{className:"meta-item",children:[o.jsx(Go,{size:14,className:"meta-icon"}),e.location]})]})]}),o.jsx("div",{className:"responsibilities-list",children:e.responsibilities.map((n,r)=>o.jsxs("div",{className:"resp-item",children:[o.jsx(yp,{size:16,className:"resp-bullet"}),o.jsx("span",{children:n})]},r))}),o.jsxs("div",{className:"tech-stack-row",children:[o.jsx("span",{className:"tech-label",children:"Key Tech:"}),o.jsx("div",{className:"tech-tags",children:e.tech.map(n=>o.jsx("span",{className:"tech-tag",children:n},n))})]})]})]},e.id))]})]}),o.jsx("style",{children:`
        .experience-section {
          background: rgba(13, 19, 34, 0.4);
        }

        .timeline-container {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 20px;
          top: 30px;
          bottom: 30px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-cyan) 0%, rgba(99, 102, 241, 0.3) 100%);
        }

        .timeline-item {
          position: relative;
          padding-left: 3.5rem;
          margin-bottom: 2.5rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot-wrap {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 2;
        }

        .timeline-dot {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #0d1322;
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all var(--transition-normal);
        }

        .timeline-dot.active {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.4);
          background: rgba(0, 242, 254, 0.1);
        }

        .experience-card {
          padding: 2rem;
        }

        .card-header-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 1.25rem;
        }

        .badge-row {
          margin-bottom: 0.4rem;
        }

        .status-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
        }

        .status-badge.current {
          background: rgba(0, 242, 254, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 242, 254, 0.3);
        }

        .role-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.2rem;
        }

        .company-name {
          font-size: 1.1rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .meta-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.35rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .meta-icon {
          color: var(--accent-cyan);
        }

        .responsibilities-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .resp-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          color: #cbd5e1;
          font-size: 0.975rem;
          line-height: 1.6;
        }

        .resp-bullet {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .tech-stack-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .tech-label {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          font-size: 0.8rem;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 15px;
          }

          .timeline-dot {
            width: 32px;
            height: 32px;
          }

          .timeline-item {
            padding-left: 2.5rem;
          }

          .card-header-bar {
            flex-direction: column;
            align-items: flex-start;
          }

          .meta-info {
            align-items: flex-start;
          }
        }
      `})]})),Bp={"predictive-modeling-pipeline":_t,"trustshield-ai":Mc,"cricket-drs":bc},Up={"predictive-modeling-pipeline":"linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(0, 242, 254, 0.05) 100%)","trustshield-ai":"linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(99, 102, 241, 0.05) 100%)","cricket-drs":"linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)"},$p=["All","Data Analytics","Machine Learning","Computer Vision"],Vp=()=>{Rt();const[e,t]=H.useState("All"),n=Pp.filter(r=>e==="All"||r.category===e);return o.jsxs("section",{id:"projects",className:"section projects-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header reveal-on-scroll",children:[o.jsxs("div",{className:"section-tag",children:[o.jsx(wp,{size:14}),o.jsx("span",{children:"Featured Portfolio"})]}),o.jsxs("h2",{className:"section-title",children:["Data Analytics & ",o.jsx("span",{className:"gradient-text",children:"Technical Projects"})]}),o.jsx("p",{className:"section-subtitle",children:"Featured projects showcasing end-to-end data analytics, machine learning pipelines, and computer vision simulations."})]}),o.jsx("div",{className:"projects-filter-container reveal-on-scroll delay-1",children:$p.map(r=>o.jsx("button",{onClick:()=>t(r),className:`filter-btn ${e===r?"active":""}`,children:r},r))}),o.jsx("div",{className:"projects-grid",children:n.map((r,l)=>{const i=Bp[r.id]||Sc,a=Up[r.id],s=r.category==="Data Analytics";return o.jsxs("div",{className:`glass-card project-card reveal-on-scroll delay-${l+1} ${s?"featured-analytics-card":""}`,children:[o.jsxs("div",{className:"project-banner",style:{background:a},children:[o.jsxs("div",{className:"category-pill-wrap",children:[o.jsx("span",{className:"category-pill",children:r.category}),s&&o.jsx("span",{className:"featured-badge",children:"Featured Data Project"})]}),o.jsx("div",{className:"project-icon-badge",children:o.jsx(i,{size:24,className:"icon-cyan"})})]}),o.jsxs("div",{className:"project-body",children:[o.jsx("h3",{className:"project-title",children:r.title}),o.jsx("p",{className:"project-desc",children:r.shortDesc}),o.jsxs("div",{className:"highlights-box",children:[o.jsx("h4",{className:"highlights-title",children:"Key Highlights:"}),o.jsx("ul",{className:"highlights-list",children:r.highlights.map((u,d)=>o.jsxs("li",{className:"highlight-item",children:[o.jsx(jc,{size:14,className:"highlight-check"}),o.jsx("span",{children:u})]},d))})]}),o.jsx("div",{className:"project-tech-list",children:r.technologies.map(u=>o.jsx("span",{className:"tech-badge",children:u},u))})]}),o.jsx("div",{className:"project-footer",children:o.jsxs("a",{href:r.githubPlaceholder,target:"_blank",rel:"noopener noreferrer",className:"btn-github-placeholder",title:"GitHub Repository Link",children:[o.jsx(Pc,{size:16}),o.jsx("span",{children:"View Repository"}),o.jsx(zc,{size:14})]})})]},r.id)})}),o.jsx("div",{className:"glass-card mern-capability-card reveal-on-scroll delay-4",children:o.jsxs("div",{className:"mern-card-content",children:[o.jsx("div",{className:"mern-icon-column",children:o.jsx(il,{size:32,className:"icon-cyan"})}),o.jsxs("div",{className:"mern-text-column",children:[o.jsx("span",{className:"mern-tag",children:"MERN Stack Architecture"}),o.jsx("h4",{children:"Full Stack Web Development Capabilities"}),o.jsxs("p",{children:["In addition to Data Analytics and ML pipelines, I construct full-stack web applications using ",o.jsx("strong",{children:"MongoDB, Express.js, React.js, and Node.js"})," with RESTful API integration and modular UI components."]})]})]})})]}),o.jsx("style",{children:`
        .projects-section {
          position: relative;
        }

        .projects-filter-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 0;
          height: 100%;
        }

        .project-card.featured-analytics-card {
          border-color: rgba(16, 185, 129, 0.4);
          box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.2);
        }

        .project-banner {
          height: 120px;
          position: relative;
          padding: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-color);
        }

        .category-pill-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          align-items: flex-start;
        }

        .category-pill {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          background: rgba(8, 12, 20, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
        }

        .featured-badge {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;
          font-family: var(--font-mono);
          border: 1px solid rgba(16, 185, 129, 0.4);
        }

        .project-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(8, 12, 20, 0.8);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-body {
          padding: 1.75rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .project-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .highlights-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .highlights-title {
          font-size: 0.85rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: #cbd5e1;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .highlight-check {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .tech-badge {
          font-size: 0.78rem;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          background: rgba(0, 242, 254, 0.06);
          border: 1px solid rgba(0, 242, 254, 0.2);
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .project-footer {
          padding: 1.25rem 1.75rem;
          border-top: 1px solid var(--border-color);
          background: rgba(8, 12, 20, 0.4);
        }

        .btn-github-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 100%;
          padding: 0.65rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .btn-github-placeholder:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(0, 242, 254, 0.3);
          color: var(--accent-cyan);
        }

        /* MERN Capability Card */
        .mern-capability-card {
          padding: 1.75rem 2rem;
          border-color: rgba(0, 242, 254, 0.25);
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.05) 0%, rgba(13, 19, 34, 0.8) 100%);
        }

        .mern-card-content {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .mern-icon-column {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mern-text-column .mern-tag {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.2rem;
        }

        .mern-text-column h4 {
          font-size: 1.15rem;
          color: #fff;
          margin-bottom: 0.35rem;
        }

        .mern-text-column p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .mern-card-content {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})},Hp={Award:Wi,Brain:Wo,BarChart3:hp,Sparkles:Lc,FileCode:xp,CheckCircle2:vp},Wp=()=>(Rt(),o.jsxs("section",{id:"certifications",className:"section certifications-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header reveal-on-scroll",children:[o.jsxs("div",{className:"section-tag",children:[o.jsx(Wi,{size:14}),o.jsx("span",{children:"Credentials"})]}),o.jsxs("h2",{className:"section-title",children:["Professional ",o.jsx("span",{className:"gradient-text",children:"Certifications"})]}),o.jsx("p",{className:"section-subtitle",children:"Industry and academic certifications in Data Science, Deep Learning, Generative AI, and Data Analytics."})]}),o.jsx("div",{className:"certifications-grid",children:Lp.map((e,t)=>{const n=Hp[e.icon]||Wi,r=`delay-${t%3+1}`;return o.jsxs("div",{className:`glass-card cert-card reveal-on-scroll ${r}`,children:[o.jsxs("div",{className:"cert-header",children:[o.jsx("div",{className:"cert-icon-container",children:o.jsx(n,{size:22,className:"cert-icon"})}),o.jsx("span",{className:"cert-badge",children:e.type})]}),o.jsxs("div",{className:"cert-content",children:[o.jsx("h3",{className:"cert-title",children:e.title}),o.jsxs("div",{className:"cert-meta",children:[o.jsx("span",{className:"cert-issuer",children:e.issuer}),o.jsx("span",{className:"cert-dot",children:"•"}),o.jsx("span",{className:"cert-year",children:e.year})]})]}),o.jsx("div",{className:"cert-footer",children:o.jsxs("div",{className:"verified-tag",children:[o.jsx(Mc,{size:14,className:"verified-icon"}),o.jsx("span",{children:"Verified Credential"})]})})]},t)})})]}),o.jsx("style",{children:`
        .certifications-section {
          background: rgba(13, 19, 34, 0.4);
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
        }

        .cert-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
        }

        .cert-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cert-icon-container {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        .cert-badge {
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .cert-content {
          flex: 1;
        }

        .cert-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }

        .cert-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .cert-issuer {
          color: var(--accent-cyan);
          font-weight: 500;
        }

        .cert-dot {
          color: var(--text-dim);
        }

        .cert-year {
          font-family: var(--font-mono);
        }

        .cert-footer {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .verified-tag {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--accent-emerald);
          font-weight: 500;
        }

        .verified-icon {
          color: var(--accent-emerald);
        }

        @media (max-width: 576px) {
          .certifications-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})),Qp=()=>(Rt(),o.jsxs("section",{id:"education",className:"section education-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header reveal-on-scroll",children:[o.jsxs("div",{className:"section-tag",children:[o.jsx(Ki,{size:14}),o.jsx("span",{children:"Academic Background"})]}),o.jsxs("h2",{className:"section-title",children:["Education & ",o.jsx("span",{className:"gradient-text",children:"Degree"})]}),o.jsx("p",{className:"section-subtitle",children:"Formal Computer Science engineering degree program with focus on core algorithms and intelligent systems."})]}),o.jsx("div",{className:"education-container",children:Mp.map((e,t)=>o.jsxs("div",{className:"glass-card education-card reveal-on-scroll delay-1",children:[o.jsx("div",{className:"edu-icon-column",children:o.jsx("div",{className:"edu-icon-badge",children:o.jsx(Ki,{size:28,className:"icon-cyan"})})}),o.jsxs("div",{className:"edu-main-content",children:[o.jsxs("div",{className:"edu-header-row",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"edu-degree",children:e.degree}),o.jsx("h4",{className:"edu-institution",children:e.institution})]}),o.jsxs("div",{className:"edu-period-badge",children:[o.jsx(wc,{size:14}),o.jsx("span",{children:e.period})]})]}),o.jsxs("div",{className:"edu-location-row",children:[o.jsx(Go,{size:15,className:"location-icon"}),o.jsx("span",{children:e.location})]}),o.jsx("p",{className:"edu-details",children:e.details}),o.jsxs("div",{className:"edu-highlights-box",children:[o.jsxs("h5",{className:"box-title",children:[o.jsx(gp,{size:15}),o.jsx("span",{children:"Key Coursework & Domains:"})]}),o.jsxs("div",{className:"coursework-tags",children:[o.jsx("span",{className:"course-tag",children:"Machine Learning"}),o.jsx("span",{className:"course-tag",children:"Data Science"}),o.jsx("span",{className:"course-tag",children:"Data Structures & Algorithms"}),o.jsx("span",{className:"course-tag",children:"DBMS"}),o.jsx("span",{className:"course-tag",children:"Operating Systems"}),o.jsx("span",{className:"course-tag",children:"Computer Networks"})]})]})]})]},t))})]}),o.jsx("style",{children:`
        .education-section {
          position: relative;
        }

        .education-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .education-card {
          padding: 2.25rem;
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .edu-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-lg);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.15);
        }

        .edu-main-content {
          flex: 1;
        }

        .edu-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .edu-degree {
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.25rem;
        }

        .edu-institution {
          font-size: 1.15rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .edu-period-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-family: var(--font-mono);
        }

        .edu-location-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-dim);
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
        }

        .location-icon {
          color: var(--accent-cyan);
        }

        .edu-details {
          color: #cbd5e1;
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .edu-highlights-box {
          background: rgba(8, 12, 20, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .box-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 0.85rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .coursework-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .course-tag {
          font-size: 0.85rem;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .education-card {
            flex-direction: column;
            gap: 1.25rem;
          }

          .edu-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})),Gp=()=>{Rt();const[e,t]=H.useState(!1),[n,r]=H.useState(!1),[l,i]=H.useState({name:"",email:"",subject:"",message:""}),a=()=>{navigator.clipboard.writeText(oe.contact.email),t(!0),setTimeout(()=>t(!1),2e3)},s=u=>{u.preventDefault(),r(!0),setTimeout(()=>{r(!1),i({name:"",email:"",subject:"",message:""})},4e3)};return o.jsxs("section",{id:"contact",className:"section contact-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header reveal-on-scroll",children:[o.jsxs("div",{className:"section-tag",children:[o.jsx(as,{size:14}),o.jsx("span",{children:"Get In Touch"})]}),o.jsxs("h2",{className:"section-title",children:["Let's ",o.jsx("span",{className:"gradient-text",children:"Connect"})]}),o.jsx("p",{className:"section-subtitle",children:"I'm open to Data Analyst opportunities, internships, and full-time roles where I can turn data into meaningful insights and build impactful solutions."})]}),o.jsxs("div",{className:"contact-grid",children:[o.jsxs("div",{className:"contact-info-col reveal-on-scroll delay-1",children:[o.jsxs("div",{className:"glass-card contact-card",children:[o.jsx("div",{className:"info-icon-wrap",children:o.jsx(as,{size:22,className:"icon-cyan"})}),o.jsxs("div",{className:"info-content",children:[o.jsx("span",{className:"info-label",children:"Direct Email"}),o.jsx("a",{href:`mailto:${oe.contact.email}`,className:"info-value",children:oe.contact.email})]}),o.jsx("button",{className:"copy-btn",onClick:a,title:"Copy Email",children:e?o.jsx(Gi,{size:16,color:"#10b981"}):o.jsx(Nc,{size:16})})]}),o.jsxs("div",{className:"glass-card contact-card",children:[o.jsx("div",{className:"info-icon-wrap",children:o.jsx(Go,{size:22,className:"icon-cyan"})}),o.jsxs("div",{className:"info-content",children:[o.jsx("span",{className:"info-label",children:"Location"}),o.jsx("span",{className:"info-value-text",children:oe.contact.location})]})]}),o.jsxs("div",{className:"glass-card socials-card",children:[o.jsx("h4",{className:"socials-card-title",children:"Professional Profiles"}),o.jsx("p",{className:"socials-card-subtitle",children:"Connect across development & research platforms:"}),o.jsx("div",{className:"socials-list",children:Ko.map(u=>o.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"social-item",title:`Visit Gaurav's ${u.name}`,"aria-label":`Visit Gaurav Gupta's ${u.name} Profile`,children:[o.jsx("div",{className:"social-icon-box",children:o.jsx(Yo,{name:u.name,size:18})}),o.jsxs("div",{className:"social-text",children:[o.jsx("span",{className:"social-name",children:u.name}),o.jsx("span",{className:"social-handle",children:u.handle})]}),o.jsx(zc,{size:14,className:"social-arrow"})]},u.name))})]})]}),o.jsxs("div",{className:"glass-card form-card reveal-on-scroll delay-2",children:[o.jsx("h3",{className:"form-title",children:"Send a Direct Message"}),n?o.jsxs("div",{className:"form-success-box",children:[o.jsx(Gi,{size:40,className:"success-icon"}),o.jsx("h4",{children:"Message Sent!"}),o.jsx("p",{children:"Thank you for reaching out. Gaurav will review your message and reply back shortly."})]}):o.jsxs("form",{onSubmit:s,className:"contact-form",children:[o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"name",children:"Your Name"}),o.jsx("input",{type:"text",id:"name",required:!0,placeholder:"e.g. Hiring Manager / Recruiter",value:l.name,onChange:u=>i({...l,name:u.target.value})})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"email",children:"Your Email"}),o.jsx("input",{type:"email",id:"email",required:!0,placeholder:"recruiter@company.com",value:l.email,onChange:u=>i({...l,email:u.target.value})})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"subject",children:"Subject"}),o.jsx("input",{type:"text",id:"subject",required:!0,placeholder:"Data Analyst Opportunity / Project Inquiry",value:l.subject,onChange:u=>i({...l,subject:u.target.value})})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"message",children:"Message"}),o.jsx("textarea",{id:"message",rows:"5",required:!0,placeholder:"Hi Gaurav, I saw your portfolio and would like to discuss a role...",value:l.message,onChange:u=>i({...l,message:u.target.value})})]}),o.jsxs("button",{type:"submit",className:"btn btn-primary submit-btn",children:[o.jsx(Cp,{size:16}),o.jsx("span",{children:"Send Message"})]})]})]})]})]}),o.jsx("style",{children:`
        .contact-section {
          background: rgba(13, 19, 34, 0.4);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 2rem;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          position: relative;
        }

        .info-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .info-label {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .info-value {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          word-break: break-all;
        }

        .info-value:hover {
          color: var(--accent-cyan);
        }

        .info-value-text {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }

        .copy-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .copy-btn:hover {
          background: rgba(0, 242, 254, 0.1);
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
        }

        .socials-card {
          padding: 1.75rem;
        }

        .socials-card-title {
          font-size: 1.15rem;
          color: #fff;
          margin-bottom: 0.2rem;
        }

        .socials-card-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }

        .socials-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }

        .social-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          transition: all var(--transition-fast);
        }

        .social-item:hover {
          background: rgba(0, 242, 254, 0.08);
          border-color: rgba(0, 242, 254, 0.35);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.15);
        }

        .social-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .social-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .social-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.2;
        }

        .social-handle {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .social-arrow {
          color: var(--text-dim);
          flex-shrink: 0;
        }

        /* Form Card */
        .form-card {
          padding: 2.25rem;
        }

        .form-title {
          font-size: 1.3rem;
          color: #fff;
          margin-bottom: 1.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .form-group input, .form-group textarea {
          background: rgba(8, 12, 20, 0.8);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: all var(--transition-fast);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 12px rgba(0, 242, 254, 0.2);
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .form-success-box {
          text-align: center;
          padding: 3rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon {
          color: var(--accent-emerald);
        }

        .form-success-box h4 {
          font-size: 1.4rem;
          color: #fff;
        }

        .form-success-box p {
          color: var(--text-muted);
          max-width: 400px;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .socials-list {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Kp=()=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsxs("footer",{className:"footer",children:[o.jsxs("div",{className:"container footer-container",children:[o.jsxs("div",{className:"footer-left",children:[o.jsxs("div",{className:"footer-logo",children:[o.jsx(_t,{size:20,className:"icon-cyan"}),o.jsx("span",{className:"logo-name",children:oe.name})]}),o.jsx("p",{className:"footer-tagline",children:"Data Analyst | Full Stack Developer | ML Enthusiast"})]}),o.jsx("div",{className:"footer-socials",children:Ko.map(t=>o.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"footer-social-btn",title:t.name,"aria-label":`Visit Gaurav Gupta's ${t.name} Profile`,children:o.jsx(Yo,{name:t.name,size:17})},t.name))}),o.jsx("div",{className:"footer-right",children:o.jsxs("button",{onClick:e,className:"scroll-top-btn",title:"Back to top","aria-label":"Back to top",children:[o.jsx("span",{children:"Back to top"}),o.jsx(mp,{size:16})]})})]}),o.jsx("div",{className:"container footer-bottom",children:o.jsxs("p",{className:"copyright",children:["© 2026 ",oe.name,". All rights reserved."]})}),o.jsx("style",{children:`
        .footer {
          background: #04070d;
          border-top: 1px solid var(--border-color);
          padding: 2.5rem 0 1.5rem 0;
          position: relative;
          z-index: 1;
        }

        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: #fff;
        }

        .footer-tagline {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .footer-social-btn:hover {
          background: rgba(0, 242, 254, 0.1);
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
          transform: translateY(-2px);
        }

        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .scroll-top-btn:hover {
          background: rgba(0, 242, 254, 0.08);
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
          transform: translateY(-2px);
        }

        .footer-bottom {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          text-align: center;
        }

        .copyright {
          font-size: 0.85rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }

          .footer-left {
            align-items: center;
          }
        }
      `})]})},Yp=({isOpen:e,onClose:t})=>{const[n,r]=H.useState(!1);if(!e)return null;const l=()=>{navigator.clipboard.writeText(Zl.trim()),r(!0),setTimeout(()=>r(!1),2e3)},i=()=>{const a=document.createElement("a"),s=new Blob([Zl.trim()],{type:"text/plain;charset=utf-8"});a.href=URL.createObjectURL(s),a.download=`${oe.name.replace(/\s+/g,"_")}_Resume.txt`,document.body.appendChild(a),a.click(),document.body.removeChild(a)};return o.jsxs("div",{className:"modal-overlay",onClick:t,children:[o.jsxs("div",{className:"modal-content glass-card",onClick:a=>a.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsxs("div",{className:"modal-title",children:[o.jsx(kp,{className:"icon",size:20}),o.jsxs("h3",{children:["Resume Preview — ",oe.name]})]}),o.jsx("button",{className:"close-btn",onClick:t,"aria-label":"Close modal",children:o.jsx(_c,{size:20})})]}),o.jsx("div",{className:"modal-body",children:o.jsx("pre",{className:"resume-text",children:Zl.trim()})}),o.jsxs("div",{className:"modal-footer",children:[o.jsxs("button",{className:"btn btn-secondary",onClick:l,children:[n?o.jsx(jc,{size:16,color:"#10b981"}):o.jsx(Nc,{size:16}),o.jsx("span",{children:n?"Copied to Clipboard":"Copy Text"})]}),o.jsxs("button",{className:"btn btn-primary",onClick:i,children:[o.jsx(Ec,{size:16}),o.jsx("span",{children:"Download Resume (.txt)"})]})]})]}),o.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 7, 13, 0.85);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-content {
          width: 100%;
          max-width: 800px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          background: #0d1322;
          border: 1px solid rgba(0, 242, 254, 0.25);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          overflow: hidden;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--accent-cyan);
        }

        .modal-title h3 {
          font-size: 1.15rem;
          font-weight: 600;
        }

        .close-btn {
          background: transparent;
          color: var(--text-muted);
          padding: 0.4rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .close-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }

        .modal-body {
          flex: 1;
          padding: 1.5rem;
          overflow-y: auto;
          background: rgba(8, 12, 20, 0.6);
        }

        .resume-text {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: #e2e8f0;
          line-height: 1.6;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          border-top: 1px solid var(--border-color);
          background: #090e1a;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .btn-primary {
          background: var(--gradient-brand);
          color: #040810;
        }

        .btn-primary:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-main);
          border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(0, 242, 254, 0.3);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `})]})};function Xp(){const[e,t]=H.useState(!1),n=()=>t(!0),r=()=>t(!1);return o.jsxs("div",{className:"app-wrapper",children:[o.jsx(cp,{}),o.jsx(bp,{onOpenResume:n}),o.jsxs("main",{children:[o.jsx(Dp,{onOpenResume:n}),o.jsx(Rp,{}),o.jsx(Fp,{}),o.jsx(Op,{}),o.jsx(Vp,{}),o.jsx(Wp,{}),o.jsx(Qp,{}),o.jsx(Gp,{})]}),o.jsx(Kp,{}),o.jsx(Yp,{isOpen:e,onClose:r})]})}ql.createRoot(document.getElementById("root")).render(o.jsx(Zc.StrictMode,{children:o.jsx(Xp,{})}));
