webpackJsonp([0xe64be0612cbb],{431:function(e,n){e.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/deepcold/iserver/deepcoldy.github.io/src/pages/discovery/2019-01-29.md absPath of file >>> MarkdownRemark",html:'<p>一直以来，我都是通过Anyconnect来远程访问家里的群晖等网络设备。</p>\n<p>使用用户名+密码的方式每次登陆都很麻烦。</p>\n<p>所以想使用证书的方式来登陆Anyconnect。</p>\n<p>在不久之前的某天，我在LEDE里面开始了我的想法。</p>\n<p>一开始是很不顺利的，插件重启后就报错了。</p>\n<p>错误报告为：安装支持环境-1失败,你的网络可能有问题,请重试!</p>\n<p>\b我找了很多人都说更换源可能会好，我按照他们的提示更换为了openwrt.proxy.ustclug.org和另外一个国内的源都没有解决。</p>\n<p>此时我又看到Telegram里面有人说更新一下会好。</p>\n<p>于是我把LEDE版本更新到了2.26</p>\n<p><img src="https://raw.githubusercontent.com/deepcoldy/pic/master/20190727231109.png"></p>\n<p>然而除了系统里面的DDNS功能被删除了之外，并没有什么改变。</p>\n<p>此时我又接到了酷软中心的0.3.7更新和Anyconnect\b Server的0.9更新。</p>\n<p>其中Anyconnect Server的更新说到优化了提示文案，确实他把错误文案更改为了:请检查到downloads.openwrt.org的连通,或者更换源地址重试。</p>\n<p>即使我的源不是downloads.openwrt.org他也会提示这个连通有问题，明显就是没\b提示核心问题嘛。</p>\n<p>接下来我又试了以下几种方式：</p>\n<ul>\n<li>把源的这几个地址都添加到了ss\b里面，让源走代理（未成功）</li>\n<li>更改LEDE的DNS为114.114.114.114（未成功）</li>\n<li>进入Shell更改resolv.conf（越来越接近了）</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">echo &quot;nameserver 114.114.114.114&quot;&gt;/tmp/resolv.conf\nrm -f /var/lock/opkg.lock\nopkg update</code></pre>\n      </div>\n<ul>\n<li>\n<p>重新安装了ocserv（成功解决）</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">opkg update &amp;&amp; opkg install --force-overwrite ocserv</code></pre>\n      </div>\n</li>\n</ul>\n<p>成功后插件状态截图：</p>\n<p><img src="https://raw.githubusercontent.com/deepcoldy/pic/master/20190727231136.png"></p>\n<p>记得下载证书后在你的设备端认证证书</p>\n<p>享受吧</p>\n<p><img src="https://raw.githubusercontent.com/deepcoldy/pic/master/20190727231201.png"></p>\n<p><a href="https://github.com/koolshare/ledesoft/issues/234">参考Github链接</a></p>',frontmatter:{title:"解决LEDE中Anyconnect插件无法正常运行",date:"January 29, 2019"}}},pathContext:{slug:"/discovery/2019-01-29/",previous:{fields:{slug:"/vanilla/2018-11-20/"},frontmatter:{title:"算法问题-从数组中查找5个出现次数最多的数字"}},next:{fields:{slug:"/discovery/2019-04-23/"},frontmatter:{title:"React Native 点9图方案"}}}}}});
//# sourceMappingURL=path---discovery-2019-01-29-250fd4a08bacec7ae174.js.map