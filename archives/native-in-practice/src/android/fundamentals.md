# Android-基本组成

- - -

# 基本组件

- - -

# Activity

具有用户界面的单一屏幕

- - -

![activity_lifecycle](http://ww1.sinaimg.cn/large/6d308bd9gw1f2trxa98cmj20e90ifdhn.jpg)

- - -

### 保存 Activity 状态

- - -

![restore_instance](http://ww3.sinaimg.cn/large/6d308bd9gw1f2ts2lkdexj20h509qdhj.jpg)

- - -

# Service

- [services](https://developer.android.com/guide/components/services.html)
- 不提供用户界面

- - -

![service_lifecycle](http://ww4.sinaimg.cn/large/6d308bd9gw1f2trqcb9ujj20at0e3tan.jpg)

- - -

# Broadcast Receiver

- - -

# Content Provider

- - -

# Intent 启动组件

- - -

# AndroidManifest

- 任何用户权限，如互联网访问权限或对用户联系人的读取权限
- 应用使用的 API，声明应用所需的最低 API
- 声明应用使用或需要的硬件和软件功能，如相机、蓝牙服务或多点触摸屏幕
- 应用需要链接的 API 库

- - -

# 声明组件

- Activity 的 <activity> 元素
- 服务的 <service> 元素
- 广播接收器的 <receiver> 元素
- 内容提供程序的 <provider> 元素

- - -

# 应用资源

- `res/drawable/`目录
- i18n `res/values-fr/`
