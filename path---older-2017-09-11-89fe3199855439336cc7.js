webpackJsonp([0xb7af3ae6d820],{464:function(n,s){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/deepcold/iserver/deepcoldy.github.io/src/pages/older/2017-09-11.md absPath of file >>> MarkdownRemark",html:'<p>Sass的功能主要是作为一个更快捷方便的css编写工具，使得css更具可读性，更省去了重复编写css的麻烦之处。</p>\n<hr>\n<p>sass几大功能</p>\n<p>1.变量</p>\n<p>可以用$来命名一个新变量</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css">$<span class="token property">font-stack</span><span class="token punctuation">:</span>    Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>\n$<span class="token property">primary-color</span><span class="token punctuation">:</span> #333<span class="token selector">;\nbody</span> <span class="token punctuation">{</span>\n    <span class="token property">font</span><span class="token punctuation">:</span> 100% $font-stack<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> $primary-color<span class="token punctuation">;</span>\n <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>2.嵌套</p>\n<p>可以直观的嵌套类选择器</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">nav</span> <span class="token punctuation">{</span>\n    <span class="token selector">ul</span> <span class="token punctuation">{</span>\n        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n        <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">li</span> <span class="token punctuation">{</span>\n        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">a</span> <span class="token punctuation">{</span>\n        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n        <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>\n        <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>3.部分引用</p>\n<p>用<em>来命名一个scss的时候，可以用@import将其引入，引入可只写</em>之后.之前的名字</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">// _reset.scss\nhtml, body, ul, ol</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n// base.scss\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">\'reset\'</span><span class="token punctuation">;</span></span>\n<span class="token selector">body</span> <span class="token punctuation">{</span>\n    <span class="token property">font</span><span class="token punctuation">:</span> 100% Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>4.简化浏览器前缀</p>\n<p>相当于把一组用了浏览器前缀的属性封装成一个方法，用的时候引进去就行了</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">border-radius</span><span class="token punctuation">(</span>$radius<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> $radius<span class="token punctuation">;</span>\n    <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> $radius<span class="token punctuation">;</span>\n    <span class="token property">-ms-border-radius</span><span class="token punctuation">:</span> $radius<span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> $radius<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>下面语句为引用方法</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.box</span> <span class="token punctuation">{</span> <span class="token atrule"><span class="token rule">@include</span> <span class="token function">border-radius</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span></span> <span class="token punctuation">}</span>\n<span class="token selector">.box</span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n    <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n    <span class="token property">-ms-border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> </code></pre>\n      </div>\n<p>5.沿用属性</p>\n<p>一个类的属性可以复用时，可以通过@extend引入</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.message</span> <span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.success</span> <span class="token punctuation">{</span>\n    <span class="token atrule"><span class="token rule">@extend</span> .message<span class="token punctuation">;</span></span>\n    <span class="token property">border-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>6.可以直接用加减乘除哟</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.container</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token selector">article[role="main"]</span> <span class="token punctuation">{</span>\n    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 600px / 960px * 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">aside[role="complimentary"]</span> <span class="token punctuation">{</span>\n    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 300px / 960px * 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>以上相当于</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.container</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">article[role="main"]</span> <span class="token punctuation">{</span>\n    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">aside[role="complimentary"]</span> <span class="token punctuation">{</span>\n    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 31.25%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>就这么多，sass还是很好学的。</p>',frontmatter:{title:"Sass几大功能总结",date:"September 11, 2015"}}},pathContext:{slug:"/older/2017-09-11/",previous:{fields:{slug:"/older/2015-09-10/"},frontmatter:{title:"用canvas画一个头像框"}},next:{fields:{slug:"/older/2015-09-11/"},frontmatter:{title:"微信安卓浏览器有缓存的问题"}}}}}});
//# sourceMappingURL=path---older-2017-09-11-89fe3199855439336cc7.js.map