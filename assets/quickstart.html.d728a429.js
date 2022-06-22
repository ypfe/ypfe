import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,d as s}from"./app.c26c1abd.js";const d={},l=s(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h1><p>\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528yp-ui\u3002</p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><h3 id="\u5168\u5C40\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5F15\u7528" aria-hidden="true">#</a> \u5168\u5C40\u5F15\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// main.ts
import { createApp } from &#39;vue&#39;
import ElementPlus from &#39;element-plus&#39;
import &#39;element-plus/dist/index.css&#39;
import ypui from &#39;@ypfe/yp-ui&#39;
import &#39;@ypfe/yp-ui/lib/style.css&#39;
import App from &#39;./App.vue&#39;

const app = createApp(App)

app.use(ElementPlus)
app.use(ypui)
app.mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6309\u9700\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a> \u6309\u9700\u5F15\u5165</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// pc\u7EC4\u4EF6

&lt;template&gt;
  &lt;div&gt;
    &lt;yp-input :value=&quot;username&quot;&gt;&lt;/yp-input&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent } from &#39;vue&#39;
import { ypInput } from &#39;yp-ui&#39;

export default defineComponent({
  components: {
    ypInput,
  },
  setup() {
    return {
        username: &#39;&#39;
    }
  },
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),a=[l];function r(t,v){return i(),n("div",null,a)}var m=e(d,[["render",r],["__file","quickstart.html.vue"]]);export{m as default};
