/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const a=window,l=a.trustedTypes,c=l?l.emptyScript:"",h=a.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u},v="finalized";let $=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=p){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:d).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:d;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;$[v]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:$}),(null!==(o=a.reactiveElementVersions)&&void 0!==o?o:a.reactiveElementVersions=[]).push("1.6.3");const y=window,f=y.trustedTypes,m=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,_="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,b="?"+A,E=`<${b}>`,k=document,w=()=>k.createComment(""),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,C="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,N=/>/g,O=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,j=/"/g,H=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),M=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),D=new WeakMap,I=k.createTreeWalker(k,129,null,!1);function L(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==m?m.createHTML(e):e}const B=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=P;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===P?"!--"===l[1]?o=U:void 0!==l[1]?o=N:void 0!==l[2]?(H.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=O):void 0!==l[3]&&(o=O):o===O?">"===l[0]?(o=null!=n?n:P,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?O:'"'===l[3]?j:T):o===j||o===T?o=O:o===U||o===N?o=P:(o=O,n=void 0);const d=o===O&&t[e+1].startsWith("/>")?" ":"";r+=o===P?i+E:c>=0?(s.push(a),i.slice(0,c)+_+i.slice(c)+A+d):i+A+(-2===c?(s.push(void 0),e):d)}return[L(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class V{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,c]=B(t,e);if(this.el=V.createElement(l,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(_)||e.startsWith(A)){const i=c[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+_).split(A),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?G:"@"===e[1]?Q:K})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(H.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),I.nextNode(),a.push({type:2,index:++n});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===b)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)a.push({type:7,index:n}),t+=A.length-1}n++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var n,r,o,a;if(e===M)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const c=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,s)),e}class F{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);I.currentNode=n;let r=I.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new q(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new X(r,this,t)),this._$AV.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(r=I.nextNode(),o++)}return I.currentNode=k,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),S(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==M&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>x(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&S(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(L(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new F(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new V(t)),e}T(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new q(this.k(w()),this.k(w()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=W(this,t,e,0),r=!S(t)||t!==this._$AH&&t!==M,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=W(this,s[i+o],e,o),a===M&&(a=this._$AH[o]),r||(r=!S(a)||a!==this._$AH[o]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const Z=f?f.emptyScript:"";class G extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Q extends K{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:z)===M)return;const s=this._$AH,n=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==z&&(s===z||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const Y=y.litHtmlPolyfillSupport;null==Y||Y(V,q),(null!==(g=y.litHtmlVersions)&&void 0!==g?g:y.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;class it extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new q(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):nt(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var ot;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements;var at,lt,ct=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)})`
  :host {
    display: block;
  }

  .title {
    font-size: var(--keycloak-signature-title-font-size, 2rem);
    font-weight: var(--keycloak-signature-title-font-weight, bold);
    color: var(--keycloak-signature-title-color, black);
  }

  .password {
    font-size: var(--keycloak-signature-password-font-size, 1rem);
    font-weight: var(--keycloak-signature-password-font-weight, normal);
    color: var(--keycloak-signature-password-color, black);
  }

  .accept-button {
    font-size: var(--keycloak-signature-accept-button-font-size, 1rem);
    font-weight: var(--keycloak-signature-accept-button-font-weight, normal);
    color: var(--keycloak-signature-accept-button-color, black);
    background-color: var(
      --keycloak-signature-accept-button-background-color,
      white
    );
    border: var(--keycloak-signature-accept-button-border, 0.25rem solid green);
    padding: var(--keycloak-signature-accept-button-padding, 0.25rem 0.5rem);
    text-align: var(--keycloak-signature-accept-button-text-align, center);
    text-decoration: var(
      --keycloak-signature-accept-button-text-decoration,
      none
    );
    display: var(--keycloak-signature-accept-button-display, inline-block);
  }

  .reject-button {
    font-size: var(--keycloak-signature-reject-button-font-size, 1rem);
    font-weight: var(--keycloak-signature-reject-button-font-weight, normal);
    color: var(--keycloak-signature-reject-button-color, black);
    background-color: var(
      --keycloak-signature-reject-button-background-color,
      white
    );
    border: var(--keycloak-signature-reject-button-border, 0.25rem solid red);
    padding: var(--keycloak-signature-reject-button-padding, 0.25rem 0.5rem);
    text-align: var(--keycloak-signature-reject-button-text-align, center);
    text-decoration: var(
      --keycloak-signature-reject-button-text-decoration,
      none
    );
    display: var(--keycloak-signature-reject-button-display, inline-block);
  }

  .message-text {
    color: var(--keycloak-signature-message-text-color, red);
    font-size: var(--keycloak-signature-message-font-size, 1rem);
  }
