## 2015.07 - WEB 更加工程化、全栈化

- 2015.06 - ES6 正式获批
- 2014.10 - HTML5 制定完成
- 2013.05 - React 发布
- **2009.05 - Node.js 诞生**
- 2008.09 - Chrome 发布
- 2006.01 - jQuery 发布
- 2005.02 - Ajax 概念出现

- - -

## WEB 与 Native

- Hybrid App 已数见不鲜
- 丰富的 device API
- [WEB 与 Native 的融合在高速地自我突破](http://xudafeng.github.io/autoresponsive-react/)
- 定制化的 `webkit`
<!-- baidu 2012.09 t5 引擎 -->
- 既要迎合技术栈的更新频率，又要迎合市场

- - -

#### 移动带来的挑战

### 体验要求更高
## 迭代频率更快

# 高品质保障更有力

- - -

[![startserver](http://ww2.sinaimg.cn/mw1024/6d308bd9gw1ethi9lx1k2j205k05kt8o.jpg)](https://github.com/xudafeng/startserver)

# 尽快“自动化”起来！

写个静态服务器搞定。。。

- - -

![](http://ww3.sinaimg.cn/mw1024/6d308bd9gw1ethj7x0yl0j20bj09mmx6.jpg)

- HTTP 或网关层面实现
- 代理端注入测试套件 [testsuit](https://github.com/startserver/startserver-testsuit)
<!--
event framework expect sinon
-->
- 代理端插入测试脚本

- - -

[anchor#1] movie

- - -

# 满足需求么？

- - -

- 数据环境不满足
- 权限环境不满足
- 环境因素导致的上下文限制
- 代码侵入 APP

- - -

# 自动化测试本质是软件开发

- - -

![](http://ww3.sinaimg.cn/mw1024/6d308bd9gw1etpjszhnpij21670m44dz.jpg)

- - -

### 首要考虑

- 界面抽象粒度
- 用例的可维护性
<!--
UI变更频繁，导致维护成本高，收益率低
-->

- 标准的脚本语言
<!--
javascript python ruby
拒绝提供商定制脚本
-->

- - -

![](http://ww4.sinaimg.cn/mw1024/6d308bd9gw1etym6axay9j20fj0a2t8u.jpg)

## 更直接的收效

- 耐久性测试
- 性能基准测试

<!--
人工无法完成的工作
-->

- - -

## 我们还需要解决什么问题？

- - -

### 版本差异

- 操作系统版本不统一
- 多个 SDK 版本共存
- 软件包、WEB 容器多版本
<!--
webkit ios 强制、 android 动态载入
容器带来的诡异问题、ajax 基础功能
-->
- APP 自身的版本

- - -

### 环境和配置差异

- 多套部署环境
<!--
依赖数据库部署
-->

- - -

![closed loop](http://ww3.sinaimg.cn/mw1024/6d308bd9gw1etxqcy1riij20kz0ifdgw.jpg)

- - -

![macaca](http://ww1.sinaimg.cn/mw1024/6d308bd9gw1etxidh1ef4j20if0goab9.jpg)

<!--
下一代测试产品
-->

- - -

# macaca-driver

- [WebDriver Wire Protocol](https://w3c.github.io/webdriver/webdriver-spec.html)

- - -

# Nodejs 成为主要的技术选型

- 跨平台的 WEB 实时应用首选
- 事件驱动与非阻塞 I/O 模型使其轻量、高效
- 繁荣和极速膨胀的生态 [NPM](https://www.npmjs.org/)

- - -

### 使用者端

- 本地命令行工具
- WEB 操作平台

- - -

# macaca-client

- 一体化的测试体验
- 可定制化和可扩展的 API
<!-- 根据业务场景扩展wd API -->
- 消灭配置

- - -

![macaca-client](http://ww1.sinaimg.cn/mw1024/6d308bd9gw1etit90ka86j20m80gc0uf.jpg)

- - -

[anchor#2] movie

- - -

# Then?

- - -

# Continuous integration

![master-slave](http://ww4.sinaimg.cn/mw1024/6d308bd9gw1etiu13q4syj20m80hnmyb.jpg)

- - -

## 优秀的ci系统

- GitLab-ci
- Jenkins
- Gerrit
- travis-ci

- - -

# macaca-master

- 并发任务
- slave管理
- WEB平台集成
- 沉淀数据、报表

- - -

![macaca-master](http://ww3.sinaimg.cn/mw1024/6d308bd9gw1etxn07kouej20lo0irmyy.jpg)

- - -

- 实现进程控制
- 处理数据存档
- 实现任务调度
- 调度策略

- - -

![task-manager](http://ww3.sinaimg.cn/mw1024/6d308bd9gw1etxpqi85i2j20kr0fl0uu.jpg)

- - -

# macaca-slave

- 接收资源申请
- 配置管理
- 测试框架集成
- 自身socket通信

- - -

- slave状态monitor
- slave条件负载
<!--
集群化管理
-->

- - -

## 将来要做的

- 模拟用户监控平台

<!--
配合服务日志监控
-->

- - -

# Unattended Execution

![](http://ww4.sinaimg.cn/mw1024/6d308bd9gw1etylmslyvdj20k907hjsg.jpg)

- - -

# 至少看上去“全自动”了

- - -

## 一点经验

- 实践认识论 > 方法论 > 实践认识论
- 可测试性高于任何框架、工具

- - -

# Open Source?

- Testerhome.com
- Cnodejs.org
