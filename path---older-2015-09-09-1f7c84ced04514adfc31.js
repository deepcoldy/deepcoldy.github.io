webpackJsonp([0xc9ed259decc1],{439:function(n,t){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/deepcold/iserver/deepcoldy.github.io/src/pages/older/2015-09-09.md absPath of file >>> MarkdownRemark",html:'<p>设置父元素display:flex; 子元素flex:1; 即可使得子元素自动平均分配距离。</p>\n<p>但是兼容性爆炸。</p>\n<blockquote>\n<p>display:flex 多栏多列布局浏览器支持情况：火狐直接支持w3c无前缀写法，谷歌和opera支持-webkit- 前缀写法，比较适合移动端开发使用，</p>\n</blockquote>\n<blockquote>\n</blockquote>\n<blockquote>\n<p>display:flex 这个牛逼的css3布局属性，遗憾的是只有谷歌和火狐支持，</p>\n</blockquote>\n<blockquote>\n<p>中国人常用的手机上的浏览器几乎全军覆没，UC浏览器不支持，安卓4.1.1和之前版本手机自带的浏览器也不支持，微信自带浏览器也不支持。</p>\n</blockquote>\n<p>最终代码如下：</p>\n<p>&#x3C;!DOCTYPE html>\n&#x3C;html>\n&#x3C;head lang=“en”>\n&#x3C;meta charset=“UTF-8”>\n&#x3C;title>&#x3C;/title>\n&#x3C;link href=“index.html” type=“text/css” rel=“alternate”>\n&#x3C;style type=“text/css”>\nbody{\nmargin: 0px;\nright: 0px;\n}\n.top{\nheight: 100px;\nbackground-color:#ececec ;\ndisplay:flex;\n/<em>justify-content: center;</em>/\n}\n/<em>.top_button {</em>/\n/<em>padding-top: 2.5em;</em>/\n/<em>text-align: center;</em>/\n/<em>flex: 1;</em>/\n/<em>border:1px solid rgba(0,0,0,0.2);</em>/\n/*<em>/\n/</em>/!<em>vertical-align: middle;</em>!/<em>/\n/</em>}*/\n.top<em>button {\ndisplay: flex;\njustify-content:center;\nalign-items:center;\nflex: 1;\nborder:1px solid rgba(0,0,0,0.2);\n}\n.top</em>img{\nposition: absolute;\ntop: 0px;\ntransform:translateX(-50%);\nwidth: 10em;\nheight: 100px;\nbackground-color: #ff4200;\nz-index: 10;\n}\n.content{\ntext-align: center;\nline-height: 3em;\n}\n.content .red{\ncolor: #fdb38b;\n}\n.content .white{\ncolor: white;\n}\n&#x3C;/style>\n&#x3C;/head>\n&#x3C;body>\n&#x3C;div class=“top”>\n&#x3C;div class=“top<em>button”>\n&#x3C;span>个人信息&#x3C;/span>\n&#x3C;/div>\n&#x3C;div class=“top</em>img”>\n&#x3C;div class=“content”>\n&#x3C;span class=“red”>可用金额&#x3C;/span>\n&#x3C;br />\n&#x3C;span class=“white”>元&#x3C;/span>\n&#x3C;/div>\n&#x3C;/div>\n&#x3C;div class=“top_button”>\n&#x3C;span>账户信息&#x3C;/span>\n&#x3C;/div>\n&#x3C;/div>\n&#x3C;/body>\n&#x3C;/html>\nmore</p>\n<p>另外还有一种用table实现的，兼容性好了很多，但是自以为用的人不多。</p>\n<p>&#x3C;!DOCTYPE html></p>\n<p>&#x3C;html>\n&#x3C;head lang=“en”>\n&#x3C;meta charset=“UTF-8”>\n&#x3C;title>&#x3C;/title>\n&#x3C;link href=“index.html” type=“text/css” rel=“alternate”>\n&#x3C;style type=“text/css”>\nbody{\nmargin: 0px;\nright: 0px;\n}\n.top{\nwidth: 100%;\nheight: 100px;\nbackground-color:#ececec ;\ndisplay: table;\n/<em>justify-content: center;</em>/\n}</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">    /*.top_button {*/\n\n        /*padding-top: 2.5em;*/\n\n        /*text-align: center;*/\n\n        /*flex: 1;*/\n\n        /*border:1px solid rgba(0,0,0,0.2);*/\n\n        /**/\n\n        /*/!*vertical-align: middle;*!/*/\n\n    /*}*/\n\n    .top_button {\n\n        display: table-cell;\n\n        text-align: center;\n\n        border:3px solid rgba(0,0,0,0.2);\n\n        vertical-align: middle;\n\n        font-size: 1.2em;\n\n    }\n\n    .top_img{\n\n        position: absolute;\n\n        margin: 0 auto;\n\n        margin-left: -10%;\n\n        width: 20%;\n\n        height: 100px;\n\n        background-color: #ff4200;\n\n        z-index: 10;\n\n    }\n\n    .content{\n\n        text-align: center;\n\n        line-height: 3em;\n\n        font-size: 0.9em;\n\n        font-weight: bold;\n\n    }\n\n    .content .red{\n\n        color: #fdb38b;\n\n        font-size: 1.1em;\n\n    }\n\n    .content .white{\n\n        color: white;\n\n        font-size: 1.1em;\n\n    }\n\n&amp;lt;/style&amp;gt;</code></pre>\n      </div>\n<p>&#x3C;/head></p>\n<p>&#x3C;body></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&amp;lt;div class=&quot;top&quot;&amp;gt;\n\n    &amp;lt;div class=&quot;top_button&quot;&amp;gt;\n\n        &amp;lt;span&amp;gt;个人信息&amp;lt;/span&amp;gt;\n\n    &amp;lt;/div&amp;gt;\n\n    &amp;lt;div class=&quot;top_img&quot;&amp;gt;\n\n        &amp;lt;div class=&quot;content&quot;&amp;gt;\n\n            &amp;lt;span class=&quot;red&quot;&amp;gt;可用金额&amp;lt;/span&amp;gt;\n\n                &amp;lt;br /&amp;gt;\n\n            &amp;lt;span class=&quot;white&quot;&amp;gt;元&amp;lt;/span&amp;gt;\n\n        &amp;lt;/div&amp;gt;\n\n    &amp;lt;/div&amp;gt;\n\n    &amp;lt;div class=&quot;top_button&quot;&amp;gt;\n\n        &amp;lt;span&amp;gt;账户信息&amp;lt;/span&amp;gt;\n\n    &amp;lt;/div&amp;gt;\n\n&amp;lt;/div&amp;gt;</code></pre>\n      </div>\n<p>&#x3C;/body></p>\n<p>&#x3C;/html></p>',frontmatter:{title:"关于两列自适应",date:"September 09, 2015"}}},pathContext:{slug:"/older/2015-09-09/",previous:null,next:{fields:{slug:"/older/2015-09-10/"},frontmatter:{title:"用canvas画一个头像框"}}}}}});
//# sourceMappingURL=path---older-2015-09-09-1f7c84ced04514adfc31.js.map