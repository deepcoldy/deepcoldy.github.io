webpackJsonp([33082276560904],{571:function(a,n){a.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/shenhan/iserver/deepcoldy/src/pages/older/2017-08-21.md absPath of file >>> MarkdownRemark",html:'<h2>前言</h2>\n<p>这段时间连续看到前端跨域怎么解决之类的问题和文章。但都不是很贴合实际，我自己回答的也不完整，所以写文回忆一下。\n前端解决跨域的途径有很多，但是实际在项目中不能那么轻易的就使用其中一种，因为任何解决方案都可能带来越来越大的复杂度。我最初在央视网的时候统一都使用jsonp来解决跨域的问题，但是这种方法就如文末参考文献中所说的，不能使用post，同时作为前端开发者来说一两个接口使用jsonp是可以容忍的，大面积的使用会带来灾难。\n所以我就自己在工作中的经验总结最常见且合理的跨域解决方式。</p>\n<h2>中间层转发</h2>\n<p>很多公司都有一个中间层作为封装Api，这个中间层通常会交给前端或者单独的团队去维护。这样做不仅可以做到随意的跨域，同时也能减轻后端工作量。</p>\n<h2>nginx层转发</h2>\n<p>我司有个WebApp项目，没有使用中间层做转发，遂使用nginx层做转发。\n例如：若a.cn项目想请求b.cn的Api，则在a.cn的nginx层配置如下</p>\n<div class="gatsby-highlight">\n      <pre class="language-nginx"><code class="language-nginx"><span class="token keyword">location</span> <span class="token operator">/</span>api <span class="token punctuation">{</span>\n        <span class="token keyword">proxy_pass_header</span> <span class="token keyword">User</span><span class="token operator">-</span>Agent<span class="token punctuation">;</span>\n        <span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>\n        <span class="token keyword">proxy_redirect</span> off<span class="token punctuation">;</span>\n        <span class="token keyword">proxy_set_header</span> X<span class="token operator">-</span>Real<span class="token operator">-</span>IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>\n        <span class="token keyword">proxy_set_header</span> X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>\n        <span class="token keyword">proxy_set_header</span> X<span class="token operator">-</span>Scheme <span class="token variable">$scheme</span><span class="token punctuation">;</span>\n        <span class="token keyword">proxy_pass</span> <span class="token keyword">http</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>b<span class="token punctuation">.</span>cn<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>如上配置代表着，只要是发到a.cn/api的ajax请求，都会转发到<a href="http://b.cn%E4%B8%8A%E5%8E%BB%E3%80%82">http://b.cn上去。</a></p>\n<h3>参考文章</h3>\n<p><a href="https://mp.weixin.qq.com/s/NOmsbKZsryTUONQj2gBFIA">前端跨域知识总结</a></p>',frontmatter:{title:"JS跨域实际项目中的解决方式",date:"August 21, 2017"}}},pathContext:{slug:"/older/2017-08-21/",previous:{fields:{slug:"/older/2017-07-11/"},frontmatter:{title:"PHP开发者大会"}},next:{fields:{slug:"/older/2017-08-22/"},frontmatter:{title:"使用WEBHOOK+NODEJS将GIT项目代码自动部署服务器-进阶版"}}}}}});
//# sourceMappingURL=path---older-2017-08-21-40f81b185573f931219f.js.map