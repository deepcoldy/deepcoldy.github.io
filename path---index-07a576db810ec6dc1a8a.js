webpackJsonp([0x81b8806e4260],{433:function(e,t){e.exports={data:{site:{siteMetadata:{title:"DeepCold Blog"}},allMarkdownRemark:{edges:[{node:{excerpt:"搜了全网，解决方案很少。\n只找到了 react-native-image-capinsets 这个组件。 还有一篇文章 React Native显示点9图片 但是文章介绍的不是很详细，我来把关键步骤解释一下。 这里的top: 是左边黑块距离顶部的y轴距离(px)\nleft…",fields:{slug:"/discovery/2019-04-23/"},frontmatter:{date:"23 April, 2019",title:"React Native 点9图方案"}}},{node:{excerpt:"一直以来，我都是通过Anyconnect来远程访问家里的群晖等网络设备。 使用用户名+密码的方式每次登陆都很麻烦。 所以想使用证书的方式来登陆Anyconnect。 在不久之前的某天，我在LEDE…",fields:{slug:"/discovery/2019-01-29/"},frontmatter:{date:"29 January, 2019",title:"解决LEDE中Anyconnect插件无法正常运行"}}},{node:{excerpt:"假设有一个随机的数组，要找出出现次数最多的五个数字，以数组的形式输出。 我的答案：  输出结果如下：",fields:{slug:"/vanilla/2018-11-20/"},frontmatter:{date:"20 November, 2018",title:"算法问题-从数组中查找5个出现次数最多的数字"}}},{node:{excerpt:"小程序在页面堆栈达到10层时将会触发Error。\n但是当产品又设计出一款页面带有循环跳转的产品时，我们不得不去Hack掉小程序的官方限制。 下面我将基于Taro作为小程序框架，继承小程序api的情况下，写一下如何Hack比较好。 页面文件如下，记得在app.js…",fields:{slug:"/miniprogram/2018-9-28/"},frontmatter:{date:"28 September, 2018",title:"小程序页面堆栈的Hack(含源码)"}}},{node:{excerpt:"Event Loop…",fields:{slug:"/vanilla/2018-9-20/"},frontmatter:{date:"20 September, 2018",title:"Event Loop 小记"}}},{node:{excerpt:"注：v0.0.73版本(v1.0发布之前的最后一个版本) 1. 生命周期 由于该版本的生命周期\b并没有考虑执行顺序，子组件的生命周期可能会优先于父组件执行，则会在某些应用场景下出现问题。 2. JSX中不能通过表达式来控制子组件重走生命周期 结合问题…",fields:{slug:"/miniprogram/2018-9-15/"},frontmatter:{date:"15 September, 2018",title:"Taro与小程序哪些你不得不注意的事"}}},{node:{excerpt:"将标准状态单独储存 我们经常将服务器返回的数据直接储存到redux中，但是尽量不要在编辑时直接修改这个标准状态的数据。 比如下面我们加了isEditing这个数据项，那么当我们直接修改store中先存的name、email、phone…",fields:{slug:"/react/2018-10-23/"},frontmatter:{date:"10 February, 2018",title:"更好的Redux使用方式"}}},{node:{excerpt:"1. 如果不需要初始化state并且也不需要绑定事件，则不必为你的React组件声明constructor。 2.请不要在render函数中声明props的默认值，如： 只需在constructor中 即可。 3.推荐使用key来初始化组件 相关文档 Fully…",fields:{slug:"/react/2018-02-10/"},frontmatter:{date:"10 February, 2018",title:"React的一点点注意事项"}}},{node:{excerpt:"下午抽了一个小时时间来研究了一下Preact，发现此框架对于理解React有非常好的借鉴作用。 如何理解Preact 众所周知，Preact沿用了JSX和虚拟dom。 我们写JSX： 会被编译成如下执行： 这个编译过程是由 babel-plugin-transform-react…",fields:{slug:"/react/2018-01-29/"},frontmatter:{date:"29 January, 2018",title:"了解React要从Preact看起"}}},{node:{excerpt:"此教程为内部分享所用，所以文字部分并没有非常详实。 开发之前 环境配置 注意在npm5以上的版本可能会有问题\n \n使用yarn是比较推荐的选择\n 电脑端调试工具 Xcode - Apple Developer \n 下载 Android Studio 和 SDK…",fields:{slug:"/react/2017-12-12/"},frontmatter:{date:"12 December, 2017",title:"RN入门教程，个人整理版本"}}},{node:{excerpt:"加入了我个人认为最重要的功能——不确定环境的服务端渲染，以下为介绍。 Environment Agnostic SSR The default build of   assumes a Node.js environment, which makes it unusable in…",fields:{slug:"/older/2017-10-23/"},frontmatter:{date:"23 October, 2017",title:"Vue2.5发布"}}},{node:{excerpt:"前言 问题是这样的：当有一个需求是需要在CMS里更换用户端产品的视觉颜色，也就是换一套可以自定义的皮肤，如何做才是最好的用户体验。前端框架基于Vue。 思路一：向Backend…",fields:{slug:"/older/2017-09-09/"},frontmatter:{date:"09 September, 2017",title:"思考一个很有意思的问题——换肤"}}},{node:{excerpt:"用来转化类数组对象或可迭代的对象(Iterator) 1. 转化类数组对象 2. 转化 可迭代的对象(Iterator) 生成一个数组 Array.of用处在于无论传入任何参数，它的结果都是以此参与为依据生成数组。",fields:{slug:"/older/2017-08-29/"},frontmatter:{date:"29 August, 2017",title:"ES6那些我不常用却很有用的知识"}}},{node:{excerpt:"续上篇： 使用WEBHOOK+NODEJS将GIT项目代码自动部署服务器 前言 上篇讲到，根据判断文件路径是否有git pull的方式来判断是否需要重新build项目，但是这样会遇到一些问题，比如：有时候路径过长，shell中可能会自动隐藏一部分文件路径，这样就不能触发build…",fields:{slug:"/older/2017-08-22/"},frontmatter:{date:"22 August, 2017",title:"使用WEBHOOK+NODEJS将GIT项目代码自动部署服务器-进阶版"}}},{node:{excerpt:"前言 这段时间连续看到前端跨域怎么解决之类的问题和文章。但都不是很贴合实际，我自己回答的也不完整，所以写文回忆一下。\n前端解决跨域的途径有很多，但是实际在项目中不能那么轻易的就使用其中一种，因为任何解决方案都可能带来越来越大的复杂度。我最初在央视网的时候统一都使用jsonp…",fields:{slug:"/older/2017-08-21/"},frontmatter:{date:"21 August, 2017",title:"JS跨域实际项目中的解决方式"}}},{node:{excerpt:"瓜子分享 要点：\n1.Quick but dirty work 过早的优化是一切罪恶的根源\n2.主要精力集中在业务上\n3.周边服务尽量外部购买\n4.缓一缓上缓存\n5.开始就要重视“单点”问题\n6.尽早确定数据库使用规范、数据字典\n7.敏感数据加密和脱敏处理 问题：…",fields:{slug:"/older/2017-07-11/"},frontmatter:{date:"11 July, 2017",title:"PHP开发者大会"}}},{node:{excerpt:"检查是否是对象 检查对象是否有该属性",fields:{slug:"/older/2017-06-12/"},frontmatter:{date:"12 June, 2017",title:"JavaScript细节"}}},{node:{excerpt:"本文章只针对Vue2.3版本，后续源码和api都可能产生变化，阅读时请因地制宜。 入口文件 Vue 2.3的入口文件叫做runtime-with-compiler.js (此文件名可能会随着版本变化)\n 流程图 文件关联  引入    引入  \nobserver的index.js…",fields:{slug:"/older/2017-06-08/"},frontmatter:{date:"08 June, 2017",title:"Vue 2.3 源码笔记"}}},{node:{excerpt:"在初始化Vue项目的时候，经常会遇到npm报错，以下是我根据个人项目经验整理出的需要注意的点。 Yarn 为了锁定项目协作者的node_modules版本，推荐使用yarn来锁定安装统一版本的npm包。 如果遇到node-sass的报错 类似:  \n这种报错通常是因为npm…",fields:{slug:"/older/2017-06-07/"},frontmatter:{date:"07 June, 2017",title:"NPM相关"}}},{node:{excerpt:"注释 例如下图，Vue的data数据时最多的，如果编写成流水账的形式将非常难以维护。\n \n优化后：\n \n可看到，注释充分利用每行空间。用对象的形式归类数据。 scss 既然引入了scss，就一定要用包裹的形式，伪类再也不要写成 的形式了，下图是推荐的写法。\n class…",fields:{slug:"/older/2017-06-06/"},frontmatter:{date:"06 June, 2017",title:"Vue书写注意事项（规范）——整理"}}},{node:{excerpt:"前言 公司前段时间加入了webpack+vue，由于忙于写业务，始终没有投入全部精力去优化项目。话虽这么说，但还是一边开发一边在优化开发体验的。\n不讲别的，先讲讲标题说的是什么吧。\n如果你也苦于每天在不断地在本机与服务器之间git push & git pull…",fields:{slug:"/older/2017-05-16/"},frontmatter:{date:"16 May, 2017",title:"使用Webhook+nodejs将Git项目代码自动部署服务器"}}},{node:{excerpt:"移动端目前不存在完美的解决方案，我通常情况下更愿意使用rem方案，配合pxtorem插件，某些地方特殊适配，基本可以完成想要的效果。 使用Flexible实现手淘H5页面的终端适配 移动端1像素适配 单边框 多边框 移动 web 1px 边框解决方案",fields:{slug:"/older/2017-03-03/"},frontmatter:{date:"03 March, 2017",title:"移动端适配"}}},{node:{excerpt:"Zepto 的 Extend 实现方式 主要是判断是否为 Object 或 Array，是就进行递归，否则直接赋值。",fields:{slug:"/vanilla/2017-12-04/"},frontmatter:{date:"03 March, 2017",title:"Extend实现方式"}}},{node:{excerpt:"num = parseInt(num,10); 这个的作用可以去除num里的非数字字符，并以十进制赋值。 if( , , ,) 很多人问if里面为啥还能写逗号 逗号运算符：按顺序执行表达式，并且获得右边表达式的值。\n所以if里使用逗号时，所有表达式都会执行，但是if…",fields:{slug:"/older/2016-05-18/"},frontmatter:{date:"18 May, 2016",title:"读淘宝SUI源码总结"}}},{node:{excerpt:"前期准备： wordpress安装包， 官网链接 `* 我找的是中文包的下载地址，注意是下载tar.gz格式的压缩包，后面要放到服务器上解压缩。 其实你也可以在服务器上直接用wget url的方式直接下载` 1. 安装apache2.0 在浏览器中打开 http…",fields:{slug:"/older/2015-12-25/"},frontmatter:{date:"25 December, 2015",title:"Ubuntu下搭建wordpress环境"}}},{node:{excerpt:"问题：在WordPress中使用裁剪图片功能时，出现:”在裁剪您的图像时发生了错误。”或者”There has been an error cropping your image.” 原因：缺少PHP GD库。 Ubuntu下运行： sudo apt-get install…",fields:{slug:"/older/2015-12-24/"},frontmatter:{date:"24 December, 2015",title:"WordPress提示“在裁剪您的图像时发生了错误”的解决方法"}}},{node:{excerpt:"用一下两条来禁止浏览器选中 css是兼容火狐的 body中是用js来禁止选中 body{-moz-user-select:none} < body onselectstart=“return false;” >",fields:{slug:"/older/2015-11-03/"},frontmatter:{date:"03 November, 2015",title:"发愁图片文字被选中了太难看？"}}},{node:{excerpt:"本文章在 2015 年为了给某朋友一些建议所写，由于行业发展极快，请注意您当前阅读时也许已经不再适用。",fields:{slug:"/older/2015-10-28/"},frontmatter:{date:"28 October, 2015",title:"写给想进入前端的新人"}}},{node:{excerpt:"通过ng-style改变样式 具体情境： 一个列表的开头里面是 比如 这个开头有一张背景图 随着序号的增加，到10号时，字会超出背景范围 如何让数字达到10的同时缩小字体呢？ 此时用到angular的ng-style就很方便了 先介绍一下ng-style Expression…",fields:{slug:"/older/2015-09-29/"},frontmatter:{date:"29 September, 2015",title:"ng-style"}}},{node:{excerpt:"在写移动端网页的时候，由于屏幕分辨率的不同，导致了页面中的元素需要相应的做出调整。 在调整过程中，需要做到自适应，图片可以用设置宽度百分比的方式，div可以用position:absolute，然后百分比固定布局。 但是字体的自适应一直不好解决，但rem…",fields:{slug:"/older/2015-09-28/"},frontmatter:{date:"28 September, 2015",title:"rem的用法思考"}}},{node:{excerpt:"html部分： < div id=“loginModal” class=“modal show” > < div class=“modal-dialog” > < div class=“modal-content” > < div class=“modal-header…",fields:{slug:"/older/2015-09-22/"},frontmatter:{date:"22 September, 2015",title:"随意写了个登陆窗口"}}},{node:{excerpt:"开始Angular Js的学习 首先要理解angular是一种mvc模式的js框架库，MVC即 Module-View-Controller的简称。 Model是模块的意思，也就是说它用来存放各种组件。 View是负责视觉，也就是用来存放各种HTML\\CSS…",fields:{slug:"/older/2015-09-17/"},frontmatter:{date:"17 September, 2015",title:"Angular Js（第一章）"}}},{node:{excerpt:"首先了解一下em是何物？ em指字体高，任意浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em。为了简化font -size的换算，需要在css中的body选择器中声明Font-size=62.…",fields:{slug:"/older/2015-09-15/"},frontmatter:{date:"15 September, 2015",title:"css中em px"}}},{node:{excerpt:"昨晚兄弟说不会写轮播，我说这不简单，其实就是图片的位移。 他说，对，但我不会写。 然后我就随便搞了一段出来。 在这记录一下，然后删掉把，没啥技术水平。 主要就是用绝对定位将两张图片定位到一个div里，设置好div的大小只与一张图片相等，然后overflow:hidden…",fields:{slug:"/older/2015-09-12/"},frontmatter:{date:"12 September, 2015",title:"随便写个轮播的滚动效果"}}},{node:{excerpt:"在手机测试中经常需要测试微信的使用场景，但是由于安卓版本的微信没有提供清理缓存的功能，所以需要在网页引用链接时就考虑到清缓存的问题。 IPhone没有此问题 在我看来最理想的解决方案是，在引用链接时缀一个后缀。 比如 < img src=“header.jpg? < ?php…",fields:{slug:"/older/2015-09-11/"},frontmatter:{date:"11 September, 2015",title:"微信安卓浏览器有缓存的问题"}}},{node:{excerpt:"Sass的功能主要是作为一个更快捷方便的css编写工具，使得css更具可读性，更省去了重复编写css的麻烦之处。 sass几大功能 1.变量 可以用$来命名一个新变量 2.嵌套 可以直观的嵌套类选择器 3.部分引用 用 来命名一个scss的时候，可以用@import…",fields:{slug:"/older/2017-09-11/"},frontmatter:{date:"11 September, 2015",title:"Sass几大功能总结"}}},{node:{excerpt:"js部分如下 more html部分加入如下代码 body标签上加上 然后可看到效果，但是，我想用一张图片填充进去，无法生效，求解。",fields:{slug:"/older/2015-09-10/"},frontmatter:{date:"10 September, 2015",title:"用canvas画一个头像框"}}},{node:{excerpt:"设置父元素display:flex; 子元素flex:1; 即可使得子元素自动平均分配距离。 但是兼容性爆炸。 display:flex 多栏多列布局浏览器支持情况：火狐直接支持w3c无前缀写法，谷歌和opera支持-webkit…",fields:{slug:"/older/2015-09-09/"},frontmatter:{date:"09 September, 2015",title:"关于两列自适应"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-07a576db810ec6dc1a8a.js.map