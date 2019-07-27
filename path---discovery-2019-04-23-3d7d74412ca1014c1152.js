webpackJsonp([82961536367099],{432:function(n,s){n.exports={data:{site:{siteMetadata:{title:"DeepCold Blog",author:"DeepCold"}},markdownRemark:{id:"/Users/deepcold/iserver/deepcoldy.github.io/src/pages/discovery/2019-04-23.md absPath of file >>> MarkdownRemark",html:'<p>搜了全网，解决方案很少。\n只找到了<a href="https://github.com/madsleejensen/react-native-image-capinsets">react-native-image-capinsets</a>这个组件。</p>\n<p>还有一篇文章<a href="https://www.jianshu.com/p/1f3ab1caee97">React Native显示点9图片</a></p>\n<p>但是文章介绍的不是很详细，我来把关键步骤解释一下。</p>\n<p><code class="language-text">capInsets={{top: 40, left: 29, bottom: 9, right: 29}}</code></p>\n<p>这里的top: 是左边黑块距离顶部的y轴距离(px)\nleft：是顶部黑块距离左边的x轴距离(px)\nbottom：图片宽度 - 底部黑块宽度\nright：图片高度 - 右边黑款高度</p>\n<p>设置好后，在debug模式确实能看到效果，我用点9图的意义在于设置图片阴影。</p>\n<p>但是仍存在黑边，如下图：</p>\n<p><img src="https://raw.githubusercontent.com/deepcoldy/pic/master/20190727230645.png"></p>\n<p>黑边出现的原因有三种：</p>\n<ol>\n<li>因为在React Native代码中无法引入xxx.9.png的图片。只能引入xxx.png这种格式。（没时间验证，存疑）</li>\n<li>生成点9图的方式不正确。我是在Android Studio里面生成的。生成方式是把普通后缀的图片放进去（如xxx.png），然后点<code class="language-text">Create 9-patch file</code>然后就会生成一个xxx.9.png格式的图片。接着放到Android Studio里面打开就能拖动形成点9图的黑边了。</li>\n<li>图片生成错误：例如黑边不是紧贴着图片最外层。</li>\n</ol>\n<p>除此之外，上图是模拟器和真机debug包的效果，下图是真机release包的效果：</p>\n<p><img src="https://raw.githubusercontent.com/deepcoldy/pic/master/20190727230742.png"></p>\n<p>可以看到，在真机上的release包，点9图完全没有生效，只是做了一个普通的拉伸而已，没有做特定位置的拉伸。</p>\n<p>这里特殊说明一下我的设计图解决方案是px转真机dp。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// util.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Dimensions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n \n<span class="token comment">// 设备宽度，单位 dp</span>\n<span class="token keyword">const</span> deviceWidthDp <span class="token operator">=</span> Dimensions<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'window\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span>\n \n<span class="token comment">// 设计稿宽度（这里为640px），单位 px</span>\n<span class="token keyword">const</span> uiWidthPx <span class="token operator">=</span> <span class="token number">1080</span><span class="token punctuation">;</span>\n\n<span class="token comment">// px 转 dp（设计稿中的 px 转 rn 中的 dp）</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">px</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">uiElePx</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> uiElePx <span class="token operator">*</span> deviceWidthDp <span class="token operator">/</span> uiWidthPx<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>在模拟器上可生效的数值是用px转dp的方案。</p>\n<p>所以我怀疑是我的<code class="language-text">capInsets={}</code>设置错误了，果然我改了一次参数之后，直接用px去写，果然可以在真机上可以拉伸了。但是真机上可以拉伸以后，模拟器上又不拉伸了。</p>\n<p>问了一下头条的RN开发：</p>\n<p><img src="https://raw.githubusercontent.com/deepcoldy/pic/master/20190727230442.png"></p>\n<p>遂放弃该方案。</p>\n<p>此处记录了2019年4月的React Native现状，在没有更好方案出现之前，建议不要在React Native上使用Point 9 Image。</p>',frontmatter:{title:"React Native 点9图方案",date:"April 23, 2019"}}},pathContext:{slug:"/discovery/2019-04-23/",previous:{fields:{slug:"/discovery/2019-01-29/"},frontmatter:{title:"解决LEDE中Anyconnect插件无法正常运行"}},next:null}}}});
//# sourceMappingURL=path---discovery-2019-04-23-3d7d74412ca1014c1152.js.map