webpackJsonp([43175431235092],{461:function(e,l){e.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/80253170/iserver/deepcoldy.github.io/src/pages/older/2017-09-09.md absPath of file >>> MarkdownRemark",html:'<h2>前言</h2>\n<p>问题是这样的：当有一个需求是需要在CMS里更换用户端产品的视觉颜色，也就是换一套可以自定义的皮肤，如何做才是最好的用户体验。前端框架基于Vue。</p>\n<h3>思路一：向Backend请求数据</h3>\n<p>换肤的方式有很多种，最先进入脑海的当然是最省事的。把颜色数据都存放在后台，然后每个用户第一次渲染的时候向后台请求这些颜色数据。</p>\n<ul>\n<li>\n<p>劣势</p>\n<ol>\n<li>需要服务端渲染。如果不是服务端渲染，用户需要等待js加载完成后，接着在ajax请求后才能看到最终的界面颜色。</li>\n<li>需要有缓存。每个用户进入页面的时候都因为皮肤请求一次数据库显然是不合适的，既然需要加缓存那么也就需要清除缓存，这个清除机制应该是在每次修改CMS配置时触发。\n当然这些劣势都可以通过使用服务端渲染来解决，例如<a href="https://ssr.vuejs.org/zh/">Vue服务端渲染</a>。但是如果项目不是用服务端渲染就没有解决方式吗？不是的，还有另外的思路。</li>\n</ol>\n</li>\n</ul>\n<h3>思路二：动态Webpack打包</h3>\n<blockquote>\n<p>首先声明，这个思路是受王筱启发(之后有条件会将该朋友的Blog或者Github补充上)。</p>\n</blockquote>\n<p>在CMS中配置配置颜色后，就向服务器发送一条含有相关配置信息的请求，利用脚本工具修改css后，使用Webpack重新生成一份静态文件（包括html和相应的css）。</p>\n<ul>\n<li>\n<p>需要注意的点</p>\n<ol>\n<li>每次都是做新增，如果配置皮肤参数相同的则不新增。</li>\n<li>如果版本迭代中有相关css的更新，需要将之前的所有皮肤重新打包一遍。</li>\n<li>CMS中的配置修改或新增不会立即生效，需要等待Webpack的build完成。除非已经存在相同配置的皮肤。</li>\n</ol>\n</li>\n</ul>\n<h4>总结</h4>\n<p>这两种只是一个思路，具体实现上我没有继续探索，我相信第一种做法会是体验最佳的，只是成本和技术上要修改的更多，毕竟Vue2.2以后服务端渲染才稳定可用。后面如果有更好的思路或是有了进一步的实践，我会继续更新。</p>',frontmatter:{title:"思考一个很有意思的问题——换肤",date:"September 09, 2017"}}},pathContext:{slug:"/older/2017-09-09/",previous:{fields:{slug:"/older/2017-08-29/"},frontmatter:{title:"ES6那些我不常用却很有用的知识"}},next:{fields:{slug:"/older/2017-10-23/"},frontmatter:{title:"Vue2.5发布"}}}}}});
//# sourceMappingURL=path---older-2017-09-09-d89f0592126c560e7cff.js.map