webpackJsonp([0xe4de3f164989],{468:function(n,s){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/deepcold/iserver/deepcoldy.github.io/src/pages/vanilla/2017-12-04.md absPath of file >>> MarkdownRemark",html:'<h2>Zepto 的 Extend 实现方式</h2>\n<p>主要是判断是否为 Object 或 Array，是就进行递归，否则直接赋值。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// 基础判断函数</span>\nisArray <span class="token operator">=</span>\n  Array<span class="token punctuation">.</span>isArray <span class="token operator">||</span>\n  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> object <span class="token keyword">instanceof</span> <span class="token class-name">Array</span>\n  <span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">isWindow</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> obj <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">==</span> obj<span class="token punctuation">.</span>window\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">type</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">\'object\'</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token function">isObject</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>\n    <span class="token operator">!</span><span class="token function">isWindow</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>\n    Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// extend实现</span>\n<span class="token keyword">function</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> source<span class="token punctuation">,</span> deep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> source<span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>deep <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isArray</span><span class="token punctuation">(</span>source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 如果是Object或Array</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token function">extend</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> deep<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>source<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> source<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Copy all but undefined properties from one or more</span>\n<span class="token comment">// objects to the `target` object.</span>\n$<span class="token punctuation">.</span><span class="token function-variable function">extend</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> deep<span class="token punctuation">,</span>\n    args <span class="token operator">=</span> <span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">==</span> <span class="token string">\'boolean\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    deep <span class="token operator">=</span> target\n    target <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  args<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">extend</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> arg<span class="token punctuation">,</span> deep<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> target\n<span class="token punctuation">}</span></code></pre>\n      </div>',frontmatter:{title:"Extend实现方式",date:"March 03, 2017"}}},pathContext:{slug:"/vanilla/2017-12-04/",previous:{fields:{slug:"/older/2017-03-03/"},frontmatter:{title:"移动端适配"}},next:{fields:{slug:"/older/2017-05-16/"},frontmatter:{title:"使用Webhook+nodejs将Git项目代码自动部署服务器"}}}}}});
//# sourceMappingURL=path---vanilla-2017-12-04-db8aa03faf2ce54563b5.js.map