`,ht=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};!function(t){t.failed="failed",t.signed="signed",t.rejected="rejected"}(at||(at={})),function(t){t.credentialsWrong="credentials-wrong",t.maxNrOfAuthAttemptsExceeded="max-nr-of-auth-attempts-exceeded",t.credentialsEmpty="credentials-empty",t.unexpectedError="unexpected-error"}(lt||(lt={}));let dt=class extends it{constructor(){super(...arguments),this.signEndpoint="/realms/master/signature/sign",this.titleText="Keycloak Signature Extension",this.acceptText="Accept",this.rejectText="Reject",this.maxNrOfAuthAttempts=3,this.attemptIndex=0,this.terminatingEventSent=!1}render(){return this.payload?R`
      <div class="wrapper">
        ${this.titleText?R`<h1 class="title" part="title">${this.titleText}</h1>`:z}
        <slot><p>Please provide your credentials below</p></slot>
        <form @submit="${this.handleFormSubmit}">
          <label class="password" part="password"
            >Password <br />
            <br />
            <input type="password" id="password" name="password" /><br /><br />
          </label>
          <button class="accept-button" part="accept-button" type="submit">
            ${this.acceptText}
          </button>
          <button
            class="reject-button"
            part="reject-button"
            @click="${this.handleRejectButton}"
            type="reset"
          >
            ${this.rejectText}
          </button>
        </form>
      </div>
    `:(console.warn("No valid payload provided."),z)}async handleFormSubmit(t){t.preventDefault();const e=t.target,i=new FormData(e).get("password");if(!this.terminatingEventSent)if(this.attemptIndex>=this.maxNrOfAuthAttempts)this.maxNrOfAuthAttemptsExceeded(e);else if(i)try{const t=await this.makeSignRequest(i);if(t.ok){const e=await t.json();this.attemptIndex=this.maxNrOfAuthAttempts,this.createAndDispatchAcceptEvent(e)}else 403===t.status?(console.warn("Authentication failed (403).",this.attemptIndex),this.handleWrongPasswordEntered()):(console.error("Unexpected failure response received. "),this.handleUnexpectedError())}catch(t){console.error("Error:",t),this.handleUnexpectedError()}finally{e.reset()}else this.noPasswordEntered(e)}makeSignRequest(t){const e=this.signEndpoint,i={payload:this.payload,credentials:{password:t}};return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})}handleRejectButton(){this.terminatingEventSent||(this.terminatingEventSent=!0,this.dispatchEvent(new CustomEvent(at.rejected)))}noPasswordEntered(t){console.error("No password given"),this.createAndDispatchFailureEvent(lt.credentialsEmpty),t.reset()}maxNrOfAuthAttemptsExceeded(t){this.terminatingEventSent=!0,this.createAndDispatchFailureEvent(lt.maxNrOfAuthAttemptsExceeded),t.reset()}handleWrongPasswordEntered(){this.attemptIndex++,this.createAndDispatchFailureEvent(lt.credentialsWrong)}handleUnexpectedError(){this.terminatingEventSent=!0,this.createAndDispatchFailureEvent(lt.unexpectedError)}createAndDispatchAcceptEvent({signedPayload:t}){this.terminatingEventSent=!0,this.dispatchEvent(new CustomEvent(at.signed,{detail:{signedPayload:t}}))}createAndDispatchFailureEvent(t){this.dispatchEvent(new CustomEvent(at.failed,{detail:{reason:t}}))}};dt.styles=ct,ht([rt()],dt.prototype,"signEndpoint",void 0),ht([rt({attribute:"payload",type:String})],dt.prototype,"payload",void 0),ht([rt({attribute:"title",type:String})],dt.prototype,"titleText",void 0),ht([rt({attribute:"accept",type:String})],dt.prototype,"acceptText",void 0),ht([rt({attribute:"reject",type:String})],dt.prototype,"rejectText",void 0),ht([rt({attribute:"max-nr-of-auth-attempts",type:Number})],dt.prototype,"maxNrOfAuthAttempts",void 0),dt=ht([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e))("keycloak-signature")],dt);export{dt as KeycloakSignature};
