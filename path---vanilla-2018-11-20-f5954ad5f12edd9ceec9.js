webpackJsonp([0xc247956bfb74],{469:function(n,s){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/deepcold/iserver/deepcoldy.github.io/src/pages/vanilla/2018-11-20.md absPath of file >>> MarkdownRemark",html:'<p>假设有一个随机的数组，要找出出现次数最多的五个数字，以数组的形式输出。</p>\n<p><a href="https://jsfiddle.net/DeepCold/3g6Lxkhm/31/">我的答案： </a></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">]</span> <span class="token comment">// 一个随机数组</span>\nb <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 临时数组</span>\nb <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">before<span class="token punctuation">,</span> current</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 累加每个数的出现次数</span>\n\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\t<span class="token operator">...</span>before<span class="token punctuation">,</span>\n    <span class="token punctuation">[</span>current<span class="token punctuation">]</span><span class="token punctuation">:</span> before<span class="token punctuation">[</span>current<span class="token punctuation">]</span> <span class="token operator">?</span> before<span class="token punctuation">[</span>current<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">1</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 存放结果的数组</span>\n<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    c<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  <span class="token comment">// 先push第一个数进去，为之后做比较</span>\n      key<span class="token punctuation">:</span> key<span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> b<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    c<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 遍历数组，找到比当前小的第一个数</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">></span> item<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        c<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">// 插入</span>\n        \tkey<span class="token punctuation">:</span> key<span class="token punctuation">,</span>\n\t\t      value<span class="token punctuation">:</span> b<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n    \t  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span> c<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 如果长度大于5，切掉最后一个</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>输出结果如下：</p>\n<p><img src="https://raw.githubusercontent.com/deepcoldy/pic/master/20190727231916.png"></p>',frontmatter:{title:"算法问题-从数组中查找5个出现次数最多的数字",date:"November 20, 2018"}}},pathContext:{slug:"/vanilla/2018-11-20/",previous:{fields:{slug:"/vue/2018-10-03/"},frontmatter:{title:"Vue的依赖收集"}},next:{fields:{slug:"/discovery/2019-01-29/"},frontmatter:{title:"解决LEDE中Anyconnect插件无法正常运行"}}}}}});
//# sourceMappingURL=path---vanilla-2018-11-20-f5954ad5f12edd9ceec9.js.map