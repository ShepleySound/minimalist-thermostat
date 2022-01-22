/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=o.get(this.cssText);return e&&void 0===t&&(o.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const s=t=>new n("string"==typeof t?t:t+"",i),r=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new n(o,i)},a=(t,i)=>{e?t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):i.forEach(e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)})},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return s(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const d=window.trustedTypes,h=d?d.emptyScript:"",u=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:m};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Eh(i,e);void 0!==o&&(this._$Eu.set(o,i),t.push(o))}),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=v){var o,n;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const r=(null!==(n=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==n?n:p.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Ei=null}}_$AK(t,e){var i,o,n;const s=this.constructor,r=s._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=s.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(o=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==n?n:p.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((t,e)=>this[e]=t),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach((t,e)=>this._$ES(e,this[e],t)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(c=globalThis.reactiveElementVersions)&&void 0!==c?c:globalThis.reactiveElementVersions=[]).push("1.2.0");const _=globalThis.trustedTypes,y=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,b="?"+$,w=`<${b}>`,A=document,x=(t="")=>A.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,U=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,O=/"/g,H=/^(?:script|style|textarea)$/i,N=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),R=new WeakMap,j=A.createTreeWalker(A,129,null,!1),I=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",r=C;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===C?"!--"===l[1]?r=k:void 0!==l[1]?r=U:void 0!==l[2]?(H.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=T):void 0!==l[3]&&(r=T):r===T?">"===l[0]?(r=null!=n?n:C,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?T:'"'===l[3]?O:P):r===O||r===P?r=T:r===k||r===U?r=C:(r=T,n=void 0);const h=r===T&&t[e+1].startsWith("/>")?" ":"";s+=r===C?i+w:c>=0?(o.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+$+h):i+$+(-2===c?(o.push(void 0),e):h)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(a):a,o]};class L{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[l,c]=I(t,e);if(this.el=L.createElement(l,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=j.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?K:"@"===e[1]?J:q})}else a.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(H.test(o.tagName)){const t=o.textContent.split($),e=t.length-1;if(e>0){o.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],x()),j.nextNode(),a.push({type:2,index:++n});o.append(t[e],x())}}}else if(8===o.nodeType)if(o.data===b)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf($,t+1));)a.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function V(t,e,i=t,o){var n,s,r,a;if(e===z)return e;let l=void 0!==o?null===(n=i._$Cl)||void 0===n?void 0:n[o]:i._$Cu;const c=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(e=V(t,l._$AS(t,e.values),l,o)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);j.currentNode=n;let s=j.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new D(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new Z(s,this,t)),this.v.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(s=j.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,o){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),E(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==z&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==M&&E(this._$AH)?this._$AA.nextSibling.data=t:this.S(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=L.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new B(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new L(t)),e}A(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new D(this.M(x()),this.M(x()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,o,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=V(this,t,e,0),s=!E(t)||t!==this._$AH&&t!==z,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=V(this,o[i+r],e,r),a===z&&(a=this._$AH[r]),s||(s=!E(a)||a!==this._$AH[r]),a===M?t=M:t!==M&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.k(t)}k(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends q{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===M?void 0:t}}const F=_?_.emptyScript:"";class K extends q{constructor(){super(...arguments),this.type=4}k(t){t&&t!==M?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class J extends q{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=V(this,t,e,0))&&void 0!==i?i:M)===z)return;const o=this._$AH,n=t===M&&o!==M||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==M&&(o===M||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const G=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,X;null==G||G(L,D),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.1.1");class Y extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=s._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=r=new D(e.insertBefore(x(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return z}}Y.finalized=!0,Y._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:Y});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Y}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ot(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function nt(t){return ot({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st;null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;var rt,at;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(rt||(rt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(at||(at={}));var lt=function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,t.dispatchEvent(n),n};let ct=class extends Y{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}get _tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.tap_action)||{action:"none"}}get _hold_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.hold_action)||{action:"none"}}get _double_tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.double_tap_action)||{action:"none"}}render(){if(!this.hass||!this._helpers)return N``;this._helpers.importMoreInfoControl("climate");const t=Object.keys(this.hass.states).filter(t=>"climate"===t.substr(0,t.indexOf(".")));return N`
      <div class="card-config">
        <div class="values">
          <paper-dropdown-menu
            label="Entity (Required)"
            @value-changed=${this._valueChanged}
            .configValue=${"entity"}
          >
            <paper-listbox
              slot="dropdown-content"
              .selected=${t.indexOf(this._entity)}
            >
              ${t.map(t=>N`
                  <paper-item>${t}</paper-item>
                `)}
            </paper-listbox>
          </paper-dropdown-menu>
        </div>

        <div class="row">
          <div class="values">
            <paper-input
              label="Name (Optional)"
              char-counter
              maxlength="30"
              .value=${this._name}
              .configValue=${"name"}
              @value-changed=${this._valueChanged}
            ></paper-input>
          </div>
        </div>
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;if(this["_"+e.configValue]!==e.value){if(e.configValue)if(""===e.value){const t=Object.assign({},this._config);delete t[e.configValue],this._config=t}else this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value});lt(this,"config-changed",{config:this._config})}}static get styles(){return r`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};t([ot({attribute:!1})],ct.prototype,"hass",void 0),t([nt()],ct.prototype,"_config",void 0),t([nt()],ct.prototype,"_toggle",void 0),t([nt()],ct.prototype,"_helpers",void 0),ct=t([et("minimalist-thermostat-editor")],ct);const dt={off:"mdi:power",auto:"mdi:calendar-sync",heat_cool:"mdi:autorenew",heat:"mdi:fire",cool:"mdi:snowflake",fan_only:"mdi:fan",dry:"mdi:water-percent"},ht={off:"off",auto:"auto",heat_cool:"heat/​cool",heat:"heat",cool:"cool",fan_only:"fan only",dry:"dry"};var ut={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},pt={common:ut},mt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},vt={common:mt};const ft={en:Object.freeze({__proto__:null,common:ut,default:pt}),nb:Object.freeze({__proto__:null,common:mt,default:vt})};function gt(t,e="",i=""){const o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce((t,e)=>t[e],ft[o])}catch(e){n=t.split(".").reduce((t,e)=>t[e],ft.en)}return void 0===n&&(n=t.split(".").reduce((t,e)=>t[e],ft.en)),""!==e&&""!==i&&(n=n.replace(e,i)),n}let _t=class extends Y{constructor(){super(...arguments),this.step=1,this._debouncedSet=function(t,e,i){var o;return void 0===i&&(i=!1),function(){var n=[].slice.call(arguments),s=this,r=function(){o=null,i||t.apply(s,n)},a=i&&!o;clearTimeout(o),o=setTimeout(r,e),a&&t.apply(s,n)}}(t=>{const e=new CustomEvent("change",{detail:{newValue:t},bubbles:!0,composed:!0});this.dispatchEvent(e)},2e3)}render(){return N`
      <div class="wrapper">
        <div class="temp-header">Target</div>
        <div class="control-center">
          <div>
            <ha-icon-button class="up" @click=${this._increment}>
              <ha-icon icon="mdi:plus"></ha-icon>
            </ha-icon-button>
          </div>
          <div id="target-temperature">
            <div class="number">${this.value}</div>
            <div class="unit">${this.units}</div>
          </div>
          <div>
            <ha-icon-button class="down" @click=${this._decrement}>
              <ha-icon icon="mdi:minus"></ha-icon>
            </ha-icon-button>
          </div>
        </div>
      </div>
    `}firstUpdated(){this._forceFormat()}_forceFormat(){1===this.step&&this.value%1==.5&&(this.value-.5<this.min?this.value+=.5:this.value-=.5)}_increment(){if(this._forceFormat(),this.value===this.max)return this.value;this.value&&(this.value+=this.step),this._debouncedSet(this.value)}_decrement(){if(this._forceFormat(),this.value===this.min)return this.value;this.value-=this.step,this._debouncedSet(this.value)}static get styles(){return r`
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .temp-header {
        font-size: var(--mt-temp-header-font-size, 2em);
        color: var(--secondary-text-color);
        margin-bottom: var(--mt-temp-header-margin-bottom);
      }
      .control-center {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        width: auto;
        padding: 12px;
        flex-shrink: 0;
        overflow: visible;
      }

      #target-temperature {
        font-size: var(--mt-number-font-size, 4em);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #target-temperature .number {
        line-height: 1;
      }
      #target-temperature .unit {
        font-size: var(--mt-unit-font-size, 0.5em);
        line-height: 1;
      }

      ha-icon-button.up {
        margin-left: var(--mt-target-button-spacing, 2px);
      }

      ha-icon-button.down {
        margin-right: var(--mt-target-button-spacing, 2px);
      }

      ha-icon {
        margin-bottom: 6px;
      }
    `}};t([ot({type:Number})],_t.prototype,"value",void 0),t([ot({type:String})],_t.prototype,"units",void 0),t([ot({type:Number})],_t.prototype,"min",void 0),t([ot({type:Number})],_t.prototype,"max",void 0),t([ot({type:Number})],_t.prototype,"step",void 0),_t=t([et("custom-climate-control")],_t);let yt=class extends Y{render(){return N`
      <div class="wrapper">
        <div class="temp-header">Current</div>
        <div class="current-wrapper">
          <div class="number">${this.value}</div>
          <div class="unit">${this.units}</div>
        </div>
      </div>
    `}static get styles(){return r`
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .temp-header {
        font-size: var(--mt-temp-header-font-size, 2em);
        color: var(--secondary-text-color);
        margin-bottom: var(--mt-temp-header-margin-bottom);
      }
      .current-wrapper {
        display: flex;
        font-size: var(--mt-number-font-size, 4em);
        width: auto;
        padding: 12px;
        align-items: center;
        justify-content: center;
      }
      .current-wrapper .number {
        line-height: 1;
      }
      .current-wrapper .unit {
        font-size: var(--mt-unit-font-size, 0.5em);
        line-height: 1;
      }
    `}};t([ot({type:Number})],yt.prototype,"value",void 0),t([ot({type:String})],yt.prototype,"units",void 0),yt=t([et("current-temperature")],yt),console.info(`%c  minimalist-thermostat \n%c  ${gt("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"minimalist-thermostat",name:"Minimalist Thermostat",description:"A large-text Thermostat for Home Assistant's Lovelace UI."});let $t=class extends Y{static async getConfigElement(){return document.createElement("minimalist-thermostat-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(gt("common.invalid_configuration"));if(!t.entity||"climate"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the climate domain.");this.config=Object.assign({name:"Thermostat"},t)}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var o=e.get("hass");return!o||o.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){var t;if(!this.hass||!this.config)return N``;const e=this.hass.states[this.config.entity],i=null===(t=this.config)||void 0===t?void 0:t.name,o=null!==e.attributes.temperature&&Number.isFinite(Number(e.attributes.temperature))?e.attributes.temperature:e.attributes.min_temp,n=N`
        <custom-climate-control
          .value=${o}
          .units=${this.hass.config.unit_system.temperature}
          .min=${e.attributes.min_temp}
          .max=${e.attributes.max_temp}
          @change=${this._setTemperature}
          ></custom-climate-control>`,s=N`
        <current-temperature
          .value=${e.attributes.current_temperature}
          .units=${this.hass.config.unit_system.temperature}></current-temperature>`;return N`
      <ha-card
        .label=${"Thermostat: "+(this.config.entity||"No Entity Defined")}
      >
      <header>
        <div style="display:flex" class="clickable header-div" @click=${this._handleMoreInfo}>
          <h1 class="header-title">${i}</h1>
        </div>
        <ha-icon-button class="more-info" @click=${this._handleMoreInfo}>
          <ha-icon class="info-icon" icon="mdi:dots-vertical"></ha-icon>
        </ha-icon-button>
    </header>
      <section class="body">
        <div class="temp-container current">
          ${s}
        </div>
        <div class="temp-container target">
          ${n}
        </div>
      </section>
      <div class="modes">
      ${e.attributes.hvac_modes.map(t=>{let i;return t===e.state&&(i="active"),N`
        <div
          id=${t}
          class="mode-item ${i} ${t}"
          @click=${this._setMode}>

          <ha-icon id=${t} class="mode-icon" icon=${dt[t]}></ha-icon>
          ${ht[t]}
      </div>`})}
      </div>
      </ha-card>
    `}_handleMoreInfo(){var t;lt(this,"hass-more-info",{entityId:null===(t=this.config)||void 0===t?void 0:t.entity})}_setTemperature(t){var e,i;const o=t.detail.newValue;null===(e=this.hass)||void 0===e||e.callService("climate","set_temperature",{entity_id:null===(i=this.config)||void 0===i?void 0:i.entity,temperature:o})}_setMode(t){var e,i;const o=null===(e=this._card)||void 0===e?void 0:e.querySelectorAll(".mode-item");null==o||o.forEach(t=>{t.classList.remove("active")}),t.target.classList.add("active"),null===(i=this.hass)||void 0===i||i.callService("climate","set_hvac_mode",{entity_id:this.config.entity,hvac_mode:t.target.id})}static get styles(){return r`
    :host {
      font-family: Roboto, Noto, sans-serif;
    }

    ha-card {
      font-size: 1em;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    header {
      display: grid;
      grid-template-columns: 1fr 6fr 1fr;
      justify-items: center;
      margin-bottom: 36px;
    }

    .header-div{
      grid-column-start: 2;
      align-items: center;
      margin: auto;
    }

    .header-title{
      margin: 0;
      font-weight: normal;
      padding: 12px;
      line-height: 1;
      font-size: var(--mt-header-font-size, 24px);
    }


    .more-info{
      margin-left: auto;
      flex: 1;
    }

    ha-icon.info-icon{
      margin-bottom: 8px;
      color: var(--secondary-text-color)
    }

    ha-card h3{
      font-size: 3em;
    }

    .body{
      display: grid;
      /* grid-auto-flow: row; */
      grid-template-columns: 1fr 1fr;
      align-items: center;
      height: 100%;
      margin: auto;
      width: 100%;
    }
    @media screen and (max-width: 440px){
      .body{
        grid-template-columns: 1fr;
      }
    }

    .modes {
      display: grid;
      grid-auto-flow: column;
      /* grid-template-columns: min-content; */
      padding: 4px;
      gap: 2px;
      margin-top: auto;
    }

    /* Set colors for each available mode */
    .auto,
    .heat_cool {
      --mode-color: var(--state-climate-auto-color);
    }

    .cool {
      --mode-color: var(--state-climate-cool-color);
    }
    .heat {
      --mode-color: var(--state-climate-heat-color);
    }
    .eco {
      --mode-color: var(--state-climate-eco-color);
    }
    .dry {
      --mode-color: var(--state-climate-dry-color);
    }
    .manual {
      --mode-color: var(--state-climate-manual-color);
    }
    .fan_only {
      --mode-color: var(--state-climate-fan_only-color);
    }
    .idle {
      --mode-color: var(--state-climate-idle-color);
    }
    .off {
      --mode-color: var(--state-climate-off-color);
    }
    .unknown-mode {
      --mode-color: var(--state-climate-unknown-color);
    }
    .mode-item {
      font-size: 1em;
      background-color: var(--secondary-background-color);
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      text-align: center;
      align-items: center;
      justify-content: center;
      min-height: 24px;
      padding: 6px 0px;
      flex: 1;
      border-radius: 8px;
      color: var(--secondary-text-color);
      cursor: pointer;
    }
    .mode-item:hover {
      color: var(--primary-text-color);

    }
    .mode-item.active {
      color: var(--primary-text-color)
    }

    .mode-item.active {
      background-color: var(--mode-color)
    }

    .clickable {
      cursor: pointer;
    }

    .mode-icon {
      pointer-events: none;
    }
    `}};t([ot({attribute:!1})],$t.prototype,"hass",void 0),t([nt()],$t.prototype,"config",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,e){return(({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(s.finisher=function(e){t(e,o)}),s}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}})({descriptor:i=>{const o={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;o.get=function(){var i,o;return void 0===this[e]&&(this[e]=null!==(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}("ha-card")],$t.prototype,"_card",void 0),$t=t([et("minimalist-thermostat")],$t);export{$t as BoilerplateCard};
