# 基本知识

MSCPO开服文档本着编辑友好，灵活性强，便于预览和自定义的需求采用了现代的轻量化的 [VitePress](https://vitepress.dev/zh/) 框架。

编写文档需要清楚一些基础知识

- 基础知识
  - [Markdown是什么](#markdown是什么)
  - [怎么排版中文文案](#中文文案排版指北)

## Markdown是什么?

>Markdown 是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 .md 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用，如Github、Wikipedia、简书等。

>千万不要被「标记」、「语言」吓到，Markdown的语法十分简单，常用的标记符号不超过十个，用于日常写作记录绰绰有余，不到半小时就能完全掌握。

>就是这十个不到的标记符号，却能让人优雅地沉浸式记录，专注内容而不是纠结排版，达到「心中无尘，码字入神」的境界。

>摘自 [Markdown官方教程](https://markdown.com.cn/basic-syntax/)

- [[Markdown官方教程]](https://markdown.com.cn/basic-syntax/)
- [[Markdown的简单用法]](https://markdown.com.cn/basic-syntax/)
- [[Markdown - VitePress]](https://vitepress.yiov.top/markdown.html)

## 文档体系

### 结构

``` tree
├─.vitepress       VitePress配置文件目录
│  └─theme
├─public           资源文件夹
│  ├─fonts
│  │  └─LICENSE
│  └─Images       图像资源
│      ├─Bedrock
│      └─JAVA
└─zh_CN            中文目录
    ├─Bedrock      基岩服务端教程
    │  ├─BDS
    │  ├─Nukkit
    │  └─PocketMine
    ├─Contribute   贡献教程文档
    └─JAVA        JAVA服务端教程
        ├─Cuberite
        ├─Mod
        ├─SpigotSeries
        ├─Sponge
        └─Vanilla
```

## 中文文案排版指北

转自[中文文案排版指北](https://github.com/mzlogin/chinese-copywriting-guidelines)

### 目录

<!-- vim-markdown-toc GFM -->

- [基本知识](#基本知识)
  - [Markdown是什么?](#markdown是什么)
  - [文档体系](#文档体系)
    - [结构](#结构)
  - [中文文案排版指北](#中文文案排版指北)
    - [目录](#目录)
    - [空格](#空格)
      - [中英文之间需要增加空格](#中英文之间需要增加空格)
      - [中文与数字之间需要增加空格](#中文与数字之间需要增加空格)
      - [数字与单位之间无需增加空格](#数字与单位之间无需增加空格)
      - [全角标点与其他字符之间不加空格](#全角标点与其他字符之间不加空格)
      - [`-ms-text-autospace` to the rescue?](#-ms-text-autospace-to-the-rescue)
    - [标点符号](#标点符号)
      - [不重复使用标点符号](#不重复使用标点符号)
    - [全角和半角](#全角和半角)
      - [使用全角中文标点](#使用全角中文标点)
      - [数字使用半角字符](#数字使用半角字符)
      - [遇到完整的英文整句、特殊名词，其內容使用半角标点](#遇到完整的英文整句特殊名词其內容使用半角标点)
    - [名词](#名词)
      - [专有名词使用正确的大小写](#专有名词使用正确的大小写)
      - [不要使用不地道的缩写](#不要使用不地道的缩写)
    - [争议](#争议)
      - [链接之间增加空格](#链接之间增加空格)
      - [简体中文使用直角引号](#简体中文使用直角引号)

<!-- vim-markdown-toc -->

### 空格

「有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。

与大家共勉之。」——[vinta/paranoid-auto-spacing](https://github.com/vinta/pangu.js)

#### 中英文之间需要增加空格

正确：

> 在 LeanCloud 上，数据存储是围绕 `AVObject` 进行的。

错误：

> 在LeanCloud上，数据存储是围绕`AVObject`进行的。

> 在 LeanCloud上，数据存储是围绕`AVObject` 进行的。

完整的正确用法：

> 在 LeanCloud 上，数据存储是围绕 `AVObject` 进行的。每个 `AVObject` 都包含了与 JSON 兼容的 key-value 对应的数据。数据是 schema-free 的，你不需要在每个 `AVObject` 上提前指定存在哪些键，只要直接设定对应的 key-value 即可。

例外：「豆瓣FM」等产品名词，按照官方所定义的格式书写。

#### 中文与数字之间需要增加空格

正确：

> 今天出去买菜花了 5000 元。

错误：

> 今天出去买菜花了 5000元。

> 今天出去买菜花了5000元。

#### 数字与单位之间无需增加空格

正确：

> 我家的光纤入户宽带有 10Gbps，SSD 一共有 10TB。

错误：

> 我家的光纤入户宽带有 10 Gbps，SSD 一共有 20 TB。

另外，度／百分比与数字之间不需要增加空格：

正确：

> 今天是 233° 的高温。

> 新 MacBook Pro 有 15% 的 CPU 性能提升。

错误：

> 今天是 233 ° 的高温。

> R5-7500F 有 15 % 的 CPU 性能提升。

#### 全角标点与其他字符之间不加空格

正确：

> 刚刚买了一部 iPhone，好开心！

错误：

> 刚刚买了一部 iPhone ，好开心！

#### `-ms-text-autospace` to the rescue?

Microsoft 有个 [`-ms-text-autospace`](http://msdn.microsoft.com/en-us/library/ie/ms531164(v=vs.85).aspx) 的 CSS 属性可以实现自动为中英文之间增加空白。不过目前并未普及，另外在其他应用场景，例如 OS X、iOS 的用户界面目前并不存在这个特性，所以请继续保持随手加空格的习惯。

### 标点符号

#### 不重复使用标点符号

正确：

> 德国队竟然战胜了巴西队！

> 她竟然对你说「喵」？！

错误：

> 德国队竟然战胜了巴西队！！

> 德国队竟然战胜了巴西队！！！！！！！！

> 她竟然对你说「喵」？？！！

> 她竟然对你说「喵」？！？！？？！！

### 全角和半角

不明白什么是全角（全形）与半角（半形）符号？请查看维基百科词条『[全角和半角](http://zh.wikipedia.org/wiki/%E5%85%A8%E5%BD%A2%E5%92%8C%E5%8D%8A%E5%BD%A2)』。

#### 使用全角中文标点

正确：

> 嗨！你知道嘛？今天前台的小妹跟我说「喵」了哎！

> 核磁共振成像（NMRI）是什么原理都不知道？JFGI！

错误：

> 嗨! 你知道嘛? 今天前台的小妹跟我说 "喵" 了哎!

> 嗨!你知道嘛?今天前台的小妹跟我说"喵"了哎!

> 核磁共振成像 (NMRI) 是什么原理都不知道? JFGI!

> 核磁共振成像(NMRI)是什么原理都不知道?JFGI!

#### 数字使用半角字符

正确：

> 这件蛋糕只卖 1000 元。

错误：

> 这件蛋糕只卖 １０００ 元。

例外：在设计稿、宣传海报中如出现极少量数字的情形时，为方便文字对齐，是可以使用全角数字的。

#### 遇到完整的英文整句、特殊名词，其內容使用半角标点

正确：

> 乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」

> 推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常的有趣。

错误：

> 乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」

> 推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。

### 名词

#### 专有名词使用正确的大小写

大小写相关用法原属于英文书写范畴，不属于本 wiki 讨论內容，在这里只对部分易错用法进行简述。

正确：

> 使用 GitHub 登录

> 我们的客户有 GitHub、Foursquare、Microsoft Corporation、Google、Facebook, Inc.。

错误：

> 使用 github 登录

> 使用 GITHUB 登录

> 使用 Github 登录

> 使用 gitHub 登录

> 使用 gｲんĤЦ8 登录

> 我们的客户有 github、foursquare、microsoft corporation、google、facebook, inc.。

> 我们的客户有 GITHUB、FOURSQUARE、MICROSOFT CORPORATION、GOOGLE、FACEBOOK, INC.。

> 我们的客户有 Github、FourSquare、MicroSoft Corporation、Google、FaceBook, Inc.。

> 我们的客户有 gitHub、fourSquare、microSoft Corporation、google、faceBook, Inc.。

> 我们的客户有 gｲんĤЦ8、ｷouЯƧquﾑгє、๓เςг๏ร๏Ŧt ς๏гק๏гคtเ๏ภn、900913、ƒ4ᄃëв๏๏к, IПᄃ.。

注意：当网页中需要配合整体视觉风格而出现全部大写／小写的情形，HTML 中请使用标准的大小写规范进行书写；并通过 `text-transform: uppercase;`／`text-transform: lowercase;` 对表现形式进行定义。

#### 不要使用不地道的缩写

正确：

> 我们需要一位熟悉 JavaScript、HTML5，至少理解一种框架（如 Backbone.js、AngularJS、React 等）的前端开发者。

错误：

> 我们需要一位熟悉 Js、h5，至少理解一种框架（如 backbone、angular、RJS 等）的 FED。

### 争议

以下用法略带有个人色彩，即：无论是否遵循下述规则，从语法的角度来讲都是**正确**的。

#### 链接之间增加空格

用法：

> 请 [提交一个 issue](#) 并分配给相关同事。

> 访问我们网站的最新动态，请 [点击这里](#) 进行订阅！

对比用法：

> 请[提交一个 issue](#) 并分配给相关同事。

> 访问我们网站的最新动态，请[点击这里](#)进行订阅！

#### 简体中文使用直角引号

用法：

> 「老师，『有条不紊』的『紊』是什么意思？」

对比用法：

> “老师，‘有条不紊’的‘紊’是什么意思？”
