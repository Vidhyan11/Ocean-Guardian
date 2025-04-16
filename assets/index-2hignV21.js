function eC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function tC(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yb={exports:{}},Lf={},xb={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ec=Symbol.for("react.element"),nC=Symbol.for("react.portal"),rC=Symbol.for("react.fragment"),iC=Symbol.for("react.strict_mode"),sC=Symbol.for("react.profiler"),oC=Symbol.for("react.provider"),aC=Symbol.for("react.context"),lC=Symbol.for("react.forward_ref"),uC=Symbol.for("react.suspense"),cC=Symbol.for("react.memo"),dC=Symbol.for("react.lazy"),mv=Symbol.iterator;function fC(e){return e===null||typeof e!="object"?null:(e=mv&&e[mv]||e["@@iterator"],typeof e=="function"?e:null)}var wb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bb=Object.assign,_b={};function Oa(e,t,n){this.props=e,this.context=t,this.refs=_b,this.updater=n||wb}Oa.prototype.isReactComponent={};Oa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Oa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sb(){}Sb.prototype=Oa.prototype;function Y0(e,t,n){this.props=e,this.context=t,this.refs=_b,this.updater=n||wb}var G0=Y0.prototype=new Sb;G0.constructor=Y0;bb(G0,Oa.prototype);G0.isPureReactComponent=!0;var gv=Array.isArray,kb=Object.prototype.hasOwnProperty,X0={current:null},Cb={key:!0,ref:!0,__self:!0,__source:!0};function Tb(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)kb.call(t,r)&&!Cb.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ec,type:e,key:s,ref:o,props:i,_owner:X0.current}}function hC(e,t){return{$$typeof:ec,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function K0(e){return typeof e=="object"&&e!==null&&e.$$typeof===ec}function pC(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vv=/\/+/g;function Ch(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pC(""+e.key):t.toString(36)}function od(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ec:case nC:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ch(o,0):r,gv(i)?(n="",e!=null&&(n=e.replace(vv,"$&/")+"/"),od(i,t,n,"",function(u){return u})):i!=null&&(K0(i)&&(i=hC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vv,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",gv(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Ch(s,a);o+=od(s,t,n,l,i)}else if(l=fC(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Ch(s,a++),o+=od(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function xc(e,t,n){if(e==null)return e;var r=[],i=0;return od(e,r,"","",function(s){return t.call(n,s,i++)}),r}function mC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var sn={current:null},ad={transition:null},gC={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:ad,ReactCurrentOwner:X0};function Pb(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:xc,forEach:function(e,t,n){xc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xc(e,function(){t++}),t},toArray:function(e){return xc(e,function(t){return t})||[]},only:function(e){if(!K0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=Oa;oe.Fragment=rC;oe.Profiler=sC;oe.PureComponent=Y0;oe.StrictMode=iC;oe.Suspense=uC;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gC;oe.act=Pb;oe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bb({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=X0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)kb.call(t,l)&&!Cb.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ec,type:e.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(e){return e={$$typeof:aC,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:oC,_context:e},e.Consumer=e};oe.createElement=Tb;oe.createFactory=function(e){var t=Tb.bind(null,e);return t.type=e,t};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:lC,render:e}};oe.isValidElement=K0;oe.lazy=function(e){return{$$typeof:dC,_payload:{_status:-1,_result:e},_init:mC}};oe.memo=function(e,t){return{$$typeof:cC,type:e,compare:t===void 0?null:t}};oe.startTransition=function(e){var t=ad.transition;ad.transition={};try{e()}finally{ad.transition=t}};oe.unstable_act=Pb;oe.useCallback=function(e,t){return sn.current.useCallback(e,t)};oe.useContext=function(e){return sn.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return sn.current.useDeferredValue(e)};oe.useEffect=function(e,t){return sn.current.useEffect(e,t)};oe.useId=function(){return sn.current.useId()};oe.useImperativeHandle=function(e,t,n){return sn.current.useImperativeHandle(e,t,n)};oe.useInsertionEffect=function(e,t){return sn.current.useInsertionEffect(e,t)};oe.useLayoutEffect=function(e,t){return sn.current.useLayoutEffect(e,t)};oe.useMemo=function(e,t){return sn.current.useMemo(e,t)};oe.useReducer=function(e,t,n){return sn.current.useReducer(e,t,n)};oe.useRef=function(e){return sn.current.useRef(e)};oe.useState=function(e){return sn.current.useState(e)};oe.useSyncExternalStore=function(e,t,n){return sn.current.useSyncExternalStore(e,t,n)};oe.useTransition=function(){return sn.current.useTransition()};oe.version="18.3.1";xb.exports=oe;var C=xb.exports;const Ut=tC(C),vC=eC({__proto__:null,default:Ut},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yC=C,xC=Symbol.for("react.element"),wC=Symbol.for("react.fragment"),bC=Object.prototype.hasOwnProperty,_C=yC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SC={key:!0,ref:!0,__self:!0,__source:!0};function jb(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)bC.call(t,r)&&!SC.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xC,type:e,key:s,ref:o,props:i,_owner:_C.current}}Lf.Fragment=wC;Lf.jsx=jb;Lf.jsxs=jb;yb.exports=Lf;var d=yb.exports,Eb={exports:{}},Fn={},Rb={exports:{}},Mb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,I){var P=D.length;D.push(I);e:for(;0<P;){var W=P-1>>>1,Q=D[W];if(0<i(Q,I))D[W]=I,D[P]=Q,P=W;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var I=D[0],P=D.pop();if(P!==I){D[0]=P;e:for(var W=0,Q=D.length,at=Q>>>1;W<at;){var de=2*(W+1)-1,be=D[de],ve=de+1,me=D[ve];if(0>i(be,P))ve<Q&&0>i(me,be)?(D[W]=me,D[ve]=P,W=ve):(D[W]=be,D[de]=P,W=de);else if(ve<Q&&0>i(me,P))D[W]=me,D[ve]=P,W=ve;else break e}}return I}function i(D,I){var P=D.sortIndex-I.sortIndex;return P!==0?P:D.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,y=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=D)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function _(D){if(g=!1,x(D),!y)if(n(l)!==null)y=!0,K(S);else{var I=n(u);I!==null&&F(_,I.startTime-D)}}function S(D,I){y=!1,g&&(g=!1,m(T),T=-1),p=!0;var P=h;try{for(x(I),f=n(l);f!==null&&(!(f.expirationTime>I)||D&&!E());){var W=f.callback;if(typeof W=="function"){f.callback=null,h=f.priorityLevel;var Q=W(f.expirationTime<=I);I=e.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(l)&&r(l),x(I)}else r(l);f=n(l)}if(f!==null)var at=!0;else{var de=n(u);de!==null&&F(_,de.startTime-I),at=!1}return at}finally{f=null,h=P,p=!1}}var k=!1,b=null,T=-1,j=5,R=-1;function E(){return!(e.unstable_now()-R<j)}function N(){if(b!==null){var D=e.unstable_now();R=D;var I=!0;try{I=b(!0,D)}finally{I?$():(k=!1,b=null)}}else k=!1}var $;if(typeof v=="function")$=function(){v(N)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,X=B.port2;B.port1.onmessage=N,$=function(){X.postMessage(null)}}else $=function(){w(N,0)};function K(D){b=D,k||(k=!0,$())}function F(D,I){T=w(function(){D(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){y||p||(y=!0,K(S))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(D){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var P=h;h=I;try{return D()}finally{h=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,I){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var P=h;h=D;try{return I()}finally{h=P}},e.unstable_scheduleCallback=function(D,I,P){var W=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?W+P:W):P=W,D){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=P+Q,D={id:c++,callback:I,priorityLevel:D,startTime:P,expirationTime:Q,sortIndex:-1},P>W?(D.sortIndex=P,t(u,D),n(l)===null&&D===n(u)&&(g?(m(T),T=-1):g=!0,F(_,P-W))):(D.sortIndex=Q,t(l,D),y||p||(y=!0,K(S))),D},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(D){var I=h;return function(){var P=h;h=I;try{return D.apply(this,arguments)}finally{h=P}}}})(Mb);Rb.exports=Mb;var kC=Rb.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CC=C,In=kC;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ab=new Set,ou={};function co(e,t){pa(e,t),pa(e+"Capture",t)}function pa(e,t){for(ou[e]=t,e=0;e<t.length;e++)Ab.add(t[e])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hp=Object.prototype.hasOwnProperty,TC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yv={},xv={};function PC(e){return Hp.call(xv,e)?!0:Hp.call(yv,e)?!1:TC.test(e)?xv[e]=!0:(yv[e]=!0,!1)}function jC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function EC(e,t,n,r){if(t===null||typeof t>"u"||jC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function on(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Rt[e]=new on(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Rt[t]=new on(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Rt[e]=new on(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Rt[e]=new on(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Rt[e]=new on(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Rt[e]=new on(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Rt[e]=new on(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Rt[e]=new on(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Rt[e]=new on(e,5,!1,e.toLowerCase(),null,!1,!1)});var q0=/[\-:]([a-z])/g;function Q0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(q0,Q0);Rt[t]=new on(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(q0,Q0);Rt[t]=new on(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(q0,Q0);Rt[t]=new on(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Rt[e]=new on(e,1,!1,e.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Rt[e]=new on(e,1,!1,e.toLowerCase(),null,!0,!0)});function Z0(e,t,n,r){var i=Rt.hasOwnProperty(t)?Rt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(EC(t,n,i,r)&&(n=null),r||i===null?PC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wi=CC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wc=Symbol.for("react.element"),Do=Symbol.for("react.portal"),No=Symbol.for("react.fragment"),J0=Symbol.for("react.strict_mode"),Yp=Symbol.for("react.profiler"),Db=Symbol.for("react.provider"),Nb=Symbol.for("react.context"),eg=Symbol.for("react.forward_ref"),Gp=Symbol.for("react.suspense"),Xp=Symbol.for("react.suspense_list"),tg=Symbol.for("react.memo"),Ai=Symbol.for("react.lazy"),Ob=Symbol.for("react.offscreen"),wv=Symbol.iterator;function Za(e){return e===null||typeof e!="object"?null:(e=wv&&e[wv]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Object.assign,Th;function ml(e){if(Th===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Th=t&&t[1]||""}return`
`+Th+e}var Ph=!1;function jh(e,t){if(!e||Ph)return"";Ph=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ph=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ml(e):""}function RC(e){switch(e.tag){case 5:return ml(e.type);case 16:return ml("Lazy");case 13:return ml("Suspense");case 19:return ml("SuspenseList");case 0:case 2:case 15:return e=jh(e.type,!1),e;case 11:return e=jh(e.type.render,!1),e;case 1:return e=jh(e.type,!0),e;default:return""}}function Kp(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case No:return"Fragment";case Do:return"Portal";case Yp:return"Profiler";case J0:return"StrictMode";case Gp:return"Suspense";case Xp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nb:return(e.displayName||"Context")+".Consumer";case Db:return(e._context.displayName||"Context")+".Provider";case eg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tg:return t=e.displayName||null,t!==null?t:Kp(e.type)||"Memo";case Ai:t=e._payload,e=e._init;try{return Kp(e(t))}catch{}}return null}function MC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kp(t);case 8:return t===J0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ss(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function AC(e){var t=zb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bc(e){e._valueTracker||(e._valueTracker=AC(e))}function Ib(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zb(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qp(e,t){var n=t.checked;return Fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ss(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lb(e,t){t=t.checked,t!=null&&Z0(e,"checked",t,!1)}function Qp(e,t){Lb(e,t);var n=ss(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zp(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zp(e,t.type,ss(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _v(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zp(e,t,n){(t!=="number"||Fd(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gl=Array.isArray;function ea(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ss(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return Fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(gl(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ss(n)}}function Fb(e,t){var n=ss(t.value),r=ss(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function kv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $b(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function em(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$b(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _c,Vb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_c=_c||document.createElement("div"),_c.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_c.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function au(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DC=["Webkit","ms","Moz","O"];Object.keys(Rl).forEach(function(e){DC.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rl[t]=Rl[e]})});function Bb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rl.hasOwnProperty(e)&&Rl[e]?(""+t).trim():t+"px"}function Ub(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var NC=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tm(e,t){if(t){if(NC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function nm(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rm=null;function ng(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var im=null,ta=null,na=null;function Cv(e){if(e=rc(e)){if(typeof im!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Uf(t),im(e.stateNode,e.type,t))}}function Wb(e){ta?na?na.push(e):na=[e]:ta=e}function Hb(){if(ta){var e=ta,t=na;if(na=ta=null,Cv(e),t)for(e=0;e<t.length;e++)Cv(t[e])}}function Yb(e,t){return e(t)}function Gb(){}var Eh=!1;function Xb(e,t,n){if(Eh)return e(t,n);Eh=!0;try{return Yb(e,t,n)}finally{Eh=!1,(ta!==null||na!==null)&&(Gb(),Hb())}}function lu(e,t){var n=e.stateNode;if(n===null)return null;var r=Uf(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var sm=!1;if(hi)try{var Ja={};Object.defineProperty(Ja,"passive",{get:function(){sm=!0}}),window.addEventListener("test",Ja,Ja),window.removeEventListener("test",Ja,Ja)}catch{sm=!1}function OC(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ml=!1,$d=null,Vd=!1,om=null,zC={onError:function(e){Ml=!0,$d=e}};function IC(e,t,n,r,i,s,o,a,l){Ml=!1,$d=null,OC.apply(zC,arguments)}function LC(e,t,n,r,i,s,o,a,l){if(IC.apply(this,arguments),Ml){if(Ml){var u=$d;Ml=!1,$d=null}else throw Error(O(198));Vd||(Vd=!0,om=u)}}function fo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tv(e){if(fo(e)!==e)throw Error(O(188))}function FC(e){var t=e.alternate;if(!t){if(t=fo(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Tv(i),e;if(s===r)return Tv(i),t;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function qb(e){return e=FC(e),e!==null?Qb(e):null}function Qb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qb(e);if(t!==null)return t;e=e.sibling}return null}var Zb=In.unstable_scheduleCallback,Pv=In.unstable_cancelCallback,$C=In.unstable_shouldYield,VC=In.unstable_requestPaint,qe=In.unstable_now,BC=In.unstable_getCurrentPriorityLevel,rg=In.unstable_ImmediatePriority,Jb=In.unstable_UserBlockingPriority,Bd=In.unstable_NormalPriority,UC=In.unstable_LowPriority,e_=In.unstable_IdlePriority,Ff=null,Vr=null;function WC(e){if(Vr&&typeof Vr.onCommitFiberRoot=="function")try{Vr.onCommitFiberRoot(Ff,e,void 0,(e.current.flags&128)===128)}catch{}}var br=Math.clz32?Math.clz32:GC,HC=Math.log,YC=Math.LN2;function GC(e){return e>>>=0,e===0?32:31-(HC(e)/YC|0)|0}var Sc=64,kc=4194304;function vl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ud(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=vl(a):(s&=o,s!==0&&(r=vl(s)))}else o=n&~i,o!==0?r=vl(o):s!==0&&(r=vl(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-br(t),i=1<<n,r|=e[n],t&=~i;return r}function XC(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KC(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-br(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=XC(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function am(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function t_(){var e=Sc;return Sc<<=1,!(Sc&4194240)&&(Sc=64),e}function Rh(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-br(t),e[t]=n}function qC(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-br(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ig(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-br(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function n_(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var r_,sg,i_,s_,o_,lm=!1,Cc=[],Yi=null,Gi=null,Xi=null,uu=new Map,cu=new Map,Ni=[],QC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jv(e,t){switch(e){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":uu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cu.delete(t.pointerId)}}function el(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=rc(t),t!==null&&sg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ZC(e,t,n,r,i){switch(t){case"focusin":return Yi=el(Yi,e,t,n,r,i),!0;case"dragenter":return Gi=el(Gi,e,t,n,r,i),!0;case"mouseover":return Xi=el(Xi,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return uu.set(s,el(uu.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,cu.set(s,el(cu.get(s)||null,e,t,n,r,i)),!0}return!1}function a_(e){var t=Ds(e.target);if(t!==null){var n=fo(t);if(n!==null){if(t=n.tag,t===13){if(t=Kb(n),t!==null){e.blockedOn=t,o_(e.priority,function(){i_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ld(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=um(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rm=r,n.target.dispatchEvent(r),rm=null}else return t=rc(n),t!==null&&sg(t),e.blockedOn=n,!1;t.shift()}return!0}function Ev(e,t,n){ld(e)&&n.delete(t)}function JC(){lm=!1,Yi!==null&&ld(Yi)&&(Yi=null),Gi!==null&&ld(Gi)&&(Gi=null),Xi!==null&&ld(Xi)&&(Xi=null),uu.forEach(Ev),cu.forEach(Ev)}function tl(e,t){e.blockedOn===t&&(e.blockedOn=null,lm||(lm=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,JC)))}function du(e){function t(i){return tl(i,e)}if(0<Cc.length){tl(Cc[0],e);for(var n=1;n<Cc.length;n++){var r=Cc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yi!==null&&tl(Yi,e),Gi!==null&&tl(Gi,e),Xi!==null&&tl(Xi,e),uu.forEach(t),cu.forEach(t),n=0;n<Ni.length;n++)r=Ni[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)a_(n),n.blockedOn===null&&Ni.shift()}var ra=wi.ReactCurrentBatchConfig,Wd=!0;function eT(e,t,n,r){var i=ye,s=ra.transition;ra.transition=null;try{ye=1,og(e,t,n,r)}finally{ye=i,ra.transition=s}}function tT(e,t,n,r){var i=ye,s=ra.transition;ra.transition=null;try{ye=4,og(e,t,n,r)}finally{ye=i,ra.transition=s}}function og(e,t,n,r){if(Wd){var i=um(e,t,n,r);if(i===null)$h(e,t,r,Hd,n),jv(e,r);else if(ZC(i,e,t,n,r))r.stopPropagation();else if(jv(e,r),t&4&&-1<QC.indexOf(e)){for(;i!==null;){var s=rc(i);if(s!==null&&r_(s),s=um(e,t,n,r),s===null&&$h(e,t,r,Hd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $h(e,t,r,null,n)}}var Hd=null;function um(e,t,n,r){if(Hd=null,e=ng(r),e=Ds(e),e!==null)if(t=fo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hd=e,null}function l_(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BC()){case rg:return 1;case Jb:return 4;case Bd:case UC:return 16;case e_:return 536870912;default:return 16}default:return 16}}var zi=null,ag=null,ud=null;function u_(){if(ud)return ud;var e,t=ag,n=t.length,r,i="value"in zi?zi.value:zi.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ud=i.slice(e,1<r?1-r:void 0)}function cd(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tc(){return!0}function Rv(){return!1}function $n(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Tc:Rv,this.isPropagationStopped=Rv,this}return Fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tc)},persist:function(){},isPersistent:Tc}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lg=$n(za),nc=Fe({},za,{view:0,detail:0}),nT=$n(nc),Mh,Ah,nl,$f=Fe({},nc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ug,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nl&&(nl&&e.type==="mousemove"?(Mh=e.screenX-nl.screenX,Ah=e.screenY-nl.screenY):Ah=Mh=0,nl=e),Mh)},movementY:function(e){return"movementY"in e?e.movementY:Ah}}),Mv=$n($f),rT=Fe({},$f,{dataTransfer:0}),iT=$n(rT),sT=Fe({},nc,{relatedTarget:0}),Dh=$n(sT),oT=Fe({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),aT=$n(oT),lT=Fe({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uT=$n(lT),cT=Fe({},za,{data:0}),Av=$n(cT),dT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hT[e])?!!t[e]:!1}function ug(){return pT}var mT=Fe({},nc,{key:function(e){if(e.key){var t=dT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=cd(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ug,charCode:function(e){return e.type==="keypress"?cd(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cd(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gT=$n(mT),vT=Fe({},$f,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dv=$n(vT),yT=Fe({},nc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ug}),xT=$n(yT),wT=Fe({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),bT=$n(wT),_T=Fe({},$f,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ST=$n(_T),kT=[9,13,27,32],cg=hi&&"CompositionEvent"in window,Al=null;hi&&"documentMode"in document&&(Al=document.documentMode);var CT=hi&&"TextEvent"in window&&!Al,c_=hi&&(!cg||Al&&8<Al&&11>=Al),Nv=" ",Ov=!1;function d_(e,t){switch(e){case"keyup":return kT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oo=!1;function TT(e,t){switch(e){case"compositionend":return f_(t);case"keypress":return t.which!==32?null:(Ov=!0,Nv);case"textInput":return e=t.data,e===Nv&&Ov?null:e;default:return null}}function PT(e,t){if(Oo)return e==="compositionend"||!cg&&d_(e,t)?(e=u_(),ud=ag=zi=null,Oo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return c_&&t.locale!=="ko"?null:t.data;default:return null}}var jT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jT[e.type]:t==="textarea"}function h_(e,t,n,r){Wb(r),t=Yd(t,"onChange"),0<t.length&&(n=new lg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dl=null,fu=null;function ET(e){k_(e,0)}function Vf(e){var t=Lo(e);if(Ib(t))return e}function RT(e,t){if(e==="change")return t}var p_=!1;if(hi){var Nh;if(hi){var Oh="oninput"in document;if(!Oh){var Iv=document.createElement("div");Iv.setAttribute("oninput","return;"),Oh=typeof Iv.oninput=="function"}Nh=Oh}else Nh=!1;p_=Nh&&(!document.documentMode||9<document.documentMode)}function Lv(){Dl&&(Dl.detachEvent("onpropertychange",m_),fu=Dl=null)}function m_(e){if(e.propertyName==="value"&&Vf(fu)){var t=[];h_(t,fu,e,ng(e)),Xb(ET,t)}}function MT(e,t,n){e==="focusin"?(Lv(),Dl=t,fu=n,Dl.attachEvent("onpropertychange",m_)):e==="focusout"&&Lv()}function AT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vf(fu)}function DT(e,t){if(e==="click")return Vf(t)}function NT(e,t){if(e==="input"||e==="change")return Vf(t)}function OT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kr=typeof Object.is=="function"?Object.is:OT;function hu(e,t){if(kr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hp.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function Fv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $v(e,t){var n=Fv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fv(n)}}function g_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?g_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function v_(){for(var e=window,t=Fd();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fd(e.document)}return t}function dg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zT(e){var t=v_(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&g_(n.ownerDocument.documentElement,n)){if(r!==null&&dg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=$v(n,s);var o=$v(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var IT=hi&&"documentMode"in document&&11>=document.documentMode,zo=null,cm=null,Nl=null,dm=!1;function Vv(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dm||zo==null||zo!==Fd(r)||(r=zo,"selectionStart"in r&&dg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nl&&hu(Nl,r)||(Nl=r,r=Yd(cm,"onSelect"),0<r.length&&(t=new lg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zo)))}function Pc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Io={animationend:Pc("Animation","AnimationEnd"),animationiteration:Pc("Animation","AnimationIteration"),animationstart:Pc("Animation","AnimationStart"),transitionend:Pc("Transition","TransitionEnd")},zh={},y_={};hi&&(y_=document.createElement("div").style,"AnimationEvent"in window||(delete Io.animationend.animation,delete Io.animationiteration.animation,delete Io.animationstart.animation),"TransitionEvent"in window||delete Io.transitionend.transition);function Bf(e){if(zh[e])return zh[e];if(!Io[e])return e;var t=Io[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in y_)return zh[e]=t[n];return e}var x_=Bf("animationend"),w_=Bf("animationiteration"),b_=Bf("animationstart"),__=Bf("transitionend"),S_=new Map,Bv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fs(e,t){S_.set(e,t),co(t,[e])}for(var Ih=0;Ih<Bv.length;Ih++){var Lh=Bv[Ih],LT=Lh.toLowerCase(),FT=Lh[0].toUpperCase()+Lh.slice(1);fs(LT,"on"+FT)}fs(x_,"onAnimationEnd");fs(w_,"onAnimationIteration");fs(b_,"onAnimationStart");fs("dblclick","onDoubleClick");fs("focusin","onFocus");fs("focusout","onBlur");fs(__,"onTransitionEnd");pa("onMouseEnter",["mouseout","mouseover"]);pa("onMouseLeave",["mouseout","mouseover"]);pa("onPointerEnter",["pointerout","pointerover"]);pa("onPointerLeave",["pointerout","pointerover"]);co("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));co("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));co("onBeforeInput",["compositionend","keypress","textInput","paste"]);co("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));co("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));co("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$T=new Set("cancel close invalid load scroll toggle".split(" ").concat(yl));function Uv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,LC(r,t,void 0,e),e.currentTarget=null}function k_(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Uv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Uv(i,a,u),s=l}}}if(Vd)throw e=om,Vd=!1,om=null,e}function ke(e,t){var n=t[gm];n===void 0&&(n=t[gm]=new Set);var r=e+"__bubble";n.has(r)||(C_(t,e,2,!1),n.add(r))}function Fh(e,t,n){var r=0;t&&(r|=4),C_(n,e,r,t)}var jc="_reactListening"+Math.random().toString(36).slice(2);function pu(e){if(!e[jc]){e[jc]=!0,Ab.forEach(function(n){n!=="selectionchange"&&($T.has(n)||Fh(n,!1,e),Fh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jc]||(t[jc]=!0,Fh("selectionchange",!1,t))}}function C_(e,t,n,r){switch(l_(t)){case 1:var i=eT;break;case 4:i=tT;break;default:i=og}n=i.bind(null,t,n,e),i=void 0,!sm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $h(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ds(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Xb(function(){var u=s,c=ng(n),f=[];e:{var h=S_.get(e);if(h!==void 0){var p=lg,y=e;switch(e){case"keypress":if(cd(n)===0)break e;case"keydown":case"keyup":p=gT;break;case"focusin":y="focus",p=Dh;break;case"focusout":y="blur",p=Dh;break;case"beforeblur":case"afterblur":p=Dh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=iT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=xT;break;case x_:case w_:case b_:p=aT;break;case __:p=bT;break;case"scroll":p=nT;break;case"wheel":p=ST;break;case"copy":case"cut":case"paste":p=uT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dv}var g=(t&4)!==0,w=!g&&e==="scroll",m=g?h!==null?h+"Capture":null:h;g=[];for(var v=u,x;v!==null;){x=v;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,m!==null&&(_=lu(v,m),_!=null&&g.push(mu(v,_,x)))),w)break;v=v.return}0<g.length&&(h=new p(h,y,null,n,c),f.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==rm&&(y=n.relatedTarget||n.fromElement)&&(Ds(y)||y[pi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Ds(y):null,y!==null&&(w=fo(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(g=Mv,_="onMouseLeave",m="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(g=Dv,_="onPointerLeave",m="onPointerEnter",v="pointer"),w=p==null?h:Lo(p),x=y==null?h:Lo(y),h=new g(_,v+"leave",p,n,c),h.target=w,h.relatedTarget=x,_=null,Ds(c)===u&&(g=new g(m,v+"enter",y,n,c),g.target=x,g.relatedTarget=w,_=g),w=_,p&&y)t:{for(g=p,m=y,v=0,x=g;x;x=bo(x))v++;for(x=0,_=m;_;_=bo(_))x++;for(;0<v-x;)g=bo(g),v--;for(;0<x-v;)m=bo(m),x--;for(;v--;){if(g===m||m!==null&&g===m.alternate)break t;g=bo(g),m=bo(m)}g=null}else g=null;p!==null&&Wv(f,h,p,g,!1),y!==null&&w!==null&&Wv(f,w,y,g,!0)}}e:{if(h=u?Lo(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=RT;else if(zv(h))if(p_)S=NT;else{S=AT;var k=MT}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=DT);if(S&&(S=S(e,u))){h_(f,S,n,c);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Zp(h,"number",h.value)}switch(k=u?Lo(u):window,e){case"focusin":(zv(k)||k.contentEditable==="true")&&(zo=k,cm=u,Nl=null);break;case"focusout":Nl=cm=zo=null;break;case"mousedown":dm=!0;break;case"contextmenu":case"mouseup":case"dragend":dm=!1,Vv(f,n,c);break;case"selectionchange":if(IT)break;case"keydown":case"keyup":Vv(f,n,c)}var b;if(cg)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Oo?d_(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(c_&&n.locale!=="ko"&&(Oo||T!=="onCompositionStart"?T==="onCompositionEnd"&&Oo&&(b=u_()):(zi=c,ag="value"in zi?zi.value:zi.textContent,Oo=!0)),k=Yd(u,T),0<k.length&&(T=new Av(T,e,null,n,c),f.push({event:T,listeners:k}),b?T.data=b:(b=f_(n),b!==null&&(T.data=b)))),(b=CT?TT(e,n):PT(e,n))&&(u=Yd(u,"onBeforeInput"),0<u.length&&(c=new Av("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=b))}k_(f,t)})}function mu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yd(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=lu(e,n),s!=null&&r.unshift(mu(e,s,i)),s=lu(e,t),s!=null&&r.push(mu(e,s,i))),e=e.return}return r}function bo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wv(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=lu(n,s),l!=null&&o.unshift(mu(n,l,a))):i||(l=lu(n,s),l!=null&&o.push(mu(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var VT=/\r\n?/g,BT=/\u0000|\uFFFD/g;function Hv(e){return(typeof e=="string"?e:""+e).replace(VT,`
`).replace(BT,"")}function Ec(e,t,n){if(t=Hv(t),Hv(e)!==t&&n)throw Error(O(425))}function Gd(){}var fm=null,hm=null;function pm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mm=typeof setTimeout=="function"?setTimeout:void 0,UT=typeof clearTimeout=="function"?clearTimeout:void 0,Yv=typeof Promise=="function"?Promise:void 0,WT=typeof queueMicrotask=="function"?queueMicrotask:typeof Yv<"u"?function(e){return Yv.resolve(null).then(e).catch(HT)}:mm;function HT(e){setTimeout(function(){throw e})}function Vh(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),du(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);du(t)}function Ki(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ia=Math.random().toString(36).slice(2),Ir="__reactFiber$"+Ia,gu="__reactProps$"+Ia,pi="__reactContainer$"+Ia,gm="__reactEvents$"+Ia,YT="__reactListeners$"+Ia,GT="__reactHandles$"+Ia;function Ds(e){var t=e[Ir];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pi]||n[Ir]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gv(e);e!==null;){if(n=e[Ir])return n;e=Gv(e)}return t}e=n,n=e.parentNode}return null}function rc(e){return e=e[Ir]||e[pi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Uf(e){return e[gu]||null}var vm=[],Fo=-1;function hs(e){return{current:e}}function Pe(e){0>Fo||(e.current=vm[Fo],vm[Fo]=null,Fo--)}function _e(e,t){Fo++,vm[Fo]=e.current,e.current=t}var os={},Yt=hs(os),pn=hs(!1),Js=os;function ma(e,t){var n=e.type.contextTypes;if(!n)return os;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function mn(e){return e=e.childContextTypes,e!=null}function Xd(){Pe(pn),Pe(Yt)}function Xv(e,t,n){if(Yt.current!==os)throw Error(O(168));_e(Yt,t),_e(pn,n)}function T_(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,MC(e)||"Unknown",i));return Fe({},n,r)}function Kd(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||os,Js=Yt.current,_e(Yt,e),_e(pn,pn.current),!0}function Kv(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=T_(e,t,Js),r.__reactInternalMemoizedMergedChildContext=e,Pe(pn),Pe(Yt),_e(Yt,e)):Pe(pn),_e(pn,n)}var si=null,Wf=!1,Bh=!1;function P_(e){si===null?si=[e]:si.push(e)}function XT(e){Wf=!0,P_(e)}function ps(){if(!Bh&&si!==null){Bh=!0;var e=0,t=ye;try{var n=si;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}si=null,Wf=!1}catch(i){throw si!==null&&(si=si.slice(e+1)),Zb(rg,ps),i}finally{ye=t,Bh=!1}}return null}var $o=[],Vo=0,qd=null,Qd=0,Yn=[],Gn=0,eo=null,li=1,ui="";function Ts(e,t){$o[Vo++]=Qd,$o[Vo++]=qd,qd=e,Qd=t}function j_(e,t,n){Yn[Gn++]=li,Yn[Gn++]=ui,Yn[Gn++]=eo,eo=e;var r=li;e=ui;var i=32-br(r)-1;r&=~(1<<i),n+=1;var s=32-br(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,li=1<<32-br(t)+i|n<<i|r,ui=s+e}else li=1<<s|n<<i|r,ui=e}function fg(e){e.return!==null&&(Ts(e,1),j_(e,1,0))}function hg(e){for(;e===qd;)qd=$o[--Vo],$o[Vo]=null,Qd=$o[--Vo],$o[Vo]=null;for(;e===eo;)eo=Yn[--Gn],Yn[Gn]=null,ui=Yn[--Gn],Yn[Gn]=null,li=Yn[--Gn],Yn[Gn]=null}var On=null,An=null,Re=!1,vr=null;function E_(e,t){var n=Zn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qv(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,On=e,An=Ki(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,On=e,An=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=eo!==null?{id:li,overflow:ui}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Zn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,On=e,An=null,!0):!1;default:return!1}}function ym(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xm(e){if(Re){var t=An;if(t){var n=t;if(!qv(e,t)){if(ym(e))throw Error(O(418));t=Ki(n.nextSibling);var r=On;t&&qv(e,t)?E_(r,n):(e.flags=e.flags&-4097|2,Re=!1,On=e)}}else{if(ym(e))throw Error(O(418));e.flags=e.flags&-4097|2,Re=!1,On=e}}}function Qv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;On=e}function Rc(e){if(e!==On)return!1;if(!Re)return Qv(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pm(e.type,e.memoizedProps)),t&&(t=An)){if(ym(e))throw R_(),Error(O(418));for(;t;)E_(e,t),t=Ki(t.nextSibling)}if(Qv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){An=Ki(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}An=null}}else An=On?Ki(e.stateNode.nextSibling):null;return!0}function R_(){for(var e=An;e;)e=Ki(e.nextSibling)}function ga(){An=On=null,Re=!1}function pg(e){vr===null?vr=[e]:vr.push(e)}var KT=wi.ReactCurrentBatchConfig;function rl(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Mc(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zv(e){var t=e._init;return t(e._payload)}function M_(e){function t(m,v){if(e){var x=m.deletions;x===null?(m.deletions=[v],m.flags|=16):x.push(v)}}function n(m,v){if(!e)return null;for(;v!==null;)t(m,v),v=v.sibling;return null}function r(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function i(m,v){return m=Ji(m,v),m.index=0,m.sibling=null,m}function s(m,v,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<v?(m.flags|=2,v):x):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,v,x,_){return v===null||v.tag!==6?(v=Kh(x,m.mode,_),v.return=m,v):(v=i(v,x),v.return=m,v)}function l(m,v,x,_){var S=x.type;return S===No?c(m,v,x.props.children,_,x.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ai&&Zv(S)===v.type)?(_=i(v,x.props),_.ref=rl(m,v,x),_.return=m,_):(_=vd(x.type,x.key,x.props,null,m.mode,_),_.ref=rl(m,v,x),_.return=m,_)}function u(m,v,x,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=qh(x,m.mode,_),v.return=m,v):(v=i(v,x.children||[]),v.return=m,v)}function c(m,v,x,_,S){return v===null||v.tag!==7?(v=Bs(x,m.mode,_,S),v.return=m,v):(v=i(v,x),v.return=m,v)}function f(m,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Kh(""+v,m.mode,x),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wc:return x=vd(v.type,v.key,v.props,null,m.mode,x),x.ref=rl(m,null,v),x.return=m,x;case Do:return v=qh(v,m.mode,x),v.return=m,v;case Ai:var _=v._init;return f(m,_(v._payload),x)}if(gl(v)||Za(v))return v=Bs(v,m.mode,x,null),v.return=m,v;Mc(m,v)}return null}function h(m,v,x,_){var S=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(m,v,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case wc:return x.key===S?l(m,v,x,_):null;case Do:return x.key===S?u(m,v,x,_):null;case Ai:return S=x._init,h(m,v,S(x._payload),_)}if(gl(x)||Za(x))return S!==null?null:c(m,v,x,_,null);Mc(m,x)}return null}function p(m,v,x,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(x)||null,a(v,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wc:return m=m.get(_.key===null?x:_.key)||null,l(v,m,_,S);case Do:return m=m.get(_.key===null?x:_.key)||null,u(v,m,_,S);case Ai:var k=_._init;return p(m,v,x,k(_._payload),S)}if(gl(_)||Za(_))return m=m.get(x)||null,c(v,m,_,S,null);Mc(v,_)}return null}function y(m,v,x,_){for(var S=null,k=null,b=v,T=v=0,j=null;b!==null&&T<x.length;T++){b.index>T?(j=b,b=null):j=b.sibling;var R=h(m,b,x[T],_);if(R===null){b===null&&(b=j);break}e&&b&&R.alternate===null&&t(m,b),v=s(R,v,T),k===null?S=R:k.sibling=R,k=R,b=j}if(T===x.length)return n(m,b),Re&&Ts(m,T),S;if(b===null){for(;T<x.length;T++)b=f(m,x[T],_),b!==null&&(v=s(b,v,T),k===null?S=b:k.sibling=b,k=b);return Re&&Ts(m,T),S}for(b=r(m,b);T<x.length;T++)j=p(b,m,T,x[T],_),j!==null&&(e&&j.alternate!==null&&b.delete(j.key===null?T:j.key),v=s(j,v,T),k===null?S=j:k.sibling=j,k=j);return e&&b.forEach(function(E){return t(m,E)}),Re&&Ts(m,T),S}function g(m,v,x,_){var S=Za(x);if(typeof S!="function")throw Error(O(150));if(x=S.call(x),x==null)throw Error(O(151));for(var k=S=null,b=v,T=v=0,j=null,R=x.next();b!==null&&!R.done;T++,R=x.next()){b.index>T?(j=b,b=null):j=b.sibling;var E=h(m,b,R.value,_);if(E===null){b===null&&(b=j);break}e&&b&&E.alternate===null&&t(m,b),v=s(E,v,T),k===null?S=E:k.sibling=E,k=E,b=j}if(R.done)return n(m,b),Re&&Ts(m,T),S;if(b===null){for(;!R.done;T++,R=x.next())R=f(m,R.value,_),R!==null&&(v=s(R,v,T),k===null?S=R:k.sibling=R,k=R);return Re&&Ts(m,T),S}for(b=r(m,b);!R.done;T++,R=x.next())R=p(b,m,T,R.value,_),R!==null&&(e&&R.alternate!==null&&b.delete(R.key===null?T:R.key),v=s(R,v,T),k===null?S=R:k.sibling=R,k=R);return e&&b.forEach(function(N){return t(m,N)}),Re&&Ts(m,T),S}function w(m,v,x,_){if(typeof x=="object"&&x!==null&&x.type===No&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case wc:e:{for(var S=x.key,k=v;k!==null;){if(k.key===S){if(S=x.type,S===No){if(k.tag===7){n(m,k.sibling),v=i(k,x.props.children),v.return=m,m=v;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ai&&Zv(S)===k.type){n(m,k.sibling),v=i(k,x.props),v.ref=rl(m,k,x),v.return=m,m=v;break e}n(m,k);break}else t(m,k);k=k.sibling}x.type===No?(v=Bs(x.props.children,m.mode,_,x.key),v.return=m,m=v):(_=vd(x.type,x.key,x.props,null,m.mode,_),_.ref=rl(m,v,x),_.return=m,m=_)}return o(m);case Do:e:{for(k=x.key;v!==null;){if(v.key===k)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(m,v.sibling),v=i(v,x.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else t(m,v);v=v.sibling}v=qh(x,m.mode,_),v.return=m,m=v}return o(m);case Ai:return k=x._init,w(m,v,k(x._payload),_)}if(gl(x))return y(m,v,x,_);if(Za(x))return g(m,v,x,_);Mc(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(m,v.sibling),v=i(v,x),v.return=m,m=v):(n(m,v),v=Kh(x,m.mode,_),v.return=m,m=v),o(m)):n(m,v)}return w}var va=M_(!0),A_=M_(!1),Zd=hs(null),Jd=null,Bo=null,mg=null;function gg(){mg=Bo=Jd=null}function vg(e){var t=Zd.current;Pe(Zd),e._currentValue=t}function wm(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ia(e,t){Jd=e,mg=Bo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fn=!0),e.firstContext=null)}function rr(e){var t=e._currentValue;if(mg!==e)if(e={context:e,memoizedValue:t,next:null},Bo===null){if(Jd===null)throw Error(O(308));Bo=e,Jd.dependencies={lanes:0,firstContext:e}}else Bo=Bo.next=e;return t}var Ns=null;function yg(e){Ns===null?Ns=[e]:Ns.push(e)}function D_(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yg(t)):(n.next=i.next,i.next=n),t.interleaved=n,mi(e,r)}function mi(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Di=!1;function xg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function di(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qi(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,mi(e,n)}return i=r.interleaved,i===null?(t.next=t,yg(r)):(t.next=i.next,i.next=t),r.interleaved=t,mi(e,n)}function dd(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ig(e,n)}}function Jv(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ef(e,t,n,r){var i=e.updateQueue;Di=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,g=a;switch(h=t,p=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){f=y.call(p,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,h=typeof y=="function"?y.call(p,f,h):y,h==null)break e;f=Fe({},f,h);break e;case 2:Di=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);no|=o,e.lanes=o,e.memoizedState=f}}function ey(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var ic={},Br=hs(ic),vu=hs(ic),yu=hs(ic);function Os(e){if(e===ic)throw Error(O(174));return e}function wg(e,t){switch(_e(yu,t),_e(vu,e),_e(Br,ic),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:em(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=em(t,e)}Pe(Br),_e(Br,t)}function ya(){Pe(Br),Pe(vu),Pe(yu)}function O_(e){Os(yu.current);var t=Os(Br.current),n=em(t,e.type);t!==n&&(_e(vu,e),_e(Br,n))}function bg(e){vu.current===e&&(Pe(Br),Pe(vu))}var Ne=hs(0);function tf(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Uh=[];function _g(){for(var e=0;e<Uh.length;e++)Uh[e]._workInProgressVersionPrimary=null;Uh.length=0}var fd=wi.ReactCurrentDispatcher,Wh=wi.ReactCurrentBatchConfig,to=0,Le=null,ct=null,yt=null,nf=!1,Ol=!1,xu=0,qT=0;function Nt(){throw Error(O(321))}function Sg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function kg(e,t,n,r,i,s){if(to=s,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fd.current=e===null||e.memoizedState===null?eP:tP,e=n(r,i),Ol){s=0;do{if(Ol=!1,xu=0,25<=s)throw Error(O(301));s+=1,yt=ct=null,t.updateQueue=null,fd.current=nP,e=n(r,i)}while(Ol)}if(fd.current=rf,t=ct!==null&&ct.next!==null,to=0,yt=ct=Le=null,nf=!1,t)throw Error(O(300));return e}function Cg(){var e=xu!==0;return xu=0,e}function Ar(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Le.memoizedState=yt=e:yt=yt.next=e,yt}function ir(){if(ct===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var t=yt===null?Le.memoizedState:yt.next;if(t!==null)yt=t,ct=e;else{if(e===null)throw Error(O(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},yt===null?Le.memoizedState=yt=e:yt=yt.next=e}return yt}function wu(e,t){return typeof t=="function"?t(e):t}function Hh(e){var t=ir(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=ct,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((to&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Le.lanes|=c,no|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,kr(r,t.memoizedState)||(fn=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Le.lanes|=s,no|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yh(e){var t=ir(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);kr(s,t.memoizedState)||(fn=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function z_(){}function I_(e,t){var n=Le,r=ir(),i=t(),s=!kr(r.memoizedState,i);if(s&&(r.memoizedState=i,fn=!0),r=r.queue,Tg($_.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,bu(9,F_.bind(null,n,r,i,t),void 0,null),bt===null)throw Error(O(349));to&30||L_(n,t,i)}return i}function L_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function F_(e,t,n,r){t.value=n,t.getSnapshot=r,V_(t)&&B_(e)}function $_(e,t,n){return n(function(){V_(t)&&B_(e)})}function V_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function B_(e){var t=mi(e,1);t!==null&&_r(t,e,1,-1)}function ty(e){var t=Ar();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wu,lastRenderedState:e},t.queue=e,e=e.dispatch=JT.bind(null,Le,e),[t.memoizedState,e]}function bu(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function U_(){return ir().memoizedState}function hd(e,t,n,r){var i=Ar();Le.flags|=e,i.memoizedState=bu(1|t,n,void 0,r===void 0?null:r)}function Hf(e,t,n,r){var i=ir();r=r===void 0?null:r;var s=void 0;if(ct!==null){var o=ct.memoizedState;if(s=o.destroy,r!==null&&Sg(r,o.deps)){i.memoizedState=bu(t,n,s,r);return}}Le.flags|=e,i.memoizedState=bu(1|t,n,s,r)}function ny(e,t){return hd(8390656,8,e,t)}function Tg(e,t){return Hf(2048,8,e,t)}function W_(e,t){return Hf(4,2,e,t)}function H_(e,t){return Hf(4,4,e,t)}function Y_(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function G_(e,t,n){return n=n!=null?n.concat([e]):null,Hf(4,4,Y_.bind(null,t,e),n)}function Pg(){}function X_(e,t){var n=ir();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function K_(e,t){var n=ir();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function q_(e,t,n){return to&21?(kr(n,t)||(n=t_(),Le.lanes|=n,no|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fn=!0),e.memoizedState=n)}function QT(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=Wh.transition;Wh.transition={};try{e(!1),t()}finally{ye=n,Wh.transition=r}}function Q_(){return ir().memoizedState}function ZT(e,t,n){var r=Zi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Z_(e))J_(t,n);else if(n=D_(e,t,n,r),n!==null){var i=rn();_r(n,e,r,i),e5(n,t,r)}}function JT(e,t,n){var r=Zi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z_(e))J_(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kr(a,o)){var l=t.interleaved;l===null?(i.next=i,yg(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=D_(e,t,i,r),n!==null&&(i=rn(),_r(n,e,r,i),e5(n,t,r))}}function Z_(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function J_(e,t){Ol=nf=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function e5(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ig(e,n)}}var rf={readContext:rr,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},eP={readContext:rr,useCallback:function(e,t){return Ar().memoizedState=[e,t===void 0?null:t],e},useContext:rr,useEffect:ny,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hd(4194308,4,Y_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hd(4194308,4,e,t)},useInsertionEffect:function(e,t){return hd(4,2,e,t)},useMemo:function(e,t){var n=Ar();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ar();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ZT.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=Ar();return e={current:e},t.memoizedState=e},useState:ty,useDebugValue:Pg,useDeferredValue:function(e){return Ar().memoizedState=e},useTransition:function(){var e=ty(!1),t=e[0];return e=QT.bind(null,e[1]),Ar().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,i=Ar();if(Re){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),bt===null)throw Error(O(349));to&30||L_(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ny($_.bind(null,r,s,e),[e]),r.flags|=2048,bu(9,F_.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ar(),t=bt.identifierPrefix;if(Re){var n=ui,r=li;n=(r&~(1<<32-br(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xu++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qT++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tP={readContext:rr,useCallback:X_,useContext:rr,useEffect:Tg,useImperativeHandle:G_,useInsertionEffect:W_,useLayoutEffect:H_,useMemo:K_,useReducer:Hh,useRef:U_,useState:function(){return Hh(wu)},useDebugValue:Pg,useDeferredValue:function(e){var t=ir();return q_(t,ct.memoizedState,e)},useTransition:function(){var e=Hh(wu)[0],t=ir().memoizedState;return[e,t]},useMutableSource:z_,useSyncExternalStore:I_,useId:Q_,unstable_isNewReconciler:!1},nP={readContext:rr,useCallback:X_,useContext:rr,useEffect:Tg,useImperativeHandle:G_,useInsertionEffect:W_,useLayoutEffect:H_,useMemo:K_,useReducer:Yh,useRef:U_,useState:function(){return Yh(wu)},useDebugValue:Pg,useDeferredValue:function(e){var t=ir();return ct===null?t.memoizedState=e:q_(t,ct.memoizedState,e)},useTransition:function(){var e=Yh(wu)[0],t=ir().memoizedState;return[e,t]},useMutableSource:z_,useSyncExternalStore:I_,useId:Q_,unstable_isNewReconciler:!1};function mr(e,t){if(e&&e.defaultProps){t=Fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bm(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yf={isMounted:function(e){return(e=e._reactInternals)?fo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=rn(),i=Zi(e),s=di(r,i);s.payload=t,n!=null&&(s.callback=n),t=qi(e,s,i),t!==null&&(_r(t,e,i,r),dd(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=rn(),i=Zi(e),s=di(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=qi(e,s,i),t!==null&&(_r(t,e,i,r),dd(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rn(),r=Zi(e),i=di(n,r);i.tag=2,t!=null&&(i.callback=t),t=qi(e,i,r),t!==null&&(_r(t,e,r,n),dd(t,e,r))}};function ry(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!hu(n,r)||!hu(i,s):!0}function t5(e,t,n){var r=!1,i=os,s=t.contextType;return typeof s=="object"&&s!==null?s=rr(s):(i=mn(t)?Js:Yt.current,r=t.contextTypes,s=(r=r!=null)?ma(e,i):os),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yf,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function iy(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yf.enqueueReplaceState(t,t.state,null)}function _m(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},xg(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=rr(s):(s=mn(t)?Js:Yt.current,i.context=ma(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(bm(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Yf.enqueueReplaceState(i,i.state,null),ef(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xa(e,t){try{var n="",r=t;do n+=RC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Gh(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Sm(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rP=typeof WeakMap=="function"?WeakMap:Map;function n5(e,t,n){n=di(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){of||(of=!0,Dm=r),Sm(e,t)},n}function r5(e,t,n){n=di(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Sm(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sm(e,t),typeof r!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function sy(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rP;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vP.bind(null,e,t,n),t.then(e,e))}function oy(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ay(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=di(-1,1),t.tag=2,qi(n,t,1))),n.lanes|=1),e)}var iP=wi.ReactCurrentOwner,fn=!1;function qt(e,t,n,r){t.child=e===null?A_(t,null,n,r):va(t,e.child,n,r)}function ly(e,t,n,r,i){n=n.render;var s=t.ref;return ia(t,i),r=kg(e,t,n,r,s,i),n=Cg(),e!==null&&!fn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gi(e,t,i)):(Re&&n&&fg(t),t.flags|=1,qt(e,t,r,i),t.child)}function uy(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Og(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,i5(e,t,s,r,i)):(e=vd(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hu,n(o,r)&&e.ref===t.ref)return gi(e,t,i)}return t.flags|=1,e=Ji(s,r),e.ref=t.ref,e.return=t,t.child=e}function i5(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(hu(s,r)&&e.ref===t.ref)if(fn=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(fn=!0);else return t.lanes=e.lanes,gi(e,t,i)}return km(e,t,n,r,i)}function s5(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Wo,Pn),Pn|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Wo,Pn),Pn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Wo,Pn),Pn|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,_e(Wo,Pn),Pn|=r;return qt(e,t,i,n),t.child}function o5(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function km(e,t,n,r,i){var s=mn(n)?Js:Yt.current;return s=ma(t,s),ia(t,i),n=kg(e,t,n,r,s,i),r=Cg(),e!==null&&!fn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gi(e,t,i)):(Re&&r&&fg(t),t.flags|=1,qt(e,t,n,i),t.child)}function cy(e,t,n,r,i){if(mn(n)){var s=!0;Kd(t)}else s=!1;if(ia(t,i),t.stateNode===null)pd(e,t),t5(t,n,r),_m(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=rr(u):(u=mn(n)?Js:Yt.current,u=ma(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&iy(t,o,r,u),Di=!1;var h=t.memoizedState;o.state=h,ef(t,r,o,i),l=t.memoizedState,a!==r||h!==l||pn.current||Di?(typeof c=="function"&&(bm(t,n,c,r),l=t.memoizedState),(a=Di||ry(t,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,N_(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:mr(t.type,a),o.props=u,f=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=rr(l):(l=mn(n)?Js:Yt.current,l=ma(t,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&iy(t,o,r,l),Di=!1,h=t.memoizedState,o.state=h,ef(t,r,o,i);var y=t.memoizedState;a!==f||h!==y||pn.current||Di?(typeof p=="function"&&(bm(t,n,p,r),y=t.memoizedState),(u=Di||ry(t,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Cm(e,t,n,r,s,i)}function Cm(e,t,n,r,i,s){o5(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Kv(t,n,!1),gi(e,t,s);r=t.stateNode,iP.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=va(t,e.child,null,s),t.child=va(t,null,a,s)):qt(e,t,a,s),t.memoizedState=r.state,i&&Kv(t,n,!0),t.child}function a5(e){var t=e.stateNode;t.pendingContext?Xv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xv(e,t.context,!1),wg(e,t.containerInfo)}function dy(e,t,n,r,i){return ga(),pg(i),t.flags|=256,qt(e,t,n,r),t.child}var Tm={dehydrated:null,treeContext:null,retryLane:0};function Pm(e){return{baseLanes:e,cachePool:null,transitions:null}}function l5(e,t,n){var r=t.pendingProps,i=Ne.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_e(Ne,i&1),e===null)return xm(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kf(o,r,0,null),e=Bs(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Pm(n),t.memoizedState=Tm,e):jg(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sP(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ji(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=Bs(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Pm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Tm,r}return s=e.child,e=s.sibling,r=Ji(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jg(e,t){return t=Kf({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ac(e,t,n,r){return r!==null&&pg(r),va(t,e.child,null,n),e=jg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sP(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Gh(Error(O(422))),Ac(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Kf({mode:"visible",children:r.children},i,0,null),s=Bs(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&va(t,e.child,null,o),t.child.memoizedState=Pm(o),t.memoizedState=Tm,s);if(!(t.mode&1))return Ac(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=Gh(s,r,void 0),Ac(e,t,o,r)}if(a=(o&e.childLanes)!==0,fn||a){if(r=bt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mi(e,i),_r(r,e,i,-1))}return Ng(),r=Gh(Error(O(421))),Ac(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yP.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,An=Ki(i.nextSibling),On=t,Re=!0,vr=null,e!==null&&(Yn[Gn++]=li,Yn[Gn++]=ui,Yn[Gn++]=eo,li=e.id,ui=e.overflow,eo=t),t=jg(t,r.children),t.flags|=4096,t)}function fy(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wm(e.return,t,n)}function Xh(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function u5(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(qt(e,t,r.children,n),r=Ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fy(e,n,t);else if(e.tag===19)fy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(Ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&tf(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xh(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&tf(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xh(t,!0,n,null,s);break;case"together":Xh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pd(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),no|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=Ji(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ji(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function oP(e,t,n){switch(t.tag){case 3:a5(t),ga();break;case 5:O_(t);break;case 1:mn(t.type)&&Kd(t);break;case 4:wg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_e(Zd,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ne,Ne.current&1),t.flags|=128,null):n&t.child.childLanes?l5(e,t,n):(_e(Ne,Ne.current&1),e=gi(e,t,n),e!==null?e.sibling:null);_e(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return u5(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,s5(e,t,n)}return gi(e,t,n)}var c5,jm,d5,f5;c5=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jm=function(){};d5=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Os(Br.current);var s=null;switch(n){case"input":i=qp(e,i),r=qp(e,r),s=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),s=[];break;case"textarea":i=Jp(e,i),r=Jp(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gd)}tm(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ou.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ou.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ke("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};f5=function(e,t,n,r){n!==r&&(t.flags|=4)};function il(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function aP(e,t,n){var r=t.pendingProps;switch(hg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return mn(t.type)&&Xd(),Ot(t),null;case 3:return r=t.stateNode,ya(),Pe(pn),Pe(Yt),_g(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vr!==null&&(zm(vr),vr=null))),jm(e,t),Ot(t),null;case 5:bg(t);var i=Os(yu.current);if(n=t.type,e!==null&&t.stateNode!=null)d5(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Ot(t),null}if(e=Os(Br.current),Rc(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ir]=t,r[gu]=s,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<yl.length;i++)ke(yl[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":bv(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":Sv(r,s),ke("invalid",r)}tm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ec(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ec(r.textContent,a,e),i=["children",""+a]):ou.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":bc(r),_v(r,s,!0);break;case"textarea":bc(r),kv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gd)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$b(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ir]=t,e[gu]=r,c5(e,t,!1,!1),t.stateNode=e;e:{switch(o=nm(n,r),n){case"dialog":ke("cancel",e),ke("close",e),i=r;break;case"iframe":case"object":case"embed":ke("load",e),i=r;break;case"video":case"audio":for(i=0;i<yl.length;i++)ke(yl[i],e);i=r;break;case"source":ke("error",e),i=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=r;break;case"details":ke("toggle",e),i=r;break;case"input":bv(e,r),i=qp(e,r),ke("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),ke("invalid",e);break;case"textarea":Sv(e,r),i=Jp(e,r),ke("invalid",e);break;default:i=r}tm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ub(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vb(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&au(e,l):typeof l=="number"&&au(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ou.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ke("scroll",e):l!=null&&Z0(e,s,l,o))}switch(n){case"input":bc(e),_v(e,r,!1);break;case"textarea":bc(e),kv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ss(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ea(e,!!r.multiple,s,!1):r.defaultValue!=null&&ea(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ot(t),null;case 6:if(e&&t.stateNode!=null)f5(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=Os(yu.current),Os(Br.current),Rc(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ir]=t,(s=r.nodeValue!==n)&&(e=On,e!==null))switch(e.tag){case 3:Ec(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ec(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ir]=t,t.stateNode=r}return Ot(t),null;case 13:if(Pe(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&An!==null&&t.mode&1&&!(t.flags&128))R_(),ga(),t.flags|=98560,s=!1;else if(s=Rc(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(O(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[Ir]=t}else ga(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ot(t),s=!1}else vr!==null&&(zm(vr),vr=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ne.current&1?ft===0&&(ft=3):Ng())),t.updateQueue!==null&&(t.flags|=4),Ot(t),null);case 4:return ya(),jm(e,t),e===null&&pu(t.stateNode.containerInfo),Ot(t),null;case 10:return vg(t.type._context),Ot(t),null;case 17:return mn(t.type)&&Xd(),Ot(t),null;case 19:if(Pe(Ne),s=t.memoizedState,s===null)return Ot(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)il(s,!1);else{if(ft!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=tf(e),o!==null){for(t.flags|=128,il(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(Ne,Ne.current&1|2),t.child}e=e.sibling}s.tail!==null&&qe()>wa&&(t.flags|=128,r=!0,il(s,!1),t.lanes=4194304)}else{if(!r)if(e=tf(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),il(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return Ot(t),null}else 2*qe()-s.renderingStartTime>wa&&n!==1073741824&&(t.flags|=128,r=!0,il(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=qe(),t.sibling=null,n=Ne.current,_e(Ne,r?n&1|2:n&1),t):(Ot(t),null);case 22:case 23:return Dg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pn&1073741824&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function lP(e,t){switch(hg(t),t.tag){case 1:return mn(t.type)&&Xd(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ya(),Pe(pn),Pe(Yt),_g(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bg(t),null;case 13:if(Pe(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Ne),null;case 4:return ya(),null;case 10:return vg(t.type._context),null;case 22:case 23:return Dg(),null;case 24:return null;default:return null}}var Dc=!1,Ft=!1,uP=typeof WeakSet=="function"?WeakSet:Set,V=null;function Uo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(e,t,r)}else n.current=null}function Em(e,t,n){try{n()}catch(r){Be(e,t,r)}}var hy=!1;function cP(e,t){if(fm=Wd,e=v_(),dg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hm={focusedElem:e,selectionRange:n},Wd=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,w=y.memoizedState,m=t.stateNode,v=m.getSnapshotBeforeUpdate(t.elementType===t.type?g:mr(t.type,g),w);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(_){Be(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return y=hy,hy=!1,y}function zl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Em(t,n,s)}i=i.next}while(i!==r)}}function Gf(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rm(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function h5(e){var t=e.alternate;t!==null&&(e.alternate=null,h5(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ir],delete t[gu],delete t[gm],delete t[YT],delete t[GT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function p5(e){return e.tag===5||e.tag===3||e.tag===4}function py(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||p5(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gd));else if(r!==4&&(e=e.child,e!==null))for(Mm(e,t,n),e=e.sibling;e!==null;)Mm(e,t,n),e=e.sibling}function Am(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Am(e,t,n),e=e.sibling;e!==null;)Am(e,t,n),e=e.sibling}var Ct=null,gr=!1;function Pi(e,t,n){for(n=n.child;n!==null;)m5(e,t,n),n=n.sibling}function m5(e,t,n){if(Vr&&typeof Vr.onCommitFiberUnmount=="function")try{Vr.onCommitFiberUnmount(Ff,n)}catch{}switch(n.tag){case 5:Ft||Uo(n,t);case 6:var r=Ct,i=gr;Ct=null,Pi(e,t,n),Ct=r,gr=i,Ct!==null&&(gr?(e=Ct,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(gr?(e=Ct,n=n.stateNode,e.nodeType===8?Vh(e.parentNode,n):e.nodeType===1&&Vh(e,n),du(e)):Vh(Ct,n.stateNode));break;case 4:r=Ct,i=gr,Ct=n.stateNode.containerInfo,gr=!0,Pi(e,t,n),Ct=r,gr=i;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Em(n,t,o),i=i.next}while(i!==r)}Pi(e,t,n);break;case 1:if(!Ft&&(Uo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Be(n,t,a)}Pi(e,t,n);break;case 21:Pi(e,t,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,Pi(e,t,n),Ft=r):Pi(e,t,n);break;default:Pi(e,t,n)}}function my(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new uP),t.forEach(function(r){var i=xP.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function fr(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,gr=!1;break e;case 3:Ct=a.stateNode.containerInfo,gr=!0;break e;case 4:Ct=a.stateNode.containerInfo,gr=!0;break e}a=a.return}if(Ct===null)throw Error(O(160));m5(s,o,i),Ct=null,gr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Be(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)g5(t,e),t=t.sibling}function g5(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fr(t,e),Rr(e),r&4){try{zl(3,e,e.return),Gf(3,e)}catch(g){Be(e,e.return,g)}try{zl(5,e,e.return)}catch(g){Be(e,e.return,g)}}break;case 1:fr(t,e),Rr(e),r&512&&n!==null&&Uo(n,n.return);break;case 5:if(fr(t,e),Rr(e),r&512&&n!==null&&Uo(n,n.return),e.flags&32){var i=e.stateNode;try{au(i,"")}catch(g){Be(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Lb(i,s),nm(a,o);var u=nm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Ub(i,f):c==="dangerouslySetInnerHTML"?Vb(i,f):c==="children"?au(i,f):Z0(i,c,f,u)}switch(a){case"input":Qp(i,s);break;case"textarea":Fb(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ea(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ea(i,!!s.multiple,s.defaultValue,!0):ea(i,!!s.multiple,s.multiple?[]:"",!1))}i[gu]=s}catch(g){Be(e,e.return,g)}}break;case 6:if(fr(t,e),Rr(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(g){Be(e,e.return,g)}}break;case 3:if(fr(t,e),Rr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{du(t.containerInfo)}catch(g){Be(e,e.return,g)}break;case 4:fr(t,e),Rr(e);break;case 13:fr(t,e),Rr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mg=qe())),r&4&&my(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ft=(u=Ft)||c,fr(t,e),Ft=u):fr(t,e),Rr(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(V=e,c=e.child;c!==null;){for(f=V=c;V!==null;){switch(h=V,p=h.child,h.tag){case 0:case 11:case 14:case 15:zl(4,h,h.return);break;case 1:Uo(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){Be(r,n,g)}}break;case 5:Uo(h,h.return);break;case 22:if(h.memoizedState!==null){vy(f);continue}}p!==null?(p.return=h,V=p):vy(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bb("display",o))}catch(g){Be(e,e.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Be(e,e.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:fr(t,e),Rr(e),r&4&&my(e);break;case 21:break;default:fr(t,e),Rr(e)}}function Rr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(p5(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(au(i,""),r.flags&=-33);var s=py(e);Am(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=py(e);Mm(e,a,o);break;default:throw Error(O(161))}}catch(l){Be(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dP(e,t,n){V=e,v5(e)}function v5(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Dc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ft;a=Dc;var u=Ft;if(Dc=o,(Ft=l)&&!u)for(V=i;V!==null;)o=V,l=o.child,o.tag===22&&o.memoizedState!==null?yy(i):l!==null?(l.return=o,V=l):yy(i);for(;s!==null;)V=s,v5(s),s=s.sibling;V=i,Dc=a,Ft=u}gy(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,V=s):gy(e)}}function gy(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ft||Gf(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mr(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&ey(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ey(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&du(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Ft||t.flags&512&&Rm(t)}catch(h){Be(t,t.return,h)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function vy(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function yy(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Gf(4,t)}catch(l){Be(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Be(t,i,l)}}var s=t.return;try{Rm(t)}catch(l){Be(t,s,l)}break;case 5:var o=t.return;try{Rm(t)}catch(l){Be(t,o,l)}}}catch(l){Be(t,t.return,l)}if(t===e){V=null;break}var a=t.sibling;if(a!==null){a.return=t.return,V=a;break}V=t.return}}var fP=Math.ceil,sf=wi.ReactCurrentDispatcher,Eg=wi.ReactCurrentOwner,er=wi.ReactCurrentBatchConfig,fe=0,bt=null,st=null,Et=0,Pn=0,Wo=hs(0),ft=0,_u=null,no=0,Xf=0,Rg=0,Il=null,dn=null,Mg=0,wa=1/0,ti=null,of=!1,Dm=null,Qi=null,Nc=!1,Ii=null,af=0,Ll=0,Nm=null,md=-1,gd=0;function rn(){return fe&6?qe():md!==-1?md:md=qe()}function Zi(e){return e.mode&1?fe&2&&Et!==0?Et&-Et:KT.transition!==null?(gd===0&&(gd=t_()),gd):(e=ye,e!==0||(e=window.event,e=e===void 0?16:l_(e.type)),e):1}function _r(e,t,n,r){if(50<Ll)throw Ll=0,Nm=null,Error(O(185));tc(e,n,r),(!(fe&2)||e!==bt)&&(e===bt&&(!(fe&2)&&(Xf|=n),ft===4&&Oi(e,Et)),gn(e,r),n===1&&fe===0&&!(t.mode&1)&&(wa=qe()+500,Wf&&ps()))}function gn(e,t){var n=e.callbackNode;KC(e,t);var r=Ud(e,e===bt?Et:0);if(r===0)n!==null&&Pv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pv(n),t===1)e.tag===0?XT(xy.bind(null,e)):P_(xy.bind(null,e)),WT(function(){!(fe&6)&&ps()}),n=null;else{switch(n_(r)){case 1:n=rg;break;case 4:n=Jb;break;case 16:n=Bd;break;case 536870912:n=e_;break;default:n=Bd}n=C5(n,y5.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function y5(e,t){if(md=-1,gd=0,fe&6)throw Error(O(327));var n=e.callbackNode;if(sa()&&e.callbackNode!==n)return null;var r=Ud(e,e===bt?Et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lf(e,r);else{t=r;var i=fe;fe|=2;var s=w5();(bt!==e||Et!==t)&&(ti=null,wa=qe()+500,Vs(e,t));do try{mP();break}catch(a){x5(e,a)}while(!0);gg(),sf.current=s,fe=i,st!==null?t=0:(bt=null,Et=0,t=ft)}if(t!==0){if(t===2&&(i=am(e),i!==0&&(r=i,t=Om(e,i))),t===1)throw n=_u,Vs(e,0),Oi(e,r),gn(e,qe()),n;if(t===6)Oi(e,r);else{if(i=e.current.alternate,!(r&30)&&!hP(i)&&(t=lf(e,r),t===2&&(s=am(e),s!==0&&(r=s,t=Om(e,s))),t===1))throw n=_u,Vs(e,0),Oi(e,r),gn(e,qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Ps(e,dn,ti);break;case 3:if(Oi(e,r),(r&130023424)===r&&(t=Mg+500-qe(),10<t)){if(Ud(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){rn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mm(Ps.bind(null,e,dn,ti),t);break}Ps(e,dn,ti);break;case 4:if(Oi(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-br(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fP(r/1960))-r,10<r){e.timeoutHandle=mm(Ps.bind(null,e,dn,ti),r);break}Ps(e,dn,ti);break;case 5:Ps(e,dn,ti);break;default:throw Error(O(329))}}}return gn(e,qe()),e.callbackNode===n?y5.bind(null,e):null}function Om(e,t){var n=Il;return e.current.memoizedState.isDehydrated&&(Vs(e,t).flags|=256),e=lf(e,t),e!==2&&(t=dn,dn=n,t!==null&&zm(t)),e}function zm(e){dn===null?dn=e:dn.push.apply(dn,e)}function hP(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kr(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Oi(e,t){for(t&=~Rg,t&=~Xf,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-br(t),r=1<<n;e[n]=-1,t&=~r}}function xy(e){if(fe&6)throw Error(O(327));sa();var t=Ud(e,0);if(!(t&1))return gn(e,qe()),null;var n=lf(e,t);if(e.tag!==0&&n===2){var r=am(e);r!==0&&(t=r,n=Om(e,r))}if(n===1)throw n=_u,Vs(e,0),Oi(e,t),gn(e,qe()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ps(e,dn,ti),gn(e,qe()),null}function Ag(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(wa=qe()+500,Wf&&ps())}}function ro(e){Ii!==null&&Ii.tag===0&&!(fe&6)&&sa();var t=fe;fe|=1;var n=er.transition,r=ye;try{if(er.transition=null,ye=1,e)return e()}finally{ye=r,er.transition=n,fe=t,!(fe&6)&&ps()}}function Dg(){Pn=Wo.current,Pe(Wo)}function Vs(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,UT(n)),st!==null)for(n=st.return;n!==null;){var r=n;switch(hg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xd();break;case 3:ya(),Pe(pn),Pe(Yt),_g();break;case 5:bg(r);break;case 4:ya();break;case 13:Pe(Ne);break;case 19:Pe(Ne);break;case 10:vg(r.type._context);break;case 22:case 23:Dg()}n=n.return}if(bt=e,st=e=Ji(e.current,null),Et=Pn=t,ft=0,_u=null,Rg=Xf=no=0,dn=Il=null,Ns!==null){for(t=0;t<Ns.length;t++)if(n=Ns[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ns=null}return e}function x5(e,t){do{var n=st;try{if(gg(),fd.current=rf,nf){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nf=!1}if(to=0,yt=ct=Le=null,Ol=!1,xu=0,Eg.current=null,n===null||n.return===null){ft=1,_u=t,st=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Et,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=oy(o);if(p!==null){p.flags&=-257,ay(p,o,a,s,t),p.mode&1&&sy(s,u,t),t=p,l=u;var y=t.updateQueue;if(y===null){var g=new Set;g.add(l),t.updateQueue=g}else y.add(l);break e}else{if(!(t&1)){sy(s,u,t),Ng();break e}l=Error(O(426))}}else if(Re&&a.mode&1){var w=oy(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ay(w,o,a,s,t),pg(xa(l,a));break e}}s=l=xa(l,a),ft!==4&&(ft=2),Il===null?Il=[s]:Il.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=n5(s,l,t);Jv(s,m);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Qi===null||!Qi.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=r5(s,a,t);Jv(s,_);break e}}s=s.return}while(s!==null)}_5(n)}catch(S){t=S,st===n&&n!==null&&(st=n=n.return);continue}break}while(!0)}function w5(){var e=sf.current;return sf.current=rf,e===null?rf:e}function Ng(){(ft===0||ft===3||ft===2)&&(ft=4),bt===null||!(no&268435455)&&!(Xf&268435455)||Oi(bt,Et)}function lf(e,t){var n=fe;fe|=2;var r=w5();(bt!==e||Et!==t)&&(ti=null,Vs(e,t));do try{pP();break}catch(i){x5(e,i)}while(!0);if(gg(),fe=n,sf.current=r,st!==null)throw Error(O(261));return bt=null,Et=0,ft}function pP(){for(;st!==null;)b5(st)}function mP(){for(;st!==null&&!$C();)b5(st)}function b5(e){var t=k5(e.alternate,e,Pn);e.memoizedProps=e.pendingProps,t===null?_5(e):st=t,Eg.current=null}function _5(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lP(n,t),n!==null){n.flags&=32767,st=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ft=6,st=null;return}}else if(n=aP(n,t,Pn),n!==null){st=n;return}if(t=t.sibling,t!==null){st=t;return}st=t=e}while(t!==null);ft===0&&(ft=5)}function Ps(e,t,n){var r=ye,i=er.transition;try{er.transition=null,ye=1,gP(e,t,n,r)}finally{er.transition=i,ye=r}return null}function gP(e,t,n,r){do sa();while(Ii!==null);if(fe&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(qC(e,s),e===bt&&(st=bt=null,Et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nc||(Nc=!0,C5(Bd,function(){return sa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=er.transition,er.transition=null;var o=ye;ye=1;var a=fe;fe|=4,Eg.current=null,cP(e,n),g5(n,e),zT(hm),Wd=!!fm,hm=fm=null,e.current=n,dP(n),VC(),fe=a,ye=o,er.transition=s}else e.current=n;if(Nc&&(Nc=!1,Ii=e,af=i),s=e.pendingLanes,s===0&&(Qi=null),WC(n.stateNode),gn(e,qe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(of)throw of=!1,e=Dm,Dm=null,e;return af&1&&e.tag!==0&&sa(),s=e.pendingLanes,s&1?e===Nm?Ll++:(Ll=0,Nm=e):Ll=0,ps(),null}function sa(){if(Ii!==null){var e=n_(af),t=er.transition,n=ye;try{if(er.transition=null,ye=16>e?16:e,Ii===null)var r=!1;else{if(e=Ii,Ii=null,af=0,fe&6)throw Error(O(331));var i=fe;for(fe|=4,V=e.current;V!==null;){var s=V,o=s.child;if(V.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(V=u;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:zl(8,c,s)}var f=c.child;if(f!==null)f.return=c,V=f;else for(;V!==null;){c=V;var h=c.sibling,p=c.return;if(h5(c),c===u){V=null;break}if(h!==null){h.return=p,V=h;break}V=p}}}var y=s.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}V=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zl(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,V=m;break e}V=s.return}}var v=e.current;for(V=v;V!==null;){o=V;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,V=x;else e:for(o=v;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gf(9,a)}}catch(S){Be(a,a.return,S)}if(a===o){V=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,V=_;break e}V=a.return}}if(fe=i,ps(),Vr&&typeof Vr.onPostCommitFiberRoot=="function")try{Vr.onPostCommitFiberRoot(Ff,e)}catch{}r=!0}return r}finally{ye=n,er.transition=t}}return!1}function wy(e,t,n){t=xa(n,t),t=n5(e,t,1),e=qi(e,t,1),t=rn(),e!==null&&(tc(e,1,t),gn(e,t))}function Be(e,t,n){if(e.tag===3)wy(e,e,n);else for(;t!==null;){if(t.tag===3){wy(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qi===null||!Qi.has(r))){e=xa(n,e),e=r5(t,e,1),t=qi(t,e,1),e=rn(),t!==null&&(tc(t,1,e),gn(t,e));break}}t=t.return}}function vP(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=rn(),e.pingedLanes|=e.suspendedLanes&n,bt===e&&(Et&n)===n&&(ft===4||ft===3&&(Et&130023424)===Et&&500>qe()-Mg?Vs(e,0):Rg|=n),gn(e,t)}function S5(e,t){t===0&&(e.mode&1?(t=kc,kc<<=1,!(kc&130023424)&&(kc=4194304)):t=1);var n=rn();e=mi(e,t),e!==null&&(tc(e,t,n),gn(e,n))}function yP(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),S5(e,n)}function xP(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),S5(e,n)}var k5;k5=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pn.current)fn=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fn=!1,oP(e,t,n);fn=!!(e.flags&131072)}else fn=!1,Re&&t.flags&1048576&&j_(t,Qd,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pd(e,t),e=t.pendingProps;var i=ma(t,Yt.current);ia(t,n),i=kg(null,t,r,e,i,n);var s=Cg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,mn(r)?(s=!0,Kd(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xg(t),i.updater=Yf,t.stateNode=i,i._reactInternals=t,_m(t,r,e,n),t=Cm(null,t,r,!0,s,n)):(t.tag=0,Re&&s&&fg(t),qt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pd(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=bP(r),e=mr(r,e),i){case 0:t=km(null,t,r,e,n);break e;case 1:t=cy(null,t,r,e,n);break e;case 11:t=ly(null,t,r,e,n);break e;case 14:t=uy(null,t,r,mr(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mr(r,i),km(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mr(r,i),cy(e,t,r,i,n);case 3:e:{if(a5(t),e===null)throw Error(O(387));r=t.pendingProps,s=t.memoizedState,i=s.element,N_(e,t),ef(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=xa(Error(O(423)),t),t=dy(e,t,r,n,i);break e}else if(r!==i){i=xa(Error(O(424)),t),t=dy(e,t,r,n,i);break e}else for(An=Ki(t.stateNode.containerInfo.firstChild),On=t,Re=!0,vr=null,n=A_(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ga(),r===i){t=gi(e,t,n);break e}qt(e,t,r,n)}t=t.child}return t;case 5:return O_(t),e===null&&xm(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,pm(r,i)?o=null:s!==null&&pm(r,s)&&(t.flags|=32),o5(e,t),qt(e,t,o,n),t.child;case 6:return e===null&&xm(t),null;case 13:return l5(e,t,n);case 4:return wg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=va(t,null,r,n):qt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mr(r,i),ly(e,t,r,i,n);case 7:return qt(e,t,t.pendingProps,n),t.child;case 8:return qt(e,t,t.pendingProps.children,n),t.child;case 12:return qt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,_e(Zd,r._currentValue),r._currentValue=o,s!==null)if(kr(s.value,o)){if(s.children===i.children&&!pn.current){t=gi(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wm(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wm(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ia(t,n),i=rr(i),r=r(i),t.flags|=1,qt(e,t,r,n),t.child;case 14:return r=t.type,i=mr(r,t.pendingProps),i=mr(r.type,i),uy(e,t,r,i,n);case 15:return i5(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mr(r,i),pd(e,t),t.tag=1,mn(r)?(e=!0,Kd(t)):e=!1,ia(t,n),t5(t,r,i),_m(t,r,i,n),Cm(null,t,r,!0,e,n);case 19:return u5(e,t,n);case 22:return s5(e,t,n)}throw Error(O(156,t.tag))};function C5(e,t){return Zb(e,t)}function wP(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,t,n,r){return new wP(e,t,n,r)}function Og(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bP(e){if(typeof e=="function")return Og(e)?1:0;if(e!=null){if(e=e.$$typeof,e===eg)return 11;if(e===tg)return 14}return 2}function Ji(e,t){var n=e.alternate;return n===null?(n=Zn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vd(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Og(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case No:return Bs(n.children,i,s,t);case J0:o=8,i|=8;break;case Yp:return e=Zn(12,n,t,i|2),e.elementType=Yp,e.lanes=s,e;case Gp:return e=Zn(13,n,t,i),e.elementType=Gp,e.lanes=s,e;case Xp:return e=Zn(19,n,t,i),e.elementType=Xp,e.lanes=s,e;case Ob:return Kf(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Db:o=10;break e;case Nb:o=9;break e;case eg:o=11;break e;case tg:o=14;break e;case Ai:o=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=Zn(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Bs(e,t,n,r){return e=Zn(7,e,r,t),e.lanes=n,e}function Kf(e,t,n,r){return e=Zn(22,e,r,t),e.elementType=Ob,e.lanes=n,e.stateNode={isHidden:!1},e}function Kh(e,t,n){return e=Zn(6,e,null,t),e.lanes=n,e}function qh(e,t,n){return t=Zn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _P(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rh(0),this.expirationTimes=Rh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zg(e,t,n,r,i,s,o,a,l){return e=new _P(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Zn(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xg(s),e}function SP(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Do,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function T5(e){if(!e)return os;e=e._reactInternals;e:{if(fo(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(mn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(mn(n))return T_(e,n,t)}return t}function P5(e,t,n,r,i,s,o,a,l){return e=zg(n,r,!0,e,i,s,o,a,l),e.context=T5(null),n=e.current,r=rn(),i=Zi(n),s=di(r,i),s.callback=t??null,qi(n,s,i),e.current.lanes=i,tc(e,i,r),gn(e,r),e}function qf(e,t,n,r){var i=t.current,s=rn(),o=Zi(i);return n=T5(n),t.context===null?t.context=n:t.pendingContext=n,t=di(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qi(i,t,o),e!==null&&(_r(e,i,o,s),dd(e,i,o)),o}function uf(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function by(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ig(e,t){by(e,t),(e=e.alternate)&&by(e,t)}function kP(){return null}var j5=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lg(e){this._internalRoot=e}Qf.prototype.render=Lg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));qf(e,t,null,null)};Qf.prototype.unmount=Lg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ro(function(){qf(null,e,null,null)}),t[pi]=null}};function Qf(e){this._internalRoot=e}Qf.prototype.unstable_scheduleHydration=function(e){if(e){var t=s_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ni.length&&t!==0&&t<Ni[n].priority;n++);Ni.splice(n,0,e),n===0&&a_(e)}};function Fg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _y(){}function CP(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=uf(o);s.call(u)}}var o=P5(t,r,e,0,null,!1,!1,"",_y);return e._reactRootContainer=o,e[pi]=o.current,pu(e.nodeType===8?e.parentNode:e),ro(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=uf(l);a.call(u)}}var l=zg(e,0,!1,null,null,!1,!1,"",_y);return e._reactRootContainer=l,e[pi]=l.current,pu(e.nodeType===8?e.parentNode:e),ro(function(){qf(t,l,n,r)}),l}function Jf(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=uf(o);a.call(l)}}qf(t,o,e,i)}else o=CP(n,t,e,i,r);return uf(o)}r_=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vl(t.pendingLanes);n!==0&&(ig(t,n|1),gn(t,qe()),!(fe&6)&&(wa=qe()+500,ps()))}break;case 13:ro(function(){var r=mi(e,1);if(r!==null){var i=rn();_r(r,e,1,i)}}),Ig(e,1)}};sg=function(e){if(e.tag===13){var t=mi(e,134217728);if(t!==null){var n=rn();_r(t,e,134217728,n)}Ig(e,134217728)}};i_=function(e){if(e.tag===13){var t=Zi(e),n=mi(e,t);if(n!==null){var r=rn();_r(n,e,t,r)}Ig(e,t)}};s_=function(){return ye};o_=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};im=function(e,t,n){switch(t){case"input":if(Qp(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Uf(r);if(!i)throw Error(O(90));Ib(r),Qp(r,i)}}}break;case"textarea":Fb(e,n);break;case"select":t=n.value,t!=null&&ea(e,!!n.multiple,t,!1)}};Yb=Ag;Gb=ro;var TP={usingClientEntryPoint:!1,Events:[rc,Lo,Uf,Wb,Hb,Ag]},sl={findFiberByHostInstance:Ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PP={bundleType:sl.bundleType,version:sl.version,rendererPackageName:sl.rendererPackageName,rendererConfig:sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qb(e),e===null?null:e.stateNode},findFiberByHostInstance:sl.findFiberByHostInstance||kP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{Ff=Oc.inject(PP),Vr=Oc}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TP;Fn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fg(t))throw Error(O(200));return SP(e,t,null,n)};Fn.createRoot=function(e,t){if(!Fg(e))throw Error(O(299));var n=!1,r="",i=j5;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zg(e,1,!1,null,null,n,!1,r,i),e[pi]=t.current,pu(e.nodeType===8?e.parentNode:e),new Lg(t)};Fn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=qb(t),e=e===null?null:e.stateNode,e};Fn.flushSync=function(e){return ro(e)};Fn.hydrate=function(e,t,n){if(!Zf(t))throw Error(O(200));return Jf(null,e,t,!0,n)};Fn.hydrateRoot=function(e,t,n){if(!Fg(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=j5;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=P5(t,null,e,1,n??null,i,!1,s,o),e[pi]=t.current,pu(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qf(t)};Fn.render=function(e,t,n){if(!Zf(t))throw Error(O(200));return Jf(null,e,t,!1,n)};Fn.unmountComponentAtNode=function(e){if(!Zf(e))throw Error(O(40));return e._reactRootContainer?(ro(function(){Jf(null,null,e,!1,function(){e._reactRootContainer=null,e[pi]=null})}),!0):!1};Fn.unstable_batchedUpdates=Ag;Fn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zf(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Jf(e,t,n,!1,r)};Fn.version="18.3.1-next-f1338f8080-20240426";function E5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E5)}catch(e){console.error(e)}}E5(),Eb.exports=Fn;var R5=Eb.exports,Sy=R5;Sy.createRoot,Sy.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Su(){return Su=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Su.apply(this,arguments)}var Li;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Li||(Li={}));const ky="popstate";function jP(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Im("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:cf(i)}return RP(t,n,null,e)}function ot(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function M5(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function EP(){return Math.random().toString(36).substr(2,8)}function Cy(e,t){return{usr:e.state,key:e.key,idx:t}}function Im(e,t,n,r){return n===void 0&&(n=null),Su({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?La(t):t,{state:n,key:t&&t.key||r||EP()})}function cf(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function La(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function RP(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Li.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Su({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Li.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:g.location,delta:m})}function h(w,m){a=Li.Push;let v=Im(g.location,w,m);u=c()+1;let x=Cy(v,u),_=g.createHref(v);try{o.pushState(x,"",_)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(_)}s&&l&&l({action:a,location:g.location,delta:1})}function p(w,m){a=Li.Replace;let v=Im(g.location,w,m);u=c();let x=Cy(v,u),_=g.createHref(v);o.replaceState(x,"",_),s&&l&&l({action:a,location:g.location,delta:0})}function y(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof w=="string"?w:cf(w);return v=v.replace(/ $/,"%20"),ot(m,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,m)}let g={get action(){return a},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ky,f),l=w,()=>{i.removeEventListener(ky,f),l=null}},createHref(w){return t(i,w)},createURL:y,encodeLocation(w){let m=y(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:p,go(w){return o.go(w)}};return g}var Ty;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ty||(Ty={}));function MP(e,t,n){return n===void 0&&(n="/"),AP(e,t,n)}function AP(e,t,n,r){let i=typeof t=="string"?La(t):t,s=$g(i.pathname||"/",n);if(s==null)return null;let o=A5(e);DP(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=HP(s);a=BP(o[l],u)}return a}function A5(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ot(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=es([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ot(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),A5(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:$P(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of D5(s.path))i(s,o,l)}),t}function D5(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=D5(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function DP(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:VP(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const NP=/^:[\w-]+$/,OP=3,zP=2,IP=1,LP=10,FP=-2,Py=e=>e==="*";function $P(e,t){let n=e.split("/"),r=n.length;return n.some(Py)&&(r+=FP),t&&(r+=zP),n.filter(i=>!Py(i)).reduce((i,s)=>i+(NP.test(s)?OP:s===""?IP:LP),r)}function VP(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function BP(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=s==="/"?t:t.slice(s.length)||"/",f=UP({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:es([s,f.pathname]),pathnameBase:KP(es([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=es([s,f.pathnameBase]))}return o}function UP(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=WP(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:h,isOptional:p}=c;if(h==="*"){let g=a[f]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const y=a[f];return p&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function WP(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),M5(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function HP(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return M5(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $g(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function YP(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?La(e):e;return{pathname:n?n.startsWith("/")?n:GP(n,t):t,search:qP(r),hash:QP(i)}}function GP(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qh(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function XP(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function N5(e,t){let n=XP(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function O5(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=La(e):(i=Su({},e),ot(!i.pathname||!i.pathname.includes("?"),Qh("?","pathname","search",i)),ot(!i.pathname||!i.pathname.includes("#"),Qh("#","pathname","hash",i)),ot(!i.search||!i.search.includes("#"),Qh("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=YP(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const es=e=>e.join("/").replace(/\/\/+/g,"/"),KP=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,QP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ZP(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const z5=["post","put","patch","delete"];new Set(z5);const JP=["get",...z5];new Set(JP);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ku(){return ku=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ku.apply(this,arguments)}const Vg=C.createContext(null),ej=C.createContext(null),ho=C.createContext(null),eh=C.createContext(null),po=C.createContext({outlet:null,matches:[],isDataRoute:!1}),I5=C.createContext(null);function tj(e,t){let{relative:n}=t===void 0?{}:t;sc()||ot(!1);let{basename:r,navigator:i}=C.useContext(ho),{hash:s,pathname:o,search:a}=F5(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:es([r,o])),i.createHref({pathname:l,search:a,hash:s})}function sc(){return C.useContext(eh)!=null}function oc(){return sc()||ot(!1),C.useContext(eh).location}function L5(e){C.useContext(ho).static||C.useLayoutEffect(e)}function nj(){let{isDataRoute:e}=C.useContext(po);return e?mj():rj()}function rj(){sc()||ot(!1);let e=C.useContext(Vg),{basename:t,future:n,navigator:r}=C.useContext(ho),{matches:i}=C.useContext(po),{pathname:s}=oc(),o=JSON.stringify(N5(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return L5(()=>{a.current=!0}),C.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=O5(u,JSON.parse(o),s,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:es([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,o,s,e])}function F5(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(ho),{matches:i}=C.useContext(po),{pathname:s}=oc(),o=JSON.stringify(N5(i,r.v7_relativeSplatPath));return C.useMemo(()=>O5(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function ij(e,t){return sj(e,t)}function sj(e,t,n,r){sc()||ot(!1);let{navigator:i,static:s}=C.useContext(ho),{matches:o}=C.useContext(po),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=oc(),f;if(t){var h;let m=typeof t=="string"?La(t):t;u==="/"||(h=m.pathname)!=null&&h.startsWith(u)||ot(!1),f=m}else f=c;let p=f.pathname||"/",y=p;if(u!=="/"){let m=u.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=MP(e,{pathname:y}),w=cj(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:es([u,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:es([u,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,r);return t&&w?C.createElement(eh.Provider,{value:{location:ku({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Li.Pop}},w):w}function oj(){let e=pj(),t=ZP(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const aj=C.createElement(oj,null);class lj extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(po.Provider,{value:this.props.routeContext},C.createElement(I5.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uj(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Vg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(po.Provider,{value:t},r)}function cj(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||ot(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:p}=n,y=f.route.loader&&h[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,h)=>{let p,y=!1,g=null,w=null;n&&(p=a&&f.route.id?a[f.route.id]:void 0,g=f.route.errorElement||aj,l&&(u<0&&h===0?(gj("route-fallback"),y=!0,w=null):u===h&&(y=!0,w=f.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,h+1)),v=()=>{let x;return p?x=g:y?x=w:f.route.Component?x=C.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=c,C.createElement(uj,{match:f,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?C.createElement(lj,{location:n.location,revalidation:n.revalidation,component:g,error:p,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()},null)}var $5=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($5||{}),V5=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(V5||{});function dj(e){let t=C.useContext(Vg);return t||ot(!1),t}function fj(e){let t=C.useContext(ej);return t||ot(!1),t}function hj(e){let t=C.useContext(po);return t||ot(!1),t}function B5(e){let t=hj(),n=t.matches[t.matches.length-1];return n.route.id||ot(!1),n.route.id}function pj(){var e;let t=C.useContext(I5),n=fj(),r=B5();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function mj(){let{router:e}=dj($5.UseNavigateStable),t=B5(V5.UseNavigateStable),n=C.useRef(!1);return L5(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ku({fromRouteId:t},s)))},[e,t])}const jy={};function gj(e,t,n){jy[e]||(jy[e]=!0)}function vj(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Mr(e){ot(!1)}function yj(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Li.Pop,navigator:s,static:o=!1,future:a}=e;sc()&&ot(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:s,static:o,future:ku({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=La(r));let{pathname:c="/",search:f="",hash:h="",state:p=null,key:y="default"}=r,g=C.useMemo(()=>{let w=$g(c,l);return w==null?null:{location:{pathname:w,search:f,hash:h,state:p,key:y},navigationType:i}},[l,c,f,h,p,y,i]);return g==null?null:C.createElement(ho.Provider,{value:u},C.createElement(eh.Provider,{children:n,value:g}))}function xj(e){let{children:t,location:n}=e;return ij(Lm(t),n)}new Promise(()=>{});function Lm(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let s=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Lm(r.props.children,s));return}r.type!==Mr&&ot(!1),!r.props.index||!r.props.children||ot(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Lm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fm(){return Fm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fm.apply(this,arguments)}function wj(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function bj(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _j(e,t){return e.button===0&&(!t||t==="_self")&&!bj(e)}const Sj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],kj="6";try{window.__reactRouterVersion=kj}catch{}const Cj="startTransition",Ey=vC[Cj];function Tj(e){let{basename:t,children:n,future:r,window:i}=e,s=C.useRef();s.current==null&&(s.current=jP({window:i,v5Compat:!0}));let o=s.current,[a,l]=C.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=C.useCallback(f=>{u&&Ey?Ey(()=>l(f)):l(f)},[l,u]);return C.useLayoutEffect(()=>o.listen(c),[o,c]),C.useEffect(()=>vj(r),[r]),C.createElement(yj,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Pj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tt=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,viewTransition:f}=t,h=wj(t,Sj),{basename:p}=C.useContext(ho),y,g=!1;if(typeof u=="string"&&jj.test(u)&&(y=u,Pj))try{let x=new URL(window.location.href),_=u.startsWith("//")?new URL(x.protocol+u):new URL(u),S=$g(_.pathname,p);_.origin===x.origin&&S!=null?u=S+_.search+_.hash:g=!0}catch{}let w=tj(u,{relative:i}),m=Ej(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,viewTransition:f});function v(x){r&&r(x),x.defaultPrevented||m(x)}return C.createElement("a",Fm({},h,{href:y||w,onClick:g||s?r:v,ref:n,target:l}))});var Ry;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ry||(Ry={}));var My;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(My||(My={}));function Ej(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,l=nj(),u=oc(),c=F5(e,{relative:o});return C.useCallback(f=>{if(_j(f,n)){f.preventDefault();let h=r!==void 0?r:cf(u)===cf(c);l(e,{replace:h,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,c,r,i,n,e,s,o,a])}const U5=({sparkColor:e="#fff",sparkSize:t=10,sparkRadius:n=15,sparkCount:r=8,duration:i=400,easing:s="ease-out",extraScale:o=1,children:a})=>{const l=C.useRef(null),u=C.useRef([]),c=C.useRef(null);C.useEffect(()=>{const p=l.current;if(!p)return;const y=p.parentElement;if(!y)return;let g;const w=()=>{const{width:x,height:_}=y.getBoundingClientRect();(p.width!==x||p.height!==_)&&(p.width=x,p.height=_)},m=()=>{clearTimeout(g),g=setTimeout(w,100)},v=new ResizeObserver(m);return v.observe(y),w(),()=>{v.disconnect(),clearTimeout(g)}},[]);const f=C.useCallback(p=>{switch(s){case"linear":return p;case"ease-in":return p*p;case"ease-in-out":return p<.5?2*p*p:-1+(4-2*p)*p;default:return p*(2-p)}},[s]);C.useEffect(()=>{const p=l.current;if(!p)return;const y=p.getContext("2d");let g;const w=m=>{c.current||(c.current=m),y.clearRect(0,0,p.width,p.height),u.current=u.current.filter(v=>{const x=m-v.startTime;if(x>=i)return!1;const _=x/i,S=f(_),k=S*n*o,b=t*(1-S),T=v.x+k*Math.cos(v.angle),j=v.y+k*Math.sin(v.angle),R=v.x+(k+b)*Math.cos(v.angle),E=v.y+(k+b)*Math.sin(v.angle);return y.strokeStyle=e,y.lineWidth=2,y.beginPath(),y.moveTo(T,j),y.lineTo(R,E),y.stroke(),!0}),g=requestAnimationFrame(w)};return g=requestAnimationFrame(w),()=>{cancelAnimationFrame(g)}},[e,t,n,r,i,f,o]);const h=p=>{const y=l.current;if(!y)return;const g=y.getBoundingClientRect(),w=p.clientX-g.left,m=p.clientY-g.top,v=performance.now(),x=Array.from({length:r},(_,S)=>({x:w,y:m,angle:2*Math.PI*S/r,startTime:v}));u.current.push(...x)};return d.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},onClick:h,children:[d.jsx("canvas",{ref:l,style:{width:"100%",height:"100%",display:"block",userSelect:"none",position:"absolute",top:0,left:0,pointerEvents:"none"}}),a]})},Bg=()=>d.jsxs("nav",{className:"navbar",children:[d.jsx(Tt,{to:"/",className:"logo",children:"Ocean Guardian"}),d.jsxs("div",{children:[d.jsx(Tt,{to:"/",className:"nav-link",children:"HOME"}),d.jsx(Tt,{to:"/about",className:"nav-link",children:"ABOUT"}),d.jsx(Tt,{to:"/contact",className:"nav-link",children:"CONTACT"})]})]}),Rj=({onClose:e})=>{const t=C.useRef(null),n=C.useRef(null),[r,i]=C.useState([{sender:"bot",text:"Hey there, how can I help you today?"}]),[s,o]=C.useState("");C.useEffect(()=>{t.current.classList.add("open")},[]),C.useEffect(()=>{n.current&&(n.current.scrollTop=n.current.scrollHeight)},[r]);const a=()=>{t.current.classList.remove("open"),setTimeout(e,300)},l=c=>o(c.target.value),u=c=>{c.preventDefault(),s.trim()&&(i(f=>[...f,{sender:"user",text:s}]),o(""),setTimeout(()=>{i(f=>[...f,{sender:"bot",text:"I'm here to help! Tell me more."}])},1e3))};return d.jsxs("div",{ref:t,className:"chatbot-slider",children:[d.jsxs("div",{className:"chat-header",children:[d.jsxs("div",{className:"header-info",children:[d.jsx("svg",{className:"chatbot-logo",viewBox:"0 0 1024 1024",children:d.jsx("path",{d:"M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1..."})}),d.jsx("h2",{className:"logo-text",children:"OceaN-Bot"})]}),d.jsx("button",{className:"close-btn",onClick:a,"aria-label":"Close chat",children:d.jsx("span",{className:"material-symbols-rounded",children:"close"})})]}),d.jsx("div",{ref:n,className:"chat-body",role:"log","aria-live":"polite",children:r.map((c,f)=>d.jsxs("div",{className:`message ${c.sender}-message`,"aria-atomic":"true",children:[c.sender==="bot"&&d.jsx("svg",{className:"bot-avatar",viewBox:"0 0 1024 1024",children:d.jsx("path",{d:"M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1..."})}),d.jsx("div",{className:"message-text",children:c.text})]},f))}),d.jsx("div",{className:"chat-footer",children:d.jsxs("form",{className:"chat-form",onSubmit:u,children:[d.jsx("textarea",{placeholder:"Type your message...",className:"message-input",value:s,onChange:l,required:!0,"aria-label":"Message input"}),d.jsx("div",{className:"chat-controls",children:d.jsx("button",{type:"submit",className:"send-message-btn","aria-label":"Send message",children:d.jsx("span",{className:"material-symbols-rounded",children:"send"})})})]})})]})};var hn=function(){return hn=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},hn.apply(this,arguments)};function Cu(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Ce="-ms-",Fl="-moz-",ge="-webkit-",W5="comm",th="rule",Ug="decl",Mj="@import",H5="@keyframes",Aj="@layer",Y5=Math.abs,Wg=String.fromCharCode,$m=Object.assign;function Dj(e,t){return xt(e,0)^45?(((t<<2^xt(e,0))<<2^xt(e,1))<<2^xt(e,2))<<2^xt(e,3):0}function G5(e){return e.trim()}function ni(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function yd(e,t,n){return e.indexOf(t,n)}function xt(e,t){return e.charCodeAt(t)|0}function ba(e,t,n){return e.slice(t,n)}function zr(e){return e.length}function X5(e){return e.length}function xl(e,t){return t.push(e),e}function Nj(e,t){return e.map(t).join("")}function Ay(e,t){return e.filter(function(n){return!ni(n,t)})}var nh=1,_a=1,K5=0,sr=0,it=0,Fa="";function rh(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:nh,column:_a,length:o,return:"",siblings:a}}function Ei(e,t){return $m(rh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function _o(e){for(;e.root;)e=Ei(e.root,{children:[e]});xl(e,e.siblings)}function Oj(){return it}function zj(){return it=sr>0?xt(Fa,--sr):0,_a--,it===10&&(_a=1,nh--),it}function Sr(){return it=sr<K5?xt(Fa,sr++):0,_a++,it===10&&(_a=1,nh++),it}function Us(){return xt(Fa,sr)}function xd(){return sr}function ih(e,t){return ba(Fa,e,t)}function Vm(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ij(e){return nh=_a=1,K5=zr(Fa=e),sr=0,[]}function Lj(e){return Fa="",e}function Zh(e){return G5(ih(sr-1,Bm(e===91?e+2:e===40?e+1:e)))}function Fj(e){for(;(it=Us())&&it<33;)Sr();return Vm(e)>2||Vm(it)>3?"":" "}function $j(e,t){for(;--t&&Sr()&&!(it<48||it>102||it>57&&it<65||it>70&&it<97););return ih(e,xd()+(t<6&&Us()==32&&Sr()==32))}function Bm(e){for(;Sr();)switch(it){case e:return sr;case 34:case 39:e!==34&&e!==39&&Bm(it);break;case 40:e===41&&Bm(e);break;case 92:Sr();break}return sr}function Vj(e,t){for(;Sr()&&e+it!==57;)if(e+it===84&&Us()===47)break;return"/*"+ih(t,sr-1)+"*"+Wg(e===47?e:Sr())}function Bj(e){for(;!Vm(Us());)Sr();return ih(e,sr)}function Uj(e){return Lj(wd("",null,null,null,[""],e=Ij(e),0,[0],e))}function wd(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,f=o,h=0,p=0,y=0,g=1,w=1,m=1,v=0,x="",_=i,S=s,k=r,b=x;w;)switch(y=v,v=Sr()){case 40:if(y!=108&&xt(b,f-1)==58){yd(b+=ne(Zh(v),"&","&\f"),"&\f",Y5(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:b+=Zh(v);break;case 9:case 10:case 13:case 32:b+=Fj(y);break;case 92:b+=$j(xd()-1,7);continue;case 47:switch(Us()){case 42:case 47:xl(Wj(Vj(Sr(),xd()),t,n,l),l);break;default:b+="/"}break;case 123*g:a[u++]=zr(b)*m;case 125*g:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+c:m==-1&&(b=ne(b,/\f/g,"")),p>0&&zr(b)-f&&xl(p>32?Ny(b+";",r,n,f-1,l):Ny(ne(b," ","")+";",r,n,f-2,l),l);break;case 59:b+=";";default:if(xl(k=Dy(b,t,n,u,c,i,a,x,_=[],S=[],f,s),s),v===123)if(c===0)wd(b,t,k,k,_,s,f,a,S);else switch(h===99&&xt(b,3)===110?100:h){case 100:case 108:case 109:case 115:wd(e,k,k,r&&xl(Dy(e,k,k,0,0,i,a,x,i,_=[],f,S),S),i,S,f,a,r?_:S);break;default:wd(b,k,k,k,[""],S,0,a,S)}}u=c=p=0,g=m=1,x=b="",f=o;break;case 58:f=1+zr(b),p=y;default:if(g<1){if(v==123)--g;else if(v==125&&g++==0&&zj()==125)continue}switch(b+=Wg(v),v*g){case 38:m=c>0?1:(b+="\f",-1);break;case 44:a[u++]=(zr(b)-1)*m,m=1;break;case 64:Us()===45&&(b+=Zh(Sr())),h=Us(),c=f=zr(x=b+=Bj(xd())),v++;break;case 45:y===45&&zr(b)==2&&(g=0)}}return s}function Dy(e,t,n,r,i,s,o,a,l,u,c,f){for(var h=i-1,p=i===0?s:[""],y=X5(p),g=0,w=0,m=0;g<r;++g)for(var v=0,x=ba(e,h+1,h=Y5(w=o[g])),_=e;v<y;++v)(_=G5(w>0?p[v]+" "+x:ne(x,/&\f/g,p[v])))&&(l[m++]=_);return rh(e,t,n,i===0?th:a,l,u,c,f)}function Wj(e,t,n,r){return rh(e,t,n,W5,Wg(Oj()),ba(e,2,-2),0,r)}function Ny(e,t,n,r,i){return rh(e,t,n,Ug,ba(e,0,r),ba(e,r+1,-1),r,i)}function q5(e,t,n){switch(Dj(e,t)){case 5103:return ge+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ge+e+e;case 4789:return Fl+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+e+Fl+e+Ce+e+e;case 5936:switch(xt(e,t+11)){case 114:return ge+e+Ce+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ge+e+Ce+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ge+e+Ce+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ge+e+Ce+e+e;case 6165:return ge+e+Ce+"flex-"+e+e;case 5187:return ge+e+ne(e,/(\w+).+(:[^]+)/,ge+"box-$1$2"+Ce+"flex-$1$2")+e;case 5443:return ge+e+Ce+"flex-item-"+ne(e,/flex-|-self/g,"")+(ni(e,/flex-|baseline/)?"":Ce+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ge+e+Ce+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ge+e+Ce+ne(e,"shrink","negative")+e;case 5292:return ge+e+Ce+ne(e,"basis","preferred-size")+e;case 6060:return ge+"box-"+ne(e,"-grow","")+ge+e+Ce+ne(e,"grow","positive")+e;case 4554:return ge+ne(e,/([^-])(transform)/g,"$1"+ge+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ge+e+e;case 4200:if(!ni(e,/flex-|baseline/))return Ce+"grid-column-align"+ba(e,t)+e;break;case 2592:case 3360:return Ce+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ni(r.props,/grid-\w+-end/)})?~yd(e+(n=n[t].value),"span",0)?e:Ce+ne(e,"-start","")+e+Ce+"grid-row-span:"+(~yd(n,"span",0)?ni(n,/\d+/):+ni(n,/\d+/)-+ni(e,/\d+/))+";":Ce+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ni(r.props,/grid-\w+-start/)})?e:Ce+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ge+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zr(e)-1-t>6)switch(xt(e,t+1)){case 109:if(xt(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+Fl+(xt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~yd(e,"stretch",0)?q5(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return Ce+i+":"+s+u+(o?Ce+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(xt(e,t+6)===121)return ne(e,":",":"+ge)+e;break;case 6444:switch(xt(e,xt(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ge+(xt(e,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+Ce+"$2box$3")+e;case 100:return ne(e,":",":"+Ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function df(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Hj(e,t,n,r){switch(e.type){case Aj:if(e.children.length)break;case Mj:case Ug:return e.return=e.return||e.value;case W5:return"";case H5:return e.return=e.value+"{"+df(e.children,r)+"}";case th:if(!zr(e.value=e.props.join(",")))return""}return zr(n=df(e.children,r))?e.return=e.value+"{"+n+"}":""}function Yj(e){var t=X5(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function Gj(e){return function(t){t.root||(t=t.return)&&e(t)}}function Xj(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ug:e.return=q5(e.value,e.length,n);return;case H5:return df([Ei(e,{value:ne(e.value,"@","@"+ge)})],r);case th:if(e.length)return Nj(n=e.props,function(i){switch(ni(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_o(Ei(e,{props:[ne(i,/:(read-\w+)/,":"+Fl+"$1")]})),_o(Ei(e,{props:[i]})),$m(e,{props:Ay(n,r)});break;case"::placeholder":_o(Ei(e,{props:[ne(i,/:(plac\w+)/,":"+ge+"input-$1")]})),_o(Ei(e,{props:[ne(i,/:(plac\w+)/,":"+Fl+"$1")]})),_o(Ei(e,{props:[ne(i,/:(plac\w+)/,Ce+"input-$1")]})),_o(Ei(e,{props:[i]})),$m(e,{props:Ay(n,r)});break}return""})}}var Kj={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cn={},Sa=typeof process<"u"&&Cn!==void 0&&(Cn.REACT_APP_SC_ATTR||Cn.SC_ATTR)||"data-styled",Q5="active",Z5="data-styled-version",sh="6.1.8",Hg=`/*!sc*/
`,Yg=typeof window<"u"&&"HTMLElement"in window,qj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==""?Cn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Cn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.SC_DISABLE_SPEEDY!==void 0&&Cn.SC_DISABLE_SPEEDY!==""&&Cn.SC_DISABLE_SPEEDY!=="false"&&Cn.SC_DISABLE_SPEEDY),oh=Object.freeze([]),ka=Object.freeze({});function Qj(e,t,n){return n===void 0&&(n=ka),e.theme!==n.theme&&e.theme||t||n.theme}var J5=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Zj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jj=/(^-|-$)/g;function Oy(e){return e.replace(Zj,"-").replace(Jj,"")}var e4=/(a)(d)/gi,zc=52,zy=function(e){return String.fromCharCode(e+(e>25?39:97))};function Um(e){var t,n="";for(t=Math.abs(e);t>zc;t=t/zc|0)n=zy(t%zc)+n;return(zy(t%zc)+n).replace(e4,"$1-$2")}var Jh,e2=5381,Ho=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},t2=function(e){return Ho(e2,e)};function n2(e){return Um(t2(e)>>>0)}function t4(e){return e.displayName||e.name||"Component"}function ep(e){return typeof e=="string"&&!0}var r2=typeof Symbol=="function"&&Symbol.for,i2=r2?Symbol.for("react.memo"):60115,n4=r2?Symbol.for("react.forward_ref"):60112,r4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s4=((Jh={})[n4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jh[i2]=s2,Jh);function Iy(e){return("type"in(t=e)&&t.type.$$typeof)===i2?s2:"$$typeof"in e?s4[e.$$typeof]:r4;var t}var o4=Object.defineProperty,a4=Object.getOwnPropertyNames,Ly=Object.getOwnPropertySymbols,l4=Object.getOwnPropertyDescriptor,u4=Object.getPrototypeOf,Fy=Object.prototype;function o2(e,t,n){if(typeof t!="string"){if(Fy){var r=u4(t);r&&r!==Fy&&o2(e,r,n)}var i=a4(t);Ly&&(i=i.concat(Ly(t)));for(var s=Iy(e),o=Iy(t),a=0;a<i.length;++a){var l=i[a];if(!(l in i4||n&&n[l]||o&&l in o||s&&l in s)){var u=l4(t,l);try{o4(e,l,u)}catch{}}}}return e}function Ca(e){return typeof e=="function"}function Gg(e){return typeof e=="object"&&"styledComponentId"in e}function zs(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wm(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Tu(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Hm(e,t,n){if(n===void 0&&(n=!1),!n&&!Tu(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Hm(e[r],t[r]);else if(Tu(t))for(var r in t)e[r]=Hm(e[r],t[r]);return e}function Xg(e,t){Object.defineProperty(e,"toString",{value:t})}function ac(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var c4=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw ac(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Hg);return n},e}(),bd=new Map,ff=new Map,_d=1,Ic=function(e){if(bd.has(e))return bd.get(e);for(;ff.has(_d);)_d++;var t=_d++;return bd.set(e,t),ff.set(t,e),t},d4=function(e,t){_d=t+1,bd.set(e,t),ff.set(t,e)},f4="style[".concat(Sa,"][").concat(Z5,'="').concat(sh,'"]'),h4=new RegExp("^".concat(Sa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),p4=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},m4=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Hg),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(h4);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(d4(c,u),p4(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function g4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var a2=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Sa,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Sa,Q5),r.setAttribute(Z5,sh);var o=g4();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},v4=function(){function e(t){this.element=a2(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ac(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),y4=function(){function e(t){this.element=a2(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),x4=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),$y=Yg,w4={isServer:!Yg,useCSSOMInjection:!qj},l2=function(){function e(t,n,r){t===void 0&&(t=ka),n===void 0&&(n={});var i=this;this.options=hn(hn({},w4),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Yg&&$y&&($y=!1,function(s){for(var o=document.querySelectorAll(f4),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Sa)!==Q5&&(m4(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Xg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(f){var h=function(m){return ff.get(m)}(f);if(h===void 0)return"continue";var p=s.names.get(h),y=o.getGroup(f);if(p===void 0||y.length===0)return"continue";var g="".concat(Sa,".g").concat(f,'[id="').concat(h,'"]'),w="";p!==void 0&&p.forEach(function(m){m.length>0&&(w+="".concat(m,","))}),l+="".concat(y).concat(g,'{content:"').concat(w,'"}').concat(Hg)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Ic(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(hn(hn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new x4(i):r?new v4(i):new y4(i)}(this.options),new c4(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ic(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ic(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ic(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),b4=/&/g,_4=/^\s*\/\/.*$/gm;function u2(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=u2(n.children,t)),n})}function S4(e){var t,n,r,i=ka,s=i.options,o=s===void 0?ka:s,a=i.plugins,l=a===void 0?oh:a,u=function(h,p,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},c=l.slice();c.push(function(h){h.type===th&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(b4,n).replace(r,u))}),o.prefix&&c.push(Xj),c.push(Hj);var f=function(h,p,y,g){p===void 0&&(p=""),y===void 0&&(y=""),g===void 0&&(g="&"),t=g,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var w=h.replace(_4,""),m=Uj(y||p?"".concat(y," ").concat(p," { ").concat(w," }"):w);o.namespace&&(m=u2(m,o.namespace));var v=[];return df(m,Yj(c.concat(Gj(function(x){return v.push(x)})))),v};return f.hash=l.length?l.reduce(function(h,p){return p.name||ac(15),Ho(h,p.name)},e2).toString():"",f}var k4=new l2,Ym=S4(),c2=Ut.createContext({shouldForwardProp:void 0,styleSheet:k4,stylis:Ym});c2.Consumer;Ut.createContext(void 0);function Vy(){return C.useContext(c2)}var d2=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ym);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Xg(this,function(){throw ac(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ym),this.name+t.hash},e}(),C4=function(e){return e>="A"&&e<="Z"};function By(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;C4(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var f2=function(e){return e==null||e===!1||e===""},h2=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!f2(s)&&(Array.isArray(s)&&s.isCss||Ca(s)?r.push("".concat(By(i),":"),s,";"):Tu(s)?r.push.apply(r,Cu(Cu(["".concat(i," {")],h2(s),!1),["}"],!1)):r.push("".concat(By(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Kj||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ws(e,t,n,r){if(f2(e))return[];if(Gg(e))return[".".concat(e.styledComponentId)];if(Ca(e)){if(!Ca(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Ws(i,t,n,r)}var s;return e instanceof d2?n?(e.inject(n,r),[e.getName(r)]):[e]:Tu(e)?h2(e):Array.isArray(e)?Array.prototype.concat.apply(oh,e.map(function(o){return Ws(o,t,n,r)})):[e.toString()]}function T4(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ca(n)&&!Gg(n))return!1}return!0}var P4=t2(sh),j4=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&T4(t),this.componentId=n,this.baseHash=Ho(P4,n),this.baseStyle=r,l2.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=zs(i,this.staticRulesId);else{var s=Wm(Ws(this.rules,t,n,r)),o=Um(Ho(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=zs(i,o),this.staticRulesId=o}else{for(var l=Ho(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var h=Wm(Ws(f,t,n,r));l=Ho(l,h+c),u+=h}}if(u){var p=Um(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=zs(i,p)}}return i},e}(),p2=Ut.createContext(void 0);p2.Consumer;var tp={};function E4(e,t,n){var r=Gg(e),i=e,s=!ep(e),o=t.attrs,a=o===void 0?oh:o,l=t.componentId,u=l===void 0?function(_,S){var k=typeof _!="string"?"sc":Oy(_);tp[k]=(tp[k]||0)+1;var b="".concat(k,"-").concat(n2(sh+k+tp[k]));return S?"".concat(S,"-").concat(b):b}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(_){return ep(_)?"styled.".concat(_):"Styled(".concat(t4(_),")")}(e):c,h=t.displayName&&t.componentId?"".concat(Oy(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;y=function(_,S){return g(_,S)&&w(_,S)}}else y=g}var m=new j4(n,h,r?i.componentStyle:void 0);function v(_,S){return function(k,b,T){var j=k.attrs,R=k.componentStyle,E=k.defaultProps,N=k.foldedComponentIds,$=k.styledComponentId,B=k.target,X=Ut.useContext(p2),K=Vy(),F=k.shouldForwardProp||K.shouldForwardProp,D=Qj(b,X,E)||ka,I=function(be,ve,me){for(var We,je=hn(hn({},ve),{className:void 0,theme:me}),Vn=0;Vn<be.length;Vn+=1){var Ze=Ca(We=be[Vn])?We(je):We;for(var Je in Ze)je[Je]=Je==="className"?zs(je[Je],Ze[Je]):Je==="style"?hn(hn({},je[Je]),Ze[Je]):Ze[Je]}return ve.className&&(je.className=zs(je.className,ve.className)),je}(j,b,D),P=I.as||B,W={};for(var Q in I)I[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&I.theme===D||(Q==="forwardedAs"?W.as=I.forwardedAs:F&&!F(Q,P)||(W[Q]=I[Q]));var at=function(be,ve){var me=Vy(),We=be.generateAndInjectStyles(ve,me.styleSheet,me.stylis);return We}(R,I),de=zs(N,$);return at&&(de+=" "+at),I.className&&(de+=" "+I.className),W[ep(P)&&!J5.has(P)?"class":"className"]=de,W.ref=T,C.createElement(P,W)}(x,_,S)}v.displayName=f;var x=Ut.forwardRef(v);return x.attrs=p,x.componentStyle=m,x.displayName=f,x.shouldForwardProp=y,x.foldedComponentIds=r?zs(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=h,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=r?function(S){for(var k=[],b=1;b<arguments.length;b++)k[b-1]=arguments[b];for(var T=0,j=k;T<j.length;T++)Hm(S,j[T],!0);return S}({},i.defaultProps,_):_}}),Xg(x,function(){return".".concat(x.styledComponentId)}),s&&o2(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Uy(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Wy=function(e){return Object.assign(e,{isCss:!0})};function m2(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ca(e)||Tu(e))return Wy(Ws(Uy(oh,Cu([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Ws(r):Wy(Ws(Uy(r,t)))}function Gm(e,t,n){if(n===void 0&&(n=ka),!t)throw ac(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,m2.apply(void 0,Cu([i],s,!1)))};return r.attrs=function(i){return Gm(e,t,hn(hn({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Gm(e,t,hn(hn({},n),i))},r}var g2=function(e){return Gm(E4,e)},M=g2;J5.forEach(function(e){M[e]=g2(e)});function $a(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Wm(m2.apply(void 0,Cu([e],t,!1))),i=n2(r);return new d2(i,r)}const R4=M.div`
  text-align: center;
  padding: 20px;
  font-family: "Raleway", sans-serif;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`,M4=M.div`
  width: 100%;
  height: 400px;
  margin: 20px auto;
  position: relative;
  border: 5px solid #024873;
  background-image: url("/asset/oceanbg.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
  pointer-events: auto;
`,A4=M.img`
  width: 60px;
  height: auto;
  position: absolute;
  animation: swimLeftToRight infinite linear;
  top: ${e=>e.top}px;
  left: 0;
  animation-duration: ${e=>e.duration}s;
  z-index: 2;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.4));
  object-fit: contain;
`,D4=M.img`
  width: 45px;
  height: auto;
  position: absolute;
  cursor: grab;
  animation: swimLeftToRight infinite linear;
  top: ${e=>e.top}px;
  left: 0;
  animation-duration: ${e=>e.duration}s;
  z-index: 3;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.7));
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: element;
  touch-action: none;
  pointer-events: auto;
  
  &:active {
    cursor: grabbing;
  }
  
  &.dragging {
    opacity: 0.6;
    transform: scale(1.1);
    animation: none !important;
  }
`,N4=M.div`
  width: 140px;
  height: 160px;
  margin: 20px auto;
  border: 2px dashed #024873;
  background: url("/asset/bin.png") no-repeat center;
  background-size: 85% auto;
  background-position: center 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &.drag-over {
    border: 2px dashed #02c873;
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.1);
  }

  p {
    font-weight: bold;
    color: #024873;
    margin: 0;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.1rem;
    text-align: center;
  }
`,O4=M.div`
  display: ${e=>e.show?"block":"none"};
  font-size: 24px;
  color: rgb(27, 215, 27);
  margin-top: 20px;
  font-weight: bold;
`,z4=M.div`
  font-size: 24px;
  color: #024873;
  margin-top: 10px;
`,I4=M.div`
  margin-top: 20px;
  font-size: 18px;
  color: #024873;
`,L4=M.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin: 10px 0;
    font-size: 18px;
    color: #024873;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,F4=M.button`
  background-color: green;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`,$4=M.button`
  margin: 20px;
  padding: 10px 20px;
  background-color: #024873;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,V4=`
  @keyframes swimLeftToRight {
    0% { left: 0; }
    100% { left: calc(100% - 45px); }
  }
`,B4=[{src:"/asset/fish01.png",top:60,duration:15},{src:"/asset/fish01.png",top:130,duration:18},{src:"/asset/fish01.png",top:200,duration:12},{src:"/asset/fish01.png",top:270,duration:20},{src:"/asset/fish01.png",top:340,duration:16}],Hy=[{src:"/asset/plastic-bottle.png",top:80,duration:25},{src:"/asset/straw.png",top:150,duration:30},{src:"/asset/can.png",top:230,duration:28},{src:"/asset/plastic-bag.png",top:310,duration:32}],U4=()=>{const[e,t]=C.useState([]),[n,r]=C.useState(0),[i,s]=C.useState(10),[o,a]=C.useState(0),[l,u]=C.useState(""),[c,f]=C.useState(!1),[h,p]=C.useState(!1),y=Ut.useRef(),g=b=>{const T=b.target;T.classList.add("dragging"),T.style.animation="none",b.dataTransfer.effectAllowed="move",b.dataTransfer.setData("text/plain",T.id)},w=b=>{const T=b.target;T.classList.remove("dragging"),T.style.animation=""},m=b=>{b.preventDefault(),b.dataTransfer.dropEffect="move",b.currentTarget.classList.add("drag-over")},v=b=>{b.preventDefault(),b.currentTarget.classList.remove("drag-over")},x=b=>{b.preventDefault(),b.currentTarget.classList.remove("drag-over");const T=document.querySelector(".dragging");T&&(T.remove(),a(j=>{var E;const R=j+1;return R===Hy.length?(clearTimeout(y.current),f(!0),u(`Congratulations ${(E=e[n])==null?void 0:E.name}, you win the Ocean Guardian title!`),k(R)):(f(!0),u(`${R} waste caught! ${R} coins granted!`),setTimeout(()=>f(!1),2e3)),R}))},_=()=>{const b=prompt("Enter player name:");b&&t(T=>[...T,{name:b,score:0}])},S=b=>{r(b),s(10),a(0),p(!0),f(!1)},k=b=>{t(T=>T.map((j,R)=>R===n?{...j,score:b}:j))};return C.useEffect(()=>(h&&i>0&&(y.current=setTimeout(()=>{s(b=>{var T;return b<=1&&(p(!1),f(!0),u(`Time's up! ${(T=e[n])==null?void 0:T.name} collected ${o} trash items.`),k(o)),b-1})},1e3)),()=>clearTimeout(y.current)),[i,h]),d.jsxs(R4,{children:[d.jsx("style",{children:`
          ${V4}
        `}),d.jsx("h1",{children:"Ocean Awareness Campaign"}),d.jsx("h2",{children:"Drag and Trash to the Bin to Save the Ocean"}),d.jsxs(z4,{children:["Time Left: ",h?i:"--","s"]}),d.jsxs(I4,{children:[d.jsx("h3",{children:"Score Board"}),e.map(b=>d.jsxs("p",{children:[b.name,": ",b.score," coins"]},b.name))]}),d.jsxs(M4,{children:[B4.map((b,T)=>d.jsx(A4,{src:b.src,top:b.top,duration:b.duration},`fish-${T}`)),h&&Hy.map((b,T)=>d.jsx(D4,{id:`trash-${T}`,src:b.src,draggable:!0,onDragStart:g,onDragEnd:w,top:b.top,duration:b.duration},`trash-${T}`))]}),d.jsx(N4,{onDragOver:m,onDragLeave:v,onDrop:x,children:d.jsx("p",{children:"Trash"})}),d.jsx(O4,{show:c,children:l}),d.jsxs("div",{children:[d.jsx($4,{onClick:_,children:"Add Player"}),d.jsx(L4,{children:e.map((b,T)=>d.jsxs("li",{children:[b.name,d.jsx(F4,{onClick:()=>S(T),disabled:h,children:"Start Game"})]},b.name))})]})]})},W4=M.footer`
  background: rgba(0, 30, 60, 0.95);
  padding: 1.5rem 0;
  width: 100vw;
  color: white;
  text-align: center;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
  margin-top: auto;

  p {
    margin: 0;
    font-size: 1rem;
    color: #b3e5fc;
  }

  .copyright {
    font-weight: 500;
  }

  .rights {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`,bi=()=>d.jsxs(W4,{children:[d.jsx("p",{className:"copyright",children:"© 2024 Ocean Guardian"}),d.jsx("p",{className:"rights",children:"All Rights Reserved"})]});function ri(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v2(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ta={duration:.5,overwrite:!1,delay:0},Kg,Wt,Me,Ur=1e8,Vt=1/Ur,Xm=Math.PI*2,H4=Xm/4,Y4=0,y2=Math.sqrt,G4=Math.cos,X4=Math.sin,_t=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},vi=function(t){return typeof t=="number"},qg=function(t){return typeof t>"u"},qr=function(t){return typeof t=="object"},vn=function(t){return t!==!1},Qg=function(){return typeof window<"u"},Lc=function(t){return Ue(t)||_t(t)},x2=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ht=Array.isArray,Km=/(?:-?\.?\d|\.)+/gi,w2=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Yo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,np=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,b2=/[+-]=-?[.\d]+/,_2=/[^,'"\[\]\s]+/gi,K4=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Oe,Dr,qm,Zg,Ln={},hf={},S2,k2=function(t){return(hf=io(t,Ln))&&bn},Jg=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Pu=function(t,n){return!n&&console.warn(t)},C2=function(t,n){return t&&(Ln[t]=n)&&hf&&(hf[t]=n)||Ln},ju=function(){return 0},q4={suppressEvents:!0,isStart:!0,kill:!1},Sd={suppressEvents:!0,kill:!1},Q4={suppressEvents:!0},e1={},ts=[],Qm={},T2,En={},rp={},Yy=30,kd=[],t1="",n1=function(t){var n=t[0],r,i;if(qr(n)||Ue(n)||(t=[t]),!(r=(n._gsap||{}).harness)){for(i=kd.length;i--&&!kd[i].targetTest(n););r=kd[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new q2(t[i],r)))||t.splice(i,1);return t},Hs=function(t){return t._gsap||n1(Jn(t))[0]._gsap},P2=function(t,n,r){return(r=t[n])&&Ue(r)?t[n]():qg(r)&&t.getAttribute&&t.getAttribute(n)||r},yn=function(t,n){return(t=t.split(",")).forEach(n)||t},Ke=function(t){return Math.round(t*1e5)/1e5||0},wt=function(t){return Math.round(t*1e7)/1e7||0},oa=function(t,n){var r=n.charAt(0),i=parseFloat(n.substr(2));return t=parseFloat(t),r==="+"?t+i:r==="-"?t-i:r==="*"?t*i:t/i},Z4=function(t,n){for(var r=n.length,i=0;t.indexOf(n[i])<0&&++i<r;);return i<r},pf=function(){var t=ts.length,n=ts.slice(0),r,i;for(Qm={},ts.length=0,r=0;r<t;r++)i=n[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},j2=function(t,n,r,i){ts.length&&!Wt&&pf(),t.render(n,r,Wt&&n<0&&(t._initted||t._startAt)),ts.length&&!Wt&&pf()},E2=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(_2).length<2?n:_t(t)?t.trim():t},R2=function(t){return t},or=function(t,n){for(var r in n)r in t||(t[r]=n[r]);return t},J4=function(t){return function(n,r){for(var i in r)i in n||i==="duration"&&t||i==="ease"||(n[i]=r[i])}},io=function(t,n){for(var r in n)t[r]=n[r];return t},Gy=function e(t,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(t[r]=qr(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},mf=function(t,n){var r={},i;for(i in t)i in n||(r[i]=t[i]);return r},$l=function(t){var n=t.parent||Oe,r=t.keyframes?J4(Ht(t.keyframes)):or;if(vn(t.inherit))for(;n;)r(t,n.vars.defaults),n=n.parent||n._dp;return t},eE=function(t,n){for(var r=t.length,i=r===n.length;i&&r--&&t[r]===n[r];);return r<0},M2=function(t,n,r,i,s){var o=t[i],a;if(s)for(a=n[s];o&&o[s]>a;)o=o._prev;return o?(n._next=o._next,o._next=n):(n._next=t[r],t[r]=n),n._next?n._next._prev=n:t[i]=n,n._prev=o,n.parent=n._dp=t,n},ah=function(t,n,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var s=n._prev,o=n._next;s?s._next=o:t[r]===n&&(t[r]=o),o?o._prev=s:t[i]===n&&(t[i]=s),n._next=n._prev=n.parent=null},as=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ys=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t},tE=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},Zm=function(t,n,r,i){return t._startAt&&(Wt?t._startAt.revert(Sd):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,i))},nE=function e(t){return!t||t._ts&&e(t.parent)},Xy=function(t){return t._repeat?Pa(t._tTime,t=t.duration()+t._rDelay)*t:0},Pa=function(t,n){var r=Math.floor(t/=n);return t&&r===t?r-1:r},gf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},lh=function(t){return t._end=wt(t._start+(t._tDur/Math.abs(t._ts||t._rts||Vt)||0))},uh=function(t,n){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=wt(r._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),lh(t),r._dirty||Ys(r,t)),t},A2=function(t,n){var r;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(r=gf(t.rawTime(),n),(!n._dur||lc(0,n.totalDuration(),r)-n._tTime>Vt)&&n.render(r,!0)),Ys(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;t._zTime=-1e-8}},Lr=function(t,n,r,i){return n.parent&&as(n),n._start=wt((vi(r)?r:r||t!==Oe?Wn(t,r,n):t._time)+n._delay),n._end=wt(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),M2(t,n,"_first","_last",t._sort?"_start":0),Jm(n)||(t._recent=n),i||A2(t,n),t._ts<0&&uh(t,t._tTime),t},D2=function(t,n){return(Ln.ScrollTrigger||Jg("scrollTrigger",n))&&Ln.ScrollTrigger.create(n,t)},N2=function(t,n,r,i,s){if(i1(t,n,s),!t._initted)return 1;if(!r&&t._pt&&!Wt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&T2!==Rn.frame)return ts.push(t),t._lazy=[s,i],1},rE=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Jm=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},iE=function(t,n,r,i){var s=t.ratio,o=n<0||!n&&(!t._start&&rE(t)&&!(!t._initted&&Jm(t))||(t._ts<0||t._dp._ts<0)&&!Jm(t))?0:1,a=t._rDelay,l=0,u,c,f;if(a&&t._repeat&&(l=lc(0,t._tDur,n),c=Pa(l,a),t._yoyo&&c&1&&(o=1-o),c!==Pa(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Wt||i||t._zTime===Vt||!n&&t._zTime){if(!t._initted&&N2(t,n,i,r,l))return;for(f=t._zTime,t._zTime=n||(r?Vt:0),r||(r=n&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,u=t._pt;u;)u.r(o,u.d),u=u._next;n<0&&Zm(t,n,r,!0),t._onUpdate&&!r&&Dn(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Dn(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===o&&(o&&as(t,1),!r&&!Wt&&(Dn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},sE=function(t,n,r){var i;if(r>n)for(i=t._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>n)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<n)return i;i=i._prev}},ja=function(t,n,r,i){var s=t._repeat,o=wt(n)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:wt(o*(s+1)+t._rDelay*s):o,a>0&&!i&&uh(t,t._tTime=t._tDur*a),t.parent&&lh(t),r||Ys(t.parent,t),t},Ky=function(t){return t instanceof Jt?Ys(t):ja(t,t._dur)},oE={_start:0,endTime:ju,totalDuration:ju},Wn=function e(t,n,r){var i=t.labels,s=t._recent||oE,o=t.duration()>=Ur?s.endTime(!1):t._dur,a,l,u;return _t(n)&&(isNaN(n)||n in i)?(l=n.charAt(0),u=n.substr(-1)==="%",a=n.indexOf("="),l==="<"||l===">"?(a>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(a<0?s:r).totalDuration()/100:1)):a<0?(n in i||(i[n]=o),i[n]):(l=parseFloat(n.charAt(a-1)+n.substr(a+1)),u&&r&&(l=l/100*(Ht(r)?r[0]:r).totalDuration()),a>1?e(t,n.substr(0,a-1),r)+l:o+l)):n==null?o:+n},Vl=function(t,n,r){var i=vi(n[1]),s=(i?2:1)+(t<2?0:1),o=n[s],a,l;if(i&&(o.duration=n[1]),o.parent=r,t){for(a=o,l=r;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=vn(l.vars.inherit)&&l.parent;o.immediateRender=vn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=n[s-1]}return new rt(n[0],o,n[s+1])},ms=function(t,n){return t||t===0?n(t):n},lc=function(t,n,r){return r<t?t:r>n?n:r},$t=function(t,n){return!_t(t)||!(n=K4.exec(t))?"":n[1]},aE=function(t,n,r){return ms(r,function(i){return lc(t,n,i)})},e0=[].slice,O2=function(t,n){return t&&qr(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&qr(t[0]))&&!t.nodeType&&t!==Dr},lE=function(t,n,r){return r===void 0&&(r=[]),t.forEach(function(i){var s;return _t(i)&&!n||O2(i,1)?(s=r).push.apply(s,Jn(i)):r.push(i)})||r},Jn=function(t,n,r){return Me&&!n&&Me.selector?Me.selector(t):_t(t)&&!r&&(qm||!Ea())?e0.call((n||Zg).querySelectorAll(t),0):Ht(t)?lE(t,r):O2(t)?e0.call(t,0):t?[t]:[]},t0=function(t){return t=Jn(t)[0]||Pu("Invalid scope")||{},function(n){var r=t.current||t.nativeElement||t;return Jn(n,r.querySelectorAll?r:r===t?Pu("Invalid scope")||Zg.createElement("div"):t)}},z2=function(t){return t.sort(function(){return .5-Math.random()})},I2=function(t){if(Ue(t))return t;var n=qr(t)?t:{each:t},r=Gs(n.ease),i=n.from||0,s=parseFloat(n.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,u=n.axis,c=i,f=i;return _t(i)?c=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(c=i[0],f=i[1]),function(h,p,y){var g=(y||n).length,w=o[g],m,v,x,_,S,k,b,T,j;if(!w){if(j=n.grid==="auto"?0:(n.grid||[1,Ur])[1],!j){for(b=-1e8;b<(b=y[j++].getBoundingClientRect().left)&&j<g;);j<g&&j--}for(w=o[g]=[],m=l?Math.min(j,g)*c-.5:i%j,v=j===Ur?0:l?g*f/j-.5:i/j|0,b=0,T=Ur,k=0;k<g;k++)x=k%j-m,_=v-(k/j|0),w[k]=S=u?Math.abs(u==="y"?_:x):y2(x*x+_*_),S>b&&(b=S),S<T&&(T=S);i==="random"&&z2(w),w.max=b-T,w.min=T,w.v=g=(parseFloat(n.amount)||parseFloat(n.each)*(j>g?g-1:u?u==="y"?g/j:j:Math.max(j,g/j))||0)*(i==="edges"?-1:1),w.b=g<0?s-g:s,w.u=$t(n.amount||n.each)||0,r=r&&g<0?G2(r):r}return g=(w[h]-w.min)/w.max||0,wt(w.b+(r?r(g):g)*w.v)+w.u}},n0=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(r){var i=wt(Math.round(parseFloat(r)/t)*t*n);return(i-i%1)/n+(vi(r)?0:$t(r))}},L2=function(t,n){var r=Ht(t),i,s;return!r&&qr(t)&&(i=r=t.radius||Ur,t.values?(t=Jn(t.values),(s=!vi(t[0]))&&(i*=i)):t=n0(t.increment)),ms(n,r?Ue(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Ur,c=0,f=t.length,h,p;f--;)s?(h=t[f].x-a,p=t[f].y-l,h=h*h+p*p):h=Math.abs(t[f]-a),h<u&&(u=h,c=f);return c=!i||u<=i?t[c]:o,s||c===o||vi(o)?c:c+$t(o)}:n0(t))},F2=function(t,n,r,i){return ms(Ht(t)?!n:r===!0?!!(r=0):!i,function(){return Ht(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(n-t+r*.99))/r)*r*i)/i})},uE=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduce(function(s,o){return o(s)},i)}},cE=function(t,n){return function(r){return t(parseFloat(r))+(n||$t(r))}},dE=function(t,n,r){return V2(t,n,0,1,r)},$2=function(t,n,r){return ms(r,function(i){return t[~~n(i)]})},fE=function e(t,n,r){var i=n-t;return Ht(t)?$2(t,e(0,t.length),n):ms(r,function(s){return(i+(s-t)%i)%i+t})},hE=function e(t,n,r){var i=n-t,s=i*2;return Ht(t)?$2(t,e(0,t.length-1),n):ms(r,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Eu=function(t){for(var n=0,r="",i,s,o,a;~(i=t.indexOf("random(",n));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?_2:Km),r+=t.substr(n,i-n)+F2(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),n=o+1;return r+t.substr(n,t.length-n)},V2=function(t,n,r,i,s){var o=n-t,a=i-r;return ms(s,function(l){return r+((l-t)/o*a||0)})},pE=function e(t,n,r,i){var s=isNaN(t+n)?0:function(p){return(1-p)*t+p*n};if(!s){var o=_t(t),a={},l,u,c,f,h;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(Ht(t)&&!Ht(n)){for(c=[],f=t.length,h=f-2,u=1;u<f;u++)c.push(e(t[u-1],t[u]));f--,s=function(y){y*=f;var g=Math.min(h,~~y);return c[g](y-g)},r=n}else i||(t=io(Ht(t)?[]:{},t));if(!c){for(l in n)r1.call(a,t,l,"get",n[l]);s=function(y){return a1(y,a)||(o?t.p:t)}}}return ms(r,s)},qy=function(t,n,r){var i=t.labels,s=Ur,o,a,l;for(o in i)a=i[o]-n,a<0==!!r&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Dn=function(t,n,r){var i=t.vars,s=i[n],o=Me,a=t._ctx,l,u,c;if(s)return l=i[n+"Params"],u=i.callbackScope||t,r&&ts.length&&pf(),a&&(Me=a),c=l?s.apply(u,l):s.call(u),Me=o,c},wl=function(t){return as(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Wt),t.progress()<1&&Dn(t,"onInterrupt"),t},Go,B2=[],U2=function(t){if(t)if(t=!t.name&&t.default||t,Qg()||t.headless){var n=t.name,r=Ue(t),i=n&&!r&&t.init?function(){this._props=[]}:t,s={init:ju,render:a1,add:r1,kill:RE,modifier:EE,rawVars:0},o={targetTest:0,get:0,getSetter:o1,aliases:{},register:0};if(Ea(),t!==i){if(En[n])return;or(i,or(mf(t,s),o)),io(i.prototype,io(s,mf(t,o))),En[i.prop=n]=i,t.targetTest&&(kd.push(i),e1[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}C2(n,i),t.register&&t.register(bn,i,xn)}else B2.push(t)},we=255,bl={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},ip=function(t,n,r){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(r-n)*t*6:t<.5?r:t*3<2?n+(r-n)*(2/3-t)*6:n)*we+.5|0},W2=function(t,n,r){var i=t?vi(t)?[t>>16,t>>8&we,t&we]:0:bl.black,s,o,a,l,u,c,f,h,p,y;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),bl[t])i=bl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&we,i&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(i=y=t.match(Km),!n)l=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,i.length>3&&(i[3]*=1),i[0]=ip(l+1/3,s,o),i[1]=ip(l,s,o),i[2]=ip(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(w2),r&&i.length<4&&(i[3]=1),i}else i=t.match(Km)||bl.transparent;i=i.map(Number)}return n&&!y&&(s=i[0]/we,o=i[1]/we,a=i[2]/we,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),r&&i.length<4&&(i[3]=1),i},H2=function(t){var n=[],r=[],i=-1;return t.split(ns).forEach(function(s){var o=s.match(Yo)||[];n.push.apply(n,o),r.push(i+=o.length+1)}),n.c=r,n},Qy=function(t,n,r){var i="",s=(t+i).match(ns),o=n?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return t;if(s=s.map(function(h){return(h=W2(h,n,1))&&o+(n?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),r&&(c=H2(t),l=r.c,l.join(i)!==c.c.join(i)))for(u=t.replace(ns,"1").split(Yo),f=u.length-1;a<f;a++)i+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:r).shift());if(!u)for(u=t.split(ns),f=u.length-1;a<f;a++)i+=u[a]+s[a];return i+u[f]},ns=function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in bl)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),mE=/hsl[a]?\(/,Y2=function(t){var n=t.join(" "),r;if(ns.lastIndex=0,ns.test(n))return r=mE.test(n),t[1]=Qy(t[1],r),t[0]=Qy(t[0],r,H2(t[1])),!0},Ru,Rn=function(){var e=Date.now,t=500,n=33,r=e(),i=r,s=1e3/240,o=s,a=[],l,u,c,f,h,p,y=function g(w){var m=e()-i,v=w===!0,x,_,S,k;if((m>t||m<0)&&(r+=m-n),i+=m,S=i-r,x=S-o,(x>0||v)&&(k=++f.frame,h=S-f.time*1e3,f.time=S=S/1e3,o+=x+(x>=s?4:s-x),_=1),v||(l=u(g)),_)for(p=0;p<a.length;p++)a[p](S,h,k,w)};return f={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(w){return h/(1e3/(w||60))},wake:function(){S2&&(!qm&&Qg()&&(Dr=qm=window,Zg=Dr.document||{},Ln.gsap=bn,(Dr.gsapVersions||(Dr.gsapVersions=[])).push(bn.version),k2(hf||Dr.GreenSockGlobals||!Dr.gsap&&Dr||{}),B2.forEach(U2)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(w){return setTimeout(w,o-f.time*1e3+1|0)},Ru=1,y(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ru=0,u=ju},lagSmoothing:function(w,m){t=w||1/0,n=Math.min(m||33,t)},fps:function(w){s=1e3/(w||240),o=f.time*1e3+s},add:function(w,m,v){var x=m?function(_,S,k,b){w(_,S,k,b),f.remove(x)}:w;return f.remove(w),a[v?"unshift":"push"](x),Ea(),x},remove:function(w,m){~(m=a.indexOf(w))&&a.splice(m,1)&&p>=m&&p--},_listeners:a},f}(),Ea=function(){return!Ru&&Rn.wake()},ce={},gE=/^[\d.\-M][\d.\-,\s]/,vE=/["']/g,yE=function(t){for(var n={},r=t.substr(1,t.length-3).split(":"),i=r[0],s=1,o=r.length,a,l,u;s<o;s++)l=r[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),n[i]=isNaN(u)?u.replace(vE,"").trim():+u,i=l.substr(a+1).trim();return n},xE=function(t){var n=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",n);return t.substring(n,~i&&i<r?t.indexOf(")",r+1):r)},wE=function(t){var n=(t+"").split("("),r=ce[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~t.indexOf("{")?[yE(n[1])]:xE(t).split(",").map(E2)):ce._CE&&gE.test(t)?ce._CE("",t):r},G2=function(t){return function(n){return 1-t(1-n)}},X2=function e(t,n){for(var r=t._first,i;r;)r instanceof Jt?e(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?e(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},Gs=function(t,n){return t&&(Ue(t)?t:ce[t]||wE(t))||n},mo=function(t,n,r,i){r===void 0&&(r=function(l){return 1-n(1-l)}),i===void 0&&(i=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:r,easeInOut:i},o;return yn(t,function(a){ce[a]=Ln[a]=s,ce[o=a.toLowerCase()]=r;for(var l in s)ce[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[a+"."+l]=s[l]}),s},K2=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},sp=function e(t,n,r){var i=n>=1?n:1,s=(r||(t?.3:.45))/(n<1?n:1),o=s/Xm*(Math.asin(1/i)||0),a=function(c){return c===1?1:i*Math.pow(2,-10*c)*X4((c-o)*s)+1},l=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:K2(a);return s=Xm/s,l.config=function(u,c){return e(t,u,c)},l},op=function e(t,n){n===void 0&&(n=1.70158);var r=function(o){return o?--o*o*((n+1)*o+n)+1:0},i=t==="out"?r:t==="in"?function(s){return 1-r(1-s)}:K2(r);return i.config=function(s){return e(t,s)},i};yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;mo(e+",Power"+(n-1),t?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;mo("Elastic",sp("in"),sp("out"),sp());(function(e,t){var n=1/t,r=2*n,i=2.5*n,s=function(a){return a<n?e*a*a:a<r?e*Math.pow(a-1.5/t,2)+.75:a<i?e*(a-=2.25/t)*a+.9375:e*Math.pow(a-2.625/t,2)+.984375};mo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);mo("Expo",function(e){return e?Math.pow(2,10*(e-1)):0});mo("Circ",function(e){return-(y2(1-e*e)-1)});mo("Sine",function(e){return e===1?1:-G4(e*H4)+1});mo("Back",op("in"),op("out"),op());ce.SteppedEase=ce.steps=Ln.SteppedEase={config:function(t,n){t===void 0&&(t=1);var r=1/t,i=t+(n?0:1),s=n?1:0,o=1-Vt;return function(a){return((i*lc(0,o,a)|0)+s)*r}}};Ta.ease=ce["quad.out"];yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return t1+=e+","+e+"Params,"});var q2=function(t,n){this.id=Y4++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:P2,this.set=n?n.getSetter:o1},Mu=function(){function e(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,ja(this,+n.duration,1,1),this.data=n.data,Me&&(this._ctx=Me,Me.data.push(this)),Ru||Rn.wake()}var t=e.prototype;return t.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},t.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},t.totalDuration=function(r){return arguments.length?(this._dirty=0,ja(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(r,i){if(Ea(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(uh(this,r),!s._dp||s.parent||A2(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Lr(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Vt||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),j2(this,r,i)),this},t.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+Xy(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},t.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+Xy(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(r,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*s,i):this._repeat?Pa(this._tTime,s)+1:1},t.timeScale=function(r,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var s=this.parent&&this._ts?gf(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(lc(-Math.abs(this._delay),this._tDur,s),i!==!1),lh(this),tE(this)},t.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ea(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vt&&(this._tTime-=Vt)))),this):this._ps},t.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Lr(i,this,r-this._delay),this}return this._start},t.endTime=function(r){return this._start+(vn(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gf(i.rawTime(r),this):this._tTime:this._tTime},t.revert=function(r){r===void 0&&(r=Q4);var i=Wt;return Wt=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Wt=i,this},t.globalTime=function(r){for(var i=this,s=arguments.length?r:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(r):s},t.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,Ky(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,Ky(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},t.seek=function(r,i){return this.totalTime(Wn(this,r),vn(i))},t.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,vn(i))},t.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},t.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var r=this.parent||this._dp,i=this._start,s;return!!(!r||this._ts&&this._initted&&r.isActive()&&(s=r.rawTime(!0))>=i&&s<this.endTime(!0)-Vt)},t.eventCallback=function(r,i,s){var o=this.vars;return arguments.length>1?(i?(o[r]=i,s&&(o[r+"Params"]=s),r==="onUpdate"&&(this._onUpdate=i)):delete o[r],this):o[r]},t.then=function(r){var i=this;return new Promise(function(s){var o=Ue(r)?r:R2,a=function(){var u=i.then;i.then=null,Ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),s(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){wl(this)},e}();or(Mu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Jt=function(e){v2(t,e);function t(r,i){var s;return r===void 0&&(r={}),s=e.call(this,r)||this,s.labels={},s.smoothChildTiming=!!r.smoothChildTiming,s.autoRemoveChildren=!!r.autoRemoveChildren,s._sort=vn(r.sortChildren),Oe&&Lr(r.parent||Oe,ri(s),i),r.reversed&&s.reverse(),r.paused&&s.paused(!0),r.scrollTrigger&&D2(ri(s),r.scrollTrigger),s}var n=t.prototype;return n.to=function(i,s,o){return Vl(0,arguments,this),this},n.from=function(i,s,o){return Vl(1,arguments,this),this},n.fromTo=function(i,s,o,a){return Vl(2,arguments,this),this},n.set=function(i,s,o){return s.duration=0,s.parent=this,$l(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rt(i,s,Wn(this,o),1),this},n.call=function(i,s,o){return Lr(this,rt.delayedCall(0,i,s),o)},n.staggerTo=function(i,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new rt(i,o,Wn(this,l)),this},n.staggerFrom=function(i,s,o,a,l,u,c){return o.runBackwards=1,$l(o).immediateRender=vn(o.immediateRender),this.staggerTo(i,s,o,a,l,u,c)},n.staggerFromTo=function(i,s,o,a,l,u,c,f){return a.startAt=o,$l(a).immediateRender=vn(a.immediateRender),this.staggerTo(i,s,a,l,u,c,f)},n.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:wt(i),f=this._zTime<0!=i<0&&(this._initted||!u),h,p,y,g,w,m,v,x,_,S,k,b;if(this!==Oe&&c>l&&i>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,i+=this._time-a),h=c,_=this._start,x=this._ts,m=!x,f&&(u||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(k=this._yoyo,w=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(w*100+i,s,o);if(h=wt(c%w),c===l?(g=this._repeat,h=u):(g=~~(c/w),g&&g===c/w&&(h=u,g--),h>u&&(h=u)),S=Pa(this._tTime,w),!a&&this._tTime&&S!==g&&this._tTime-S*w-this._dur<=0&&(S=g),k&&g&1&&(h=u-h,b=1),g!==S&&!this._lock){var T=k&&S&1,j=T===(k&&g&1);if(g<S&&(T=!T),a=T?0:c%u?u:c,this._lock=1,this.render(a||(b?0:wt(g*w)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Dn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,j&&(this._lock=2,a=T?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;X2(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=sE(this,wt(a),wt(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!g&&(Dn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&i>=0)for(p=this._first;p;){if(y=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!m){v=0,y&&(c+=this._zTime=-1e-8);break}}p=y}else{p=this._last;for(var R=i<0?i:h;p;){if(y=p._prev,(p._act||R<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(R-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(R-p._start)*p._ts,s,o||Wt&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!m){v=0,y&&(c+=this._zTime=R?-1e-8:Vt);break}}p=y}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-1e-8)._zTime=h>=a?1:-1,this._ts))return this._start=_,lh(this),this.render(i,s,o);this._onUpdate&&!s&&Dn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(_===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&as(this,1),!s&&!(i<0&&!a)&&(c||a||!l)&&(Dn(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(i,s){var o=this;if(vi(s)||(s=Wn(this,s,i)),!(i instanceof Mu)){if(Ht(i))return i.forEach(function(a){return o.add(a,s)}),this;if(_t(i))return this.addLabel(i,s);if(Ue(i))i=rt.delayedCall(0,i);else return this}return this!==i?Lr(this,i,s):this},n.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof rt?s&&l.push(u):(o&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},n.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},n.remove=function(i){return _t(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(ah(this,i),i===this._recent&&(this._recent=this._last),Ys(this))},n.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(Rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),e.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},n.addLabel=function(i,s){return this.labels[i]=Wn(this,s),this},n.removeLabel=function(i){return delete this.labels[i],this},n.addPause=function(i,s,o){var a=rt.delayedCall(0,s||ju,o);return a.data="isPause",this._hasPause=1,Lr(this,a,Wn(this,i))},n.removePause=function(i){var s=this._first;for(i=Wn(this,i);s;)s._start===i&&s.data==="isPause"&&as(s),s=s._next},n.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Fi!==a[l]&&a[l].kill(i,s);return this},n.getTweensOf=function(i,s){for(var o=[],a=Jn(i),l=this._first,u=vi(s),c;l;)l instanceof rt?Z4(l._targets,a)&&(u?(!Fi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},n.tweenTo=function(i,s){s=s||{};var o=this,a=Wn(o,i),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,y=rt.to(o,or({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Vt,onStart:function(){if(o.pause(),!p){var w=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());y._dur!==w&&ja(y,w,0,1).render(y._time,!0,!0),p=1}c&&c.apply(y,f||[])}},s));return h?y.render(0):y},n.tweenFromTo=function(i,s,o){return this.tweenTo(s,or({startAt:{time:Wn(this,i)}},o))},n.recent=function(){return this._recent},n.nextLabel=function(i){return i===void 0&&(i=this._time),qy(this,Wn(this,i))},n.previousLabel=function(i){return i===void 0&&(i=this._time),qy(this,Wn(this,i),1)},n.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Vt)},n.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=i);return Ys(this)},n.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return e.prototype.invalidate.call(this,i)},n.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ys(this)},n.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ur,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Lr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;ja(o,o===Oe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Oe._ts&&(j2(Oe,gf(i,Oe)),T2=Rn.frame),Rn.frame>=Yy){Yy+=zn.autoSleep||120;var s=Oe._first;if((!s||!s._ts)&&zn.autoSleep&&Rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Rn.sleep()}}},t}(Mu);or(Jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var bE=function(t,n,r,i,s,o,a){var l=new xn(this._pt,t,n,0,1,nS,null,s),u=0,c=0,f,h,p,y,g,w,m,v;for(l.b=r,l.e=i,r+="",i+="",(m=~i.indexOf("random("))&&(i=Eu(i)),o&&(v=[r,i],o(v,t,n),r=v[0],i=v[1]),h=r.match(np)||[];f=np.exec(i);)y=f[0],g=i.substring(u,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),y!==h[c++]&&(w=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:w,c:y.charAt(1)==="="?oa(w,y)-w:parseFloat(y)-w,m:p&&p<4?Math.round:0},u=np.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=a,(b2.test(i)||m)&&(l.e=0),this._pt=l,l},r1=function(t,n,r,i,s,o,a,l,u,c){Ue(i)&&(i=i(s||0,t,o));var f=t[n],h=r!=="get"?r:Ue(f)?u?t[n.indexOf("set")||!Ue(t["get"+n.substr(3)])?n:"get"+n.substr(3)](u):t[n]():f,p=Ue(f)?u?TE:eS:s1,y;if(_t(i)&&(~i.indexOf("random(")&&(i=Eu(i)),i.charAt(1)==="="&&(y=oa(h,i)+($t(h)||0),(y||y===0)&&(i=y))),!c||h!==i||r0)return!isNaN(h*i)&&i!==""?(y=new xn(this._pt,t,n,+h||0,i-(h||0),typeof f=="boolean"?jE:tS,0,p),u&&(y.fp=u),a&&y.modifier(a,this,t),this._pt=y):(!f&&!(n in t)&&Jg(n,i),bE.call(this,t,n,h,i,p,l||zn.stringFilter,u))},_E=function(t,n,r,i,s){if(Ue(t)&&(t=Bl(t,s,n,r,i)),!qr(t)||t.style&&t.nodeType||Ht(t)||x2(t))return _t(t)?Bl(t,s,n,r,i):t;var o={},a;for(a in t)o[a]=Bl(t[a],s,n,r,i);return o},Q2=function(t,n,r,i,s,o){var a,l,u,c;if(En[t]&&(a=new En[t]).init(s,a.rawVars?n[t]:_E(n[t],i,s,o,r),r,i,o)!==!1&&(r._pt=l=new xn(r._pt,s,t,0,1,a.render,a,0,a.priority),r!==Go))for(u=r._ptLookup[r._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Fi,r0,i1=function e(t,n,r){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,u=i.onUpdate,c=i.runBackwards,f=i.yoyoEase,h=i.keyframes,p=i.autoRevert,y=t._dur,g=t._startAt,w=t._targets,m=t.parent,v=m&&m.data==="nested"?m.vars.targets:w,x=t._overwrite==="auto"&&!Kg,_=t.timeline,S,k,b,T,j,R,E,N,$,B,X,K,F;if(_&&(!h||!s)&&(s="none"),t._ease=Gs(s,Ta.ease),t._yEase=f?G2(Gs(f===!0?s:f,Ta.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!_&&!!i.runBackwards,!_||h&&!i.stagger){if(N=w[0]?Hs(w[0]).harness:0,K=N&&i[N.prop],S=mf(i,e1),g&&(g._zTime<0&&g.progress(1),n<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&y?Sd:q4),g._lazy=0),o){if(as(t._startAt=rt.set(w,or({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&vn(l),startAt:null,delay:0,onUpdate:u&&function(){return Dn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Wt||!a&&!p)&&t._startAt.revert(Sd),a&&y&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(c&&y&&!g){if(n&&(a=!1),b=or({overwrite:!1,data:"isFromStart",lazy:a&&!g&&vn(l),immediateRender:a,stagger:0,parent:m},S),K&&(b[N.prop]=K),as(t._startAt=rt.set(w,b)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Wt?t._startAt.revert(Sd):t._startAt.render(-1,!0)),t._zTime=n,!a)e(t._startAt,Vt,Vt);else if(!n)return}for(t._pt=t._ptCache=0,l=y&&vn(l)||l&&!y,k=0;k<w.length;k++){if(j=w[k],E=j._gsap||n1(w)[k]._gsap,t._ptLookup[k]=B={},Qm[E.id]&&ts.length&&pf(),X=v===w?k:v.indexOf(j),N&&($=new N).init(j,K||S,t,X,v)!==!1&&(t._pt=T=new xn(t._pt,j,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(D){B[D]=T}),$.priority&&(R=1)),!N||K)for(b in S)En[b]&&($=Q2(b,S,t,X,j,v))?$.priority&&(R=1):B[b]=T=r1.call(t,j,b,"get",S[b],X,v,0,i.stringFilter);t._op&&t._op[k]&&t.kill(j,t._op[k]),x&&t._pt&&(Fi=t,Oe.killTweensOf(j,B,t.globalTime(n)),F=!t.parent,Fi=0),t._pt&&l&&(Qm[E.id]=1)}R&&rS(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!F,h&&n<=0&&_.render(Ur,!0,!0)},SE=function(t,n,r,i,s,o,a,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[n],c,f,h,p;if(!u)for(u=t._ptCache[n]=[],h=t._ptLookup,p=t._targets.length;p--;){if(c=h[p][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return r0=1,t.vars[n]="+=0",i1(t,a),r0=0,l?Pu(n+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=r-c.s,f.e&&(f.e=Ke(r)+$t(f.e)),f.b&&(f.b=c.s+$t(f.b))},kE=function(t,n){var r=t[0]?Hs(t[0]).harness:0,i=r&&r.aliases,s,o,a,l;if(!i)return n;s=io({},n);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},CE=function(t,n,r,i){var s=n.ease||i||"power1.inOut",o,a;if(Ht(n))a=r[t]||(r[t]=[]),n.forEach(function(l,u){return a.push({t:u/(n.length-1)*100,v:l,e:s})});else for(o in n)a=r[o]||(r[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:n[o],e:s})},Bl=function(t,n,r,i,s){return Ue(t)?t.call(n,r,i,s):_t(t)&&~t.indexOf("random(")?Eu(t):t},Z2=t1+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",J2={};yn(Z2+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return J2[e]=1});var rt=function(e){v2(t,e);function t(r,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=e.call(this,o?i:$l(i))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,y=l.keyframes,g=l.defaults,w=l.scrollTrigger,m=l.yoyoEase,v=i.parent||Oe,x=(Ht(r)||x2(r)?vi(r[0]):"length"in i)?[r]:Jn(r),_,S,k,b,T,j,R,E;if(a._targets=x.length?n1(x):Pu("GSAP target "+r+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,y||h||Lc(u)||Lc(c)){if(i=a.vars,_=a.timeline=new Jt({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:x}),_.kill(),_.parent=_._dp=ri(a),_._start=0,h||Lc(u)||Lc(c)){if(b=x.length,R=h&&I2(h),qr(h))for(T in h)~Z2.indexOf(T)&&(E||(E={}),E[T]=h[T]);for(S=0;S<b;S++)k=mf(i,J2),k.stagger=0,m&&(k.yoyoEase=m),E&&io(k,E),j=x[S],k.duration=+Bl(u,ri(a),S,j,x),k.delay=(+Bl(c,ri(a),S,j,x)||0)-a._delay,!h&&b===1&&k.delay&&(a._delay=c=k.delay,a._start+=c,k.delay=0),_.to(j,k,R?R(S,j,x):0),_._ease=ce.none;_.duration()?u=c=0:a.timeline=0}else if(y){$l(or(_.vars.defaults,{ease:"none"})),_._ease=Gs(y.ease||i.ease||"none");var N=0,$,B,X;if(Ht(y))y.forEach(function(K){return _.to(x,K,">")}),_.duration();else{k={};for(T in y)T==="ease"||T==="easeEach"||CE(T,y[T],k,y.easeEach);for(T in k)for($=k[T].sort(function(K,F){return K.t-F.t}),N=0,S=0;S<$.length;S++)B=$[S],X={ease:B.e,duration:(B.t-(S?$[S-1].t:0))/100*u},X[T]=B.v,_.to(x,X,N),N+=X.duration;_.duration()<u&&_.to({},{duration:u-_.duration()})}}u||a.duration(u=_.duration())}else a.timeline=0;return p===!0&&!Kg&&(Fi=ri(a),Oe.killTweensOf(x),Fi=0),Lr(v,ri(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!u&&!y&&a._start===wt(v._time)&&vn(f)&&nE(ri(a))&&v.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-c)||0)),w&&D2(ri(a),w),a}var n=t.prototype;return n.render=function(i,s,o){var a=this._time,l=this._tDur,u=this._dur,c=i<0,f=i>l-Vt&&!c?l:i<Vt?0:i,h,p,y,g,w,m,v,x,_;if(!u)iE(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=f,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+i,s,o);if(h=wt(f%g),f===l?(y=this._repeat,h=u):(y=~~(f/g),y&&y===wt(f/g)&&(h=u,y--),h>u&&(h=u)),m=this._yoyo&&y&1,m&&(_=this._yEase,h=u-h),w=Pa(this._tTime,g),h===a&&!o&&this._initted&&y===w)return this._tTime=f,this;y!==w&&(x&&this._yEase&&X2(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(wt(g*y),!0).invalidate()._lock=0))}if(!this._initted){if(N2(this,c?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&y!==w))return this;if(u!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(_||this._ease)(h/u),this._from&&(this.ratio=v=1-v),h&&!a&&!s&&!y&&(Dn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(c&&Zm(this,i,s,o),Dn(this,"onUpdate")),this._repeat&&y!==w&&this.vars.onRepeat&&!s&&this.parent&&Dn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Zm(this,i,!0,!0),(i||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&as(this,1),!s&&!(c&&!a)&&(f||a||m)&&(Dn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),e.prototype.invalidate.call(this,i)},n.resetTo=function(i,s,o,a,l){Ru||Rn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||i1(this,u),c=this._ease(u/this._dur),SE(this,i,s,o,a,c,u,l)?this.resetTo(i,s,o,a,1):(uh(this,0),this.parent||M2(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?wl(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Fi&&Fi.vars.overwrite!==!0)._first||wl(this),this.parent&&o!==this.timeline.totalDuration()&&ja(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Jn(i):a,u=this._ptLookup,c=this._pt,f,h,p,y,g,w,m;if((!s||s==="all")&&eE(a,l))return s==="all"&&(this._pt=0),wl(this);for(f=this._op=this._op||[],s!=="all"&&(_t(s)&&(g={},yn(s,function(v){return g[v]=1}),s=g),s=kE(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=u[m],s==="all"?(f[m]=s,y=h,p={}):(p=f[m]=f[m]||{},y=s);for(g in y)w=h&&h[g],w&&((!("kill"in w.d)||w.d.kill(g)===!0)&&ah(this,w,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&wl(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Vl(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Vl(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Oe.killTweensOf(i,s,o)},t}(Mu);or(rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yn("staggerTo,staggerFrom,staggerFromTo",function(e){rt[e]=function(){var t=new Jt,n=e0.call(arguments,0);return n.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,n)}});var s1=function(t,n,r){return t[n]=r},eS=function(t,n,r){return t[n](r)},TE=function(t,n,r,i){return t[n](i.fp,r)},PE=function(t,n,r){return t.setAttribute(n,r)},o1=function(t,n){return Ue(t[n])?eS:qg(t[n])&&t.setAttribute?PE:s1},tS=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},jE=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},nS=function(t,n){var r=n._pt,i="";if(!t&&n.b)i=n.b;else if(t===1&&n.e)i=n.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round((r.s+r.c*t)*1e4)/1e4)+i,r=r._next;i+=n.c}n.set(n.t,n.p,i,n)},a1=function(t,n){for(var r=n._pt;r;)r.r(t,r.d),r=r._next},EE=function(t,n,r,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,n,r),s=o},RE=function(t){for(var n=this._pt,r,i;n;)i=n._next,n.p===t&&!n.op||n.op===t?ah(this,n,"_pt"):n.dep||(r=1),n=i;return!r},ME=function(t,n,r,i){i.mSet(t,n,i.m.call(i.tween,r,i.mt),i)},rS=function(t){for(var n=t._pt,r,i,s,o;n;){for(r=n._next,i=s;i&&i.pr>n.pr;)i=i._next;(n._prev=i?i._prev:o)?n._prev._next=n:s=n,(n._next=i)?i._prev=n:o=n,n=r}t._pt=s},xn=function(){function e(n,r,i,s,o,a,l,u,c){this.t=r,this.s=s,this.c=o,this.p=i,this.r=a||tS,this.d=l||this,this.set=u||s1,this.pr=c||0,this._next=n,n&&(n._prev=this)}var t=e.prototype;return t.modifier=function(r,i,s){this.mSet=this.mSet||this.set,this.set=ME,this.m=r,this.mt=s,this.tween=i},e}();yn(t1+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(e){return e1[e]=1});Ln.TweenMax=Ln.TweenLite=rt;Ln.TimelineLite=Ln.TimelineMax=Jt;Oe=new Jt({sortChildren:!1,defaults:Ta,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=Y2;var Xs=[],Cd={},AE=[],Zy=0,DE=0,ap=function(t){return(Cd[t]||AE).map(function(n){return n()})},i0=function(){var t=Date.now(),n=[];t-Zy>2&&(ap("matchMediaInit"),Xs.forEach(function(r){var i=r.queries,s=r.conditions,o,a,l,u;for(a in i)o=Dr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(r.revert(),l&&n.push(r))}),ap("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r,function(i){return r.add(null,i)})}),Zy=t,ap("matchMedia"))},iS=function(){function e(n,r){this.selector=r&&t0(r),this.data=[],this._r=[],this.isReverted=!1,this.id=DE++,n&&this.add(n)}var t=e.prototype;return t.add=function(r,i,s){Ue(r)&&(s=i,i=r,r=Ue);var o=this,a=function(){var u=Me,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=t0(s)),Me=o,f=i.apply(o,arguments),Ue(f)&&o._r.push(f),Me=u,o.selector=c,o.isReverted=!1,f};return o.last=a,r===Ue?a(o,function(l){return o.add(null,l)}):r?o[r]=a:a},t.ignore=function(r){var i=Me;Me=null,r(this),Me=i},t.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof e?r.push.apply(r,i.getTweens()):i instanceof rt&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(r,i){var s=this;if(r?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(r)}),l=s.data.length;l--;)u=s.data[l],u instanceof Jt?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof rt)&&u.revert&&u.revert(r);s._r.forEach(function(c){return c(r,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Xs.length;o--;)Xs[o].id===this.id&&Xs.splice(o,1)},t.revert=function(r){this.kill(r||{})},e}(),NE=function(){function e(n){this.contexts=[],this.scope=n,Me&&Me.data.push(this)}var t=e.prototype;return t.add=function(r,i,s){qr(r)||(r={matches:r});var o=new iS(0,s||this.scope),a=o.conditions={},l,u,c;Me&&!o.selector&&(o.selector=Me.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=r;for(u in r)u==="all"?c=1:(l=Dr.matchMedia(r[u]),l&&(Xs.indexOf(o)<0&&Xs.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(i0):l.addEventListener("change",i0)));return c&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(r){this.kill(r||{})},t.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},e}(),vf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach(function(i){return U2(i)})},timeline:function(t){return new Jt(t)},getTweensOf:function(t,n){return Oe.getTweensOf(t,n)},getProperty:function(t,n,r,i){_t(t)&&(t=Jn(t)[0]);var s=Hs(t||{}).get,o=r?R2:E2;return r==="native"&&(r=""),t&&(n?o((En[n]&&En[n].get||s)(t,n,r,i)):function(a,l,u){return o((En[a]&&En[a].get||s)(t,a,l,u))})},quickSetter:function(t,n,r){if(t=Jn(t),t.length>1){var i=t.map(function(c){return bn.quickSetter(c,n,r)}),s=i.length;return function(c){for(var f=s;f--;)i[f](c)}}t=t[0]||{};var o=En[n],a=Hs(t),l=a.harness&&(a.harness.aliases||{})[n]||n,u=o?function(c){var f=new o;Go._pt=0,f.init(t,r?c+r:c,Go,0,[t]),f.render(1,f),Go._pt&&a1(1,Go)}:a.set(t,l);return o?u:function(c){return u(t,l,r?c+r:c,a,1)}},quickTo:function(t,n,r){var i,s=bn.to(t,io((i={},i[n]="+=0.1",i.paused=!0,i),r||{})),o=function(l,u,c){return s.resetTo(n,l,u,c)};return o.tween=s,o},isTweening:function(t){return Oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Gs(t.ease,Ta.ease)),Gy(Ta,t||{})},config:function(t){return Gy(zn,t||{})},registerEffect:function(t){var n=t.name,r=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!En[a]&&!Ln[a]&&Pu(n+" effect requires "+a+" plugin.")}),rp[n]=function(a,l,u){return r(Jn(a),or(l||{},s),u)},o&&(Jt.prototype[n]=function(a,l,u){return this.add(rp[n](a,qr(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,n){ce[t]=Gs(n)},parseEase:function(t,n){return arguments.length?Gs(t,n):ce},getById:function(t){return Oe.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var r=new Jt(t),i,s;for(r.smoothChildTiming=vn(t.smoothChildTiming),Oe.remove(r),r._dp=0,r._time=r._tTime=Oe._time,i=Oe._first;i;)s=i._next,(n||!(!i._dur&&i instanceof rt&&i.vars.onComplete===i._targets[0]))&&Lr(r,i,i._start-i._delay),i=s;return Lr(Oe,r,0),r},context:function(t,n){return t?new iS(t,n):Me},matchMedia:function(t){return new NE(t)},matchMediaRefresh:function(){return Xs.forEach(function(t){var n=t.conditions,r,i;for(i in n)n[i]&&(n[i]=!1,r=1);r&&t.revert()})||i0()},addEventListener:function(t,n){var r=Cd[t]||(Cd[t]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(t,n){var r=Cd[t],i=r&&r.indexOf(n);i>=0&&r.splice(i,1)},utils:{wrap:fE,wrapYoyo:hE,distribute:I2,random:F2,snap:L2,normalize:dE,getUnit:$t,clamp:aE,splitColor:W2,toArray:Jn,selector:t0,mapRange:V2,pipe:uE,unitize:cE,interpolate:pE,shuffle:z2},install:k2,effects:rp,ticker:Rn,updateRoot:Jt.updateRoot,plugins:En,globalTimeline:Oe,core:{PropTween:xn,globals:C2,Tween:rt,Timeline:Jt,Animation:Mu,getCache:Hs,_removeLinkedListItem:ah,reverting:function(){return Wt},context:function(t){return t&&Me&&(Me.data.push(t),t._ctx=Me),Me},suppressOverwrites:function(t){return Kg=t}}};yn("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return vf[e]=rt[e]});Rn.add(Jt.updateRoot);Go=vf.to({},{duration:0});var OE=function(t,n){for(var r=t._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},zE=function(t,n){var r=t._targets,i,s,o;for(i in n)for(s=r.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=OE(o,i)),o&&o.modifier&&o.modifier(n[i],t,r[s],i))},lp=function(t,n){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,u;if(_t(s)&&(l={},yn(s,function(c){return l[c]=1}),s=l),n){l={};for(u in s)l[u]=n(s[u]);s=l}zE(a,s)}}}},bn=vf.registerPlugin({name:"attr",init:function(t,n,r,i,s){var o,a,l;this.tween=r;for(o in n)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",n[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,n){for(var r=n._pt;r;)Wt?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function(t,n){for(var r=n.length;r--;)this.add(t,r,t[r]||0,n[r],0,0,0,0,0,1)}},lp("roundProps",n0),lp("modifiers"),lp("snap",L2))||vf;rt.version=Jt.version=bn.version="3.12.5";S2=1;Qg()&&Ea();ce.Power0;ce.Power1;ce.Power2;ce.Power3;ce.Power4;ce.Linear;ce.Quad;ce.Cubic;ce.Quart;ce.Quint;ce.Strong;ce.Elastic;ce.Back;ce.SteppedEase;ce.Bounce;ce.Sine;ce.Expo;ce.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jy,$i,aa,l1,Is,ex,u1,IE=function(){return typeof window<"u"},yi={},js=180/Math.PI,la=Math.PI/180,So=Math.atan2,tx=1e8,c1=/([A-Z])/g,LE=/(left|right|width|margin|padding|x)/i,FE=/[\s,\(]\S/,Fr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},s0=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},$E=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},VE=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},BE=function(t,n){var r=n.s+n.c*t;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},sS=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},oS=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},UE=function(t,n,r){return t.style[n]=r},WE=function(t,n,r){return t.style.setProperty(n,r)},HE=function(t,n,r){return t._gsap[n]=r},YE=function(t,n,r){return t._gsap.scaleX=t._gsap.scaleY=r},GE=function(t,n,r,i,s){var o=t._gsap;o.scaleX=o.scaleY=r,o.renderTransform(s,o)},XE=function(t,n,r,i,s){var o=t._gsap;o[n]=r,o.renderTransform(s,o)},ze="transform",wn=ze+"Origin",KE=function e(t,n){var r=this,i=this.target,s=i.style,o=i._gsap;if(t in yi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Fr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return r.tfm[a]=oi(i,a)}):this.tfm[t]=o.x?o[t]:oi(i,t),t===wn&&(this.tfm.zOrigin=o.zOrigin);else return Fr.transform.split(",").forEach(function(a){return e.call(r,a,n)});if(this.props.indexOf(ze)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,n,"")),t=ze}(s||n)&&this.props.push(t,n,s[t])},aS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},qE=function(){var t=this.props,n=this.target,r=n.style,i=n._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?n[t[s]]=t[s+2]:t[s+2]?r[t[s]]=t[s+2]:r.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(c1,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=u1(),(!s||!s.isStart)&&!r[ze]&&(aS(r),i.zOrigin&&r[wn]&&(r[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},lS=function(t,n){var r={target:t,props:[],revert:qE,save:KE};return t._gsap||bn.core.getCache(t),n&&n.split(",").forEach(function(i){return r.save(i)}),r},uS,o0=function(t,n){var r=$i.createElementNS?$i.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):$i.createElement(t);return r&&r.style?r:$i.createElement(t)},Wr=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(c1,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Ra(n)||n,1)||""},nx="O,Moz,ms,Ms,Webkit".split(","),Ra=function(t,n,r){var i=n||Is,s=i.style,o=5;if(t in s&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(nx[o]+t in s););return o<0?null:(o===3?"ms":o>=0?nx[o]:"")+t},a0=function(){IE()&&window.document&&(Jy=window,$i=Jy.document,aa=$i.documentElement,Is=o0("div")||{style:{}},o0("div"),ze=Ra(ze),wn=ze+"Origin",Is.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",uS=!!Ra("perspective"),u1=bn.core.reverting,l1=1)},up=function e(t){var n=o0("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(aa.appendChild(n),n.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=e}catch{}else this._gsapBBox&&(o=this._gsapBBox());return r&&(i?r.insertBefore(this,i):r.appendChild(this)),aa.removeChild(n),this.style.cssText=s,o},rx=function(t,n){for(var r=n.length;r--;)if(t.hasAttribute(n[r]))return t.getAttribute(n[r])},cS=function(t){var n;try{n=t.getBBox()}catch{n=up.call(t,!0)}return n&&(n.width||n.height)||t.getBBox===up||(n=up.call(t,!0)),n&&!n.width&&!n.x&&!n.y?{x:+rx(t,["x","cx","x1"])||0,y:+rx(t,["y","cy","y1"])||0,width:0,height:0}:n},dS=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&cS(t))},so=function(t,n){if(n){var r=t.style,i;n in yi&&n!==wn&&(n=ze),r.removeProperty?(i=n.substr(0,2),(i==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(i==="--"?n:n.replace(c1,"-$1").toLowerCase())):r.removeAttribute(n)}},Vi=function(t,n,r,i,s,o){var a=new xn(t._pt,n,r,0,1,o?oS:sS);return t._pt=a,a.b=i,a.e=s,t._props.push(r),a},ix={deg:1,rad:1,turn:1},QE={grid:1,flex:1},ls=function e(t,n,r,i){var s=parseFloat(r)||0,o=(r+"").trim().substr((s+"").length)||"px",a=Is.style,l=LE.test(n),u=t.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",p=i==="%",y,g,w,m;if(i===o||!s||ix[i]||ix[o])return s;if(o!=="px"&&!h&&(s=e(t,n,r,"px")),m=t.getCTM&&dS(t),(p||o==="%")&&(yi[n]||~n.indexOf("adius")))return y=m?t.getBBox()[l?"width":"height"]:t[c],Ke(p?s/y*f:s/100*y);if(a[l?"width":"height"]=f+(h?o:i),g=~n.indexOf("adius")||i==="em"&&t.appendChild&&!u?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===$i||!g.appendChild)&&(g=$i.body),w=g._gsap,w&&p&&w.width&&l&&w.time===Rn.time&&!w.uncache)return Ke(s/w.width*f);if(p&&(n==="height"||n==="width")){var v=t.style[n];t.style[n]=f+i,y=t[c],v?t.style[n]=v:so(t,n)}else(p||o==="%")&&!QE[Wr(g,"display")]&&(a.position=Wr(t,"position")),g===t&&(a.position="static"),g.appendChild(Is),y=Is[c],g.removeChild(Is),a.position="absolute";return l&&p&&(w=Hs(g),w.time=Rn.time,w.width=g[c]),Ke(h?y*s/f:y&&s?f/y*s:0)},oi=function(t,n,r,i){var s;return l1||a0(),n in Fr&&n!=="transform"&&(n=Fr[n],~n.indexOf(",")&&(n=n.split(",")[0])),yi[n]&&n!=="transform"?(s=Du(t,i),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:xf(Wr(t,wn))+" "+s.zOrigin+"px"):(s=t.style[n],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=yf[n]&&yf[n](t,n,r)||Wr(t,n)||P2(t,n)||(n==="opacity"?1:0))),r&&!~(s+"").trim().indexOf(" ")?ls(t,n,s,r)+r:s},ZE=function(t,n,r,i){if(!r||r==="none"){var s=Ra(n,t,1),o=s&&Wr(t,s,1);o&&o!==r?(n=s,r=o):n==="borderColor"&&(r=Wr(t,"borderTopColor"))}var a=new xn(this._pt,t.style,n,0,1,nS),l=0,u=0,c,f,h,p,y,g,w,m,v,x,_,S;if(a.b=r,a.e=i,r+="",i+="",i==="auto"&&(g=t.style[n],t.style[n]=i,i=Wr(t,n)||i,g?t.style[n]=g:so(t,n)),c=[r,i],Y2(c),r=c[0],i=c[1],h=r.match(Yo)||[],S=i.match(Yo)||[],S.length){for(;f=Yo.exec(i);)w=f[0],v=i.substring(l,f.index),y?y=(y+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(y=1),w!==(g=h[u++]||"")&&(p=parseFloat(g)||0,_=g.substr((p+"").length),w.charAt(1)==="="&&(w=oa(p,w)+_),m=parseFloat(w),x=w.substr((m+"").length),l=Yo.lastIndex-x.length,x||(x=x||zn.units[n]||_,l===i.length&&(i+=x,a.e+=x)),_!==x&&(p=ls(t,n,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:m-p,m:y&&y<4||n==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=n==="display"&&i==="none"?oS:sS;return b2.test(i)&&(a.e=0),this._pt=a,a},sx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},JE=function(t){var n=t.split(" "),r=n[0],i=n[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(t=r,r=i,i=t),n[0]=sx[r]||r,n[1]=sx[i]||i,n.join(" ")},e8=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,i=r.style,s=n.u,o=r._gsap,a,l,u;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],yi[a]&&(l=1,a=a==="transformOrigin"?wn:ze),so(r,a);l&&(so(r,ze),o&&(o.svg&&r.removeAttribute("transform"),Du(r,1),o.uncache=1,aS(i)))}},yf={clearProps:function(t,n,r,i,s){if(s.data!=="isFromStart"){var o=t._pt=new xn(t._pt,n,r,0,0,e8);return o.u=i,o.pr=-10,o.tween=s,t._props.push(r),1}}},Au=[1,0,0,1,0,0],fS={},hS=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ox=function(t){var n=Wr(t,ze);return hS(n)?Au:n.substr(7).match(w2).map(Ke)},d1=function(t,n){var r=t._gsap||Hs(t),i=t.style,s=ox(t),o,a,l,u;return r.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Au:s):(s===Au&&!t.offsetParent&&t!==aa&&!r.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(u=1,a=t.nextElementSibling,aa.appendChild(t)),s=ox(t),l?i.display=l:so(t,"display"),u&&(a?o.insertBefore(t,a):o?o.appendChild(t):aa.removeChild(t))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},l0=function(t,n,r,i,s,o){var a=t._gsap,l=s||d1(t,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],y=l[1],g=l[2],w=l[3],m=l[4],v=l[5],x=n.split(" "),_=parseFloat(x[0])||0,S=parseFloat(x[1])||0,k,b,T,j;r?l!==Au&&(b=p*w-y*g)&&(T=_*(w/b)+S*(-g/b)+(g*v-w*m)/b,j=_*(-y/b)+S*(p/b)-(p*v-y*m)/b,_=T,S=j):(k=cS(t),_=k.x+(~x[0].indexOf("%")?_/100*k.width:_),S=k.y+(~(x[1]||x[0]).indexOf("%")?S/100*k.height:S)),i||i!==!1&&a.smooth?(m=_-u,v=S-c,a.xOffset=f+(m*p+v*g)-m,a.yOffset=h+(m*y+v*w)-v):a.xOffset=a.yOffset=0,a.xOrigin=_,a.yOrigin=S,a.smooth=!!i,a.origin=n,a.originIsAbsolute=!!r,t.style[wn]="0px 0px",o&&(Vi(o,a,"xOrigin",u,_),Vi(o,a,"yOrigin",c,S),Vi(o,a,"xOffset",f,a.xOffset),Vi(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",_+" "+S)},Du=function(t,n){var r=t._gsap||new q2(t);if("x"in r&&!n&&!r.uncache)return r;var i=t.style,s=r.scaleX<0,o="px",a="deg",l=getComputedStyle(t),u=Wr(t,wn)||"0",c,f,h,p,y,g,w,m,v,x,_,S,k,b,T,j,R,E,N,$,B,X,K,F,D,I,P,W,Q,at,de,be;return c=f=h=g=w=m=v=x=_=0,p=y=1,r.svg=!!(t.getCTM&&dS(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),i.scale=i.rotate=i.translate="none"),b=d1(t,r.svg),r.svg&&(r.uncache?(D=t.getBBox(),u=r.xOrigin-D.x+"px "+(r.yOrigin-D.y)+"px",F=""):F=!n&&t.getAttribute("data-svg-origin"),l0(t,F||u,!!F||r.originIsAbsolute,r.smooth!==!1,b)),S=r.xOrigin||0,k=r.yOrigin||0,b!==Au&&(E=b[0],N=b[1],$=b[2],B=b[3],c=X=b[4],f=K=b[5],b.length===6?(p=Math.sqrt(E*E+N*N),y=Math.sqrt(B*B+$*$),g=E||N?So(N,E)*js:0,v=$||B?So($,B)*js+g:0,v&&(y*=Math.abs(Math.cos(v*la))),r.svg&&(c-=S-(S*E+k*$),f-=k-(S*N+k*B))):(be=b[6],at=b[7],P=b[8],W=b[9],Q=b[10],de=b[11],c=b[12],f=b[13],h=b[14],T=So(be,Q),w=T*js,T&&(j=Math.cos(-T),R=Math.sin(-T),F=X*j+P*R,D=K*j+W*R,I=be*j+Q*R,P=X*-R+P*j,W=K*-R+W*j,Q=be*-R+Q*j,de=at*-R+de*j,X=F,K=D,be=I),T=So(-$,Q),m=T*js,T&&(j=Math.cos(-T),R=Math.sin(-T),F=E*j-P*R,D=N*j-W*R,I=$*j-Q*R,de=B*R+de*j,E=F,N=D,$=I),T=So(N,E),g=T*js,T&&(j=Math.cos(T),R=Math.sin(T),F=E*j+N*R,D=X*j+K*R,N=N*j-E*R,K=K*j-X*R,E=F,X=D),w&&Math.abs(w)+Math.abs(g)>359.9&&(w=g=0,m=180-m),p=Ke(Math.sqrt(E*E+N*N+$*$)),y=Ke(Math.sqrt(K*K+be*be)),T=So(X,K),v=Math.abs(T)>2e-4?T*js:0,_=de?1/(de<0?-de:de):0),r.svg&&(F=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!hS(Wr(t,ze)),F&&t.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(y*=-1,v+=v<=0?180:-180)),n=n||r.uncache,r.x=c-((r.xPercent=c&&(!n&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+o,r.y=f-((r.yPercent=f&&(!n&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+o,r.z=h+o,r.scaleX=Ke(p),r.scaleY=Ke(y),r.rotation=Ke(g)+a,r.rotationX=Ke(w)+a,r.rotationY=Ke(m)+a,r.skewX=v+a,r.skewY=x+a,r.transformPerspective=_+o,(r.zOrigin=parseFloat(u.split(" ")[2])||!n&&r.zOrigin||0)&&(i[wn]=xf(u)),r.xOffset=r.yOffset=0,r.force3D=zn.force3D,r.renderTransform=r.svg?n8:uS?pS:t8,r.uncache=0,r},xf=function(t){return(t=t.split(" "))[0]+" "+t[1]},cp=function(t,n,r){var i=$t(n);return Ke(parseFloat(n)+parseFloat(ls(t,"x",r+"px",i)))+i},t8=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,pS(t,n)},_s="0deg",ol="0px",Ss=") ",pS=function(t,n){var r=n||this,i=r.xPercent,s=r.yPercent,o=r.x,a=r.y,l=r.z,u=r.rotation,c=r.rotationY,f=r.rotationX,h=r.skewX,p=r.skewY,y=r.scaleX,g=r.scaleY,w=r.transformPerspective,m=r.force3D,v=r.target,x=r.zOrigin,_="",S=m==="auto"&&t&&t!==1||m===!0;if(x&&(f!==_s||c!==_s)){var k=parseFloat(c)*la,b=Math.sin(k),T=Math.cos(k),j;k=parseFloat(f)*la,j=Math.cos(k),o=cp(v,o,b*j*-x),a=cp(v,a,-Math.sin(k)*-x),l=cp(v,l,T*j*-x+x)}w!==ol&&(_+="perspective("+w+Ss),(i||s)&&(_+="translate("+i+"%, "+s+"%) "),(S||o!==ol||a!==ol||l!==ol)&&(_+=l!==ol||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ss),u!==_s&&(_+="rotate("+u+Ss),c!==_s&&(_+="rotateY("+c+Ss),f!==_s&&(_+="rotateX("+f+Ss),(h!==_s||p!==_s)&&(_+="skew("+h+", "+p+Ss),(y!==1||g!==1)&&(_+="scale("+y+", "+g+Ss),v.style[ze]=_||"translate(0, 0)"},n8=function(t,n){var r=n||this,i=r.xPercent,s=r.yPercent,o=r.x,a=r.y,l=r.rotation,u=r.skewX,c=r.skewY,f=r.scaleX,h=r.scaleY,p=r.target,y=r.xOrigin,g=r.yOrigin,w=r.xOffset,m=r.yOffset,v=r.forceCSS,x=parseFloat(o),_=parseFloat(a),S,k,b,T,j;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=la,u*=la,S=Math.cos(l)*f,k=Math.sin(l)*f,b=Math.sin(l-u)*-h,T=Math.cos(l-u)*h,u&&(c*=la,j=Math.tan(u-c),j=Math.sqrt(1+j*j),b*=j,T*=j,c&&(j=Math.tan(c),j=Math.sqrt(1+j*j),S*=j,k*=j)),S=Ke(S),k=Ke(k),b=Ke(b),T=Ke(T)):(S=f,T=h,k=b=0),(x&&!~(o+"").indexOf("px")||_&&!~(a+"").indexOf("px"))&&(x=ls(p,"x",o,"px"),_=ls(p,"y",a,"px")),(y||g||w||m)&&(x=Ke(x+y-(y*S+g*b)+w),_=Ke(_+g-(y*k+g*T)+m)),(i||s)&&(j=p.getBBox(),x=Ke(x+i/100*j.width),_=Ke(_+s/100*j.height)),j="matrix("+S+","+k+","+b+","+T+","+x+","+_+")",p.setAttribute("transform",j),v&&(p.style[ze]=j)},r8=function(t,n,r,i,s){var o=360,a=_t(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?js:1),u=l-i,c=i+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-360)),f==="cw"&&u<0?u=(u+o*tx)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*tx)%o-~~(u/o)*o)),t._pt=h=new xn(t._pt,n,r,i,u,$E),h.e=c,h.u="deg",t._props.push(r),h},ax=function(t,n){for(var r in n)t[r]=n[r];return t},i8=function(t,n,r){var i=ax({},r._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=r.style,a,l,u,c,f,h,p,y;i.svg?(u=r.getAttribute("transform"),r.setAttribute("transform",""),o[ze]=n,a=Du(r,1),so(r,ze),r.setAttribute("transform",u)):(u=getComputedStyle(r)[ze],o[ze]=n,a=Du(r,1),o[ze]=u);for(l in yi)u=i[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=$t(u),y=$t(c),f=p!==y?ls(r,l,u,y):parseFloat(u),h=parseFloat(c),t._pt=new xn(t._pt,a,l,f,h-f,s0),t._pt.u=y||0,t._props.push(l));ax(a,i)};yn("padding,margin,Width,Radius",function(e,t){var n="Top",r="Right",i="Bottom",s="Left",o=(t<3?[n,r,i,s]:[n+s,n+r,i+r,i+s]).map(function(a){return t<2?e+a:"border"+a+e});yf[t>1?"border"+e:e]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(y){return oi(a,y,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(y,g){return p[y]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,p,f)}});var mS={name:"css",register:a0,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,r,i,s){var o=this._props,a=t.style,l=r.vars.startAt,u,c,f,h,p,y,g,w,m,v,x,_,S,k,b,T;l1||a0(),this.styles=this.styles||lS(t),T=this.styles.props,this.tween=r;for(g in n)if(g!=="autoRound"&&(c=n[g],!(En[g]&&Q2(g,n,r,i,t,s)))){if(p=typeof c,y=yf[g],p==="function"&&(c=c.call(r,i,t,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Eu(c)),y)y(this,t,g,c,r)&&(b=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(g)+"").trim(),c+="",ns.lastIndex=0,ns.test(u)||(w=$t(u),m=$t(c)),m?w!==m&&(u=ls(t,g,u,m)+m):w&&(c+=w),this.add(a,"setProperty",u,c,i,s,0,0,g),o.push(g),T.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(r,i,t,s):l[g],_t(u)&&~u.indexOf("random(")&&(u=Eu(u)),$t(u+"")||u==="auto"||(u+=zn.units[g]||$t(oi(t,g))||""),(u+"").charAt(1)==="="&&(u=oi(t,g))):u=oi(t,g),h=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),g in Fr&&(g==="autoAlpha"&&(h===1&&oi(t,"visibility")==="hidden"&&f&&(h=0),T.push("visibility",0,a.visibility),Vi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Fr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in yi,x){if(this.styles.save(g),_||(S=t._gsap,S.renderTransform&&!n.parseTransform||Du(t,n.parseTransform),k=n.smoothOrigin!==!1&&S.smooth,_=this._pt=new xn(this._pt,a,ze,0,1,S.renderTransform,S,0,-1),_.dep=1),g==="scale")this._pt=new xn(this._pt,S,"scaleY",S.scaleY,(v?oa(S.scaleY,v+f):f)-S.scaleY||0,s0),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){T.push(wn,0,a[wn]),c=JE(c),S.svg?l0(t,c,0,k,0,this):(m=parseFloat(c.split(" ")[2])||0,m!==S.zOrigin&&Vi(this,S,"zOrigin",S.zOrigin,m),Vi(this,a,g,xf(u),xf(c)));continue}else if(g==="svgOrigin"){l0(t,c,1,k,0,this);continue}else if(g in fS){r8(this,S,g,h,v?oa(h,v+c):c);continue}else if(g==="smoothOrigin"){Vi(this,S,"smooth",S.smooth,c);continue}else if(g==="force3D"){S[g]=c;continue}else if(g==="transform"){i8(this,c,t);continue}}else g in a||(g=Ra(g)||g);if(x||(f||f===0)&&(h||h===0)&&!FE.test(c)&&g in a)w=(u+"").substr((h+"").length),f||(f=0),m=$t(c)||(g in zn.units?zn.units[g]:w),w!==m&&(h=ls(t,g,u,m)),this._pt=new xn(this._pt,x?S:a,g,h,(v?oa(h,v+f):f)-h,!x&&(m==="px"||g==="zIndex")&&n.autoRound!==!1?BE:s0),this._pt.u=m||0,w!==m&&m!=="%"&&(this._pt.b=u,this._pt.r=VE);else if(g in a)ZE.call(this,t,g,u,v?v+c:c);else if(g in t)this.add(t,g,u||t[g],v?v+c:c,i,s);else if(g!=="parseTransform"){Jg(g,c);continue}x||(g in a?T.push(g,0,a[g]):T.push(g,1,u||t[g])),o.push(g)}}b&&rS(this)},render:function(t,n){if(n.tween._time||!u1())for(var r=n._pt;r;)r.r(t,r.d),r=r._next;else n.styles.revert()},get:oi,aliases:Fr,getSetter:function(t,n,r){var i=Fr[n];return i&&i.indexOf(",")<0&&(n=i),n in yi&&n!==wn&&(t._gsap.x||oi(t,"x"))?r&&ex===r?n==="scale"?YE:HE:(ex=r||{})&&(n==="scale"?GE:XE):t.style&&!qg(t.style[n])?UE:~n.indexOf("-")?WE:o1(t,n)},core:{_removeProperty:so,_getMatrix:d1}};bn.utils.checkPrefix=Ra;bn.core.getStyleSaver=lS;(function(e,t,n,r){var i=yn(e+","+t+","+n,function(s){yi[s]=1});yn(t,function(s){zn.units[s]="deg",fS[s]=1}),Fr[i[13]]=e+","+t,yn(r,function(s){var o=s.split(":");Fr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){zn.units[e]="px"});bn.registerPlugin(mS);var ht=bn.registerPlugin(mS)||bn;ht.core.Tween;function s8(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o8(e,t,n){return t&&s8(e.prototype,t),e}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt,Td,Mn,Bi,Ui,ua,gS,Es,Ul,vS,ci,hr,yS,xS=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},wS=1,Xo=[],se=[],Hr=[],Wl=Date.now,u0=function(t,n){return n},a8=function(){var t=Ul.core,n=t.bridge||{},r=t._scrollers,i=t._proxies;r.push.apply(r,se),i.push.apply(i,Hr),se=r,Hr=i,u0=function(o,a){return n[o](a)}},rs=function(t,n){return~Hr.indexOf(t)&&Hr[Hr.indexOf(t)+1][n]},Hl=function(t){return!!~vS.indexOf(t)},Xt=function(t,n,r,i,s){return t.addEventListener(n,r,{passive:i!==!1,capture:!!s})},Gt=function(t,n,r,i){return t.removeEventListener(n,r,!!i)},Fc="scrollLeft",$c="scrollTop",c0=function(){return ci&&ci.isPressed||se.cache++},wf=function(t,n){var r=function i(s){if(s||s===0){wS&&(Mn.history.scrollRestoration="manual");var o=ci&&ci.isPressed;s=i.v=Math.round(s)||(ci&&ci.iOS?1:0),t(s),i.cacheID=se.cache,o&&u0("ss",s)}else(n||se.cache!==i.cacheID||u0("ref"))&&(i.cacheID=se.cache,i.v=t());return i.v+i.offset};return r.offset=0,t&&r},en={s:Fc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:wf(function(e){return arguments.length?Mn.scrollTo(e,dt.sc()):Mn.pageXOffset||Bi[Fc]||Ui[Fc]||ua[Fc]||0})},dt={s:$c,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:en,sc:wf(function(e){return arguments.length?Mn.scrollTo(en.sc(),e):Mn.pageYOffset||Bi[$c]||Ui[$c]||ua[$c]||0})},un=function(t,n){return(n&&n._ctx&&n._ctx.selector||jt.utils.toArray)(t)[0]||(typeof t=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},us=function(t,n){var r=n.s,i=n.sc;Hl(t)&&(t=Bi.scrollingElement||Ui);var s=se.indexOf(t),o=i===dt.sc?1:2;!~s&&(s=se.push(t)-1),se[s+o]||Xt(t,"scroll",c0);var a=se[s+o],l=a||(se[s+o]=wf(rs(t,r),!0)||(Hl(t)?i:wf(function(u){return arguments.length?t[r]=u:t[r]})));return l.target=t,a||(l.smooth=jt.getProperty(t,"scrollBehavior")==="smooth"),l},d0=function(t,n,r){var i=t,s=t,o=Wl(),a=o,l=n||50,u=Math.max(500,l*3),c=function(y,g){var w=Wl();g||w-o>l?(s=i,i=y,a=o,o=w):r?i+=y:i=s+(y-s)/(w-a)*(o-a)},f=function(){s=i=r?0:i,a=o=0},h=function(y){var g=a,w=s,m=Wl();return(y||y===0)&&y!==i&&c(y),o===a||m-a>u?0:(i+(r?w:-w))/((r?m:o)-g)*1e3};return{update:c,reset:f,getVelocity:h}},al=function(t,n){return n&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},lx=function(t){var n=Math.max.apply(Math,t),r=Math.min.apply(Math,t);return Math.abs(n)>=Math.abs(r)?n:r},bS=function(){Ul=jt.core.globals().ScrollTrigger,Ul&&Ul.core&&a8()},_S=function(t){return jt=t||xS(),!Td&&jt&&typeof document<"u"&&document.body&&(Mn=window,Bi=document,Ui=Bi.documentElement,ua=Bi.body,vS=[Mn,Bi,Ui,ua],jt.utils.clamp,yS=jt.core.context||function(){},Es="onpointerenter"in ua?"pointer":"mouse",gS=Qe.isTouch=Mn.matchMedia&&Mn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,hr=Qe.eventTypes=("ontouchstart"in Ui?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ui?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return wS=0},500),bS(),Td=1),Td};en.op=dt;se.cache=0;var Qe=function(){function e(n){this.init(n)}var t=e.prototype;return t.init=function(r){Td||_S(jt)||console.warn("Please gsap.registerPlugin(Observer)"),Ul||bS();var i=r.tolerance,s=r.dragMinimum,o=r.type,a=r.target,l=r.lineHeight,u=r.debounce,c=r.preventDefault,f=r.onStop,h=r.onStopDelay,p=r.ignore,y=r.wheelSpeed,g=r.event,w=r.onDragStart,m=r.onDragEnd,v=r.onDrag,x=r.onPress,_=r.onRelease,S=r.onRight,k=r.onLeft,b=r.onUp,T=r.onDown,j=r.onChangeX,R=r.onChangeY,E=r.onChange,N=r.onToggleX,$=r.onToggleY,B=r.onHover,X=r.onHoverEnd,K=r.onMove,F=r.ignoreCheck,D=r.isNormalizer,I=r.onGestureStart,P=r.onGestureEnd,W=r.onWheel,Q=r.onEnable,at=r.onDisable,de=r.onClick,be=r.scrollSpeed,ve=r.capture,me=r.allowClicks,We=r.lockAxis,je=r.onLockAxis;this.target=a=un(a)||Ui,this.vars=r,p&&(p=jt.utils.toArray(p)),i=i||1e-9,s=s||0,y=y||1,be=be||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Mn.getComputedStyle(ua).lineHeight)||22);var Vn,Ze,Je,he,He,ln,_n,A=this,Sn=0,Zr=0,_i=r.passive||!c,et=us(a,en),Si=us(a,dt),vs=et(),vo=Si(),pt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&hr[0]==="pointerdown",ki=Hl(a),Ye=a.ownerDocument||Bi,ar=[0,0,0],Bn=[0,0,0],Jr=0,Ga=function(){return Jr=Wl()},tt=function(G,pe){return(A.event=G)&&p&&~p.indexOf(G.target)||pe&&pt&&G.pointerType!=="touch"||F&&F(G,pe)},gc=function(){A._vx.reset(),A._vy.reset(),Ze.pause(),f&&f(A)},Ci=function(){var G=A.deltaX=lx(ar),pe=A.deltaY=lx(Bn),L=Math.abs(G)>=i,te=Math.abs(pe)>=i;E&&(L||te)&&E(A,G,pe,ar,Bn),L&&(S&&A.deltaX>0&&S(A),k&&A.deltaX<0&&k(A),j&&j(A),N&&A.deltaX<0!=Sn<0&&N(A),Sn=A.deltaX,ar[0]=ar[1]=ar[2]=0),te&&(T&&A.deltaY>0&&T(A),b&&A.deltaY<0&&b(A),R&&R(A),$&&A.deltaY<0!=Zr<0&&$(A),Zr=A.deltaY,Bn[0]=Bn[1]=Bn[2]=0),(he||Je)&&(K&&K(A),Je&&(v(A),Je=!1),he=!1),ln&&!(ln=!1)&&je&&je(A),He&&(W(A),He=!1),Vn=0},yo=function(G,pe,L){ar[L]+=G,Bn[L]+=pe,A._vx.update(G),A._vy.update(pe),u?Vn||(Vn=requestAnimationFrame(Ci)):Ci()},xo=function(G,pe){We&&!_n&&(A.axis=_n=Math.abs(G)>Math.abs(pe)?"x":"y",ln=!0),_n!=="y"&&(ar[2]+=G,A._vx.update(G,!0)),_n!=="x"&&(Bn[2]+=pe,A._vy.update(pe,!0)),u?Vn||(Vn=requestAnimationFrame(Ci)):Ci()},Ti=function(G){if(!tt(G,1)){G=al(G,c);var pe=G.clientX,L=G.clientY,te=pe-A.x,H=L-A.y,Z=A.isDragging;A.x=pe,A.y=L,(Z||Math.abs(A.startX-pe)>=s||Math.abs(A.startY-L)>=s)&&(v&&(Je=!0),Z||(A.isDragging=!0),xo(te,H),Z||w&&w(A))}},ys=A.onPress=function(ee){tt(ee,1)||ee&&ee.button||(A.axis=_n=null,Ze.pause(),A.isPressed=!0,ee=al(ee),Sn=Zr=0,A.startX=A.x=ee.clientX,A.startY=A.y=ee.clientY,A._vx.reset(),A._vy.reset(),Xt(D?a:Ye,hr[1],Ti,_i,!0),A.deltaX=A.deltaY=0,x&&x(A))},ie=A.onRelease=function(ee){if(!tt(ee,1)){Gt(D?a:Ye,hr[1],Ti,!0);var G=!isNaN(A.y-A.startY),pe=A.isDragging,L=pe&&(Math.abs(A.x-A.startX)>3||Math.abs(A.y-A.startY)>3),te=al(ee);!L&&G&&(A._vx.reset(),A._vy.reset(),c&&me&&jt.delayedCall(.08,function(){if(Wl()-Jr>300&&!ee.defaultPrevented){if(ee.target.click)ee.target.click();else if(Ye.createEvent){var H=Ye.createEvent("MouseEvents");H.initMouseEvent("click",!0,!0,Mn,1,te.screenX,te.screenY,te.clientX,te.clientY,!1,!1,!1,!1,0,null),ee.target.dispatchEvent(H)}}})),A.isDragging=A.isGesturing=A.isPressed=!1,f&&pe&&!D&&Ze.restart(!0),m&&pe&&m(A),_&&_(A,L)}},xs=function(G){return G.touches&&G.touches.length>1&&(A.isGesturing=!0)&&I(G,A.isDragging)},lr=function(){return(A.isGesturing=!1)||P(A)},ur=function(G){if(!tt(G)){var pe=et(),L=Si();yo((pe-vs)*be,(L-vo)*be,1),vs=pe,vo=L,f&&Ze.restart(!0)}},cr=function(G){if(!tt(G)){G=al(G,c),W&&(He=!0);var pe=(G.deltaMode===1?l:G.deltaMode===2?Mn.innerHeight:1)*y;yo(G.deltaX*pe,G.deltaY*pe,0),f&&!D&&Ze.restart(!0)}},ws=function(G){if(!tt(G)){var pe=G.clientX,L=G.clientY,te=pe-A.x,H=L-A.y;A.x=pe,A.y=L,he=!0,f&&Ze.restart(!0),(te||H)&&xo(te,H)}},wo=function(G){A.event=G,B(A)},ei=function(G){A.event=G,X(A)},Xa=function(G){return tt(G)||al(G,c)&&de(A)};Ze=A._dc=jt.delayedCall(h||.25,gc).pause(),A.deltaX=A.deltaY=0,A._vx=d0(0,50,!0),A._vy=d0(0,50,!0),A.scrollX=et,A.scrollY=Si,A.isDragging=A.isGesturing=A.isPressed=!1,yS(this),A.enable=function(ee){return A.isEnabled||(Xt(ki?Ye:a,"scroll",c0),o.indexOf("scroll")>=0&&Xt(ki?Ye:a,"scroll",ur,_i,ve),o.indexOf("wheel")>=0&&Xt(a,"wheel",cr,_i,ve),(o.indexOf("touch")>=0&&gS||o.indexOf("pointer")>=0)&&(Xt(a,hr[0],ys,_i,ve),Xt(Ye,hr[2],ie),Xt(Ye,hr[3],ie),me&&Xt(a,"click",Ga,!0,!0),de&&Xt(a,"click",Xa),I&&Xt(Ye,"gesturestart",xs),P&&Xt(Ye,"gestureend",lr),B&&Xt(a,Es+"enter",wo),X&&Xt(a,Es+"leave",ei),K&&Xt(a,Es+"move",ws)),A.isEnabled=!0,ee&&ee.type&&ys(ee),Q&&Q(A)),A},A.disable=function(){A.isEnabled&&(Xo.filter(function(ee){return ee!==A&&Hl(ee.target)}).length||Gt(ki?Ye:a,"scroll",c0),A.isPressed&&(A._vx.reset(),A._vy.reset(),Gt(D?a:Ye,hr[1],Ti,!0)),Gt(ki?Ye:a,"scroll",ur,ve),Gt(a,"wheel",cr,ve),Gt(a,hr[0],ys,ve),Gt(Ye,hr[2],ie),Gt(Ye,hr[3],ie),Gt(a,"click",Ga,!0),Gt(a,"click",Xa),Gt(Ye,"gesturestart",xs),Gt(Ye,"gestureend",lr),Gt(a,Es+"enter",wo),Gt(a,Es+"leave",ei),Gt(a,Es+"move",ws),A.isEnabled=A.isPressed=A.isDragging=!1,at&&at(A))},A.kill=A.revert=function(){A.disable();var ee=Xo.indexOf(A);ee>=0&&Xo.splice(ee,1),ci===A&&(ci=0)},Xo.push(A),D&&Hl(a)&&(ci=A),A.enable(g)},o8(e,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),e}();Qe.version="3.12.5";Qe.create=function(e){return new Qe(e)};Qe.register=_S;Qe.getAll=function(){return Xo.slice()};Qe.getById=function(e){return Xo.filter(function(t){return t.vars.id===e})[0]};xS()&&jt.registerPlugin(Qe);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var U,Mo,le,De,yr,Te,SS,bf,Nu,Yl,_l,Vc,zt,ch,f0,Qt,ux,cx,Ao,kS,dp,CS,Kt,h0,TS,PS,Ri,p0,f1,ca,h1,_f,m0,fp,Bc=1,Lt=Date.now,hp=Lt(),tr=0,Sl=0,dx=function(t,n,r){var i=jn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return r["_"+n+"Clamp"]=i,i?t.substr(6,t.length-7):t},fx=function(t,n){return n&&(!jn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},l8=function e(){return Sl&&requestAnimationFrame(e)},hx=function(){return ch=1},px=function(){return ch=0},Nr=function(t){return t},kl=function(t){return Math.round(t*1e5)/1e5||0},jS=function(){return typeof window<"u"},ES=function(){return U||jS()&&(U=window.gsap)&&U.registerPlugin&&U},oo=function(t){return!!~SS.indexOf(t)},RS=function(t){return(t==="Height"?h1:le["inner"+t])||yr["client"+t]||Te["client"+t]},MS=function(t){return rs(t,"getBoundingClientRect")||(oo(t)?function(){return Md.width=le.innerWidth,Md.height=h1,Md}:function(){return ai(t)})},u8=function(t,n,r){var i=r.d,s=r.d2,o=r.a;return(o=rs(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(n?RS(s):t["client"+s])||0}},c8=function(t,n){return!n||~Hr.indexOf(t)?MS(t):function(){return Md}},$r=function(t,n){var r=n.s,i=n.d2,s=n.d,o=n.a;return Math.max(0,(r="scroll"+i)&&(o=rs(t,r))?o()-MS(t)()[s]:oo(t)?(yr[r]||Te[r])-RS(i):t[r]-t["offset"+i])},Uc=function(t,n){for(var r=0;r<Ao.length;r+=3)(!n||~n.indexOf(Ao[r+1]))&&t(Ao[r],Ao[r+1],Ao[r+2])},jn=function(t){return typeof t=="string"},tn=function(t){return typeof t=="function"},Cl=function(t){return typeof t=="number"},Rs=function(t){return typeof t=="object"},ll=function(t,n,r){return t&&t.progress(n?0:1)&&r&&t.pause()},pp=function(t,n){if(t.enabled){var r=t._ctx?t._ctx.add(function(){return n(t)}):n(t);r&&r.totalTime&&(t.callbackAnimation=r)}},ko=Math.abs,AS="left",DS="top",p1="right",m1="bottom",Ks="width",qs="height",Gl="Right",Xl="Left",Kl="Top",ql="Bottom",nt="padding",Xn="margin",Ma="Width",g1="Height",ut="px",Kn=function(t){return le.getComputedStyle(t)},d8=function(t){var n=Kn(t).position;t.style.position=n==="absolute"||n==="fixed"?n:"relative"},mx=function(t,n){for(var r in n)r in t||(t[r]=n[r]);return t},ai=function(t,n){var r=n&&Kn(t)[f0]!=="matrix(1, 0, 0, 1, 0, 0)"&&U.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return r&&r.progress(0).kill(),i},Sf=function(t,n){var r=n.d2;return t["offset"+r]||t["client"+r]||0},NS=function(t){var n=[],r=t.labels,i=t.duration(),s;for(s in r)n.push(r[s]/i);return n},f8=function(t){return function(n){return U.utils.snap(NS(t),n)}},v1=function(t){var n=U.utils.snap(t),r=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return r?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return n(i);if(s>0){for(i-=o,a=0;a<r.length;a++)if(r[a]>=i)return r[a];return r[a-1]}else for(a=r.length,i+=o;a--;)if(r[a]<=i)return r[a];return r[0]}:function(i,s,o){o===void 0&&(o=.001);var a=n(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:n(s<0?i-t:i+t)}},h8=function(t){return function(n,r){return v1(NS(t))(n,r.direction)}},Wc=function(t,n,r,i){return r.split(",").forEach(function(s){return t(n,s,i)})},vt=function(t,n,r,i,s){return t.addEventListener(n,r,{passive:!i,capture:!!s})},gt=function(t,n,r,i){return t.removeEventListener(n,r,!!i)},Hc=function(t,n,r){r=r&&r.wheelHandler,r&&(t(n,"wheel",r),t(n,"touchmove",r))},gx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Yc={toggleActions:"play",anticipatePin:0},kf={top:0,left:0,center:.5,bottom:1,right:1},Pd=function(t,n){if(jn(t)){var r=t.indexOf("="),i=~r?+(t.charAt(r-1)+1)*parseFloat(t.substr(r+1)):0;~r&&(t.indexOf("%")>r&&(i*=n/100),t=t.substr(0,r-1)),t=i+(t in kf?kf[t]*n:~t.indexOf("%")?parseFloat(t)*n/100:parseFloat(t)||0)}return t},Gc=function(t,n,r,i,s,o,a,l){var u=s.startColor,c=s.endColor,f=s.fontSize,h=s.indent,p=s.fontWeight,y=De.createElement("div"),g=oo(r)||rs(r,"pinType")==="fixed",w=t.indexOf("scroller")!==-1,m=g?Te:r,v=t.indexOf("start")!==-1,x=v?u:c,_="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return _+="position:"+((w||l)&&g?"fixed;":"absolute;"),(w||l||!g)&&(_+=(i===dt?p1:m1)+":"+(o+parseFloat(h))+"px;"),a&&(_+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),y._isStart=v,y.setAttribute("class","gsap-marker-"+t+(n?" marker-"+n:"")),y.style.cssText=_,y.innerText=n||n===0?t+"-"+n:t,m.children[0]?m.insertBefore(y,m.children[0]):m.appendChild(y),y._offset=y["offset"+i.op.d2],jd(y,0,i,v),y},jd=function(t,n,r,i){var s={display:"block"},o=r[i?"os2":"p2"],a=r[i?"p2":"os2"];t._isFlipped=i,s[r.a+"Percent"]=i?-100:0,s[r.a]=i?"1px":0,s["border"+o+Ma]=1,s["border"+a+Ma]=0,s[r.p]=n+"px",U.set(t,s)},re=[],g0={},Ou,vx=function(){return Lt()-tr>34&&(Ou||(Ou=requestAnimationFrame(fi)))},Co=function(){(!Kt||!Kt.isPressed||Kt.startX>Te.clientWidth)&&(se.cache++,Kt?Ou||(Ou=requestAnimationFrame(fi)):fi(),tr||lo("scrollStart"),tr=Lt())},mp=function(){PS=le.innerWidth,TS=le.innerHeight},Tl=function(){se.cache++,!zt&&!CS&&!De.fullscreenElement&&!De.webkitFullscreenElement&&(!h0||PS!==le.innerWidth||Math.abs(le.innerHeight-TS)>le.innerHeight*.25)&&bf.restart(!0)},ao={},p8=[],OS=function e(){return gt(q,"scrollEnd",e)||Ls(!0)},lo=function(t){return ao[t]&&ao[t].map(function(n){return n()})||p8},Tn=[],zS=function(t){for(var n=0;n<Tn.length;n+=5)(!t||Tn[n+4]&&Tn[n+4].query===t)&&(Tn[n].style.cssText=Tn[n+1],Tn[n].getBBox&&Tn[n].setAttribute("transform",Tn[n+2]||""),Tn[n+3].uncache=1)},y1=function(t,n){var r;for(Qt=0;Qt<re.length;Qt++)r=re[Qt],r&&(!n||r._ctx===n)&&(t?r.kill(1):r.revert(!0,!0));_f=!0,n&&zS(n),n||lo("revert")},IS=function(t,n){se.cache++,(n||!Zt)&&se.forEach(function(r){return tn(r)&&r.cacheID++&&(r.rec=0)}),jn(t)&&(le.history.scrollRestoration=f1=t)},Zt,Qs=0,yx,m8=function(){if(yx!==Qs){var t=yx=Qs;requestAnimationFrame(function(){return t===Qs&&Ls(!0)})}},LS=function(){Te.appendChild(ca),h1=!Kt&&ca.offsetHeight||le.innerHeight,Te.removeChild(ca)},xx=function(t){return Nu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=t?"none":"block"})},Ls=function(t,n){if(tr&&!t&&!_f){vt(q,"scrollEnd",OS);return}LS(),Zt=q.isRefreshing=!0,se.forEach(function(i){return tn(i)&&++i.cacheID&&(i.rec=i())});var r=lo("refreshInit");kS&&q.sort(),n||y1(),se.forEach(function(i){tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),re.slice(0).forEach(function(i){return i.refresh()}),_f=!1,re.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),m0=1,xx(!0),re.forEach(function(i){var s=$r(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),xx(!1),m0=0,r.forEach(function(i){return i&&i.render&&i.render(-1)}),se.forEach(function(i){tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),IS(f1,1),bf.pause(),Qs++,Zt=2,fi(2),re.forEach(function(i){return tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Zt=q.isRefreshing=!1,lo("refresh")},v0=0,Ed=1,Ql,fi=function(t){if(t===2||!Zt&&!_f){q.isUpdating=!0,Ql&&Ql.update(0);var n=re.length,r=Lt(),i=r-hp>=50,s=n&&re[0].scroll();if(Ed=v0>s?-1:1,Zt||(v0=s),i&&(tr&&!ch&&r-tr>200&&(tr=0,lo("scrollEnd")),_l=hp,hp=r),Ed<0){for(Qt=n;Qt-- >0;)re[Qt]&&re[Qt].update(0,i);Ed=1}else for(Qt=0;Qt<n;Qt++)re[Qt]&&re[Qt].update(0,i);q.isUpdating=!1}Ou=0},y0=[AS,DS,m1,p1,Xn+ql,Xn+Gl,Xn+Kl,Xn+Xl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Rd=y0.concat([Ks,qs,"boxSizing","max"+Ma,"max"+g1,"position",Xn,nt,nt+Kl,nt+Gl,nt+ql,nt+Xl]),g8=function(t,n,r){da(r);var i=t._gsap;if(i.spacerIsNative)da(i.spacerState);else if(t._gsap.swappedIn){var s=n.parentNode;s&&(s.insertBefore(t,n),s.removeChild(n))}t._gsap.swappedIn=!1},gp=function(t,n,r,i){if(!t._gsap.swappedIn){for(var s=y0.length,o=n.style,a=t.style,l;s--;)l=y0[s],o[l]=r[l];o.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(o.display="inline-block"),a[m1]=a[p1]="auto",o.flexBasis=r.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ks]=Sf(t,en)+ut,o[qs]=Sf(t,dt)+ut,o[nt]=a[Xn]=a[DS]=a[AS]="0",da(i),a[Ks]=a["max"+Ma]=r[Ks],a[qs]=a["max"+g1]=r[qs],a[nt]=r[nt],t.parentNode!==n&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),t._gsap.swappedIn=!0}},v8=/([A-Z])/g,da=function(t){if(t){var n=t.t.style,r=t.length,i=0,s,o;for((t.t._gsap||U.core.getCache(t.t)).uncache=1;i<r;i+=2)o=t[i+1],s=t[i],o?n[s]=o:n[s]&&n.removeProperty(s.replace(v8,"-$1").toLowerCase())}},Xc=function(t){for(var n=Rd.length,r=t.style,i=[],s=0;s<n;s++)i.push(Rd[s],r[Rd[s]]);return i.t=t,i},y8=function(t,n,r){for(var i=[],s=t.length,o=r?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in n?n[a]:t[o+1]);return i.t=t.t,i},Md={left:0,top:0},wx=function(t,n,r,i,s,o,a,l,u,c,f,h,p,y){tn(t)&&(t=t(l)),jn(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Pd("0"+t.substr(3),r):0));var g=p?p.time():0,w,m,v;if(p&&p.seek(0),isNaN(t)||(t=+t),Cl(t))p&&(t=U.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,t)),a&&jd(a,r,i,!0);else{tn(n)&&(n=n(l));var x=(t||"0").split(" "),_,S,k,b;v=un(n,l)||Te,_=ai(v)||{},(!_||!_.left&&!_.top)&&Kn(v).display==="none"&&(b=v.style.display,v.style.display="block",_=ai(v),b?v.style.display=b:v.style.removeProperty("display")),S=Pd(x[0],_[i.d]),k=Pd(x[1]||"0",r),t=_[i.p]-u[i.p]-c+S+s-k,a&&jd(a,k,i,r-k<20||a._isStart&&k>20),r-=r-k}if(y&&(l[y]=t||-.001,t<0&&(t=0)),o){var T=t+r,j=o._isStart;w="scroll"+i.d2,jd(o,T,i,j&&T>20||!j&&(f?Math.max(Te[w],yr[w]):o.parentNode[w])<=T+1),f&&(u=ai(a),f&&(o.style[i.op.p]=u[i.op.p]-i.op.m-o._offset+ut))}return p&&v&&(w=ai(v),p.seek(h),m=ai(v),p._caScrollDist=w[i.p]-m[i.p],t=t/p._caScrollDist*h),p&&p.seek(g),p?t:Math.round(t)},x8=/(webkit|moz|length|cssText|inset)/i,bx=function(t,n,r,i){if(t.parentNode!==n){var s=t.style,o,a;if(n===Te){t._stOrig=s.cssText,a=Kn(t);for(o in a)!+o&&!x8.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=r,s.left=i}else s.cssText=t._stOrig;U.core.getCache(t).uncache=1,n.appendChild(t)}},FS=function(t,n,r){var i=n,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,r&&r()),s=i,i=o,o}},Kc=function(t,n,r){var i={};i[n.p]="+="+r,U.set(t,i)},_x=function(t,n){var r=us(t,n),i="_scroll"+n.p2,s=function o(a,l,u,c,f){var h=o.tween,p=l.onComplete,y={};u=u||r();var g=FS(r,u,function(){h.kill(),o.tween=0});return f=c&&f||0,c=c||a-u,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=y,y[i]=function(){return g(u+c*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){se.cache++,o.tween&&fi()},l.onComplete=function(){o.tween=0,p&&p.call(h)},h=o.tween=U.to(t,l),h};return t[i]=r,r.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vt(t,"wheel",r.wheelHandler),q.isTouch&&vt(t,"touchmove",r.wheelHandler),s},q=function(){function e(n,r){Mo||e.register(U)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),p0(this),this.init(n,r)}var t=e.prototype;return t.init=function(r,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Sl){this.update=this.refresh=this.kill=Nr;return}r=mx(jn(r)||Cl(r)||r.nodeType?{trigger:r}:r,Yc);var s=r,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,f=s.scrub,h=s.trigger,p=s.pin,y=s.pinSpacing,g=s.invalidateOnRefresh,w=s.anticipatePin,m=s.onScrubComplete,v=s.onSnapComplete,x=s.once,_=s.snap,S=s.pinReparent,k=s.pinSpacer,b=s.containerAnimation,T=s.fastScrollEnd,j=s.preventOverlaps,R=r.horizontal||r.containerAnimation&&r.horizontal!==!1?en:dt,E=!f&&f!==0,N=un(r.scroller||le),$=U.core.getCache(N),B=oo(N),X=("pinType"in r?r.pinType:rs(N,"pinType")||B&&"fixed")==="fixed",K=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],F=E&&r.toggleActions.split(" "),D="markers"in r?r.markers:Yc.markers,I=B?0:parseFloat(Kn(N)["border"+R.p2+Ma])||0,P=this,W=r.onRefreshInit&&function(){return r.onRefreshInit(P)},Q=u8(N,B,R),at=c8(N,B),de=0,be=0,ve=0,me=us(N,R),We,je,Vn,Ze,Je,he,He,ln,_n,A,Sn,Zr,_i,et,Si,vs,vo,pt,ki,Ye,ar,Bn,Jr,Ga,tt,gc,Ci,yo,xo,Ti,ys,ie,xs,lr,ur,cr,ws,wo,ei;if(P._startClamp=P._endClamp=!1,P._dir=R,w*=45,P.scroller=N,P.scroll=b?b.time.bind(b):me,Ze=me(),P.vars=r,i=i||r.animation,"refreshPriority"in r&&(kS=1,r.refreshPriority===-9999&&(Ql=P)),$.tweenScroll=$.tweenScroll||{top:_x(N,dt),left:_x(N,en)},P.tweenTo=We=$.tweenScroll[R.p],P.scrubDuration=function(L){xs=Cl(L)&&L,xs?ie?ie.duration(L):ie=U.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:xs,paused:!0,onComplete:function(){return m&&m(P)}}):(ie&&ie.progress(1).kill(),ie=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&r.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),Ti=0,l||(l=i.vars.id)),_&&((!Rs(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in Te.style&&U.set(B?[Te,yr]:N,{scrollBehavior:"auto"}),se.forEach(function(L){return tn(L)&&L.target===(B?De.scrollingElement||yr:N)&&(L.smooth=!1)}),Vn=tn(_.snapTo)?_.snapTo:_.snapTo==="labels"?f8(i):_.snapTo==="labelsDirectional"?h8(i):_.directional!==!1?function(L,te){return v1(_.snapTo)(L,Lt()-be<500?0:te.direction)}:U.utils.snap(_.snapTo),lr=_.duration||{min:.1,max:2},lr=Rs(lr)?Yl(lr.min,lr.max):Yl(lr,lr),ur=U.delayedCall(_.delay||xs/2||.1,function(){var L=me(),te=Lt()-be<500,H=We.tween;if((te||Math.abs(P.getVelocity())<10)&&!H&&!ch&&de!==L){var Z=(L-he)/et,mt=i&&!E?i.totalProgress():Z,ae=te?0:(mt-ys)/(Lt()-_l)*1e3||0,Ge=U.utils.clamp(-Z,1-Z,ko(ae/2)*ae/.185),Mt=Z+(_.inertia===!1?0:Ge),$e,Ee,xe=_,dr=xe.onStart,Ae=xe.onInterrupt,kn=xe.onComplete;if($e=Vn(Mt,P),Cl($e)||($e=Mt),Ee=Math.round(he+$e*et),L<=He&&L>=he&&Ee!==L){if(H&&!H._initted&&H.data<=ko(Ee-L))return;_.inertia===!1&&(Ge=$e-Z),We(Ee,{duration:lr(ko(Math.max(ko(Mt-mt),ko($e-mt))*.185/ae/.05||0)),ease:_.ease||"power3",data:ko(Ee-L),onInterrupt:function(){return ur.restart(!0)&&Ae&&Ae(P)},onComplete:function(){P.update(),de=me(),i&&(ie?ie.resetTo("totalProgress",$e,i._tTime/i._tDur):i.progress($e)),Ti=ys=i&&!E?i.totalProgress():P.progress,v&&v(P),kn&&kn(P)}},L,Ge*et,Ee-L-Ge*et),dr&&dr(P,We.tween)}}else P.isActive&&de!==L&&ur.restart(!0)}).pause()),l&&(g0[l]=P),h=P.trigger=un(h||p!==!0&&p),ei=h&&h._gsap&&h._gsap.stRevert,ei&&(ei=ei(P)),p=p===!0?h:un(p),jn(a)&&(a={targets:h,className:a}),p&&(y===!1||y===Xn||(y=!y&&p.parentNode&&p.parentNode.style&&Kn(p.parentNode).display==="flex"?!1:nt),P.pin=p,je=U.core.getCache(p),je.spacer?Si=je.pinState:(k&&(k=un(k),k&&!k.nodeType&&(k=k.current||k.nativeElement),je.spacerIsNative=!!k,k&&(je.spacerState=Xc(k))),je.spacer=pt=k||De.createElement("div"),pt.classList.add("pin-spacer"),l&&pt.classList.add("pin-spacer-"+l),je.pinState=Si=Xc(p)),r.force3D!==!1&&U.set(p,{force3D:!0}),P.spacer=pt=je.spacer,xo=Kn(p),Ga=xo[y+R.os2],Ye=U.getProperty(p),ar=U.quickSetter(p,R.a,ut),gp(p,pt,xo),vo=Xc(p)),D){Zr=Rs(D)?mx(D,gx):gx,A=Gc("scroller-start",l,N,R,Zr,0),Sn=Gc("scroller-end",l,N,R,Zr,0,A),ki=A["offset"+R.op.d2];var Xa=un(rs(N,"content")||N);ln=this.markerStart=Gc("start",l,Xa,R,Zr,ki,0,b),_n=this.markerEnd=Gc("end",l,Xa,R,Zr,ki,0,b),b&&(wo=U.quickSetter([ln,_n],R.a,ut)),!X&&!(Hr.length&&rs(N,"fixedMarkers")===!0)&&(d8(B?Te:N),U.set([A,Sn],{force3D:!0}),gc=U.quickSetter(A,R.a,ut),yo=U.quickSetter(Sn,R.a,ut))}if(b){var ee=b.vars.onUpdate,G=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){P.update(0,0,1),ee&&ee.apply(b,G||[])})}if(P.previous=function(){return re[re.indexOf(P)-1]},P.next=function(){return re[re.indexOf(P)+1]},P.revert=function(L,te){if(!te)return P.kill(!0);var H=L!==!1||!P.enabled,Z=zt;H!==P.isReverted&&(H&&(cr=Math.max(me(),P.scroll.rec||0),ve=P.progress,ws=i&&i.progress()),ln&&[ln,_n,A,Sn].forEach(function(mt){return mt.style.display=H?"none":"block"}),H&&(zt=P,P.update(H)),p&&(!S||!P.isActive)&&(H?g8(p,pt,Si):gp(p,pt,Kn(p),tt)),H||P.update(H),zt=Z,P.isReverted=H)},P.refresh=function(L,te,H,Z){if(!((zt||!P.enabled)&&!te)){if(p&&L&&tr){vt(e,"scrollEnd",OS);return}!Zt&&W&&W(P),zt=P,We.tween&&!H&&(We.tween.kill(),We.tween=0),ie&&ie.pause(),g&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var mt=Q(),ae=at(),Ge=b?b.duration():$r(N,R),Mt=et<=.01,$e=0,Ee=Z||0,xe=Rs(H)?H.end:r.end,dr=r.endTrigger||h,Ae=Rs(H)?H.start:r.start||(r.start===0||!h?0:p?"0 0":"0 100%"),kn=P.pinnedContainer=r.pinnedContainer&&un(r.pinnedContainer,P),Pr=h&&Math.max(0,re.indexOf(P))||0,St=Pr,kt,At,bs,vc,Dt,lt,jr,kh,pv,Ka,Er,qa,yc;for(D&&Rs(H)&&(qa=U.getProperty(A,R.p),yc=U.getProperty(Sn,R.p));St--;)lt=re[St],lt.end||lt.refresh(0,1)||(zt=P),jr=lt.pin,jr&&(jr===h||jr===p||jr===kn)&&!lt.isReverted&&(Ka||(Ka=[]),Ka.unshift(lt),lt.revert(!0,!0)),lt!==re[St]&&(Pr--,St--);for(tn(Ae)&&(Ae=Ae(P)),Ae=dx(Ae,"start",P),he=wx(Ae,h,mt,R,me(),ln,A,P,ae,I,X,Ge,b,P._startClamp&&"_startClamp")||(p?-.001:0),tn(xe)&&(xe=xe(P)),jn(xe)&&!xe.indexOf("+=")&&(~xe.indexOf(" ")?xe=(jn(Ae)?Ae.split(" ")[0]:"")+xe:($e=Pd(xe.substr(2),mt),xe=jn(Ae)?Ae:(b?U.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,he):he)+$e,dr=h)),xe=dx(xe,"end",P),He=Math.max(he,wx(xe||(dr?"100% 0":Ge),dr,mt,R,me()+$e,_n,Sn,P,ae,I,X,Ge,b,P._endClamp&&"_endClamp"))||-.001,$e=0,St=Pr;St--;)lt=re[St],jr=lt.pin,jr&&lt.start-lt._pinPush<=he&&!b&&lt.end>0&&(kt=lt.end-(P._startClamp?Math.max(0,lt.start):lt.start),(jr===h&&lt.start-lt._pinPush<he||jr===kn)&&isNaN(Ae)&&($e+=kt*(1-lt.progress)),jr===p&&(Ee+=kt));if(he+=$e,He+=$e,P._startClamp&&(P._startClamp+=$e),P._endClamp&&!Zt&&(P._endClamp=He||-.001,He=Math.min(He,$r(N,R))),et=He-he||(he-=.01)&&.001,Mt&&(ve=U.utils.clamp(0,1,U.utils.normalize(he,He,cr))),P._pinPush=Ee,ln&&$e&&(kt={},kt[R.a]="+="+$e,kn&&(kt[R.p]="-="+me()),U.set([ln,_n],kt)),p&&!(m0&&P.end>=$r(N,R)))kt=Kn(p),vc=R===dt,bs=me(),Bn=parseFloat(Ye(R.a))+Ee,!Ge&&He>1&&(Er=(B?De.scrollingElement||yr:N).style,Er={style:Er,value:Er["overflow"+R.a.toUpperCase()]},B&&Kn(Te)["overflow"+R.a.toUpperCase()]!=="scroll"&&(Er.style["overflow"+R.a.toUpperCase()]="scroll")),gp(p,pt,kt),vo=Xc(p),At=ai(p,!0),kh=X&&us(N,vc?en:dt)(),y?(tt=[y+R.os2,et+Ee+ut],tt.t=pt,St=y===nt?Sf(p,R)+et+Ee:0,St&&(tt.push(R.d,St+ut),pt.style.flexBasis!=="auto"&&(pt.style.flexBasis=St+ut)),da(tt),kn&&re.forEach(function(Qa){Qa.pin===kn&&Qa.vars.pinSpacing!==!1&&(Qa._subPinOffset=!0)}),X&&me(cr)):(St=Sf(p,R),St&&pt.style.flexBasis!=="auto"&&(pt.style.flexBasis=St+ut)),X&&(Dt={top:At.top+(vc?bs-he:kh)+ut,left:At.left+(vc?kh:bs-he)+ut,boxSizing:"border-box",position:"fixed"},Dt[Ks]=Dt["max"+Ma]=Math.ceil(At.width)+ut,Dt[qs]=Dt["max"+g1]=Math.ceil(At.height)+ut,Dt[Xn]=Dt[Xn+Kl]=Dt[Xn+Gl]=Dt[Xn+ql]=Dt[Xn+Xl]="0",Dt[nt]=kt[nt],Dt[nt+Kl]=kt[nt+Kl],Dt[nt+Gl]=kt[nt+Gl],Dt[nt+ql]=kt[nt+ql],Dt[nt+Xl]=kt[nt+Xl],vs=y8(Si,Dt,S),Zt&&me(0)),i?(pv=i._initted,dp(1),i.render(i.duration(),!0,!0),Jr=Ye(R.a)-Bn+et+Ee,Ci=Math.abs(et-Jr)>1,X&&Ci&&vs.splice(vs.length-2,2),i.render(0,!0,!0),pv||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),dp(0)):Jr=et,Er&&(Er.value?Er.style["overflow"+R.a.toUpperCase()]=Er.value:Er.style.removeProperty("overflow-"+R.a));else if(h&&me()&&!b)for(At=h.parentNode;At&&At!==Te;)At._pinOffset&&(he-=At._pinOffset,He-=At._pinOffset),At=At.parentNode;Ka&&Ka.forEach(function(Qa){return Qa.revert(!1,!0)}),P.start=he,P.end=He,Ze=Je=Zt?cr:me(),!b&&!Zt&&(Ze<cr&&me(cr),P.scroll.rec=0),P.revert(!1,!0),be=Lt(),ur&&(de=-1,ur.restart(!0)),zt=0,i&&E&&(i._initted||ws)&&i.progress()!==ws&&i.progress(ws||0,!0).render(i.time(),!0,!0),(Mt||ve!==P.progress||b||g)&&(i&&!E&&i.totalProgress(b&&he<-.001&&!ve?U.utils.normalize(he,He,0):ve,!0),P.progress=Mt||(Ze-he)/et===ve?0:ve),p&&y&&(pt._pinOffset=Math.round(P.progress*Jr)),ie&&ie.invalidate(),isNaN(qa)||(qa-=U.getProperty(A,R.p),yc-=U.getProperty(Sn,R.p),Kc(A,R,qa),Kc(ln,R,qa-(Z||0)),Kc(Sn,R,yc),Kc(_n,R,yc-(Z||0))),Mt&&!Zt&&P.update(),c&&!Zt&&!_i&&(_i=!0,c(P),_i=!1)}},P.getVelocity=function(){return(me()-Je)/(Lt()-_l)*1e3||0},P.endAnimation=function(){ll(P.callbackAnimation),i&&(ie?ie.progress(1):i.paused()?E||ll(i,P.direction<0,1):ll(i,i.reversed()))},P.labelToScroll=function(L){return i&&i.labels&&(he||P.refresh()||he)+i.labels[L]/i.duration()*et||0},P.getTrailing=function(L){var te=re.indexOf(P),H=P.direction>0?re.slice(0,te).reverse():re.slice(te+1);return(jn(L)?H.filter(function(Z){return Z.vars.preventOverlaps===L}):H).filter(function(Z){return P.direction>0?Z.end<=he:Z.start>=He})},P.update=function(L,te,H){if(!(b&&!H&&!L)){var Z=Zt===!0?cr:P.scroll(),mt=L?0:(Z-he)/et,ae=mt<0?0:mt>1?1:mt||0,Ge=P.progress,Mt,$e,Ee,xe,dr,Ae,kn,Pr;if(te&&(Je=Ze,Ze=b?me():Z,_&&(ys=Ti,Ti=i&&!E?i.totalProgress():ae)),w&&p&&!zt&&!Bc&&tr&&(!ae&&he<Z+(Z-Je)/(Lt()-_l)*w?ae=1e-4:ae===1&&He>Z+(Z-Je)/(Lt()-_l)*w&&(ae=.9999)),ae!==Ge&&P.enabled){if(Mt=P.isActive=!!ae&&ae<1,$e=!!Ge&&Ge<1,Ae=Mt!==$e,dr=Ae||!!ae!=!!Ge,P.direction=ae>Ge?1:-1,P.progress=ae,dr&&!zt&&(Ee=ae&&!Ge?0:ae===1?1:Ge===1?2:3,E&&(xe=!Ae&&F[Ee+1]!=="none"&&F[Ee+1]||F[Ee],Pr=i&&(xe==="complete"||xe==="reset"||xe in i))),j&&(Ae||Pr)&&(Pr||f||!i)&&(tn(j)?j(P):P.getTrailing(j).forEach(function(bs){return bs.endAnimation()})),E||(ie&&!zt&&!Bc?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",ae,i._tTime/i._tDur):(ie.vars.totalProgress=ae,ie.invalidate().restart())):i&&i.totalProgress(ae,!!(zt&&(be||L)))),p){if(L&&y&&(pt.style[y+R.os2]=Ga),!X)ar(kl(Bn+Jr*ae));else if(dr){if(kn=!L&&ae>Ge&&He+1>Z&&Z+1>=$r(N,R),S)if(!L&&(Mt||kn)){var St=ai(p,!0),kt=Z-he;bx(p,Te,St.top+(R===dt?kt:0)+ut,St.left+(R===dt?0:kt)+ut)}else bx(p,pt);da(Mt||kn?vs:vo),Ci&&ae<1&&Mt||ar(Bn+(ae===1&&!kn?Jr:0))}}_&&!We.tween&&!zt&&!Bc&&ur.restart(!0),a&&(Ae||x&&ae&&(ae<1||!fp))&&Nu(a.targets).forEach(function(bs){return bs.classList[Mt||x?"add":"remove"](a.className)}),o&&!E&&!L&&o(P),dr&&!zt?(E&&(Pr&&(xe==="complete"?i.pause().totalProgress(1):xe==="reset"?i.restart(!0).pause():xe==="restart"?i.restart(!0):i[xe]()),o&&o(P)),(Ae||!fp)&&(u&&Ae&&pp(P,u),K[Ee]&&pp(P,K[Ee]),x&&(ae===1?P.kill(!1,1):K[Ee]=0),Ae||(Ee=ae===1?1:3,K[Ee]&&pp(P,K[Ee]))),T&&!Mt&&Math.abs(P.getVelocity())>(Cl(T)?T:2500)&&(ll(P.callbackAnimation),ie?ie.progress(1):ll(i,xe==="reverse"?1:!ae,1))):E&&o&&!zt&&o(P)}if(yo){var At=b?Z/b.duration()*(b._caScrollDist||0):Z;gc(At+(A._isFlipped?1:0)),yo(At)}wo&&wo(-Z/b.duration()*(b._caScrollDist||0))}},P.enable=function(L,te){P.enabled||(P.enabled=!0,vt(N,"resize",Tl),B||vt(N,"scroll",Co),W&&vt(e,"refreshInit",W),L!==!1&&(P.progress=ve=0,Ze=Je=de=me()),te!==!1&&P.refresh())},P.getTween=function(L){return L&&We?We.tween:ie},P.setPositions=function(L,te,H,Z){if(b){var mt=b.scrollTrigger,ae=b.duration(),Ge=mt.end-mt.start;L=mt.start+Ge*L/ae,te=mt.start+Ge*te/ae}P.refresh(!1,!1,{start:fx(L,H&&!!P._startClamp),end:fx(te,H&&!!P._endClamp)},Z),P.update()},P.adjustPinSpacing=function(L){if(tt&&L){var te=tt.indexOf(R.d)+1;tt[te]=parseFloat(tt[te])+L+ut,tt[1]=parseFloat(tt[1])+L+ut,da(tt)}},P.disable=function(L,te){if(P.enabled&&(L!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,te||ie&&ie.pause(),cr=0,je&&(je.uncache=1),W&&gt(e,"refreshInit",W),ur&&(ur.pause(),We.tween&&We.tween.kill()&&(We.tween=0)),!B)){for(var H=re.length;H--;)if(re[H].scroller===N&&re[H]!==P)return;gt(N,"resize",Tl),B||gt(N,"scroll",Co)}},P.kill=function(L,te){P.disable(L,te),ie&&!te&&ie.kill(),l&&delete g0[l];var H=re.indexOf(P);H>=0&&re.splice(H,1),H===Qt&&Ed>0&&Qt--,H=0,re.forEach(function(Z){return Z.scroller===P.scroller&&(H=1)}),H||Zt||(P.scroll.rec=0),i&&(i.scrollTrigger=null,L&&i.revert({kill:!1}),te||i.kill()),ln&&[ln,_n,A,Sn].forEach(function(Z){return Z.parentNode&&Z.parentNode.removeChild(Z)}),Ql===P&&(Ql=0),p&&(je&&(je.uncache=1),H=0,re.forEach(function(Z){return Z.pin===p&&H++}),H||(je.spacer=0)),r.onKill&&r.onKill(P)},re.push(P),P.enable(!1,!1),ei&&ei(P),i&&i.add&&!et){var pe=P.update;P.update=function(){P.update=pe,he||He||P.refresh()},U.delayedCall(.01,P.update),et=.01,he=He=0}else P.refresh();p&&m8()},e.register=function(r){return Mo||(U=r||ES(),jS()&&window.document&&e.enable(),Mo=Sl),Mo},e.defaults=function(r){if(r)for(var i in r)Yc[i]=r[i];return Yc},e.disable=function(r,i){Sl=0,re.forEach(function(o){return o[i?"kill":"disable"](r)}),gt(le,"wheel",Co),gt(De,"scroll",Co),clearInterval(Vc),gt(De,"touchcancel",Nr),gt(Te,"touchstart",Nr),Wc(gt,De,"pointerdown,touchstart,mousedown",hx),Wc(gt,De,"pointerup,touchend,mouseup",px),bf.kill(),Uc(gt);for(var s=0;s<se.length;s+=3)Hc(gt,se[s],se[s+1]),Hc(gt,se[s],se[s+2])},e.enable=function(){if(le=window,De=document,yr=De.documentElement,Te=De.body,U&&(Nu=U.utils.toArray,Yl=U.utils.clamp,p0=U.core.context||Nr,dp=U.core.suppressOverwrites||Nr,f1=le.history.scrollRestoration||"auto",v0=le.pageYOffset,U.core.globals("ScrollTrigger",e),Te)){Sl=1,ca=document.createElement("div"),ca.style.height="100vh",ca.style.position="absolute",LS(),l8(),Qe.register(U),e.isTouch=Qe.isTouch,Ri=Qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),h0=Qe.isTouch===1,vt(le,"wheel",Co),SS=[le,De,yr,Te],U.matchMedia?(e.matchMedia=function(l){var u=U.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},U.addEventListener("matchMediaInit",function(){return y1()}),U.addEventListener("matchMediaRevert",function(){return zS()}),U.addEventListener("matchMedia",function(){Ls(0,1),lo("matchMedia")}),U.matchMedia("(orientation: portrait)",function(){return mp(),mp})):console.warn("Requires GSAP 3.11.0 or later"),mp(),vt(De,"scroll",Co);var r=Te.style,i=r.borderTopStyle,s=U.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=ai(Te),dt.m=Math.round(o.top+dt.sc())||0,en.m=Math.round(o.left+en.sc())||0,i?r.borderTopStyle=i:r.removeProperty("border-top-style"),Vc=setInterval(vx,250),U.delayedCall(.5,function(){return Bc=0}),vt(De,"touchcancel",Nr),vt(Te,"touchstart",Nr),Wc(vt,De,"pointerdown,touchstart,mousedown",hx),Wc(vt,De,"pointerup,touchend,mouseup",px),f0=U.utils.checkPrefix("transform"),Rd.push(f0),Mo=Lt(),bf=U.delayedCall(.2,Ls).pause(),Ao=[De,"visibilitychange",function(){var l=le.innerWidth,u=le.innerHeight;De.hidden?(ux=l,cx=u):(ux!==l||cx!==u)&&Tl()},De,"DOMContentLoaded",Ls,le,"load",Ls,le,"resize",Tl],Uc(vt),re.forEach(function(l){return l.enable(0,1)}),a=0;a<se.length;a+=3)Hc(gt,se[a],se[a+1]),Hc(gt,se[a],se[a+2])}},e.config=function(r){"limitCallbacks"in r&&(fp=!!r.limitCallbacks);var i=r.syncInterval;i&&clearInterval(Vc)||(Vc=i)&&setInterval(vx,i),"ignoreMobileResize"in r&&(h0=e.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(Uc(gt)||Uc(vt,r.autoRefreshEvents||"none"),CS=(r.autoRefreshEvents+"").indexOf("resize")===-1)},e.scrollerProxy=function(r,i){var s=un(r),o=se.indexOf(s),a=oo(s);~o&&se.splice(o,a?6:2),i&&(a?Hr.unshift(le,i,Te,i,yr,i):Hr.unshift(s,i))},e.clearMatchMedia=function(r){re.forEach(function(i){return i._ctx&&i._ctx.query===r&&i._ctx.kill(!0,!0)})},e.isInViewport=function(r,i,s){var o=(jn(r)?un(r):r).getBoundingClientRect(),a=o[s?Ks:qs]*i||0;return s?o.right-a>0&&o.left+a<le.innerWidth:o.bottom-a>0&&o.top+a<le.innerHeight},e.positionInViewport=function(r,i,s){jn(r)&&(r=un(r));var o=r.getBoundingClientRect(),a=o[s?Ks:qs],l=i==null?a/2:i in kf?kf[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/le.innerWidth:(o.top+l)/le.innerHeight},e.killAll=function(r){if(re.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),r!==!0){var i=ao.killAll||[];ao={},i.forEach(function(s){return s()})}},e}();q.version="3.12.5";q.saveStyles=function(e){return e?Nu(e).forEach(function(t){if(t&&t.style){var n=Tn.indexOf(t);n>=0&&Tn.splice(n,5),Tn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),U.core.getCache(t),p0())}}):Tn};q.revert=function(e,t){return y1(!e,t)};q.create=function(e,t){return new q(e,t)};q.refresh=function(e){return e?Tl():(Mo||q.register())&&Ls(!0)};q.update=function(e){return++se.cache&&fi(e===!0?2:0)};q.clearScrollMemory=IS;q.maxScroll=function(e,t){return $r(e,t?en:dt)};q.getScrollFunc=function(e,t){return us(un(e),t?en:dt)};q.getById=function(e){return g0[e]};q.getAll=function(){return re.filter(function(e){return e.vars.id!=="ScrollSmoother"})};q.isScrolling=function(){return!!tr};q.snapDirectional=v1;q.addEventListener=function(e,t){var n=ao[e]||(ao[e]=[]);~n.indexOf(t)||n.push(t)};q.removeEventListener=function(e,t){var n=ao[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)};q.batch=function(e,t){var n=[],r={},i=t.interval||.016,s=t.batchMax||1e9,o=function(u,c){var f=[],h=[],p=U.delayedCall(i,function(){c(f,h),f=[],h=[]}).pause();return function(y){f.length||p.restart(!0),f.push(y.trigger),h.push(y),s<=f.length&&p.progress(1)}},a;for(a in t)r[a]=a.substr(0,2)==="on"&&tn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return tn(s)&&(s=s(),vt(q,"refresh",function(){return s=t.batchMax()})),Nu(e).forEach(function(l){var u={};for(a in r)u[a]=r[a];u.trigger=l,n.push(q.create(u))}),n};var Sx=function(t,n,r,i){return n>i?t(i):n<0&&t(0),r>i?(i-n)/(r-n):r<0?n/(n-r):1},vp=function e(t,n){n===!0?t.style.removeProperty("touch-action"):t.style.touchAction=n===!0?"auto":n?"pan-"+n+(Qe.isTouch?" pinch-zoom":""):"none",t===yr&&e(Te,n)},qc={auto:1,scroll:1},w8=function(t){var n=t.event,r=t.target,i=t.axis,s=(n.changedTouches?n.changedTouches[0]:n).target,o=s._gsap||U.core.getCache(s),a=Lt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Te&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(qc[(l=Kn(s)).overflowY]||qc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==r&&!oo(s)&&(qc[(l=Kn(s)).overflowY]||qc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},$S=function(t,n,r,i){return Qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:i=i&&w8,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return r&&vt(De,Qe.eventTypes[0],Cx,!1,!0)},onDisable:function(){return gt(De,Qe.eventTypes[0],Cx,!0)}})},b8=/(input|label|select|textarea)/i,kx,Cx=function(t){var n=b8.test(t.target.tagName);(n||kx)&&(t._gsapAllow=!0,kx=n)},_8=function(t){Rs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var n=t,r=n.normalizeScrollX,i=n.momentum,s=n.allowNestedScroll,o=n.onRelease,a,l,u=un(t.target)||yr,c=U.core.globals().ScrollSmoother,f=c&&c.get(),h=Ri&&(t.content&&un(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),p=us(u,dt),y=us(u,en),g=1,w=(Qe.isTouch&&le.visualViewport?le.visualViewport.scale*le.visualViewport.width:le.outerWidth)/le.innerWidth,m=0,v=tn(i)?function(){return i(a)}:function(){return i||2.8},x,_,S=$S(u,t.type,!0,s),k=function(){return _=!1},b=Nr,T=Nr,j=function(){l=$r(u,dt),T=Yl(Ri?1:0,l),r&&(b=Yl(0,$r(u,en))),x=Qs},R=function(){h._gsap.y=kl(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},E=function(){if(_){requestAnimationFrame(k);var D=kl(a.deltaY/2),I=T(p.v-D);if(h&&I!==p.v+p.offset){p.offset=I-p.v;var P=kl((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",p.cacheID=se.cache,fi()}return!0}p.offset&&R(),_=!0},N,$,B,X,K=function(){j(),N.isActive()&&N.vars.scrollY>l&&(p()>l?N.progress(1)&&p(l):N.resetTo("scrollY",l))};return h&&U.set(h,{y:"+=0"}),t.ignoreCheck=function(F){return Ri&&F.type==="touchmove"&&E()||g>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},t.onPress=function(){_=!1;var F=g;g=kl((le.visualViewport&&le.visualViewport.scale||1)/w),N.pause(),F!==g&&vp(u,g>1.01?!0:r?!1:"x"),$=y(),B=p(),j(),x=Qs},t.onRelease=t.onGestureStart=function(F,D){if(p.offset&&R(),!D)X.restart(!0);else{se.cache++;var I=v(),P,W;r&&(P=y(),W=P+I*.05*-F.velocityX/.227,I*=Sx(y,P,W,$r(u,en)),N.vars.scrollX=b(W)),P=p(),W=P+I*.05*-F.velocityY/.227,I*=Sx(p,P,W,$r(u,dt)),N.vars.scrollY=T(W),N.invalidate().duration(I).play(.01),(Ri&&N.vars.scrollY>=l||P>=l-1)&&U.to({},{onUpdate:K,duration:I})}o&&o(F)},t.onWheel=function(){N._ts&&N.pause(),Lt()-m>1e3&&(x=0,m=Lt())},t.onChange=function(F,D,I,P,W){if(Qs!==x&&j(),D&&r&&y(b(P[2]===D?$+(F.startX-F.x):y()+D-P[1])),I){p.offset&&R();var Q=W[2]===I,at=Q?B+F.startY-F.y:p()+I-W[1],de=T(at);Q&&at!==de&&(B+=de-at),p(de)}(I||D)&&fi()},t.onEnable=function(){vp(u,r?!1:"x"),q.addEventListener("refresh",K),vt(le,"resize",K),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=y.smooth=!1),S.enable()},t.onDisable=function(){vp(u,!0),gt(le,"resize",K),q.removeEventListener("refresh",K),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new Qe(t),a.iOS=Ri,Ri&&!p()&&p(1),Ri&&U.ticker.add(Nr),X=a._dc,N=U.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:FS(p,p(),function(){return N.pause()})},onUpdate:fi,onComplete:X.vars.onComplete}),a};q.sort=function(e){return re.sort(e||function(t,n){return(t.vars.refreshPriority||0)*-1e6+t.start-(n.start+(n.vars.refreshPriority||0)*-1e6)})};q.observe=function(e){return new Qe(e)};q.normalizeScroll=function(e){if(typeof e>"u")return Kt;if(e===!0&&Kt)return Kt.enable();if(e===!1){Kt&&Kt.kill(),Kt=e;return}var t=e instanceof Qe?e:_8(e);return Kt&&Kt.target===t.target&&Kt.kill(),oo(t.target)&&(Kt=t),t};q.core={_getVelocityProp:d0,_inputObserver:$S,_scrollers:se,_proxies:Hr,bridge:{ss:function(){tr||lo("scrollStart"),tr=Lt()},ref:function(){return zt}}};ES()&&U.registerPlugin(q);M.section`
  background: linear-gradient(
    to bottom,
    rgba(0, 20, 40, 0.95),
    rgba(0, 40, 80, 0.9)
  );
  border-radius: 15px;
  padding: 3rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(78, 198, 255, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  min-height: 400px;
  height: auto;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  overflow: visible;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/asset/oceanbg.jpg") center/cover;
    opacity: 0.1;
    z-index: 0;
    border-radius: 15px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 255, 255, 0.2);
    border-color: rgba(78, 198, 255, 0.5);

    .section-icon {
      transform: scale(1.1) rotate(5deg);
    }

    .section-content {
      transform: translateY(-5px);
    }
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;

    .section-icon {
      width: 70px;
      height: 70px;
      background: rgba(78, 198, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      color: #4fc3f7;
      transition: all 0.3s ease;
    }

    h2 {
      color: #4fc3f7;
      font-size: 2.2rem;
      margin: 0;
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
    }
  }

  .section-content {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;

    p {
      color: #e1f5fe;
      line-height: 1.8;
      font-size: 1.2rem;
      text-align: justify;
      margin-bottom: 1.5rem;
    }

    .section-stats {
      display: flex;
      gap: 2rem;
      margin-top: 1.5rem;

      .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        .number {
          font-size: 2rem;
          color: #4fc3f7;
          font-weight: bold;
        }

        .label {
          font-size: 1rem;
          color: #b3e5fc;
        }
      }
    }
  }

  .section-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    position: relative;
    z-index: 1;

    button {
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 25px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      background: linear-gradient(45deg, #4fc3f7, #0288d1);
      color: white;
      text-transform: uppercase;
      letter-spacing: 1px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
      }

      &.secondary {
        background: transparent;
        border: 2px solid #4fc3f7;
        color: #4fc3f7;

        &:hover {
          background: rgba(78, 198, 255, 0.1);
        }
      }
    }
  }
`;const To=M.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 20, 40, 0.95),
    rgba(0, 40, 80, 0.9)
  );
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(78, 198, 255, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  min-height: 400px;
  height: auto;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/asset/oceanbg.jpg") center/cover;
    opacity: 0.1;
    z-index: 0;
    border-radius: 15px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 255, 255, 0.2);
    border-color: rgba(78, 198, 255, 0.5);

    img {
      transform: scale(1.05);
    }

    .info-content {
      transform: translateY(-5px);
    }
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  .info-content {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;

    h3 {
      color: #4fc3f7;
      font-size: 1.8rem;
      margin: 1rem 0;
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
    }

    p {
      color: #e1f5fe;
      line-height: 1.8;
      font-size: 1.1rem;
      text-align: justify;
      margin-bottom: 1.5rem;
    }

    .know-more-btn {
      display: inline-block;
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 25px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      background: linear-gradient(45deg, #4fc3f7, #0288d1);
      color: white;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-decoration: none;
      text-align: center;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
      }
    }
  }
`,S8=M.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,k8=()=>{const[e,t]=C.useState(!1),n=C.useRef(null),r=C.useRef(null),i=C.useRef(null),s=C.useRef(null),o=C.useRef(null),a=C.useRef(null),l=C.useRef(null),u=C.useRef(null),c=C.useRef([]),f=C.useRef([]);C.useEffect(()=>{let w=!1;const m=()=>{w||(window.requestAnimationFrame(()=>{const S=window.scrollY;if(r.current&&(r.current.style.top=50+S*-.5+"%"),i.current&&(i.current.style.top=S*-1.5+"px",i.current.style.left=S*2+"px"),s.current&&(s.current.style.top=S*-1.5+"px",s.current.style.left=S*-5+"px"),o.current){let k=S*1.5;k>200&&(k=200),o.current.style.marginTop=k+"px"}if(a.current&&(a.current.style.top=S*-.15+"px"),l.current){l.current.style.top=S*.25+"px";const k=window.innerHeight*.5,b=window.innerHeight;if(S>k){const T=Math.max(0,1-(S-k)/(b-k));l.current.style.opacity=T}else l.current.style.opacity=1}n.current&&(n.current.style.top=S*-.5+"px"),w=!1}),w=!0)};window.addEventListener("scroll",m);const v={root:null,rootMargin:"0px",threshold:.1},x=S=>{S.forEach(k=>{k.isIntersecting&&k.target.classList.add("visible")})},_=new IntersectionObserver(x,v);return c.current.forEach(S=>{S&&_.observe(S)}),()=>{window.removeEventListener("scroll",m),c.current.forEach(S=>{S&&_.unobserve(S)})}},[]),C.useEffect(()=>(f.current.forEach((w,m)=>{w&&ht.fromTo(w,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:w,start:"top 80%",toggleActions:"play none none reverse"},delay:m*.2})}),()=>{q.getAll().forEach(w=>w.kill())}),[]);const h=w=>{w.preventDefault(),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},p=w=>{w&&!c.current.includes(w)&&c.current.push(w)},y=()=>{t(w=>!w)},g=()=>{window.scrollTo({top:0,behavior:"smooth"})};return d.jsxs("div",{className:"main-container",children:[d.jsxs(U5,{children:[d.jsx(Bg,{}),d.jsxs("section",{className:"parallax-section",children:[d.jsxs("h2",{id:"text",ref:r,children:[d.jsx("span",{children:"Take a look into"}),d.jsx("br",{}),"Under-Water"]}),d.jsx("img",{src:"asset/forest3-1.jpg",id:"forest",ref:l,style:{height:"80%"},alt:"Forest"}),d.jsx("img",{src:"asset/bird1.png",id:"bird1",ref:i,alt:"Bird 1"}),d.jsx("img",{src:"asset/bird2.png",id:"bird2",ref:s,alt:"Bird 2"}),d.jsx("button",{id:"btn",ref:o,onClick:h,children:"Dive Deep"}),d.jsx("img",{src:"asset/rocks.png",id:"rocks",ref:a,alt:"Rocks"}),d.jsx("img",{src:"asset/water.png",id:"water",ref:u,alt:"Water"})]}),d.jsxs("div",{className:"sec",id:"our-story",children:[d.jsx("h2",{children:"Ocean-Guardian"}),d.jsxs("p",{className:"ocean-text",style:{fontSize:"1.4rem"},children:["Ocean Guardian is a comprehensive website dedicated to exploring and understanding marine life in detail. It serves as an educational platform that provides in-depth insights into the diverse species inhabiting our oceans, from microscopic plankton to majestic whales. The website features a well-organized database where users can learn about different marine organisms, their scientific classifications, habitats, behaviors, and roles in the oceanic food chain. With high-quality images, detailed descriptions, and interesting facts, Ocean Guardian aims to make marine education accessible to students, researchers, and ocean enthusiasts. Additionally, the platform includes up-to-date information on endangered species, the impact of climate change on marine ecosystems, and conservation efforts worldwide. Beyond species information, Ocean Guardian provides real-time oceanographic data, offering insights into ocean temperature, salinity, and pollution levels. This data is gathered from reliable sources such as marine research organizations and environmental agencies, ensuring accuracy and relevance. The website also features informative blogs and articles discussing topics like coral reef degradation, the effects of plastic pollution, and the importance of marine biodiversity. By raising awareness about the challenges facing our oceans, Ocean Guardian encourages users to take part in conservation efforts, whether through sustainable practices or supporting ocean protection initiatives. Through education and awareness, the website aims to inspire individuals to appreciate and safeguard the world's most vital ecosystem—our oceans.",d.jsx("br",{}),d.jsx("br",{}),"Ocean Guardian can further enhance its impact by incorporating several unique features that make learning about marine life more engaging and informative. An interactive marine ecosystem map can allow users to explore different underwater habitats like coral reefs, deep-sea trenches, and mangrove forests, offering insights into the species that thrive in each region. A Threats to Marine Life section can educate users on critical issues such as ocean acidification, rising temperatures, plastic pollution, and illegal fishing, with real-world case studies highlighting their devastating effects. To make the experience more immersive, the website could feature an ocean sounds and live feed section, where users can listen to real underwater recordings of whale songs, dolphin clicks, and ambient deep-sea sounds. Live streams from underwater cameras in marine reserves and deep-sea exploration sites would provide real-time glimpses of ocean life. Additionally, an Ocean Conservation Hub could guide users on how to participate in marine protection efforts, offering sustainable lifestyle tips, information on cleanup drives, and details on organizations working to preserve aquatic ecosystems. These additions would make Ocean Guardian not just an educational platform but also an interactive and action-driven resource for ocean lovers worldwide."]})]}),d.jsxs(S8,{children:[d.jsxs(To,{ref:p,className:"slide-from-left",children:[d.jsx("img",{src:"asset/ngo.jpg",alt:"NGOs Protecting Oceans"}),d.jsxs("div",{className:"info-content",children:[d.jsx("h3",{children:"NGOs Protecting Our Oceans"}),d.jsx("p",{children:"NGOs around the globe are actively engaged in cleaning up our beaches, protecting marine life, and advocating for sustainable ocean policies. Their efforts are crucial in preserving our marine ecosystems for future generations."}),d.jsx(Tt,{to:"/ngo",className:"know-more-btn",onClick:g,children:"Know More"})]})]}),d.jsxs(To,{ref:p,className:"slide-from-right",children:[d.jsx("img",{src:"asset/life.jpg",alt:"Marine Life"}),d.jsxs("div",{className:"info-content",children:[d.jsx("h3",{children:"The Vibrant Life Under Water"}),d.jsx("p",{children:"The ocean teems with a diverse range of species, from the smallest plankton to the largest whales. Discover the incredible biodiversity that makes our oceans so unique and vital to our planet's health."}),d.jsx(Tt,{to:"/underwater-life",className:"know-more-btn",onClick:g,children:"Know More"})]})]}),d.jsxs(To,{ref:p,className:"slide-from-left",children:[d.jsx("img",{src:"asset/reef.jpg",alt:"Coral Reefs"}),d.jsxs("div",{className:"info-content",children:[d.jsx("h3",{children:"Coral Reefs: Underwater Gardens"}),d.jsx("p",{children:"Coral reefs support countless marine species and provide essential ecosystem services. Learn about these underwater rainforests and the threats they face from climate change and human activities."}),d.jsx(Tt,{to:"/coral-reefs",className:"know-more-btn",onClick:g,children:"Know More"})]})]}),d.jsxs(To,{ref:p,className:"slide-from-right",children:[d.jsx("img",{src:"asset/deep.jpg",alt:"Deep Sea Exploration"}),d.jsxs("div",{className:"info-content",children:[d.jsx("h3",{children:"Deep Sea Exploration"}),d.jsx("p",{children:"Researchers venture into the depths to uncover the mysteries of the deep sea. Explore the latest discoveries and technological advancements in deep-sea exploration."}),d.jsx(Tt,{to:"/deep-sea",className:"know-more-btn",onClick:g,children:"Know More"})]})]}),d.jsxs(To,{ref:p,className:"slide-from-left",children:[d.jsx("img",{src:"asset/conserve.jpg",alt:"Ocean Conservation"}),d.jsxs("div",{className:"info-content",children:[d.jsx("h3",{children:"Ocean Conservation Initiatives"}),d.jsx("p",{children:"Sustainable practices, interactive awareness games, and innovative research to protect our oceans. Learn and participate in ocean conservation efforts."}),d.jsx(Tt,{to:"/conservation",className:"know-more-btn",onClick:g,children:"Know More"})]})]}),d.jsxs(To,{ref:p,className:"slide-from-right",children:[d.jsx("img",{src:"asset/research.jpg",alt:"Research"}),d.jsxs("div",{className:"info-content",children:[d.jsx("h3",{children:"Ocean Research & Innovation"}),d.jsx("p",{children:"Cutting-edge research and technological innovations are helping us better understand and protect our oceans. Discover the latest developments in marine science."}),d.jsx(Tt,{to:"/research",className:"know-more-btn",onClick:g,children:"Know More"})]})]})]}),d.jsx("footer",{children:d.jsx("div",{className:"footer-container",children:d.jsxs("div",{className:"footer-row",children:[d.jsxs("div",{className:"footer-col",children:[d.jsx("h4",{children:"About Ocean-Guardian"}),d.jsxs("ul",{children:[d.jsx("li",{children:d.jsx("a",{href:"#our-story",onClick:w=>{w.preventDefault(),document.getElementById("our-story").scrollIntoView({behavior:"smooth"})},children:"Our Story"})}),d.jsx("li",{children:d.jsx(Tt,{to:"/about?slide=0",onClick:g,children:"Mission"})}),d.jsx("li",{children:d.jsx(Tt,{to:"/about?slide=1",onClick:g,children:"Vision"})})]})]}),d.jsxs("div",{className:"footer-col",children:[d.jsx("h4",{children:"Quick Links"}),d.jsxs("ul",{children:[d.jsx("li",{children:d.jsx(Tt,{to:"/",children:"Home"})}),d.jsx("li",{children:d.jsx(Tt,{to:"/about",children:"About"})}),d.jsx("li",{children:d.jsx(Tt,{to:"/contact",children:"Contact"})})]})]}),d.jsxs("div",{className:"footer-col",children:[d.jsx("h4",{children:"Follow Us"}),d.jsxs("div",{className:"social-links",children:[d.jsx("a",{href:"#",children:d.jsx("img",{src:"asset/linkedin.png",alt:"LinkedIn"})}),d.jsx("a",{href:"#",children:d.jsx("img",{src:"asset/instagram.png",alt:"Instagram"})}),d.jsx("a",{href:"#",children:d.jsx("img",{src:"asset/facebook.png",alt:"Facebook"})}),d.jsx("a",{href:"#",children:d.jsx("img",{src:"asset/x.png",alt:"X"})})]})]}),d.jsxs("div",{className:"footer-col",children:[d.jsx("h4",{children:"Contact"}),d.jsxs("ul",{children:[d.jsx("li",{children:d.jsx("a",{href:"#",children:"Email: info@ocean-guardian.com"})}),d.jsx("li",{children:d.jsx("a",{href:"#",children:"Phone: +1234567890"})})]})]})]})})}),d.jsx(bi,{})]}),!e&&d.jsx("button",{onClick:y,className:"chatbot-toggle-btn",children:"Chat with Us"}),e&&d.jsx(Rj,{onClose:y}),d.jsx("style",{jsx:!0,children:`
        .conservation-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .play-game-btn {
          background: linear-gradient(45deg, #00d2ff, #3a7bd5);
          color: white;
          padding: 14px 35px;
          border-radius: 30px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 170, 255, 0.3);
          text-decoration: none;
        }

        .play-game-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 170, 255, 0.5);
          background: linear-gradient(45deg, #3a7bd5, #00d2ff);
        }
      `})]})},x1=C.createContext({});function w1(e){const t=C.useRef(null);return t.current===null&&(t.current=e()),t.current}const b1=typeof window<"u",VS=b1?C.useLayoutEffect:C.useEffect,dh=C.createContext(null),_1=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class C8 extends C.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=r instanceof HTMLElement&&r.offsetWidth||0,s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft,s.right=i-s.width-s.left}return null}componentDidUpdate(){}render(){return this.props.children}}function T8({children:e,isPresent:t,anchorX:n}){const r=C.useId(),i=C.useRef(null),s=C.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:o}=C.useContext(_1);return C.useInsertionEffect(()=>{const{width:a,height:l,top:u,left:c,right:f}=s.current;if(t||!i.current||!a||!l)return;const h=n==="left"?`left: ${c}`:`right: ${f}`;i.current.dataset.motionPopId=r;const p=document.createElement("style");return o&&(p.nonce=o),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${h}px !important;
            top: ${u}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[t]),d.jsx(C8,{isPresent:t,childRef:i,sizeRef:s,children:C.cloneElement(e,{ref:i})})}const P8=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o,anchorX:a})=>{const l=w1(j8),u=C.useId(),c=C.useCallback(h=>{l.set(h,!0);for(const p of l.values())if(!p)return;r&&r()},[l,r]),f=C.useMemo(()=>({id:u,initial:t,isPresent:n,custom:i,onExitComplete:c,register:h=>(l.set(h,!1),()=>l.delete(h))}),s?[Math.random(),c]:[n,c]);return C.useMemo(()=>{l.forEach((h,p)=>l.set(p,!1))},[n]),C.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),o==="popLayout"&&(e=d.jsx(T8,{isPresent:n,anchorX:a,children:e})),d.jsx(dh.Provider,{value:f,children:e})};function j8(){return new Map}function BS(e=!0){const t=C.useContext(dh);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=C.useId();C.useEffect(()=>{if(e)return i(s)},[e]);const o=C.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const Qc=e=>e.key||"";function Tx(e){const t=[];return C.Children.forEach(e,n=>{C.isValidElement(n)&&t.push(n)}),t}const E8=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1,anchorX:a="left"})=>{const[l,u]=BS(o),c=C.useMemo(()=>Tx(e),[e]),f=o&&!l?[]:c.map(Qc),h=C.useRef(!0),p=C.useRef(c),y=w1(()=>new Map),[g,w]=C.useState(c),[m,v]=C.useState(c);VS(()=>{h.current=!1,p.current=c;for(let S=0;S<m.length;S++){const k=Qc(m[S]);f.includes(k)?y.delete(k):y.get(k)!==!0&&y.set(k,!1)}},[m,f.length,f.join("-")]);const x=[];if(c!==g){let S=[...c];for(let k=0;k<m.length;k++){const b=m[k],T=Qc(b);f.includes(T)||(S.splice(k,0,b),x.push(b))}return s==="wait"&&x.length&&(S=x),v(Tx(S)),w(c),null}const{forceRender:_}=C.useContext(x1);return d.jsx(d.Fragment,{children:m.map(S=>{const k=Qc(S),b=o&&!l?!1:c===m||f.includes(k),T=()=>{if(y.has(k))y.set(k,!0);else return;let j=!0;y.forEach(R=>{R||(j=!1)}),j&&(_==null||_(),v(p.current),o&&(u==null||u()),r&&r())};return d.jsx(P8,{isPresent:b,initial:!h.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:s,onExitComplete:b?void 0:T,anchorX:a,children:S},k)})})};function S1(e,t){e.indexOf(t)===-1&&e.push(t)}function k1(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}let US=()=>{};const x0={useManualTiming:!1};function C1(e){let t;return()=>(t===void 0&&(t=e()),t)}const nr=e=>e,zu=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class T1{constructor(){this.subscriptions=[]}add(t){return S1(this.subscriptions,t),()=>k1(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Yr=e=>e*1e3,Gr=e=>e/1e3;function WS(e,t){return t?e*(1e3/t):0}const R8=C1(()=>window.ScrollTimeline!==void 0);class M8{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(R8()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class A8 extends M8{then(t,n){return this.finished.finally(t).then(()=>{})}}const Px={value:null},P1=e=>Array.isArray(e)&&typeof e[0]=="number",D8={};function N8(e,t){const n=C1(e);return()=>D8[t]??n()}const Iu=N8(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),HS=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(s/(i-1))+", ";return`linear(${r.substring(0,r.length-2)})`},Pl=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,w0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Pl([0,.65,.55,1]),circOut:Pl([.55,0,1,.45]),backIn:Pl([.31,.01,.66,-.59]),backOut:Pl([.33,1.53,.69,.99])};function YS(e,t){if(e)return typeof e=="function"&&Iu()?HS(e,t):P1(e)?Pl(e):Array.isArray(e)?e.map(n=>YS(n,t)||w0.easeOut):w0[e]}function O8(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={},u=void 0){const c={[t]:n};l&&(c.offset=l);const f=YS(a,i);return Array.isArray(f)&&(c.easing=f),e.animate(c,{delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal",pseudoElement:u})}function j1(e){return typeof e=="function"&&"applyToOptions"in e}function E1(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const Cf=2e4;function R1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Cf;)t+=n,r=e.next(t);return t>=Cf?1/0:t}function z8(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(R1(r),Cf);return{type:"keyframes",ease:s=>r.next(i*s).value/t,duration:Gr(i)}}function GS(e){return!!(typeof e=="function"&&Iu()||!e||typeof e=="string"&&(e in w0||Iu())||P1(e)||Array.isArray(e)&&e.every(GS))}function jx(e,t){e.timeline=t,e.onfinish=null}const Zc=["read","resolveKeyframes","update","preRender","render","postRender"];function I8(e,t){let n=new Set,r=new Set,i=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function u(f){o.has(f)&&(c.schedule(f),e()),l++,f(a)}const c={schedule:(f,h=!1,p=!1)=>{const g=p&&i?n:r;return h&&o.add(f),g.has(f)||g.add(f),f},cancel:f=>{r.delete(f),o.delete(f)},process:f=>{if(a=f,i){s=!0;return}i=!0,[n,r]=[r,n],n.forEach(u),t&&Px.value&&Px.value.frameloop[t].push(l),l=0,n.clear(),i=!1,s&&(s=!1,c.process(f))}};return c}const L8=40;function XS(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Zc.reduce((m,v)=>(m[v]=I8(s,t?v:void 0),m),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:f,postRender:h}=o,p=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,L8),1),i.timestamp=m,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),f.process(i),h.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(p))},y=()=>{n=!0,r=!0,i.isProcessing||e(p)};return{schedule:Zc.reduce((m,v)=>{const x=o[v];return m[v]=(_,S=!1,k=!1)=>(n||y(),x.schedule(_,S,k)),m},{}),cancel:m=>{for(let v=0;v<Zc.length;v++)o[Zc[v]].cancel(m)},state:i,steps:o}}const{schedule:M1}=XS(queueMicrotask,!1),{schedule:Se,cancel:cs,state:Pt,steps:yp}=XS(typeof requestAnimationFrame<"u"?requestAnimationFrame:nr,!0);let Ad;function F8(){Ad=void 0}const Xr={now:()=>(Ad===void 0&&Xr.set(Pt.isProcessing||x0.useManualTiming?Pt.timestamp:performance.now()),Ad),set:e=>{Ad=e,queueMicrotask(F8)}},pr={x:!1,y:!1};function KS(){return pr.x||pr.y}function $8(e){return e==="x"||e==="y"?pr[e]?null:(pr[e]=!0,()=>{pr[e]=!1}):pr.x||pr.y?null:(pr.x=pr.y=!0,()=>{pr.x=pr.y=!1})}function V8(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}function qS(e,t){const n=V8(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Ex(e){return!(e.pointerType==="touch"||KS())}function B8(e,t,n={}){const[r,i,s]=qS(e,n),o=a=>{if(!Ex(a))return;const{target:l}=a,u=t(l,a);if(typeof u!="function"||!l)return;const c=f=>{Ex(f)&&(u(f),l.removeEventListener("pointerleave",c))};l.addEventListener("pointerleave",c,i)};return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const QS=(e,t)=>t?e===t?!0:QS(e,t.parentElement):!1,A1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,U8=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function W8(e){return U8.has(e.tagName)||e.tabIndex!==-1}const jl=new WeakSet;function Rx(e){return t=>{t.key==="Enter"&&e(t)}}function xp(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const H8=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Rx(()=>{if(jl.has(n))return;xp(n,"down");const i=Rx(()=>{xp(n,"up")}),s=()=>xp(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Mx(e){return A1(e)&&!KS()}function Y8(e,t,n={}){const[r,i,s]=qS(e,n),o=a=>{const l=a.currentTarget;if(!Mx(a)||jl.has(l))return;jl.add(l);const u=t(l,a),c=(p,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),!(!Mx(p)||!jl.has(l))&&(jl.delete(l),typeof u=="function"&&u(p,{success:y}))},f=p=>{c(p,l===window||l===document||n.useGlobalTarget||QS(l,p.target))},h=p=>{c(p,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",h,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),a instanceof HTMLElement&&(a.addEventListener("focus",u=>H8(u,i)),!W8(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}const Ax=30,G8=e=>!isNaN(parseFloat(e));class X8{constructor(t,n={}){this.version="12.7.3",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=Xr.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Xr.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=G8(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new T1);const r=this.events[t].add(n);return t==="change"?()=>{r(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Xr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Ax)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Ax);return WS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Lu(e,t){return new X8(e,t)}const ZS=C.createContext({strict:!1}),Dx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Aa={};for(const e in Dx)Aa[e]={isEnabled:t=>Dx[e].some(n=>!!t[n])};function K8(e){for(const t in e)Aa[t]={...Aa[t],...e[t]}}const q8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Tf(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||q8.has(e)}let JS=e=>!Tf(e);function Q8(e){e&&(JS=t=>t.startsWith("on")?!Tf(t):e(t))}try{Q8(require("@emotion/is-prop-valid").default)}catch{}function Z8(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(JS(i)||n===!0&&Tf(i)||!t&&!Tf(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function J8(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const fh=C.createContext({});function hh(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Fu(e){return typeof e=="string"||Array.isArray(e)}const D1=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],N1=["initial",...D1];function ph(e){return hh(e.animate)||N1.some(t=>Fu(e[t]))}function e3(e){return!!(ph(e)||e.variants)}function eR(e,t){if(ph(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Fu(n)?n:void 0,animate:Fu(r)?r:void 0}}return e.inherit!==!1?t:{}}function tR(e){const{initial:t,animate:n}=eR(e,C.useContext(fh));return C.useMemo(()=>({initial:t,animate:n}),[Nx(t),Nx(n)])}function Nx(e){return Array.isArray(e)?e.join(" "):e}const nR=Symbol.for("motionComponentSymbol");function Ko(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function rR(e,t,n){return C.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Ko(n)&&(n.current=r))},[t])}const O1=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),iR="framerAppearId",t3="data-"+O1(iR),n3=C.createContext({});function sR(e,t,n,r,i){var g,w;const{visualElement:s}=C.useContext(fh),o=C.useContext(ZS),a=C.useContext(dh),l=C.useContext(_1).reducedMotion,u=C.useRef(null);r=r||o.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:s,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const c=u.current,f=C.useContext(n3);c&&!c.projection&&i&&(c.type==="html"||c.type==="svg")&&oR(u.current,n,i,f);const h=C.useRef(!1);C.useInsertionEffect(()=>{c&&h.current&&c.update(n,a)});const p=n[t3],y=C.useRef(!!p&&!((g=window.MotionHandoffIsComplete)!=null&&g.call(window,p))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,p)));return VS(()=>{c&&(h.current=!0,window.MotionIsMounted=!0,c.updateFeatures(),M1.render(c.render),y.current&&c.animationState&&c.animationState.animateChanges())}),C.useEffect(()=>{c&&(!y.current&&c.animationState&&c.animationState.animateChanges(),y.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)==null||m.call(window,p)}),y.current=!1))}),c}function oR(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutCrossfade:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:r3(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Ko(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:c,layoutScroll:l,layoutRoot:u})}function r3(e){if(e)return e.options.allowProjection!==!1?e.projection:r3(e.parent)}function aR({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&K8(e);function s(a,l){let u;const c={...C.useContext(_1),...a,layoutId:lR(a)},{isStatic:f}=c,h=tR(a),p=r(a,f);if(!f&&b1){uR();const y=cR(c);u=y.MeasureLayout,h.visualElement=sR(i,p,c,t,y.ProjectionNode)}return d.jsxs(fh.Provider,{value:h,children:[u&&h.visualElement?d.jsx(u,{visualElement:h.visualElement,...c}):null,n(i,a,rR(p,h.visualElement,l),p,f,h.visualElement)]})}s.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const o=C.forwardRef(s);return o[nR]=i,o}function lR({layoutId:e}){const t=C.useContext(x1).id;return t&&e!==void 0?t+"-"+e:e}function uR(e,t){C.useContext(ZS).strict}function cR(e){const{drag:t,layout:n}=Aa;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const i3=e=>t=>typeof t=="string"&&t.startsWith(e),z1=i3("--"),dR=i3("var(--"),I1=e=>dR(e)?fR.test(e.split("/*")[0].trim()):!1,fR=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$u={};function hR(e){for(const t in e)$u[t]=e[t],z1(t)&&($u[t].isCSSVariable=!0)}const Va=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],go=new Set(Va);function s3(e,{layout:t,layoutId:n}){return go.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!$u[e]||e==="opacity")}const Bt=e=>!!(e&&e.getVelocity),o3=(e,t)=>t&&typeof e=="number"?t.transform(e):e,xi=(e,t,n)=>n>t?t:n<e?e:n,Ba={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Vu={...Ba,transform:e=>xi(0,1,e)},Jc={...Ba,default:1},uc=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Mi=uc("deg"),Kr=uc("%"),Y=uc("px"),pR=uc("vh"),mR=uc("vw"),Ox={...Kr,parse:e=>Kr.parse(e)/100,transform:e=>Kr.transform(e*100)},gR={borderWidth:Y,borderTopWidth:Y,borderRightWidth:Y,borderBottomWidth:Y,borderLeftWidth:Y,borderRadius:Y,radius:Y,borderTopLeftRadius:Y,borderTopRightRadius:Y,borderBottomRightRadius:Y,borderBottomLeftRadius:Y,width:Y,maxWidth:Y,height:Y,maxHeight:Y,top:Y,right:Y,bottom:Y,left:Y,padding:Y,paddingTop:Y,paddingRight:Y,paddingBottom:Y,paddingLeft:Y,margin:Y,marginTop:Y,marginRight:Y,marginBottom:Y,marginLeft:Y,backgroundPositionX:Y,backgroundPositionY:Y},vR={rotate:Mi,rotateX:Mi,rotateY:Mi,rotateZ:Mi,scale:Jc,scaleX:Jc,scaleY:Jc,scaleZ:Jc,skew:Mi,skewX:Mi,skewY:Mi,distance:Y,translateX:Y,translateY:Y,translateZ:Y,x:Y,y:Y,z:Y,perspective:Y,transformPerspective:Y,opacity:Vu,originX:Ox,originY:Ox,originZ:Y},zx={...Ba,transform:Math.round},L1={...gR,...vR,zIndex:zx,size:Y,fillOpacity:Vu,strokeOpacity:Vu,numOctaves:zx},yR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},xR=Va.length;function wR(e,t,n){let r="",i=!0;for(let s=0;s<xR;s++){const o=Va[s],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=o3(a,L1[o]);if(!l){i=!1;const c=yR[o]||o;r+=`${c}(${u}) `}n&&(t[o]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function F1(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const l in t){const u=t[l];if(go.has(l)){o=!0;continue}else if(z1(l)){i[l]=u;continue}else{const c=o3(u,L1[l]);l.startsWith("origin")?(a=!0,s[l]=c):r[l]=c}}if(t.transform||(o||n?r.transform=wR(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;r.transformOrigin=`${l} ${u} ${c}`}}const $1=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function a3(e,t,n){for(const r in t)!Bt(t[r])&&!s3(r,n)&&(e[r]=t[r])}function bR({transformTemplate:e},t){return C.useMemo(()=>{const n=$1();return F1(n,t,e),Object.assign({},n.vars,n.style)},[t])}function _R(e,t){const n=e.style||{},r={};return a3(r,n,e),Object.assign(r,bR(e,t)),r}function SR(e,t){const n={},r=_R(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const kR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function V1(e){return typeof e!="string"||e.includes("-")?!1:!!(kR.indexOf(e)>-1||/[A-Z]/u.test(e))}const CR={offset:"stroke-dashoffset",array:"stroke-dasharray"},TR={offset:"strokeDashoffset",array:"strokeDasharray"};function PR(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?CR:TR;e[s.offset]=Y.transform(-r);const o=Y.transform(t),a=Y.transform(n);e[s.array]=`${o} ${a}`}function Ix(e,t,n){return typeof e=="string"?e:Y.transform(t+n*e)}function jR(e,t,n){const r=Ix(t,e.x,e.width),i=Ix(n,e.y,e.height);return`${r} ${i}`}function B1(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,f){if(F1(e,u,f),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:p,dimensions:y}=e;h.transform&&(y&&(p.transform=h.transform),delete h.transform),y&&(i!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=jR(y,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),o!==void 0&&PR(h,o,a,l,!1)}const l3=()=>({...$1(),attrs:{}}),U1=e=>typeof e=="string"&&e.toLowerCase()==="svg";function ER(e,t,n,r){const i=C.useMemo(()=>{const s=l3();return B1(s,t,U1(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};a3(s,e.style,e),i.style={...s,...i.style}}return i}function RR(e=!1){return(n,r,i,{latestValues:s},o)=>{const l=(V1(n)?ER:SR)(r,s,o,n),u=Z8(r,typeof n=="string",e),c=n!==C.Fragment?{...u,...l,ref:i}:{},{children:f}=r,h=C.useMemo(()=>Bt(f)?f.get():f,[f]);return C.createElement(n,{...c,children:h})}}function Lx(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function W1(e,t,n,r){if(typeof t=="function"){const[i,s]=Lx(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Lx(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const b0=e=>Array.isArray(e),MR=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),AR=e=>b0(e)?e[e.length-1]||0:e;function Dd(e){const t=Bt(e)?e.get():e;return MR(t)?t.toValue():t}function DR({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const o={latestValues:NR(r,i,s,e),renderState:t()};return n&&(o.onMount=a=>n({props:r,current:a,...o}),o.onUpdate=a=>n(a)),o}const u3=e=>(t,n)=>{const r=C.useContext(fh),i=C.useContext(dh),s=()=>DR(e,t,r,i);return n?s():w1(s)};function NR(e,t,n,r){const i={},s=r(e,{});for(const h in s)i[h]=Dd(s[h]);let{initial:o,animate:a}=e;const l=ph(e),u=e3(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;if(f&&typeof f!="boolean"&&!hh(f)){const h=Array.isArray(f)?f:[f];for(let p=0;p<h.length;p++){const y=W1(e,h[p]);if(y){const{transitionEnd:g,transition:w,...m}=y;for(const v in m){let x=m[v];if(Array.isArray(x)){const _=c?x.length-1:0;x=x[_]}x!==null&&(i[v]=x)}for(const v in g)i[v]=g[v]}}}return i}function H1(e,t,n){var s;const{style:r}=e,i={};for(const o in r)(Bt(r[o])||t.style&&Bt(t.style[o])||s3(o,e)||((s=n==null?void 0:n.getValue(o))==null?void 0:s.liveStyle)!==void 0)&&(i[o]=r[o]);return i}const OR={useVisualState:u3({scrapeMotionValuesFromProps:H1,createRenderState:$1})};function c3(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}function d3(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const f3=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function h3(e,t,n,r){d3(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(f3.has(i)?i:O1(i),t.attrs[i])}function p3(e,t,n){const r=H1(e,t,n);for(const i in e)if(Bt(e[i])||Bt(t[i])){const s=Va.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}const Fx=["x","y","width","height","cx","cy","r"],zR={useVisualState:u3({scrapeMotionValuesFromProps:p3,createRenderState:l3,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const a in i)if(go.has(a)){s=!0;break}}if(!s)return;let o=!t;if(t)for(let a=0;a<Fx.length;a++){const l=Fx[a];e[l]!==t[l]&&(o=!0)}o&&Se.read(()=>{c3(n,r),Se.render(()=>{B1(r,i,U1(n.tagName),e.transformTemplate),h3(n,r)})})}})};function IR(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...V1(r)?zR:OR,preloadedFeatures:e,useRender:RR(i),createVisualElement:t,Component:r};return aR(o)}}function Bu(e,t,n){const r=e.getProps();return W1(r,t,n!==void 0?n:r.custom,e)}const m3=new Set(["width","height","top","left","right","bottom",...Va]);function LR(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Lu(n))}function FR(e,t){const n=Bu(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=AR(s[o]);LR(e,o,a)}}function $R(e){return!!(Bt(e)&&e.add)}function _0(e,t){const n=e.getValue("willChange");if($R(n))return n.add(t);if(!n&&x0.WillChange){const r=new x0.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function g3(e){return e.props[t3]}const v3=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,VR=1e-7,BR=12;function UR(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=v3(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>VR&&++a<BR);return o}function cc(e,t,n,r){if(e===t&&n===r)return nr;const i=s=>UR(s,0,1,e,n);return s=>s===0||s===1?s:v3(i(s),t,r)}const y3=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,x3=e=>t=>1-e(1-t),w3=cc(.33,1.53,.69,.99),Y1=x3(w3),b3=y3(Y1),_3=e=>(e*=2)<1?.5*Y1(e):.5*(2-Math.pow(2,-10*(e-1))),G1=e=>1-Math.sin(Math.acos(e)),S3=x3(G1),k3=y3(G1),C3=e=>/^0[^.\s]+$/u.test(e);function WR(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||C3(e):!0}const Zl=e=>Math.round(e*1e5)/1e5,X1=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function HR(e){return e==null}const YR=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,K1=(e,t)=>n=>!!(typeof n=="string"&&YR.test(n)&&n.startsWith(e)||t&&!HR(n)&&Object.prototype.hasOwnProperty.call(n,t)),T3=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(X1);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},GR=e=>xi(0,255,e),wp={...Ba,transform:e=>Math.round(GR(e))},Fs={test:K1("rgb","red"),parse:T3("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+wp.transform(e)+", "+wp.transform(t)+", "+wp.transform(n)+", "+Zl(Vu.transform(r))+")"};function XR(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const S0={test:K1("#"),parse:XR,transform:Fs.transform},qo={test:K1("hsl","hue"),parse:T3("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Kr.transform(Zl(t))+", "+Kr.transform(Zl(n))+", "+Zl(Vu.transform(r))+")"},It={test:e=>Fs.test(e)||S0.test(e)||qo.test(e),parse:e=>Fs.test(e)?Fs.parse(e):qo.test(e)?qo.parse(e):S0.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Fs.transform(e):qo.transform(e)},KR=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function qR(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(X1))==null?void 0:t.length)||0)+(((n=e.match(KR))==null?void 0:n.length)||0)>0}const P3="number",j3="color",QR="var",ZR="var(",$x="${}",JR=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Uu(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(JR,l=>(It.test(l)?(r.color.push(s),i.push(j3),n.push(It.parse(l))):l.startsWith(ZR)?(r.var.push(s),i.push(QR),n.push(l)):(r.number.push(s),i.push(P3),n.push(parseFloat(l))),++s,$x)).split($x);return{values:n,split:a,indexes:r,types:i}}function E3(e){return Uu(e).values}function R3(e){const{split:t,types:n}=Uu(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const a=n[o];a===P3?s+=Zl(i[o]):a===j3?s+=It.transform(i[o]):s+=i[o]}return s}}const e7=e=>typeof e=="number"?0:e;function t7(e){const t=E3(e);return R3(e)(t.map(e7))}const ds={test:qR,parse:E3,createTransformer:R3,getAnimatableNone:t7},n7=new Set(["brightness","contrast","saturate","opacity"]);function r7(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(X1)||[];if(!r)return e;const i=n.replace(r,"");let s=n7.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const i7=/\b([a-z-]*)\(.*?\)/gu,k0={...ds,getAnimatableNone:e=>{const t=e.match(i7);return t?t.map(r7).join(" "):e}},s7={...L1,color:It,backgroundColor:It,outlineColor:It,fill:It,stroke:It,borderColor:It,borderTopColor:It,borderRightColor:It,borderBottomColor:It,borderLeftColor:It,filter:k0,WebkitFilter:k0},M3=e=>s7[e];function A3(e,t){let n=M3(e);return n!==k0&&(n=ds),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const o7=new Set(["auto","none","0"]);function a7(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!o7.has(s)&&Uu(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=A3(n,i)}const $s=e=>e*180/Math.PI,C0=e=>{const t=$s(Math.atan2(e[1],e[0]));return T0(t)},l7={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:C0,rotateZ:C0,skewX:e=>$s(Math.atan(e[1])),skewY:e=>$s(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},T0=e=>(e=e%360,e<0&&(e+=360),e),Vx=C0,Bx=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ux=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),u7={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Bx,scaleY:Ux,scale:e=>(Bx(e)+Ux(e))/2,rotateX:e=>T0($s(Math.atan2(e[6],e[5]))),rotateY:e=>T0($s(Math.atan2(-e[2],e[0]))),rotateZ:Vx,rotate:Vx,skewX:e=>$s(Math.atan(e[4])),skewY:e=>$s(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Wx(e){return e.includes("scale")?1:0}function P0(e,t){if(!e||e==="none")return Wx(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=u7,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=l7,i=a}if(!i)return Wx(t);const s=r[t],o=i[1].split(",").map(d7);return typeof s=="function"?s(o):o[s]}const c7=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return P0(n,t)};function d7(e){return parseFloat(e.trim())}const Hx=e=>e===Ba||e===Y,f7=new Set(["x","y","z"]),h7=Va.filter(e=>!f7.has(e));function p7(e){const t=[];return h7.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Da={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>P0(t,"x"),y:(e,{transform:t})=>P0(t,"y")};Da.translateX=Da.x;Da.translateY=Da.y;const Zs=new Set;let j0=!1,E0=!1;function D3(){if(E0){const e=Array.from(Zs).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=p7(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))==null||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}E0=!1,j0=!1,Zs.forEach(e=>e.complete()),Zs.clear()}function N3(){Zs.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(E0=!0)})}function m7(){N3(),D3()}class q1{constructor(t,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Zs.add(this),j0||(j0=!0,Se.read(N3),Se.resolveKeyframes(D3))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&o===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Zs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Zs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const O3=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),g7=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function v7(e){const t=g7.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function z3(e,t,n=1){const[r,i]=v7(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return O3(o)?parseFloat(o):o}return I1(i)?z3(i,t,n+1):i}const I3=e=>t=>t.test(e),y7={test:e=>e==="auto",parse:e=>e},L3=[Ba,Y,Kr,Mi,mR,pR,y7],Yx=e=>L3.find(I3(e));class F3 extends q1{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),I1(u))){const c=z3(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!m3.has(r)||t.length!==2)return;const[i,s]=t,o=Yx(i),a=Yx(s);if(o!==a)if(Hx(o)&&Hx(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)WR(t[i])&&r.push(i);r.length&&a7(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Da[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,o=r[s];r[s]=Da[n](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,u])=>{t.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const Gx=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ds.test(e)||e==="0")&&!e.startsWith("url("));function x7(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function w7(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=Gx(i,t),a=Gx(s,t);return!o||!a?!1:x7(e)||(n==="spring"||j1(n))&&r}const b7=e=>e!==null;function mh(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(b7),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const _7=40;class $3{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Xr.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>_7?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&m7(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Xr.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!w7(t,r,i,s))if(o)this.options.duration=0;else{l&&l(mh(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Ie=(e,t,n)=>e+(t-e)*n;function bp(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function S7({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=bp(l,a,e+1/3),s=bp(l,a,e),o=bp(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Pf(e,t){return n=>n>0?t:e}const _p=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},k7=[S0,Fs,qo],C7=e=>k7.find(t=>t.test(e));function Xx(e){const t=C7(e);if(!t)return!1;let n=t.parse(e);return t===qo&&(n=S7(n)),n}const Kx=(e,t)=>{const n=Xx(e),r=Xx(t);if(!n||!r)return Pf(e,t);const i={...n};return s=>(i.red=_p(n.red,r.red,s),i.green=_p(n.green,r.green,s),i.blue=_p(n.blue,r.blue,s),i.alpha=Ie(n.alpha,r.alpha,s),Fs.transform(i))},T7=(e,t)=>n=>t(e(n)),dc=(...e)=>e.reduce(T7),R0=new Set(["none","hidden"]);function P7(e,t){return R0.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function j7(e,t){return n=>Ie(e,t,n)}function Q1(e){return typeof e=="number"?j7:typeof e=="string"?I1(e)?Pf:It.test(e)?Kx:M7:Array.isArray(e)?V3:typeof e=="object"?It.test(e)?Kx:E7:Pf}function V3(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>Q1(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function E7(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Q1(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function R7(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],o=e.indexes[s][r[s]],a=e.values[o]??0;n[i]=a,r[s]++}return n}const M7=(e,t)=>{const n=ds.createTransformer(t),r=Uu(e),i=Uu(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?R0.has(e)&&!i.values.length||R0.has(t)&&!r.values.length?P7(e,t):dc(V3(R7(r,i),i.values),n):Pf(e,t)};function B3(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Ie(e,t,n):Q1(e)(e,t)}const A7=5;function U3(e,t,n){const r=Math.max(t-A7,0);return WS(n-e(r),t-r)}const Ve={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},qx=.001;function D7({duration:e=Ve.duration,bounce:t=Ve.bounce,velocity:n=Ve.velocity,mass:r=Ve.mass}){let i,s,o=1-t;o=xi(Ve.minDamping,Ve.maxDamping,o),e=xi(Ve.minDuration,Ve.maxDuration,Gr(e)),o<1?(i=u=>{const c=u*o,f=c*e,h=c-n,p=M0(u,o),y=Math.exp(-f);return qx-h/p*y},s=u=>{const f=u*o*e,h=f*n+n,p=Math.pow(o,2)*Math.pow(u,2)*e,y=Math.exp(-f),g=M0(Math.pow(u,2),o);return(-i(u)+qx>0?-1:1)*((h-p)*y)/g}):(i=u=>{const c=Math.exp(-u*e),f=(u-n)*e+1;return-.001+c*f},s=u=>{const c=Math.exp(-u*e),f=(n-u)*(e*e);return c*f});const a=5/e,l=O7(i,s,a);if(e=Yr(e),isNaN(l))return{stiffness:Ve.stiffness,damping:Ve.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const N7=12;function O7(e,t,n){let r=n;for(let i=1;i<N7;i++)r=r-e(r)/t(r);return r}function M0(e,t){return e*Math.sqrt(1-t*t)}const z7=["duration","bounce"],I7=["stiffness","damping","mass"];function Qx(e,t){return t.some(n=>e[n]!==void 0)}function L7(e){let t={velocity:Ve.velocity,stiffness:Ve.stiffness,damping:Ve.damping,mass:Ve.mass,isResolvedFromDuration:!1,...e};if(!Qx(e,I7)&&Qx(e,z7))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*xi(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Ve.mass,stiffness:i,damping:s}}else{const n=D7(e);t={...t,...n,mass:Ve.mass},t.isResolvedFromDuration=!0}return t}function jf(e=Ve.visualDuration,t=Ve.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:f,velocity:h,isResolvedFromDuration:p}=L7({...n,velocity:-Gr(n.velocity||0)}),y=h||0,g=u/(2*Math.sqrt(l*c)),w=o-s,m=Gr(Math.sqrt(l/c)),v=Math.abs(w)<5;r||(r=v?Ve.restSpeed.granular:Ve.restSpeed.default),i||(i=v?Ve.restDelta.granular:Ve.restDelta.default);let x;if(g<1){const S=M0(m,g);x=k=>{const b=Math.exp(-g*m*k);return o-b*((y+g*m*w)/S*Math.sin(S*k)+w*Math.cos(S*k))}}else if(g===1)x=S=>o-Math.exp(-m*S)*(w+(y+m*w)*S);else{const S=m*Math.sqrt(g*g-1);x=k=>{const b=Math.exp(-g*m*k),T=Math.min(S*k,300);return o-b*((y+g*m*w)*Math.sinh(T)+S*w*Math.cosh(T))/S}}const _={calculatedDuration:p&&f||null,next:S=>{const k=x(S);if(p)a.done=S>=f;else{let b=0;g<1&&(b=S===0?Yr(y):U3(x,S,k));const T=Math.abs(b)<=r,j=Math.abs(o-k)<=i;a.done=T&&j}return a.value=a.done?o:k,a},toString:()=>{const S=Math.min(R1(_),Cf),k=HS(b=>_.next(S*b).value,S,30);return S+"ms "+k},toTransition:()=>{}};return _}jf.applyToOptions=e=>{const t=z8(e,100,jf);return e.ease=Iu()?t.ease:"easeOut",e.duration=Yr(t.duration),e.type="keyframes",e};function Zx({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=e[0],h={done:!1,value:f},p=T=>a!==void 0&&T<a||l!==void 0&&T>l,y=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let g=n*t;const w=f+g,m=o===void 0?w:o(w);m!==w&&(g=m-f);const v=T=>-g*Math.exp(-T/r),x=T=>m+v(T),_=T=>{const j=v(T),R=x(T);h.done=Math.abs(j)<=u,h.value=h.done?m:R};let S,k;const b=T=>{p(h.value)&&(S=T,k=jf({keyframes:[h.value,y(h.value)],velocity:U3(x,T,h.value),damping:i,stiffness:s,restDelta:u,restSpeed:c}))};return b(0),{calculatedDuration:null,next:T=>{let j=!1;return!k&&S===void 0&&(j=!0,_(T),b(T)),S!==void 0&&T>=S?k.next(T-S):(!j&&_(T),h)}}}const F7=cc(.42,0,1,1),$7=cc(0,0,.58,1),W3=cc(.42,0,.58,1),V7=e=>Array.isArray(e)&&typeof e[0]!="number",B7={linear:nr,easeIn:F7,easeInOut:W3,easeOut:$7,circIn:G1,circInOut:k3,circOut:S3,backIn:Y1,backInOut:b3,backOut:w3,anticipate:_3},Jx=e=>{if(P1(e)){US(e.length===4);const[t,n,r,i]=e;return cc(t,n,r,i)}else if(typeof e=="string")return B7[e];return e};function U7(e,t,n){const r=[],i=n||B3,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||nr:t;a=dc(l,a)}r.push(a)}return r}function W7(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(US(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=U7(t,r,i),l=a.length,u=c=>{if(o&&c<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(c<e[f+1]);f++);const h=zu(e[f],e[f+1],c);return a[f](h)};return n?c=>u(xi(e[0],e[s-1],c)):u}function H7(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=zu(0,t,r);e.push(Ie(n,1,i))}}function Y7(e){const t=[0];return H7(t,e.length-1),t}function G7(e,t){return e.map(n=>n*t)}function X7(e,t){return e.map(()=>t||W3).splice(0,e.length-1)}function Ef({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=V7(r)?r.map(Jx):Jx(r),s={done:!1,value:t[0]},o=G7(n&&n.length===t.length?n:Y7(t),e),a=W7(o,t,{ease:Array.isArray(i)?i:X7(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const K7=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Se.update(t,!0),stop:()=>cs(t),now:()=>Pt.isProcessing?Pt.timestamp:Xr.now()}},q7={decay:Zx,inertia:Zx,tween:Ef,keyframes:Ef,spring:jf},Q7=e=>e/100;class Z1 extends $3{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||q1,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=j1(n)?n:q7[n]||Ef;let l,u;a!==Ef&&typeof t[0]!="number"&&(l=dc(Q7,B3(t[0],t[1])),t=[0,100]);const c=a({...this.options,keyframes:t});s==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=R1(c));const{calculatedDuration:f}=c,h=f+i,p=h*(r+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:h,totalDuration:p}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:h,repeat:p,repeatType:y,repeatDelay:g,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-h*(this.speed>=0?1:-1),v=this.speed>=0?m<0:m>c;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let x=this.currentTime,_=s;if(p){const T=Math.min(this.currentTime,c)/f;let j=Math.floor(T),R=T%1;!R&&T>=1&&(R=1),R===1&&j--,j=Math.min(j,p+1),!!(j%2)&&(y==="reverse"?(R=1-R,g&&(R-=g/f)):y==="mirror"&&(_=o)),x=xi(0,1,R)*f}const S=v?{done:!1,value:l[0]}:_.next(x);a&&(S.value=a(S.value));let{done:k}=S;!v&&u!==null&&(k=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const b=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return b&&i!==void 0&&(S.value=mh(l,this.options,i)),w&&w(S.value),b&&this.finish(),S}get duration(){const{resolved:t}=this;return t?Gr(t.calculatedDuration):0}get time(){return Gr(this.currentTime)}set time(t){t=Yr(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Gr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=K7,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=this.currentTime??0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}get finished(){return this.currentFinishedPromise}}const Z7=new Set(["opacity","clipPath","filter","transform"]),J7=C1(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Rf=10,eM=2e4;function tM(e){return j1(e.type)||e.type==="spring"||!GS(e.ease)}function nM(e,t){const n=new Z1({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<eM;)r=n.sample(s),i.push(r.value),s+=Rf;return{times:void 0,keyframes:i,duration:s-Rf,ease:"linear"}}const H3={anticipate:_3,backInOut:b3,circInOut:k3};function rM(e){return e in H3}class ew extends $3{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new F3(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Iu()&&rM(s)&&(s=H3[s]),tM(this.options)){const{onComplete:f,onUpdate:h,motionValue:p,element:y,...g}=this.options,w=nM(t,g);t=w.keyframes,t.length===1&&(t[1]=t[0]),r=w.duration,i=w.times,s=w.ease,o="keyframes"}const c=O8(a.owner.current,l,t,{...this.options,duration:r,times:i,ease:s});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(jx(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:f}=this.options;a.set(mh(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:r,times:i,type:o,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Gr(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Gr(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Yr(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}get finished(){return this.resolved.animation.finished}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return nr;const{animation:r}=n;jx(r,t)}return nr}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:f,element:h,...p}=this.options,y=new Z1({...p,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),g=Yr(this.time);u.setWithVelocity(y.sample(g-Rf).value,y.sample(g).value,Rf)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return J7()&&r&&Z7.has(r)&&(r!=="transform"||!u)&&!l&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const iM={type:"spring",stiffness:500,damping:25,restSpeed:10},sM=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),oM={type:"keyframes",duration:.8},aM={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},lM=(e,{keyframes:t})=>t.length>2?oM:go.has(e)?e.startsWith("scale")?sM(t[1]):iM:aM;function uM({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const J1=(e,t,n,r={},i,s)=>o=>{const a=E1(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Yr(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};uM(a)||(c={...c,...lM(e,c)}),c.duration&&(c.duration=Yr(c.duration)),c.repeatDelay&&(c.repeatDelay=Yr(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(f=!0)),c.allowFlatten=!a.type&&!a.ease,f&&!s&&t.get()!==void 0){const h=mh(c.keyframes,a);if(h!==void 0)return Se.update(()=>{c.onUpdate(h),c.onComplete()}),new A8([])}return!s&&ew.supports(c)?new ew(c):new Z1(c)};function cM({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Y3(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...a}=t;r&&(s=r);const l=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const c in a){const f=e.getValue(c,e.latestValues[c]??null),h=a[c];if(h===void 0||u&&cM(u,c))continue;const p={delay:n,...E1(s||{},c)};let y=!1;if(window.MotionHandoffAnimation){const w=g3(e);if(w){const m=window.MotionHandoffAnimation(w,c,Se);m!==null&&(p.startTime=m,y=!0)}}_0(e,c),f.start(J1(c,f,h,e.shouldReduceMotion&&m3.has(c)?{type:!1}:p,e,y));const g=f.animation;g&&l.push(g)}return o&&Promise.all(l).then(()=>{Se.update(()=>{o&&FR(e,o)})}),l}function A0(e,t,n={}){var l;const r=Bu(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Y3(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:h}=i;return dM(e,t,c+u,f,h,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[u,c]=a==="beforeChildren"?[s,o]:[o,s];return u().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function dM(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(fM).forEach((u,c)=>{u.notify("AnimationStart",t),o.push(A0(u,t,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function fM(e,t){return e.sortNodePosition(t)}function hM(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>A0(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=A0(e,t,n);else{const i=typeof t=="function"?Bu(e,t,n.custom):t;r=Promise.all(Y3(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}function G3(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const pM=N1.length;function X3(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?X3(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<pM;n++){const r=N1[n],i=e.props[r];(Fu(i)||i===!1)&&(t[r]=i)}return t}const mM=[...D1].reverse(),gM=D1.length;function vM(e){return t=>Promise.all(t.map(({animation:n,options:r})=>hM(e,n,r)))}function yM(e){let t=vM(e),n=tw(),r=!0;const i=l=>(u,c)=>{var h;const f=Bu(e,c,l==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(f){const{transition:p,transitionEnd:y,...g}=f;u={...u,...g,...y}}return u};function s(l){t=l(e)}function o(l){const{props:u}=e,c=X3(e.parent)||{},f=[],h=new Set;let p={},y=1/0;for(let w=0;w<gM;w++){const m=mM[w],v=n[m],x=u[m]!==void 0?u[m]:c[m],_=Fu(x),S=m===l?v.isActive:null;S===!1&&(y=w);let k=x===c[m]&&x!==u[m]&&_;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),v.protectedKeys={...p},!v.isActive&&S===null||!x&&!v.prevProp||hh(x)||typeof x=="boolean")continue;const b=xM(v.prevProp,x);let T=b||m===l&&v.isActive&&!k&&_||w>y&&_,j=!1;const R=Array.isArray(x)?x:[x];let E=R.reduce(i(m),{});S===!1&&(E={});const{prevResolvedValues:N={}}=v,$={...N,...E},B=F=>{T=!0,h.has(F)&&(j=!0,h.delete(F)),v.needsAnimating[F]=!0;const D=e.getValue(F);D&&(D.liveStyle=!1)};for(const F in $){const D=E[F],I=N[F];if(p.hasOwnProperty(F))continue;let P=!1;b0(D)&&b0(I)?P=!G3(D,I):P=D!==I,P?D!=null?B(F):h.add(F):D!==void 0&&h.has(F)?B(F):v.protectedKeys[F]=!0}v.prevProp=x,v.prevResolvedValues=E,v.isActive&&(p={...p,...E}),r&&e.blockInitialAnimation&&(T=!1),T&&(!(k&&b)||j)&&f.push(...R.map(F=>({animation:F,options:{type:m}})))}if(h.size){const w={};if(typeof u.initial!="boolean"){const m=Bu(e,Array.isArray(u.initial)?u.initial[0]:u.initial);m&&m.transition&&(w.transition=m.transition)}h.forEach(m=>{const v=e.getBaseTarget(m),x=e.getValue(m);x&&(x.liveStyle=!0),w[m]=v??null}),f.push({animation:w})}let g=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(g=!1),r=!1,g?t(f):Promise.resolve()}function a(l,u){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(h=>{var p;return(p=h.animationState)==null?void 0:p.setActive(l,u)}),n[l].isActive=u;const c=o(l);for(const h in n)n[h].protectedKeys={};return c}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=tw(),r=!0}}}function xM(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!G3(t,e):!1}function ks(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function tw(){return{animate:ks(!0),whileInView:ks(),whileHover:ks(),whileTap:ks(),whileDrag:ks(),whileFocus:ks(),exit:ks()}}class gs{constructor(t){this.isMounted=!1,this.node=t}update(){}}class wM extends gs{constructor(t){super(t),t.animationState||(t.animationState=yM(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();hh(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let bM=0;class _M extends gs{constructor(){super(...arguments),this.id=bM++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const SM={animation:{Feature:wM},exit:{Feature:_M}};function Wu(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function fc(e){return{point:{x:e.pageX,y:e.pageY}}}const kM=e=>t=>A1(t)&&e(t,fc(t));function Jl(e,t,n,r){return Wu(e,t,kM(n),r)}function K3({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function CM({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function TM(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}const q3=1e-4,PM=1-q3,jM=1+q3,Q3=.01,EM=0-Q3,RM=0+Q3;function nn(e){return e.max-e.min}function MM(e,t,n){return Math.abs(e-t)<=n}function nw(e,t,n,r=.5){e.origin=r,e.originPoint=Ie(t.min,t.max,e.origin),e.scale=nn(n)/nn(t),e.translate=Ie(n.min,n.max,e.origin)-e.originPoint,(e.scale>=PM&&e.scale<=jM||isNaN(e.scale))&&(e.scale=1),(e.translate>=EM&&e.translate<=RM||isNaN(e.translate))&&(e.translate=0)}function eu(e,t,n,r){nw(e.x,t.x,n.x,r?r.originX:void 0),nw(e.y,t.y,n.y,r?r.originY:void 0)}function rw(e,t,n){e.min=n.min+t.min,e.max=e.min+nn(t)}function AM(e,t,n){rw(e.x,t.x,n.x),rw(e.y,t.y,n.y)}function iw(e,t,n){e.min=t.min-n.min,e.max=e.min+nn(t)}function tu(e,t,n){iw(e.x,t.x,n.x),iw(e.y,t.y,n.y)}const sw=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qo=()=>({x:sw(),y:sw()}),ow=()=>({min:0,max:0}),Xe=()=>({x:ow(),y:ow()});function Hn(e){return[e("x"),e("y")]}function Sp(e){return e===void 0||e===1}function D0({scale:e,scaleX:t,scaleY:n}){return!Sp(e)||!Sp(t)||!Sp(n)}function Ms(e){return D0(e)||Z3(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Z3(e){return aw(e.x)||aw(e.y)}function aw(e){return e&&e!=="0%"}function Mf(e,t,n){const r=e-n,i=t*r;return n+i}function lw(e,t,n,r,i){return i!==void 0&&(e=Mf(e,i,r)),Mf(e,n,r)+t}function N0(e,t=0,n=1,r,i){e.min=lw(e.min,t,n,r,i),e.max=lw(e.max,t,n,r,i)}function J3(e,{x:t,y:n}){N0(e.x,t.translate,t.scale,t.originPoint),N0(e.y,n.translate,n.scale,n.originPoint)}const uw=.999999999999,cw=1.0000000000001;function DM(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Jo(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,J3(e,o)),r&&Ms(s.latestValues)&&Jo(e,s.latestValues))}t.x<cw&&t.x>uw&&(t.x=1),t.y<cw&&t.y>uw&&(t.y=1)}function Zo(e,t){e.min=e.min+t,e.max=e.max+t}function dw(e,t,n,r,i=.5){const s=Ie(e.min,e.max,i);N0(e,t,n,s,r)}function Jo(e,t){dw(e.x,t.x,t.scaleX,t.scale,t.originX),dw(e.y,t.y,t.scaleY,t.scale,t.originY)}function ek(e,t){return K3(TM(e.getBoundingClientRect(),t))}function NM(e,t,n){const r=ek(e,n),{scroll:i}=t;return i&&(Zo(r.x,i.offset.x),Zo(r.y,i.offset.y)),r}const tk=({current:e})=>e?e.ownerDocument.defaultView:null,fw=(e,t)=>Math.abs(e-t);function OM(e,t){const n=fw(e.x,t.x),r=fw(e.y,t.y);return Math.sqrt(n**2+r**2)}class nk{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Cp(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=OM(f.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:y}=f,{timestamp:g}=Pt;this.history.push({...y,timestamp:g});const{onStart:w,onMove:m}=this.handlers;h||(w&&w(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=kp(h,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:p,onSessionEnd:y,resumeAnimation:g}=this.handlers;if(this.dragSnapToOrigin&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Cp(f.type==="pointercancel"?this.lastMoveEventInfo:kp(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,w),y&&y(f,w)},!A1(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=fc(t),a=kp(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=Pt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,Cp(a,this.history)),this.removeListeners=dc(Jl(this.contextWindow,"pointermove",this.handlePointerMove),Jl(this.contextWindow,"pointerup",this.handlePointerUp),Jl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),cs(this.updatePoint)}}function kp(e,t){return t?{point:t(e.point)}:e}function hw(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Cp({point:e},t){return{point:e,delta:hw(e,rk(t)),offset:hw(e,zM(t)),velocity:IM(t,.1)}}function zM(e){return e[0]}function rk(e){return e[e.length-1]}function IM(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=rk(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Yr(t)));)n--;if(!r)return{x:0,y:0};const s=Gr(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function LM(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ie(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ie(n,e,r.max):Math.min(e,n)),e}function pw(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function FM(e,{top:t,left:n,bottom:r,right:i}){return{x:pw(e.x,n,i),y:pw(e.y,t,r)}}function mw(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function $M(e,t){return{x:mw(e.x,t.x),y:mw(e.y,t.y)}}function VM(e,t){let n=.5;const r=nn(e),i=nn(t);return i>r?n=zu(t.min,t.max-r,e.min):r>i&&(n=zu(e.min,e.max-i,t.min)),xi(0,1,n)}function BM(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const O0=.35;function UM(e=O0){return e===!1?e=0:e===!0&&(e=O0),{x:gw(e,"left","right"),y:gw(e,"top","bottom")}}function gw(e,t,n){return{min:vw(e,t),max:vw(e,n)}}function vw(e,t){return typeof e=="number"?e:e[t]||0}const WM=new WeakMap;class HM{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Xe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(fc(c).point)},s=(c,f)=>{const{drag:h,dragPropagation:p,onDragStart:y}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=$8(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Hn(w=>{let m=this.getAxisMotionValue(w).get()||0;if(Kr.test(m)){const{projection:v}=this.visualElement;if(v&&v.layout){const x=v.layout.layoutBox[w];x&&(m=nn(x)*(parseFloat(m)/100))}}this.originPoint[w]=m}),y&&Se.postRender(()=>y(c,f)),_0(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},o=(c,f)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:y,onDrag:g}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:w}=f;if(p&&this.currentDirection===null){this.currentDirection=YM(w),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,w),this.updateAxis("y",f.point,w),this.visualElement.render(),g&&g(c,f)},a=(c,f)=>this.stop(c,f),l=()=>Hn(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)==null?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new nk(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:tk(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&Se.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!ed(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=LM(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;t&&Ko(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=FM(r.layoutBox,t):this.constraints=!1,this.elastic=UM(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Hn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=BM(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ko(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=NM(r,i.root,this.visualElement.getTransformPagePoint());let o=$M(i.layout.layoutBox,s);if(n){const a=n(CM(o));this.hasMutatedConstraints=!!a,a&&(o=K3(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Hn(c=>{if(!ed(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const h=i?200:1e6,p=i?40:1e7,y={type:"inertia",velocity:r?t[c]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return _0(this.visualElement,t),r.start(J1(t,r,0,n,this.visualElement,!1))}stopAnimation(){Hn(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Hn(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Hn(n=>{const{drag:r}=this.getProps();if(!ed(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-Ie(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ko(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Hn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=VM({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Hn(o=>{if(!ed(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(Ie(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;WM.set(this.visualElement,this);const t=this.visualElement.current,n=Jl(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ko(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Se.read(r);const o=Wu(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Hn(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=O0,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function ed(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function YM(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class GM extends gs{constructor(t){super(t),this.removeGroupControls=nr,this.removeListeners=nr,this.controls=new HM(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||nr}unmount(){this.removeGroupControls(),this.removeListeners()}}const yw=e=>(t,n)=>{e&&Se.postRender(()=>e(t,n))};class XM extends gs{constructor(){super(...arguments),this.removePointerDownListener=nr}onPointerDown(t){this.session=new nk(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:tk(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:yw(t),onStart:yw(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&Se.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Jl(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Nd={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function xw(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ul={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(Y.test(e))e=parseFloat(e);else return e;const n=xw(e,t.target.x),r=xw(e,t.target.y);return`${n}% ${r}%`}},KM={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=ds.parse(e);if(i.length>5)return r;const s=ds.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const u=Ie(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class qM extends C.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;hR(QM),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Nd.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0||t.isPresent!==s?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||Se.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),M1.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ik(e){const[t,n]=BS(),r=C.useContext(x1);return d.jsx(qM,{...e,layoutGroup:r,switchLayoutGroup:C.useContext(n3),isPresent:t,safeToRemove:n})}const QM={borderRadius:{...ul,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ul,borderTopRightRadius:ul,borderBottomLeftRadius:ul,borderBottomRightRadius:ul,boxShadow:KM};function ZM(e,t,n){const r=Bt(e)?e:Lu(e);return r.start(J1("",r,t,n)),r.animation}function JM(e){return e instanceof SVGElement&&e.tagName!=="svg"}const eA=(e,t)=>e.depth-t.depth;class tA{constructor(){this.children=[],this.isDirty=!1}add(t){S1(this.children,t),this.isDirty=!0}remove(t){k1(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(eA),this.isDirty=!1,this.children.forEach(t)}}function nA(e,t){const n=Xr.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(cs(r),e(s-t))};return Se.read(r,!0),()=>cs(r)}const sk=["TopLeft","TopRight","BottomLeft","BottomRight"],rA=sk.length,ww=e=>typeof e=="string"?parseFloat(e):e,bw=e=>typeof e=="number"||Y.test(e);function iA(e,t,n,r,i,s){i?(e.opacity=Ie(0,n.opacity??1,sA(r)),e.opacityExit=Ie(t.opacity??1,0,oA(r))):s&&(e.opacity=Ie(t.opacity??1,n.opacity??1,r));for(let o=0;o<rA;o++){const a=`border${sk[o]}Radius`;let l=_w(t,a),u=_w(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||bw(l)===bw(u)?(e[a]=Math.max(Ie(ww(l),ww(u),r),0),(Kr.test(u)||Kr.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=Ie(t.rotate||0,n.rotate||0,r))}function _w(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const sA=ok(0,.5,S3),oA=ok(.5,.95,nr);function ok(e,t,n){return r=>r<e?0:r>t?1:n(zu(e,t,r))}function Sw(e,t){e.min=t.min,e.max=t.max}function Un(e,t){Sw(e.x,t.x),Sw(e.y,t.y)}function kw(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Cw(e,t,n,r,i){return e-=t,e=Mf(e,1/n,r),i!==void 0&&(e=Mf(e,1/i,r)),e}function aA(e,t=0,n=1,r=.5,i,s=e,o=e){if(Kr.test(t)&&(t=parseFloat(t),t=Ie(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=Ie(s.min,s.max,r);e===s&&(a-=t),e.min=Cw(e.min,t,n,a,i),e.max=Cw(e.max,t,n,a,i)}function Tw(e,t,[n,r,i],s,o){aA(e,t[n],t[r],t[i],t.scale,s,o)}const lA=["x","scaleX","originX"],uA=["y","scaleY","originY"];function Pw(e,t,n,r){Tw(e.x,t,lA,n?n.x:void 0,r?r.x:void 0),Tw(e.y,t,uA,n?n.y:void 0,r?r.y:void 0)}function jw(e){return e.translate===0&&e.scale===1}function ak(e){return jw(e.x)&&jw(e.y)}function Ew(e,t){return e.min===t.min&&e.max===t.max}function cA(e,t){return Ew(e.x,t.x)&&Ew(e.y,t.y)}function Rw(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function lk(e,t){return Rw(e.x,t.x)&&Rw(e.y,t.y)}function Mw(e){return nn(e.x)/nn(e.y)}function Aw(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class dA{constructor(){this.members=[]}add(t){S1(this.members,t),t.scheduleRender()}remove(t){if(k1(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function fA(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:h,skewX:p,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),f&&(r+=`rotateX(${f}deg) `),h&&(r+=`rotateY(${h}deg) `),p&&(r+=`skewX(${p}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const Tp=["","X","Y","Z"],hA={visibility:"hidden"},Dw=1e3;let pA=0;function Pp(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function uk(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=g3(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Se,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&uk(r)}function ck({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=pA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(vA),this.nodes.forEach(_A),this.nodes.forEach(SA),this.nodes.forEach(yA)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new tA)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new T1),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=JM(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=nA(h,250),Nd.hasAnimatedSinceResize&&(Nd.hasAnimatedSinceResize=!1,this.nodes.forEach(Ow))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:p,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||c.getDefaultTransition()||jA,{onLayoutAnimationStart:w,onLayoutAnimationComplete:m}=c.getProps(),v=!this.targetLayout||!lk(this.targetLayout,y),x=!h&&p;if(this.options.layoutRoot||this.resumeFrom||x||h&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,x);const _={...E1(g,"layout"),onPlay:w,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_)}else h||Ow(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,cs(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kA),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&uk(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Nw);return}this.isUpdating||this.nodes.forEach(wA),this.isUpdating=!1,this.nodes.forEach(bA),this.nodes.forEach(mA),this.nodes.forEach(gA),this.clearAllSnapshots();const a=Xr.now();Pt.delta=xi(0,1e3/60,a-Pt.timestamp),Pt.timestamp=a,Pt.isProcessing=!0,yp.update.process(Pt),yp.preRender.process(Pt),yp.render.process(Pt),Pt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,M1.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(xA),this.sharedNodes.forEach(CA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!nn(this.snapshot.measuredBox.x)&&!nn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Xe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!ak(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Ms(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),EA(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:o}=this.options;if(!o)return Xe();const a=o.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(RA))){const{scroll:c}=this.root;c&&(Zo(a.x,c.offset.x),Zo(a.y,c.offset.y))}return a}removeElementScroll(o){var l;const a=Xe();if(Un(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:h}=c;c!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Un(a,o),Zo(a.x,f.offset.x),Zo(a.y,f.offset.y))}return a}applyTransform(o,a=!1){const l=Xe();Un(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Jo(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Ms(c.latestValues)&&Jo(l,c.latestValues)}return Ms(this.latestValues)&&Jo(l,this.latestValues),l}removeTransform(o){const a=Xe();Un(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Ms(u.latestValues))continue;D0(u.latestValues)&&u.updateSnapshot();const c=Xe(),f=u.measurePageBox();Un(c,f),Pw(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Ms(this.latestValues)&&Pw(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var h;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:c,layoutId:f}=this.options;if(!(!this.layout||!(c||f))){if(this.resolvedRelativeTargetAt=Pt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Xe(),this.relativeTargetOrigin=Xe(),tu(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Un(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Xe(),this.targetWithTransforms=Xe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),AM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Un(this.target,this.layout.layoutBox),J3(this.target,this.targetDelta)):Un(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Xe(),this.relativeTargetOrigin=Xe(),tu(this.relativeTargetOrigin,this.target,p.target),Un(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||D0(this.parent.latestValues)||Z3(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var y;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Pt.timestamp&&(l=!1),l)return;const{layout:u,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||c))return;Un(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,h=this.treeScale.y;DM(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Xe());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(kw(this.prevProjectionDelta.x,this.projectionDelta.x),kw(this.prevProjectionDelta.y,this.projectionDelta.y)),eu(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==h||!Aw(this.projectionDelta.x,this.prevProjectionDelta.x)||!Aw(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Qo(),this.projectionDelta=Qo(),this.projectionDeltaWithTransform=Qo()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Qo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Xe(),p=l?l.source:void 0,y=this.layout?this.layout.source:void 0,g=p!==y,w=this.getStack(),m=!w||w.members.length<=1,v=!!(g&&!m&&this.options.crossfade===!0&&!this.path.some(PA));this.animationProgress=0;let x;this.mixTargetDelta=_=>{const S=_/1e3;zw(f.x,o.x,S),zw(f.y,o.y,S),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(tu(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),TA(this.relativeTarget,this.relativeTargetOrigin,h,S),x&&cA(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Xe()),Un(x,this.relativeTarget)),g&&(this.animationValues=c,iA(c,u,this.latestValues,S,v,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(cs(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{Nd.hasAnimatedSinceResize=!0,this.currentAnimation=ZM(0,Dw,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Dw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&dk(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Xe();const f=nn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const h=nn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Un(a,l),Jo(a,c),eu(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new dA),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Pp("z",o,u,this.animationValues);for(let c=0;c<Tp.length;c++)Pp(`rotate${Tp[c]}`,o,u,this.animationValues),Pp(`skew${Tp[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){if(!this.instance||this.isSVG)return;if(!this.isVisible)return hA;const a={visibility:""},l=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,a.opacity="",a.pointerEvents=Dd(o==null?void 0:o.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none",a;const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){const p={};return this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=Dd(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Ms(this.latestValues)&&(p.transform=l?l({},""):"none",this.hasProjected=!1),p}const c=u.animationValues||u.latestValues;this.applyTransformsToTarget(),a.transform=fA(this.projectionDeltaWithTransform,this.treeScale,c),l&&(a.transform=l(c,a.transform));const{x:f,y:h}=this.projectionDelta;a.transformOrigin=`${f.origin*100}% ${h.origin*100}% 0`,u.animationValues?a.opacity=u===this?c.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:c.opacityExit:a.opacity=u===this?c.opacity!==void 0?c.opacity:"":c.opacityExit!==void 0?c.opacityExit:0;for(const p in $u){if(c[p]===void 0)continue;const{correct:y,applyTo:g,isCSSVariable:w}=$u[p],m=a.transform==="none"?c[p]:y(c[p],u);if(g){const v=g.length;for(let x=0;x<v;x++)a[g[x]]=m}else w?this.options.visualElement.renderState.vars[p]=m:a[p]=m}return this.options.layoutId&&(a.pointerEvents=u===this?Dd(o==null?void 0:o.pointerEvents)||"":"none"),a}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Nw),this.root.sharedNodes.clear()}}}function mA(e){e.updateLayout()}function gA(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=t.source!==e.layout.source;s==="size"?Hn(f=>{const h=o?t.measuredBox[f]:t.layoutBox[f],p=nn(h);h.min=r[f].min,h.max=h.min+p}):dk(s,t.layoutBox,r)&&Hn(f=>{const h=o?t.measuredBox[f]:t.layoutBox[f],p=nn(r[f]);h.max=h.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+p)});const a=Qo();eu(a,r,t.layoutBox);const l=Qo();o?eu(l,e.applyTransform(i,!0),t.measuredBox):eu(l,r,t.layoutBox);const u=!ak(a);let c=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:p}=f;if(h&&p){const y=Xe();tu(y,t.layoutBox,h.layoutBox);const g=Xe();tu(g,r,p.layoutBox),lk(y,g)||(c=!0),f.options.layoutRoot&&(e.relativeTarget=g,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function vA(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function yA(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function xA(e){e.clearSnapshot()}function Nw(e){e.clearMeasurements()}function wA(e){e.isLayoutDirty=!1}function bA(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ow(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function _A(e){e.resolveTargetDelta()}function SA(e){e.calcProjection()}function kA(e){e.resetSkewAndRotation()}function CA(e){e.removeLeadSnapshot()}function zw(e,t,n){e.translate=Ie(t.translate,0,n),e.scale=Ie(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Iw(e,t,n,r){e.min=Ie(t.min,n.min,r),e.max=Ie(t.max,n.max,r)}function TA(e,t,n,r){Iw(e.x,t.x,n.x,r),Iw(e.y,t.y,n.y,r)}function PA(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const jA={duration:.45,ease:[.4,0,.1,1]},Lw=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Fw=Lw("applewebkit/")&&!Lw("chrome/")?Math.round:nr;function $w(e){e.min=Fw(e.min),e.max=Fw(e.max)}function EA(e){$w(e.x),$w(e.y)}function dk(e,t,n){return e==="position"||e==="preserve-aspect"&&!MM(Mw(t),Mw(n),.2)}function RA(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const MA=ck({attachResizeListener:(e,t)=>Wu(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),jp={current:void 0},fk=ck({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!jp.current){const e=new MA({});e.mount(window),e.setOptions({layoutScroll:!0}),jp.current=e}return jp.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),AA={pan:{Feature:XM},drag:{Feature:GM,ProjectionNode:fk,MeasureLayout:ik}};function Vw(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&Se.postRender(()=>s(t,fc(t)))}class DA extends gs{mount(){const{current:t}=this.node;t&&(this.unmount=B8(t,(n,r)=>(Vw(this.node,r,"Start"),i=>Vw(this.node,i,"End"))))}unmount(){}}class NA extends gs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=dc(Wu(this.node.current,"focus",()=>this.onFocus()),Wu(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Bw(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&Se.postRender(()=>s(t,fc(t)))}class OA extends gs{mount(){const{current:t}=this.node;t&&(this.unmount=Y8(t,(n,r)=>(Bw(this.node,r,"Start"),(i,{success:s})=>Bw(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const z0=new WeakMap,Ep=new WeakMap,zA=e=>{const t=z0.get(e.target);t&&t(e)},IA=e=>{e.forEach(zA)};function LA({root:e,...t}){const n=e||document;Ep.has(n)||Ep.set(n,{});const r=Ep.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(IA,{root:e,...t})),r[i]}function FA(e,t,n){const r=LA(t);return z0.set(e,n),r.observe(e),()=>{z0.delete(e),r.unobserve(e)}}const $A={some:0,all:1};class VA extends gs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:$A[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),h=u?c:f;h&&h(l)};return FA(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(BA(t,n))&&this.startObserver()}unmount(){}}function BA({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const UA={inView:{Feature:VA},tap:{Feature:OA},focus:{Feature:NA},hover:{Feature:DA}},WA={layout:{ProjectionNode:fk,MeasureLayout:ik}},I0={current:null},hk={current:!1};function HA(){if(hk.current=!0,!!b1)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>I0.current=e.matches;e.addListener(t),t()}else I0.current=!1}const YA=[...L3,It,ds],GA=e=>YA.find(I3(e)),XA=new WeakMap;function KA(e,t,n){for(const r in t){const i=t[r],s=n[r];if(Bt(i))e.addValue(r,i);else if(Bt(s))e.addValue(r,Lu(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,Lu(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Uw=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class qA{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=q1,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Xr.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Se.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=ph(n),this.isVariantNode=e3(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const y=h[p];l[p]!==void 0&&Bt(y)&&y.set(l[p],!1)}}mount(t){this.current=t,XA.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),hk.current||HA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:I0.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),cs(this.notifyUpdate),cs(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=go.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&Se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Aa){const n=Aa[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Xe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Uw.length;r++){const i=Uw[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=KA(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Lu(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(O3(r)||C3(r))?r=parseFloat(r):!GA(r)&&ds.test(n)&&(r=A3(t,n)),this.setBaseTarget(t,Bt(r)?r.get():r)),Bt(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var s;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=W1(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(r=o[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Bt(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new T1),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class pk extends qA{constructor(){super(...arguments),this.KeyframeResolver=F3}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Bt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function QA(e){return window.getComputedStyle(e)}class ZA extends pk{constructor(){super(...arguments),this.type="html",this.renderInstance=d3}readValueFromInstance(t,n){if(go.has(n))return c7(t,n);{const r=QA(t),i=(z1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return ek(t,n)}build(t,n,r){F1(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return H1(t,n,r)}}class JA extends pk{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Xe,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&c3(this.current,this.renderState)}}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(go.has(n)){const r=M3(n);return r&&r.default||0}return n=f3.has(n)?n:O1(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return p3(t,n,r)}onBindTransform(){this.current&&!this.renderState.dimensions&&Se.postRender(this.updateDimensions)}build(t,n,r){B1(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){h3(t,n,r,i)}mount(t){this.isSVGTag=U1(t.tagName),super.mount(t)}}const e6=(e,t)=>V1(e)?new JA(t):new ZA(t,{allowProjection:e!==C.Fragment}),t6=IR({...SM,...UA,...AA,...WA},e6),Ua=J8(t6);var mk={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ww=Ut.createContext&&Ut.createContext(mk),n6=["attr","size","title"];function r6(e,t){if(e==null)return{};var n=i6(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function i6(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Af(){return Af=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Af.apply(this,arguments)}function Hw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Df(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hw(Object(n),!0).forEach(function(r){s6(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function s6(e,t,n){return t=o6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o6(e){var t=a6(e,"string");return typeof t=="symbol"?t:t+""}function a6(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function gk(e){return e&&e.map((t,n)=>Ut.createElement(t.tag,Df({key:n},t.attr),gk(t.child)))}function Tr(e){return t=>Ut.createElement(l6,Af({attr:Df({},e.attr)},t),gk(e.child))}function l6(e){var t=n=>{var{attr:r,size:i,title:s}=e,o=r6(e,n6),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Ut.createElement("svg",Af({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Df(Df({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Ut.createElement("title",null,s),e.children)};return Ww!==void 0?Ut.createElement(Ww.Consumer,null,n=>t(n)):t(mk)}function u6(e){return Tr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function vk(e){return Tr({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function yk(e){return Tr({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function c6(e){return Tr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function d6(e){return Tr({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 184c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24 13.26 0 24 10.74 24 24 0 13.25-10.75 24-24 24z"},child:[]}]})(e)}function f6(e){return Tr({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function h6(e){return Tr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(e)}function p6(e){return Tr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function m6(e){return Tr({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z"},child:[]}]})(e)}const g6=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 100px;
  display: flex;
  align-items: center;
  z-index: 10000;
  background: transparent;

  .logo {
    color: #ffffff;
    font-weight: 700;
    font-size: 2em;
    text-decoration: none;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: auto;
    padding-left: 30px;
    margin-top: 20px;
  }

  nav {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    margin-left: 50px;
    margin-top: 20px;
    padding-right: 40px;
  }

  .nav-link {
    text-decoration: none;
    
    color: #ffffff;
    border-radius: 20px;
    
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    background-color:transparent;
    padding: 10px;
    margin-top: 30px;
    margin-right: 100px;
    margin-left: 100px;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #ffffff;
      padding: 10px;
      transition: all 0.3s ease;
    }
  }

  .navbar {
    width: 100%;
    padding: 0;
    margin-right: 60px;
  }
`,v6=M.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`,y6=M.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`,x6=M.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(to bottom, rgba(9, 75, 101, 0.8), rgba(9, 75, 101, 0.6));
  
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #094b65, transparent);
    z-index: 10;
  }
`,w6=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`,b6=M.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`,_6=M(Ua.div)`
  background: rgba(0, 20, 40, 0.85);
  padding: 3rem;
  border-radius: 20px;
  width: 70%;
  min-height: 400px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #4fc3f7;
    margin-bottom: 2rem;
    font-size: 2.8rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    line-height: 2;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    color: #e3f2fd;
    white-space: pre-line;
    text-align: left;
  }
`,Yw=M.button`
  background: rgba(0, 20, 40, 0.7);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-size: 1.8rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 1rem;

  &:hover {
    background: rgba(79, 195, 247, 0.7);
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,S6=M.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 2;
`,k6=M.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.active?"#4fc3f7":"rgba(255, 255, 255, 0.3)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    background: #4fc3f7;
  }
`,C6=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  z-index: 1;
`,Cs=[{title:"Our Mission",text:`Ocean Guardian is dedicated to protecting marine ecosystems through education, awareness, and action. Our mission is to:

• Preserve marine biodiversity and ecosystems
• Combat ocean pollution and plastic waste
• Promote sustainable fishing practices
• Educate communities about ocean conservation
• Support marine research and innovation
• Advocate for stronger ocean protection policies`},{title:"Our Vision",text:`We envision a future where:

• Oceans are free from pollution and thriving with life
• Marine ecosystems are protected and restored
• Communities live in harmony with the ocean
• Sustainable practices are the norm worldwide
• Every individual is an ocean guardian
• Future generations inherit healthy, vibrant oceans`},{title:"Our Impact",text:`Through our initiatives, we've achieved:

• Protected 1,000+ square kilometers of marine habitat
• Educated 50,000+ people about ocean conservation
• Removed 10,000+ kg of plastic from beaches
• Supported 100+ marine research projects
• Partnered with 50+ conservation organizations
• Influenced policy changes in 10+ countries`},{title:"Our Team",text:`Our diverse team includes:

• Marine biologists and oceanographers
• Conservation specialists and researchers
• Environmental educators and advocates
• Technology and innovation experts
• Community outreach coordinators
• Passionate volunteers worldwide

Together, we're making waves in ocean conservation.`},{title:"Our Programs",text:`We offer various initiatives:

• Interactive ocean awareness games
• Beach cleanup campaigns
• Marine education workshops
• Coral reef restoration projects
• Sustainable fishing initiatives
• Ocean research partnerships
• Community engagement programs
• Digital conservation tools`},{title:"Join Us",text:`You can make a difference by:

• Participating in our awareness games
• Joining beach cleanup events
• Supporting conservation projects
• Spreading awareness on social media
• Adopting sustainable practices
• Donating to ocean protection
• Volunteering your time and skills
• Becoming an ocean guardian`}],T6=()=>{const e=oc(),[t,n]=C.useState(0);C.useEffect(()=>{const a=new URLSearchParams(e.search).get("slide");if(a!==null){const l=parseInt(a,10);!isNaN(l)&&l>=0&&l<Cs.length&&n(l)}},[e]);const r=()=>{n(o=>(o+1)%Cs.length)},i=()=>{n(o=>(o-1+Cs.length)%Cs.length)},s=o=>{n(o)};return d.jsxs(x6,{children:[d.jsx(g6,{children:d.jsx(Bg,{})}),d.jsxs(v6,{children:[d.jsxs(y6,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[d.jsx("source",{src:"/asset/ocean-video.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),d.jsx(C6,{}),d.jsxs(w6,{children:[d.jsxs(b6,{children:[d.jsx(Yw,{onClick:i,children:d.jsx(vk,{})}),d.jsx(E8,{mode:"wait",children:d.jsxs(_6,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},transition:{duration:.5},children:[d.jsx("h2",{children:Cs[t].title}),d.jsx("p",{children:Cs[t].text})]},t)}),d.jsx(Yw,{onClick:r,children:d.jsx(yk,{})})]}),d.jsx(S6,{children:Cs.map((o,a)=>d.jsx(k6,{active:t===a,onClick:()=>s(a)},a))})]})]}),d.jsx(bi,{})]})},P6=M.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: linear-gradient(to bottom, rgba(0, 20, 40, 0.9), transparent);
`,j6=M(Tt)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #4fc3f7;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 25px;
  background: rgba(0, 20, 40, 0.7);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(78, 198, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(79, 195, 247, 0.3);
    transform: translateX(-5px);
  }
`,E6=M.div`
  display: flex;
  gap: 20px;
  align-items: center;
`,Gw=M(Tt)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #4fc3f7;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 25px;
  background: rgba(0, 20, 40, 0.7);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(78, 198, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(79, 195, 247, 0.3);
    transform: translateY(-2px);
  }
`,Wa=({currentPage:e,pages:t})=>{const n=t.filter(a=>a.isInfoSection),r=n.findIndex(a=>a.path===e),i=r>0?n[r-1]:null,s=r<n.length-1?n[r+1]:null;return n.some(a=>a.path===e)?d.jsxs(P6,{children:[d.jsxs(j6,{to:"/",children:[d.jsx(u6,{}),"Back to Home"]}),d.jsxs(E6,{children:[i&&d.jsxs(Gw,{to:i.path,children:[d.jsx(vk,{}),i.title]}),s&&d.jsxs(Gw,{to:s.path,children:[s.title,d.jsx(yk,{})]})]})]}):null},Ha=[{path:"/ngo",title:"NGOs",isInfoSection:!0},{path:"/underwater-life",title:"Marine Life",isInfoSection:!0},{path:"/coral-reef",title:"Coral Reefs",isInfoSection:!0},{path:"/deep-sea",title:"Deep Sea",isInfoSection:!0},{path:"/conservation",title:"Conservation",isInfoSection:!0},{path:"/research",title:"Research",isInfoSection:!0}];ht.registerPlugin(q);const R6=$a`
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.5; }
  100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
`,M6=$a`
  0% { transform: translateX(-50px) rotateY(0deg); }
  50% { transform: translateX(50px) rotateY(180deg); }
  100% { transform: translateX(-50px) rotateY(360deg); }
`,A6=$a`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,D6=M.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #001428, #002952);
  z-index: -2;
  opacity: 0.95;
`,N6=M.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  pointer-events: none;
  animation: ${R6} ${e=>e.duration||"15s"} linear infinite;
  animation-delay: ${e=>e.delay||"0s"};
  left: ${e=>e.left||"10%"};
  bottom: -50px;
  width: ${e=>e.size||"20px"};
  height: ${e=>e.size||"20px"};
`,O6=M.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
`,z6=M.header`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${A6} 1s ease-out;
  color: white;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 0 2px 10px rgba(0, 150, 255, 0.5);
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0.5rem 0;
    color: #b3e5fc;
  }
`,cl=M.section`
  display: flex;
  flex-direction: column;
  background: rgba(0, 20, 40, 0.9);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  color: white;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 150, 255, 0.1);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
  width: 100%;
  height: fit-content;

  h2 {
    color: #4fc3f7;
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    width: 100%;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #e3f2fd;
    font-size: 0.95rem;
    width: 100%;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,I6=M.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 30, 60, 0.95);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  border-left: 4px solid ${e=>e.color||"#4fc3f7"};
  transition: all 0.3s ease;
  opacity: 0;
  width: 100%;
  margin-bottom: 0.75rem;

  h3 {
    color: ${e=>e.color||"#4fc3f7"};
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  p {
    margin: 0;
    line-height: 1.4;
    font-size: 0.9rem;
    color: #b3e5fc;
    width: 100%;
  }

  &.visible {
    opacity: 1;
  }
`,L6=M.span`
  display: inline-block;
  margin-right: 0.75rem;
  font-size: 1.2rem;
`,F6=M.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
  width: 100%;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,$6=M.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 160px;
  background: #000;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.7);
    transform: translateY(100%);
    transition: all 0.3s ease;

    h4 {
      color: #4fc3f7;
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
    }

    p {
      color: #fff;
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
      opacity: 0.6;
    }

    div {
      transform: translateY(0);
      background: rgba(0, 0, 0, 0.85);
    }
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,V6=M.div`
  width: 100%;
  height: 400px;
  background: rgba(0, 30, 60, 0.5);
  border-radius: 15px;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.98);

  &.visible {
    opacity: 1;
    transform: scale(1);
    transition: all 0.8s ease;
  }
`,B6=M.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to top, #ff6b6b, #ff8e8e, #ffb3b3);
  clip-path: polygon(
    0% 100%, 5% 80%, 10% 85%, 15% 70%, 20% 90%, 25% 75%, 
    30% 85%, 35% 65%, 40% 95%, 45% 70%, 50% 100%, 55% 80%, 
    60% 90%, 65% 75%, 70% 85%, 75% 60%, 80% 92%, 85% 78%, 
    90% 88%, 95% 72%, 100% 100%
  );
`,U6=M.div`
  position: absolute;
  width: 40px;
  height: 20px;
  background: ${e=>e.color||"#4fc3f7"};
  border-radius: 50%;
  animation: ${M6} ${e=>e.duration||"10s"} infinite ease-in-out;
  animation-delay: ${e=>e.delay||"0s"};
  top: ${e=>e.top||"50%"};
  left: ${e=>e.left||"10%"};

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    right: -5px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 10px solid ${e=>e.color||"#4fc3f7"};
  }
`,W6=M.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  height: fit-content;
`,H6=M.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
  width: 100%;

  li {
    position: relative;
    padding-left: 1rem;
    margin-bottom: 0.75rem;
    color: #b3e5fc;
    font-size: 0.95rem;
    line-height: 1.4;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #4fc3f7;
    }

    strong {
      color: #4fc3f7;
      font-weight: 500;
    }
  }
`,Y6=()=>{const e=C.useRef([]),t=C.useRef([]),n=C.useRef([]),r=C.useRef(null),i=Array.from({length:20}).map((l,u)=>d.jsx(N6,{size:`${Math.random()*20+10}px`,left:`${Math.random()*100}%`,duration:`${Math.random()*10+10}s`,delay:`${Math.random()*5}s`},u));C.useEffect(()=>(e.current.forEach((l,u)=>{ht.to(l,{opacity:1,y:0,duration:.8,ease:"power2.out",scrollTrigger:{trigger:l,start:"top 80%",toggleActions:"play none none none"},delay:u*.1})}),t.current.forEach((l,u)=>{ht.to(l,{opacity:1,scale:1,duration:.6,ease:"back.out(1.7)",scrollTrigger:{trigger:l,start:"top 80%",toggleActions:"play none none none"},delay:u*.15})}),n.current.forEach((l,u)=>{ht.to(l,{opacity:1,y:0,duration:.8,ease:"power2.out",scrollTrigger:{trigger:l,start:"top 80%",toggleActions:"play none none none"},delay:u*.1})}),r.current&&ht.to(r.current,{opacity:1,scale:1,duration:1,ease:"power2.out",scrollTrigger:{trigger:r.current,start:"top 80%",toggleActions:"play none none none"}}),()=>{q.getAll().forEach(l=>l.kill())}),[]);const s=[{name:"Clownfish",description:"These colorful fish live in symbiosis with sea anemones, protected by their stinging tentacles.",color:"#FFA500",emoji:"🐠"},{name:"Manta Ray",description:"Gentle giants that glide through the water with wing-like fins, filtering plankton for food.",color:"#4682B4",emoji:"🐋"},{name:"Sea Turtle",description:"Ancient mariners that migrate thousands of miles to return to their birthplace to nest.",color:"#3CB371",emoji:"🐢"},{name:"Octopus",description:"Highly intelligent invertebrates with eight arms, capable of solving complex problems.",color:"#9370DB",emoji:"🐙"}],o=[{title:"Coral Reef",description:"Rainforests of the sea, home to 25% of marine species",image:"https://static.toiimg.com/photo/msid-41008123,width-96,height-65.cms"},{title:"Jellyfish",description:"Ancient creatures that have drifted in our oceans for millions of years",image:"https://th-thumbnailer.cdn-si-edu.com/RnCndkf14kiXeDdK9mukk34xvwg=/fit-in/1200x0/filters:focal(1794x1349:1795x1350)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/6f/0e/6f0eba75-785b-4304-ac66-48bff29f8062/5-8516576a-0859-4513-94a6-a033f2e4a2fe.jpeg"},{title:"Seahorse",description:"The only species where males become pregnant and give birth",image:"https://www.treehugger.com/thmb/HoIg45uBOVUhR7wdkXyTvu-Sa7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1159240457-79e9779a466c4b6e82d188384c34142b.jpg"},{title:"Great White Shark",description:"Apex predators that maintain balance in marine ecosystems",image:"https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{title:"Dolphins",description:"Highly intelligent marine mammals known for their playful behavior",image:"https://images.newscientist.com/wp-content/uploads/2018/06/27172924/bhabab.jpg?crop=4:3,smart&width=1200&height=900&upscale=true"},{title:"Starfish",description:"Can regenerate lost arms and even their entire body from a single arm",image:"https://www.thoughtco.com/thmb/PHXqLrrhvo1wVZGne0ddMCef9E0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-orange-starfish-on-sand-489010151-59847f7f22fa3a0010518acc.jpg"},{title:"Harbor Seal",description:"Agile swimmers that can dive for up to 30 minutes",image:"/images/harbor-seal.jpg"},{title:"Sea Turtle",description:"Ancient mariners that navigate across entire oceans",image:"/images/sea-turtle.jpg"}],a=[{color:"#FF9800",top:"20%",left:"20%",duration:"15s",delay:"0s"},{color:"#4FC3F7",top:"40%",left:"60%",duration:"18s",delay:"2s"},{color:"#F06292",top:"60%",left:"30%",duration:"12s",delay:"1s"},{color:"#FFEB3B",top:"30%",left:"80%",duration:"20s",delay:"3s"},{color:"#9C27B0",top:"70%",left:"10%",duration:"16s",delay:"4s"}];return d.jsxs(d.Fragment,{children:[d.jsx(D6,{}),i,d.jsx(Wa,{currentPage:"/underwater-life",pages:Ha}),d.jsxs(O6,{children:[d.jsxs(z6,{children:[d.jsx("h1",{children:"The Vibrant Life Under Water"}),d.jsx("p",{children:"The ocean teems with a diverse range of species, each contributing to a balanced ecosystem. The underwater world thrives with colorful corals, diverse fish species, and mysterious creatures that bring vibrancy to the deep."})]}),d.jsxs(cl,{ref:l=>e.current[0]=l,children:[d.jsx("h2",{children:"A World of Color and Diversity"}),d.jsx("p",{children:"Beneath the ocean's surface lies a world more diverse than any tropical rainforest. Coral reefs alone host approximately 25% of all marine species, despite covering less than 1% of the ocean floor. From the smallest plankton to the largest whales, each organism plays a vital role in maintaining the delicate balance of marine ecosystems."}),d.jsx("p",{children:"The variety of shapes, colors, and behaviors found in marine life is staggering. Many species have developed extraordinary adaptations to survive in their underwater habitats, from bioluminescent creatures in the deep sea to fish that can change gender when needed."})]}),d.jsxs(cl,{ref:l=>e.current[1]=l,children:[d.jsx("h2",{children:"Iconic Marine Creatures"}),d.jsx("p",{children:"The ocean is home to some of the most fascinating creatures on our planet. These iconic species represent the incredible diversity of marine life:"}),d.jsx(W6,{children:s.map((l,u)=>d.jsxs(I6,{ref:c=>t.current[u]=c,color:l.color,children:[d.jsxs("h3",{children:[d.jsx(L6,{children:l.emoji}),l.name]}),d.jsx("p",{children:l.description})]},l.name))})]}),d.jsxs(cl,{ref:l=>e.current[2]=l,children:[d.jsx("h2",{children:"Underwater Gallery"}),d.jsx("p",{children:"Explore the stunning diversity of marine life through these captivating images:"}),d.jsx(F6,{children:o.map((l,u)=>d.jsxs($6,{ref:c=>n.current[u]=c,children:[d.jsx("img",{src:l.image,alt:l.title}),d.jsxs("div",{children:[d.jsx("h4",{children:l.title}),d.jsx("p",{children:l.description})]})]},l.title))})]}),d.jsxs(cl,{ref:l=>e.current[3]=l,children:[d.jsx("h2",{children:"Marine Ecosystem"}),d.jsx("p",{children:"Marine ecosystems are intricate networks where every organism plays a vital role. From the smallest plankton to the largest predators, each species contributes to the delicate balance that sustains oceanic life."}),d.jsxs(V6,{ref:r,children:[d.jsx(B6,{}),a.map((l,u)=>d.jsx(U6,{color:l.color,top:l.top,left:l.left,duration:l.duration,delay:l.delay},u))]}),d.jsx("p",{children:"The health of these ecosystems depends on biodiversity and the complex interactions between species. When one element is disrupted, it can have far-reaching consequences throughout the entire food web."})]}),d.jsxs(cl,{ref:l=>e.current[4]=l,children:[d.jsx("h2",{children:"Threats to Marine Biodiversity"}),d.jsx("p",{children:"Despite their beauty and ecological importance, marine ecosystems face numerous threats:"}),d.jsxs(H6,{children:[d.jsxs("li",{children:[d.jsx("strong",{children:"Climate Change:"})," Rising temperatures cause coral bleaching and disrupt food chains"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Overfishing:"})," Depletes fish populations faster than they can reproduce"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Pollution:"})," Plastic waste, oil spills, and chemical runoff harm marine life"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Habitat Destruction:"})," Coastal development and bottom trawling destroy critical habitats"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Ocean Acidification:"})," Increased CO2 absorption makes it harder for shellfish to form shells"]})]}),d.jsx("p",{children:"Protecting marine biodiversity requires global cooperation and sustainable practices to ensure these vibrant ecosystems continue to thrive for generations to come."})]})]}),d.jsx(bi,{})]})};ht.registerPlugin(q);const G6=$a`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;$a`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;const X6=M.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #0077be, #00a6fb, #7fb9f2);
  z-index: -1;
  opacity: 0.1;
`,K6=M.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 2rem;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 80px;
  position: relative;
`,q6=M.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
`,Q6=M.header`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${G6} 1s ease-out;

  h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
    display: inline-block;
    transform-origin: 70% 70%;
  }

  p {
    font-size: 1.2rem;
    color: white;
    max-width: 800px;
    margin: 0 auto;
  }
`,Rp=M.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 105, 148, 0.1);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
  border-left: 5px solid #00a6fb;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 105, 148, 0.2);
  }

  h2 {
    color: #006994;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    color: #555;
    margin-bottom: 1rem;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,Z6=M.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,td=M.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0.9);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 105, 148, 0.15);
  }

  h3 {
    color: #006994;
    font-size: 2.5rem;
    margin: 0;
    background: linear-gradient(to right, #00a6fb, #006994);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  p {
    color: #666;
    margin: 0.5rem 0 0;
  }

  &.visible {
    opacity: 1;
    transform: scale(1);
  }
`,J6=M.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,e9=M.li`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-20px);

  &:nth-child(even) {
    transform: translateX(20px);
  }

  &:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 10px 25px rgba(0, 105, 148, 0.15);
  }

  h3 {
    color: #006994;
    margin-top: 0;
  }

  p {
    color: #666;
    line-height: 1.5;
  }

  a {
    color: #00a6fb;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;M.div`
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #00a6fb, #006994);
  color: white;
  border-radius: 15px;
  margin: 3rem 0;
  opacity: 0;
  transform: scale(0.95);

  h2 {
    margin-top: 0;
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 2rem;
  }

  button {
    background: white;
    color: #006994;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  &.visible {
    opacity: 1;
    transform: scale(1);
  }
`;const t9=M.div`
  margin: 0;
  margin-bottom: 2rem;
`,n9=M.div`
  min-height: 100vh;
  padding-top: 100px;
  background: linear-gradient(to bottom, rgba(0, 20, 40, 0.95), rgba(0, 40, 80, 0.9));
`,r9=M.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,i9=()=>{const e=C.useRef([]),t=C.useRef([]),n=C.useRef([]),r=C.useRef(null);C.useEffect(()=>(e.current.forEach((s,o)=>{s&&ht.to(s,{opacity:1,y:0,duration:.8,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play none none none"},delay:o*.1})}),t.current.forEach((s,o)=>{ht.to(s,{opacity:1,scale:1,duration:.6,ease:"back.out(1.7)",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play none none none"},delay:o*.15})}),n.current.forEach((s,o)=>{ht.to(s,{opacity:1,x:0,duration:.8,ease:"elastic.out(1, 0.5)",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play none none none"},delay:o*.1})}),r.current&&ht.to(r.current,{opacity:1,scale:1,duration:1,ease:"power2.out",scrollTrigger:{trigger:r.current,start:"top 80%",toggleActions:"play none none none"}}),()=>{q.getAll().forEach(s=>s.kill())}),[]);const i=[{name:"Ocean Conservancy",description:"Working to protect the ocean from today's greatest global challenges, with science-based solutions.",link:"https://oceanconservancy.org"},{name:"Sea Shepherd",description:"Direct-action conservation organization working to defend marine wildlife and habitats.",link:"https://seashepherd.org"},{name:"Surfrider Foundation",description:"Dedicated to the protection and enjoyment of the world's ocean, waves and beaches.",link:"https://www.surfrider.org"},{name:"The Ocean Cleanup",description:"Developing advanced technologies to rid the oceans of plastic.",link:"https://theoceancleanup.com"},{name:"Blue Marine Foundation",description:"Working to restore the ocean to health by addressing overfishing.",link:"https://www.bluemarinefoundation.com"},{name:"Coral Reef Alliance",description:"Saving the world's coral reefs by implementing science-based strategies.",link:"https://coral.org"}];return d.jsxs(n9,{children:[d.jsx(Wa,{currentPage:"/ngo",pages:Ha}),d.jsx(r9,{children:d.jsxs(q6,{children:[d.jsx(X6,{}),d.jsxs(K6,{children:[d.jsxs(Q6,{children:[d.jsx("h1",{children:"NGOs Protecting Our Oceans"}),d.jsx("p",{children:"NGOs around the globe are actively engaged in cleaning up our beaches and promoting marine conservation. These organizations play a crucial role in preserving marine habitats and educating communities on sustainable practices."})]}),d.jsxs(Rp,{ref:s=>e.current[0]=s,children:[d.jsx("h2",{children:"The Importance of Ocean Conservation"}),d.jsx("p",{children:"Our oceans cover more than 70% of the Earth's surface and are home to an incredible diversity of life. They regulate our climate, produce half of the oxygen we breathe, and provide food and livelihoods for billions of people. Yet, human activities are threatening marine ecosystems through pollution, overfishing, and climate change."}),d.jsx("p",{children:"Non-governmental organizations (NGOs) are at the forefront of efforts to protect and restore our oceans. Through research, advocacy, education, and direct action, these groups are making a tangible difference in marine conservation."})]}),d.jsxs(Z6,{children:[d.jsxs(td,{ref:s=>t.current[0]=s,children:[d.jsx("h3",{children:"8M+"}),d.jsx("p",{children:"Tons of plastic enter the ocean each year"})]}),d.jsxs(td,{ref:s=>t.current[1]=s,children:[d.jsx("h3",{children:"90%"}),d.jsx("p",{children:"Of large fish populations have been depleted"})]}),d.jsxs(td,{ref:s=>t.current[2]=s,children:[d.jsx("h3",{children:"50%"}),d.jsx("p",{children:"Of coral reefs have been lost since 1950"})]}),d.jsxs(td,{ref:s=>t.current[3]=s,children:[d.jsx("h3",{children:"30%"}),d.jsx("p",{children:"Of marine protected areas needed by 2030"})]})]}),d.jsxs(Rp,{ref:s=>e.current[1]=s,children:[d.jsx("h2",{children:"How NGOs Are Making a Difference"}),d.jsx("p",{children:"Marine conservation NGOs employ various strategies to protect our oceans:"}),d.jsxs("ul",{style:{color:"#333"},children:[d.jsxs("li",{children:[d.jsx("strong",{children:"Beach Cleanups:"})," Organizing volunteers to remove trash from coastlines worldwide"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Policy Advocacy:"})," Lobbying governments for stronger marine protection laws"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Scientific Research:"})," Studying marine ecosystems to inform conservation efforts"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Education:"})," Teaching communities about sustainable fishing and plastic reduction"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Direct Action:"})," Patrolling protected areas to prevent illegal fishing"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Technology Development:"})," Creating innovative solutions to remove ocean plastic"]})]})]}),d.jsx("h2",{style:{textAlign:"center",margin:"3rem 0"},children:"Leading Ocean Conservation NGOs"}),d.jsx(J6,{children:i.map((s,o)=>d.jsxs(e9,{ref:a=>n.current[o]=a,children:[d.jsx("h3",{children:s.name}),d.jsx("p",{children:s.description}),d.jsx("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",children:"Visit Website →"})]},s.name))}),d.jsx(t9,{children:d.jsxs(Rp,{ref:s=>e.current[2]=s,style:{marginBottom:0},children:[d.jsx("h2",{children:"What You Can Do"}),d.jsx("p",{children:"While NGOs lead large-scale conservation efforts, individuals can make a significant impact through daily choices:"}),d.jsxs("ul",{style:{color:"#333"},children:[d.jsx("li",{children:"Reduce single-use plastics in your daily life"}),d.jsx("li",{children:"Choose sustainable seafood options"}),d.jsx("li",{children:"Participate in local beach cleanups"}),d.jsx("li",{children:"Support ocean-friendly businesses"}),d.jsx("li",{children:"Educate others about marine conservation"}),d.jsx("li",{children:"Donate to or volunteer with marine NGOs"})]}),d.jsx("p",{style:{marginBottom:0},children:"Together, we can ensure healthy oceans for future generations."})]})})]}),d.jsx(bi,{})]})})]})};ht.registerPlugin(q);const s9=M.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background: linear-gradient(to bottom, #006994, #003349);

  .bubble {
    position: absolute;
    background: rgba(78, 198, 255, 0.3);
    border-radius: 50%;
    pointer-events: none;
    filter: blur(1px);
  }

  .wave {
    position: absolute;
    width: 100%;
    height: 150px;
    background: linear-gradient(
      to bottom,
      rgba(78, 198, 255, 0.2),
      rgba(78, 198, 255, 0.1)
    );
    bottom: 0;
    left: 0;
    pointer-events: none;
    transform-origin: bottom;
  }
`,o9=M.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`,a9=M.div`
  min-height: 100vh;
  padding-top: 80px;
  position: relative;
  z-index: 1;
`,an=M.img`
  position: absolute;
  opacity: 0.8;
  transition: transform 0.3s ease;
  z-index: 1;
  
  &:hover {
    transform: scale(1.1);
  }
`,l9=M(an)`
  width: 120px;
  top: 20%;
  left: 5%;
  animation: swim 15s infinite linear;
`,u9=M(an)`
  width: 100px;
  top: 40%;
  right: 5%;
  animation: swimReverse 20s infinite linear;
`,c9=M(an)`
  width: 150px;
  bottom: 15%;
  left: 10%;
  animation: swim 25s infinite linear;
`,d9=M(an)`
  width: 90px;
  top: 60%;
  right: 15%;
  animation: swimReverse 18s infinite linear;
`,f9=M(an)`
  width: 80px;
  top: 30%;
  right: 25%;
  transform: scaleX(-1);
  animation: swimReverse 22s infinite linear;
`,h9=M(an)`
  width: 110px;
  bottom: 35%;
  left: 20%;
  animation: swim 19s infinite linear;
`,p9=M(an)`
  width: 70px;
  top: 75%;
  right: 10%;
  transform: scaleX(-1);
  animation: swimReverse 17s infinite linear;
`,m9=M(an)`
  width: 130px;
  top: 10%;
  left: 30%;
  animation: swim 24s infinite linear;
`,g9=M(an)`
  width: 95px;
  bottom: 25%;
  right: 35%;
  transform: scaleX(-1);
  animation: swimReverse 21s infinite linear;
`,v9=M(an)`
  width: 85px;
  top: 45%;
  left: 15%;
  animation: swim 16s infinite linear;
`,y9=M(an)`
  width: 100px;
  top: 15%;
  left: 40%;
  animation: swim 23s infinite linear;
`,x9=M(an)`
  width: 75px;
  bottom: 45%;
  right: 20%;
  transform: scaleX(-1);
  animation: swimReverse 18s infinite linear;
`,w9=M(an)`
  width: 120px;
  top: 55%;
  left: 25%;
  animation: swim 20s infinite linear;
`,b9=M(an)`
  width: 90px;
  bottom: 15%;
  right: 30%;
  transform: scaleX(-1);
  animation: swimReverse 25s infinite linear;
`,_9=M(an)`
  width: 105px;
  top: 85%;
  left: 35%;
  animation: swim 17s infinite linear;
`,S9=M.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2rem 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  z-index: 2;
  overflow: visible;
`,k9=M.header`
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  h1 {
    font-size: 4rem;
    color: #4fc3f7;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
    color: #b3e5fc;
    line-height: 1.6;
  }
`,Od=M.section`
  background: linear-gradient(
    to bottom,
    rgba(0, 20, 40, 0.9),
    rgba(0, 40, 80, 0.8)
  );
  border-radius: 15px;
  padding: 3rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(78, 198, 255, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  min-height: 600px;
  height: auto;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  overflow: visible;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/asset/oceanbg.jpg') center/cover;
    opacity: 0.1;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }

  &.tall-section {
    min-height: 500px;
    height: auto;
    justify-content: flex-start;
    overflow: visible;
    padding: 2.5rem;

    p {
      font-size: 1.4rem;
      line-height: 1.8;
      margin: 1.5rem auto;
      color: #e1f5fe;
      opacity: 1;
      visibility: visible;
    }
  }

  h2 {
    color: #4fc3f7;
    font-size: 2.8rem;
    text-align: center;
    margin-bottom: 1.5rem;
    opacity: 1;
    visibility: visible;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }

  p {
    color: #e1f5fe;
    line-height: 1.8;
    font-size: 1.3rem;
    text-align: justify;
    max-width: 1000px;
    margin: 1rem auto;
    opacity: 1;
    visibility: visible;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 90%;
  }

  li {
    color: #e1f5fe;
    padding-left: 2.5rem;
    position: relative;
    font-size: 1.4rem;
    line-height: 1.8;
    opacity: 1;
    visibility: visible;
    
    &:before {
      content: "•";
      color: #4fc3f7;
      position: absolute;
      left: 0;
      font-size: 1.8rem;
    }
  }

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`,C9=M(Od)`
  background: linear-gradient(
    to bottom,
    rgba(0, 20, 40, 0.9),
    rgba(0, 40, 80, 0.8)
  );
  border: 2px solid rgba(78, 198, 255, 0.3);
  min-height: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 6rem 5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/asset/oceanbg.jpg') center/cover;
    opacity: 0.1;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
  
  h2 {
    color: #00ffff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  
  > p {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 4rem;
    max-width: 900px;
    color: #80ffff;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
    line-height: 1.8;
  }

  .game-container {
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
    background: rgba(0, 20, 40, 0.6);
    padding: 3rem;
    border-radius: 15px;
    border: 1px solid rgba(78, 198, 255, 0.2);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('/asset/oceanbg.jpg') center/cover;
      opacity: 0.15;
      z-index: 0;
      pointer-events: none;
    }

    > * {
      position: relative;
      z-index: 1;
    }
  }
`,dl=M.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 20, 40, 0.95),
    rgba(0, 40, 80, 0.9)
  );
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(78, 198, 255, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/asset/oceanbg.jpg') center/cover;
    opacity: 0.1;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
    border-color: rgba(78, 198, 255, 0.5);
  }

  .project-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;

    .icon {
      width: 60px;
      height: 60px;
      background: rgba(78, 198, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: #4fc3f7;
    }

    h3 {
      color: #4fc3f7;
      font-size: 2rem;
      margin: 0;
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
    }
  }

  .project-content {
    position: relative;
    z-index: 1;
    color: #e1f5fe;
    line-height: 1.8;
    font-size: 1.2rem;
    text-align: justify;
  }

  .project-stats {
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
    position: relative;
    z-index: 1;

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      .number {
        font-size: 2rem;
        color: #4fc3f7;
        font-weight: bold;
      }

      .label {
        font-size: 1rem;
        color: #b3e5fc;
      }
    }
  }

  .project-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    position: relative;
    z-index: 1;

    button {
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 25px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      background: linear-gradient(45deg, #4fc3f7, #0288d1);
      color: white;
      text-transform: uppercase;
      letter-spacing: 1px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
      }

      &.secondary {
        background: transparent;
        border: 2px solid #4fc3f7;
        color: #4fc3f7;

        &:hover {
          background: rgba(78, 198, 255, 0.1);
        }
      }
    }
  }
`,T9=()=>{const e=C.useRef([]),t=C.useRef(null);return C.useEffect(()=>{const n=()=>{const o=[];for(let a=0;a<30;a++){const l=document.createElement("div");l.className="bubble";const u=Math.random()*40+10;l.style.width=`${u}px`,l.style.height=`${u}px`,l.style.left=`${Math.random()*100}%`,l.style.bottom="-50px",t.current.appendChild(l),o.push(l),ht.to(l,{y:"-100vh",x:Math.random()*200-100,duration:Math.random()*15+10,repeat:-1,delay:Math.random()*5,ease:"none",opacity:Math.random()*.4+.1})}return o},r=()=>{const o=[];for(let a=0;a<3;a++){const l=document.createElement("div");l.className="wave",l.style.opacity=`${.3-a*.1}`,l.style.transform=`translateY(${a*30}px)`,t.current.appendChild(l),o.push(l),ht.to(l,{y:"+=30",duration:3+a,repeat:-1,yoyo:!0,ease:"sine.inOut"})}return o},i=n(),s=r();return e.current.forEach((o,a)=>{o&&ht.fromTo(o,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:o,start:"top 80%",toggleActions:"play none none reverse"},delay:a*.2})}),()=>{q.getAll().forEach(o=>o.kill()),i.forEach(o=>o.remove()),s.forEach(o=>o.remove())}},[]),d.jsxs(o9,{children:[d.jsx(s9,{ref:t}),d.jsx(Wa,{currentPage:"/conservation",pages:Ha}),d.jsxs(a9,{children:[d.jsx(l9,{src:"/asset/fish01.png",alt:"Swimming fish 1"}),d.jsx(u9,{src:"/asset/fish02.png",alt:"Swimming fish 2"}),d.jsx(c9,{src:"/asset/fish03.png",alt:"Swimming fish 3"}),d.jsx(d9,{src:"/asset/fish04.png",alt:"Swimming fish 4"}),d.jsx(f9,{src:"/asset/fish01.png",alt:"Swimming fish 5"}),d.jsx(h9,{src:"/asset/fish02.png",alt:"Swimming fish 6"}),d.jsx(p9,{src:"/asset/fish03.png",alt:"Swimming fish 7"}),d.jsx(m9,{src:"/asset/fish04.png",alt:"Swimming fish 8"}),d.jsx(g9,{src:"/asset/fish01.png",alt:"Swimming fish 9"}),d.jsx(v9,{src:"/asset/fish02.png",alt:"Swimming fish 10"}),d.jsx(y9,{src:"/asset/fish03.png",alt:"Swimming fish 11"}),d.jsx(x9,{src:"/asset/fish04.png",alt:"Swimming fish 12"}),d.jsx(w9,{src:"/asset/fish01.png",alt:"Swimming fish 13"}),d.jsx(b9,{src:"/asset/fish02.png",alt:"Swimming fish 14"}),d.jsx(_9,{src:"/asset/fish03.png",alt:"Swimming fish 15"}),d.jsxs(S9,{children:[d.jsxs(k9,{children:[d.jsx("h1",{children:"Ocean Conservation Initiatives"}),d.jsx("p",{children:"Join us in protecting our oceans through education, awareness, and action"})]}),d.jsxs(Od,{ref:n=>e.current[0]=n,className:"tall-section",children:[d.jsx("h2",{children:"Why Ocean Conservation Matters"}),d.jsx("p",{children:"Our oceans are vital to life on Earth, producing over 50% of the world's oxygen and regulating our climate. They are home to countless species, from microscopic plankton to the majestic blue whales, creating a complex and delicate ecosystem that maintains our planet's balance."}),d.jsx("p",{children:"Yet, human activities pose unprecedented threats to these marine environments through pollution, overfishing, and climate change. The rising temperatures and ocean acidification are causing coral bleaching, while plastic pollution continues to harm marine life at an alarming rate."}),d.jsx("p",{children:"Through conservation efforts and awareness, we can help protect these precious ecosystems for future generations. Every action counts, from reducing plastic use to supporting sustainable fishing practices, in preserving the health and biodiversity of our oceans."})]}),d.jsxs(C9,{ref:n=>e.current[1]=n,children:[d.jsx("h2",{children:"Interactive Ocean Cleanup Challenge"}),d.jsx("p",{children:"Dive into our interactive game and become an ocean guardian! Help clean up marine debris, learn about different types of ocean pollution, and discover how your actions can make a real difference in protecting our marine ecosystems."}),d.jsx("div",{className:"game-container",children:d.jsx(U4,{})})]}),d.jsxs(Od,{ref:n=>e.current[2]=n,children:[d.jsx("h2",{children:"Current Conservation Projects"}),d.jsxs(dl,{children:[d.jsxs("div",{className:"project-header",children:[d.jsx("div",{className:"icon",children:"🐠"}),d.jsx("h3",{children:"Coral Reef Restoration Programs"})]}),d.jsx("div",{className:"project-content",children:d.jsx("p",{children:"Our coral reef restoration initiative focuses on rehabilitating damaged reef ecosystems through innovative techniques like coral farming and transplantation. We work with local communities and scientists to ensure sustainable restoration practices."})}),d.jsxs("div",{className:"project-stats",children:[d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"12"}),d.jsx("span",{className:"label",children:"Active Sites"})]}),d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"50,000+"}),d.jsx("span",{className:"label",children:"Corals Planted"})]}),d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"85%"}),d.jsx("span",{className:"label",children:"Survival Rate"})]})]}),d.jsxs("div",{className:"project-actions",children:[d.jsx("button",{onClick:()=>window.open("https://coral.org/","_blank"),children:"Learn More"}),d.jsx("button",{className:"secondary",children:"Support Project"})]})]}),d.jsxs(dl,{children:[d.jsxs("div",{className:"project-header",children:[d.jsx("div",{className:"icon",children:"🛡️"}),d.jsx("h3",{children:"Marine Protected Areas Expansion"})]}),d.jsx("div",{className:"project-content",children:d.jsx("p",{children:"We're working to establish and expand marine protected areas (MPAs) to safeguard critical marine habitats. Our efforts include scientific research, community engagement, and policy advocacy to create effective conservation zones."})}),d.jsxs("div",{className:"project-stats",children:[d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"8"}),d.jsx("span",{className:"label",children:"New MPAs"})]}),d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"5000+"}),d.jsx("span",{className:"label",children:"Square Miles"})]}),d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"100+"}),d.jsx("span",{className:"label",children:"Species Protected"})]})]}),d.jsxs("div",{className:"project-actions",children:[d.jsx("button",{onClick:()=>window.open("https://www.mpa.gov/","_blank"),children:"Learn More"}),d.jsx("button",{className:"secondary",children:"Support Project"})]})]}),d.jsxs(dl,{children:[d.jsxs("div",{className:"project-header",children:[d.jsx("div",{className:"icon",children:"🎣"}),d.jsx("h3",{children:"Sustainable Fishing Initiatives"})]}),d.jsx("div",{className:"project-content",children:d.jsx("p",{children:"Our sustainable fishing program promotes responsible fishing practices and works with local fishermen to implement eco-friendly techniques. We provide training, resources, and support to ensure long-term marine resource sustainability."})}),d.jsxs("div",{className:"project-stats",children:[d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"15"}),d.jsx("span",{className:"label",children:"Fishing Communities"})]}),d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"2000+"}),d.jsx("span",{className:"label",children:"Fishermen Trained"})]}),d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"40%"}),d.jsx("span",{className:"label",children:"Bycatch Reduction"})]})]}),d.jsxs("div",{className:"project-actions",children:[d.jsx("button",{onClick:()=>window.open("https://www.msc.org/","_blank"),children:"Learn More"}),d.jsx("button",{className:"secondary",children:"Support Project"})]})]}),d.jsxs(dl,{children:[d.jsxs("div",{className:"project-header",children:[d.jsx("div",{className:"icon",children:"♻️"}),d.jsx("h3",{children:"Plastic Pollution Reduction"})]}),d.jsx("div",{className:"project-content",children:d.jsx("p",{children:"Our plastic pollution initiative focuses on reducing marine debris through community cleanups, recycling programs, and public awareness campaigns. We work to prevent plastic waste from entering our oceans and harming marine life."})}),d.jsxs("div",{className:"project-stats",children:[d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"100+"}),d.jsx("span",{className:"label",children:"Cleanup Events"})]}),d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"50,000+"}),d.jsx("span",{className:"label",children:"Pounds Collected"})]}),d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"10,000+"}),d.jsx("span",{className:"label",children:"Volunteers"})]})]}),d.jsxs("div",{className:"project-actions",children:[d.jsx("button",{onClick:()=>window.open("https://www.oceanconservancy.org/trash-free-seas/","_blank"),children:"Learn More"}),d.jsx("button",{className:"secondary",children:"Support Project"})]})]}),d.jsxs(dl,{children:[d.jsxs("div",{className:"project-header",children:[d.jsx("div",{className:"icon",children:"🐋"}),d.jsx("h3",{children:"Marine Wildlife Protection"})]}),d.jsx("div",{className:"project-content",children:d.jsx("p",{children:"Our marine wildlife protection program focuses on conserving endangered species and their habitats. We conduct research, implement protection measures, and work with local communities to ensure the survival of marine species."})}),d.jsxs("div",{className:"project-stats",children:[d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"20+"}),d.jsx("span",{className:"label",children:"Species Protected"})]}),d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"5"}),d.jsx("span",{className:"label",children:"Research Centers"})]}),d.jsxs("div",{className:"stat",children:[d.jsx("span",{className:"number",children:"1000+"}),d.jsx("span",{className:"label",children:"Animals Rescued"})]})]}),d.jsxs("div",{className:"project-actions",children:[d.jsx("button",{onClick:()=>window.open("https://www.worldwildlife.org/initiatives/oceans","_blank"),children:"Learn More"}),d.jsx("button",{className:"secondary",children:"Support Project"})]})]})]}),d.jsxs(Od,{ref:n=>e.current[3]=n,style:{marginBottom:"2rem"},children:[d.jsx("h2",{children:"How You Can Help"}),d.jsxs("ul",{children:[d.jsx("li",{children:"Reduce single-use plastics"}),d.jsx("li",{children:"Choose sustainable seafood"}),d.jsx("li",{children:"Support marine conservation organizations"}),d.jsx("li",{children:"Participate in beach cleanups"}),d.jsx("li",{children:"Spread awareness about ocean conservation"})]})]})]})]}),d.jsx(bi,{}),d.jsx("style",{children:`
          @keyframes swim {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(1500px);
            }
          }
          
          @keyframes swimReverse {
            from {
              transform: translateX(1500px);
            }
            to {
              transform: translateX(-100%);
            }
          }

          @keyframes fadeInOut {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 0.6; }
          }

          ${[...Array(15)].map((n,r)=>`
            .fish-${r+1} {
              animation: fadeInOut ${3+r*.3}s infinite ease-in-out;
            }
          `).join(`
`)}
        `})]})};function P9(e){return Tr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"},child:[]}]})(e)}function j9(e){return Tr({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"},child:[]}]})(e)}const E9=$a`
  0% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-40px) translateX(0px); }
  75% { transform: translateY(-20px) translateX(-10px); }
  100% { transform: translateY(0px) translateX(0px); }
`,R9=M.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: linear-gradient(to bottom, #0077be, #003366);
  overflow: hidden;
`,M9=M.div`
  flex: 1;
  position: relative;
  padding: 2rem;
  padding-top: 150px;
  overflow: hidden;
  color: white;
  font-family: 'Arial', sans-serif;
`,A9=M(Ua.div)`
  position: absolute;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.6);
  animation: ${E9} 8s ease-in-out infinite;
  z-index: 1;
`,D9=M(Ua.div)`
  max-width: 600px;
  margin: 3rem auto;
  padding: 3rem;
  background: rgba(0, 50, 100, 0.7);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  position: relative;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 255, 255, 0.2);
  }
`,N9=M.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4fc3f7;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 5px rgba(79, 195, 247, 0.5);
`,Mp=M.div`
  margin-bottom: 1.5rem;
  position: relative;
`,Ap=M.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #bbdefb;
  transition: all 0.3s ease;
`,Xw=M.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #4fc3f7;
    box-shadow: 0 0 10px rgba(79, 195, 247, 0.5);
    background: rgba(255, 255, 255, 0.15);
  }

  &:hover {
    border-color: #4fc3f7;
  }
`,O9=M.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #4fc3f7;
    box-shadow: 0 0 10px rgba(79, 195, 247, 0.5);
    background: rgba(255, 255, 255, 0.15);
  }

  &:hover {
    border-color: #4fc3f7;
  }
`,z9=M(Ua.button)`
  background: linear-gradient(45deg, #00b4db, #0083b0);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(0, 180, 219, 0.3);
  transition: all 0.3s;

  &:hover {
    background: linear-gradient(45deg, #0083b0, #00b4db);
    box-shadow: 0 6px 20px rgba(0, 180, 219, 0.4);
    transform: translateY(-2px);
  }
`,I9=M(Ua.div)`
  background: rgba(46, 125, 50, 0.8);
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,L9=M.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(0, 50, 100, 0.5);
  border-radius: 10px;
`,Dp=M.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #bbdefb;
  transition: all 0.3s ease;

  &:hover {
    color: #4fc3f7;
    transform: translateX(5px);
  }

  svg {
    font-size: 1.2rem;
  }
`,F9=M.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  align-items: center;
  z-index: 10000;
  margin-top: 40px;
  background: transparent;
  backdrop-filter: blur(5px);

  .logo {
    color: #ffffff;
    font-weight: 700;
    font-size: 2em;
    text-decoration: none;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: auto;
    padding-left: 30px;
    margin-top: 0;
  }

  nav {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    margin-left: 50px;
    margin-top: 0;
    padding-right: 40px;
  }

  .nav-link {
    text-decoration: none;
    padding: 0.005px;
    color:#ffffff;
    border-radius: 20px;
    transition: all 0.3s ease;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    margin-left: 10px;
    padding: 10px;
    margin-top: 0;
    margin-right: 90px;
    margin-left: 100px;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #ffffff;
      padding: 10px;
    }
  }

  .navbar {
    width: 100%;
    padding: 0;
    margin-right: 60px;
  }
`,$9=()=>{const[e,t]=C.useState({name:"",email:"",message:""}),[n,r]=C.useState(!1),[i,s]=C.useState([]);C.useEffect(()=>{const l=Array.from({length:8}).map((c,f)=>({id:f,x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,size:Math.random()*1.5+1,speed:Math.random()*2+1}));s(l);const u=setInterval(()=>{s(c=>c.map(f=>({...f,x:(f.x+f.speed)%window.innerWidth,y:f.y+Math.sin(Date.now()/1e3+f.id)*2})))},50);return()=>clearInterval(u)},[]);const o=l=>{const{name:u,value:c}=l.target;t(f=>({...f,[u]:c}))},a=l=>{l.preventDefault(),console.log("Form submitted:",e),r(!0),t({name:"",email:"",message:""}),setTimeout(()=>{r(!1)},5e3)};return d.jsxs(R9,{children:[d.jsx(F9,{children:d.jsx(Bg,{})}),d.jsxs(M9,{children:[i.map(l=>d.jsx(A9,{style:{left:`${l.x}px`,top:`${l.y}px`,fontSize:`${l.size}rem`,animationDuration:`${8/l.speed}s`},children:d.jsx(d6,{})},l.id)),d.jsxs(D9,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[d.jsxs(N9,{children:[d.jsx(m6,{})," Contact Us About Marine Life"]}),d.jsx("p",{style:{marginBottom:"1.5rem",color:"#bbdefb"},children:"Have questions about ocean conservation or marine species? Want to get involved in protecting life below water? Send us a message!"}),d.jsxs("form",{onSubmit:a,children:[d.jsxs(Mp,{children:[d.jsx(Ap,{htmlFor:"name",children:"Your Name"}),d.jsx(Xw,{type:"text",id:"name",name:"name",value:e.name,onChange:o,required:!0})]}),d.jsxs(Mp,{children:[d.jsx(Ap,{htmlFor:"email",children:"Email Address"}),d.jsx(Xw,{type:"email",id:"email",name:"email",value:e.email,onChange:o,required:!0})]}),d.jsxs(Mp,{children:[d.jsx(Ap,{htmlFor:"message",children:"Your Message"}),d.jsx(O9,{id:"message",name:"message",value:e.message,onChange:o,required:!0})]}),d.jsxs(z9,{type:"submit",whileHover:{scale:1.05},whileTap:{scale:.95},children:[d.jsx(h6,{})," Send Message"]})]}),n&&d.jsxs(I9,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[d.jsx(P9,{})," Thank you for your message! We'll get back to you soon."]}),d.jsxs(L9,{children:[d.jsxs(Dp,{children:[d.jsx(f6,{})," 123 Ocean Avenue, Marine City, MC 12345"]}),d.jsxs(Dp,{children:[d.jsx(c6,{})," contact@ocean-guardian.com"]}),d.jsxs(Dp,{children:[d.jsx(p6,{})," +1 (555) 123-4567"]})]})]}),d.jsxs(Ua.div,{style:{textAlign:"center",marginTop:"2rem",color:"#bbdefb",display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem"},animate:{opacity:[.6,1,.6]},transition:{duration:3,repeat:1/0},children:[d.jsx(j9,{})," Together we can protect life below water - SDG Goal 14"]})]}),d.jsx(bi,{})]})};ht.registerPlugin(q);const V9=()=>{const[e,t]=C.useState(null),[n,r]=C.useState(""),[i,s]=C.useState(null),{deepSea:o}=C.useContext(Jk),a=[{id:1,name:"Anglerfish",fact:"The anglerfish uses a bioluminescent lure to attract prey in the dark depths.",quizQuestion:"What does the anglerfish use to attract prey?",answer:"bioluminescent lure",direction:"left-to-right",image:o.fishImages.anglerfish,topPosition:"30%",leftPosition:"-5%"},{id:2,name:"Giant Squid",fact:"The giant squid has the largest eyes in the animal kingdom, up to 10 inches in diameter.",quizQuestion:"How large can a giant squid's eyes grow?",answer:"10 inches",direction:"right-to-left",image:o.fishImages.giantSquid,topPosition:"55%",rightPosition:"-8%"},{id:3,name:"Vampire Squid",fact:"The vampire squid can turn itself inside out to avoid predators.",quizQuestion:"How does the vampire squid avoid predators?",answer:"turns itself inside out",direction:"right-to-left",image:o.fishImages.vampireSquid,topPosition:"25%",rightPosition:"30%"},{id:4,name:"Dumbo Octopus",fact:"The dumbo octopus gets its name from ear-like fins that resemble Disney's Dumbo.",quizQuestion:"Why is the dumbo octopus named that way?",answer:"ear-like fins resemble Dumbo",direction:"right-to-left",image:o.fishImages.dumboOctopus,topPosition:"40%",rightPosition:"18%"},{id:5,name:"Hatchetfish",fact:"Hatchetfish can adjust their bioluminescence to match the light from above, camouflaging themselves.",quizQuestion:"How do hatchetfish use bioluminescence?",answer:"to camouflage themselves",direction:"left-to-right",image:o.fishImages.hatchetfish,topPosition:"65%",leftPosition:"25%"},{id:6,name:"Barreleye Fish",fact:"The barreleye fish has a transparent head and tubular eyes that can rotate.",quizQuestion:"What is unique about the barreleye fish's head?",answer:"it is transparent",direction:"left-to-right",image:o.fishImages.barreleye,topPosition:"80%",leftPosition:"-10%",reverseImage:!1}],l=o.coralImages,u=h=>{t(h),s(null),r("")},c=h=>{h.preventDefault(),n.toLowerCase()===e.answer.toLowerCase()?s("correct"):s("wrong")},f=()=>{t(null),s(null),r("")};return C.useEffect(()=>(document.documentElement.style.setProperty("--wave-pattern-url",`url(${o.wavePattern})`),()=>{document.documentElement.style.removeProperty("--wave-pattern-url")}),[o.wavePattern]),d.jsxs("div",{className:"deep-sea-app-container",children:[d.jsx(Wa,{currentPage:"/deep-sea",pages:Ha}),d.jsxs("div",{className:"deep-sea-container",children:[d.jsx("div",{className:"tap-instructions",children:"Tap on the creatures to test"}),d.jsxs("div",{className:"ocean",children:[d.jsx("div",{className:"wave"}),d.jsx("div",{className:"wave"}),a.map(h=>d.jsxs("div",{className:`fish ${h.direction} ${(e==null?void 0:e.id)===h.id?"paused":""}`,style:{top:h.topPosition,left:h.direction==="left-to-right"?h.leftPosition:void 0,right:h.direction==="right-to-left"?h.rightPosition:void 0},onClick:()=>u(h),children:[d.jsx("img",{src:h.image,alt:h.name,className:`fish-image ${h.reverseImage?"reverse-image":""}`}),d.jsx("div",{className:`fact-bubble ${h.direction==="right-to-left"?"reverse-bubble":""}`,children:d.jsx("p",{children:h.fact})})]},h.id))]}),d.jsxs("div",{className:"coral-reef-container",children:[[...Array(15)].map((h,p)=>d.jsx("img",{src:l[p%l.length],alt:`Coral ${p+1}`,className:"coral-image",style:{left:`${p*7}%`}},p)),[...Array(14)].map((h,p)=>d.jsx("img",{src:l[(p+3)%l.length],alt:`Small Coral ${p+1}`,className:"coral-image small",style:{left:`${p*7+3.5}%`}},`small-${p}`))]}),e&&d.jsx("div",{className:"quiz-modal",children:d.jsxs("div",{className:"quiz-content",children:[d.jsx("h3",{children:e.quizQuestion}),d.jsxs("form",{onSubmit:c,children:[d.jsx("input",{type:"text",value:n,onChange:h=>r(h.target.value),placeholder:"Your answer..."}),d.jsx("button",{type:"submit",children:"Submit"})]}),i==="correct"&&d.jsxs("div",{className:"result correct",children:["Correct! 🎉",d.jsx("button",{onClick:f,children:"Continue"})]}),i==="wrong"&&d.jsx("div",{className:"result wrong",children:"Wrong answer. Try again!"})]})})]}),d.jsx(bi,{})]})};var ev=pc(),J=e=>hc(e,ev),tv=pc();J.write=e=>hc(e,tv);var gh=pc();J.onStart=e=>hc(e,gh);var nv=pc();J.onFrame=e=>hc(e,nv);var rv=pc();J.onFinish=e=>hc(e,rv);var fa=[];J.setTimeout=(e,t)=>{const n=J.now()+t,r=()=>{const s=fa.findIndex(o=>o.cancel==r);~s&&fa.splice(s,1),Hi-=~s?1:0},i={time:n,handler:e,cancel:r};return fa.splice(xk(n),0,i),Hi+=1,wk(),i};var xk=e=>~(~fa.findIndex(t=>t.time>e)||~fa.length);J.cancel=e=>{gh.delete(e),nv.delete(e),rv.delete(e),ev.delete(e),tv.delete(e)};J.sync=e=>{L0=!0,J.batchedUpdates(e),L0=!1};J.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...i){t=i,J.onStart(n)}return r.handler=e,r.cancel=()=>{gh.delete(n),t=null},r};var iv=typeof window<"u"?window.requestAnimationFrame:()=>{};J.use=e=>iv=e;J.now=typeof performance<"u"?()=>performance.now():Date.now;J.batchedUpdates=e=>e();J.catch=console.error;J.frameLoop="always";J.advance=()=>{J.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):_k()};var Wi=-1,Hi=0,L0=!1;function hc(e,t){L0?(t.delete(e),e(0)):(t.add(e),wk())}function wk(){Wi<0&&(Wi=0,J.frameLoop!=="demand"&&iv(bk))}function B9(){Wi=-1}function bk(){~Wi&&(iv(bk),J.batchedUpdates(_k))}function _k(){const e=Wi;Wi=J.now();const t=xk(Wi);if(t&&(Sk(fa.splice(0,t),n=>n.handler()),Hi-=t),!Hi){B9();return}gh.flush(),ev.flush(e?Math.min(64,Wi-e):16.667),nv.flush(),tv.flush(),rv.flush()}function pc(){let e=new Set,t=e;return{add(n){Hi+=t==e&&!e.has(n)?1:0,e.add(n)},delete(n){return Hi-=t==e&&e.has(n)?1:0,e.delete(n)},flush(n){t.size&&(e=new Set,Hi-=t.size,Sk(t,r=>r(n)&&e.add(r)),Hi+=e.size,t=e)}}}function Sk(e,t){e.forEach(n=>{try{t(n)}catch(r){J.catch(r)}})}var U9=Object.defineProperty,W9=(e,t)=>{for(var n in t)U9(e,n,{get:t[n],enumerable:!0})},Cr={};W9(Cr,{assign:()=>Y9,colors:()=>is,createStringInterpolator:()=>ov,skipAnimation:()=>Ck,to:()=>kk,willAdvance:()=>av});function F0(){}var H9=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),z={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function ii(e,t){if(z.arr(e)){if(!z.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var ue=(e,t)=>e.forEach(t);function Qr(e,t,n){if(z.arr(e)){for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);return}for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var Nn=e=>z.und(e)?[]:z.arr(e)?e:[e];function nu(e,t){if(e.size){const n=Array.from(e);e.clear(),ue(n,t)}}var El=(e,...t)=>nu(e,n=>n(...t)),sv=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ov,kk,is=null,Ck=!1,av=F0,Y9=e=>{e.to&&(kk=e.to),e.now&&(J.now=e.now),e.colors!==void 0&&(is=e.colors),e.skipAnimation!=null&&(Ck=e.skipAnimation),e.createStringInterpolator&&(ov=e.createStringInterpolator),e.requestAnimationFrame&&J.use(e.requestAnimationFrame),e.batchedUpdates&&(J.batchedUpdates=e.batchedUpdates),e.willAdvance&&(av=e.willAdvance),e.frameLoop&&(J.frameLoop=e.frameLoop)},ru=new Set,Qn=[],Np=[],Nf=0,vh={get idle(){return!ru.size&&!Qn.length},start(e){Nf>e.priority?(ru.add(e),J.onStart(G9)):(Tk(e),J($0))},advance:$0,sort(e){if(Nf)J.onFrame(()=>vh.sort(e));else{const t=Qn.indexOf(e);~t&&(Qn.splice(t,1),Pk(e))}},clear(){Qn=[],ru.clear()}};function G9(){ru.forEach(Tk),ru.clear(),J($0)}function Tk(e){Qn.includes(e)||Pk(e)}function Pk(e){Qn.splice(X9(Qn,t=>t.priority>e.priority),0,e)}function $0(e){const t=Np;for(let n=0;n<Qn.length;n++){const r=Qn[n];Nf=r.priority,r.idle||(av(r),r.advance(e),r.idle||t.push(r))}return Nf=0,Np=Qn,Np.length=0,Qn=t,Qn.length>0}function X9(e,t){const n=e.findIndex(t);return n<0?e.length:n}var K9={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},wr="[-+]?\\d*\\.?\\d+",Of=wr+"%";function yh(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var q9=new RegExp("rgb"+yh(wr,wr,wr)),Q9=new RegExp("rgba"+yh(wr,wr,wr,wr)),Z9=new RegExp("hsl"+yh(wr,Of,Of)),J9=new RegExp("hsla"+yh(wr,Of,Of,wr)),eD=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,tD=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,nD=/^#([0-9a-fA-F]{6})$/,rD=/^#([0-9a-fA-F]{8})$/;function iD(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=nD.exec(e))?parseInt(t[1]+"ff",16)>>>0:is&&is[e]!==void 0?is[e]:(t=q9.exec(e))?(Po(t[1])<<24|Po(t[2])<<16|Po(t[3])<<8|255)>>>0:(t=Q9.exec(e))?(Po(t[1])<<24|Po(t[2])<<16|Po(t[3])<<8|Qw(t[4]))>>>0:(t=eD.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=rD.exec(e))?parseInt(t[1],16)>>>0:(t=tD.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Z9.exec(e))?(Kw(qw(t[1]),nd(t[2]),nd(t[3]))|255)>>>0:(t=J9.exec(e))?(Kw(qw(t[1]),nd(t[2]),nd(t[3]))|Qw(t[4]))>>>0:null}function Op(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Kw(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,s=Op(i,r,e+1/3),o=Op(i,r,e),a=Op(i,r,e-1/3);return Math.round(s*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function Po(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function qw(e){return(parseFloat(e)%360+360)%360/360}function Qw(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function nd(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Zw(e){let t=iD(e);if(t===null)return e;t=t||0;const n=(t&4278190080)>>>24,r=(t&16711680)>>>16,i=(t&65280)>>>8,s=(t&255)/255;return`rgba(${n}, ${r}, ${i}, ${s})`}var Hu=(e,t,n)=>{if(z.fun(e))return e;if(z.arr(e))return Hu({range:e,output:t,extrapolate:n});if(z.str(e.output[0]))return ov(e);const r=e,i=r.output,s=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(u=>u);return u=>{const c=oD(u,s);return sD(u,s[c],s[c+1],i[c],i[c+1],l,o,a,r.map)}};function sD(e,t,n,r,i,s,o,a,l){let u=l?l(e):e;if(u<t){if(o==="identity")return u;o==="clamp"&&(u=t)}if(u>n){if(a==="identity")return u;a==="clamp"&&(u=n)}return r===i?r:t===n?e<=t?r:i:(t===-1/0?u=-u:n===1/0?u=u-t:u=(u-t)/(n-t),u=s(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function oD(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}var aD={linear:e=>e},Yu=Symbol.for("FluidValue.get"),Na=Symbol.for("FluidValue.observers"),qn=e=>!!(e&&e[Yu]),cn=e=>e&&e[Yu]?e[Yu]():e,Jw=e=>e[Na]||null;function lD(e,t){e.eventObserved?e.eventObserved(t):e(t)}function Gu(e,t){const n=e[Na];n&&n.forEach(r=>{lD(r,t)})}var jk=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");uD(this,e)}},uD=(e,t)=>Ek(e,Yu,t);function Ya(e,t){if(e[Yu]){let n=e[Na];n||Ek(e,Na,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Xu(e,t){const n=e[Na];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Na]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var Ek=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),zd=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,cD=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,eb=new RegExp(`(${zd.source})(%|[a-z]+)`,"i"),dD=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,xh=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Rk=e=>{const[t,n]=fD(e);if(!t||sv())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||e}else{if(n&&xh.test(n))return Rk(n);if(n)return n}return e},fD=e=>{const t=xh.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},zp,hD=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Mk=e=>{zp||(zp=is?new RegExp(`(${Object.keys(is).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map(s=>cn(s).replace(xh,Rk).replace(cD,Zw).replace(zp,Zw)),n=t.map(s=>s.match(zd).map(Number)),i=n[0].map((s,o)=>n.map(a=>{if(!(o in a))throw Error('The arity of each "output" value must be equal');return a[o]})).map(s=>Hu({...e,output:s}));return s=>{var l;const o=!eb.test(t[0])&&((l=t.find(u=>eb.test(u)))==null?void 0:l.replace(zd,""));let a=0;return t[0].replace(zd,()=>`${i[a++](s)}${o||""}`).replace(dD,hD)}},lv="react-spring: ",Ak=e=>{const t=e;let n=!1;if(typeof t!="function")throw new TypeError(`${lv}once requires a function parameter`);return(...r)=>{n||(t(...r),n=!0)}},pD=Ak(console.warn);function mD(){pD(`${lv}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var gD=Ak(console.warn);function vD(){gD(`${lv}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function wh(e){return z.str(e)&&(e[0]=="#"||/\d/.test(e)||!sv()&&xh.test(e)||e in(is||{}))}var uv=sv()?C.useEffect:C.useLayoutEffect,yD=()=>{const e=C.useRef(!1);return uv(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function Dk(){const e=C.useState()[1],t=yD();return()=>{t.current&&e(Math.random())}}function xD(e,t){const[n]=C.useState(()=>({inputs:t,result:e()})),r=C.useRef(),i=r.current;let s=i;return s?t&&s.inputs&&wD(t,s.inputs)||(s={inputs:t,result:e()}):s=n,C.useEffect(()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)},[s]),s.result}function wD(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var Nk=e=>C.useEffect(e,bD),bD=[];function tb(e){const t=C.useRef();return C.useEffect(()=>{t.current=e}),t.current}var Ku=Symbol.for("Animated:node"),_D=e=>!!e&&e[Ku]===e,Or=e=>e&&e[Ku],cv=(e,t)=>H9(e,Ku,t),bh=e=>e&&e[Ku]&&e[Ku].getPayload(),Ok=class{constructor(){cv(this,this)}getPayload(){return this.payload||[]}},mc=class extends Ok{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,z.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new mc(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return z.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value===e?!1:(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,z.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},qu=class extends mc{constructor(e){super(0),this._string=null,this._toString=Hu({output:[e,e]})}static create(e){return new qu(e)}getValue(){const e=this._string;return e??(this._string=this._toString(this._value))}setValue(e){if(z.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=Hu({output:[this.getValue(),e]})),this._value=0,super.reset()}},zf={dependencies:null},_h=class extends Ok{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Qr(this.source,(n,r)=>{_D(n)?t[r]=n.getValue(e):qn(n)?t[r]=cn(n):e||(t[r]=n)}),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&ue(this.payload,e=>e.reset())}_makePayload(e){if(e){const t=new Set;return Qr(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){zf.dependencies&&qn(e)&&zf.dependencies.add(e);const t=bh(e);t&&ue(t,n=>this.add(n))}},zk=class extends _h{constructor(e){super(e)}static create(e){return new zk(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){const t=this.getPayload();return e.length==t.length?t.map((n,r)=>n.setValue(e[r])).some(Boolean):(super.setValue(e.map(SD)),!0)}};function SD(e){return(wh(e)?qu:mc).create(e)}function V0(e){const t=Or(e);return t?t.constructor:z.arr(e)?zk:wh(e)?qu:mc}var nb=(e,t)=>{const n=!z.fun(e)||e.prototype&&e.prototype.isReactComponent;return C.forwardRef((r,i)=>{const s=C.useRef(null),o=n&&C.useCallback(y=>{s.current=TD(i,y)},[i]),[a,l]=CD(r,t),u=Dk(),c=()=>{const y=s.current;if(n&&!y)return;(y?t.applyAnimatedValues(y,a.getValue(!0)):!1)===!1&&u()},f=new kD(c,l),h=C.useRef();uv(()=>(h.current=f,ue(l,y=>Ya(y,f)),()=>{h.current&&(ue(h.current.deps,y=>Xu(y,h.current)),J.cancel(h.current.update))})),C.useEffect(c,[]),Nk(()=>()=>{const y=h.current;ue(y.deps,g=>Xu(g,y))});const p=t.getComponentProps(a.getValue());return C.createElement(e,{...p,ref:o})})},kD=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){e.type=="change"&&J.write(this.update)}};function CD(e,t){const n=new Set;return zf.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new _h(e),zf.dependencies=null,[e,n]}function TD(e,t){return e&&(z.fun(e)?e(t):e.current=t),t}var rb=Symbol.for("AnimatedComponent"),PD=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=i=>new _h(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},s=o=>{const a=ib(o)||"Anonymous";return z.str(o)?o=s[o]||(s[o]=nb(o,i)):o=o[rb]||(o[rb]=nb(o,i)),o.displayName=`Animated(${a})`,o};return Qr(e,(o,a)=>{z.arr(e)&&(a=ib(o)),s[a]=s(o)}),{animated:s}},ib=e=>z.str(e)?e:e&&z.str(e.displayName)?e.displayName:z.fun(e)&&e.name||null;function As(e,...t){return z.fun(e)?e(...t):e}var iu=(e,t)=>e===!0||!!(t&&e&&(z.fun(e)?e(t):Nn(e).includes(t))),Ik=(e,t)=>z.obj(e)?t&&e[t]:e,Lk=(e,t)=>e.default===!0?e[t]:e.default?e.default[t]:void 0,jD=e=>e,dv=(e,t=jD)=>{let n=ED;e.default&&e.default!==!0&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const s=t(e[i],i);z.und(s)||(r[i]=s)}return r},ED=["config","onProps","onStart","onChange","onPause","onResume","onRest"],RD={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function MD(e){const t={};let n=0;if(Qr(e,(r,i)=>{RD[i]||(t[i]=r,n++)}),n)return t}function Fk(e){const t=MD(e);if(t){const n={to:t};return Qr(e,(r,i)=>i in t||(n[i]=r)),n}return{...e}}function Qu(e){return e=cn(e),z.arr(e)?e.map(Qu):wh(e)?Cr.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function AD(e){for(const t in e)return!0;return!1}function B0(e){return z.fun(e)||z.arr(e)&&z.obj(e[0])}function DD(e,t){var n;(n=e.ref)==null||n.delete(e),t==null||t.delete(e)}function ND(e,t){var n;t&&e.ref!==t&&((n=e.ref)==null||n.delete(e),t.add(e),e.ref=t)}var Id={default:{tension:170,friction:26},gentle:{tension:120,friction:14},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},U0={...Id.default,mass:1,damping:1,easing:aD.linear,clamp:!1},OD=class{constructor(){this.velocity=0,Object.assign(this,U0)}};function zD(e,t,n){n&&(n={...n},sb(n,t),t={...n,...t}),sb(e,t),Object.assign(e,t);for(const o in U0)e[o]==null&&(e[o]=U0[o]);let{frequency:r,damping:i}=e;const{mass:s}=e;return z.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*s,e.friction=4*Math.PI*i*s/r),e}function sb(e,t){if(!z.und(t.decay))e.duration=void 0;else{const n=!z.und(t.tension)||!z.und(t.friction);(n||!z.und(t.frequency)||!z.und(t.damping)||!z.und(t.mass))&&(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}}var ob=[],ID=class{constructor(){this.changed=!1,this.values=ob,this.toValues=null,this.fromValues=ob,this.config=new OD,this.immediate=!1}};function $k(e,{key:t,props:n,defaultProps:r,state:i,actions:s}){return new Promise((o,a)=>{let l,u,c=iu(n.cancel??(r==null?void 0:r.cancel),t);if(c)p();else{z.und(n.pause)||(i.paused=iu(n.pause,t));let y=r==null?void 0:r.pause;y!==!0&&(y=i.paused||iu(y,t)),l=As(n.delay||0,t),y?(i.resumeQueue.add(h),s.pause()):(s.resume(),h())}function f(){i.resumeQueue.add(h),i.timeouts.delete(u),u.cancel(),l=u.time-J.now()}function h(){l>0&&!Cr.skipAnimation?(i.delayed=!0,u=J.setTimeout(p,l),i.pauseQueue.add(f),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(f),i.timeouts.delete(u),e<=(i.cancelId||0)&&(c=!0);try{s.start({...n,callId:e,cancel:c},o)}catch(y){a(y)}}})}var fv=(e,t)=>t.length==1?t[0]:t.some(n=>n.cancelled)?ha(e.get()):t.every(n=>n.noop)?Vk(e.get()):xr(e.get(),t.every(n=>n.finished)),Vk=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),xr=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),ha=e=>({value:e,cancelled:!0,finished:!1});function Bk(e,t,n,r){const{callId:i,parentId:s,onRest:o}=t,{asyncTo:a,promise:l}=n;return!s&&e===a&&!t.reset?l:n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=dv(t,(w,m)=>m==="onRest"?void 0:w);let c,f;const h=new Promise((w,m)=>(c=w,f=m)),p=w=>{const m=i<=(n.cancelId||0)&&ha(r)||i!==n.asyncId&&xr(r,!1);if(m)throw w.result=m,f(w),w},y=(w,m)=>{const v=new ab,x=new lb;return(async()=>{if(Cr.skipAnimation)throw Zu(n),x.result=xr(r,!1),f(x),x;p(v);const _=z.obj(w)?{...w}:{...m,to:w};_.parentId=i,Qr(u,(k,b)=>{z.und(_[b])&&(_[b]=k)});const S=await r.start(_);return p(v),n.paused&&await new Promise(k=>{n.resumeQueue.add(k)}),S})()};let g;if(Cr.skipAnimation)return Zu(n),xr(r,!1);try{let w;z.arr(e)?w=(async m=>{for(const v of m)await y(v)})(e):w=Promise.resolve(e(y,r.stop.bind(r))),await Promise.all([w.then(c),h]),g=xr(r.get(),!0,!1)}catch(w){if(w instanceof ab)g=w.result;else if(w instanceof lb)g=w.result;else throw w}finally{i==n.asyncId&&(n.asyncId=s,n.asyncTo=s?a:void 0,n.promise=s?l:void 0)}return z.fun(o)&&J.batchedUpdates(()=>{o(g,r,r.item)}),g})()}function Zu(e,t){nu(e.timeouts,n=>n.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var ab=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},lb=class extends Error{constructor(){super("SkipAnimationSignal")}},W0=e=>e instanceof hv,LD=1,hv=class extends jk{constructor(){super(...arguments),this.id=LD++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Or(this);return e&&e.getValue()}to(...e){return Cr.to(this,e)}interpolate(...e){return mD(),Cr.to(this,e)}toJSON(){return this.get()}observerAdded(e){e==1&&this._attach()}observerRemoved(e){e==0&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Gu(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||vh.sort(this),Gu(this,{type:"priority",parent:this,priority:e})}},uo=Symbol.for("SpringPhase"),Uk=1,Wk=2,Hk=4,Ip=e=>(e[uo]&Uk)>0,ji=e=>(e[uo]&Wk)>0,fl=e=>(e[uo]&Hk)>0,ub=(e,t)=>t?e[uo]|=Wk|Uk:e[uo]&=-3,cb=(e,t)=>t?e[uo]|=Hk:e[uo]&=-5,FD=class extends hv{constructor(e,t){if(super(),this.animation=new ID,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!z.und(e)||!z.und(t)){const n=z.obj(e)?{...e}:{...t,from:e};z.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(ji(this)||this._state.asyncTo)||fl(this)}get goal(){return cn(this.animation.to)}get velocity(){const e=Or(this);return e instanceof mc?e.lastVelocity||0:e.getPayload().map(t=>t.lastVelocity||0)}get hasAnimated(){return Ip(this)}get isAnimating(){return ji(this)}get isPaused(){return fl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:s}=r,o=bh(r.to);!o&&qn(r.to)&&(i=Nn(cn(r.to))),r.values.forEach((u,c)=>{if(u.done)return;const f=u.constructor==qu?1:o?o[c].lastPosition:i[c];let h=r.immediate,p=f;if(!h){if(p=u.lastPosition,s.tension<=0){u.done=!0;return}let y=u.elapsedTime+=e;const g=r.fromValues[c],w=u.v0!=null?u.v0:u.v0=z.arr(s.velocity)?s.velocity[c]:s.velocity;let m;const v=s.precision||(g==f?.005:Math.min(1,Math.abs(f-g)*.001));if(z.und(s.duration))if(s.decay){const x=s.decay===!0?.998:s.decay,_=Math.exp(-(1-x)*y);p=g+w/(1-x)*(1-_),h=Math.abs(u.lastPosition-p)<=v,m=w*_}else{m=u.lastVelocity==null?w:u.lastVelocity;const x=s.restVelocity||v/10,_=s.clamp?0:s.bounce,S=!z.und(_),k=g==f?u.v0>0:g<f;let b,T=!1;const j=1,R=Math.ceil(e/j);for(let E=0;E<R&&(b=Math.abs(m)>x,!(!b&&(h=Math.abs(f-p)<=v,h)));++E){S&&(T=p==f||p>f==k,T&&(m=-m*_,p=f));const N=-s.tension*1e-6*(p-f),$=-s.friction*.001*m,B=(N+$)/s.mass;m=m+B*j,p=p+m*j}}else{let x=1;s.duration>0&&(this._memoizedDuration!==s.duration&&(this._memoizedDuration=s.duration,u.durationProgress>0&&(u.elapsedTime=s.duration*u.durationProgress,y=u.elapsedTime+=e)),x=(s.progress||0)+y/this._memoizedDuration,x=x>1?1:x<0?0:x,u.durationProgress=x),p=g+s.easing(x)*(f-g),m=(p-u.lastPosition)/e,h=x==1}u.lastVelocity=m,Number.isNaN(p)&&(console.warn("Got NaN while animating:",this),h=!0)}o&&!o[c].done&&(h=!1),h?u.done=!0:t=!1,u.setValue(p,s.round)&&(n=!0)});const a=Or(this),l=a.getValue();if(t){const u=cn(r.to);(l!==u||n)&&!s.decay?(a.setValue(u),this._onChange(u)):n&&s.decay&&this._onChange(l),this._stop()}else n&&this._onChange(l)}set(e){return J.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ji(this)){const{to:e,config:t}=this.animation;J.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return z.und(e)?(n=this.queue||[],this.queue=[]):n=[z.obj(e)?e:{...t,to:e}],Promise.all(n.map(r=>this._update(r))).then(r=>fv(this,r))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Zu(this._state,e&&this._lastCallId),J.batchedUpdates(()=>this._stop(t,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=z.obj(n)?n[t]:n,(n==null||B0(n))&&(n=void 0),r=z.obj(r)?r[t]:r,r==null&&(r=void 0);const i={to:n,from:r};return Ip(this)||(e.reverse&&([n,r]=[r,n]),r=cn(r),z.und(r)?Or(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,dv(e,(o,a)=>/^on/.test(a)?Ik(o,n):o)),fb(this,e,"onProps"),pl(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const s=this._state;return $k(++this._lastCallId,{key:n,props:e,defaultProps:r,state:s,actions:{pause:()=>{fl(this)||(cb(this,!0),El(s.pauseQueue),pl(this,"onPause",xr(this,hl(this,this.animation.to)),this))},resume:()=>{fl(this)&&(cb(this,!1),ji(this)&&this._resume(),El(s.resumeQueue),pl(this,"onResume",xr(this,hl(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then(o=>{if(e.loop&&o.finished&&!(t&&o.noop)){const a=Yk(e);if(a)return this._update(a,!0)}return o})}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(ha(this));const r=!z.und(e.to),i=!z.und(e.from);if(r||i)if(t.callId>this._lastToId)this._lastToId=t.callId;else return n(ha(this));const{key:s,defaultProps:o,animation:a}=this,{to:l,from:u}=a;let{to:c=l,from:f=u}=e;i&&!r&&(!t.default||z.und(c))&&(c=f),t.reverse&&([c,f]=[f,c]);const h=!ii(f,u);h&&(a.from=f),f=cn(f);const p=!ii(c,l);p&&this._focus(c);const y=B0(t.to),{config:g}=a,{decay:w,velocity:m}=g;(r||i)&&(g.velocity=0),t.config&&!y&&zD(g,As(t.config,s),t.config!==o.config?As(o.config,s):void 0);let v=Or(this);if(!v||z.und(c))return n(xr(this,!0));const x=z.und(t.reset)?i&&!t.default:!z.und(f)&&iu(t.reset,s),_=x?f:this.get(),S=Qu(c),k=z.num(S)||z.arr(S)||wh(S),b=!y&&(!k||iu(o.immediate||t.immediate,s));if(p){const E=V0(c);if(E!==v.constructor)if(b)v=this._set(S);else throw Error(`Cannot animate between ${v.constructor.name} and ${E.name}, as the "to" prop suggests`)}const T=v.constructor;let j=qn(c),R=!1;if(!j){const E=x||!Ip(this)&&h;(p||E)&&(R=ii(Qu(_),S),j=!R),(!ii(a.immediate,b)&&!b||!ii(g.decay,w)||!ii(g.velocity,m))&&(j=!0)}if(R&&ji(this)&&(a.changed&&!x?j=!0:j||this._stop(l)),!y&&((j||qn(l))&&(a.values=v.getPayload(),a.toValues=qn(c)?null:T==qu?[1]:Nn(S)),a.immediate!=b&&(a.immediate=b,!b&&!x&&this._set(l)),j)){const{onRest:E}=a;ue(VD,$=>fb(this,t,$));const N=xr(this,hl(this,l));El(this._pendingCalls,N),this._pendingCalls.add(n),a.changed&&J.batchedUpdates(()=>{var $;a.changed=!x,E==null||E(N,this),x?As(o.onRest,N):($=a.onStart)==null||$.call(a,N,this)})}x&&this._set(_),y?n(Bk(t.to,t,this._state,this)):j?this._start():ji(this)&&!p?this._pendingCalls.add(n):n(Vk(_))}_focus(e){const t=this.animation;e!==t.to&&(Jw(this)&&this._detach(),t.to=e,Jw(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;qn(t)&&(Ya(t,this),W0(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;qn(e)&&Xu(e,this)}_set(e,t=!0){const n=cn(e);if(!z.und(n)){const r=Or(this);if(!r||!ii(n,r.getValue())){const i=V0(n);!r||r.constructor!=i?cv(this,i.create(n)):r.setValue(n),r&&J.batchedUpdates(()=>{this._onChange(n,t)})}}return Or(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,pl(this,"onStart",xr(this,hl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),As(this.animation.onChange,e,this)),As(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Or(this).reset(cn(e.to)),e.immediate||(e.fromValues=e.values.map(t=>t.lastPosition)),ji(this)||(ub(this,!0),fl(this)||this._resume())}_resume(){Cr.skipAnimation?this.finish():vh.start(this)}_stop(e,t){if(ji(this)){ub(this,!1);const n=this.animation;ue(n.values,i=>{i.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Gu(this,{type:"idle",parent:this});const r=t?ha(this.get()):xr(this.get(),hl(this,e??n.to));El(this._pendingCalls,r),n.changed&&(n.changed=!1,pl(this,"onRest",r,this))}}};function hl(e,t){const n=Qu(t),r=Qu(e.get());return ii(r,n)}function Yk(e,t=e.loop,n=e.to){const r=As(t);if(r){const i=r!==!0&&Fk(r),s=(i||e).reverse,o=!i||i.reset;return Ju({...e,loop:t,default:!1,pause:void 0,to:!s||B0(n)?n:void 0,from:o?e.from:void 0,reset:o,...i})}}function Ju(e){const{to:t,from:n}=e=Fk(e),r=new Set;return z.obj(t)&&db(t,r),z.obj(n)&&db(n,r),e.keys=r.size?Array.from(r):null,e}function $D(e){const t=Ju(e);return z.und(t.default)&&(t.default=dv(t)),t}function db(e,t){Qr(e,(n,r)=>n!=null&&t.add(r))}var VD=["onStart","onRest","onChange","onPause","onResume"];function fb(e,t,n){e.animation[n]=t[n]!==Lk(t,n)?Ik(t[n],e.key):void 0}function pl(e,t,...n){var r,i,s,o;(i=(r=e.animation)[t])==null||i.call(r,...n),(o=(s=e.defaultProps)[t])==null||o.call(s,...n)}var BD=["onStart","onChange","onRest"],UD=1,WD=class{constructor(e,t){this.id=UD++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each((t,n)=>e[n]=t.get()),e}set(e){for(const t in e){const n=e[t];z.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Ju(e)),this}start(e){let{queue:t}=this;return e?t=Nn(e).map(Ju):this.queue=[],this._flush?this._flush(this,t):(Qk(this,t),H0(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;ue(Nn(t),r=>n[r].stop(!!e))}else Zu(this._state,this._lastAsyncId),this.each(n=>n.stop(!!e));return this}pause(e){if(z.und(e))this.start({pause:!0});else{const t=this.springs;ue(Nn(e),n=>t[n].pause())}return this}resume(e){if(z.und(e))this.start({pause:!1});else{const t=this.springs;ue(Nn(e),n=>t[n].resume())}return this}each(e){Qr(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,nu(e,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));const s=!r&&this._started,o=i||s&&n.size?this.get():null;i&&t.size&&nu(t,([a,l])=>{l.value=o,a(l,this,this._item)}),s&&(this._started=!1,nu(n,([a,l])=>{l.value=o,a(l,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;J.onFrame(this._onFrame)}};function H0(e,t){return Promise.all(t.map(n=>Gk(e,n))).then(n=>fv(e,n))}async function Gk(e,t,n){const{keys:r,to:i,from:s,loop:o,onRest:a,onResolve:l}=t,u=z.obj(t.default)&&t.default;o&&(t.loop=!1),i===!1&&(t.to=null),s===!1&&(t.from=null);const c=z.arr(i)||z.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):ue(BD,g=>{const w=t[g];if(z.fun(w)){const m=e._events[g];t[g]=({finished:v,cancelled:x})=>{const _=m.get(w);_?(v||(_.finished=!1),x&&(_.cancelled=!0)):m.set(w,{value:null,finished:v||!1,cancelled:x||!1})},u&&(u[g]=t[g])}});const f=e._state;t.pause===!f.paused?(f.paused=t.pause,El(t.pause?f.pauseQueue:f.resumeQueue)):f.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map(g=>e.springs[g].start(t)),p=t.cancel===!0||Lk(t,"cancel")===!0;(c||p&&f.asyncId)&&h.push($k(++e._lastAsyncId,{props:t,state:f,actions:{pause:F0,resume:F0,start(g,w){p?(Zu(f,e._lastAsyncId),w(ha(e))):(g.onRest=a,w(Bk(c,g,f,e)))}}})),f.paused&&await new Promise(g=>{f.resumeQueue.add(g)});const y=fv(e,await Promise.all(h));if(o&&y.finished&&!(n&&y.noop)){const g=Yk(t,o,i);if(g)return Qk(e,[g]),Gk(e,g,!0)}return l&&J.batchedUpdates(()=>l(y,e,e.item)),y}function hb(e,t){const n={...e.springs};return t&&ue(Nn(t),r=>{z.und(r.keys)&&(r=Ju(r)),z.obj(r.to)||(r={...r,to:void 0}),qk(n,r,i=>Kk(i))}),Xk(e,n),n}function Xk(e,t){Qr(t,(n,r)=>{e.springs[r]||(e.springs[r]=n,Ya(n,e))})}function Kk(e,t){const n=new FD;return n.key=e,t&&Ya(n,t),n}function qk(e,t,n){t.keys&&ue(t.keys,r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)})}function Qk(e,t){ue(t,n=>{qk(e.springs,n,r=>Kk(r,e))})}var Sh=({children:e,...t})=>{const n=C.useContext(If),r=t.pause||!!n.pause,i=t.immediate||!!n.immediate;t=xD(()=>({pause:r,immediate:i}),[r,i]);const{Provider:s}=If;return C.createElement(s,{value:t},e)},If=HD(Sh,{});Sh.Provider=If.Provider;Sh.Consumer=If.Consumer;function HD(e,t){return Object.assign(e,C.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}var YD=()=>{const e=[],t=function(r){vD();const i=[];return ue(e,(s,o)=>{if(z.und(r))i.push(s.start());else{const a=n(r,s,o);a&&i.push(s.start(a))}}),i};t.current=e,t.add=function(r){e.includes(r)||e.push(r)},t.delete=function(r){const i=e.indexOf(r);~i&&e.splice(i,1)},t.pause=function(){return ue(e,r=>r.pause(...arguments)),this},t.resume=function(){return ue(e,r=>r.resume(...arguments)),this},t.set=function(r){ue(e,(i,s)=>{const o=z.fun(r)?r(s,i):r;o&&i.set(o)})},t.start=function(r){const i=[];return ue(e,(s,o)=>{if(z.und(r))i.push(s.start());else{const a=this._getProps(r,s,o);a&&i.push(s.start(a))}}),i},t.stop=function(){return ue(e,r=>r.stop(...arguments)),this},t.update=function(r){return ue(e,(i,s)=>i.update(this._getProps(r,i,s))),this};const n=function(r,i,s){return z.fun(r)?r(s,i):r};return t._getProps=n,t};function GD(e,t,n){const r=z.fun(t)&&t;r&&!n&&(n=[]);const i=C.useMemo(()=>r||arguments.length==3?YD():void 0,[]),s=C.useRef(0),o=Dk(),a=C.useMemo(()=>({ctrls:[],queue:[],flush(m,v){const x=hb(m,v);return s.current>0&&!a.queue.length&&!Object.keys(x).some(S=>!m.springs[S])?H0(m,v):new Promise(S=>{Xk(m,x),a.queue.push(()=>{S(H0(m,v))}),o()})}}),[]),l=C.useRef([...a.ctrls]),u=[],c=tb(e)||0;C.useMemo(()=>{ue(l.current.slice(e,c),m=>{DD(m,i),m.stop(!0)}),l.current.length=e,f(c,e)},[e]),C.useMemo(()=>{f(0,Math.min(c,e))},n);function f(m,v){for(let x=m;x<v;x++){const _=l.current[x]||(l.current[x]=new WD(null,a.flush)),S=r?r(x,_):t[x];S&&(u[x]=$D(S))}}const h=l.current.map((m,v)=>hb(m,u[v])),p=C.useContext(Sh),y=tb(p),g=p!==y&&AD(p);uv(()=>{s.current++,a.ctrls=l.current;const{queue:m}=a;m.length&&(a.queue=[],ue(m,v=>v())),ue(l.current,(v,x)=>{i==null||i.add(v),g&&v.start({default:p});const _=u[x];_&&(ND(v,_.ref),v.ref?v.queue.push(_):v.start(_))})}),Nk(()=>()=>{ue(a.ctrls,m=>m.stop(!0))});const w=h.map(m=>({...m}));return i?[w,i]:w}function Lp(e,t){const n=z.fun(e),[[r],i]=GD(1,n?e:[e],n?[]:t);return n||arguments.length==2?[r,i]:r}var XD=class extends hv{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Hu(...t);const n=this._get(),r=V0(n);cv(this,r.create(n))}advance(e){const t=this._get(),n=this.get();ii(t,n)||(Or(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&pb(this._active)&&Fp(this)}_get(){const e=z.arr(this.source)?this.source.map(cn):Nn(cn(this.source));return this.calc(...e)}_start(){this.idle&&!pb(this._active)&&(this.idle=!1,ue(bh(this),e=>{e.done=!1}),Cr.skipAnimation?(J.batchedUpdates(()=>this.advance()),Fp(this)):vh.start(this))}_attach(){let e=1;ue(Nn(this.source),t=>{qn(t)&&Ya(t,this),W0(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}_detach(){ue(Nn(this.source),e=>{qn(e)&&Xu(e,this)}),this._active.clear(),Fp(this)}eventObserved(e){e.type=="change"?e.idle?this.advance():(this._active.add(e.parent),this._start()):e.type=="idle"?this._active.delete(e.parent):e.type=="priority"&&(this.priority=Nn(this.source).reduce((t,n)=>Math.max(t,(W0(n)?n.priority:0)+1),0))}};function KD(e){return e.idle!==!1}function pb(e){return!e.size||Array.from(e).every(KD)}function Fp(e){e.idle||(e.idle=!0,ue(bh(e),t=>{t.done=!0}),Gu(e,{type:"idle",parent:e}))}Cr.assign({createStringInterpolator:Mk,to:(e,t)=>new XD(e,t)});var Zk=/^--/;function qD(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!Zk.test(e)&&!(su.hasOwnProperty(e)&&su[e])?t+"px":(""+t).trim()}var mb={};function QD(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter",{className:r,style:i,children:s,scrollTop:o,scrollLeft:a,viewBox:l,...u}=t,c=Object.values(u),f=Object.keys(u).map(h=>n||e.hasAttribute(h)?h:mb[h]||(mb[h]=h.replace(/([A-Z])/g,p=>"-"+p.toLowerCase())));s!==void 0&&(e.textContent=s);for(const h in i)if(i.hasOwnProperty(h)){const p=qD(h,i[h]);Zk.test(h)?e.style.setProperty(h,p):e.style[h]=p}f.forEach((h,p)=>{e.setAttribute(h,c[p])}),r!==void 0&&(e.className=r),o!==void 0&&(e.scrollTop=o),a!==void 0&&(e.scrollLeft=a),l!==void 0&&e.setAttribute("viewBox",l)}var su={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZD=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),JD=["Webkit","Ms","Moz","O"];su=Object.keys(su).reduce((e,t)=>(JD.forEach(n=>e[ZD(n,t)]=e[t]),e),su);var eN=/^(matrix|translate|scale|rotate|skew)/,tN=/^(translate)/,nN=/^(rotate|skew)/,$p=(e,t)=>z.num(e)&&e!==0?e+t:e,Ld=(e,t)=>z.arr(e)?e.every(n=>Ld(n,t)):z.num(e)?e===t:parseFloat(e)===t,rN=class extends _h{constructor({x:e,y:t,z:n,...r}){const i=[],s=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),s.push(o=>[`translate3d(${o.map(a=>$p(a,"px")).join(",")})`,Ld(o,0)])),Qr(r,(o,a)=>{if(a==="transform")i.push([o||""]),s.push(l=>[l,l===""]);else if(eN.test(a)){if(delete r[a],z.und(o))return;const l=tN.test(a)?"px":nN.test(a)?"deg":"";i.push(Nn(o)),s.push(a==="rotate3d"?([u,c,f,h])=>[`rotate3d(${u},${c},${f},${$p(h,l)})`,Ld(h,0)]:u=>[`${a}(${u.map(c=>$p(c,l)).join(",")})`,Ld(u,a.startsWith("scale")?1:0)])}}),i.length&&(r.transform=new iN(i,s)),super(r)}},iN=class extends jk{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return ue(this.inputs,(n,r)=>{const i=cn(n[0]),[s,o]=this.transforms[r](z.arr(i)?i:n.map(cn));e+=" "+s,t=t&&o}),t?"none":e}observerAdded(e){e==1&&ue(this.inputs,t=>ue(t,n=>qn(n)&&Ya(n,this)))}observerRemoved(e){e==0&&ue(this.inputs,t=>ue(t,n=>qn(n)&&Xu(n,this)))}eventObserved(e){e.type=="change"&&(this._value=null),Gu(this,e)}},sN=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];Cr.assign({batchedUpdates:R5.unstable_batchedUpdates,createStringInterpolator:Mk,colors:K9});var oN=PD(sN,{applyAnimatedValues:QD,createAnimatedStyle:e=>new rN(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Vp=oN.animated;const gb="/videos/healthy-coral.mp4",aN="/videos/stressed-coral.mp4",lN="/videos/damaged-coral.mp4",uN="/videos/dead-coral.mp4",cN=()=>{const[e,t]=C.useState({temperature:0,pollution:0,overfishing:0,tourism:0}),n=C.useRef(null),r=C.useRef(null),[i,s]=C.useState(gb),[o,a]=C.useState(!1),[l,u]=C.useState(100),[c,f]=C.useState(!1),[h,p]=C.useState(null),[y,g]=C.useState([]);C.useEffect(()=>{r.current&&(r.current.style.background=k(),r.current.style.minHeight="300px")},[]),C.useEffect(()=>{const b=setInterval(()=>{y.length<15&&g(T=>[...T,{id:Date.now(),left:Math.random()*100,size:Math.random()*20+10,duration:Math.random()*5+5}])},800);return()=>clearInterval(b)},[y]),C.useEffect(()=>{if(y.length>0){const b=setTimeout(()=>{g(T=>T.slice(1))},8e3);return()=>clearTimeout(b)}},[y]);const w=Lp({opacity:1,transform:`scale(${.8+l/100*.2})`,config:Id.slow}),m=Lp({opacity:h?1:0,transform:h?"translateY(0px)":"translateY(20px)",config:Id.gentle}),v=Lp({opacity:c?1:0,from:{opacity:0},config:Id.molasses});C.useEffect(()=>{const b=100-(e.temperature*.4+e.pollution*.3+e.overfishing*.2+e.tourism*.1);u(Math.max(0,Math.min(100,b)))},[e]),C.useEffect(()=>{l>75?s(gb):l>50?s(aN):l>25?s(lN):s(uN),r.current&&(r.current.style.background=k())},[l]),C.useEffect(()=>{const b=n.current;if(!b)return;const T=()=>{b.play().catch(E=>{console.log("Video play prevented:",E),a(!1)}),a(!0),r.current&&(b.style.display="block")},j=()=>{console.error("Video failed to load:",i),a(!1),n.current&&(n.current.style.display="none")};b.addEventListener("canplay",T),b.addEventListener("error",j);const R=setTimeout(()=>{!o&&r.current&&(a(!1),n.current&&(n.current.style.display="none"))},2e3);return b.load(),()=>{b.removeEventListener("canplay",T),b.removeEventListener("error",j),b.pause(),clearTimeout(R)}},[i,o]);const x=(b,T)=>{t(j=>({...j,[b]:parseInt(T)}))},_=[{id:1,name:"Clownfish",healthImpact:"High",image:"🐠"},{id:2,name:"Brain Coral",healthImpact:"Critical",image:"🪸"},{id:3,name:"Sea Turtle",healthImpact:"Medium",image:"🐢"},{id:4,name:"Parrotfish",healthImpact:"High",image:"🐟"}],S=()=>l>75?"Healthy":l>50?"Stressed":l>25?"Damaged":"Dead",k=()=>l>=75?"linear-gradient(180deg, #0088A3 0%, #004080 100%)":l>=50?"linear-gradient(180deg, #54889C 0%, #2D5F80 100%)":l>=25?"linear-gradient(180deg, #7A7A59 0%, #4D5269 100%)":"linear-gradient(180deg, #5E5E5E 0%, #3A3A40 100%)";return d.jsxs("div",{className:"app-container",children:[d.jsx(Wa,{currentPage:"/coral-reef",pages:Ha}),d.jsxs("div",{className:"underwater-container",children:[y.map(b=>d.jsx("div",{className:"bubble",style:{left:`${b.left}%`,width:`${b.size}px`,height:`${b.size}px`,animationDuration:`${b.duration}s`}},b.id)),d.jsxs("div",{className:"simulator-container",children:[d.jsx("h1",{className:"title",children:"Coral Reef Threat Simulator"}),d.jsx("p",{className:"subtitle",children:"Adjust the sliders to see how different threats affect coral reef ecosystems"}),d.jsxs("div",{className:"simulator-content",children:[d.jsxs("div",{className:"controls",children:[Object.entries(e).map(([b,T])=>d.jsxs("div",{className:"slider-container",children:[d.jsxs("label",{htmlFor:b,children:[b.charAt(0).toUpperCase()+b.slice(1),": ",T,"%"]}),d.jsx("input",{type:"range",id:b,min:"0",max:"100",value:T,onChange:j=>x(b,j.target.value)}),d.jsx("div",{className:"slider-track",children:d.jsx("div",{className:"slider-fill",style:{width:`${T}%`}})})]},b)),d.jsxs("button",{className:"impact-button",onClick:()=>f(!c),children:[c?"Hide Impacts":"Show Detailed Impacts",d.jsx("span",{className:"button-ripple"})]})]}),d.jsxs("div",{className:"reef-visualization",children:[d.jsxs(Vp.div,{ref:r,className:"reef-display",style:{...w},children:[d.jsxs("video",{ref:n,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"reef-video",style:{display:"none"},children:[d.jsx("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."]}),d.jsxs("div",{className:"video-overlay",children:[d.jsx("div",{className:"marine-life",children:_.map(b=>d.jsx("div",{className:"species",onClick:()=>p(b),children:b.image},b.id))}),d.jsx("div",{className:"reef-bubbles",children:Array.from({length:Math.floor(l/10)}).map((b,T)=>d.jsx("div",{className:"bubble",style:{left:`${10+T*8}%`,animationDuration:`${3+Math.random()*4}s`,animationDelay:`${Math.random()*2}s`}},T))}),l<50&&d.jsx("div",{className:"pollution-particles",children:Array.from({length:5}).map((b,T)=>d.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDuration:`${5+Math.random()*10}s`}},T))})]})]}),d.jsxs("div",{className:"reef-status",children:[d.jsxs("h3",{children:["Reef Status: ",S()]}),d.jsx("div",{className:"health-bar",children:d.jsx("div",{className:"health-fill",style:{width:`${l}%`,backgroundColor:l>75?"var(--healthy-green)":l>50?"var(--stressed-yellow)":l>25?"var(--damaged-orange)":"var(--dead-red)"}})}),d.jsxs("p",{children:[l.toFixed(0),"% Health"]})]})]})]}),h&&d.jsxs(Vp.div,{className:"species-popup",style:m,children:[d.jsx("button",{className:"close-popup",onClick:()=>p(null),children:"×"}),d.jsx("h3",{children:h.name}),d.jsx("div",{className:"species-image",children:h.image}),d.jsxs("p",{children:["Impact from threats: ",h.healthImpact]}),d.jsxs("p",{children:["This species is ",l>50?"likely surviving":"struggling to survive","under current conditions."]})]}),d.jsx(Vp.div,{className:"impact-details",style:v,children:c&&d.jsxs(d.Fragment,{children:[d.jsx("h3",{children:"Detailed Impacts"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsxs("strong",{children:["Temperature (+",e.temperature,"%):"]}),e.temperature>50?" Causes coral bleaching":" Minimal impact"]}),d.jsxs("li",{children:[d.jsxs("strong",{children:["Pollution (+",e.pollution,"%):"]}),e.pollution>30?" Smothers coral and reduces sunlight":" Manageable levels"]}),d.jsxs("li",{children:[d.jsxs("strong",{children:["Overfishing (+",e.overfishing,"%):"]}),e.overfishing>40?" Disrupts ecosystem balance":" Sustainable levels"]}),d.jsxs("li",{children:[d.jsxs("strong",{children:["Tourism (+",e.tourism,"%):"]}),e.tourism>60?" Physical damage from anchors and divers":" Low impact"]})]}),d.jsxs("p",{children:["Combined impact: ",100-l,"% damage to reef ecosystem"]})]})})]})]}),d.jsx(bi,{})]})};ht.registerPlugin(q);const dN=M.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #006994, #003349);
  color: white;
  position: relative;
  overflow-x: hidden;
`,fN=M.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 120px 20px 50px;
  position: relative;
  z-index: 1;
`,hN=M.header`
  text-align: center;
  margin-bottom: 180px;
  width: 100%;
  max-width: 100%;
  padding: 0 20px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #4fc3f7, #00b4db);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 1.2rem;
    max-width: 100%;
    margin: 0 auto;
    line-height: 1.6;
    color: #e0f7fa;
  }
`,jo=M.section`
  margin-bottom: 80px;
  padding: 30px;
  background: rgba(0, 30, 60, 0.5);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(78, 198, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    color: #4fc3f7;
    border-bottom: 2px solid rgba(78, 198, 255, 0.3);
    padding-bottom: 10px;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
    font-size: 1.1rem;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,pN=M.div`
  position: relative;
  padding: 20px 0;
  margin: 40px 0 20px;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #4fc3f7, #0288d1);
    border-radius: 2px;
  }
`,mN=M.div`
  position: relative;
  margin-bottom: 60px;
  width: 45%;
  padding: 20px;
  background: rgba(0, 20, 40, 0.7);
  border-radius: 10px;
  border: 1px solid rgba(78, 198, 255, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  cursor: pointer;
  display: block;
  align-self: ${e=>e.position==="left"?"flex-start":"flex-end"};

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: rgba(78, 198, 255, 0.5);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 30px;
    width: 20px;
    height: 20px;
    background: #4fc3f7;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(79, 195, 247, 0.8);
    z-index: 1;
    left: ${e=>e.position==="left"?"auto":"-40px"};
    right: ${e=>e.position==="left"?"-40px":"auto"};
  }

  .year {
    font-size: 1.4rem;
    font-weight: bold;
    color: #4fc3f7;
    margin-bottom: 10px;
    display: block;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #b3e5fc;
    display: block;
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 0;
    display: block;
  }
`,gN=M.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
`,vN=M.div`
  width: 100%;
  height: 400px;
  background-image: url('/asset/world-map.png');
  background-size: cover;
  background-position: center;
  opacity: 0.7;
`,yN=M.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background: rgba(0, 20, 40, 0.7);
`,xN=M.div`
  padding: 15px;
  background: rgba(0, 20, 40, 0.8);
  border-radius: 10px;
  border-left: 3px solid #4fc3f7;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    background: rgba(0, 30, 60, 0.8);
  }
  
  h3 {
    color: #4fc3f7;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
  
  p {
    margin-bottom: 5px;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .organization {
    font-style: italic;
    color: #b3e5fc;
    font-size: 0.9rem;
  }
`;M.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: #4fc3f7;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 0 0 5px rgba(79, 195, 247, 0.3);
  animation: pulse 2s infinite;
  z-index: 2;

  &:hover {
    background: #00b4db;
    box-shadow: 0 0 0 8px rgba(79, 195, 247, 0.5);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(79, 195, 247, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(79, 195, 247, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(79, 195, 247, 0);
    }
  }
`;M.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 600px;
  padding: 20px;
  background: rgba(0, 20, 40, 0.9);
  border-radius: 10px;
  border: 1px solid rgba(78, 198, 255, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;

  &.visible {
    opacity: 1;
  }

  h3 {
    color: #4fc3f7;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 10px;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    background: none;
    border: none;
    color: #4fc3f7;
    font-size: 20px;
    cursor: pointer;
  }
`;const wN=M.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  overflow: hidden;
  padding: 30px 0;
  gap: 20px;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
`,bN=M.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  width: 100%;
  margin: 0 0 40px;
  position: relative;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,Bp=M.div`
  position: relative;
  padding: 15px 25px;
  border: none;
  background: ${e=>e.active?"linear-gradient(45deg, #00b4db, #0288d1)":"rgba(0, 40, 80, 0.4)"};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${e=>e.active?"0 10px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 180, 219, 0.5)":"0 5px 15px rgba(0, 0, 0, 0.2)"};
  font-weight: ${e=>e.active?"bold":"normal"};
  min-width: 180px;
  text-align: center;
  border-radius: 50px;
  transform: ${e=>e.active?"translateY(-5px)":"translateY(0)"};
  z-index: ${e=>e.active?"2":"1"};
  overflow: hidden;
  
  &:hover {
    background: ${e=>e.active?"linear-gradient(45deg, #00b4db, #0288d1)":"rgba(0, 60, 100, 0.6)"};
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  /* Icon and animations */
  .icon {
    margin-right: 8px;
    display: inline-block;
    transition: transform 0.3s ease;
  }
  
  &:hover .icon {
    transform: ${e=>e.active?"scale(1.2) rotate(10deg)":"scale(1.1)"};
  }
  
  /* Pulse animation for active button */
  ${e=>e.active&&`
    animation: pulse 2s infinite;
    
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(0, 180, 219, 0.4);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(0, 180, 219, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(0, 180, 219, 0);
      }
    }
  `}
`,Up=M.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    max-width: 100%;
    max-height: 400px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  h3 {
    color: #4fc3f7;
    margin-bottom: 15px;
    font-size: 1.4rem;
    width: 100%;
    text-align: center;
  }
  
  p {
    margin-top: 15px;
    font-size: 1rem;
    color: #e0f7fa;
    max-width: 800px;
    margin: 15px auto;
    width: 100%;
  }
`,_N=M.div`
  position: relative;
  width: 100%;
  height: 500px;
  background: linear-gradient(to bottom, rgba(0, 20, 40, 0.8), rgba(0, 60, 100, 0.6), rgba(0, 80, 120, 0.7));
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(78, 198, 255, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(0, 150, 200, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
    z-index: 1;
    pointer-events: none;
  }
`,SN=M.div`
  position: absolute;
  width: 200%;
  height: 200px;
  background: ${e=>e.color||"rgba(78, 198, 255, 0.2)"};
  border-radius: 50%;
  bottom: ${e=>e.bottom||"0"};
  left: -50%;
  opacity: ${e=>e.opacity||.4};
  animation: wave ${e=>e.duration||"15s"} ease-in-out infinite;
  animation-delay: ${e=>e.delay||"0s"};
  
  @keyframes wave {
    0% {
      transform: translateX(-3%) scaleY(1);
    }
    25% {
      transform: translateX(-1%) scaleY(0.9);
    }
    50% {
      transform: translateX(0%) scaleY(1.1);
    }
    75% {
      transform: translateX(1%) scaleY(0.9);
    }
    100% {
      transform: translateX(-3%) scaleY(1);
    }
  }
`,kN=M.div`
  position: absolute;
  width: 40px;
  height: ${e=>e.height||"60px"};
  bottom: ${e=>e.bottom||"0"};
  left: ${e=>e.left||"50%"};
  background: ${e=>e.color||"#4fc3f7"};
  border-radius: 8px 8px 0 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4), 0 0 15px ${e=>e.color||"#4fc3f7"}60;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 5;
  transform-origin: bottom center;
  
  &:hover {
    transform: scaleY(1.1) scaleX(1.05);
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.5), 0 0 25px ${e=>e.color||"#4fc3f7"}80;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 15px solid ${e=>e.color||"#4fc3f7"};
  }
`,CN=M.div`
  position: absolute;
  bottom: ${e=>e.bottom||"0"};
  left: ${e=>e.left||"50%"};
  transform: translateX(-50%);
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
  white-space: nowrap;
  background: rgba(0, 40, 80, 0.4);
  padding: 3px 10px;
  border-radius: 12px;
  z-index: 4;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(-50%) scale(1.05);
  }
`,TN=M.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`,PN=M.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(78, 198, 255, 0.2);
  animation: float linear infinite;
  
  @keyframes float {
    0% {
      transform: translateY(100vh) scale(0.8);
      opacity: 0.5;
    }
    100% {
      transform: translateY(-100px) scale(0.3);
      opacity: 0;
    }
  }
`,jN=M.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 30px 0;
  width: 100%;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
`,rd=M.div`
  background: rgba(0, 30, 60, 0.8);
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #4fc3f7;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  h3 {
    color: #4fc3f7;
    margin-bottom: 15px;
    font-size: 1.4rem;
  }
  
  p {
    color: #e0f7fa;
    line-height: 1.6;
  }
`;M.div`
  width: 100%;
  height: 300px;
  margin: 30px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.5);
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 1px;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
  }
`;M.div`
  position: absolute;
  height: 2px;
  background: linear-gradient(to right, rgba(79, 195, 247, 0.7), rgba(79, 195, 247, 0.7));
  z-index: 1;
  transform-origin: left center;
  transform: rotate(${e=>e.angle||"0deg"});
  bottom: ${e=>e.bottom||"10%"};
  left: ${e=>e.left||"5%"};
  width: ${e=>e.width||"8%"};
`;M.div`
  position: absolute;
  bottom: ${e=>e.bottom||"10%"};
  left: ${e=>e.left||"0%"};
  width: 8px;
  height: 8px;
  background: #4fc3f7;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(79, 195, 247, 0.8);
  transition: all 0.3s ease;
  z-index: 2;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.5);
    background: #00b0ff;
    box-shadow: 0 0 15px rgba(79, 195, 247, 1);
  }
  
  &::after {
    content: '${e=>e.year||""}';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 9px;
    color: #e0f7fa;
    white-space: nowrap;
  }
`;M.div`
  position: absolute;
  background: rgba(0, 40, 80, 0.9);
  border: 1px solid #4fc3f7;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  color: white;
  pointer-events: none;
  transition: opacity 0.3s ease;
  opacity: ${e=>e.visible?"1":"0"};
  top: ${e=>e.top||"0"};
  left: ${e=>e.left||"0"};
  transform: translate(-50%, -100%);
  z-index: 10;
  width: max-content;
  max-width: 180px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #4fc3f7;
  }
`;M.div`
  width: 100%;
  height: 300px;
  margin: 30px 0;
  position: relative;
  background: rgba(0, 20, 40, 0.3);
  border-radius: 8px;
  overflow: hidden;
  
  &::before {
    content: 'Conservation Benefit';
    position: absolute;
    left: -40px;
    top: 50%;
    transform: rotate(-90deg);
    font-size: 12px;
    color: #e0f7fa;
  }
  
  &::after {
    content: 'Economic Activity';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #e0f7fa;
  }
`;M.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  .x-low {
    position: absolute;
    bottom: 5px;
    left: 10px;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .x-high {
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .y-low {
    position: absolute;
    bottom: 10px;
    left: 5px;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .y-high {
    position: absolute;
    top: 10px;
    left: 5px;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.7);
  }
`;M.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  .x-grid {
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }
  
  .y-grid {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(255, 255, 255, 0.1);
  }
`;M.div`
  position: absolute;
  height: 2px;
  background: linear-gradient(to right, 
    rgba(${e=>e.startColor||"255, 87, 34"}, 0.5),
    rgba(${e=>e.endColor||"255, 152, 0"}, 0.5)
  );
  z-index: 1;
  transform-origin: left center;
  transform: ${e=>`rotate(${e.angle}deg)`};
  top: ${e=>e.top||"75%"};
  left: ${e=>e.left||"15%"};
  width: ${e=>e.width||"15%"};
`;M.div`
  position: absolute;
  width: ${e=>e.size||"20px"};
  height: ${e=>e.size||"20px"};
  border-radius: 50%;
  background: rgba(${e=>e.color||"79, 195, 247"}, 0.7);
  top: ${e=>e.top||"10%"};
  left: ${e=>e.left||"10%"};
  box-shadow: 0 0 10px rgba(${e=>e.color||"79, 195, 247"}, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  
  &:hover {
    box-shadow: 0 0 20px rgba(${e=>e.color||"79, 195, 247"}, 0.9);
    transform: scale(1.1);
  }
  
  &::after {
    content: '${e=>e.label||""}';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 11px;
    color: #e0f7fa;
    white-space: nowrap;
  }
`;M.div`
  position: absolute;
  width: 30%;
  height: 25%;
  top: 25%;
  left: 40%;
  border: 2px dashed rgba(0, 230, 118, 0.7);
  border-radius: 50%;
  background: rgba(0, 230, 118, 0.1);
  
  &::after {
    content: 'Optimal Zone';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    color: rgba(0, 230, 118, 0.9);
    white-space: nowrap;
  }
`;M.div`
  width: 300px;
  height: 300px;
  margin: 30px auto;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background: conic-gradient(
    #4fc3f7 0% 30%,
    #26c6da 30% 45%,
    #00bcd4 45% 60%,
    #00acc1 60% 75%,
    #0097a7 75% 85%,
    #00838f 85% 92%,
    #006064 92% 100%
  );
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  cursor: pointer;
  transform: ${e=>e.rotating?"rotate(10deg)":"rotate(0deg)"};
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }
`;M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  clip-path: polygon(50% 50%, 50% 0%, ${e=>e.endX||"100%"} ${e=>e.endY||"0%"}, ${e=>e.endX2||"100%"} ${e=>e.endY2||"50%"});
  background: ${e=>e.color||"#4fc3f7"};
  transition: transform 0.3s ease;
  transform-origin: center;
  
  &:hover {
    transform: scale(1.05);
  }
`;M.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px auto;
  max-width: 300px;
`;M.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 40, 80, 0.3);
    transform: translateX(5px);
  }
  
  span {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    background: ${e=>e.color||"#4fc3f7"};
    transition: transform 0.3s ease;
  }
  
  &:hover span {
    transform: scale(1.2);
  }
`;const EN=M.div`
  width: 100%;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  max-width: 100%;
`,RN=M.div`
  position: relative;
  width: 400px;
  height: 400px;
`,MN=M.div`
  position: absolute;
  width: ${e=>e.size||"20px"};
  height: ${e=>e.size||"20px"};
  border-radius: 50%;
  left: ${e=>e.left||"50%"};
  top: ${e=>e.top||"50%"};
  transform: translate(-50%, -50%);
  background: ${e=>e.color||"rgba(79, 195, 247, 0.8)"};
  box-shadow: 0 0 15px ${e=>e.glow||"rgba(79, 195, 247, 0.4)"};
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
    box-shadow: 0 0 20px ${e=>e.glow||"rgba(79, 195, 247, 0.7)"};
  }
`,AN=M.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, #006064 0%, #00838f 60%, #0097a7 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  z-index: 1;
`,DN=M.div`
  position: absolute;
  left: ${e=>e.left||"50%"};
  top: ${e=>e.top||"50%"};
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  white-space: nowrap;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  pointer-events: none;
  z-index: 3;
`,id=M.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${e=>e.size||"300px"};
  height: ${e=>e.size||"300px"};
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  pointer-events: none;
`,NN=M.div`
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px 0;
`;M.div`
  position: relative;
  width: 100%;
  height: 500px;
  perspective: 1200px;
  display: flex;
  justify-content: center;
`;M.div`
  width: 500px;
  height: 500px;
  position: relative;
  transform-style: preserve-3d;
  transform: ${e=>`rotateX(${e.x}deg) rotateY(${e.y}deg) rotateZ(${e.z}deg)`};
  transition: transform 0.1s ease;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;const ON=M.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: rgba(0, 30, 60, 0.2);
  transform: rotateX(90deg) translateZ(-250px);
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3) inset;
  border: 1px solid rgba(78, 198, 255, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 180, 219, 0.1), rgba(0, 180, 219, 0));
    pointer-events: none;
  }
`,Wp=M.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  transform-origin: 0 0;
  
  &.x-axis {
    height: 2px;
    width: 500px;
    transform: translateZ(-1px);
    
    &::after {
      content: 'Economic Value →';
      position: absolute;
      right: -120px;
      top: -10px;
      color: #e0f7fa;
      white-space: nowrap;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
  }
  
  &.y-axis {
    width: 2px;
    height: 500px;
    transform: translateZ(-1px);
    
    &::after {
      content: '↑ Biodiversity';
      position: absolute;
      left: -40px;
      top: -30px;
      color: #e0f7fa;
      white-space: nowrap;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
  }
  
  &.z-axis {
    width: 2px;
    height: 500px;
    transform: rotateX(90deg) rotateY(90deg);
    
    &::after {
      content: 'Protection Level →';
      position: absolute;
      right: 10px;
      top: -30px;
      color: #e0f7fa;
      white-space: nowrap;
      transform: rotate(90deg);
      transform-origin: right bottom;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
  }
`,zN=M.div`
  position: absolute;
  width: ${e=>e.size||"30px"};
  height: ${e=>e.size||"30px"};
  border-radius: 50%;
  background: ${e=>e.color||"rgba(76, 175, 80, 0.7)"};
  transform: translate(-50%, -50%) translateZ(${e=>e.height||"0px"});
  left: ${e=>e.x||"0px"};
  top: ${e=>e.y||"0px"};
  box-shadow: 0 0 15px ${e=>e.glow||"rgba(76, 175, 80, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: ${e=>e.id||1};
  
  &:hover {
    transform: translate(-50%, -50%) translateZ(${e=>e.height||"0px"}) scale(1.2);
    box-shadow: 0 0 25px ${e=>e.glow||"rgba(76, 175, 80, 0.7)"};
  }
`;M.div`
  position: absolute;
  font-size: 12px;
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  padding: 3px 8px;
  border-radius: 4px;
  transform: translate(-50%, -100%);
  left: ${e=>e.left||"0px"};
  top: ${e=>e.top||"0px"};
`;const IN=M.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  max-width: 650px;
  margin: 30px auto 10px;
  padding: 15px;
  background: rgba(0, 20, 40, 0.5);
  border-radius: 10px;
`,LN=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 5px;
  background: rgba(0, 40, 60, 0.5);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  
  &:hover {
    background: rgba(0, 60, 80, 0.7);
    transform: translateY(-2px);
    border-color: ${e=>e.color||"rgba(76, 175, 80, 0.7)"};
  }
  
  .color-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${e=>e.color||"rgba(76, 175, 80, 0.7)"};
  }
  
  .text {
    font-size: 12px;
    color: #e0f7fa;
  }
`,vb=[{id:1,name:"Marine Reserves",x:"400px",y:"100px",height:"250px",size:"35px",color:"rgba(3, 169, 244, 0.8)",glow:"rgba(3, 169, 244, 0.5)",economic:"High (Tourism)",biodiversity:"Very High",protection:"Very High",desc:"No-take zones that completely protect all marine resources. These areas serve as biodiversity hotspots and tourism destinations, providing high economic value through sustainable activities."},{id:2,name:"Seasonal Closures",x:"320px",y:"260px",height:"150px",size:"32px",color:"rgba(0, 150, 136, 0.8)",glow:"rgba(0, 150, 136, 0.5)",economic:"Moderate-High",biodiversity:"Moderate",protection:"Moderate",desc:"Areas closed to fishing during critical spawning periods, allowing fish stocks to recover while maintaining economic activity during open seasons."},{id:3,name:"Multiple-Use MPAs",x:"250px",y:"200px",height:"180px",size:"40px",color:"rgba(76, 175, 80, 0.8)",glow:"rgba(76, 175, 80, 0.5)",economic:"Moderate",biodiversity:"High",protection:"Moderate-High",desc:"Marine protected areas with zoning that allows for sustainable fishing, tourism, and other activities while protecting key habitats. This balanced approach provides optimal outcomes for both conservation and communities."},{id:4,name:"Fishing Quotas",x:"370px",y:"350px",height:"120px",size:"30px",color:"rgba(255, 193, 7, 0.8)",glow:"rgba(255, 193, 7, 0.5)",economic:"High (Short-term)",biodiversity:"Low-Moderate",protection:"Low-Moderate",desc:"Limits on fish catches that help maintain sustainable populations while allowing continued economic activity, though with lower biodiversity benefits than spatial protections."},{id:5,name:"Unprotected Areas",x:"100px",y:"400px",height:"50px",size:"28px",color:"rgba(255, 87, 34, 0.8)",glow:"rgba(255, 87, 34, 0.5)",economic:"Low (Long-term)",biodiversity:"Very Low",protection:"None",desc:"Areas without conservation measures show initial high economic output but suffer long-term degradation, resulting in collapsed fisheries and lost biodiversity."},{id:6,name:"Deep-sea Reserves",x:"170px",y:"150px",height:"300px",size:"32px",color:"rgba(156, 39, 176, 0.8)",glow:"rgba(156, 39, 176, 0.5)",economic:"Low (Current)",biodiversity:"High",protection:"Very High",desc:"Protections for deep-sea ecosystems that have high biodiversity value but currently lower economic importance. These areas serve as crucial carbon sinks and potential sources of future medical discoveries."}],Eo=M.div`
  background: rgba(0, 40, 80, 0.5);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(78, 198, 255, 0.2);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    border-color: rgba(78, 198, 255, 0.5);
  }
  
  .pub-image {
    height: 180px;
    background-size: cover;
    background-position: center;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background: linear-gradient(to top, rgba(0, 40, 80, 0.8), transparent);
    }
  }
  
  .pub-content {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .pub-title {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #4fc3f7;
    line-height: 1.4;
  }
  
  .pub-authors {
    font-size: 0.9rem;
    color: #b3e5fc;
    margin-bottom: 12px;
    font-style: italic;
  }
  
  .pub-abstract {
    font-size: 0.95rem;
    color: #e0f7fa;
    line-height: 1.6;
    margin-bottom: 15px;
    flex-grow: 1;
  }
  
  .pub-journal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    
    .journal-name {
      font-size: 0.85rem;
      color: #b3e5fc;
      background: rgba(0, 80, 120, 0.4);
      padding: 6px 12px;
      border-radius: 20px;
    }
    
    .journal-date {
      font-size: 0.85rem;
      color: #e0f7fa;
    }
  }
`,FN=M.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin: 30px 0;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,$N=M.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin: 30px 0;
  width: 100%;
`,sd=M.div`
  background: rgba(0, 30, 60, 0.7);
  border-radius: 12px;
  padding: 25px;
  flex: 1;
  min-width: 200px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  border-top: 4px solid ${e=>e.color||"#4fc3f7"};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  .metric-value {
    font-size: 2.8rem;
    font-weight: bold;
    color: ${e=>e.color||"#4fc3f7"};
    margin-bottom: 10px;
    line-height: 1;
  }
  
  .metric-label {
    font-size: 1rem;
    color: #e0f7fa;
    line-height: 1.4;
  }
  
  .metric-trend {
    margin-top: 10px;
    font-size: 0.85rem;
    color: ${e=>e.trendColor||"#4caf50"};
    display: flex;
    align-items: center;
    gap: 5px;
  }
`,VN=M.div`
  width: 100%;
  height: 300px;
  margin: 30px 0;
  position: relative;
  background: rgba(0, 20, 40, 0.3);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 15px;
`,Ro=M.div`
  width: 60px;
  background: linear-gradient(to top, ${e=>e.color||"#4fc3f7"}, ${e=>e.colorEnd||"#0288d1"});
  height: ${e=>e.height||"50%"};
  border-radius: 8px 8px 0 0;
  position: relative;
  transition: height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: scaleY(1.05);
    transform-origin: bottom;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
  
  &::before {
    content: '${e=>e.amount||""}';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: ${e=>e.color||"#4fc3f7"};
    font-weight: bold;
    font-size: 0.9rem;
    white-space: nowrap;
  }
  
  &::after {
    content: '${e=>e.label||""}';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #e0f7fa;
    font-size: 0.85rem;
    white-space: nowrap;
  }
`,BN=M.div`
  display: flex;
  gap: 25px;
  margin: 30px 0;
  background: rgba(0, 40, 80, 0.6);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,UN=M.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-image: url(${e=>e.image});
  background-size: cover;
  background-position: center;
  border: 3px solid #4fc3f7;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`,WN=M.div`
  flex-grow: 1;
  
  .researcher-name {
    font-size: 1.8rem;
    color: #4fc3f7;
    margin-bottom: 8px;
  }
  
  .researcher-title {
    font-size: 1.1rem;
    color: #b3e5fc;
    margin-bottom: 15px;
    font-style: italic;
  }
  
  .researcher-bio {
    font-size: 1rem;
    color: #e0f7fa;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .researcher-expertise {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
  }
  
  .expertise-tag {
    background: rgba(0, 80, 120, 0.5);
    color: #b3e5fc;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    display: inline-block;
  }
`,HN=M.a`
  display: inline-block;
  padding: 12px 25px;
  background: linear-gradient(45deg, #00b4db, #0288d1);
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`,YN=(e,t)=>{const n=(e-90)*(Math.PI/180),r=50+t*Math.cos(n),i=50+t*Math.sin(n);return{left:`${r}%`,top:`${i}%`}},GN=()=>{const[e,t]=C.useState(null),[n,r]=C.useState(1),i=C.useRef([]),s=C.useRef([]),o=C.useRef([]),[a,l]=C.useState(null),[u,c]=C.useState(null),[f,h]=C.useState(null),p=[{year:"1900",angle:0,radius:40,temp:"13.7°C",size:"18px",color:"rgba(79, 195, 247, 0.6)",glow:"rgba(79, 195, 247, 0.3)",desc:"Pre-industrial baseline temperature"},{year:"1920",angle:30,radius:44,temp:"13.8°C",size:"20px",color:"rgba(79, 195, 247, 0.65)",glow:"rgba(79, 195, 247, 0.3)",desc:"Minor variations from baseline"},{year:"1940",angle:60,radius:48,temp:"13.9°C",size:"22px",color:"rgba(79, 195, 247, 0.7)",glow:"rgba(79, 195, 247, 0.3)",desc:"Early signs of warming trend"},{year:"1960",angle:90,radius:52,temp:"14.0°C",size:"24px",color:"rgba(0, 176, 255, 0.7)",glow:"rgba(0, 176, 255, 0.3)",desc:"Steady industrial-era increase"},{year:"1980",angle:120,radius:56,temp:"14.2°C",size:"26px",color:"rgba(0, 176, 255, 0.75)",glow:"rgba(0, 176, 255, 0.4)",desc:"Warming trend becomes more evident"},{year:"1990",angle:150,radius:60,temp:"14.3°C",size:"28px",color:"rgba(0, 151, 167, 0.75)",glow:"rgba(0, 151, 167, 0.4)",desc:"Significant climate change evidence emerges"},{year:"2000",angle:180,radius:64,temp:"14.5°C",size:"30px",color:"rgba(0, 151, 167, 0.8)",glow:"rgba(0, 151, 167, 0.5)",desc:"Rapid warming becomes undeniable"},{year:"2010",angle:210,radius:68,temp:"14.8°C",size:"32px",color:"rgba(0, 131, 143, 0.8)",glow:"rgba(0, 131, 143, 0.5)",desc:"Ocean acidification increases alongside temperature"},{year:"2015",angle:240,radius:72,temp:"15.0°C",size:"34px",color:"rgba(0, 96, 100, 0.85)",glow:"rgba(0, 96, 100, 0.55)",desc:"Record-breaking global temperatures"},{year:"2020",angle:270,radius:76,temp:"15.2°C",size:"36px",color:"rgba(255, 87, 34, 0.85)",glow:"rgba(255, 87, 34, 0.5)",desc:"Severe impacts on marine ecosystems observed"},{year:"2023",angle:300,radius:80,temp:"15.3°C",size:"38px",color:"rgba(255, 87, 34, 0.9)",glow:"rgba(255, 87, 34, 0.55)",desc:"Current temperatures threaten coral reef survival"}],y=[{name:"Indo-Pacific",percent:"30%",left:"25%",bottom:"30px",height:"80px",color:"#4fc3f7",wave:"70px",waveColor:"rgba(79, 195, 247, 0.4)",desc:"Highest marine biodiversity concentration"},{name:"Caribbean",percent:"15%",left:"45%",bottom:"15px",height:"50px",color:"#26c6da",wave:"35px",waveColor:"rgba(38, 198, 218, 0.4)",desc:"Rich coral reef ecosystems"},{name:"Mediterranean",percent:"15%",left:"65%",bottom:"15px",height:"50px",color:"#00bcd4",wave:"35px",waveColor:"rgba(0, 188, 212, 0.4)",desc:"Ancient sea with endemic species"},{name:"Great Barrier Reef",percent:"10%",left:"80%",bottom:"10px",height:"30px",color:"#0097a7",wave:"25px",waveColor:"rgba(0, 151, 167, 0.4)",desc:"World's largest reef system"},{name:"Gulf of Mexico",percent:"7%",left:"15%",bottom:"7px",height:"20px",color:"#00838f",wave:"17px",waveColor:"rgba(0, 131, 143, 0.4)",desc:"Productive fishing grounds"}],[g,w]=C.useState({x:55,y:5,z:-25}),[m,v]=C.useState(!1),[x,_]=C.useState({x:0,y:0});C.useRef(null),C.useEffect(()=>{(()=>{const B=[];for(let X=0;X<20;X++){const K=Math.random()*80+20,F=Math.random()*100,D=Math.random()*15+10,I=Math.random()*10;B.push({size:K,left:F,duration:D,delay:I,id:X})}o.current=B})();const N={threshold:.2,rootMargin:"0px 0px -100px 0px"},$=new IntersectionObserver(B=>{B.forEach(X=>{X.isIntersecting&&X.target.classList.add("visible")})},N);return s.current.forEach(B=>{B&&$.observe(B)}),i.current.forEach((B,X)=>{B&&ht.fromTo(B,{opacity:0,y:30},{opacity:1,y:0,duration:.8,delay:X*.2,scrollTrigger:{trigger:B,start:"top 80%"}})}),()=>{$.disconnect(),q.getAll().forEach(B=>B.kill())}},[]);const S=E=>{t(E)},k=[{id:1,name:"Mariana Trench",location:{top:"58%",left:"82%"},description:"Deep-sea research and exploration of the deepest point on Earth, studying unique marine life and geological features at extreme depths.",organization:"International Deep Ocean Exploration"},{id:2,name:"Great Barrier Reef",location:{top:"65%",left:"85%"},description:"Comprehensive study of coral bleaching, reef resilience, and marine ecosystems in the world's largest coral reef system.",organization:"Australian Marine Science Institute"},{id:3,name:"Gulf of Mexico",location:{top:"48%",left:"25%"},description:"Research on ocean currents, oil spill impacts, and ecosystem recovery in one of the most productive marine environments.",organization:"NOAA Ocean Service"},{id:4,name:"Arctic Ocean",location:{top:"18%",left:"50%"},description:"Studies on climate change impacts, sea ice reduction, and polar marine ecology in one of the most rapidly changing environments.",organization:"Polar Research Institute"},{id:5,name:"Mediterranean Sea",location:{top:"42%",left:"48%"},description:"Research on marine biodiversity, ancient shipwrecks, and anthropogenic impacts in this historically significant sea.",organization:"Mediterranean Marine Research Network"}],b=[{year:"1872",title:"HMS Challenger Expedition",description:"The first global oceanographic expedition that discovered 4,700 new marine species and the Challenger Deep in the Mariana Trench."},{year:"1934",title:"Bathysphere Dives",description:"William Beebe and Otis Barton conducted the first deep-sea exploration in their Bathysphere, reaching depths of 923 meters."},{year:"1960",title:"Deepest Ocean Dive",description:"Jacques Piccard and Don Walsh reached the bottom of the Mariana Trench in the bathyscaphe Trieste, the deepest point in the ocean."},{year:"1977",title:"Hydrothermal Vent Discovery",description:"Scientists aboard the Alvin submersible discovered hydrothermal vents and their unique ecosystems near the Galapagos Islands."},{year:"1985",title:"Titanic Discovery",description:"Robert Ballard and his team discovered the wreck of RMS Titanic using advanced sonar technology and underwater robots."},{year:"2012",title:"Deepsea Challenger",description:"James Cameron conducted a solo dive to the bottom of the Mariana Trench in the Deepsea Challenger submersible."},{year:"2019",title:"Five Deeps Expedition",description:"Victor Vescovo completed dives to the deepest points in all five of the world's oceans in the submersible Limiting Factor."}],T=C.useCallback(E=>{v(!0),_({x:E.clientX,y:E.clientY})},[]),j=C.useCallback(E=>{if(m){const N=E.clientX-x.x,$=E.clientY-x.y;w(B=>({x:Math.min(Math.max(B.x-$*.5,0),90),y:B.y+N*.5,z:B.z})),_({x:E.clientX,y:E.clientY})}},[m,x]),R=C.useCallback(()=>{v(!1)},[]);return C.useEffect(()=>(document.addEventListener("mouseup",R),document.addEventListener("mousemove",j),()=>{document.removeEventListener("mouseup",R),document.removeEventListener("mousemove",j)}),[R,j]),d.jsxs(dN,{children:[d.jsx(TN,{children:o.current.map(E=>d.jsx(PN,{style:{width:`${E.size}px`,height:`${E.size}px`,left:`${E.left}%`,animationDuration:`${E.duration}s`,animationDelay:`${E.delay}s`}},E.id))}),d.jsx(Wa,{currentPage:"/research",pages:Ha}),d.jsxs(fN,{children:[d.jsxs(hN,{style:{marginBottom:"30px"},children:[d.jsx("h1",{children:"Ocean Research & Innovation"}),d.jsx("p",{children:"Explore the cutting-edge research and technological innovations that are helping scientists better understand and protect our oceans. From deep-sea exploration to marine biotechnology, discover how human ingenuity is unlocking the secrets of the underwater world."})]}),d.jsxs("div",{ref:E=>s.current[0]=E,style:{paddingTop:"80px",marginTop:"100px",width:"100%",maxWidth:"100%",padding:"0 20px"},children:[d.jsx("h2",{style:{fontSize:"2.2rem",marginBottom:"1.5rem",color:"#4fc3f7",borderBottom:"2px solid rgba(78, 198, 255, 0.3)",paddingBottom:"10px"},children:"Timeline of Ocean Discoveries"}),d.jsx("p",{style:{marginBottom:"40px",lineHeight:"1.7",fontSize:"1.1rem"},children:"Throughout history, humans have been fascinated by the mysteries of the ocean. Major expeditions and technological breakthroughs have gradually revealed the secrets of the deep, from strange creatures to underwater geological features. Explore this timeline of significant ocean discoveries that have shaped our understanding of marine environments."}),d.jsx(pN,{style:{marginTop:"60px"},children:b.map((E,N)=>d.jsxs(mN,{ref:$=>i.current[N]=$,position:N%2===0?"left":"right",children:[d.jsx("div",{className:"year",children:E.year}),d.jsx("h3",{children:E.title}),d.jsx("p",{children:E.description})]},N))})]}),d.jsxs("div",{ref:E=>s.current[1]=E,style:{marginTop:"60px",marginBottom:"80px",width:"100%",maxWidth:"100%",padding:"0 20px"},children:[d.jsx("h2",{style:{fontSize:"2.2rem",marginBottom:"1.5rem",color:"#4fc3f7",borderBottom:"2px solid rgba(78, 198, 255, 0.3)",paddingBottom:"10px"},children:"Ocean Data Visualization"}),d.jsx("p",{style:{marginBottom:"30px",lineHeight:"1.7",fontSize:"1.1rem"},children:"Understanding ocean health requires analyzing complex datasets. These visualizations provide insights into ocean temperatures, marine biodiversity, and human impacts. Researchers use these data patterns to track changes and develop conservation strategies."}),d.jsxs(wN,{children:[d.jsxs(bN,{children:[d.jsxs(Bp,{active:n===1,onClick:()=>r(1),children:[d.jsx("span",{className:"icon",children:"🌡️"}),"Ocean Temperature Evolution"]}),d.jsxs(Bp,{active:n===2,onClick:()=>r(2),children:[d.jsx("span",{className:"icon",children:"🌊"}),"3D Coral Protection Matrix"]}),d.jsxs(Bp,{active:n===3,onClick:()=>r(3),children:[d.jsx("span",{className:"icon",children:"🌊"}),"Marine Biodiversity Waves"]})]}),n===1&&d.jsxs(Up,{children:[d.jsx("h3",{children:"Ocean Temperature Evolution (1900-2023)"}),d.jsx(EN,{children:d.jsxs(RN,{children:[d.jsx(id,{size:"400px"}),d.jsx(id,{size:"320px"}),d.jsx(id,{size:"240px"}),d.jsx(id,{size:"160px"}),d.jsx(AN,{children:a?a.temp:"1900-2023"}),p.map((E,N)=>{const $=YN(E.angle,E.radius);return d.jsxs(Ut.Fragment,{children:[d.jsx(MN,{size:E.size,left:$.left,top:$.top,color:E.color,glow:E.glow,onMouseEnter:()=>l(E),onMouseLeave:()=>l(null)}),d.jsx(DN,{left:$.left,top:$.top,style:{transform:`translate(-50%, ${E.angle>180?-100:100}%)`,top:E.angle>180?`calc(${$.top} + 20px)`:`calc(${$.top} - 20px)`},children:E.year})]},N)})]})}),a&&d.jsxs("div",{style:{textAlign:"center",background:"rgba(0, 30, 60, 0.7)",padding:"15px",borderRadius:"8px",maxWidth:"400px",margin:"0 auto",border:`1px solid ${a.color.replace("0.7","1")}`},children:[d.jsxs("h4",{style:{color:a.color.replace("0.7","1"),margin:"0 0 10px"},children:[a.year,": ",a.temp]}),d.jsx("p",{style:{fontSize:"0.9rem",margin:"0"},children:a.desc})]}),d.jsxs("p",{children:["This radial visualization shows how ocean temperatures have evolved over time, with the distance from center representing time progression and the size and color intensity indicating temperature increase. ",d.jsx("strong",{children:"Hover over circles"})," to see detailed information for each time period."]})]}),n===2&&d.jsxs(Up,{children:[d.jsx("h3",{children:"3D Coral Protection Matrix: Economic-Biodiversity-Protection Analysis"}),d.jsxs(NN,{children:[d.jsx("div",{style:{position:"relative",width:"100%",height:"500px",perspective:"1200px",display:"flex",justifyContent:"center"},onMouseDown:T,children:d.jsxs("div",{style:{width:"500px",height:"500px",position:"relative",transformStyle:"preserve-3d",transform:`rotateX(${g.x}deg) rotateY(${g.y}deg) rotateZ(${g.z}deg)`,transition:"transform 0.1s ease",cursor:m?"grabbing":"grab"},children:[d.jsx(ON,{}),d.jsx(Wp,{className:"x-axis"}),d.jsx(Wp,{className:"y-axis"}),d.jsx(Wp,{className:"z-axis"}),vb.map(E=>d.jsx(zN,{id:E.id,x:E.x,y:E.y,height:E.height,size:E.size,color:E.color,glow:E.glow,onMouseEnter:()=>c(E),onMouseLeave:()=>c(null)},E.id))]})}),d.jsx(IN,{children:vb.map(E=>d.jsxs(LN,{color:E.color,onMouseEnter:()=>c(E),onMouseLeave:()=>c(null),children:[d.jsx("div",{className:"color-dot"}),d.jsx("div",{className:"text",children:E.name})]},E.id))}),u&&d.jsxs("div",{style:{background:"rgba(0, 30, 60, 0.8)",padding:"20px",borderRadius:"12px",maxWidth:"600px",margin:"25px auto",border:`2px solid ${u.color.replace("0.8","1")}`,boxShadow:"0 10px 30px rgba(0, 0, 0, 0.25)"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",borderBottom:`1px solid ${u.color.replace("0.8","0.5")}`,paddingBottom:"12px",marginBottom:"12px"},children:[d.jsx("div",{style:{width:"30px",height:"30px",borderRadius:"50%",background:u.color.replace("0.8","0.9"),boxShadow:`0 0 15px ${u.glow}`}}),d.jsx("h4",{style:{color:u.color.replace("0.8","1"),margin:"0",fontSize:"1.3rem",fontWeight:"bold"},children:u.name})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"12px",padding:"0 10px"},children:[d.jsxs("div",{style:{textAlign:"center"},children:[d.jsx("div",{style:{color:"#b3e5fc",fontSize:"0.85rem",marginBottom:"3px"},children:"Economic Value"}),d.jsx("div",{style:{color:"#fff",fontSize:"0.95rem"},children:u.economic})]}),d.jsxs("div",{style:{textAlign:"center"},children:[d.jsx("div",{style:{color:"#b3e5fc",fontSize:"0.85rem",marginBottom:"3px"},children:"Biodiversity"}),d.jsx("div",{style:{color:"#fff",fontSize:"0.95rem"},children:u.biodiversity})]}),d.jsxs("div",{style:{textAlign:"center"},children:[d.jsx("div",{style:{color:"#b3e5fc",fontSize:"0.85rem",marginBottom:"3px"},children:"Protection Level"}),d.jsx("div",{style:{color:"#fff",fontSize:"0.95rem"},children:u.protection})]})]}),d.jsx("p",{style:{fontSize:"1rem",margin:"15px 0 0",lineHeight:"1.6",color:"#e0f7fa"},children:u.desc})]})]}),d.jsxs("p",{children:["This 3D matrix visualizes marine conservation approaches across three critical dimensions: economic value, biodiversity impact, and protection level. Each point represents a different protection strategy, with its position indicating how it performs on these axes. ",d.jsx("strong",{children:"Click and drag"})," to rotate the matrix and explore from different angles. ",d.jsx("strong",{children:"Hover over points or legend items"})," to see detailed information about each approach and its ecosystem and economic impacts."]})]}),n===3&&d.jsxs(Up,{children:[d.jsx("h3",{children:"Marine Biodiversity Waves"}),d.jsxs(_N,{children:[y.map((E,N)=>d.jsx(SN,{color:E.waveColor,bottom:E.wave,opacity:.6,duration:`${15+N*2}s`,delay:`${N*.5}s`},N)),y.map((E,N)=>d.jsxs(Ut.Fragment,{children:[d.jsx(kN,{bottom:E.bottom,left:E.left,height:E.height,color:E.color,onMouseEnter:()=>h(E),onMouseLeave:()=>h(null)}),d.jsx(CN,{bottom:`calc(${E.bottom} + ${E.height} + 10px)`,left:E.left,children:E.name})]},N))]}),f&&d.jsxs("div",{style:{background:"rgba(0, 40, 70, 0.85)",padding:"20px",borderRadius:"12px",maxWidth:"500px",margin:"20px auto",border:`2px solid ${f.color}`,boxShadow:`0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px ${f.color}80`,transition:"all 0.3s ease"},children:[d.jsxs("h4",{style:{color:f.color,margin:"0 0 12px",fontSize:"1.3rem",borderBottom:`1px solid ${f.color}40`,paddingBottom:"8px"},children:[f.name," ",d.jsx("span",{style:{background:f.color,color:"#fff",padding:"3px 8px",borderRadius:"20px",fontSize:"0.9rem",marginLeft:"8px"},children:f.percent})]}),d.jsx("p",{style:{fontSize:"1rem",margin:"0",lineHeight:"1.5"},children:f.desc})]}),d.jsxs("p",{children:["This wave visualization represents marine biodiversity distribution across major ocean regions. The height and size of each marker indicates the relative biodiversity concentration in that area, with taller markers showing regions of higher biodiversity richness.",d.jsx("strong",{children:"Hover over the colored markers or labels"})," to learn more about each region's unique marine ecosystem characteristics."]})]})]})]}),d.jsxs(jo,{ref:E=>s.current[2]=E,style:{width:"100%",maxWidth:"100%",margin:"0",padding:"30px 20px"},children:[d.jsx("h2",{children:"Global Research Initiatives"}),d.jsx("p",{children:"Scientists around the world are conducting groundbreaking research to understand and protect our oceans. From climate change impacts to marine biodiversity, these initiatives are providing crucial data for ocean conservation. Explore these major research projects currently underway."}),d.jsxs(gN,{children:[d.jsx(vN,{}),d.jsx(yN,{children:k.map(E=>d.jsxs(xN,{onClick:()=>S(E),children:[d.jsx("h3",{children:E.name}),d.jsx("p",{children:E.description}),d.jsxs("p",{className:"organization",children:["Lead organization: ",E.organization]})]},E.id))})]})]}),d.jsxs(jo,{ref:E=>s.current[3]=E,style:{width:"100%",maxWidth:"100%",margin:"0",padding:"30px 20px"},children:[d.jsx("h2",{children:"Emerging Ocean Technologies"}),d.jsx("p",{children:"Technological innovations are revolutionizing how we study and interact with the marine environment. From autonomous underwater vehicles to advanced satellite systems, these tools are expanding our capacity to explore and monitor the oceans like never before."}),d.jsxs(jN,{children:[d.jsxs(rd,{children:[d.jsx("h3",{children:"Autonomous Underwater Vehicles (AUVs)"}),d.jsx("p",{children:"AUVs are robots that travel underwater without requiring input from an operator. They're revolutionizing deep-sea exploration by accessing areas too dangerous or remote for human divers. Equipped with sensors and cameras, they collect valuable data on ocean conditions, marine life, and geological features."})]}),d.jsxs(rd,{children:[d.jsx("h3",{children:"Environmental DNA (eDNA) Sampling"}),d.jsx("p",{children:"eDNA technology allows scientists to detect the presence of marine species by collecting and analyzing genetic material they leave behind in the water. This non-invasive method is transforming biodiversity monitoring and helping researchers discover new species without having to capture specimens."})]}),d.jsxs(rd,{children:[d.jsx("h3",{children:"Smart Buoys and Ocean IoT Networks"}),d.jsx("p",{children:'Networks of connected sensors deployed throughout the ocean form the "Internet of Things" for marine environments. These systems continuously monitor ocean conditions, providing real-time data on temperature, chemistry, currents, and more. The information helps track climate change impacts and predict extreme weather events.'})]}),d.jsxs(rd,{children:[d.jsx("h3",{children:"Ocean-Based Renewable Energy"}),d.jsx("p",{children:"Innovative technologies are harnessing the power of waves, tides, and ocean thermal energy conversion (OTEC) to generate clean electricity. These renewable energy sources have the potential to reduce our dependence on fossil fuels while minimizing environmental impact on marine ecosystems."})]})]})]}),d.jsxs(jo,{ref:E=>s.current[4]=E,style:{width:"100%",maxWidth:"100%",margin:"0",padding:"30px 20px"},children:[d.jsx("h2",{children:"Get Involved in Ocean Research"}),d.jsx("p",{children:"Ocean research isn't just for professional scientists. Citizen science initiatives allow anyone to contribute to our understanding of marine environments. Whether you're a diver, a beachcomber, or simply passionate about oceans, there are ways you can help advance scientific knowledge."}),d.jsxs("div",{style:{padding:"30px",background:"linear-gradient(135deg, rgba(0, 40, 80, 0.8), rgba(0, 20, 40, 0.8))",borderRadius:"15px",margin:"30px 0",display:"flex",flexDirection:"column",width:"100%",maxWidth:"100%",marginLeft:0,marginRight:0},children:[d.jsx("h3",{style:{color:"#4fc3f7",marginBottom:"20px",textAlign:"center"},children:"Citizen Science Opportunities"}),d.jsxs("ul",{style:{listStyle:"none",padding:"0",display:"flex",flexDirection:"column",gap:"15px",width:"100%"},children:[d.jsxs("li",{style:{padding:"15px",marginBottom:"0",background:"rgba(0, 20, 40, 0.5)",borderRadius:"10px",borderLeft:"3px solid #4fc3f7"},children:[d.jsx("strong",{style:{color:"#b3e5fc",display:"block",marginBottom:"5px"},children:"Coral Reef Monitoring:"})," Join divers who track coral health and diversity in reefs worldwide."]}),d.jsxs("li",{style:{padding:"15px",marginBottom:"0",background:"rgba(0, 20, 40, 0.5)",borderRadius:"10px",borderLeft:"3px solid #4fc3f7"},children:[d.jsx("strong",{style:{color:"#b3e5fc",display:"block",marginBottom:"5px"},children:"Marine Debris Tracking:"})," Help scientists understand plastic pollution patterns through beach cleanups and debris documentation."]}),d.jsxs("li",{style:{padding:"15px",marginBottom:"0",background:"rgba(0, 20, 40, 0.5)",borderRadius:"10px",borderLeft:"3px solid #4fc3f7"},children:[d.jsx("strong",{style:{color:"#b3e5fc",display:"block",marginBottom:"5px"},children:"Whale and Dolphin Watching:"})," Report cetacean sightings to contribute to migration and population studies."]}),d.jsxs("li",{style:{padding:"15px",background:"rgba(0, 20, 40, 0.5)",borderRadius:"10px",borderLeft:"3px solid #4fc3f7"},children:[d.jsx("strong",{style:{color:"#b3e5fc",display:"block",marginBottom:"5px"},children:"Invasive Species Monitoring:"})," Help track the spread of non-native marine species in coastal areas."]})]})]})]}),d.jsxs(jo,{ref:E=>s.current[5]=E,style:{width:"100%",maxWidth:"100%",margin:"0",padding:"30px 20px"},children:[d.jsx("h2",{children:"Featured Research Publications"}),d.jsx("p",{children:"Our researchers regularly publish groundbreaking findings in top scientific journals. These selected publications highlight recent discoveries and advancements in ocean science that are shaping our understanding of marine environments and informing conservation efforts."}),d.jsxs(FN,{children:[d.jsxs(Eo,{children:[d.jsx("div",{className:"pub-image",style:{backgroundImage:"url(/images/publications/coral-genomics.jpg)"}}),d.jsxs("div",{className:"pub-content",children:[d.jsx("div",{className:"pub-title",children:"Genomic insights into coral reef resilience under climate change"}),d.jsx("div",{className:"pub-authors",children:"Zhang, L., Mikhailov, K., Williams, S., et al."}),d.jsx("div",{className:"pub-abstract",children:"This study identifies genetic markers associated with heat tolerance in reef-building corals, providing crucial information for coral restoration efforts in warming oceans."}),d.jsxs("div",{className:"pub-journal",children:[d.jsx("span",{className:"journal-name",children:"Nature Marine Science"}),d.jsx("span",{className:"journal-date",children:"March 2023"})]})]})]}),d.jsxs(Eo,{children:[d.jsx("div",{className:"pub-image",style:{backgroundImage:"url(/images/publications/deep-sea-microbes.jpg)"}}),d.jsxs("div",{className:"pub-content",children:[d.jsx("div",{className:"pub-title",children:"Novel microbial communities in deep-sea hydrothermal vents"}),d.jsx("div",{className:"pub-authors",children:"Rodríguez, A., Chen, B., Nakamura, T., et al."}),d.jsx("div",{className:"pub-abstract",children:"Discovery of unique extremophile microorganisms with promising applications in biotechnology and pharmaceutical development, including compounds with antimicrobial properties."}),d.jsxs("div",{className:"pub-journal",children:[d.jsx("span",{className:"journal-name",children:"Science Advances"}),d.jsx("span",{className:"journal-date",children:"January 2023"})]})]})]}),d.jsxs(Eo,{children:[d.jsx("div",{className:"pub-image",style:{backgroundImage:"url(/images/publications/ocean-acoustics.jpg)"}}),d.jsxs("div",{className:"pub-content",children:[d.jsx("div",{className:"pub-title",children:"Acoustic monitoring reveals impacts of noise pollution on marine mammals"}),d.jsx("div",{className:"pub-authors",children:"Johnson, H., Patel, V., Martínez, C., et al."}),d.jsx("div",{className:"pub-abstract",children:"Long-term acoustic monitoring study documenting how increasing ocean noise affects communication and behavior of cetaceans, with implications for shipping regulations."}),d.jsxs("div",{className:"pub-journal",children:[d.jsx("span",{className:"journal-name",children:"Marine Ecology Progress"}),d.jsx("span",{className:"journal-date",children:"February 2023"})]})]})]}),d.jsxs(Eo,{children:[d.jsx("div",{className:"pub-image",style:{backgroundImage:"url(/images/publications/plastic-degradation.jpg)"}}),d.jsxs("div",{className:"pub-content",children:[d.jsx("div",{className:"pub-title",children:"Accelerated degradation of microplastics by specialized marine bacteria"}),d.jsx("div",{className:"pub-authors",children:"Takahashi, N., Bauer, J., Cohen, M., et al."}),d.jsx("div",{className:"pub-abstract",children:"Groundbreaking research identifying bacterial strains capable of breaking down common microplastics in marine environments, with potential applications for large-scale ocean cleanup technologies."}),d.jsxs("div",{className:"pub-journal",children:[d.jsx("span",{className:"journal-name",children:"Environmental Science & Technology"}),d.jsx("span",{className:"journal-date",children:"April 2023"})]})]})]}),d.jsxs(Eo,{children:[d.jsx("div",{className:"pub-image",style:{backgroundImage:"url(/images/publications/seagrass-carbon.jpg)"}}),d.jsxs("div",{className:"pub-content",children:[d.jsx("div",{className:"pub-title",children:"Seagrass meadows as blue carbon sinks: Quantification and protection strategies"}),d.jsx("div",{className:"pub-authors",children:"Lee, S., O'Connor, F., Al-Yamani, F., et al."}),d.jsx("div",{className:"pub-abstract",children:"Comprehensive assessment of carbon sequestration rates in global seagrass ecosystems, highlighting their critical role in climate mitigation and the urgent need for conservation."}),d.jsxs("div",{className:"pub-journal",children:[d.jsx("span",{className:"journal-name",children:"Global Change Biology"}),d.jsx("span",{className:"journal-date",children:"May 2023"})]})]})]}),d.jsxs(Eo,{children:[d.jsx("div",{className:"pub-image",style:{backgroundImage:"url(/images/publications/mangrove-restoration.jpg)"}}),d.jsxs("div",{className:"pub-content",children:[d.jsx("div",{className:"pub-title",children:"Community-based mangrove restoration improves coastal resilience and livelihoods"}),d.jsx("div",{className:"pub-authors",children:"Nguyen, T., Mbeki, L., Garcia, D., et al."}),d.jsx("div",{className:"pub-abstract",children:"Five-year study demonstrating how community-led mangrove restoration projects enhance storm protection, fisheries productivity, and sustainable income for coastal communities."}),d.jsxs("div",{className:"pub-journal",children:[d.jsx("span",{className:"journal-name",children:"Conservation Letters"}),d.jsx("span",{className:"journal-date",children:"March 2023"})]})]})]})]})]}),d.jsxs(jo,{ref:E=>s.current[6]=E,style:{width:"100%",maxWidth:"100%",margin:"0",padding:"30px 20px"},children:[d.jsx("h2",{children:"Research Impact Metrics"}),d.jsx("p",{children:"Our ocean research initiatives are making measurable impacts across multiple dimensions. From scientific discoveries to policy influence and conservation outcomes, these metrics demonstrate how our work is advancing marine science and protection efforts worldwide."}),d.jsxs($N,{children:[d.jsxs(sd,{color:"#4fc3f7",trendColor:"#4caf50",children:[d.jsx("div",{className:"metric-value",children:"137"}),d.jsx("div",{className:"metric-label",children:"Peer-reviewed publications in the last year"}),d.jsx("div",{className:"metric-trend",children:"↑ 23% increase from previous year"})]}),d.jsxs(sd,{color:"#00bcd4",trendColor:"#4caf50",children:[d.jsx("div",{className:"metric-value",children:"$42M"}),d.jsx("div",{className:"metric-label",children:"Research funding secured for marine initiatives"}),d.jsx("div",{className:"metric-trend",children:"↑ 15% increase from previous year"})]}),d.jsxs(sd,{color:"#009688",trendColor:"#4caf50",children:[d.jsx("div",{className:"metric-value",children:"28"}),d.jsx("div",{className:"metric-label",children:"Policy recommendations adopted by governments"}),d.jsx("div",{className:"metric-trend",children:"↑ 12% increase from previous year"})]}),d.jsxs(sd,{color:"#26a69a",trendColor:"#4caf50",children:[d.jsx("div",{className:"metric-value",children:"1.2M"}),d.jsx("div",{className:"metric-label",children:"Hectares of marine habitat under protection"}),d.jsx("div",{className:"metric-trend",children:"↑ 30% increase from previous year"})]})]}),d.jsx("h3",{style:{color:"#4fc3f7",marginTop:"40px",marginBottom:"20px",fontSize:"1.4rem"},children:"Research Funding Distribution"}),d.jsxs(VN,{children:[d.jsx(Ro,{height:"80%",color:"#4fc3f7",colorEnd:"#0288d1",amount:"$16.8M",label:"Ocean Monitoring"}),d.jsx(Ro,{height:"65%",color:"#00bcd4",colorEnd:"#0097a7",amount:"$13.7M",label:"Marine Biology"}),d.jsx(Ro,{height:"45%",color:"#009688",colorEnd:"#00796b",amount:"$9.4M",label:"Conservation"}),d.jsx(Ro,{height:"35%",color:"#26a69a",colorEnd:"#00897b",amount:"$7.3M",label:"Climate Studies"}),d.jsx(Ro,{height:"28%",color:"#4db6ac",colorEnd:"#00897b",amount:"$5.9M",label:"Ocean Technology"}),d.jsx(Ro,{height:"22%",color:"#80cbc4",colorEnd:"#4db6ac",amount:"$4.6M",label:"Policy Research"})]})]}),d.jsxs(jo,{ref:E=>s.current[7]=E,style:{width:"100%",maxWidth:"100%",margin:"0",padding:"30px 20px"},children:[d.jsx("h2",{children:"Researcher Spotlight"}),d.jsx("p",{children:"Meet the dedicated scientists behind our groundbreaking ocean research. Each month, we highlight a researcher whose work is expanding our understanding of marine environments and contributing to conservation solutions."}),d.jsxs(BN,{children:[d.jsx(UN,{image:"/images/researchers/doctor.jpg"}),d.jsxs(WN,{children:[d.jsx("div",{className:"researcher-name",children:"Dr. Elena Rodriguez"}),d.jsx("div",{className:"researcher-title",children:"Lead Marine Biologist"}),d.jsx("div",{className:"researcher-bio",children:"Dr. Anderson specializes in deep-sea ecosystems and has pioneered innovative research methods for studying marine life in extreme environments. His work has contributed significantly to our understanding of hydrothermal vent communities and abyssal plain biodiversity. With over 20 years of field experience and multiple deep-sea expeditions, he continues to discover new species and ecological relationships in the most remote ocean habitats."}),d.jsxs("div",{className:"researcher-expertise",children:[d.jsx("span",{className:"expertise-tag",children:"Deep-Sea Ecology"}),d.jsx("span",{className:"expertise-tag",children:"Marine Biodiversity"}),d.jsx("span",{className:"expertise-tag",children:"Ocean Conservation"}),d.jsx("span",{className:"expertise-tag",children:"Expedition Leadership"})]}),d.jsx(HN,{href:"/researchers/james-anderson",children:"View Full Profile"})]})]})]})]}),d.jsx(bi,{})]})},Jk=C.createContext({deepSea:{fishImages:{anglerfish:"/images/deep-sea/anglerfish.png",giantSquid:"/images/deep-sea/giant-squid.png",vampireSquid:"/images/deep-sea/vampire-squid.png",dumboOctopus:"/images/deep-sea/dumbo-octopus.png",hatchetfish:"/images/deep-sea/hatchetfish.png",barreleye:"/images/deep-sea/barreleye.png"},coralImages:["/images/deep-sea/coral1.png","/images/deep-sea/coral2.png","/images/deep-sea/coral3.png","/images/deep-sea/coral4.png","/images/deep-sea/coral5.png","/images/deep-sea/coral6.png"],wavePattern:"/images/deep-sea/wave-pattern.svg"}});function XN(){const e={deepSea:{fishImages:{anglerfish:"/images/deep-sea/anglerfish.png",giantSquid:"/images/deep-sea/giant-squid.png",vampireSquid:"/images/deep-sea/vampire-squid.png",dumboOctopus:"/images/deep-sea/dumbo-octopus.png",hatchetfish:"/images/deep-sea/hatchetfish.png",barreleye:"/images/deep-sea/barreleye.png"},coralImages:["/images/deep-sea/coral1.png","/images/deep-sea/coral2.png","/images/deep-sea/coral3.png","/images/deep-sea/coral4.png","/images/deep-sea/coral5.png","/images/deep-sea/coral6.png"],wavePattern:"/images/deep-sea/wave-pattern.svg"}};return d.jsx(Jk.Provider,{value:e,children:d.jsx(Tj,{children:d.jsx(U5,{sparkColor:"#fff",sparkSize:10,sparkRadius:15,sparkCount:8,duration:400,children:d.jsxs(xj,{children:[d.jsx(Mr,{path:"/",element:d.jsx(k8,{})}),d.jsx(Mr,{path:"/about",element:d.jsx(T6,{})}),d.jsx(Mr,{path:"/contact",element:d.jsx($9,{})}),d.jsx(Mr,{path:"/underwater-life",element:d.jsx(Y6,{})}),d.jsx(Mr,{path:"/ngo",element:d.jsx(i9,{})}),d.jsx(Mr,{path:"/conservation",element:d.jsx(T9,{})}),d.jsx(Mr,{path:"/deep-sea",element:d.jsx(V9,{})}),d.jsx(Mr,{path:"/coral-reef",element:d.jsx(cN,{})}),d.jsx(Mr,{path:"/research",element:d.jsx(GN,{})})]})})})})}ReactDOM.createRoot(document.getElementById("root")).render(d.jsx(XN,{}));
