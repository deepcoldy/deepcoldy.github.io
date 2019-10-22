webpackJsonp([66624512783618],{475:function(n,s){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/80253170/iserver/deepcoldy.github.io/src/pages/react/2018-10-23.md absPath of file >>> MarkdownRemark",html:'<h2>将标准状态单独储存</h2>\n<p>我们经常将服务器返回的数据直接储存到redux中，但是尽量不要在编辑时直接修改这个标准状态的数据。</p>\n<p>比如下面我们加了isEditing这个数据项，那么当我们直接修改store中先存的name、email、phone等字段时，想恢复原始数据就比较困难了。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n <span class="token string">"users"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token number">1</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n      email<span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n      phone<span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span>\n      isEditing<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>更好的方式：单独创建一个editing字段储存在store中。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n <span class="token string">"users"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token number">1</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n      email<span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n      phone<span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">"editingUsers"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token number">1</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span>\n      email<span class="token punctuation">:</span> <span class="token string">"test@example.com"</span><span class="token punctuation">,</span>\n      phone<span class="token punctuation">:</span> <span class="token string">"1888888888"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',frontmatter:{title:"更好的Redux使用方式",date:"February 10, 2018"}}},pathContext:{slug:"/react/2018-10-23/",previous:{fields:{slug:"/react/2018-02-10/"},frontmatter:{title:"React的一点点注意事项"}},next:{fields:{slug:"/react/2019-05-25/"},frontmatter:{title:"Typescript在React的Hooks中RenderItem该如何定义"}}}}}});
//# sourceMappingURL=path---react-2018-10-23-728518fe5d823c094502.js.map