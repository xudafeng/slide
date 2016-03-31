![upup](http://ww4.sinaimg.cn/large/6d308bd9jw1f2lw0aduawj20nm08rmyy.jpg)

## 端在变革

- WEB 演进越来越快
- 云的出现让端更清晰
- 既要迎合技术栈的更新频率，又要迎合市场

- - -

## 移动带来非常多的挑战

- 更敏捷
- 更自动化

- - -

[![startserver](http://ww2.sinaimg.cn/mw1024/6d308bd9gw1ethi9lx1k2j205k05kt8o.jpg)](https://github.com/xudafeng/startserver)

# 尽快“自动化”起来！

写个静态服务器搞定。。。

- - -

![](http://ww3.sinaimg.cn/mw1024/6d308bd9gw1ethj7x0yl0j20bj09mmx6.jpg)

- HTTP 或网关层面实现
- 代理端注入测试套件 [testsuit](https://github.com/startserver/startserver-testsuit)
- 代理端插入测试脚本

- - -

[anchor#1] movie

- - -

# 满足需求么？

- - -

- 数据环境不满足
- 环境因素导致的上下文差异
- 代码侵入 APP

- - -

# 自动化本质是软件开发

- - -

![](http://ww3.sinaimg.cn/mw1024/6d308bd9gw1etpjszhnpij21670m44dz.jpg)

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

### 版本差异 pic#1

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

- - -

# macaca-driver

- [WebDriver Wire Protocol](https://w3c.github.io/webdriver/webdriver-spec.html)
- [Selenium](https://github.com/SeleniumHQ/selenium)

- - -

# Nodejs 成为首要技术选型

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
- 0配置

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
- 节点管理
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

- tcp通信
- 配置管理
- 测试框架集成
- slave条件负载

- - -

# Unattended Execution

![](http://ww4.sinaimg.cn/mw1024/6d308bd9gw1etylmslyvdj20k907hjsg.jpg)

- - -

# Open Source?

- [Github/Macaca](https://github.com/macacajs)
- Testerhome.com
- Cnodejs.org

