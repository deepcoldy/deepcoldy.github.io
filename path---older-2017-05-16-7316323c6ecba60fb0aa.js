webpackJsonp([0xb39270198997],{452:function(n,s){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/deepcold/iserver/deepcoldy.github.io/src/pages/older/2017-05-16.md absPath of file >>> MarkdownRemark",html:'<h2>前言</h2>\n<p>公司前段时间加入了webpack+vue，由于忙于写业务，始终没有投入全部精力去优化项目。话虽这么说，但还是一边开发一边在优化开发体验的。\n不讲别的，先讲讲标题说的是什么吧。\n如果你也苦于每天在不断地在本机与服务器之间git push &#x26; git pull，如果你用的开发机build速度过于缓慢，那么我觉得有必要研究一下自动化服务器部署了。当然我讨论的离perfect还很远，只满足了单一项目的需要。</p>\n<h2>正篇</h2>\n<h3>Webhook</h3>\n<p>先确认你使用的git托管服务支持Webhook，并且自身有使用权限，我这边使用的是公司搭建的GitLab\n<img src="https://ws2.sinaimg.cn/large/006tKfTcly1ffvgfq29i4j30v00pmn0f.jpg"></p>\n<p>确认你有使用权限之后，我们就要开始搭建接收git请求的服务端了。我这边使用的当然是Node，你也可以选择用别的后端语言。</p>\n<h3>编写Node服务</h3>\n<p>我图方便，使用了<a href="https://www.npmjs.com/package/node-gitlab-webhook">node-gitlab-webhook</a>该npm包，先引入。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'http\'</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> createHandler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'node-gitlab-webhook\'</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>让node可以调用命令行的spawn。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> spawn <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'child_process\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>spawn</code></pre>\n      </div>\n<p>接下来就是起服务了。这边我监听的是7777端口。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> handler <span class="token operator">=</span> <span class="token function">createHandler</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token comment">// multiple handlers</span>\n  <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/push\'</span><span class="token punctuation">,</span> secret<span class="token punctuation">:</span> <span class="token string">\'deepcold\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/build\'</span><span class="token punctuation">,</span> secret<span class="token punctuation">:</span> <span class="token string">\'deepcold\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\nhttp<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span>\n    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">\'no such location test\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">7777</span><span class="token punctuation">)</span>\n\nhandler<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">\'Error:\'</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">rumCommand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">cmd<span class="token punctuation">,</span> args<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token function">spawn</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> args<span class="token punctuation">)</span>\n    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token string">\'\'</span>\n    child<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'data\'</span><span class="token punctuation">,</span> <span class="token parameter">buffer</span> <span class="token operator">=></span> response <span class="token operator">+=</span> buffer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    child<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'end\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">callback</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nhandler<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'push\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n    <span class="token string">\'Received a push event for %s\'</span><span class="token punctuation">,</span>\n    event<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>repository<span class="token punctuation">.</span>name\n  <span class="token punctuation">)</span>\n  <span class="token keyword">switch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'/push\'</span><span class="token punctuation">:</span>\n      <span class="token function">rumCommand</span><span class="token punctuation">(</span><span class="token string">\'sh\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'./pull.sh\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token parameter">txt</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>txt<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">\'vue/src/\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> txt<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">\'vue/entry/\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> txt<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">\'vue/static/\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//这里是判断我的vue项目文件是否变化，如果变化会重新运行npm run build命令</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'will build\'</span><span class="token punctuation">)</span>\n            <span class="token function">rumCommand</span><span class="token punctuation">(</span><span class="token string">\'sh\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'./build.sh\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token parameter">txt</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// npm run build命令，储存在build.sh中</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token keyword">break</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h3>部署服务器</h3>\n<p>Node脚本写好后，就是上服务器部署了。当然服务器得支持Node.js环境，下面我说一下我给Ubuntu 12.04部署Node.js环境的过程。通常情况下都可以使用这种方式安装，简单稳妥。\n首先安装Npm。\n<code class="language-text">sudo apt-get  install  npm</code>\n之后安装一个npm工具叫<a href="https://github.com/tj/n">n</a>\n<code class="language-text">npm install -g n</code>\n于是-g安装会生成一个全局变量n，我直接安装了node最新的版本(latest)，也可以有稳定版(stable)和长期支持版本(lts)可选。\n<code class="language-text">n latest</code>\n运行完了看一下node和npm的版本，确认无误后就算安装完了。之后我们会用PM2在后台运行我们的Node脚本。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">node -v\n<span class="token function">npm</span> -v</code></pre>\n      </div>\n<p>接着要配置Nginx\n这是最简单的部分，只需要把流量转向上面监听的7777端口就行了，如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-nginx"><code class="language-nginx"><span class="token keyword">server</span> <span class="token punctuation">{</span>\n    <span class="token keyword">listen</span> <span class="token number">7778</span><span class="token punctuation">;</span>\n    <span class="token keyword">access_log</span>  <span class="token operator">/</span>data<span class="token operator">/</span>log<span class="token operator">/</span>nginx<span class="token operator">/</span>web_hook<span class="token punctuation">.</span>access<span class="token punctuation">.</span>log<span class="token punctuation">;</span>\n    <span class="token keyword">location</span> <span class="token operator">/</span> <span class="token punctuation">{</span>\n        <span class="token keyword">proxy_pass</span>      <span class="token keyword">http</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">7777</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>执行node脚本</h3>\n<p>使用最常见的<a href="https://github.com/Unitech/pm2">PM2</a>，安装和使用就不说了，直接到github看。\n<code class="language-text">pm2 start [filename].js --watch #此命令会检测文件变化自动重启服务</code></p>\n<h3>最后</h3>\n<p>再去配置一下gitlab上的事件。\n<img src="https://ws3.sinaimg.cn/large/006tKfTcly1fg4k6egpcuj30q703naa7.jpg"></p>\n<h2>小记</h2>\n<p>这种方式还有一些不完善的地方，但是已经可以凑合使用了，在服务器端运行节省了我开发机的资源和时间，同时也避免了多人开发时的本地node_moudel版本不一致带来的问题。之后我会再开一篇文章去完善一下这个项目。</p>\n<h3>参考文章</h3>\n<p><a href="https://segmentfault.com/a/1190000005644039">使用 WebHook 来自动部署 NodeJS 项目！</a></p>',frontmatter:{title:"使用Webhook+nodejs将Git项目代码自动部署服务器",date:"May 16, 2017"}}},pathContext:{slug:"/older/2017-05-16/",previous:{fields:{slug:"/vanilla/2017-12-04/"},frontmatter:{title:"Extend实现方式"}},next:{fields:{slug:"/older/2017-06-06/"},frontmatter:{title:"Vue书写注意事项（规范）——整理"}}}}}});
//# sourceMappingURL=path---older-2017-05-16-7316323c6ecba60fb0aa.js.map