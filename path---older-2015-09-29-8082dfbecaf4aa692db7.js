webpackJsonp([0xafb52f555334],{445:function(e,t){e.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/80253170/iserver/deepcoldy.github.io/src/pages/older/2015-09-29.md absPath of file >>> MarkdownRemark",html:'<h1>通过ng-style改变样式</h1>\n<p>具体情境：</p>\n<p>一个列表的开头里面是<code class="language-text">Number</code>比如<code class="language-text">1``2``3``4</code></p>\n<p>这个开头有一张背景图<img src="http://ww3.sinaimg.cn/large/74311666jw1ewjegr35gnj201l023mwz.jpg" alt="数字1"></p>\n<p>随着序号的增加，到10号时，字会超出背景范围<img src="http://ww3.sinaimg.cn/large/74311666jw1ewjejo3pb9j201m01zq2r.jpg" alt="数字10"></p>\n<p>如何让数字达到10的同时缩小字体呢？</p>\n<h2>此时用到angular的ng-style就很方便了</h2>\n<h4>先介绍一下ng-style</h4>\n<blockquote>\n<p>Expression which evals to an object whose keys are CSS style names and values are corresponding values for those CSS keys.Since some CSS style names are not valid keys for an object, they must be quoted. See the ‘background-color’ style in the example below.</p>\n</blockquote>\n<h4>然后是我的用法</h4>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&lt;p class=&quot;ranking&quot;\n  ng-style=&quot;{&#39;font-size&#39;:$index = 9 ? &#39;1.5rem&#39; : &#39;2rem&#39;}&quot;&gt;\n  {{$index+1}}\n&lt;/p&gt;</code></pre>\n      </div>\n<p>就是说在ng-style里用了一个判断表达式</p>\n<p>注意格式，font-size是有单引号的。</p>',frontmatter:{title:"ng-style",date:"September 29, 2015"}}},pathContext:{slug:"/older/2015-09-29/",previous:{fields:{slug:"/older/2015-09-28/"},frontmatter:{title:"rem的用法思考"}},next:{fields:{slug:"/older/2015-10-28/"},frontmatter:{title:"写给想进入前端的新人"}}}}}});
//# sourceMappingURL=path---older-2015-09-29-8082dfbecaf4aa692db7.js.map