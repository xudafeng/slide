# iOS-开发环境和工具

- - -

## 开发环境介绍

- Xcode 介绍
- 使用模拟器
- [iOS Developer Library](https://developer.apple.com/library/ios)
- [上手示例](https://github.com/app-bootstrap/ios-app-bootstrap)

- - -

```shell
# open normal workspace
$ open -a Xcode
# open pod project workspace
$ open *.xcworkspace
```

- - -

## xcodebuild

```shell
# 查看xcode的版本号和build版本
$ xcodebuild -version
# 查看系统的所有SDK
$ xcodebuild -showsdks
# 显示工程信息
$ xcodebuild -list
# 构建目标工程
$ xcodebuild -sdk iphonesimulator9.2
# 构建运行
$ xcodebuild -workspace '<WORKSPACE_NAME>' -scheme '<SCHEME_NAME>' -destination id='<DEVICE_UDID>' build
```

- - -

## xcrun

```shell
# 查看模拟器列表
$ xcrun simctl list
# 清除模拟器
$ xcrun simctl erase '<UDID>'
```

- - -

## plist

```shell
$ /usr/libexec/PlistBuddy -c "print CFBundleShortVersionString"
```

- - -

## launchctl

```shell
# list service
$ launchctl list | grep com.apple.iphonesimulator
# kill service
$ launchctl stop com.apple.iphonesimulator.xxx
# yet another kill method
$ pkill -9 -f "Simulator"
```

- - -

## CocoaPods

```shell
# 安装CocoaPods
$ sudo gem install cocoapods
# 安装依赖
$ pod install --verbose --no-repo-update
# 源变更
$ gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
$ gem sources -l
```

- - -

## Carthage

```shell
# 安装
$ brew install carthage
# 更新依赖
$ carthage update --platform iOS --verbose
```

- - -

## Framework

[Logger.swift sample](https://github.com/xudafeng/Logger.swift)
