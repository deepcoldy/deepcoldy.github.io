webpackJsonp([0xfac9fa1a536b],{578:function(n,s){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/shenhan/iserver/deepcoldy/src/pages/react/2018-01-29.md absPath of file >>> MarkdownRemark",html:'<p>下午抽了一个小时时间来研究了一下Preact，发现此框架对于理解React有非常好的借鉴作用。</p>\n<h2>如何理解Preact</h2>\n<p>众所周知，Preact沿用了JSX和虚拟dom。</p>\n<p>我们写JSX：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">/** @jsx h */</span>\n<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"foo"</span><span class="token operator">></span>Hello<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>  </code></pre>\n      </div>\n<p>会被编译成如下执行：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>id<span class="token punctuation">:</span><span class="token string">"foo"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">\'Hello!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </code></pre>\n      </div>\n<p>这个编译过程是由<a href="https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx">babel-plugin-transform-react-jsx</a>来完成的。babel-plugin-transform-react-jsx这个插件读取jsx文件中的<code class="language-text">/** @jsx XXX */</code>来决定使用哪个pragma来编译。如果是Preact则会使用其h()函数。</p>\n<p>h函数简单概括如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">h</span><span class="token punctuation">(</span>nodeName<span class="token punctuation">,</span> attributes<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">let</span> children <span class="token operator">=</span> args<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\t<span class="token keyword">return</span> <span class="token punctuation">{</span> nodeName<span class="token punctuation">,</span> attributes<span class="token punctuation">,</span> children <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>可以理解为就是一个虚拟dom解析为dom Node的过程。\n可见，<code class="language-text">h()</code>的执行需要如下解构：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  nodeName<span class="token punctuation">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span>\n  attributes<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"id"</span><span class="token punctuation">:</span> <span class="token string">"foo"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Hello!"</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>那么nodeName、attributes又是哪里来的呢？就是render函数。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// vnode即jsx</span>\n    <span class="token comment">// 字符串转化为text Nodes:</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>split<span class="token punctuation">)</span> <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 用我们的VDOM元素的nodeName创建一个DOM元素</span>\n    <span class="token keyword">let</span> n <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>nodeName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 将attribute赋值给新的node节点</span>\n    <span class="token keyword">let</span> a <span class="token operator">=</span> vnode<span class="token punctuation">.</span>attributes <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> k <span class="token operator">=></span> n<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> a<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 将子元素append上去</span>\n    <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> c <span class="token operator">=></span> n<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">render</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> n<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>最后运行render函数把定义的jsx传入。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">render</span><span class="token punctuation">(</span>vdom<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>就这么简单，逻辑就通了。</p>\n<h2>React 与 Preact Api的差异</h2>\n<p><a href="https://preactjs.com/guide/differences-to-react">参见文档</a></p>\n<h2>参考文献</h2>\n<p><a href="https://jasonformat.com/wtf-is-jsx/">wtf-is-jsx</a></p>',frontmatter:{title:"了解React要从Preact看起",date:"January 29, 2018"}}},pathContext:{slug:"/react/2018-01-29/",previous:{fields:{slug:"/react/2017-12-12/"},frontmatter:{title:"RN入门教程，个人整理版本"}},next:{fields:{slug:"/react/2018-10-23/"},frontmatter:{title:"更好的Redux使用方式"}}}}}});
//# sourceMappingURL=path---react-2018-01-29-5b62d9cc4099c3cdaa00.js.map