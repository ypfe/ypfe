import{_ as e,o as i,c as n,d as l}from"./app.fa5d6957.js";const s={},d=l(`<h2 id="\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355" aria-hidden="true">#</a> \u83DC\u5355</h2><p>yp-ui\u83DC\u5355\u57FA\u4E8Eelement-plus\u83DC\u5355\uFF0C \u589E\u52A0\u4E86\u7EDF\u4E00\u7684\u83DC\u5355 \u6837\u5F0F</p><p>\u901A\u8FC7\u7C7B\u540D<code>yp-aside-dark</code>\u548C<code>yp-aside-white</code>\u53EF\u4EE5\u5B9E\u73B0\u83DC\u5355\u7684\u9ED1\u8272\u548C\u767D\u8272\u6A21\u5F0F</p><p>\u7EDF\u4E00\u83DC\u5355\u989C\u8272</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$menu-bg-color: #505050; // \u83DC\u5355\u80CC\u666F\u8272
$menu-text-color:#ccc; // \u83DC\u5355\u6587\u5B57\u989C\u8272
$menu-hover-color:#fff; // hover/active\u9AD8\u4EAE\u989C\u8272
$subMenu-bg-color:#333333;// \u5B50\u83DC\u5355\u80CC\u666F\u8272
$subMenu-bg-hover-color:#0B0B0C; // \u5B50\u83DC\u5355hover/\u6FC0\u6D3B\u80CC\u666F\u8272
$menu-bg-color-white: #fff; // \u83DC\u5355\u80CC\u666F\u8272
$menu-text-color-white:#333; // \u83DC\u5355\u6587\u5B57\u989C\u8272
$menu-hover-color-white:#fff; // hover/active\u9AD8\u4EAE\u989C\u8272
$subMenu-bg-color-white:#2E59A7;// \u5B50\u83DC\u5355\u80CC\u666F\u8272
$subMenu-bg-hover-color-white:#D5DEED; // \u5B50\u83DC\u5355hover/\u6FC0\u6D3B\u80CC\u666F\u8272

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E94\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;el-menu
    class=&quot;yp-aside-dark&quot;
    router
    :mode=&quot;mode&quot;
    :default-active=&quot;defaultActivePath&quot;
    :collapse=&quot;isCollapsed&quot;
    &gt;
    &lt;sub-menu-com v-for=&quot;(menu, i) in permissionRoutes&quot; :key=&quot;i&quot; :item=&quot;menu&quot; /&gt;
  &lt;/el-menu&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),u=[d];function t(o,r){return i(),n("div",null,u)}var c=e(s,[["render",t],["__file","menu.html.vue"]]);export{c as default};
