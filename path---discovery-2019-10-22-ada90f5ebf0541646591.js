webpackJsonp([0x5c0a9698b91e],{440:function(e,n){e.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/80253170/iserver/deepcoldy.github.io/src/pages/discovery/2019-10-22.md absPath of file >>> MarkdownRemark",html:'<h3>通常情况</h3>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">version: &#39;3\n  services:\n    dev:\n      image: node:12\n      volumes:\n        - .:/usr/src/service\n      working_dir: /usr/src/services\n      command: npm run dev\n      ports: \n        - 3000:3000</code></pre>\n      </div>\n<p>这样写会有一些问题，比如node<em>modules怎么安装。\nnode</em>modules如果只是安装在本机，那么是无法用此方式同步到Docker中的。\n注意：选择<code class="language-text">command: npm install &amp;&amp; npm run dev</code>这种方式是不行的\n可以使用<code class="language-text">command: bash -c &quot;npm install &amp;&amp; npm run dev&quot;</code>\n但是这样会导致每次重启都重新安装依赖，非常低效。</p>\n<h3>解决方式</h3>\n<p>由于version 3取消了extends模式，导致我们不能很简洁的实现目标。\n所以还是继续使用version 2。\n这边使用了一个volume专门存放node_modules。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">version: &#39;2&#39;\n\n  server:\n    image: node:12\n    volumes:\n      - nodemodules:/usr/src/service/node_modules\n      - .:/usr/src/service\n    working_dir: /usr/src/service\n    ports:\n      - &#39;3000:3000&#39;\n  install: # 安装依赖\n    command: yarn install\n    extends:\n      service: server\n  dev: # 开发模式\n    command: npm run start:dev\n    extends:\n      service: server\n\nvolumes:\n  nodemodules:\n    external: true</code></pre>\n      </div>\n<p>生成volume：<code class="language-text">docker volume create nodemodules</code> 当然还可以新建一些其他的volume(比如开发node时生成一个dist之类的目录供实时编译)\n安装依赖：<code class="language-text">docker-compose -f docker-compose.builder.yml run --rm install</code>\n运行：<code class="language-text">docker-compose up dev</code> </p>\n<p>如此就能做到在Docker中Hot Reload了。但还不完美。</p>\n<h3>其他问题</h3>\n<h4>代码保存了却没刷新界面</h4>\n<p>开发时我们可能会遇到一个问题，代码保存了，但是docker中却没有自动刷新。\n通常这是由于使用了webpack的HotModuleReplacementPlugin导致的。\n他是基于时间做的判断是否需要更新。\n但docker中如果忽略了时区的影响，会导致容器与宿主机的时间不一样，从而导致Hot Reload失效。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">version: &#39;2&#39;\n\n  server:\n    ... # 省略\n    environment: # 添加时区\n      - TZ=Asia/Shanghai\n    ... # 省略</code></pre>\n      </div>\n<h4>宿主机开多容器，容器之间如何做通信</h4>\n<p>这是一个比较大的话题，准备在下一篇中讨论。</p>\n<h3>总结</h3>\n<p>在Docker中开发前端应用多少会遇到一些水土不服，要解决这些问题还是要详细阅读官方文档，灵活运用。\n我在搭建过程中也能感到，前端的基础设施与后端的割裂，解决方案少只能自己摸索。\n当然相信会越来越好。</p>',frontmatter:{title:"前端项目在Docker中实现 Hot Reload",date:"October 22, 2019"}}},pathContext:{slug:"/discovery/2019-10-22/",previous:{fields:{slug:"/discovery/2019-10-21/"},frontmatter:{title:"CentOS安装mysql"}},next:null}}}});
//# sourceMappingURL=path---discovery-2019-10-22-ada90f5ebf0541646591.js.map