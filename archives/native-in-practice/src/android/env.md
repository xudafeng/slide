# Android-开发环境和工具

- - -

## 开发环境介绍

- [上手示例](https://github.com/xudafeng/android-app-bootstrap)

- - -

## SDK Manager

- 正式版
- 预览版
- 模拟器镜像
- 兼容扩展库
- CPU 虚拟化支持

- - -

## ADB

- [macaca-adb](https://github.com/macacajs/macaca-adb)

- - -

```shell
# install uninstall pull push shell
$ adb logcat -s TAG
```

- - -

## Emulators

- - -

Advanced RISC Machine 7 vs X86

- - -

Harvard architecture

von Neumann architecture

- - -

```shell
$ android list avd
$ emulator -avd $name
```

- - -

## DDMS

```shell
$ ddms
```

- - -

## CM Tools

- ant, [ant-lite](https://github.com/xudafeng/ant-lite)
- gradle
- maven

- - -

## ARM

[microarchitectures](https://en.wikipedia.org/wiki/List_of_ARM_microarchitectures)

- - -

## ABI

**Application Binary Interface**

> armeabi，armeabi-v7a，x86，mips，arm64-v8a，mips64，x86_64

- - -

## NDK

**Native Development Kit**

> A set of tools that allow you to leverage C and C++ code in your Android apps

- - -

## JNI

Java Native Interface

- - -

## *.jar

- - -

## *.arr

包括资源文件

- - -

## *.so

- - -

## Remote dependencies

Add the following line to your build.gradle file:

```
dependencies {
    compile 'com.facebook.fresco:fresco:0.10.0'
}
```

```
allprojects {
    repositories {
        jcenter()
        mavenCentral()
    }
}
```

- - -

## [AndFix](https://github.com/alibaba/AndFix)
