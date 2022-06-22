import{_ as C,r as A,o as n,c as i,e as $,f as S,i as P,j as h,k as _e,h as e,F as H,l as R,a as g,t as x,m as w,n as z,p as Y,q as T,w as N,s as ve,v as k,b as j,x as X,y as Te,z as xe,A as Ne,B as J,C as Q,D as E,E as K,G as pe,H as he,u as me,g as I,T as fe,I as O,J as be,K as q,L as G,M as Be,N as Ie,O as Z,P as ge,Q as ke,d as He,R as ee,S as Me,U,V as te,W as De,X as Pe,Y as Ee,Z as Ae}from"./app.d0cc0c8d.js";const Re={},Fe={class:"theme-default-content"};function Oe(v,a){const t=A("Content");return n(),i("div",Fe,[$(t)])}var ze=C(Re,[["render",Oe],["__file","HomeContent.vue"]]);const We={key:0,class:"features"},Ve=S({__name:"HomeFeatures",setup(v){const a=P(),t=h(()=>_e(a.value.features)?a.value.features:[]);return(l,r)=>e(t).length?(n(),i("div",We,[(n(!0),i(H,null,R(e(t),p=>(n(),i("div",{key:p.title,class:"feature"},[g("h2",null,x(p.title),1),g("p",null,x(p.details),1)]))),128))])):w("",!0)}});var Ue=C(Ve,[["__file","HomeFeatures.vue"]]);const je=["innerHTML"],Ke=["textContent"],qe=S({__name:"HomeFooter",setup(v){const a=P(),t=h(()=>a.value.footer),l=h(()=>a.value.footerHtml);return(r,p)=>e(t)?(n(),i(H,{key:0},[e(l)?(n(),i("div",{key:0,class:"footer",innerHTML:e(t)},null,8,je)):(n(),i("div",{key:1,class:"footer",textContent:x(e(t))},null,8,Ke))],64)):w("",!0)}});var Ge=C(qe,[["__file","HomeFooter.vue"]]);const Xe=["href","rel","target","aria-label"],Ye=S({inheritAttrs:!1}),Je=S({...Ye,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(v){const a=v,t=z(),l=Ne(),{item:r}=Y(a),p=h(()=>X(r.value.link)),m=h(()=>Te(r.value.link)||xe(r.value.link)),c=h(()=>{if(!m.value){if(r.value.target)return r.value.target;if(p.value)return"_blank"}}),o=h(()=>c.value==="_blank"),s=h(()=>!p.value&&!m.value&&!o.value),u=h(()=>{if(!m.value){if(r.value.rel)return r.value.rel;if(o.value)return"noopener noreferrer"}}),d=h(()=>r.value.ariaLabel||r.value.text),_=h(()=>{const y=Object.keys(l.value.locales);return y.length?!y.some(f=>f===r.value.link):r.value.link!=="/"}),b=h(()=>_.value?t.path.startsWith(r.value.link):!1),L=h(()=>s.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(t.path):b.value:!1);return(y,f)=>{const B=A("RouterLink"),M=A("AutoLinkExternalIcon");return e(s)?(n(),T(B,ve({key:0,class:{"router-link-active":e(L)},to:e(r).link,"aria-label":e(d)},y.$attrs),{default:N(()=>[k(y.$slots,"before"),j(" "+x(e(r).text)+" ",1),k(y.$slots,"after")]),_:3},16,["class","to","aria-label"])):(n(),i("a",ve({key:1,class:"external-link",href:e(r).link,rel:e(u),target:e(c),"aria-label":e(d)},y.$attrs),[k(y.$slots,"before"),j(" "+x(e(r).text)+" ",1),e(o)?(n(),T(M,{key:0})):w("",!0),k(y.$slots,"after")],16,Xe))}}});var D=C(Je,[["__file","AutoLink.vue"]]);const Qe={class:"hero"},Ze={key:0,id:"main-title"},et={key:1,class:"description"},tt={key:2,class:"actions"},at=S({__name:"HomeHero",setup(v){const a=P(),t=J(),l=Q(),r=h(()=>l.value&&a.value.heroImageDark!==void 0?a.value.heroImageDark:a.value.heroImage),p=h(()=>a.value.heroText===null?null:a.value.heroText||t.value.title||"Hello"),m=h(()=>a.value.heroAlt||p.value||"hero"),c=h(()=>a.value.tagline===null?null:a.value.tagline||t.value.description||"Welcome to your VuePress site"),o=h(()=>_e(a.value.actions)?a.value.actions.map(({text:u,link:d,type:_="primary"})=>({text:u,link:d,type:_})):[]),s=()=>{if(!r.value)return null;const u=K("img",{src:pe(r.value),alt:m.value});return a.value.heroImageDark===void 0?u:K(he,()=>u)};return(u,d)=>(n(),i("header",Qe,[$(s),e(p)?(n(),i("h1",Ze,x(e(p)),1)):w("",!0),e(c)?(n(),i("p",et,x(e(c)),1)):w("",!0),e(o).length?(n(),i("p",tt,[(n(!0),i(H,null,R(e(o),_=>(n(),T(D,{key:_.text,class:E(["action-button",[_.type]]),item:_},null,8,["class","item"]))),128))])):w("",!0)]))}});var nt=C(at,[["__file","HomeHero.vue"]]);const ot={class:"home"},rt=S({__name:"Home",setup(v){return(a,t)=>(n(),i("main",ot,[$(nt),$(Ue),$(ze),$(Ge)]))}});var st=C(rt,[["__file","Home.vue"]]);const lt=S({__name:"NavbarBrand",setup(v){const a=me(),t=J(),l=I(),r=Q(),p=h(()=>l.value.home||a.value),m=h(()=>t.value.title),c=h(()=>r.value&&l.value.logoDark!==void 0?l.value.logoDark:l.value.logo),o=()=>{if(!c.value)return null;const s=K("img",{class:"logo",src:pe(c.value),alt:m.value});return l.value.logoDark===void 0?s:K(he,()=>s)};return(s,u)=>{const d=A("RouterLink");return n(),T(d,{to:e(p)},{default:N(()=>[$(o),e(m)?(n(),i("span",{key:0,class:E(["site-name",{"can-hide":e(c)}])},x(e(m)),3)):w("",!0)]),_:1},8,["to"])}}});var ut=C(lt,[["__file","NavbarBrand.vue"]]);const it=S({__name:"DropdownTransition",setup(v){const a=l=>{l.style.height=l.scrollHeight+"px"},t=l=>{l.style.height=""};return(l,r)=>(n(),T(fe,{name:"dropdown",onEnter:a,onAfterEnter:t,onBeforeLeave:a},{default:N(()=>[k(l.$slots,"default")]),_:3}))}});var $e=C(it,[["__file","DropdownTransition.vue"]]);const ct=["aria-label"],vt={class:"title"},dt=g("span",{class:"arrow down"},null,-1),_t=["aria-label"],pt={class:"title"},ht={class:"navbar-dropdown"},mt={class:"navbar-dropdown-subtitle"},ft={key:1},bt={class:"navbar-dropdown-subitem-wrapper"},gt=S({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(v){const a=v,{item:t}=Y(a),l=h(()=>t.value.ariaLabel||t.value.text),r=O(!1),p=z();be(()=>p.path,()=>{r.value=!1});const m=o=>{o.detail===0?r.value=!r.value:r.value=!1},c=(o,s)=>s[s.length-1]===o;return(o,s)=>(n(),i("div",{class:E(["navbar-dropdown-wrapper",{open:r.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":e(l),onClick:m},[g("span",vt,x(e(t).text),1),dt],8,ct),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":e(l),onClick:s[0]||(s[0]=u=>r.value=!r.value)},[g("span",pt,x(e(t).text),1),g("span",{class:E(["arrow",r.value?"down":"right"])},null,2)],8,_t),$($e,null,{default:N(()=>[q(g("ul",ht,[(n(!0),i(H,null,R(e(t).children,u=>(n(),i("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(n(),i(H,{key:0},[g("h4",mt,[u.link?(n(),T(D,{key:0,item:u,onFocusout:d=>c(u,e(t).children)&&u.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(n(),i("span",ft,x(u.text),1))]),g("ul",bt,[(n(!0),i(H,null,R(u.children,d=>(n(),i("li",{key:d.link,class:"navbar-dropdown-subitem"},[$(D,{item:d,onFocusout:_=>c(d,u.children)&&c(u,e(t).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(n(),T(D,{key:1,item:u,onFocusout:d=>c(u,e(t).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,r.value]])]),_:1})],2))}});var kt=C(gt,[["__file","NavbarDropdown.vue"]]);const de=v=>decodeURI(v).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),$t=(v,a)=>{if(a.hash===v)return!0;const t=de(a.path),l=de(v);return t===l},Le=(v,a)=>v.link&&$t(v.link,a)?!0:v.children?v.children.some(t=>Le(t,a)):!1,ye=v=>!X(v)||/github\.com/.test(v)?"GitHub":/bitbucket\.org/.test(v)?"Bitbucket":/gitlab\.com/.test(v)?"GitLab":/gitee\.com/.test(v)?"Gitee":null,Lt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},yt=({docsRepo:v,editLinkPattern:a})=>{if(a)return a;const t=ye(v);return t!==null?Lt[t]:null},wt=({docsRepo:v,docsBranch:a,docsDir:t,filePathRelative:l,editLinkPattern:r})=>{if(!l)return null;const p=yt({docsRepo:v,editLinkPattern:r});return p?p.replace(/:repo/,X(v)?v:`https://github.com/${v}`).replace(/:branch/,a).replace(/:path/,Be(`${Ie(t)}/${l}`)):null},Ct={key:0,class:"navbar-items"},St=S({__name:"NavbarItems",setup(v){const a=()=>{const s=Z(),u=me(),d=J(),_=I();return h(()=>{var B,M;const b=Object.keys(d.value.locales);if(b.length<2)return[];const L=s.currentRoute.value.path,y=s.currentRoute.value.fullPath;return[{text:(B=_.value.selectLanguageText)!=null?B:"unknown language",ariaLabel:(M=_.value.selectLanguageAriaLabel)!=null?M:"unkown language",children:b.map(F=>{var oe,re,se,le,ue,ie;const W=(re=(oe=d.value.locales)==null?void 0:oe[F])!=null?re:{},ae=(le=(se=_.value.locales)==null?void 0:se[F])!=null?le:{},ne=`${W.lang}`,Ce=(ue=ae.selectLanguageName)!=null?ue:ne;let V;if(ne===d.value.lang)V=y;else{const ce=L.replace(u.value,F);s.getRoutes().some(Se=>Se.path===ce)?V=ce:V=(ie=ae.home)!=null?ie:F}return{text:Ce,link:V}})}]})},t=()=>{const s=I(),u=h(()=>s.value.repo),d=h(()=>u.value?ye(u.value):null),_=h(()=>u.value&&!X(u.value)?`https://github.com/${u.value}`:u.value),b=h(()=>_.value?s.value.repoLabel?s.value.repoLabel:d.value===null?"Source":d.value:null);return h(()=>!_.value||!b.value?[]:[{text:b.value,link:_.value}])},l=s=>ge(s)?ke(s):s.children?{...s,children:s.children.map(l)}:s,p=(()=>{const s=I();return h(()=>(s.value.navbar||[]).map(l))})(),m=a(),c=t(),o=h(()=>[...p.value,...m.value,...c.value]);return(s,u)=>e(o).length?(n(),i("nav",Ct,[(n(!0),i(H,null,R(e(o),d=>(n(),i("div",{key:d.text,class:"navbar-item"},[d.children?(n(),T(kt,{key:0,item:d},null,8,["item"])):(n(),T(D,{key:1,item:d},null,8,["item"]))]))),128))])):w("",!0)}});var we=C(St,[["__file","NavbarItems.vue"]]);const Tt=["title"],xt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Nt=He('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Bt=[Nt],It={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ht=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Mt=[Ht],Dt=S({__name:"ToggleColorModeButton",setup(v){const a=I(),t=Q(),l=()=>{t.value=!t.value};return(r,p)=>(n(),i("button",{class:"toggle-color-mode-button",title:e(a).toggleColorMode,onClick:l},[q((n(),i("svg",xt,Bt,512)),[[G,!e(t)]]),q((n(),i("svg",It,Mt,512)),[[G,e(t)]])],8,Tt))}});var Pt=C(Dt,[["__file","ToggleColorModeButton.vue"]]);const Et=["title"],At=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),Rt=[At],Ft=S({__name:"ToggleSidebarButton",emits:["toggle"],setup(v){const a=I();return(t,l)=>(n(),i("div",{class:"toggle-sidebar-button",title:e(a).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=r=>t.$emit("toggle"))},Rt,8,Et))}});var Ot=C(Ft,[["__file","ToggleSidebarButton.vue"]]);const zt=S({__name:"Navbar",emits:["toggle-sidebar"],setup(v){const a=I(),t=O(null),l=O(null),r=O(0),p=h(()=>r.value?{maxWidth:r.value+"px"}:{});ee(()=>{const o=m(t.value,"paddingLeft")+m(t.value,"paddingRight"),s=()=>{var u;window.innerWidth<=719?r.value=0:r.value=t.value.offsetWidth-o-(((u=l.value)==null?void 0:u.offsetWidth)||0)};s(),window.addEventListener("resize",s,!1),window.addEventListener("orientationchange",s,!1)});function m(c,o){var d,_,b;const s=(b=(_=(d=c==null?void 0:c.ownerDocument)==null?void 0:d.defaultView)==null?void 0:_.getComputedStyle(c,null))==null?void 0:b[o],u=Number.parseInt(s,10);return Number.isNaN(u)?0:u}return(c,o)=>{const s=A("NavbarSearch");return n(),i("header",{ref_key:"navbar",ref:t,class:"navbar"},[$(Ot,{onToggle:o[0]||(o[0]=u=>c.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:l},[$(ut)],512),g("div",{class:"navbar-items-wrapper",style:Me(e(p))},[k(c.$slots,"before"),$(we,{class:"can-hide"}),k(c.$slots,"after"),e(a).colorModeSwitch?(n(),T(Pt,{key:0})):w("",!0),$(s)],4)],512)}}});var Wt=C(zt,[["__file","Navbar.vue"]]);const Vt={class:"page-meta"},Ut={key:0,class:"meta-item edit-link"},jt={key:1,class:"meta-item last-updated"},Kt={class:"meta-item-label"},qt={class:"meta-item-info"},Gt={key:2,class:"meta-item contributors"},Xt={class:"meta-item-label"},Yt={class:"meta-item-info"},Jt=["title"],Qt=j(", "),Zt=S({__name:"PageMeta",setup(v){const a=()=>{const o=I(),s=U(),u=P();return h(()=>{var M,F,W;if(!((F=(M=u.value.editLink)!=null?M:o.value.editLink)!=null?F:!0))return null;const{repo:_,docsRepo:b=_,docsBranch:L="main",docsDir:y="",editLinkText:f}=o.value;if(!b)return null;const B=wt({docsRepo:b,docsBranch:L,docsDir:y,filePathRelative:s.value.filePathRelative,editLinkPattern:(W=u.value.editLinkPattern)!=null?W:o.value.editLinkPattern});return B?{text:f!=null?f:"Edit this page",link:B}:null})},t=()=>{const o=I(),s=U(),u=P();return h(()=>{var b,L,y,f;return!((L=(b=u.value.lastUpdated)!=null?b:o.value.lastUpdated)!=null?L:!0)||!((y=s.value.git)!=null&&y.updatedTime)?null:new Date((f=s.value.git)==null?void 0:f.updatedTime).toLocaleString()})},l=()=>{const o=I(),s=U(),u=P();return h(()=>{var _,b,L,y;return((b=(_=u.value.contributors)!=null?_:o.value.contributors)!=null?b:!0)&&(y=(L=s.value.git)==null?void 0:L.contributors)!=null?y:null})},r=I(),p=a(),m=t(),c=l();return(o,s)=>{const u=A("ClientOnly");return n(),i("footer",Vt,[e(p)?(n(),i("div",Ut,[$(D,{class:"meta-item-label",item:e(p)},null,8,["item"])])):w("",!0),e(m)?(n(),i("div",jt,[g("span",Kt,x(e(r).lastUpdatedText)+": ",1),$(u,null,{default:N(()=>[g("span",qt,x(e(m)),1)]),_:1})])):w("",!0),e(c)&&e(c).length?(n(),i("div",Gt,[g("span",Xt,x(e(r).contributorsText)+": ",1),g("span",Yt,[(n(!0),i(H,null,R(e(c),(d,_)=>(n(),i(H,{key:_},[g("span",{class:"contributor",title:`email: ${d.email}`},x(d.name),9,Jt),_!==e(c).length-1?(n(),i(H,{key:0},[Qt],64)):w("",!0)],64))),128))])])):w("",!0)])}}});var ea=C(Zt,[["__file","PageMeta.vue"]]);const ta={key:0,class:"page-nav"},aa={class:"inner"},na={key:0,class:"prev"},oa={key:1,class:"next"},ra=S({__name:"PageNav",setup(v){const a=o=>o===!1?null:ge(o)?ke(o):De(o)?o:!1,t=(o,s,u)=>{const d=o.findIndex(_=>_.link===s);if(d!==-1){const _=o[d+u];return _!=null&&_.link?_:null}for(const _ of o)if(_.children){const b=t(_.children,s,u);if(b)return b}return null},l=P(),r=te(),p=z(),m=h(()=>{const o=a(l.value.prev);return o!==!1?o:t(r.value,p.path,-1)}),c=h(()=>{const o=a(l.value.next);return o!==!1?o:t(r.value,p.path,1)});return(o,s)=>e(m)||e(c)?(n(),i("nav",ta,[g("p",aa,[e(m)?(n(),i("span",na,[$(D,{item:e(m)},null,8,["item"])])):w("",!0),e(c)?(n(),i("span",oa,[$(D,{item:e(c)},null,8,["item"])])):w("",!0)])])):w("",!0)}});var sa=C(ra,[["__file","PageNav.vue"]]);const la={class:"page"},ua={class:"theme-default-content"},ia=S({__name:"Page",setup(v){return(a,t)=>{const l=A("Content");return n(),i("main",la,[k(a.$slots,"top"),g("div",ua,[k(a.$slots,"content-top"),$(l),k(a.$slots,"content-bottom")]),$(ea),$(sa),k(a.$slots,"bottom")])}}});var ca=C(ia,[["__file","Page.vue"]]);const va={class:"sidebar-item-children"},da=S({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(v){const a=v,{item:t,depth:l}=Y(a),r=z(),p=Z(),m=h(()=>Le(t.value,r)),c=h(()=>({"sidebar-item":!0,"sidebar-heading":l.value===0,active:m.value,collapsible:t.value.collapsible})),o=O(!0),s=O(void 0);return t.value.collapsible&&(o.value=m.value,s.value=()=>{o.value=!o.value},p.afterEach(()=>{o.value=m.value})),(u,d)=>{var b;const _=A("SidebarItem",!0);return n(),i("li",null,[e(t).link?(n(),T(D,{key:0,class:E(e(c)),item:e(t)},null,8,["class","item"])):(n(),i("p",{key:1,tabindex:"0",class:E(e(c)),onClick:d[0]||(d[0]=(...L)=>s.value&&s.value(...L)),onKeydown:d[1]||(d[1]=Pe((...L)=>s.value&&s.value(...L),["enter"]))},[j(x(e(t).text)+" ",1),e(t).collapsible?(n(),i("span",{key:0,class:E(["arrow",o.value?"down":"right"])},null,2)):w("",!0)],34)),(b=e(t).children)!=null&&b.length?(n(),T($e,{key:2},{default:N(()=>[q(g("ul",va,[(n(!0),i(H,null,R(e(t).children,L=>(n(),T(_,{key:`${e(l)}${L.text}${L.link}`,item:L,depth:e(l)+1},null,8,["item","depth"]))),128))],512),[[G,o.value]])]),_:1})):w("",!0)])}}});var _a=C(da,[["__file","SidebarItem.vue"]]);const pa={key:0,class:"sidebar-items"},ha=S({__name:"SidebarItems",setup(v){const a=z(),t=te();return ee(()=>{be(()=>a.hash,l=>{const r=document.querySelector(".sidebar");if(!r)return;const p=document.querySelector(`.sidebar a.sidebar-item[href="${a.path}${l}"]`);if(!p)return;const{top:m,height:c}=r.getBoundingClientRect(),{top:o,height:s}=p.getBoundingClientRect();o<m?p.scrollIntoView(!0):o+s>m+c&&p.scrollIntoView(!1)})}),(l,r)=>e(t).length?(n(),i("ul",pa,[(n(!0),i(H,null,R(e(t),p=>(n(),T(_a,{key:p.link||p.text,item:p},null,8,["item"]))),128))])):w("",!0)}});var ma=C(ha,[["__file","SidebarItems.vue"]]);const fa={class:"sidebar"},ba=S({__name:"Sidebar",setup(v){return(a,t)=>(n(),i("aside",fa,[$(we),k(a.$slots,"top"),$(ma),k(a.$slots,"bottom")]))}});var ga=C(ba,[["__file","Sidebar.vue"]]);const ka=S({__name:"Layout",setup(v){const a=U(),t=P(),l=I(),r=h(()=>t.value.navbar!==!1&&l.value.navbar!==!1),p=te(),m=O(!1),c=f=>{m.value=typeof f=="boolean"?f:!m.value},o={x:0,y:0},s=f=>{o.x=f.changedTouches[0].clientX,o.y=f.changedTouches[0].clientY},u=f=>{const B=f.changedTouches[0].clientX-o.x,M=f.changedTouches[0].clientY-o.y;Math.abs(B)>Math.abs(M)&&Math.abs(B)>40&&(B>0&&o.x<=80?c(!0):c(!1))},d=h(()=>[{"no-navbar":!r.value,"no-sidebar":!p.value.length,"sidebar-open":m.value},t.value.pageClass]);let _;ee(()=>{_=Z().afterEach(()=>{c(!1)})}),Ee(()=>{_()});const b=Ae(),L=b.resolve,y=b.pending;return(f,B)=>(n(),i("div",{class:E(["theme-container",e(d)]),onTouchstart:s,onTouchend:u},[k(f.$slots,"navbar",{},()=>[e(r)?(n(),T(Wt,{key:0,onToggleSidebar:c},{before:N(()=>[k(f.$slots,"navbar-before")]),after:N(()=>[k(f.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:B[0]||(B[0]=M=>c(!1))}),k(f.$slots,"sidebar",{},()=>[$(ga,null,{top:N(()=>[k(f.$slots,"sidebar-top")]),bottom:N(()=>[k(f.$slots,"sidebar-bottom")]),_:3})]),k(f.$slots,"page",{},()=>[e(t).home?(n(),T(st,{key:0})):(n(),T(fe,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e(L),onBeforeLeave:e(y)},{default:N(()=>[(n(),T(ca,{key:e(a).path},{top:N(()=>[k(f.$slots,"page-top")]),"content-top":N(()=>[k(f.$slots,"page-content-top")]),"content-bottom":N(()=>[k(f.$slots,"page-content-bottom")]),bottom:N(()=>[k(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var La=C(ka,[["__file","Layout.vue"]]);export{La as default};
