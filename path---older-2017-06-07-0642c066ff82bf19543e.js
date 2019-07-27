webpackJsonp([0x749383bbebcd],{456:function(n,s){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/deepcold/iserver/deepcoldy.github.io/src/pages/older/2017-06-07.md absPath of file >>> MarkdownRemark",html:'<p>在初始化Vue项目的时候，经常会遇到npm报错，以下是我根据个人项目经验整理出的需要注意的点。</p>\n<h3>Yarn</h3>\n<p>为了锁定项目协作者的node_modules版本，推荐使用yarn来锁定安装统一版本的npm包。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">// mac系统下\nbrew update\nbrew <span class="token function">install</span> <span class="token function">yarn</span></code></pre>\n      </div>\n<h3>如果遇到node-sass的报错</h3>\n<p>类似: <code class="language-text">Error: ENOENT: no such file or directory, scandir &#39;node_modules/node-sass/vendor&#39;</code>\n这种报错通常是因为npm在安装node-sass的时候没有科学上网导致的。要么删除掉node_modules在科学上网后重新安装一遍，要么就执行下面的命令编译node-sass（但是此方法有一定可能会使得开发者之间编译出的版本不一致）。\n<code class="language-text">npm rebuild node-sass</code></p>\n<h3>不翻墙，如何使node-sass不报错</h3>\n<p>我们都知道有npm可以使用淘宝源来加速包的安装，但是不经过设置node-sass的下载并不会走淘宝源，其实就需要在命令行运行：\n<code class="language-text">yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass</code></p>\n<h3>不翻墙，如何使phantomjs-prebuilt下载不报错</h3>\n<p>除了node-sass安装phantomjs的过程也是被墙的，应该是走了Amazon美国CDN的原因，我注意到有一种方式可以通过淘宝源在全局安装phantomjs，这样安装独立项目的时候就不需要再下载了 (注意全局安装的版本要跟项目的phantomjs版本一致)\n<code class="language-text">npm install phantomjs@2.1.1 -g</code></p>\n<h3>时间戳处理</h3>\n<p>时间戳总是处理起来很麻烦，我个人比较推荐使用moment插件来加速开发体验。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">moment</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'YYYY-MM-DD hh:mm:ss\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> moment <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'moment\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token function">moment</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n      </div>',frontmatter:{title:"NPM相关",date:"June 07, 2017"}}},pathContext:{slug:"/older/2017-06-07/",previous:{fields:{slug:"/older/2017-06-06/"},frontmatter:{title:"Vue书写注意事项（规范）——整理"}},next:{fields:{slug:"/older/2017-06-08/"},frontmatter:{title:"Vue 2.3 源码笔记"}}}}}});
//# sourceMappingURL=path---older-2017-06-07-0642c066ff82bf19543e.js.map