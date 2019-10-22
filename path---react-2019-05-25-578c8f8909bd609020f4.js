webpackJsonp([0xe3b4ce7354fc],{476:function(n,s){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/80253170/iserver/deepcoldy.github.io/src/pages/react/2019-05-25.md absPath of file >>> MarkdownRemark",html:'<p>在React中写Typescript有很多奇技淫巧，下面来介绍一个在实际工作中遇到的真实场景。</p>\n<p>其中用到了Typescript的泛型和Infer。</p>\n<p>这是一个简单的demo，目的是渲染一个列表出来。</p>\n<p>目前给<code class="language-text">List</code>组件传入了<code class="language-text">dataSource</code>和<code class="language-text">renderItem</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>b<span class="token punctuation">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>v<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>List\n      dataSource<span class="token operator">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span>\n      renderItem<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>a <span class="token operator">||</span> b <span class="token operator">||</span>c<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>如何定义<code class="language-text">List</code>组件？\n如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> List<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>props<span class="token punctuation">:</span> IListProps<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 可见这里的泛型没有实际使用，但一定要传，原因往下看。</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> dataSource<span class="token punctuation">,</span> renderItem<span class="token punctuation">,</span> <span class="token operator">...</span>passProps <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>ListContainer <span class="token punctuation">{</span><span class="token operator">...</span>passProps<span class="token punctuation">}</span><span class="token operator">></span>\n      <span class="token punctuation">{</span>dataSource<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>\n        <span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token parameter">ReactElement</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token function">renderItem</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            key<span class="token punctuation">:</span> node<span class="token punctuation">.</span>key<span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>ListContainer<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IListProps</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  dataSource<span class="token punctuation">:</span> dataSource<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 数组</span>\n  renderItem<span class="token punctuation">:</span> renderItem<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// 重点</span>\n  size<span class="token operator">?</span><span class="token punctuation">:</span> ListSize<span class="token punctuation">;</span>\n  border<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\ntype dataSource<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token constant">T</span><span class="token punctuation">;</span> <span class="token comment">// 传入什么类型 即什么类型</span>\ntype renderItem<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token parameter">item<span class="token punctuation">:</span> ArrayElement<span class="token operator">&lt;</span>dataSource<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">,</span>\n  i<span class="token punctuation">:</span> number</span>\n<span class="token punctuation">)</span> <span class="token operator">=></span> React<span class="token punctuation">.</span>ReactElement<span class="token punctuation">;</span>\n<span class="token keyword">export</span> type ArrayElement<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span>infer <span class="token constant">P</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token constant">P</span> <span class="token punctuation">:</span> never<span class="token punctuation">;</span> <span class="token comment">// 获取传入数组的中每项value的类型</span></code></pre>\n      </div>\n<p>这样在写<code class="language-text">renderItem</code>时就能获得<code class="language-text">dataSource</code>中的类型提示了。</p>\n<h3>参考链接：</h3>\n<p><a href="https://stackoverflow.com/questions/41253310/typescript-retrieve-element-type-information-from-array-type">https://stackoverflow.com/questions/41253310/typescript-retrieve-element-type-information-from-array-type</a></p>',frontmatter:{title:"Typescript在React的Hooks中该如何定义动态渲染元素",date:"May 25, 2018"}}},pathContext:{slug:"/react/2019-05-25/",previous:{fields:{slug:"/react/2018-10-23/"},frontmatter:{title:"更好的Redux使用方式"}},next:{fields:{slug:"/miniprogram/2018-9-15/"},frontmatter:{title:"Taro与小程序哪些你不得不注意的事"}}}}}});
//# sourceMappingURL=path---react-2019-05-25-578c8f8909bd609020f4.js.map