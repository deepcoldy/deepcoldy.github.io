webpackJsonp([0xef7377f2409e],{549:function(n,s){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/deepcold/iserver/deepcoldy.github.io/src/pages/miniprogram/2018-9-15.md absPath of file >>> MarkdownRemark",html:'<h2>注：v0.0.73版本(v1.0发布之前的最后一个版本)</h2>\n<h3>1. 生命周期</h3>\n<p>由于该版本的生命周期\b并没有考虑执行顺序，子组件的生命周期可能会优先于父组件执行，则会在某些应用场景下出现问题。</p>\n<h3>2. JSX中不能通过表达式来控制子组件重走生命周期</h3>\n<p>结合问题1一起看,如果<code class="language-text">this.props.host</code>是父组件的\b第一个请求后才能获得。</p>\n<p>获得后所有网络请求才有host参数。</p>\n<p>那么在其之后才能执行子组件的生命周期。通常可以如下写：</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>host<span class="token operator">?</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentA</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ComponentA</span><span class="token punctuation">></span></span> <span class="token comment">// 此子组件的生命周期可能\b\b\b\b在父组件之前，并且不受控</span>\n<span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>如上所述，解决方案如下： 在使用<code class="language-text">componentDidUpdate</code>、<code class="language-text">componentWillReceiveProps</code>等生命周期满足不了需求的情况下，只能使用轮询的方式监听host参数是否已经get。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// 子组件</span>\n<span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>host<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token operator">...</span> <span class="token comment">// 具体逻辑</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>3. css隔离</h3>\n<p>Taro此版本并不支持css Modules，所以只能通过\b自定义不会重复的className完成css scoped。\n好在只用保证每个页面内的css名称不重复就行了，页面之间的不用过分考虑。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// index.js</span>\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>View className<span class="token operator">=</span><span class="token string">\'index-css\'</span><span class="token operator">></span>\n      <span class="token operator">...</span>        \n    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">// index.scss 注意命名不要重复\n.index-css</span><span class="token punctuation">{</span>\n  ...\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>4. 与Webview的通信</h3>\n<p>Webview与Native沟通主要通过URL和微信官方提供的一个函数<code class="language-text">onMessage</code>来实现。\n这个函数不是\bwebview中调用之后实时触发，这点很迷惑人。\n以下贴以下Taro在触发webview分享时的代码</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">shareUrl <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>\nshareObjFromWeb <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token function-variable function">onMessage</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 分享时触发</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length<span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>shareObjFromWeb <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>data<span class="token punctuation">[</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 取最新的一条分享内容</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token function">onShareAppMessage</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  options<span class="token punctuation">.</span>webViewUrl <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shareObjFromWeb<span class="token punctuation">.</span>href\n    <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>shareUrl <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shareObjFromWeb<span class="token punctuation">.</span>share_url<span class="token punctuation">)</span>\n    <span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>shareUrl <span class="token operator">=</span> options<span class="token punctuation">.</span>webViewUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shareObjFromWeb<span class="token punctuation">.</span>title <span class="token operator">||</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    path<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`/pages/webview/index?url=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>shareUrl\n    <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>5. 简单场景不要使用Redux</h3>\n<p>如果使用<code class="language-text">eventCenter</code>记得要在小程序onUnload之类的生命\b周期里面解绑。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Taro<span class="token punctuation">.</span>eventCenter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'goWebview\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>gotoWebview<span class="token punctuation">)</span><span class="token punctuation">;</span>\nTaro<span class="token punctuation">.</span>eventCenter<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">\'goWebview\'</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>\nTaro<span class="token punctuation">.</span>eventCenter<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">\'goWebview\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3>6. 第三方平台小程序注意ext的配置</h3>\n<p>在微信开发者工具中，开发时一定要填入<code class="language-text">extAppid</code>该字段，否则无法成功调用api。\n在上传到草稿箱时，需要删掉此字段，才能上传到第三方平台的草稿箱，否则将会上传到测试用的小程序后台，然后该后台是托管的，所以将永远看不到自己调教的体验版。</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json">// src/ext.json 注意要使用此路径Taro才能自动复制到dist/ext.json。小程序才能引用到。\n<span class="token punctuation">{</span>\n  <span class="token property">"extEnable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">"extAppid"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> // extAppid即开发的时候，可以授权使用的小程序\n  <span class="token property">"directCommit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">"ext"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    ... // 特殊的配置，由后端写入\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"networkTimeout"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"request"</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>\n    <span class="token property">"downloadFile"</span><span class="token operator">:</span> <span class="token number">10000</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>在微信开发者工具中点击上传，如提示”以下文件没有被打包上传：· ext.json”，则表示提交成功。\n记得上传后恢复extAppid字段。</p>',frontmatter:{title:"Taro与小程序哪些你不得不注意的事",date:"September 15, 2018"}}},pathContext:{slug:"/miniprogram/2018-9-15/",previous:{fields:{slug:"/react/2018-02-10/"},frontmatter:{title:"React的一点点注意事项"}},next:{fields:{slug:"/vanilla/2018-9-20/"},frontmatter:{title:"Event Loop 小记"}}}}}});
//# sourceMappingURL=path---miniprogram-2018-9-15-7da446b329cc2ab3793e.js.map