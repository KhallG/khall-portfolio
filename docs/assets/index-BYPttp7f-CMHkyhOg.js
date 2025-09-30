import{S as Hr,c as Br}from"./index-B7JP-peH.js";import{n as kv}from"./hls-Bm3F2dIq-B-FraBU5.js";import{_ as wv,Z as sn}from"./mixin-D3UDm--6-zaESpKYn.js";var Sv=Object.create,bh=Object.defineProperty,Iv=Object.getOwnPropertyDescriptor,Rv=Object.getOwnPropertyNames,Dv=Object.getPrototypeOf,Cv=Object.prototype.hasOwnProperty,fh=function(e,t){return function(){return e&&(t=e(e=0)),t}},He=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},Lv=function(e,t,a,i){if(t&&typeof t=="object"||typeof t=="function")for(var r=Rv(t),n=0,s=r.length,l;n<s;n++)l=r[n],!Cv.call(e,l)&&l!==a&&bh(e,l,{get:(function(o){return t[o]}).bind(null,l),enumerable:!(i=Iv(t,l))||i.enumerable});return e},Ze=function(e,t,a){return a=e!=null?Sv(Dv(e)):{},Lv(!e||!e.__esModule?bh(a,"default",{value:e,enumerable:!0}):a,e)},bt=He(function(e,t){var a;typeof window<"u"?a=window:typeof global<"u"?a=global:typeof self<"u"?a=self:a={},t.exports=a});function Qa(e,t){return t!=null&&typeof Symbol<"u"&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):Qa(e,t)}var Za=fh(function(){Za()});function gh(e){"@swc/helpers - typeof";return e&&typeof Symbol<"u"&&e.constructor===Symbol?"symbol":typeof e}var _h=fh(function(){}),yh=He(function(e,t){var a=Array.prototype.slice;t.exports=i;function i(r,n){for(("length"in r)||(r=[r]),r=a.call(r);r.length;){var s=r.shift(),l=n(s);if(l)return l;s.childNodes&&s.childNodes.length&&(r=a.call(s.childNodes).concat(r))}}}),Mv=He(function(e,t){Za(),t.exports=a;function a(i,r){if(!Qa(this,a))return new a(i,r);this.data=i,this.nodeValue=i,this.length=i.length,this.ownerDocument=r||null}a.prototype.nodeType=8,a.prototype.nodeName="#comment",a.prototype.toString=function(){return"[object Comment]"}}),Ov=He(function(e,t){Za(),t.exports=a;function a(i,r){if(!Qa(this,a))return new a(i);this.data=i||"",this.length=this.data.length,this.ownerDocument=r||null}a.prototype.type="DOMTextNode",a.prototype.nodeType=3,a.prototype.nodeName="#text",a.prototype.toString=function(){return this.data},a.prototype.replaceData=function(i,r,n){var s=this.data,l=s.substring(0,i),o=s.substring(i+r,s.length);this.data=l+n+o,this.length=this.data.length}}),Th=He(function(e,t){t.exports=a;function a(i){var r=this,n=i.type;i.target||(i.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(l){i.currentTarget=r,typeof l=="function"?l(i):l.handleEvent(i)});r.parentNode&&r.parentNode.dispatchEvent(i)}}),Ah=He(function(e,t){t.exports=a;function a(i,r){var n=this;n.listeners||(n.listeners={}),n.listeners[i]||(n.listeners[i]=[]),n.listeners[i].indexOf(r)===-1&&n.listeners[i].push(r)}}),kh=He(function(e,t){t.exports=a;function a(i,r){var n=this;if(n.listeners&&n.listeners[i]){var s=n.listeners[i],l=s.indexOf(r);l!==-1&&s.splice(l,1)}}}),Nv=He(function(e,t){_h(),t.exports=i;var a=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function i(m){switch(m.nodeType){case 3:return h(m.data);case 8:return"<!--"+m.data+"-->";default:return r(m)}}function r(m){var c=[],v=m.tagName;return m.namespaceURI==="http://www.w3.org/1999/xhtml"&&(v=v.toLowerCase()),c.push("<"+v+d(m)+l(m)),a.indexOf(v)>-1?c.push(" />"):(c.push(">"),m.childNodes.length?c.push.apply(c,m.childNodes.map(i)):m.textContent||m.innerText?c.push(h(m.textContent||m.innerText)):m.innerHTML&&c.push(m.innerHTML),c.push("</"+v+">")),c.join("")}function n(m,c){var v=gh(m[c]);return c==="style"&&Object.keys(m.style).length>0?!0:m.hasOwnProperty(c)&&(v==="string"||v==="boolean"||v==="number")&&c!=="nodeName"&&c!=="className"&&c!=="tagName"&&c!=="textContent"&&c!=="innerText"&&c!=="namespaceURI"&&c!=="innerHTML"}function s(m){if(typeof m=="string")return m;var c="";return Object.keys(m).forEach(function(v){var _=m[v];v=v.replace(/[A-Z]/g,function(g){return"-"+g.toLowerCase()}),c+=v+":"+_+";"}),c}function l(m){var c=m.dataset,v=[];for(var _ in c)v.push({name:"data-"+_,value:c[_]});return v.length?o(v):""}function o(m){var c=[];return m.forEach(function(v){var _=v.name,g=v.value;_==="style"&&(g=s(g)),c.push(_+'="'+p(g)+'"')}),c.length?" "+c.join(" "):""}function d(m){var c=[];for(var v in m)n(m,v)&&c.push({name:v,value:m[v]});for(var _ in m._attributes)for(var g in m._attributes[_]){var y=m._attributes[_][g],T=(y.prefix?y.prefix+":":"")+g;c.push({name:T,value:y.value})}return m.className&&c.push({name:"class",value:m.className}),c.length?o(c):""}function h(m){var c="";return typeof m=="string"?c=m:m&&(c=m.toString()),c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p(m){return h(m).replace(/"/g,"&quot;")}}),wh=He(function(e,t){Za();var a=yh(),i=Th(),r=Ah(),n=kh(),s=Nv(),l="http://www.w3.org/1999/xhtml";t.exports=o;function o(d,h,p){if(!Qa(this,o))return new o(d);var m=p===void 0?l:p||null;this.tagName=m===l?String(d).toUpperCase():d,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=h||null,this.namespaceURI=m,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}o.prototype.type="DOMElement",o.prototype.nodeType=1,o.prototype.appendChild=function(d){return d.parentNode&&d.parentNode.removeChild(d),this.childNodes.push(d),d.parentNode=this,d},o.prototype.replaceChild=function(d,h){d.parentNode&&d.parentNode.removeChild(d);var p=this.childNodes.indexOf(h);return h.parentNode=null,this.childNodes[p]=d,d.parentNode=this,h},o.prototype.removeChild=function(d){var h=this.childNodes.indexOf(d);return this.childNodes.splice(h,1),d.parentNode=null,d},o.prototype.insertBefore=function(d,h){d.parentNode&&d.parentNode.removeChild(d);var p=h==null?-1:this.childNodes.indexOf(h);return p>-1?this.childNodes.splice(p,0,d):this.childNodes.push(d),d.parentNode=this,d},o.prototype.setAttributeNS=function(d,h,p){var m=null,c=h,v=h.indexOf(":");if(v>-1&&(m=h.substr(0,v),c=h.substr(v+1)),this.tagName==="INPUT"&&h==="type")this.type=p;else{var _=this._attributes[d]||(this._attributes[d]={});_[c]={value:p,prefix:m}}},o.prototype.getAttributeNS=function(d,h){var p=this._attributes[d],m=p&&p[h]&&p[h].value;return this.tagName==="INPUT"&&h==="type"?this.type:typeof m!="string"?null:m},o.prototype.removeAttributeNS=function(d,h){var p=this._attributes[d];p&&delete p[h]},o.prototype.hasAttributeNS=function(d,h){var p=this._attributes[d];return!!p&&h in p},o.prototype.setAttribute=function(d,h){return this.setAttributeNS(null,d,h)},o.prototype.getAttribute=function(d){return this.getAttributeNS(null,d)},o.prototype.removeAttribute=function(d){return this.removeAttributeNS(null,d)},o.prototype.hasAttribute=function(d){return this.hasAttributeNS(null,d)},o.prototype.removeEventListener=n,o.prototype.addEventListener=r,o.prototype.dispatchEvent=i,o.prototype.focus=function(){},o.prototype.toString=function(){return s(this)},o.prototype.getElementsByClassName=function(d){var h=d.split(" "),p=[];return a(this,function(m){if(m.nodeType===1){var c=m.className||"",v=c.split(" ");h.every(function(_){return v.indexOf(_)!==-1})&&p.push(m)}}),p},o.prototype.getElementsByTagName=function(d){d=d.toLowerCase();var h=[];return a(this.childNodes,function(p){p.nodeType===1&&(d==="*"||p.tagName.toLowerCase()===d)&&h.push(p)}),h},o.prototype.contains=function(d){return a(this,function(h){return d===h})||!1}}),xv=He(function(e,t){Za();var a=wh();t.exports=i;function i(r){if(!Qa(this,i))return new i;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}i.prototype.type="DocumentFragment",i.prototype.nodeType=11,i.prototype.nodeName="#document-fragment",i.prototype.appendChild=a.prototype.appendChild,i.prototype.replaceChild=a.prototype.replaceChild,i.prototype.removeChild=a.prototype.removeChild,i.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),Pv=He(function(e,t){t.exports=a;function a(i){}a.prototype.initEvent=function(i,r,n){this.type=i,this.bubbles=r,this.cancelable=n},a.prototype.preventDefault=function(){}}),Uv=He(function(e,t){Za();var a=yh(),i=Mv(),r=Ov(),n=wh(),s=xv(),l=Pv(),o=Th(),d=Ah(),h=kh();t.exports=p;function p(){if(!Qa(this,p))return new p;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var m=p.prototype;m.createTextNode=function(c){return new r(c,this)},m.createElementNS=function(c,v){var _=c===null?null:String(c);return new n(v,this,_)},m.createElement=function(c){return new n(c,this)},m.createDocumentFragment=function(){return new s(this)},m.createEvent=function(c){return new l(c)},m.createComment=function(c){return new i(c,this)},m.getElementById=function(c){c=String(c);var v=a(this.childNodes,function(_){if(String(_.id)===c)return _});return v||null},m.getElementsByClassName=n.prototype.getElementsByClassName,m.getElementsByTagName=n.prototype.getElementsByTagName,m.contains=n.prototype.contains,m.removeEventListener=h,m.addEventListener=d,m.dispatchEvent=o}),Hv=He(function(e,t){var a=Uv();t.exports=new a}),Sh=He(function(e,t){var a=typeof global<"u"?global:typeof window<"u"?window:{},i=Hv(),r;typeof document<"u"?r=document:(r=a["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=a["__GLOBAL_DOCUMENT_CACHE@4"]=i)),t.exports=r});function Bv(e){if(Array.isArray(e))return e}function Wv(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var i=[],r=!0,n=!1,s,l;try{for(a=a.call(e);!(r=(s=a.next()).done)&&(i.push(s.value),!(t&&i.length===t));r=!0);}catch(o){n=!0,l=o}finally{try{!r&&a.return!=null&&a.return()}finally{if(n)throw l}}return i}}function Vv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yo(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}function Ih(e,t){if(e){if(typeof e=="string")return Yo(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(a);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Yo(e,t)}}function Xt(e,t){return Bv(e)||Wv(e,t)||Ih(e,t)||Vv()}var Rr=Ze(bt()),Bu=Ze(bt()),Fv=Ze(bt()),$v={now:function(){var e=Fv.default.performance,t=e&&e.timing,a=t&&t.navigationStart,i=typeof a=="number"&&typeof e.now=="function"?a+e.now():Date.now();return Math.round(i)}},_e=$v,Wr=function(){var e,t,a;if(typeof((e=Bu.default.crypto)===null||e===void 0?void 0:e.getRandomValues)=="function"){a=new Uint8Array(32),Bu.default.crypto.getRandomValues(a);for(var i=0;i<32;i++)a[i]=a[i]%16}else{a=[];for(var r=0;r<32;r++)a[r]=Math.random()*16|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(o){var d=o==="x"?a[n]:a[n]&3|8;return n++,d.toString(16)});var s=_e.now(),l=s?.toString(16).substring(3);return l?t.substring(0,28)+l:t},Rh=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},lt=function(e){if(e&&typeof e.nodeName<"u")return e.muxId||(e.muxId=Rh()),e.muxId;var t;try{t=document.querySelector(e)}catch{}return t&&!t.muxId&&(t.muxId=e),t?.muxId||e},Rs=function(e){var t;e&&typeof e.nodeName<"u"?(t=e,e=lt(t)):t=document.querySelector(e);var a=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,a]};function Kv(e){if(Array.isArray(e))return Yo(e)}function qv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dt(e){return Kv(e)||qv(e)||Ih(e)||Yv()}var xa={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},Gv=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,a,i,r,n,s,l=[console,e],o=(a=console.trace).bind.apply(a,dt(l)),d=(i=console.info).bind.apply(i,dt(l)),h=(r=console.debug).bind.apply(r,dt(l)),p=(n=console.warn).bind.apply(n,dt(l)),m=(s=console.error).bind.apply(s,dt(l)),c=t;return{trace:function(){for(var v=arguments.length,_=new Array(v),g=0;g<v;g++)_[g]=arguments[g];if(!(c>xa.TRACE))return o.apply(void 0,dt(_))},debug:function(){for(var v=arguments.length,_=new Array(v),g=0;g<v;g++)_[g]=arguments[g];if(!(c>xa.DEBUG))return h.apply(void 0,dt(_))},info:function(){for(var v=arguments.length,_=new Array(v),g=0;g<v;g++)_[g]=arguments[g];if(!(c>xa.INFO))return d.apply(void 0,dt(_))},warn:function(){for(var v=arguments.length,_=new Array(v),g=0;g<v;g++)_[g]=arguments[g];if(!(c>xa.WARN))return p.apply(void 0,dt(_))},error:function(){for(var v=arguments.length,_=new Array(v),g=0;g<v;g++)_[g]=arguments[g];if(!(c>xa.ERROR))return m.apply(void 0,dt(_))},get level(){return c},set level(v){v!==this.level&&(c=v??t)}}},ee=Gv("[mux]"),yo=Ze(bt());function Go(){var e=yo.default.doNotTrack||yo.default.navigator&&yo.default.navigator.doNotTrack;return e==="1"}function x(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}Za();function Ie(e,t){if(!Qa(e,t))throw new TypeError("Cannot call a class as a function")}function jv(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Wt(e,t,a){return t&&jv(e.prototype,t),e}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function xi(e){return xi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},xi(e)}function Qv(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=xi(e),e!==null););return e}function An(e,t,a){return typeof Reflect<"u"&&Reflect.get?An=Reflect.get:An=function(i,r,n){var s=Qv(i,r);if(s){var l=Object.getOwnPropertyDescriptor(s,r);return l.get?l.get.call(n||i):l.value}},An(e,t,a||e)}function jo(e,t){return jo=Object.setPrototypeOf||function(a,i){return a.__proto__=i,a},jo(e,t)}function Zv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&jo(e,t)}function zv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}_h();function Xv(e,t){return t&&(gh(t)==="object"||typeof t=="function")?t:x(e)}function Jv(e){var t=zv();return function(){var a=xi(e),i;if(t){var r=xi(this).constructor;i=Reflect.construct(a,arguments,r)}else i=a.apply(this,arguments);return Xv(this,i)}}var pt=function(e){return Vr(e)[0]},Vr=function(e){if(typeof e!="string"||e==="")return["localhost"];var t=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,a=e.match(t)||[],i=a[4],r;return i&&(r=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,r]},To=Ze(bt()),eE={exists:function(){var e=To.default.performance,t=e&&e.timing;return t!==void 0},domContentLoadedEventEnd:function(){var e=To.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=To.default.performance,t=e&&e.timing;return t&&t.navigationStart}},Ds=eE;function be(e,t,a){a=a===void 0?1:a,e[t]=e[t]||0,e[t]+=a}function Cs(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{},i=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),i.forEach(function(r){k(e,r,a[r])})}return e}function tE(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a.push.apply(a,i)}return a}function nd(e,t){return t=t??{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tE(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}),e}var aE=["x-cdn","content-type"],Dh=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],iE=aE.concat(Dh);function sd(e){e=e||"";var t={},a=e.trim().split(/[\r\n]+/);return a.forEach(function(i){if(i){var r=i.split(": "),n=r.shift();n&&(iE.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(t[n]=r.join(": "))}}),t}function Ls(e){if(e){var t=Dh.find(function(a){return e[a]!==void 0});return t?e[t]:void 0}}var rE=function(e){var t={};for(var a in e){var i=e[a],r=i["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=i["DATA-ID"].replace("io.litix.data.","");t[n]=i.VALUE}}return t},Ch=rE,on=function(e){if(!e)return{};var t=Ds.navigationStart(),a=e.loading,i=a?a.start:e.trequest,r=a?a.first:e.tfirst,n=a?a.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+i),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ji=function(e){if(!(!e||typeof e.getAllResponseHeaders!="function"))return sd(e.getAllResponseHeaders())},nE=function(e,t,a){var i=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(g){var y=parseInt(i.version),T;return y===1&&g.programDateTime!==null&&(T=g.programDateTime),y===0&&g.pdt!==null&&(T=g.pdt),T};if(!Ds.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var l=function(g,y){return e.emit(t,g,y)},o=function(g,y){var T=y.levels,E=y.audioTracks,w=y.url,C=y.stats,N=y.networkDetails,W=y.sessionData,Y={},X={};T.forEach(function(ce,Ne){Y[Ne]={width:ce.width,height:ce.height,bitrate:ce.bitrate,attrs:ce.attrs}}),E.forEach(function(ce,Ne){X[Ne]={name:ce.name,language:ce.lang,bitrate:ce.bitrate}});var V=on(C),P=V.bytesLoaded,Le=V.requestStart,Be=V.responseStart,We=V.responseEnd;l("requestcompleted",nd(Cs({},Ch(W)),{request_event_type:g,request_bytes_loaded:P,request_start:Le,request_response_start:Be,request_response_end:We,request_type:"manifest",request_hostname:pt(w),request_response_headers:ji(N),request_rendition_lists:{media:Y,audio:X,video:{}}}))};a.on(i.Events.MANIFEST_LOADED,o);var d=function(g,y){var T=y.details,E=y.level,w=y.networkDetails,C=y.stats,N=on(C),W=N.bytesLoaded,Y=N.requestStart,X=N.responseStart,V=N.responseEnd,P=T.fragments[T.fragments.length-1],Le=s(P)+n(P.duration);l("requestcompleted",{request_event_type:g,request_bytes_loaded:W,request_start:Y,request_response_start:X,request_response_end:V,request_current_level:E,request_type:"manifest",request_hostname:pt(T.url),request_response_headers:ji(w),video_holdback:T.holdBack&&n(T.holdBack),video_part_holdback:T.partHoldBack&&n(T.partHoldBack),video_part_target_duration:T.partTarget&&n(T.partTarget),video_target_duration:T.targetduration&&n(T.targetduration),video_source_is_live:T.live,player_manifest_newest_program_time:isNaN(Le)?void 0:Le})};a.on(i.Events.LEVEL_LOADED,d);var h=function(g,y){var T=y.details,E=y.networkDetails,w=y.stats,C=on(w),N=C.bytesLoaded,W=C.requestStart,Y=C.responseStart,X=C.responseEnd;l("requestcompleted",{request_event_type:g,request_bytes_loaded:N,request_start:W,request_response_start:Y,request_response_end:X,request_type:"manifest",request_hostname:pt(T.url),request_response_headers:ji(E)})};a.on(i.Events.AUDIO_TRACK_LOADED,h);var p=function(g,y){var T=y.stats,E=y.networkDetails,w=y.frag;T=T||w.stats;var C=on(T),N=C.bytesLoaded,W=C.requestStart,Y=C.responseStart,X=C.responseEnd,V=E?ji(E):void 0,P={request_event_type:g,request_bytes_loaded:N,request_start:W,request_response_start:Y,request_response_end:X,request_hostname:E?pt(E.responseURL):void 0,request_id:V?Ls(V):void 0,request_response_headers:V,request_media_duration:w.duration,request_url:E?.responseURL};w.type==="main"?(P.request_type="media",P.request_current_level=w.level,P.request_video_width=(a.levels[w.level]||{}).width,P.request_video_height=(a.levels[w.level]||{}).height,P.request_labeled_bitrate=(a.levels[w.level]||{}).bitrate):P.request_type=w.type,l("requestcompleted",P)};a.on(i.Events.FRAG_LOADED,p);var m=function(g,y){var T=y.frag,E=T.start,w=s(T),C={currentFragmentPDT:w,currentFragmentStart:n(E)};l("fragmentchange",C)};a.on(i.Events.FRAG_CHANGED,m);var c=function(g,y){var T=y.type,E=y.details,w=y.response,C=y.fatal,N=y.frag,W=y.networkDetails,Y=N?.url||y.url||"",X=W?ji(W):void 0;if((E===i.ErrorDetails.MANIFEST_LOAD_ERROR||E===i.ErrorDetails.MANIFEST_LOAD_TIMEOUT||E===i.ErrorDetails.FRAG_LOAD_ERROR||E===i.ErrorDetails.FRAG_LOAD_TIMEOUT||E===i.ErrorDetails.LEVEL_LOAD_ERROR||E===i.ErrorDetails.LEVEL_LOAD_TIMEOUT||E===i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||E===i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||E===i.ErrorDetails.SUBTITLE_LOAD_ERROR||E===i.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||E===i.ErrorDetails.KEY_LOAD_ERROR||E===i.ErrorDetails.KEY_LOAD_TIMEOUT)&&l("requestfailed",{request_error:E,request_url:Y,request_hostname:pt(Y),request_id:X?Ls(X):void 0,request_type:E===i.ErrorDetails.FRAG_LOAD_ERROR||E===i.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":E===i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||E===i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":E===i.ErrorDetails.SUBTITLE_LOAD_ERROR||E===i.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":E===i.ErrorDetails.KEY_LOAD_ERROR||E===i.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:w?.code,request_error_text:w?.text}),C){var V,P="".concat(Y?"url: ".concat(Y,`
`):"")+"".concat(w&&(w.code||w.text)?"response: ".concat(w.code,", ").concat(w.text,`
`):"")+"".concat(y.reason?"failure reason: ".concat(y.reason,`
`):"")+"".concat(y.level?"level: ".concat(y.level,`
`):"")+"".concat(y.parent?"parent stream controller: ".concat(y.parent,`
`):"")+"".concat(y.buffer?"buffer length: ".concat(y.buffer,`
`):"")+"".concat(y.error?"error: ".concat(y.error,`
`):"")+"".concat(y.event?"event: ".concat(y.event,`
`):"")+"".concat(y.err?"error message: ".concat((V=y.err)===null||V===void 0?void 0:V.message,`
`):"");l("error",{player_error_code:T,player_error_message:E,player_error_context:P})}};a.on(i.Events.ERROR,c);var v=function(g,y){var T=y.frag,E=T&&T._url||"";l("requestcanceled",{request_event_type:g,request_url:E,request_type:"media",request_hostname:pt(E)})};a.on(i.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var _=function(g,y){var T=y.level,E=a.levels[T];if(E&&E.attrs&&E.attrs.BANDWIDTH){var w=E.attrs.BANDWIDTH,C,N=parseFloat(E.attrs["FRAME-RATE"]);isNaN(N)||(C=N),w?l("renditionchange",{video_source_fps:C,video_source_bitrate:w,video_source_width:E.width,video_source_height:E.height,video_source_rendition_name:E.name,video_source_codec:E?.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};a.on(i.Events.LEVEL_SWITCHED,_),a._stopMuxMonitor=function(){a.off(i.Events.MANIFEST_LOADED,o),a.off(i.Events.LEVEL_LOADED,d),a.off(i.Events.AUDIO_TRACK_LOADED,h),a.off(i.Events.FRAG_LOADED,p),a.off(i.Events.FRAG_CHANGED,m),a.off(i.Events.ERROR,c),a.off(i.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),a.off(i.Events.LEVEL_SWITCHED,_),a.off(i.Events.DESTROYING,a._stopMuxMonitor),delete a._stopMuxMonitor},a.on(i.Events.DESTROYING,a._stopMuxMonitor)},sE=function(e){e&&typeof e._stopMuxMonitor=="function"&&e._stopMuxMonitor()},Wu=function(e,t){if(!e||!e.requestEndDate)return{};var a=pt(e.url),i=e.url,r=e.bytesLoaded,n=new Date(e.requestStartDate).getTime(),s=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),o=isNaN(e.duration)?0:e.duration,d=typeof t.getMetricsFor=="function"?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType),h;d.length>0&&(h=sd(d[d.length-1]._responseHeaders||""));var p=h?Ls(h):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:l,requestBytesLoaded:r,requestResponseHeaders:h,requestMediaDuration:o,requestHostname:a,requestUrl:i,requestId:p}},oE=function(e,t){var a=t.getQualityFor(e),i=t.getCurrentTrackFor(e).bitrateList;return i?{currentLevel:a,renditionWidth:i[a].width||null,renditionHeight:i[a].height||null,renditionBitrate:i[a].bandwidth}:{}},lE=function(e){var t;return(t=e.match(/.*codecs\*?="(.*)"/))===null||t===void 0?void 0:t[1]},dE=function(e){try{var t,a,i=(a=e.getVersion)===null||a===void 0||(t=a.call(e))===null||t===void 0?void 0:t.split(".").map(function(r){return parseInt(r)})[0];return i}catch{return!1}},uE=function(e,t,a){var i=e.log;if(!a||!a.on){i.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=dE(a),n=function(T,E){return e.emit(t,T,E)},s=function(T){var E=T.type,w=T.data,C=(w||{}).url;n("requestcompleted",{request_event_type:E,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:pt(C),request_url:C})};a.on("manifestLoaded",s);var l={},o=function(T){if(typeof T.getRequests!="function")return null;var E=T.getRequests({state:"executed"});return E.length===0?null:E[E.length-1]},d=function(T){var E=T.type,w=T.fragmentModel,C=T.chunk,N=o(w);h({type:E,request:N,chunk:C})},h=function(T){var E=T.type,w=T.chunk,C=T.request,N=(w||{}).mediaInfo,W=N||{},Y=W.type,X=W.bitrateList;X=X||[];var V={};X.forEach(function(Ve,Te){V[Te]={},V[Te].width=Ve.width,V[Te].height=Ve.height,V[Te].bitrate=Ve.bandwidth,V[Te].attrs={}}),Y==="video"?l.video=V:Y==="audio"?l.audio=V:l.media=V;var P=Wu(C,a),Le=P.requestStart,Be=P.requestResponseStart,We=P.requestResponseEnd,ce=P.requestResponseHeaders,Ne=P.requestMediaDuration,ft=P.requestHostname,xe=P.requestUrl,nt=P.requestId;n("requestcompleted",{request_event_type:E,request_start:Le,request_response_start:Be,request_response_end:We,request_bytes_loaded:-1,request_type:Y+"_init",request_response_headers:ce,request_hostname:ft,request_id:nt,request_url:xe,request_media_duration:Ne,request_rendition_lists:l})};r>=4?a.on("initFragmentLoaded",h):a.on("initFragmentLoaded",d);var p=function(T){var E=T.type,w=T.fragmentModel,C=T.chunk,N=o(w);m({type:E,request:N,chunk:C})},m=function(T){var E=T.type,w=T.chunk,C=T.request,N=w||{},W=N.mediaInfo,Y=N.start,X=W||{},V=X.type,P=Wu(C,a),Le=P.requestStart,Be=P.requestResponseStart,We=P.requestResponseEnd,ce=P.requestBytesLoaded,Ne=P.requestResponseHeaders,ft=P.requestMediaDuration,xe=P.requestHostname,nt=P.requestUrl,Ve=P.requestId,Te=oE(V,a),Fe=Te.currentLevel,Xe=Te.renditionWidth,za=Te.renditionHeight,nn=Te.renditionBitrate;n("requestcompleted",{request_event_type:E,request_start:Le,request_response_start:Be,request_response_end:We,request_bytes_loaded:ce,request_type:V,request_response_headers:Ne,request_hostname:xe,request_id:Ve,request_url:nt,request_media_start_time:Y,request_media_duration:ft,request_current_level:Fe,request_labeled_bitrate:nn,request_video_width:Xe,request_video_height:za})};r>=4?a.on("mediaFragmentLoaded",m):a.on("mediaFragmentLoaded",p);var c={video:void 0,audio:void 0,totalBitrate:void 0},v=function(){if(c.video&&typeof c.video.bitrate=="number"){if(!(c.video.width&&c.video.height)){i.warn("have bitrate info for video but missing width/height");return}var T=c.video.bitrate;if(c.audio&&typeof c.audio.bitrate=="number"&&(T+=c.audio.bitrate),T!==c.totalBitrate)return c.totalBitrate=T,{video_source_bitrate:T,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:lE(c.video.codec)}}},_=function(T,E,w){if(typeof T.newQuality!="number"){i.warn("missing evt.newQuality in qualityChangeRendered event",T);return}var C=T.mediaType;if(C==="audio"||C==="video"){var N=a.getBitrateInfoListFor(C).find(function(Y){var X=Y.qualityIndex;return X===T.newQuality});if(!(N&&typeof N.bitrate=="number")){i.warn("missing bitrate info for ".concat(C));return}c[C]=nd(Cs({},N),{codec:a.getCurrentTrackFor(C).codec});var W=v();W&&n("renditionchange",W)}};a.on("qualityChangeRendered",_);var g=function(T){var E=T.request,w=T.mediaType;E=E||{},n("requestcanceled",{request_event_type:E.type+"_"+E.action,request_url:E.url,request_type:w,request_hostname:pt(E.url)})};a.on("fragmentLoadingAbandoned",g);var y=function(T){var E=T.error,w,C,N=(E==null||(w=E.data)===null||w===void 0?void 0:w.request)||{},W=(E==null||(C=E.data)===null||C===void 0?void 0:C.response)||{};E?.code===27&&n("requestfailed",{request_error:N.type+"_"+N.action,request_url:N.url,request_hostname:pt(N.url),request_type:N.mediaType,request_error_code:W.status,request_error_text:W.statusText});var Y="".concat(N!=null&&N.url?"url: ".concat(N.url,`
`):"")+"".concat(W!=null&&W.status||W!=null&&W.statusText?"response: ".concat(W?.status,", ").concat(W?.statusText,`
`):"");n("error",{player_error_code:E?.code,player_error_message:E?.message,player_error_context:Y})};a.on("error",y),a._stopMuxMonitor=function(){a.off("manifestLoaded",s),a.off("initFragmentLoaded",h),a.off("mediaFragmentLoaded",m),a.off("qualityChangeRendered",_),a.off("error",y),a.off("fragmentLoadingAbandoned",g),delete a._stopMuxMonitor}},cE=function(e){e&&typeof e._stopMuxMonitor=="function"&&e._stopMuxMonitor()},Vu=0,hE=(function(){function e(){Ie(this,e),k(this,"_listeners",void 0)}return Wt(e,[{key:"on",value:function(t,a,i){return a._eventEmitterGuid=a._eventEmitterGuid||++Vu,this._listeners=this._listeners||{},this._listeners[t]=this._listeners[t]||[],i&&(a=a.bind(i)),this._listeners[t].push(a),a}},{key:"off",value:function(t,a){var i=this._listeners&&this._listeners[t];i&&i.forEach(function(r,n){r._eventEmitterGuid===a._eventEmitterGuid&&i.splice(n,1)})}},{key:"one",value:function(t,a,i){var r=this;a._eventEmitterGuid=a._eventEmitterGuid||++Vu;var n=function(){r.off(t,n),a.apply(i||this,arguments)};n._eventEmitterGuid=a._eventEmitterGuid,this.on(t,n)}},{key:"emit",value:function(t,a){var i=this;if(this._listeners){a=a||{};var r=this._listeners["before*"]||[],n=this._listeners[t]||[],s=this._listeners["after"+t]||[],l=function(o,d){o=o.slice(),o.forEach(function(h){h.call(i,{type:t},d)})};l(r,a),l(n,a),l(s,a)}}}]),e})(),mE=hE,Ao=Ze(bt()),pE=(function(){function e(t){var a=this;Ie(this,e),k(this,"_playbackHeartbeatInterval",void 0),k(this,"_playheadShouldBeProgressing",void 0),k(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){a._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?a._stopPlaybackHeartbeatInterval():a._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){a._playbackHeartbeatInterval!==null&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(i,r){a._playbackHeartbeatInterval!==null&&(Ao.default.clearInterval(a._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),a._playbackHeartbeatInterval=null)})}return Wt(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var t=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=Ao.default.setInterval(function(){t.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(Ao.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e})(),vE=pE,EE=function e(t){var a=this;Ie(this,e),k(this,"viewErrored",void 0),t.on("viewinit",function(){a.viewErrored=!1}),t.on("error",function(i,r){try{var n=t.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(t.data.player_error_code=n.player_error_code||r.player_error_code,t.data.player_error_message=n.player_error_message||r.player_error_message,t.data.player_error_context=n.player_error_context||r.player_error_context,t.data.player_error_severity=n.player_error_severity||r.player_error_severity,t.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,a.viewErrored=!0)}catch(s){t.mux.log.warn("Exception in error translator callback.",s),a.viewErrored=!0}}),t.on("aftererror",function(){var i,r,n,s,l;(i=t.data)===null||i===void 0||delete i.player_error_code,(r=t.data)===null||r===void 0||delete r.player_error_message,(n=t.data)===null||n===void 0||delete n.player_error_context,(s=t.data)===null||s===void 0||delete s.player_error_severity,(l=t.data)===null||l===void 0||delete l.player_error_business_exception})},bE=EE,fE=(function(){function e(t){Ie(this,e),k(this,"_watchTimeTrackerLastCheckedTime",void 0),k(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return Wt(e,[{key:"_updateWatchTime",value:function(t,a){var i=a.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=i),be(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(t,a){this._updateWatchTime(t,a),this._watchTimeTrackerLastCheckedTime=null}}]),e})(),gE=fE,_E=(function(){function e(t){var a=this;Ie(this,e),k(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),k(this,"_lastTime",void 0),k(this,"_isAdPlaying",void 0),k(this,"_callbackUpdatePlaybackTime",void 0),k(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=_e.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var i=this._startPlaybackTimeTracking.bind(this);t.on("playing",i),t.on("adplaying",i),t.on("seeked",i);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){a._isAdPlaying=!0}),t.on("adended",function(){a._isAdPlaying=!1}),t.on("adpause",function(){a._isAdPlaying=!1}),t.on("adbreakstart",function(){a._isAdPlaying=!1}),t.on("adbreakend",function(){a._isAdPlaying=!1}),t.on("adplay",function(){a._isAdPlaying=!1}),t.on("viewinit",function(){a._playbackTimeTrackerLastPlayheadPosition=-1,a._lastTime=_e.now(),a._isAdPlaying=!1,a._callbackUpdatePlaybackTime=null})}return Wt(e,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var t=this.pm.data.player_playhead_time,a=_e.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&t>this._playbackTimeTrackerLastPlayheadPosition?i=t-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=a-this._lastTime),i>0&&i<=1e3&&be(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=t,this._lastTime=a}}]),e})(),yE=_E,TE=(function(){function e(t){Ie(this,e),k(this,"pm",void 0),this.pm=t;var a=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",a),t.on("playbackheartbeatend",a),t.on("timeupdate",a),t.on("destroy",function(){t.off("timeupdate",a)})}return Wt(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(t,a){var i=this,r=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(a&&a.player_playhead_time)this.pm.data.player_playhead_time=a.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),e})(),AE=TE,Fu=300*1e3,kE=function e(t){if(Ie(this,e),!t.disableRebufferTracking){var a,i=function(n,s){r(s),a=void 0},r=function(n){if(a){var s=n.viewer_time-a;be(t.data,"view_rebuffer_duration",s),a=n.viewer_time,t.data.view_rebuffer_duration>Fu&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(Fu,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(n,s){return r(s)}),t.on("rebufferstart",function(n,s){a||(be(t.data,"view_rebuffer_count",1),a=s.viewer_time,t.one("rebufferend",i))}),t.on("viewinit",function(){a=void 0,t.off("rebufferend",i)})}},wE=kE,SE=(function(){function e(t){var a=this;Ie(this,e),k(this,"_lastCheckedTime",void 0),k(this,"_lastPlayheadTime",void 0),k(this,"_lastPlayheadTimeUpdatedTime",void 0),k(this,"_rebuffering",void 0),k(this,"pm",void 0),this.pm=t,!(t.disableRebufferTracking||t.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){a._cleanupRebufferTracker(null,{viewer_time:_e.now()})}))}return Wt(e,[{key:"_checkIfRebuffering",value:function(t,a){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(t,a);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(a.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(t,a,!0);return}var i=a.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=a.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(t){this._lastCheckedTime=t,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=t}},{key:"_cleanupRebufferTracker",value:function(t,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:a.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=a.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}i?this._prepareRebufferTrackerState(a.viewer_time):this._clearRebufferTrackerState()}}]),e})(),IE=SE,RE=(function(){function e(t){var a=this;Ie(this,e),k(this,"NAVIGATION_START",void 0),k(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var i=t.data,r=i.view_id;if(!i.view_program_changed){var n=function(s,l){var o=l.viewer_time;(s.type==="playing"&&typeof t.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof t.data.view_time_to_first_frame>"u"||a._inPrerollPosition()))&&a.calculateTimeToFirstFrame(o||_e.now(),r)};t.one("playing",n),t.one("adplaying",n),t.one("viewend",function(){t.off("playing",n),t.off("adplaying",n)})}})}return Wt(e,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(t,a){a===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:t}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e})(),DE=RE,CE=function e(t){var a=this;Ie(this,e),k(this,"_lastPlayerHeight",void 0),k(this,"_lastPlayerWidth",void 0),k(this,"_lastPlayheadPosition",void 0),k(this,"_lastSourceHeight",void 0),k(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){a._lastPlayheadPosition=-1});var i=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend"],r=["playing","hb","renditionchange","orientationchange"];i.forEach(function(n){t.on(n,function(){if(a._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&a._lastPlayerWidth>=0&&a._lastSourceWidth>0&&a._lastPlayerHeight>=0&&a._lastSourceHeight>0){var s=t.data.player_playhead_time-a._lastPlayheadPosition;if(s<0){a._lastPlayheadPosition=-1;return}var l=Math.min(a._lastPlayerWidth/a._lastSourceWidth,a._lastPlayerHeight/a._lastSourceHeight),o=Math.max(0,l-1),d=Math.max(0,1-l);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,o),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,d),be(t.data,"view_total_content_playback_time",s),be(t.data,"view_total_upscaling",o*s),be(t.data,"view_total_downscaling",d*s)}a._lastPlayheadPosition=-1})}),r.forEach(function(n){t.on(n,function(){a._lastPlayheadPosition=t.data.player_playhead_time,a._lastPlayerWidth=t.data.player_width,a._lastPlayerHeight=t.data.player_height,a._lastSourceWidth=t.data.video_source_width,a._lastSourceHeight=t.data.video_source_height})})},LE=CE,ME=2e3,OE=function e(t){var a=this;Ie(this,e),k(this,"isSeeking",void 0),this.isSeeking=!1;var i=-1,r=function(){var n=_e.now(),s=(t.data.viewer_time||n)-(i||n);be(t.data,"view_seek_duration",s),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,s),a.isSeeking=!1,i=-1};t.on("seeking",function(n,s){if(Object.assign(t.data,s),a.isSeeking&&s.viewer_time-i<=ME){i=s.viewer_time;return}a.isSeeking&&r(),a.isSeeking=!0,i=s.viewer_time,be(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){a.isSeeking&&(r(),t.send("seeked")),a.isSeeking=!1,i=-1})},NE=OE,$u=function(e,t){e.push(t),e.sort(function(a,i){return a.viewer_time-i.viewer_time})},xE=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],PE=(function(){function e(t){var a=this;Ie(this,e),k(this,"_adHasPlayed",void 0),k(this,"_adRequests",void 0),k(this,"_adResponses",void 0),k(this,"_currentAdRequestNumber",void 0),k(this,"_currentAdResponseNumber",void 0),k(this,"_prerollPlayTime",void 0),k(this,"_wouldBeNewAdPlay",void 0),k(this,"isAdBreak",void 0),k(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){a.isAdBreak=!1,a._currentAdRequestNumber=0,a._currentAdResponseNumber=0,a._adRequests=[],a._adResponses=[],a._adHasPlayed=!1,a._wouldBeNewAdPlay=!0,a._prerollPlayTime=void 0}),xE.forEach(function(r){return t.on(r,a._updateAdData.bind(a))});var i=function(){a.isAdBreak=!1};t.on("adbreakstart",function(){a.isAdBreak=!0}),t.on("play",i),t.on("playing",i),t.on("viewend",i),t.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+a._currentAdRequestNumber++},n),$u(a._adRequests,n),be(t.data,"view_ad_request_count"),a.inPrerollPosition()&&(t.data.view_preroll_requested=!0,a._adHasPlayed||be(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+a._currentAdResponseNumber++},n),$u(a._adResponses,n);var s=a.findAdRequest(n.ad_request_id);s&&be(t.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),t.on("adplay",function(r,n){a._adHasPlayed=!0,a._wouldBeNewAdPlay&&(a._wouldBeNewAdPlay=!1,be(t.data,"view_ad_played_count")),a.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,a._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,n.viewer_time-a._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-t.data.view_start)),a._prerollPlayTime=n.viewer_time)}),t.on("adplaying",function(r,n){a.inPrerollPosition()&&typeof t.data.view_preroll_load_time>"u"&&typeof a._prerollPlayTime<"u"&&(t.data.view_preroll_load_time=n.viewer_time-a._prerollPlayTime,t.data.view_startup_preroll_load_time=n.viewer_time-a._prerollPlayTime)}),t.on("adclicked",function(r,n){a._wouldBeNewAdPlay||be(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(r,n){a._wouldBeNewAdPlay||be(t.data,"view_ad_skipped_count")}),t.on("adended",function(){a._wouldBeNewAdPlay=!0}),t.on("aderror",function(){a._wouldBeNewAdPlay=!0})}return Wt(e,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(t){for(var a=0;a<this._adRequests.length;a++)if(this._adRequests[a].ad_request_id===t)return this._adRequests[a]}},{key:"_updateAdData",value:function(t,a){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&a.ad_tag_url){var i=Xt(Vr(a.ad_tag_url),2),r=i[0],n=i[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&a.ad_asset_url){var s=Xt(Vr(a.ad_asset_url),2),l=s[0],o=s[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=l}}this.pm.data.ad_asset_url=a?.ad_asset_url,this.pm.data.ad_tag_url=a?.ad_tag_url,this.pm.data.ad_creative_id=a?.ad_creative_id,this.pm.data.ad_id=a?.ad_id,this.pm.data.ad_universal_id=a?.ad_universal_id}}]),e})(),UE=PE,Ku=Ze(bt()),HE=function e(t){Ie(this,e);var a,i,r=function(){t.disableRebufferTracking||(be(t.data,"view_waiting_rebuffer_count",1),a=_e.now(),i=Ku.default.setInterval(function(){if(a){var d=_e.now();be(t.data,"view_waiting_rebuffer_duration",d-a),a=d}},250))},n=function(){t.disableRebufferTracking||a&&(be(t.data,"view_waiting_rebuffer_duration",_e.now()-a),a=!1,Ku.default.clearInterval(i))},s=!1,l=function(){s=!0},o=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),l()}),t.on("pause",o),t.on("seeking",o)},BE=HE,WE=function e(t){var a=this;Ie(this,e),k(this,"lastWallClockTime",void 0);var i=function(){a.lastWallClockTime=_e.now(),t.on("before*",r)},r=function(n){var s=_e.now(),l=a.lastWallClockTime;a.lastWallClockTime=s,s-l>3e4&&(t.emit("devicesleep",{viewer_time:l}),Object.assign(t.data,{viewer_time:l}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:s}),Object.assign(t.data,{viewer_time:s}),t.send("devicewake"))};t.one("playbackheartbeat",i),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",i)})},VE=WE,ko=Ze(bt()),Lh=(function(e){return e()})(function(){var e=function(){for(var a=0,i={};a<arguments.length;a++){var r=arguments[a];for(var n in r)i[n]=r[n]}return i};function t(a){function i(r,n,s){var l;if(typeof document<"u"){if(arguments.length>1){if(s=e({path:"/"},i.defaults,s),typeof s.expires=="number"){var o=new Date;o.setMilliseconds(o.getMilliseconds()+s.expires*864e5),s.expires=o}try{l=JSON.stringify(n),/^[\{\[]/.test(l)&&(n=l)}catch{}return a.write?n=a.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(l={});for(var d=document.cookie?document.cookie.split("; "):[],h=/(%[0-9A-Z]{2})+/g,p=0;p<d.length;p++){var m=d[p].split("="),c=m.slice(1).join("=");c.charAt(0)==='"'&&(c=c.slice(1,-1));try{var v=m[0].replace(h,decodeURIComponent);if(c=a.read?a.read(c,v):a(c,v)||c.replace(h,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch{}if(r===v){l=c;break}r||(l[v]=c)}catch{}}return l}}return i.set=i,i.get=function(r){return i.call(i,r)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(r,n){i(r,"",e(n,{expires:-1}))},i.withConverter=t,i}return t(function(){})}),Mh="muxData",FE=function(e){return Object.entries(e).map(function(t){var a=Xt(t,2),i=a[0],r=a[1];return"".concat(i,"=").concat(r)}).join("&")},$E=function(e){return e.split("&").reduce(function(t,a){var i=Xt(a.split("="),2),r=i[0],n=i[1],s=+n,l=n&&s==n?s:n;return t[r]=l,t},{})},Oh=function(){var e;try{e=$E(Lh.get(Mh)||"")}catch{e={}}return e},Nh=function(e){try{Lh.set(Mh,FE(e),{expires:365})}catch{}},KE=function(){var e=Oh();return e.mux_viewer_id=e.mux_viewer_id||Wr(),e.msn=e.msn||Math.random(),Nh(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},qE=function(){var e=Oh(),t=_e.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=Wr(),e.sst=t),e.sex=t+1500*1e3,Nh(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}};function YE(e,t){var a=t.beaconCollectionDomain,i=t.beaconDomain;if(a)return"https://"+a;e=e||"inferred";var r=i||"litix.io";return e.match(/^[a-z0-9]+$/)?"https://"+e+"."+r:"https://img.litix.io/a.gif"}var GE=Ze(bt()),xh=function(){var e;switch(Ph()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},Ph=function(){var e=GE.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};xh.getConnectionFromAPI=Ph;var jE=xh,QE={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},ZE=Uh(QE),zE={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},qu=Uh(zE);function Uh(e){var t={};for(var a in e)e.hasOwnProperty(a)&&(t[e[a]]=a);return t}function Qo(e){var t={},a={};return Object.keys(e).forEach(function(i){var r=!1;if(e.hasOwnProperty(i)&&e[i]!==void 0){var n=i.split("_"),s=n[0],l=ZE[s];l||(ee.info("Data key word `"+n[0]+"` not expected in "+i),l=s+"_"),n.splice(1).forEach(function(o){o==="url"&&(r=!0),qu[o]?l+=qu[o]:Number.isInteger(Number(o))?l+=o:(ee.info("Data key word `"+o+"` not expected in "+i),l+="_"+o+"_")}),r?a[l]=e[i]:t[l]=e[i]}}),Object.assign(t,a)}var Pa=Ze(bt()),XE=Ze(Sh()),JE={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},eb=56*1024,tb=["hb","requestcompleted","requestfailed","requestcanceled"],ab="https://img.litix.io",ea=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=e||ab,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},JE,t)};ea.prototype.queueEvent=function(e,t){var a=Object.assign({},t);return this._eventQueue.length<=this._options.maxQueueLength||e==="eventrateexceeded"?(this._eventQueue.push(a),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};ea.prototype.flushEvents=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(e&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};ea.prototype.destroy=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),Pa.default.clearTimeout(this._sendTimeout)};ea.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],Qo({mux_view_message:"event queue truncated"}));var a=this._createPayload(t);Hh(this._beaconUrl,a,!0,function(){})};ea.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var a=this._createPayload(t),i=_e.now();Hh(this._beaconUrl,a,!1,function(r,n){n?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,ee.info("Error sending beacon: "+n)):e._failureCount=0,e._roundTripTime=_e.now()-i,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})};ea.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return e=e*Math.random(),(1+e)*this._options.baseTimeBetweenBeacons};ea.prototype._startBeaconSending=function(){var e=this;Pa.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=Pa.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))};ea.prototype._createPayload=function(e){var t=this,a={transmission_timestamp:Math.round(_e.now())};this._roundTripTime&&(a.rtt_ms=Math.round(this._roundTripTime));var i,r,n,s=function(){i=JSON.stringify({metadata:a,events:r||e}),n=i.length/1024},l=function(){return n<=t._options.maxPayloadKBSize};return s(),l()||(ee.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(o){return tb.indexOf(o.e)===-1}),s()),l()||(ee.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(o){for(var d in o){var h=o[d],p=50*1024;typeof h=="string"&&h.length>p&&(o[d]=h.substring(0,p))}}),s()),i};var ib=typeof XE.default.exitPictureInPicture=="function"?function(e){return e.length<=eb}:function(e){return!1},Hh=function(e,t,a,i){if(a&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){i();return}if(Pa.default.fetch){Pa.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:ib(t)}).then(function(n){return i(null,n.ok?null:"Error")}).catch(function(n){return i(null,n)});return}if(Pa.default.XMLHttpRequest){var r=new Pa.default.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return i(null,r.status!==200?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}i()},rb=ea,nb=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],sb=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],ob=["ad_id","ad_creative_id","ad_universal_id"],lb=["viewstart","error","ended","viewend"],db=600*1e3,ub=(function(){function e(t,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Ie(this,e);var r,n,s,l,o,d,h,p,m,c,v,_;k(this,"mux",void 0),k(this,"envKey",void 0),k(this,"options",void 0),k(this,"eventQueue",void 0),k(this,"sampleRate",void 0),k(this,"disableCookies",void 0),k(this,"respectDoNotTrack",void 0),k(this,"previousBeaconData",void 0),k(this,"lastEventTime",void 0),k(this,"rateLimited",void 0),k(this,"pageLevelData",void 0),k(this,"viewerData",void 0),this.mux=t,this.envKey=a,this.options=i,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new rb(YE(this.envKey,this.options));var g;this.sampleRate=(g=this.options.sampleRate)!==null&&g!==void 0?g:1;var y;this.disableCookies=(y=this.options.disableCookies)!==null&&y!==void 0?y:!1;var T;this.respectDoNotTrack=(T=this.options.respectDoNotTrack)!==null&&T!==void 0?T:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(l=this.options.platform)===null||l===void 0?void 0:l.product,viewer_device_category:"",viewer_device_manufacturer:(o=this.options.platform)===null||o===void 0?void 0:o.manufacturer,viewer_os_family:(h=this.options.platform)===null||h===void 0||(d=h.os)===null||d===void 0?void 0:d.family,viewer_os_architecture:(m=this.options.platform)===null||m===void 0||(p=m.os)===null||p===void 0?void 0:p.architecture,viewer_os_version:(v=this.options.platform)===null||v===void 0||(c=v.os)===null||c===void 0?void 0:c.version,viewer_connection_type:jE(),page_url:ko.default===null||ko.default===void 0||(_=ko.default.location)===null||_===void 0?void 0:_.href},this.viewerData=this.disableCookies?{}:KE()}return Wt(e,[{key:"send",value:function(t,a){if(!(!t||!(a!=null&&a.view_id))){if(this.respectDoNotTrack&&Go())return ee.info("Not sending `"+t+"` because Do Not Track is enabled");if(!a||typeof a!="object")return ee.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:qE(),r=nd(Cs({},this.pageLevelData,a,i,this.viewerData),{event:t,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,l=this._deduplicateBeaconData(t,r),o=Qo(l);if(this.lastEventTime=this.mux.utils.now(),s)return ee.info("Not sending event due to sample rate restriction",t,r,o);if(this.envKey||ee.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",t,r,o),!this.rateLimited){if(ee.info("Sending event",t,r,o),this.rateLimited=!this.eventQueue.queueEvent(t,o),this.mux.WINDOW_UNLOADING&&t==="viewend")this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&t==="hb"?this.eventQueue.flushEvents(!0):lb.indexOf(t)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return r.event="eventrateexceeded",o=Qo(r),this.eventQueue.queueEvent(r.event,o),ee.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(t,a){var i=this,r={},n=a.view_id;if(n==="-1"||t==="viewstart"||t==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=db)r=Cs({},a),n&&(this.previousBeaconData=r),n&&t==="viewend"&&(this.previousBeaconData=null);else{var s=t.indexOf("request")===0;Object.entries(a).forEach(function(l){var o=Xt(l,2),d=o[0],h=o[1];i.previousBeaconData&&(h!==i.previousBeaconData[d]||nb.indexOf(d)>-1||i.objectHasChanged(s,d,h,i.previousBeaconData[d])||i.eventRequiresKey(t,d))&&(r[d]=h,i.previousBeaconData[d]=h)})}return r}},{key:"objectHasChanged",value:function(t,a,i,r){return!t||a.indexOf("request_")!==0?!1:a==="request_response_headers"||typeof i!="object"||typeof r!="object"?!0:Object.keys(i||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(t,a){return!!(t==="renditionchange"&&a.indexOf("video_source_")===0||ob.includes(a)&&sb.includes(t))}}]),e})(),cb=function e(t){Ie(this,e);var a=0,i=0,r=0,n=0,s=0,l=0,o=0,d=function(m,c){var v=c.request_start,_=c.request_response_start,g=c.request_response_end,y=c.request_bytes_loaded;n++;var T,E;if(_?(T=_-(v??0),E=(g??0)-_):E=(g??0)-(v??0),E>0&&y&&y>0){var w=y/E*8e3;s++,i+=y,r+=E,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,w),t.data.view_average_request_throughput=i/r*8e3,t.data.view_request_count=n,T>0&&(a+=T,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,T),t.data.view_average_request_latency=a/s)}},h=function(m,c){n++,l++,t.data.view_request_count=n,t.data.view_request_failed_count=l},p=function(m,c){n++,o++,t.data.view_request_count=n,t.data.view_request_canceled_count=o};t.on("requestcompleted",d),t.on("requestfailed",h),t.on("requestcanceled",p)},hb=cb,mb=3600*1e3,pb=function e(t){var a=this;Ie(this,e),k(this,"_lastEventTime",void 0),t.on("before*",function(i,r){var n=r.viewer_time,s=_e.now(),l=a._lastEventTime;if(a._lastEventTime=s,l&&s-l>mb){var o=Object.keys(t.data).reduce(function(h,p){return p.indexOf("video_")===0?Object.assign(h,k({},p,t.data[p])):h},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var d=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:n},o)),t.playbackHeartbeat._playheadShouldBeProgressing=d,t.playbackHeartbeat._playheadShouldBeProgressing&&i.type!=="play"&&i.type!=="adbreakstart"&&(t.emit("play",{viewer_time:n}),i.type!=="playing"&&t.emit("playing",{viewer_time:n}))}})},vb=pb,Eb=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],bb=new Set(["requestcompleted","requestfailed","requestcanceled"]),fb=(function(e){Zv(a,e);var t=Jv(a);function a(i,r,n){Ie(this,a);var s;s=t.call(this),k(x(s),"DOM_CONTENT_LOADED_EVENT_END",void 0),k(x(s),"NAVIGATION_START",void 0),k(x(s),"_destroyed",void 0),k(x(s),"_heartBeatTimeout",void 0),k(x(s),"adTracker",void 0),k(x(s),"dashjs",void 0),k(x(s),"data",void 0),k(x(s),"disablePlayheadRebufferTracking",void 0),k(x(s),"disableRebufferTracking",void 0),k(x(s),"errorTracker",void 0),k(x(s),"errorTranslator",void 0),k(x(s),"emitTranslator",void 0),k(x(s),"getAdData",void 0),k(x(s),"getPlayheadTime",void 0),k(x(s),"getStateData",void 0),k(x(s),"stateDataTranslator",void 0),k(x(s),"hlsjs",void 0),k(x(s),"id",void 0),k(x(s),"longResumeTracker",void 0),k(x(s),"minimumRebufferDuration",void 0),k(x(s),"mux",void 0),k(x(s),"playbackEventDispatcher",void 0),k(x(s),"playbackHeartbeat",void 0),k(x(s),"playbackHeartbeatTime",void 0),k(x(s),"playheadTime",void 0),k(x(s),"seekingTracker",void 0),k(x(s),"sustainedRebufferThreshold",void 0),k(x(s),"watchTimeTracker",void 0),k(x(s),"currentFragmentPDT",void 0),k(x(s),"currentFragmentStart",void 0),s.DOM_CONTENT_LOADED_EVENT_END=Ds.domContentLoadedEventEnd(),s.NAVIGATION_START=Ds.navigationStart();var l={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(m){return m},emitTranslator:function(){for(var m=arguments.length,c=new Array(m),v=0;v<m;v++)c[v]=arguments[v];return c},stateDataTranslator:function(m){return m}};s.mux=i,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(l,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),ee.level=n.debug?xa.DEBUG:xa.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new ub(i,n.data.env_key,n),s.data={player_instance_id:Wr(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var o=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(x(s));if(s.on("viewinit",function(m,c){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,c),this._initializeViewData(),this.one("play",o),this.one("adbreakstart",o)}),s.on("videochange",function(m,c){this._resetView(c)}),s.on("programchange",function(m,c){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(c,{view_program_changed:!0})),o(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(m,c){this.currentFragmentPDT=c.currentFragmentPDT,this.currentFragmentStart=c.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var d=function(){var m=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",m&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",d,!1);var h=function(m){m.persisted||s.destroy()};window.addEventListener("pagehide",h,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",d),window.removeEventListener("pagehide",h)})}s.on("playerready",function(m,c){Object.assign(this.data,c)}),Eb.forEach(function(m){s.on(m,function(c,v){m.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,v),this._sanitizeData()}),s.on("after"+m,function(){(m!=="error"||this.errorTracker.viewErrored)&&this.send(m)})}),s.on("viewend",function(m,c){Object.assign(s.data,c)});var p=function(m){var c=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=c-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",p),s.longResumeTracker=new vb(x(s)),s.errorTracker=new bE(x(s)),new VE(x(s)),s.seekingTracker=new NE(x(s)),s.playheadTime=new AE(x(s)),s.playbackHeartbeat=new vE(x(s)),new LE(x(s)),s.watchTimeTracker=new gE(x(s)),new yE(x(s)),s.adTracker=new UE(x(s)),new IE(x(s)),new wE(x(s)),new DE(x(s)),new BE(x(s)),new hb(x(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return Wt(a,[{key:"emit",value:function(i,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),l=[i,s];if(this.emitTranslator)try{l=this.emitTranslator(i,s)}catch(o){this.mux.log.warn("Exception in emit translator callback.",o)}l!=null&&l.length&&(n=An(xi(a.prototype),"emit",this)).call.apply(n,[this].concat(dt(l)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(i){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(d){r[d]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=Xt(Vr(r.video_source_url),2),l=s[0],o=s[1];r.video_source_domain=o,r.video_source_hostname=l}delete r.ad_request_id,this.playbackEventDispatcher.send(i,r),this.data.view_sequence_number++,this.data.player_sequence_number++,bb.has(i)||this._restartHeartBeat(),i==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(i){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",i)}},{key:"_updateStateData",value:function(){var i=this.getStateData();if(typeof this.stateDataTranslator=="function")try{i=this.stateDataTranslator(i)}catch(r){this.mux.log.warn("Exception in stateDataTranslator translator callback.",r)}Object.assign(this.data,i),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var i=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"];r.forEach(function(s){var l=parseInt(i.data[s],10);i.data[s]=isNaN(l)?void 0:l});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(i.data[s]){var l=i.data[s].toLowerCase();(l.indexOf("data:")===0||l.indexOf("blob:")===0)&&(i.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var i=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete i.data[r]})}},{key:"_resetViewData",value:function(){var i=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete i.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var i=this,r=this.data.view_id=Wr(),n=function(){r===i.data.view_id&&be(i.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var i=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){i.data.player_is_paused||i.emit("hb")},1e4)}},{key:"addHLSJS",value:function(i){if(!i.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=i.hlsjs,nE(this.mux,this.id,i.hlsjs,{},i.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(sE(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(i){if(!i.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=i.dashjs,uE(this.mux,this.id,i.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(cE(this.dashjs),this.dashjs=void 0)}}]),a})(mE),gb=fb,Qi=Ze(Sh());function _b(){return Qi.default&&!!(Qi.default.fullscreenElement||Qi.default.webkitFullscreenElement||Qi.default.mozFullScreenElement||Qi.default.msFullscreenElement)}var yb=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],Tb={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function Ab(e,t,a){var i=Xt(Rs(t),3),r=i[0],n=i[1],s=i[2],l=e.log,o=e.utils.getComputedStyle,d=e.utils.secondsToMs,h={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return l.error("The element of `"+n+"` was not a media element.")}else return l.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,l.warn("Already monitoring this video element, replacing existing event listeners"));var p={getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var c,v,_,g=((c=(v=this).getPlayheadTime)===null||c===void 0?void 0:c.call(v))||d(r.currentTime),y=this.hlsjs&&this.hlsjs.url,T=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),E={player_is_paused:r.paused,player_width:parseInt(o(r,"width")),player_height:parseInt(o(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:_b(),video_poster_url:r.poster,video_source_url:y||T||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(_=r.getVideoPlaybackQuality)===null||_===void 0?void 0:_.call(r).droppedVideoFrames};if(r.getStartDate&&g>0){var w=r.getStartDate();if(w&&typeof w.getTime=="function"&&w.getTime()){var C=w.getTime();if(E.player_program_time=C+g,r.seekable.length>0){var N=C+r.seekable.end(r.seekable.length-1);E.player_live_edge_program_time=N}}}return E}};a=Object.assign(h,a,p),a.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},a.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(c,v){e.emit(n,c,v)},r.mux.updateData=function(c){r.mux.emit("hb",c)};var m=function(){l.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(c){r.removeEventListener(c,r.mux.listeners[c],!1)}),delete r.mux.listeners,r.mux.destroy=m,r.mux.swapElement=m,r.mux.emit=m,r.mux.addHLSJS=m,r.mux.addDashJS=m,r.mux.removeHLSJS=m,r.mux.removeDashJS=m,r.mux.updateData=m,r.mux.setEmitTranslator=m,r.mux.setStateDataTranslator=m,r.mux.setGetPlayheadTime=m,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(c){var v=Xt(Rs(c),3),_=v[0],g=v[1],y=v[2];if(_){if(y!=="video"&&y!=="audio")return e.log.error("The element of `"+g+"` was not a media element.")}else return e.log.error("No element was found with the `"+g+"` query selector.");_.muxId=r.muxId,delete r.muxId,_.mux=_.mux||{},_.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(_.mux.listeners).forEach(function(T){r.removeEventListener(T,_.mux.listeners[T],!1),_.addEventListener(T,_.mux.listeners[T],!1)}),_.mux.swapElement=r.mux.swapElement,_.mux.destroy=r.mux.destroy,delete r.mux,r=_},r.mux.addHLSJS=function(c){e.addHLSJS(n,c)},r.mux.addDashJS=function(c){e.addDashJS(n,c)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(c){e.setEmitTranslator(n,c)},r.mux.setStateDataTranslator=function(c){e.setStateDataTranslator(n,c)},r.mux.setGetPlayheadTime=function(c){c||(c=a.getPlayheadTime),e.setGetPlayheadTime(n,c)},e.init(n,a),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},yb.forEach(function(c){c==="error"&&!a.automaticErrorTracking||(r.mux.listeners[c]=function(){var v={};if(c==="error"){if(!r.error||r.error.code===1)return;v.player_error_code=r.error.code,v.player_error_message=Tb[r.error.code]||r.error.message}e.emit(n,c,v)},r.addEventListener(c,r.mux.listeners[c],!1))})}function kb(e,t,a,i){var r=i;if(e&&typeof e[t]=="function")try{r=e[t].apply(e,a)}catch(n){ee.info("safeCall error",n)}return r}var Dr=Ze(bt()),ni;Dr.default&&Dr.default.WeakMap&&(ni=new WeakMap);function wb(e,t){if(!e||!t||!Dr.default||typeof Dr.default.getComputedStyle!="function")return"";var a;return ni&&ni.has(e)&&(a=ni.get(e)),a||(a=Dr.default.getComputedStyle(e,null),ni&&ni.set(e,a)),a.getPropertyValue(t)}function Sb(e){return Math.floor(e*1e3)}var Ta={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},to=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};to.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf(`
`);t>-1;t=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)};to.prototype.processLine=function(e){var t=e.indexOf(":"),a=Cb(e,t),i=a[0],r=a.length===2?od(a[1]):void 0;if(i[0]!=="#")this.currentUri.uri=i,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(i){case Ta.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case Ta.PART_INF:{wo(this.manifest,a),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case Ta.SERVER_CONTROL:{wo(this.manifest,a),this.setHoldBack();break}case Ta.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case Ta.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case Ta.VERSION:{wo(this.manifest,a);break}case Ta.SESSION_DATA:{var l=Lb(a[1]),o=Ch(l);Object.assign(this.manifest.sessionData,o)}}};to.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,a=e.targetDuration,i=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=a&&a*3,l=i&&i*2;a&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),i&&!t.hasOwnProperty(n)&&(t[n]=i*3),i&&t[n]<l&&(t[n]=l)}};var wo=function(e,t){var a=Bh(t[0].replace("#EXT-X-","")),i;Db(t[1])?(i={},i=Object.assign(Rb(t[1]),i)):i=od(t[1]),e[a]=i},Bh=function(e){return e.toLowerCase().replace(/-(\w)/g,function(t){return t[1].toUpperCase()})},od=function(e){if(e.toLowerCase()==="yes"||e.toLowerCase()==="no")return e.toLowerCase()==="yes";var t=e.indexOf(":")!==-1?e:parseFloat(e);return isNaN(t)?e:t},Ib=function(e){var t={},a=e.split("=");if(a.length>1){var i=Bh(a[0]);t[i]=od(a[1])}return t},Rb=function(e){for(var t=e.split(","),a={},i=0;t.length>i;i++){var r=t[i],n=Ib(r);a=Object.assign(n,a)}return a},Db=function(e){return e.indexOf("=")>-1},Cb=function(e,t){return t===-1?[e]:[e.substring(0,t),e.substring(t+1)]},Lb=function(e){var t={};if(e){var a=e.search(","),i=e.slice(0,a),r=e.slice(a+1),n=[i,r];return n.forEach(function(s,l){for(var o=s.replace(/['"]+/g,"").split("="),d=0;d<o.length;d++)o[d]==="DATA-ID"&&(t["DATA-ID"]=o[1-d]),o[d]==="VALUE"&&(t.VALUE=o[1-d])}),{data:t}}},Mb=to,Ob={safeCall:kb,safeIncrement:be,getComputedStyle:wb,secondsToMs:Sb,assign:Object.assign,headersStringToObject:sd,cdnHeadersToRequestId:Ls,extractHostnameAndDomain:Vr,extractHostname:pt,manifestParser:Mb,generateShortID:Rh,generateUUID:Wr,now:_e.now,findMediaElement:Rs},Nb=Ob,xb={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},Pb=xb,Ub="mux-embed",Hb="5.9.0",Bb="2.1",he={},fa=function(e){var t=arguments;typeof e=="string"?fa.hasOwnProperty(e)?Rr.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),fa[e].apply(null,t)},0):ee.warn("`"+e+"` is an unknown task"):typeof e=="function"?Rr.default.setTimeout(function(){e(fa)},0):ee.warn("`"+e+"` is invalid.")},Wb={loaded:_e.now(),NAME:Ub,VERSION:Hb,API_VERSION:Bb,PLAYER_TRACKED:!1,monitor:function(e,t){return Ab(fa,e,t)},destroyMonitor:function(e){var t=Xt(Rs(e),1),a=t[0];a&&a.mux&&typeof a.mux.destroy=="function"?a.mux.destroy():ee.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var a=lt(e);he[a]?he[a].addHLSJS(t):ee.error("A monitor for `"+a+"` has not been initialized.")},addDashJS:function(e,t){var a=lt(e);he[a]?he[a].addDashJS(t):ee.error("A monitor for `"+a+"` has not been initialized.")},removeHLSJS:function(e){var t=lt(e);he[t]?he[t].removeHLSJS():ee.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=lt(e);he[t]?he[t].removeDashJS():ee.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){Go()&&t&&t.respectDoNotTrack&&ee.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var a=lt(e);he[a]=new gb(fa,a,t)},emit:function(e,t,a){var i=lt(e);he[i]?(he[i].emit(t,a),t==="destroy"&&delete he[i]):ee.error("A monitor for `"+i+"` has not been initialized.")},updateData:function(e,t){var a=lt(e);he[a]?he[a].emit("hb",t):ee.error("A monitor for `"+a+"` has not been initialized.")},setEmitTranslator:function(e,t){var a=lt(e);he[a]?he[a].emitTranslator=t:ee.error("A monitor for `"+a+"` has not been initialized.")},setStateDataTranslator:function(e,t){var a=lt(e);he[a]?he[a].stateDataTranslator=t:ee.error("A monitor for `"+a+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var a=lt(e);he[a]?he[a].getPlayheadTime=t:ee.error("A monitor for `"+a+"` has not been initialized.")},checkDoNotTrack:Go,log:ee,utils:Nb,events:Pb,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(fa,Wb);typeof Rr.default<"u"&&typeof Rr.default.addEventListener=="function"&&Rr.default.addEventListener("pagehide",function(e){e.persisted||(fa.WINDOW_UNLOADING=!0)},!1);var ld=fa;/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/var B=kv,te={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},O={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},ao=e=>e===te.VIDEO?"playback":e,sa=class or extends Error{constructor(t,a=or.MEDIA_ERR_CUSTOM,i,r){var n;super(t),this.name="MediaError",this.code=a,this.context=r,this.fatal=i??(a>=or.MEDIA_ERR_NETWORK&&a<=or.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=or.defaultMessages[this.code])!=null?n:"")}};sa.MEDIA_ERR_ABORTED=1,sa.MEDIA_ERR_NETWORK=2,sa.MEDIA_ERR_DECODE=3,sa.MEDIA_ERR_SRC_NOT_SUPPORTED=4,sa.MEDIA_ERR_ENCRYPTED=5,sa.MEDIA_ERR_CUSTOM=100,sa.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var S=sa,Vb=e=>e==null,dd=(e,t)=>Vb(t)?!1:e in t,Zo={ANY:"any",MUTED:"muted"},G={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},xt={MSE:"mse",NATIVE:"native"},lr={HEADER:"header",QUERY:"query",NONE:"none"},Ms=Object.values(lr),Zt={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},Yu={HLS:Zt.M3U8};[...Object.values(Zt)];var AT={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},kT={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},wT={DESCENDING:"desc"},Fb="en",zo={code:Fb},pe=(e,t,a,i,r=e)=>{r.addEventListener(t,a,i),e.addEventListener("teardown",()=>{r.removeEventListener(t,a)},{once:!0})};function $b(e,t,a){t&&a>t&&(a=t);for(let i=0;i<e.length;i++)if(e.start(i)<=a&&e.end(i)>=a)return!0;return!1}var ud=e=>{let t=e.indexOf("?");if(t<0)return[e];let a=e.slice(0,t),i=e.slice(t);return[a,i]},io=e=>{let{type:t}=e;if(t){let a=t.toUpperCase();return dd(a,Yu)?Yu[a]:t}return Kb(e)},Wh=e=>e==="VOD"?G.ON_DEMAND:G.LIVE,Vh=e=>e==="EVENT"?Number.POSITIVE_INFINITY:e==="VOD"?Number.NaN:0,Kb=e=>{let{src:t}=e;if(!t)return"";let a="";try{a=new URL(t).pathname}catch{console.error("invalid url")}let i=a.lastIndexOf(".");if(i<0)return Yb(e)?Zt.M3U8:"";let r=a.slice(i+1).toUpperCase();return dd(r,Zt)?Zt[r]:""},qb="mux.com",Yb=({src:e,customDomain:t=qb})=>{let a;try{a=new URL(`${e}`)}catch{return!1}let i=a.protocol==="https:",r=a.hostname===`stream.${t}`.toLowerCase(),n=a.pathname.split("/"),s=n.length===2,l=!(n!=null&&n[1].includes("."));return i&&r&&s&&l},Ii=e=>{let t=(e??"").split(".")[1];if(t)try{let a=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(a).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}},Gb=({exp:e},t=Date.now())=>!e||e*1e3<t,jb=({sub:e},t)=>e!==t,Qb=({aud:e},t)=>!e,Zb=({aud:e},t)=>e!==t,Fh="en";function L(e,t=!0){var a,i;let r=t&&(i=(a=zo)==null?void 0:a[e])!=null?i:e,n=t?zo.code:Fh;return new zb(r,n)}var zb=class{constructor(e,t=(a=>(a=zo)!=null?a:Fh)()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,a)=>{var i;return(i=e[a])!=null?i:""})}toString(){return this.message}},Xb=Object.values(Zo),Gu=e=>typeof e=="boolean"||typeof e=="string"&&Xb.includes(e),Jb=(e,t,a)=>{let{autoplay:i}=e,r=!1,n=!1,s=Gu(i)?i:!!i,l=()=>{r||pe(t,"playing",()=>{r=!0},{once:!0})};if(l(),pe(t,"loadstart",()=>{r=!1,l(),So(t,s)},{once:!0}),pe(t,"loadstart",()=>{a||(e.streamType&&e.streamType!==G.UNKNOWN?n=e.streamType===G.LIVE:n=!Number.isFinite(t.duration)),So(t,s)},{once:!0}),a&&a.once(B.Events.LEVEL_LOADED,(o,d)=>{var h;e.streamType&&e.streamType!==G.UNKNOWN?n=e.streamType===G.LIVE:n=(h=d.details.live)!=null?h:!1}),!s){let o=()=>{!n||Number.isFinite(e.startTime)||(a!=null&&a.liveSyncPosition?t.currentTime=a.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};a&&pe(t,"play",()=>{t.preload==="metadata"?a.once(B.Events.LEVEL_UPDATED,o):o()},{once:!0})}return o=>{r||(s=Gu(o)?o:!!o,So(t,s))}},So=(e,t)=>{if(!t)return;let a=e.muted,i=()=>e.muted=a;switch(t){case Zo.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(i)});break;case Zo.MUTED:e.muted=!0,e.play().catch(i);break;default:e.play().catch(()=>{});break}},ef=({preload:e,src:t},a,i)=>{let r=p=>{p!=null&&["","none","metadata","auto"].includes(p)?a.setAttribute("preload",p):a.removeAttribute("preload")};if(!i)return r(e),r;let n=!1,s=!1,l=i.config.maxBufferLength,o=i.config.maxBufferSize,d=p=>{r(p);let m=p??a.preload;s||m==="none"||(m==="metadata"?(i.config.maxBufferLength=1,i.config.maxBufferSize=1):(i.config.maxBufferLength=l,i.config.maxBufferSize=o),h())},h=()=>{!n&&t&&(n=!0,i.loadSource(t))};return pe(a,"play",()=>{s=!0,i.config.maxBufferLength=l,i.config.maxBufferSize=o,h()},{once:!0}),d(e),d};function tf(e,t){var a;if(!("videoTracks"in e))return;let i=new WeakMap;t.on(B.Events.MANIFEST_PARSED,function(o,d){l();let h=e.addVideoTrack("main");h.selected=!0;for(let[p,m]of d.levels.entries()){let c=h.addRendition(m.url[0],m.width,m.height,m.videoCodec,m.bitrate);i.set(m,`${p}`),c.id=`${p}`}}),t.on(B.Events.AUDIO_TRACKS_UPDATED,function(o,d){s();for(let h of d.audioTracks){let p=h.default?"main":"alternative",m=e.addAudioTrack(p,h.name,h.lang);m.id=`${h.id}`,h.default&&(m.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var o;let d=+((o=[...e.audioTracks].find(p=>p.enabled))==null?void 0:o.id),h=t.audioTracks.map(p=>p.id);d!=t.audioTrack&&h.includes(d)&&(t.audioTrack=d)}),t.on(B.Events.LEVELS_UPDATED,function(o,d){var h;let p=e.videoTracks[(h=e.videoTracks.selectedIndex)!=null?h:0];if(!p)return;let m=d.levels.map(c=>i.get(c));for(let c of e.videoRenditions)c.id&&!m.includes(c.id)&&p.removeRendition(c)});let r=o=>{let d=o.target.selectedIndex;d!=t.nextLevel&&(t.nextLevel=d)};(a=e.videoRenditions)==null||a.addEventListener("change",r);let n=()=>{for(let o of e.videoTracks)e.removeVideoTrack(o)},s=()=>{for(let o of e.audioTracks)e.removeAudioTrack(o)},l=()=>{n(),s()};t.once(B.Events.DESTROYING,l)}var Io=e=>"time"in e?e.time:e.startTime;function af(e,t){t.on(B.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var l,o;let d=(l=s.subtitleTrack)!=null?l:s.closedCaptions,h=t.subtitleTracks.findIndex(({lang:m,name:c,type:v})=>m==d?.lang&&c===s.label&&v.toLowerCase()===s.kind),p=((o=s._id)!=null?o:s.default)?"default":`${s.kind}${h}`;cd(e,s.kind,s.label,d?.lang,p,s.default)})});let a=()=>{if(!t.subtitleTracks.length)return;let r=Array.from(e.textTracks).find(l=>l.id&&l.mode==="showing"&&["subtitles","captions"].includes(l.kind));if(!r)return;let n=t.subtitleTracks[t.subtitleTrack],s=n?n.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||r?.id!==s){let l=t.subtitleTracks.findIndex(({lang:o,name:d,type:h,default:p})=>r.id==="default"&&p||o==r.language&&d===r.label&&h.toLowerCase()===r.kind);t.subtitleTrack=l}r?.id===s&&r.cues&&Array.from(r.cues).forEach(l=>{r.addCue(l)})};e.textTracks.addEventListener("change",a),t.on(B.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let l=e.textTracks.getTrackById(n);if(!l)return;let o=l.mode==="disabled";o&&(l.mode="hidden"),s.forEach(d=>{var h;(h=l.cues)!=null&&h.getCueById(d.id)||l.addCue(d)}),o&&(l.mode="disabled")}),t.once(B.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",a),e.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let i=()=>{Array.from(e.textTracks).forEach(r=>{var n,s;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let l="track";r.kind&&(l+=`[kind="${r.kind}"]`),r.label&&(l+=`[label="${r.label}"]`);let o=e.querySelector(l),d=(s=o?.getAttribute("src"))!=null?s:"";o?.removeAttribute("src"),setTimeout(()=>{o?.setAttribute("src",d)},0)}r.mode!=="hidden"&&(r.mode="hidden")}})};t.once(B.Events.MANIFEST_LOADED,i),t.once(B.Events.MEDIA_ATTACHED,i)}function cd(e,t,a,i,r,n){let s=document.createElement("track");return s.kind=t,s.label=a,i&&(s.srclang=i),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function rf(e,t){Array.prototype.find.call(e.querySelectorAll("track"),i=>i.track===t)?.remove()}function an(e,t,a){var i;return(i=Array.from(e.querySelectorAll("track")).find(r=>r.track.label===t&&r.track.kind===a))==null?void 0:i.track}async function $h(e,t,a,i){let r=an(e,a,i);return r||(r=cd(e,i,a),r.mode="hidden",await new Promise(n=>setTimeout(()=>n(void 0),0))),r.mode!=="hidden"&&(r.mode="hidden"),[...t].sort((n,s)=>Io(s)-Io(n)).forEach(n=>{var s,l;let o=n.value,d=Io(n);if("endTime"in n&&n.endTime!=null)r?.addCue(new VTTCue(d,n.endTime,i==="chapters"?o:JSON.stringify(o??null)));else{let h=Array.prototype.findIndex.call(r?.cues,v=>v.startTime>=d),p=(s=r?.cues)==null?void 0:s[h],m=p?p.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,c=(l=r?.cues)==null?void 0:l[h-1];c&&(c.endTime=d),r?.addCue(new VTTCue(d,m,i==="chapters"?o:JSON.stringify(o??null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var hd="cuepoints",Kh=Object.freeze({label:hd});async function qh(e,t,a=Kh){return $h(e,t,a.label,"metadata")}var Xo=e=>({time:e.startTime,value:JSON.parse(e.text)});function nf(e,t={label:hd}){let a=an(e,t.label,"metadata");return a!=null&&a.cues?Array.from(a.cues,i=>Xo(i)):[]}function Yh(e,t={label:hd}){var a,i;let r=an(e,t.label,"metadata");if(!((a=r?.activeCues)!=null&&a.length))return;if(r.activeCues.length===1)return Xo(r.activeCues[0]);let{currentTime:n}=e,s=Array.prototype.find.call((i=r.activeCues)!=null?i:[],({startTime:l,endTime:o})=>l<=n&&o>n);return Xo(s||r.activeCues[0])}async function sf(e,t=Kh){return new Promise(a=>{pe(e,"loadstart",async()=>{let i=await qh(e,[],t);pe(e,"cuechange",()=>{let r=Yh(e);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});e.dispatchEvent(n)}},{},i),a(i)})})}var md="chapters",Gh=Object.freeze({label:md}),Jo=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function jh(e,t,a=Gh){return $h(e,t,a.label,"chapters")}function of(e,t={label:md}){var a;let i=an(e,t.label,"chapters");return(a=i?.cues)!=null&&a.length?Array.from(i.cues,r=>Jo(r)):[]}function Qh(e,t={label:md}){var a,i;let r=an(e,t.label,"chapters");if(!((a=r?.activeCues)!=null&&a.length))return;if(r.activeCues.length===1)return Jo(r.activeCues[0]);let{currentTime:n}=e,s=Array.prototype.find.call((i=r.activeCues)!=null?i:[],({startTime:l,endTime:o})=>l<=n&&o>n);return Jo(s||r.activeCues[0])}async function lf(e,t=Gh){return new Promise(a=>{pe(e,"loadstart",async()=>{let i=await jh(e,[],t);pe(e,"cuechange",()=>{let r=Qh(e);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});e.dispatchEvent(n)}},{},i),a(i)})})}function df(e,t){if(t){let a=t.playingDate;if(a!=null)return new Date(a.getTime()-e.currentTime*1e3)}return typeof e.getStartDate=="function"?e.getStartDate():new Date(NaN)}function uf(e,t){if(t&&t.playingDate)return t.playingDate;if(typeof e.getStartDate=="function"){let a=e.getStartDate();return new Date(a.getTime()+e.currentTime*1e3)}return new Date(NaN)}var Cr={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},cf=e=>{if(e===te.VIDEO)return Cr.VIDEO;if(e===te.DRM)return Cr.DRM},hf=(e,t)=>{var a,i;let r=ao(e),n=`${r}Token`;return(a=t.tokens)!=null&&a[r]?(i=t.tokens)==null?void 0:i[r]:dd(n,t)?t[n]:void 0},Os=(e,t,a,i,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,l;if(n){let y=L("Your device appears to be offline",r),T,E=S.MEDIA_ERR_NETWORK,w=new S(y,E,!1,T);return w.errorCategory=t,w.muxCode=O.NETWORK_OFFLINE,w.data=e,w}let o="status"in e?e.status:e.code,d=Date.now(),h=S.MEDIA_ERR_NETWORK;if(o===200)return;let p=ao(t),m=hf(t,a),c=cf(t),[v]=ud((s=a.playbackId)!=null?s:"");if(!o||!v)return;let _=Ii(m);if(m&&!_){let y=L("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:p}),T=L("Compact JWT string: {token}",r).format({token:m}),E=new S(y,h,!0,T);return E.errorCategory=t,E.muxCode=O.NETWORK_TOKEN_MALFORMED,E.data=e,E}if(o>=500){let y=new S("",h,i??!0);return y.errorCategory=t,y.muxCode=O.NETWORK_UNKNOWN_ERROR,y}if(o===403)if(_){if(Gb(_,d)){let y={timeStyle:"medium",dateStyle:"medium"},T=L("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:p}),E=L("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",y).format((l=_.exp)!=null?l:0*1e3),currentDate:new Intl.DateTimeFormat("en",y).format(d)}),w=new S(T,h,!0,E);return w.errorCategory=t,w.muxCode=O.NETWORK_TOKEN_EXPIRED,w.data=e,w}if(jb(_,v)){let y=L("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p}),T=L("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:p,playbackId:v,tokenPlaybackId:_.sub}),E=new S(y,h,!0,T);return E.errorCategory=t,E.muxCode=O.NETWORK_TOKEN_SUB_MISMATCH,E.data=e,E}if(Qb(_)){let y=L("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),T=L("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:c}),E=new S(y,h,!0,T);return E.errorCategory=t,E.muxCode=O.NETWORK_TOKEN_AUD_MISSING,E.data=e,E}if(Zb(_,c)){let y=L("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),T=L("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:c,aud:_.aud}),E=new S(y,h,!0,T);return E.errorCategory=t,E.muxCode=O.NETWORK_TOKEN_AUD_MISMATCH,E.data=e,E}}else{let y=L("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p,category:t}),T=L("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new S(y,h,i??!0,T);return E.errorCategory=t,E.muxCode=O.NETWORK_TOKEN_MISSING,E.data=e,E}if(o===412){let y=L("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),T=L("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new S(y,h,i??!0,T);return E.errorCategory=t,E.muxCode=O.NETWORK_NOT_READY,E.streamType=a.streamType===G.LIVE?"live":a.streamType===G.ON_DEMAND?"on-demand":"unknown",E.data=e,E}if(o===404){let y=L("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),T=L("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new S(y,h,i??!0,T);return E.errorCategory=t,E.muxCode=O.NETWORK_NOT_FOUND,E.data=e,E}if(o===400){let y=L("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),T=L("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new S(y,h,i??!0,T);return E.errorCategory=t,E.muxCode=O.NETWORK_INVALID_URL,E.data=e,E}let g=new S("",h,i??!0);return g.errorCategory=t,g.muxCode=O.NETWORK_UNKNOWN_ERROR,g.data=e,g},ju=B.DefaultConfig.capLevelController,Zh=class zh extends ju{constructor(t){super(t)}get levels(){var t;return(t=this.hls.levels)!=null?t:[]}getValidLevels(t){return this.levels.filter((a,i)=>this.isLevelAllowed(a)&&i<=t)}getMaxLevel(t){let a=super.getMaxLevel(t),i=this.getValidLevels(t);if(!i[a])return a;let r=Math.min(i[a].width,i[a].height),n=zh.minMaxResolution;return r>=n?a:ju.getMaxLevelByMediaSize(i,n*(16/9),n)}};Zh.minMaxResolution=720;var mf=Zh,pf=mf,kn={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},vf=e=>{if(e.includes("fps"))return kn.FAIRPLAY;if(e.includes("playready"))return kn.PLAYREADY;if(e.includes("widevine"))return kn.WIDEVINE},Ef=e=>{let t=e.split(`
`).find((a,i,r)=>i&&r[i-1].startsWith("#EXT-X-STREAM-INF"));return fetch(t).then(a=>a.status!==200?Promise.reject(a):a.text())},bf=e=>{let t=e.split(`
`).filter(i=>i.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let a={};for(let i of t){let r=gf(i),n=r["DATA-ID"];n&&(a[n]={...r})}return{sessionData:a}},ff=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function gf(e){let t=[...e.matchAll(ff)];return Object.fromEntries(t.map(([,a,i])=>[a,i]))}var _f=e=>{var t,a,i;let r=e.split(`
`),n=(a=((t=r.find(d=>d.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?t:"").split(":")[1])==null?void 0:a.trim(),s=Wh(n),l=Vh(n),o;if(s===G.LIVE){let d=r.find(h=>h.startsWith("#EXT-X-PART-INF"));d?o=+d.split(":")[1].split("=")[1]*2:o=+(((i=r.find(m=>m.startsWith("#EXT-X-TARGETDURATION"))?.split(":"))==null?void 0:i[1])??6)*3}return{streamType:s,targetLiveWindow:l,liveEdgeStartOffset:o}},yf=async(e,t)=>{if(t===Zt.MP4)return{streamType:G.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===Zt.M3U8){let a=await fetch(e);if(!a.ok)return Promise.reject(a);let i=await a.text(),r=await Ef(i);return{...bf(i),..._f(r)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},Tf=async(e,t,a=io({src:e}))=>{var i,r,n,s;let{streamType:l,targetLiveWindow:o,liveEdgeStartOffset:d,sessionData:h}=await yf(e,a),p=h?.["com.apple.hls.chapters"];(p!=null&&p.URI||p!=null&&p.VALUE.toLocaleLowerCase().startsWith("http"))&&pd((i=p.URI)!=null?i:p.VALUE,t),((r=le.get(t))!=null?r:{}).liveEdgeStartOffset=d,((n=le.get(t))!=null?n:{}).targetLiveWindow=o,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=le.get(t))!=null?s:{}).streamType=l,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},pd=async(e,t)=>{var a,i;try{let r=await fetch(e);if(!r.ok)throw new Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!((a=n?.[0])!=null&&a.metadata))return;for(let o of n[0].metadata)o.key&&o.value&&(s[o.key]=o.value);((i=le.get(t))!=null?i:{}).metadata=s;let l=new CustomEvent("muxmetadata");t.dispatchEvent(l)}catch(r){console.error(r)}},Af=e=>{var t;let a=e.type,i=Wh(a),r=Vh(a),n,s=!!((t=e.partList)!=null&&t.length);return i===G.LIVE&&(n=s?e.partTarget*2:e.targetduration*3),{streamType:i,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},kf=(e,t,a)=>{var i,r,n,s,l,o,d,h;let{streamType:p,targetLiveWindow:m,liveEdgeStartOffset:c,lowLatency:v}=Af(e);if(p===G.LIVE){v?(a.config.backBufferLength=(i=a.userConfig.backBufferLength)!=null?i:4,a.config.maxFragLookUpTolerance=(r=a.userConfig.maxFragLookUpTolerance)!=null?r:.001,a.config.abrBandWidthUpFactor=(n=a.userConfig.abrBandWidthUpFactor)!=null?n:a.config.abrBandWidthFactor):a.config.backBufferLength=(s=a.userConfig.backBufferLength)!=null?s:8;let _=Object.freeze({get length(){return t.seekable.length},start(g){return t.seekable.start(g)},end(g){var y;return g>this.length||g<0||Number.isFinite(t.duration)?t.seekable.end(g):(y=a.liveSyncPosition)!=null?y:t.seekable.end(g)}});((l=le.get(t))!=null?l:{}).seekable=_}((o=le.get(t))!=null?o:{}).liveEdgeStartOffset=c,((d=le.get(t))!=null?d:{}).targetLiveWindow=m,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((h=le.get(t))!=null?h:{}).streamType=p,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},Qu,Zu,wf=(Zu=(Qu=globalThis?.navigator)==null?void 0:Qu.userAgent)!=null?Zu:"",zu,Xu,Ju,Sf=(Ju=(Xu=(zu=globalThis?.navigator)==null?void 0:zu.userAgentData)==null?void 0:Xu.platform)!=null?Ju:"",If=wf.toLowerCase().includes("android")||["x11","android"].some(e=>Sf.toLowerCase().includes(e)),le=new WeakMap,zt="mux.com",ec,tc,Xh=(tc=(ec=B).isSupported)==null?void 0:tc.call(ec),Rf=If,vd=()=>ld.utils.now(),Df=ld.utils.generateUUID,el=({playbackId:e,customDomain:t=zt,maxResolution:a,minResolution:i,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:l,assetEndTime:o,playbackToken:d,tokens:{playback:h=d}={},extraSourceParams:p={}}={})=>{if(!e)return;let[m,c=""]=ud(e),v=new URL(`https://stream.${t}/${m}.m3u8${c}`);return h||v.searchParams.has("token")?(v.searchParams.forEach((_,g)=>{g!="token"&&v.searchParams.delete(g)}),h&&v.searchParams.set("token",h)):(a&&v.searchParams.set("max_resolution",a),i&&(v.searchParams.set("min_resolution",i),a&&+a.slice(0,-1)<+i.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",i,"maxResolution",a)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),l&&v.searchParams.set("asset_start_time",`${l}`),o&&v.searchParams.set("asset_end_time",`${o}`),Object.entries(p).forEach(([_,g])=>{g!=null&&v.searchParams.set(_,g)})),v.toString()},ro=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},Ed=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},Cf=e=>{var t,a,i;return(t=e?.metadata)!=null&&t.video_id?e.metadata.video_id:sm(e)&&(i=(a=ro(e.playbackId))!=null?a:Ed(e.src))!=null?i:e.src},Jh=e=>{var t;return(t=le.get(e))==null?void 0:t.error},Lf=e=>{var t;return(t=le.get(e))==null?void 0:t.metadata},tl=e=>{var t,a;return(a=(t=le.get(e))==null?void 0:t.streamType)!=null?a:G.UNKNOWN},Mf=e=>{var t,a;return(a=(t=le.get(e))==null?void 0:t.targetLiveWindow)!=null?a:Number.NaN},bd=e=>{var t,a;return(a=(t=le.get(e))==null?void 0:t.seekable)!=null?a:e.seekable},Of=e=>{var t;let a=(t=le.get(e))==null?void 0:t.liveEdgeStartOffset;if(typeof a!="number")return Number.NaN;let i=bd(e);return i.length?i.end(i.length-1)-a:Number.NaN},fd=.034,Nf=(e,t,a=fd)=>Math.abs(e-t)<=a,em=(e,t,a=fd)=>e>t||Nf(e,t,a),xf=(e,t=fd)=>e.paused&&em(e.currentTime,e.duration,t),tm=(e,t)=>{var a,i,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?(i=(a=t.levels)==null?void 0:a[t.currentLevel])==null?void 0:i.details:(r=t.levels.find(p=>!!p.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let l=s[s.length-1];if(e.currentTime<=l.start)return!1;let o=l.start+l.duration/2,d=e.buffered.start(e.buffered.length-1),h=e.buffered.end(e.buffered.length-1);return o>d&&o<h},am=(e,t)=>e.ended||e.loop?e.ended:t&&tm(e,t)?!0:xf(e),Pf=(e,t,a)=>{im(t,a,e);let{metadata:i={}}=e,{view_session_id:r=Df()}=i,n=Cf(e);i.view_session_id=r,i.video_id=n,e.metadata=i;let s=h=>{var p;(p=t.mux)==null||p.emit("hb",{view_drm_type:h})};e.drmTypeCb=s,le.set(t,{retryCount:0});let l=Uf(e,t),o=ef(e,t,l);e!=null&&e.muxDataKeepSession&&t!=null&&t.mux&&!t.mux.deleted?l&&t.mux.addHLSJS({hlsjs:l,Hls:l?B:void 0}):$f(e,t,l),Kf(e,t,l),sf(t),lf(t);let d=Jb(e,t,l);return{engine:l,setAutoplay:d,setPreload:o}},im=(e,t,a)=>{let i=t?.engine;e!=null&&e.mux&&!e.mux.deleted&&(a!=null&&a.muxDataKeepSession?i&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),i&&(i.detachMedia(),i.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",lm),e.removeEventListener("error",al),e.removeEventListener("durationchange",om),le.delete(e),e.dispatchEvent(new Event("teardown")))};function rm(e,t){var a;let i=io(e);if(i!==Zt.M3U8)return!0;let r=!i||((a=t.canPlayType(i))!=null?a:!0),{preferPlayback:n}=e,s=n===xt.MSE,l=n===xt.NATIVE;return r&&(l||!(Xh&&(s||Rf)))}var Uf=(e,t)=>{let{debug:a,streamType:i,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:l={}}=e,o=io(e)===Zt.M3U8,d=rm(e,t);if(o&&!d&&Xh){let h={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},p=Hf(i),m=Bf(e),c=[lr.QUERY,lr.HEADER].includes(s)?{useHeaders:s===lr.HEADER,sessionId:n?.view_session_id,contentId:n?.video_id}:void 0,v=new B({debug:a,startPosition:r,cmcd:c,xhrSetup:(_,g)=>{var y,T;if(s&&s!==lr.QUERY)return;let E=new URL(g);if(!E.searchParams.has("CMCD"))return;let w=((T=(y=E.searchParams.get("CMCD"))==null?void 0:y.split(","))!=null?T:[]).filter(C=>C.startsWith("sid")||C.startsWith("cid")).join(",");E.searchParams.set("CMCD",w),_.open("GET",E)},capLevelController:pf,...h,...p,...m,...l});return v.on(B.Events.MANIFEST_PARSED,async function(_,g){var y,T;let E=(y=g.sessionData)==null?void 0:y["com.apple.hls.chapters"];(E!=null&&E.URI||E!=null&&E.VALUE.toLocaleLowerCase().startsWith("http"))&&pd((T=E?.URI)!=null?T:E?.VALUE,t)}),v}},Hf=e=>e===G.LIVE?{backBufferLength:8}:{},Bf=e=>{let{tokens:{drm:t}={},playbackId:a,drmTypeCb:i}=e,r=ro(a);return!t||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:wn(e,"fairplay"),serverCertificateUrl:nm(e,"fairplay")},"com.widevine.alpha":{licenseUrl:wn(e,"widevine")},"com.microsoft.playready":{licenseUrl:wn(e,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(l=>{var o;let d=(o=l.videoCapabilities)==null?void 0:o.map(h=>({...h,robustness:"HW_SECURE_ALL"}));return{...l,videoCapabilities:d}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(l=>{let o=vf(n);return i?.(o),l}))}},Wf=async e=>{let t=await fetch(e);return t.status!==200?Promise.reject(t):await t.arrayBuffer()},Vf=async(e,t)=>{let a=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});if(a.status!==200)return Promise.reject(a);let i=await a.arrayBuffer();return new Uint8Array(i)},Ff=(e,t)=>{pe(t,"encrypted",async a=>{try{let i=a.initDataType;if(i!=="skd"){console.error(`Received unexpected initialization data type "${i}"`);return}if(!t.mediaKeys){let o=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(h=>{var p;return(p=e.drmTypeCb)==null||p.call(e,kn.FAIRPLAY),h}).catch(()=>{let h=L("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),p=new S(h,S.MEDIA_ERR_ENCRYPTED,!0);p.errorCategory=te.DRM,p.muxCode=O.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,at(t,p)});if(!o)return;let d=await o.createMediaKeys();try{let h=await Wf(nm(e,"fairplay")).catch(p=>{if(p instanceof Response){let m=Os(p,te.DRM,e);return console.error("mediaError",m?.message,m?.context),m?Promise.reject(m):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(p)});await d.setServerCertificate(h).catch(()=>{let p=L("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),m=new S(p,S.MEDIA_ERR_ENCRYPTED,!0);return m.errorCategory=te.DRM,m.muxCode=O.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(m)})}catch(h){at(t,h);return}await t.setMediaKeys(d)}let r=a.initData;if(r==null){console.error(`Could not start encrypted playback due to missing initData in ${a.type} event`);return}let n=t.mediaKeys.createSession();n.addEventListener("keystatuseschange",()=>{n.keyStatuses.forEach(o=>{let d;if(o==="internal-error"){let h=L("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");d=new S(h,S.MEDIA_ERR_ENCRYPTED,!0),d.errorCategory=te.DRM,d.muxCode=O.ENCRYPTED_CDM_ERROR}else if(o==="output-restricted"||o==="output-downscaled"){let h=L("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");d=new S(h,S.MEDIA_ERR_ENCRYPTED,!1),d.errorCategory=te.DRM,d.muxCode=O.ENCRYPTED_OUTPUT_RESTRICTED}d&&at(t,d)})});let s=await Promise.all([n.generateRequest(i,r).catch(()=>{let o=L("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),d=new S(o,S.MEDIA_ERR_ENCRYPTED,!0);d.errorCategory=te.DRM,d.muxCode=O.ENCRYPTED_GENERATE_REQUEST_FAILED,at(t,d)}),new Promise(o=>{n.addEventListener("message",d=>{o(d.message)},{once:!0})})]).then(([,o])=>o),l=await Vf(s,wn(e,"fairplay")).catch(o=>{if(o instanceof Response){let d=Os(o,te.DRM,e);return console.error("mediaError",d?.message,d?.context),d?Promise.reject(d):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(o)});await n.update(l).catch(()=>{let o=L("Failed to update DRM license. This may be an issue with the player or your protected content."),d=new S(o,S.MEDIA_ERR_ENCRYPTED,!0);return d.errorCategory=te.DRM,d.muxCode=O.ENCRYPTED_UPDATE_LICENSE_FAILED,Promise.reject(d)})}catch(i){at(t,i);return}})},wn=({playbackId:e,tokens:{drm:t}={},customDomain:a=zt},i)=>{let r=ro(e);return`https://license.${a.toLocaleLowerCase().endsWith(zt)?a:zt}/license/${i}/${r}?token=${t}`},nm=({playbackId:e,tokens:{drm:t}={},customDomain:a=zt},i)=>{let r=ro(e);return`https://license.${a.toLocaleLowerCase().endsWith(zt)?a:zt}/appcert/${i}/${r}?token=${t}`},sm=({playbackId:e,src:t,customDomain:a})=>{if(e)return!0;if(typeof t!="string")return!1;let i=window?.location.href,r=new URL(t,i).hostname.toLocaleLowerCase();return r.includes(zt)||!!a&&r.includes(a.toLocaleLowerCase())},$f=(e,t,a)=>{var i;let{envKey:r,disableTracking:n,muxDataSDK:s=ld,muxDataSDKOptions:l={}}=e,o=sm(e);if(!n&&(r||o)){let{playerInitTime:d,playerSoftwareName:h,playerSoftwareVersion:p,beaconCollectionDomain:m,debug:c,disableCookies:v}=e,_={...e.metadata,video_title:((i=e?.metadata)==null?void 0:i.video_title)||void 0},g=y=>typeof y.player_error_code=="string"?!1:typeof e.errorTranslator=="function"?e.errorTranslator(y):y;s.monitor(t,{debug:c,beaconCollectionDomain:m,hlsjs:a,Hls:a?B:void 0,automaticErrorTracking:!1,errorTranslator:g,disableCookies:v,...l,data:{...r?{env_key:r}:{},player_software_name:h,player_software:h,player_software_version:p,player_init_time:d,..._}})}},Kf=(e,t,a)=>{var i,r;let n=rm(e,t),{src:s,customDomain:l=zt}=e,o=()=>{t.ended||e.disablePseudoEnded||!am(t,a)||(tm(t,a)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,h,p=()=>{let m=bd(t),c,v;m.length>0&&(c=m.start(0),v=m.end(0)),(h!==v||d!==c)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=c,h=v};if(pe(t,"durationchange",p),t&&n){let m=io(e);if(typeof s=="string"){if(s.endsWith(".mp4")&&s.includes(l)){let _=Ed(s),g=new URL(`https://stream.${l}/${_}/metadata.json`);pd(g.toString(),t)}let c=()=>{if(tl(t)!==G.LIVE||Number.isFinite(t.duration))return;let _=setInterval(p,1e3);t.addEventListener("teardown",()=>{clearInterval(_)},{once:!0}),pe(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(_)})},v=async()=>Tf(s,t,m).then(c).catch(_=>{if(_ instanceof Response){let g=Os(_,te.VIDEO,e);if(g){at(t,g);return}}});if(t.preload==="none"){let _=()=>{v(),t.removeEventListener("loadedmetadata",g)},g=()=>{v(),t.removeEventListener("play",_)};pe(t,"play",_,{once:!0}),pe(t,"loadedmetadata",g,{once:!0})}else v();(i=e.tokens)!=null&&i.drm?Ff(e,t):pe(t,"encrypted",()=>{let _=L("Attempting to play DRM-protected content without providing a DRM token."),g=new S(_,S.MEDIA_ERR_ENCRYPTED,!0);g.errorCategory=te.DRM,g.muxCode=O.ENCRYPTED_MISSING_TOKEN,at(t,g)},{once:!0}),t.setAttribute("src",s),e.startTime&&(((r=le.get(t))!=null?r:{}).startTime=e.startTime,t.addEventListener("durationchange",om,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",lm),t.addEventListener("error",al),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(c=>{c.remove()})},{once:!0}),pe(t,"pause",o),pe(t,"seeked",o),pe(t,"play",()=>{t.ended||em(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else a&&s?(a.once(B.Events.LEVEL_LOADED,(m,c)=>{kf(c.details,t,a),p(),tl(t)===G.LIVE&&!Number.isFinite(t.duration)&&(a.on(B.Events.LEVEL_UPDATED,p),pe(t,"durationchange",()=>{Number.isFinite(t.duration)&&a.off(B.Events.LEVELS_UPDATED,p)}))}),a.on(B.Events.ERROR,(m,c)=>{var v,_;let g=qf(c,e);if(g.muxCode===O.NETWORK_NOT_READY){let y=(v=le.get(t))!=null?v:{},T=(_=y.retryCount)!=null?_:0;if(T<6){let E=T===0?5e3:6e4,w=new S(`Retrying in ${E/1e3} seconds...`,g.code,g.fatal);Object.assign(w,g),at(t,w),setTimeout(()=>{y.retryCount=T+1,c.details==="manifestLoadError"&&c.url&&a.loadSource(c.url)},E);return}else{y.retryCount=0;let E=new S('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',g.code,g.fatal);Object.assign(E,g),at(t,E);return}}at(t,g)}),a.on(B.Events.MANIFEST_LOADED,()=>{let m=le.get(t);m&&m.error&&(m.error=null,m.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",al),pe(t,"waiting",o),tf(e,a),af(t,a),a.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function om(e){var t;let a=e.target,i=(t=le.get(a))==null?void 0:t.startTime;if(i&&$b(a.seekable,a.duration,i)){let r=a.preload==="auto";r&&(a.preload="none"),a.currentTime=i,r&&(a.preload="auto")}}async function lm(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(t!=null&&t.error))return;let{message:a,code:i}=t.error,r=new S(a,i);if(t.src&&i===S.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;((n=Jh(t))!=null?n:t.error)?.code===S.MEDIA_ERR_SRC_NOT_SUPPORTED&&at(t,r)},500);return}if(t.src&&(i!==S.MEDIA_ERR_DECODE||i!==void 0))try{let{status:n}=await fetch(t.src);r.data={response:{code:n}}}catch{}at(t,r)}function at(e,t){var a;t.fatal&&(((a=le.get(e))!=null?a:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function al(e){var t,a;if(!(e instanceof CustomEvent)||!(e.detail instanceof S))return;let i=e.target,r=e.detail;!r||!r.fatal||(((t=le.get(i))!=null?t:{}).error=r,(a=i.mux)==null||a.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var qf=(e,t)=>{var a,i,r;console.error("getErrorFromHlsErrorData()",e);let n={[B.ErrorTypes.NETWORK_ERROR]:S.MEDIA_ERR_NETWORK,[B.ErrorTypes.MEDIA_ERROR]:S.MEDIA_ERR_DECODE,[B.ErrorTypes.KEY_SYSTEM_ERROR]:S.MEDIA_ERR_ENCRYPTED},s=h=>[B.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,B.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(h.details)?S.MEDIA_ERR_NETWORK:n[h.type],l=h=>{if(h.type===B.ErrorTypes.KEY_SYSTEM_ERROR)return te.DRM;if(h.type===B.ErrorTypes.NETWORK_ERROR)return te.VIDEO},o,d=s(e);if(d===S.MEDIA_ERR_NETWORK&&e.response){let h=(a=l(e))!=null?a:te.VIDEO;o=(i=Os(e.response,h,t,e.fatal))!=null?i:new S("",d,e.fatal)}else if(d===S.MEDIA_ERR_ENCRYPTED)if(e.details===B.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let h=L("Attempting to play DRM-protected content without providing a DRM token.");o=new S(h,S.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=te.DRM,o.muxCode=O.ENCRYPTED_MISSING_TOKEN}else if(e.details===B.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let h=L("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");o=new S(h,S.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=te.DRM,o.muxCode=O.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(e.details===B.ErrorDetails.KEY_SYSTEM_NO_SESSION){let h=L("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");o=new S(h,S.MEDIA_ERR_ENCRYPTED,!0),o.errorCategory=te.DRM,o.muxCode=O.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(e.details===B.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let h=L("Failed to update DRM license. This may be an issue with the player or your protected content.");o=new S(h,S.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=te.DRM,o.muxCode=O.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(e.details===B.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let h=L("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");o=new S(h,S.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=te.DRM,o.muxCode=O.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(e.details===B.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let h=L("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");o=new S(h,S.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=te.DRM,o.muxCode=O.ENCRYPTED_CDM_ERROR}else if(e.details===B.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let h=L("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");o=new S(h,S.MEDIA_ERR_ENCRYPTED,!1),o.errorCategory=te.DRM,o.muxCode=O.ENCRYPTED_OUTPUT_RESTRICTED}else o=new S(e.error.message,S.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=te.DRM,o.muxCode=O.ENCRYPTED_ERROR;else o=new S("",d,e.fatal);return o.context||(o.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${(r=e.err)==null?void 0:r.message}
`:""}`),o.data=e,o},dm=e=>{throw TypeError(e)},gd=(e,t,a)=>t.has(e)||dm("Cannot "+a),De=(e,t,a)=>(gd(e,t,"read from private field"),a?a.call(e):t.get(e)),ot=(e,t,a)=>t.has(e)?dm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),et=(e,t,a,i)=>(gd(e,t,"write to private field"),t.set(e,a),a),Ro=(e,t,a)=>(gd(e,t,"access private method"),a),Yf=()=>{try{return"0.27.0"}catch{}return"UNKNOWN"},Gf=Yf(),jf=()=>Gf,Qf=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,f={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},Zf=Object.values(f),ac=jf(),ic="mux-video",Tt,dr,Sn,ur,In,Rn,Dn,Cn,Ln,cr,hr,Mn,zf=class extends sn{constructor(){super(),ot(this,hr),ot(this,Tt),ot(this,dr),ot(this,Sn),ot(this,ur,{}),ot(this,In,{}),ot(this,Rn),ot(this,Dn),ot(this,Cn),ot(this,Ln),ot(this,cr,""),et(this,Sn,vd()),this.nativeEl.addEventListener("muxmetadata",e=>{var t;let a=Lf(this.nativeEl),i=(t=this.metadata)!=null?t:{};this.metadata={...a,...i},a?.["com.mux.video.branding"]==="mux-free-plan"&&(et(this,cr,"default"),this.updateLogo())})}static get NAME(){return ic}static get VERSION(){return ac}static get observedAttributes(){var e;return[...Zf,...(e=sn.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?Qf:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var t;return`
      ${sn.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((t=e[f.LOGO])!=null?t:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(f.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Ms.includes(e)?this.setAttribute(f.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${Ms.join()}`):this.removeAttribute(f.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(f.PLAYER_INIT_TIME)?+this.getAttribute(f.PLAYER_INIT_TIME):De(this,Sn)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(f.PLAYER_INIT_TIME):this.setAttribute(f.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=De(this,Cn))!=null?e:ic}set playerSoftwareName(e){et(this,Cn,e)}get playerSoftwareVersion(){var e;return(e=De(this,Dn))!=null?e:ac}set playerSoftwareVersion(e){et(this,Dn,e)}get _hls(){var e;return(e=De(this,Tt))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=Jh(this.nativeEl))!=null?e:null}get errorTranslator(){return De(this,Ln)}set errorTranslator(e){et(this,Ln,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(f.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(f.TYPE,e):this.removeAttribute(f.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(f.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(f.DEBUG,""):this.removeAttribute(f.DEBUG))}get disableTracking(){return this.hasAttribute(f.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(f.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(f.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(f.DISABLE_COOKIES,""):this.removeAttribute(f.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(f.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(f.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(f.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(f.START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(f.START_TIME):this.setAttribute(f.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(f.PLAYBACK_ID)?this.getAttribute(f.PLAYBACK_ID):(e=Ed(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(f.PLAYBACK_ID,e):this.removeAttribute(f.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(f.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(f.MAX_RESOLUTION,e):this.removeAttribute(f.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(f.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(f.MIN_RESOLUTION,e):this.removeAttribute(f.MIN_RESOLUTION))}get renditionOrder(){var e;return(e=this.getAttribute(f.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(f.RENDITION_ORDER,e):this.removeAttribute(f.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(f.PROGRAM_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){e==null?this.removeAttribute(f.PROGRAM_START_TIME):this.setAttribute(f.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(f.PROGRAM_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){e==null?this.removeAttribute(f.PROGRAM_END_TIME):this.setAttribute(f.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(f.ASSET_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){e==null?this.removeAttribute(f.ASSET_START_TIME):this.setAttribute(f.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(f.ASSET_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){e==null?this.removeAttribute(f.ASSET_END_TIME):this.setAttribute(f.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(f.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(f.CUSTOM_DOMAIN,e):this.removeAttribute(f.CUSTOM_DOMAIN))}get drmToken(){var e;return(e=this.getAttribute(f.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(f.DRM_TOKEN,e):this.removeAttribute(f.DRM_TOKEN))}get playbackToken(){var e,t,a,i;if(this.hasAttribute(f.PLAYBACK_TOKEN))return(e=this.getAttribute(f.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(f.PLAYBACK_ID)){let[,r]=ud((t=this.playbackId)!=null?t:"");return(a=new URLSearchParams(r).get("token"))!=null?a:void 0}if(this.src)return(i=new URLSearchParams(this.src).get("token"))!=null?i:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(f.PLAYBACK_TOKEN,e):this.removeAttribute(f.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(f.PLAYBACK_TOKEN),t=this.getAttribute(f.DRM_TOKEN);return{...De(this,In),...e!=null?{playback:e}:{},...t!=null?{drm:t}:{}}}set tokens(e){et(this,In,e??{})}get ended(){return am(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(f.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(f.ENV_KEY,e):this.removeAttribute(f.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(f.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(f.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(f.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(f.STREAM_TYPE))!=null?e:tl(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(f.STREAM_TYPE,e):this.removeAttribute(f.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(f.TARGET_LIVE_WINDOW)?+this.getAttribute(f.TARGET_LIVE_WINDOW):Mf(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(f.TARGET_LIVE_WINDOW):this.setAttribute(f.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(f.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,i=(e=this.nativeEl.seekable.end(0))!=null?e:0,r=(t=this.nativeEl.seekable.start(0))!=null?t:0;return Math.max(r,i-a)}return Of(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(f.LIVE_EDGE_OFFSET))return+this.getAttribute(f.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(f.LIVE_EDGE_OFFSET):this.setAttribute(f.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return bd(this.nativeEl)}async addCuePoints(e){return qh(this.nativeEl,e)}get activeCuePoint(){return Yh(this.nativeEl)}get cuePoints(){return nf(this.nativeEl)}async addChapters(e){return jh(this.nativeEl,e)}get activeChapter(){return Qh(this.nativeEl)}get chapters(){return of(this.nativeEl)}getStartDate(){return df(this.nativeEl,this._hls)}get currentPdt(){return uf(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(f.PREFER_PLAYBACK);if(e===xt.MSE||e===xt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===xt.MSE||e===xt.NATIVE?this.setAttribute(f.PREFER_PLAYBACK,e):this.removeAttribute(f.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![f.METADATA_URL].includes(e)).reduce((e,t)=>{let a=this.getAttribute(t);return a!=null&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...De(this,ur)}}set metadata(e){et(this,ur,e??{}),this.mux&&this.mux.emit("hb",De(this,ur))}get _hlsConfig(){return De(this,Rn)}set _hlsConfig(e){et(this,Rn,e)}get logo(){var e;return(e=this.getAttribute(f.LOGO))!=null?e:De(this,cr)}set logo(e){e?this.setAttribute(f.LOGO,e):this.removeAttribute(f.LOGO)}load(){et(this,Tt,Pf(this,this.nativeEl,De(this,Tt)))}unload(){im(this.nativeEl,De(this,Tt),this),et(this,Tt,void 0)}attributeChangedCallback(e,t,a){var i,r;switch(sn.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,a),e){case f.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case f.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let n=!!t,s=!!a;!n&&s?Ro(this,hr,Mn).call(this):n&&!s?this.unload():n&&s&&(this.unload(),Ro(this,hr,Mn).call(this));break}case"autoplay":if(a===t)break;(i=De(this,Tt))==null||i.setAutoplay(this.autoplay);break;case"preload":if(a===t)break;(r=De(this,Tt))==null||r.setPreload(a);break;case f.PLAYBACK_ID:this.src=el(this);break;case f.DEBUG:{let n=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=n);break}case f.METADATA_URL:a&&fetch(a).then(n=>n.json()).then(n=>this.metadata=n).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case f.STREAM_TYPE:(a==null||a!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case f.TARGET_LIVE_WINDOW:(a==null||a!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case f.LOGO:(a==null||a!==t)&&this.updateLogo();break}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let t=this.constructor.getLogoHTML(De(this,cr)||this.logo);e.innerHTML=t}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.nativeEl&&this.src&&!De(this,Tt)&&Ro(this,hr,Mn).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Tt=new WeakMap,dr=new WeakMap,Sn=new WeakMap,ur=new WeakMap,In=new WeakMap,Rn=new WeakMap,Dn=new WeakMap,Cn=new WeakMap,Ln=new WeakMap,cr=new WeakMap,hr=new WeakSet,Mn=async function(){De(this,dr)||(await et(this,dr,Promise.resolve()),et(this,dr,null),this.load())};const Fa=new WeakMap;class Do extends Error{}class Xf extends Error{}const Jf=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],eg=globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{const a=t.deref();a&&e(a)})}}:Set;function tg(e){globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?e():customElements.whenDefined("google-cast-button").then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(e)}}function ag(){return globalThis.chrome}function ig(){const e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;const t=document.createElement("script");t.src=e,document.head.append(t)}function ba(){return globalThis.cast?.framework?.CastContext.getInstance()}function _d(){return ba()?.getCurrentSession()}function yd(){return _d()?.getSessionObj().media[0]}function rg(e){return new Promise((t,a)=>{yd().editTracksInfo(e,t,a)})}function ng(e){return new Promise((t,a)=>{yd().getStatus(e,t,a)})}function rc(e){return ba().setOptions({...um(),...e})}function um(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function sg(e){if(!e)return;const t=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,a=e.match(t);return a?a[1]:null}function og(e){const t=e.split(`
`),a=[];for(let i=0;i<t.length;i++)if(t[i].trim().startsWith("#EXT-X-STREAM-INF")){const r=t[i+1]?t[i+1].trim():"";r&&!r.startsWith("#")&&a.push(r)}return a}function lg(e){return e.split(`
`).find(t=>!t.trim().startsWith("#")&&t.trim()!=="")}async function dg(e){try{const t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return Jf.some(a=>t===a)}catch(t){return console.error("Error while trying to get the Content-Type of the manifest",t),!1}}async function ug(e){try{const t=await(await fetch(e)).text();let a=t;const i=og(t);if(i.length>0){const n=new URL(i[0],e).toString();a=await(await fetch(n)).text()}const r=lg(a);return sg(r)}catch(t){console.error("Error while trying to parse the manifest playlist",t);return}}const On=new eg,aa=new WeakSet;let fe;tg(()=>{if(!globalThis.chrome?.cast?.isAvailable){console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);return}fe||(fe=cast.framework,ba().addEventListener(fe.CastContextEventType.CAST_STATE_CHANGED,e=>{On.forEach(t=>Fa.get(t).onCastStateChanged?.(e))}),ba().addEventListener(fe.CastContextEventType.SESSION_STATE_CHANGED,e=>{On.forEach(t=>Fa.get(t).onSessionStateChanged?.(e))}),On.forEach(e=>Fa.get(e).init?.()))});let nc=0;class cg extends EventTarget{#t;#s;#a;#i;#e="disconnected";#r=!1;#o=new Set;#c=new WeakMap;constructor(t){super(),this.#t=t,On.add(this),Fa.set(this,{init:()=>this.#d(),onCastStateChanged:()=>this.#l(),onSessionStateChanged:()=>this.#p(),getCastPlayer:()=>this.#n}),this.#d()}get#n(){if(aa.has(this.#t))return this.#a}get state(){return this.#e}async watchAvailability(t){if(this.#t.disableRemotePlayback)throw new Do("disableRemotePlayback attribute is present.");return this.#c.set(t,++nc),this.#o.add(t),queueMicrotask(()=>t(this.#m())),nc}async cancelWatchAvailability(t){if(this.#t.disableRemotePlayback)throw new Do("disableRemotePlayback attribute is present.");t?this.#o.delete(t):this.#o.clear()}async prompt(){if(this.#t.disableRemotePlayback)throw new Do("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new Xf("The RemotePlayback API is disabled on this platform.");const t=aa.has(this.#t);aa.add(this.#t),rc(this.#t.castOptions),Object.entries(this.#i).forEach(([a,i])=>{this.#a.controller.addEventListener(a,i)});try{await ba().requestSession()}catch(a){if(t||aa.delete(this.#t),a==="cancel")return;throw new Error(a)}Fa.get(this.#t)?.loadOnPrompt?.()}#h(){aa.has(this.#t)&&(Object.entries(this.#i).forEach(([t,a])=>{this.#a.controller.removeEventListener(t,a)}),aa.delete(this.#t),this.#t.muted=this.#a.isMuted,this.#t.currentTime=this.#a.savedPlayerState.currentTime,this.#a.savedPlayerState.isPaused===!1&&this.#t.play())}#m(){const t=ba()?.getCastState();return t&&t!=="NO_DEVICES_AVAILABLE"}#l(){const t=ba().getCastState();if(aa.has(this.#t)&&t==="CONNECTING"&&(this.#e="connecting",this.dispatchEvent(new Event("connecting"))),!this.#r&&t?.includes("CONNECT")){this.#r=!0;for(let a of this.#o)a(!0)}else if(this.#r&&(!t||t==="NO_DEVICES_AVAILABLE")){this.#r=!1;for(let a of this.#o)a(!1)}}async#p(){const{SESSION_RESUMED:t}=fe.SessionState;if(ba().getSessionState()===t&&this.#t.castSrc===yd()?.media.contentId){aa.add(this.#t),Object.entries(this.#i).forEach(([a,i])=>{this.#a.controller.addEventListener(a,i)});try{await ng(new chrome.cast.media.GetStatusRequest)}catch(a){console.error(a)}this.#i[fe.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#i[fe.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#d(){!fe||this.#s||(this.#s=!0,rc(this.#t.castOptions),this.#t.textTracks.addEventListener("change",()=>this.#u()),this.#l(),this.#a=new fe.RemotePlayer,new fe.RemotePlayerController(this.#a),this.#i={[fe.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:t})=>{t===!0?(this.#e="connected",this.dispatchEvent(new Event("connect"))):(this.#h(),this.#e="disconnected",this.dispatchEvent(new Event("disconnect")))},[fe.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#t.dispatchEvent(new Event("durationchange"))},[fe.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#t.dispatchEvent(new Event("volumechange"))},[fe.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#t.dispatchEvent(new Event("volumechange"))},[fe.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#n?.isMediaLoaded&&this.#t.dispatchEvent(new Event("timeupdate"))},[fe.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#t.dispatchEvent(new Event("resize"))},[fe.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#t.dispatchEvent(new Event(this.paused?"pause":"play"))},[fe.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#n?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#t.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#n?.playerState]))},[fe.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#n?.isMediaLoaded&&(await Promise.resolve(),this.#v())}})}#v(){this.#u()}async#u(){if(!this.#n)return;const t=(this.#a.mediaInfo?.tracks??[]).filter(({type:o})=>o===chrome.cast.media.TrackType.TEXT),a=[...this.#t.textTracks].filter(({kind:o})=>o==="subtitles"||o==="captions"),i=t.map(({language:o,name:d,trackId:h})=>{const{mode:p}=a.find(m=>m.language===o&&m.label===d)??{};return p?{mode:p,trackId:h}:!1}).filter(Boolean),r=i.filter(({mode:o})=>o!=="showing").map(({trackId:o})=>o),n=i.find(({mode:o})=>o==="showing"),s=_d()?.getSessionObj().media[0]?.activeTrackIds??[];let l=s;if(s.length&&(l=l.filter(o=>!r.includes(o))),n?.trackId&&(l=[...l,n.trackId]),l=[...new Set(l)],!((o,d)=>o.length===d.length&&o.every(h=>d.includes(h)))(s,l))try{const o=new chrome.cast.media.EditTracksInfoRequest(l);await rg(o)}catch(o){console.error(o)}}}const hg=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#t={paused:!1};#s=um();#a;#i;get remote(){return this.#i?this.#i:ag()?(this.disableRemotePlayback||ig(),Fa.set(this,{loadOnPrompt:()=>this.#r()}),this.#i=new cg(this)):super.remote}get#e(){return Fa.get(this.remote)?.getCastPlayer?.()}attributeChangedCallback(t,a,i){if(super.attributeChangedCallback(t,a,i),t==="cast-receiver"&&i){this.#s.receiverApplicationId=i;return}if(this.#e)switch(t){case"cast-stream-type":case"cast-src":this.load();break}}async#r(){this.#t.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(t){console.error(t)}}async load(){if(!this.#e)return super.load();const t=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);t.customData=this.castCustomData;const a=[...this.querySelectorAll("track")].filter(({kind:s,src:l})=>l&&(s==="subtitles"||s==="captions")),i=[];let r=0;if(a.length&&(t.tracks=a.map(s=>{const l=++r;i.length===0&&s.track.mode==="showing"&&i.push(l);const o=new chrome.cast.media.Track(l,chrome.cast.media.TrackType.TEXT);return o.trackContentId=s.src,o.trackContentType="text/vtt",o.subtype=s.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,o.name=s.label,o.language=s.srclang,o})),this.castStreamType==="live"?t.streamType=chrome.cast.media.StreamType.LIVE:t.streamType=chrome.cast.media.StreamType.BUFFERED,t.metadata=new chrome.cast.media.GenericMediaMetadata,t.metadata.title=this.title,t.metadata.images=[{url:this.poster}],dg(this.castSrc)){const s=await ug(this.castSrc);s?.includes("m4s")||s?.includes("mp4")?(t.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,t.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):s?.includes("ts")&&(t.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,t.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}const n=new chrome.cast.media.LoadRequest(t);n.currentTime=super.currentTime??0,n.autoplay=!this.#t.paused,n.activeTrackIds=i,await _d()?.loadMedia(n),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#e){this.#e.isPaused&&this.#e.controller?.playOrPause();return}return super.play()}pause(){if(this.#e){this.#e.isPaused||this.#e.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#s}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(t){this.castReceiver!=t&&this.setAttribute("cast-receiver",`${t}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(t){this.castSrc!=t&&this.setAttribute("cast-src",`${t}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(t){this.setAttribute("cast-content-type",`${t}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(t){this.setAttribute("cast-stream-type",`${t}`)}get castCustomData(){return this.#a}set castCustomData(t){const a=typeof t;if(!["object","undefined"].includes(a)){console.error(`castCustomData must be nullish or an object but value was of type ${a}`);return}this.#a=t}get readyState(){if(this.#e)switch(this.#e.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#e?this.#e.isPaused:super.paused}get muted(){return this.#e?this.#e?.isMuted:super.muted}set muted(t){if(this.#e){(t&&!this.#e.isMuted||!t&&this.#e.isMuted)&&this.#e.controller?.muteOrUnmute();return}super.muted=t}get volume(){return this.#e?this.#e?.volumeLevel??1:super.volume}set volume(t){if(this.#e){this.#e.volumeLevel=+t,this.#e.controller?.setVolumeLevel();return}super.volume=t}get duration(){return this.#e&&this.#e?.isMediaLoaded?this.#e?.duration??NaN:super.duration}get currentTime(){return this.#e&&this.#e?.isMediaLoaded?this.#e?.currentTime??0:super.currentTime}set currentTime(t){if(this.#e){this.#e.currentTime=t,this.#e.controller?.seek();return}super.currentTime=t}};var cm=e=>{throw TypeError(e)},hm=(e,t,a)=>t.has(e)||cm("Cannot "+a),mg=(e,t,a)=>(hm(e,t,"read from private field"),a?a.call(e):t.get(e)),pg=(e,t,a)=>t.has(e)?cm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),vg=(e,t,a,i)=>(hm(e,t,"write to private field"),t.set(e,a),a),mm=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends mm{}globalThis.DocumentFragment=e}var Eg=class extends mm{},bg={get(e){},define(e,t,a){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Eg)}},fg={customElements:bg},gg=typeof window>"u"||typeof globalThis.customElements>"u",Co=gg?fg:globalThis,Nn,sc=class extends hg(wv(zf)){constructor(){super(...arguments),pg(this,Nn)}get autoplay(){let e=this.getAttribute("autoplay");return e===null?!1:e===""?!0:e}set autoplay(e){let t=this.autoplay;e!==t&&(e?this.setAttribute("autoplay",typeof e=="string"?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return(e=mg(this,Nn))!=null?e:this.muxCastCustomData}set castCustomData(e){vg(this,Nn,e)}};Nn=new WeakMap;Co.customElements.get("mux-video")||(Co.customElements.define("mux-video",sc),Co.MuxVideoElement=sc);const R={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},q={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},pm={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},vm=Object.entries(pm),u=vm.reduce((e,[t,a])=>(e[t]=a.toLowerCase(),e),{}),_g={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},Jt=vm.reduce((e,[t,a])=>(e[t]=a.toLowerCase(),e),{..._g});Object.entries(Jt).reduce((e,[t,a])=>{const i=u[t];return i&&(e[a]=i),e},{userinactivechange:"userinactive"});const yg=Object.entries(u).reduce((e,[t,a])=>{const i=Jt[t];return i&&(e[a]=i),e},{userinactive:"userinactivechange"}),Ht={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},Ri={DISABLED:"disabled",SHOWING:"showing"},oc={MOUSE:"mouse",TOUCH:"touch"},qe={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},Gt={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},Tg={FULLSCREEN:"fullscreen"};function Ag(e){return e?.map(wg).join(" ")}function kg(e){return e?.split(/\s+/).map(Sg)}function wg(e){if(e){const{id:t,width:a,height:i}=e;return[t,a,i].filter(r=>r!=null).join(":")}}function Sg(e){if(e){const[t,a,i]=e.split(":");return{id:t,width:+a,height:+i}}}function Ig(e){return e?.map(Dg).join(" ")}function Rg(e){return e?.split(/\s+/).map(Cg)}function Dg(e){if(e){const{id:t,kind:a,language:i,label:r}=e;return[t,a,i,r].filter(n=>n!=null).join(":")}}function Cg(e){if(e){const[t,a,i,r]=e.split(":");return{id:t,kind:a,language:i,label:r}}}function Lg(e){return e.replace(/[-_]([a-z])/g,(t,a)=>a.toUpperCase())}function Td(e){return typeof e=="number"&&!Number.isNaN(e)&&Number.isFinite(e)}function Em(e){return typeof e!="string"?!1:!isNaN(e)&&!isNaN(parseFloat(e))}const bm=e=>new Promise(t=>setTimeout(t,e)),lc=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Mg=(e,t)=>{const a=e===1?lc[t].singular:lc[t].plural;return`${e} ${a}`},Lr=e=>{if(!Td(e))return"";const t=Math.abs(e),a=t!==e,i=new Date(0,0,0,0,0,t,0);return`${[i.getHours(),i.getMinutes(),i.getSeconds()].map((r,n)=>r&&Mg(r,n)).filter(r=>r).join(", ")}${a?" remaining":""}`};function ga(e,t){let a=!1;e<0&&(a=!0,e=0-e),e=e<0?0:e;let i=Math.floor(e%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);const s=Math.floor(t/60%60),l=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=i="0"),n=n>0||l>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",i=i<10?"0"+i:i,(a?"-":"")+n+r+i}const Og={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."};var dc;const Lo={en:Og};let il=((dc=globalThis.navigator)==null?void 0:dc.language)||"en";const Ng=e=>{il=e},xg=e=>{var t,a,i;const[r]=il.split("-");return((t=Lo[il])==null?void 0:t[e])||((a=Lo[r])==null?void 0:a[e])||((i=Lo.en)==null?void 0:i[e])||e},D=(e,t={})=>xg(e).replace(/\{(\w+)\}/g,(a,i)=>i in t?String(t[i]):`{${i}}`);let fm=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}};class gm extends fm{}let uc=class extends gm{constructor(){super(...arguments),this.role=null}};class Pg{observe(){}unobserve(){}disconnect(){}}const _m={createElement:function(){return new Fr.HTMLElement},createElementNS:function(){return new Fr.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(e){return!1}},Fr={ResizeObserver:Pg,document:_m,Node:gm,Element:uc,HTMLElement:class extends uc{constructor(){super(...arguments),this.innerHTML=""}get content(){return new Fr.DocumentFragment}},DocumentFragment:class extends fm{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(e){return null},setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(e){return{matches:!1,media:e}},DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},ym=typeof window>"u"||typeof window.customElements>"u",Tm=Object.keys(Fr).every(e=>e in globalThis),b=ym&&!Tm?Fr:globalThis,ye=ym&&!Tm?_m:globalThis.document,cc=new WeakMap,Ad=e=>{let t=cc.get(e);return t||cc.set(e,t=new Set),t},Am=new b.ResizeObserver(e=>{for(const t of e)for(const a of Ad(t.target))a(t)});function Pi(e,t){Ad(e).add(t),Am.observe(e)}function Ui(e,t){const a=Ad(e);a.delete(t),a.size||Am.unobserve(e)}function ze(e){const t={};for(const a of e)t[a.name]=a.value;return t}function rt(e){var t;return(t=rl(e))!=null?t:Fi(e,"media-controller")}function rl(e){var t;const{MEDIA_CONTROLLER:a}=q,i=e.getAttribute(a);if(i)return(t=no(e))==null?void 0:t.getElementById(i)}const km=(e,t,a=".value")=>{const i=e.querySelector(a);i&&(i.textContent=t)},Ug=(e,t)=>{const a=`slot[name="${t}"]`,i=e.shadowRoot.querySelector(a);return i?i.children:[]},wm=(e,t)=>Ug(e,t)[0],ta=(e,t)=>!e||!t?!1:e?.contains(t)?!0:ta(e,t.getRootNode().host),Fi=(e,t)=>e?e.closest(t)||Fi(e.getRootNode().host,t):null;function kd(e=document){var t;const a=e?.activeElement;return a?(t=kd(a.shadowRoot))!=null?t:a:null}function no(e){var t;const a=(t=e?.getRootNode)==null?void 0:t.call(e);return a instanceof ShadowRoot||a instanceof Document?a:null}function Sm(e,{depth:t=3,checkOpacity:a=!0,checkVisibilityCSS:i=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:a,checkVisibilityCSS:i});let r=e;for(;r&&t>0;){const n=getComputedStyle(r);if(a&&n.opacity==="0"||i&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,t--}return!0}function Hg(e,t,a,i){const r=i.x-a.x,n=i.y-a.y,s=r*r+n*n;if(s===0)return 0;const l=((e-a.x)*r+(t-a.y)*n)/s;return Math.max(0,Math.min(1,l))}function Ee(e,t){return Bg(e,i=>i===t)||Im(e,t)}function Bg(e,t){var a,i;let r;for(r of(a=e.querySelectorAll("style:not([media])"))!=null?a:[]){let n;try{n=(i=r.sheet)==null?void 0:i.cssRules}catch{continue}for(const s of n??[])if(t(s.selectorText))return s}}function Im(e,t){var a,i;const r=(a=e.querySelectorAll("style:not([media])"))!=null?a:[],n=r?.[r.length-1];return n?.sheet?(n?.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),(i=n.sheet.cssRules)==null?void 0:i[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function ae(e,t,a=Number.NaN){const i=e.getAttribute(t);return i!=null?+i:a}function de(e,t,a){const i=+a;if(a==null||Number.isNaN(i)){e.hasAttribute(t)&&e.removeAttribute(t);return}ae(e,t,void 0)!==i&&e.setAttribute(t,`${i}`)}function F(e,t){return e.hasAttribute(t)}function $(e,t,a){if(a==null){e.hasAttribute(t)&&e.removeAttribute(t);return}F(e,t)!=a&&e.toggleAttribute(t,a)}function ie(e,t,a=null){var i;return(i=e.getAttribute(t))!=null?i:a}function re(e,t,a){if(a==null){e.hasAttribute(t)&&e.removeAttribute(t);return}const i=`${a}`;ie(e,t,void 0)!==i&&e.setAttribute(t,i)}var Rm=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},ia=(e,t,a)=>(Rm(e,t,"read from private field"),a?a.call(e):t.get(e)),Wg=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},ln=(e,t,a,i)=>(Rm(e,t,"write to private field"),t.set(e,a),a),Pe;function Vg(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class so extends b.HTMLElement{constructor(){if(super(),Wg(this,Pe,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ze(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}}static get observedAttributes(){return[q.MEDIA_CONTROLLER,u.MEDIA_PAUSED]}attributeChangedCallback(t,a,i){var r,n,s,l,o;t===q.MEDIA_CONTROLLER&&(a&&((n=(r=ia(this,Pe))==null?void 0:r.unassociateElement)==null||n.call(r,this),ln(this,Pe,null)),i&&this.isConnected&&(ln(this,Pe,(s=this.getRootNode())==null?void 0:s.getElementById(i)),(o=(l=ia(this,Pe))==null?void 0:l.associateElement)==null||o.call(l,this)))}connectedCallback(){var t,a,i,r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ln(this,Pe,Fg(this)),this.getAttribute(q.MEDIA_CONTROLLER)&&((a=(t=ia(this,Pe))==null?void 0:t.associateElement)==null||a.call(t,this)),(i=ia(this,Pe))==null||i.addEventListener("pointerdown",this),(r=ia(this,Pe))==null||r.addEventListener("click",this)}disconnectedCallback(){var t,a,i,r;this.getAttribute(q.MEDIA_CONTROLLER)&&((a=(t=ia(this,Pe))==null?void 0:t.unassociateElement)==null||a.call(t,this)),(i=ia(this,Pe))==null||i.removeEventListener("pointerdown",this),(r=ia(this,Pe))==null||r.removeEventListener("click",this),ln(this,Pe,null)}handleEvent(t){var a;const i=(a=t.composedPath())==null?void 0:a[0];if(["video","media-controller"].includes(i?.localName)){if(t.type==="pointerdown")this._pointerType=t.pointerType;else if(t.type==="click"){const{clientX:r,clientY:n}=t,{left:s,top:l,width:o,height:d}=this.getBoundingClientRect(),h=r-s,p=n-l;if(h<0||p<0||h>o||p>d||o===0&&d===0)return;const m=this._pointerType||"mouse";if(this._pointerType=void 0,m===oc.TOUCH){this.handleTap(t);return}else if(m===oc.MOUSE){this.handleMouseClick(t);return}}}}get mediaPaused(){return F(this,u.MEDIA_PAUSED)}set mediaPaused(t){$(this,u.MEDIA_PAUSED,t)}handleTap(t){}handleMouseClick(t){const a=this.mediaPaused?R.MEDIA_PLAY_REQUEST:R.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new b.CustomEvent(a,{composed:!0,bubbles:!0}))}}Pe=new WeakMap;so.shadowRootOptions={mode:"open"};so.getTemplateHTML=Vg;function Fg(e){var t;const a=e.getAttribute(q.MEDIA_CONTROLLER);return a?(t=e.getRootNode())==null?void 0:t.getElementById(a):Fi(e,"media-controller")}b.customElements.get("media-gesture-receiver")||b.customElements.define("media-gesture-receiver",so);var hc=so,wd=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Qe=(e,t,a)=>(wd(e,t,"read from private field"),a?a.call(e):t.get(e)),Ye=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Sa=(e,t,a,i)=>(wd(e,t,"write to private field"),t.set(e,a),a),it=(e,t,a)=>(wd(e,t,"access private method"),a),Ns,si,$r,Ai,xn,nl,Dm,mr,Pn,sl,Cm,ol,Lm,Kr,oo,lo,Sd,Hi,qr;const M={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function $g(e){return`
    <style>
      
      :host([${u.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${M.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${M.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${M.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${M.AUDIO}])[${M.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${M.AUDIO}])[${M.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${M.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${M.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${M.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${M.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${M.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${M.USER_INACTIVE}]:not([${u.MEDIA_PAUSED}]):not([${u.MEDIA_IS_AIRPLAYING}]):not([${u.MEDIA_IS_CASTING}]):not([${M.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${M.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${M.USER_INACTIVE}]:not([${M.NO_AUTOHIDE}]):not([${u.MEDIA_PAUSED}]):not([${u.MEDIA_IS_CASTING}]):not([${M.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${M.USER_INACTIVE}][${M.AUTOHIDE_OVER_CONTROLS}]:not([${M.NO_AUTOHIDE}]):not([${u.MEDIA_PAUSED}]):not([${u.MEDIA_IS_CASTING}]):not([${M.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${M.AUDIO}])[${u.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${hc.shadowRootOptions.mode}">
          ${hc.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const Kg=Object.values(u),qg="sm:384 md:576 lg:768 xl:960";function Yg(e){Mm(e.target,e.contentRect.width)}function Mm(e,t){var a;if(!e.isConnected)return;const i=(a=e.getAttribute(M.BREAKPOINTS))!=null?a:qg,r=Gg(i),n=jg(r,t);let s=!1;if(Object.keys(r).forEach(l=>{if(n.includes(l)){e.hasAttribute(`breakpoint${l}`)||(e.setAttribute(`breakpoint${l}`,""),s=!0);return}e.hasAttribute(`breakpoint${l}`)&&(e.removeAttribute(`breakpoint${l}`),s=!0)}),s){const l=new CustomEvent(Jt.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(l)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(Jt.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function Gg(e){const t=e.split(/\s+/);return Object.fromEntries(t.map(a=>a.split(":")))}function jg(e,t){return Object.keys(e).filter(a=>t>=parseInt(e[a]))}class uo extends b.HTMLElement{constructor(){if(super(),Ye(this,nl),Ye(this,sl),Ye(this,ol),Ye(this,Kr),Ye(this,lo),Ye(this,Hi),Ye(this,Ns,0),Ye(this,si,null),Ye(this,$r,null),Ye(this,Ai,void 0),this.breakpointsComputed=!1,Ye(this,xn,new MutationObserver(it(this,nl,Dm).bind(this))),Ye(this,mr,!1),Ye(this,Pn,a=>{Qe(this,mr)||(setTimeout(()=>{Yg(a),Sa(this,mr,!1)},0),Sa(this,mr,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=ze(this.attributes),i=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}const t=this.querySelector(":scope > slot[slot=media]");t&&t.addEventListener("slotchange",()=>{if(!t.assignedElements({flatten:!0}).length){Qe(this,si)&&this.mediaUnsetCallback(Qe(this,si));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[M.AUTOHIDE,M.GESTURES_DISABLED].concat(Kg).filter(t=>![u.MEDIA_RENDITION_LIST,u.MEDIA_AUDIO_TRACK_LIST,u.MEDIA_CHAPTERS_CUES,u.MEDIA_WIDTH,u.MEDIA_HEIGHT,u.MEDIA_ERROR,u.MEDIA_ERROR_MESSAGE].includes(t))}attributeChangedCallback(t,a,i){t.toLowerCase()==M.AUTOHIDE&&(this.autohide=i)}get media(){let t=this.querySelector(":scope > [slot=media]");return t?.nodeName=="SLOT"&&(t=t.assignedElements({flatten:!0})[0]),t}async handleMediaUpdated(t){t&&(Sa(this,si,t),t.localName.includes("-")&&await b.customElements.whenDefined(t.localName),this.mediaSetCallback(t))}connectedCallback(){var t;Qe(this,xn).observe(this,{childList:!0,subtree:!0}),Pi(this,Qe(this,Pn));const a=this.getAttribute(M.AUDIO)!=null,i=D(a?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",i),this.handleMediaUpdated(this.media),this.setAttribute(M.USER_INACTIVE,""),Mm(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(t=b.window)==null||t.addEventListener("mouseup",this)}disconnectedCallback(){var t;Qe(this,xn).disconnect(),Ui(this,Qe(this,Pn)),this.media&&this.mediaUnsetCallback(this.media),(t=b.window)==null||t.removeEventListener("mouseup",this)}mediaSetCallback(t){}mediaUnsetCallback(t){Sa(this,si,null)}handleEvent(t){switch(t.type){case"pointerdown":Sa(this,Ns,t.timeStamp);break;case"pointermove":it(this,sl,Cm).call(this,t);break;case"pointerup":it(this,ol,Lm).call(this,t);break;case"mouseleave":it(this,Kr,oo).call(this);break;case"mouseup":this.removeAttribute(M.KEYBOARD_CONTROL);break;case"keyup":it(this,Hi,qr).call(this),this.setAttribute(M.KEYBOARD_CONTROL,"");break}}set autohide(t){const a=Number(t);Sa(this,Ai,isNaN(a)?0:a)}get autohide(){return(Qe(this,Ai)===void 0?2:Qe(this,Ai)).toString()}get breakpoints(){return ie(this,M.BREAKPOINTS)}set breakpoints(t){re(this,M.BREAKPOINTS,t)}get audio(){return F(this,M.AUDIO)}set audio(t){$(this,M.AUDIO,t)}get gesturesDisabled(){return F(this,M.GESTURES_DISABLED)}set gesturesDisabled(t){$(this,M.GESTURES_DISABLED,t)}get keyboardControl(){return F(this,M.KEYBOARD_CONTROL)}set keyboardControl(t){$(this,M.KEYBOARD_CONTROL,t)}get noAutohide(){return F(this,M.NO_AUTOHIDE)}set noAutohide(t){$(this,M.NO_AUTOHIDE,t)}get autohideOverControls(){return F(this,M.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(t){$(this,M.AUTOHIDE_OVER_CONTROLS,t)}get userInteractive(){return F(this,M.USER_INACTIVE)}set userInteractive(t){$(this,M.USER_INACTIVE,t)}}Ns=new WeakMap;si=new WeakMap;$r=new WeakMap;Ai=new WeakMap;xn=new WeakMap;nl=new WeakSet;Dm=function(e){const t=this.media;for(const a of e){if(a.type!=="childList")continue;const i=a.removedNodes;for(const r of i){if(r.slot!="media"||a.target!=this)continue;let n=a.previousSibling&&a.previousSibling.previousElementSibling;if(!n||!t)this.mediaUnsetCallback(r);else{let s=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(s=!1);s&&this.mediaUnsetCallback(r)}}if(t)for(const r of a.addedNodes)r===t&&this.handleMediaUpdated(t)}};mr=new WeakMap;Pn=new WeakMap;sl=new WeakSet;Cm=function(e){if(e.pointerType!=="mouse"&&e.timeStamp-Qe(this,Ns)<250)return;it(this,lo,Sd).call(this),clearTimeout(Qe(this,$r));const t=this.hasAttribute(M.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&it(this,Hi,qr).call(this)};ol=new WeakSet;Lm=function(e){if(e.pointerType==="touch"){const t=!this.hasAttribute(M.USER_INACTIVE);[this,this.media].includes(e.target)&&t?it(this,Kr,oo).call(this):it(this,Hi,qr).call(this)}else e.composedPath().some(t=>["media-play-button","media-fullscreen-button"].includes(t?.localName))&&it(this,Hi,qr).call(this)};Kr=new WeakSet;oo=function(){if(Qe(this,Ai)<0||this.hasAttribute(M.USER_INACTIVE))return;this.setAttribute(M.USER_INACTIVE,"");const e=new b.CustomEvent(Jt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)};lo=new WeakSet;Sd=function(){if(!this.hasAttribute(M.USER_INACTIVE))return;this.removeAttribute(M.USER_INACTIVE);const e=new b.CustomEvent(Jt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)};Hi=new WeakSet;qr=function(){it(this,lo,Sd).call(this),clearTimeout(Qe(this,$r));const e=parseInt(this.autohide);e<0||Sa(this,$r,setTimeout(()=>{it(this,Kr,oo).call(this)},e*1e3))};uo.shadowRootOptions={mode:"open"};uo.getTemplateHTML=$g;b.customElements.get("media-container")||b.customElements.define("media-container",uo);var Om=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Se=(e,t,a)=>(Om(e,t,"read from private field"),a?a.call(e):t.get(e)),Zi=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},dn=(e,t,a,i)=>(Om(e,t,"write to private field"),t.set(e,a),a),oi,li,xs,Ua,qt,oa;class Id{constructor(t,a,{defaultValue:i}={defaultValue:void 0}){Zi(this,qt),Zi(this,oi,void 0),Zi(this,li,void 0),Zi(this,xs,void 0),Zi(this,Ua,new Set),dn(this,oi,t),dn(this,li,a),dn(this,xs,new Set(i))}[Symbol.iterator](){return Se(this,qt,oa).values()}get length(){return Se(this,qt,oa).size}get value(){var t;return(t=[...Se(this,qt,oa)].join(" "))!=null?t:""}set value(t){var a;t!==this.value&&(dn(this,Ua,new Set),this.add(...(a=t?.split(" "))!=null?a:[]))}toString(){return this.value}item(t){return[...Se(this,qt,oa)][t]}values(){return Se(this,qt,oa).values()}forEach(t,a){Se(this,qt,oa).forEach(t,a)}add(...t){var a,i;t.forEach(r=>Se(this,Ua).add(r)),!(this.value===""&&!((a=Se(this,oi))!=null&&a.hasAttribute(`${Se(this,li)}`)))&&((i=Se(this,oi))==null||i.setAttribute(`${Se(this,li)}`,`${this.value}`))}remove(...t){var a;t.forEach(i=>Se(this,Ua).delete(i)),(a=Se(this,oi))==null||a.setAttribute(`${Se(this,li)}`,`${this.value}`)}contains(t){return Se(this,qt,oa).has(t)}toggle(t,a){return typeof a<"u"?a?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,a){return this.remove(t),this.add(a),t===a}}oi=new WeakMap;li=new WeakMap;xs=new WeakMap;Ua=new WeakMap;qt=new WeakSet;oa=function(){return Se(this,Ua).size?Se(this,Ua):Se(this,xs)};const Qg=(e="")=>e.split(/\s+/),Nm=(e="")=>{const[t,a,i]=e.split(":"),r=i?decodeURIComponent(i):void 0;return{kind:t==="cc"?Ht.CAPTIONS:Ht.SUBTITLES,language:a,label:r}},co=(e="",t={})=>Qg(e).map(a=>{const i=Nm(a);return{...t,...i}}),xm=e=>e?Array.isArray(e)?e.map(t=>typeof t=="string"?Nm(t):t):typeof e=="string"?co(e):[e]:[],ll=({kind:e,label:t,language:a}={kind:"subtitles"})=>t?`${e==="captions"?"cc":"sb"}:${a}:${encodeURIComponent(t)}`:a,Yr=(e=[])=>Array.prototype.map.call(e,ll).join(" "),Zg=(e,t)=>a=>a[e]===t,Pm=e=>{const t=Object.entries(e).map(([a,i])=>Zg(a,i));return a=>t.every(i=>i(a))},Mr=(e,t=[],a=[])=>{const i=xm(a).map(Pm),r=n=>i.some(s=>s(n));Array.from(t).filter(r).forEach(n=>{n.mode=e})},ho=(e,t=()=>!0)=>{if(!e?.textTracks)return[];const a=typeof t=="function"?t:Pm(t);return Array.from(e.textTracks).filter(a)},Um=e=>{var t;return!!((t=e.mediaSubtitlesShowing)!=null&&t.length)||e.hasAttribute(u.MEDIA_SUBTITLES_SHOWING)},zg=e=>{var t;const{media:a,fullscreenElement:i}=e;try{const r=i&&"requestFullscreen"in i?"requestFullscreen":i&&"webkitRequestFullScreen"in i?"webkitRequestFullScreen":void 0;if(r){const n=(t=i[r])==null?void 0:t.call(i);if(n instanceof Promise)return n.catch(()=>{})}else a?.webkitEnterFullscreen?a.webkitEnterFullscreen():a?.requestFullscreen&&a.requestFullscreen()}catch(r){console.error(r)}},mc="exitFullscreen"in ye?"exitFullscreen":"webkitExitFullscreen"in ye?"webkitExitFullscreen":"webkitCancelFullScreen"in ye?"webkitCancelFullScreen":void 0,Xg=e=>{var t;const{documentElement:a}=e;if(mc){const i=(t=a?.[mc])==null?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}},pr="fullscreenElement"in ye?"fullscreenElement":"webkitFullscreenElement"in ye?"webkitFullscreenElement":void 0,Jg=e=>{const{documentElement:t,media:a}=e,i=t?.[pr];return!i&&"webkitDisplayingFullscreen"in a&&"webkitPresentationMode"in a&&a.webkitDisplayingFullscreen&&a.webkitPresentationMode===Tg.FULLSCREEN?a:i},e0=e=>{var t;const{media:a,documentElement:i,fullscreenElement:r=a}=e;if(!a||!i)return!1;const n=Jg(e);if(!n)return!1;if(n===r||n===a)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(pr in s))return ta(n,r);for(;s?.[pr];){if(s[pr]===r)return!0;s=(t=s[pr])==null?void 0:t.shadowRoot}}return!1},t0="fullscreenEnabled"in ye?"fullscreenEnabled":"webkitFullscreenEnabled"in ye?"webkitFullscreenEnabled":void 0,a0=e=>{const{documentElement:t,media:a}=e;return!!t?.[t0]||a&&"webkitSupportsFullscreen"in a};let Mo;const Rd=()=>{var e,t;return Mo||(Mo=(t=(e=ye)==null?void 0:e.createElement)==null?void 0:t.call(e,"video"),Mo)},i0=async(e=Rd())=>{if(!e)return!1;const t=e.volume;e.volume=t/2+.1;const a=new AbortController,i=await Promise.race([r0(e,a.signal),n0(e,t)]);return a.abort(),i},r0=(e,t)=>new Promise(a=>{e.addEventListener("volumechange",()=>a(!0),{signal:t})}),n0=async(e,t)=>{for(let a=0;a<10;a++){if(e.volume===t)return!1;await bm(10)}return e.volume!==t},s0=/.*Version\/.*Safari\/.*/.test(b.navigator.userAgent),Hm=(e=Rd())=>b.matchMedia("(display-mode: standalone)").matches&&s0?!1:typeof e?.requestPictureInPicture=="function",Bm=(e=Rd())=>a0({documentElement:ye,media:e}),o0=Bm(),l0=Hm(),d0=!!b.WebKitPlaybackTargetAvailabilityEvent,u0=!!b.chrome,Ps=e=>ho(e.media,t=>[Ht.SUBTITLES,Ht.CAPTIONS].includes(t.kind)).sort((t,a)=>t.kind>=a.kind?1:-1),Wm=e=>ho(e.media,t=>t.mode===Ri.SHOWING&&[Ht.SUBTITLES,Ht.CAPTIONS].includes(t.kind)),Vm=(e,t)=>{const a=Ps(e),i=Wm(e),r=!!i.length;if(a.length){if(t===!1||r&&t!==!0)Mr(Ri.DISABLED,a,i);else if(t===!0||!r&&t!==!1){let n=a[0];const{options:s}=e;if(!s?.noSubtitlesLangPref){const h=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),p=h?[h,...globalThis.navigator.languages]:globalThis.navigator.languages,m=a.filter(c=>p.some(v=>c.language.toLowerCase().startsWith(v.split("-")[0]))).sort((c,v)=>{const _=p.findIndex(y=>c.language.toLowerCase().startsWith(y.split("-")[0])),g=p.findIndex(y=>v.language.toLowerCase().startsWith(y.split("-")[0]));return _-g});m[0]&&(n=m[0])}const{language:l,label:o,kind:d}=n;Mr(Ri.DISABLED,a,i),Mr(Ri.SHOWING,a,[{language:l,label:o,kind:d}])}}},Dd=(e,t)=>e===t?!0:e==null||t==null||typeof e!=typeof t?!1:typeof e=="number"&&Number.isNaN(e)&&Number.isNaN(t)?!0:typeof e!="object"?!1:Array.isArray(e)?c0(e,t):Object.entries(e).every(([a,i])=>a in t&&Dd(i,t[a])),c0=(e,t)=>{const a=Array.isArray(e),i=Array.isArray(t);return a!==i?!1:a||i?e.length!==t.length?!1:e.every((r,n)=>Dd(r,t[n])):!0},h0=Object.values(Gt);let Us;const m0=i0().then(e=>(Us=e,Us)),p0=async(...e)=>{await Promise.all(e.filter(t=>t).map(async t=>{if(!("localName"in t&&t instanceof b.HTMLElement))return;const a=t.localName;if(!a.includes("-"))return;const i=b.customElements.get(a);i&&t instanceof i||(await b.customElements.whenDefined(a),b.customElements.upgrade(t))}))},v0=new b.DOMParser,E0=e=>e&&(v0.parseFromString(e,"text/html").body.textContent||e),vr={mediaError:{get(e,t){const{media:a}=e;if(t?.type!=="playing")return a?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var a;const{media:i}=e;if(t?.type!=="playing")return(a=i?.error)==null?void 0:a.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var a,i;const{media:r}=e;if(t?.type!=="playing")return(i=(a=r?.error)==null?void 0:a.message)!=null?i:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;const{media:a}=e;return(t=a?.videoWidth)!=null?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;const{media:a}=e;return(t=a?.videoHeight)!=null?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;const{media:a}=e;return(t=a?.paused)!=null?t:!0},set(e,t){var a;const{media:i}=t;i&&(e?i.pause():(a=i.play())==null||a.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){const{media:a}=e;return a?t?t.type==="playing":!a.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;const{media:a}=e;return(t=a?.ended)!=null?t:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;const{media:a}=e;return(t=a?.playbackRate)!=null?t:1},set(e,t){const{media:a}=t;a&&Number.isFinite(+e)&&(a.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;const{media:a}=e;return(t=a?.muted)!=null?t:!1},set(e,t){const{media:a}=t;if(a){try{b.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(i){console.debug("Error setting muted pref",i)}a.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noMutedPref:a}}=t,{media:i}=t;if(!(!i||i.muted||a))try{const r=b.localStorage.getItem("media-chrome-pref-muted")==="true";vr.mediaMuted.set(r,t),e(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaVolume:{get(e){var t;const{media:a}=e;return(t=a?.volume)!=null?t:1},set(e,t){const{media:a}=t;if(a){try{e==null?b.localStorage.removeItem("media-chrome-pref-volume"):b.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(i){console.debug("Error setting volume pref",i)}Number.isFinite(+e)&&(a.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noVolumePref:a}}=t;if(!a)try{const{media:i}=t;if(!i)return;const r=b.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;vr.mediaVolume.set(+r,t),e(+r)}catch(i){console.debug("Error getting volume pref",i)}}]},mediaVolumeLevel:{get(e){const{media:t}=e;return typeof t?.volume>"u"?"high":t.muted||t.volume===0?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;const{media:a}=e;return(t=a?.currentTime)!=null?t:0},set(e,t){const{media:a}=t;!a||!Td(e)||(a.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){const{media:t,options:{defaultDuration:a}={}}=e;return a&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?a:Number.isFinite(t?.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){const{media:t}=e;return t?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;const{media:a}=e;if(!((t=a?.seekable)!=null&&t.length))return;const i=a.seekable.start(0),r=a.seekable.end(a.seekable.length-1);if(!(!i&&!r))return[Number(i.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;const{media:a}=e,i=(t=a?.buffered)!=null?t:[];return Array.from(i).map((r,n)=>[Number(i.start(n).toFixed(3)),Number(i.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){const{media:t,options:{defaultStreamType:a}={}}=e,i=[Gt.LIVE,Gt.ON_DEMAND].includes(a)?a:void 0;if(!t)return i;const{streamType:r}=t;if(h0.includes(r))return r===Gt.UNKNOWN?i:r;const n=t.duration;return n===1/0?Gt.LIVE:Number.isFinite(n)?Gt.ON_DEMAND:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){const{media:t}=e;if(!t)return Number.NaN;const{targetLiveWindow:a}=t,i=vr.mediaStreamType.get(e);return(a==null||Number.isNaN(a))&&i===Gt.LIVE?0:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){const{media:t,options:{liveEdgeOffset:a=10}={}}=e;if(!t)return!1;if(typeof t.liveEdgeStart=="number")return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(vr.mediaStreamType.get(e)!==Gt.LIVE)return!1;const i=t.seekable;if(!i)return!0;if(!i.length)return!1;const r=i.end(i.length-1)-a;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(e){return Ps(e).map(({kind:t,label:a,language:i})=>({kind:t,label:a,language:i}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(e){return Wm(e).map(({kind:t,label:a,language:i})=>({kind:t,label:a,language:i}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var a,i;const{media:r,options:n}=t;if(!r)return;const s=l=>{var o;!n.defaultSubtitles||l&&![Ht.CAPTIONS,Ht.SUBTITLES].includes((o=l?.track)==null?void 0:o.kind)||Vm(t,!0)};return r.addEventListener("loadstart",s),(a=r.textTracks)==null||a.addEventListener("addtrack",s),(i=r.textTracks)==null||i.addEventListener("removetrack",s),()=>{var l,o;r.removeEventListener("loadstart",s),(l=r.textTracks)==null||l.removeEventListener("addtrack",s),(o=r.textTracks)==null||o.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;const{media:a}=e;if(!a)return[];const[i]=ho(a,{kind:Ht.CHAPTERS});return Array.from((t=i?.cues)!=null?t:[]).map(({text:r,startTime:n,endTime:s})=>({text:E0(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var a;const{media:i}=t;if(!i)return;const r=i.querySelector('track[kind="chapters"][default][src]'),n=(a=i.shadowRoot)==null?void 0:a.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",e),n?.addEventListener("load",e),()=>{r?.removeEventListener("load",e),n?.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,a;const{media:i,documentElement:r}=e;if(!i||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===i)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(t=i.localName)!=null&&t.includes("-")?ta(i,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n?.pictureInPictureElement;){if(n.pictureInPictureElement===i)return!0;n=(a=n.pictureInPictureElement)==null?void 0:a.shadowRoot}}return!1},set(e,t){const{media:a}=t;if(a)if(e){if(!ye.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!a.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const i=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};a.requestPictureInPicture().catch(r=>{if(r.code===11){if(!a.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(a.readyState===0&&a.preload==="none"){const n=()=>{a.removeEventListener("loadedmetadata",s),a.preload="none"},s=()=>{a.requestPictureInPicture().catch(i),n()};a.addEventListener("loadedmetadata",s),a.preload="metadata",setTimeout(()=>{a.readyState===0&&i(),n()},1e3)}else throw r}else throw r})}else ye.pictureInPictureElement&&ye.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;const{media:a}=e;return[...(t=a?.videoRenditions)!=null?t:[]].map(i=>({...i}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,a,i;const{media:r}=e;return(i=(a=r?.videoRenditions)==null?void 0:a[(t=r.videoRenditions)==null?void 0:t.selectedIndex])==null?void 0:i.id},set(e,t){const{media:a}=t;if(!a?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const i=e,r=Array.prototype.findIndex.call(a.videoRenditions,n=>n.id==i);a.videoRenditions.selectedIndex!=r&&(a.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;const{media:a}=e;return[...(t=a?.audioTracks)!=null?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,a;const{media:i}=e;return(a=[...(t=i?.audioTracks)!=null?t:[]].find(r=>r.enabled))==null?void 0:a.id},set(e,t){const{media:a}=t;if(!a?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const i=e;for(const r of a.audioTracks)r.enabled=i==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(e){return e0(e)},set(e,t){e?zg(t):Xg(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;const{media:a}=e;return!a?.remote||((t=a.remote)==null?void 0:t.state)==="disconnected"?!1:!!a.remote.state},set(e,t){var a,i;const{media:r}=t;if(r&&!(e&&((a=r.remote)==null?void 0:a.state)!=="disconnected")&&!(!e&&((i=r.remote)==null?void 0:i.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(e,t){const{media:a}=t;if(a){if(!(a.webkitShowPlaybackTargetPicker&&b.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}a.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){const{media:t}=e;if(!o0||!Bm(t))return qe.UNSUPPORTED}},mediaPipUnavailable:{get(e){const{media:t}=e;if(!l0||!Hm(t))return qe.UNSUPPORTED;if(t?.disablePictureInPicture)return qe.UNAVAILABLE}},mediaVolumeUnavailable:{get(e){const{media:t}=e;if(Us===!1||t?.volume==null)return qe.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{Us==null&&m0.then(t=>e(t?void 0:qe.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var a;const{media:i}=e;if(!u0||!((a=i?.remote)!=null&&a.state))return qe.UNSUPPORTED;if(!(t==null||t==="available"))return qe.UNAVAILABLE},stateOwnersUpdateHandlers:[(e,t)=>{var a;const{media:i}=t;return i?(i.disableRemotePlayback||i.hasAttribute("disableremoteplayback")||(a=i?.remote)==null||a.watchAvailability(r=>{e({availability:r?"available":"not-available"})}).catch(r=>{r.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var r;(r=i?.remote)==null||r.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(e,t){if(!d0)return qe.UNSUPPORTED;if(t?.availability==="not-available")return qe.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var a;const{media:i}=t;return i?(i.disableRemotePlayback||i.hasAttribute("disableremoteplayback")||(a=i?.remote)==null||a.watchAvailability(r=>{e({availability:r?"available":"not-available"})}).catch(r=>{r.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var r;(r=i?.remote)==null||r.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(e){var t;const{media:a}=e;if(!a?.videoRenditions)return qe.UNSUPPORTED;if(!((t=a.videoRenditions)!=null&&t.length))return qe.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,a;const{media:i}=e;if(!i?.audioTracks)return qe.UNSUPPORTED;if(((a=(t=i.audioTracks)==null?void 0:t.length)!=null?a:0)<=1)return qe.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){const{options:{mediaLang:t}={}}=e;return t??"en"}}},b0={[R.MEDIA_PREVIEW_REQUEST](e,t,{detail:a}){var i,r,n;const{media:s}=t,l=a??void 0;let o,d;if(s&&l!=null){const[m]=ho(s,{kind:Ht.METADATA,label:"thumbnails"}),c=Array.prototype.find.call((i=m?.cues)!=null?i:[],(v,_,g)=>_===0?v.endTime>l:_===g.length-1?v.startTime<=l:v.startTime<=l&&v.endTime>l);if(c){const v=/'^(?:[a-z]+:)?\/\//i.test(c.text)||(r=s?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,_=new URL(c.text,v);d=new URLSearchParams(_.hash).get("#xywh").split(",").map(g=>+g),o=_.href}}const h=e.mediaDuration.get(t);let p=(n=e.mediaChaptersCues.get(t).find((m,c,v)=>c===v.length-1&&h===m.endTime?m.startTime<=l&&m.endTime>=l:m.startTime<=l&&m.endTime>l))==null?void 0:n.text;return a!=null&&p==null&&(p=""),{mediaPreviewTime:l,mediaPreviewImage:o,mediaPreviewCoords:d,mediaPreviewChapter:p}},[R.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[R.MEDIA_PLAY_REQUEST](e,t){var a,i,r,n;const s="mediaPaused",l=e.mediaStreamType.get(t)===Gt.LIVE,o=!((a=t.options)!=null&&a.noAutoSeekToLive),d=e.mediaTargetLiveWindow.get(t)>0;if(l&&o&&!d){const h=(i=e.mediaSeekable.get(t))==null?void 0:i[1];if(h){const p=(n=(r=t.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,m=h-p;e.mediaCurrentTime.set(m,t)}}e[s].set(!1,t)},[R.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:a}){const i="mediaPlaybackRate",r=a;e[i].set(r,t)},[R.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[R.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e["mediaMuted"].set(!1,t)},[R.MEDIA_VOLUME_REQUEST](e,t,{detail:a}){const i="mediaVolume",r=a;r&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e[i].set(r,t)},[R.MEDIA_SEEK_REQUEST](e,t,{detail:a}){const i="mediaCurrentTime",r=a;e[i].set(r,t)},[R.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var a,i,r;const n="mediaCurrentTime",s=(a=e.mediaSeekable.get(t))==null?void 0:a[1];if(Number.isNaN(Number(s)))return;const l=(r=(i=t.options)==null?void 0:i.seekToLiveOffset)!=null?r:0,o=s-l;e[n].set(o,t)},[R.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:a}){var i;const{options:r}=t,n=Ps(t),s=xm(a),l=(i=s[0])==null?void 0:i.language;l&&!r.noSubtitlesLangPref&&b.localStorage.setItem("media-chrome-pref-subtitles-lang",l),Mr(Ri.SHOWING,n,s)},[R.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:a}){const i=Ps(t),r=a??[];Mr(Ri.DISABLED,i,r)},[R.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:a}){Vm(t,a)},[R.MEDIA_RENDITION_REQUEST](e,t,{detail:a}){const i="mediaRenditionSelected",r=a;e[i].set(r,t)},[R.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:a}){const i="mediaAudioTrackEnabled",r=a;e[i].set(r,t)},[R.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e["mediaIsPip"].set(!0,t)},[R.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[R.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e["mediaIsFullscreen"].set(!0,t)},[R.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[R.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e["mediaIsCasting"].set(!0,t)},[R.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[R.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}},f0=({media:e,fullscreenElement:t,documentElement:a,stateMediator:i=vr,requestMap:r=b0,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const l=[],o={options:{...n}};let d=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const h=_=>{_!=null&&(Dd(_,d)||(d=Object.freeze({...d,..._}),l.forEach(g=>g(d))))},p=()=>{const _=Object.entries(i).reduce((g,[y,{get:T}])=>(g[y]=T(o),g),{});h(_)},m={};let c;const v=async(_,g)=>{var y,T,E,w,C,N,W,Y,X,V,P,Le,Be,We,ce,Ne;const ft=!!c;if(c={...o,...c??{},..._},ft)return;await p0(...Object.values(_));const xe=l.length>0&&g===0&&s,nt=o.media!==c.media,Ve=((y=o.media)==null?void 0:y.textTracks)!==((T=c.media)==null?void 0:T.textTracks),Te=((E=o.media)==null?void 0:E.videoRenditions)!==((w=c.media)==null?void 0:w.videoRenditions),Fe=((C=o.media)==null?void 0:C.audioTracks)!==((N=c.media)==null?void 0:N.audioTracks),Xe=((W=o.media)==null?void 0:W.remote)!==((Y=c.media)==null?void 0:Y.remote),za=o.documentElement!==c.documentElement,nn=!!o.media&&(nt||xe),wu=!!((X=o.media)!=null&&X.textTracks)&&(Ve||xe),Su=!!((V=o.media)!=null&&V.videoRenditions)&&(Te||xe),Iu=!!((P=o.media)!=null&&P.audioTracks)&&(Fe||xe),Ru=!!((Le=o.media)!=null&&Le.remote)&&(Xe||xe),Du=!!o.documentElement&&(za||xe),Cu=nn||wu||Su||Iu||Ru||Du,Xa=l.length===0&&g===1&&s,Lu=!!c.media&&(nt||Xa),Mu=!!((Be=c.media)!=null&&Be.textTracks)&&(Ve||Xa),Ou=!!((We=c.media)!=null&&We.videoRenditions)&&(Te||Xa),Nu=!!((ce=c.media)!=null&&ce.audioTracks)&&(Fe||Xa),xu=!!((Ne=c.media)!=null&&Ne.remote)&&(Xe||Xa),Pu=!!c.documentElement&&(za||Xa),Uu=Lu||Mu||Ou||Nu||xu||Pu;if(!(Cu||Uu)){Object.entries(c).forEach(([J,Gi])=>{o[J]=Gi}),p(),c=void 0;return}Object.entries(i).forEach(([J,{get:Gi,mediaEvents:bv=[],textTracksEvents:fv=[],videoRenditionsEvents:gv=[],audioTracksEvents:_v=[],remoteEvents:yv=[],rootEvents:Tv=[],stateOwnersUpdateHandlers:Av=[]}])=>{m[J]||(m[J]={});const $e=ue=>{const Ke=Gi(o,ue);h({[J]:Ke})};let Ae;Ae=m[J].mediaEvents,bv.forEach(ue=>{Ae&&nn&&(o.media.removeEventListener(ue,Ae),m[J].mediaEvents=void 0),Lu&&(c.media.addEventListener(ue,$e),m[J].mediaEvents=$e)}),Ae=m[J].textTracksEvents,fv.forEach(ue=>{var Ke,st;Ae&&wu&&((Ke=o.media.textTracks)==null||Ke.removeEventListener(ue,Ae),m[J].textTracksEvents=void 0),Mu&&((st=c.media.textTracks)==null||st.addEventListener(ue,$e),m[J].textTracksEvents=$e)}),Ae=m[J].videoRenditionsEvents,gv.forEach(ue=>{var Ke,st;Ae&&Su&&((Ke=o.media.videoRenditions)==null||Ke.removeEventListener(ue,Ae),m[J].videoRenditionsEvents=void 0),Ou&&((st=c.media.videoRenditions)==null||st.addEventListener(ue,$e),m[J].videoRenditionsEvents=$e)}),Ae=m[J].audioTracksEvents,_v.forEach(ue=>{var Ke,st;Ae&&Iu&&((Ke=o.media.audioTracks)==null||Ke.removeEventListener(ue,Ae),m[J].audioTracksEvents=void 0),Nu&&((st=c.media.audioTracks)==null||st.addEventListener(ue,$e),m[J].audioTracksEvents=$e)}),Ae=m[J].remoteEvents,yv.forEach(ue=>{var Ke,st;Ae&&Ru&&((Ke=o.media.remote)==null||Ke.removeEventListener(ue,Ae),m[J].remoteEvents=void 0),xu&&((st=c.media.remote)==null||st.addEventListener(ue,$e),m[J].remoteEvents=$e)}),Ae=m[J].rootEvents,Tv.forEach(ue=>{Ae&&Du&&(o.documentElement.removeEventListener(ue,Ae),m[J].rootEvents=void 0),Pu&&(c.documentElement.addEventListener(ue,$e),m[J].rootEvents=$e)});const Hu=m[J].stateOwnersUpdateHandlers;Av.forEach(ue=>{Hu&&Cu&&Hu(),Uu&&(m[J].stateOwnersUpdateHandlers=ue($e,c))})}),Object.entries(c).forEach(([J,Gi])=>{o[J]=Gi}),p(),c=void 0};return v({media:e,fullscreenElement:t,documentElement:a,options:n}),{dispatch(_){const{type:g,detail:y}=_;if(r[g]&&d.mediaErrorCode==null){h(r[g](i,o,_));return}g==="mediaelementchangerequest"?v({media:y}):g==="fullscreenelementchangerequest"?v({fullscreenElement:y}):g==="documentelementchangerequest"?v({documentElement:y}):g==="optionschangerequest"&&(Object.entries(y??{}).forEach(([T,E])=>{o.options[T]=E}),p())},getState(){return d},subscribe(_){return v({},l.length+1),l.push(_),_(d),()=>{const g=l.indexOf(_);g>=0&&(v({},l.length-1),l.splice(g,1))}}}};var Cd=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},U=(e,t,a)=>(Cd(e,t,"read from private field"),a?a.call(e):t.get(e)),Ft=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},ra=(e,t,a,i)=>(Cd(e,t,"write to private field"),t.set(e,a),a),va=(e,t,a)=>(Cd(e,t,"access private method"),a),Ha,Er,Z,br,At,Un,Hn,dl,Bi,Gr,Bn,ul;const Fm=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],pc=10,I={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};class $m extends uo{constructor(){super(),Ft(this,Hn),Ft(this,Bi),Ft(this,Bn),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,Ft(this,Ha,new Id(this,I.HOTKEYS)),Ft(this,Er,void 0),Ft(this,Z,void 0),Ft(this,br,void 0),Ft(this,At,void 0),Ft(this,Un,a=>{var i;(i=U(this,Z))==null||i.dispatch(a)}),this.associateElement(this);let t={};ra(this,br,a=>{Object.entries(a).forEach(([i,r])=>{if(i in t&&t[i]===r)return;this.propagateMediaState(i,r);const n=i.toLowerCase(),s=new b.CustomEvent(yg[n],{composed:!0,detail:r});this.dispatchEvent(s)}),t=a}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(I.NO_HOTKEYS,I.HOTKEYS,I.DEFAULT_STREAM_TYPE,I.DEFAULT_SUBTITLES,I.DEFAULT_DURATION,I.LANG)}get mediaStore(){return U(this,Z)}set mediaStore(t){var a,i;if(U(this,Z)&&((a=U(this,At))==null||a.call(this),ra(this,At,void 0)),ra(this,Z,t),!U(this,Z)&&!this.hasAttribute(I.NO_DEFAULT_STORE)){va(this,Hn,dl).call(this);return}ra(this,At,(i=U(this,Z))==null?void 0:i.subscribe(U(this,br)))}get fullscreenElement(){var t;return(t=U(this,Er))!=null?t:this}set fullscreenElement(t){var a;this.hasAttribute(I.FULLSCREEN_ELEMENT)&&this.removeAttribute(I.FULLSCREEN_ELEMENT),ra(this,Er,t),(a=U(this,Z))==null||a.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return F(this,I.DEFAULT_SUBTITLES)}set defaultSubtitles(t){$(this,I.DEFAULT_SUBTITLES,t)}get defaultStreamType(){return ie(this,I.DEFAULT_STREAM_TYPE)}set defaultStreamType(t){re(this,I.DEFAULT_STREAM_TYPE,t)}get defaultDuration(){return ae(this,I.DEFAULT_DURATION)}set defaultDuration(t){de(this,I.DEFAULT_DURATION,t)}get noHotkeys(){return F(this,I.NO_HOTKEYS)}set noHotkeys(t){$(this,I.NO_HOTKEYS,t)}get keysUsed(){return ie(this,I.KEYS_USED)}set keysUsed(t){re(this,I.KEYS_USED,t)}get liveEdgeOffset(){return ae(this,I.LIVE_EDGE_OFFSET)}set liveEdgeOffset(t){de(this,I.LIVE_EDGE_OFFSET,t)}get noAutoSeekToLive(){return F(this,I.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(t){$(this,I.NO_AUTO_SEEK_TO_LIVE,t)}get noVolumePref(){return F(this,I.NO_VOLUME_PREF)}set noVolumePref(t){$(this,I.NO_VOLUME_PREF,t)}get noSubtitlesLangPref(){return F(this,I.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(t){$(this,I.NO_SUBTITLES_LANG_PREF,t)}get noDefaultStore(){return F(this,I.NO_DEFAULT_STORE)}set noDefaultStore(t){$(this,I.NO_DEFAULT_STORE,t)}attributeChangedCallback(t,a,i){var r,n,s,l,o,d,h,p,m;if(super.attributeChangedCallback(t,a,i),t===I.NO_HOTKEYS)i!==a&&i===""?(this.hasAttribute(I.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==a&&i===null&&this.enableHotkeys();else if(t===I.HOTKEYS)U(this,Ha).value=i;else if(t===I.DEFAULT_SUBTITLES&&i!==a)(r=U(this,Z))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(I.DEFAULT_SUBTITLES)}});else if(t===I.DEFAULT_STREAM_TYPE)(s=U(this,Z))==null||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(I.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(t===I.LIVE_EDGE_OFFSET)(l=U(this,Z))==null||l.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(I.LIVE_EDGE_OFFSET)?+this.getAttribute(I.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(I.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(I.LIVE_EDGE_OFFSET)}});else if(t===I.SEEK_TO_LIVE_OFFSET)(o=U(this,Z))==null||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(I.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(I.SEEK_TO_LIVE_OFFSET):void 0}});else if(t===I.NO_AUTO_SEEK_TO_LIVE)(d=U(this,Z))==null||d.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(I.NO_AUTO_SEEK_TO_LIVE)}});else if(t===I.FULLSCREEN_ELEMENT){const c=i?(h=this.getRootNode())==null?void 0:h.getElementById(i):void 0;ra(this,Er,c),(p=U(this,Z))==null||p.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else t===I.LANG&&i!==a&&(Ng(i),(m=U(this,Z))==null||m.dispatch({type:"optionschangerequest",detail:{mediaLang:i}}))}connectedCallback(){var t,a;!U(this,Z)&&!this.hasAttribute(I.NO_DEFAULT_STORE)&&va(this,Hn,dl).call(this),(t=U(this,Z))==null||t.dispatch({type:"documentelementchangerequest",detail:ye}),super.connectedCallback(),U(this,Z)&&!U(this,At)&&ra(this,At,(a=U(this,Z))==null?void 0:a.subscribe(U(this,br))),this.enableHotkeys()}disconnectedCallback(){var t,a,i,r;(t=super.disconnectedCallback)==null||t.call(this),U(this,Z)&&((a=U(this,Z))==null||a.dispatch({type:"documentelementchangerequest",detail:void 0}),(i=U(this,Z))==null||i.dispatch({type:R.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),U(this,At)&&((r=U(this,At))==null||r.call(this),ra(this,At,void 0))}mediaSetCallback(t){var a;super.mediaSetCallback(t),(a=U(this,Z))==null||a.dispatch({type:"mediaelementchangerequest",detail:t}),t.hasAttribute("tabindex")||(t.tabIndex=-1)}mediaUnsetCallback(t){var a;super.mediaUnsetCallback(t),(a=U(this,Z))==null||a.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(t,a){bc(this.mediaStateReceivers,t,a)}associateElement(t){if(!t)return;const{associatedElementSubscriptions:a}=this;if(a.has(t))return;const i=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=k0(t,i,r);Object.values(R).forEach(s=>{t.addEventListener(s,U(this,Un))}),a.set(t,n)}unassociateElement(t){if(!t)return;const{associatedElementSubscriptions:a}=this;a.has(t)&&(a.get(t)(),a.delete(t),Object.values(R).forEach(i=>{t.removeEventListener(i,U(this,Un))}))}registerMediaStateReceiver(t){if(!t)return;const a=this.mediaStateReceivers;a.indexOf(t)>-1||(a.push(t),U(this,Z)&&Object.entries(U(this,Z).getState()).forEach(([i,r])=>{bc([t],i,r)}))}unregisterMediaStateReceiver(t){const a=this.mediaStateReceivers,i=a.indexOf(t);i<0||a.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",va(this,Bn,ul))}disableHotkeys(){this.removeEventListener("keydown",va(this,Bn,ul)),this.removeEventListener("keyup",va(this,Bi,Gr))}get hotkeys(){return ie(this,I.HOTKEYS)}set hotkeys(t){re(this,I.HOTKEYS,t)}keyboardShortcutHandler(t){var a,i,r,n,s;const l=t.target;if(((r=(i=(a=l.getAttribute(I.KEYS_USED))==null?void 0:a.split(" "))!=null?i:l?.keysUsed)!=null?r:[]).map(p=>p==="Space"?" ":p).filter(Boolean).includes(t.key))return;let o,d,h;if(!U(this,Ha).contains(`no${t.key.toLowerCase()}`)&&!(t.key===" "&&U(this,Ha).contains("nospace")))switch(t.key){case" ":case"k":o=U(this,Z).getState().mediaPaused?R.MEDIA_PLAY_REQUEST:R.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new b.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"m":o=this.mediaStore.getState().mediaVolumeLevel==="off"?R.MEDIA_UNMUTE_REQUEST:R.MEDIA_MUTE_REQUEST,this.dispatchEvent(new b.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"f":o=this.mediaStore.getState().mediaIsFullscreen?R.MEDIA_EXIT_FULLSCREEN_REQUEST:R.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new b.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new b.CustomEvent(R.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{const p=this.hasAttribute(I.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(I.KEYBOARD_BACKWARD_SEEK_OFFSET):pc;d=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-p,0),h=new b.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(h);break}case"ArrowRight":{const p=this.hasAttribute(I.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(I.KEYBOARD_FORWARD_SEEK_OFFSET):pc;d=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)+p,0),h=new b.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(h);break}}}}Ha=new WeakMap;Er=new WeakMap;Z=new WeakMap;br=new WeakMap;At=new WeakMap;Un=new WeakMap;Hn=new WeakSet;dl=function(){var e;this.mediaStore=f0({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(I.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(I.DEFAULT_DURATION)?+this.getAttribute(I.DEFAULT_DURATION):void 0,defaultStreamType:(e=this.getAttribute(I.DEFAULT_STREAM_TYPE))!=null?e:void 0,liveEdgeOffset:this.hasAttribute(I.LIVE_EDGE_OFFSET)?+this.getAttribute(I.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(I.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(I.SEEK_TO_LIVE_OFFSET):this.hasAttribute(I.LIVE_EDGE_OFFSET)?+this.getAttribute(I.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(I.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(I.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(I.NO_SUBTITLES_LANG_PREF)}})};Bi=new WeakSet;Gr=function(e){const{key:t}=e;if(!Fm.includes(t)){this.removeEventListener("keyup",va(this,Bi,Gr));return}this.keyboardShortcutHandler(e)};Bn=new WeakSet;ul=function(e){const{metaKey:t,altKey:a,key:i}=e;if(t||a||!Fm.includes(i)){this.removeEventListener("keyup",va(this,Bi,Gr));return}[" ","ArrowLeft","ArrowRight"].includes(i)&&!(U(this,Ha).contains(`no${i.toLowerCase()}`)||i===" "&&U(this,Ha).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",va(this,Bi,Gr),{once:!0})};const g0=Object.values(u),_0=Object.values(pm),Km=e=>{var t,a,i,r;let{observedAttributes:n}=e.constructor;!n&&(t=e.nodeName)!=null&&t.includes("-")&&(b.customElements.upgrade(e),{observedAttributes:n}=e.constructor);const s=(r=(i=(a=e?.getAttribute)==null?void 0:a.call(e,q.MEDIA_CHROME_ATTRIBUTES))==null?void 0:i.split)==null?void 0:r.call(i,/\s+/);return Array.isArray(n||s)?(n||s).filter(l=>g0.includes(l)):[]},y0=e=>{var t,a;return(t=e.nodeName)!=null&&t.includes("-")&&b.customElements.get((a=e.nodeName)==null?void 0:a.toLowerCase())&&!(e instanceof b.customElements.get(e.nodeName.toLowerCase()))&&b.customElements.upgrade(e),_0.some(i=>i in e)},cl=e=>y0(e)||!!Km(e).length,vc=e=>{var t;return(t=e?.join)==null?void 0:t.call(e,":")},Ec={[u.MEDIA_SUBTITLES_LIST]:Yr,[u.MEDIA_SUBTITLES_SHOWING]:Yr,[u.MEDIA_SEEKABLE]:vc,[u.MEDIA_BUFFERED]:e=>e?.map(vc).join(" "),[u.MEDIA_PREVIEW_COORDS]:e=>e?.join(" "),[u.MEDIA_RENDITION_LIST]:Ag,[u.MEDIA_AUDIO_TRACK_LIST]:Ig},T0=async(e,t,a)=>{var i,r;if(e.isConnected||await bm(0),typeof a=="boolean"||a==null)return $(e,t,a);if(typeof a=="number")return de(e,t,a);if(typeof a=="string")return re(e,t,a);if(Array.isArray(a)&&!a.length)return e.removeAttribute(t);const n=(r=(i=Ec[t])==null?void 0:i.call(Ec,a))!=null?r:a;return e.setAttribute(t,n)},A0=e=>{var t;return!!((t=e.closest)!=null&&t.call(e,'*[slot="media"]'))},Ia=(e,t)=>{if(A0(e))return;const a=(r,n)=>{var s,l;cl(r)&&n(r);const{children:o=[]}=r??{},d=(l=(s=r?.shadowRoot)==null?void 0:s.children)!=null?l:[];[...o,...d].forEach(h=>Ia(h,n))},i=e?.nodeName.toLowerCase();if(i.includes("-")&&!cl(e)){b.customElements.whenDefined(i).then(()=>{a(e,t)});return}a(e,t)},bc=(e,t,a)=>{e.forEach(i=>{if(t in i){i[t]=a;return}const r=Km(i),n=t.toLowerCase();r.includes(n)&&T0(i,n,a)})},k0=(e,t,a)=>{Ia(e,t);const i=d=>{var h;const p=(h=d?.composedPath()[0])!=null?h:d.target;t(p)},r=d=>{var h;const p=(h=d?.composedPath()[0])!=null?h:d.target;a(p)};e.addEventListener(R.REGISTER_MEDIA_STATE_RECEIVER,i),e.addEventListener(R.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=d=>{d.forEach(h=>{const{addedNodes:p=[],removedNodes:m=[],type:c,target:v,attributeName:_}=h;c==="childList"?(Array.prototype.forEach.call(p,g=>Ia(g,t)),Array.prototype.forEach.call(m,g=>Ia(g,a))):c==="attributes"&&_===q.MEDIA_CHROME_ATTRIBUTES&&(cl(v)?t(v):a(v))})};let s=[];const l=d=>{const h=d.target;h.name!=="media"&&(s.forEach(p=>Ia(p,a)),s=[...h.assignedElements({flatten:!0})],s.forEach(p=>Ia(p,t)))};e.addEventListener("slotchange",l);const o=new MutationObserver(n);return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{Ia(e,a),e.removeEventListener("slotchange",l),o.disconnect(),e.removeEventListener(R.REGISTER_MEDIA_STATE_RECEIVER,i),e.removeEventListener(R.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};b.customElements.get("media-controller")||b.customElements.define("media-controller",$m);var w0=$m;const Ja={PLACEMENT:"placement",BOUNDS:"bounds"};function S0(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class mo extends b.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var t;if(!Sm(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const a=this.placement;if(a==="left"||a==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const i=getComputedStyle(this),r=(t=Fi(this,"#"+this.bounds))!=null?t:rt(this);if(!r)return;const{x:n,width:s}=r.getBoundingClientRect(),{x:l,width:o}=this.getBoundingClientRect(),d=l+o,h=n+s,p=i.getPropertyValue("--media-tooltip-offset-x"),m=p?parseFloat(p.replace("px","")):0,c=i.getPropertyValue("--media-tooltip-container-margin"),v=c?parseFloat(c.replace("px","")):0,_=l-n+m-v,g=d-h+m+v;if(_<0){this.style.setProperty("--media-tooltip-offset-x",`${_}px`);return}if(g>0){this.style.setProperty("--media-tooltip-offset-x",`${g}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ze(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const t=this.placement;delete this.placement,this.placement=t}}static get observedAttributes(){return[Ja.PLACEMENT,Ja.BOUNDS]}get placement(){return ie(this,Ja.PLACEMENT)}set placement(t){re(this,Ja.PLACEMENT,t)}get bounds(){return ie(this,Ja.BOUNDS)}set bounds(t){re(this,Ja.BOUNDS,t)}}mo.shadowRootOptions={mode:"open"};mo.getTemplateHTML=S0;b.customElements.get("media-tooltip")||b.customElements.define("media-tooltip",mo);var fc=mo,Ld=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},me=(e,t,a)=>(Ld(e,t,"read from private field"),a?a.call(e):t.get(e)),ei=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},un=(e,t,a,i)=>(Ld(e,t,"write to private field"),t.set(e,a),a),I0=(e,t,a)=>(Ld(e,t,"access private method"),a),kt,ki,Ea,di,Wn,hl,qm;const na={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function R0(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${fc.shadowRootOptions.mode}">
          ${fc.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `}function D0(e,t){return`
    <slot></slot>
  `}function C0(){return""}class Ce extends b.HTMLElement{constructor(){if(super(),ei(this,hl),ei(this,kt,void 0),this.preventClick=!1,this.tooltipEl=null,ei(this,ki,t=>{this.preventClick||this.handleClick(t),setTimeout(me(this,Ea),0)}),ei(this,Ea,()=>{var t,a;(a=(t=this.tooltipEl)==null?void 0:t.updateXOffset)==null||a.call(t)}),ei(this,di,t=>{const{key:a}=t;if(!this.keysUsed.includes(a)){this.removeEventListener("keyup",me(this,di));return}this.preventClick||this.handleClick(t)}),ei(this,Wn,t=>{const{metaKey:a,altKey:i,key:r}=t;if(a||i||!this.keysUsed.includes(r)){this.removeEventListener("keyup",me(this,di));return}this.addEventListener("keyup",me(this,di),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ze(this.attributes),a=this.constructor.getTemplateHTML(t);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(a):this.shadowRoot.innerHTML=a}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",na.TOOLTIP_PLACEMENT,q.MEDIA_CONTROLLER,u.MEDIA_LANG]}enable(){this.addEventListener("click",me(this,ki)),this.addEventListener("keydown",me(this,Wn)),this.tabIndex=0}disable(){this.removeEventListener("click",me(this,ki)),this.removeEventListener("keydown",me(this,Wn)),this.removeEventListener("keyup",me(this,di)),this.tabIndex=-1}attributeChangedCallback(t,a,i){var r,n,s,l,o;t===q.MEDIA_CONTROLLER?(a&&((n=(r=me(this,kt))==null?void 0:r.unassociateElement)==null||n.call(r,this),un(this,kt,null)),i&&this.isConnected&&(un(this,kt,(s=this.getRootNode())==null?void 0:s.getElementById(i)),(o=(l=me(this,kt))==null?void 0:l.associateElement)==null||o.call(l,this))):t==="disabled"&&i!==a?i==null?this.enable():this.disable():t===na.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==a?this.tooltipEl.placement=i:t===u.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),me(this,Ea).call(this)}connectedCallback(){var t,a,i;const{style:r}=Ee(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(q.MEDIA_CONTROLLER);n&&(un(this,kt,(t=this.getRootNode())==null?void 0:t.getElementById(n)),(i=(a=me(this,kt))==null?void 0:a.associateElement)==null||i.call(a,this)),b.customElements.whenDefined("media-tooltip").then(()=>I0(this,hl,qm).call(this))}disconnectedCallback(){var t,a;this.disable(),(a=(t=me(this,kt))==null?void 0:t.unassociateElement)==null||a.call(t,this),un(this,kt,null),this.removeEventListener("mouseenter",me(this,Ea)),this.removeEventListener("focus",me(this,Ea)),this.removeEventListener("click",me(this,ki))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return ie(this,na.TOOLTIP_PLACEMENT)}set tooltipPlacement(t){re(this,na.TOOLTIP_PLACEMENT,t)}get mediaController(){return ie(this,q.MEDIA_CONTROLLER)}set mediaController(t){re(this,q.MEDIA_CONTROLLER,t)}get disabled(){return F(this,na.DISABLED)}set disabled(t){$(this,na.DISABLED,t)}get noTooltip(){return F(this,na.NO_TOOLTIP)}set noTooltip(t){$(this,na.NO_TOOLTIP,t)}handleClick(t){}}kt=new WeakMap;ki=new WeakMap;Ea=new WeakMap;di=new WeakMap;Wn=new WeakMap;hl=new WeakSet;qm=function(){this.addEventListener("mouseenter",me(this,Ea)),this.addEventListener("focus",me(this,Ea)),this.addEventListener("click",me(this,ki));const e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)};Ce.shadowRootOptions={mode:"open"};Ce.getTemplateHTML=R0;Ce.getSlotTemplateHTML=D0;Ce.getTooltipContentHTML=C0;b.customElements.get("media-chrome-button")||b.customElements.define("media-chrome-button",Ce);const gc=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function L0(e){return`
    <style>
      :host([${u.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${u.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${u.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${u.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${gc}</slot>
      <slot name="exit">${gc}</slot>
    </slot>
  `}function M0(){return`
    <slot name="tooltip-enter">${D("start airplay")}</slot>
    <slot name="tooltip-exit">${D("stop airplay")}</slot>
  `}const _c=e=>{const t=e.mediaIsAirplaying?D("stop airplay"):D("start airplay");e.setAttribute("aria-label",t)};class Md extends Ce{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_AIRPLAYING,u.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),_c(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_IS_AIRPLAYING&&_c(this)}get mediaIsAirplaying(){return F(this,u.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(t){$(this,u.MEDIA_IS_AIRPLAYING,t)}get mediaAirplayUnavailable(){return ie(this,u.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(t){re(this,u.MEDIA_AIRPLAY_UNAVAILABLE,t)}handleClick(){const t=new b.CustomEvent(R.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(t)}}Md.getSlotTemplateHTML=L0;Md.getTooltipContentHTML=M0;b.customElements.get("media-airplay-button")||b.customElements.define("media-airplay-button",Md);const O0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,N0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function x0(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${O0}</slot>
      <slot name="off">${N0}</slot>
    </slot>
  `}function P0(){return`
    <slot name="tooltip-enable">${D("Enable captions")}</slot>
    <slot name="tooltip-disable">${D("Disable captions")}</slot>
  `}const yc=e=>{e.setAttribute("aria-checked",Um(e).toString())};class Od extends Ce{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_SUBTITLES_LIST,u.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",D("closed captions")),yc(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_SUBTITLES_SHOWING&&yc(this)}get mediaSubtitlesList(){return Tc(this,u.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){Ac(this,u.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return Tc(this,u.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){Ac(this,u.MEDIA_SUBTITLES_SHOWING,t)}handleClick(){this.dispatchEvent(new b.CustomEvent(R.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}Od.getSlotTemplateHTML=x0;Od.getTooltipContentHTML=P0;const Tc=(e,t)=>{const a=e.getAttribute(t);return a?co(a):[]},Ac=(e,t,a)=>{if(!a?.length){e.removeAttribute(t);return}const i=Yr(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};b.customElements.get("media-captions-button")||b.customElements.define("media-captions-button",Od);const U0='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',H0='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function B0(e){return`
    <style>
      :host([${u.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${u.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${u.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${u.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${U0}</slot>
      <slot name="exit">${H0}</slot>
    </slot>
  `}function W0(){return`
    <slot name="tooltip-enter">${D("Start casting")}</slot>
    <slot name="tooltip-exit">${D("Stop casting")}</slot>
  `}const kc=e=>{const t=e.mediaIsCasting?D("stop casting"):D("start casting");e.setAttribute("aria-label",t)};class Nd extends Ce{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_CASTING,u.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),kc(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_IS_CASTING&&kc(this)}get mediaIsCasting(){return F(this,u.MEDIA_IS_CASTING)}set mediaIsCasting(t){$(this,u.MEDIA_IS_CASTING,t)}get mediaCastUnavailable(){return ie(this,u.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(t){re(this,u.MEDIA_CAST_UNAVAILABLE,t)}handleClick(){const t=this.mediaIsCasting?R.MEDIA_EXIT_CAST_REQUEST:R.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new b.CustomEvent(t,{composed:!0,bubbles:!0}))}}Nd.getSlotTemplateHTML=B0;Nd.getTooltipContentHTML=W0;b.customElements.get("media-cast-button")||b.customElements.define("media-cast-button",Nd);var xd=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},$a=(e,t,a)=>(xd(e,t,"read from private field"),t.get(e)),$t=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Pd=(e,t,a,i)=>(xd(e,t,"write to private field"),t.set(e,a),a),Aa=(e,t,a)=>(xd(e,t,"access private method"),a),Hs,jr,ja,Vn,ml,pl,Ym,vl,Gm,El,jm,bl,Qm,fl,Zm;function V0(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `}function F0(e){return`
    <slot id="content"></slot>
  `}const zi={OPEN:"open",ANCHOR:"anchor"};class rn extends b.HTMLElement{constructor(){super(),$t(this,Vn),$t(this,pl),$t(this,vl),$t(this,El),$t(this,bl),$t(this,fl),$t(this,Hs,!1),$t(this,jr,null),$t(this,ja,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[zi.OPEN,zi.ANCHOR]}get open(){return F(this,zi.OPEN)}set open(t){$(this,zi.OPEN,t)}handleEvent(t){switch(t.type){case"invoke":Aa(this,El,jm).call(this,t);break;case"focusout":Aa(this,bl,Qm).call(this,t);break;case"keydown":Aa(this,fl,Zm).call(this,t);break}}connectedCallback(){Aa(this,Vn,ml).call(this),this.role||(this.role="dialog")}attributeChangedCallback(t,a,i){Aa(this,Vn,ml).call(this),t===zi.OPEN&&i!==a&&(this.open?Aa(this,pl,Ym).call(this):Aa(this,vl,Gm).call(this))}focus(){Pd(this,jr,kd());const t=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),a=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(t||a)return;this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]')?.focus()}get keysUsed(){return["Escape","Tab"]}}Hs=new WeakMap;jr=new WeakMap;ja=new WeakMap;Vn=new WeakSet;ml=function(){if(!$a(this,Hs)&&(Pd(this,Hs,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const e=ze(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{const{style:t}=Ee(this.shadowRoot,":host");t.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};pl=new WeakSet;Ym=function(){var e;(e=$a(this,ja))==null||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};vl=new WeakSet;Gm=function(){var e;(e=$a(this,ja))==null||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};El=new WeakSet;jm=function(e){Pd(this,ja,e.relatedTarget),ta(this,e.relatedTarget)||(this.open=!this.open)};bl=new WeakSet;Qm=function(e){var t;ta(this,e.relatedTarget)||((t=$a(this,jr))==null||t.focus(),$a(this,ja)&&$a(this,ja)!==e.relatedTarget&&this.open&&(this.open=!1))};fl=new WeakSet;Zm=function(e){var t,a,i,r,n;const{key:s,ctrlKey:l,altKey:o,metaKey:d}=e;l||o||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),s==="Tab"?(e.shiftKey?(a=(t=this.previousElementSibling)==null?void 0:t.focus)==null||a.call(t):(r=(i=this.nextElementSibling)==null?void 0:i.focus)==null||r.call(i),this.blur()):s==="Escape"&&((n=$a(this,jr))==null||n.focus(),this.open=!1))};rn.shadowRootOptions={mode:"open"};rn.getTemplateHTML=V0;rn.getSlotTemplateHTML=F0;b.customElements.get("media-chrome-dialog")||b.customElements.define("media-chrome-dialog",rn);var Ud=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},se=(e,t,a)=>(Ud(e,t,"read from private field"),a?a.call(e):t.get(e)),Re=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},la=(e,t,a,i)=>(Ud(e,t,"write to private field"),t.set(e,a),a),ct=(e,t,a)=>(Ud(e,t,"access private method"),a),wt,po,Fn,$n,ht,Bs,Kn,qn,Yn,Hd,zm,Gn,gl,jn,_l,Ws,Bd,yl,Xm,Tl,Jm,Al,ep,kl,tp;function $0(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `}class $i extends b.HTMLElement{constructor(){if(super(),Re(this,Hd),Re(this,Gn),Re(this,jn),Re(this,Ws),Re(this,yl),Re(this,Tl),Re(this,Al),Re(this,kl),Re(this,wt,void 0),Re(this,po,void 0),Re(this,Fn,void 0),Re(this,$n,void 0),Re(this,ht,{}),Re(this,Bs,[]),Re(this,Kn,()=>{if(this.range.matches(":focus-visible")){const{style:t}=Ee(this.shadowRoot,":host");t.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Re(this,qn,()=>{const{style:t}=Ee(this.shadowRoot,":host");t.removeProperty("--_focus-visible-box-shadow")}),Re(this,Yn,()=>{const t=this.shadowRoot.querySelector("#segments-clipping");t&&t.parentNode.append(t)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ze(this.attributes),a=this.constructor.getTemplateHTML(t);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(a):this.shadowRoot.innerHTML=a}this.container=this.shadowRoot.querySelector("#container"),la(this,Fn,this.shadowRoot.querySelector("#startpoint")),la(this,$n,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",q.MEDIA_CONTROLLER]}attributeChangedCallback(t,a,i){var r,n,s,l,o;t===q.MEDIA_CONTROLLER?(a&&((n=(r=se(this,wt))==null?void 0:r.unassociateElement)==null||n.call(r,this),la(this,wt,null)),i&&this.isConnected&&(la(this,wt,(s=this.getRootNode())==null?void 0:s.getElementById(i)),(o=(l=se(this,wt))==null?void 0:l.associateElement)==null||o.call(l,this))):(t==="disabled"||t==="aria-disabled"&&a!==i)&&(i==null?(this.range.removeAttribute(t),ct(this,Gn,gl).call(this)):(this.range.setAttribute(t,i),ct(this,jn,_l).call(this)))}connectedCallback(){var t,a,i;const{style:r}=Ee(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),se(this,ht).pointer=Ee(this.shadowRoot,"#pointer"),se(this,ht).progress=Ee(this.shadowRoot,"#progress"),se(this,ht).thumb=Ee(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),se(this,ht).activeSegment=Ee(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(q.MEDIA_CONTROLLER);n&&(la(this,wt,(t=this.getRootNode())==null?void 0:t.getElementById(n)),(i=(a=se(this,wt))==null?void 0:a.associateElement)==null||i.call(a,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",se(this,Kn)),this.shadowRoot.addEventListener("focusout",se(this,qn)),ct(this,Gn,gl).call(this),Pi(this.container,se(this,Yn))}disconnectedCallback(){var t,a;ct(this,jn,_l).call(this),(a=(t=se(this,wt))==null?void 0:t.unassociateElement)==null||a.call(t,this),la(this,wt,null),this.shadowRoot.removeEventListener("focusin",se(this,Kn)),this.shadowRoot.removeEventListener("focusout",se(this,qn)),Ui(this.container,se(this,Yn))}updatePointerBar(t){var a;(a=se(this,ht).pointer)==null||a.style.setProperty("width",`${this.getPointerRatio(t)*100}%`)}updateBar(){var t,a;const i=this.range.valueAsNumber*100;(t=se(this,ht).progress)==null||t.style.setProperty("width",`${i}%`),(a=se(this,ht).thumb)==null||a.style.setProperty("left",`${i}%`)}updateSegments(t){const a=this.shadowRoot.querySelector("#segments-clipping");if(a.textContent="",this.container.classList.toggle("segments",!!t?.length),!t?.length)return;const i=[...new Set([+this.range.min,...t.flatMap(n=>[n.start,n.end]),+this.range.max])];la(this,Bs,[...i]);const r=i.pop();for(const[n,s]of i.entries()){const[l,o]=[n===0,n===i.length-1],d=l?"calc(var(--segments-gap) / -1)":`${s*100}%`,h=`calc(${((o?r:i[n+1])-s)*100}%${l||o?"":" - var(--segments-gap)"})`,p=ye.createElementNS("http://www.w3.org/2000/svg","rect"),m=Ee(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);m.style.setProperty("x",d),m.style.setProperty("width",h),a.append(p)}}getPointerRatio(t){return Hg(t.clientX,t.clientY,se(this,Fn).getBoundingClientRect(),se(this,$n).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(t){switch(t.type){case"pointermove":ct(this,kl,tp).call(this,t);break;case"input":this.updateBar();break;case"pointerenter":ct(this,yl,Xm).call(this,t);break;case"pointerdown":ct(this,Ws,Bd).call(this,t);break;case"pointerup":ct(this,Tl,Jm).call(this);break;case"pointerleave":ct(this,Al,ep).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}wt=new WeakMap;po=new WeakMap;Fn=new WeakMap;$n=new WeakMap;ht=new WeakMap;Bs=new WeakMap;Kn=new WeakMap;qn=new WeakMap;Yn=new WeakMap;Hd=new WeakSet;zm=function(e){const t=se(this,ht).activeSegment;if(!t)return;const a=this.getPointerRatio(e),i=`#segments-clipping rect:nth-child(${se(this,Bs).findIndex((r,n,s)=>{const l=s[n+1];return l!=null&&a>=r&&a<=l})+1})`;(t.selectorText!=i||!t.style.transform)&&(t.selectorText=i,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};Gn=new WeakSet;gl=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};jn=new WeakSet;_l=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(e=b.window)==null||e.removeEventListener("pointerup",this),(t=b.window)==null||t.removeEventListener("pointermove",this)};Ws=new WeakSet;Bd=function(e){var t;la(this,po,e.composedPath().includes(this.range)),(t=b.window)==null||t.addEventListener("pointerup",this)};yl=new WeakSet;Xm=function(e){var t;e.pointerType!=="mouse"&&ct(this,Ws,Bd).call(this,e),this.addEventListener("pointerleave",this),(t=b.window)==null||t.addEventListener("pointermove",this)};Tl=new WeakSet;Jm=function(){var e;(e=b.window)==null||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Al=new WeakSet;ep=function(){var e,t;this.removeEventListener("pointerleave",this),(e=b.window)==null||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(t=se(this,ht).activeSegment)==null||t.style.removeProperty("transform")};kl=new WeakSet;tp=function(e){this.toggleAttribute("dragging",e.buttons===1||e.pointerType!=="mouse"),this.updatePointerBar(e),ct(this,Hd,zm).call(this,e),this.dragging&&(e.pointerType!=="mouse"||!se(this,po))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))};$i.shadowRootOptions={mode:"open"};$i.getTemplateHTML=$0;b.customElements.get("media-chrome-range")||b.customElements.define("media-chrome-range",$i);var ap=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},cn=(e,t,a)=>(ap(e,t,"read from private field"),a?a.call(e):t.get(e)),K0=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},hn=(e,t,a,i)=>(ap(e,t,"write to private field"),t.set(e,a),a),St;function q0(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}class Wd extends b.HTMLElement{constructor(){if(super(),K0(this,St,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ze(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}}static get observedAttributes(){return[q.MEDIA_CONTROLLER]}attributeChangedCallback(t,a,i){var r,n,s,l,o;t===q.MEDIA_CONTROLLER&&(a&&((n=(r=cn(this,St))==null?void 0:r.unassociateElement)==null||n.call(r,this),hn(this,St,null)),i&&this.isConnected&&(hn(this,St,(s=this.getRootNode())==null?void 0:s.getElementById(i)),(o=(l=cn(this,St))==null?void 0:l.associateElement)==null||o.call(l,this)))}connectedCallback(){var t,a,i;const r=this.getAttribute(q.MEDIA_CONTROLLER);r&&(hn(this,St,(t=this.getRootNode())==null?void 0:t.getElementById(r)),(i=(a=cn(this,St))==null?void 0:a.associateElement)==null||i.call(a,this))}disconnectedCallback(){var t,a;(a=(t=cn(this,St))==null?void 0:t.unassociateElement)==null||a.call(t,this),hn(this,St,null)}}St=new WeakMap;Wd.shadowRootOptions={mode:"open"};Wd.getTemplateHTML=q0;b.customElements.get("media-control-bar")||b.customElements.define("media-control-bar",Wd);var ip=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},mn=(e,t,a)=>(ip(e,t,"read from private field"),a?a.call(e):t.get(e)),Y0=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},pn=(e,t,a,i)=>(ip(e,t,"write to private field"),t.set(e,a),a),It;function G0(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `}function j0(e,t){return`
    <slot></slot>
  `}class ya extends b.HTMLElement{constructor(){if(super(),Y0(this,It,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ze(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}}static get observedAttributes(){return[q.MEDIA_CONTROLLER]}attributeChangedCallback(t,a,i){var r,n,s,l,o;t===q.MEDIA_CONTROLLER&&(a&&((n=(r=mn(this,It))==null?void 0:r.unassociateElement)==null||n.call(r,this),pn(this,It,null)),i&&this.isConnected&&(pn(this,It,(s=this.getRootNode())==null?void 0:s.getElementById(i)),(o=(l=mn(this,It))==null?void 0:l.associateElement)==null||o.call(l,this)))}connectedCallback(){var t,a,i;const{style:r}=Ee(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(q.MEDIA_CONTROLLER);n&&(pn(this,It,(t=this.getRootNode())==null?void 0:t.getElementById(n)),(i=(a=mn(this,It))==null?void 0:a.associateElement)==null||i.call(a,this))}disconnectedCallback(){var t,a;(a=(t=mn(this,It))==null?void 0:t.unassociateElement)==null||a.call(t,this),pn(this,It,null)}}It=new WeakMap;ya.shadowRootOptions={mode:"open"};ya.getTemplateHTML=G0;ya.getSlotTemplateHTML=j0;b.customElements.get("media-text-display")||b.customElements.define("media-text-display",ya);var rp=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},wc=(e,t,a)=>(rp(e,t,"read from private field"),a?a.call(e):t.get(e)),Q0=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Z0=(e,t,a,i)=>(rp(e,t,"write to private field"),t.set(e,a),a),fr;function z0(e,t){return`
    <slot>${ga(t.mediaDuration)}</slot>
  `}class np extends ya{constructor(){var t;super(),Q0(this,fr,void 0),Z0(this,fr,this.shadowRoot.querySelector("slot")),wc(this,fr).textContent=ga((t=this.mediaDuration)!=null?t:0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_DURATION]}attributeChangedCallback(t,a,i){t===u.MEDIA_DURATION&&(wc(this,fr).textContent=ga(+i)),super.attributeChangedCallback(t,a,i)}get mediaDuration(){return ae(this,u.MEDIA_DURATION)}set mediaDuration(t){de(this,u.MEDIA_DURATION,t)}}fr=new WeakMap;np.getSlotTemplateHTML=z0;b.customElements.get("media-duration-display")||b.customElements.define("media-duration-display",np);const X0={2:D("Network Error"),3:D("Decode Error"),4:D("Source Not Supported"),5:D("Encryption Error")},J0={2:D("A network error caused the media download to fail."),3:D("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:D("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:D("The media is encrypted and there are no keys to decrypt it.")},sp=e=>{var t,a;return e.code===1?null:{title:(t=X0[e.code])!=null?t:`Error ${e.code}`,message:(a=J0[e.code])!=null?a:e.message}};var op=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},e1=(e,t,a)=>(op(e,t,"read from private field"),a?a.call(e):t.get(e)),t1=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},a1=(e,t,a,i)=>(op(e,t,"write to private field"),t.set(e,a),a),Qn;function i1(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${lp({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `}function r1(e){return e.code&&sp(e)!==null}function lp(e){var t;const{title:a,message:i}=(t=sp(e))!=null?t:{};let r="";return a&&(r+=`<slot name="error-${e.code}-title"><h3>${a}</h3></slot>`),i&&(r+=`<slot name="error-${e.code}-message"><p>${i}</p></slot>`),r}const Sc=[u.MEDIA_ERROR_CODE,u.MEDIA_ERROR_MESSAGE];class vo extends rn{constructor(){super(...arguments),t1(this,Qn,null)}static get observedAttributes(){return[...super.observedAttributes,...Sc]}formatErrorMessage(t){return this.constructor.formatErrorMessage(t)}attributeChangedCallback(t,a,i){var r;if(super.attributeChangedCallback(t,a,i),!Sc.includes(t))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r1(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n))}get mediaError(){return e1(this,Qn)}set mediaError(t){a1(this,Qn,t)}get mediaErrorCode(){return ae(this,"mediaerrorcode")}set mediaErrorCode(t){de(this,"mediaerrorcode",t)}get mediaErrorMessage(){return ie(this,"mediaerrormessage")}set mediaErrorMessage(t){re(this,"mediaerrormessage",t)}}Qn=new WeakMap;vo.getSlotTemplateHTML=i1;vo.formatErrorMessage=lp;b.customElements.get("media-error-dialog")||b.customElements.define("media-error-dialog",vo);var dp=vo;const n1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,s1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function o1(e){return`
    <style>
      :host([${u.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${u.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${u.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${u.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${n1}</slot>
      <slot name="exit">${s1}</slot>
    </slot>
  `}function l1(){return`
    <slot name="tooltip-enter">${D("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${D("Exit fullscreen mode")}</slot>
  `}const Ic=e=>{const t=e.mediaIsFullscreen?D("exit fullscreen mode"):D("enter fullscreen mode");e.setAttribute("aria-label",t)};class Vd extends Ce{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_FULLSCREEN,u.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Ic(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_IS_FULLSCREEN&&Ic(this)}get mediaFullscreenUnavailable(){return ie(this,u.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(t){re(this,u.MEDIA_FULLSCREEN_UNAVAILABLE,t)}get mediaIsFullscreen(){return F(this,u.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(t){$(this,u.MEDIA_IS_FULLSCREEN,t)}handleClick(){const t=this.mediaIsFullscreen?R.MEDIA_EXIT_FULLSCREEN_REQUEST:R.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new b.CustomEvent(t,{composed:!0,bubbles:!0}))}}Vd.getSlotTemplateHTML=o1;Vd.getTooltipContentHTML=l1;b.customElements.get("media-fullscreen-button")||b.customElements.define("media-fullscreen-button",Vd);const{MEDIA_TIME_IS_LIVE:Zn,MEDIA_PAUSED:Or}=u,{MEDIA_SEEK_TO_LIVE_REQUEST:d1,MEDIA_PLAY_REQUEST:u1}=R,c1='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';function h1(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Zn}]:not([${Or}])) slot[name=indicator] > *,
      :host([${Zn}]:not([${Or}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Zn}]:not([${Or}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${c1}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${D("live")}</slot>
  `}const Rc=e=>{var t;const a=e.mediaPaused||!e.mediaTimeIsLive,i=D(a?"seek to live":"playing live");e.setAttribute("aria-label",i);const r=(t=e.shadowRoot)==null?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=D("live")),a?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class up extends Ce{static get observedAttributes(){return[...super.observedAttributes,Zn,Or]}connectedCallback(){super.connectedCallback(),Rc(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),Rc(this)}get mediaPaused(){return F(this,u.MEDIA_PAUSED)}set mediaPaused(t){$(this,u.MEDIA_PAUSED,t)}get mediaTimeIsLive(){return F(this,u.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(t){$(this,u.MEDIA_TIME_IS_LIVE,t)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new b.CustomEvent(d1,{composed:!0,bubbles:!0})),this.hasAttribute(Or)&&this.dispatchEvent(new b.CustomEvent(u1,{composed:!0,bubbles:!0})))}}up.getSlotTemplateHTML=h1;b.customElements.get("media-live-button")||b.customElements.define("media-live-button",up);var cp=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Xi=(e,t,a)=>(cp(e,t,"read from private field"),a?a.call(e):t.get(e)),Dc=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Ji=(e,t,a,i)=>(cp(e,t,"write to private field"),t.set(e,a),a),Rt,zn;const vn={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},hp=500,m1=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function p1(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${hp}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${u.MEDIA_LOADING}]:not([${u.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${u.MEDIA_LOADING}]:not([${u.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${u.MEDIA_LOADING}]:not([${u.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${m1}</slot>
    <div id="status" role="status" aria-live="polite">${D("media loading")}</div>
  `}class Fd extends b.HTMLElement{constructor(){if(super(),Dc(this,Rt,void 0),Dc(this,zn,hp),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ze(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}}static get observedAttributes(){return[q.MEDIA_CONTROLLER,u.MEDIA_PAUSED,u.MEDIA_LOADING,vn.LOADING_DELAY]}attributeChangedCallback(t,a,i){var r,n,s,l,o;t===vn.LOADING_DELAY&&a!==i?this.loadingDelay=Number(i):t===q.MEDIA_CONTROLLER&&(a&&((n=(r=Xi(this,Rt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Ji(this,Rt,null)),i&&this.isConnected&&(Ji(this,Rt,(s=this.getRootNode())==null?void 0:s.getElementById(i)),(o=(l=Xi(this,Rt))==null?void 0:l.associateElement)==null||o.call(l,this)))}connectedCallback(){var t,a,i;const r=this.getAttribute(q.MEDIA_CONTROLLER);r&&(Ji(this,Rt,(t=this.getRootNode())==null?void 0:t.getElementById(r)),(i=(a=Xi(this,Rt))==null?void 0:a.associateElement)==null||i.call(a,this))}disconnectedCallback(){var t,a;(a=(t=Xi(this,Rt))==null?void 0:t.unassociateElement)==null||a.call(t,this),Ji(this,Rt,null)}get loadingDelay(){return Xi(this,zn)}set loadingDelay(t){Ji(this,zn,t);const{style:a}=Ee(this.shadowRoot,":host");a.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${t}ms)`)}get mediaPaused(){return F(this,u.MEDIA_PAUSED)}set mediaPaused(t){$(this,u.MEDIA_PAUSED,t)}get mediaLoading(){return F(this,u.MEDIA_LOADING)}set mediaLoading(t){$(this,u.MEDIA_LOADING,t)}get mediaController(){return ie(this,q.MEDIA_CONTROLLER)}set mediaController(t){re(this,q.MEDIA_CONTROLLER,t)}get noAutohide(){return F(this,vn.NO_AUTOHIDE)}set noAutohide(t){$(this,vn.NO_AUTOHIDE,t)}}Rt=new WeakMap;zn=new WeakMap;Fd.shadowRootOptions={mode:"open"};Fd.getTemplateHTML=p1;b.customElements.get("media-loading-indicator")||b.customElements.define("media-loading-indicator",Fd);const v1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Cc=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,E1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function b1(e){return`
    <style>
      :host(:not([${u.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${u.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${u.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${u.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${u.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${u.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${u.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${v1}</slot>
      <slot name="low">${Cc}</slot>
      <slot name="medium">${Cc}</slot>
      <slot name="high">${E1}</slot>
    </slot>
  `}function f1(){return`
    <slot name="tooltip-mute">${D("Mute")}</slot>
    <slot name="tooltip-unmute">${D("Unmute")}</slot>
  `}const Lc=e=>{const t=e.mediaVolumeLevel==="off",a=D(t?"unmute":"mute");e.setAttribute("aria-label",a)};class $d extends Ce{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),Lc(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_VOLUME_LEVEL&&Lc(this)}get mediaVolumeLevel(){return ie(this,u.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(t){re(this,u.MEDIA_VOLUME_LEVEL,t)}handleClick(){const t=this.mediaVolumeLevel==="off"?R.MEDIA_UNMUTE_REQUEST:R.MEDIA_MUTE_REQUEST;this.dispatchEvent(new b.CustomEvent(t,{composed:!0,bubbles:!0}))}}$d.getSlotTemplateHTML=b1;$d.getTooltipContentHTML=f1;b.customElements.get("media-mute-button")||b.customElements.define("media-mute-button",$d);const Mc=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function g1(e){return`
    <style>
      :host([${u.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${u.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${u.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${u.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Mc}</slot>
      <slot name="exit">${Mc}</slot>
    </slot>
  `}function _1(){return`
    <slot name="tooltip-enter">${D("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${D("Exit picture in picture mode")}</slot>
  `}const Oc=e=>{const t=e.mediaIsPip?D("exit picture in picture mode"):D("enter picture in picture mode");e.setAttribute("aria-label",t)};class Kd extends Ce{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_PIP,u.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Oc(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_IS_PIP&&Oc(this)}get mediaPipUnavailable(){return ie(this,u.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(t){re(this,u.MEDIA_PIP_UNAVAILABLE,t)}get mediaIsPip(){return F(this,u.MEDIA_IS_PIP)}set mediaIsPip(t){$(this,u.MEDIA_IS_PIP,t)}handleClick(){const t=this.mediaIsPip?R.MEDIA_EXIT_PIP_REQUEST:R.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new b.CustomEvent(t,{composed:!0,bubbles:!0}))}}Kd.getSlotTemplateHTML=g1;Kd.getTooltipContentHTML=_1;b.customElements.get("media-pip-button")||b.customElements.define("media-pip-button",Kd);var y1=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},ti=(e,t,a)=>(y1(e,t,"read from private field"),a?a.call(e):t.get(e)),T1=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},da;const Oo={RATES:"rates"},mp=[1,1.2,1.5,1.7,2],wi=1;function A1(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||wi}x</slot>
  `}function k1(){return D("Playback rate")}class qd extends Ce{constructor(){var t;super(),T1(this,da,new Id(this,Oo.RATES,{defaultValue:mp})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(t=this.mediaPlaybackRate)!=null?t:wi}x`}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PLAYBACK_RATE,Oo.RATES]}attributeChangedCallback(t,a,i){if(super.attributeChangedCallback(t,a,i),t===Oo.RATES&&(ti(this,da).value=i),t===u.MEDIA_PLAYBACK_RATE){const r=i?+i:Number.NaN,n=Number.isNaN(r)?wi:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return ti(this,da)}set rates(t){t?Array.isArray(t)?ti(this,da).value=t.join(" "):typeof t=="string"&&(ti(this,da).value=t):ti(this,da).value=""}get mediaPlaybackRate(){return ae(this,u.MEDIA_PLAYBACK_RATE,wi)}set mediaPlaybackRate(t){de(this,u.MEDIA_PLAYBACK_RATE,t)}handleClick(){var t,a;const i=Array.from(ti(this,da).values(),s=>+s).sort((s,l)=>s-l),r=(a=(t=i.find(s=>s>this.mediaPlaybackRate))!=null?t:i[0])!=null?a:wi,n=new b.CustomEvent(R.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}da=new WeakMap;qd.getSlotTemplateHTML=A1;qd.getTooltipContentHTML=k1;b.customElements.get("media-playback-rate-button")||b.customElements.define("media-playback-rate-button",qd);const w1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,S1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function I1(e){return`
    <style>
      :host([${u.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${u.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${u.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${u.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${w1}</slot>
      <slot name="pause">${S1}</slot>
    </slot>
  `}function R1(){return`
    <slot name="tooltip-play">${D("Play")}</slot>
    <slot name="tooltip-pause">${D("Pause")}</slot>
  `}const Nc=e=>{const t=e.mediaPaused?D("play"):D("pause");e.setAttribute("aria-label",t)};class Yd extends Ce{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PAUSED,u.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Nc(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),(t===u.MEDIA_PAUSED||t===u.MEDIA_LANG)&&Nc(this)}get mediaPaused(){return F(this,u.MEDIA_PAUSED)}set mediaPaused(t){$(this,u.MEDIA_PAUSED,t)}handleClick(){const t=this.mediaPaused?R.MEDIA_PLAY_REQUEST:R.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new b.CustomEvent(t,{composed:!0,bubbles:!0}))}}Yd.getSlotTemplateHTML=I1;Yd.getTooltipContentHTML=R1;b.customElements.get("media-play-button")||b.customElements.define("media-play-button",Yd);const gt={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function D1(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const C1=e=>{e.style.removeProperty("background-image")},L1=(e,t)=>{e.style["background-image"]=`url('${t}')`};class Gd extends b.HTMLElement{static get observedAttributes(){return[gt.PLACEHOLDER_SRC,gt.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ze(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(t,a,i){t===gt.SRC&&(i==null?this.image.removeAttribute(gt.SRC):this.image.setAttribute(gt.SRC,i)),t===gt.PLACEHOLDER_SRC&&(i==null?C1(this.image):L1(this.image,i))}get placeholderSrc(){return ie(this,gt.PLACEHOLDER_SRC)}set placeholderSrc(t){re(this,gt.SRC,t)}get src(){return ie(this,gt.SRC)}set src(t){re(this,gt.SRC,t)}}Gd.shadowRootOptions={mode:"open"};Gd.getTemplateHTML=D1;b.customElements.get("media-poster-image")||b.customElements.define("media-poster-image",Gd);var pp=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},M1=(e,t,a)=>(pp(e,t,"read from private field"),a?a.call(e):t.get(e)),O1=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},N1=(e,t,a,i)=>(pp(e,t,"write to private field"),t.set(e,a),a),Xn;class x1 extends ya{constructor(){super(),O1(this,Xn,void 0),N1(this,Xn,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PREVIEW_CHAPTER,u.MEDIA_LANG]}attributeChangedCallback(t,a,i){if(super.attributeChangedCallback(t,a,i),(t===u.MEDIA_PREVIEW_CHAPTER||t===u.MEDIA_LANG)&&i!==a&&i!=null)if(M1(this,Xn).textContent=i,i!==""){const r=D("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return ie(this,u.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(t){re(this,u.MEDIA_PREVIEW_CHAPTER,t)}}Xn=new WeakMap;b.customElements.get("media-preview-chapter-display")||b.customElements.define("media-preview-chapter-display",x1);var vp=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},En=(e,t,a)=>(vp(e,t,"read from private field"),a?a.call(e):t.get(e)),P1=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},bn=(e,t,a,i)=>(vp(e,t,"write to private field"),t.set(e,a),a),Dt;function U1(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class Eo extends b.HTMLElement{constructor(){if(super(),P1(this,Dt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ze(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}}static get observedAttributes(){return[q.MEDIA_CONTROLLER,u.MEDIA_PREVIEW_IMAGE,u.MEDIA_PREVIEW_COORDS]}connectedCallback(){var t,a,i;const r=this.getAttribute(q.MEDIA_CONTROLLER);r&&(bn(this,Dt,(t=this.getRootNode())==null?void 0:t.getElementById(r)),(i=(a=En(this,Dt))==null?void 0:a.associateElement)==null||i.call(a,this))}disconnectedCallback(){var t,a;(a=(t=En(this,Dt))==null?void 0:t.unassociateElement)==null||a.call(t,this),bn(this,Dt,null)}attributeChangedCallback(t,a,i){var r,n,s,l,o;[u.MEDIA_PREVIEW_IMAGE,u.MEDIA_PREVIEW_COORDS].includes(t)&&this.update(),t===q.MEDIA_CONTROLLER&&(a&&((n=(r=En(this,Dt))==null?void 0:r.unassociateElement)==null||n.call(r,this),bn(this,Dt,null)),i&&this.isConnected&&(bn(this,Dt,(s=this.getRootNode())==null?void 0:s.getElementById(i)),(o=(l=En(this,Dt))==null?void 0:l.associateElement)==null||o.call(l,this)))}get mediaPreviewImage(){return ie(this,u.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(t){re(this,u.MEDIA_PREVIEW_IMAGE,t)}get mediaPreviewCoords(){const t=this.getAttribute(u.MEDIA_PREVIEW_COORDS);if(t)return t.split(/\s+/).map(a=>+a)}set mediaPreviewCoords(t){if(!t){this.removeAttribute(u.MEDIA_PREVIEW_COORDS);return}this.setAttribute(u.MEDIA_PREVIEW_COORDS,t.join(" "))}update(){const t=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(t&&a))return;const[i,r,n,s]=t,l=a.split("#")[0],o=getComputedStyle(this),{maxWidth:d,maxHeight:h,minWidth:p,minHeight:m}=o,c=Math.min(parseInt(d)/n,parseInt(h)/s),v=Math.max(parseInt(p)/n,parseInt(m)/s),_=c<1,g=_?c:v>1?v:1,{style:y}=Ee(this.shadowRoot,":host"),T=Ee(this.shadowRoot,"img").style,E=this.shadowRoot.querySelector("img"),w=_?"min":"max";y.setProperty(`${w}-width`,"initial","important"),y.setProperty(`${w}-height`,"initial","important"),y.width=`${n*g}px`,y.height=`${s*g}px`;const C=()=>{T.width=`${this.imgWidth*g}px`,T.height=`${this.imgHeight*g}px`,T.display="block"};E.src!==l&&(E.onload=()=>{this.imgWidth=E.naturalWidth,this.imgHeight=E.naturalHeight,C()},E.src=l,C()),C(),T.transform=`translate(-${i*g}px, -${r*g}px)`}}Dt=new WeakMap;Eo.shadowRootOptions={mode:"open"};Eo.getTemplateHTML=U1;b.customElements.get("media-preview-thumbnail")||b.customElements.define("media-preview-thumbnail",Eo);var xc=Eo,Ep=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Pc=(e,t,a)=>(Ep(e,t,"read from private field"),a?a.call(e):t.get(e)),H1=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},B1=(e,t,a,i)=>(Ep(e,t,"write to private field"),t.set(e,a),a),gr;class W1 extends ya{constructor(){super(),H1(this,gr,void 0),B1(this,gr,this.shadowRoot.querySelector("slot")),Pc(this,gr).textContent=ga(0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PREVIEW_TIME]}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_PREVIEW_TIME&&i!=null&&(Pc(this,gr).textContent=ga(parseFloat(i)))}get mediaPreviewTime(){return ae(this,u.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(t){de(this,u.MEDIA_PREVIEW_TIME,t)}}gr=new WeakMap;b.customElements.get("media-preview-time-display")||b.customElements.define("media-preview-time-display",W1);const ai={SEEK_OFFSET:"seekoffset"},No=30,V1=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function F1(e,t){return`
    <slot name="icon">${V1(t.seekOffset)}</slot>
  `}function $1(){return D("Seek backward")}const K1=0;class jd extends Ce{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_CURRENT_TIME,ai.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=ae(this,ai.SEEK_OFFSET,No)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===ai.SEEK_OFFSET&&(this.seekOffset=ae(this,ai.SEEK_OFFSET,No))}get seekOffset(){return ae(this,ai.SEEK_OFFSET,No)}set seekOffset(t){de(this,ai.SEEK_OFFSET,t),this.setAttribute("aria-label",D("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),km(wm(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ae(this,u.MEDIA_CURRENT_TIME,K1)}set mediaCurrentTime(t){de(this,u.MEDIA_CURRENT_TIME,t)}handleClick(){const t=Math.max(this.mediaCurrentTime-this.seekOffset,0),a=new b.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(a)}}jd.getSlotTemplateHTML=F1;jd.getTooltipContentHTML=$1;b.customElements.get("media-seek-backward-button")||b.customElements.define("media-seek-backward-button",jd);const ii={SEEK_OFFSET:"seekoffset"},xo=30,q1=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function Y1(e,t){return`
    <slot name="icon">${q1(t.seekOffset)}</slot>
  `}function G1(){return D("Seek forward")}const j1=0;class Qd extends Ce{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_CURRENT_TIME,ii.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=ae(this,ii.SEEK_OFFSET,xo)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===ii.SEEK_OFFSET&&(this.seekOffset=ae(this,ii.SEEK_OFFSET,xo))}get seekOffset(){return ae(this,ii.SEEK_OFFSET,xo)}set seekOffset(t){de(this,ii.SEEK_OFFSET,t),this.setAttribute("aria-label",D("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),km(wm(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ae(this,u.MEDIA_CURRENT_TIME,j1)}set mediaCurrentTime(t){de(this,u.MEDIA_CURRENT_TIME,t)}handleClick(){const t=this.mediaCurrentTime+this.seekOffset,a=new b.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(a)}}Qd.getSlotTemplateHTML=Y1;Qd.getTooltipContentHTML=G1;b.customElements.get("media-seek-forward-button")||b.customElements.define("media-seek-forward-button",Qd);var bp=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Po=(e,t,a)=>(bp(e,t,"read from private field"),a?a.call(e):t.get(e)),Q1=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Z1=(e,t,a,i)=>(bp(e,t,"write to private field"),t.set(e,a),a),ui;const Ra={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Uc=[...Object.values(Ra),u.MEDIA_CURRENT_TIME,u.MEDIA_DURATION,u.MEDIA_SEEKABLE],Hc=["Enter"," "],z1="&nbsp;/&nbsp;",wl=(e,{timesSep:t=z1}={})=>{var a,i;const r=(a=e.mediaCurrentTime)!=null?a:0,[,n]=(i=e.mediaSeekable)!=null?i:[];let s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);const l=e.remaining?ga(0-(s-r)):ga(r);return e.showDuration?`${l}${t}${ga(s)}`:l},X1="video not loaded, unknown time.",J1=e=>{var t;const a=e.mediaCurrentTime,[,i]=(t=e.mediaSeekable)!=null?t:[];let r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(i)&&(r=i),a==null||r===null){e.setAttribute("aria-valuetext",X1);return}const n=e.remaining?Lr(0-(r-a)):Lr(a);if(!e.showDuration){e.setAttribute("aria-valuetext",n);return}const s=Lr(r),l=`${n} of ${s}`;e.setAttribute("aria-valuetext",l)};function e_(e,t){return`
    <slot>${wl(t)}</slot>
  `}class fp extends ya{constructor(){super(),Q1(this,ui,void 0),Z1(this,ui,this.shadowRoot.querySelector("slot")),Po(this,ui).innerHTML=`${wl(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Uc,"disabled"]}connectedCallback(){const{style:t}=Ee(this.shadowRoot,":host(:hover:not([notoggle]))");t.setProperty("cursor","var(--media-cursor, pointer)"),t.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",D("playback time"));const a=i=>{const{key:r}=i;if(!Hc.includes(r)){this.removeEventListener("keyup",a);return}this.toggleTimeDisplay()};this.addEventListener("keydown",i=>{const{metaKey:r,altKey:n,key:s}=i;if(r||n||!Hc.includes(s)){this.removeEventListener("keyup",a);return}this.addEventListener("keyup",a)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(t,a,i){Uc.includes(t)?this.update():t==="disabled"&&i!==a&&(i==null?this.enable():this.disable()),super.attributeChangedCallback(t,a,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return F(this,Ra.REMAINING)}set remaining(t){$(this,Ra.REMAINING,t)}get showDuration(){return F(this,Ra.SHOW_DURATION)}set showDuration(t){$(this,Ra.SHOW_DURATION,t)}get noToggle(){return F(this,Ra.NO_TOGGLE)}set noToggle(t){$(this,Ra.NO_TOGGLE,t)}get mediaDuration(){return ae(this,u.MEDIA_DURATION)}set mediaDuration(t){de(this,u.MEDIA_DURATION,t)}get mediaCurrentTime(){return ae(this,u.MEDIA_CURRENT_TIME)}set mediaCurrentTime(t){de(this,u.MEDIA_CURRENT_TIME,t)}get mediaSeekable(){const t=this.getAttribute(u.MEDIA_SEEKABLE);if(t)return t.split(":").map(a=>+a)}set mediaSeekable(t){if(t==null){this.removeAttribute(u.MEDIA_SEEKABLE);return}this.setAttribute(u.MEDIA_SEEKABLE,t.join(":"))}update(){const t=wl(this);J1(this),t!==Po(this,ui).innerHTML&&(Po(this,ui).innerHTML=t)}}ui=new WeakMap;fp.getSlotTemplateHTML=e_;b.customElements.get("media-time-display")||b.customElements.define("media-time-display",fp);var gp=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},we=(e,t,a)=>(gp(e,t,"read from private field"),t.get(e)),_t=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Ge=(e,t,a,i)=>(gp(e,t,"write to private field"),t.set(e,a),a),t_=(e,t,a,i)=>({set _(r){Ge(e,t,r)},get _(){return we(e,t)}}),ci,Jn,hi,_r,es,ts,as,mi,Da,is;class a_{constructor(t,a,i){_t(this,ci,void 0),_t(this,Jn,void 0),_t(this,hi,void 0),_t(this,_r,void 0),_t(this,es,void 0),_t(this,ts,void 0),_t(this,as,void 0),_t(this,mi,void 0),_t(this,Da,0),_t(this,is,(r=performance.now())=>{Ge(this,Da,requestAnimationFrame(we(this,is))),Ge(this,_r,performance.now()-we(this,hi));const n=1e3/this.fps;if(we(this,_r)>n){Ge(this,hi,r-we(this,_r)%n);const s=1e3/((r-we(this,Jn))/++t_(this,es)._),l=(r-we(this,ts))/1e3/this.duration;let o=we(this,as)+l*this.playbackRate;o-we(this,ci).valueAsNumber>0?Ge(this,mi,this.playbackRate/this.duration/s):(Ge(this,mi,.995*we(this,mi)),o=we(this,ci).valueAsNumber+we(this,mi)),this.callback(o)}}),Ge(this,ci,t),this.callback=a,this.fps=i}start(){we(this,Da)===0&&(Ge(this,hi,performance.now()),Ge(this,Jn,we(this,hi)),Ge(this,es,0),we(this,is).call(this))}stop(){we(this,Da)!==0&&(cancelAnimationFrame(we(this,Da)),Ge(this,Da,0))}update({start:t,duration:a,playbackRate:i}){const r=t-we(this,ci).valueAsNumber,n=Math.abs(a-this.duration);(r>0||r<-.03||n>=.5)&&this.callback(t),Ge(this,as,t),Ge(this,ts,performance.now()),this.duration=a,this.playbackRate=i}}ci=new WeakMap;Jn=new WeakMap;hi=new WeakMap;_r=new WeakMap;es=new WeakMap;ts=new WeakMap;as=new WeakMap;mi=new WeakMap;Da=new WeakMap;is=new WeakMap;var Zd=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},ge=(e,t,a)=>(Zd(e,t,"read from private field"),a?a.call(e):t.get(e)),ke=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Ct=(e,t,a,i)=>(Zd(e,t,"write to private field"),t.set(e,a),a),Oe=(e,t,a)=>(Zd(e,t,"access private method"),a),pi,Ka,Vs,Nr,Fs,rs,Qr,Zr,vi,Ei,yr,zd,_p,Sl,$s,Xd,Ks,Jd,qs,eu,Il,yp,zr,Ys,Rl,Tp;const i_="video not loaded, unknown time.",r_=e=>{const t=e.range,a=Lr(+Ap(e)),i=Lr(+e.mediaSeekableEnd),r=a&&i?`${a} of ${i}`:i_;t.setAttribute("aria-valuetext",r)};function n_(e){return`
    ${$i.getTemplateHTML(e)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${u.MEDIA_PREVIEW_IMAGE}], [${u.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${u.MEDIA_PREVIEW_IMAGE}], [${u.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${u.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${u.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${u.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${u.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${u.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${u.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${u.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${u.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${u.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${u.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${u.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${u.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${xc.shadowRootOptions.mode}">
            ${xc.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const fn=(e,t=e.mediaCurrentTime)=>{const a=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,i=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;if(Number.isNaN(i))return 0;const r=(t-a)/(i-a);return Math.max(0,Math.min(r,1))},Ap=(e,t=e.range.valueAsNumber)=>{const a=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,i=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(i)?0:t*(i-a)+a};class tu extends $i{constructor(){super(),ke(this,Ei),ke(this,zd),ke(this,$s),ke(this,Ks),ke(this,qs),ke(this,Il),ke(this,zr),ke(this,Rl),ke(this,pi,void 0),ke(this,Ka,void 0),ke(this,Vs,void 0),ke(this,Nr,void 0),ke(this,Fs,void 0),ke(this,rs,void 0),ke(this,Qr,void 0),ke(this,Zr,void 0),ke(this,vi,void 0),ke(this,Sl,a=>{this.dragging||(Td(a)&&(this.range.valueAsNumber=a),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),Ct(this,Vs,this.shadowRoot.querySelectorAll('[part~="box"]')),Ct(this,Fs,this.shadowRoot.querySelector('[part~="preview-box"]')),Ct(this,rs,this.shadowRoot.querySelector('[part~="current-box"]'));const t=getComputedStyle(this);Ct(this,Qr,parseInt(t.getPropertyValue("--media-box-padding-left"))),Ct(this,Zr,parseInt(t.getPropertyValue("--media-box-padding-right"))),Ct(this,Ka,new a_(this.range,ge(this,Sl),60))}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PAUSED,u.MEDIA_DURATION,u.MEDIA_SEEKABLE,u.MEDIA_CURRENT_TIME,u.MEDIA_PREVIEW_IMAGE,u.MEDIA_PREVIEW_TIME,u.MEDIA_PREVIEW_CHAPTER,u.MEDIA_BUFFERED,u.MEDIA_PLAYBACK_RATE,u.MEDIA_LOADING,u.MEDIA_ENDED]}connectedCallback(){var t;super.connectedCallback(),this.range.setAttribute("aria-label",D("seek")),Oe(this,Ei,yr).call(this),Ct(this,pi,this.getRootNode()),(t=ge(this,pi))==null||t.addEventListener("transitionstart",this)}disconnectedCallback(){var t;super.disconnectedCallback(),Oe(this,Ei,yr).call(this),(t=ge(this,pi))==null||t.removeEventListener("transitionstart",this),Ct(this,pi,null)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),a!=i&&(t===u.MEDIA_CURRENT_TIME||t===u.MEDIA_PAUSED||t===u.MEDIA_ENDED||t===u.MEDIA_LOADING||t===u.MEDIA_DURATION||t===u.MEDIA_SEEKABLE?(ge(this,Ka).update({start:fn(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),Oe(this,Ei,yr).call(this),r_(this)):t===u.MEDIA_BUFFERED&&this.updateBufferedBar(),(t===u.MEDIA_DURATION||t===u.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ge(this,vi),this.updateBar()))}get mediaChaptersCues(){return ge(this,vi)}set mediaChaptersCues(t){var a;Ct(this,vi,t),this.updateSegments((a=ge(this,vi))==null?void 0:a.map(i=>({start:fn(this,i.startTime),end:fn(this,i.endTime)})))}get mediaPaused(){return F(this,u.MEDIA_PAUSED)}set mediaPaused(t){$(this,u.MEDIA_PAUSED,t)}get mediaLoading(){return F(this,u.MEDIA_LOADING)}set mediaLoading(t){$(this,u.MEDIA_LOADING,t)}get mediaDuration(){return ae(this,u.MEDIA_DURATION)}set mediaDuration(t){de(this,u.MEDIA_DURATION,t)}get mediaCurrentTime(){return ae(this,u.MEDIA_CURRENT_TIME)}set mediaCurrentTime(t){de(this,u.MEDIA_CURRENT_TIME,t)}get mediaPlaybackRate(){return ae(this,u.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(t){de(this,u.MEDIA_PLAYBACK_RATE,t)}get mediaBuffered(){const t=this.getAttribute(u.MEDIA_BUFFERED);return t?t.split(" ").map(a=>a.split(":").map(i=>+i)):[]}set mediaBuffered(t){if(!t){this.removeAttribute(u.MEDIA_BUFFERED);return}const a=t.map(i=>i.join(":")).join(" ");this.setAttribute(u.MEDIA_BUFFERED,a)}get mediaSeekable(){const t=this.getAttribute(u.MEDIA_SEEKABLE);if(t)return t.split(":").map(a=>+a)}set mediaSeekable(t){if(t==null){this.removeAttribute(u.MEDIA_SEEKABLE);return}this.setAttribute(u.MEDIA_SEEKABLE,t.join(":"))}get mediaSeekableEnd(){var t;const[,a=this.mediaDuration]=(t=this.mediaSeekable)!=null?t:[];return a}get mediaSeekableStart(){var t;const[a=0]=(t=this.mediaSeekable)!=null?t:[];return a}get mediaPreviewImage(){return ie(this,u.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(t){re(this,u.MEDIA_PREVIEW_IMAGE,t)}get mediaPreviewTime(){return ae(this,u.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(t){de(this,u.MEDIA_PREVIEW_TIME,t)}get mediaEnded(){return F(this,u.MEDIA_ENDED)}set mediaEnded(t){$(this,u.MEDIA_ENDED,t)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var t;const a=this.mediaBuffered;if(!a.length)return;let i;if(this.mediaEnded)i=1;else{const n=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=(t=a.find(([l,o])=>l<=n&&n<=o))!=null?t:[];i=fn(this,s)}const{style:r}=Ee(this.shadowRoot,"#buffered");r.setProperty("width",`${i*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const t=Ee(this.shadowRoot,"#current-rail"),a=Ee(this.shadowRoot,'[part~="current-box"]'),i=Oe(this,$s,Xd).call(this,ge(this,rs)),r=Oe(this,Ks,Jd).call(this,i,this.range.valueAsNumber),n=Oe(this,qs,eu).call(this,i,this.range.valueAsNumber);t.style.transform=`translateX(${r})`,t.style.setProperty("--_range-width",`${i.range.width}`),a.style.setProperty("--_box-shift",`${n}`),a.style.setProperty("--_box-width",`${i.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(t){switch(super.handleEvent(t),t.type){case"input":Oe(this,Rl,Tp).call(this);break;case"pointermove":Oe(this,Il,yp).call(this,t);break;case"pointerup":case"pointerleave":Oe(this,zr,Ys).call(this,null);break;case"transitionstart":ta(t.target,this)&&setTimeout(()=>Oe(this,Ei,yr).call(this),0);break}}}pi=new WeakMap;Ka=new WeakMap;Vs=new WeakMap;Nr=new WeakMap;Fs=new WeakMap;rs=new WeakMap;Qr=new WeakMap;Zr=new WeakMap;vi=new WeakMap;Ei=new WeakSet;yr=function(){Oe(this,zd,_p).call(this)?ge(this,Ka).start():ge(this,Ka).stop()};zd=new WeakSet;_p=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Sm(this)};Sl=new WeakMap;$s=new WeakSet;Xd=function(e){var t;const a=((t=this.getAttribute("bounds")?Fi(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?t:this).getBoundingClientRect(),i=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(i.left-a.left-r/2),s=a.right-i.left-r/2;return{box:{width:r,min:n,max:s},bounds:a,range:i}};Ks=new WeakSet;Jd=function(e,t){let a=`${t*100}%`;const{width:i,min:r,max:n}=e.box;if(!i)return a;if(Number.isNaN(r)||(a=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${a})`),!Number.isNaN(n)){const s=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;a=`min(${a}, ${s})`}return a};qs=new WeakSet;eu=function(e,t){const{width:a,min:i,max:r}=e.box,n=t*e.range.width;if(n<i+ge(this,Qr)){const s=e.range.left-e.bounds.left-ge(this,Qr);return`${n-a/2+s}px`}if(n>r-ge(this,Zr)){const s=e.bounds.right-e.range.right-ge(this,Zr);return`${n+a/2-s-e.range.width}px`}return 0};Il=new WeakSet;yp=function(e){const t=[...ge(this,Vs)].some(h=>e.composedPath().includes(h));if(!this.dragging&&(t||!e.composedPath().includes(this))){Oe(this,zr,Ys).call(this,null);return}const a=this.mediaSeekableEnd;if(!a)return;const i=Ee(this.shadowRoot,"#preview-rail"),r=Ee(this.shadowRoot,'[part~="preview-box"]'),n=Oe(this,$s,Xd).call(this,ge(this,Fs));let s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const l=Oe(this,Ks,Jd).call(this,n,s),o=Oe(this,qs,eu).call(this,n,s);i.style.transform=`translateX(${l})`,i.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${o}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const d=Math.round(ge(this,Nr))-Math.round(s*a);Math.abs(d)<1&&s>.01&&s<.99||(Ct(this,Nr,s*a),Oe(this,zr,Ys).call(this,ge(this,Nr)))};zr=new WeakSet;Ys=function(e){this.dispatchEvent(new b.CustomEvent(R.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))};Rl=new WeakSet;Tp=function(){ge(this,Ka).stop();const e=Ap(this);this.dispatchEvent(new b.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))};tu.shadowRootOptions={mode:"open"};tu.getTemplateHTML=n_;b.customElements.get("media-time-range")||b.customElements.define("media-time-range",tu);const s_=1,o_=e=>e.mediaMuted?0:e.mediaVolume,l_=e=>`${Math.round(e*100)}%`;class d_ extends $i{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_VOLUME,u.MEDIA_MUTED,u.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const t=this.range.value,a=new b.CustomEvent(R.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(a)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",D("volume"))}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),(t===u.MEDIA_VOLUME||t===u.MEDIA_MUTED)&&(this.range.valueAsNumber=o_(this),this.range.setAttribute("aria-valuetext",l_(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return ae(this,u.MEDIA_VOLUME,s_)}set mediaVolume(t){de(this,u.MEDIA_VOLUME,t)}get mediaMuted(){return F(this,u.MEDIA_MUTED)}set mediaMuted(t){$(this,u.MEDIA_MUTED,t)}get mediaVolumeUnavailable(){return ie(this,u.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(t){re(this,u.MEDIA_VOLUME_UNAVAILABLE,t)}}b.customElements.get("media-volume-range")||b.customElements.define("media-volume-range",d_);var kp=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},H=(e,t,a)=>(kp(e,t,"read from private field"),a?a.call(e):t.get(e)),Ot=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Qt=(e,t,a,i)=>(kp(e,t,"write to private field"),t.set(e,a),a),bi,ns,Ca,Tr,ua,ca,ha,La,fi,ss,ut;const Bc=1,Wc=0,u_=1,c_={processCallback(e,t,a){if(a){for(const[i,r]of t)if(i in a){const n=a[i];typeof n=="boolean"&&r instanceof Et&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Et?r.element[r.attributeName]=n:r.value=n}}}};class bo extends b.DocumentFragment{constructor(t,a,i=c_){var r;super(),Ot(this,bi,void 0),Ot(this,ns,void 0),this.append(t.content.cloneNode(!0)),Qt(this,bi,wp(this)),Qt(this,ns,i),(r=i.createCallback)==null||r.call(i,this,H(this,bi),a),i.processCallback(this,H(this,bi),a)}update(t){H(this,ns).processCallback(this,H(this,bi),t)}}bi=new WeakMap;ns=new WeakMap;const wp=(e,t=[])=>{let a,i;for(const r of e.attributes||[])if(r.value.includes("{{")){const n=new m_;for([a,i]of Fc(r.value))if(!a)n.append(i);else{const s=new Et(e,r.name,r.namespaceURI);n.append(s),t.push([i,s])}r.value=n.toString()}for(const r of e.childNodes)if(r.nodeType===Bc&&!(r instanceof HTMLTemplateElement))wp(r,t);else{const n=r.data;if(r.nodeType===Bc||n.includes("{{")){const s=[];if(n)for([a,i]of Fc(n))if(!a)s.push(new Text(i));else{const l=new Ki(e);s.push(l),t.push([i,l])}else if(r instanceof HTMLTemplateElement){const l=new Rp(e,r);s.push(l),t.push([l.expression,l])}r.replaceWith(...s.flatMap(l=>l.replacementNodes||[l]))}}return t},Vc={},Fc=e=>{let t="",a=0,i=Vc[e],r=0,n;if(i)return i;for(i=[];n=e[r];r++)n==="{"&&e[r+1]==="{"&&e[r-1]!=="\\"&&e[r+2]&&++a==1?(t&&i.push([Wc,t]),t="",r++):n==="}"&&e[r+1]==="}"&&e[r-1]!=="\\"&&!--a?(i.push([u_,t.trim()]),t="",r++):t+=n||"";return t&&i.push([Wc,(a>0?"{{":"")+t]),Vc[e]=i},h_=11;class Sp{get value(){return""}set value(t){}toString(){return this.value}}const Ip=new WeakMap;class m_{constructor(){Ot(this,Ca,[])}[Symbol.iterator](){return H(this,Ca).values()}get length(){return H(this,Ca).length}item(t){return H(this,Ca)[t]}append(...t){for(const a of t)a instanceof Et&&Ip.set(a,this),H(this,Ca).push(a)}toString(){return H(this,Ca).join("")}}Ca=new WeakMap;class Et extends Sp{constructor(t,a,i){super(),Ot(this,La),Ot(this,Tr,""),Ot(this,ua,void 0),Ot(this,ca,void 0),Ot(this,ha,void 0),Qt(this,ua,t),Qt(this,ca,a),Qt(this,ha,i)}get attributeName(){return H(this,ca)}get attributeNamespace(){return H(this,ha)}get element(){return H(this,ua)}get value(){return H(this,Tr)}set value(t){H(this,Tr)!==t&&(Qt(this,Tr,t),!H(this,La,fi)||H(this,La,fi).length===1?t==null?H(this,ua).removeAttributeNS(H(this,ha),H(this,ca)):H(this,ua).setAttributeNS(H(this,ha),H(this,ca),t):H(this,ua).setAttributeNS(H(this,ha),H(this,ca),H(this,La,fi).toString()))}get booleanValue(){return H(this,ua).hasAttributeNS(H(this,ha),H(this,ca))}set booleanValue(t){if(!H(this,La,fi)||H(this,La,fi).length===1)this.value=t?"":null;else throw new DOMException("Value is not fully templatized")}}Tr=new WeakMap;ua=new WeakMap;ca=new WeakMap;ha=new WeakMap;La=new WeakSet;fi=function(){return Ip.get(this)};class Ki extends Sp{constructor(t,a){super(),Ot(this,ss,void 0),Ot(this,ut,void 0),Qt(this,ss,t),Qt(this,ut,a?[...a]:[new Text])}get replacementNodes(){return H(this,ut)}get parentNode(){return H(this,ss)}get nextSibling(){return H(this,ut)[H(this,ut).length-1].nextSibling}get previousSibling(){return H(this,ut)[0].previousSibling}get value(){return H(this,ut).map(t=>t.textContent).join("")}set value(t){this.replace(t)}replace(...t){const a=t.flat().flatMap(i=>i==null?[new Text]:i.forEach?[...i]:i.nodeType===h_?[...i.childNodes]:i.nodeType?[i]:[new Text(i)]);a.length||a.push(new Text),Qt(this,ut,p_(H(this,ut)[0].parentNode,H(this,ut),a,this.nextSibling))}}ss=new WeakMap;ut=new WeakMap;class Rp extends Ki{constructor(t,a){const i=a.getAttribute("directive")||a.getAttribute("type");let r=a.getAttribute("expression")||a.getAttribute(i)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(t),this.expression=r,this.template=a,this.directive=i}}function p_(e,t,a,i=null){let r=0,n,s,l,o=a.length,d=t.length;for(;r<o&&r<d&&t[r]==a[r];)r++;for(;r<o&&r<d&&a[o-1]==t[d-1];)i=a[--d,--o];if(r==d)for(;r<o;)e.insertBefore(a[r++],i);if(r==o)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<o;)l=a[r++],s=n?n.nextSibling:i,n==l?n=s:r<o&&a[r]==s?(e.replaceChild(l,n),n=s):e.insertBefore(l,n);for(;n!=i;)s=n.nextSibling,e.removeChild(n),n=s}return a}const $c={string:e=>String(e)};class Dp{constructor(t){this.template=t,this.state=void 0}}const Ba=new WeakMap,Wa=new WeakMap,Dl={partial:(e,t)=>{t[e.expression]=new Dp(e.template)},if:(e,t)=>{var a;if(Cp(e.expression,t))if(Ba.get(e)!==e.template){Ba.set(e,e.template);const i=new bo(e.template,t,au);e.replace(i),Wa.set(e,i)}else(a=Wa.get(e))==null||a.update(t);else e.replace(""),Ba.delete(e),Wa.delete(e)}},v_=Object.keys(Dl),au={processCallback(e,t,a){var i,r;if(a)for(const[n,s]of t){if(s instanceof Rp){if(!s.directive){const o=v_.find(d=>s.template.hasAttribute(d));o&&(s.directive=o,s.expression=s.template.getAttribute(o))}(i=Dl[s.directive])==null||i.call(Dl,s,a);continue}let l=Cp(n,a);if(l instanceof Dp){Ba.get(s)!==l.template?(Ba.set(s,l.template),l=new bo(l.template,l.state,au),s.value=l,Wa.set(s,l)):(r=Wa.get(s))==null||r.update(l.state);continue}l?(s instanceof Et&&s.attributeName.startsWith("aria-")&&(l=String(l)),s instanceof Et?typeof l=="boolean"?s.booleanValue=l:typeof l=="function"?s.element[s.attributeName]=l:s.value=l:(s.value=l,Ba.delete(s),Wa.delete(s))):s instanceof Et?s.value=void 0:(s.value=void 0,Ba.delete(s),Wa.delete(s))}}},Kc={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>e??t,"|":(e,t)=>{var a;return(a=$c[t])==null?void 0:a.call($c,e)}};function E_(e){return b_(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:t})=>t!=="ws")}function Cp(e,t={}){var a,i,r,n,s,l,o;const d=E_(e);if(d.length===0||d.some(({type:h})=>!h))return er(e);if(((a=d[0])==null?void 0:a.token)===">"){const h=t[(i=d[1])==null?void 0:i.token];if(!h)return er(e);const p={...t};h.state=p;const m=d.slice(2);for(let c=0;c<m.length;c+=3){const v=(r=m[c])==null?void 0:r.token,_=(n=m[c+1])==null?void 0:n.token,g=(s=m[c+2])==null?void 0:s.token;v&&_==="="&&(p[v]=tr(g,t))}return h}if(d.length===1)return gn(d[0])?tr(d[0].token,t):er(e);if(d.length===2){const h=(l=d[0])==null?void 0:l.token,p=Kc[h];if(!p||!gn(d[1]))return er(e);const m=tr(d[1].token,t);return p(m)}if(d.length===3){const h=(o=d[1])==null?void 0:o.token,p=Kc[h];if(!p||!gn(d[0])||!gn(d[2]))return er(e);const m=tr(d[0].token,t);if(h==="|")return p(m,d[2].token);const c=tr(d[2].token,t);return p(m,c)}}function er(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function gn({type:e}){return["number","boolean","string","param"].includes(e)}function tr(e,t){const a=e[0],i=e.slice(-1);return e==="true"||e==="false"?e==="true":a===i&&["'",'"'].includes(a)?e.slice(1,-1):Em(e)?parseFloat(e):t[e]}function b_(e,t){let a,i,r;const n=[];for(;e;){r=null,a=e.length;for(const s in t)i=t[s].exec(e),i&&i.index<a&&(r={token:i[0],type:s,matches:i.slice(1)},a=i.index);a&&n.push({token:e.substr(0,a),type:void 0}),r&&n.push(r),e=e.substr(a+(r?r.token.length:0))}return n}var iu=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Cl=(e,t,a)=>(iu(e,t,"read from private field"),a?a.call(e):t.get(e)),ar=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Va=(e,t,a,i)=>(iu(e,t,"write to private field"),t.set(e,a),a),Uo=(e,t,a)=>(iu(e,t,"access private method"),a),Di,os,Ci,Ll,Lp,ls,Ml;const Ho={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},Mp=ye.createElement("template");Mp.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class fo extends b.HTMLElement{constructor(){super(),ar(this,Ll),ar(this,ls),ar(this,Di,void 0),ar(this,os,void 0),ar(this,Ci,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const t=new MutationObserver(a=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||a.some(r=>{const n=r.target;return n===this?!0:n.localName!=="media-controller"?!1:!!(Ho[r.attributeName]||r.attributeName.startsWith("breakpoint"))})&&this.render()});t.observe(this,{attributes:!0}),t.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(Jt.BREAKPOINTS_COMPUTED,this.render),Uo(this,Ll,Lp).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var t;return(t=Cl(this,Di))!=null?t:this.constructor.template}set template(t){if(t===null){this.removeAttribute("template");return}typeof t=="string"?this.setAttribute("template",t):t instanceof HTMLTemplateElement&&(Va(this,Di,t),Va(this,Ci,null),this.createRenderer())}get props(){var t,a,i;const r=[...Array.from((a=(t=this.mediaController)==null?void 0:t.attributes)!=null?a:[]).filter(({name:s})=>Ho[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const l=(i=Ho[s.name])!=null?i:Lg(s.name);let{value:o}=s;o!=null?(Em(o)&&(o=parseFloat(o)),n[l]=o===""?!0:o):n[l]=!1}return n}attributeChangedCallback(t,a,i){t==="template"&&a!=i&&Uo(this,ls,Ml).call(this)}connectedCallback(){Uo(this,ls,Ml).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Cl(this,os)&&(Va(this,os,this.template),this.renderer=new bo(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(Mp.content.cloneNode(!0),this.renderer))}render(){var t;(t=this.renderer)==null||t.update(this.props)}}Di=new WeakMap;os=new WeakMap;Ci=new WeakMap;Ll=new WeakSet;Lp=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}};ls=new WeakSet;Ml=function(){var e;const t=this.getAttribute("template");if(!t||t===Cl(this,Ci))return;const a=this.getRootNode(),i=(e=a?.getElementById)==null?void 0:e.call(a,t);if(i){Va(this,Ci,t),Va(this,Di,i),this.createRenderer();return}f_(t)&&(Va(this,Ci,t),g_(t).then(r=>{const n=ye.createElement("template");n.innerHTML=r,Va(this,Di,n),this.createRenderer()}).catch(console.error))};fo.observedAttributes=["template"];fo.processor=au;function f_(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;const t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch{return!1}return!0}async function g_(e){const t=await fetch(e);if(t.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}b.customElements.get("media-theme")||b.customElements.define("media-theme",fo);function __({anchor:e,floating:t,placement:a}){const i=y_({anchor:e,floating:t}),{x:r,y:n}=A_(i,a);return{x:r,y:n}}function y_({anchor:e,floating:t}){return{anchor:T_(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}function T_(e,t){var a;const i=e.getBoundingClientRect(),r=(a=t?.getBoundingClientRect())!=null?a:{x:0,y:0};return{x:i.x-r.x,y:i.y-r.y,width:i.width,height:i.height}}function A_({anchor:e,floating:t},a){const i=k_(a)==="x"?"y":"x",r=i==="y"?"height":"width",n=Op(a),s=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,o=e[r]/2-t[r]/2;let d;switch(n){case"top":d={x:s,y:e.y-t.height};break;case"bottom":d={x:s,y:e.y+e.height};break;case"right":d={x:e.x+e.width,y:l};break;case"left":d={x:e.x-t.width,y:l};break;default:d={x:e.x,y:e.y}}switch(a.split("-")[1]){case"start":d[i]-=o;break;case"end":d[i]+=o;break}return d}function Op(e){return e.split("-")[0]}function k_(e){return["top","bottom"].includes(Op(e))?"y":"x"}class ru extends Event{constructor({action:t="auto",relatedTarget:a,...i}){super("invoke",i),this.action=t,this.relatedTarget=a}}class w_ extends Event{constructor({newState:t,oldState:a,...i}){super("toggle",i),this.newState=t,this.oldState=a}}var nu=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},K=(e,t,a)=>(nu(e,t,"read from private field"),a?a.call(e):t.get(e)),Q=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Lt=(e,t,a,i)=>(nu(e,t,"write to private field"),t.set(e,a),a),z=(e,t,a)=>(nu(e,t,"access private method"),a),Mt,qa,_a,ds,us,Ya,Xr,Ol,Np,Gs,su,js,cs,Nl,xl,xp,Pl,Pp,Ul,Up,Li,Mi,Oi,Jr,Qs,ou,Hl,Hp,lu,Bp,Bl,Wp,du,Vp,Wl,Fp,Vl,$p,xr,Zs,Fl,Kp,Pr,zs,hs,$l;function Wi({type:e,text:t,value:a,checked:i}){const r=ye.createElement("media-chrome-menu-item");r.type=e,r.part.add("menu-item"),r.part.add(e),r.value=a,r.checked=i;const n=ye.createElement("span");return n.textContent=t,r.append(n),r}function Ga(e,t){let a=e.querySelector(`:scope > [slot="${t}"]`);if(a?.nodeName=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a)return a=a.cloneNode(!0),a;const i=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return i?i.cloneNode(!0):""}function S_(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}const ka={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class Vt extends b.HTMLElement{constructor(){if(super(),Q(this,Ol),Q(this,Gs),Q(this,cs),Q(this,xl),Q(this,Pl),Q(this,Ul),Q(this,Oi),Q(this,Qs),Q(this,Hl),Q(this,lu),Q(this,Bl),Q(this,du),Q(this,Wl),Q(this,Vl),Q(this,xr),Q(this,Fl),Q(this,Pr),Q(this,hs),Q(this,Mt,null),Q(this,qa,null),Q(this,_a,null),Q(this,ds,new Set),Q(this,us,void 0),Q(this,Ya,!1),Q(this,Xr,null),Q(this,js,()=>{const t=K(this,ds),a=new Set(this.items);for(const i of t)a.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(const i of a)t.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));Lt(this,ds,a)}),Q(this,Li,()=>{z(this,Oi,Jr).call(this),z(this,Qs,ou).call(this,!1)}),Q(this,Mi,()=>{z(this,Oi,Jr).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ze(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),Lt(this,us,new MutationObserver(K(this,js))),K(this,us).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[ka.DISABLED,ka.HIDDEN,ka.STYLE,ka.ANCHOR,q.MEDIA_CONTROLLER]}static formatMenuItemText(t,a){return t}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(t){switch(t.type){case"slotchange":z(this,Ol,Np).call(this,t);break;case"invoke":z(this,xl,xp).call(this,t);break;case"click":z(this,Hl,Hp).call(this,t);break;case"toggle":z(this,Bl,Wp).call(this,t);break;case"focusout":z(this,Wl,Fp).call(this,t);break;case"keydown":z(this,Vl,$p).call(this,t);break}}connectedCallback(){var t,a;Lt(this,Xr,Im(this.shadowRoot,":host")),z(this,cs,Nl).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),Lt(this,Mt,rl(this)),(a=(t=K(this,Mt))==null?void 0:t.associateElement)==null||a.call(t,this),this.hidden||(Pi(en(this),K(this,Li)),Pi(this,K(this,Mi))),z(this,Gs,su).call(this)}disconnectedCallback(){var t,a;Ui(en(this),K(this,Li)),Ui(this,K(this,Mi)),this.disable(),(a=(t=K(this,Mt))==null?void 0:t.unassociateElement)==null||a.call(t,this),Lt(this,Mt,null)}attributeChangedCallback(t,a,i){var r,n,s,l;t===ka.HIDDEN&&i!==a?(K(this,Ya)||Lt(this,Ya,!0),this.hidden?z(this,Ul,Up).call(this):z(this,Pl,Pp).call(this),this.dispatchEvent(new w_({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):t===q.MEDIA_CONTROLLER?(a&&((n=(r=K(this,Mt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Lt(this,Mt,null)),i&&this.isConnected&&(Lt(this,Mt,rl(this)),(l=(s=K(this,Mt))==null?void 0:s.associateElement)==null||l.call(s,this))):t===ka.DISABLED&&i!==a?i==null?this.enable():this.disable():t===ka.STYLE&&i!==a&&z(this,cs,Nl).call(this)}formatMenuItemText(t,a){return this.constructor.formatMenuItemText(t,a)}get anchor(){return this.getAttribute("anchor")}set anchor(t){this.setAttribute("anchor",`${t}`)}get anchorElement(){var t;return this.anchor?(t=no(this))==null?void 0:t.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(I_)}get radioGroupItems(){return this.items.filter(t=>t.role==="menuitemradio")}get checkedItems(){return this.items.filter(t=>t.checked)}get value(){var t,a;return(a=(t=this.checkedItems[0])==null?void 0:t.value)!=null?a:""}set value(t){const a=this.items.find(i=>i.value===t);a&&z(this,hs,$l).call(this,a)}focus(){if(Lt(this,qa,kd()),this.items.length){z(this,Pr,zs).call(this,this.items[0]),this.items[0].focus();return}this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]')?.focus()}handleSelect(t){var a;const i=z(this,xr,Zs).call(this,t);i&&(z(this,hs,$l).call(this,i,i.type==="checkbox"),K(this,_a)&&!this.hidden&&((a=K(this,qa))==null||a.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(t){var a,i;const{key:r}=t,n=this.items,s=(i=(a=z(this,xr,Zs).call(this,t))!=null?a:z(this,Fl,Kp).call(this))!=null?i:n[0],l=n.indexOf(s);let o=Math.max(0,l);r==="ArrowDown"?o++:r==="ArrowUp"?o--:t.key==="Home"?o=0:t.key==="End"&&(o=n.length-1),o<0&&(o=n.length-1),o>n.length-1&&(o=0),z(this,Pr,zs).call(this,n[o]),n[o].focus()}}Mt=new WeakMap;qa=new WeakMap;_a=new WeakMap;ds=new WeakMap;us=new WeakMap;Ya=new WeakMap;Xr=new WeakMap;Ol=new WeakSet;Np=function(e){const t=e.target;for(const a of t.assignedNodes({flatten:!0}))a.nodeType===3&&a.textContent.trim()===""&&a.remove();["header","title"].includes(t.name)&&z(this,Gs,su).call(this),t.name||K(this,js).call(this)};Gs=new WeakSet;su=function(){const e=this.shadowRoot.querySelector('slot[name="header"]'),t=this.shadowRoot.querySelector('slot[name="title"]');e.hidden=t.assignedNodes().length===0&&e.assignedNodes().length===0};js=new WeakMap;cs=new WeakSet;Nl=function(){var e;const t=this.shadowRoot.querySelector("#layout-row"),a=(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:e.trim();t.setAttribute("media",a==="row"?"":"width:0")};xl=new WeakSet;xp=function(e){Lt(this,_a,e.relatedTarget),ta(this,e.relatedTarget)||(this.hidden=!this.hidden)};Pl=new WeakSet;Pp=function(){var e;(e=K(this,_a))==null||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Pi(en(this),K(this,Li)),Pi(this,K(this,Mi))};Ul=new WeakSet;Up=function(){var e;(e=K(this,_a))==null||e.setAttribute("aria-expanded","false"),Ui(en(this),K(this,Li)),Ui(this,K(this,Mi))};Li=new WeakMap;Mi=new WeakMap;Oi=new WeakSet;Jr=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:t,y:a}=__({anchor:this.anchorElement,floating:this,placement:"top-start"});e??(e=this.offsetWidth);const i=en(this).getBoundingClientRect(),r=i.width-t-e,n=i.height-a-this.offsetHeight,{style:s}=K(this,Xr);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);const l=getComputedStyle(this),o=s.getPropertyValue("--_menu-bottom")===l.bottom?n:parseFloat(l.bottom),d=i.height-o-parseFloat(l.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)};Qs=new WeakSet;ou=function(e){const t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),a=t?.querySelector('[role="menu"]'),{style:i}=K(this,Xr);if(e||i.setProperty("--media-menu-transition-in","none"),a){const r=a.offsetHeight,n=Math.max(a.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),z(this,Oi,Jr).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),z(this,Oi,Jr).call(this);i.removeProperty("--media-menu-transition-in")};Hl=new WeakSet;Hp=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(K(this,lu,Bp))){(t=K(this,qa))==null||t.focus(),this.hidden=!0;return}const a=z(this,xr,Zs).call(this,e);!a||a.hasAttribute("disabled")||(z(this,Pr,zs).call(this,a),this.handleSelect(e))};lu=new WeakSet;Bp=function(){var e;return(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:e.find(t=>t.matches('button[part~="back"]'))};Bl=new WeakSet;Wp=function(e){if(e.target===this)return;z(this,du,Vp).call(this);const t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const a of t)a.invokeTargetElement!=e.target&&e.newState=="open"&&a.getAttribute("aria-expanded")=="true"&&!a.invokeTargetElement.hidden&&a.invokeTargetElement.dispatchEvent(new ru({relatedTarget:a}));for(const a of t)a.setAttribute("aria-expanded",`${!a.submenuElement.hidden}`);z(this,Qs,ou).call(this,!0)};du=new WeakSet;Vp=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};Wl=new WeakSet;Fp=function(e){var t;ta(this,e.relatedTarget)||(K(this,Ya)&&((t=K(this,qa))==null||t.focus()),K(this,_a)&&K(this,_a)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))};Vl=new WeakSet;$p=function(e){var t,a,i,r,n;const{key:s,ctrlKey:l,altKey:o,metaKey:d}=e;if(!(l||o||d)&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),s==="Tab"){if(K(this,Ya)){this.hidden=!0;return}e.shiftKey?(a=(t=this.previousElementSibling)==null?void 0:t.focus)==null||a.call(t):(r=(i=this.nextElementSibling)==null?void 0:i.focus)==null||r.call(i),this.blur()}else s==="Escape"?((n=K(this,qa))==null||n.focus(),K(this,Ya)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(e):this.handleMove(e)};xr=new WeakSet;Zs=function(e){return e.composedPath().find(t=>["menuitemradio","menuitemcheckbox"].includes(t.role))};Fl=new WeakSet;Kp=function(){return this.items.find(e=>e.tabIndex===0)};Pr=new WeakSet;zs=function(e){for(const t of this.items)t.tabIndex=t===e?0:-1};hs=new WeakSet;$l=function(e,t){const a=[...this.checkedItems];e.type==="radio"&&this.radioGroupItems.forEach(i=>i.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((i,r)=>i!=a[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};Vt.shadowRootOptions={mode:"open"};Vt.getTemplateHTML=S_;function I_(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(e?.role)}function en(e){var t;return(t=e.getAttribute("bounds")?Fi(e,`#${e.getAttribute("bounds")}`):rt(e)||e.parentElement)!=null?t:e}b.customElements.get("media-chrome-menu")||b.customElements.define("media-chrome-menu",Vt);var uu=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Pt=(e,t,a)=>(uu(e,t,"read from private field"),a?a.call(e):t.get(e)),Kt=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Bo=(e,t,a,i)=>(uu(e,t,"write to private field"),t.set(e,a),a),vt=(e,t,a)=>(uu(e,t,"access private method"),a),ms,Ur,Kl,qp,Xs,cu,hu,Yp,Ut,Vi,tn,ql,Gp,ps,Yl;function R_(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `}function D_(e){return""}const Je={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class qi extends b.HTMLElement{constructor(){if(super(),Kt(this,Kl),Kt(this,Xs),Kt(this,hu),Kt(this,Vi),Kt(this,ql),Kt(this,ps),Kt(this,ms,!1),Kt(this,Ur,void 0),Kt(this,Ut,()=>{var t,a;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const i=this.shadowRoot.querySelector('slot[name="description"]'),r=(t=this.submenuElement.checkedItems)==null?void 0:t[0],n=(a=r?.dataset.description)!=null?a:r?.text,s=ye.createElement("span");s.textContent=n??"",i.replaceChildren(s)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ze(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[Je.TYPE,Je.DISABLED,Je.CHECKED,Je.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),ir(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(t){switch(t.type){case"slotchange":vt(this,Kl,qp).call(this,t);break;case"click":this.handleClick(t);break;case"keydown":vt(this,ql,Gp).call(this,t);break;case"keyup":vt(this,Vi,tn).call(this,t);break}}attributeChangedCallback(t,a,i){t===Je.CHECKED&&ir(this)&&!Pt(this,ms)?this.setAttribute("aria-checked",i!=null?"true":"false"):t===Je.TYPE&&i!==a?this.role="menuitem"+i:t===Je.DISABLED&&i!==a&&(i==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(Je.DISABLED)||this.enable(),this.role="menuitem"+this.type,Bo(this,Ur,Gl(this,this.parentNode)),vt(this,ps,Yl).call(this),this.submenuElement&&vt(this,Xs,cu).call(this)}disconnectedCallback(){this.disable(),vt(this,ps,Yl).call(this),Bo(this,Ur,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=no(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var t;return(t=this.getAttribute(Je.TYPE))!=null?t:""}set type(t){this.setAttribute(Je.TYPE,`${t}`)}get value(){var t;return(t=this.getAttribute(Je.VALUE))!=null?t:this.text}set value(t){this.setAttribute(Je.VALUE,t)}get text(){var t;return((t=this.textContent)!=null?t:"").trim()}get checked(){if(ir(this))return this.getAttribute("aria-checked")==="true"}set checked(t){ir(this)&&(Bo(this,ms,!0),this.setAttribute("aria-checked",t?"true":"false"),t?this.part.add("checked"):this.part.remove("checked"))}handleClick(t){ir(this)||this.invokeTargetElement&&ta(this,t.target)&&this.invokeTargetElement.dispatchEvent(new ru({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}ms=new WeakMap;Ur=new WeakMap;Kl=new WeakSet;qp=function(e){const t=e.target;if(!t?.name)for(const a of t.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();t.name==="submenu"&&(this.submenuElement?vt(this,Xs,cu).call(this):vt(this,hu,Yp).call(this))};Xs=new WeakSet;cu=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Pt(this,Ut)),this.submenuElement.addEventListener("addmenuitem",Pt(this,Ut)),this.submenuElement.addEventListener("removemenuitem",Pt(this,Ut)),Pt(this,Ut).call(this)};hu=new WeakSet;Yp=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Pt(this,Ut)),this.submenuElement.removeEventListener("addmenuitem",Pt(this,Ut)),this.submenuElement.removeEventListener("removemenuitem",Pt(this,Ut)),Pt(this,Ut).call(this)};Ut=new WeakMap;Vi=new WeakSet;tn=function(e){const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",vt(this,Vi,tn));return}this.handleClick(e)};ql=new WeakSet;Gp=function(e){const{metaKey:t,altKey:a,key:i}=e;if(t||a||!this.keysUsed.includes(i)){this.removeEventListener("keyup",vt(this,Vi,tn));return}this.addEventListener("keyup",vt(this,Vi,tn),{once:!0})};ps=new WeakSet;Yl=function(){var e;const t=(e=Pt(this,Ur))==null?void 0:e.radioGroupItems;if(!t)return;let a=t.filter(i=>i.getAttribute("aria-checked")==="true").pop();a||(a=t[0]);for(const i of t)i.setAttribute("aria-checked","false");a?.setAttribute("aria-checked","true")};qi.shadowRootOptions={mode:"open"};qi.getTemplateHTML=R_;qi.getSuffixSlotInnerHTML=D_;function ir(e){return e.type==="radio"||e.type==="checkbox"}function Gl(e,t){if(!e)return null;const{host:a}=e.getRootNode();return!t&&a?Gl(e,a):t?.items?t:Gl(t,t?.parentNode)}b.customElements.get("media-chrome-menu-item")||b.customElements.define("media-chrome-menu-item",qi);function C_(e){return`
    ${Vt.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}class jp extends Vt{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:rt(this).querySelector("media-settings-menu-button")}}jp.getTemplateHTML=C_;b.customElements.get("media-settings-menu")||b.customElements.define("media-settings-menu",jp);function L_(e){return`
    ${qi.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function M_(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class go extends qi{}go.shadowRootOptions={mode:"open"};go.getTemplateHTML=L_;go.getSuffixSlotInnerHTML=M_;b.customElements.get("media-settings-menu-item")||b.customElements.define("media-settings-menu-item",go);class Yi extends Ce{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=no(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):null}handleClick(){var t;(t=this.invokeTargetElement)==null||t.dispatchEvent(new ru({relatedTarget:this}))}}b.customElements.get("media-chrome-menu-button")||b.customElements.define("media-chrome-menu-button",Yi);function O_(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function N_(){return D("Settings")}class mu extends Yi{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:rt(this).querySelector("media-settings-menu")}}mu.getSlotTemplateHTML=O_;mu.getTooltipContentHTML=N_;b.customElements.get("media-settings-menu-button")||b.customElements.define("media-settings-menu-button",mu);var pu=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Qp=(e,t,a)=>(pu(e,t,"read from private field"),a?a.call(e):t.get(e)),_n=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},jl=(e,t,a,i)=>(pu(e,t,"write to private field"),t.set(e,a),a),yn=(e,t,a)=>(pu(e,t,"access private method"),a),Ar,Js,vs,Ql,Es,Zl;class x_ extends Vt{constructor(){super(...arguments),_n(this,vs),_n(this,Es),_n(this,Ar,[]),_n(this,Js,void 0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_AUDIO_TRACK_LIST,u.MEDIA_AUDIO_TRACK_ENABLED,u.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_AUDIO_TRACK_ENABLED&&a!==i?this.value=i:t===u.MEDIA_AUDIO_TRACK_LIST&&a!==i&&(jl(this,Ar,Rg(i??"")),yn(this,vs,Ql).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",yn(this,Es,Zl))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",yn(this,Es,Zl))}get anchorElement(){var t;return this.anchor!=="auto"?super.anchorElement:(t=rt(this))==null?void 0:t.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return Qp(this,Ar)}set mediaAudioTrackList(t){jl(this,Ar,t),yn(this,vs,Ql).call(this)}get mediaAudioTrackEnabled(){var t;return(t=ie(this,u.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){re(this,u.MEDIA_AUDIO_TRACK_ENABLED,t)}}Ar=new WeakMap;Js=new WeakMap;vs=new WeakSet;Ql=function(){if(Qp(this,Js)===JSON.stringify(this.mediaAudioTrackList))return;jl(this,Js,JSON.stringify(this.mediaAudioTrackList));const e=this.mediaAudioTrackList;this.defaultSlot.textContent="";for(const t of e){const a=this.formatMenuItemText(t.label,t),i=Wi({type:"radio",text:a,value:`${t.id}`,checked:t.enabled});i.prepend(Ga(this,"checked-indicator")),this.defaultSlot.append(i)}};Es=new WeakSet;Zl=function(){if(this.value==null)return;const e=new b.CustomEvent(R.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};b.customElements.get("media-audio-track-menu")||b.customElements.define("media-audio-track-menu",x_);const P_=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function U_(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${P_}</slot>
  `}function H_(){return D("Audio")}const qc=e=>{const t=D("Audio");e.setAttribute("aria-label",t)};class vu extends Yi{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_AUDIO_TRACK_ENABLED,u.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),qc(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_LANG&&qc(this)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=rt(this))==null?void 0:t.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var t;return(t=ie(this,u.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){re(this,u.MEDIA_AUDIO_TRACK_ENABLED,t)}}vu.getSlotTemplateHTML=U_;vu.getTooltipContentHTML=H_;b.customElements.get("media-audio-track-menu-button")||b.customElements.define("media-audio-track-menu-button",vu);var Eu=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},B_=(e,t,a)=>(Eu(e,t,"read from private field"),t.get(e)),Wo=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},W_=(e,t,a,i)=>(Eu(e,t,"write to private field"),t.set(e,a),a),Vo=(e,t,a)=>(Eu(e,t,"access private method"),a),eo,zl,Zp,bs,Xl;const V_=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function F_(e){return`
    ${Vt.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${V_}</slot>
  `}class zp extends Vt{constructor(){super(...arguments),Wo(this,zl),Wo(this,bs),Wo(this,eo,void 0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_SUBTITLES_LIST,u.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_SUBTITLES_LIST&&a!==i?Vo(this,zl,Zp).call(this):t===u.MEDIA_SUBTITLES_SHOWING&&a!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Vo(this,bs,Xl))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Vo(this,bs,Xl))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:rt(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return Yc(this,u.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){Gc(this,u.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return Yc(this,u.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){Gc(this,u.MEDIA_SUBTITLES_SHOWING,t)}}eo=new WeakMap;zl=new WeakSet;Zp=function(){var e;if(B_(this,eo)===JSON.stringify(this.mediaSubtitlesList))return;W_(this,eo,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const t=!this.value,a=Wi({type:"radio",text:this.formatMenuItemText(D("Off")),value:"off",checked:t});a.prepend(Ga(this,"checked-indicator")),this.defaultSlot.append(a);const i=this.mediaSubtitlesList;for(const r of i){const n=Wi({type:"radio",text:this.formatMenuItemText(r.label,r),value:ll(r),checked:this.value==ll(r)});n.prepend(Ga(this,"checked-indicator")),((e=r.kind)!=null?e:"subs")==="captions"&&n.append(Ga(this,"captions-indicator")),this.defaultSlot.append(n)}};bs=new WeakSet;Xl=function(){const e=this.mediaSubtitlesShowing,t=this.getAttribute(u.MEDIA_SUBTITLES_SHOWING),a=this.value!==t;if(e?.length&&a&&this.dispatchEvent(new b.CustomEvent(R.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!a)return;const i=new b.CustomEvent(R.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(i)};zp.getTemplateHTML=F_;const Yc=(e,t)=>{const a=e.getAttribute(t);return a?co(a):[]},Gc=(e,t,a)=>{if(!a?.length){e.removeAttribute(t);return}const i=Yr(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};b.customElements.get("media-captions-menu")||b.customElements.define("media-captions-menu",zp);const $_=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,K_=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function q_(){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${$_}</slot>
      <slot name="off">${K_}</slot>
    </slot>
  `}function Y_(){return D("Captions")}const jc=e=>{e.setAttribute("aria-checked",Um(e).toString())},Qc=e=>{e.setAttribute("aria-label",D("closed captions"))};class bu extends Yi{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_SUBTITLES_LIST,u.MEDIA_SUBTITLES_SHOWING,u.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),Qc(this),jc(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_SUBTITLES_SHOWING?jc(this):t===u.MEDIA_LANG&&Qc(this)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=rt(this))==null?void 0:t.querySelector("media-captions-menu")}get mediaSubtitlesList(){return Zc(this,u.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){zc(this,u.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return Zc(this,u.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){zc(this,u.MEDIA_SUBTITLES_SHOWING,t)}}bu.getSlotTemplateHTML=q_;bu.getTooltipContentHTML=Y_;const Zc=(e,t)=>{const a=e.getAttribute(t);return a?co(a):[]},zc=(e,t,a)=>{if(!a?.length){e.removeAttribute(t);return}const i=Yr(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};b.customElements.get("media-captions-menu-button")||b.customElements.define("media-captions-menu-button",bu);var Xp=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},gi=(e,t,a)=>(Xp(e,t,"read from private field"),a?a.call(e):t.get(e)),Fo=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},rr=(e,t,a)=>(Xp(e,t,"access private method"),a),pa,kr,fs,gs,Jl;const $o={RATES:"rates"};class G_ extends Vt{constructor(){super(),Fo(this,kr),Fo(this,gs),Fo(this,pa,new Id(this,$o.RATES,{defaultValue:mp})),rr(this,kr,fs).call(this)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PLAYBACK_RATE,$o.RATES]}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_PLAYBACK_RATE&&a!=i?this.value=i:t===$o.RATES&&a!=i&&(gi(this,pa).value=i,rr(this,kr,fs).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",rr(this,gs,Jl))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",rr(this,gs,Jl))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:rt(this).querySelector("media-playback-rate-menu-button")}get rates(){return gi(this,pa)}set rates(t){t?Array.isArray(t)?gi(this,pa).value=t.join(" "):typeof t=="string"&&(gi(this,pa).value=t):gi(this,pa).value="",rr(this,kr,fs).call(this)}get mediaPlaybackRate(){return ae(this,u.MEDIA_PLAYBACK_RATE,wi)}set mediaPlaybackRate(t){de(this,u.MEDIA_PLAYBACK_RATE,t)}}pa=new WeakMap;kr=new WeakSet;fs=function(){this.defaultSlot.textContent="";for(const e of gi(this,pa)){const t=Wi({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(Ga(this,"checked-indicator")),this.defaultSlot.append(t)}};gs=new WeakSet;Jl=function(){if(!this.value)return;const e=new b.CustomEvent(R.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};b.customElements.get("media-playback-rate-menu")||b.customElements.define("media-playback-rate-menu",G_);const _s=1;function j_(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||_s}x</slot>
  `}function Q_(){return D("Playback rate")}class fu extends Yi{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PLAYBACK_RATE]}constructor(){var t;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(t=this.mediaPlaybackRate)!=null?t:_s}x`}attributeChangedCallback(t,a,i){if(super.attributeChangedCallback(t,a,i),t===u.MEDIA_PLAYBACK_RATE){const r=i?+i:Number.NaN,n=Number.isNaN(r)?_s:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:rt(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return ae(this,u.MEDIA_PLAYBACK_RATE,_s)}set mediaPlaybackRate(t){de(this,u.MEDIA_PLAYBACK_RATE,t)}}fu.getSlotTemplateHTML=j_;fu.getTooltipContentHTML=Q_;b.customElements.get("media-playback-rate-menu-button")||b.customElements.define("media-playback-rate-menu-button",fu);var gu=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},wr=(e,t,a)=>(gu(e,t,"read from private field"),a?a.call(e):t.get(e)),Tn=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Xc=(e,t,a,i)=>(gu(e,t,"write to private field"),t.set(e,a),a),ri=(e,t,a)=>(gu(e,t,"access private method"),a),Sr,Si,_i,Ir,ys,ed;class Z_ extends Vt{constructor(){super(...arguments),Tn(this,_i),Tn(this,ys),Tn(this,Sr,[]),Tn(this,Si,{})}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_RENDITION_LIST,u.MEDIA_RENDITION_SELECTED,u.MEDIA_RENDITION_UNAVAILABLE,u.MEDIA_HEIGHT]}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===u.MEDIA_RENDITION_SELECTED&&a!==i?(this.value=i??"auto",ri(this,_i,Ir).call(this)):t===u.MEDIA_RENDITION_LIST&&a!==i?(Xc(this,Sr,kg(i)),ri(this,_i,Ir).call(this)):t===u.MEDIA_HEIGHT&&a!==i&&ri(this,_i,Ir).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ri(this,ys,ed))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ri(this,ys,ed))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:rt(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return wr(this,Sr)}set mediaRenditionList(t){Xc(this,Sr,t),ri(this,_i,Ir).call(this)}get mediaRenditionSelected(){return ie(this,u.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){re(this,u.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return ae(this,u.MEDIA_HEIGHT)}set mediaHeight(t){de(this,u.MEDIA_HEIGHT,t)}}Sr=new WeakMap;Si=new WeakMap;_i=new WeakSet;Ir=function(){if(wr(this,Si).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&wr(this,Si).mediaHeight===this.mediaHeight)return;wr(this,Si).mediaRenditionList=JSON.stringify(this.mediaRenditionList),wr(this,Si).mediaHeight=this.mediaHeight;const e=this.mediaRenditionList.sort((n,s)=>s.height-n.height);for(const n of e)n.selected=n.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";const t=!this.mediaRenditionSelected;for(const n of e){const s=this.formatMenuItemText(`${Math.min(n.width,n.height)}p`,n),l=Wi({type:"radio",text:s,value:`${n.id}`,checked:n.selected&&!t});l.prepend(Ga(this,"checked-indicator")),this.defaultSlot.append(l)}const a=t?this.formatMenuItemText(`${D("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(D("Auto")),i=Wi({type:"radio",text:a,value:"auto",checked:t}),r=this.mediaHeight>0?`${D("Auto")} (${this.mediaHeight}p)`:D("Auto");i.dataset.description=r,i.prepend(Ga(this,"checked-indicator")),this.defaultSlot.append(i)};ys=new WeakSet;ed=function(){if(this.value==null)return;const e=new b.CustomEvent(R.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};b.customElements.get("media-rendition-menu")||b.customElements.define("media-rendition-menu",Z_);const z_=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function X_(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${z_}</slot>
  `}function J_(){return D("Quality")}class _u extends Yi{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_RENDITION_SELECTED,u.MEDIA_RENDITION_UNAVAILABLE,u.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:rt(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ie(this,u.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){re(this,u.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return ae(this,u.MEDIA_HEIGHT)}set mediaHeight(t){de(this,u.MEDIA_HEIGHT,t)}}_u.getSlotTemplateHTML=X_;_u.getTooltipContentHTML=J_;b.customElements.get("media-rendition-menu-button")||b.customElements.define("media-rendition-menu-button",_u);var Jp=e=>{throw TypeError(e)},yu=(e,t,a)=>t.has(e)||Jp("Cannot "+a),j=(e,t,a)=>(yu(e,t,"read from private field"),a?a.call(e):t.get(e)),mt=(e,t,a)=>t.has(e)?Jp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Bt=(e,t,a,i)=>(yu(e,t,"write to private field"),t.set(e,a),a),ve=(e,t,a)=>(yu(e,t,"access private method"),a),_o=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends _o{}globalThis.DocumentFragment=e}var Tu=class extends _o{},ey=class extends _o{},ty={get(e){},define(e,t,a){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Tu)}},Ts,ay=class{constructor(e,t={}){mt(this,Ts),Bt(this,Ts,t?.detail)}get detail(){return j(this,Ts)}initCustomEvent(){}};Ts=new WeakMap;function iy(e,t){return new Tu}var ev={document:{createElement:iy},DocumentFragment,customElements:ty,CustomEvent:ay,EventTarget:_o,HTMLElement:Tu,HTMLVideoElement:ey},tv=typeof window>"u"||typeof globalThis.customElements>"u",Nt=tv?ev:globalThis,Au=tv?ev.document:globalThis.document;function ry(e){let t="";return Object.entries(e).forEach(([a,i])=>{i!=null&&(t+=`${td(a)}: ${i}; `)}),t?t.trim():void 0}function td(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function av(e){return e.replace(/[-_]([a-z])/g,(t,a)=>a.toUpperCase())}function je(e){if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}function iv(e){let t=ny(e).toString();return t?"?"+t:""}function ny(e){let t={};for(let a in e)e[a]!=null&&(t[a]=e[a]);return new URLSearchParams(t)}var rv=(e,t)=>!e||!t?!1:e.contains(t)?!0:rv(e,t.getRootNode().host),nv="mux.com",sy=()=>{try{return"3.6.0"}catch{}return"UNKNOWN"},oy=sy(),sv=()=>oy,ly=(e,{token:t,customDomain:a=nv,thumbnailTime:i,programTime:r}={})=>{var n;let s=t==null?i:void 0,{aud:l}=(n=Ii(t))!=null?n:{};if(!(t&&l!=="t"))return`https://image.${a}/${e}/thumbnail.webp${iv({token:t,time:s,program_time:r})}`},dy=(e,{token:t,customDomain:a=nv,programStartTime:i,programEndTime:r}={})=>{var n;let{aud:s}=(n=Ii(t))!=null?n:{};if(!(t&&s!=="s"))return`https://image.${a}/${e}/storyboard.vtt${iv({token:t,format:"webp",program_start_time:i,program_end_time:r})}`},ku=e=>{if(e){if([G.LIVE,G.ON_DEMAND].includes(e))return e;if(e!=null&&e.includes("live"))return G.LIVE}},uy={crossorigin:"crossOrigin",playsinline:"playsInline"};function cy(e){var t;return(t=uy[e])!=null?t:av(e)}var yi,Ti,Ue,hy=class{constructor(e,t){mt(this,yi),mt(this,Ti),mt(this,Ue,[]),Bt(this,yi,e),Bt(this,Ti,t)}[Symbol.iterator](){return j(this,Ue).values()}get length(){return j(this,Ue).length}get value(){var e;return(e=j(this,Ue).join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(Bt(this,Ue,[]),this.add(...(t=e?.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return j(this,Ue)[e]}values(){return j(this,Ue).values()}keys(){return j(this,Ue).keys()}forEach(e){j(this,Ue).forEach(e)}add(...e){var t,a;e.forEach(i=>{this.contains(i)||j(this,Ue).push(i)}),!(this.value===""&&!((t=j(this,yi))!=null&&t.hasAttribute(`${j(this,Ti)}`)))&&((a=j(this,yi))==null||a.setAttribute(`${j(this,Ti)}`,`${this.value}`))}remove(...e){var t;e.forEach(a=>{j(this,Ue).splice(j(this,Ue).indexOf(a),1)}),(t=j(this,yi))==null||t.setAttribute(`${j(this,Ti)}`,`${this.value}`)}contains(e){return j(this,Ue).includes(e)}toggle(e,t){return typeof t<"u"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};yi=new WeakMap,Ti=new WeakMap,Ue=new WeakMap;var ov=`[mux-player ${sv()}]`;function jt(...e){console.warn(ov,...e)}function tt(...e){console.error(ov,...e)}function lv(e){var t;let a=(t=e.message)!=null?t:"";e.context&&(a+=` ${e.context}`),e.file&&(a+=` ${L("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),jt(a)}var Me={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},Ma={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},Jc=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),my=Object.values(Me).filter(e=>Me.PLAYSINLINE!==e),py=Object.values(Ma),vy=[...my,...py],Ey=class extends Nt.HTMLElement{static get observedAttributes(){return vy}constructor(){super()}attributeChangedCallback(e,t,a){var i,r;switch(e){case Ma.MUTED:{this.media&&(this.media.muted=a!=null,this.media.defaultMuted=a!=null);return}case Ma.VOLUME:{let n=(i=je(a))!=null?i:1;this.media&&(this.media.volume=n);return}case Ma.PLAYBACKRATE:{let n=(r=je(a))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var e,t;return(t=(e=this.media)==null?void 0:e.play())!=null?t:Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}load(){var e;(e=this.media)==null||e.load()}get media(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return(t=(e=this.media)==null?void 0:e.paused)!=null?t:!0}get duration(){var e,t;return(t=(e=this.media)==null?void 0:e.duration)!=null?t:NaN}get ended(){var e,t;return(t=(e=this.media)==null?void 0:e.ended)!=null?t:!1}get buffered(){var e,t;return(t=(e=this.media)==null?void 0:e.buffered)!=null?t:Jc}get seekable(){var e,t;return(t=(e=this.media)==null?void 0:e.seekable)!=null?t:Jc}get readyState(){var e,t;return(t=(e=this.media)==null?void 0:e.readyState)!=null?t:0}get videoWidth(){var e,t;return(t=(e=this.media)==null?void 0:e.videoWidth)!=null?t:0}get videoHeight(){var e,t;return(t=(e=this.media)==null?void 0:e.videoHeight)!=null?t:0}get currentSrc(){var e,t;return(t=(e=this.media)==null?void 0:e.currentSrc)!=null?t:""}get currentTime(){var e,t;return(t=(e=this.media)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return(t=(e=this.media)==null?void 0:e.volume)!=null?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return(t=(e=this.media)==null?void 0:e.playbackRate)!=null?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return(e=je(this.getAttribute(Ma.PLAYBACKRATE)))!=null?e:1}set defaultPlaybackRate(e){e!=null?this.setAttribute(Ma.PLAYBACKRATE,`${e}`):this.removeAttribute(Ma.PLAYBACKRATE)}get crossOrigin(){return nr(this,Me.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(Me.CROSSORIGIN,`${e}`)}get autoplay(){return nr(this,Me.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute(Me.AUTOPLAY,typeof e=="string"?e:""):this.removeAttribute(Me.AUTOPLAY)}get loop(){return nr(this,Me.LOOP)!=null}set loop(e){e?this.setAttribute(Me.LOOP,""):this.removeAttribute(Me.LOOP)}get muted(){var e,t;return(t=(e=this.media)==null?void 0:e.muted)!=null?t:!1}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return nr(this,Me.MUTED)!=null}set defaultMuted(e){e?this.setAttribute(Me.MUTED,""):this.removeAttribute(Me.MUTED)}get playsInline(){return nr(this,Me.PLAYSINLINE)!=null}set playsInline(e){tt("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(Me.PRELOAD,e):this.removeAttribute(Me.PRELOAD)}};function nr(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var eh=Ey,by=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,sr=new WeakMap,fy=class dv{constructor(t,a){this.element=t,this.type=a,this.element.addEventListener(this.type,this);let i=sr.get(this.element);i&&i.set(this.type,this)}set(t){if(typeof t=="function")this.handleEvent=t.bind(this.element);else if(typeof t=="object"&&typeof t.handleEvent=="function")this.handleEvent=t.handleEvent.bind(t);else{this.element.removeEventListener(this.type,this);let a=sr.get(this.element);a&&a.delete(this.type)}}static for(t){sr.has(t.element)||sr.set(t.element,new Map);let a=t.attributeName.slice(2),i=sr.get(t.element);return i&&i.has(a)?i.get(a):new dv(t.element,a)}};function gy(e,t){return e instanceof Et&&e.attributeName.startsWith("on")?(fy.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),!0):!1}function _y(e,t){return t instanceof uv&&e instanceof Ki?(t.renderInto(e),!0):!1}function yy(e,t){return t instanceof DocumentFragment&&e instanceof Ki?(t.childNodes.length&&e.replace(...t.childNodes),!0):!1}function Ty(e,t){if(e instanceof Et){let a=e.attributeNamespace,i=e.element.getAttributeNS(a,e.attributeName);return String(t)!==i&&(e.value=String(t)),!0}return e.value=String(t),!0}function Ay(e,t){if(e instanceof Et&&t instanceof Element){let a=e.element;return a[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),a[e.attributeName]=t),!0}return!1}function ky(e,t){if(typeof t=="boolean"&&e instanceof Et){let a=e.attributeNamespace,i=e.element.hasAttributeNS(a,e.attributeName);return t!==i&&(e.booleanValue=t),!0}return!1}function wy(e,t){return t===!1&&e instanceof Ki?(e.replace(""),!0):!1}function Sy(e,t){Ay(e,t)||ky(e,t)||gy(e,t)||wy(e,t)||_y(e,t)||yy(e,t)||Ty(e,t)}var Ko=new Map,th=new WeakMap,ah=new WeakMap,uv=class{constructor(e,t,a){this.strings=e,this.values=t,this.processor=a,this.stringsKey=this.strings.join("")}get template(){if(Ko.has(this.stringsKey))return Ko.get(this.stringsKey);{let e=Au.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((a,i,r)=>a+i+(r<t?`{{ ${r} }}`:""),""),Ko.set(this.stringsKey,e),e}}renderInto(e){var t;let a=this.template;if(th.get(e)!==a){th.set(e,a);let r=new bo(a,this.values,this.processor);ah.set(e,r),e instanceof Ki?e.replace(...r.children):e.appendChild(r);return}let i=ah.get(e);(t=i?.update)==null||t.call(i,this.values)}},Iy={processCallback(e,t,a){var i;if(a){for(let[r,n]of t)if(r in a){let s=(i=a[r])!=null?i:"";Sy(n,s)}}}};function As(e,...t){return new uv(e,t,Iy)}function Ry(e,t){e.renderInto(t)}var Dy=e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},Cy=e=>As`
  <style>
    ${Dy(e)}
    ${by}
  </style>
  ${Ny(e)}
`,Ly=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return ku(e.streamType)==="live"&&(t+=" noarrowleft noarrowright"),t},My={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},Oy=Object.values(My).join(", "),Ny=e=>{var t,a,i,r,n,s,l,o,d,h,p,m,c,v,_,g,y,T,E,w,C,N,W,Y,X,V,P,Le,Be,We,ce,Ne,ft,xe,nt,Ve,Te;return As`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${(t=e.defaultStreamType)!=null?t:!1}"
    hotkeys="${Ly(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!((a=e.streamType)!=null&&a.includes(G.LIVE))&&e.targetLiveWindow!==0}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${(i=e.audio)!=null?i:!1}"
    style="${(r=ry({"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${(n=e.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=e.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(l=e.playbackRates)!=null?l:!1}"
    defaultshowremainingtime="${(o=e.defaultShowRemainingTime)!=null?o:!1}"
    defaultduration="${(d=e.defaultDuration)!=null?d:!1}"
    hideduration="${(h=e.hideDuration)!=null?h:!1}"
    title="${(p=e.title)!=null?p:!1}"
    videotitle="${(m=e.videoTitle)!=null?m:!1}"
    proudlydisplaymuxbadge="${(c=e.proudlyDisplayMuxBadge)!=null?c:!1}"
    exportparts="${Oy}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${(v=e.noHotKeys)!=null?v:!1}"
      target-live-window="${(_=e.targetLiveWindow)!=null?_:!1}"
      stream-type="${(g=ku(e.streamType))!=null?g:!1}"
      crossorigin="${(y=e.crossOrigin)!=null?y:""}"
      playsinline
      autoplay="${(T=e.autoplay)!=null?T:!1}"
      muted="${(E=e.muted)!=null?E:!1}"
      loop="${(w=e.loop)!=null?w:!1}"
      preload="${(C=e.preload)!=null?C:!1}"
      debug="${(N=e.debug)!=null?N:!1}"
      prefer-cmcd="${(W=e.preferCmcd)!=null?W:!1}"
      disable-tracking="${(Y=e.disableTracking)!=null?Y:!1}"
      disable-cookies="${(X=e.disableCookies)!=null?X:!1}"
      prefer-playback="${(V=e.preferPlayback)!=null?V:!1}"
      start-time="${e.startTime!=null?e.startTime:!1}"
      beacon-collection-domain="${(P=e.beaconCollectionDomain)!=null?P:!1}"
      player-init-time="${(Le=e.playerInitTime)!=null?Le:!1}"
      player-software-name="${(Be=e.playerSoftwareName)!=null?Be:!1}"
      player-software-version="${(We=e.playerSoftwareVersion)!=null?We:!1}"
      env-key="${(ce=e.envKey)!=null?ce:!1}"
      custom-domain="${(Ne=e.customDomain)!=null?Ne:!1}"
      src="${e.src?e.src:e.playbackId?el(e):!1}"
      cast-src="${e.src?e.src:e.playbackId?el(e):!1}"
      cast-receiver="${(ft=e.castReceiver)!=null?ft:!1}"
      drm-token="${(nt=(xe=e.tokens)==null?void 0:xe.drm)!=null?nt:!1}"
      exportparts="video"
      disable-pseudo-ended="${(Ve=e.disablePseudoEnded)!=null?Ve:!1}"
    >
      ${e.storyboard?As`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:As``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${e.poster?e.poster:!1}"
        placeholdersrc="${(Te=e.placeholder)!=null?Te:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},cv=e=>e.charAt(0).toUpperCase()+e.slice(1),xy=(e,t=!1)=>{var a,i;if(e.muxCode){let r=cv((a=e.errorCategory)!=null?a:"video"),n=ao((i=e.errorCategory)!=null?i:te.VIDEO);if(e.muxCode===O.NETWORK_OFFLINE)return L("Your device appears to be offline",t);if(e.muxCode===O.NETWORK_TOKEN_EXPIRED)return L("{category} URL has expired",t).format({category:r});if([O.NETWORK_TOKEN_SUB_MISMATCH,O.NETWORK_TOKEN_AUD_MISMATCH,O.NETWORK_TOKEN_AUD_MISSING,O.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return L("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===O.NETWORK_TOKEN_MISSING)return L("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===O.NETWORK_NOT_FOUND)return L("{category} does not exist",t).format({category:r});if(e.muxCode===O.NETWORK_NOT_READY){let s=e.streamType==="live"?"Live stream":"Video";return L("{mediaType} is not currently available",t).format({mediaType:s})}}if(e.code){if(e.code===S.MEDIA_ERR_NETWORK)return L("Network Error",t);if(e.code===S.MEDIA_ERR_DECODE)return L("Media Error",t);if(e.code===S.MEDIA_ERR_SRC_NOT_SUPPORTED)return L("Source Not Supported",t)}return L("Error",t)},Py=(e,t=!1)=>{var a,i;if(e.muxCode){let r=cv((a=e.errorCategory)!=null?a:"video"),n=ao((i=e.errorCategory)!=null?i:te.VIDEO);return e.muxCode===O.NETWORK_OFFLINE?L("Check your internet connection and try reloading this video.",t):e.muxCode===O.NETWORK_TOKEN_EXPIRED?L("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===O.NETWORK_TOKEN_SUB_MISMATCH?L("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===O.NETWORK_TOKEN_MALFORMED?L("{category} URL is formatted incorrectly",t).format({category:r}):[O.NETWORK_TOKEN_AUD_MISMATCH,O.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?L("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[O.NETWORK_TOKEN_MISSING,O.NETWORK_INVALID_URL].includes(e.muxCode)?L("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===O.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===S.MEDIA_ERR_NETWORK||e.code===S.MEDIA_ERR_DECODE||(e.code,S.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},Uy=(e,t=!1)=>{let a=xy(e,t).toString(),i=Py(e,t).toString();return{title:a,message:i}},Hy=e=>{if(e.muxCode){if(e.muxCode===O.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===O.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([O.NETWORK_TOKEN_AUD_MISMATCH,O.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===O.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===O.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===O.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===O.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===S.MEDIA_ERR_NETWORK)return"";if(e.code===S.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===S.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},ih=(e,t)=>{let a=Hy(e);return{message:e.message,context:e.context,file:a}},By=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,ad=Au.createElement("template");"innerHTML"in ad&&(ad.innerHTML=By);var rh,nh,hv=class extends fo{};hv.template=(nh=(rh=ad.content)==null?void 0:rh.children)==null?void 0:nh[0];Nt.customElements.get("media-theme-gerwig")||Nt.customElements.define("media-theme-gerwig",hv);var Wy="gerwig",Yt={SRC:"src",POSTER:"poster"},A={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},id=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","proudlydisplaymuxbadge"];function Vy(e,t){var a,i;return{src:!e.playbackId&&e.src,playbackId:e.playbackId,hasSrc:!!e.playbackId||!!e.src||!!e.currentSrc,poster:e.poster,storyboard:e.storyboard,storyboardSrc:e.getAttribute(A.STORYBOARD_SRC),placeholder:e.getAttribute("placeholder"),themeTemplate:$y(e),thumbnailTime:!e.tokens.thumbnail&&e.thumbnailTime,autoplay:e.autoplay,crossOrigin:e.crossOrigin,loop:e.loop,noHotKeys:e.hasAttribute(A.NOHOTKEYS),hotKeys:e.getAttribute(A.HOTKEYS),muted:e.muted,paused:e.paused,preload:e.preload,envKey:e.envKey,preferCmcd:e.preferCmcd,debug:e.debug,disableTracking:e.disableTracking,disableCookies:e.disableCookies,tokens:e.tokens,beaconCollectionDomain:e.beaconCollectionDomain,maxResolution:e.maxResolution,minResolution:e.minResolution,programStartTime:e.programStartTime,programEndTime:e.programEndTime,assetStartTime:e.assetStartTime,assetEndTime:e.assetEndTime,renditionOrder:e.renditionOrder,metadata:e.metadata,playerInitTime:e.playerInitTime,playerSoftwareName:e.playerSoftwareName,playerSoftwareVersion:e.playerSoftwareVersion,startTime:e.startTime,preferPlayback:e.preferPlayback,audio:e.audio,defaultStreamType:e.defaultStreamType,targetLiveWindow:e.getAttribute(f.TARGET_LIVE_WINDOW),streamType:ku(e.getAttribute(f.STREAM_TYPE)),primaryColor:e.getAttribute(A.PRIMARY_COLOR),secondaryColor:e.getAttribute(A.SECONDARY_COLOR),accentColor:e.getAttribute(A.ACCENT_COLOR),forwardSeekOffset:e.forwardSeekOffset,backwardSeekOffset:e.backwardSeekOffset,defaultHiddenCaptions:e.defaultHiddenCaptions,defaultDuration:e.defaultDuration,defaultShowRemainingTime:e.defaultShowRemainingTime,hideDuration:Ky(e),playbackRates:e.getAttribute(A.PLAYBACK_RATES),customDomain:(a=e.getAttribute(f.CUSTOM_DOMAIN))!=null?a:void 0,title:e.getAttribute(A.TITLE),videoTitle:(i=e.getAttribute(A.VIDEO_TITLE))!=null?i:e.getAttribute(A.TITLE),novolumepref:e.hasAttribute(A.NO_VOLUME_PREF),proudlyDisplayMuxBadge:e.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:e.castReceiver,disablePseudoEnded:e.hasAttribute(A.DISABLE_PSEUDO_ENDED),...t,extraSourceParams:e.extraSourceParams}}var Fy=dp.formatErrorMessage;dp.formatErrorMessage=e=>{var t,a;if(e instanceof S){let i=Uy(e,!1);return`
      ${i!=null&&i.title?`<h3>${i.title}</h3>`:""}
      ${i!=null&&i.message||i!=null&&i.linkUrl?`<p>
        ${i?.message}
        ${i!=null&&i.linkUrl?`<a
              href="${i.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(t=i.linkText)!=null?t:""} ${L("(opens in a new window)")}"
              >${(a=i.linkText)!=null?a:i.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return Fy(e)};function $y(e){var t,a;let i=e.theme;if(i){let r=(a=(t=e.getRootNode())==null?void 0:t.getElementById)==null?void 0:a.call(t,i);if(r&&r instanceof HTMLTemplateElement)return r;i.startsWith("media-theme-")||(i=`media-theme-${i}`);let n=Nt.customElements.get(i);if(n!=null&&n.template)return n.template}}function Ky(e){var t;let a=(t=e.mediaController)==null?void 0:t.querySelector("media-time-display");return a&&getComputedStyle(a).getPropertyValue("--media-duration-display-display").trim()==="none"}function sh(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(a=>a.startsWith("metadata-")).reduce((a,i)=>{let r=e.getAttribute(i);return r!==null&&(a[i.replace(/^metadata-/,"").replace(/-/g,"_")]=r),a},t)}var qy=Object.values(f),Yy=Object.values(Yt),Gy=Object.values(A),oh=sv(),lh="mux-player",dh={isDialogOpen:!1},jy={redundant_streams:!0},ks,ws,Ss,Oa,Is,Ni,oe,ma,mv,rd,Na,uh,ch,hh,mh,Qy=class extends eh{constructor(){super(),mt(this,oe),mt(this,ks),mt(this,ws,!1),mt(this,Ss,{}),mt(this,Oa,!0),mt(this,Is,new hy(this,"hotkeys")),mt(this,Ni,{...dh,onCloseErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&ve(this,oe,rd).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&(rv(this,Au.activeElement)||e.preventDefault())}}),Bt(this,ks,vd()),this.attachShadow({mode:"open"}),ve(this,oe,mv).call(this),this.isConnected&&ve(this,oe,ma).call(this)}static get NAME(){return lh}static get VERSION(){return oh}static get observedAttributes(){var e;return[...(e=eh.observedAttributes)!=null?e:[],...Yy,...qy,...Gy]}get mediaTheme(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return(t=(e=this.mediaTheme)==null?void 0:e.shadowRoot)==null?void 0:t.querySelector("media-controller")}connectedCallback(){let e=this.media;e&&(e.metadata=sh(this))}attributeChangedCallback(e,t,a){switch(ve(this,oe,ma).call(this),super.attributeChangedCallback(e,t,a),e){case A.HOTKEYS:j(this,Is).value=a;break;case A.THUMBNAIL_TIME:{a!=null&&this.tokens.thumbnail&&jt(L("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case A.THUMBNAIL_TOKEN:{if(a){let i=Ii(a);if(i){let{aud:r}=i,n=Cr.THUMBNAIL;r!==n&&jt(L("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case A.STORYBOARD_TOKEN:{if(a){let i=Ii(a);if(i){let{aud:r}=i,n=Cr.STORYBOARD;r!==n&&jt(L("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case A.DRM_TOKEN:{if(a){let i=Ii(a);if(i){let{aud:r}=i,n=Cr.DRM;r!==n&&jt(L("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case f.PLAYBACK_ID:{a!=null&&a.includes("?token")&&tt(L("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:a}));break}case f.STREAM_TYPE:a&&![G.LIVE,G.ON_DEMAND,G.UNKNOWN].includes(a)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=a.includes("dvr")?Number.POSITIVE_INFINITY:0:lv({file:"invalid-stream-type.md",message:L("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):a===G.LIVE?this.getAttribute(A.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[f.PLAYBACK_ID,Yt.SRC,A.PLAYBACK_TOKEN].includes(e)&&t!==a&&Bt(this,Ni,{...j(this,Ni),...dh}),ve(this,oe,Na).call(this,{[cy(e)]:a})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(u.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new Nt.CustomEvent(R.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,i)=>{var r;(r=this.mediaController)==null||r.addEventListener(Jt.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(u.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new Nt.CustomEvent(R.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((t,a)=>{var i;(i=this.mediaController)==null||i.addEventListener(Jt.MEDIA_IS_FULLSCREEN,()=>t(),{once:!0})})}get preferCmcd(){var e;return(e=this.getAttribute(f.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Ms.includes(e)?this.setAttribute(f.PREFER_CMCD,e):jt(`Invalid value for preferCmcd. Must be one of ${Ms.join()}`):this.removeAttribute(f.PREFER_CMCD))}get hasPlayed(){var e,t;return(t=(e=this.mediaController)==null?void 0:e.hasAttribute(u.MEDIA_HAS_PLAYED))!=null?t:!1}get inLiveWindow(){var e;return(e=this.mediaController)==null?void 0:e.hasAttribute(u.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return(e=this.media)==null?void 0:e._hls}get mux(){var e;return(e=this.media)==null?void 0:e.mux}get theme(){var e;return(e=this.getAttribute(A.THEME))!=null?e:Wy}set theme(e){this.setAttribute(A.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let a of e.getAttributeNames()){if(id.includes(a))continue;let i=e.getAttribute(a);t[av(a)]=i===""?!0:i}return t}set themeProps(e){var t,a;ve(this,oe,ma).call(this);let i={...this.themeProps,...e};for(let r in i){if(id.includes(r))continue;let n=e?.[r];typeof n=="boolean"||n==null?(t=this.mediaTheme)==null||t.toggleAttribute(td(r),!!n):(a=this.mediaTheme)==null||a.setAttribute(td(r),n)}}get playbackId(){var e;return(e=this.getAttribute(f.PLAYBACK_ID))!=null?e:void 0}set playbackId(e){e?this.setAttribute(f.PLAYBACK_ID,e):this.removeAttribute(f.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?(e=wa(this,Yt.SRC))!=null?e:void 0:(t=this.getAttribute(Yt.SRC))!=null?t:void 0}set src(e){e?this.setAttribute(Yt.SRC,e):this.removeAttribute(Yt.SRC)}get poster(){var e;let t=this.getAttribute(Yt.POSTER);if(t!=null)return t;let{tokens:a}=this;if(a.playback&&!a.thumbnail){jt("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return ly(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(e=this.thumbnailTime)!=null?e:this.startTime,programTime:this.programStartTime,token:a.thumbnail})}set poster(e){e||e===""?this.setAttribute(Yt.POSTER,e):this.removeAttribute(Yt.POSTER)}get storyboardSrc(){var e;return(e=this.getAttribute(A.STORYBOARD_SRC))!=null?e:void 0}set storyboardSrc(e){e?this.setAttribute(A.STORYBOARD_SRC,e):this.removeAttribute(A.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;if(this.storyboardSrc&&!e.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[G.LIVE,G.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard))return dy(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(A.AUDIO)}set audio(e){if(!e){this.removeAttribute(A.AUDIO);return}this.setAttribute(A.AUDIO,"")}get hotkeys(){return j(this,Is)}get nohotkeys(){return this.hasAttribute(A.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(A.NOHOTKEYS);return}this.setAttribute(A.NOHOTKEYS,"")}get thumbnailTime(){return je(this.getAttribute(A.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(A.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return(t=(e=this.getAttribute(A.VIDEO_TITLE))!=null?e:this.getAttribute(A.TITLE))!=null?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(A.VIDEO_TITLE,e):this.removeAttribute(A.VIDEO_TITLE))}get placeholder(){var e;return(e=wa(this,A.PLACEHOLDER))!=null?e:""}set placeholder(e){this.setAttribute(A.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let a=this.getAttribute(A.PRIMARY_COLOR);if(a!=null||this.mediaTheme&&(a=(t=(e=Nt.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_primary-color"))==null?void 0:t.trim(),a))return a}set primaryColor(e){this.setAttribute(A.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let a=this.getAttribute(A.SECONDARY_COLOR);if(a!=null||this.mediaTheme&&(a=(t=(e=Nt.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_secondary-color"))==null?void 0:t.trim(),a))return a}set secondaryColor(e){this.setAttribute(A.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let a=this.getAttribute(A.ACCENT_COLOR);if(a!=null||this.mediaTheme&&(a=(t=(e=Nt.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_accent-color"))==null?void 0:t.trim(),a))return a}set accentColor(e){this.setAttribute(A.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(A.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(A.PLAYBACK_RATES))return this.getAttribute(A.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(A.PLAYBACK_RATES);return}this.setAttribute(A.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return(e=je(this.getAttribute(A.FORWARD_SEEK_OFFSET)))!=null?e:10}set forwardSeekOffset(e){this.setAttribute(A.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return(e=je(this.getAttribute(A.BACKWARD_SEEK_OFFSET)))!=null?e:10}set backwardSeekOffset(e){this.setAttribute(A.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(A.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return je(this.getAttribute(A.DEFAULT_DURATION))}set defaultDuration(e){e==null?this.removeAttribute(A.DEFAULT_DURATION):this.setAttribute(A.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(f.PLAYER_INIT_TIME)?je(this.getAttribute(f.PLAYER_INIT_TIME)):j(this,ks)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(f.PLAYER_INIT_TIME):this.setAttribute(f.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=this.getAttribute(f.PLAYER_SOFTWARE_NAME))!=null?e:lh}get playerSoftwareVersion(){var e;return(e=this.getAttribute(f.PLAYER_SOFTWARE_VERSION))!=null?e:oh}get beaconCollectionDomain(){var e;return(e=this.getAttribute(f.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(f.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(f.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return(e=this.getAttribute(f.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(f.MAX_RESOLUTION,e):this.removeAttribute(f.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(f.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(f.MIN_RESOLUTION,e):this.removeAttribute(f.MIN_RESOLUTION))}get renditionOrder(){var e;return(e=this.getAttribute(f.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(f.RENDITION_ORDER,e):this.removeAttribute(f.RENDITION_ORDER))}get programStartTime(){return je(this.getAttribute(f.PROGRAM_START_TIME))}set programStartTime(e){e==null?this.removeAttribute(f.PROGRAM_START_TIME):this.setAttribute(f.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return je(this.getAttribute(f.PROGRAM_END_TIME))}set programEndTime(e){e==null?this.removeAttribute(f.PROGRAM_END_TIME):this.setAttribute(f.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return je(this.getAttribute(f.ASSET_START_TIME))}set assetStartTime(e){e==null?this.removeAttribute(f.ASSET_START_TIME):this.setAttribute(f.ASSET_START_TIME,`${e}`)}get assetEndTime(){return je(this.getAttribute(f.ASSET_END_TIME))}set assetEndTime(e){e==null?this.removeAttribute(f.ASSET_END_TIME):this.setAttribute(f.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(A.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(A.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,a])=>(e[t]=a,e),{}):jy}set extraSourceParams(e){e==null?this.removeAttribute(A.EXTRA_SOURCE_PARAMS):this.setAttribute(A.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return(e=this.getAttribute(f.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(f.CUSTOM_DOMAIN,e):this.removeAttribute(f.CUSTOM_DOMAIN))}get envKey(){var e;return(e=wa(this,f.ENV_KEY))!=null?e:void 0}set envKey(e){this.setAttribute(f.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(A.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(A.NO_VOLUME_PREF,""):this.removeAttribute(A.NO_VOLUME_PREF)}get debug(){return wa(this,f.DEBUG)!=null}set debug(e){e?this.setAttribute(f.DEBUG,""):this.removeAttribute(f.DEBUG)}get disableTracking(){return wa(this,f.DISABLE_TRACKING)!=null}set disableTracking(e){this.toggleAttribute(f.DISABLE_TRACKING,!!e)}get disableCookies(){return wa(this,f.DISABLE_COOKIES)!=null}set disableCookies(e){e?this.setAttribute(f.DISABLE_COOKIES,""):this.removeAttribute(f.DISABLE_COOKIES)}get streamType(){var e,t,a;return(a=(t=this.getAttribute(f.STREAM_TYPE))!=null?t:(e=this.media)==null?void 0:e.streamType)!=null?a:G.UNKNOWN}set streamType(e){this.setAttribute(f.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,a;return(a=(t=this.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?t:(e=this.mediaController)==null?void 0:e.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?a:G.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(A.DEFAULT_STREAM_TYPE,e):this.removeAttribute(A.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(A.TARGET_LIVE_WINDOW)?+this.getAttribute(A.TARGET_LIVE_WINDOW):(t=(e=this.media)==null?void 0:e.targetLiveWindow)!=null?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(e==null?this.removeAttribute(A.TARGET_LIVE_WINDOW):this.setAttribute(A.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return(e=this.media)==null?void 0:e.liveEdgeStart}get startTime(){return je(wa(this,f.START_TIME))}set startTime(e){this.setAttribute(f.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(f.PREFER_PLAYBACK);if(e===xt.MSE||e===xt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===xt.MSE||e===xt.NATIVE?this.setAttribute(f.PREFER_PLAYBACK,e):this.removeAttribute(f.PREFER_PLAYBACK))}get metadata(){var e;return(e=this.media)==null?void 0:e.metadata}set metadata(e){if(ve(this,oe,ma).call(this),!this.media){tt("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...sh(this),...e}}get _hlsConfig(){var e;return(e=this.media)==null?void 0:e._hlsConfig}set _hlsConfig(e){if(ve(this,oe,ma).call(this),!this.media){tt("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(ve(this,oe,ma).call(this),!this.media){tt("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(t=this.media)==null?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return(e=this.media)==null?void 0:e.activeCuePoint}get cuePoints(){var e,t;return(t=(e=this.media)==null?void 0:e.cuePoints)!=null?t:[]}addChapters(e){var t;if(ve(this,oe,ma).call(this),!this.media){tt("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(t=this.media)==null?void 0:t.addChapters(e)}get activeChapter(){var e;return(e=this.media)==null?void 0:e.activeChapter}get chapters(){var e,t;return(t=(e=this.media)==null?void 0:e.chapters)!=null?t:[]}getStartDate(){var e;return(e=this.media)==null?void 0:e.getStartDate()}get currentPdt(){var e;return(e=this.media)==null?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(A.PLAYBACK_TOKEN),t=this.getAttribute(A.DRM_TOKEN),a=this.getAttribute(A.THUMBNAIL_TOKEN),i=this.getAttribute(A.STORYBOARD_TOKEN);return{...j(this,Ss),...e!=null?{playback:e}:{},...t!=null?{drm:t}:{},...a!=null?{thumbnail:a}:{},...i!=null?{storyboard:i}:{}}}set tokens(e){Bt(this,Ss,e??{})}get playbackToken(){var e;return(e=this.getAttribute(A.PLAYBACK_TOKEN))!=null?e:void 0}set playbackToken(e){this.setAttribute(A.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return(e=this.getAttribute(A.DRM_TOKEN))!=null?e:void 0}set drmToken(e){this.setAttribute(A.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return(e=this.getAttribute(A.THUMBNAIL_TOKEN))!=null?e:void 0}set thumbnailToken(e){this.setAttribute(A.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return(e=this.getAttribute(A.STORYBOARD_TOKEN))!=null?e:void 0}set storyboardToken(e){this.setAttribute(A.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,a,i){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return cd(n,e,t,a,i)}removeTextTrack(e){var t;let a=(t=this.media)==null?void 0:t.nativeEl;if(a)return rf(a,e)}get textTracks(){var e;return(e=this.media)==null?void 0:e.textTracks}get castReceiver(){var e;return(e=this.getAttribute(A.CAST_RECEIVER))!=null?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(A.CAST_RECEIVER,e):this.removeAttribute(A.CAST_RECEIVER))}get castCustomData(){var e;return(e=this.media)==null?void 0:e.castCustomData}set castCustomData(e){if(!this.media){tt("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(A.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(A.NO_TOOLTIPS);return}this.setAttribute(A.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(A.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}};ks=new WeakMap,ws=new WeakMap,Ss=new WeakMap,Oa=new WeakMap,Is=new WeakMap,Ni=new WeakMap,oe=new WeakSet,ma=function(){var e,t,a,i;if(!j(this,ws)){Bt(this,ws,!0),ve(this,oe,Na).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Nt.HTMLElement))throw""}catch{tt("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{tt("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof w0))throw""}catch{tt("<media-controller> failed to upgrade!")}ve(this,oe,uh).call(this),ve(this,oe,ch).call(this),ve(this,oe,hh).call(this),Bt(this,Oa,(t=(e=this.mediaController)==null?void 0:e.hasAttribute(M.USER_INACTIVE))!=null?t:!0),ve(this,oe,mh).call(this),(a=this.media)==null||a.addEventListener("streamtypechange",()=>ve(this,oe,Na).call(this)),(i=this.media)==null||i.addEventListener("loadstart",()=>ve(this,oe,Na).call(this))}},mv=function(){var e,t;try{(e=window?.CSS)==null||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(t=window?.CSS)==null||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},rd=function(e){Object.assign(j(this,Ni),e),ve(this,oe,Na).call(this)},Na=function(e={}){Ry(Cy(Vy(this,{...j(this,Ni),...e})),this.shadowRoot)},uh=function(){let e=t=>{var a,i;if(!(t!=null&&t.startsWith("theme-")))return;let r=t.replace(/^theme-/,"");if(id.includes(r))return;let n=this.getAttribute(t);n!=null?(a=this.mediaTheme)==null||a.setAttribute(r,n):(i=this.mediaTheme)==null||i.removeAttribute(r)};new MutationObserver(t=>{for(let{attributeName:a}of t)e(a)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},ch=function(){let e=t=>{var a;let i=(a=this.media)==null?void 0:a.error;if(!(i instanceof S)){let{message:n,code:s}=i??{};i=new S(n,s)}if(!(i!=null&&i.fatal)){jt(i),i.data&&jt(`${i.name} data:`,i.data);return}let r=ih(i);r.message&&lv(r),tt(i),i.data&&tt(`${i.name} data:`,i.data),ve(this,oe,rd).call(this,{isDialogOpen:!0})};this.addEventListener("error",e),this.media&&(this.media.errorTranslator=(t={})=>{var a,i,r;if(!(((a=this.media)==null?void 0:a.error)instanceof S))return t;let n=ih((i=this.media)==null?void 0:i.error);return{player_error_code:(r=this.media)==null?void 0:r.error.code,player_error_message:n.message?String(n.message):t.player_error_message,player_error_context:n.context?String(n.context):t.player_error_context}})},hh=function(){var e,t,a,i;let r=()=>ve(this,oe,Na).call(this);(t=(e=this.media)==null?void 0:e.textTracks)==null||t.addEventListener("addtrack",r),(i=(a=this.media)==null?void 0:a.textTracks)==null||i.addEventListener("removetrack",r)},mh=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let a,i=new WeakMap,r=()=>this.streamType===G.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(o,d,h=!1)=>{r()||Array.from(o&&o.activeCues||[]).forEach(p=>{if(!(!p.snapToLines||p.line<-5||p.line>=0&&p.line<10))if(!d||this.paused){let m=p.text.split(`
`).length,c=-3;this.streamType===G.LIVE&&(c=-2);let v=c-m;if(p.line===v&&!h)return;i.has(p)||i.set(p,p.line),p.line=v}else setTimeout(()=>{p.line=i.get(p)||"auto"},500)})},s=()=>{var o,d;n(a,(d=(o=this.mediaController)==null?void 0:o.hasAttribute(M.USER_INACTIVE))!=null?d:!1)},l=()=>{var o,d;let h=Array.from(((d=(o=this.mediaController)==null?void 0:o.media)==null?void 0:d.textTracks)||[]).filter(p=>["subtitles","captions"].includes(p.kind)&&p.mode==="showing")[0];h!==a&&a?.removeEventListener("cuechange",s),a=h,a?.addEventListener("cuechange",s),n(a,j(this,Oa))};l(),(e=this.textTracks)==null||e.addEventListener("change",l),(t=this.textTracks)==null||t.addEventListener("addtrack",l),this.addEventListener("userinactivechange",()=>{var o,d;let h=(d=(o=this.mediaController)==null?void 0:o.hasAttribute(M.USER_INACTIVE))!=null?d:!0;j(this,Oa)!==h&&(Bt(this,Oa,h),n(a,j(this,Oa)))})};function wa(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var ph=Qy,pv=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends pv{}globalThis.DocumentFragment=e}var Zy=class extends pv{},zy={get(e){},define(e,t,a){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Zy)}},Xy={customElements:zy},Jy=typeof window>"u"||typeof globalThis.customElements>"u",qo=Jy?Xy:globalThis;qo.customElements.get("mux-player")||(qo.customElements.define("mux-player",ph),qo.MuxPlayerElement=ph);var vv=parseInt(Hr.version)>=19,vh={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},eT=e=>e==null,tT=(e,t)=>eT(t)?!1:e in t,aT=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),iT=(e,t)=>{if(!(!vv&&typeof t=="boolean"&&!t)){if(tT(e,vh))return vh[e];if(typeof t<"u")return/[A-Z]/.test(e)?aT(e):e}},rT=(e,t)=>!vv&&typeof e=="boolean"?"":e,nT=(e={})=>{let{ref:t,...a}=e;return Object.entries(a).reduce((i,[r,n])=>{let s=iT(r,n);if(!s)return i;let l=rT(n);return i[s]=l,i},{})};function Eh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function sT(...e){return t=>{let a=!1,i=e.map(r=>{let n=Eh(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<i.length;r++){let n=i[r];typeof n=="function"?n():Eh(e[r],null)}}}}function oT(...e){return Br.useCallback(sT(...e),e)}var lT=Object.prototype.hasOwnProperty,dT=(e,t)=>{if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:e.some((r,n)=>t[n]===r);let a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(let r=0;r<a.length;r++)if(!lT.call(t,a[r])||!Object.is(e[a[r]],t[a[r]]))return!1;return!0},Ev=(e,t,a)=>!dT(t,e[a]),uT=(e,t,a)=>{e[a]=t},cT=(e,t,a,i=uT,r=Ev)=>Br.useEffect(()=>{let n=a?.current;n&&r(n,t,e)&&i(n,t,e)},[a?.current,t]),yt=cT,hT=()=>{try{return"3.6.0"}catch{}return"UNKNOWN"},mT=hT(),pT=()=>mT,ne=(e,t,a)=>Br.useEffect(()=>{let i=t?.current;if(!i||!a)return;let r=e,n=a;return i.addEventListener(r,n),()=>{i.removeEventListener(r,n)}},[t?.current,a,e]),vT=Hr.forwardRef(({children:e,...t},a)=>Hr.createElement("mux-player",{suppressHydrationWarning:!0,...nT(t),ref:a},e)),ET=(e,t)=>{let{onAbort:a,onCanPlay:i,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:l,onLoadedMetadata:o,onProgress:d,onDurationChange:h,onVolumeChange:p,onRateChange:m,onResize:c,onWaiting:v,onPlay:_,onPlaying:g,onTimeUpdate:y,onPause:T,onSeeking:E,onSeeked:w,onStalled:C,onSuspend:N,onEnded:W,onError:Y,onCuePointChange:X,onChapterChange:V,metadata:P,tokens:Le,paused:Be,playbackId:We,playbackRates:ce,currentTime:Ne,themeProps:ft,extraSourceParams:xe,castCustomData:nt,_hlsConfig:Ve,...Te}=t;return yt("tokens",Le,e),yt("playbackId",We,e),yt("playbackRates",ce,e),yt("metadata",P,e),yt("extraSourceParams",xe,e),yt("_hlsConfig",Ve,e),yt("themeProps",ft,e),yt("castCustomData",nt,e),yt("paused",Be,e,(Fe,Xe)=>{Xe!=null&&(Xe?Fe.pause():Fe.play())},(Fe,Xe,za)=>Fe.hasAttribute("autoplay")&&!Fe.hasPlayed?!1:Ev(Fe,Xe,za)),yt("currentTime",Ne,e,(Fe,Xe)=>{Xe!=null&&(Fe.currentTime=Xe)}),ne("abort",e,a),ne("canplay",e,i),ne("canplaythrough",e,r),ne("emptied",e,n),ne("loadstart",e,s),ne("loadeddata",e,l),ne("loadedmetadata",e,o),ne("progress",e,d),ne("durationchange",e,h),ne("volumechange",e,p),ne("ratechange",e,m),ne("resize",e,c),ne("waiting",e,v),ne("play",e,_),ne("playing",e,g),ne("timeupdate",e,y),ne("pause",e,T),ne("seeking",e,E),ne("seeked",e,w),ne("stalled",e,C),ne("suspend",e,N),ne("ended",e,W),ne("error",e,Y),ne("cuepointchange",e,X),ne("chapterchange",e,V),[Te]},bT=pT(),fT="mux-player-react",gT=Hr.forwardRef((e,t)=>{var a;let i=Br.useRef(null),r=oT(i,t),[n]=ET(i,e),[s]=Br.useState((a=e.playerInitTime)!=null?a:vd());return Hr.createElement(vT,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:fT,playerSoftwareVersion:bT,playerInitTime:s,...n})}),ST=gT;export{AT as MaxResolution,S as MediaError,kT as MinResolution,wT as RenditionOrder,ST as default,vd as generatePlayerInitTime,fT as playerSoftwareName,bT as playerSoftwareVersion};
