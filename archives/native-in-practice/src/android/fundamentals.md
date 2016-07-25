# Android-基本组成

- - -

## 基本组件

- - -

## Activity

具有用户界面的单一屏幕

- - -

<img data-src="http://ww1.sinaimg.cn/large/6d308bd9gw1f2trxa98cmj20e90ifdhn.jpg" />

- - -

```
启动: onCreate() —> onStart() —> onResume()
压后台: onPause() —> onStop()
重新激活: onRestart() —> onStart() —> onResume()
锁屏: onPause()、onResume()
```

- - -

<img data-src="http://ww2.sinaimg.cn/large/6d308bd9gw1f51kzbxghgj20ie087gml.jpg" />

- - -

[unlock-apk](https://github.com/xudafeng/unlock-apk)

- - -

### 保存 Activity 状态

- onSaveInstanceState
- onRestoreInstanceState

- - -

<img data-src="http://ww3.sinaimg.cn/large/6d308bd9gw1f2ts2lkdexj20h509qdhj.jpg" />

- - -

### Activity Launch mode

- standard
- singleTop
- singleTask
- singleInstance

- - -

## Service

- [services](https://developer.android.com/guide/components/services.html)
- 不提供用户界面
- 与Activity都运行在UI主线程

- - -

<img data-src="http://ww4.sinaimg.cn/large/6d308bd9gw1f2trqcb9ujj20at0e3tan.jpg" />

- - -

## Broadcast Receiver

- - -

## Content Provider

- 多进程
- 对外提供数据
- 例如联系人，短信

- - -

## Intent 启动组件

- - -

## Intent传递数据(thisActivity)

```java
Intent intent = new Intent();
intent.setClass(thisActivity,thatActivity.class);
intent.putExtra(key, value);
startActivity(intent);
```

- - -

## Intent获取数据(thatActivity)

```java
Intent intent = getIntent();
value = intent.getStringExtra(key);
```

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

- - -

# 文件系统

```
/sdcard              SD 卡 FAT32 文件系统挂载目录
/etc => /system/etc
/system/lib          绝大部分的系统 so
/system/app          应用目录
/system/framework    核心程序或 Java 类库
/data/local/tmp      临时目录
/data/data           每个软件的包名来命名，配置和存储文件
```
