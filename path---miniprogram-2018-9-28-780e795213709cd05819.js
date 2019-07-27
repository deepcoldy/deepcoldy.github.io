webpackJsonp([0xa8a6bb28cb9f],{548:function(n,s){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/deepcold/iserver/deepcoldy.github.io/src/pages/miniprogram/2018-9-28.md absPath of file >>> MarkdownRemark",html:'<p>小程序在页面堆栈达到10层时将会触发Error。\n但是当产品又设计出一款页面带有循环跳转的产品时，我们不得不去Hack掉小程序的官方限制。</p>\n<p>下面我将基于Taro作为小程序框架，继承小程序api的情况下，写一下如何Hack比较好。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// 文件路径：util/router.js</span>\n\n<span class="token keyword">import</span> Taro <span class="token keyword">from</span> <span class="token string">\'@tarojs/taro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Router</span> <span class="token punctuation">{</span>\n  stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'/pages/index/index\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 页面堆栈储存</span>\n  <span class="token function-variable function">navigateTo</span> <span class="token operator">=</span> obj <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      Taro<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 当页面层级达到9层时，跳转中转页</span>\n      Taro<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token operator">...</span>obj<span class="token punctuation">,</span>\n        url<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`/pages/stack/index?next=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> saveToStack <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> saveToStack<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">redirectTo</span> <span class="token operator">=</span> <span class="token punctuation">(</span>obj<span class="token punctuation">,</span> saveToStack <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>saveToStack<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">.</span>url<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    Taro<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">navigateBack</span> <span class="token operator">=</span> obj <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token operator">-</span>obj<span class="token punctuation">.</span>delta<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    Taro<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">switchTab</span> <span class="token operator">=</span> obj <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'/pages/index/index\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 当使用了小程序官方的tabbar时</span>\n    Taro<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>页面文件如下，记得在app.js中写入路径<code class="language-text">pages/stack/index</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// 文件路径：src/stack.js</span>\n\n<span class="token keyword">import</span> Taro<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@tarojs/taro\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@tarojs/components\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> AtActivityIndicator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'taro-ui\'</span><span class="token punctuation">;</span> <span class="token comment">// 使用Taro-ui的Indicator作为loading</span>\n\n<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">\'../../util/router\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token string">\'./index.scss\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  config <span class="token operator">=</span> <span class="token punctuation">{</span>\n    navigationBarTitleText<span class="token punctuation">:</span> <span class="token string">\'\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  first <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 初次进入，执行</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>Router<span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      Taro<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        url<span class="token punctuation">:</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>params<span class="token punctuation">.</span>next<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentDidShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 由其他页面后退进入，执行</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>Router<span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">9</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>first<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      Router<span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      Router<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        delta<span class="token punctuation">:</span> <span class="token number">1</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Router<span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      Router<span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      Taro<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        url<span class="token punctuation">:</span> Router<span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>View className<span class="token operator">=</span><span class="token string">\'stack-page\'</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>AtActivityIndicator mode<span class="token operator">=</span><span class="token string">\'center\'</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Stack<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>使用方法：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">\'../../util/router\'</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">Index</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  <span class="token function-variable function">navigateTo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Taro<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      url<span class="token punctuation">:</span> <span class="token string">\'/pages/other/index\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">rediectTo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Taro<span class="token punctuation">.</span><span class="token function">rediectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      url<span class="token punctuation">:</span> <span class="token string">\'/pages/other/index\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">navigateBack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Taro<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      delta<span class="token punctuation">:</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">switchTab</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Taro<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      url<span class="token punctuation">:</span> <span class="token string">\'/pages/other/index\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  \n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>View className<span class="token operator">=</span><span class="token string">\'index-page\'</span><span class="token operator">></span>\n        \n      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Index<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Hack之后的效果为，当页面堆栈数达到8层时，再次执行跳转将打开中转页(第九层)，跳转到所需页面（第十层）。\n之后的跳转变成在第十层的redirect。\n点返回会返回中转页（第九层）。\n再由中转页判断堆栈是否需要前进还是后退。</p>\n<p>注意：由于小程序自带的左上角返回没有提供监听事件。\n两种方式：1.在页面onHide时，减少堆栈。\n2.自定义左上角返回，改用router.js的navigateBack函数。</p>',frontmatter:{title:"小程序页面堆栈的Hack(含源码)",date:"September 28, 2018"}}},pathContext:{slug:"/miniprogram/2018-9-28/",previous:{fields:{slug:"/vanilla/2018-9-20/"},frontmatter:{title:"Event Loop 小记"}},next:{fields:{slug:"/vanilla/2018-11-20/"},frontmatter:{title:"算法问题-从数组中查找5个出现次数最多的数字"}}}}}});
//# sourceMappingURL=path---miniprogram-2018-9-28-780e795213709cd05819.js.map