webpackJsonp([33824528404903],{571:function(n,s){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/deepcold/iserver/deepcoldy.github.io/src/pages/older/2017-06-12.md absPath of file >>> MarkdownRemark",html:'<h3>检查是否是对象</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">/**\n * Strict object type check. Only returns true\n * for plain JavaScript objects.\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isPlainObject</span> <span class="token punctuation">(</span>obj<span class="token punctuation">:</span> any<span class="token punctuation">)</span><span class="token punctuation">:</span> boolean <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> toString<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">\'[object Object]\'</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>检查对象是否有该属性</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">/**\n * Check whether the object has the property.\n */</span>\n<span class="token keyword">const</span> hasOwnProperty <span class="token operator">=</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>hasOwnProperty\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">hasOwn</span> <span class="token punctuation">(</span>obj<span class="token punctuation">:</span> Object<span class="token punctuation">,</span> key<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> boolean <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> hasOwnProperty<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',frontmatter:{title:"JavaScript细节",date:"June 12, 2017"}}},pathContext:{slug:"/older/2017-06-12/",previous:{fields:{slug:"/older/2017-06-08/"},frontmatter:{title:"Vue 2.3 源码笔记"}},next:{fields:{slug:"/older/2017-07-11/"},frontmatter:{title:"PHP开发者大会"}}}}}});
//# sourceMappingURL=path---older-2017-06-12-7b8705dfd94146723d55.js.map