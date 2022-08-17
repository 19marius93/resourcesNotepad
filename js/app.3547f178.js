(function(e){function t(t){for(var n,s,i=t[0],l=t[1],u=t[2],a=0,b=[];a<i.length;a++)s=i[a],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,u||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,i=1;i<c.length;i++){var l=c[i];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},o={app:0},r=[];function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/resourcesNotepad/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0df3":function(e,t,c){},"0fdb":function(e,t,c){"use strict";c("d508")},3961:function(e,t,c){"use strict";c("9a40")},"3bd0":function(e,t,c){"use strict";c("a6e8")},4406:function(e,t,c){"use strict";c("e70c")},"56d7":function(e,t,c){"use strict";c.r(t);var n=c("7a23");function o(e,t,c,o,r,s){const i=Object(n["q"])("the-header"),l=Object(n["q"])("the-resources");return Object(n["l"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(i,{title:"Resources Notepad"}),Object(n["j"])(l)],64)}function r(e,t,c,o,r,s){return Object(n["l"])(),Object(n["g"])("header",null,[Object(n["h"])("h1",null,Object(n["s"])(c.title),1)])}var s={props:["title"]},i=(c("e5bd"),c("6b0d")),l=c.n(i);const u=l()(s,[["render",r],["__scopeId","data-v-e2a806e0"]]);var d=u;const a=Object(n["i"])("Stored Resources"),b=Object(n["i"])("Add Resources");function j(e,t,c,o,r,s){const i=Object(n["q"])("base-button"),l=Object(n["q"])("base-card");return Object(n["l"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(l,null,{default:Object(n["t"])(()=>[Object(n["j"])(i,{onClick:t[0]||(t[0]=e=>s.setSelectedTab("stored-resources")),mode:s.storedResButtonMode},{default:Object(n["t"])(()=>[a]),_:1},8,["mode"]),Object(n["j"])(i,{onClick:t[1]||(t[1]=e=>s.setSelectedTab("add-resource")),mode:s.addResButtonMode},{default:Object(n["t"])(()=>[b]),_:1},8,["mode"])]),_:1}),(Object(n["l"])(),Object(n["e"])(n["b"],null,[(Object(n["l"])(),Object(n["e"])(Object(n["r"])(r.selectedTab)))],1024))],64)}function O(e,t,c,o,r,s){const i=Object(n["q"])("learning-resource");return Object(n["l"])(),Object(n["g"])("ul",null,[(Object(n["l"])(!0),Object(n["g"])(n["a"],null,Object(n["o"])(s.resources,e=>(Object(n["l"])(),Object(n["e"])(i,{key:e.id,id:e.id,title:e.title,description:e.description,link:e.link},null,8,["id","title","description","link"]))),128))])}const f=Object(n["i"])("Delete"),p=["href"];function h(e,t,c,o,r,s){const i=Object(n["q"])("base-button"),l=Object(n["q"])("base-card");return Object(n["l"])(),Object(n["g"])("li",null,[Object(n["j"])(l,null,{default:Object(n["t"])(()=>[Object(n["h"])("header",null,[Object(n["h"])("h3",null,Object(n["s"])(c.title),1),Object(n["j"])(i,{mode:"flat",onClick:t[0]||(t[0]=e=>s.deleteResource(c.id))},{default:Object(n["t"])(()=>[f]),_:1})]),Object(n["h"])("p",null,Object(n["s"])(c.description),1),Object(n["h"])("nav",null,[Object(n["h"])("a",{href:c.link},"View Resource",8,p)])]),_:1})])}var v={props:["id","title","description","link"],inject:["deleteResource"]};c("e4da");const m=l()(v,[["render",h],["__scopeId","data-v-5f85986c"]]);var g=m,k={inject:["resources"],components:{LearningResource:g}};c("7bd2");const _=l()(k,[["render",O],["__scopeId","data-v-72ab2c9a"]]);var R=_;const y=e=>(Object(n["n"])("data-v-690d7dc8"),e=e(),Object(n["m"])(),e),I=y(()=>Object(n["h"])("p",null,"Unfortunately, at least one input value is invalid.",-1)),T=y(()=>Object(n["h"])("p",null," Please check all inputs and make sure you enter at least a few characters into each input field. ",-1)),w=Object(n["i"])("Okay"),S={class:"form-control"},q=y(()=>Object(n["h"])("label",{for:"title"},"Title",-1)),C={id:"title",name:"title",type:"text",ref:"titleInput"},$={class:"form-control"},x=y(()=>Object(n["h"])("label",{for:"description"},"Description",-1)),M={id:"description",name:"description",rows:"3",ref:"descInput"},P={class:"form-control"},D=y(()=>Object(n["h"])("label",{for:"link"},"Link",-1)),B={id:"link",name:"link",type:"url",ref:"linkInput"},A=Object(n["i"])("Add Resource");function E(e,t,c,o,r,s){const i=Object(n["q"])("base-button"),l=Object(n["q"])("base-dialog"),u=Object(n["q"])("base-card");return Object(n["l"])(),Object(n["g"])(n["a"],null,[r.inputIsInvalid?(Object(n["l"])(),Object(n["e"])(l,{key:0,title:"Invalid Input",onClose:s.confirmError},{default:Object(n["t"])(()=>[I,T]),actions:Object(n["t"])(()=>[Object(n["j"])(i,{onClick:s.confirmError},{default:Object(n["t"])(()=>[w]),_:1},8,["onClick"])]),_:1},8,["onClose"])):Object(n["f"])("",!0),Object(n["j"])(u,null,{default:Object(n["t"])(()=>[Object(n["h"])("form",{onSubmit:t[0]||(t[0]=Object(n["u"])((...e)=>s.submitData&&s.submitData(...e),["prevent"]))},[Object(n["h"])("div",S,[q,Object(n["h"])("input",C,null,512)]),Object(n["h"])("div",$,[x,Object(n["h"])("textarea",M,null,512)]),Object(n["h"])("div",P,[D,Object(n["h"])("input",B,null,512)]),Object(n["h"])("div",null,[Object(n["j"])(i,{type:"submit"},{default:Object(n["t"])(()=>[A]),_:1})])],32)]),_:1})],64)}var L={inject:["addResource"],data(){return{inputIsInvalid:!1}},methods:{submitData(){const e=this.$refs.titleInput.value,t=this.$refs.descInput.value,c=this.$refs.linkInput.value;""!==e.trim()&&""!==t.trim()&&""!==c.trim()?this.addResource(e,t,c):this.inputIsInvalid=!0},confirmError(){this.inputIsInvalid=!1}}};c("0fdb");const G=l()(L,[["render",E],["__scopeId","data-v-690d7dc8"]]);var J=G,N={components:{StoredResources:R,AddResource:J},data(){return{selectedTab:"stored-resources",storedResources:[{id:"official-guide",title:"Official Guide",description:"The official Vue.js documentation.",link:"https://vuejs.org"},{id:"google",title:"Google",description:"Learn to google...",link:"https://google.org"}]}},provide(){return{resources:this.storedResources,addResource:this.addResource,deleteResource:this.removeResource}},computed:{storedResButtonMode(){return"stored-resources"===this.selectedTab?null:"flat"},addResButtonMode(){return"add-resource"===this.selectedTab?null:"flat"}},methods:{setSelectedTab(e){this.selectedTab=e},addResource(e,t,c){const n={id:(new Date).toISOString(),title:e,description:t,link:c};this.storedResources.unshift(n),this.selectedTab="stored-resources"},removeResource(e){const t=this.storedResources.findIndex(t=>t.id===e);this.storedResources.splice(t,1)}}};const V=l()(N,[["render",j]]);var H=V,U={components:{TheHeader:d,TheResources:H}};c("3961");const z=l()(U,[["render",o]]);var F=z;function K(e,t){return Object(n["l"])(),Object(n["g"])("div",null,[Object(n["p"])(e.$slots,"default",{},void 0,!0)])}c("5f16");const Q={},W=l()(Q,[["render",K],["__scopeId","data-v-efb75f2e"]]);var X=W;function Y(e,t,c,o,r,s){return Object(n["l"])(),Object(n["g"])("button",{class:Object(n["k"])(c.mode)},[Object(n["p"])(e.$slots,"default",{},void 0,!0)],2)}var Z={props:["mode"]};c("4406");const ee=l()(Z,[["render",Y],["__scopeId","data-v-2ddf46fd"]]);var te=ee;const ce={open:""},ne=Object(n["i"])("Close");function oe(e,t,c,o,r,s){const i=Object(n["q"])("base-button");return Object(n["l"])(),Object(n["e"])(n["c"],{to:"body"},[Object(n["h"])("div",{onClick:t[0]||(t[0]=t=>e.$emit("close"))}),Object(n["h"])("dialog",ce,[Object(n["h"])("header",null,[Object(n["p"])(e.$slots,"header",{},()=>[Object(n["h"])("h2",null,Object(n["s"])(c.title),1)],!0)]),Object(n["h"])("section",null,[Object(n["p"])(e.$slots,"default",{},void 0,!0)]),Object(n["h"])("menu",null,[Object(n["p"])(e.$slots,"actions",{},()=>[Object(n["j"])(i,{onClick:t[1]||(t[1]=t=>e.$emit("close"))},{default:Object(n["t"])(()=>[ne]),_:1})],!0)])])])}var re={props:{title:{type:String,required:!1}},emits:["close"]};c("3bd0");const se=l()(re,[["render",oe],["__scopeId","data-v-062dd16a"]]);var ie=se;const le=Object(n["d"])(F);le.component("base-card",X),le.component("base-button",te),le.component("base-dialog",ie),le.mount("#app")},"5f16":function(e,t,c){"use strict";c("c214")},"7bd2":function(e,t,c){"use strict";c("d218")},9014:function(e,t,c){},"9a40":function(e,t,c){},a6e8:function(e,t,c){},c214:function(e,t,c){},d218:function(e,t,c){},d508:function(e,t,c){},e4da:function(e,t,c){"use strict";c("0df3")},e5bd:function(e,t,c){"use strict";c("9014")},e70c:function(e,t,c){}});
//# sourceMappingURL=app.3547f178.js.map